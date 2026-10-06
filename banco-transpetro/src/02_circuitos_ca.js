B({
id:"b02", titulo:"Circuitos CA: fasores, potência e valor eficaz",
sub:"Impedância, triângulo de potências, correção do fator de potência, valor eficaz e potência média de sinais periódicos.",
objetivos:["Transformar um circuito senoidal em fasores e impedâncias","Usar S = P + jQ, S = V·I* e o fator de potência","Dimensionar o capacitor que corrige o fator de potência","Calcular valor eficaz e potência média de formas de onda não senoidais","Ler um diagrama fasorial (adiantado/atrasado, regulação)"],
qs:["06-22","18-31","23-33","23-52","23-51","18-27","08-26","23-63","08-33"],
aula:
"<h3>1. Fasores e impedância</h3>"+
P("Em regime senoidal com frequência ω = 2πf, cada grandeza vira um número complexo (fasor). Os elementos viram impedâncias:")+
F("Z<sub>R</sub> = R &nbsp;&nbsp; Z<sub>L</sub> = jωL = jX<sub>L</sub> &nbsp;&nbsp; Z<sub>C</sub> = 1/(jωC) = −jX<sub>C</sub><br>V = Z·I (Ohm vale com complexos) &nbsp;&nbsp; |Z| = √(R² + X²), ângulo φ = arctg(X/R)")+
P("O ângulo da impedância é a defasagem entre tensão e corrente (φ = θ<sub>V</sub> − θ<sub>I</sub>). Ele não depende do ângulo da fonte. Indutivo: corrente atrasada (φ &gt; 0). Capacitivo: corrente adiantada (φ &lt; 0).")+
TRAP("ler a frequência. Questões dão 50 Hz ou 40 Hz de propósito para quem usa 377 rad/s no automático.")+
"<h3>2. Potências</h3>"+
F("S = V<sub>ef</sub>·I<sub>ef</sub>* = P + jQ &nbsp;&nbsp; |S| = V·I (VA)<br>P = V·I·cos φ (W) &nbsp;&nbsp; Q = V·I·sen φ (var) &nbsp;&nbsp; FP = cos φ = P/|S|<br>Com valores de pico: P = (V<sub>m</sub>·I<sub>m</sub>/2)·cos(θ<sub>V</sub> − θ<sub>I</sub>)")+
P("Para uma impedância: |Z| = V²/|S| e P = I²R, Q = I²X.")+
"<h3>3. Correção do fator de potência</h3>"+
P("Um capacitor em paralelo fornece Q<sub>C</sub> = V²·ωC sem mudar P. Para ir do FP<sub>1</sub> ao FP<sub>2</sub>:")+
F("Q<sub>C</sub> = P·(tg φ<sub>1</sub> − tg φ<sub>2</sub>) &nbsp;&nbsp; C = Q<sub>C</sub>/(ω·V²)<br>Para FP unitário: Q<sub>C</sub> = Q<sub>carga</sub>")+
"<h3>4. Valor eficaz e potência média de sinais periódicos</h3>"+
F("V<sub>ef</sub>² = (1/T)∫v²dt &nbsp;&nbsp; P<sub>média</sub> num resistor = V<sub>ef</sub>²/R = (1/T)∫(v²/R)dt")+
"<ul><li>Senoide: V<sub>ef</sub> = V<sub>p</sub>/√2.</li><li>Onda quadrada ±S: V<sub>ef</sub> = S (o quadrado é sempre S²).</li><li>Sinal em degraus: média ponderada dos quadrados pelos tempos.</li></ul>"+
TRAP("potência média NÃO é (tensão média)²/R. Primeiro eleve ao quadrado, depois faça a média.")+
"<h3>5. Energia</h3>"+
P("Energia = ∫p(t)dt. Se p está em W e t em horas, a energia sai em Wh. Para resistor não linear, use p = u(i)·i, e não u²/R.")+
"<h3>6. Diagrama fasorial de um gerador com cabo</h3>"+
F("E = V<sub>T</sub> + R·I + jX·I &nbsp;&nbsp; (a queda jXI fica 90° ADIANTADA de I)")+
P("Carga capacitiva (I adiantada de V<sub>T</sub>) pode fazer |E| &lt; |V<sub>T</sub>|: regulação negativa."),
exemplo:{
 titulo:"Exemplo: corrigindo o fator de potência",
 enun:P("Uma carga monofásica em 220 V, 60 Hz, consome 4,4 kW com FP 0,8 indutivo. Queremos FP unitário com um capacitor em paralelo."),
 passos:[
  {p:"Qual a potência aparente |S| da carga (em kVA)?", v:5.5, r:"|S| = P/FP = 4,4/0,8 = <b>5,5 kVA</b>.", dica:"FP = P/|S|."},
  {p:"Qual a potência reativa Q da carga (em kvar)?", v:3.3, r:"Q = √(5,5² − 4,4²) = <b>3,3 kvar</b> (ou P·tg φ com sen φ = 0,6).", dica:"Triângulo de potências: |S|² = P² + Q²."},
  {p:"Qual a corrente da carga antes da correção (em A)?", v:25, r:"I = |S|/V = 5500/220 = <b>25 A</b>.", dica:"I = |S|/V em circuito monofásico."},
  {p:"Qual a capacitância necessária (em µF)?", v:180.9, tol:0.03, r:"C = Q/(ωV²) = 3300/(377·220²) = 3300/18,25·10⁶ ≈ <b>181 µF</b>.", dica:"Q<sub>C</sub> = ωCV². Use ω = 2π·60 = 377 rad/s e V = 220 V. Converta para µF no fim."},
  {p:"E a corrente da fonte depois da correção (em A)?", v:20, r:"Agora |S| = P = 4,4 kVA ⇒ I = 4400/220 = <b>20 A</b>. A corrente cai 20% só por cancelar os reativos.", dica:"Com FP = 1, |S| = P."}
 ],
 fecho:"A questão 06-22 é exatamente isto, mas em 50 Hz. Preste atenção na frequência."
}
});

Q("06-22",{
enun:P("Numa rede de 50 Hz, uma carga monofásica é alimentada com tensão eficaz de 100 V e recebe corrente eficaz de 10 A. O fator de potência da carga é 0,867 indutivo. Para tornar o fator de potência do circuito unitário, é preciso colocar em paralelo com a carga um capacitor com valor aproximado, em µF, de"),
ops:["80","160","240","300","420"], gab:"B",
dicas:["cos φ = 0,867 ⇒ φ = 30°. Calcule Q = V·I·sen φ.","O capacitor precisa fornecer todo o Q da carga: Q = ωCV², com ω = 2π·50."],
erros:{
A:"80 µF é metade do valor. Confira: você usou Q = V·I·sen φ = 100·10·0,5 = 500 var? E ω = 2π·50 = 314 rad/s? Algum fator 2 se perdeu.",
C:"240 µF: você pode ter usado tg φ em vez de sen φ, ou a potência ativa. O capacitor deve fornecer a potência REATIVA da carga, Q = V·I·sen φ.",
D:"Confira a frequência: a rede é de 50 Hz (ω = 314 rad/s), não 60 Hz. E confira se usou sen 30° = 0,5.",
E:"420 µF sai usando Q ≈ 1300 var ou dividindo por V em vez de V². Lembre que Q<sub>C</sub> = ωCV²."},
res:OL(["cos φ = 0,867 ⇒ φ = 30° ⇒ sen φ = 0,5.","Q<sub>carga</sub> = 100 · 10 · 0,5 = 500 var (indutivo).","Para FP = 1, o capacitor fornece 500 var: C = Q/(ωV²) = 500/(2π·50·100²) = 500/3,14·10⁶ = 159·10⁻⁶ F.","C ≈ <b>160 µF</b>."])
});

Q("18-31",{
enun:P("Uma carga monofásica do tipo impedância constante, composta por uma resistência de 3 Ω e indutância de 0,05/π H, é alimentada por uma fonte de tensão ideal, senoidal, de 100 V e 40 Hz. A corrente elétrica na carga, em ampères, é igual a"),
ops:["10","20","25","30","50"], gab:"B",
dicas:["X<sub>L</sub> = 2πfL. O π de L foi colocado para cancelar o π de 2πf.","|Z| = √(R² + X<sub>L</sub>²). Procure um triângulo 3-4-5."],
erros:{
A:"10 A daria |Z| = 10 Ω. Confira X<sub>L</sub> = 2π·40·(0,05/π) = 4 Ω e combine com R pela raiz da soma dos quadrados, não somando direto.",
C:"25 A = 100/4: você usou só a reatância. A impedância soma R e X<sub>L</sub> vetorialmente.",
D:"30 A ≈ 100/3: você usou só a resistência. A indutância também limita a corrente.",
E:"50 A = 100/2: confira o cálculo de X<sub>L</sub> (frequência é 40 Hz e há o fator 2 em 2πf) e lembre de incluir R."},
res:OL(["X<sub>L</sub> = 2π·40·0,05/π = 4 Ω.","|Z| = √(3² + 4²) = 5 Ω.","I = 100/5 = <b>20 A</b>."])
});

Q("23-33",{
enun:P("Um equipamento elétrico monofásico solicita da fonte de tensão de 250∠−40° V uma potência aparente de 1500 VA com fator de potência de cos 10°. A impedância dessa carga é igual a"),
ops:["41,67∠−10°","46,67∠−50°","46,67∠−30°","6,00∠30°","6,00∠−10°"], gab:"A",
aviso:"o enunciado não diz se o FP é indutivo ou capacitivo; só uma alternativa tem o módulo correto, e ela corresponde ao caso capacitivo.",
dicas:["Módulo: |Z| = V²/|S|.","O ângulo da impedância é o ângulo do fator de potência (θ<sub>V</sub> − θ<sub>I</sub>), e não depende do ângulo da tensão da fonte."],
erros:{
B:"Você somou o ângulo da tensão (−40°) ao ângulo do FP. O ângulo de Z é só a defasagem entre V e I. E confira o módulo: V²/S = 62 500/1500.",
C:"O ângulo da tensão da fonte não entra no ângulo da impedância. Confira também o módulo pela fórmula |Z| = V²/|S|.",
D:"6 Ω = 1500/250: isso é a corrente (6 A), não a impedância. |Z| = V/I = 250/6.",
E:"6 é a corrente em ampères (I = S/V). Impedância é V/I."},
res:OL(["|I| = 1500/250 = 6 A ⇒ |Z| = 250/6 = 41,67 Ω (ou V²/S).","O ângulo de Z é ±10° (ângulo do FP), independentemente do ângulo da tensão.","Única alternativa compatível: <b>41,67∠−10° Ω</b> (carga capacitiva)."])
});

Q("23-52",{
enun:P("Para medir a potência de uma máquina monofásica com o wattímetro com defeito, usou-se um osciloscópio. A tensão foi medida nos terminais da máquina e a corrente, indiretamente, pela tensão num resistor shunt em série com a carga: V<sub>carga</sub>(t) = 250 cos(377t + 30°) V e V<sub>shunt</sub>(t) = 10 cos(377t + 60°) A. Desprezando a potência no shunt e sabendo que sua resistência é 100 mΩ, a potência ativa da máquina, em W, é"),
ops:["625√3","625√2","1250√3","1250√2","1250"], gab:"A",
aviso:"o enunciado escreve V<sub>shunt</sub> com unidade \"A\". A banca tratou esse sinal como a própria corrente (10 A de pico). Se fosse uma tensão de 10 V em 0,1 Ω, a corrente seria 100 A e nenhuma alternativa serviria. Use 10 A de pico.",
dicas:["Com valores de pico: P = (V<sub>m</sub>·I<sub>m</sub>/2)·cos(θ<sub>V</sub> − θ<sub>I</sub>).","θ<sub>V</sub> − θ<sub>I</sub> = 30° − 60° = −30°; cos(−30°) = √3/2."],
erros:{
B:"cos 45° não aparece aqui. A defasagem é 30° − 60° = −30°, e cos 30° = √3/2.",
C:"Você esqueceu de dividir por 2 ao usar valores de pico (ou de dividir cada um por √2). P = V<sub>ef</sub>·I<sub>ef</sub>·cos φ.",
D:"Dois problemas: faltou o fator 1/2 dos valores de pico e o cosseno da defasagem de 30° é √3/2, não √2/2.",
E:"1250 = 250·10/2: você não multiplicou pelo fator de potência cos(θ<sub>V</sub> − θ<sub>I</sub>)."},
res:OL(["V<sub>m</sub> = 250 V, I<sub>m</sub> = 10 A (picos).","Defasagem: 30° − 60° = −30° (corrente adiantada).","P = (250·10/2)·cos 30° = 1250·√3/2 = <b>625√3 W</b>."])
});

Q("23-51",{
enun:P("Um circuito monofásico é composto por uma fonte E<sub>A</sub> conectada a uma carga por meio de um cabo de impedância Z. A carga opera com tensão terminal V<sub>φ</sub> e corrente I<sub>L</sub>: E<sub>A</sub> = 150,0∠90° V, V<sub>φ</sub> = 120,0∠0° V, I<sub>L</sub> = 10,0∠45° A. A resistência do cabo, em Ω, é"),
ops:["1,5","1,5√2","1,5√3","7,5√2","6,0√3"], gab:"B",
dicas:["KVL: E<sub>A</sub> = V<sub>φ</sub> + Z·I<sub>L</sub> ⇒ Z = (E<sub>A</sub> − V<sub>φ</sub>)/I<sub>L</sub>.","E<sub>A</sub> − V<sub>φ</sub> = j150 − 120. Divida pelo fasor 10∠45° e tome a parte real."],
erros:{
A:"Faltou um fator √2. Ao dividir (−120 + j150) por 10∠45°, multiplique por (cos 45° − j sen 45°) = (√2/2)(1 − j) e tome a parte real com cuidado.",
C:"√3 apareceria com ângulos de 30° ou 60°. Aqui o ângulo da corrente é 45°: os fatores são √2/2.",
D:"7,5√2 é muito grande. Confira se dividiu por |I| = 10 e se pegou a parte real (resistência), não o módulo de Z.",
E:"Esse valor não sai de nenhuma conta com ângulos de 45°. Refaça Z = (E − V)/I em forma retangular."},
res:OL(["E − V = (0 + j150) − 120 = −120 + j150 V.","Z = (−120 + j150)/(10∠45°) = (−120 + j150)(cos 45° − j sen 45°)/10.","Parte real: (−120·0,707 + 150·0,707)/10 = 30·0,707/10 = 2,12 Ω.","R = 2,12 = <b>1,5√2 Ω</b>. (A parte imaginária dá X = 270·0,707/10 ≈ 19,1 Ω.)"])
});

Q("18-27",{
enun:P("A figura mostra o diagrama fasorial de uma fonte monofásica E alimentando uma carga com tensão terminal V<sub>T</sub>, conectadas por um cabo de impedância Z = R + jX. Analisando o diagrama, conclui-se que a"),
fig:"f18_27", ops:["tensão E está em fase com a queda de tensão na resistência da linha.","tensão E está atrasada em relação à tensão terminal V<sub>T</sub> de um ângulo δ.","carga alimentada pelo gerador tem fator de potência indutivo.","regulação de tensão do gerador é negativa, uma vez que |E| &lt; |V<sub>T</sub>|.","queda de tensão na reatância está 90° atrasada em relação à corrente I do circuito."], gab:"D",
dicas:["Compare as posições: I está acima de V<sub>T</sub> (adiantada). O que isso diz sobre a carga?","Compare os comprimentos das setas E e V<sub>T</sub> no desenho."],
erros:{
A:"A queda RI está em fase com a corrente I, que forma ângulo θ com V<sub>T</sub>. E está em outro ângulo (δ). Não estão em fase.",
B:"E está acima de V<sub>T</sub> no diagrama (ângulo δ medido no sentido anti-horário): E está ADIANTADA.",
C:"No diagrama, I está adiantada de V<sub>T</sub> pelo ângulo θ. Corrente adiantada da tensão é característica de carga capacitiva.",
E:"jXI = X·I multiplicado por j: o j gira o fasor 90° no sentido anti-horário. A queda na reatância fica 90° ADIANTADA de I."},
res:OL(["I está adiantada de V<sub>T</sub> por θ ⇒ carga capacitiva.","E = V<sub>T</sub> + RI + jXI. Com corrente adiantada, a queda jXI aponta \"para trás\" e o triângulo fecha com E menor que V<sub>T</sub> (no desenho, a seta E é mais curta).","Regulação = (|E| − |V<sub>T</sub>|)/|V<sub>T</sub>| &lt; 0 ⇒ <b>regulação negativa</b>, efeito típico de carga capacitiva (efeito Ferranti em linhas)."])
});

Q("08-26",{
enun:P("O sinal periódico de tensão mostrado na figura é aplicado sobre um resistor de 10 Ω. A potência média, em W, dissipada no resistor é"),
fig:"f08_26", ops:["18","32","38","42","54"], gab:"D",
dicas:["Leia o período no gráfico: o pulso de 30 V vai de −4 a 0 ms e o próximo começa em 6 ms. Qual é o período e quanto tempo dura cada nível?","P<sub>média</sub> = (1/T)·Σ(V²/R)·Δt. Eleve ao quadrado ANTES de fazer a média."],
erros:{
A:"18 é a tensão média do sinal (em V), não a potência. Calcule a média de V²/R.",
B:"32 W ≈ (V<sub>média</sub>)²/R = 18²/10. Isso é erro clássico: a potência média exige a média do QUADRADO da tensão.",
C:"Confira os tempos: 30 V por 4 ms e 10 V por 6 ms, num período de 10 ms. Refaça a média ponderada de V².",
E:"54 W sai com tempos trocados ou período errado. O pulso de 30 V dura 4 ms (de −4 a 0) e o período é 10 ms."},
res:OL(["Período T = 10 ms: 30 V durante 4 ms e 10 V durante 6 ms.","V<sub>ef</sub>² = (30²·4 + 10²·6)/10 = (3600 + 600)/10 = 420 V².","P = V<sub>ef</sub>²/R = 420/10 = <b>42 W</b>."])
});

Q("23-63",{
enun:P("Um circuito retificou a rede residencial de tensão eficaz monofásica V, oferecendo a saída da figura: em 50% do tempo a saída é S, e nos outros 50% é −S, onde S é o valor de pico da onda senoidal da rede. O circuito oferece uma tensão eficaz igual a"),
fig:"f23_63", ops:["2V","πV","√2 V","√3 V","πV/2"], gab:"C",
dicas:["Para a onda quadrada ±S, o quadrado do sinal vale S² o tempo todo. Então o valor eficaz é...","S é o pico da senoide de valor eficaz V. Qual a relação entre pico e eficaz numa senoide?"],
erros:{
A:"2V seria o pico a pico em termos de V. O valor eficaz de uma onda quadrada ±S é S, e S = √2·V.",
B:"π aparece em valores MÉDIOS de senoides retificadas, não no eficaz de uma onda quadrada.",
D:"√3 aparece em onda triangular (pico/√3) ou em trifásico. Aqui é onda quadrada: eficaz = S.",
E:"πV/2 lembra relações de valor médio. Calcule o eficaz: √(média de v²) = √(S²) = S."},
res:OL(["Onda quadrada ±S: v² = S² sempre ⇒ V<sub>ef,saída</sub> = S.","S é o pico da rede: S = √2·V.","Saída eficaz = <b>√2 V</b>."])
});

Q("08-33",{
enun:P("A tensão u aplicada entre os terminais de um resistor não linear obedece a u = 3i(t) + [i(t)]² V, onde t é dado em horas e i(t) é a corrente, em função do tempo, que passa pelo mesmo. Se a corrente varia de acordo com i(t) = 4t, em A, a energia consumida pelo resistor, em kWh, depois de 4 horas é"),
ops:["1,21","4,86","5,12","15,76","19,45"], gab:"C",
dicas:["Potência instantânea: p = u·i (não use u²/R, o resistor é não linear).","Substitua i = 4t: p(t) = (12t + 16t²)·4t. Integre de 0 a 4 h; o resultado sai em Wh."],
erros:{
A:"Confira a potência: p = u·i = (3i + i²)·i = 3i² + i³. Com i = 4t, p = 48t² + 64t³.",
B:"Refaça a integral: ∫(48t² + 64t³)dt = 16t³ + 16t⁴. Avalie em t = 4.",
D:"15,76 sai com algum termo errado na potência. Lembre que u já contém i², então u·i tem i³.",
E:"Verifique se não integrou u em vez de p, ou se esqueceu de converter Wh para kWh."},
res:OL(["p = u·i = (3·4t + 16t²)·4t = 48t² + 64t³ (W, com t em horas).","E = ∫₀⁴ p dt = [16t³ + 16t⁴]₀⁴ = 16·64 + 16·256 = 1024 + 4096 = 5120 Wh.","E = <b>5,12 kWh</b>."])
});
