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

1. **EC3-1 Configurações.**
   - **Ponto de partida = cenário FINAL do EC2** (Relatório 02): defasador 7-10 em 0°, PG13 = 40 MW e Vesp das barras 1, 3, 4 e 7 em 1,02 pu. A rotina aplica esses ajustes sobre o arquivo de dados e confere o resultado: PG3 = 95,73 MW e perdas de 4,18 MW, iguais ao relatório.
   - LT 9-10 em manutenção (marcada como `D`).
   - Faixas de tensão **por nível**, as mesmas do EC2 (ONS, Submódulo 2.3):

     | Nível | Normal (caso base) | Emergência (contingência) |
     |---|---|---|
     | 500 kV (barras 1–7) | 1,00 a 1,10 pu | 0,95 a 1,10 pu |
     | 230 kV (barras 8–13) | 0,95 a 1,05 pu | 0,90 a 1,05 pu |

   - Carregamento: S até 100 % da CAP no caso base e até 115 % em contingência. Geração: PG entre CGmin e CGmax.
   - Controles: tape de 0,9 a 1,1, defasador de ±30°, Bsh11 de 0 a 0,8 pu e V dos geradores dentro da faixa normal do nível da barra.
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

- **Índice de severidade (FP CC com perdas).** O ID é **zero em todas as 19 contingências**, tanto com 100 % quanto com 115 % da CAP. As mais severas, pelo maior carregamento, são **2-3** (1-2 a 95,8 %) e **1-2** (2-3 a 95,3 %).
- **NR, carregamento e geração.** Nenhum circuito passa de 115 % (o maior é 96,8 %) e o PG3 fica entre 94,96 e 99,28 MW (limite de 110 MW).
- **NR, tensões.** Já no caso base a **barra 9 fica em 1,0493 pu**, com folga de só 0,0007 pu. Em **6 contingências** a barra 9 passa de 1,05 pu:

  | Contingência | V9 (pu) |
  |---|---|
  | 8-9 | 1,0553 |
  | 9-12 | 1,0546 |
  | 2-3 | 1,0516 |
  | 1-4 | 1,0512 |
  | 3-7 | 1,0501 |
  | 11-12 | 1,0501 |

- **Conclusão.** O sistema **não atende** ao critério N-1 do item 2.2.4.1.1. O problema é de sobretensão, não de carregamento, e por isso o ID (que só mede fluxo) não o detecta. Daí a exigência da Obs. 2.2 de propor as ações com o fluxo não linear.

### Ações de controle (questão 2)

Arquivo: `resultados_EC3/acoes_de_controle.csv`

- **Etapa 1 (linprog CC).** Não propõe nenhum redespacho nem ajuste do defasador, porque não há sobrecarga de fluxo a eliminar.
- **Etapa 2 (linprog + NR).** Uma única ação basta: **tape do trafo 6-9 de 0,950 para 0,957 pu**. Com tape menor que 1, o trafo eleva a tensão do lado de 230 kV; aproximar o tape de 1 reduz V9.
- **Verificação final (NR).** **0 violações em todos os 20 cenários**. V9 no caso base fica em 1,0432 pu, e a maior tensão em contingência fica em 1,0482 pu (contingência 8-9). O reativo dos geradores fica dentro de −70 a +90 MVAr em todos os cenários.

Isso é coerente com o Relatório 02, que já citava o tape do 6-9 como alternativa para conter a tensão da barra 9.

## Para quem for fazer o Anarede/PowerWorld (questão 3)

- `resultados_EC3/dados_sistema13B_EC3_LT9-10_manutencao.txt` é o diagnóstico inicial: cenário do EC2 com a LT 9-10 desligada.
- `resultados_EC3/dados_sistema13B_EC3_controlado.txt` é o sistema com as ações propostas.
- Compare com `N-1_NR_antes.csv` e `N-1_NR_depois.csv`. Eles trazem V mínima e máxima, maior carregamento, PG da SW e perdas de cada contingência.
