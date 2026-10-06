B({
id:"b16", titulo:"Controle II: estabilidade, lugar das raízes e espaço de estados",
sub:"Critério de Routh-Hurwitz (ganho crítico e frequência de oscilação), leitura do lugar das raízes, alocação de polos e conversões espaço de estados ↔ função de transferência.",
objetivos:["Achar o ganho crítico e a frequência de oscilação pelo arranjo de Routh","Ler polos, zeros e estabilidade num lugar das raízes","Fazer alocação de polos com realimentação de estados","Calcular G(s) = C(sI − A)⁻¹B + D e montar a forma canônica controlável"],
qs:["06-29","18-36","11-47","23-68","18-40","18-41","23-47","18-38","23-46","23-45"],
aula:
"<h3>1. Routh-Hurwitz para cúbicas</h3>"+
F("s³ + a<sub>2</sub>s² + a<sub>1</sub>s + a<sub>0</sub>: estável ⇔ todos &gt; 0 e a<sub>2</sub>·a<sub>1</sub> &gt; a<sub>0</sub><br>Limiar (oscilação pura): a<sub>2</sub>·a<sub>1</sub> = a<sub>0</sub> &nbsp;⇒&nbsp; polos em ±jω com ω² = a<sub>1</sub> (= a<sub>0</sub>/a<sub>2</sub>)")+
P("Com o ganho K somado ao termo independente (a<sub>0</sub> = c + K), resolva a<sub>2</sub>a<sub>1</sub> = c + K para o K crítico. A frequência de oscilação sai da linha de s² do arranjo: a<sub>2</sub>s² + a<sub>0</sub> = 0.")+
"<h3>2. Lugar das raízes (realimentação negativa, K ≥ 0)</h3>"+
"<ul><li>Começa nos polos de malha aberta (K = 0) e termina nos zeros (ou no infinito).</li><li>No eixo real, existe à esquerda de um número ÍMPAR de polos + zeros reais.</li><li>Polos (×) em 0 e −8 e zero (○) em −10 ⇒ G = K(s + 10)/[s(s + 8)].</li><li>Estabilidade: todos os polos de malha fechada no semiplano esquerdo. Um ramo que começa no semiplano direito e cruza o eixo jω torna o sistema estável a partir de certo K.</li><li>Polo de malha fechada na origem: o termo independente do polinômio característico zera.</li></ul>"+
"<h3>3. Espaço de estados</h3>"+
F("ẋ = Ax + Bu, y = Cx + Du<br>G(s) = C(sI − A)⁻¹B + D &nbsp;&nbsp; polos = autovalores de A: det(sI − A) = 0<br>Inversa 2×2: [a b; c d]⁻¹ = [d −b; −c a]/(ad − bc)")+
P("<b>Realimentação de estados</b> u = −Kx + r: a nova matriz é A − BK. Iguale det(sI − (A − BK)) ao polinômio desejado.")+
P("<b>Forma canônica controlável</b> (como na questão): A = [a b; 1 0] tem polinômio característico s² − as − b. Logo, para s² + 4s + 13: a = −4, b = −13.")+
TRAP("nos sistemas discretos (z), os polos também são os autovalores de Φ: det(zI − Φ) = 0. A estabilidade é |z| &lt; 1, e não parte real negativa."),
exemplo:{
 titulo:"Exemplo: ganho crítico por Routh",
 enun:P("Malha fechada com polinômio característico s³ + 6s² + 11s + 6 + K."),
 passos:[
  {p:"Qual o K que leva o sistema ao limiar da instabilidade?", v:60, r:"Limiar: 6·11 = 6 + K ⇒ <b>K = 60</b>.", dica:"Para cúbica: a<sub>2</sub>a<sub>1</sub> = a<sub>0</sub>."},
  {p:"Qual a frequência de oscilação (rad/s)? (3 casas)", v:3.317, tol:0.01, r:"Linha s²: 6s² + 66 = 0 ⇒ ω² = 11 ⇒ <b>ω = √11 ≈ 3,317 rad/s</b>.", dica:"ω² = a<sub>1</sub>, ou resolva a<sub>2</sub>s² + a<sub>0</sub> = 0."},
  {p:"Para K = 0, onde estão os polos? Dê o mais lento (o mais próximo da origem).", v:-1, r:"s³ + 6s² + 11s + 6 = (s + 1)(s + 2)(s + 3): o mais lento é <b>s = −1</b>.", dica:"Teste s = −1 no polinômio."}
 ],
 fecho:"A 11-47 e a 18-36 são exatamente esses passos."
}
});

Q("06-29",{
enun:P("O gráfico ilustra o lugar das raízes de um sistema de 3ª ordem, com três polos (em 0, −2 e −8), nenhum zero finito e realimentação de saída. Os ramos cruzam o eixo imaginário em ±j4. O valor do ganho K ≥ 0 que posiciona os polos de malha fechada no limiar da instabilidade é"),
fig:"f06_29", ops:["40","64","120","160","240"], gab:"D",
dicas:["G = K/[s(s + 2)(s + 8)] ⇒ s³ + 10s² + 16s + K = 0.","Routh: limiar quando 10·16 = K. Ou substitua s = j4 e iguale a zero."],
erros:{
A:"40 não anula o polinômio em s = j4. Teste: (j4)³ + 10(j4)² + 16(j4) + K = −j64 − 160 + j64 + K.",
B:"64 é o valor de (j4)³ em módulo; mas a condição de cruzamento vem da parte real: −160 + K = 0.",
C:"120 não satisfaz 10·16 = K. Expanda s(s + 2)(s + 8) com cuidado: s³ + 10s² + 16s.",
E:"240 sai de expansão errada do polinômio. (s + 2)(s + 8) = s² + 10s + 16."},
res:OL(["Polinômio: s(s + 2)(s + 8) + K = s³ + 10s² + 16s + K.","Routh: 10·16 = K ⇒ K = 160; ω² = 16 ⇒ ω = 4, coerente com o cruzamento em ±j4.","<b>K = 160</b>."])
});

Q("18-36",{
enun:P("Um sistema linear contínuo e invariante no tempo, com realimentação proporcional de saída, tem função de transferência em malha fechada K/(s³ + 10s² + 15s + K), com K &gt; 0. Qual o valor de K no limiar da instabilidade?"),
ops:["200","150","100","50","25"], gab:"B",
dicas:["Cúbica: limiar quando a<sub>2</sub>·a<sub>1</sub> = a<sub>0</sub>."],
erros:{
A:"200 &gt; 150: com esse K o sistema já está instável. O limiar é 10 × 15.",
C:"100 ainda é estável (10·15 = 150 &gt; 100). O limiar é quando a desigualdade vira igualdade.",
D:"50 é estável com folga. Use a<sub>2</sub>a<sub>1</sub> = K.",
E:"25 é estável. Calcule 10 × 15."},
res:P("Routh: 10·15 = K ⇒ <b>K = 150</b> (oscila em ω = √15 rad/s).")
});

Q("11-47",{
enun:P("O polinômio do denominador da função de transferência de um sistema em malha fechada é s³ + 12s² + 44s + 48 + K. Variando positivamente o valor de K até o sistema entrar em oscilação pura (limiar da instabilidade), o valor da frequência de oscilação, em rad/s, é"),
ops:["√12","√44","√48","√52","√87"], gab:"B",
dicas:["Limiar: 12·44 = 48 + K ⇒ K = 480.","Linha s² do Routh: 12s² + (48 + K) = 0."],
erros:{
A:"√12 usa o coeficiente de s². A frequência sai de 12ω² = 48 + K = 528.",
C:"√48 ignora o K crítico. No limiar, o termo independente é 48 + 480 = 528.",
D:"√52 não sai do arranjo. Calcule 528/12.",
E:"Refaça: K = 12·44 − 48 = 480; ω² = (48 + 480)/12 = 44."},
res:OL(["Limiar: 12·44 = 48 + K ⇒ K = 480.","12ω² = 528 ⇒ ω² = 44.","<b>ω = √44 rad/s</b>."])
});

Q("23-68",{
enun:P("A função G<sub>mf</sub>(s) = K/[s³ + 6s² + (50 − K)s + 3K − 75] corresponde a um sistema contínuo de terceira ordem em malha fechada. Para um determinado K, um dos polos estará na origem, e os outros dois estarão nas posições"),
ops:["s<sub>1</sub> = −2 e s<sub>2</sub> = −5","s<sub>1</sub> = −4 e s<sub>2</sub> = −5","s<sub>1</sub> = −3 + j4 e s<sub>2</sub> = −3 − j4","s<sub>1</sub> = −2 + j5 e s<sub>2</sub> = −2 − j5","s<sub>1</sub> = j4 e s<sub>2</sub> = −j4"], gab:"C",
dicas:["Polo na origem ⇔ termo independente nulo: 3K − 75 = 0.","Com K = 25: s(s² + 6s + 25)."],
erros:{
A:"Essas raízes seriam de s² + 7s + 10. Com K = 25, o fator quadrático é s² + 6s + 25.",
B:"Refaça: com K = 25, o coeficiente de s é 50 − 25 = 25.",
D:"−2 ± j5 são raízes de s² + 4s + 29. Aqui o coeficiente de s² é 6 ⇒ parte real −3.",
E:"Polos imaginários puros exigiriam coeficiente de s² nulo. Aqui é 6."},
res:OL(["3K − 75 = 0 ⇒ K = 25.","Polinômio: s³ + 6s² + 25s = s(s² + 6s + 25).","Raízes: <b>−3 ± j4</b>."])
});

Q("18-40",{
enun:P("Um sistema de 2ª ordem tem planta G(s) = K·N(s)/D(s). Submetido a realimentação proporcional de saída, com K variando de 0 a +∞, os polos formam o lugar das raízes da figura (polos de malha aberta em 0 e −8; zero em −10). A expressão da função de transferência de malha fechada em função de K é"),
fig:"f18_40", ops:["K/(s² + 8s + 10)","K(s + 10)/(s² + 10s + 8K)","K/(s² + 10s + 8K + 5)","K(s + 10)/[s² + (8 + K)s + 10K]","K(s + 8)/[s² + (10 + K)s + 8K]"], gab:"D",
dicas:["× = polos (0 e −8), ○ = zero (−10): G = K(s + 10)/[s(s + 8)].","T = KN/(D + KN)."],
erros:{
A:"O lugar tem um zero em −10, então o numerador tem (s + 10). E o denominador deve conter K.",
B:"D + KN = s² + 8s + Ks + 10K. O coeficiente de s é (8 + K), e o termo constante é 10K.",
C:"Falta o zero (s + 10) no numerador, e o denominador não sai de D + KN.",
E:"Trocou polo e zero: o zero (círculo) está em −10 e os polos (×) em 0 e −8."},
res:P("G = K(s + 10)/[s(s + 8)]. T = K(s + 10)/[s² + 8s + K(s + 10)] = <b>K(s + 10)/[s² + (8 + K)s + 10K]</b>.")
});

Q("18-41",{
enun:P("Um sistema de 2ª ordem tem G(s) = K(s + 5)/[(s − 2)(s + 10)]. Submetido a realimentação proporcional de saída (K de 0 a +∞), para um determinado K um dos polos de malha fechada será zero, e o outro polo terá valor igual a"),
ops:["12","5","−10","−12","−20"], gab:"D",
dicas:["Polinômio: (s − 2)(s + 10) + K(s + 5) = s² + (8 + K)s + (5K − 20).","Polo em zero ⇔ 5K − 20 = 0."],
erros:{
A:"Com K = 4 o polinômio é s² + 12s = s(s + 12): o outro polo é −12, não +12.",
B:"5 é a posição (negativa) do zero de malha aberta. Calcule o polo pelo polinômio característico.",
C:"−10 é um polo de MALHA ABERTA. Em malha fechada, com K = 4, os polos mudam.",
E:"Confira o coeficiente de s: 8 + K = 8 + 4 = 12."},
res:OL(["s² + (8 + K)s + 5K − 20.","Polo na origem: 5K − 20 = 0 ⇒ K = 4.","s² + 12s = 0 ⇒ outro polo: <b>s = −12</b>."])
});

Q("23-47",{
enun:P("A figura ilustra o esboço do lugar das raízes de um sistema com realimentação negativa, para K ≥ 0 (polos de malha aberta em 0 e 2; zeros em −1 ± 3j). Com o aumento do ganho K, o sistema em malha fechada é"),
fig:"f23_47", ops:["sempre estável, para qualquer valor de ganho K &gt; 0.","sempre instável, para qualquer valor de ganho K &gt; 0.","inicialmente instável, mas se torna estável a partir de certo valor de ganho K.","inicialmente estável, mas se torna instável a partir de certo valor de ganho K.","inicialmente estável, mas se torna instável em uma faixa de valores de ganho K."], gab:"C",
dicas:["Para K pequeno, os polos de malha fechada estão perto dos de malha aberta: um deles está em +2.","Os ramos saem do eixo real, sobem/descem e terminam nos zeros em −1 ± 3j. Eles cruzam o eixo jω?"],
erros:{
A:"Para K pequeno há um polo perto de s = +2 (semiplano direito): instável.",
B:"Os ramos terminam nos zeros −1 ± 3j, no semiplano esquerdo. Para K grande o sistema fica estável.",
D:"O sistema começa INSTÁVEL (polo de malha aberta em +2).",
E:"Uma vez que os ramos cruzam para o semiplano esquerdo, eles seguem até os zeros, sem voltar."},
res:P("K → 0: polo em +2 ⇒ instável. Os ramos se encontram no eixo real, viram complexos, cruzam o eixo jω e terminam em −1 ± 3j. A partir do K de cruzamento, todos os polos ficam no semiplano esquerdo: <b>inicialmente instável, depois estável</b>.")
});

Q("18-38",{
enun:P("Um sistema linear tem as equações de estado ẋ = "+M("0 1;−15 −8")+"x + "+M("0;1")+"u, y = [1 2]x. Aplica-se o controle u = −Kx + r, com K = [k<sub>1</sub> k<sub>2</sub>]. Para que, em malha fechada, os polos sejam complexos conjugados em s = −5 ± j10, qual será o vetor de ganhos K?"),
ops:["[10 5]","[50 4]","[110 2]","[120 2]","[110 4]"], gab:"C",
dicas:["A − BK = [0 1; −15 − k<sub>1</sub>  −8 − k<sub>2</sub>].","Polinômio: s² + (8 + k<sub>2</sub>)s + (15 + k<sub>1</sub>). Desejado: (s + 5)² + 100 = s² + 10s + 125."],
erros:{
A:"Confira o polinômio desejado: (s + 5 − j10)(s + 5 + j10) = s² + 10s + 125.",
B:"O termo independente desejado é 25 + 100 = 125, e não 65.",
D:"15 + k<sub>1</sub> = 125 ⇒ k<sub>1</sub> = 110 (não 120).",
E:"8 + k<sub>2</sub> = 10 ⇒ k<sub>2</sub> = 2."},
res:OL(["det(sI − A + BK) = s² + (8 + k<sub>2</sub>)s + 15 + k<sub>1</sub>.","Desejado: s² + 10s + 125.","k<sub>2</sub> = 2, k<sub>1</sub> = 110 ⇒ <b>K = [110 2]</b>."])
});

Q("23-46",{
enun:P("Um sistema foi modelado por G(s) = 5(s + 1)/[(s + 2 + 3j)(s + 2 − 3j)]. Se esse modelo for representado em espaço de estado, com a matriz da dinâmica no formato A = "+M("a b;1 0")+", qual deverá ser o valor de b?"),
ops:["−13","−4","0","4","13"], gab:"A",
dicas:["Denominador: (s + 2)² + 9 = s² + 4s + 13.","det(sI − A) = s(s − a) − b = s² − as − b."],
erros:{
B:"−4 é o valor de a (coeficiente de s com sinal trocado). b corresponde ao termo independente.",
C:"b = 0 daria um polo na origem. O termo independente do denominador é 13.",
D:"Sinal: det(sI − A) = s² − as − b. Para +4s, a = −4; e você procurou b, não a.",
E:"Sinal: s² − as − b = s² + 4s + 13 ⇒ −b = 13 ⇒ b = −13."},
res:OL(["Denominador: s² + 4s + 13.","sI − A = [s − a, −b; −1, s] ⇒ det = s² − as − b.","−a = 4, −b = 13 ⇒ <b>b = −13</b> (a = −4)."])
});

Q("23-45",{
enun:P("Um sistema monovariável é modelado por ẋ = "+M("−7 1;−12 0")+"x + "+M("−16;−40")+"u, y = [1 0]x + 4u. Transformando esse modelo numa função de transferência, em que posições do plano s estarão localizados seus zeros?"),
ops:["−3 e −4","−2 e −4","−2 e −3","−1 e −3","−1 e −2"], gab:"E",
dicas:["G(s) = C(sI − A)⁻¹B + D. det(sI − A) = s² + 7s + 12.","(sI − A)⁻¹ = [s 1; −12 s + 7]/Δ. Só a 1ª linha interessa (C = [1 0]). Não esqueça o D = 4."],
erros:{
A:"−3 e −4 são os POLOS (raízes de s² + 7s + 12), não os zeros.",
B:"Confira o numerador: 4(s² + 7s + 12) + (−16s − 40) = 4s² + 12s + 8.",
C:"Refaça a 1ª linha de (sI − A)⁻¹B: s·(−16) + 1·(−40) = −16s − 40.",
D:"O numerador é 4s² + 12s + 8 = 4(s + 1)(s + 2). Confira a fatoração."},
res:OL(["Δ = s(s + 7) + 12 = s² + 7s + 12 = (s + 3)(s + 4).","C(sI − A)⁻¹B = [s, 1]·[−16; −40]/Δ = (−16s − 40)/Δ.","G = (−16s − 40)/Δ + 4 = (4s² + 12s + 8)/Δ = 4(s + 1)(s + 2)/[(s + 3)(s + 4)].","Zeros: <b>−1 e −2</b>."])
});
