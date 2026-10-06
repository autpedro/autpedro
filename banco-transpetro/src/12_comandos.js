B({
id:"b12", titulo:"Comandos elétricos e CLP (ladder)",
sub:"Contatos NA/NF, selo, intertravamento, temporizadores com retardo na ligação e no desligamento, e a tradução de ladder para lógica booleana.",
objetivos:["Ler um diagrama de comando: quem energiza cada bobina e o que a mantém","Reconhecer selo (retenção) e intertravamento","Simular temporizadores (retardo na energização × no desligamento) numa linha do tempo","Escrever a expressão booleana de uma linha ladder e simular um processo no tempo"],
qs:["08-31","18-55","06-26","08-28"],
aula:
"<h3>1. Símbolos e ideia básica</h3>"+
"<ul><li><b>Contato NA (normalmente aberto):</b> fecha quando a bobina do seu contator/relé é energizada. <b>NF (normalmente fechado):</b> abre quando a bobina é energizada.</li><li><b>Botoeira sem retenção:</b> só muda de estado enquanto é pressionada.</li><li><b>Selo:</b> contato NA do próprio contator em paralelo com a botoeira de liga. Depois de soltar a botoeira, a bobina continua energizada pelo selo.</li><li><b>Intertravamento:</b> contato NF de um contator em série com a bobina do outro. Impede que os dois operem juntos.</li><li><b>Botoeira de desliga (NF)</b> em série no início do circuito: abre tudo, inclusive os selos.</li></ul>"+
TRAP("ao julgar \"apertar S1 desliga C2\", veja ONDE o selo de C2 se liga. Se ele contorna as botoeiras, abrir um contato de botoeira não derruba C2.")+
"<h3>2. Temporizadores</h3>"+
"<ul><li><b>Retardo na energização (on-delay):</b> os contatos mudam T segundos DEPOIS de a bobina ser energizada; voltam imediatamente ao desenergizar.</li><li><b>Retardo no desligamento (off-delay):</b> os contatos mudam IMEDIATAMENTE ao energizar e só voltam T segundos depois de a bobina ser desenergizada.</li></ul>"+
P("Para circuitos com temporizadores, monte uma linha do tempo: anote cada evento (t = 0, 15 min, 40 min...) e o estado de cada bobina e contato depois dele. Ciclos aparecem quando um evento leva o circuito de volta ao estado inicial.")+
"<h3>3. Ladder → booleana</h3>"+
F("Contatos em série = E (·) &nbsp;&nbsp; em paralelo = OU (+) &nbsp;&nbsp; contato NF = NÃO (barra)<br>Selo clássico: B = (X<sub>liga</sub> + B)·X̄<sub>desliga</sub>")+
P("Para simular um CLP no tempo, avalie a linha a cada mudança das entradas. Uma saída selada continua ligada depois que a entrada de partida volta a 0, até a condição de desligamento abrir a linha."),
exemplo:{
 titulo:"Exemplo: partida com selo e desligamento",
 enun:P("Linha ladder: [X<sub>1</sub> (NA) em paralelo com B (NA)] em série com X<sub>2</sub> (NF) → bobina B. Um processo enche um tanque a 20 L/min quando B = 1. X<sub>1</sub> = 1 de t = 2 a 3 min e de t = 6 a 7 min. X<sub>2</sub> = 1 de t = 4 a 5 min (e 0 no resto)."),
 passos:[
  {p:"Em que instante B liga pela primeira vez (min)?", v:2, r:"Em <b>t = 2 min</b>: X<sub>1</sub> fecha e X<sub>2</sub> (NF) está fechado.", dica:"B liga quando a linha tem continuidade: X<sub>1</sub> ou B, E X<sub>2</sub> não acionado."},
  {p:"Em que instante B desliga (min)?", v:4, r:"Em <b>t = 4 min</b>: X<sub>2</sub> = 1 abre o contato NF e derruba o selo. Entre 3 e 4 min, B ficou ligado só pelo selo.", dica:"O selo mantém B até que o contato NF de X<sub>2</sub> abra."},
  {p:"Em t = 5 min, X<sub>2</sub> volta a 0. B religa sozinho? Responda 1 (sim) ou 0 (não).", v:0, tol:0, r:"<b>Não (0)</b>: o selo já caiu e X<sub>1</sub> = 0. Só religa em t = 6 min com novo pulso de X<sub>1</sub>.", dica:"Para religar, a linha precisa de X<sub>1</sub> = 1 ou do selo, que já está aberto."},
  {p:"Volume total bombeado até t = 10 min (L)?", v:120, r:"Ligado de 2 a 4 (2 min) e de 6 a 10 (4 min, porque nada o desliga depois) = 6 min × 20 = <b>120 L</b>.", dica:"Some os intervalos com B = 1 e multiplique pela vazão."}
 ],
 fecho:"A 18-55 é quase este exemplo, mas com X<sub>2</sub> permanecendo em 1 depois de t = 5 min. Veja como isso muda o segundo pulso."
}
});

Q("08-31",{
enun:P("A figura mostra parte de um programa de CLP em linguagem LADDER. A expressão booleana da saída S é"),
fig:"f08_31", ops:["T̄ · Q · (W + Z)","T̄ · (Q + W·Z)","<span style=\"text-decoration:overline\">T · (Q + W·Z)</span>","T · <span style=\"text-decoration:overline\">(Q · W + Z)</span>","T̄ · (Q + W + Z)"], gab:"B",
dicas:["W e Z estão em série (E); esse conjunto está em paralelo com Q (OU).","T é um contato NF (com a barra diagonal) em série com tudo."],
erros:{
A:"Q está em PARALELO com o ramo W–Z, então entra com OU, não com E. E W e Z estão em série (W·Z), não em paralelo.",
C:"A barra deve ficar só sobre T (o contato NF), não sobre a expressão inteira.",
D:"T aparece barrado (contato NF), e a barra não cobre o resto. Além disso, a ligação W–Z é série (E).",
E:"W e Z estão em SÉRIE: W·Z, e não W + Z."},
res:P("Ramo superior: W·Z. Em paralelo com Q: (Q + W·Z). Em série com o contato NF de T: <b>S = T̄·(Q + W·Z)</b>.")
});

Q("18-55",{
enun:P("Uma bomba de combustível bombeia óleo diesel para um tanque. Quando acionada, mantém vazão constante de 20 litros por minuto. O acionamento é comandado por um CLP cuja programação ladder está ilustrada, onde B é o sinal que aciona a bomba em nível lógico alto. A figura também mostra a evolução no tempo dos sinais X<sub>1</sub> e X<sub>2</sub>. Considerando que o tanque inicia a operação em t = 0 completamente vazio, qual será o volume de óleo, em litros, armazenado no instante t = 10 min?"),
fig:"f18_55", ops:["80","100","120","140","160"], gab:"A",
dicas:["B = (X<sub>1</sub> + B)·X̄<sub>2</sub>: X<sub>1</sub> liga, o contato B sela, X<sub>2</sub> (NF) desliga.","X<sub>1</sub> pulsa de 1 a 3 min e de 7 a 9 min. X<sub>2</sub> vai a 1 em t = 5 min e fica em 1. O que acontece com o segundo pulso de X<sub>1</sub>?"],
erros:{
B:"100 L = 5 min ligada. Confira: a bomba liga em t = 1 e desliga em t = 5 (4 min). Depois disso X<sub>2</sub> = 1 impede qualquer religamento.",
C:"120 L supõe que o segundo pulso (7 a 9 min) religou a bomba por 2 min. Mas X<sub>2</sub> = 1 desde t = 5, e seu contato NF mantém a linha aberta.",
D:"140 L conta o religamento em t = 7 até o fim. Com X<sub>2</sub> = 1, o contato NF está aberto e B não pode ligar.",
E:"160 L supõe a bomba ligada 8 minutos. Verifique o efeito de X<sub>2</sub> (contato NF) a partir de t = 5 min."},
res:OL(["t = 1 min: X<sub>1</sub> = 1 ⇒ B liga e sela.","t = 3 min: X<sub>1</sub> volta a 0, mas o selo mantém B.","t = 5 min: X<sub>2</sub> = 1 abre o NF ⇒ B desliga. X<sub>2</sub> continua 1 até o fim.","t = 7 a 9 min: X<sub>1</sub> = 1, mas o NF de X<sub>2</sub> está aberto ⇒ B continua 0.","Bomba ligada 4 min × 20 L/min = <b>80 L</b>."])
});

Q("06-26",{
tipo:"vf",
enun:P("A figura apresenta o circuito de comando de três máquinas trifásicas acionadas pelos contatores C1, C2 e C3. As chaves S1, S2 e S3 são do tipo sem retenção (S é a botoeira de desliga, NF; RT é o contato do relé térmico). Julgue as afirmativas."),
fig:"f06_26",
aviso:"pela análise do circuito, as afirmativas I a IV são verdadeiras e a V é falsa, combinação que não existe entre as alternativas originais [(A) I e II; (B) II, III e V; (C) I, III e V; (D) II, III, IV e V; (E) I, II, III, IV e V]. A banca provavelmente considerou (E). Por isso, aqui a questão é cobrada como julgamento de cada afirmativa.",
itens:[
 {t:"I – As lâmpadas LA e LB podem acender simultaneamente, sendo que nessa condição as máquinas comandadas por C2 e C3 deverão estar desligadas.", v:true, erro:"Olhe os contatos em série com as lâmpadas: LA tem um NF de C2; LB tem NF de C2 e NF de C3. Com C2 e C3 desligados, os dois acendem juntos."},
 {t:"II – A lâmpada LC somente acende quando a máquina comandada pelo contator C1 entra em operação.", v:true, erro:"O contato em série com LC é um NA de C1: só fecha com C1 energizado."},
 {t:"III – As máquinas não podem funcionar simultaneamente.", v:true, erro:"Em série com cada bobina há contatos NF dos OUTROS dois contatores (intertravamento). Basta um ligado para bloquear os outros."},
 {t:"IV – Ao ser acionada a chave S, todas as máquinas são desenergizadas e, após S retornar à sua posição de repouso, as lâmpadas LA e LB acendem.", v:true, erro:"S (NF) alimenta todo o barramento, inclusive os selos: apertá-la derruba tudo. Ao soltar, nenhum contator volta (as botoeiras não estão pressionadas), então os NF de C2 e C3 estão fechados e LA e LB acendem."},
 {t:"V – Ao ser acionada a chave S1, as máquinas comandadas por C2 e C3 são desenergizadas e as lâmpadas LA, LB e LC se acendem.", v:false, erro:"Veja onde se ligam os selos de C2 e C3: eles alimentam o ramo ABAIXO dos contatos de S1, S2 e S3. Abrir o NF de S1 não derruba um contator selado. E C1 nem consegue ligar se C2 ou C3 estiver ligado (intertravamento)."}
],
dicas:["Identifique primeiro: quais contatos são NA (desenhados abertos/inclinados) e quais são NF (desenhados fechados).","Para a afirmativa V, siga o fio do selo de C2: ele volta para qual ponto do ramo de C2?"],
res:OL(["Ramo de C1: S1 (NA) em série com S2 (NF), S3 (NF), C2 (NF), C3 (NF). Selo C1 em paralelo com as botoeiras. Os ramos de C2 e C3 são análogos.","Lâmpadas: LA com NF de C2; LB com NF de C2 e C3; LC com NA de C1.","I, II, III e IV verdadeiras. V falsa, porque os selos contornam as botoeiras e o intertravamento impede C1 de ligar com C2 ou C3 operando."])
});

Q("08-28",{
enun:P("A figura apresenta a parte de controle do acionamento de duas máquinas trifásicas, comandadas pelos contatores C1 e C2. As chaves S0 e S1 são do tipo sem retenção. Os relés K1 e K2 têm retardo na ligação, programados para 15 min e 40 min. O relé K3 tem retardo no desligamento, programado para 20 min. Com o sistema em condições normais, o operador aciona a chave S0 e, após 1 minuto, a chave S1. Sem novas interferências do operador, analise: I – as duas máquinas funcionarão simultaneamente por cerca de 20 minutos a cada hora; II – a máquina de C1 funcionará continuamente por cerca de 45 minutos e permanecerá desligada nos 15 minutos restantes de cada hora; III – a máquina de C2 funcionará por 25 minutos a cada hora; IV – a máquina de C2 funcionará sozinha por mais de 10 minutos a cada hora. Estão corretas APENAS as afirmativas"),
fig:"f08_28", ops:["I e II","II e IV","III e IV","I, II e III","I, III e IV"], gab:"A",
dicas:["S1 energiza R1, que sela pelo próprio contato. K3 (retardo no DESLIGAMENTO) é alimentado pelo NF de K2; seus contatos fecham na hora e ligam as bobinas de K1 e K2.","Monte a linha do tempo a partir de S1 (t = 0): K1 atua em 15 min, K2 em 40 min. Quando K2 atua, o NF de K2 desenergiza K3. O que acontece 20 min depois?"],
erros:{
B:"IV é falsa: C2 só liga em t = 40 min, quando C1 já está ligada desde t = 15; as duas desligam juntas em t = 60. C2 nunca fica sozinha.",
C:"III e IV são falsas. C2 fica ligada de 40 a 60 min: 20 min por hora, sempre junto com C1.",
D:"III é falsa: C2 opera de 40 a 60 min, ou seja, 20 min por ciclo de 60 min, não 25.",
E:"Confira III e IV na linha do tempo: C2 opera 20 min por hora e sempre com C1 ligada."},
res:OL(["t = 0 (S1): R1 sela; NF de K2 fechado ⇒ K3 energiza; seus contatos NA fecham na hora ⇒ K1 e K2 começam a temporizar.","t = 15 min: K1 atua ⇒ C1 liga.","t = 40 min: K2 atua ⇒ C2 liga; o NF de K2 abre ⇒ K3 desenergiza, mas seus contatos só abrem 20 min depois.","t = 60 min: contatos de K3 abrem ⇒ K1 e K2 desenergizam ⇒ C1 e C2 desligam; o NF de K2 fecha ⇒ K3 energiza de novo ⇒ o ciclo de 60 min recomeça.","C1: ligada 45 min (15 → 60) e desligada 15 min ⇒ II verdadeira. C2: 20 min (40 → 60), sempre junto com C1 ⇒ I verdadeira; III e IV falsas. Resposta <b>I e II</b>."])
});
