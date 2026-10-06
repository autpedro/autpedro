B({
id:"b11", titulo:"Instalações BT, esquemas de aterramento e malhas de terra",
sub:"Queda de tensão, dimensionamento por momento elétrico, DPS, esquemas TN/TT/IT, proteção contra contatos indiretos, método de Wenner e tensões de toque e passo.",
objetivos:["Calcular queda de tensão unitária e por momento (MVA·km, W·m)","Tratar carga uniformemente distribuída como concentrada no meio","Identificar TN-S, TN-C, TT e IT pelas ligações da alimentação e das massas","Saber como resolver falta de proteção contra contatos indiretos","Estratificar o solo pela curva de Wenner e checar toque e passo"],
qs:["18-29","18-46","23-59","11-25","23-22","08-30","23-31","06-28","11-37","11-35","23-57","18-48"],
aula:
"<h3>1. Queda de tensão</h3>"+
F("Monofásico (2 condutores): ΔV = 2·R'·L·I &nbsp;&nbsp; Trifásico equilibrado: ΔV<sub>linha</sub> = √3·R'·L·I<br>Queda unitária: ΔV<sub>u</sub> = ΔV/(I·L) em V/(A·km)<br>Coeficiente de queda: k = ΔV%/(S·L) em %/(MVA·km)")+
P("<b>Carga uniformemente distribuída</b> ao longo de L equivale à carga total concentrada em L/2.")+
P("<b>Tabelas de momento (W × m) para circuitos monofásicos a 127 V:</b> num circuito trifásico equilibrado a 4 fios (220/127 V), cada fase carrega 1/3 da potência e a corrente não volta pelo neutro. A queda por fase acontece num só condutor (no monofásico são dois), então, para a mesma queda percentual, o momento admissível por fase dobra. Momento equivalente a procurar na tabela monofásica = (P/3 × L)/2.")+
"<h3>2. Esquemas de aterramento (NBR 5410)</h3>"+
"<ul><li><b>1ª letra (alimentação):</b> T = um ponto diretamente aterrado; I = isolado ou aterrado por impedância.</li><li><b>2ª letra (massas):</b> T = massas em eletrodo próprio, distinto do da alimentação; N = massas ligadas ao ponto aterrado da alimentação (pelo condutor de proteção).</li><li><b>TN-S:</b> PE e N separados. <b>TN-C:</b> PEN único. <b>TN-C-S:</b> combina.</li></ul>"+
P("Na subestação, se o neutro e todas as massas vão à MESMA malha, o esquema é TN. No TN-C, se o PEN rompe, a carcaça fica ligada à fase pela carga: tensão fase-neutro na carcaça.")+
"<h3>3. Contatos indiretos (seccionamento automático)</h3>"+
P("No TN, a falta fase-massa vira um curto pelo PE; o dispositivo deve atuar no tempo exigido. Se não atua: diminuir a impedância do laço (aumentar a seção, reduzir o comprimento), usar dispositivo mais rápido ou um DR. Reduzir a potência da carga não altera a corrente de falta.")+
"<h3>4. DPS</h3>"+
P("Fica em derivação (paralelo): um lado no condutor de fase (ou neutro), o outro no barramento de equipotencialização principal ou na barra PE do quadro. Nunca em série.")+
"<h3>5. Aterramento e resistividade do solo</h3>"+
"<ul><li><b>Método de Wenner:</b> 4 eletrodos espaçados de a; ρ(a) = 2πaR. Espaçamentos maiores \"enxergam\" camadas mais profundas.</li><li><b>Duas camadas:</b> ρ<sub>1</sub> = valor para a pequeno (assíntota inicial); ρ<sub>2</sub> = valor para a grande (assíntota final). Coeficiente de reflexão K = (ρ<sub>2</sub> − ρ<sub>1</sub>)/(ρ<sub>2</sub> + ρ<sub>1</sub>).</li><li><b>Número de camadas:</b> cada mudança de tendência ou patamar da curva indica uma nova camada.</li><li><b>Critérios de malha:</b> potencial de toque e de passo calculados (na malha, na cerca e na periferia) devem ficar abaixo dos admissíveis.</li><li>NBR 5410: armaduras do concreto das fundações são o eletrodo de aterramento preferencial; mastros e antenas devem ser ligados (equipotencializados) ao aterramento; o mesmo eletrodo serve à instalação e ao SPDA.</li></ul>",
exemplo:{
 titulo:"Exemplo: ramal com carga distribuída",
 enun:P("Um ramal trifásico de 13,8 kV com 6 km alimenta uma carga uniformemente distribuída de 300 kVA/km. O coeficiente de queda do cabo é 0,4 %/(MVA·km)."),
 passos:[
  {p:"Qual a carga total (em MVA)?", v:1.8, r:"300 kVA/km × 6 km = <b>1,8 MVA</b>.", dica:"Densidade × comprimento."},
  {p:"Qual a distância equivalente (em km) em que se concentra essa carga?", v:3, r:"Carga uniforme ⇒ concentrada no meio: <b>3 km</b>.", dica:"Carga uniformemente distribuída equivale à carga total na metade do comprimento."},
  {p:"Qual a queda de tensão percentual no fim do ramal?", v:2.16, r:"ΔV% = 0,4 × 1,8 × 3 = <b>2,16%</b>.", dica:"ΔV% = k × S × L<sub>eq</sub>."},
  {p:"Se o limite fosse 3%, qual o maior coeficiente admissível (%/(MVA·km))?", v:0.5556, tol:0.01, r:"k<sub>máx</sub> = 3/(1,8 × 3) = <b>0,556</b>.", dica:"Isole k na mesma fórmula."}
 ],
 fecho:"A 18-46 é este último passo, com outros números."
}
});

Q("18-29",{
enun:P("Um circuito terminal de 20 m e queda de tensão de 2% alimenta uma carga monofásica pontual de 1.000 VA. Sabendo que a tensão de fase da instalação onde essa carga se encontra é 200 V, a queda de tensão unitária, em V/(A·km), do circuito é"),
ops:["25","30","40","55","65"], gab:"C",
dicas:["ΔV = 2% de 200 V; I = 1000/200.","ΔV<sub>u</sub> = ΔV/(I·L), com L em km."],
erros:{
A:"Confira os valores: ΔV = 4 V, I = 5 A e L = 0,02 km.",
B:"30 não sai da conta 4/(5 × 0,02). Refaça com L em quilômetros.",
D:"55 ultrapassa o correto. Verifique a corrente: 1000 VA/200 V = 5 A.",
E:"Talvez você tenha usado a queda em porcentagem em vez de volts. ΔV = 0,02 × 200 = 4 V."},
res:P("ΔV = 0,02 × 200 = 4 V; I = 1000/200 = 5 A; L = 0,02 km. ΔV<sub>u</sub> = 4/(5 × 0,02) = <b>40 V/(A·km)</b>.")
});

Q("18-46",{
enun:P("Foi solicitado o projeto de um ramal de distribuição aéreo de 13,8 kV, de 8 km de comprimento, que alimenta cargas ao longo de seu percurso, aproximadas por uma carga trifásica uniformemente distribuída com densidade linear de 250 kVA/km. Sabendo que a máxima queda de tensão percentual admitida no ramal é de 4%, o maior coeficiente de queda de tensão admissível do ramal, em %/(MVA·km), é"),
ops:["0,05","0,20","0,25","0,40","0,50"], gab:"E",
dicas:["Carga total: 0,25 MVA/km × 8 km. Concentrada no meio: 4 km.","k = ΔV%/(S·L<sub>eq</sub>)."],
erros:{
A:"0,05 é muito pequeno: confira as unidades (MVA e km).",
B:"Confira o momento: S = 2 MVA e L<sub>eq</sub> = 4 km ⇒ 8 MVA·km.",
C:"0,25 = 4/(2 × 8): você concentrou a carga no fim do ramal (8 km). Carga uniformemente distribuída equivale à carga no MEIO.",
D:"Refaça 4/8: dá 0,5."},
res:OL(["S = 0,25 × 8 = 2 MVA, concentrada a 4 km.","Momento: 2 × 4 = 8 MVA·km.","k = 4%/8 = <b>0,50 %/(MVA·km)</b>."])
});

Q("23-59",{
enun:P("Num prédio comercial, o quadro de distribuição de um escritório é conectado ao seu medidor, no pilotis, por meio de um alimentador trifásico a 4 fios, tensão de linha de 220 V. A potência instalada no quadro é 45 kW e a distância entre o quadro e o medidor é 10 m. Adotando uma queda máxima de 4% entre o quadro e o medidor, a seção do alimentador, em mm², é<br>Dado (circuitos monofásicos, 127 V, soma das potências em W × distância em m para 4% de queda): 4 mm² → 74 839; 6 → 112 258; 10 → 187 096; 16 → 299 354; 25 → 467 741."),
ops:["4","6","10","16","25"], gab:"B",
aviso:"a tabela é de circuitos monofásicos. A conversão para o trifásico equilibrado (P/3 por fase e momento dividido por 2) é a mais coerente com os números da tabela, mas não é dita no enunciado.",
dicas:["Cada fase do alimentador leva 45/3 = 15 kW a 127 V.","No trifásico equilibrado o neutro não conduz: a queda por fase está num só condutor, enquanto a tabela monofásica considera ida e volta. Divida o momento por 2."],
erros:{
A:"O momento equivalente fica em 75 000 W·m, um pouco ACIMA dos 74 839 do cabo de 4 mm². Com 4 mm² a queda passaria de 4%.",
C:"10 mm² sai com 150 000 W·m (15 kW × 10 m), sem considerar que no trifásico a queda por fase está num único condutor (a tabela monofásica conta ida e volta).",
D:"16 mm² superdimensiona. Calcule o momento por fase e ajuste para a tabela monofásica.",
E:"25 mm² sai usando a potência total (45 kW × 10 m = 450 000) numa tabela monofásica de 127 V. A potência se divide entre as três fases."},
res:OL(["Por fase: 15 kW × 10 m = 150 000 W·m.","Equivalente monofásico (queda em um condutor, não em dois): 150 000/2 = 75 000 W·m.","4 mm² aceita até 74 839 (insuficiente, por pouco); 6 mm² aceita 112 258. Seção: <b>6 mm²</b>."])
});

Q("11-25",{
enun:P("Após o dimensionamento de um projeto elétrico de baixa tensão, o projetista constatou que, para um dado circuito, a proteção contra contatos indiretos não foi atingida. A providência que NÃO permite solucionar o problema é"),
ops:["aumentar a bitola do fio do circuito.","diminuir a potência das cargas ligadas a esse circuito.","diminuir o comprimento do circuito.","trocar o disjuntor por outro mais rápido.","utilizar um DR nesse circuito."], gab:"B",
dicas:["O problema é a corrente de FALTA (fase-massa) ser baixa demais para o disjuntor atuar a tempo.","Quais medidas aumentam essa corrente ou tornam a proteção mais sensível? A carga influencia a corrente de falta?"],
erros:{
A:"Aumentar a bitola reduz a impedância do laço de falta, aumenta a corrente de falta e acelera o disjuntor. Isso resolve. A pergunta pede o que NÃO resolve.",
C:"Circuito mais curto ⇒ menor impedância de laço ⇒ maior corrente de falta. Resolve. Procure a que NÃO resolve.",
D:"Um dispositivo mais rápido (curva de atuação mais baixa) atua com a corrente de falta existente. Resolve.",
E:"O DR detecta a fuga para a terra com poucos miliampères: é a solução clássica. Procure a que NÃO resolve."},
res:P("A proteção contra contatos indiretos depende da corrente de falta fase-massa, definida pela impedância do laço, não pela carga. Diminuir a potência das cargas não muda essa corrente: alternativa <b>B</b>.")
});

Q("23-22",{
enun:P("Os Dispositivos de Proteção contra Surtos (DPS) devem ser instalados corretamente. Suponha que a linha elétrica que chega à edificação não inclua neutro. Quando instalado junto ao ponto de entrada da linha na edificação ou no quadro de distribuição principal, os DPS"),
ops:["se conectam em série, um em cada circuito, a jusante do ponto de entrega da instalação, substituindo o uso dos disjuntores na proteção contra curto-circuito da instalação.","não podem ser conectados ao barramento de equipotencialização principal da edificação, sendo cada DPS instalado em paralelo aos terminais de cada disjuntor dos circuitos da instalação.","devem ser instalados de modo a conduzir toda a corrente dos circuitos, sendo cada DPS instalado em série com cada disjuntor dos circuitos da instalação.","substituem o sistema de aterramento da instalação, e cada DPS provê o potencial terra para cada circuito da instalação.","se conectam, cada um, de um lado a um condutor de fase e, do outro, ao barramento de equipotencialização principal da edificação ou à barra dos condutores de proteção do quadro (barra PE)."], gab:"E",
dicas:["O DPS só conduz durante o surto, desviando-o para a terra. Ele fica em série ou em derivação?"],
erros:{
A:"O DPS não fica em série e não substitui disjuntor. Em série, ele teria de conduzir a corrente de carga.",
B:"É justamente ao barramento de equipotencialização (ou barra PE) que o DPS se liga.",
C:"Em série com o circuito o DPS conduziria a corrente normal; ele é ligado em derivação, entre o condutor vivo e a terra.",
D:"O DPS depende do aterramento para escoar o surto; não o substitui."},
res:P("O DPS fica em derivação: entre cada condutor de fase (sem neutro na linha) e o BEP ou a barra PE. Alternativa <b>E</b>.")
});

Q("08-30",{
enun:P("Em uma subestação, o neutro da alimentação e as massas de todos os equipamentos existentes são diretamente conectados à mesma malha de terra. De acordo com as normas vigentes no Brasil, o esquema de aterramento dessa subestação é do tipo"),
ops:["TT","TN","TI","IT","NT"], gab:"B",
dicas:["1ª letra: como está a alimentação? (neutro diretamente aterrado ⇒ T).","2ª letra: as massas vão a um eletrodo próprio (T) ou ao mesmo ponto aterrado da alimentação (N)?"],
erros:{
A:"No TT as massas vão a um eletrodo DISTINTO do da alimentação. Aqui é a mesma malha.",
C:"\"TI\" não existe na NBR 5410: a 2ª letra é T ou N.",
D:"IT tem a alimentação isolada (ou aterrada por impedância). Aqui o neutro está diretamente na malha.",
E:"\"NT\" não existe: a 1ª letra descreve a alimentação (T ou I)."},
res:P("Alimentação com neutro diretamente aterrado (T) e massas ligadas ao mesmo ponto aterrado (N): <b>TN</b>.")
});

Q("23-31",{
enun:P("Em um projeto de sistema de aterramento, foi adotado o esquema TT, que possui"),
ops:["um ponto da alimentação diretamente aterrado, com eletrodo de aterramento eletricamente distinto do(s) eletrodo(s) que se liga(m) às massas da instalação.","um ponto da alimentação diretamente aterrado, com as massas da instalação ligadas a esse ponto através de condutores de proteção.","um ponto de alimentação aterrado através de impedância, e as massas da instalação aterradas através de eletrodo(s) de aterramento próprio(s).","nenhum ponto da alimentação diretamente aterrado, e as massas da instalação aterradas através de eletrodo(s) de aterramento próprio(s).","dois pontos da alimentação diretamente aterrados a eletrodos de aterramento distintos, sendo as massas da instalação não aterradas."], gab:"A",
dicas:["T (alimentação aterrada) + T (massas em eletrodo próprio, separado)."],
erros:{
B:"Massas ligadas ao ponto aterrado da alimentação por condutor de proteção é o esquema TN.",
C:"Alimentação aterrada por impedância é IT.",
D:"Sem ponto da alimentação diretamente aterrado é IT.",
E:"Massas não aterradas não fazem parte de nenhum esquema normalizado de proteção por seccionamento automático."},
res:P("TT: alimentação com um ponto diretamente aterrado; massas ligadas a eletrodo(s) distinto(s) do eletrodo da alimentação. Alternativa <b>A</b>.")
});

Q("06-28",{
enun:P("Um circuito monofásico que alimenta um motor elétrico, com esquema de aterramento TN-C, tem o seu neutro rompido. A máxima tensão que pode existir entre a carcaça do motor e o terra é igual à"),
ops:["tensão entre fase e neutro.","tensão entre duas fases.","zero.","tensão entre neutro e terra.","duas vezes a tensão entre fase e neutro."], gab:"A",
dicas:["No TN-C, neutro e proteção são o mesmo condutor (PEN), e a carcaça está ligada a ele.","Rompido o PEN antes do motor, o ponto da carcaça fica ligado à fase através do enrolamento, sem corrente circulando. Que tensão aparece?"],
erros:{
B:"O motor é monofásico (fase-neutro). Pela carga só chega o potencial de uma fase.",
C:"Sem o PEN, a carcaça perde a ligação à terra e fica no potencial da fase (via enrolamento). Daí o perigo do TN-C.",
D:"A tensão neutro-terra é normalmente pequena; o rompimento leva a carcaça ao potencial da fase.",
E:"Não há fonte que gere o dobro da tensão de fase num circuito fase-neutro."},
res:P("Com o PEN rompido, não circula corrente: não há queda no enrolamento e a carcaça (ligada ao PEN) fica no potencial da fase. Tensão carcaça-terra = <b>tensão fase-neutro</b>. Por isso a NBR 5410 restringe o TN-C.")
});

Q("11-37",{
enun:P("A construção, a manutenção e a utilização de um sistema de aterramento e das malhas de terra possibilitam estabilidade e segurança. De acordo com o estabelecido em Norma e pelas técnicas de construção, verifica-se que"),
ops:["os mastros e as antenas devem estar isolados do sistema de aterramento.","as armaduras metálicas do concreto das fundações são o eletrodo de aterramento preferencial.","os eletrodos de aterramento de uma edificação, definidos pela NBR 5410/2004, não podem ser usados conjuntamente pelo sistema de proteção contra descargas atmosféricas, definidos na NBR 5419/2005.","a infraestrutura de aterramento só é dispensável no caso de instalações temporárias.","a infraestrutura de aterramento, nas fundações em alvenaria, tem que ser constituída por material que seja de cobre ou revestido por esse metal."], gab:"B",
dicas:["A NBR 5410 indica um tipo de eletrodo como preferencial porque ele já existe em toda edificação com concreto armado."],
erros:{
A:"Mastros e antenas devem ser ligados (equipotencializados) ao sistema de aterramento.",
C:"A NBR 5410 prevê eletrodo único para a instalação e o SPDA.",
D:"Instalação temporária também exige aterramento.",
E:"A norma admite outros materiais (aço galvanizado, por exemplo), não só cobre."},
res:P("A NBR 5410 recomenda o uso das armaduras do concreto das fundações como eletrodo de aterramento preferencial (aterramento de fundação). Alternativa <b>B</b>.")
});

Q("11-35",{
enun:P("Para o projeto de malha de terra de um centro de processamento de dados, foi levantada a curva ρ(a) × a pelo método de Werner (Wenner), conforme a figura. Com base no método simplificado para estratificação do solo em duas camadas, analise: I – A resistividade da 1ª camada é aproximadamente 800 Ω·m. II – A reflexão do solo vale 7/9. III – A resistividade da 2ª camada é aproximadamente 450 Ω·m. Está correto APENAS o que se afirma em"),
fig:"f11_35", ops:["I","II","III","I e II","II e III"], gab:"B",
dicas:["ρ<sub>1</sub> é o valor para espaçamentos pequenos (início da curva); ρ<sub>2</sub> é o valor para espaçamentos grandes (patamar final).","K = (ρ<sub>2</sub> − ρ<sub>1</sub>)/(ρ<sub>2</sub> + ρ<sub>1</sub>)."],
erros:{
A:"800 Ω·m é o patamar FINAL (a grande): corresponde à 2ª camada, não à 1ª.",
C:"450 Ω·m é um valor intermediário da transição. A 2ª camada é a assíntota final, cerca de 800 Ω·m.",
D:"I está trocada: 800 Ω·m é a 2ª camada. Só II é verdadeira.",
E:"III é falsa: a 2ª camada vale cerca de 800 Ω·m (patamar final)."},
res:OL(["ρ<sub>1</sub> ≈ 100 Ω·m (início); ρ<sub>2</sub> ≈ 800 Ω·m (patamar final).","K = (800 − 100)/(800 + 100) = 700/900 = 7/9 ⇒ II verdadeira.","I e III são falsas. Alternativa <b>B</b>."])
});

Q("23-57",{
enun:P("Com o objetivo de projetar um sistema de aterramento, a equipe realizou medições pelo método de Wenner e plotou o gráfico do espaçamento (a) pela resistividade (ρ). De acordo com o perfil da curva, o número de camadas estratificadas do solo é"),
fig:"f23_57", ops:["1","2","3","4","5"], gab:"D",
dicas:["Cada trecho em que a curva muda de tendência (sobe, desce, forma patamar) revela uma camada com resistividade diferente.","Comece pelo valor inicial (camada 1). A curva sobe até um máximo, desce até um patamar e depois desce de novo até um valor final."],
erros:{
A:"Um solo homogêneo daria uma reta horizontal (ρ constante).",
B:"Duas camadas dariam uma única transição entre o valor inicial e o final. Aqui há várias mudanças de tendência.",
C:"Conte de novo: valor inicial, máximo, patamar intermediário e valor final. São mais de três regiões.",
E:"Não conte as inflexões como camadas extras. Conte as regiões de resistividade: inicial, alta, patamar intermediário e final."},
res:P("Camada 1: valor inicial (a pequeno). Camada 2: mais resistiva (a curva sobe ao máximo). Camada 3: menos resistiva (patamar intermediário). Camada 4: ainda menos resistiva (queda final até a assíntota). Total: <b>4 camadas</b>.")
});

Q("18-48",{
enun:P("Uma comissão avaliou quatro projetos de malha de terra (P1 a P4). Potencial de toque da malha (V): 300, 600, 800, 300. Toque na cerca: 300, 600, 800, 300. Passo da malha: 1600, 900, 2000, 2000. Passo na periferia: 1600, 900, 2000, 2000. Os potenciais de toque e de passo admissíveis são 700 V e 1900 V. Atendem aos critérios APENAS o(s) projeto(s)"),
ops:["P1","P2","P3","P1 e P2","P1 e P4"], gab:"D",
dicas:["Um projeto atende se TODOS os toques forem ≤ 700 V e TODOS os passos ≤ 1900 V.","Confira coluna por coluna."],
erros:{
A:"P1 atende, mas P2 também: toques de 600 V e passos de 900 V.",
B:"P2 atende, mas P1 também: toques de 300 V e passos de 1600 V.",
C:"P3 tem toque de 800 V (&gt; 700 V) e passo de 2000 V (&gt; 1900 V): reprovado.",
E:"P4 tem passo de 2000 V, acima de 1900 V: reprovado, mesmo com toque baixo."},
res:P("P1: toque 300 ≤ 700 e passo 1600 ≤ 1900 ✓. P2: 600 e 900 ✓. P3: toque 800 ✗. P4: passo 2000 ✗. Atendem <b>P1 e P2</b>.")
});
