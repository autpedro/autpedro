B({
id:"b17", titulo:"Sinais: Laplace, transformada Z e números complexos",
sub:"Tabela básica de Laplace, frações parciais, funções complexas, transformada Z, equações a diferenças e modelos discretos em espaço de estados.",
objetivos:["Transformar e anti-transformar por frações parciais (Laplace e Z)","Separar parte real e imaginária de funções complexas","Gerar amostras de uma resposta ao impulso discreta por divisão longa ou equação a diferenças","Achar polos e função de transferência de modelos discretos em espaço de estados"],
qs:["11-50","23-64","23-65","23-43","18-37","23-66","18-68","23-70","18-39","18-60"],
aula:
"<h3>1. Laplace: o mínimo indispensável</h3>"+
F("e<sup>at</sup> ↔ 1/(s − a) &nbsp;&nbsp; 1 ↔ 1/s &nbsp;&nbsp; t ↔ 1/s² &nbsp;&nbsp; sen ωt ↔ ω/(s² + ω²) &nbsp;&nbsp; cos ωt ↔ s/(s² + ω²)<br>Linearidade: a·f + b·g ↔ a·F + b·G")+
P("<b>Frações parciais (polos simples):</b> 1/[(s − p<sub>1</sub>)(s − p<sub>2</sub>)] = A/(s − p<sub>1</sub>) + B/(s − p<sub>2</sub>), com A = 1/(p<sub>1</sub> − p<sub>2</sub>) (tampe o fator e substitua s = p<sub>1</sub>).")+
"<h3>2. Funções complexas</h3>"+
P("Para separar 1/(a + jb), multiplique pelo conjugado: (a − jb)/(a² + b²). Ângulo de um quociente = ângulo do numerador − ângulo do denominador.")+
"<h3>3. Transformada Z</h3>"+
F("aⁿu(n) ↔ z/(z − a) &nbsp;&nbsp; u(n) ↔ z/(z − 1) &nbsp;&nbsp; δ(n) ↔ 1 &nbsp;&nbsp; x(n − 1) ↔ z⁻¹X(z)")+
P("<b>Truque:</b> para anti-transformar, expanda X(z)/z em frações parciais e depois multiplique por z: cada termo vira A·z/(z − p) ↔ A·pⁿ.")+
P("<b>Primeiras amostras:</b> escreva G(z) em potências de z⁻¹ e use a equação a diferenças. Para G = (b<sub>0</sub> + b<sub>1</sub>z⁻¹ + …)/(1 + a<sub>1</sub>z⁻¹ + …), y(n) = −a<sub>1</sub>y(n−1) − … + b<sub>0</sub>x(n) + b<sub>1</sub>x(n−1) + …")+
TRAP("ao passar de z para z⁻¹, divida numerador E denominador pela maior potência de z do denominador. Se o numerador tiver grau menor, a resposta começa com zeros (atraso).")+
"<h3>4. Discreto em espaço de estados</h3>"+
F("x(k + 1) = Φx(k) + Γu(k), y = Cx &nbsp;&nbsp; G(z) = C(zI − Φ)⁻¹Γ &nbsp;&nbsp; polos: det(zI − Φ) = 0"),
exemplo:{
 titulo:"Exemplo: da transformada Z às amostras",
 enun:P("Considere X(z) = z(2z − 3)/[(z − 1)(z − 2)]."),
 passos:[
  {p:"Expanda X(z)/z = A/(z − 1) + B/(z − 2). Quanto vale A?", v:1, r:"A = (2·1 − 3)/(1 − 2) = (−1)/(−1) = <b>1</b>.", dica:"Tampe (z − 1) e substitua z = 1 no resto: (2z − 3)/(z − 2)."},
  {p:"Quanto vale B?", v:1, r:"B = (2·2 − 3)/(2 − 1) = <b>1</b>.", dica:"Tampe (z − 2) e substitua z = 2."},
  {p:"Logo x(n) = u(n) + 2ⁿu(n). Quanto vale x(3)?", v:9, r:"x(3) = 1 + 2³ = <b>9</b>.", dica:"z/(z − a) ↔ aⁿ."},
  {p:"Confira pela equação a diferenças: X = (2 − 3z⁻¹)/(1 − 3z⁻¹ + 2z⁻²). Calcule x(1).", v:3, r:"x(0) = 2; x(1) = 3·x(0) − 3 = <b>3</b> (= 1 + 2¹ ✓).", dica:"x(n) = 3x(n−1) − 2x(n−2) + 2δ(n) − 3δ(n−1)."}
 ],
 fecho:"A 18-37 e a 23-66 usam exatamente esse vai e volta."
}
});

Q("11-50",{
enun:P("Considere o sinal causal v(t) = 10e<sup>−2t</sup> − 5e<sup>−5t</sup> para t ≥ 0 e nulo para t &lt; 0. A transformada de Laplace de v(t) é"),
ops:["5/(s² + 7s + 10)","5(s + 8)/(s² + 7s + 10)","(s + 8)/(s² − 7s + 10)","(5s + 10)/(s² + 7s − 10)","8/(s² − 7s + 10)"], gab:"B",
dicas:["10/(s + 2) − 5/(s + 5).","Denominador comum (s + 2)(s + 5) = s² + 7s + 10. Numerador: 10(s + 5) − 5(s + 2)."],
erros:{
A:"O numerador deve depender de s: 10(s + 5) − 5(s + 2) = 5s + 40.",
C:"e<sup>−2t</sup> ↔ 1/(s + 2): o denominador fica s² + 7s + 10 (sinais positivos). E falta o fator 5.",
D:"(s + 2)(s + 5) = s² + 7s + 10 (termo constante positivo). Refaça o numerador.",
E:"Sinais do denominador e numerador errados. Use e<sup>at</sup> ↔ 1/(s − a) com a = −2 e −5."},
res:P("V(s) = 10/(s + 2) − 5/(s + 5) = [10s + 50 − 5s − 10]/[(s + 2)(s + 5)] = <b>5(s + 8)/(s² + 7s + 10)</b>.")
});

Q("23-64",{
enun:P("Sabe-se que a Transformada de Laplace de f(t) = e<sup>at</sup>, t ≥ 0, é F(s) = 1/(s − a). A Transformada Inversa de G(s) = 1/(s² − 5s + 6), para t ≥ 0, é"),
ops:["e<sup>2t</sup> + e<sup>3t</sup>","e<sup>−2t</sup> + e<sup>−3t</sup>","e<sup>2t</sup> − e<sup>3t</sup>","e<sup>3t</sup> − e<sup>2t</sup>","e<sup>3t</sup> + e<sup>t</sup>"], gab:"D",
dicas:["s² − 5s + 6 = (s − 2)(s − 3).","1/[(s − 2)(s − 3)] = A/(s − 2) + B/(s − 3), com A = 1/(2 − 3)."],
erros:{
A:"Os coeficientes das frações parciais não são ambos +1: A = 1/(2 − 3) = −1.",
B:"As raízes são +2 e +3 (s² − 5s + 6): as exponenciais são crescentes.",
C:"Sinais trocados: A = −1 (termo e<sup>2t</sup>) e B = +1 (termo e<sup>3t</sup>).",
E:"As raízes de s² − 5s + 6 são 2 e 3, não 1 e 3."},
res:P("A = 1/(2 − 3) = −1; B = 1/(3 − 2) = 1. G = −1/(s − 2) + 1/(s − 3) ⇒ <b>g(t) = e<sup>3t</sup> − e<sup>2t</sup></b>.")
});

Q("23-65",{
enun:P("Considere a função f(z) = 1/(z + 1), de variável complexa z = x + jy. Decompondo em partes real e imaginária, f(z) = u(x, y) + jv(x, y). A expressão de v(x, y) é"),
ops:["x/(x² + y²)","−y/(x² + y² + 2x + 1)","y/(x² + y² + 2x + 1)","(x + 1)/(x² + y² + 2x + 1)","2/(x² + y² + 2x)"], gab:"B",
dicas:["f = 1/[(x + 1) + jy]. Multiplique pelo conjugado (x + 1) − jy.","Denominador: (x + 1)² + y² = x² + 2x + 1 + y²."],
erros:{
A:"Não esqueça o +1 em z + 1: o denominador é (x + 1)² + y².",
C:"O sinal: ao multiplicar pelo conjugado, a parte imaginária do numerador é −y.",
D:"(x + 1)/[(x + 1)² + y²] é a parte REAL u(x, y).",
E:"Refaça a multiplicação pelo conjugado; o numerador da parte imaginária é −y."},
res:P("f = [(x + 1) − jy]/[(x + 1)² + y²] ⇒ <b>v = −y/(x² + y² + 2x + 1)</b>.")
});

Q("23-43",{
enun:P("Seja G(s) = 5(s − 2)/(s + 2), com s complexo. Se s = 2j, qual deverá ser o ângulo de fase de G(s), em graus?"),
ops:["45°","90°","135°","180°","315°"], gab:"B",
dicas:["Ângulo = ∠(2j − 2) − ∠(2j + 2).","−2 + 2j está no 2º quadrante (135°); 2 + 2j está no 1º (45°)."],
erros:{
A:"45° é o ângulo do denominador. Falta o do numerador (135°).",
C:"135° é só o ângulo do numerador. Subtraia o do denominador.",
D:"180° corresponderia a −1 em fase. Calcule 135° − 45°.",
E:"315° = −45°. Confira o quadrante de −2 + 2j: segundo quadrante, 135°."},
res:P("∠G = ∠5 + ∠(−2 + 2j) − ∠(2 + 2j) = 0 + 135° − 45° = <b>90°</b>.")
});

Q("18-37",{
enun:P("Uma sequência x(n) discreta e causal tem transformada Z: X(z) = (7z² − 11z)/(z² − 4z + 3). A expressão mais simples, em função do degrau unitário u(n), é"),
ops:["x(n) = 7u(n) − 11u(n − 1)","x(n) = 5u(n) − 2(5)ⁿu(n − 1)","x(n) = 2u(n) + 5(3)ⁿu(n)","x(n) = 5u(n) + 2(3)ⁿu(n)","x(n) = 2u(n) + 11(4)ⁿu(n)"], gab:"C",
dicas:["X(z)/z = (7z − 11)/[(z − 1)(z − 3)].","A (em z = 1) = (7 − 11)/(1 − 3) = 2; B (em z = 3) = (21 − 11)/(3 − 1)."],
erros:{
A:"Os coeficientes 7 e 11 são do numerador; não dá para ler direto. Faça frações parciais de X(z)/z.",
B:"Os polos são z = 1 e z = 3 (raízes de z² − 4z + 3), então os termos são 1ⁿ e 3ⁿ.",
D:"Coeficientes trocados: o termo constante (polo em 1) vale 2 e o termo 3ⁿ vale 5.",
E:"Não há polo em z = 4; as raízes de z² − 4z + 3 são 1 e 3."},
res:OL(["X/z = 2/(z − 1) + 5/(z − 3).","X = 2z/(z − 1) + 5z/(z − 3).","<b>x(n) = 2u(n) + 5·3ⁿu(n)</b>. Confira: x(0) = 7 ✓."])
});

Q("23-66",{
enun:P("Uma sequência discreta e causal tem lei de formação x(n) = αx(n − 1) + βx(n − 2) + δ(n) para n ≥ 0, sendo x(n) = 0 para n &lt; 0. As cinco primeiras amostras são x(0) = 1; x(1) = 2; x(2) = 7; x(3) = 20; x(4) = 61. A transformada Z dessa sequência é"),
ops:["(z² − 1)/(z² − 2z − 3)","z/(z² − 2z − 3)","z²/(z² − 2z − 3)","1/(z² − 2z − 3)","z²/(z² + 2z + 3)"], gab:"C",
dicas:["x(1) = α·x(0) ⇒ α = 2. x(2) = α·x(1) + β·x(0) ⇒ β = 3.","X(1 − 2z⁻¹ − 3z⁻²) = 1."],
erros:{
A:"Não há termo −z⁻² no numerador: a entrada é só δ(n), que dá 1.",
B:"z/(z² − 2z − 3) = z⁻¹/(1 − …): começaria com x(0) = 0. Mas x(0) = 1.",
D:"1/(z² − 2z − 3) começa com x(0) = x(1) = 0 (atraso de duas amostras).",
E:"Com α = 2 e β = 3, o denominador fica 1 − 2z⁻¹ − 3z⁻² ⇒ z² − 2z − 3 (sinais negativos)."},
res:OL(["α = 2, β = 3 (confira: x(3) = 2·7 + 3·2 = 20 ✓).","X(z)(1 − 2z⁻¹ − 3z⁻²) = 1.","<b>X(z) = z²/(z² − 2z − 3)</b>."])
});

Q("18-68",{
enun:P("Considere o processo industrial modelado por Y(z)/U(z) = (10z + M)/(z² − 1,2z + 0,2), discreto e causal (y(k) = 0 para k &lt; 0). Sabendo que a resposta ao impulso unitário é y(k) = {0, 10, 17, …}, qual é o valor do parâmetro M?"),
ops:["1","3","5","7","9"], gab:"C",
dicas:["Em z⁻¹: (10z⁻¹ + Mz⁻²)/(1 − 1,2z⁻¹ + 0,2z⁻²).","y(k) = 1,2y(k − 1) − 0,2y(k − 2) + 10u(k − 1) + Mu(k − 2). Com impulso: y(2) = 1,2·10 + M."],
erros:{
A:"Com M = 1, y(2) = 12 + 1 = 13 ≠ 17.",
B:"Com M = 3, y(2) = 15. Confira a recursão: y(2) = 1,2·y(1) − 0,2·y(0) + M.",
D:"M = 7 sai de 17 − 10: o termo de y(1) entra multiplicado por 1,2 (12, e não 10).",
E:"Com M = 9, y(2) = 21."},
res:P("y(2) = 1,2·y(1) − 0,2·y(0) + M·δ(0) = 12 − 0 + M = 17 ⇒ <b>M = 5</b>.")
});

Q("23-70",{
enun:P("A função G(z) = Y(z)/X(z) = (3z² − 3z)/(z² − 6z + 5) representa um sistema discreto, linear e causal. Submetido a uma entrada impulso unitário x(n) = δ(n), quais serão as três primeiras amostras y(0), y(1), y(2)?"),
ops:["2, 5 e 8","5, 15 e 36","5, 20 e 45","3, 25 e 87","3, 15 e 75"], gab:"E",
dicas:["Em z⁻¹: (3 − 3z⁻¹)/(1 − 6z⁻¹ + 5z⁻²).","y(n) = 6y(n − 1) − 5y(n − 2) + 3δ(n) − 3δ(n − 1)."],
erros:{
A:"y(0) é o coeficiente do termo de mais alto grau: 3/1 = 3.",
B:"y(0) = 3, e não 5. Confira a divisão: 3z²/z².",
C:"y(0) = 3. Refaça a recursão a partir daí.",
D:"y(1) = 6·3 − 3 = 15, não 25. Lembre do termo −3δ(n − 1)."},
res:OL(["y(0) = 3.","y(1) = 6·3 − 3 = 15.","y(2) = 6·15 − 5·3 = 75.","<b>3, 15 e 75</b>. (Também sai de y(n) = 3·5ⁿ: G = 3z/(z − 5).)"])
});

Q("18-39",{
enun:P("Considere as equações de estado de um sistema discreto de 2ª ordem: X(k + 1) = ΦX(k) + Γu(k) e y(k) = CX(k), com Φ = "+M("1 −2;5 10")+", Γ = "+M("−1;1")+" e C = [1 0]. Os polos desse sistema são obtidos calculando as raízes do polinômio"),
ops:["z² + 10z + 5 = 0","z² + 5z + 10 = 0","z² − 11z + 20 = 0","z² + 11z = 0","z² + 15 = 0"], gab:"C",
dicas:["zI − Φ = [z − 1, 2; −5, z − 10].","det = (z − 1)(z − 10) − (2)(−5)."],
erros:{
A:"Os coeficientes não vêm direto das entradas de Φ. Calcule det(zI − Φ).",
B:"Calcule det(zI − Φ) com zI − Φ = [z − 1, 2; −5, z − 10]. O coeficiente de z é −(traço de Φ) = −11.",
D:"Faltou o termo constante: (z − 1)(z − 10) = z² − 11z + 10, e ainda há +10 do produto cruzado.",
E:"O traço de Φ (1 + 10) dá o coeficiente de z: −11z."},
res:P("zI − Φ = [z − 1, 2; −5, z − 10]. det = (z − 1)(z − 10) − (2)(−5) = z² − 11z + 10 + 10 = <b>z² − 11z + 20</b>.")
});

Q("18-60",{
enun:P("Um sistema foi modelado por x(k + 1) = "+M("0,2 1;0 0,3")+"x(k) + "+M("1;2")+"u(k), y(k) = [1 0]x(k). A função de transferência G(z) = Y(z)/U(z) é"),
ops:["(z + 1,3)/[(z − 0,2)(z − 0,5)]","(z + 2,3)/[(z − 0,4)(z − 0,5)]","(z + 2,1)/[(z − 0,3)(z − 0,4)]","(z + 2,7)/[(z − 0,2)(z − 0,4)]","(z + 1,7)/[(z − 0,2)(z − 0,3)]"], gab:"E",
dicas:["Φ é triangular: polos = diagonal (0,2 e 0,3).","(zI − Φ)⁻¹ = [z − 0,3, 1; 0, z − 0,2]/[(z − 0,2)(z − 0,3)]. Primeira linha × Γ."],
erros:{
A:"Os polos de uma matriz triangular são os elementos da diagonal: 0,2 e 0,3.",
B:"Polos errados: a diagonal de Φ é 0,2 e 0,3.",
C:"Confira os polos (0,2 e 0,3) e o numerador: (z − 0,3)·1 + 1·2.",
D:"Polos: 0,2 e 0,3. Numerador: z − 0,3 + 2 = z + 1,7."},
res:OL(["Polos: 0,2 e 0,3.","C(zI − Φ)⁻¹Γ = [z − 0,3, 1]·[1; 2]/Δ = (z − 0,3 + 2)/Δ.","<b>G(z) = (z + 1,7)/[(z − 0,2)(z − 0,3)]</b>."])
});
