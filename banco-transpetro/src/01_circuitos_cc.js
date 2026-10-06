B({
id:"b01", titulo:"Circuitos CC e análise de redes",
sub:"Kirchhoff, análise nodal, Thévenin/Norton, pontes e redes infinitas. É a base de quase todas as contas da prova.",
objetivos:["Montar equações de nó (KCL) e de malha (KVL) sem errar sinal","Calcular R<sub>th</sub> e V<sub>th</sub> de qualquer rede resistiva","Reconhecer uma ponte equilibrada e um curto que divide o circuito","Montar a matriz de admitância nodal Y por inspeção","Resolver redes em escada infinitas pela auto-semelhança"],
qs:["11-33","11-38","18-43","18-44","18-61","18-70","23-44","11-34","23-62"],
aula:
"<h3>1. As duas leis que resolvem tudo</h3>"+
P("<b>KCL (Lei dos nós):</b> a soma das correntes que saem de um nó é zero. <b>KVL (Lei das malhas):</b> a soma das tensões ao longo de um caminho fechado é zero. Toda técnica (nodal, Thévenin, superposição) é só uma forma organizada de aplicar essas duas leis.")+
F("Análise nodal: escolha um nó de referência (terra) e escreva, para cada nó k:<br>Σ (V<sub>k</sub> − V<sub>j</sub>)/R<sub>kj</sub> = correntes de fontes que ENTRAM no nó k")+
TRAP("fonte de corrente em paralelo com um resistor não muda a corrente da fonte; e um resistor em série com uma fonte de corrente é irrelevante para o resto do circuito (a corrente já está imposta).")+
"<h3>2. Thévenin e Norton</h3>"+
P("Qualquer rede linear vista de dois terminais equivale a uma fonte V<sub>th</sub> em série com R<sub>th</sub> (ou I<sub>N</sub> = V<sub>th</sub>/R<sub>th</sub> em paralelo com R<sub>th</sub>).")+
"<ul><li><b>V<sub>th</sub></b>: tensão em aberto nos terminais (sem a carga).</li><li><b>R<sub>th</sub></b>: desligue as fontes independentes (fonte de tensão vira <b>curto</b>, fonte de corrente vira <b>aberto</b>) e calcule a resistência vista dos terminais.</li><li><b>Transformação de fontes:</b> V em série com R ⇔ V/R em paralelo com R. Útil para juntar fontes em paralelo (somam correntes) e resistências em paralelo.</li><li><b>Máxima transferência de potência:</b> R<sub>carga</sub> = R<sub>th</sub>, e P<sub>máx</sub> = V<sub>th</sub>²/(4R<sub>th</sub>).</li></ul>"+
"<h3>3. Pontes e curtos</h3>"+
P("Ponte de Wheatstone com braços R<sub>1</sub>, R<sub>2</sub> (de um lado) e R<sub>3</sub>, R<sub>4</sub> (do outro) está <b>equilibrada</b> quando R<sub>1</sub>/R<sub>2</sub> = R<sub>3</sub>/R<sub>4</sub>: o resistor central não conduz e pode ser removido. Se em vez de resistor central houver um <b>fio</b>, os dois nós viram um só: os braços ficam em paralelo dois a dois.")+
"<h3>4. Matriz de admitância nodal</h3>"+
F("Y<sub>kk</sub> = soma de todas as admitâncias ligadas ao nó k<br>Y<sub>kj</sub> = − (admitância entre os nós k e j)")+
"<h3>5. Redes infinitas (escada)</h3>"+
P("Se a rede é infinita, retirar a primeira célula deixa a mesma rede. Chame o equivalente de X, escreva X em função da primeira célula ligada a X e resolva a equação do 2º grau. Para capacitores lembre: em <b>paralelo somam</b>, em <b>série</b> combinam como resistores em paralelo (C<sub>1</sub>C<sub>2</sub>/(C<sub>1</sub>+C<sub>2</sub>)).")+
TRAP("em regime permanente CC, capacitor = circuito aberto e indutor = curto. Questões com capacitor \"3 F\" ou indutor em regime CC querem só ver se você sabe isso."),
exemplo:{
 titulo:"Exemplo: Thévenin passo a passo",
 enun:P("Uma fonte de 24 V tem em série um resistor de 6 Ω. Depois dele há um resistor de 3 Ω ligado à referência (em paralelo com a saída) e, em seguida, um resistor de 2 Ω em série até o terminal a. O terminal b é a referência. Uma carga R<sub>L</sub> será ligada entre a e b."),
 passos:[
  {p:"Com a carga desligada, qual a tensão V<sub>th</sub> entre a e b (em V)?", v:8, r:"Sem carga, o 2 Ω não conduz. A tensão em a é a tensão do 3 Ω: divisor 24·3/(6+3) = <b>8 V</b>.", dica:"Sem carga, passa corrente no resistor de 2 Ω? Então a tensão em a é a do resistor de 3 Ω (divisor de tensão entre 6 Ω e 3 Ω)."},
  {p:"Desligando a fonte (curto), qual R<sub>th</sub> vista de a-b (em Ω)?", v:4, r:"6 Ω ∥ 3 Ω = 2 Ω; somando o 2 Ω em série: <b>R<sub>th</sub> = 4 Ω</b>.", dica:"Fonte de tensão desligada vira curto. Então 6 Ω fica em paralelo com 3 Ω, e esse conjunto fica em série com o 2 Ω."},
  {p:"Com R<sub>L</sub> = 4 Ω, qual a corrente na carga (em A)?", v:1, r:"I = V<sub>th</sub>/(R<sub>th</sub>+R<sub>L</sub>) = 8/8 = <b>1 A</b>.", dica:"Use o equivalente: uma fonte V<sub>th</sub> em série com R<sub>th</sub> e a carga."},
  {p:"Qual a potência na carga (em W)? Ela é a máxima possível?", v:4, r:"P = I²R<sub>L</sub> = 1·4 = <b>4 W</b>. É a máxima, porque R<sub>L</sub> = R<sub>th</sub>: P<sub>máx</sub> = V<sub>th</sub>²/(4R<sub>th</sub>) = 64/16 = 4 W.", dica:"P = I²R. Compare R<sub>L</sub> com R<sub>th</sub>."}
 ],
 fecho:"Esse roteiro (V<sub>th</sub> em aberto → R<sub>th</sub> com fontes desligadas → circuito equivalente) resolve as questões 18-43, 18-44, 18-70 e 23-44 do bloco."
}
});

Q("11-33",{
enun:P("Para o circuito apresentado na figura, o valor da tensão V<sub>x</sub>, em volts, é"),
fig:"f11_33", ops:["−4","0","4","8","12"], gab:"A",
aviso:"o sinal depende da convenção da seta. Aqui vale a convenção usual da banca: a ponta da seta indica o terminal de referência positiva de V<sub>x</sub>.",
dicas:["A fonte de 10 V e os resistores de 2 Ω e 1 Ω não interferem na corrente do resistor de 4 Ω. Olhe só para o nó da direita (topo da fonte de 3 A).","KCL no nó da direita: entram 3 A pela fonte de baixo; saem 2 A pela fonte de cima. O que sobra tem de passar pelo 4 Ω, da direita para a esquerda."],
erros:{
B:"Você tratou as fontes de corrente como se não impusessem nada ao resistor de 4 Ω. Faça o balanço de correntes no nó da direita: a diferença entre o que entra e o que sai pelas fontes precisa passar pelo 4 Ω.",
C:"O módulo está certo: há 4 V sobre o resistor de 4 Ω. O erro é de sinal. Descubra qual extremidade do 4 Ω está em potencial mais alto (a corrente de 1 A vai de qual lado para qual?) e compare com o terminal para onde a seta de V<sub>x</sub> aponta.",
D:"8 V corresponderia a 2 A no resistor de 4 Ω. Você usou só uma das fontes de corrente. Pelo nó da direita passam as duas fontes; refaça o KCL ali.",
E:"12 V = 3 A × 4 Ω: você mandou toda a corrente da fonte de 3 A pelo resistor e esqueceu que parte dela sai pela fonte de 2 A."},
res:OL(["Nó da direita (R): entram 3 A (fonte de baixo) e saem 2 A pela fonte de cima, cuja seta aponta para a esquerda.","KCL: 3 = 2 + I<sub>4Ω</sub> ⇒ I<sub>4Ω</sub> = 1 A, da direita para a esquerda.","V<sub>R</sub> − V<sub>L</sub> = 4 Ω × 1 A = 4 V: o lado direito é o mais positivo.","A seta de V<sub>x</sub> aponta para a esquerda (terminal L), então V<sub>x</sub> = V<sub>L</sub> − V<sub>R</sub> = <b>−4 V</b>."])+P("Repare que a fonte de 10 V só define as tensões absolutas dos nós; a diferença no 4 Ω é imposta pelas fontes de corrente.")
});

Q("11-38",{
enun:P("A figura apresenta um circuito elétrico puramente resistivo, alimentado por uma fonte CC de 20 V. As correntes nos trechos entre os pontos A-B, C-A e B-D são, respectivamente, em ampères, iguais a"),
fig:"f11_38", ops:["0,5 ; 0 e 0","0,5 ; 0 e 0,5","0 ; 0,33 e 0,5","0 ; 0,16 e 0,33","0,5 ; 0,16 e 0,33"], gab:"D",
dicas:["O traço vertical entre A e B é um fio (resistência zero). Então A e B são o mesmo nó.","Com A = B, os resistores de 20 Ω e 10 Ω (que saem de C) ficam em paralelo; os de 40 Ω e 20 Ω (que chegam em D) também. Ache a corrente total e divida.","Para saber a corrente no fio A-B, faça KCL no nó A: compare o que chega de C pelo 20 Ω com o que sai para D pelo 40 Ω."],
erros:{
A:"Você imaginou que toda a corrente da fonte passa pelo fio A-B. Mas as correntes de C chegam tanto em A quanto em B, e saem tanto de A quanto de B para D. Calcule o que entra e o que sai do nó A.",
B:"A corrente no fio A-B não é a corrente total. E C-A não pode ser zero: há 20 Ω ligando C a A com diferença de potencial. Junte A e B num único nó e refaça.",
C:"C-A e B-D com 0,33 e 0,5: você dividiu a corrente com a regra do divisor invertida ou usou a corrente total errada. Lembre: no divisor de corrente, o ramo de MENOR resistência leva a MAIOR parte.",
E:"Os valores de C-A e B-D estão certos, mas confira o fio A-B pelo KCL no nó A: a corrente que chega de C pelo 20 Ω é igual à que sai para D pelo 40 Ω?"},
res:OL(["O fio A-B junta A e B: chame de nó N.","De C até N: 20 Ω ∥ 10 Ω = 6,67 Ω. De N até D: 40 Ω ∥ 20 Ω = 13,33 Ω. Mais o 20 Ω de D até a fonte: R<sub>total</sub> = 6,67 + 13,33 + 20 = 40 Ω.","I = 20/40 = 0,5 A.","C-A (20 Ω): 0,5·10/30 = 0,167 A; C-B (10 Ω): 0,333 A.","A-D (40 Ω): 0,5·20/60 = 0,167 A; B-D (20 Ω): 0,333 A.","Nó A: chegam 0,167 A de C e saem 0,167 A para D ⇒ I<sub>AB</sub> = <b>0</b>."])+P("Resposta: 0 ; 0,16 e 0,33. A ponte está equilibrada (20/10 = 40/20), por isso o fio central não conduz.")
});

Q("18-43",{
enun:P("Considere o circuito elétrico de corrente contínua mostrado na figura. Com base nos teoremas de Norton e Thévenin, qual é o valor, em ohms, da resistência equivalente desse circuito, medida entre os pontos 1 e 2?"),
fig:"f18_43", ops:["15","20","35","40","55"], gab:"B",
dicas:["Para resistência equivalente, desligue a fonte de 24 V (vira curto).","Do ponto 1 há dois caminhos até o 2: um pela esquerda (25 Ω e depois 24 Ω ∥ 40 Ω) e outro pela direita (30 Ω + 10 Ω)."],
erros:{
A:"15 Ω é só o paralelo 24 Ω ∥ 40 Ω. Ainda faltam o 25 Ω em série com esse conjunto e o ramo da direita (30 + 10) em paralelo com tudo.",
C:"35 Ω: você somou em série coisas que estão em paralelo. Vistos do par 1-2, o ramo esquerdo (25 + 24∥40) e o ramo direito (30 + 10) estão em paralelo.",
D:"40 Ω é o valor de cada ramo isolado. Os dois ramos, vistos dos terminais 1 e 2, estão em paralelo.",
E:"55 Ω: provavelmente você não curto-circuitou a fonte de 24 V, ou somou 24 + 40 em vez de fazer o paralelo. Fonte de tensão desligada = curto."},
res:OL(["Fonte de 24 V em curto ⇒ 24 Ω fica em paralelo com 40 Ω: 24·40/64 = 15 Ω.","Ramo esquerdo visto de 1: 25 + 15 = 40 Ω.","Ramo direito: 30 + 10 = 40 Ω.","R<sub>eq</sub> = 40 ∥ 40 = <b>20 Ω</b>."])
});

Q("18-44",{
enun:P("Considere o circuito de corrente contínua e puramente resistivo da figura. Conectando-se uma carga resistiva de 2 kΩ entre os terminais a e b, qual é o valor, em mW, da potência dissipada nessa carga?"),
fig:"f18_44", ops:["0,72","0,96","1,75","2,24","2,88"], gab:"A",
dicas:["Faça o equivalente de Thévenin visto de a-b antes de ligar a carga.","V<sub>th</sub> = divisor de 12 V entre 12 kΩ e 12 kΩ. R<sub>th</sub> = (12 k ∥ 12 k) + 2 k."],
erros:{
B:"0,96 mW sai com corrente de ~0,69 mA. Confira R<sub>th</sub>: o 2 kΩ de saída está em série com o paralelo 12 k ∥ 12 k = 6 kΩ, e a carga soma mais 2 kΩ.",
C:"Confira V<sub>th</sub>: em aberto, a tensão em a é a do resistor de 12 kΩ vertical (divisor de 12 V meio a meio), e não 12 V.",
D:"Você deve ter esquecido o resistor de 2 kΩ em série na saída (R<sub>th</sub> = 6 kΩ em vez de 8 kΩ). Refaça a corrente.",
E:"2,88 mW = 1,2 mA² × 2 kΩ: a corrente está o dobro do correto. Você usou 12 V direto em vez de V<sub>th</sub> = 6 V, ou esqueceu parte de R<sub>th</sub>."},
res:OL(["V<sub>th</sub> = 12·12/(12+12) = 6 V.","R<sub>th</sub> = 12 k ∥ 12 k + 2 k = 6 + 2 = 8 kΩ.","I = 6/(8 k + 2 k) = 0,6 mA.","P = I²R = (0,6·10⁻³)²·2000 = 0,72·10⁻³ W = <b>0,72 mW</b>."])
});

Q("18-61",{
enun:P("O circuito da figura funciona em regime permanente, alimentado por uma fonte CC de 10 V e uma fonte de corrente de 2 A. Os componentes são ideais. Nessas condições, a corrente I<sub>L</sub> que passa pelo resistor de 12 Ω, em ampères, é"),
fig:"f18_61", ops:["0,50","0,75","1,50","2,00","2,25"], gab:"B",
dicas:["Regime permanente CC: o capacitor de 3 F é circuito aberto.","Todos os elementos estão entre o mesmo nó superior e a referência. Escreva uma única equação de nó para a tensão V do nó de cima."],
erros:{
A:"0,5 A corresponde a V = 6 V no nó. Revise a equação de nó: a fonte de 10 V entra pelo resistor de 4 Ω como (10 − V)/4, e a fonte de 2 A também injeta corrente no nó.",
C:"1,5 A daria V = 18 V. Confira os sinais: a corrente que vem da fonte de 10 V é (10 − V)/4, que fica negativa se V > 10.",
D:"2 A é a corrente da fonte de corrente, mas ela se divide entre os ramos (4 Ω, 6 Ω e 12 Ω). Monte a equação de nó.",
E:"Você talvez tenha considerado o capacitor como curto, ou ignorado o resistor de 6 Ω. Em CC, capacitor = aberto, e o 6 Ω continua ligado."},
res:OL(["Capacitor em CC: aberto.","Nó superior com tensão V: (10 − V)/4 + 2 = V/6 + V/12.","2,5 − V/4 + 2 = V/4 ⇒ 4,5 = V/2 ⇒ V = 9 V.","I<sub>L</sub> = 9/12 = <b>0,75 A</b>."])
});

Q("18-70",{
enun:P("A figura mostra um circuito alimentado por uma fonte de corrente de 2 A, conectado a uma carga de 80 Ω. Para R = 10 Ω, o valor da fonte de tensão do equivalente de Thévenin, em volts, para o circuito dentro do retângulo pontilhado, entre os terminais da carga, é"),
fig:"f18_70", ops:["10","20","40","50","80"], gab:"C",
dicas:["O resistor 2R em série com a fonte de corrente não altera nada: a corrente de 2 A está imposta.","Entre o nó de cima e o de baixo do losango há dois caminhos: 3R + R e 2R + 2R. Eles estão em paralelo."],
erros:{
A:"10 V seria 2 A × 5 Ω. Você fez paralelos demais. Os dois caminhos do losango são (3R + R) = 40 Ω e (2R + 2R) = 40 Ω, e só esses dois ficam em paralelo.",
B:"20 V = 2 A × 10 Ω. Confira a resistência entre os nós de cima e de baixo do losango: cada lado vale 4R = 40 Ω.",
D:"50 V: você incluiu o 2R que está em série com a fonte de corrente? Ele não entra na tensão de saída, pois a corrente de 2 A já está imposta.",
E:"80 V = 2 A × 40 Ω: você usou só um dos lados do losango. Os dois lados ficam em paralelo."},
res:OL(["Em série com a fonte de corrente, o 2R é irrelevante para a tensão de saída.","Lado esquerdo do losango: 3R + R = 4R; lado direito: 2R + 2R = 4R.","Em paralelo: 4R ∥ 4R = 2R = 20 Ω.","Em aberto, toda a corrente de 2 A passa por esse equivalente: V<sub>th</sub> = 2 × 20 = <b>40 V</b>."])
});

Q("23-44",{
enun:P("Considere o circuito da figura, conectado a uma carga resistiva de 10 Ω pelos terminais 1 e 2. Se o circuito for substituído por seu equivalente de Thévenin, qual deverá ser o valor de R<sub>Th</sub>, em ohms?"),
fig:"f23_44", ops:["15","20","25","30","35"], gab:"A",
dicas:["Desligue a fonte de 12 V (curto): os dois resistores de 10 Ω da esquerda ficam em paralelo.","Confira se a ponte (5, 10, 10, 20) está equilibrada: compare 5/10 com 10/20."],
erros:{
B:"20 Ω: você talvez tenha deixado o resistor central de 10 Ω influenciar. Teste a razão dos braços: 5/10 = 10/20, a ponte está equilibrada e o resistor central pode sair.",
C:"25 Ω: confira o paralelo de entrada. Com a fonte em curto, 10 Ω ∥ 10 Ω = 5 Ω (e não 10 Ω).",
D:"30 Ω: você somou os dois caminhos da ponte em série. Eles ficam em paralelo entre o nó de entrada e o terminal 1.",
E:"35 Ω: a fonte de tensão deve virar curto antes de calcular R<sub>th</sub>; não some resistores que ficaram em paralelo com ela."},
res:OL(["Fonte de 12 V em curto: 10 Ω ∥ 10 Ω = 5 Ω entre o nó de entrada da ponte e o terminal 2.","Ponte: 5 Ω e 10 Ω saindo do nó de entrada; 10 Ω e 20 Ω chegando ao terminal 1. Como 5/10 = 10/20, está equilibrada: o 10 Ω central não conduz.","Caminhos até o terminal 1: (5 + 10) = 15 Ω e (10 + 20) = 30 Ω, em paralelo: 15·30/45 = 10 Ω.","R<sub>Th</sub> = 5 + 10 = <b>15 Ω</b>."])
});

Q("11-34",{
enun:P("Considere o circuito da figura, com três nós (1, 2 e 3), seis admitâncias (y<sub>1</sub> a y<sub>6</sub>), alimentado por duas fontes senoidais de corrente, em regime permanente. Equacionando o circuito na forma matricial, obtém-se I = Y·V, onde I é o vetor das injeções de correntes nodais, Y a matriz de admitância nodal e V o vetor das tensões nodais. A expressão do elemento Y<sub>22</sub> da matriz Y é"),
fig:"f11_34", ops:["y<sub>1</sub> + y<sub>2</sub> + y<sub>3</sub>","y<sub>2</sub> + y<sub>4</sub> + y<sub>5</sub>","y<sub>4</sub> + y<sub>5</sub> − y<sub>6</sub>","z<sub>1</sub> + z<sub>2</sub> + z<sub>3</sub>","(z<sub>1</sub> + z<sub>4</sub>) − (z<sub>3</sub> − z<sub>5</sub>)"], gab:"B",
dicas:["Elemento diagonal Y<sub>kk</sub> = soma de todas as admitâncias ligadas ao nó k.","Quais admitâncias tocam o nó 2? Olhe a figura: uma vai para a terra e duas vão para os nós vizinhos."],
erros:{
A:"y<sub>1</sub>, y<sub>2</sub> e y<sub>3</sub> são as admitâncias para a terra dos três nós. Y<sub>22</sub> só envolve o que está ligado ao nó 2.",
C:"Elementos da diagonal nunca têm sinal negativo (são somas de admitâncias), e y<sub>6</sub> liga os nós 1 e 3, não toca o nó 2.",
D:"A matriz Y soma admitâncias, não impedâncias. E y<sub>1</sub>, y<sub>3</sub> não tocam o nó 2.",
E:"A matriz Y é montada com admitâncias, e o elemento diagonal é uma soma simples. Volte à regra de montagem por inspeção."},
res:P("Ao nó 2 estão ligadas: y<sub>2</sub> (para a terra), y<sub>4</sub> (para o nó 1) e y<sub>5</sub> (para o nó 3). Logo Y<sub>22</sub> = <b>y<sub>2</sub> + y<sub>4</sub> + y<sub>5</sub></b>. Fora da diagonal, Y<sub>21</sub> = −y<sub>4</sub> e Y<sub>23</sub> = −y<sub>5</sub>.")
});

Q("23-62",{
enun:P("Uma linha de transmissão pode ser modelada como uma malha infinita de capacitores, todos de capacitância C, arranjados conforme a figura. A capacitância equivalente entre os pontos A e B é"),
fig:"f23_62", ops:["C(1+√2)/2","C(1+√3)/2","C(1+√3)/4","C(1+2√2)/4","C(1+3√2)/4"], gab:"B",
dicas:["Logo na entrada há um capacitor C ligado direto entre A e B. Depois dele, há um capacitor em série na linha de cima e outro na de baixo, e então a rede se repete.","Chame de X o equivalente. Retirando a primeira célula sobra a mesma rede X. Então X = C + [ (C/2) em série com X ]."],
erros:{
A:"(1+√2) aparece quando a célula tem só UM capacitor em série. Aqui há um capacitor em série em cima e outro embaixo: juntos valem C/2.",
C:"Confira a equação: X = C + (C/2)·X/(C/2 + X). Dividindo por C, x = 1 + x/(1+2x). Resolva o 2º grau com cuidado.",
D:"Você deve ter montado a equação com os capacitores em série somando (como resistores em série). Capacitores em série combinam pelo produto sobre a soma.",
E:"Revise como capacitores se combinam: em paralelo somam, em série vale C<sub>1</sub>C<sub>2</sub>/(C<sub>1</sub>+C<sub>2</sub>). Monte a equação da escada infinita de novo."},
res:OL(["Primeira célula: C em paralelo (entre A e B) com o ramo [C em cima + resto + C embaixo].","Os dois capacitores em série (cima e baixo) equivalem a C/2, em série com o resto da rede X.","X = C + (C/2)·X/(C/2 + X). Com x = X/C: x = 1 + x/(1 + 2x).","x(1 + 2x) = 1 + 3x ⇒ 2x² − 2x − 1 = 0 ⇒ x = (2 + √12)/4 = (1 + √3)/2.","<b>C<sub>eq</sub> = C(1 + √3)/2</b>."])
});
