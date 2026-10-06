B({
id:"b08", titulo:"Linhas de transmissão e fluxo de potência",
sub:"Parâmetros da linha, efeito pelicular, transposição, quadripolo ABCD, impedâncias de sequência e potência transmitida entre duas barras.",
objetivos:["Explicar efeito pelicular, corona, Ferranti e transposição","Usar as constantes ABCD (incluindo a linha em vazio)","Calcular impedâncias de sequência a partir das impedâncias própria e mútua","Escrever P e Q transmitidos entre duas barras e as perdas reativas na linha"],
qs:["23-21","18-24","11-24","11-31","08-32"],
aula:
"<h3>1. Parâmetros e fenômenos</h3>"+
"<ul><li><b>Efeito pelicular (skin):</b> em CA a corrente se concentra na periferia do condutor; a densidade no centro cai. Quanto maior a frequência, maior a resistência aparente (efetiva).</li><li><b>Corona:</b> ionização do ar em volta do condutor (campo elétrico alto). Reduz-se com condutores de maior diâmetro ou feixes.</li><li><b>Efeito Ferranti:</b> em linha longa com carga leve, a tensão no receptor fica MAIOR que no emissor (capacitância shunt).</li><li><b>Transposição:</b> troca a posição das fases ao longo da linha para igualar as indutâncias e capacitâncias das três fases, reduzindo o desequilíbrio das tensões induzidas.</li></ul>"+
"<h3>2. Quadripolo ABCD</h3>"+
F("V<sub>S</sub> = A·V<sub>R</sub> + B·I<sub>R</sub> &nbsp;&nbsp; I<sub>S</sub> = C·V<sub>R</sub> + D·I<sub>R</sub><br>Linha em vazio (I<sub>R</sub> = 0): V<sub>R</sub> = V<sub>S</sub>/A")+
P("Como |A| &lt; 1 em linhas longas, a tensão em vazio no receptor sobe: é o Ferranti em forma de conta.")+
"<h3>3. Impedâncias de sequência de uma linha transposta</h3>"+
F("Z<sub>1</sub> = Z<sub>2</sub> = Z<sub>s</sub> − Z<sub>m</sub> &nbsp;&nbsp; Z<sub>0</sub> = Z<sub>s</sub> + 2Z<sub>m</sub><br>(Z<sub>s</sub>: própria por fase; Z<sub>m</sub>: mútua entre fases; multiplique pelo comprimento)")+
"<h3>4. Potência entre duas barras (linha indutiva, sem perdas)</h3>"+
F("P = (E<sub>S</sub>·E<sub>R</sub>/X)·sen δ<br>Q<sub>S</sub> = (E<sub>S</sub>² − E<sub>S</sub>E<sub>R</sub>cos δ)/X &nbsp;&nbsp; Q<sub>R</sub> = (E<sub>S</sub>E<sub>R</sub>cos δ − E<sub>R</sub>²)/X<br>Reativo consumido pela linha: Q<sub>L</sub> = Q<sub>S</sub> − Q<sub>R</sub> = (E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X = X·I²")+
P("A última forma tem uma leitura direta: |E<sub>S</sub> − E<sub>R</sub>|² = E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ (lei dos cossenos), e Q<sub>L</sub> = |ΔV|²/X.")+
TRAP("confundir o sinal do termo cruzado: é lei dos cossenos, então aparece −2E<sub>S</sub>E<sub>R</sub>cos δ."),
exemplo:{
 titulo:"Exemplo: potência e reativo numa linha curta",
 enun:P("Duas barras com E<sub>S</sub> = 1,05∠10° pu e E<sub>R</sub> = 1,0∠0° pu, ligadas por uma linha de reatância X = 0,2 pu (sem resistência)."),
 passos:[
  {p:"Qual a potência ativa transmitida (em pu)? (3 casas)", v:0.912, tol:0.01, r:"P = 1,05·1,0·sen 10°/0,2 = 1,05·0,1736/0,2 = <b>0,912 pu</b>.", dica:"P = E<sub>S</sub>E<sub>R</sub>sen δ/X."},
  {p:"Qual o reativo consumido pela linha Q<sub>L</sub> (em pu)? (3 casas)", v:0.172, tol:0.03, r:"Q<sub>L</sub> = (1,1025 + 1 − 2·1,05·cos 10°)/0,2 = (2,1025 − 2,0681)/0,2 = <b>0,172 pu</b>.", dica:"Q<sub>L</sub> = (E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X."},
  {p:"Confira por X·I²: qual o módulo da corrente (em pu)? (3 casas)", v:0.927, tol:0.02, r:"|E<sub>S</sub> − E<sub>R</sub>| = √0,0344 = 0,1855 ⇒ I = 0,1855/0,2 = <b>0,927 pu</b>; X·I² = 0,2·0,86 = 0,172 pu ✓.", dica:"I = |E<sub>S</sub> − E<sub>R</sub>|/X. Use o resultado do passo anterior: |ΔV|² = Q<sub>L</sub>·X."}
 ],
 fecho:"A questão 08-32 pede exatamente a expressão do passo 2."
}
});

Q("23-21",{
enun:P("O projeto de sistemas de transmissão deve considerar os parâmetros elétricos das linhas. No efeito pelicular que ocorre em corrente alternada, verifica-se que quanto maior é a frequência elétrica do sistema de transmissão,"),
ops:["maior é a resistência aparente do condutor da linha, devido à distribuição não uniforme da corrente elétrica resultante da redução da densidade de corrente no centro do condutor.","menor é a resistência aparente do condutor da linha, devido à redução da resistividade elétrica na periferia do condutor resultante do aumento de carga elétrica no centro do condutor.","maior é a capacitância aparente do condutor da linha, devido ao aumento do campo elétrico na periferia do condutor resultante da redução da carga elétrica no centro do condutor.","menor é a capacitância aparente do condutor da linha, devido ao aumento da carga elétrica na periferia do condutor resultante da redução da densidade de corrente no centro do condutor.","menor é a condutância paralela aparente dos isoladores da linha, devido ao aumento do campo elétrico na periferia do condutor resultante da redução da densidade de corrente no centro do condutor."], gab:"A",
dicas:["O efeito pelicular é sobre a distribuição da CORRENTE dentro do condutor. Ele mexe com resistência, não com capacitância nem com isoladores.","Se a corrente usa só a \"casca\" do condutor, a área útil diminui. O que acontece com R = ρL/A?"],
erros:{
B:"A resistividade do material não muda com a frequência. O que muda é a área efetiva por onde a corrente passa, e ela DIMINUI, então R aumenta.",
C:"O efeito pelicular não trata de capacitância. É a corrente que se concentra na periferia, alterando a resistência.",
D:"Capacitância depende da geometria entre condutores, não da distribuição interna da corrente.",
E:"Condutância dos isoladores (fuga) não tem relação com o efeito pelicular no condutor."},
res:P("Com frequência maior, a corrente se concentra na periferia do condutor (densidade menor no centro). A área efetiva cai e a resistência aparente (CA) aumenta. Alternativa <b>A</b>.")
});

Q("18-24",{
enun:P("Linhas de transmissão de energia são sistemas complexos que demandam certas peculiaridades em sua construção, de modo a melhorar o seu desempenho. Dentre as soluções desenvolvidas, uma delas é a transposição, que tem por principal finalidade reduzir"),
ops:["as perdas da linha por efeito corona.","as perdas da linha por efeito Ferranti.","o efeito da capacitância shunt da linha.","o comprimento das linhas, reduzindo as perdas por efeito Joule.","o desbalanceamento das tensões induzidas na linha, provocado pela falta de simetria da rede."], gab:"E",
dicas:["Numa linha com fases em posições diferentes, cada fase tem indutância e capacitância um pouco diferentes. Que problema isso causa?","A transposição faz cada fase ocupar cada posição por um terço do comprimento."],
erros:{
A:"Corona se combate com condutores de maior diâmetro ou feixes de subcondutores, não com transposição.",
B:"Ferranti vem da capacitância shunt com carga leve; combate-se com reatores shunt.",
C:"A transposição não reduz a capacitância shunt; ela iguala os parâmetros entre as fases.",
D:"Transposição não encurta a linha; ela só troca a posição relativa das fases ao longo do traçado."},
res:P("A geometria assimétrica deixa as três fases com indutâncias e capacitâncias diferentes, o que desequilibra as tensões e correntes. Transpondo as fases, os parâmetros médios ficam iguais e o desequilíbrio cai. Alternativa <b>E</b>.")
});

Q("11-24",{
enun:P("Uma linha de transmissão de 120 km de extensão possui impedância série própria igual a 0,02 + j0,05 Ω/km e impedância mútua entre as fases de j0,02 Ω/km. A impedância de sequência direta para essa linha, em ohms, é"),
ops:["2,4 + j3,6","2,4 + j6,0","1,2 + j3,6","1,2 + j6,0","1,2 + j8,4"], gab:"A",
dicas:["Z<sub>1</sub> = Z<sub>s</sub> − Z<sub>m</sub> (por km).","Depois multiplique por 120 km."],
erros:{
B:"j6,0 = 120·j0,05 é só a parte própria. A sequência direta desconta a mútua: Z<sub>s</sub> − Z<sub>m</sub>.",
C:"A parte imaginária está certa, mas a resistência: 0,02 × 120 = 2,4 Ω (a mútua não tem parte real aqui).",
D:"Dois erros: a resistência é 0,02·120 = 2,4 Ω e a reatância deve descontar a mútua.",
E:"j8,4 = 120·(j0,05 + j0,02): você SOMOU a mútua. Isso lembra Z<sub>s</sub> + Z<sub>m</sub>, que não é nenhuma impedância de sequência (a de sequência zero é Z<sub>s</sub> + 2Z<sub>m</sub>)."},
res:OL(["Z<sub>1</sub> por km = (0,02 + j0,05) − j0,02 = 0,02 + j0,03 Ω/km.","× 120 km = <b>2,4 + j3,6 Ω</b>.","(Para comparar: Z<sub>0</sub> = Z<sub>s</sub> + 2Z<sub>m</sub> = 2,4 + j10,8 Ω.)"])
});

Q("11-31",{
enun:P("As constantes generalizadas de uma linha de transmissão monofásica são A = 0,80∠1,5°, B = 145∠85° Ω, C = 0,0025∠89,7° S e D = 0,80∠1,5°. A linha está em vazio, em regime permanente, e a tensão no terminal emissor é 100∠0° kV. O módulo da tensão no terminal receptor, em kV, é"),
ops:["65","80","100","125","145"], gab:"D",
dicas:["Em vazio, I<sub>R</sub> = 0.","V<sub>S</sub> = A·V<sub>R</sub> ⇒ |V<sub>R</sub>| = |V<sub>S</sub>|/|A|."],
erros:{
A:"65 kV não sai da relação V<sub>S</sub> = A·V<sub>R</sub>. Em vazio o termo B·I<sub>R</sub> some.",
B:"80 = 0,8 × 100: você multiplicou por A. A equação é V<sub>S</sub> = A·V<sub>R</sub>, então V<sub>R</sub> = V<sub>S</sub>/A.",
C:"Em vazio a tensão no receptor não é igual à do emissor: a capacitância da linha a eleva (efeito Ferranti).",
E:"145 é o módulo de B, em ohms. Em vazio B não participa (I<sub>R</sub> = 0)."},
res:P("Em vazio: V<sub>S</sub> = A·V<sub>R</sub> ⇒ |V<sub>R</sub>| = 100/0,80 = <b>125 kV</b>. A tensão no receptor maior que no emissor é o efeito Ferranti.")
});

Q("08-32",{
enun:P("Considere o sistema de potência da figura, com duas fontes geradoras conectadas por uma linha de transmissão predominantemente indutiva. O valor da potência reativa absorvida pela linha, Q<sub>L</sub> = Q<sub>S</sub> − Q<sub>R</sub>, em função dos módulos das tensões E<sub>S</sub> e E<sub>R</sub>, do ângulo δ entre as barras e da reatância X, é"),
fig:"f08_32", ops:["(E<sub>S</sub>² − E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X","(E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X","(E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X²","(E<sub>S</sub>² + E<sub>R</sub>² + 2E<sub>S</sub>E<sub>R</sub>cos δ)/X","(E<sub>S</sub>² + E<sub>R</sub>² + 2E<sub>S</sub>E<sub>R</sub>cos δ)/X²"], gab:"B",
dicas:["Escreva Q<sub>S</sub> = (E<sub>S</sub>² − E<sub>S</sub>E<sub>R</sub>cos δ)/X e Q<sub>R</sub> = (E<sub>S</sub>E<sub>R</sub>cos δ − E<sub>R</sub>²)/X e subtraia.","Outra forma: Q<sub>L</sub> = X·I² = |E<sub>S</sub> − E<sub>R</sub>|²/X. Use a lei dos cossenos para |E<sub>S</sub> − E<sub>R</sub>|²."],
erros:{
A:"O termo E<sub>R</sub>² entra com sinal positivo: ao subtrair Q<sub>R</sub>, o −E<sub>R</sub>² de Q<sub>R</sub> vira +E<sub>R</sub>².",
C:"Confira a unidade: (V²)/X dá var; dividir por X² dá V²/Ω², que não é potência.",
D:"O termo cruzado tem sinal negativo: |E<sub>S</sub> − E<sub>R</sub>|² = E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ.",
E:"Dois problemas: o sinal do termo cruzado deve ser negativo e o denominador é X (não X²)."},
res:P("Q<sub>L</sub> = Q<sub>S</sub> − Q<sub>R</sub> = [E<sub>S</sub>² − E<sub>S</sub>E<sub>R</sub>cos δ − E<sub>S</sub>E<sub>R</sub>cos δ + E<sub>R</sub>²]/X = <b>(E<sub>S</sub>² + E<sub>R</sub>² − 2E<sub>S</sub>E<sub>R</sub>cos δ)/X</b>. É o mesmo que X·I² com I = |E<sub>S</sub> − E<sub>R</sub>|/X.")
});
