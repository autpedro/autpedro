B({
id:"b10", titulo:"Proteção: dispositivos, curvas e coordenação",
sub:"Disjuntor, DR, fusível, seccionador, relés de sobrecorrente e de falha de disjuntor (50BF), TCs e leitura de curvas tempo × corrente.",
objetivos:["Saber o que cada dispositivo protege (sobrecarga, curto, fuga)","Aplicar I<sub>B</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub> da NBR 5410","Escolher fusível de motor pela curva (corrente e tempo de partida)","Converter corrente primária em múltiplo do ajuste do relé e ler o tempo na curva","Ajustar relé térmico de motor e relé de sobrecorrente de transformador"],
qs:["11-39","11-36","23-30","18-21","18-28","18-32","18-49","23-54","23-29","23-32","18-47"],
aula:
"<h3>1. Quem protege contra o quê</h3>"+
"<ul><li><b>Disjuntor termomagnético:</b> parte térmica (bimetal) contra SOBRECARGA; parte magnética contra CURTO-CIRCUITO. Rearmável.</li><li><b>DR (diferencial residual):</b> compara a soma das correntes dos condutores vivos; atua com corrente de FUGA à terra (proteção contra choque e incêndio). Não protege contra sobrecarga.</li><li><b>Fusível:</b> elo que funde (não é bimetálico); atua em sobrecarga e curto conforme a classe (gG/gL geral, aM motor).</li><li><b>Seccionador:</b> manobra SEM carga (só correntes desprezíveis); garante isolamento visível. Seccionador de aterramento: após abrir, aterra os circuitos para a manutenção.</li><li><b>Relé 50/51:</b> sobrecorrente instantânea (50) e temporizada (51). <b>50BF:</b> falha de disjuntor: se o disjuntor não abriu, manda abrir os disjuntores ADJACENTES.</li></ul>"+
TRAP("nunca se coloca dispositivo de seccionamento ou proteção no condutor de proteção (PE).")+
"<h3>2. Coordenação condutor × proteção (NBR 5410)</h3>"+
F("I<sub>B</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub> &nbsp;&nbsp; e &nbsp;&nbsp; I<sub>2</sub> ≤ 1,45·I<sub>z</sub><br>I<sub>B</sub> = corrente de projeto; I<sub>n</sub> = corrente nominal do dispositivo; I<sub>z</sub> = capacidade de condução do cabo")+
"<h3>3. Lendo curvas tempo × corrente</h3>"+
OL(["Converta tudo para o eixo do gráfico (ampères, ou múltiplos de I<sub>n</sub> ou do ajuste).","Escalas logarítmicas: entre 1 e 10 as divisões não são iguais (2 fica a 30% da década, 5 a 70%).","<b>Fusível de motor:</b> marque o ponto (I<sub>partida</sub>, t<sub>partida</sub>). O fusível adequado é o MENOR cuja curva passa à direita/acima desse ponto (não funde na partida).","<b>Disjuntor e choque:</b> a corrente de falta tem de ficar numa região em que o tempo MÁXIMO de atuação (borda superior da faixa) seja menor que o tempo permitido.","<b>Relé com TC:</b> I<sub>sec</sub> = I<sub>prim</sub>/RTC; múltiplo = I<sub>sec</sub>/I<sub>ajuste</sub>; leia o tempo na curva."])+
"<h3>4. Ajustes típicos</h3>"+
"<ul><li><b>Relé térmico de motor:</b> até 125% da corrente nominal (motor com fator de serviço ≥ 1,15 ou elevação de temperatura ≤ 40 °C); 115% nos demais.</li><li><b>Relé de transformador:</b> I<sub>n</sub> do lado em que está o TC × fator de sobrecarga admissível, depois dividido pela RTC.</li></ul>",
exemplo:{
 titulo:"Exemplo: tempo de atuação de um relé 51",
 enun:P("Um relé de sobrecorrente temporizado é alimentado por um TC 200-5 A. A corrente de ajuste (pick-up) secundária é 4 A. Ocorre uma falta de 1200 A no primário. A curva do relé dá t = 0,14·0,2/(M<sup>0,02</sup> − 1) segundos (curva normal inversa IEC, dial 0,2), com M = múltiplo do ajuste."),
 passos:[
  {p:"Qual a corrente no secundário do TC (em A)?", v:30, r:"RTC = 200/5 = 40 ⇒ I<sub>sec</sub> = 1200/40 = <b>30 A</b>.", dica:"I<sub>sec</sub> = I<sub>prim</sub>/RTC."},
  {p:"Qual o múltiplo M do ajuste?", v:7.5, r:"M = 30/4 = <b>7,5</b>.", dica:"M = I<sub>sec</sub>/I<sub>ajuste</sub>."},
  {p:"Qual o tempo de atuação (em s)? (2 casas)", v:0.6852, tol:0.03, r:"7,5<sup>0,02</sup> = e<sup>0,02·ln 7,5</sup> = e<sup>0,0403</sup> = 1,0411 ⇒ t = 0,028/0,0411 = <b>0,68 s</b>.", dica:"Calcule 7,5<sup>0,02</sup> = e<sup>0,02·ln 7,5</sup> (ln 7,5 ≈ 2,015)."}
 ],
 fecho:"Na prova a curva vem em gráfico (18-49): o roteiro é o mesmo, só que no fim você lê o tempo no papel log-log."
}
});

Q("11-39",{
enun:P("O disjuntor termomagnético e o dispositivo à corrente Diferencial Residual (DR) são equipamentos de proteção muito utilizados em instalações elétricas de baixa tensão. As suas atuações ocorrem, para o disjuntor e para o DR, respectivamente:"),
ops:["disjuntor: corrente de fuga e sobrecorrente; DR: corrente de curto-circuito","disjuntor: corrente de curto-circuito e sobrecorrente; DR: corrente de fuga","disjuntor: corrente de curto-circuito e corrente de fuga; DR: sobrecorrente","disjuntor: corrente de curto-circuito; DR: corrente de fuga e sobrecorrente","disjuntor: sobrecorrente; DR: corrente de fuga e corrente de curto-circuito"], gab:"B",
dicas:["O disjuntor tem dois elementos: térmico e magnético. Cada um cuida de um tipo de sobrecorrente.","O DR mede a DIFERENÇA entre a corrente que vai e a que volta. Que defeito cria essa diferença?"],
erros:{
A:"Corrente de fuga (pequena, para a terra) não é detectada por um disjuntor comum; e o DR não age em curto entre fases.",
C:"O disjuntor não sente correntes de fuga de miliampères; o DR não protege contra sobrecorrente.",
D:"O DR não detecta sobrecarga: numa sobrecarga, a corrente que vai é igual à que volta. Ele só vê diferença (fuga).",
E:"O DR não atua num curto entre fase e neutro, porque a corrente que vai continua igual à que volta."},
res:P("Disjuntor termomagnético: térmico ⇒ sobrecarga; magnético ⇒ curto-circuito. DR: corrente diferencial residual (fuga à terra). Alternativa <b>B</b>.")
});

Q("11-36",{
enun:P("Em relação aos dispositivos de proteção, seccionamento e comando de circuitos empregados em instalações elétricas, de acordo com as Normas em vigor e a disponibilidade dessas unidades no mercado, afirma-se que o(s)"),
ops:["seccionador é um dispositivo de manobra que, obrigatoriamente, tem de suportar correntes residuais desprezíveis por ocasião de sua abertura ou fechamento.","fusíveis são compostos por um dispositivo bimetálico que se flexiona no caso de uma corrente acima de determinado valor, provocando o imediato desencaixe de sua base e interrupção do circuito.","disjuntor deve ser substituído sempre que for acionado devido a curto-circuito ou sobrecarga.","disjuntores em caixa moldada são fabricados exclusivamente como modelos unipolares.","disjuntores de uma instalação de baixa tensão são usados nos fios (ou cabos) neutro e de proteção (terra) dos circuitos."], gab:"A",
dicas:["Qual dispositivo é feito para abrir o circuito praticamente sem corrente?","Bimetal é parte do disjuntor (elemento térmico), não do fusível."],
erros:{
B:"O fusível tem um ELO que se funde. O bimetal que se flexiona é o elemento térmico do disjuntor.",
C:"A vantagem do disjuntor é justamente ser rearmável. Ele só é trocado se danificado.",
D:"Disjuntores em caixa moldada são, na maioria, tripolares (também existem bi e tetrapolares).",
E:"Não se instala dispositivo de proteção no condutor de proteção (PE), e o neutro só é seccionado em condições específicas."},
res:P("O seccionador manobra sem carga: só estabelece ou interrompe correntes desprezíveis. Alternativa <b>A</b>.")
});

Q("23-30",{
enun:P("Deve haver coordenação entre os dispositivos de proteção e os condutores contra sobrecarga. Considere I<sub>d</sub> a corrente nominal do dispositivo de proteção, I<sub>c</sub> a capacidade de condução de corrente dos condutores e I<sub>L</sub> a corrente de projeto para atendimento da carga de um circuito. A relação que deve ser estabelecida entre essas correntes é"),
ops:["I<sub>d</sub> ≤ I<sub>c</sub> ≤ I<sub>L</sub>","I<sub>d</sub> ≤ I<sub>L</sub> ≤ I<sub>c</sub>","I<sub>c</sub> ≤ I<sub>d</sub> ≤ I<sub>L</sub>","I<sub>c</sub> ≤ I<sub>L</sub> ≤ I<sub>d</sub>","I<sub>L</sub> ≤ I<sub>d</sub> ≤ I<sub>c</sub>"], gab:"E",
dicas:["O dispositivo não pode atuar com a corrente normal da carga.","E deve atuar antes que o cabo passe da sua capacidade."],
erros:{
A:"Se I<sub>d</sub> ≤ I<sub>L</sub>, o disjuntor desarma com a carga normal. E o cabo não pode ter capacidade menor que a carga.",
B:"I<sub>d</sub> ≤ I<sub>L</sub> faria o dispositivo atuar em operação normal.",
C:"Cabo com capacidade menor que o dispositivo (I<sub>c</sub> ≤ I<sub>d</sub>) fica desprotegido: aquece antes de o dispositivo atuar.",
D:"Esta ordem deixaria o cabo menor que a própria carga."},
res:P("NBR 5410: I<sub>B</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub>, isto é, <b>I<sub>L</sub> ≤ I<sub>d</sub> ≤ I<sub>c</sub></b>.")
});

Q("18-21",{
enun:P("Um engenheiro está desenvolvendo um projeto de partida de um motor de indução trifásico com corrente nominal de 10 A, I<sub>p</sub>/I<sub>n</sub> = 10, cujo tempo de partida estimado é de 10 s. O fusível a ser empregado possui a curva característica corrente/tempo mostrada. Considerando os dados da curva e as características do motor, o fusível a ser empregado deverá ser de quantos ampères?"),
fig:"f18_21", ops:["10","12","16","20","25"], gab:"D",
dicas:["Ponto de partida: I<sub>p</sub> = 10 × 10 = 100 A durante 10 s.","Marque (100 A; 10 s) no gráfico. O fusível certo é o MENOR cuja curva passa à direita do ponto (não funde durante a partida)."],
erros:{
A:"Um fusível de 10 A funde em menos de 1 s com 100 A. Ele interromperia toda partida.",
B:"O fusível de 12 A, com 100 A, funde bem antes de 10 s. Confira a curva no ponto (100 A; 10 s).",
C:"A curva de 16 A cruza a linha de 10 s em cerca de 80 A: com 100 A ele fundiria antes do fim da partida.",
E:"O de 25 A não funde, mas não é o menor que atende. A curva de 20 A cruza 10 s em torno de 100 A, ainda à direita do ponto de partida. Escolhe-se o menor fusível que suporta a partida, para proteger melhor."},
res:OL(["I<sub>p</sub> = 10 × 10 = 100 A; t<sub>p</sub> = 10 s.","Na linha de 10 s, as curvas cruzam aproximadamente: 16 A ≈ 80 A; 20 A ≈ 100 A; 25 A ≈ 125 A.","O menor fusível que não funde com 100 A durante 10 s é o de <b>20 A</b>. (Questão de leitura gráfica: o critério é o que importa.)"])
});

Q("18-28",{
enun:P("Relés de sobrecorrente são empregados para proteger motores contra sobrecarga. Em um projeto de proteção de um motor de indução trifásico, 220 V, 17,3 kW, fator de potência 0,8 e rendimento 0,9, que tem a capacidade de operar com uma elevação de temperatura admissível de 40 °C, o valor aproximado da máxima corrente de ajuste do relé, em ampères, é"),
ops:["41","47","51","63","79"], gab:"E",
dicas:["Corrente nominal: I<sub>n</sub> = P/(√3·V·FP·η).","Motor com elevação de temperatura ≤ 40 °C admite ajuste do relé de sobrecarga de até 125% de I<sub>n</sub>."],
erros:{
A:"Valor abaixo da corrente nominal: o relé desarmaria em operação normal. Confira I<sub>n</sub> = 17 300/(√3·220·0,8·0,9).",
B:"Abaixo da corrente nominal (≈ 63 A). O ajuste máximo é maior que I<sub>n</sub>.",
C:"51 A está abaixo da corrente nominal. Talvez o rendimento tenha entrado multiplicando em vez de dividindo.",
D:"63 A é a corrente nominal. A pergunta é o AJUSTE MÁXIMO, que pode chegar a 125% de I<sub>n</sub> para esse motor."},
res:OL(["I<sub>n</sub> = 17 300/(√3·220·0,8·0,9) = 17 300/274,4 ≈ 63 A.","Elevação de temperatura de 40 °C ⇒ ajuste até 1,25·I<sub>n</sub>.","1,25 × 63 ≈ <b>79 A</b>."])
});

Q("18-32",{
enun:P("O esquema de aterramento de um sistema elétrico é o TN. Um usuário foi submetido a um choque por contato indireto. Para a intensidade desse choque, o tempo máximo de exposição deve ser de 6 segundos. A curva do disjuntor de 20 A do circuito é a apresentada (múltiplos de I<sub>n</sub> × tempo). Para que o usuário tenha a sua integridade salvaguardada, a corrente de falta deve assumir um valor, em ampères, aproximadamente igual a"),
fig:"f18_32", ops:["40","50","60","80","110"], gab:"E",
dicas:["O disjuntor tem uma faixa (mínimo e máximo tempo). Para garantir a atuação em até 6 s, use a borda SUPERIOR da faixa (tempo máximo).","Converta cada alternativa em múltiplo de 20 A e veja o tempo máximo na curva."],
erros:{
A:"40 A = 2 × I<sub>n</sub>: na borda superior, o tempo chega a minutos. Muito acima de 6 s.",
B:"50 A = 2,5 × I<sub>n</sub>: o tempo máximo ainda é de dezenas de segundos.",
C:"60 A = 3 × I<sub>n</sub>: a borda superior está em torno de 20 s.",
D:"80 A = 4 × I<sub>n</sub>: a borda superior passa de 6 s (por volta de 10 s). Lembre de usar o tempo MÁXIMO da faixa."},
res:OL(["Na borda superior da faixa, 6 s corresponde a cerca de 5 × I<sub>n</sub>; acima disso o tempo máximo fica em poucos segundos (e acima de 10 × I<sub>n</sub> é instantâneo).","110 A = 5,5 × I<sub>n</sub>: tempo máximo ≈ 3 s &lt; 6 s.","Única alternativa que garante a atuação: <b>110 A</b>."])
});

Q("18-49",{
enun:P("Considere um ramal de distribuição de 13,8 kV protegido por um relé de sobrecorrente temporizado com a curva mostrada. A relação do TC é 100:5 e a corrente de ajuste secundária da unidade temporizada é 3 A. Caso ocorra uma falta bifásica no ramal de 480 A, em quantos segundos, a partir do instante da falta, o relé deverá atuar?"),
fig:"f18_49", ops:["3","0,7","0,4","0,3","0,1"], gab:"C",
dicas:["Corrente secundária: 480/(100/5) = 480/20.","Múltiplo = I<sub>sec</sub>/3. Leia o tempo na curva."],
erros:{
A:"3 s corresponde a um múltiplo perto de 2. Confira a RTC: 100:5 = 20, então I<sub>sec</sub> = 24 A.",
B:"0,7 s corresponde a cerca de 5 × o ajuste, que sairia de 480/100 = 4,8 (você dividiu pela corrente primária do TC, sem a relação 100/5).",
D:"0,3 s corresponde a 10 × o ajuste. Refaça: 24 A/3 A.",
E:"0,1 s está no fim da curva (mais de 25 ×). Confira o múltiplo: 24/3 = 8."},
res:OL(["RTC = 100/5 = 20 ⇒ I<sub>sec</sub> = 480/20 = 24 A.","Múltiplo = 24/3 = 8.","Na curva, 8 × o ajuste ≈ <b>0,4 s</b>."])
});

Q("23-54",{
enun:P("A equipe de engenharia deverá ajustar um relé de sobrecorrente de fase instalado no lado de alta tensão de um transformador de 2500√3 kVA, 40 kV – 200 V, Δ–Y. O transformador admite sobrecarga de 20%, e o TC empregado no sistema é de 100:5 A. A máxima corrente de sobrecarga vista pelo relé, em A, é"),
ops:["1,25","2,50","3,25","3,75","4,15"], gab:"D",
dicas:["I<sub>n,AT</sub> = S/(√3·V) = 2500√3 kVA/(√3·40 kV).","Multiplique por 1,2 e divida pela RTC = 20."],
erros:{
A:"1,25 A: confira a corrente nominal no lado de 40 kV: 2500√3/(√3·40) = 62,5 A.",
B:"2,50 A ≈ 50/20: a corrente de 62,5 A ainda precisa ser multiplicada por 1,2 (sobrecarga).",
C:"3,25 A não sai de 62,5 × 1,2/20. Refaça.",
E:"4,15 A: confira se não usou √3 a mais ou a tensão de linha errada."},
res:OL(["I<sub>n</sub> = 2500√3/(√3·40) = 62,5 A.","Com 20% de sobrecarga: 75 A.","Vista pelo relé: 75/20 = <b>3,75 A</b>."])
});

Q("23-29",{
enun:P("Os relés de proteção são parte integrante das subestações. O relé de proteção com função de falha de disjuntor, com identificação 50BF, atua comandando"),
ops:["com retardo a abertura de disjuntor(es) para, assim, ser realizado ensaio de coordenação e de seletividade de proteção no trecho do ramal.","com avanço a abertura de disjuntor a jusante do circuito para, assim, ser evitada falha de coordenação e de seletividade de proteção no trecho do ramal.","o religamento de disjuntor(es), após detecção de atuação indevida de abertura de circuito, devido à corrente de inrush.","a abertura do(s) disjuntor(es) adjacente(s) ao disjuntor em que tenha sido detectada falha no processo de abertura de circuito.","o fechamento do disjuntor de by-pass ao disjuntor em que tenha sido detectada falha no processo de fechamento de circuito."], gab:"D",
dicas:["BF = breaker failure. O que fazer se o disjuntor recebeu ordem de abrir e a corrente continua circulando?"],
erros:{
A:"O 50BF não serve para ensaio. Ele age quando o disjuntor não abriu após um trip.",
B:"O 50BF não age a jusante \"com avanço\"; ele isola a falta abrindo os disjuntores ao redor do que falhou.",
C:"Religamento é a função 79; restrição de inrush é outra lógica (2ª harmônica).",
E:"Falha na ABERTURA (não no fechamento) é que importa, e a resposta é abrir os adjacentes, não fechar um by-pass."},
res:P("Se, após o comando de abertura, o disjuntor não interrompe a corrente (detectada pelo elemento 50 após um tempo), o 50BF manda abrir os <b>disjuntores adjacentes</b> para isolar a falta.")
});

Q("23-32",{
enun:P("Os seccionadores de aterramento, ou seccionadores com lâmina de aterramento, utilizam a lâmina de aterramento, após a abertura dos seccionadores, para"),
ops:["isolar as carcaças dos seccionadores da malha de terra da subestação, extinguindo o arco elétrico formado entre a fase e o potencial terra da subestação.","conectar ao potencial terra os circuitos associados aos dispositivos seccionados, garantindo a realização de manutenção com segurança.","conectar o sistema de proteção contra descargas atmosféricas à malha de terra da subestação, evitando a exposição dos componentes à incidência de raios.","separar duas ou mais malhas de terra da subestação, permitindo a operação em diferentes esquemas de aterramento.","enviar o sinal de abertura dos seccionadores aos sistemas auxiliares de proteção da subestação, permitindo o monitoramento do estado operativo dos seccionadores."], gab:"B",
dicas:["Depois de desligar um trecho para manutenção, ele pode ficar com carga capacitiva ou receber tensão induzida. O que se faz para trabalhar com segurança?"],
erros:{
A:"Seccionador não extingue arco; e a lâmina de aterramento liga ao terra, não isola.",
C:"O SPDA tem descidas próprias para a malha; não usa a lâmina do seccionador.",
D:"A lâmina não separa malhas de terra; ela conecta o circuito desligado à terra.",
E:"Sinalização de estado é feita por contatos auxiliares, não pela lâmina de aterramento."},
res:P("Após a abertura, a lâmina aterra o trecho desenergizado, descarregando cargas residuais e escoando tensões induzidas: segurança para a manutenção. Alternativa <b>B</b>.")
});

Q("18-47",{
enun:P("Considere a figura, que mostra um trecho de uma rede de distribuição aérea. O dispositivo destacado na figura é um(a)"),
fig:"f18_47", ops:["para-raio","disjuntor","religador","chave-faca","chave-fusível"], gab:"E",
dicas:["Repare no isolador de porcelana com um tubo (cartucho) articulado e um olhal para vara de manobra.","Ela fica no ramal do transformador de distribuição, protegendo-o."],
erros:{
A:"O para-raio é um corpo cilíndrico com aletas, sem cartucho articulado; na foto, os para-raios são os elementos escuros com aletas.",
B:"Disjuntores de média tensão ficam em subestações ou cubículos, não no poste em forma de cartucho aberto.",
C:"O religador é um equipamento em caixa (tanque) com controle eletrônico, bem maior.",
D:"A chave-faca é uma lâmina de cobre sem cartucho de fusível."},
res:P("O detalhe mostra o isolador com o cartucho porta-fusível articulado e o olhal de manobra: <b>chave-fusível</b> (chave Matheus), que protege o transformador de distribuição.")
});
