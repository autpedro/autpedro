B({
id:"b05", titulo:"Transformadores",
sub:"Ensaios, rendimento, autotransformador, paralelo, três enrolamentos e ligações trifásicas.",
objetivos:["Tirar R<sub>eq</sub> e X<sub>eq</sub> do ensaio de curto-circuito e calcular rendimento","Calcular a potência de um autotransformador a partir do trafo de dois enrolamentos (e vice-versa)","Dividir a carga entre trafos em paralelo","Separar as impedâncias de um trafo de três enrolamentos","Relacionar espiras com tensões de fase em ligações Y/Δ"],
qs:["23-23","08-27","23-24","11-45","11-48","11-46"],
aula:
"<h3>1. Ensaios</h3>"+
"<ul><li><b>Curto-circuito</b> (secundário em curto, tensão reduzida, corrente nominal): mede as perdas no cobre e a impedância série. R<sub>eq</sub> = P<sub>cc</sub>/I²; |Z<sub>eq</sub>| = V<sub>cc</sub>/I; X<sub>eq</sub> = √(Z² − R²).</li><li><b>Vazio</b> (secundário aberto, tensão nominal): mede as perdas no núcleo e a corrente de magnetização.</li></ul>"+
F("η = P<sub>saída</sub>/(P<sub>saída</sub> + perdas no cobre + perdas no núcleo)<br>Com corrente I: perdas no cobre = I²·R<sub>eq</sub>")+
TRAP("a carga pode ter reatância capacitiva que cancela a reatância do trafo. Monte a impedância total em série antes de achar a corrente.")+
"<h3>2. Autotransformador</h3>"+
P("Um trafo de dois enrolamentos (V<sub>1</sub>, V<sub>2</sub>, S) religado como auto: um enrolamento fica comum e o outro em série. A potência que passa pelo auto é maior porque parte dela vai por condução.")+
F("S<sub>auto</sub> = S<sub>enrolamento</sub> · (V<sub>maior</sub>/V<sub>série</sub>)<br>V<sub>série</sub> = V<sub>maior</sub> − V<sub>menor</sub> (tensão do enrolamento em série)")+
P("Ligação aditiva de um trafo 120/24 V: tensões 120 e 144 V; o enrolamento em série é o de 24 V. Cada enrolamento continua limitado à sua corrente nominal.")+
"<h3>3. Transformadores em paralelo</h3>"+
F("S<sub>i</sub> ∝ S<sub>n,i</sub>/Z<sub>%,i</sub> &nbsp;&nbsp; ⇒ &nbsp; S<sub>i</sub> = S<sub>total</sub> · (S<sub>n,i</sub>/Z<sub>i</sub>) / Σ(S<sub>n,k</sub>/Z<sub>k</sub>)")+
P("O trafo de menor impedância percentual \"puxa\" mais carga em proporção à sua potência. Se as Z% forem iguais, a carga se divide na proporção das potências nominais.")+
"<h3>4. Três enrolamentos</h3>"+
F("Z<sub>12</sub> = Z<sub>1</sub> + Z<sub>2</sub>, &nbsp; Z<sub>13</sub> = Z<sub>1</sub> + Z<sub>3</sub>, &nbsp; Z<sub>23</sub> = Z<sub>2</sub> + Z<sub>3</sub><br>Z<sub>1</sub> = (Z<sub>12</sub> + Z<sub>13</sub> − Z<sub>23</sub>)/2 &nbsp;(e análogos)")+
"<h3>5. Ligações trifásicas</h3>"+
P("Cada enrolamento fica sobre uma fase do núcleo e enxerga a TENSÃO DE FASE da ligação: no Y, V<sub>L</sub>/√3; no Δ, V<sub>L</sub>. A relação de espiras é a relação entre essas tensões de enrolamento. Ex.: Y–Δ: N<sub>1</sub>/N<sub>2</sub> = (V<sub>L1</sub>/√3)/V<sub>L2</sub>."),
exemplo:{
 titulo:"Exemplo: ensaio de curto e rendimento",
 enun:P("Um trafo monofásico 1:1 teve, no ensaio de curto-circuito, P = 500 W, V = 40 V e I = 25 A. Perdas no núcleo e magnetização desprezíveis. Ele alimenta, a partir de uma fonte de 200 V, uma carga de 7 Ω resistiva pura."),
 passos:[
  {p:"Qual a resistência equivalente R<sub>eq</sub> (em Ω)?", v:0.8, r:"R<sub>eq</sub> = 500/25² = <b>0,8 Ω</b>.", dica:"Toda a potência do ensaio de curto é perda no cobre: P = I²R."},
  {p:"Qual a reatância equivalente X<sub>eq</sub> (em Ω)?", v:1.386, tol:0.02, r:"|Z| = 40/25 = 1,6 Ω ⇒ X = √(1,6² − 0,8²) = <b>1,386 Ω</b>.", dica:"|Z| = V<sub>cc</sub>/I<sub>cc</sub>; depois X = √(Z² − R²)."},
  {p:"Qual a corrente com a carga de 7 Ω (em A)?", v:25.25, tol:0.02, r:"Z<sub>total</sub> = (0,8 + 7) + j1,386 ⇒ |Z| = √(7,8² + 1,386²) = 7,92 Ω ⇒ I = 200/7,92 = <b>25,2 A</b>.", dica:"Some a impedância do trafo com a carga (em série) e use o módulo."},
  {p:"Qual o rendimento (em %)?", v:89.7, tol:0.01, r:"η = R<sub>carga</sub>/(R<sub>carga</sub> + R<sub>eq</sub>) = 7/7,8 = <b>89,7%</b> (a corrente é a mesma nas duas resistências).", dica:"Com a mesma corrente, η = I²R<sub>carga</sub>/(I²R<sub>carga</sub> + I²R<sub>eq</sub>)."}
 ],
 fecho:"Na 23-23 a carga tem uma reatância capacitiva que cancela exatamente a do trafo. Fica ainda mais simples."
}
});

Q("23-23",{
enun:P("Um transformador monofásico de relação unitária foi submetido ao ensaio de curto-circuito: potência ativa 800 W, tensão 50 V e corrente 20 A. Despreze a corrente de magnetização e as perdas no núcleo. Quando alimentado por uma fonte de 400 V no primário, com uma carga composta por resistência de 23 Ω em série com reatância capacitiva de 1,5 Ω no secundário, qual será o rendimento, em percentual?"),
ops:["100","98","95","92","90"], gab:"D",
dicas:["Do ensaio: R<sub>eq</sub> = 800/20² e |Z<sub>eq</sub>| = 50/20. Depois X<sub>eq</sub> = √(Z² − R²).","A reatância do trafo (indutiva) e a da carga (capacitiva) se cancelam? Então a corrente é 400/(R<sub>eq</sub> + 23)."],
erros:{
A:"100% só sem perdas. Há perdas no cobre: R<sub>eq</sub> = 800/400 = 2 Ω.",
B:"98% não considera a resistência do trafo corretamente. Com a mesma corrente nos dois, η = 23/(23 + R<sub>eq</sub>).",
C:"95% sai de uma R<sub>eq</sub> menor. Confira: R<sub>eq</sub> = P/I² = 800/20² = 2 Ω.",
E:"90%: talvez você tenha somado a reatância ou usado |Z<sub>eq</sub>| = 2,5 Ω como se fosse resistência. Só a parte resistiva dissipa potência."},
res:OL(["R<sub>eq</sub> = 800/400 = 2 Ω; |Z<sub>eq</sub>| = 50/20 = 2,5 Ω ⇒ X<sub>eq</sub> = 1,5 Ω (indutiva).","Impedância total: (2 + 23) + j(1,5 − 1,5) = 25 Ω ⇒ I = 400/25 = 16 A.","P<sub>saída</sub> = 16²·23 = 5888 W; perdas = 16²·2 = 512 W.","η = 5888/6400 = 23/25 = <b>92%</b>."])
});

Q("08-27",{
enun:P("A figura apresenta um transformador de 400 VA, 120/24 V, conectado como autotransformador com interligação aditiva das espiras de alta e de baixa tensão (N<sub>alta</sub> e N<sub>baixa</sub>). Nessa configuração, o transformador transfere uma potência maior do que a original, porque nem toda potência passa pelo fluxo magnético; parte vai pela conexão direta. Aplicando em V<sub>in</sub> uma tensão de 120 V eficazes, a potência aparente nominal em que o autotransformador poderá operar, em VA, é"),
fig:"f08_27", ops:["1600","2000","2400","3200","4000"], gab:"C",
dicas:["V<sub>in</sub> = 120 V está sobre N<sub>alta</sub>. Na ligação aditiva, V<sub>out</sub> = 120 + 24 = 144 V.","A corrente de saída passa pelo enrolamento de baixa (24 V), cuja corrente nominal é 400/24 A."],
erros:{
A:"1600 VA não respeita os limites dos enrolamentos. Calcule V<sub>out</sub> = 144 V e a corrente máxima do enrolamento em série (400/24 = 16,7 A).",
B:"2000 = 120·16,7: você usou a tensão de entrada com a corrente de saída. A potência de saída é V<sub>out</sub>·I<sub>out</sub> = 144 × 16,7.",
D:"3200 VA ultrapassaria a corrente nominal de algum enrolamento. Verifique: o enrolamento de 24 V aguenta 16,7 A.",
E:"4000 VA superestima. Use S<sub>auto</sub> = S·(V<sub>maior</sub>/V<sub>série</sub>) = 400·144/24."},
res:OL(["Corrente nominal do enrolamento de baixa (em série): 400/24 = 16,67 A.","Ligação aditiva: V<sub>out</sub> = 120 + 24 = 144 V; a corrente de saída é a do enrolamento em série.","S = 144 × 16,67 = <b>2400 VA</b> (= 400 × 144/24)."])
});

Q("23-24",{
enun:P("Um transformador monofásico está operando como autotransformador com tensão no primário de 300 V e no secundário de 100 V. Nessas condições, o autotransformador tem potência nominal de 60 kVA. Qual é a potência nominal do transformador, em kVA, na sua configuração original, sem nenhuma conexão elétrica entre o primário e o secundário?"),
ops:["120","60","40","30","20"], gab:"C",
dicas:["No auto 300/100 V, o enrolamento comum tem 100 V e o enrolamento em série tem 300 − 100 = 200 V.","S<sub>enrolamento</sub> = S<sub>auto</sub> · V<sub>série</sub>/V<sub>maior</sub>."],
erros:{
A:"120 kVA é maior que o auto; mas o trafo de dois enrolamentos sempre tem potência MENOR ou igual à do auto (parte da potência do auto vai por condução).",
B:"60 kVA ignora a parte transferida por condução. Calcule a potência no enrolamento em série (200 V).",
D:"30 kVA = 60/2. A fração que passa pelo acoplamento magnético é V<sub>série</sub>/V<sub>maior</sub> = 200/300.",
E:"20 kVA = 60 × 100/300: você usou a tensão do enrolamento comum. A fração correta é a do enrolamento em série, 200/300."},
res:OL(["Enrolamento em série: 300 − 100 = 200 V; enrolamento comum: 100 V.","Fração da potência transferida magneticamente: 1 − 100/300 = 2/3.","S<sub>trafo</sub> = 60 × 2/3 = <b>40 kVA</b>."])
});

Q("11-45",{
enun:P("Uma subestação que se liga à rede de média tensão e disponibiliza baixa tensão possui dois transformadores em paralelo e atende uma demanda total de 1125 kVA. Trafo 1: 500 kVA, impedância de 2,5%. Trafo 2: 750 kVA, impedância de 3%. A distribuição de cargas para os trafos 1 e 2 é, em kVA, respectivamente"),
ops:["375 e 750","450 e 675","500 e 625","525 (trafo 1 em sobrecarga) e 600","562,5 para cada unidade (trafo 1 em sobrecarga)"], gab:"C",
dicas:["A carga se divide na proporção de S<sub>n</sub>/Z%.","Trafo 1: 500/2,5 = 200. Trafo 2: 750/3 = 250."],
erros:{
A:"Essa divisão não segue nem as potências nem as impedâncias. Use S<sub>i</sub> ∝ S<sub>n,i</sub>/Z<sub>i</sub>.",
B:"450 e 675 é a divisão proporcional só às potências nominais, como se as impedâncias percentuais fossem iguais. Com Z% diferentes, o trafo de menor Z% assume mais.",
D:"525/600 inverte o efeito: o trafo 1 tem MENOR impedância, mas você precisa calcular S<sub>n</sub>/Z para cada um.",
E:"Divisão igual só acontece com impedâncias iguais em ohms. Calcule S<sub>n</sub>/Z%."},
res:OL(["Pesos: 500/2,5 = 200; 750/3 = 250; soma 450.","S<sub>1</sub> = 1125·200/450 = 500 kVA; S<sub>2</sub> = 1125·250/450 = 625 kVA.","Resposta: <b>500 e 625 kVA</b> (o trafo 1 fica exatamente na nominal)."])
});

Q("11-48",{
enun:P("Considere o circuito equivalente de um transformador trifásico de três enrolamentos, obtido de um banco de transformadores monofásicos. Z<sub>1</sub>, Z<sub>2</sub> e Z<sub>3</sub> são as impedâncias de dispersão. Os ensaios de curto-circuito resultaram em: Z<sub>12</sub> (primário energizado, secundário em curto, terciário aberto) = 0,03 pu; Z<sub>13</sub> (primário energizado, terciário em curto, secundário aberto) = 0,02 pu; Z<sub>23</sub> (secundário energizado, terciário em curto, primário aberto) = 0,02 pu. Os valores de Z<sub>1</sub>, Z<sub>2</sub> e Z<sub>3</sub>, em pu, são"),
ops:["1,0 ; 1,5 e 1,5","0,1 ; 0,2 e 0,3","0,15 ; 0,15 e 0,02","0,05 ; 0,01 e 0,05","0,015 ; 0,015 e 0,005"], gab:"E",
dicas:["Cada ensaio mede a soma de duas impedâncias: Z<sub>12</sub> = Z<sub>1</sub> + Z<sub>2</sub> etc.","Z<sub>1</sub> = (Z<sub>12</sub> + Z<sub>13</sub> − Z<sub>23</sub>)/2."],
erros:{
A:"Ordem de grandeza errada: as somas medidas são 0,03 e 0,02 pu, então cada impedância é ainda menor.",
B:"Esses valores somados dariam Z<sub>12</sub> = 0,3. Os dados são da ordem de 0,02 a 0,03 pu.",
C:"Confira as contas: Z<sub>1</sub> = (0,03 + 0,02 − 0,02)/2 = 0,015, e não 0,15.",
D:"Verifique: Z<sub>1</sub> + Z<sub>2</sub> = 0,05 + 0,01 = 0,06 ≠ 0,03. Monte o sistema das três somas."},
res:OL(["Z<sub>1</sub> = (0,03 + 0,02 − 0,02)/2 = 0,015 pu.","Z<sub>2</sub> = (Z<sub>12</sub> + Z<sub>23</sub> − Z<sub>13</sub>)/2 = (0,03 + 0,02 − 0,02)/2 = 0,015 pu.","Z<sub>3</sub> = (Z<sub>13</sub> + Z<sub>23</sub> − Z<sub>12</sub>)/2 = (0,02 + 0,02 − 0,03)/2 = 0,005 pu.","Conferência: 0,015 + 0,015 = 0,03 ✓. Resposta <b>E</b>."])
});

Q("11-46",{
enun:P("Para que um transformador trifásico esteja inserido em uma instalação elétrica com o primário na configuração em estrela aterrado e o secundário em delta, a relação de espiras entre os enrolamentos primários e secundários deve ser igual à relação de tensões de"),
ops:["Linha e Fase","Linha e Linha","Terra e Fase","Terra e Linha","Fase e Linha"], gab:"E",
dicas:["Cada enrolamento enxerga a tensão sobre ele. No Y, o enrolamento fica entre fase e neutro. No Δ, entre duas fases.","Logo: primário (Y) ↔ tensão de ___; secundário (Δ) ↔ tensão de ___."],
erros:{
A:"Invertido: no primário em Y, o enrolamento está sob a tensão de FASE; no secundário em Δ, sob a tensão de LINHA.",
B:"Linha e linha valeria para Y–Y ou Δ–Δ. Num Y, o enrolamento não recebe a tensão de linha.",
C:"\"Terra\" não é uma tensão de enrolamento. O primário em Y aterrado tem cada enrolamento sob a tensão fase-neutro.",
D:"O enrolamento em Y fica sob a tensão de fase (fase-neutro), e não \"de terra\"."},
res:P("A relação de espiras é a relação entre as tensões que cada enrolamento recebe. Primário em Y: tensão de <b>fase</b> (V<sub>L1</sub>/√3). Secundário em Δ: tensão de <b>linha</b>. Logo N<sub>1</sub>/N<sub>2</sub> = V<sub>fase,1</sub>/V<sub>linha,2</sub>.")
});
