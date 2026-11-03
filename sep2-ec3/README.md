# EC3: Análise de Contingências (Análise de SEP II, 2026.2)

Rotina em Python para o **Estudo de Caso 3**. Ela parte da rotina de Newton-Raphson do EC2 e acrescenta os blocos do EC3.

| Arquivo | Conteúdo |
|---|---|
| `RotinaCaso3.ipynb` | Notebook principal (EC2 + EC3), já executado e com todas as saídas |
| `RotinaCaso3.py` | O mesmo código em script: `python RotinaCaso3.py` |
| `RotinaCaso2.ipynb` | Rotina original do EC2, sem alterações (referência) |
| `dados_sistema13B_EC2.txt` | Dados de entrada: o cenário do EC2 |
| `resultados_EC3/` | Tabelas (.csv com `;`), gráficos (.png) e arquivos de dados gerados |

Para rodar no Colab: faça upload do `.ipynb` e do `dados_sistema13B_EC2.txt` e use *Executar tudo*. O Colab já tem `numpy`, `pandas`, `scipy` e `matplotlib`.

## O que cada bloco novo faz

1. **EC3-1 Configurações.** Define a LT 9-10 em manutenção e os limites:
   - operação normal: V de 0,95 a 1,05 pu e S até 100 % da CAP;
   - emergência: V de 0,90 a 1,05 pu e S até 115 % da CAP;
   - geração: PG entre CGmin e CGmax;
   - controles: tape de 0,9 a 1,1, defasador de ±30°, Bsh11 de 0 a 0,8 pu e V dos geradores de 0,95 a 1,05 pu.
2. **EC3-2 Utilitários.** Desliga circuitos pela coluna `LIG(L)DESL(D)`, detecta ilhamento e roda o NR do EC2 sem imprimir as iterações. Também lista as violações de tensão, de carregamento (S) e de PG.
3. **EC3-3 FP linearizado com perdas ôhmicas.**
   - Fluxo no circuito: `P_km = (θk − θm + φ)/x`.
   - Perdas de cada circuito: `g·(θkm+φ)²`. Metade vai como carga para cada barra terminal, e o cálculo se repete até convergir.
   - Validado contra o NR, com tabela comparativa.
4. **EC3-4 Índice de severidade.**
   - `ID_k = Σ Sobrec_i^k`, com `Sobrec = (|P| − Pmax)/Pmax`.
   - O índice é calculado com `Pmax = CAP` (nota 2 do EC3) e também com `1,15·CAP` (Obs. 1.2).
   - As contingências são ordenadas pelo índice.
5. **EC3-5 Análise N-1 não linear (NR).** Avalia o caso base com limites normais e cada contingência de circuito com limites de emergência. É a verificação do item 2.2.4.1.1 do Submódulo 2.3.
6. **EC3-6 Controle, etapa 1: `linprog` no modelo CC.**
   - É um FPO-CC com restrições de segurança, com redespacho e defasador.
   - Usa as sensibilidades PTDF e PSDF de cada topologia N-1.
   - Minimiza `Σ|ΔPG|`. O módulo vira linear com o truque `Δ = Δ⁺ − Δ⁻`.
7. **EC3-7 Controle, etapa 2: `linprog` com sensibilidades CA (programação linear sucessiva).**
   - Controles disponíveis: PG das PV, V dos geradores, tapes 5-8/6-9/7-10, defasador 7-10 e Bsh da barra 11.
   - Em cada iteração, o NR roda em todos os cenários, as sensibilidades são calculadas por diferenças finitas e o `linprog` resolve o problema linearizado.
   - A iteração para quando o NR não acusa mais nenhuma violação.
8. **EC3-8 Saídas.** Gera as tabelas, os gráficos e os arquivos de dados (mesmo formato da entrada) para conferir no Anarede/PowerWorld.

## Resultados obtidos

### Diagnóstico com a LT 9-10 fora (questão 1)

- **Ordenação pelo ID.** Só a contingência **2-3** tem ID > 0. Ela leva o circuito 6-7 a 110,9 % no modelo CC (ID(100 %) = 0,1095). Com o limite de 115 %, o ID é zero em todas as contingências.
- **NR, carregamento.** Nenhum circuito passa de 115 %. O pior caso é a contingência 2-3, com 6-7 a 108,1 %.
- **NR, tensões.** Todas ficam dentro da faixa de emergência. A menor é V11 = 0,9235 pu, na contingência 8-11.
- **NR, geração.** O **gerador da barra 3 (SW) passa de 110 MW em todos os 20 cenários**: 115,3 MW no caso base e até 118,2 MW na contingência 1-2.
- **Conclusão.** O sistema **não atende** ao critério N-1.

Observação: o gerador 3 já estava em 116,9 MW no próprio cenário do EC2, mas o diagnóstico do EC2 não verificava o limite de potência ativa.

### Ações de controle (questão 2)

Arquivo: `resultados_EC3/acoes_de_controle.csv`

| Controle | Valor do EC2 | Proposto |
|---|---|---|
| PG1 | 90,00 MW | **95,07 MW** |
| PG7 | 60,00 MW | **64,06 MW** |
| PG3 (SW) | 115,3 MW | 106,2 MW no caso base e no máximo 109,7 MW em contingência |
| Demais controles | — | sem alteração |

Com essas ações, a verificação N-1 pelo NR fica com **0 violações em todos os 20 cenários**.

### Variante com tensão de emergência mais conservadora

Se o grupo preferir 0,95 pu como mínimo também em emergência (`V_MIN_EMERG = 0.95` no bloco EC3-1), a contingência 8-11 passa a violar a tensão. Nesse caso a rotina inclui automaticamente o ajuste do **compensador da barra 11: Bsh11 de 0,01 para 0,103 pu**, junto com o mesmo redespacho.

## Para quem for fazer o Anarede/PowerWorld (questão 3)

- `resultados_EC3/dados_sistema13B_EC3_LT9-10_manutencao.txt` é o diagnóstico inicial: cenário do EC2 com a LT 9-10 desligada.
- `resultados_EC3/dados_sistema13B_EC3_controlado.txt` é o sistema com as ações propostas.
- Compare com `N-1_NR_antes.csv` e `N-1_NR_depois.csv`. Eles trazem V mínima e máxima, maior carregamento, PG da SW e perdas de cada contingência.
