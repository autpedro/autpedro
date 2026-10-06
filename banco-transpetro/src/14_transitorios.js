B({
id:"b14", titulo:"Transitórios e circuitos no domínio s",
sub:"Circuitos RC, RL e RLC: constante de tempo, equações diferenciais, condições iniciais e funções de transferência por impedâncias.",
objetivos:["Escrever a resposta ao degrau de RC e RL com a constante de tempo certa","Montar a equação diferencial de um circuito simples","Achar funções de transferência por divisor de impedâncias em s","Incluir condições iniciais de L e C na transformada de Laplace","Montar um modelo em espaço de estados de um RLC"],
qs:["23-48","23-67","18-63","18-62","06-31","18-58"],
aula:
"<h3>1. Primeira ordem</h3>"+
F("RC: τ = R·C &nbsp;&nbsp; v<sub>C</sub>(t) = V<sub>final</sub> + (V<sub>inicial</sub> − V<sub>final</sub>)·e<sup>−t/τ</sup><br>RL: τ = L/R &nbsp;&nbsp; i(t) = (E/R)·(1 − e<sup>−Rt/L</sup>) para degrau E com i(0) = 0")+
P("Depois de 3τ a resposta chegou a 95%; depois de 5τ, a mais de 99%.")+
TRAP("no RL a constante é L/R, não R·L. Confira as unidades: H/Ω = s.")+
"<h3>2. Impedâncias em s</h3>"+
F("Z<sub>R</sub> = R, Z<sub>L</sub> = sL, Z<sub>C</sub> = 1/(sC)<br>Divisor: V<sub>o</sub>/V<sub>i</sub> = Z<sub>saída</sub>/(Z<sub>série</sub> + Z<sub>saída</sub>)<br>Paralelo: Z<sub>1</sub>Z<sub>2</sub>/(Z<sub>1</sub> + Z<sub>2</sub>)")+
P("RC passa-baixas (saída no C): V<sub>o</sub>/V<sub>i</sub> = 1/(RCs + 1) ⇔ RC·dV<sub>o</sub>/dt + V<sub>o</sub> = V<sub>i</sub>.")+
"<h3>3. Condições iniciais em Laplace</h3>"+
F("Capacitor: i = C·dv/dt → I(s) = C·[sV(s) − v(0)]<br>Indutor: v = L·di/dt → V(s) = L·[sI(s) − i(0)]")+
P("Roteiro para chave que muda em t = 0: (1) regime antes da manobra (C aberto, L curto) para achar v<sub>C</sub>(0) e i<sub>L</sub>(0); (2) circuito depois da manobra; (3) equações de nó em s com os termos de condição inicial.")+
"<h3>4. Espaço de estados de um RLC série (saída no C)</h3>"+
F("LC·ë<sub>o</sub> + RC·ė<sub>o</sub> + e<sub>o</sub> = e<sub>i</sub><br>x<sub>1</sub> = e<sub>o</sub>, x<sub>2</sub> = ė<sub>o</sub>: &nbsp; ẋ<sub>2</sub> = −(1/LC)x<sub>1</sub> − (R/L)x<sub>2</sub> + (1/LC)e<sub>i</sub>"),
exemplo:{
 titulo:"Exemplo: RC com chave",
 enun:P("Uma fonte de 20 V carrega, por um resistor de 50 kΩ, um capacitor de 200 µF inicialmente descarregado. A chave fecha em t = 0."),
 passos:[
  {p:"Qual a constante de tempo (em s)?", v:10, r:"τ = 50·10³ × 200·10⁻⁶ = <b>10 s</b>.", dica:"τ = RC; cuidado com os prefixos k e µ."},
  {p:"Qual a tensão no capacitor em t = 10 s (em V)? (2 casas)", v:12.64, tol:0.01, r:"v = 20(1 − e<sup>−1</sup>) = 20 × 0,632 = <b>12,64 V</b>.", dica:"v(t) = V(1 − e<sup>−t/τ</sup>)."},
  {p:"Em quanto tempo o capacitor chega a 95% da carga (em s)?", v:30, tol:0.02, r:"1 − e<sup>−t/10</sup> = 0,95 ⇒ t = 10·ln 20 ≈ <b>30 s</b> (3τ).", dica:"e<sup>−3</sup> ≈ 0,05."},
  {p:"Qual a corrente no instante t = 0⁺ (em mA)?", v:0.4, r:"Em t = 0⁺ o capacitor descarregado age como curto: i = 20/50 k = <b>0,4 mA</b>.", dica:"Capacitor descarregado não tem tensão: no primeiro instante, toda a tensão da fonte está no resistor."}
 ],
 fecho:"A 23-48 é o passo 2 com t = 3τ."
}
});

Q("23-48",{
enun:P("Considere o circuito da figura, alimentado por uma fonte DC de 12 V, com resistor de 10 kΩ e capacitor de 1 mF inicialmente descarregado. No instante t = 0, a chave S é fechada. A expressão de V<sub>o</sub>, em volts, no instante t = 30 s é"),
fig:"f23_48", ops:["12(1 − e<sup>−0,3</sup>)","12(1 − e<sup>−1</sup>)","12(1 − e<sup>−3</sup>)","12(1 − e<sup>−10</sup>)","12(1 − e<sup>−30</sup>)"], gab:"C",
dicas:["τ = RC = 10·10³ × 1·10⁻³.","O expoente é −t/τ."],
erros:{
A:"−0,3 sai de t·RC/1000 ou de usar τ = 100 s. Confira: 10 kΩ × 1 mF = 10 s.",
B:"−1 corresponde a t = τ. Mas t = 30 s e τ = 10 s.",
D:"−10 sai de τ = 3 s ou de RC dividido por t. O expoente é −t/τ = −30/10.",
E:"−30 sairia com τ = 1 s. Confira os prefixos: 10 k × 1 m = 10."},
res:P("τ = 10·10³ × 10⁻³ = 10 s. V<sub>o</sub>(30 s) = 12(1 − e<sup>−30/10</sup>) = <b>12(1 − e<sup>−3</sup>)</b> ≈ 11,4 V.")
});

Q("23-67",{
enun:P("Para o circuito RL série da figura, com condições iniciais nulas, qual é a expressão da corrente i(t), para t ≥ 0, quando u(t) é uma tensão do tipo DEGRAU de amplitude E?"),
fig:"f23_67", ops:["(E/R)(1 − e<sup>−Rt/L</sup>)","(E/R)e<sup>−Rt/L</sup>","E(1 − e<sup>−Rt/L</sup>)","E·e<sup>−Rt/L</sup>","(E/R)(1 − e<sup>−t/RL</sup>)"], gab:"A",
dicas:["Em t = 0 o indutor impede variação brusca: i(0) = 0. Em regime, o indutor é um curto: i(∞) = ?","τ = L/R."],
erros:{
B:"Essa expressão começa em E/R e decai: seria a descarga do indutor. Com i(0) = 0, a corrente CRESCE.",
C:"A corrente final deve ser E/R (lei de Ohm em regime). E sozinho tem unidade de tensão.",
D:"Começa em E (unidade errada) e decai; a corrente parte de zero e cresce.",
E:"A constante de tempo do RL é L/R, então o expoente é −Rt/L. O termo t/(RL) nem tem unidade de tempo."},
res:P("L·di/dt + Ri = E com i(0) = 0 ⇒ <b>i(t) = (E/R)(1 − e<sup>−Rt/L</sup>)</b>, com τ = L/R.")
});

Q("18-63",{
enun:P("A figura ilustra um circuito RC em que V<sub>i</sub> é a tensão de entrada e V<sub>o</sub> é a tensão de saída (sobre o capacitor). Os componentes são ideais. A equação diferencial que relaciona V<sub>i</sub>(t) e V<sub>o</sub>(t) é"),
fig:"f18_63", ops:["R·dV<sub>o</sub>/dt + C·V<sub>o</sub> = V<sub>i</sub>","dV<sub>o</sub>/dt + RC·V<sub>o</sub> = V<sub>i</sub>","dV<sub>i</sub>/dt + RC·V<sub>i</sub> = V<sub>o</sub>","RC·dV<sub>i</sub>/dt + V<sub>i</sub> = V<sub>o</sub>","RC·dV<sub>o</sub>/dt + V<sub>o</sub> = V<sub>i</sub>"], gab:"E",
dicas:["A corrente no resistor é a mesma do capacitor: (V<sub>i</sub> − V<sub>o</sub>)/R = C·dV<sub>o</sub>/dt.","Isole V<sub>i</sub>."],
erros:{
A:"Confira as unidades: R·dV/dt tem unidade de V·Ω/s e C·V tem C·V. Os termos não são somáveis.",
B:"O produto RC deve multiplicar a DERIVADA (RC tem unidade de tempo), e não V<sub>o</sub>.",
C:"A derivada é da tensão no capacitor (V<sub>o</sub>), não da entrada.",
D:"A derivada deve ser de V<sub>o</sub>: é a tensão do capacitor que define sua corrente."},
res:P("KCL: (V<sub>i</sub> − V<sub>o</sub>)/R = C·dV<sub>o</sub>/dt ⇒ <b>RC·dV<sub>o</sub>/dt + V<sub>o</sub> = V<sub>i</sub></b>.")
});

Q("18-62",{
enun:P("Considere o circuito da figura, cuja entrada é a tensão V<sub>i</sub> e cuja saída é a tensão V<sub>o</sub> (R<sub>A</sub> em série; L e R<sub>B</sub> em paralelo na saída). A função de transferência V<sub>o</sub>(s)/V<sub>i</sub>(s) é"),
fig:"f18_62", ops:["sLR<sub>B</sub>/[sL(R<sub>A</sub> + R<sub>B</sub>) + R<sub>A</sub>R<sub>B</sub>]","sLR<sub>B</sub>/[sLR<sub>A</sub> + R<sub>A</sub>R<sub>B</sub>]","sLR<sub>B</sub>/[sL(R<sub>A</sub> + R<sub>B</sub>) + R<sub>A</sub>]","sLR<sub>A</sub>/[sL(R<sub>A</sub> + R<sub>B</sub>) + R<sub>B</sub>]","sLR<sub>B</sub>/[sLR<sub>B</sub> + R<sub>A</sub>]"], gab:"A",
dicas:["Z<sub>p</sub> = sL ∥ R<sub>B</sub> = sLR<sub>B</sub>/(sL + R<sub>B</sub>).","H = Z<sub>p</sub>/(R<sub>A</sub> + Z<sub>p</sub>). Multiplique numerador e denominador por (sL + R<sub>B</sub>)."],
erros:{
B:"Ao expandir R<sub>A</sub>(sL + R<sub>B</sub>) + sLR<sub>B</sub>, aparece sL·R<sub>B</sub> também. O termo em s fica sL(R<sub>A</sub> + R<sub>B</sub>).",
C:"Confira as unidades do denominador: sL(R<sub>A</sub>+R<sub>B</sub>) tem Ω², e R<sub>A</sub> sozinho tem Ω. Falta multiplicar por R<sub>B</sub>.",
D:"O numerador é a impedância de saída sL∥R<sub>B</sub>, que contém R<sub>B</sub>, não R<sub>A</sub>.",
E:"Unidades incompatíveis no denominador (Ω² com Ω). Refaça o divisor com o paralelo correto."},
res:OL(["Z<sub>p</sub> = sLR<sub>B</sub>/(sL + R<sub>B</sub>).","H = Z<sub>p</sub>/(R<sub>A</sub> + Z<sub>p</sub>) = sLR<sub>B</sub>/[R<sub>A</sub>(sL + R<sub>B</sub>) + sLR<sub>B</sub>].","<b>H = sLR<sub>B</sub>/[sL(R<sub>A</sub> + R<sub>B</sub>) + R<sub>A</sub>R<sub>B</sub>]</b> (passa-altas: H(0) = 0)."])
});

Q("06-31",{
enun:P("O circuito RLC da figura é visto como um sistema com entrada e<sub>i</sub>(t) e saída e<sub>o</sub>(t) (tensão no capacitor). O vetor de estados é x = [x<sub>1</sub>; x<sub>2</sub>], com x<sub>1</sub> = e<sub>o</sub> e x<sub>2</sub> = ė<sub>o</sub>. O modelo em espaço de estado é ẋ = "+M("0 1;−a −b")+"x + "+M("0;a")+"e<sub>i</sub>, e<sub>o</sub> = [1 0]x. As expressões de a e b, em função dos componentes, são, respectivamente"),
fig:"f06_31", ops:["R/L e 1/LC","RC e LC","L/R e C/L","1/LC e R/L","R e LC"], gab:"D",
dicas:["Equação do RLC série com saída no capacitor: LC·ë<sub>o</sub> + RC·ė<sub>o</sub> + e<sub>o</sub> = e<sub>i</sub>.","Isole ë<sub>o</sub> e compare com ẋ<sub>2</sub> = −a·x<sub>1</sub> − b·x<sub>2</sub> + a·e<sub>i</sub>."],
erros:{
A:"Trocado: a multiplica x<sub>1</sub> = e<sub>o</sub> e a entrada e<sub>i</sub>, e vale 1/LC; b multiplica ė<sub>o</sub> e vale R/L.",
B:"RC e LC são os coeficientes ANTES de dividir a equação por LC. Isole ë<sub>o</sub>.",
C:"Confira as unidades: a e b devem ter unidade de 1/s² e 1/s. L/R tem unidade de s.",
E:"R e LC não têm as unidades certas (1/s² e 1/s). Divida a equação por LC."},
res:OL(["KVL: e<sub>i</sub> = R·i + L·di/dt + e<sub>o</sub>, com i = C·ė<sub>o</sub>.","LC·ë<sub>o</sub> + RC·ė<sub>o</sub> + e<sub>o</sub> = e<sub>i</sub> ⇒ ë<sub>o</sub> = −(1/LC)e<sub>o</sub> − (R/L)ė<sub>o</sub> + (1/LC)e<sub>i</sub>.","a = <b>1/LC</b> e b = <b>R/L</b>."])
});

Q("18-58",{
enun:P("O circuito passivo da figura tem valores normalizados. A chave ideal está aberta há bastante tempo e, em t = 0 s, é fechada instantaneamente (ela fica entre o nó após R<sub>1</sub> e a referência). Assim, a transformada de Laplace da tensão V<sub>o</sub> após o fechamento da chave é dada por"),
fig:"f18_58", ops:["8(s + 1)/(s² + s + 1)","(8s + 4)/(s² + 4s + 1)","(8s + 4)/(s² + s + 1)","8(s + 1)/(s² + 4s + 1)","(4s + 8)/(s² + 4s + 1)"], gab:"A",
dicas:["Antes de fechar (regime CC): L curto, C aberto. i<sub>L</sub>(0) = 12/(2 + 4) e v<sub>C</sub>(0) = 4·i<sub>L</sub>(0).","Depois de fechar, o lado esquerdo do indutor fica aterrado. Nó V<sub>o</sub>: I<sub>L</sub>(s) = C[sV<sub>o</sub> − v<sub>C</sub>(0)] + V<sub>o</sub>/R<sub>2</sub>, com I<sub>L</sub>(s) = [L·i<sub>L</sub>(0) − V<sub>o</sub>]/(sL)."],
erros:{
B:"O denominador deve sair s² + s + 1 com L = 4, C = 1/4, R<sub>2</sub> = 4: os coeficientes são 1/(R<sub>2</sub>C) = 1 e 1/(LC) = 1. Confira também o numerador com as duas condições iniciais.",
C:"O denominador está certo, mas o numerador perdeu parte de uma condição inicial. Use i<sub>L</sub>(0) = 2 A e v<sub>C</sub>(0) = 8 V.",
D:"O numerador está certo, mas o denominador não: com R<sub>2</sub>C = 1 e LC = 1, a equação característica é s² + s + 1.",
E:"Numerador e denominador errados. Refaça o regime antes da manobra (i<sub>L</sub> = 2 A, v<sub>C</sub> = 8 V) e a equação de nó em s."},
res:OL(["Antes: i<sub>L</sub>(0) = 12/(2 + 4) = 2 A; v<sub>C</sub>(0) = 4 × 2 = 8 V.","Depois: lado esquerdo de L aterrado. I<sub>L</sub>(s) = (4·2 − V<sub>o</sub>)/(4s) = (8 − V<sub>o</sub>)/(4s).","Nó V<sub>o</sub>: (8 − V<sub>o</sub>)/(4s) = (1/4)(sV<sub>o</sub> − 8) + V<sub>o</sub>/4.","Multiplicando por 4s: 8 − V<sub>o</sub> = s²V<sub>o</sub> − 8s + sV<sub>o</sub> ⇒ V<sub>o</sub>(s² + s + 1) = 8s + 8.","<b>V<sub>o</sub>(s) = 8(s + 1)/(s² + s + 1)</b>."])
});
