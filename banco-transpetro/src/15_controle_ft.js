B({
id:"b15", titulo:"Controle I: funções de transferência, blocos e 2ª ordem",
sub:"Da equação diferencial à função de transferência, redução de diagramas de blocos, malha fechada e parâmetros ζ e ω<sub>n</sub>.",
objetivos:["Passar de equação diferencial para G(s) (e vice-versa)","Reduzir diagramas de blocos com realimentação, inclusive com compensador na realimentação","Ler ζ e ω<sub>n</sub> da forma padrão e da posição dos polos","Classificar respostas (sub, criticamente e superamortecida)"],
qs:["11-51","18-42","11-52","11-49","18-69","23-69","11-54","11-55","18-67"],
aula:
"<h3>1. Da EDO para G(s)</h3>"+
P("Com condições iniciais nulas, troque cada derivada de ordem k por s<sup>k</sup>. G(s) = Y(s)/X(s) = (polinômio do lado da entrada)/(polinômio do lado da saída). Simplifique fatores comuns (s que aparece no numerador e no denominador).")+
F("Exemplo: y'' + 3y' + 2y = 4x' + x ⇒ G(s) = (4s + 1)/(s² + 3s + 2)")+
"<h3>2. Realimentação</h3>"+
F("Realimentação negativa: T(s) = G/(1 + G·H) &nbsp;&nbsp; Unitária: T = G/(1 + G)<br>Com G = N<sub>G</sub>/D<sub>G</sub> e H = N<sub>H</sub>/D<sub>H</sub>: T = N<sub>G</sub>D<sub>H</sub>/(D<sub>G</sub>D<sub>H</sub> + N<sub>G</sub>N<sub>H</sub>)")+
TRAP("com compensador H na realimentação, o denominador de H aparece no NUMERADOR de T. Não basta somar as funções.")+
P("<b>Cadeia de integradores com realimentações:</b> se o sinal após o somador é e, as saídas dos integradores são e/s, e/s², e/s³. Cada realimentação −k de um ponto vira um termo k/s<sup>i</sup> na equação do somador.")+
"<h3>3. Segunda ordem</h3>"+
F("G(s) = ω<sub>n</sub>²/(s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²) &nbsp;&nbsp; polos: −ζω<sub>n</sub> ± jω<sub>n</sub>√(1 − ζ²)<br>|polo| = ω<sub>n</sub> &nbsp;&nbsp; cos(ângulo com o eixo real negativo) = ζ")+
"<ul><li>ζ &gt; 1: superamortecido (polos reais distintos). ζ = 1: crítico. 0 &lt; ζ &lt; 1: subamortecido (oscila). ζ = 0: oscilação pura.</li><li>Antes de ler os coeficientes, deixe s² com coeficiente 1 (divida tudo).</li></ul>",
exemplo:{
 titulo:"Exemplo: fechando a malha",
 enun:P("Planta G(s) = 9/[s(s + 2)] com realimentação unitária negativa."),
 passos:[
  {p:"Qual o polinômio característico? Dê o coeficiente do termo em s.", v:2, r:"T = 9/(s² + 2s + 9): coeficiente de s = <b>2</b>.", dica:"T = G/(1 + G) ⇒ denominador s(s + 2) + 9."},
  {p:"Qual ω<sub>n</sub> (rad/s)?", v:3, r:"ω<sub>n</sub>² = 9 ⇒ <b>ω<sub>n</sub> = 3 rad/s</b>.", dica:"Compare com s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²."},
  {p:"Qual ζ? (3 casas)", v:0.333, tol:0.01, r:"2ζ·3 = 2 ⇒ <b>ζ = 1/3 ≈ 0,333</b> (subamortecido).", dica:"2ζω<sub>n</sub> = coeficiente de s."},
  {p:"Qual a parte imaginária dos polos (rad/s)? (3 casas)", v:2.828, tol:0.01, r:"Polos: −1 ± j√8 = −1 ± <b>j2,828</b>.", dica:"Resolva s² + 2s + 9 = 0, ou use ω<sub>n</sub>√(1 − ζ²)."}
 ],
 fecho:"A 18-69 é este exemplo com outros números."
}
});

Q("11-51",{
enun:P("Um sistema com entrada x(t) e saída y(t) tem a dinâmica 0,05·d⁴y/dt⁴ + 0,25·d³y/dt³ + dy/dt = 5·d²x/dt² + 20·dx/dt. A função de transferência Y(s)/X(s) é"),
ops:["100(s + 4)/(s³ + 5s² + 20)","5(s + 20)/(s⁴ + 15s³ + 66s² + 80s)","20/(s³ + 10s² + 16)","100(s + 5)/(s⁴ + 5s³ + 20s² + 10s)","(20s + 5)/(s⁴ + 5s³ + 20s)"], gab:"A",
dicas:["G(s) = (5s² + 20s)/(0,05s⁴ + 0,25s³ + s).","Multiplique numerador e denominador por 20 e cancele o fator s comum."],
erros:{
B:"Esse denominador não vem da equação dada. Transforme termo a termo: 0,05s⁴ + 0,25s³ + s.",
C:"O numerador tem um zero em s = −4 (5s² + 20s = 5s(s + 4)). Não some com ele.",
D:"Confira o denominador: não há termo em s² na equação de y, e o termo em s tem coeficiente 1 (×20 = 20).",
E:"Faltou cancelar o fator s comum e normalizar os coeficientes (multiplicar por 20)."},
res:OL(["G = (5s² + 20s)/(0,05s⁴ + 0,25s³ + s).","× 20/20: (100s² + 400s)/(s⁴ + 5s³ + 20s) = 100s(s + 4)/[s(s³ + 5s² + 20)].","<b>G = 100(s + 4)/(s³ + 5s² + 20)</b>."])
});

Q("18-42",{
enun:P("Um sistema linear tem como entrada a tensão v(t) e como saída a corrente i(t), com a dinâmica d²i/dt² + 4·di/dt + 29i = 10·dv/dt + 5v. A função de transferência H(s) = I(s)/V(s) apresenta, no plano s, um zero real em"),
ops:["s = −2 e dois polos reais s = −4 e s = −29","s = −0,5 e dois polos reais s = −2 e s = −8","s = +2 e dois polos complexos conjugados s = −2 ± j5","s = +0,5 e dois polos complexos conjugados s = 2 ± j5","s = −0,5 e dois polos complexos conjugados s = −2 ± j5"], gab:"E",
dicas:["H(s) = (10s + 5)/(s² + 4s + 29).","Zero: 10s + 5 = 0. Polos: Δ = 16 − 116 &lt; 0."],
erros:{
A:"−4 e −29 são coeficientes do denominador, não suas raízes. Resolva s² + 4s + 29 = 0.",
B:"O zero está certo, mas os polos são complexos: Δ = 16 − 4·29 &lt; 0.",
C:"10s + 5 = 0 dá s = −0,5 (negativo). Os polos estão certos.",
D:"Zero e polos com sinais errados: as raízes de s² + 4s + 29 têm parte real −2."},
res:P("H(s) = (10s + 5)/(s² + 4s + 29). Zero: s = −0,5. Polos: s = (−4 ± √(16 − 116))/2 = −2 ± j5. Alternativa <b>E</b>.")
});

Q("11-52",{
enun:P("A figura mostra uma estrutura de controle em malha fechada, onde G(s) = (s + 5)/(s² + 10s + 16) é a planta e H(s) = K/[s(s + 5)] é o compensador na realimentação. A função de transferência de malha fechada é"),
fig:"f11_52", ops:["K(s + 5)/(s⁴ + 15s³ + 66s² + 80s)","K/(s⁴ + 15s³ + 66s² + 80s)","K(s + 5)/(s³ + 10s² + 16s + K)","s(s + 5)/(s³ + 10s² + 16s + K)","K(s + 5)/(s⁴ + 15s³ + 66s² + 80s + K)"], gab:"D",
dicas:["T = G/(1 + GH). Calcule GH: o (s + 5) cancela.","GH = K/[s(s² + 10s + 16)]. Então 1 + GH = [s(s² + 10s + 16) + K]/[s(s² + 10s + 16)]."],
erros:{
A:"Esse é o produto G·H sem realimentação (e com K no lugar errado). A malha fechada é G/(1 + GH).",
B:"Malha fechada não é só o ganho dividido pelo denominador de malha aberta. Use T = G/(1 + GH).",
C:"O denominador está certo, mas o numerador não: o denominador de H [s(s + 5)] vai para o numerador de T.",
E:"Na realimentação, o K entra no denominador de T, e o numerador deve conter s(s + 5), que vem do denominador de H."},
res:OL(["GH = (s + 5)K/[(s² + 10s + 16)·s(s + 5)] = K/[s(s² + 10s + 16)].","T = G/(1 + GH) = [(s + 5)/(s² + 10s + 16)] · s(s² + 10s + 16)/[s(s² + 10s + 16) + K].","<b>T = s(s + 5)/(s³ + 10s² + 16s + K)</b>."])
});

Q("11-49",{
enun:P("O diagrama de blocos da figura representa um sistema linear com entrada X(s) e saída Y(s): três integradores 1/s em cascata, com realimentações −3 (após o 1º integrador), −5 (após o 2º) e −8 (após o 3º, na saída), todas para o somador de entrada. A expressão de Y(s) é"),
fig:"f11_49", ops:["X(s)/[(s + 3)(s + 5)(s + 8)]","sX(s)/(s³ + 3s² + 5s + 8)","X(s)/(s³ + 3s² + 5s + 8)","X(s)/(s³ + 8s² + 5s + 3)","(s + 1)X(s)/(s³ + 8s² + 5s + 3)"], gab:"C",
dicas:["Chame de E a saída do somador. As saídas dos integradores são E/s, E/s² e E/s³ = Y.","Somador: E = X − 3E/s − 5E/s² − 8E/s³. Multiplique por s³."],
erros:{
A:"As realimentações não estão em malhas locais separadas em torno de cada integrador; todas voltam ao somador de entrada. O denominador não fatora como (s + 3)(s + 5)(s + 8).",
B:"Não há derivador no caminho direto: Y = E/s³, sem s no numerador.",
D:"Coeficientes invertidos: a realimentação logo após o 1º integrador (−3) multiplica E/s, que vira 3s² depois de multiplicar por s³.",
E:"Não há zero no sistema: o caminho direto é só 1/s³."},
res:OL(["E(1 + 3/s + 5/s² + 8/s³) = X.","Multiplicando por s³: E(s³ + 3s² + 5s + 8) = s³X.","Y = E/s³ ⇒ <b>Y = X/(s³ + 3s² + 5s + 8)</b>."])
});

Q("18-69",{
enun:P("O engenheiro alterou o comportamento dinâmico de uma planta G(s) = 5/[s(s + 2)] por meio de realimentação unitária. Em malha fechada, as novas posições dos polos no plano s serão"),
fig:"f18_69", ops:["s = −1 ± 2j","s = −1 ± 4j","s = −2 ± 2j","s = −2 ± 4j","s = −4 ± 2j"], gab:"A",
dicas:["Polinômio característico: s(s + 2) + 5.","Resolva s² + 2s + 5 = 0."],
erros:{
B:"Confira o discriminante: 4 − 20 = −16 ⇒ √−16 = 4j, dividido por 2 dá 2j.",
C:"A parte real é −b/2 = −2/2 = −1.",
D:"Parte real e imaginária estão dobradas: lembre de dividir por 2 na fórmula de Bhaskara.",
E:"Refaça: s = [−2 ± √(4 − 20)]/2."},
res:P("1 + G = 0 ⇒ s² + 2s + 5 = 0 ⇒ s = (−2 ± 4j)/2 = <b>−1 ± 2j</b>.")
});

Q("23-69",{
enun:P("A função de transferência Y(s)/U(s) = 200/(2s² + 8s + 200) representa um sistema contínuo de 2ª ordem. Ao aplicar um impulso unitário, a saída oscila como uma senoide exponencialmente amortecida. A razão de amortecimento desse sistema vale"),
ops:["0,1","0,2","0,4","0,5","0,8"], gab:"B",
dicas:["Divida por 2: 100/(s² + 4s + 100).","ω<sub>n</sub> = 10 e 2ζω<sub>n</sub> = 4."],
erros:{
A:"0,1 sai de algum fator 2 a mais. Confira: 2ζ·10 = 4.",
C:"0,4 = 4/10: você esqueceu o 2 em 2ζω<sub>n</sub>.",
D:"Normalize o denominador primeiro (coeficiente de s² = 1): s² + 4s + 100.",
E:"0,8 = 8/10: além do fator 2, você usou o coeficiente 8 sem dividir a equação por 2."},
res:P("Normalizando: s² + 4s + 100. ω<sub>n</sub> = 10 rad/s; 2ζω<sub>n</sub> = 4 ⇒ <b>ζ = 0,2</b>.")
});

Q("11-54",{
enun:P("Um sistema de 2ª ordem, na forma padrão G(s) = ω<sub>n</sub>²/(s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²), tem polos em −3 ± j4 (Figura 1). Esse sistema apresenta razão de amortecimento igual a"),
fig:"f11_54", ops:["0,2","0,4","0,6","0,8","1,0"], gab:"C",
dicas:["ω<sub>n</sub> é a distância do polo à origem: √(3² + 4²).","ζω<sub>n</sub> é o módulo da parte real."],
erros:{
A:"Confira ω<sub>n</sub> = 5 (triângulo 3-4-5). ζ = 3/5.",
B:"0,4 não sai da geometria. ζ = parte real/distância à origem = 3/5.",
D:"0,8 = 4/5 usa a parte IMAGINÁRIA. ζ = cos θ = parte real/ω<sub>n</sub>.",
E:"ζ = 1 exigiria polos reais duplos. Aqui há parte imaginária."},
res:P("ω<sub>n</sub> = √(9 + 16) = 5; ζω<sub>n</sub> = 3 ⇒ <b>ζ = 0,6</b>.")
});

Q("11-55",{
enun:P("Considere o diagrama de realimentação unitária da Figura 2, com G(s) = K/[s(s + a)], onde o ganho K varia positivamente até os polos alcançarem as posições da Figura 1 (−3 ± j4). Os valores de a e K são, respectivamente"),
fig:"f11_55", ops:["3 e 25","3 e 12","5 e 15","6 e 12","6 e 25"], gab:"E",
dicas:["Malha fechada: s² + as + K.","Polinômio desejado: (s + 3)² + 16 = s² + 6s + 25."],
erros:{
A:"K = 25 está certo, mas a é o coeficiente de s: 2 × 3 = 6.",
B:"Expanda (s + 3 − 4j)(s + 3 + 4j) = s² + 6s + 25.",
C:"Confira: a soma dos polos é −6 (então a = 6) e o produto é 9 + 16 = 25.",
D:"a = 6 está certo, mas K é o termo independente: 3² + 4² = 25."},
res:P("1 + K/[s(s + a)] = 0 ⇒ s² + as + K. Com polos −3 ± j4: s² + 6s + 25 ⇒ <b>a = 6, K = 25</b>.")
});

Q("18-67",{
enun:P("Um sistema formado por dois equipamentos, 4/(s + 2) e 1/(s + 5) em cascata, funcionava com a chave Ch1 aberta e teve seu comportamento modificado quando Ch1 foi fechada (realimentação negativa com ganho 5). Para uma entrada degrau em r(t), os tipos de comportamento da saída c(t) com Ch1 aberta e depois fechada são, respectivamente"),
fig:"f18_67", ops:["superamortecido e criticamente amortecido","superamortecido e superamortecido","superamortecido e subamortecido","subamortecido e superamortecido","subamortecido e subamortecido"], gab:"C",
dicas:["Aberta: G = 4/[(s + 2)(s + 5)], polos reais −2 e −5.","Fechada: 1 + 5G = 0 ⇒ (s + 2)(s + 5) + 20 = s² + 7s + 30. Calcule o discriminante."],
erros:{
A:"Para crítico, o discriminante seria zero: 49 − 120 ≠ 0.",
B:"Com Ch1 fechada, o discriminante 49 − 120 é negativo: polos complexos.",
D:"Com Ch1 aberta, os polos são −2 e −5, reais e distintos: superamortecido.",
E:"Malha aberta tem polos reais (−2 e −5). Não oscila."},
res:OL(["Aberta: polos −2 e −5 (reais distintos) ⇒ superamortecido.","Fechada: s² + 7s + 30, Δ = 49 − 120 &lt; 0 ⇒ polos complexos (ζ = 7/(2√30) ≈ 0,64) ⇒ subamortecido.","Resposta: <b>superamortecido e subamortecido</b>."])
});
