B({
id:"b13", titulo:"Eletrônica analógica e de potência",
sub:"Amplificador operacional, polarização de transistor por Thévenin, regulador linear, conversão A/D, tiristores e conversores CC-CC.",
objetivos:["Usar curto-circuito virtual para achar ganhos e funções de transferência de amp-ops","Reduzir a rede de polarização de um transistor a V<sub>BB</sub> e R<sub>B</sub>","Projetar o divisor de realimentação de um regulador linear","Calcular corrente média em retificadores controlados","Reconhecer o comportamento do buck e da meia-ponte (dois quadrantes)"],
qs:["11-40","18-51","18-52","18-45","18-53","18-56","11-32"],
aula:
"<h3>1. Amp-op ideal</h3>"+
P("Ganho infinito, corrente de entrada nula e, com realimentação negativa, V<sub>+</sub> = V<sub>−</sub> (curto-circuito virtual).")+
F("Inversor: V<sub>o</sub>/V<sub>i</sub> = −Z<sub>f</sub>/Z<sub>i</sub> &nbsp;&nbsp; Não inversor: V<sub>o</sub>/V<sub>i</sub> = 1 + Z<sub>f</sub>/Z<sub>i</sub><br>R e C em série na realimentação: Z<sub>f</sub> = R + 1/(sC) ⇒ |H| = (R/R<sub>i</sub>)·(s + 1/RC)/s (controlador PI)")+
"<h3>2. Polarização por Thévenin</h3>"+
P("Reduza tudo o que está à esquerda da base a uma fonte V<sub>BB</sub> em série com R<sub>B</sub>: transforme fontes de tensão em fontes de corrente (V/R em paralelo com R), some as correntes em paralelo, combine os resistores em paralelo e volte para Thévenin. Resistores em série depois disso somam em R<sub>B</sub>.")+
TRAP("o equivalente de Norton só é igual ao de Thévenin se I<sub>N</sub> = V<sub>th</sub>/R<sub>th</sub>. Confira essa relação nas alternativas.")+
"<h3>3. Regulador linear série</h3>"+
P("O amp-op compara a referência do zener com a fração da saída dada pelo divisor R<sub>1</sub>–R<sub>2</sub> e ajusta o transistor até V<sub>+</sub> = V<sub>−</sub>:")+
F("V<sub>Z</sub> = V<sub>o</sub>·R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>) &nbsp;⇒&nbsp; V<sub>o</sub> = V<sub>Z</sub>·(1 + R<sub>1</sub>/R<sub>2</sub>)")+
"<h3>4. Conversor A/D</h3>"+
F("Resolução (passo) = faixa/2<sup>n</sup> &nbsp;&nbsp; erro máximo de quantização = ± passo/2")+
"<h3>5. Tiristor (SCR)</h3>"+
P("Conduz quando polarizado diretamente E recebe pulso no gate; desliga quando a corrente zera. Com disparo em α e carga resistiva:")+
F("Corrente média no SCR (meia onda controlada): I<sub>méd</sub> = (V<sub>m</sub>/R)·(1 + cos α)/(2π)")+
"<h3>6. Conversores CC-CC</h3>"+
"<ul><li><b>Buck (abaixador):</b> V<sub>o</sub> = D·V<sub>in</sub> (D = ciclo de trabalho &lt; 1, sempre V<sub>o</sub> &lt; V<sub>in</sub>). Se V<sub>in</sub> aumenta, D precisa DIMINUIR. Em regime, a tensão média no indutor é zero, então V<sub>médio, diodo</sub> = V<sub>o</sub>; a corrente média no capacitor é zero.</li><li><b>Meia-ponte com duas chaves e dois diodos (dois quadrantes):</b> tensão no motor só positiva (0 ou V<sub>CC</sub>), corrente nos dois sentidos ⇒ motoriza e regenera (frenagem devolve energia à bateria), mas não inverte o sentido de rotação.</li></ul>",
exemplo:{
 titulo:"Exemplo: amp-op inversor com rede RC",
 enun:P("Amp-op inversor: R<sub>i</sub> = 10 kΩ na entrada; na realimentação, R<sub>f</sub> = 50 kΩ em série com C = 2 µF. Queremos H(s) = V<sub>o</sub>/V<sub>i</sub>."),
 passos:[
  {p:"Qual o ganho em alta frequência (módulo de R<sub>f</sub>/R<sub>i</sub>)?", v:5, r:"Em alta frequência o capacitor é um curto: |H| = 50/10 = <b>5</b>.", dica:"Z<sub>f</sub> = R<sub>f</sub> + 1/(sC). Para s grande, sobra R<sub>f</sub>."},
  {p:"Qual a posição do zero, em rad/s (o valor a em s + a)?", v:10, r:"Z<sub>f</sub> = (sR<sub>f</sub>C + 1)/(sC) ⇒ zero em s = −1/(R<sub>f</sub>C) = −1/(50 000·2·10⁻⁶) = <b>−10 rad/s</b>.", dica:"Coloque Z<sub>f</sub> sobre denominador comum: o zero é 1/(R<sub>f</sub>C)."},
  {p:"Escreva H(s). Qual o coeficiente K em H(s) = −K(s + 10)/s?", v:5, r:"H(s) = −(R<sub>f</sub>/R<sub>i</sub>)(s + 1/R<sub>f</sub>C)/s = <b>−5(s + 10)/s</b>: um controlador PI.", dica:"H = −Z<sub>f</sub>/R<sub>i</sub>. Fatore R<sub>f</sub>."}
 ],
 fecho:"A 11-40 pede o caminho inverso: dado 4(s + 20)/s e R<sub>i</sub> = 5 Ω, ache R e C."
}
});

Q("11-40",{
enun:P("O circuito da figura é composto por um amplificador operacional ideal. Para que a função de transferência desse circuito seja H(s) = V<sub>o</sub>(s)/V<sub>i</sub>(s) = 4(s + 20)/s, os valores de R, em Ω, e de C, em F, devem ser, respectivamente"),
fig:"f11_40", ops:["5 e 0,001","20 e 0,0025","30 e 0,01","15 e 0,1","10 e 0,002"], gab:"B",
dicas:["Inversor: |H| = Z<sub>f</sub>/5 = (R + 1/sC)/5 = (R/5)·(s + 1/RC)/s.","Compare: R/5 = 4 e 1/(RC) = 20."],
erros:{
A:"Com R = 5 Ω o ganho R/5 seria 1, não 4.",
C:"Com R = 30 Ω, R/5 = 6. Confira o fator que multiplica (s + 20).",
D:"R = 15 Ω dá ganho 3, e 1/(RC) = 1/1,5 ≠ 20.",
E:"R = 10 Ω dá ganho 2 e 1/(RC) = 50. Use R/5 = 4 primeiro e depois o zero."},
res:OL(["H(s) = −(R + 1/sC)/5 = −(R/5)·(s + 1/RC)/s (o sinal do inversor é ignorado na comparação).","R/5 = 4 ⇒ R = 20 Ω.","1/(RC) = 20 ⇒ C = 1/(20·20) = 0,0025 F.","Resposta: <b>20 Ω e 0,0025 F</b>."])
});

Q("18-51",{
enun:P("O cálculo da corrente de polarização no transistor Q<sub>1</sub> pode ser simplificado se o circuito for substituído por um equivalente mais simples, que produza o mesmo resultado. O circuito equivalente que produz a mesma corrente de polarização em Q<sub>1</sub> é (veja as alternativas na figura):"),
fig:"f18_51", ops:["I<sub>BB</sub> = 1,0 mA em paralelo com R<sub>B</sub> = 15 kΩ","I<sub>BB</sub> = 1,0 mA em paralelo com R<sub>B</sub> = 25 kΩ","V<sub>BB</sub> = 6,0 V em série com R<sub>B</sub> = 15 kΩ","V<sub>BB</sub> = 10 V em série com R<sub>B</sub> = 10 kΩ","V<sub>BB</sub> = 10 V em série com R<sub>B</sub> = 25 kΩ"], gab:"E",
dicas:["Transforme V<sub>1</sub> = 9 V com R<sub>1</sub> = 15 kΩ em 0,6 mA em paralelo com 15 kΩ. Some com I<sub>1</sub> = 0,4 mA.","1 mA em paralelo com (15 k ∥ 30 k) = 10 kΩ ⇒ Thévenin 10 V com 10 kΩ. Ainda falta o R<sub>3</sub> em série."],
erros:{
A:"O Norton antes do R<sub>3</sub> seria 1 mA com 10 kΩ (e não 15 kΩ). E o R<sub>3</sub> em série ainda não foi incluído.",
B:"1 mA ∥ 25 kΩ equivale a 25 V com 25 kΩ, não a 10 V com 25 kΩ. Depois de somar o R<sub>3</sub> em série, o equivalente de Norton seria 0,4 mA ∥ 25 kΩ.",
C:"6 V sai de um divisor 9·30/45 ignorando a fonte de corrente I<sub>1</sub>. Ela também contribui.",
D:"10 V com 10 kΩ é o equivalente no nó entre R<sub>1</sub> e R<sub>2</sub>. Falta somar R<sub>3</sub> = 15 kΩ em série até a base."},
res:OL(["V<sub>1</sub>/R<sub>1</sub> = 9/15k = 0,6 mA, em paralelo com 15 kΩ.","Somando I<sub>1</sub>: 1,0 mA em paralelo com 15 k ∥ 30 k = 10 kΩ.","Thévenin: 1,0 mA × 10 kΩ = 10 V, em série com 10 kΩ.","Com R<sub>3</sub> em série: <b>V<sub>BB</sub> = 10 V, R<sub>B</sub> = 25 kΩ</b>."])
});

Q("18-52",{
enun:P("A figura mostra um regulador de tensão linear. A partir de uma fonte não regulada V<sub>DC</sub>, o circuito entrega uma tensão regulada à carga, ajustável pelo resistor variável R<sub>1</sub>. O amplificador operacional é ideal e o diodo zener Z<sub>1</sub> tem tensão de ruptura de 5,0 V. Qual deve ser, em kΩ, o valor de R<sub>1</sub> para que o regulador entregue 12 V à carga?"),
fig:"f18_52", ops:["10","14","20","24","25"], gab:"B",
dicas:["A entrada + recebe a referência do zener (5 V). A entrada − recebe a tensão no R<sub>2</sub> (divisor da saída).","12·10/(R<sub>1</sub> + 10) = 5."],
erros:{
A:"Com R<sub>1</sub> = R<sub>2</sub>, a saída seria 2 × 5 = 10 V, não 12 V.",
C:"Com R<sub>1</sub> = 20 kΩ: V<sub>o</sub> = 5·(1 + 20/10) = 15 V.",
D:"24 kΩ é o valor de R<sub>1</sub> + R<sub>2</sub>. Subtraia R<sub>2</sub> = 10 kΩ.",
E:"Com 25 kΩ a saída seria 17,5 V. Monte V<sub>o</sub> = V<sub>Z</sub>(1 + R<sub>1</sub>/R<sub>2</sub>)."},
res:OL(["Curto virtual: V<sub>R2</sub> = V<sub>Z</sub> = 5 V.","12·10/(R<sub>1</sub> + 10) = 5 ⇒ R<sub>1</sub> + 10 = 24.","<b>R<sub>1</sub> = 14 kΩ</b>."])
});

Q("18-45",{
enun:P("Um sinal de tensão elétrica, variando continuamente no tempo, tem amplitude limitada entre −5 V e +5 V para possibilitar a sua digitalização por um conversor A/D de 8 bits. Essa conversão vai acarretar um erro na quantização da amplitude da tensão, medido em mV, de aproximadamente"),
ops:["10","40","60","100","200"], gab:"B",
aviso:"a banca chamou de \"erro de quantização\" o próprio passo (resolução) do conversor, 10/256 ≈ 39 mV. A rigor, o erro máximo de arredondamento é metade disso (≈ 20 mV), que não está nas alternativas.",
dicas:["Faixa total: de −5 a +5 V = 10 V.","8 bits ⇒ 2⁸ = 256 níveis. Passo = 10 V/256."],
erros:{
A:"10 mV seria uma faixa de ~2,5 V ou 10 bits. Confira: 10 V/2⁸.",
C:"60 mV não sai de 10/256. Refaça a divisão.",
D:"100 mV = 10 V/100? Use 2⁸ = 256 níveis, não 100.",
E:"200 mV ≈ 10/50. O número de níveis de 8 bits é 256."},
res:P("Passo = 10 V/2⁸ = 10/256 ≈ 0,039 V ≈ <b>40 mV</b>.")
});

Q("18-53",{
enun:P("O circuito da figura controla a potência que uma fonte alternada V<sub>S</sub> entrega a uma carga resistiva R<sub>L</sub> = 30 Ω, por meio do disparo de um SCR (em antiparalelo com um diodo). As formas de onda de V<sub>S</sub> (pico 120 V, período 20 ms) e da tensão de disparo V<sub>G</sub> (pulsos em t = 5, 25, 45, 65 e 85 ms) estão representadas. Considerando ideais o diodo e o SCR, a corrente média, em ampères, que circula pelo SCR é igual a"),
fig:"f18_53", ops:["0","1/π","2/π","4/π","6/π"], gab:"C",
dicas:["Os pulsos ocorrem a 5 ms de cada período de 20 ms: ângulo de disparo α = 90°.","O SCR conduz de 90° a 180° de cada semiciclo positivo. I<sub>méd</sub> = (1/2π)∫<sub>π/2</sub><sup>π</sup>(V<sub>m</sub>/R)sen θ dθ."],
erros:{
A:"O SCR recebe pulso com polarização direta (pico do semiciclo positivo), então conduz. A corrente média não é zero.",
B:"1/π corresponderia a metade da área. Confira: ∫<sub>π/2</sub><sup>π</sup> sen θ dθ = 1, e V<sub>m</sub>/R = 4 A.",
D:"4/π é a corrente média de meia onda COMPLETA (α = 0). Com disparo em 90°, conduz-se só metade do semiciclo.",
E:"6/π supera até a meia onda completa. Revise V<sub>m</sub>/R = 120/30 = 4 A e o intervalo de condução."},
res:OL(["Período 20 ms; disparo em 5 ms ⇒ α = 90°.","I<sub>m</sub> = 120/30 = 4 A.","I<sub>méd,SCR</sub> = (4/2π)·∫<sub>π/2</sub><sup>π</sup> sen θ dθ = (4/2π)·1 = <b>2/π A</b>.","O diodo conduz os semiciclos negativos, mas eles não passam pelo SCR."])
});

Q("18-56",{
enun:P("O circuito da figura é um conversor CC-CC que converte uma tensão não regulada V<sub>DC</sub> em uma tensão regulada V<sub>O</sub> numa carga R<sub>L</sub>, controlada pelo ciclo de trabalho da chave S<sub>1</sub>. Nesse conversor,"),
fig:"f18_56", ops:["o ciclo de trabalho da chave também deve ser aumentado para manter constante V<sub>O</sub>, caso a tensão V<sub>DC</sub> aumente.","a tensão na saída V<sub>O</sub> será maior que V<sub>DC</sub>, se o ciclo de trabalho de S<sub>1</sub> for superior a 50% do período.","a polaridade da tensão V<sub>O</sub> na saída é invertida em relação à tensão V<sub>DC</sub> na entrada.","a tensão média V<sub>D1</sub> no diodo é igual à tensão média na carga R<sub>L</sub> em regime permanente.","a corrente média na resistência de carga R<sub>L</sub> é igual à corrente média fornecida pelo capacitor C<sub>1</sub> em regime permanente."], gab:"D",
dicas:["Chave em série, diodo para a terra, indutor em série com a saída: é o conversor buck, V<sub>O</sub> = D·V<sub>DC</sub>.","Em regime permanente, qual é a tensão média num indutor? E a corrente média num capacitor?"],
erros:{
A:"V<sub>O</sub> = D·V<sub>DC</sub>: se V<sub>DC</sub> sobe, D deve DIMINUIR para manter V<sub>O</sub>.",
B:"No buck, V<sub>O</sub> = D·V<sub>DC</sub> &lt; V<sub>DC</sub> para qualquer D &lt; 1. Quem eleva é o boost (ou buck-boost com D &gt; 0,5).",
C:"Inversão de polaridade é característica do buck-boost. Aqui a saída tem a mesma polaridade.",
E:"Em regime, a corrente média no capacitor é ZERO (ele carrega e descarrega igualmente). A corrente média da carga vem do indutor."},
res:P("Em regime, a tensão média no indutor é zero; como V<sub>D1</sub> = v<sub>L</sub> + V<sub>O</sub>, a média de V<sub>D1</sub> é igual a V<sub>O</sub> (= D·V<sub>DC</sub>). Alternativa <b>D</b>.")
});

Q("11-32",{
enun:P("A força motriz de um carro elétrico vem de um motor CC acionado por dois diodos, D<sub>1</sub> e D<sub>2</sub>, e duas chaves estáticas autocomutáveis, S<sub>1</sub> e S<sub>2</sub>, conforme a figura (V<sub>CC</sub> é a bateria). Em qualquer instante, uma das chaves está conduzindo e a outra não. Analise: I – A corrente i<sub>m</sub> pode fluir nos dois sentidos. II – O carro pode andar em marcha a ré, isto é, o sentido de rotação do motor pode ser invertido. III – É possível recuperar energia para a bateria durante a frenagem motora. É correto APENAS o que se afirma em"),
fig:"f11_32", ops:["I","II","III","I e II","I e III"], gab:"E",
dicas:["Com S<sub>1</sub> ou D<sub>1</sub> conduzindo, V<sub>m</sub> = V<sub>CC</sub>; com S<sub>2</sub> ou D<sub>2</sub>, V<sub>m</sub> = 0. A tensão no motor pode ficar negativa?","A corrente pode ir pelo par S<sub>1</sub>/D<sub>2</sub> (motorizando) ou pelo par S<sub>2</sub>/D<sub>1</sub> (voltando para a bateria)."],
erros:{
A:"I é verdadeira, mas III também: com corrente negativa e tensão positiva, a potência flui do motor para a bateria (frenagem regenerativa).",
B:"II é falsa: a tensão média no motor só pode ser positiva (0 a V<sub>CC</sub>). Para inverter a rotação é preciso tensão negativa (ponte completa).",
C:"III é verdadeira, mas I também: é justamente a corrente nos dois sentidos que permite regenerar.",
D:"II é falsa: este conversor de dois quadrantes não inverte a polaridade da tensão do motor."},
res:P("Meia-ponte: V<sub>m</sub> ≥ 0 sempre, i<sub>m</sub> nos dois sentidos (quadrantes 1 e 2). I verdadeira, III verdadeira (regeneração), II falsa. Alternativa <b>E</b>.")
});
