/* ===================== PORTUGUÊS ===================== */
B({
id:"pt06", grupo:"Conhecimentos básicos: Português e Inglês", titulo:"Português 2006: interpretação, paráfrase e regência",
sub:"Texto \"O que é... decisão\". Paráfrase, inferência, coesão referencial, regência verbal, paronímia e valor dos dois-pontos.",
texto:["t06pt_a","t06pt_b"],
objetivos:["Ler o enunciado antes do texto e voltar ao trecho citado (linha) para responder","Distinguir o que o texto DIZ do que a alternativa ACRESCENTA","Achar o referente de pronomes e advérbios (que, onde, -la, aí, dele)","Saber regências que mais caem: responder a, assistir a, aludir a, chegar a","Diferenciar os usos dos dois-pontos (enumeração × explicação)"],
qs:["06-1","06-2","06-3","06-4","06-5","06-6","06-7","06-8","06-9","06-10"],
aula:
"<h3>1. Método para interpretação (vale para todos os blocos de Português)</h3>"+
OL(["Leia as perguntas ANTES do texto: você já lê sabendo o que procurar.","Quando a questão cita linhas, volte ao trecho e leia uma frase antes e uma depois.","Para cada alternativa pergunte: o texto disse isso, ou a alternativa ACRESCENTOU, GENERALIZOU ou INVERTEU algo?","Desconfie de absolutos (sempre, nunca, todos, somente) e de causas que o texto não deu."])+
"<h3>2. Paráfrase e reescrita</h3>"+
P("Uma reescrita correta mantém três coisas: o sentido (inclusive o grau de certeza: \"com certeza\" ≠ \"poderiam\"), as relações lógicas (causa, condição, concessão) e a correção gramatical.")+
"<h3>3. Coesão referencial</h3>"+
P("Pronomes relativos (que, onde, o qual), oblíquos (o, a, -la, lhe), demonstrativos (isso, desse) e advérbios (aí, lá) retomam algo dito antes. Para testar, substitua o pronome pelo referente e veja se a frase continua fazendo sentido.")+
"<h3>4. Regência verbal que mais cai</h3>"+
"<ul><li><b>Exigem a (VTI):</b> responder a, assistir a (ver), aludir a, obedecer a, aspirar a (desejar), chegar a/ir a (lugar).</li><li><b>Diretos (VTD):</b> chamar, convidar, cumprimentar, pressionar, adorar.</li><li><b>Pronominal com de:</b> utilizar-se de, servir-se de ⇒ \"o prefixo de que se utiliza\".</li></ul>"+
"<h3>5. Dois-pontos</h3>"+
P("Introduzem (a) uma <b>enumeração</b> (lista de itens), (b) uma <b>explicação, causa ou esclarecimento</b> do que veio antes, (c) uma <b>citação/fala</b>. Na questão, identifique primeiro o tipo do original.")+
TRAP("parônimos: <b>iminente</b> (prestes a acontecer) × <b>eminente</b> (ilustre, elevado)."),
exemplo:{
 titulo:"Exemplo: testando uma reescrita",
 enun:P("Frase original: \"Como os testes de DNA só seriam inventados dali a milênios, nenhuma das autoridades havia conseguido dar uma solução ao impasse.\" Reescrita proposta: \"Embora os testes de DNA só fossem inventados dali a milênios, nenhuma autoridade resolveu o impasse.\""),
 passos:[
  {p:"Que relação lógica o \"Como\" estabelece no original?", r:"<b>Causa</b>: a falta do teste de DNA explica por que ninguém resolveu."},
  {p:"Que relação o \"Embora\" estabelece?", r:"<b>Concessão</b>: indica um fato que deveria impedir o outro, mas não impede."},
  {p:"A reescrita mantém o sentido? Por quê?", r:"<b>Não.</b> Troca causa por concessão: passaria a sugerir que, mesmo sem DNA, se esperava uma solução, o que é o oposto da ideia original."},
  {p:"Escreva uma reescrita que mantenha o sentido.", r:"Exemplo: \"<b>Visto que</b> os testes de DNA só seriam inventados dali a milênios, nenhuma autoridade conseguiu resolver o impasse.\" (visto que / já que / uma vez que = causa)"}
 ],
 fecho:"Esse teste (identificar a relação lógica do original e da reescrita) resolve as questões 5 e 6 deste bloco."
}
});

Q("06-1",{
enun:P("De acordo com a origem da palavra \"decisão\" oferecida pelo texto, a paráfrase adequada para \"processo decisório\" é processo de:"),
ops:["escolha.","eliminação.","seleção.","definição.","preferência."], gab:"B",
dicas:["Volte às linhas 5-14: de que verbo latino vem \"decisão\" e o que ele significa?","\"Decidir é extirpar de uma situação tudo o que está atrapalhando e ficar só com o que interessa.\""],
erros:{
A:"\"Escolha\" é o sentido comum de decidir, mas a questão pede a paráfrase pela ORIGEM da palavra que o texto apresenta: caedere = cortar.",
C:"\"Seleção\" é próximo, mas o texto destaca o ato de CORTAR fora o que atrapalha, não de selecionar o que interessa.",
D:"\"Definição\" não se relaciona com \"cortar\" (caedere).",
E:"\"Preferência\" fala de gosto, não do ato de cortar fora."},
res:P("O texto diz que decisão vem de <i>caedere</i> (cortar) e que \"decidir é extirpar de uma situação tudo o que está atrapalhando\". Processo decisório = processo de <b>eliminação</b>.")
});

Q("06-2",{
enun:P("O autor define \"processos decisórios\" como \"aqueles insondáveis critérios adotados pela alta direção da empresa para chegar a decisões que o funcionário não consegue entender.\" (l. 2-5). Assinale a opção que apresenta a justificativa para tal definição."),
ops:["Na lógica empresarial, decide-se preferencialmente por soluções que favorecem o sistema e não por aquelas mais racionais.","Na salomônica lógica adotada pelas empresas, as escolhas recaem sempre sobre argumentos putativos justos e sensatos.","Para a direção de empresas, os procedimentos que orientam as decisões baseiam-se na observação do comportamento do funcionário.","Para o alto comando de empresas, métodos que apóiam decisões devem ser sustentados por critérios do interesse do sistema.","Para o corpo gerencial, as escolhas que são baseadas nos ensinamentos do curso de Tomada de Decisões são as melhores."], gab:"A",
dicas:["Leia o último parágrafo (l. 53-58): para quem a balança pende?","Por que o funcionário \"não consegue entender\"? Porque a decisão não segue o argumento mais racional."],
erros:{
B:"O texto diz o contrário: a decisão dificilmente favorece quem tem o argumento mais racional, sensato ou justo.",
C:"O texto não fala em observar o comportamento do funcionário.",
D:"Fala de interesse do sistema, mas não explica a INCOMPREENSÃO do funcionário: o ponto é que a decisão contraria o argumento mais racional.",
E:"O curso de Tomada de Decisões aparece como piada sobre as mães, não como justificativa da definição."},
res:P("L. 53-58: \"a decisão dificilmente favorece o funcionário que tem o argumento mais racional... A balança sempre pende para os putativos que trazem mais benefício para o sistema.\" Por isso os critérios são \"insondáveis\" para o funcionário. Alternativa <b>A</b>.")
});

Q("06-3",{
enun:P("As palavras \"salomônica\" em \"salomônica demonstração\" (l. 37) e \"salomão\" em \"Um gerente salomão\" (l. 43) significam, respectivamente:"),
ops:["justa e criteriosa – responsável pelas decisões.","piedosa – conhecedor das regras da empresa.","fundamentada – conhecedor da natureza humana.","sábia e consciente – comprometido com o trabalho.","clara e inquestionável – detentor de muitos poderes."], gab:"A",
dicas:["O rei Salomão é símbolo de julgamento sábio e justo.","O \"gerente salomão\" é quem, na empresa, faz o papel do rei: quem decide."],
erros:{
B:"Salomão não é símbolo de piedade, e o gerente não é descrito como conhecedor de regras.",
C:"\"Conhecedor da natureza humana\" descreve a demonstração do rei, não o papel do gerente no texto (decidir).",
D:"\"Comprometido com o trabalho\" não é o que o texto atribui ao gerente salomão; ele é quem DECIDE.",
E:"O texto não apresenta a decisão como inquestionável nem fala dos poderes do gerente."},
res:P("\"Salomônica\" = justa, criteriosa (como o julgamento de Salomão). \"Gerente salomão\" = o gerente que faz o papel do rei: o responsável pelas decisões. Alternativa <b>A</b>.")
});

Q("06-4",{
enun:P("Nas opções abaixo, as palavras ou expressões destacadas representam sínteses de trechos do texto, EXCETO em uma. Assinale-a."),
ops:["... palavra \"decisão\", <b>formada</b> a partir do verbo latino caedere... (l. 5-6)","Dependendo do prefixo <b>utilizado</b>, (l. 7)","... extirpar de uma situação <b>o atrapalhado</b>... (l. 12)","E, <b>falando</b> em cortar, (l. 14)","o gerente salomão ordenaria <b>a entrega do bebê</b> à mãe putativa B. (l. 52-53)"], gab:"C",
aviso:"gabarito definido por análise (não foi possível conferir o oficial).",
dicas:["Compare cada destaque com o trecho original: \"que se formou\", \"que se utiliza\", \"tudo o que está atrapalhando\", \"por falar em\", \"que o bebê fosse entregue\".","Em qual delas a forma reduzida muda o SENTIDO do original?"],
erros:{
A:"\"formada\" resume bem \"que se formou\", sem mudar o sentido.",
B:"\"utilizado\" resume \"que se utiliza\" sem perda de sentido.",
D:"\"falando em\" equivale a \"por falar em\": mantém a ideia de retomada do assunto.",
E:"\"a entrega do bebê\" resume \"que o bebê fosse entregue\" com o mesmo sentido."},
res:P("\"Tudo o que está atrapalhando\" = aquilo que atrapalha. \"O atrapalhado\" significa \"o que está confuso\" (quem sofre a ação): muda o sentido. Alternativa <b>C</b>.")
});

Q("06-5",{
enun:P("Indique a opção na qual as frases \"Se fosse hoje, com certeza as duas mulheres optariam pela primeira alternativa...\" (l. 39-41) e \"Aí é que entram os processos decisórios dos salomões corporativos.\" (l. 42-43) aparecem reescritas em um único período, sem alteração do sentido original."),
ops:["Caso isso acontecesse nos dias atuais, as duas mulheres fariam a mesma escolha influenciadas pelas decisões de seu gerente salomão.","No mundo de hoje, as duas mulheres levariam em consideração para decidir os critérios do rei Salomão e escolheriam a primeira opção.","Atualmente, as duas mulheres poderiam escolher a primeira possibilidade levando em conta os interesses do sistema empresarial.","Com a nova mentalidade, a escolha das duas mulheres seria por não dividir a criança, já que conheceriam as regras empresariais.","Uma vez que hoje as duas mulheres optariam pela mesma alternativa, os \"salomões corporativos\" recorreriam a processos de decisão."], gab:"E",
dicas:["Que relação lógica liga as duas frases? \"Aí é que entram\" = por isso, nesse caso, entram os processos decisórios.","Elimine as alternativas que trocam \"com certeza\" por possibilidade ou acrescentam causas não ditas."],
erros:{
A:"Acrescenta uma causa inexistente: as mulheres não escolheriam \"influenciadas pelas decisões do gerente\".",
B:"Inventa que elas usariam os critérios do rei Salomão; o texto diz que elas teriam feito um curso de Tomada de Decisões.",
C:"\"Poderiam\" enfraquece o \"com certeza\" do original, e a segunda frase (a entrada dos processos decisórios) sumiu.",
D:"O texto não fala em \"conhecer as regras empresariais\" nem omite a segunda frase dessa forma."},
res:P("Como as duas fariam a mesma escolha, entram os processos decisórios dos gerentes: relação de causa preservada por \"Uma vez que\". Alternativa <b>E</b>.")
});

Q("06-6",{
enun:P("Com base no período \"Como os testes de DNA só seriam inventados dali a milênios, nenhuma das autoridades imperiais consultadas pelas litigantes havia conseguido dar uma solução satisfatória ao impasse.\" (l. 26-29), pode-se inferir que:"),
ops:["os testes de DNA poderiam contribuir para a solução do problema.","as soluções encontradas pelas autoridades não satisfizeram às litigantes.","as supostas mães das crianças consultaram as autoridades para resolver o impasse.","só dali a muitos anos os cientistas inventariam os testes de DNA.","não havia autoridade imperial capaz de resolver o impasse."], gab:"A",
dicas:["Inferir = concluir algo que o texto não diz com todas as letras.","\"Como\" introduz a causa: se a falta do DNA impediu a solução, o que a presença dele faria?"],
erros:{
B:"O texto diz que NÃO houve solução satisfatória, não que houve soluções que não satisfizeram.",
C:"Isso está dito explicitamente (\"consultadas pelas litigantes\"); não é uma inferência.",
D:"Também está dito literalmente no texto. A questão pede o que se INFERE.",
E:"O texto atribui a falha à falta do teste de DNA, não à incapacidade das autoridades."},
res:P("Se a ausência do DNA foi a causa de ninguém resolver, conclui-se que o DNA <b>poderia contribuir</b> para a solução. Alternativa <b>A</b>.")
});

Q("06-7",{
enun:P("Assinale a opção em que a alteração, feita em relação à forma original, está correta.<br>(A) \"Dependendo do prefixo que se utiliza\" (l. 7) → Dependendo do prefixo <b>de</b> que se utiliza<br>(B) \"mas permitam-me recontá-la\" (l. 16) → ...mas <b>me</b> permitam recontá-la<br>(C) \"autoridades imperiais consultadas pelas litigantes\" (l. 27-28) → ...autoridades imperiais consultadas pel<b>o</b>s litigantes<br>(D) \"Um gerente salomão perguntaria à mãe putativa A\" (l. 43-44) → \"<b>A</b> um gerente salomão perguntaria <b>a</b> mãe putativa A\"<br>(E) \"catástrofe iminente\" (l. 32-33) → ...catástrofe <b>e</b>minente"),
ops:["(A)","(B)","(C)","(D)","(E)"], gab:"A",
aviso:"gabarito definido por análise. A (B) também é defensável, pois a próclise depois de \"mas\" é aceita por muitas gramáticas; a (A) é a única que a banca não teria como impugnar.",
dicas:["\"Utilizar-se\" é pronominal e pede a preposição de: utilizar-se DE algo.","Confira cada alteração: gênero (litigantes são as mulheres), regência de perguntar e o par iminente/eminente."],
erros:{
B:"A próclise após \"mas\" é aceita no uso, mas a alteração que a banca considera inequivocamente correta é outra. Pense na regência de \"utilizar-se\".",
C:"As litigantes são as DUAS MULHERES: o masculino \"pelos\" altera o sentido.",
D:"A inversão troca os papéis: agora é a mãe quem pergunta ao gerente. O sentido muda.",
E:"\"Eminente\" = ilustre. A catástrofe está \"iminente\" (prestes a acontecer)."},
res:P("\"Utilizar-se de algo\": o prefixo <b>de que</b> se utiliza. Alternativa <b>A</b>.")
});

Q("06-8",{
enun:P("Por meio de uma carta, os funcionários ______ aos superiores. Com respeito à regência, a forma verbal que preenche adequadamente a lacuna é:"),
ops:["chamaram.","convidaram.","cumprimentaram.","pressionaram.","responderam."], gab:"E",
dicas:["A lacuna é seguida de \"aos superiores\": o verbo precisa pedir a preposição a (objeto indireto).","Chama-se ALGUÉM, convida-se ALGUÉM... e responde-se A alguém."],
erros:{
A:"Chamar é transitivo direto: \"chamaram os superiores\", sem preposição.",
B:"Convidar é transitivo direto: \"convidaram os superiores\".",
C:"Cumprimentar é transitivo direto: \"cumprimentaram os superiores\".",
D:"Pressionar é transitivo direto: \"pressionaram os superiores\"."},
res:P("Responder (dar resposta) é transitivo indireto: responder <b>a</b> alguém ⇒ \"responderam aos superiores\". Alternativa <b>E</b>.")
});

Q("06-9",{
enun:P("A relação entre a palavra destacada e a expressão a que a mesma se refere está INCORRETA em:"),
ops:["... <b>que</b> [são aqueles insondáveis] (l. 2-3) – processo decisório.","... <b>onde</b> [veio \"decisão\"] (l. 10-11) – dis caedere.","... [recontá]-<b>la</b> (l. 16) – a célebre história.","<b>Aí</b> [é que entram] (l. 42) – primeira alternativa.","... <b>dele</b> [esperas no futuro?] (l. 45) – desse menino."], gab:"D",
dicas:["Substitua cada palavra pelo referente proposto e leia a frase.","\"Aí é que entram os processos decisórios\": entram em quê? Na alternativa ou na SITUAÇÃO descrita?"],
erros:{
A:"\"que\" retoma \"processo decisório\": \"processo decisório, que são aqueles critérios\". Relação correta. A questão pede a INCORRETA.",
B:"\"de onde veio decisão\" = de dis caedere. Correta.",
C:"\"recontá-la\" = recontar a célebre história. Correta.",
E:"\"o que esperas dele\" = desse menino. Correta."},
res:P("\"Aí\" retoma a SITUAÇÃO (as duas optariam pela mesma alternativa), não a expressão \"primeira alternativa\". Alternativa <b>D</b>.")
});

Q("06-10",{
enun:P("Assinale a opção em que o sinal de dois pontos tem a mesma função apresentada em \"Mas, obviamente, uma das duas está mentindo: havia perdido o seu bebê e, para compensar a dor, surrupiara o filho da outra.\" (l. 24-26)"),
ops:["O diretor apresentou dados convincentes: a pesquisa de opinião, o último balanço da empresa e cartas de clientes.","Os critérios adotados para admissão de funcionários são sempre os mesmos: organização, competência e capacidade de trabalhar em equipe.","Tomar decisões em momentos de crise pode ser danoso: muitas vezes um impulso substitui o bom-senso.","Dois motivos o levaram a pedir demissão: uma nova oferta de trabalho e a possibilidade de trabalhar no exterior.","Quando soube que não seria promovido, ele fez o seguinte: mandou uma carta para a vice-presidência e marcou uma reunião com a equipe."], gab:"C",
dicas:["No original, depois dos dois-pontos vem uma EXPLICAÇÃO de por que uma está mentindo.","Separe as alternativas em: enumeração de itens × explicação/justificativa."],
erros:{
A:"Depois dos dois-pontos vem uma LISTA (pesquisa, balanço, cartas): enumeração.",
B:"Enumeração dos critérios.",
D:"Enumeração dos dois motivos.",
E:"Detalha \"o seguinte\" com uma sequência de ações: tem caráter enumerativo/especificativo, não de justificativa."},
res:P("No original, os dois-pontos introduzem a explicação de \"uma está mentindo\". Em (C) também: \"pode ser danoso: muitas vezes um impulso substitui o bom-senso\" (justificativa). Alternativa <b>C</b>.")
});

/* ---------- 2008 ---------- */
B({
id:"pt08", titulo:"Português 2008: pressuposição, colocação pronominal e verbos",
sub:"Texto \"Dinheiro traz felicidade?\". Pressupostos, referência, reescrita, conectores, colocação pronominal, conjugação, concordância e regência.",
texto:["t08pt_a","t08pt_b"],
objetivos:["Reconhecer marcas de pressuposição (realmente, de fato, ainda, já, deixar de)","Aplicar as regras de próclise (palavras atrativas) e saber quando ela é proibida","Conjugar verbos em -ear e -iar (premiar × incendiar)","Concordar verbos impessoais e o sujeito posposto","Regência de aludir, constituir-se, compelir"],
qs:["08-1","08-2","08-3","08-4","08-5","08-6","08-7","08-8","08-9","08-10"],
aula:
"<h3>1. Pressuposição</h3>"+
P("Pressuposto é o que a frase dá como já sabido. Palavras como <b>realmente, de fato, ainda, já, voltou a, deixou de</b> confirmam ou retomam uma ideia que se supunha. \"Eles são de fato mais felizes\" pressupõe que já se esperava isso.")+
"<h3>2. Colocação pronominal (norma-padrão)</h3>"+
"<ul><li><b>Próclise obrigatória</b> com palavras atrativas: negativas (não, nunca), advérbios (já, sempre, ainda), pronomes relativos (que), conjunções subordinativas (como, quando, se), pronomes indefinidos (poucos, ninguém), e na comparação (do que se imaginava).</li><li><b>Proibido</b> começar oração com pronome oblíquo átono: \"Nos acostumamos\" ✗ ⇒ \"Acostumamo-nos\".</li><li><b>Futuro do presente/pretérito</b> não admite ênclise: mesóclise (dir-lhe-ia) ou próclise com atrativo.</li><li>Com sujeito substantivo sem atrativo, próclise e ênclise são aceitas: \"o ser humano adapta-se / se adapta\".</li></ul>"+
"<h3>3. Verbos em -ear e -iar</h3>"+
P("Verbos em <b>-ear</b> ganham \"ei\" nas formas rizotônicas (nomeio, nomeiem). Em <b>-iar</b> são regulares (premio, premia), exceto <b>M</b>ediar, <b>A</b>nsiar, <b>R</b>emediar, <b>I</b>ncendiar, <b>O</b>diar (MARIO), que se conjugam como -ear: anseia, incendeia, odeia.")+
"<h3>4. Concordância</h3>"+
"<ul><li>Sujeito posposto concorda normalmente: \"Aconteceram vários fatores\".</li><li><b>Haver</b> (existir/tempo) é impessoal: \"Há 50 anos\"; <b>vir aumentando</b> concorda com o sujeito \"os índices vêm\".</li></ul>"+
"<h3>5. Regências</h3>"+
P("Aludir <b>a</b> (não \"sobre\"); compelir alguém <b>a</b>; confrontar-se <b>com</b>; constituir-se <b>em/de</b>."),
exemplo:{
 titulo:"Exemplo: onde vai o pronome?",
 enun:P("Para cada frase, decida a colocação do pronome na norma-padrão."),
 passos:[
  {p:"\"Ninguém ___ avisou (me).\" Próclise ou ênclise? Por quê?", r:"<b>Próclise</b>: \"Ninguém me avisou\". Pronome indefinido é palavra atrativa."},
  {p:"\"___ disseram a verdade (nos).\" no início da frase.", r:"<b>Ênclise</b>: \"Disseram-nos a verdade\". Não se inicia frase com pronome átono."},
  {p:"\"Eu ___ diria (lhe)\" sem o \"Eu\", começando pelo verbo.", r:"<b>Mesóclise</b>: \"Dir-lhe-ia\". Futuro do pretérito não aceita ênclise; sem atrativo, usa-se a mesóclise."},
  {p:"\"O funcionário adaptou-se.\" Pode inverter?", r:"<b>Sim</b>: \"O funcionário se adaptou\". Sujeito substantivo, sem palavra atrativa: as duas formas são aceitas."}
 ],
 fecho:"Esse é o raciocínio da questão 7. A 2018 cobra o mesmo tema (pt18, questão 8)."
}
});

Q("08-1",{
enun:P("No texto, são palavras que indicam idéias antagônicas:"),
ops:["embora e portanto.","paradoxo e contradição.","enigma e diagnóstico.","decrescente e subjetivo.","dificilmente e relativamente."], gab:"B",
dicas:["A pergunta não é se as duas palavras se opõem entre si, mas se cada uma INDICA ideias que se opõem.","O que é um paradoxo? E uma contradição?"],
erros:{
A:"\"Embora\" indica concessão e \"portanto\" conclusão. Nenhuma das duas, por si, nomeia ideias antagônicas.",
C:"Enigma (mistério) e diagnóstico (identificação) não designam ideias contrárias.",
D:"Adjetivos sem relação de oposição de ideias.",
E:"Advérbios de modo/intensidade; não indicam ideias antagônicas."},
res:P("Paradoxo e contradição são palavras que designam a coexistência de ideias opostas (renda cresce, felicidade não). Alternativa <b>B</b>.")
});

Q("08-2",{
enun:P("Analise as sentenças: I – \"Somos mais saudáveis e vivemos mais – tudo isso aumentou realmente o nosso bem-estar.\" (l. 6-7) II – \"O conforto material tem uma 'utilidade marginal decrescente'.\" (l. 20-22) III – \"E aquelas que conseguem dar sentido para a vida são de fato mais felizes do que as que passam de uma diversão para outra.\" (l. 52-54). A(s) sentença(s) que contém(êm) palavras ou expressões que indicam que a idéia apresentada era pressuposta é(são) APENAS"),
ops:["I","II","III","I e III","II e III"], gab:"D",
dicas:["Procure palavras que confirmam uma ideia já esperada.","\"realmente\" e \"de fato\" funcionam da mesma forma."],
erros:{
A:"I tem \"realmente\", mas III tem \"de fato\", que também confirma uma ideia pressuposta.",
B:"II é uma afirmação sem marca de pressuposição.",
C:"III está certa, mas I também traz \"realmente\".",
E:"II não tem marcador de pressuposição."},
res:P("\"Realmente\" (I) e \"de fato\" (III) confirmam ideias que já se supunham. Alternativa <b>D</b>.")
});

Q("08-3",{
enun:P("A coluna da esquerda contém palavras que se referem aos trechos da coluna da direita, SALVO em:<br>(A) \"Esta observação surpreendente...\" (l. 8) → \"Embora a renda per capita dos países industrializados [...], nossa felicidade não aumentou em nada.\" (l. 1-3)<br>(B) \"...um enigma...\" (l. 11) → \"'paradoxo da abundância'.\" (l. 11-12)<br>(C) \"...o problema:\" (l. 14) → \"a pesquisa empírica da felicidade.\" (l. 14-15)<br>(D) \"...ao mesmo diagnóstico dos economistas.\" (l. 20) → \"O conforto material tem uma 'utilidade marginal decrescente'.\" (l. 20-22)<br>(E) \"... pela nova ciência.\" (l. 42) → \"... pesquisa da felicidade,\" (l. 41)"),
ops:["(A)","(B)","(C)","(D)","(E)"], gab:"C",
dicas:["Leia a linha 14 inteira: a nova disciplina vai examinar o problema. O que vem depois dos dois-pontos é o problema ou o nome da disciplina?"],
erros:{
A:"A observação surpreendente é justamente que a renda dobrou e a felicidade não aumentou. Referência correta.",
B:"O enigma \"se chama paradoxo da abundância\". Referência correta.",
D:"O diagnóstico dos economistas é a utilidade marginal decrescente. Correta.",
E:"A nova ciência é a pesquisa da felicidade. Correta."},
res:P("\"O problema\" é o paradoxo da abundância. \"A pesquisa empírica da felicidade\" é a nova DISCIPLINA que vai examiná-lo. Alternativa <b>C</b>.")
});

Q("08-4",{
enun:P("\"Ao que tudo indica, parece existir um limite em que a abundância crescente proporciona bem-estar.\" (l. 30-31). O período que reescreve adequadamente o trecho, sem alteração de sentido, é:"),
ops:["Os índices mostram que existe um limite em que a fartura leva ao bem-estar, de acordo com enquetes.","Bem-estar e abundância estão em proporções inversas, como mostram as pesquisas.","Há um limite que indica a falta de relação direta entre abundância e bem-estar, conforme o que é verificado.","Segundo os dados, deve haver um limite em que o bem-estar não cresce com o aumento da fartura.","O limite indicado existe para mostrar que o crescimento da abundância é inverso ao do bem-estar."], gab:"D",
dicas:["O original tem duas marcas de incerteza: \"ao que tudo indica\" e \"parece\". A reescrita precisa manter o tom hipotético.","A ideia: até certo ponto a abundância traz bem-estar; depois disso, não."],
erros:{
A:"\"mostram que existe\" transforma hipótese em certeza.",
B:"O texto não diz que são inversamente proporcionais; diz que há um limite.",
C:"\"Falta de relação direta\" generaliza: até o limite, há relação.",
E:"\"Crescimento inverso\" distorce: o bem-estar deixa de crescer, não passa a diminuir."},
res:P("\"Deve haver\" mantém a hipótese; \"limite em que o bem-estar não cresce com o aumento da fartura\" expressa o mesmo ponto de saturação. Alternativa <b>D</b>.")
});

Q("08-5",{
enun:P("A disciplina mencionada no início do terceiro parágrafo é \"interdisciplinar\" porque"),
ops:["conjuga dados de várias áreas do conhecimento.","busca as fontes do \"bem-estar subjetivo\".","contabiliza os resultados em cifras precisas.","indica caminhos para a conquista da felicidade.","apresenta resultados inovadores."], gab:"A",
dicas:["Leia a frase seguinte à palavra \"interdisciplinar\" (l. 17-18)."],
erros:{
B:"Isso diz O QUE ela pesquisa, não por que é interdisciplinar.",
C:"O texto não fala em cifras precisas como característica da disciplina.",
D:"Indicar caminhos não é o que define \"interdisciplinar\".",
E:"Ser inovadora não é o mesmo que reunir várias disciplinas."},
res:P("\"Ela reúne Biologia, Psicologia, Sociologia e Economia\" ⇒ conjuga várias áreas. Alternativa <b>A</b>.")
});

Q("08-6",{
enun:P("A expressão destacada em \"<b>Em vez de</b> nos deixarmos levar pelos resultados da pesquisa da felicidade,\" (l. 40-41) pode ser substituída, alterando o sentido mas sem alterar a estrutura do período, por"),
ops:["Se.","Caso.","Talvez.","Entretanto.","Embora."], gab:"A",
dicas:["O verbo seguinte é \"deixarmos\". Ele precisa continuar servindo.","\"deixarmos\" também é a forma do futuro do subjuntivo. Qual conjunção pede futuro do subjuntivo?"],
erros:{
B:"\"Caso\" pede presente do subjuntivo: \"caso nos deixemos\". A estrutura mudaria.",
C:"\"Talvez\" pede subjuntivo presente (\"talvez nos deixemos\") e não forma oração subordinada com o resto.",
D:"\"Entretanto\" é coordenativa adversativa e exigiria um verbo flexionado no indicativo.",
E:"\"Embora\" pede presente do subjuntivo: \"embora nos deixemos\"."},
res:P("\"<b>Se</b> nos deixarmos levar...\": \"deixarmos\" passa a ser futuro do subjuntivo, mesma forma. Muda o sentido (condição), mas a estrutura fica. Alternativa <b>A</b>.")
});

Q("08-7",{
enun:P("Observe os pronomes oblíquos destacados: \"Como já <b>se</b> sabia, o ser humano adapta-<b>se</b> rapidamente a novas condições de vida. O que a pesquisa da felicidade nos ensinou foi o fato de a nossa capacidade de adaptação ser ainda maior do que <b>se</b> imaginava. Acostumamo-<b>nos</b> a quase tudo e há coisas das quais nunca <b>nos</b> enfadamos.\" Segundo a norma culta, é possível inverter a colocação do pronome apenas em"),
ops:["sabia-se.","se adapta.","imaginava-se.","Nos acostumamos.","enfadamo-nos."], gab:"B",
dicas:["Para cada pronome, existe uma palavra atrativa antes dele? Ele está no início da frase?","\"já\", \"do que\" e \"nunca\" são atrativos."],
erros:{
A:"\"já\" é advérbio atrativo: a próclise \"já se sabia\" é obrigatória.",
C:"\"do que\" (comparação) atrai o pronome: \"do que se imaginava\".",
D:"Não se inicia frase com pronome átono na norma-padrão.",
E:"\"nunca\" é palavra negativa, atrativa: \"nunca nos enfadamos\"."},
res:P("\"o ser humano adapta-se\": sujeito substantivo sem atrativo, a próclise \"se adapta\" é aceita. Alternativa <b>B</b>.")
});

Q("08-8",{
enun:P("A forma verbal em negrito NÃO está conjugada corretamente em"),
ops:["A natureza <b>premia</b> com felicidade ou infelicidade.","É importante que <b>nomeiem</b> logo o diretor.","Chegue cedo para que <b>principiemos</b> a reunião na hora.","O ser humano <b>anseia</b> por uma felicidade perene.","O professor <b>incendia</b> o debate com perguntas polêmicas."], gab:"E",
dicas:["Lembre o MARIO: Mediar, Ansiar, Remediar, Incendiar, Odiar conjugam-se como verbos em -ear."],
erros:{
A:"Premiar é regular: eu premio, ele premia. Correto.",
B:"Nomear (-ear) ganha ei: que eles nomeiem. Correto.",
C:"Principiar é regular: que principiemos. Correto.",
D:"Ansiar está no MARIO: ele anseia. Correto."},
res:P("Incendiar está no MARIO: ele <b>incendeia</b>. Alternativa <b>E</b>.")
});

Q("08-9",{
enun:P("A concordância verbal está ERRADA em"),
ops:["Nos últimos 50 anos, ocorreram fatos que aumentaram o nosso índice de felicidade.","Há 50 anos que os índices de felicidade vêm aumentando gradativamente.","Aconteceu vários fatores que proporcionaram o aumento da felicidade.","Nos últimos 50 anos, acentuaram-se as possibilidades de maior felicidade.","Daqui a mais 50 anos, é possível que a maioria das pessoas encontre a felicidade."], gab:"C",
dicas:["Ache o sujeito de cada verbo, mesmo quando ele vem depois."],
erros:{
A:"\"ocorreram fatos\": sujeito \"fatos\", plural. Correto.",
B:"\"Há\" (tempo) é impessoal; \"os índices vêm\" concorda com o sujeito. Correto.",
D:"\"acentuaram-se as possibilidades\" (voz passiva): sujeito plural. Correto.",
E:"\"a maioria das pessoas encontre\": com coletivo partitivo, o singular é aceito. Correto."},
res:P("O sujeito \"vários fatores\" está posposto e é plural: \"<b>Aconteceram</b> vários fatores\". Alternativa <b>C</b>.")
});

Q("08-10",{
enun:P("Assinale a opção em que a preposição destacada NÃO está de acordo com a norma culta da língua portuguesa."),
ops:["<b>Para</b> mim, procurar a felicidade não é o essencial.","Para alguns, ser feliz constitui-se <b>em</b> ter fartura somente.","O homem moderno está compelido <b>a</b> buscar bens materiais.","O texto alude <b>sobre</b> o aumento de felicidade, de modo geral.","Há pessoas que se confrontam <b>com</b> a escolha entre o material e o espiritual."], gab:"D",
dicas:["Que preposição o verbo \"aludir\" pede?"],
erros:{
A:"\"Para mim\" (opinião) está correto; \"mim\" não é sujeito de infinitivo aqui.",
B:"\"Constituir-se em\" (= consistir em) é aceito.",
C:"Compelir alguém A fazer algo: correto.",
E:"Confrontar-se COM algo: correto."},
res:P("Aludir = fazer referência <b>a</b>: \"O texto alude ao aumento de felicidade\". Alternativa <b>D</b>.")
});

/* ---------- 2011 ---------- */
B({
id:"pt11", titulo:"Português 2011: crase, pontuação, porquês e ortografia",
sub:"Texto \"Um pouco de silêncio\" (Lya Luft). Valores de \"mesmo\" e \"se\", norma-padrão, pontuação, porquês, voz passiva pronominal, ortografia e verbos irregulares.",
texto:["t11pt_a","t11pt_b"],
objetivos:["Distinguir os valores de \"mesmo\" e de \"se\"","Usar os quatro porquês","Reconhecer voz passiva pronominal (sintética)","Pontuar sem separar sujeito e verbo","Conjugar verbos derivados (rever, deter, opor) e defectivos (reaver)"],
qs:["11-1","11-2","11-3","11-4","11-5","11-6","11-7","11-8","11-9","11-10"],
aula:
"<h3>1. \"Mesmo\" e \"se\"</h3>"+
"<ul><li><b>Mesmo:</b> reforço (= próprio: \"ele mesmo\"), inclusão (= até: \"mesmo o mais sagaz\"), concessão (\"mesmo que\"), afirmação (= realmente: \"acertou mesmo\").</li><li><b>Se:</b> conjunção condicional (= caso), integrante (\"não sei se\"), pronome reflexivo (\"cuidar-se\"), partícula apassivadora (\"vendem-se casas\"), índice de indeterminação (\"precisa-se de\").</li></ul>"+
"<h3>2. Os porquês</h3>"+
"<ul><li><b>por que</b>: pergunta, ou = pelo qual / por qual razão (\"Ignoro por que razão\").</li><li><b>por quê</b>: no fim da frase (\"tantas dúvidas, por quê?\").</li><li><b>porque</b>: explicação/causa (\"ficaram tranquilas porque...\").</li><li><b>porquê</b>: substantivo, com artigo (\"o porquê de tanta pressa\").</li></ul>"+
"<h3>3. Voz passiva pronominal</h3>"+
P("Verbo transitivo direto + se, e o \"paciente\" é sujeito: \"não se arrumou ninguém\" = ninguém foi arrumado. Com verbo pronominal (arrepender-se, queixar-se) ou reflexivo (recolher-se), não há passiva.")+
"<h3>4. Pontuação</h3>"+
"<ul><li>Nunca separe sujeito e verbo com vírgula.</li><li>Ponto de interrogação em perguntas diretas, mesmo começadas por \"por que\".</li><li>Vírgula separa termos coordenados sem conjunção (\"um para você, outro para mim\").</li></ul>"+
"<h3>5. Verbos que derrubam</h3>"+
P("Rever segue ver (ele reviu); deter segue ter (ele deteve); opor segue pôr (quando você se opuser); reaver só tem as formas em que o verbo haver mantém o \"v\" (reouve, reaveremos; não existe \"reavejo\").")+
TRAP("ortografia que mais cai: privilégio, cogitar, possui, trás (atrás), hesitar, bege, mobília."),
exemplo:{
 titulo:"Exemplo: classificando o \"se\"",
 enun:P("Classifique o \"se\" em cada frase."),
 passos:[
  {p:"\"Se chover, fico em casa.\"", r:"<b>Conjunção condicional</b> (= caso chova)."},
  {p:"\"Não sei se ele vem.\"", r:"<b>Conjunção integrante</b>: introduz o objeto de \"sei\" (não sei ISSO)."},
  {p:"\"Ela se olhou no espelho.\"", r:"<b>Pronome reflexivo</b>: ela olhou a si mesma."},
  {p:"\"Alugam-se salas.\"", r:"<b>Partícula apassivadora</b>: salas são alugadas (sujeito \"salas\", por isso o plural)."}
 ],
 fecho:"Na questão 2, as duas ocorrências precisam seguir a mesma ordem de funções do original."
}
});

Q("11-1",{
enun:P("No trecho \"ou se enxerga outro ângulo de nós mesmos.\" (l. 37-38), o sentido da palavra <b>mesmo</b> equivale àquele usado em:"),
ops:["Ele mesmo falou com a escritora.","Mesmo a pessoa mais sagaz não perceberia o erro.","Mesmo que eu me vá, a festa continuará animada.","Ele acertou mesmo a questão.","Só mesmo o diretor para resolver esta questão."], gab:"A",
dicas:["Em \"nós mesmos\", \"mesmo\" reforça o pronome (= nós próprios)."],
erros:{
B:"Aqui \"mesmo\" = até, inclusive.",
C:"\"Mesmo que\" é locução concessiva (= ainda que).",
D:"\"acertou mesmo\" = acertou realmente.",
E:"\"Só mesmo\" = somente, apenas (reforço de exclusão)."},
res:P("\"Nós mesmos\" e \"ele mesmo\": reforço do pronome (= próprio). Alternativa <b>A</b>.")
});

Q("11-2",{
enun:P("Observe as palavras \"se\" no trecho \"<b>se</b> não <b>se</b> cuidar botam numa jaula: um animal estranho.\" (l. 16-17). Afirma-se corretamente que ambas apresentam, respectivamente, as mesmas funções das palavras destacadas em:"),
ops:["Tire um tempo livre <b>se</b> quiser <b>se</b> tratar.","Ele <b>se</b> considera sabido <b>se</b> acerta todas as questões.","O consumidor virá queixar-<b>se</b>, <b>se</b> você não devolver o produto.","Formaram-<b>se</b> diversos grupos para debater <b>se</b> é o melhor momento.","<b>Se</b> ele desconhecia <b>se</b> ia adotar uma nova política, por que tocou no assunto?"], gab:"A",
dicas:["No original: 1º se = condição (caso não se cuide); 2º se = pronome (cuidar-se).","A ordem importa: primeiro a conjunção condicional, depois o pronome."],
erros:{
B:"Mesmos tipos, ordem invertida: primeiro o pronome, depois a condição.",
C:"Também invertida: queixar-se (pronome) e depois a condicional.",
D:"Partícula apassivadora (formaram-se grupos) e conjunção integrante (debater se).",
E:"Condicional/causal e depois integrante (desconhecia se)."},
res:P("\"<b>se</b> quiser\" (condicional) e \"<b>se</b> tratar\" (pronome reflexivo), na mesma ordem do original. Alternativa <b>A</b>.")
});

Q("11-3",{
enun:P("Embora no texto predomine o emprego da norma-padrão, em algumas passagens se cultiva um registro semiformal. O fragmento transposto corretamente para a norma-padrão é:"),
ops:["\"Quem não corre com a manada (...)\" (l. 15) / Quem não corre a manada","\"notamos as frestas (...)\" (l. 36) / notamos às frestas","\"Chegamos em casa (...)\" (l. 48) / Chegamos a casa","\"(...) assistir a um programa:\" (l. 49-50) / assistir à um programa","\"trazendo à tona (...)\" (l. 52) / trazendo há tona"], gab:"C",
dicas:["Que verbo do texto tem uma regência coloquial diferente da norma? Pense em verbos de movimento.","Na norma, quem chega, chega A algum lugar."],
erros:{
A:"\"correr com\" (acompanhar) já está adequado; tirar a preposição muda o sentido.",
B:"\"notar\" é transitivo direto: \"notamos as frestas\". Não cabe crase.",
D:"Não há crase antes de artigo indefinido (\"um\").",
E:"\"à tona\" é locução com crase; \"há\" é verbo haver."},
res:P("Na norma, chegar pede <b>a</b>: \"Chegamos <b>a</b> casa\" (sem crase, pois \"casa\" no sentido de lar não leva artigo). Alternativa <b>C</b>.")
});

Q("11-4",{
enun:P("A mudança na pontuação mantém o sentido da frase original, preservando a norma-padrão, em:"),
ops:["\"Nesta trepidante cultura nossa, da agitação e do barulho, gostar de sossego é uma excentricidade.\" (l. 1-2) / Nesta trepidante cultura nossa da agitação e do barulho gostar de sossego é uma excentricidade.","\"algumas que não combinam conosco nem nos interessam.\" (l. 6-7) / algumas que não combinam conosco, nem nos interessam.","\"Quem não corre com a manada praticamente nem existe,\" (l. 15-16) / Quem não corre, com a manada praticamente nem existe,","\"disparamos sem rumo – ou em trilhas determinadas – feito hamsters (...)\" (l. 19-20) / disparamos sem rumo ou em trilhas determinadas feito hamsters","\"Estar sozinho é considerado humilhante,\" (l. 26) / Estar sozinho, é considerado humilhante,"], gab:"B",
dicas:["Teste duas coisas: o sentido mudou? Alguma vírgula separou sujeito e verbo ou deixou de isolar um termo deslocado?"],
erros:{
A:"Sem as vírgulas, \"da agitação e do barulho\" vira restritivo e o adjunto anteposto fica colado ao sujeito \"gostar de sossego\": a leitura muda e a pontuação fica inadequada.",
C:"A vírgula depois de \"corre\" muda o sentido: \"com a manada\" passa a se ligar a \"nem existe\".",
D:"Sem os travessões, \"feito hamsters\" passa a modificar só \"trilhas determinadas\".",
E:"Vírgula entre sujeito (\"Estar sozinho\") e verbo é erro."},
res:P("A vírgula antes de \"nem\" em orações coordenadas é facultativa e não altera o sentido. Alternativa <b>B</b>.")
});

Q("11-5",{
enun:P("No diálogo, cada fala corresponde a um número. I — Por que ele adquiriu somente um ingresso! II — Comprou dois: um para você outro para mim. III — Mas ele saiu daqui dizendo: \"Só comprarei o meu!\" IV — Pelo visto você acredita em tudo, o que ele diz. Em relação ao diálogo, a pontuação está correta APENAS em"),
ops:["I","III","I e II","II e IV","III e IV"], gab:"B",
dicas:["I é uma pergunta. II tem uma enumeração com dois itens. IV tem uma vírgula entre o verbo e o complemento."],
erros:{
A:"I é uma pergunta direta: exige ponto de interrogação, não de exclamação.",
C:"I deveria terminar com \"?\" e II precisa de vírgula: \"um para você, outro para mim\".",
D:"II falta vírgula entre os itens; IV tem vírgula separando \"tudo\" de \"o que ele diz\" (que o especifica).",
E:"IV separa indevidamente \"tudo\" de \"o que ele diz\" e deixa \"Pelo visto\" sem vírgula."},
res:P("Só III está correta: dois-pontos antes da citação e exclamação dentro dela. Alternativa <b>B</b>.")
});

Q("11-6",{
enun:P("Complete as frases da segunda coluna com a expressão adequada (I – por que; II – porque; III – porquê). P – As pessoas ficaram tranquilas ______ não tiveram de refazer o trabalho. Q – Não sei o ______ de tanta preocupação com a pressa. R – Afinal, tantas dúvidas com a terapia, ______? S – Ignoro ______ razão as pessoas não se habituam à solidão. As associações corretas são:"),
ops:["I – P, II – S, III – Q","I – S, II – P, III – Q","I – S, II – R, III – P","I – R, II – P, III – S","I – Q, II – R, III – P"], gab:"B",
dicas:["P é explicação (causa). Q tem artigo (\"o ___\"). S = \"por qual razão\". R está no fim da pergunta: pediria \"por quê\", que não está na lista."],
erros:{
A:"\"porque\" (explicação) cabe em P, não em S. Em S, \"por que razão\" = por qual razão.",
C:"Em R, no fim da frase, seria \"por quê\" (acentuado), forma que não está entre as opções. E \"porquê\" com artigo cabe em Q.",
D:"\"por que\" sem acento não vai no fim de frase (R). E \"porquê\" é substantivo: cabe em Q, com o artigo.",
E:"Q tem artigo (\"o\"), então é \"porquê\"; \"porque\" não cabe em R."},
res:P("P = <b>porque</b> (II, causa); Q = o <b>porquê</b> (III, substantivo); S = <b>por que</b> razão (I). R ficaria \"por quê\", fora da lista. Alternativa <b>B</b>.")
});

Q("11-7",{
enun:P("O trecho em que se encontra voz passiva pronominal é:"),
ops:["\"feito hamsters que se alimentam de sua própria agitação.\" (l. 20-21)","\"Recolher-se em casa,\" (l. 23)","\"sinal de que não se arrumou ninguém\" (l. 26-27)","\"Mas, se a gente aprende a gostar (...)\" (l. 55)","\"nela a gente se refaz (...)\" (l. 65)"], gab:"C",
dicas:["Voz passiva pronominal: verbo transitivo direto + se, com o paciente como sujeito. Transforme em passiva analítica (ser + particípio) para testar."],
erros:{
A:"\"alimentam-se de\": pronome reflexivo (os hamsters alimentam a si mesmos), não passiva.",
B:"\"Recolher-se\" é reflexivo/pronominal (recolher a si mesmo).",
D:"\"se\" é conjunção condicional.",
E:"\"se refaz\" é reflexivo: a gente refaz a si mesma."},
res:P("\"não se arrumou ninguém\" = ninguém foi arrumado (passiva analítica). Alternativa <b>C</b>.")
});

Q("11-8",{
enun:P("A explicação correta, de acordo com a norma-padrão, para a pontuação utilizada no texto, é a de que"),
ops:["a vírgula em \"É indispensável circular, estar enturmado.\" (l. 14) indica uma relação de explicação entre os termos coordenados.","os dois pontos em \"se não se cuidar botam numa jaula: um animal estranho.\" (l. 16-17) assinalam a ideia de consequência.","as aspas em \"(...) se 'arrumasse' (...)\" (l. 28) acentuam o sentido de organização do verbo \"arrumar\".","os dois pontos em \"(...) pensamos em depressão: quem sabe terapia e antidepressivo?\" (l. 30-31) indicam dúvida entre duas possibilidades distintas.","a vírgula antes do \"e\" em \"transa, ganha dinheiro, e come, envelhece,\" (l. 43) marca a diferença entre dois tipos de enumeração."], gab:"E",
dicas:["Leia a linha 43 em voz alta: há dois blocos de ações. O que a vírgula antes do \"e\" separa?"],
erros:{
A:"A vírgula separa termos coordenados de uma enumeração, sem relação de explicação.",
B:"Os dois-pontos introduzem uma explicação/aposto (o que você vira: um animal estranho), não consequência.",
C:"As aspas marcam o uso irônico de \"arrumar\" no sentido de \"conseguir\" (como se amor se comprasse), não de \"organizar\".",
D:"Os dois-pontos introduzem o que se pensa (a reação), não uma dúvida entre duas possibilidades."},
res:P("A vírgula antes do \"e\" separa dois grupos de ações (as do cotidiano: paga contas, transa, ganha dinheiro; e as da vida que passa: come, envelhece). Alternativa <b>E</b>.")
});

Q("11-9",{
enun:P("A frase em que todas as palavras estão escritas de forma correta, conforme a ortografia da Língua Portuguesa, é:"),
ops:["Foi um previlégio ser acompanhado pelo advogado do sindicato.","Estão cojitando de fabricar salas acústicas.","A senhora possue algumas horas para tirar a cesta.","O lado de traz segue até à sala de descanso.","Estava hesitante sobre a escolha do bege claro para a mobília."], gab:"E",
dicas:["Confira: privilégio, cogitar, possui, trás."],
erros:{
A:"O correto é \"privilégio\".",
B:"O correto é \"cogitando\" (com g).",
C:"O correto é \"possui\" (verbos em -uir: possui, constitui).",
D:"\"Traz\" é do verbo trazer; o advérbio é \"trás\" (o lado de trás)."},
res:P("\"hesitante\", \"bege\" e \"mobília\" estão corretos. Alternativa <b>E</b>.")
});

Q("11-10",{
enun:P("A sentença em que o verbo entre parênteses está corretamente flexionado é"),
ops:["O coordenador reveu as necessidades dos grupos. (rever)","A impaciência deteu as pessoas. (deter)","Eu reavejo minhas convicções diariamente. (reaver)","Quando você se opor à minha solidão, ficarei aborrecido. (opor)","Nós apreciamos os bons alunos. (apreciar)"], gab:"E",
dicas:["Derivados seguem o verbo primitivo: rever → ver; deter → ter; opor → pôr."],
erros:{
A:"Rever segue ver: ele viu ⇒ ele <b>reviu</b>.",
B:"Deter segue ter: ele teve ⇒ ele <b>deteve</b>.",
C:"Reaver é defectivo: não tem 1ª pessoa do presente (\"reavejo\" não existe).",
D:"Futuro do subjuntivo de opor (como pôr: quando você puser): \"quando você se <b>opuser</b>\"."},
res:P("\"Nós apreciamos\" está correto (verbo regular). Alternativa <b>E</b>.")
});

/* ---------- 2018 ---------- */
B({
id:"pt18", titulo:"Português 2018: Machado de Assis, regência e crase",
sub:"Texto de Memórias Póstumas de Brás Cubas. Inferência, metáfora, conectores, reticências, regência, colocação pronominal, crase e concordância.",
texto:["t18pt_a"],
objetivos:["Inferir sentimentos e intenções de personagens em texto literário","Reconhecer metáforas","Identificar a relação semântica de conectores (como = causa)","Classificar a transitividade dos verbos","Aplicar crase e concordância em casos clássicos"],
qs:["18-1","18-2","18-3","18-4","18-5","18-6","18-7","18-8","18-9","18-10"],
aula:
"<h3>1. Texto literário</h3>"+
P("Em Machado, o sentido vem por metáforas e ironia. A política vira \"teatro\", a confiança cresce de \"fresta\" a \"porta escancarada\", a desilusão é uma \"carcoma\" (cupim que corrói por dentro). Pergunte sempre: o que a imagem representa?")+
"<h3>2. Conectores</h3>"+
P("\"Como\" no início da frase, com verbo no subjuntivo ou indicativo, costuma indicar <b>causa</b>: \"Como adorasse a mulher, não se vexava de mo dizer\" (= porque adorava). Também pode ser comparação (\"como um rei\") ou conformidade (\"como disse\").")+
"<h3>3. Regência e transitividade</h3>"+
P("<b>VTD</b>: adorar algo; fatigar alguém. <b>VTDI</b>: referir/confessar/dizer algo A alguém. <b>Intransitivo</b>: entrar (com adjunto). <b>Ligação</b>: ser, estar, parecer.")+
"<h3>4. Crase</h3>"+
"<ul><li>Precisa de preposição \"a\" + artigo/pronome \"a\": refere-se <b>à</b>quele, <b>à</b> qual (se o verbo pedir \"a\").</li><li>Não há crase antes de verbo (a partir), de palavra masculina, nem em \"a\" singular antes de palavra plural (a apresentações ✗ ⇒ às apresentações).</li><li>Tempo futuro: \"daqui <b>a</b> duas horas\" (preposição, sem artigo).</li></ul>"+
"<h3>5. Concordância</h3>"+
"<ul><li>\"Mais de um\" ⇒ verbo no singular.</li><li><b>Fazer</b> (tempo) e <b>haver</b> (existir) são impessoais: \"Faz quinze anos\", \"havia mais de trinta\".</li><li>VTI + se = índice de indeterminação ⇒ singular: \"Necessita-se de políticos\".</li><li>VTD + se = passiva ⇒ concorda: \"Reeleger-se-ão os políticos\".</li></ul>",
exemplo:{
 titulo:"Exemplo: crase em quatro testes",
 enun:P("Decida se há crase em cada caso."),
 passos:[
  {p:"\"Refiro-me ___ aquela proposta.\"", r:"<b>Àquela</b>: referir-se pede \"a\" + pronome \"aquela\"."},
  {p:"\"Chegaremos daqui ___ duas horas.\"", r:"<b>a</b> (sem crase): tempo futuro, só preposição."},
  {p:"\"Assisti ___ apresentações.\"", r:"<b>às</b> (com crase, plural) ou \"a apresentações\" (sem artigo, genérico). \"à apresentações\" é sempre errado."},
  {p:"\"A empresa, ___ qual dediquei anos, faliu.\"", r:"<b>à qual</b>: dedicar algo A ela ⇒ a + a qual. Já em \"a qual não quero\" (querer, VTD) não há crase."}
 ],
 fecho:"A questão 9 testa exatamente esses quatro casos."
}
});

Q("18-1",{
enun:P("Com base na leitura do texto, entende-se que o desabafo de Lobo Neves ao longo do texto deve-se à sua insatisfação com a(o)"),
ops:["vida pública","sua família","seu casamento","teatro da época","glamour da sociedade"], gab:"A",
dicas:["L. 15-17: \"contou-me que a vida política era um tecido de invejas, despeitos, intrigas...\""],
erros:{
B:"Ele cita a família como motivo de ter entrado na política, não como fonte da insatisfação.",
C:"O texto diz que ele adorava a mulher; o casamento não é a queixa.",
D:"\"Teatro\" é metáfora da política, não o teatro real.",
E:"O glamour não é o tema do desabafo; a queixa é a política (invejas, intrigas)."},
res:P("O desabafo é sobre a vida política: \"um tecido de invejas, despeitos, intrigas, perfídias\". Alternativa <b>A</b>.")
});

Q("18-2",{
enun:P("Em \"Como adorasse a mulher, não se vexava de mo dizer muitas vezes\" (l. 2-3), o conector <b>como</b> estabelece, com a oração seguinte, uma relação semântica de"),
ops:["causa","condição","contraste","comparação","consequência"], gab:"A",
dicas:["Troque \"Como\" por \"Porque\" e por \"Se\". Qual mantém o sentido?"],
erros:{
B:"\"Se adorasse a mulher\" seria hipótese. O texto afirma que ele adorava.",
C:"Não há oposição: adorar a mulher é o MOTIVO de falar dela.",
D:"Comparação exigiria um termo comparado (\"como um rei\").",
E:"A consequência é \"não se vexava de dizer\"; o \"como\" introduz a causa."},
res:P("\"Como adorasse a mulher\" = porque adorava a mulher: <b>causa</b>.")
});

Q("18-3",{
enun:P("A palavra carcoma foi empregada metaforicamente no trecho \"Um dia confessou-me que trazia uma triste carcoma na existência\" (l. 7-8). Um outro exemplo de metáfora empregada no texto é:"),
ops:["\"Lobo Neves, a princípio, metia-me grandes sustos\" (l. 1-2)","\"De fresta que era, chegou a porta escancarada\" (l. 6-7)","\"Evidentemente havia aí uma crise de melancolia; tratei de combatê-la\" (l. 17-18)","\"Entrei na política por gosto, por família, por ambição, e um pouco por vaidade\" (l. 21-23)","\"Lobo Neves recebeu-os com alegria\" (l. 43)"], gab:"B",
dicas:["Metáfora: dizer algo por meio de uma imagem de outro domínio. A confiança é uma porta?"],
erros:{
A:"\"metia-me grandes sustos\" é expressão literal (causava sustos).",
C:"Linguagem literal: havia uma crise e ele tentou combatê-la.",
D:"Enumeração literal de motivos.",
E:"Narração literal."},
res:P("A confiança, antes pequena (fresta), cresceu até ficar total (porta escancarada): <b>metáfora</b>. Alternativa <b>B</b>.")
});

Q("18-4",{
enun:P("A partir do fragmento \"que ele ouviu com aquela unção religiosa de um desejo que não quer acabar de morrer\" (l. 10-11), infere-se que Lobo Neves"),
ops:["estava prestes a morrer.","era extremamente religioso.","tinha o desejo de ir para bem longe dali.","esperava ainda ter uma atuação política satisfatória.","estava sofrendo de uma gravíssima crise de depressão."], gab:"D",
dicas:["O narrador lhe disse \"muitas coisas bonitas\" (sobre a política). Que desejo \"não quer acabar de morrer\"?"],
erros:{
A:"\"Morrer\" se refere ao desejo, não à pessoa.",
B:"\"Unção religiosa\" descreve o modo de ouvir (com reverência), não a religiosidade dele.",
C:"Não há menção a viajar ou fugir.",
E:"Há melancolia, mas a imagem do desejo que resiste indica esperança, não depressão gravíssima."},
res:P("O desejo que \"não quer acabar de morrer\" é a ambição política: ele ainda esperava ter sucesso na política. Alternativa <b>D</b>.")
});

Q("18-5",{
enun:P("O trecho \"Vira o teatro pelo lado da plateia; e, palavra, que era bonito!\" (l. 25-26) faz referência ao fato de Lobo Neves"),
ops:["misturar política e lazer.","ter uma vida social muito intensa.","poder deslumbrar-se com o teatro.","estar saudoso de sua vida como ator.","ter ignorado as dificuldades da atividade política."], gab:"E",
dicas:["\"Teatro\" = política. Quem vê pela plateia não vê os bastidores.","Logo depois: \"Escriturei-me; deram-me um papel\": ele entrou no \"palco\" e descobriu os bastidores."],
erros:{
A:"Não se fala de lazer; o teatro é metáfora.",
B:"Vida social não é o tema do trecho.",
C:"Interpretação literal: o teatro aqui representa a política.",
D:"Ele nunca foi ator; \"papel\" é a função política que assumiu."},
res:P("Visto da plateia (de fora), o teatro (a política) parecia bonito: ele ignorava as dificuldades que só viu ao entrar. Alternativa <b>E</b>.")
});

Q("18-6",{
enun:P("No fragmento \"Escriturei-me; deram-me um papel que... mas para que o estou a fatigar com isto? Deixe-me ficar com as minhas amofinações\" (l. 28-30), as reticências são usadas para demarcar a"),
ops:["interrupção de uma ideia.","insinuação de uma ameaça.","hesitação comum na oralidade.","continuidade de uma ação ou fato.","omissão proposital de algo que se devia dizer."], gab:"A",
dicas:["Depois das reticências, ele muda de assunto (\"mas para que o estou a fatigar com isto?\")."],
erros:{
B:"Não há ameaça no trecho.",
C:"Não é hesitação de fala: ele corta a frase e muda de rumo.",
D:"Continuidade seria indicada por \"etc.\"; aqui a ideia é cortada.",
E:"Ele não está escondendo algo que DEVIA dizer; desiste de prosseguir para não cansar o ouvinte."},
res:P("A frase \"deram-me um papel que...\" é interrompida, e ele passa a outra ideia. Alternativa <b>A</b>.")
});

Q("18-7",{
enun:P("O fragmento no qual a regência do verbo em destaque é a mesma do verbo <b>referir</b> no trecho \"que não referisse a ninguém o que se passara entre nós\" (l. 40-41) é"),
ops:["\"Como <b>adorasse</b> a mulher\" (l. 2)","\"Virgília <b>era</b> a perfeição mesma\" (l. 3-4)","\"Um dia <b>confessou</b>-me que trazia uma triste carcoma na existência\" (l. 7-8)","\"Mas para que o estou a <b>fatigar</b> com isto?\" (l. 28-29)","\"<b>Entraram</b> dois deputados e um chefe político da paróquia\" (l. 42-43)"], gab:"C",
dicas:["Referir o que se passara (objeto direto) A ninguém (objeto indireto): transitivo direto e indireto."],
erros:{
A:"Adorar a mulher: transitivo direto (\"a mulher\" é OD, sem preposição exigida).",
B:"Ser é verbo de ligação.",
D:"Fatigar alguém (\"o\"): transitivo direto; \"com isto\" é adjunto.",
E:"Entrar é intransitivo."},
res:P("Confessar algo (que trazia uma carcoma) a alguém (-me): <b>transitivo direto e indireto</b>, como referir. Alternativa <b>C</b>.")
});

Q("18-8",{
enun:P("O pronome oblíquo átono está empregado de acordo com o que prevê a variedade formal da norma-padrão em:"),
ops:["Poucos dar-lhe-iam a atenção merecida.","Lobo Neves nunca se afastara da vida pública.","Diria-lhe para evitar a carreira política se perguntasse.","Ele tinha um problema que mantinha-o preocupado todo o tempo.","Se atormentou com aquela crise de melancolia que parecia não ter fim."], gab:"B",
dicas:["Procure palavras atrativas (poucos, nunca, que) e o futuro do pretérito."],
erros:{
A:"\"Poucos\" (indefinido) é atrativo: \"Poucos lhe dariam\".",
C:"Futuro do pretérito no início: mesóclise \"Dir-lhe-ia\".",
D:"\"que\" (relativo) atrai: \"que o mantinha\".",
E:"Não se inicia frase com pronome átono: \"Atormentou-se\"."},
res:P("\"nunca\" é atrativo: \"nunca se afastara\". Alternativa <b>B</b>.")
});

Q("18-9",{
enun:P("Em português, o acento grave indica a contração de dois \"a\" em um só (crase) e está corretamente empregado em:"),
ops:["Verei a política de outra forma à partir daquela conversa.","Daqui à duas horas Lobo Neves receberá os amigos com alegria.","Assistimos à apresentações inflamadas de alguns deputados e senadores.","Em referência àqueles pensamentos, Lobo Neves calou-os rapidamente.","A política, à qual não quero mais em minha vida, causou-me muitos problemas."], gab:"D",
dicas:["Teste: há preposição \"a\" exigida E artigo/pronome \"a\"?"],
erros:{
A:"Não há crase antes de verbo (\"a partir\").",
B:"Tempo futuro: \"daqui a duas horas\", só a preposição.",
C:"\"à\" singular antes de plural: o correto é \"às apresentações\" ou \"a apresentações\".",
E:"\"querer\" é transitivo direto (quero algo): \"a qual não quero\", sem crase."},
res:P("\"Em referência a\" + \"aqueles\" = <b>àqueles</b>. Alternativa <b>D</b>.")
});

Q("18-10",{
enun:P("O período que atende plenamente às exigências da concordância verbal na norma-padrão da língua portuguesa é:"),
ops:["Mais de um mandato foram exercidos por Lobo Neves.","Fazem quinze anos que ele conseguiu entrar para a vida pública.","Necessita-se de políticos mais compromissados com a população.","Com certeza, haviam mais de trinta deputados no plenário naquele dia.","Reeleger-se-á, somente, os políticos com um histórico de trabalho honesto."], gab:"C",
dicas:["\"Necessitar\" pede \"de\": VTI + se = índice de indeterminação do sujeito, verbo no singular."],
erros:{
A:"\"Mais de um\" leva o verbo ao singular: \"Mais de um mandato foi exercido\".",
B:"\"Fazer\" indicando tempo é impessoal: \"Faz quinze anos\".",
D:"\"Haver\" = existir é impessoal: \"havia mais de trinta\".",
E:"Passiva sintética com sujeito plural: \"Reeleger-se-ão os políticos\"."},
res:P("\"Necessita-se de políticos\": verbo transitivo indireto + se, sujeito indeterminado, singular. Alternativa <b>C</b>.")
});

/* ---------- 2023 ---------- */
B({
id:"pt23", titulo:"Português 2023: crônica, coesão e correlação verbal",
sub:"Texto \"À moda brasileira\" (Lygia Fagundes Telles). Reminiscência, inferência, acento grave, \"que\" relativo, aposto, correlação de tempos, conectores e sinônimos.",
texto:["t23pt_a","t23pt_b"],
objetivos:["Reconhecer o tom de reminiscência numa crônica","Explicar a crase pela preposição implícita","Distinguir \"que\" pronome relativo de conjunção","Correlacionar tempos verbais (teria sido... se tivesse)","Escolher o conector que explicita a relação entre orações"],
qs:["23-1","23-2","23-3","23-4","23-5","23-6","23-7","23-8","23-9","23-10"],
aula:
"<h3>1. Crônica e memória</h3>"+
P("\"Estou me vendo debaixo de uma árvore\" anuncia uma lembrança: <b>reminiscência</b>. Preste atenção em marcas de sentimento: rodeios, gagueira, olhar \"verde\" fixo do pai, \"severidade\".")+
"<h3>2. Crase por preposição implícita</h3>"+
P("\"Soneto à língua portuguesa\" = soneto (dedicado/feito) <b>para a</b> língua portuguesa. A preposição \"a\" vem da ideia de destinação/homenagem, somada ao artigo \"a\".")+
"<h3>3. \"Que\" relativo × outros \"que\"</h3>"+
P("Relativo retoma um antecedente e pode ser trocado por \"o qual/a qual\": \"a borboleta que entrou\" = a borboleta, a qual entrou. Integrante introduz oração substantiva (\"não esquecer que...\"); em \"depois que\", \"sempre que\" é parte de locução conjuntiva.")+
"<h3>4. Vírgulas</h3>"+
P("Aposto explicativo vem entre vírgulas e pode ser retirado: \"a minha avó, Pedrina Perucchi, era italiana\". Não confunda com vocativo (chamamento), orações intercaladas e adjuntos.")+
"<h3>5. Correlação verbal</h3>"+
F("Futuro do pretérito composto (teria sido) ↔ pretérito mais-que-perfeito do subjuntivo (se tivesse escrito)<br>Futuro do pretérito simples (seria) ↔ pretérito imperfeito do subjuntivo (se escrevesse)")+
"<h3>6. Conectores conclusivos e explicativos</h3>"+
P("Se o segundo segmento é uma consequência/conclusão do primeiro: portanto, logo, por isso. Se é a causa: porque, pois.")+
TRAP("em questões de sinônimo, substitua a palavra no contexto: o tom da cena precisa continuar o mesmo."),
exemplo:{
 titulo:"Exemplo: correlação de tempos",
 enun:P("Complete mantendo a correlação na norma-padrão."),
 passos:[
  {p:"\"Ele teria vencido se ______ (treinar).\"", r:"<b>tivesse treinado</b>: futuro do pretérito composto ↔ mais-que-perfeito do subjuntivo."},
  {p:"\"Ele venceria se ______ (treinar).\"", r:"<b>treinasse</b>: futuro do pretérito simples ↔ imperfeito do subjuntivo."},
  {p:"\"Ele vencerá se ______ (treinar).\"", r:"<b>treinar</b>: futuro do presente ↔ futuro do subjuntivo."}
 ],
 fecho:"A questão 8 é o primeiro caso."
}
});

Q("23-1",{
enun:P("O fragmento de abertura da crônica \"Estou me vendo debaixo de uma árvore, lendo a pequena história da literatura brasileira.\" (parágrafo 1) faz referência a uma"),
ops:["previsão","fantasia","esperança","expectativa","reminiscência"], gab:"E",
dicas:["A narradora se \"vê\" no passado, ainda criança, conversando com o pai."],
erros:{
A:"Previsão olha para o futuro; a cena é do passado.",
B:"Não é invenção; é a memória de um episódio vivido.",
C:"Esperança também aponta para o futuro.",
D:"Expectativa é aguardar algo que virá."},
res:P("Ela relembra uma cena da infância: <b>reminiscência</b>.")
});

Q("23-2",{
enun:P("No texto, as palavras que marcam o sentimento de insegurança vivenciado pela narradora ao conversar com seu pai são:"),
ops:["confissão (parágrafo 7) e andar (parágrafo 8)","rodeios (parágrafo 4) e gaguejar (parágrafo 6)","cabecinha (parágrafo 7) e mudar (parágrafo 8)","sepultura (parágrafo 3) e renegar (parágrafo 7)","severidade (parágrafo 7) e esquecer (parágrafo 5)"], gab:"B",
dicas:["Procure ações DA NARRADORA que mostram hesitação diante do pai."],
erros:{
A:"\"Confissão\" é do soneto de Bilac; \"andar\" é do pai mudando de lugar.",
C:"\"Cabecinha\" e \"mudar\" referem-se ao pai, não à insegurança dela.",
D:"\"Sepultura\" é do verso de Bilac; \"renegar\" é fala do pai.",
E:"\"Severidade\" descreve o pai."},
res:P("Ela \"fazia rodeios\" antes de chegar ao ponto e começou \"a gaguejar\": marcas de insegurança. Alternativa <b>B</b>.")
});

Q("23-3",{
enun:P("De acordo com o texto, na opinião do pai, a filha deveria"),
ops:["aprender a língua da avó.","valorizar a língua materna.","escrever em idiomas diversos.","ler outros poemas de Olavo Bilac.","estudar história da literatura brasileira."], gab:"B",
dicas:["\"Feio é isso, filha, isso de querer renegar a própria língua.\""],
erros:{
A:"O pai diz que ela ficará na nossa língua; não sugere aprender italiano.",
C:"Ele critica justamente a ideia de escrever em outra língua.",
D:"Ele mostra outro verso de Bilac, mas para defender a língua, não para recomendar leituras.",
E:"Ela já estava lendo; o pai não faz essa recomendação."},
res:P("\"Renegar a língua é renegar o país\": ele quer que ela <b>valorize a língua materna</b>.")
});

Q("23-4",{
enun:P("Ao ler os versos de Olavo Bilac, o \"quase\" susto da narradora, mencionado no parágrafo 2, foi motivado pela"),
ops:["possibilidade de seus escritos não serem conhecidos.","falta de conhecimento sobre a localização do Lácio.","necessidade de aprender uma língua diferente.","surpresa com a postura pessimista do poeta.","abordagem da temática da morte."], gab:"A",
dicas:["Parágrafo 3: \"quer dizer que era a sepultura que esperava por esses meus escritos?\""],
erros:{
B:"Ela não sabia onde ficava o Lácio, mas o susto vem da palavra \"sepultura\" aplicada aos SEUS escritos.",
C:"Ela pensa em outra língua só depois, como reação ao susto.",
D:"O susto é pessoal (o destino dos escritos dela), não uma avaliação do poeta.",
E:"Não é a morte em si; é a ideia de que seus textos seriam \"enterrados\"."},
res:P("Se a língua é sepultura, seus contos ficariam enterrados, desconhecidos. Alternativa <b>A</b>.")
});

Q("23-5",{
enun:P("O emprego do acento grave em \"soneto à língua portuguesa\" (parágrafo 2) explica-se a partir do entendimento de que Olavo Bilac escreveu um soneto"),
ops:["em língua portuguesa","com a língua portuguesa","para a língua portuguesa","sobre a língua portuguesa","por causa da língua portuguesa"], gab:"C",
dicas:["A crase exige a preposição \"a\". Qual das paráfrases corresponde a \"a + a\"?"],
erros:{
A:"\"Em\" não gera crase; o soneto é EM português, mas a crase vem de outra relação.",
B:"\"Com\" não se contrai em \"à\".",
D:"\"Sobre\" não gera crase. Seria \"soneto sobre a língua\", sem acento.",
E:"\"Por causa da\" não corresponde à preposição \"a\"."},
res:P("Um soneto (dedicado) <b>à</b> língua = <b>para a</b> língua portuguesa: preposição de destinação + artigo. Alternativa <b>C</b>.")
});

Q("23-6",{
enun:P("A palavra <b>que</b> funciona como um mecanismo de coesão textual, retomando um antecedente, em:"),
ops:["\"parei quase num susto depois <b>que</b> li os primeiros versos\". (parágrafo 2)","\"Não esquecer <b>que</b> a minha avó, Pedrina Perucchi, era italiana\". (parágrafo 5)","\"ficou olhando a borboleta <b>que</b> entrou na varanda\" (parágrafo 7)","\"Sempre <b>que</b> meu pai queria mudar de assunto ele mudava de lugar.\" (parágrafo 8)","\"quando me avisaram lá do pequeno hotel em Jacareí <b>que</b> ele tinha morrido\". (parágrafo 9)"], gab:"C",
dicas:["Troque \"que\" por \"o qual/a qual\". Em qual frase funciona?"],
erros:{
A:"\"depois que\" é locução conjuntiva temporal.",
B:"Conjunção integrante: \"não esquecer ISSO\".",
D:"\"Sempre que\" é locução conjuntiva temporal.",
E:"Conjunção integrante: avisaram ISSO (que ele tinha morrido)."},
res:P("\"a borboleta que entrou\" = a borboleta, a qual entrou: pronome relativo, retoma \"borboleta\". Alternativa <b>C</b>.")
});

Q("23-7",{
enun:P("A frase em que as vírgulas estão empregadas com a mesma função que em \"Não esquecer que a minha avó, Pedrina Perucchi, era italiana\" (parágrafo 5) é:"),
ops:["Mude de lugar, meu pai, porque a morte vai chegar.","A filha, preocupada e triste, questionava a própria língua materna.","A língua portuguesa, embora inculta, constrói belos textos literários.","Os poemas, textos de uma beleza sem igual, encantam seus leitores.","Colocou os óculos e, caminhando pela sala, revelou a beleza do poema."], gab:"D",
dicas:["\"Pedrina Perucchi\" é um aposto explicativo: identifica \"a minha avó\". Procure outro aposto."],
erros:{
A:"\"meu pai\" é vocativo (chamamento).",
B:"\"preocupada e triste\" é predicativo/adjunto de estado, não aposto.",
C:"\"embora inculta\" é oração concessiva reduzida/intercalada.",
E:"\"caminhando pela sala\" é oração reduzida de gerúndio."},
res:P("\"textos de uma beleza sem igual\" explica \"Os poemas\": aposto explicativo. Alternativa <b>D</b>.")
});

Q("23-8",{
enun:P("Considerando-se a correlação adequada entre tempos e modos verbais, a alternativa que, respeitando a norma-padrão, completa o período iniciado por \"A autora também teria sido lida se...\" é"),
ops:["escrever seus contos em outra língua.","escrevera seus contos em outra língua.","tiver escrito seus contos em outra língua.","teria escrito seus contos em outra língua.","tivesse escrito seus contos em outra língua."], gab:"E",
dicas:["\"teria sido\" é futuro do pretérito composto: pede mais-que-perfeito do subjuntivo."],
erros:{
A:"Futuro do subjuntivo combina com futuro do presente (será lida se escrever).",
B:"\"escrevera\" é mais-que-perfeito do INDICATIVO.",
C:"Futuro composto do subjuntivo combina com futuro do presente.",
D:"Repetir o futuro do pretérito na condição é inadequado na norma."},
res:P("\"teria sido lida se <b>tivesse escrito</b>\". Alternativa <b>E</b>.")
});

Q("23-9",{
enun:P("No parágrafo 6, \"nossa língua é sepultura mesmo, <b>tudo o que a gente fizer vai para debaixo da terra, desaparece!</b>\", o segmento em destaque pode articular-se com o segmento anterior, sem alteração do sentido original, empregando-se o conector"),
ops:["quando","portanto","enquanto","embora","ou"], gab:"B",
dicas:["Se a língua é sepultura, então o que acontece com tudo o que se faz nela?"],
erros:{
A:"\"quando\" daria valor temporal, que não existe na relação.",
C:"\"enquanto\" indicaria simultaneidade ou contraste.",
D:"\"embora\" indicaria concessão (oposição), o contrário da relação.",
E:"\"ou\" indicaria alternância."},
res:P("O segundo segmento é a conclusão do primeiro: a língua é sepultura, <b>portanto</b> tudo desaparece.")
});

Q("23-10",{
enun:P("Em \"O soneto é muito bonito, disse me encarando com <b>severidade</b>\" (parágrafo 7), a palavra que pode substituir <b>severidade</b>, sem alteração no sentido da frase, é"),
ops:["firmeza","rispidez","discrição","desgosto","incompreensão"], gab:"B",
aviso:"gabarito definido por análise. \"Firmeza\" é sinônimo possível de severidade em outros contextos, mas não transmite a reprovação da cena.",
dicas:["O pai está reprovando a filha (\"Feio é isso, filha\"). Que palavra mantém o tom duro do olhar?"],
erros:{
A:"\"encarando com firmeza\" sugere olhar fixo e decidido, mas perde a reprovação do momento.",
C:"Discrição é o oposto: algo contido, reservado.",
D:"Desgosto é tristeza, não o tom do olhar.",
E:"Incompreensão muda o sentido: ele não deixou de entender."},
res:P("Severidade aqui é rigor, dureza de quem reprova: <b>rispidez</b>.")
});
