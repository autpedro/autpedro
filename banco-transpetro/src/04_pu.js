B({
id:"b04", titulo:"Sistema por unidade (pu)",
sub:"Bases, mudança de base e o caminho da tensão de base através dos transformadores. Cai em quase toda prova.",
objetivos:["Calcular Z<sub>base</sub> e I<sub>base</sub> a partir de S<sub>base</sub> e V<sub>base</sub>","Mudar a impedância de uma base para outra sem errar a ordem das razões","Propagar a tensão de base pelos transformadores de um sistema","Montar o circuito em pu e calcular correntes"],
qs:["06-24","11-21","18-33","23-37","23-56","11-29"],
aula:
"<h3>1. Definições</h3>"+
F("valor em pu = valor real / valor de base<br>Z<sub>base</sub> = V<sub>base</sub>²/S<sub>base</sub> &nbsp;&nbsp; (kV² / MVA dá Ω)<br>I<sub>base</sub> = S<sub>base</sub>/(√3·V<sub>base</sub>) &nbsp;&nbsp; (trifásico, V de linha)")+
P("Em pu, a impedância de um transformador é a mesma vista de qualquer lado, e as tensões nominais viram 1 pu.")+
"<h3>2. Mudança de base</h3>"+
F("Z<sub>pu,nova</sub> = Z<sub>pu,velha</sub> · (S<sub>nova</sub>/S<sub>velha</sub>) · (V<sub>velha</sub>/V<sub>nova</sub>)²")+
P("Memorize pela intuição: Z<sub>pu</sub> = Z/Z<sub>base</sub> e Z<sub>base</sub> = V²/S. Se a potência de base AUMENTA, Z<sub>base</sub> diminui e o pu AUMENTA. Se a tensão de base AUMENTA, Z<sub>base</sub> aumenta e o pu DIMINUI (ao quadrado).")+
TRAP("inverter as razões. Teste sempre: base de potência maior ⇒ pu maior.")+
"<h3>3. Escolhendo bases num sistema</h3>"+
OL(["Uma única S<sub>base</sub> para o sistema todo.","Escolha a V<sub>base</sub> num trecho e propague pelos transformadores usando a relação de espiras nominal: do lado de 500 kV para o lado de 100 kV de um trafo 100/500 kV, a base cai 5 vezes.","Converta cada equipamento para as bases do trecho onde ele está.","Tensões de fonte também viram pu: 25 kV numa base de 100 kV são 0,25 pu."])+
"<h3>4. Impedância de carga em pu</h3>"+
P("Uma carga de S<sub>n</sub> a V<sub>n</sub> tem Z = V<sub>n</sub>²/S<sub>n</sub>. Em pu na base (S<sub>b</sub>, V<sub>b</sub>): Z<sub>pu</sub> = (S<sub>b</sub>/S<sub>n</sub>)·(V<sub>n</sub>/V<sub>b</sub>)².")+
"<h3>5. Transformadores em paralelo</h3>"+
P("Dividem a carga na proporção inversa das impedâncias em ohms (no mesmo lado). Para dividir igualmente, as impedâncias em ohms devem ser iguais; com mesmas potência e tensão nominais, isso significa a mesma impedância percentual."),
exemplo:{
 titulo:"Exemplo: mudança de base e corrente de base",
 enun:P("Um gerador de 30 MVA, 13,8 kV tem reatância de 15% na base própria. O estudo usa S<sub>base</sub> = 100 MVA e V<sub>base</sub> = 13,2 kV no trecho do gerador."),
 passos:[
  {p:"Qual a reatância em pu na nova base? (3 casas)", v:0.548, tol:0.01, r:"X = 0,15·(100/30)·(13,8/13,2)² = 0,15·3,333·1,093 = <b>0,547 pu</b>.", dica:"Multiplique por (S<sub>nova</sub>/S<sub>velha</sub>) e por (V<sub>velha</sub>/V<sub>nova</sub>)². Base de potência maior ⇒ pu maior."},
  {p:"Qual a impedância de base desse trecho (em Ω)?", v:1.742, tol:0.01, r:"Z<sub>base</sub> = 13,2²/100 = <b>1,742 Ω</b>.", dica:"Z<sub>base</sub> = kV²/MVA."},
  {p:"Quanto vale essa reatância em ohms?", v:0.953, tol:0.02, r:"X = 0,547·1,742 = <b>0,953 Ω</b>. Confira pela base própria: 0,15·13,8²/30 = 0,952 Ω. As duas contas batem.", dica:"X<sub>Ω</sub> = X<sub>pu</sub> · Z<sub>base</sub>. Você pode conferir pela base própria do gerador."},
  {p:"Qual a corrente de base nesse trecho (em A)?", v:4374, tol:0.01, r:"I<sub>base</sub> = 100·10⁶/(√3·13,2·10³) = <b>4374 A</b>.", dica:"I<sub>base</sub> = S/(√3·V)."}
 ],
 fecho:"Repare no passo 3: converter para ohms nas duas bases e comparar é a melhor forma de conferir a mudança de base."
}
});

Q("06-24",{
enun:P("Considere um transformador com reatância de 1,9044 Ω referida ao lado de tensão mais elevada, cujo valor é 13,8 kV, tendo como tensão e potência de bases, neste mesmo lado, 13,8 kV e 10 MVA, respectivamente. A referida reatância por unidade (pu) assume o valor de"),
ops:["0,10","0,15","0,20","0,25","0,30"], gab:"A",
dicas:["Z<sub>base</sub> = kV²/MVA, no lado em que a reatância foi dada.","13,8² = 190,44."],
erros:{
B:"Confira Z<sub>base</sub> = 13,8²/10 = 19,044 Ω e divida 1,9044 por ela.",
C:"0,20 é o dobro do correto. Você talvez tenha usado 5 MVA ou errado a potência de 13,8.",
D:"Confira a conta de Z<sub>base</sub>: kV² dividido por MVA, sem √3.",
E:"Z<sub>pu</sub> = Z<sub>Ω</sub>/Z<sub>base</sub>. Refaça Z<sub>base</sub> = 190,44/10."},
res:P("Z<sub>base</sub> = 13,8²/10 = 19,044 Ω. X<sub>pu</sub> = 1,9044/19,044 = <b>0,10 pu</b>.")
});

Q("11-21",{
enun:P("A reatância de uma máquina síncrona de 50 MVA e 15 kV é de 10%. O valor dessa reatância, em pu, sabendo que as bases no setor em que se encontra esse equipamento são de 100 MVA e 30 kV, é"),
ops:["0,01","0,03","0,05","0,12","0,80"], gab:"C",
dicas:["Z<sub>nova</sub> = Z<sub>velha</sub>·(S<sub>nova</sub>/S<sub>velha</sub>)·(V<sub>velha</sub>/V<sub>nova</sub>)².","(100/50) = 2 e (15/30)² = 1/4."],
erros:{
A:"Confira as razões: o fator de potência é 100/50 = 2 (aumenta o pu) e o de tensão é (15/30)² = 0,25.",
B:"0,03 não sai de nenhuma combinação correta. Faça 0,10 × 2 × 0,25.",
D:"0,12 sai se usar a razão de tensão sem elevar ao quadrado ou invertida em algum ponto. Teste: base de tensão maior ⇒ pu menor, com o quadrado.",
E:"0,80 = 0,10·2·4: você inverteu a razão de tensões. Base de tensão maior (30 kV) faz Z<sub>base</sub> crescer e o pu CAIR."},
res:P("X = 0,10 · (100/50) · (15/30)² = 0,10 · 2 · 0,25 = <b>0,05 pu</b>.")
});

Q("18-33",{
enun:P("Um equipamento possui como valores nominais de potência e tensão, respectivamente, 20 MVA e 500 kV. Os valores de base adotados no setor onde esse equipamento se encontra são 2,5 MVA e 250 kV. Sabendo que a reatância desse equipamento, para seus valores nominais, é de 0,3 pu, o novo valor, em pu, considerando a base adotada, será de"),
ops:["0,15","0,20","0,25","0,30","0,35"], gab:"A",
dicas:["Fator de potência: 2,5/20 = 1/8. Fator de tensão: (500/250)² = 4.","0,3 × (1/8) × 4."],
erros:{
B:"Confira os fatores: (S<sub>nova</sub>/S<sub>velha</sub>) = 2,5/20 = 0,125 e (V<sub>velha</sub>/V<sub>nova</sub>)² = (500/250)² = 4.",
C:"0,25 não sai das razões corretas. Multiplique 0,3 × 0,125 × 4.",
D:"Mudar a base muda o valor em pu (a não ser que os fatores se cancelem, o que não ocorre aqui: 0,125 × 4 = 0,5).",
E:"Refaça a mudança de base: o produto dos fatores é 0,5, então o pu deve cair pela metade."},
res:P("X = 0,3 · (2,5/20) · (500/250)² = 0,3 · 0,125 · 4 = <b>0,15 pu</b>.")
});

Q("23-37",{
enun:P("Um equipamento elétrico trifásico na configuração estrela possui como dados elétricos a potência de 400 kVA e a tensão de alimentação de 10 kV. A potência e a tensão de bases escolhidas para o setor onde esse equipamento se encontra é de 100 kVA e 10 kV. A sua impedância, por unidade (pu), é"),
ops:["0,05","0,10","0,15","0,20","0,25"], gab:"E",
dicas:["O equipamento é tratado como uma carga: Z = V²/S com os seus dados nominais.","Z<sub>pu</sub> = Z/Z<sub>base</sub>, com Z<sub>base</sub> = 10²/0,1 = 1000 Ω."],
erros:{
A:"0,05 não sai das bases dadas. Calcule Z da carga (10 kV)²/400 kVA e divida por Z<sub>base</sub> = (10 kV)²/100 kVA.",
B:"Refaça: Z = 100·10⁶/400·10³ = 250 Ω; Z<sub>base</sub> = 1000 Ω.",
C:"0,15 não corresponde à razão de bases. A conta é (S<sub>base</sub>/S<sub>n</sub>)·(V<sub>n</sub>/V<sub>base</sub>)².",
D:"Confira a razão de potências: 100/400 = 0,25."},
res:OL(["Impedância da carga: Z = V²/S = (10 kV)²/400 kVA = 250 Ω.","Z<sub>base</sub> = (10 kV)²/100 kVA = 1000 Ω.","Z<sub>pu</sub> = 250/1000 = <b>0,25 pu</b> (ou direto: 100/400 · (10/10)²)."])
});

Q("23-56",{
enun:P("Uma empresa possui, instalado em sua subestação, um transformador de 20 kVA, 12 kV – 200 V, Δ–Y, com reatância percentual de 5% nas bases de potência e tensão do gerador atual. Deve-se instalar um novo transformador em paralelo, com as mesmas especificações do existente. Para que a potência seja distribuída igualmente entre os dois transformadores, a reatância, em Ω, referida ao lado de baixa tensão do novo transformador é de"),
ops:["0,01","0,05","0,1","0,2","1,0"], gab:"C",
dicas:["Para dividir a carga igualmente, os dois transformadores devem ter a mesma impedância em ohms (mesmo lado).","Calcule a reatância do existente em ohms no lado de 200 V: X = 0,05·Z<sub>base,BT</sub>, com Z<sub>base</sub> = 200²/20 000."],
erros:{
A:"0,01 Ω: confira Z<sub>base</sub> na baixa tensão: 200²/20 000 = 2 Ω. Então 5% dá...",
B:"0,05 é o valor em pu, não em ohms. Multiplique por Z<sub>base</sub> do lado de baixa.",
D:"0,2 Ω é o dobro. Confira Z<sub>base</sub> = V²/S = 40 000/20 000.",
E:"1,0 Ω: você pode ter usado a tensão de fase ou outra base. Use Z<sub>base</sub> = (200 V)²/20 kVA = 2 Ω."},
res:P("Divisão igual ⇒ mesma impedância em ohms. Z<sub>base,BT</sub> = 200²/20 000 = 2 Ω. X = 0,05 · 2 = <b>0,1 Ω</b>.")
});

Q("11-29",{
enun:P("A figura mostra o diagrama unifilar de parte de um sistema de potência: gerador G<sub>1</sub>, transformadores T<sub>1</sub> e T<sub>2</sub>, linha Z<sub>LT</sub> e carga Z<sub>C</sub>. Para o trecho entre os transformadores, considere como bases 100 MVA e a tensão nominal da linha, 500 kV. Os dados de cada componente estão no quadro, em suas respectivas bases. Supondo que o gerador opera com tensão de 25 kV, o módulo da corrente que passa pela linha, em pu na base da linha, é"),
fig:["f11_29a","f11_29b"], ops:["0,5","1,0","1,5","2,0","3,0"], gab:"A",
dicas:["Propague a base: no trecho do gerador, a base de tensão é 500·(100/500) = 100 kV (relação do T<sub>1</sub>).","Converta o gerador (10 MVA, 25 kV) e o T<sub>1</sub> (50 MVA) para 100 MVA. A tensão do gerador em pu é 25/100.","Some todas as reatâncias em série e faça I = E/X<sub>total</sub>."],
erros:{
B:"1,0 pu: verifique a tensão do gerador em pu. Na base de 100 kV, 25 kV valem 0,25 pu, não 0,5 nem 1.",
C:"Refaça a soma: gerador 0,05 + T<sub>1</sub> 0,10 + linha 0,05 + T<sub>2</sub> 0,10 + carga 0,20 = 0,50 pu.",
D:"2,0 = 1/0,5: você considerou a tensão do gerador como 1 pu. Ele opera com 25 kV numa base de 100 kV.",
E:"Confira as conversões: o gerador (0,08 em 10 MVA, 25 kV) vira 0,08·10·(25/100)² = 0,05 pu; o T<sub>1</sub> vira 0,05·(100/50) = 0,10 pu."},
res:OL(["Bases: 100 MVA; 500 kV na linha; 100 kV nos lados de 100 kV de T<sub>1</sub> e T<sub>2</sub> (gerador e carga).","Gerador: 0,08·(100/10)·(25/100)² = 0,05 pu. T<sub>1</sub>: 0,05·(100/50) = 0,10 pu. Linha: 0,05. T<sub>2</sub>: 0,10. Carga: 0,20.","X<sub>total</sub> = 0,05 + 0,10 + 0,05 + 0,10 + 0,20 = 0,50 pu.","E = 25/100 = 0,25 pu ⇒ I = 0,25/0,50 = <b>0,5 pu</b>."])
});
