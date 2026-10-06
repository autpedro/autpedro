B({
id:"b09", titulo:"Componentes simétricas e curto-circuito",
sub:"Operador a, matrizes de transformação, redes de sequência, tipos de falta, contribuições ao curto e ligações de transformador na sequência zero.",
objetivos:["Converter fasores de fase em componentes simétricas e vice-versa","Reconhecer o tipo de falta pelas condições de contorno","Calcular corrente de falta trifásica e fase-terra em pu e em A","Montar a rede de sequência zero de transformadores conforme o aterramento","Somar contribuições de geradores e motores num curto"],
qs:["06-27","11-22","23-38","18-30","23-49","11-30","11-23","23-40","06-36","23-50","18-35","11-28","18-34","23-36","08-29"],
aula:
"<h3>1. Operador a e a transformação</h3>"+
F("a = 1∠120°, a² = 1∠240° = 1∠−120°, 1 + a + a² = 0<br>V<sub>A</sub> = V<sub>0</sub> + V<sub>1</sub> + V<sub>2</sub><br>V<sub>B</sub> = V<sub>0</sub> + a²V<sub>1</sub> + aV<sub>2</sub><br>V<sub>C</sub> = V<sub>0</sub> + aV<sub>1</sub> + a²V<sub>2</sub>")+
F("Inversa: V<sub>0</sub> = (V<sub>A</sub> + V<sub>B</sub> + V<sub>C</sub>)/3<br>V<sub>1</sub> = (V<sub>A</sub> + aV<sub>B</sub> + a²V<sub>C</sub>)/3<br>V<sub>2</sub> = (V<sub>A</sub> + a²V<sub>B</sub> + aV<sub>C</sub>)/3")+
P("Truque para reconhecer a sequência numa matriz: veja o coeficiente na linha da fase B. <b>a²</b> ⇒ sequência positiva (B atrasa 120°); <b>a</b> ⇒ negativa; <b>1</b> ⇒ zero.")+
"<ul><li><b>Sequência positiva:</b> 3 fasores iguais, 120° entre si, mesma sequência do sistema.</li><li><b>Negativa:</b> 3 fasores iguais, 120° entre si, sequência INVERSA.</li><li><b>Zero:</b> 3 fasores iguais e em fase.</li><li><b>Fator de desequilíbrio de tensão:</b> FD = |V<sub>2</sub>|/|V<sub>1</sub>| × 100%.</li></ul>"+
"<h3>2. Faltas (pré-falta E = 1 pu, sem impedância de falta)</h3>"+
F("Trifásica: I = E/Z<sub>1</sub> (só a rede positiva)<br>Fase-terra (fase A): I<sub>0</sub> = I<sub>1</sub> = I<sub>2</sub> = E/(Z<sub>0</sub>+Z<sub>1</sub>+Z<sub>2</sub>), I<sub>falta</sub> = 3I<sub>0</sub> = 3E/(Z<sub>0</sub>+Z<sub>1</sub>+Z<sub>2</sub>)<br>Fase-fase (B-C): I<sub>1</sub> = −I<sub>2</sub> = E/(Z<sub>1</sub>+Z<sub>2</sub>), sem sequência zero; I<sub>A</sub> = 0, I<sub>B</sub> = −I<sub>C</sub><br>Bifásica-terra: redes 1, 2 e 0, com 2 e 0 em paralelo")+
P("Condições de contorno típicas: I<sub>A</sub> = 0 e I<sub>B</sub> = −I<sub>C</sub> ⇒ falta fase-fase entre B e C. Impedância de aterramento Z<sub>n</sub> aparece como 3Z<sub>n</sub> na rede de sequência zero (porque o neutro conduz 3I<sub>0</sub>).")+
F("Corrente em ampères: I = I<sub>pu</sub>·I<sub>base</sub>, com I<sub>base</sub> = S<sub>base</sub>/(√3·V<sub>base</sub>)")+
"<h3>3. Transformadores na sequência zero</h3>"+
"<ul><li><b>Y<sub>aterrado</sub>–Y<sub>aterrado</sub>:</b> caminho em série entre as duas barras (com 3Z<sub>n</sub> de cada lado).</li><li><b>Y<sub>aterrado</sub>–Δ:</b> a corrente de sequência zero circula dentro do Δ: do lado Y, impedância para a referência; do lado Δ, aberto.</li><li><b>Y<sub>aterrado</sub>–Y isolado, Y–Δ isolado, Δ–Δ:</b> sem caminho: circuito aberto.</li></ul>"+
"<h3>4. Contribuições num barramento</h3>"+
P("Num curto num alimentador de motor, o disjuntor desse alimentador vê a soma das contribuições de TODAS as outras fontes (gerador e demais motores); o disjuntor de cada motor vê só a contribuição desse motor.")+
TRAP("o disjuntor do ramo em falta não vê a contribuição do próprio motor que está depois dele: essa corrente vai direto para o ponto de falta."),
exemplo:{
 titulo:"Exemplo: curto fase-terra em ampères",
 enun:P("Gerador de 50 MVA, 13,8 kV, com X<sub>1</sub> = 0,25, X<sub>2</sub> = 0,20 e X<sub>0</sub> = 0,05 pu (bases próprias), neutro solidamente aterrado, em vazio com tensão nominal."),
 passos:[
  {p:"Corrente de falta trifásica em pu?", v:4, r:"I = 1/0,25 = <b>4 pu</b>.", dica:"Trifásica: só a reatância de sequência positiva."},
  {p:"Corrente de falta fase-terra em pu?", v:6, r:"I = 3·1/(0,25 + 0,20 + 0,05) = 3/0,5 = <b>6 pu</b>. Gerador solidamente aterrado com X<sub>0</sub> baixo: a falta à terra supera a trifásica.", dica:"I = 3E/(X<sub>1</sub>+X<sub>2</sub>+X<sub>0</sub>)."},
  {p:"Corrente de base (em A)?", v:2092, tol:0.01, r:"I<sub>base</sub> = 50·10⁶/(√3·13 800) = <b>2092 A</b>.", dica:"I<sub>base</sub> = S/(√3·V)."},
  {p:"Corrente de falta fase-terra em kA?", v:12.55, tol:0.01, r:"6 × 2092 = 12 552 A ≈ <b>12,55 kA</b>.", dica:"Multiplique o valor em pu pela corrente de base."},
  {p:"Que valor de reatância no neutro X<sub>n</sub> (pu) limitaria a falta à terra ao mesmo valor da trifásica (4 pu)?", v:0.0833, tol:0.03, r:"3/(0,5 + 3X<sub>n</sub>) = 4 ⇒ 0,5 + 3X<sub>n</sub> = 0,75 ⇒ <b>X<sub>n</sub> = 0,0833 pu</b>. Note o fator 3.", dica:"Z<sub>n</sub> entra na rede de sequência zero multiplicada por 3."}
 ],
 fecho:"A questão 23-50 é o passo 2 + 3 com outros números."
}
});

Q("06-27",{
enun:P("As componentes de sequência negativa de um sistema trifásico equilibrado consistem de três fasores iguais em módulo e"),
ops:["120° defasados entre si, com a mesma sequência de fase dos fasores originais.","120° defasados entre si, com uma sequência de fase inversa à dos fasores originais.","com a mesma defasagem e a mesma sequência de fase dos fasores originais.","com defasagem nula entre si.","com uma defasagem diferente dos fasores originais, mas com uma sequência de fase inversa."], gab:"B",
dicas:["Há três conjuntos: positivo, negativo e zero. O que distingue o positivo do negativo, se ambos têm 120° entre fasores?"],
erros:{
A:"Isso descreve a sequência POSITIVA. A negativa tem a mesma defasagem de 120°, mas gira na ordem inversa.",
C:"Isso é a própria sequência positiva. A negativa inverte a ordem das fases.",
D:"Defasagem nula entre os três fasores caracteriza a sequência ZERO.",
E:"A defasagem continua sendo 120°. Só a ordem das fases é inversa."},
res:P("Sequência negativa: três fasores de mesmo módulo, defasados de 120°, com a ordem de fases <b>inversa</b> à do sistema (ex.: ACB num sistema ABC).")
});

Q("11-22",{
enun:P("A expressão abaixo apresenta a igualdade entre a matriz fasorial e o produto das matrizes transformação e componentes simétricos:<br>[A; B; C] = "+M("1 1 1;a² 1 1;a a² 1")+" · [x; y; z]<br>Os valores de x, y e z são, respectivamente, os componentes simétricos da fase"),
ops:["C na sequência positiva, B na sequência negativa e A na sequência zero","A na sequência positiva, B na sequência negativa e C na sequência zero","C nas sequências positiva, negativa e zero","B nas sequências positiva, negativa e zero","A nas sequências positiva, negativa e zero"], gab:"E",
aviso:"na prova, a 2ª linha aparece como [a² 1 1], provavelmente um erro de digitação de [a² a 1]. A leitura pela 3ª linha não deixa dúvida.",
dicas:["A primeira linha [1 1 1] mostra que A = x + y + z. Então x, y, z são componentes de qual fase?","Na linha da fase C, o coeficiente de x é a e o de y é a². Compare com V<sub>C</sub> = aV<sub>1</sub> + a²V<sub>2</sub> + V<sub>0</sub>."],
erros:{
A:"As componentes simétricas são sempre de uma mesma fase de referência (as outras fases saem pelos operadores a). A 1ª linha diz qual: A = x + y + z.",
B:"Não se misturam fases diferentes. x, y e z são as três componentes de uma única fase de referência.",
C:"A fase de referência é aquela cuja linha tem só coeficientes 1. Qual linha é [1 1 1]?",
D:"A fase B tem coeficientes a e a² na sua linha. A fase de referência é a que tem [1 1 1]."},
res:P("A = x + y + z ⇒ x, y, z são componentes da fase <b>A</b>. Na linha de C: aV<sub>1</sub> + a²V<sub>2</sub> + V<sub>0</sub> ⇒ x = V<sub>A1</sub> (positiva), y = V<sub>A2</sub> (negativa), z = V<sub>A0</sub> (zero).")
});

Q("23-38",{
enun:P("A matriz abaixo apresenta a relação das grandezas elétricas das fases A, B e C com suas respectivas componentes simétricas x, y e z:<br>[A; B; C] = "+M("1 1 1;a² a 1;a a² 1")+" · [x; y; z]<br>As componentes simétricas são, respectivamente, de sequências"),
ops:["negativa, zero e positiva","negativa, positiva e zero","positiva, zero e negativa","positiva, negativa e zero","zero, positiva e negativa"], gab:"D",
dicas:["Olhe a linha da fase B: coeficientes a², a e 1.","a² na fase B significa atraso de 120° em relação a A: sequência positiva."],
erros:{
A:"A coluna de z tem coeficientes 1, 1, 1: três fasores iguais e em fase. Isso é sequência zero, não positiva.",
B:"Confira a coluna de x: em B vale a² (B atrasada 120°). Isso caracteriza a sequência positiva.",
C:"A coluna de y tem a na fase B: B adiantada 120°, ou seja, sequência negativa. E z (coeficientes 1) é zero.",
E:"Sequência zero tem coeficientes 1 nas três linhas. Isso acontece na coluna de z, não na de x."},
res:P("Coluna x: 1, a², a ⇒ positiva. Coluna y: 1, a, a² ⇒ negativa. Coluna z: 1, 1, 1 ⇒ zero. Resposta <b>positiva, negativa e zero</b>.")
});

Q("18-30",{
enun:P("A equação matricial que relaciona corretamente as correntes de um sistema trifásico às suas componentes simétricas é [I<sub>0</sub>; I<sub>1</sub>; I<sub>2</sub>] = (1/3)·M·[I<sub>A</sub>; I<sub>B</sub>; I<sub>C</sub>]. A expressão da matriz M é:"),
ops:[M("1 α α²;1 α² α;1 1 1"),M("1 1 1;1 α² α;1 α α²"),M("1 1 1;1 α α²;1 α² α"),M("1 1 1;1 α² α²;1 α α"),M("1 1 1;1 α α;1 α² α²")], gab:"C",
dicas:["I<sub>0</sub> = (I<sub>A</sub> + I<sub>B</sub> + I<sub>C</sub>)/3 ⇒ 1ª linha [1 1 1].","Para extrair a positiva, multiplica-se B por α para \"desfazer\" o atraso de 120°: I<sub>1</sub> = (I<sub>A</sub> + αI<sub>B</sub> + α²I<sub>C</sub>)/3."],
erros:{
A:"A 1ª linha deve dar I<sub>0</sub> = soma/3, ou seja, [1 1 1].",
B:"As linhas 2 e 3 estão trocadas: essa matriz daria I<sub>2</sub> na 2ª posição. Para a positiva, B é multiplicada por α (e não α²).",
D:"Cada linha da inversa tem α e α² (os dois), nunca o mesmo operador repetido. Lembre: 1 + α + α² = 0 precisa aparecer.",
E:"Linhas com o mesmo operador em B e C não separam as sequências. A 2ª linha é [1 α α²]."},
res:P("M = "+M("1 1 1;1 α α²;1 α² α")+". I<sub>0</sub> = (I<sub>A</sub>+I<sub>B</sub>+I<sub>C</sub>)/3, I<sub>1</sub> = (I<sub>A</sub>+αI<sub>B</sub>+α²I<sub>C</sub>)/3, I<sub>2</sub> = (I<sub>A</sub>+α²I<sub>B</sub>+αI<sub>C</sub>)/3. Alternativa C.")
});

Q("23-49",{
enun:P("Na análise de um circuito trifásico por componentes simétricas, foram identificados os seguintes valores da tensão da fase A: positiva 10∠30° V; negativa 6∠330° V; zero 3∠0° V. O valor da tensão da fase B, em V, é de"),
ops:["5∠−tg⁻¹(3/4)","5∠tg⁻¹(4/3)","4∠tg⁻¹(1)","3∠tg⁻¹(0)","5∠−tg⁻¹(4/3)"], gab:"E",
dicas:["V<sub>B</sub> = V<sub>0</sub> + a²V<sub>1</sub> + aV<sub>2</sub>.","a²V<sub>1</sub> = 10∠270° = −j10; aV<sub>2</sub> = 6∠450° = 6∠90° = +j6."],
erros:{
A:"O módulo 5 está certo, mas confira o ângulo: V<sub>B</sub> = 3 − j4. O ângulo é −arctg(4/3), não −arctg(3/4) (você inverteu cateto oposto e adjacente).",
B:"Sinal do ângulo: V<sub>B</sub> = 3 − j4 tem parte imaginária NEGATIVA. Confira se usou a² para V<sub>1</sub> e a para V<sub>2</sub>.",
C:"Confira a soma: 3 + (−j10) + (j6) = 3 − j4, módulo 5.",
D:"3 é só a componente de sequência zero. Falta somar a²V<sub>1</sub> e aV<sub>2</sub>."},
res:OL(["a²V<sub>1</sub> = 10∠(30°+240°) = 10∠270° = −j10.","aV<sub>2</sub> = 6∠(330°+120°) = 6∠90° = +j6.","V<sub>B</sub> = 3 − j10 + j6 = 3 − j4 = <b>5∠−tg⁻¹(4/3) V</b>."])
});

Q("11-30",{
enun:P("A figura mostra a forma de onda da tensão trifásica num ponto de um sistema de distribuição. Os fasores das componentes de sequências zero, positiva e negativa são V<sub>0</sub> = 0,02∠20° pu, V<sub>1</sub> = 0,80∠5° pu e V<sub>2</sub> = 0,10∠45° pu. No ponto em questão, o valor percentual do fator de desequilíbrio de tensão é"),
fig:"f11_30", ops:["2,5","5,0","12,5","15,0","25,0"], gab:"C",
dicas:["O fator de desequilíbrio (FD) usa as componentes negativa e positiva.","FD = |V<sub>2</sub>|/|V<sub>1</sub>| × 100%."],
erros:{
A:"2,5% = 0,02/0,80: você usou a sequência zero. O FD clássico é V<sub>2</sub>/V<sub>1</sub>.",
B:"5% não sai da razão. Calcule 0,10/0,80.",
D:"15% não corresponde a nenhuma razão das componentes. FD = 0,10/0,80.",
E:"25% = 0,02/0,08? Confira: a referência é a sequência positiva (0,80 pu)."},
res:P("FD = |V<sub>2</sub>|/|V<sub>1</sub>| = 0,10/0,80 = <b>12,5%</b>. A figura é só ilustrativa.")
});

Q("11-23",{
enun:P("A respeito do curto-circuito em uma linha de transmissão, analise: I – O curto-circuito trifásico depende somente do circuito equivalente de Thévenin de sequência positiva. II – O curto-circuito bifásico depende dos circuitos equivalentes de Thévenin de sequência positiva e zero. III – O curto-circuito monofásico depende dos circuitos equivalentes de Thévenin de sequências positiva, negativa e zero. Está correto APENAS o que se afirma em"),
ops:["I","II","III","I e III","II e III"], gab:"D",
dicas:["Falta trifásica é equilibrada: só sequência positiva.","Falta fase-fase (sem terra) não tem caminho para corrente de sequência zero. Quais redes ela usa?"],
erros:{
A:"I é verdadeira, mas III também: a falta fase-terra liga as três redes de sequência em série.",
B:"II é falsa: o curto bifásico (fase-fase) usa as sequências positiva e NEGATIVA. Sem terra, não há sequência zero.",
C:"III é verdadeira, mas I também: a falta trifásica é simétrica e só envolve a rede positiva.",
E:"II tem um erro: a falta bifásica não envolve a sequência zero, e sim a negativa."},
res:P("I: verdadeira. II: falsa (bifásico usa positiva e negativa). III: verdadeira (monofásico: positiva, negativa e zero em série). Alternativa <b>D</b>.")
});

Q("23-40",{
enun:P("A matriz de transformação inversa abaixo relaciona as componentes simétricas aos fasores, considerando as condições de contorno de uma falta:<br>[I<sub>1</sub>; I<sub>2</sub>; I<sub>0</sub>] = (1/3)·"+M("1 α α²;1 α² α;1 1 1")+" · [0; I<sub>B</sub>; −I<sub>B</sub>]<br>O tipo de falta que essa matriz apresenta nas suas condições de contorno é"),
ops:["abertura da fase A","abertura das fases A e B","curto-circuito simétrico","curto-circuito fase-terra","curto-circuito fase-fase"], gab:"E",
dicas:["As condições de contorno são I<sub>A</sub> = 0 e I<sub>C</sub> = −I<sub>B</sub>.","A corrente que vai pela fase B volta pela fase C, sem passar pela terra (I<sub>0</sub> = 0)."],
erros:{
A:"Na abertura da fase A, I<sub>A</sub> = 0, mas B e C continuam alimentando a carga com correntes que não precisam ser opostas. A condição I<sub>C</sub> = −I<sub>B</sub> é de falta entre B e C.",
B:"Se A e B estivessem abertas, I<sub>B</sub> seria zero também.",
C:"Num curto simétrico as três correntes têm mesmo módulo, defasadas de 120°; não há fase com corrente nula.",
D:"Na falta fase-terra, duas fases têm corrente nula e a terceira conduz; aqui há corrente em B e C, e I<sub>0</sub> = 0."},
res:P("I<sub>A</sub> = 0 e I<sub>B</sub> = −I<sub>C</sub>: a corrente sai por B e volta por C. É o curto <b>fase-fase</b> (B-C). Note que a soma é zero ⇒ I<sub>0</sub> = 0.")
});

Q("06-36",{
enun:P("A figura mostra uma linha de transmissão trifásica. Considere que V<sub>1</sub><sup>(F)</sup> é a tensão de sequência positiva e que as impedâncias nas sequências zero, positiva e negativa são Z<sup>0</sup><sub>EQU</sub>, Z<sup>1</sup><sub>EQU</sub> e Z<sup>2</sup><sub>EQU</sub>. Na fase A ocorre uma falta para a terra. A expressão da corrente de falta I<sub>F</sub> é"),
fig:"f06_36", ops:["3V<sub>1</sub>/(Z<sup>0</sup> + Z<sup>1</sup> + 2Z<sup>2</sup>)","3V<sub>1</sub>/(Z<sup>0</sup> + 2Z<sup>1</sup> + Z<sup>2</sup>)","V<sub>1</sub>/(Z<sup>0</sup> + 2Z<sup>1</sup> + 3Z<sup>2</sup>)","V<sub>1</sub>/(Z<sup>0</sup> + 0,5Z<sup>1</sup> + 2Z<sup>2</sup>)","3V<sub>1</sub>/(Z<sup>0</sup> + Z<sup>1</sup> + Z<sup>2</sup>)"], gab:"E",
dicas:["Na falta fase-terra, as três redes de sequência ficam em SÉRIE, cada uma entrando uma vez.","I<sub>0</sub> = I<sub>1</sub> = I<sub>2</sub> e I<sub>F</sub> = 3I<sub>0</sub>."],
erros:{
A:"Cada rede de sequência entra uma única vez na série. Não há motivo para 2Z<sup>2</sup>.",
B:"As impedâncias têm peso igual: Z<sup>0</sup> + Z<sup>1</sup> + Z<sup>2</sup>.",
C:"Faltou o 3 do numerador (I<sub>F</sub> = 3I<sub>0</sub>) e os pesos das impedâncias estão errados.",
D:"Os coeficientes não seguem a ligação em série das redes. Volte às condições de contorno I<sub>B</sub> = I<sub>C</sub> = 0, V<sub>A</sub> = 0."},
res:P("Fase-terra: redes 0, 1 e 2 em série ⇒ I<sub>0</sub> = I<sub>1</sub> = I<sub>2</sub> = V<sub>1</sub>/(Z<sup>0</sup>+Z<sup>1</sup>+Z<sup>2</sup>). I<sub>F</sub> = 3I<sub>0</sub> = <b>3V<sub>1</sub>/(Z<sup>0</sup>+Z<sup>1</sup>+Z<sup>2</sup>)</b>.")
});

Q("23-50",{
enun:P("Um gerador hipotético, ligado em Y, possui potência de 15√3 MVA e tensão de armadura de 10 kV. As reatâncias de sequências positiva, negativa e zero são j0,5, j0,3 e j0,2 pu. Durante os testes de comissionamento, o gerador está em vazio, com tensão nominal, e ocorre um curto fase-terra. O módulo da corrente de falta, em kA, é"),
ops:["1,5","3,0","4,5","6,0","9,0"], gab:"C",
dicas:["I<sub>falta</sub> = 3E/(X<sub>1</sub>+X<sub>2</sub>+X<sub>0</sub>) com E = 1 pu.","I<sub>base</sub> = 15√3 MVA/(√3·10 kV)."],
erros:{
A:"1,5 kA é a corrente de base. Falta multiplicar pelo valor em pu da corrente de falta.",
B:"3,0 kA corresponde a 2 pu: é a corrente de falta TRIFÁSICA (1/0,5). Para fase-terra, use 3/(0,5+0,3+0,2).",
D:"6,0 kA = 4 pu: confira a soma das reatâncias (1,0 pu) e o fator 3 no numerador.",
E:"9,0 kA = 6 pu: o fator 3 entrou duas vezes, ou faltou alguma reatância na soma."},
res:OL(["I<sub>falta</sub> = 3·1/(0,5 + 0,3 + 0,2) = 3 pu.","I<sub>base</sub> = 15√3·10⁶/(√3·10·10³) = 1500 A.","I = 3 × 1,5 kA = <b>4,5 kA</b>."])
});

Q("18-35",{
enun:P("Um curto-circuito fase-terra ocorre em um sistema trifásico. A corrente de sequência positiva no ponto da falta é igual a 5 pu. As bases adotadas no setor da falta são 4 MVA e 100 kV. A corrente de curto-circuito dessa falta, em ampères, é igual a"),
ops:["200","200√3","450","600√3","600"], gab:"B",
dicas:["Fase-terra: I<sub>falta</sub> = 3·I<sub>1</sub>.","I<sub>base</sub> = 4·10⁶/(√3·100·10³) = 40/√3 A."],
erros:{
A:"200 = 15·(40/3): confira a corrente de base, que tem √3 no denominador: 40/√3 ≈ 23,1 A.",
C:"450 não sai do produto 15 pu × I<sub>base</sub>. Refaça I<sub>base</sub> = S/(√3·V).",
D:"600√3 é 3 vezes o correto: o fator 3 entrou duas vezes? A corrente de falta é 3 × 5 = 15 pu, uma vez só.",
E:"600 = 15 × 40: faltou o √3 na corrente de base."},
res:OL(["I<sub>falta</sub> = 3 × 5 = 15 pu.","I<sub>base</sub> = 4 MVA/(√3·100 kV) = 40/√3 A.","I = 15·40/√3 = 600/√3 = <b>200√3 A</b> (≈ 346 A)."])
});

Q("11-28",{
enun:P("O circuito trifásico da figura mostra uma carga alimentada por uma fonte cujas componentes de sequência zero, positiva e negativa são 9∠0° V, 110∠15° V e 20∠5° V. A carga é aterrada por meio de uma impedância de j0,5 Ω. O módulo da corrente de sequência zero no circuito, em ampères, é"),
fig:"f11_28", ops:["1,5","2,0","2,6","3,0","6,0"], gab:"B",
dicas:["Na rede de sequência zero, a impedância de aterramento aparece como 3Z<sub>n</sub>.","Z<sub>0</sub> = j3 + 3·j0,5. Depois I<sub>0</sub> = V<sub>0</sub>/Z<sub>0</sub>."],
erros:{
A:"1,5 A = 9/6: a impedância de aterramento entra como 3Z<sub>n</sub> = j1,5, não j3.",
C:"2,6 A ≈ 9/3,5: você somou Z<sub>n</sub> sem o fator 3. O neutro conduz 3I<sub>0</sub>, por isso aparece 3Z<sub>n</sub>.",
D:"3,0 A = 9/3: você ignorou a impedância de aterramento na rede de sequência zero.",
E:"6,0 A é a corrente no NEUTRO (3I<sub>0</sub>). A pergunta é a corrente de sequência zero I<sub>0</sub>."},
res:OL(["Z<sub>0</sub> = j3 + 3·(j0,5) = j4,5 Ω.","I<sub>0</sub> = 9/4,5 = <b>2,0 A</b>.","(A corrente no neutro seria 3I<sub>0</sub> = 6 A.)"])
});

Q("18-34",{
enun:P("Em um sistema elétrico de potência, um transformador na configuração estrela aterrado em um lado e estrela não aterrado para o outro é representado no diagrama de reatâncias de sequência zero por uma reatância"),
ops:["em série no sistema","aberta no sistema","em paralelo no sistema","isolada em paralelo no sistema","em série no sistema e outra em paralelo"], gab:"B",
dicas:["Para circular sequência zero num lado, o outro lado precisa conseguir circular a corrente correspondente (balanço de ampères-espiras).","Um Y sem aterramento consegue conduzir três correntes iguais e em fase?"],
erros:{
A:"Série entre as barras é o caso Y<sub>aterrado</sub>–Y<sub>aterrado</sub>. Com um lado isolado, a sequência zero não circula.",
C:"Ligação para a referência (shunt) aparece no Y<sub>aterrado</sub>–Δ, em que o Δ fecha a corrente internamente.",
D:"Não há elemento isolado em paralelo. Pense se existe caminho para I<sub>0</sub>.",
E:"Não há combinação série + paralelo aqui. O Y isolado bloqueia a sequência zero."},
res:P("O lado em Y não aterrado não admite corrente de sequência zero; sem ela, o balanço de ampères-espiras impede I<sub>0</sub> também no lado aterrado. A reatância fica <b>aberta</b> (desconectada) no diagrama de sequência zero.")
});

Q("23-36",{
enun:P("Na figura é apresentado o diagrama de sequência zero de um transformador: Z e 3Z<sub>n</sub> em série a partir da barra da esquerda, seguidos de um circuito aberto antes da barra da direita, sem ligação à referência. Esse diagrama corresponde ao transformador"),
fig:"f23_36", ops:["Estrela-Estrela, com primário e secundário aterrados por impedância.","Estrela-Delta, com primário não aterrado.","Estrela-Estrela, com primário aterrado e secundário não aterrado.","Estrela-Delta, com primário aterrado.","Delta-Delta."], gab:"C",
dicas:["O 3Z<sub>n</sub> indica que há um neutro aterrado por impedância Z<sub>n</sub> em um dos lados.","Repare que o ramo não chega à referência nem à outra barra: não há caminho para a corrente de sequência zero."],
erros:{
A:"Com os dois lados aterrados, o ramo ligaria as duas barras (Z + 3Z<sub>n1</sub> + 3Z<sub>n2</sub>), sem interrupção.",
B:"Sem nenhum aterramento não haveria 3Z<sub>n</sub> no diagrama.",
D:"No Y<sub>aterrado</sub>–Δ, o ramo Z + 3Z<sub>n</sub> iria da barra do Y até a REFERÊNCIA (o Δ fecha a corrente), e não terminaria aberto.",
E:"Δ-Δ não tem neutro, então não haveria 3Z<sub>n</sub>; seria aberto dos dois lados."},
res:P("O 3Z<sub>n</sub> mostra um neutro aterrado por impedância; o circuito aberto, sem retorno pela referência, mostra que o outro lado não permite sequência zero: <b>Y aterrado – Y não aterrado</b>.")
});

Q("08-29",{
enun:P("Considere a figura: um gerador de 25 MVA, 13,8 kV, reatância subtransitória de 15%, conectado a um barramento que alimenta quatro motores idênticos por meio de um transformador de 25 MVA, 13,8/6,9 kV, reatância de 10%. A reatância subtransitória de cada motor é 20% na base 5 MVA, 6,9 kV. A tensão do barramento é 6,9 kV quando ocorre um curto-circuito trifásico no ponto P. Assim, o disjuntor que terá de interromper a maior corrente é"),
fig:"f08_29", ops:["DJ1","DJ2","DJ3","DJ4","DJ5"], gab:"E",
dicas:["P fica entre o DJ5 e o motor dele. Que fontes mandam corrente para P passando pelo DJ5?","Na base de 25 MVA: gerador + trafo = 0,25 pu ⇒ 4 pu; cada motor = 0,20·25/5 = 1,0 pu ⇒ 1 pu."],
erros:{
A:"O DJ1 só conduz a contribuição do gerador (4 pu). O DJ5 conduz a do gerador MAIS a de três motores.",
B:"O DJ2 conduz só a contribuição do próprio motor (1 pu), que alimenta o curto pelo barramento.",
C:"O DJ3 conduz só a contribuição do motor 3 (1 pu).",
D:"O DJ4 conduz só a contribuição do motor 4 (1 pu)."},
res:OL(["Base 25 MVA: X<sub>gerador+trafo</sub> = 0,15 + 0,10 = 0,25 pu ⇒ contribuição 1/0,25 = 4 pu.","Cada motor: 0,20·(25/5) = 1,0 pu ⇒ 1 pu cada.","DJ5 (entre barramento e P): gerador + motores 2, 3 e 4 = 4 + 3 = 7 pu. O motor 5 alimenta P direto, sem passar pelo DJ5.","Maior corrente: <b>DJ5</b>."])
});
