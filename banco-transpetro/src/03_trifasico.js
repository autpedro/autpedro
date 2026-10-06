B({
id:"b03", titulo:"Sistemas trifásicos e medição",
sub:"Ligações Y e Δ, sequência de fases, potência trifásica, wattímetros (Blondel e Aron), TCs e instrumentos.",
objetivos:["Converter grandezas de linha e de fase em Y e em Δ","Achar o fasor de corrente de qualquer fase sabendo a sequência (ABC ou ACB)","Calcular corrente de linha de um motor a partir de potência, rendimento e FP","Interpretar leituras de wattímetros (método dos dois e dos três wattímetros)","Converter leituras de TC e escolher o instrumento certo"],
qs:["23-39","23-34","06-23","11-27","23-42","23-41","23-35"],
aula:
"<h3>1. Linha × fase</h3>"+
F("Estrela (Y): V<sub>L</sub> = √3·V<sub>F</sub>, I<sub>L</sub> = I<sub>F</sub>, V<sub>L</sub> adiantada 30° de V<sub>F</sub> (seq. ABC)<br>Triângulo (Δ): V<sub>L</sub> = V<sub>F</sub>, I<sub>L</sub> = √3·I<sub>F</sub><br>Potência: S<sub>3φ</sub> = √3·V<sub>L</sub>·I<sub>L</sub> = 3·V<sub>F</sub>·I<sub>F</sub> &nbsp;&nbsp; P<sub>3φ</sub> = √3·V<sub>L</sub>·I<sub>L</sub>·cos φ")+
P("No diagrama unifilar (por fase), usa-se o <b>equivalente estrela</b>: tensão de fase (fase-neutro), corrente de linha e a impedância por fase do Y (uma carga em Δ vira Z<sub>Y</sub> = Z<sub>Δ</sub>/3).")+
"<h3>2. Sequência de fases</h3>"+
P("<b>ABC (positiva):</b> B atrasada 120° de A, C adiantada 120°. <b>ACB (negativa):</b> B adiantada 120° de A, C atrasada. Em carga equilibrada, a corrente de cada fase tem o mesmo módulo e o mesmo ângulo φ em relação à sua tensão de fase.")+
TRAP("o enunciado diz \"sequência ACB\" justamente para pegar quem subtrai 120° no automático.")+
"<h3>3. Corrente de motor</h3>"+
F("P<sub>saída</sub> (eixo) → P<sub>entrada</sub> = P<sub>saída</sub>/η → I<sub>L</sub> = P<sub>entrada</sub>/(√3·V<sub>L</sub>·cos φ)<br>1 HP = 746 W (dado na questão); 1 CV = 736 W")+
"<h3>4. Wattímetros</h3>"+
"<ul><li><b>Teorema de Blondel:</b> num sistema de n fios, n − 1 wattímetros com as bobinas de tensão referidas a um ponto comum medem a potência total. Com n wattímetros referidos a um ponto qualquer, a soma também dá a potência total.</li><li><b>Dois wattímetros (Aron), carga equilibrada:</b> W<sub>1</sub> = V<sub>L</sub>I<sub>L</sub>cos(30° + φ), W<sub>2</sub> = V<sub>L</sub>I<sub>L</sub>cos(30° − φ). Os ângulos que aparecem nas leituras são 30° ± φ.</li><li>Também vale: tg φ = √3·(W<sub>2</sub> − W<sub>1</sub>)/(W<sub>2</sub> + W<sub>1</sub>).</li></ul>"+
"<h3>5. TC e instrumentos</h3>"+
P("TC 400-5 A: relação 80. Corrente primária = corrente secundária × 80. Voltímetro mede diferença de potencial em paralelo, sem abrir o circuito; amperímetro vai em série; alicate amperímetro mede a corrente pelo campo magnético, sem abrir o circuito; ponte de Wheatstone mede resistência."),
exemplo:{
 titulo:"Exemplo: da plaqueta do motor à corrente de linha",
 enun:P("Um motor trifásico de 15 kW (potência no eixo), 380 V, rendimento 90% e FP 0,85, sequência ABC. A tensão de fase da fase A é a referência (0°)."),
 passos:[
  {p:"Qual a potência elétrica absorvida da rede (em kW)?", v:16.67, r:"P<sub>entrada</sub> = 15/0,9 = <b>16,67 kW</b>.", dica:"O rendimento divide: a rede fornece mais do que o eixo entrega."},
  {p:"Qual a corrente de linha (em A)?", v:29.8, tol:0.03, r:"I = 16 667/(√3·380·0,85) = 16 667/559,4 ≈ <b>29,8 A</b>.", dica:"I = P/(√3·V<sub>L</sub>·FP)."},
  {p:"Qual o ângulo φ da corrente da fase A em relação à tensão de fase A (em graus, positivo)?", v:31.8, tol:0.03, r:"φ = arccos 0,85 ≈ <b>31,8°</b>, com a corrente atrasada (motor é indutivo): I<sub>A</sub> = 29,8∠−31,8° A.", dica:"φ = arccos(FP)."},
  {p:"Qual o ângulo (em graus) da corrente da fase B, em sequência ABC? (escreva o número com sinal)", v:-151.8, tol:0.01, r:"Em ABC, B está 120° atrás de A: −31,8° − 120° = <b>−151,8°</b>. Se fosse ACB, seria −31,8° + 120° = +88,2°.", dica:"Em ABC a fase B atrasa 120° em relação à A."}
 ],
 fecho:"Na questão 23-34 a sequência é ACB: use a regra do último passo ao contrário."
}
});

Q("23-39",{
enun:P("O diagrama unifilar tem a finalidade de simplificar a diagramação de um sistema elétrico. Nele, as cargas são representadas por uma única fase, onde as tensões, corrente e impedância fazem referência às tensões"),
ops:["de linha, corrente de linha e impedância de uma das fases da carga para carga na configuração estrela ou no seu equivalente estrela para as cargas na configuração delta.","de linha, corrente de linha e uma das impedâncias que compõem a carga trifásica para carga na configuração estrela ou na configuração delta.","de linha, corrente de linha e uma das impedâncias que compõem a carga trifásica na configuração estrela ou tensões de linha, corrente de fase e uma das impedâncias que compõem a carga trifásica no seu equivalente estrela para as cargas na configuração delta.","de linha, corrente de linha e uma das impedâncias que compõem a carga trifásica na configuração estrela ou tensões de fase, corrente de fase e uma das impedâncias que compõem a carga trifásica no seu equivalente estrela para as cargas na configuração delta.","de fase, corrente de fase e impedância de uma das fases da carga para carga na configuração estrela ou no seu equivalente estrela para as cargas na configuração delta."], gab:"E",
dicas:["O circuito por fase é sempre o de UMA fase do equivalente estrela: fonte fase-neutro, impedância por fase, corrente da fase.","Num Y, corrente de fase = corrente de linha. E a carga em Δ entra pelo seu equivalente Y."],
erros:{
A:"A impedância e a ideia do equivalente estrela estão certas, mas a tensão do circuito por fase é a de FASE (fase-neutro), não a de linha.",
B:"No circuito por fase não se usa a impedância do Δ diretamente nem a tensão de linha; converte-se o Δ em Y e usa-se tensão fase-neutro.",
C:"Misturar tensão de linha com o equivalente Y não fecha a lei de Ohm por fase: V<sub>L</sub>/Z<sub>Y</sub> dá √3 vezes a corrente real.",
D:"Para a carga em estrela, a alternativa usa tensão de linha. O circuito por fase usa tensão fase-neutro nos dois casos."},
res:P("O diagrama unifilar é o circuito de uma fase do sistema equivalente em estrela: tensão de <b>fase</b> (fase-neutro), corrente de fase (que no Y é igual à de linha) e a impedância por fase do Y. Cargas em Δ entram pelo equivalente Y (Z<sub>Y</sub> = Z<sub>Δ</sub>/3). Alternativa E.")
});

Q("23-34",{
enun:P("Um sistema trifásico equilibrado, composto por uma fonte trifásica em estrela e sequência de fases ACB, alimenta uma carga trifásica indutiva de 7,5 kW e fator de potência 0,5. Sabendo que a fase A da fonte é de 250 V e ângulo 20°, a corrente elétrica que passa na fase B da carga é igual a"),
ops:["30∠80°","30∠−160°","20∠80°","20∠−160°","10∠80°"], gab:"C",
dicas:["|S| = P/FP = 15 kVA. Como a fonte é Y e 250 V é tensão de fase: I = S/(3·V<sub>F</sub>).","I<sub>A</sub> fica 60° atrasada de V<sub>A</sub> (cos φ = 0,5, indutivo). Em sequência ACB, a fase B está 120° ADIANTADA da A."],
erros:{
A:"30 A = 7500/250: você dividiu a potência ativa por uma tensão só, sem o FP e sem considerar as três fases. Use |S| = P/FP e I = |S|/(3V<sub>F</sub>).",
B:"Módulo e ângulo errados: além do cálculo de |I|, você usou a sequência ABC (B atrasada). O enunciado diz ACB.",
D:"O módulo está certo, mas você aplicou a sequência ABC (B = A − 120°). Em ACB, a fase B fica 120° adiantada.",
E:"10 A sai se usar |S| = 7,5 kVA (esquecendo o FP). Com FP 0,5, |S| = 15 kVA."},
res:OL(["|S| = 7,5/0,5 = 15 kVA ⇒ I = 15 000/(3·250) = 20 A.","φ = arccos 0,5 = 60° (indutivo): I<sub>A</sub> = 20∠(20° − 60°) = 20∠−40° A.","Sequência ACB: I<sub>B</sub> = I<sub>A</sub>·1∠+120° = <b>20∠80° A</b>."])
});

Q("06-23",{
enun:P("Um motor trifásico de 10 HP (1 HP = 746 W) está conectado a uma fonte de 220 V de tensão de linha, possui fator de potência 0,5 indutivo e rendimento de 60%. O valor da corrente elétrica requerida da fonte, em ampères, é"),
ops:["3,33","9,25","13,32","65,25","113,03"], gab:"D",
dicas:["10 HP é potência no eixo. A potência absorvida é P<sub>eixo</sub>/η.","I = P<sub>entrada</sub>/(√3·V<sub>L</sub>·cos φ)."],
erros:{
A:"Valor muito baixo: confira se converteu HP para W (×746) e se dividiu pelo rendimento, não multiplicou.",
B:"9,25 A não sai da fórmula trifásica. Monte: P<sub>entrada</sub> = 7460/0,6 e depois I = P/(√3·220·0,5).",
C:"13,32 parece ter usado o FP ou o rendimento no lugar errado (multiplicando). Rendimento e FP DIVIDEM a potência para achar a corrente.",
E:"113,03 A = 12 433/(220·0,5): você usou a fórmula monofásica, sem o √3."},
res:OL(["P<sub>eixo</sub> = 10·746 = 7460 W.","P<sub>entrada</sub> = 7460/0,6 = 12 433 W.","I = 12 433/(√3·220·0,5) = 12 433/190,5 = <b>65,25 A</b>."])
});

Q("11-27",{
enun:P("A figura apresenta dois wattímetros W<sub>1</sub> e W<sub>2</sub> ligados a uma carga trifásica, com suas bobinas de tensão e corrente medindo A<sub>1</sub>, V<sub>1</sub> e A<sub>2</sub>, V<sub>2</sub>. Pelo método adotado, a potência ativa trifásica é P<sub>3φ</sub> = A<sub>1</sub>V<sub>1</sub>cos 25° + A<sub>2</sub>V<sub>2</sub>cos 85°. Essa carga possui um fator de potência igual a"),
fig:"f11_27", ops:["cos 25°","cos 55°","cos 60°","cos 85°","cos 110°"], gab:"B",
dicas:["No método dos dois wattímetros com carga equilibrada, os ângulos das leituras são 30° − φ e 30° + φ.","Resolva: 30° + φ = 85° (ou 30° − φ = 25°)."],
erros:{
A:"25° é o ângulo entre a tensão de LINHA e a corrente de linha de um dos wattímetros (30° − φ), não o ângulo do FP.",
C:"60° seria a diferença entre 85° e 25°, que vale 2φ. Divida por 2.",
D:"85° = 30° + φ é o ângulo do outro wattímetro, não o φ da carga.",
E:"110° = 85° + 25°. O ângulo do FP não é a soma dos ângulos das leituras."},
res:OL(["Dois wattímetros, carga equilibrada: W<sub>1</sub> = V<sub>L</sub>I<sub>L</sub>cos(30° − φ), W<sub>2</sub> = V<sub>L</sub>I<sub>L</sub>cos(30° + φ).","30° − φ = 25° e 30° + φ = 85° ⇒ φ = 55°.","FP = <b>cos 55°</b>."])
});

Q("23-42",{
enun:P("A figura apresenta um sistema trifásico composto por uma fonte alimentando uma carga. Sabendo que a carga é equilibrada e que as medidas dos wattímetros W<sub>1</sub>, W<sub>2</sub> e W<sub>3</sub> são 30 W, 45 W e 65 W, a potência trifásica ativa solicitada pela fonte é"),
fig:"f23_42", ops:["140 W","95 W","75 W","35 W","15 W"], gab:"A",
dicas:["Os três wattímetros têm as bobinas de corrente nas três linhas e as bobinas de tensão ligadas a um ponto comum.","Teorema de Blondel: com as bobinas de tensão referidas a um ponto comum, a soma das leituras é a potência total, qualquer que seja esse ponto."],
erros:{
B:"95 = 30 + 65: você descartou W<sub>2</sub>. Nesse arranjo, cada wattímetro mede a corrente de uma linha e todos contribuem.",
C:"75 = 30 + 45: você usou só dois wattímetros, como no método de Aron, mas o arranjo da figura tem três bobinas de corrente.",
D:"35 = 65 − 30: subtração de leituras aparece no cálculo de tg φ no método de Aron, não na potência total.",
E:"15 = 45 − 30: diferenças de leituras não dão a potência. Some as leituras (teorema de Blondel)."},
res:P("Cada wattímetro tem a bobina de corrente numa linha (A, C e B) e todas as bobinas de tensão vão a um ponto comum. Pelo teorema de Blondel, a soma das leituras é a potência total, mesmo que o ponto comum não seja o neutro (por isso as leituras individuais são diferentes apesar da carga equilibrada): P = 30 + 45 + 65 = <b>140 W</b>.")
});

Q("23-41",{
enun:P("A corrente no secundário de um transformador de corrente suprindo uma determinada carga é de 3,5 A. O valor da corrente no circuito primário sem correção, sabendo que o TC é de 400-5 A, é igual a"),
ops:["395 A","350 A","280 A","114 A","80 A"], gab:"C",
dicas:["Relação de transformação do TC: 400/5 = 80.","I<sub>primária</sub> = I<sub>secundária</sub> × RTC."],
erros:{
A:"395 = 400 − 5: a relação do TC é uma divisão (400/5), não uma diferença.",
B:"350 = 3,5 × 100: a relação é 400/5 = 80, não 100.",
D:"114 ≈ 400/3,5: a corrente primária é a secundária MULTIPLICADA pela relação.",
E:"80 é a relação de transformação. Falta multiplicar pela corrente secundária."},
res:P("RTC = 400/5 = 80. I<sub>p</sub> = 3,5 × 80 = <b>280 A</b>.")
});

Q("23-35",{
enun:P("A respeito dos aparelhos eletrônicos de medidas (ohmímetros, voltímetros e amperímetros) usados em laboratório, constata-se que"),
ops:["a Potência Ativa é o resultado da multiplicação das grandezas de corrente e tensão, medidas por meio de um amperímetro e de um voltímetro sobre uma carga.","a medição da resistência elétrica é obtida sempre de forma indireta, por meio de outras grandezas elétricas medidas.","a ponte de Wheatstone revela-se como um dos meios mais empregados para medição de tensões, onde a diferença de potencial a ser medida ocupa a posição de um dos resistores da ponte.","o amperímetro, tipo alicate, mede a corrente elétrica de forma direta, sem a intermediação de outra grandeza.","o voltímetro mede a diferença de potencial em um ponto, sem a necessidade de interrupção do circuito."], gab:"E",
dicas:["Pense em como cada instrumento é ligado: em série (abre o circuito) ou em paralelo (não abre).","O alicate não toca o condutor. Que grandeza ele \"sente\"?"],
erros:{
A:"V × I dá a potência APARENTE. A ativa precisa do fator de potência (P = V·I·cos φ), por isso existe o wattímetro.",
B:"\"Sempre\" é forte demais: há métodos de medição direta de resistência (ohmímetro de leitura direta, pontes de comparação).",
C:"A ponte de Wheatstone mede RESISTÊNCIA, comparando-a com resistores conhecidos até o equilíbrio.",
D:"O alicate mede a corrente indiretamente, pelo campo magnético que ela produz em volta do condutor."},
res:P("O voltímetro é ligado em paralelo com o trecho a medir, sem abrir o circuito (diferente do amperímetro convencional, que vai em série). Alternativa <b>E</b>. As demais têm erros conceituais: V·I é potência aparente; a ponte de Wheatstone mede resistência; o alicate usa o campo magnético.")
});
