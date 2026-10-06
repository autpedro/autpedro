B({
id:"b07", titulo:"Máquinas CC e máquinas síncronas",
sub:"Equações da máquina CC, tipos de excitação, perda de campo, curvas de gerador, excitação do motor síncrono e frequência de máquinas acopladas.",
objetivos:["Usar V = E + R<sub>a</sub>I<sub>a</sub> e E = kφω para achar R<sub>a</sub>, velocidade ou corrente","Distinguir excitação série, derivação (shunt), composta e independente","Prever o que acontece quando o campo de um motor shunt abre","Saber o efeito da corrente de campo no reativo do motor síncrono","Relacionar polos, velocidade e frequência de máquinas síncronas acopladas"],
qs:["23-25","18-57","11-41","18-22","18-25","18-23","23-26"],
aula:
"<h3>1. Equações da máquina CC</h3>"+
F("Motor: V = E + R<sub>a</sub>·I<sub>a</sub> &nbsp;&nbsp; Gerador: V = E − R<sub>a</sub>·I<sub>a</sub><br>E = k·φ·ω (f.c.e.m.) &nbsp;&nbsp; T = k·φ·I<sub>a</sub><br>Fluxo constante ⇒ E ∝ n &nbsp;⇒&nbsp; E<sub>2</sub>/E<sub>1</sub> = n<sub>2</sub>/n<sub>1</sub>")+
P("Em vazio o motor ainda puxa uma pequena corrente (perdas rotacionais). Com campo em derivação, a corrente da fonte é I<sub>a</sub> + I<sub>campo</sub>.")+
TRAP("duas medições só determinam R<sub>a</sub> se forem independentes. Se uma for múltiplo da outra (V, I e n todos escalados pelo mesmo fator), o sistema é indeterminado.")+
"<h3>2. Tipos de excitação</h3>"+
"<ul><li><b>Derivação (shunt):</b> campo em paralelo com a armadura, muitas espiras finas, corrente pequena (1 a 5% da nominal), mas recebe a tensão TOTAL da armadura. Velocidade quase constante.</li><li><b>Série:</b> campo em série, poucas espiras grossas, conduz a corrente de carga toda, com queda de tensão pequena. Torque de partida alto; dispara em vazio.</li><li><b>Composta:</b> série + derivação (aditiva ou subtrativa; longa ou curta).</li><li><b>Independente:</b> fonte separada para o campo.</li></ul>"+
"<h3>3. Perda de campo no motor shunt</h3>"+
P("φ cai ao valor residual ⇒ E cai ⇒ I<sub>a</sub> = (V − E)/R<sub>a</sub> sobe muito ⇒ o motor tende a disparar (a velocidade sobe para tentar restabelecer E = kφω). Por isso existe relé de perda de campo.")+
"<h3>4. Característica do gerador CC (V × I de carga)</h3>"+
"<ul><li>Independente e shunt: tensão CAI com a carga (shunt cai mais).</li><li>Série: tensão SOBE com a carga (o fluxo cresce com a corrente) até a saturação; depois cai por reação de armadura e queda resistiva. É a curva que sobe e depois desce.</li><li>Composto aditivo: tensão quase plana ou crescente; subtrativo: cai rapidamente.</li></ul>"+
"<h3>5. Máquina síncrona</h3>"+
F("n<sub>s</sub> = 120·f/p &nbsp;&nbsp; duas máquinas no mesmo eixo: f<sub>1</sub>/p<sub>1</sub> = f<sub>2</sub>/p<sub>2</sub>")+
"<ul><li><b>Motor síncrono, potência constante:</b> aumentar a corrente de campo aumenta E. Subexcitado ⇒ absorve reativo (FP indutivo). Sobre-excitado ⇒ fornece reativo (FP capacitivo, \"compensador síncrono\").</li><li>Velocidade não muda com a excitação nem com a carga (enquanto em sincronismo).</li><li>Torque com potência constante e velocidade constante também não muda.</li></ul>",
exemplo:{
 titulo:"Exemplo: resistência de armadura por dois pontos de operação",
 enun:P("Um motor CC com fluxo constante (ímã permanente) é alimentado com 120 V. Em vazio consome 2 A e gira a 2000 rpm. Com carga consome 20 A e gira a 1940 rpm."),
 passos:[
  {p:"Qual a razão E<sub>carga</sub>/E<sub>vazio</sub>? (2 casas)", v:0.97, r:"E ∝ n ⇒ 1940/2000 = <b>0,97</b>.", dica:"Fluxo constante: E = kω, então a razão das f.c.e.m. é a razão das velocidades."},
  {p:"Escreva E nos dois casos e ache R<sub>a</sub> (em Ω).", v:0.1993, tol:0.02, r:"120 − 20R<sub>a</sub> = 0,97·(120 − 2R<sub>a</sub>) ⇒ 120 − 20R<sub>a</sub> = 116,4 − 1,94R<sub>a</sub> ⇒ 3,6 = 18,06R<sub>a</sub> ⇒ <b>R<sub>a</sub> ≈ 0,199 Ω</b>.", dica:"E = V − R<sub>a</sub>I<sub>a</sub> em cada ponto. Iguale E<sub>carga</sub> = 0,97·E<sub>vazio</sub>."},
  {p:"Qual a constante k em V/(rpm), em milésimos? (E<sub>vazio</sub>/2000 × 1000)", v:59.8, tol:0.02, r:"E<sub>vazio</sub> = 120 − 2·0,199 = 119,6 V ⇒ k = 119,6/2000 = <b>0,0598 V/rpm</b>.", dica:"k = E/n com os dados de vazio."}
 ],
 fecho:"Na 18-57 tente o mesmo procedimento e veja o que acontece com as equações. Na 23-25 há também a corrente de campo em derivação."
}
});

Q("23-25",{
enun:P("Um motor CC, com campo em paralelo com a armadura, é alimentado por 200 V nominais e possui enrolamento de compensação e interpolos, de forma que seu fluxo pode ser considerado constante, independentemente da carga. Em vazio (torque zero) consome corrente total de 10 A e gira a 1800 rpm. Considere que a resistência de armadura inclui as resistências do enrolamento de armadura, escovas, compensação e interpolos. Quando o motor opera a 1728 rpm, com corrente total de 170 A, qual é o valor da resistência de armadura, em miliohms?"),
ops:["115","50","47","40","20"], gab:"B",
dicas:["Fluxo constante: E<sub>carga</sub>/E<sub>vazio</sub> = 1728/1800 = 0,96.","200 − 170R<sub>a</sub> = 0,96·(200 − 10R<sub>a</sub>). A corrente de campo é a mesma nos dois casos e quase não altera o resultado."],
erros:{
A:"115 mΩ é mais que o dobro. Confira: 200 − 170R = 192 − 9,6R ⇒ 8 = 160,4R.",
C:"47 mΩ aparece se você usar a diferença de correntes (160 A) no lugar errado ou arredondar mal. Resolva a equação completa.",
D:"40 mΩ = 8/200: você dividiu pela tensão. A queda adicional (8 V) é causada pela corrente de armadura.",
E:"20 mΩ é muito baixo. Verifique se usou 0,96 = 1728/1800 e 8 V de diferença entre as f.c.e.m."},
res:OL(["E ∝ n: E<sub>c</sub> = 0,96·E<sub>v</sub>.","Desprezando a pequena corrente de campo: 200 − 170R<sub>a</sub> = 0,96(200 − 10R<sub>a</sub>) = 192 − 9,6R<sub>a</sub>.","8 = 160,4R<sub>a</sub> ⇒ R<sub>a</sub> ≈ 0,0499 Ω = <b>50 mΩ</b>.","Com a corrente de campo I<sub>f</sub> descontada dos dois lados o resultado muda muito pouco (continua ≈ 50 mΩ)."])
});

Q("18-57",{
enun:P("Para caracterizar um motor CC de ímã permanente, foram realizados dois ensaios em vazio. No primeiro, aplicou-se 60 V e o motor apresentou corrente de armadura de 1,5 A e velocidade de 12.000 rpm. No segundo, aplicou-se 80 V, e o motor exibiu corrente de armadura de 2,0 A e atingiu 16.000 rpm. Com base nessas medições, conclui-se que a resistência elétrica do enrolamento de armadura, em ohms, é igual a"),
ops:["0,6","1,0","1,2","1,5","2,0","Os dados não permitem determinar R<sub>a</sub>"], gab:"F",
aviso:"a alternativa (F) foi acrescentada neste banco. Na prova original só havia (A) a (E). As duas medições são proporcionais (tudo multiplicado por 4/3), então o sistema é indeterminado; é muito provável que a questão tenha sido anulada. Aqui ela serve para treinar a verificação de consistência.",
dicas:["Escreva V = R·I + k·n para cada ensaio.","Compare as duas equações. Uma é múltipla da outra?"],
erros:{
A:"Teste: com R = 0,6, k sai de 60 = 0,9 + 12 000k, e a segunda equação também é satisfeita. Agora teste R = 1,0: também funciona. O que isso diz sobre o sistema?",
B:"R = 1,0 satisfaz as duas equações, mas qualquer outro valor também satisfaz. Verifique se as equações são independentes.",
C:"Substitua R = 1,2 nas duas equações: ambas são satisfeitas com o mesmo k. Isso vale para quase qualquer R. Por quê?",
D:"R = 1,5 também resolve o sistema, mas não de forma única. Multiplique a 1ª equação por 4/3 e compare com a 2ª.",
E:"Com R = 2,0, k = (60 − 3)/12 000, e a 2ª equação também fecha. A conclusão não pode ser um valor único."},
res:OL(["Ensaio 1: 60 = 1,5R + 12 000k. Ensaio 2: 80 = 2,0R + 16 000k.","A equação 2 é exatamente a equação 1 multiplicada por 4/3 (60→80, 1,5→2, 12 000→16 000).","São a mesma equação: infinitas soluções (R, k). <b>Não é possível determinar R<sub>a</sub></b>.","Para medir R<sub>a</sub> seria preciso um ensaio com rotor bloqueado (n = 0 ⇒ R = V/I) ou pontos não proporcionais."])
});

Q("11-41",{
enun:P("Dois motores de corrente contínua têm potências e velocidades nominais iguais, um com excitação em derivação e outro com excitação série. Analise: I – No motor com excitação em derivação, a corrente de excitação é pequena em relação à corrente nominal. II – No motor com excitação série, a queda de tensão no enrolamento de excitação é pequena em relação à tensão nominal. III – Para ambos os motores, a queda de tensão no enrolamento de excitação é pequena. É correto o que se afirma em"),
ops:["I, apenas.","II, apenas.","III, apenas.","I e II, apenas.","I, II e III."], gab:"D",
dicas:["O campo shunt está em paralelo com a armadura. Qual tensão ele recebe?","O campo série conduz a corrente toda, mas tem poucas espiras grossas (resistência muito baixa)."],
erros:{
A:"A afirmação II também é verdadeira: o campo série tem resistência muito baixa, então a queda nele é pequena mesmo com a corrente nominal.",
B:"A afirmação I também é verdadeira: o campo em derivação tem muitas espiras finas e conduz poucos por cento da corrente nominal.",
C:"III é falsa: o campo em derivação está em paralelo com a armadura e recebe a tensão TOTAL de alimentação.",
E:"III é falsa. No motor shunt, a \"queda\" no campo é a tensão inteira da fonte, porque ele está em paralelo com ela."},
res:P("I: verdadeira (corrente de campo shunt é pequena). II: verdadeira (campo série tem baixíssima resistência). III: falsa (o campo shunt recebe a tensão total). Alternativa <b>D</b>.")
});

Q("18-22",{
enun:P("Um motor de corrente contínua shunt, alimentado por uma fonte de tensão constante e operando em suas condições nominais, subitamente perde seu circuito de campo. Essa falha durante a operação provocará a(o)"),
ops:["diminuição da velocidade do motor, devido ao aumento da tensão induzida.","inversão do fluxo de potência do motor, fazendo-o funcionar como gerador.","aumento da corrente de carga e, consequentemente, o aumento de sua velocidade.","aumento da tensão induzida no motor, aumentando sua velocidade.","travamento do rotor do motor, uma vez que o torque induzido cai a zero."], gab:"C",
dicas:["Sem campo, φ cai ao fluxo residual. O que acontece com E = kφω no instante seguinte?","Com E menor, I<sub>a</sub> = (V − E)/R<sub>a</sub> sobe. E o motor acelera para tentar recuperar E."],
erros:{
A:"A tensão induzida CAI (o fluxo cai), não aumenta. E a velocidade tende a subir, não a cair.",
B:"Para virar gerador seria preciso E &gt; V. Com o fluxo caindo, E cai, então a corrente continua entrando na máquina (motor).",
D:"A velocidade aumenta, mas a tensão induzida não aumenta: ela cai com o fluxo, e é justamente essa queda que faz a corrente subir.",
E:"O torque não vai a zero: há fluxo residual e a corrente de armadura cresce muito, então T = kφI<sub>a</sub> continua existindo e o motor tende a disparar."},
res:OL(["Perda de campo: φ cai ao residual.","E = kφω cai ⇒ I<sub>a</sub> = (V − E)/R<sub>a</sub> aumenta muito.","Para restabelecer E ≈ V com fluxo pequeno, ω tem de subir: o motor <b>dispara</b>. Alternativa C."])
});

Q("18-25",{
enun:P("A característica terminal de um gerador é a curva da tensão terminal (V<sub>T</sub>) em função da corrente de carga (I<sub>A</sub>). Ela depende da forma de excitação do circuito de campo. Sabendo que o circuito de campo do gerador é sujeito à saturação, a curva mostrada corresponde à característica terminal típica do gerador de corrente contínua"),
fig:"f18_25", ops:["série","shunt","composto subtrativo curto","composto aditivo longo","com excitação independente"], gab:"A",
dicas:["A curva parte de uma tensão baixa e SOBE com a corrente. Que tipo de gerador tem o fluxo crescendo com a carga?","Depois de saturar o campo, a reação de armadura e a queda R·I fazem a tensão cair."],
erros:{
B:"No gerador shunt a tensão CAI desde o início com o aumento da carga; nunca começa baixa e sobe.",
C:"O composto subtrativo tem a tensão caindo rapidamente com a carga (o campo série se opõe ao shunt).",
D:"O composto aditivo começa com a tensão nominal em vazio (dada pelo campo shunt) e não parte de quase zero como na figura.",
E:"Com excitação independente, a tensão em vazio já é a nominal e cai levemente com a carga."},
res:P("Em vazio só há magnetismo residual (tensão baixa). Como o campo está em série, o fluxo cresce com a corrente de carga e a tensão sobe; ao saturar, a reação de armadura e a queda resistiva fazem a curva cair. Gerador <b>série</b>.")
});

Q("18-23",{
enun:P("Um motor síncrono aciona uma carga de potência constante, com fator de potência indutivo. Ele é alimentado com tensão terminal e frequência constantes. Em determinado ponto, ajustes são feitos no motor de modo que a corrente de campo do rotor sofra um aumento. Considerando desprezíveis as perdas no motor, ocorrerá"),
ops:["consumo de menos reativos pelo motor, em virtude do aumento da tensão induzida.","consumo de mais reativos pelo motor, em virtude do aumento da tensão induzida.","diminuição do torque mecânico entregue à carga, em virtude do aumento da corrente de linha.","aumento do torque mecânico entregue à carga, em virtude do aumento da corrente de linha.","aumento da velocidade do motor, em virtude do aumento da tensão induzida."], gab:"A",
dicas:["Mais corrente de campo ⇒ E maior. Com E maior, o motor caminha de subexcitado (absorve reativo) para sobre-excitado (fornece reativo).","Potência e velocidade constantes ⇒ o torque não muda."],
erros:{
B:"É o contrário: aumentar a excitação faz o motor absorver MENOS reativo (ou fornecer, se ficar sobre-excitado).",
C:"Com potência e velocidade constantes, o torque é P/ω, constante. A corrente de linha muda por causa do reativo, não do torque.",
D:"O torque é P/ω e nenhum dos dois muda. A corrente de linha pode até diminuir, porque o reativo absorvido cai.",
E:"O motor síncrono gira na velocidade síncrona 120f/p, que não depende da excitação."},
res:P("O motor estava com FP indutivo (subexcitado, absorvendo reativo). Aumentando a corrente de campo, E aumenta e o motor passa a absorver <b>menos reativo</b>, podendo chegar a FP unitário e, depois, a fornecer reativo. Torque e velocidade não mudam.")
});

Q("23-26",{
enun:P("Duas máquinas síncronas trifásicas operam acopladas pelos eixos dos rotores. Uma tem 6 polos e a outra 8 polos. Uma opera como motor, alimentada por fonte de 60 Hz, e a outra como gerador. Sabendo que a frequência gerada é menor que 60 Hz, qual é o valor, em hertz, dessa frequência?"),
ops:["80","50","45","40","4"], gab:"C",
dicas:["Mesmo eixo ⇒ mesma velocidade: f<sub>1</sub>/p<sub>1</sub> = f<sub>2</sub>/p<sub>2</sub>.","Teste as duas hipóteses (motor de 6 ou de 8 polos) e escolha a que dá f &lt; 60 Hz."],
erros:{
A:"80 Hz sai com o motor de 6 polos (1200 rpm) e o gerador de 8 polos. Mas o enunciado diz que a frequência gerada é MENOR que 60 Hz.",
B:"50 Hz não sai das razões 6/8 ou 8/6. Use f<sub>g</sub> = 60·p<sub>g</sub>/p<sub>m</sub>.",
D:"40 Hz = 60·(4/6)? Confira as razões de polos: elas são 6/8 ou 8/6.",
E:"4 Hz não tem sentido físico aqui. Use n = 120f/p para o motor e f = p·n/120 para o gerador."},
res:OL(["Para f<sub>g</sub> &lt; 60 Hz, o gerador deve ter menos polos que o motor: motor de 8 polos, gerador de 6.","Motor: n = 120·60/8 = 900 rpm.","Gerador: f = 6·900/120 = <b>45 Hz</b>."])
});
