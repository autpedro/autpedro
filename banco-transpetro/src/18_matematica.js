B({
id:"b18", titulo:"Matemática: álgebra linear, otimização e probabilidade",
sub:"Determinantes, posto e solução de sistemas, transformações lineares e composição, rotação no plano, sistemas em blocos, máximo de áreas e densidade de probabilidade.",
objetivos:["Calcular determinantes (inclusive de blocos e de k·M)","Decidir se um sistema tem solução única, infinitas ou nenhuma pelo posto","Compor transformações lineares e usar linearidade para achar imagens","Reconhecer uma matriz de rotação","Montar sistemas na forma matricial e eliminar variáveis por blocos (complemento de Schur)"],
qs:["11-58","18-66","11-70","18-65","11-69","11-56","11-57","11-61","18-54","11-59","18-64","11-53"],
aula:
"<h3>1. Determinantes</h3>"+
"<ul><li>det(k·M) = kⁿ·det(M) para M de ordem n.</li><li>Matriz bloco-diagonal (ou triangular por blocos): det = produto dos determinantes dos blocos.</li><li>Expansão de Laplace: escolha a linha/coluna com mais zeros.</li><li>Uma linha que é combinação das outras ⇒ det = 0.</li></ul>"+
"<h3>2. Posto e sistemas M·x = y</h3>"+
"<ul><li>Posto (rank) = número de linhas (ou colunas) linearmente independentes. Nulidade = nº de colunas − posto.</li><li>Teorema de Rouché-Capelli: posto(M) = posto([M | y]) = n ⇒ solução única; = &lt; n ⇒ infinitas; posto(M) &lt; posto([M | y]) ⇒ nenhuma.</li><li>det(M) = 0 (M quadrada) ⇒ não há solução única.</li></ul>"+
"<h3>3. Transformações lineares</h3>"+
F("Composição: T<sub>3</sub> = T<sub>2</sub>∘T<sub>1</sub> ⇒ [T<sub>3</sub>] = [T<sub>2</sub>]·[T<sub>1</sub>] (a última aplicada vem à ESQUERDA)<br>Linearidade: se v<sub>3</sub> = a·v<sub>1</sub> + b·v<sub>2</sub>, então T(v<sub>3</sub>) = a·T(v<sub>1</sub>) + b·T(v<sub>2</sub>)<br>Rotação de θ (anti-horária): [cos θ  −sen θ; sen θ  cos θ]")+
"<h3>4. Sistemas por blocos</h3>"+
F("[Z<sub>1</sub> Z<sub>2</sub>; Z<sub>3</sub> Z<sub>4</sub>]·[x<sub>a</sub>; x<sub>b</sub>] = [y; 0] ⇒ x<sub>b</sub> = −Z<sub>4</sub>⁻¹Z<sub>3</sub>x<sub>a</sub> ⇒ (Z<sub>1</sub> − Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub>)x<sub>a</sub> = y")+
P("É a mesma conta da redução de Kron em matrizes de admitância.")+
"<h3>5. Otimização e probabilidade</h3>"+
"<ul><li>Retângulo inscrito num triângulo com um lado sobre a base: área máxima = metade da área do triângulo (altura do retângulo = metade da altura do triângulo).</li><li>Função densidade de probabilidade: área total sob a curva = 1.</li></ul>",
exemplo:{
 titulo:"Exemplo: sistema linear com Rouché-Capelli",
 enun:P("Considere M = "+M("1 2 3;2 4 6;1 0 1")+" e y = [6; 12; 2]."),
 passos:[
  {p:"Qual o determinante de M?", v:0, r:"A 2ª linha é 2 × a 1ª ⇒ <b>det M = 0</b>.", dica:"Compare as duas primeiras linhas."},
  {p:"Qual o posto de M?", v:2, r:"Linhas 1 e 3 são independentes ⇒ <b>posto 2</b>.", dica:"Quantas linhas independentes sobram depois de descartar a repetida?"},
  {p:"Qual o posto da matriz aumentada [M | y]?", v:2, r:"y<sub>2</sub> = 12 = 2·y<sub>1</sub>: a linha 2 continua proporcional à 1 ⇒ <b>posto 2</b>.", dica:"Veja se a proporção entre as linhas 1 e 2 vale também para y."},
  {p:"Quantos parâmetros livres tem a solução (n − posto)?", v:1, r:"3 − 2 = <b>1</b>: infinitas soluções (uma reta).", dica:"Postos iguais e menores que n ⇒ infinitas soluções."}
 ],
 fecho:"Na 11-56 a aumentada tem posto MAIOR que M. Que conclusão isso traz?"
}
});

Q("11-58",{
enun:P("O determinante da matriz M, de ordem 3 por 3, é 240, e a matriz K é definida como K = 2·M. O valor do determinante da matriz K é"),
ops:["240","480","1.440","1.920","2.160"], gab:"D",
dicas:["Multiplicar a matriz por 2 multiplica CADA linha por 2.","det(kM) = kⁿ·det(M), com n = 3."],
erros:{
A:"Multiplicar a matriz por 2 altera o determinante.",
B:"480 = 2 × 240 supõe que o fator sai uma vez só. Ele sai uma vez por linha.",
C:"1440 = 6 × 240: o fator não é 2·3. É 2³.",
E:"2160 = 9 × 240. Use 2³ = 8."},
res:P("det(2M) = 2³·240 = 8·240 = <b>1920</b>.")
});

Q("18-66",{
enun:P("Considere a matriz A = "+M("1 2 0 0 0;4 −1 0 0 0;0 0 3 0 0;0 0 0 5 2;0 0 0 2 1")+". Qual é o valor do determinante dessa matriz?"),
ops:["−36","−27","−15","+18","+45"], gab:"B",
dicas:["A é bloco-diagonal: blocos [1 2; 4 −1], [3] e [5 2; 2 1].","det = produto dos determinantes dos blocos."],
erros:{
A:"Confira o primeiro bloco: 1·(−1) − 2·4 = −9; o último: 5·1 − 2·2 = 1.",
C:"Refaça o bloco [1 2; 4 −1]: −1 − 8 = −9.",
D:"O sinal: o primeiro bloco tem determinante negativo (−9).",
E:"Confira o último bloco: 5 − 4 = 1 (e não 5)."},
res:P("(−9)·3·1 = <b>−27</b>.")
});

Q("11-70",{
enun:P("Para qual valor de x a matriz "+M("2 1 0 3;1 −1 x 0;0 −2 0 4;1 0 1 1")+" tem determinante nulo?"),
ops:["1","2","3","4","5"], gab:"C",
dicas:["Expanda pela 3ª coluna: ela tem só dois elementos não nulos (x e 1).","Monte det = a + b·x e iguale a zero."],
erros:{
A:"Substitua x = 1 e confira: det = 18 − 6 = 12 ≠ 0.",
B:"Com x = 2, det = 18 − 12 = 6 ≠ 0.",
D:"Com x = 4, det = 18 − 24 = −6 ≠ 0.",
E:"Com x = 5, det = 18 − 30 = −12 ≠ 0."},
res:P("Expandindo pela 3ª coluna obtém-se det = 18 − 6x. Nulo para <b>x = 3</b>.")
});

Q("18-65",{
enun:P("Considere o sistema "+M("1 2 1;2 0 1;1 1 0")+"·[x<sub>1</sub>; x<sub>2</sub>; x<sub>3</sub>] = [13; 8; 7]. O valor da variável x<sub>2</sub> é"),
ops:["1","2","3","4","5"], gab:"D",
dicas:["Da 3ª equação: x<sub>1</sub> = 7 − x<sub>2</sub>. Da 2ª: x<sub>3</sub> = 8 − 2x<sub>1</sub>.","Substitua na 1ª."],
erros:{
A:"Substitua de volta: com x<sub>2</sub> = 1, x<sub>1</sub> = 6, x<sub>3</sub> = −4 e a 1ª equação dá 6 + 2 − 4 = 4 ≠ 13.",
B:"Com x<sub>2</sub> = 2: x<sub>1</sub> = 5, x<sub>3</sub> = −2 ⇒ 5 + 4 − 2 = 7 ≠ 13.",
C:"x<sub>1</sub> = 3 é outra variável. Confira qual incógnita foi pedida.",
E:"Com x<sub>2</sub> = 5: x<sub>1</sub> = 2, x<sub>3</sub> = 4 ⇒ 2 + 10 + 4 = 16 ≠ 13."},
res:OL(["x<sub>1</sub> = 7 − x<sub>2</sub>; x<sub>3</sub> = 8 − 2x<sub>1</sub> = −6 + 2x<sub>2</sub>.","1ª: (7 − x<sub>2</sub>) + 2x<sub>2</sub> + (−6 + 2x<sub>2</sub>) = 13 ⇒ 1 + 3x<sub>2</sub> = 13.","<b>x<sub>2</sub> = 4</b> (x<sub>1</sub> = 3, x<sub>3</sub> = 2)."])
});

Q("11-69",{
enun:P("Nas equações (y − a)/2 + (y − x)/5 + y/4 = 0 e (x − b)/2 + (x − y)/5 + x/4 = 0, x e y são variáveis e a e b são constantes. Elas podem ser compactadas na forma M·[x; y] = [a; b]. A matriz M é"),
ops:[M("0,4 1,9;1,9 0,4"),M("−0,4 1,9;0,4 −1,9"),M("−1,9 0,4;1,9 −0,4"),M("−0,4 1,9;1,9 −0,4"),M("−4 19;19 −4")], gab:"D",
dicas:["Multiplique a 1ª equação por 20: 10y − 10a + 4y − 4x + 5y = 0.","Isole a: −4x + 19y = 10a ⇒ divida por 10."],
erros:{
A:"Sinais: o termo em x na 1ª equação vem de −(y − x)... confira: (y − x)/5 dá −x/5, que é negativo.",
B:"A 2ª linha deve ter 1,9 multiplicando x e −0,4 multiplicando y (simetria das equações).",
C:"A 1ª linha corresponde à equação de a, onde y tem o coeficiente grande (1,9) e x tem −0,4.",
E:"Faltou dividir por 10 para deixar a e b com coeficiente 1."},
res:OL(["1ª × 20: −4x + 19y = 10a ⇒ −0,4x + 1,9y = a.","2ª × 20: 19x − 4y = 10b ⇒ 1,9x − 0,4y = b.","<b>M = [−0,4 1,9; 1,9 −0,4]</b>."])
});

Q("11-56",{
enun:P("Com respeito à equação M·x = y, em que M = "+M("4 5 2 −3;3 8 9 1;5 7 3 −4;7 6 6 0")+" e y = [6; 3; 8; 9], analise: I – A equação apresenta uma única solução. II – O posto da matriz M é igual a 4. III – A nulidade da matriz M é igual a 1. É correto APENAS o que se afirma em"),
ops:["I","II","III","I e II","I e III"], gab:"C",
dicas:["Teste se as linhas são independentes. Compare linha 1 + linha 2 com linhas 3 e 4, ou calcule o determinante.","Dica: M·[0; 1; −1; 1] = 0. O que isso diz sobre o posto?"],
erros:{
A:"det(M) = 0 (existe vetor não nulo v com Mv = 0), então não há solução única.",
B:"Se o posto fosse 4, M seria inversível. Mas M·[0; 1; −1; 1] = [0; 0; 0; 0].",
D:"I e II são falsas: o posto é 3 (det = 0).",
E:"I é falsa. Além disso, posto([M|y]) = 4 &gt; posto(M) = 3: o sistema nem tem solução."},
res:OL(["M·[0; 1; −1; 1] = [5 − 2 − 3; 8 − 9 + 1; 7 − 3 − 4; 6 − 6 + 0] = 0 ⇒ det M = 0.","Posto(M) = 3 ⇒ nulidade = 4 − 3 = 1 (III verdadeira, II falsa).","Posto([M|y]) = 4 &gt; 3 ⇒ sistema impossível (I falsa).","Alternativa <b>C</b>."])
});

Q("11-57",{
enun:P("No sistema "+M("Z<sub>1(3×3)</sub> Z<sub>2(3×2)</sub>;Z<sub>3(2×3)</sub> Z<sub>4(2×2)</sub>")+"·[x<sub>1</sub>; …; x<sub>5</sub>] = [y<sub>1</sub>; y<sub>2</sub>; y<sub>3</sub>; 0; 0], Z<sub>1</sub>…Z<sub>4</sub> são submatrizes. Deseja-se calcular x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub> pelo sistema reduzido M<sub>(3×3)</sub>·[x<sub>1</sub>; x<sub>2</sub>; x<sub>3</sub>] = [y<sub>1</sub>; y<sub>2</sub>; y<sub>3</sub>]. A matriz M, em função de Z<sub>1</sub>, Z<sub>2</sub>, Z<sub>3</sub> e Z<sub>4</sub>, é"),
ops:["Z<sub>1</sub> + Z<sub>2</sub>Z<sub>4</sub>Z<sub>3</sub>","Z<sub>1</sub> − Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub>","Z<sub>1</sub> − Z<sub>3</sub>Z<sub>4</sub>⁻¹Z<sub>2</sub>","Z<sub>1</sub>Z<sub>2</sub>Z<sub>4</sub>Z<sub>3</sub>","Z<sub>1</sub>Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub>"], gab:"B",
dicas:["Linha de baixo: Z<sub>3</sub>x<sub>a</sub> + Z<sub>4</sub>x<sub>b</sub> = 0 ⇒ x<sub>b</sub> = ?","Substitua na linha de cima: Z<sub>1</sub>x<sub>a</sub> + Z<sub>2</sub>x<sub>b</sub> = y."],
erros:{
A:"Para isolar x<sub>b</sub> é preciso INVERTER Z<sub>4</sub>, e o sinal fica negativo.",
C:"Confira as dimensões: Z<sub>3</sub> é 2×3 e Z<sub>4</sub>⁻¹ é 2×2; Z<sub>3</sub>Z<sub>4</sub>⁻¹ não está definido. A ordem é Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub>.",
D:"Produtos de todas as submatrizes não surgem da eliminação; o resultado é uma DIFERENÇA.",
E:"Falta o Z<sub>1</sub> somado (com sinal de menos no termo de correção), e não multiplicado."},
res:P("Z<sub>3</sub>x<sub>a</sub> + Z<sub>4</sub>x<sub>b</sub> = 0 ⇒ x<sub>b</sub> = −Z<sub>4</sub>⁻¹Z<sub>3</sub>x<sub>a</sub>. Então Z<sub>1</sub>x<sub>a</sub> − Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub>x<sub>a</sub> = y ⇒ <b>M = Z<sub>1</sub> − Z<sub>2</sub>Z<sub>4</sub>⁻¹Z<sub>3</sub></b> (complemento de Schur, redução de Kron).")
});

Q("11-61",{
enun:P("Sejam T<sub>1</sub>: R³ → R² e T<sub>2</sub>: R² → R⁴ transformações lineares, com T<sub>1</sub> = "+M("1 0 1;0 1 0")+" e T<sub>2</sub> = "+M("0 1;1 3;1 0;0 2")+". A matriz que representa T<sub>3</sub>: R³ → R⁴, composição de T<sub>1</sub> e T<sub>2</sub>, é"),
ops:[M("0 1 1 0;1 3 0 2;0 1 1 0"),M("0 1 1 2;1 3 0 2;0 3 1 0"),M("0 1 0;1 3 1;1 0 1;0 2 0"),M("0 1 0;1 2 1;1 1 1;0 3 1"),M("0 1 0;3 3 1;1 0 1;0 2 2")], gab:"C",
dicas:["T<sub>3</sub> leva R³ em R⁴: a matriz é 4×3. Isso já elimina algumas alternativas.","[T<sub>3</sub>] = [T<sub>2</sub>]·[T<sub>1</sub>] (4×2 vezes 2×3)."],
erros:{
A:"Essa matriz é 3×4, que levaria R⁴ em R³. T<sub>3</sub> precisa ser 4×3.",
B:"Também é 3×4. Faça o produto T<sub>2</sub>·T<sub>1</sub>.",
D:"Dimensão certa, mas confira a 2ª linha: [1 3]·T<sub>1</sub> = [1, 3, 1].",
E:"Confira a 2ª linha ([1 3]·T<sub>1</sub> = [1 3 1]) e a 4ª ([0 2]·T<sub>1</sub> = [0 2 0])."},
res:P("Linha i de T<sub>3</sub> = linha i de T<sub>2</sub> × T<sub>1</sub>: [0 1]→[0 1 0]; [1 3]→[1 3 1]; [1 0]→[1 0 1]; [0 2]→[0 2 0]. Alternativa <b>C</b>.")
});

Q("18-54",{
enun:P("Uma transformação linear T: R³ → R³ transforma v<sub>1</sub> = [2; 1; 0] em u<sub>1</sub> = [1; 4; 3] e v<sub>2</sub> = [3; 0; 2] em u<sub>2</sub> = [2; 6; 1]. Essa mesma transformação levará v<sub>3</sub> = [1; −1; 2] no vetor"),
ops:["[3; 2; −2]","[−1; −2; 2]","[0; −1; 3]","[2; −2; 1]","[1; 2; −2]"], gab:"E",
dicas:["Escreva v<sub>3</sub> = a·v<sub>1</sub> + b·v<sub>2</sub>.","Pela 3ª coordenada, 2b = 2 ⇒ b = 1. Pela 2ª, a = −1."],
erros:{
A:"Confira os coeficientes da combinação: v<sub>3</sub> = a·v<sub>1</sub> + b·v<sub>2</sub>. A 3ª coordenada já fixa b = 1, e a 2ª fixa a = −1.",
B:"Sinal trocado: é −u<sub>1</sub> + u<sub>2</sub>, não u<sub>1</sub> − u<sub>2</sub>.",
C:"Não se aplica T diretamente sobre as coordenadas de v<sub>3</sub>. Decomponha v<sub>3</sub> em v<sub>1</sub> e v<sub>2</sub>.",
D:"Confira as contas: −[1; 4; 3] + [2; 6; 1]."},
res:OL(["v<sub>3</sub> = −v<sub>1</sub> + v<sub>2</sub>: −[2; 1; 0] + [3; 0; 2] = [1; −1; 2] ✓.","T(v<sub>3</sub>) = −u<sub>1</sub> + u<sub>2</sub> = <b>[1; 2; −2]</b>."])
});

Q("11-59",{
enun:P("Seja T: R² → R² definida por T(x, y) = (1/2)·"+M("√3 −1;1 √3")+"·[x; y]. T é aplicada aos vértices m, n, q e p do quadrado da primeira figura (p = (0,0), q = (3,0), n = (3,3), m = (0,3)), gerando m', n', q' e p'. O novo quadrado é (alternativas A, B e C na segunda figura; D e E na terceira):"),
fig:["f11_59a","f11_59b","f11_59c"], ops:["Quadrado (A)","Quadrado (B)","Quadrado (C)","Quadrado (D)","Quadrado (E)"], gab:"B",
dicas:["(1/2)[√3 −1; 1 √3] = [cos 30° −sen 30°; sen 30° cos 30°]: é uma rotação.","Calcule q' = T(3, 0) = (3cos 30°, 3sen 30°) = (2,6; 1,5)."],
erros:{
A:"Nesse desenho q' tem abscissa 1,5, o que corresponde a uma rotação de 60°. Calcule q' = T(3,0).",
C:"Nesse desenho q' tem ordenada −1,5: rotação no sentido HORÁRIO. Confira o sinal de sen θ na 2ª linha (+1/2).",
D:"T não é reflexão nem translação: preserva a origem e gira os pontos.",
E:"Rotação de 30° não leva o quadrado para baixo do eixo x. Calcule T(3, 0)."},
res:P("T é rotação de 30° anti-horária. p' = (0, 0); q' = (3√3/2; 1,5) ≈ (2,6; 1,5); m' = (−1,5; 2,6). O quadrado com q' na altura 1,5 e m' à esquerda do eixo y é o <b>(B)</b>.")
});

Q("18-64",{
enun:P("No triângulo ABC da figura (B = (−9, 0), C = (16, 0), A = (0, 12), em cm), deseja-se inscrever o retângulo de maior área possível, com um lado sobre BC, um vértice apoiado em AB e outro em AC. Qual é a maior área, em cm², do retângulo inscrito?"),
fig:"f18_64", ops:["56","72","75","78","85"], gab:"C",
dicas:["Para um retângulo de altura h, a largura disponível na altura h é a base reduzida proporcionalmente: L(h) = 25(1 − h/12).","Área = 25h(1 − h/12). Derive e iguale a zero."],
erros:{
A:"56 não é o máximo. Escreva a área em função de h e maximize.",
B:"72 cm² é menor que o máximo. Escreva A(h) = 25h(1 − h/12) e maximize: o ótimo é h = 6.",
D:"78 passa do máximo possível, que é metade da área do triângulo (150/2).",
E:"85 é maior que metade da área do triângulo; impossível para retângulo inscrito."},
res:OL(["Base BC = 25, altura 12. Na altura h, a largura é 25(1 − h/12).","A(h) = 25h − (25/12)h². A'(h) = 25 − (25/6)h = 0 ⇒ h = 6.","A = 25·6·(1/2) = <b>75 cm²</b> (metade da área do triângulo, 150 cm²)."])
});

Q("11-53",{
enun:P("O gráfico mostra a função densidade de probabilidade p(x) de um experimento com variável aleatória X: um triângulo com vértices em x = 0 (p = 0), x = 3 (p = A) e x = 8 (p = 0). O valor da amplitude A é"),
fig:"f11_53", ops:["0,10","0,15","0,20","0,25","0,30"], gab:"D",
dicas:["A área total sob uma densidade de probabilidade é 1.","Área do triângulo = base × altura/2 = 8·A/2."],
erros:{
A:"Com A = 0,10 a área seria 0,4. Ela precisa ser 1.",
B:"Com A = 0,15 a área seria 0,6.",
C:"Com A = 0,20 a área seria 0,8. A base vai de 0 a 8.",
E:"Com A = 0,30 a área seria 1,2 &gt; 1."},
res:P("8·A/2 = 1 ⇒ <b>A = 0,25</b>. O pico em x = 3 não muda a área.")
});
