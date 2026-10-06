/* ===================== INGLÊS ===================== */
B({
id:"en06", titulo:"Inglês 2006: vocabulary, reference e passive voice",
sub:"Texto sobre tecnologia na indústria de petróleo e gás. Vocabulário em contexto, referência pronominal, antônimos, voz passiva, modais e ideia principal.",
texto:["t06en_a","t06en_b"],
objetivos:["Ler um texto técnico em inglês por skimming (ideia geral) e scanning (informação específica)","Achar o referente de it, they, them, itself, some","Reconhecer a voz passiva (be + particípio)","Saber equivalências de modais: must = have to; can = may (possibilidade)","Escolher título e ideia principal sem cair em detalhes"],
qs:["06-11","06-12","06-13","06-14","06-15","06-16","06-17","06-18","06-19","06-20"],
aula:
"<h3>1. Estratégia de leitura (vale para todos os blocos de Inglês)</h3>"+
OL(["<b>Skimming:</b> leia título, primeira e última frase de cada parágrafo. Isso responde \"main idea\", \"purpose\" e \"title\".","<b>Scanning:</b> para \"according to lines X-Y\", vá direto às linhas e procure palavras-chave do enunciado.","Cognatos ajudam (technology, production), mas cuidado com os falsos (actually = na verdade; eventually = finalmente).","Questões com <b>EXCEPT</b>/<b>NOT</b>: marque no texto cada item que aparece; sobra a resposta."])+
"<h3>2. Referência</h3>"+
P("Para achar o referente de <b>it, they, them, itself, which, that, where</b>, substitua o pronome pelo candidato e leia a frase. O referente concorda em número (they/them = plural) e quase sempre está antes.")+
"<h3>3. Voz passiva</h3>"+
F("be (em qualquer tempo) + past participle: is made, was made, have been made, will be made")+
P("\"The industry has developed\" é ativa (have + particípio sem \"be\"). \"Advances have been made\" é passiva.")+
"<h3>4. Modais</h3>"+
"<ul><li><b>must</b> = have to (obrigação forte).</li><li><b>should / ought to</b> = recomendação (mais fraco).</li><li><b>can / may / might</b> = possibilidade.</li><li><b>will</b> = futuro/certeza.</li></ul>"+
TRAP("\"the only correct statement concerning reference\": cheque TODAS as alternativas; os distratores apontam para um substantivo próximo, mas errado."),
exemplo:{
 titulo:"Exemplo: achando referentes",
 enun:P("\"The company tested new sensors. They proved to be reliable, so engineers installed them in every refinery that the company owns.\""),
 passos:[
  {p:"A quem se refere \"They\"?", r:"<b>new sensors</b>: os sensores provaram ser confiáveis (plural, e é o que pode \"provar ser confiável\")."},
  {p:"E \"them\"?", r:"<b>the sensors</b> de novo: os engenheiros os instalaram."},
  {p:"E \"that\"?", r:"<b>refinery</b>: \"every refinery that the company owns\" (pronome relativo, retoma o substantivo imediatamente anterior)."},
  {p:"Há voz passiva na frase? Se não, reescreva uma parte nela.", r:"Não há. Passiva: \"<b>New sensors were tested</b> by the company\" ou \"They <b>were installed</b> in every refinery\"."}
 ],
 fecho:"Use o mesmo teste de substituição nas questões 17 e 19."
}
});

Q("06-11",{
enun:P("The fragment \"...an impressive array of innovative technologies...\" (line 2) could best be substituted by a/an:"),
ops:["careful selection of up-to-date technologies.","remarkable number of well-known technologies.","unsatisfactory arrangement of brand-new technologies.","extraordinary collection of creative technologies.","immense display of useful technologies."], gab:"D",
dicas:["Traduza cada parte: impressive (impressionante), array (conjunto, coleção), innovative (inovador, criativo).","Os três adjetivos/substantivos precisam bater ao mesmo tempo."],
erros:{
A:"\"careful selection\" (seleção cuidadosa) não é \"impressive array\"; e up-to-date (atualizado) não é o mesmo que innovative.",
B:"\"well-known\" (conhecidas) é o oposto de innovative (novas).",
C:"\"unsatisfactory\" (insatisfatório) contradiz \"impressive\".",
E:"\"useful\" (útil) não traduz \"innovative\"."},
res:P("impressive ≈ extraordinary; array ≈ collection; innovative ≈ creative. Alternativa <b>D</b>.")
});

Q("06-12",{
enun:P("According to the second paragraph, state-of-the-art technology brings many benefits, EXCEPT:"),
ops:["protecting habitats and wildlife.","using larger facilities.","decreasing emissions of pollutants.","running less noisy operations.","preserving water resources."], gab:"B",
dicas:["Leia a lista de benefícios nas linhas 11-16 e marque cada alternativa que aparece.","\"reduced size of facilities\"."],
erros:{
A:"\"preservation of habitats and wildlife\" está na lista.",
C:"\"reduced emissions of pollutants\" está na lista.",
D:"\"reduced noise from operations\" está na lista.",
E:"\"better protection of water resources\" está na lista."},
res:P("O texto fala em \"<b>decreased</b> size of facilities\" (instalações menores). \"Using larger facilities\" é o contrário. Alternativa <b>B</b>.")
});

Q("06-13",{
enun:P("The function of the fourth paragraph is to:"),
ops:["describe in detail the automation process in oil refineries.","list some technological advances that are benefiting the oil industry.","criticize the new regulations that have reduced sulfur levels in fuels.","demand that refineries become more automated to improve performance.","explain how 3-D seismic technology can help oil production."], gab:"B",
dicas:["O 4º parágrafo começa em \"Exploration and production advances include...\" (linha 23). Ele aprofunda um item ou lista vários?"],
erros:{
A:"A automação é mencionada em uma frase, sem descrição detalhada.",
C:"As regulações são citadas como motivo das melhorias, sem crítica.",
D:"O texto não exige nada das refinarias; descreve o que já acontece.",
E:"3-D seismic aparece só como um item da lista."},
res:P("O parágrafo enumera avanços: directional drilling, slimhole drilling, 3-D seismic, automação de refinarias, catalisadores. Alternativa <b>B</b>.")
});

Q("06-14",{
enun:P("According to lines 44-50, gas hydrates:"),
ops:["can be found in deep-water sediments.","are contained in natural gas resources.","have been used as a source of natural gas.","may cause water to freeze under the ocean.","form sediments under low temperatures and pressures."], gab:"A",
dicas:["\"Gas hydrates are common in sediments in the ocean's deep waters where cold temperatures and high pressures cause natural gas and water to freeze together.\""],
erros:{
B:"É o contrário: o gás natural está contido nos hidratos.",
C:"O texto diz \"could be an important FUTURE source\": ainda não são usados.",
D:"São as condições (frio e pressão) que congelam gás e água juntos, não os hidratos que congelam a água.",
E:"As pressões são ALTAS (high pressures), não baixas; e eles se formam DENTRO dos sedimentos."},
res:P("\"Gas hydrates are common in sediments in the ocean's deep waters\". Alternativa <b>A</b>.")
});

Q("06-15",{
enun:P("In \"…the industry must continue to invest in conventional resources such as oil and natural gas.\" (lines 60-61), the word that could replace \"must\" without changing the meaning of the sentence is:"),
ops:["ought to.","could.","has to.","may.","will."], gab:"C",
dicas:["\"must\" expressa obrigação/necessidade forte."],
erros:{
A:"\"ought to\" = deveria (recomendação), mais fraco que must.",
B:"\"could\" = poderia (possibilidade).",
D:"\"may\" = pode (possibilidade/permissão).",
E:"\"will\" = futuro, sem a ideia de obrigação."},
res:P("must = <b>has to</b> (obrigação). Alternativa <b>C</b>.")
});

Q("06-16",{
enun:P("According to the last paragraph:"),
ops:["people will be able to count on renewable fuels in the near future.","scientists do not believe that alternative energy resources are useful.","societies will depend on traditional energy resources for still many years.","the limitations of renewable energy resources have finally been conquered.","oil companies do not intend to make energy resources cheaper in the future."], gab:"C",
dicas:["Última frase: \"We will need to rely on these important energy resources for many decades to come.\""],
erros:{
A:"O texto diz que as renováveis NÃO serão parte significativa por muitas décadas.",
B:"Os cientistas acham o potencial \"great\"; só não esperam participação significativa em breve.",
D:"Há \"many technological hurdles\" ainda a superar.",
E:"As empresas querem torná-las \"more reliable, affordable\" (mais baratas)."},
res:P("\"We will need to rely on these important energy resources (oil and gas) for many decades to come.\" Alternativa <b>C</b>.")
});

Q("06-17",{
enun:P("The only correct statement concerning reference is:"),
ops:["\"itself\" (line 5) refers to \"U.S. Department of Energy\".","\"some\" (line 9) refers to \"oil and natural gas\".","\"them\" (line 19) refers to \"exploration and production technologies\".","\"it\" (line 35) refers to \"new fuel regulations\".","\"they\" (line 55) refers to \"some of our companies\"."], gab:"E",
dicas:["Substitua cada pronome pelo referente proposto e leia a frase do texto.","Linhas 52-55: \"Some of our companies are also investigating renewable energy sources... By conducting research into overcoming..., they hope to make them...\""],
erros:{
A:"\"the petroleum business has transformed itself\": itself = the petroleum business.",
B:"\"remote places – some previously unreachable\": some = places.",
C:"\"extract them more efficiently\": them = resources.",
D:"\"are making it possible for the industry to grow\": \"it\" é sujeito antecipatório da oração seguinte, não retoma as regulações."},
res:P("\"they hope to make them more reliable\": quem espera são <b>some of our companies</b>. Alternativa <b>E</b>.")
});

Q("06-18",{
enun:P("The only pair of antonyms is:"),
ops:["\"unreachable\" (line 9) – inaccessible.","\"to meet\" (line 11) – to reduce.","\"accurately\" (line 19) – incorrectly.","\"recently\" (line 33) – lately.","\"reliable\" (line 40) – dependable."], gab:"C",
dicas:["Antônimos têm sentidos OPOSTOS. Verifique cada par."],
erros:{
A:"unreachable e inaccessible são sinônimos (inalcançável).",
B:"\"to meet demand\" = atender à demanda; \"to reduce\" = reduzir: sentidos diferentes, mas não opostos.",
D:"recently e lately são sinônimos.",
E:"reliable e dependable são sinônimos (confiável)."},
res:P("accurately (com precisão) × incorrectly (incorretamente): <b>antônimos</b>. Alternativa <b>C</b>.")
});

Q("06-19",{
enun:P("Check the item in which there is a verb in the passive voice."),
ops:["\"The oil and natural gas industry has developed and applied…\" (lines 1-2)","\"Other segments of the industry have benefited from technological advances as well.\" (lines 25-26)","\"Also, new process equipment and catalyst technology advances have been made very recently…\" (lines 31-33)","\"The industry is committed to investing in advanced technologies…\" (lines 38-39)","\"Gas hydrates could be an important future source of natural gas…\" (lines 49-50)"], gab:"C",
dicas:["Passiva = be + particípio, com o sujeito sofrendo a ação. \"have been made\": quem fez?"],
erros:{
A:"\"has developed and applied\" é present perfect ATIVO (a indústria desenvolveu).",
B:"\"have benefited\" é present perfect ativo.",
D:"\"is committed\" funciona como adjetivo (comprometida), estado; a banca não o considera a passiva da questão.",
E:"\"could be\" + substantivo: verbo de ligação, não passiva."},
res:P("\"advances <b>have been made</b>\" = foram feitos (por alguém): voz passiva. Alternativa <b>C</b>.")
});

Q("06-20",{
enun:P("Mark the title that best expresses the main idea of the text."),
ops:["Fuel cell research and the latest automobile developments.","How to reduce energy consumption in the U.S.","The role of technology in generating environmental benefits.","The impact of advanced technology on the oil and natural gas industry.","Automating oil refineries to improve operational and environmental performance."], gab:"D",
dicas:["Leia a primeira frase de cada parágrafo. Qual é o assunto que se repete?"],
erros:{
A:"Células a combustível aparecem só em uma frase.",
B:"O texto não é um guia para reduzir consumo.",
C:"Os benefícios ambientais são parte, mas o foco é a indústria de petróleo e gás.",
E:"A automação de refinarias é apenas um exemplo do 4º parágrafo."},
res:P("O texto inteiro trata do efeito da tecnologia avançada sobre a indústria de petróleo e gás. Alternativa <b>D</b>.")
});

/* ---------- 2011 ---------- */
B({
id:"en11", titulo:"Inglês 2011: purpose, connectors e reference",
sub:"Texto \"Model copes with chaos to deliver relief\". Intenção comunicativa, conectores (but, rather than, while, so, such as), referência (that, which, where, this), antônimos e modais.",
texto:["t11en_a"],
objetivos:["Identificar a intenção comunicativa (report, criticize, announce, argue)","Classificar conectores: contraste, conclusão, exemplo, adição","Achar referentes de pronomes relativos","Trocar modais por equivalentes"],
qs:["11-11","11-12","11-13","11-14","11-15","11-16","11-17","11-18","11-19","11-20"],
aula:
"<h3>1. Intenção comunicativa</h3>"+
P("Texto jornalístico que apresenta uma pesquisa costuma <b>report/announce</b> (informar). Desconfie de alternativas com <b>criticize, argue, alert against</b> se o tom é neutro e positivo.")+
"<h3>2. Conectores</h3>"+
"<ul><li><b>Contraste:</b> but, however, although, while (= enquanto/ao passo que), rather than (= em vez de).</li><li><b>Conclusão/consequência:</b> so, therefore, thus, hence.</li><li><b>Exemplo:</b> such as, for instance, like.</li><li><b>Causa:</b> because, since, given that, as.</li></ul>"+
"<h3>3. Pronomes relativos</h3>"+
P("<b>who</b> (pessoas), <b>which/that</b> (coisas), <b>where</b> (lugar/situação), <b>whose</b> (posse). Eles retomam o substantivo imediatamente anterior na maioria dos casos, mas confira o sentido.")+
"<h3>4. Modais de possibilidade</h3>"+
P("can = may (possibilidade). has to = must (obrigação). ought to = should (conselho). will definitely = certeza.")+
TRAP("\"refers to all the items below, EXCEPT\": marque no texto os problemas citados (congestion, delays, disrupted roads, loss of products) e procure o intruso."),
exemplo:{
 titulo:"Exemplo: classificando conectores",
 enun:P("Classifique o conector destacado."),
 passos:[
  {p:"\"The road was blocked, <b>so</b> the trucks took a detour.\"", r:"<b>Conclusão/consequência</b> (por isso)."},
  {p:"\"<b>Rather than</b> choosing the shortest path, the model looks for the cheapest.\"", r:"<b>Contraste/substituição</b> (em vez de)."},
  {p:"\"Perishable goods, <b>such as</b> vaccines, need special care.\"", r:"<b>Exemplificação</b> (como, por exemplo)."},
  {p:"\"The model is fast, <b>while</b> older methods are slow.\"", r:"<b>Contraste</b> (enquanto que, ao passo que)."}
 ],
 fecho:"A questão 16 pede o conector de conclusão."
}
});

Q("11-11",{
enun:P("The communicative intention of the article is to"),
ops:["criticize the inefficient transportation of supplies during stressful events.","announce a study to identify an effective strategy to distribute goods and services in emergencies.","alert society about the arguments against the delivery of humanitarian aid during natural disasters.","report on a computational model to speed up the shipment of perishable products through clogged roads in summer.","argue that the building of alternative highways is paramount to a more efficient distribution of supplies in everyday situations."], gab:"B",
dicas:["Leia o título e o subtítulo: \"Computer program helps responders transport supplies in tough conditions\"."],
erros:{
A:"O texto não critica; apresenta uma solução.",
C:"Não há argumentos contra a ajuda humanitária.",
D:"Quase certa, mas acrescenta \"in summer\", que não aparece, e restringe a perecíveis.",
E:"Não se fala em construir rodovias; e o foco são emergências, não o dia a dia."},
res:P("O artigo anuncia um estudo (modelo computacional) para distribuir suprimentos em emergências. Alternativa <b>B</b>.")
});

Q("11-12",{
enun:P("According to Anna Nagurney, in paragraph 3 (lines 14-26), an efficient logistics system must consider the"),
ops:["shortest route that links two fragile end points.","only means to take perishable goods by land.","most profitable network, in terms of cheap transport.","lowest cost to place goods safely and in adequate conditions.","use of standard transportation means normally used for medical products."], gab:"D",
dicas:["\"her system aims for the cleanest path at minimum cost, while capturing factors such as the perishability of the product...\""],
erros:{
A:"O texto diz \"Rather than considering the shortest path\": é o que o sistema NÃO faz.",
B:"Não se fala em \"only means\" nem só transporte terrestre.",
C:"\"to maximize profit\" é justamente o que ela rejeita.",
E:"Meios padrão não são mencionados como critério."},
res:P("Custo mínimo + perecibilidade + incerteza das rotas ⇒ menor custo para entregar com segurança e em condições adequadas. Alternativa <b>D</b>.")
});

Q("11-13",{
enun:P("Nagurney's comment \"'It's a multicriteria decision-making problem.'\" (lines 25-26) refers to the fact that"),
ops:["in regular deliveries, many problems are caused by the same factors.","the transportation of unperishable goods is the single issue to be considered.","finding efficacious transportation solutions depends exclusively on political decisions.","inefficient management has been multiplying the problems caused by distribution channels.","delivering products in emergency situations requires analyzing many factors besides cost and time."], gab:"E",
dicas:["multicriteria = vários critérios. Quais critérios aparecem no parágrafo?"],
erros:{
A:"Não se trata de entregas regulares nem de \"mesmos fatores\".",
B:"\"single issue\" contradiz \"multicriteria\".",
C:"\"exclusively on political decisions\" não aparece.",
D:"Não há crítica à gestão."},
res:P("Perecibilidade, incerteza das rotas, demanda desconhecida, além de custo e tempo: muitos critérios. Alternativa <b>E</b>.")
});

Q("11-14",{
enun:P("Iain Couzin is mentioned in paragraph 5 (lines 33-40) because he"),
ops:["believes that computational tools are very useful in predicting and reacting to misfortunate incidents.","provides the only efficient alternative to the computer model presented by Anna Nagurney.","claims that the use of computational tools in dealing with disaster scenarios has been ineffective.","found a faster and more reliable means of preventing epidemics and breaches of security.","developed mathematical tools to justify individual animal routines."], gab:"A",
dicas:["\"'Mathematical tools are essential to develop formal means to predict, and to respond to, such critical perturbations,' said Iain Couzin.\""],
erros:{
B:"Ele não apresenta alternativa ao modelo; comenta sua importância.",
C:"Ele diz que as ferramentas são ESSENCIAIS.",
D:"Ele não afirma ter achado um meio de prevenir epidemias.",
E:"Ele estuda comportamento COLETIVO, não rotinas individuais."},
res:P("Ele afirma que ferramentas matemáticas são essenciais para prever e responder a perturbações críticas. Alternativa <b>A</b>.")
});

Q("11-15",{
enun:P("\"such critical perturbations,\" (lines 34-35) refers to all the items below, EXCEPT"),
ops:["congestion","delivery delays","computer supplies","disrupted roads","loss of products"], gab:"C",
dicas:["As perturbações são os problemas citados antes: congestionamento, atrasos, rotas interrompidas, perdas."],
erros:{
A:"\"congestion\" aparece no parágrafo anterior como penalidade.",
B:"\"penalties for time\" e entregas atrasadas fazem parte das perturbações.",
D:"\"situations where standard routes may be disrupted\".",
E:"\"products that are lost\"."},
res:P("\"Computer supplies\" (material de informática) não é uma perturbação; o texto fala em programa de computador como solução. Alternativa <b>C</b>.")
});

Q("11-16",{
enun:P("The expression in boldface introduces the idea of conclusion in"),
ops:["\"<b>But</b> a new model quickly determines the best routes and means for delivering humanitarian aid,\" (lines 4-6)","\"<b>Rather than</b> considering the shortest path from one place to another to maximize profit,\" (lines 20-21)","\"her system aims for the cleanest path at minimum cost, <b>while</b> capturing factors such as the perishability of the product…\" (lines 21-23)","\"'You don't know where demand is, <b>so</b> it's tricky,'\" (lines 24-25)","\"'This is particularly important where response must be rapid and effective, <b>such as</b> during disaster scenarios...'\" (lines 37-39)"], gab:"D",
dicas:["Qual conector significa \"por isso, então\"?"],
erros:{
A:"\"But\" introduz contraste.",
B:"\"Rather than\" = em vez de (contraste/substituição).",
C:"\"while\" = enquanto, ao mesmo tempo (simultaneidade).",
E:"\"such as\" introduz exemplo."},
res:P("\"You don't know where demand is, <b>so</b> it's tricky\": so = portanto. Alternativa <b>D</b>.")
});

Q("11-17",{
enun:P("In terms of pronominal reference,"),
ops:["\"…that…\" (line 2) refers to \"…blood…\" (line 1).","\"…which…\" (line 11) refers to \"…supplies…\" (line 10).","\"where…\" (line 16) refers to \"…networks\" (line 15).","\"…where…\" (line 31) refers to \"…routes…\" (line 31).","\"This…\" (line 37) refers to \"…behavior.\" (line 37)."], gab:"C",
dicas:["Substitua o pronome pelo referente proposto e leia a frase."],
erros:{
A:"\"an area that's been struck by an earthquake\": that = area.",
B:"\"areas which have experienced natural disasters\": which = areas.",
D:"\"in situations where standard routes may be disrupted\": where = situations.",
E:"\"This is particularly important\" retoma a ideia de prever e responder às perturbações (o uso dessas ferramentas), não \"behavior\"."},
res:P("\"transport in fragile networks — where supply, demand and delivery routes may be in extremely rapid flux\": where = networks. Alternativa <b>C</b>.")
});

Q("11-18",{
enun:P("Based on the meanings in the text, the two items are antonymous in"),
ops:["\"…tough…\" (subtitle) – complicated","\"…clogged…\" (line 7) – crowded","\"…disrupted.\" (line 32) – destroyed","\"…breaches…\" (line 40) – violations","\"pressing…\" (line 41) – trivial"], gab:"E",
dicas:["\"pressing situations\" = situações urgentes."],
erros:{
A:"tough e complicated são sinônimos (difícil).",
B:"clogged (entupido) e crowded (lotado) têm sentidos próximos.",
C:"disrupted (interrompido) e destroyed (destruído) são próximos, não opostos.",
D:"breaches e violations são sinônimos."},
res:P("pressing (urgente) × trivial (sem importância): <b>antônimos</b>. Alternativa <b>E</b>.")
});

Q("11-19",{
enun:P("In \"The work can be applied to immediate, pressing situations,\" (lines 41-42), the fragment \"<b>can be applied</b>\" is replaced, without change in meaning, by"),
ops:["may be applied.","has to be applied.","ought to be applied.","will definitely be applied.","might occasionally be applied."], gab:"A",
dicas:["\"can\" aqui indica possibilidade/capacidade, não obrigação nem certeza."],
erros:{
B:"\"has to\" = obrigação.",
C:"\"ought to\" = recomendação.",
D:"\"will definitely\" = certeza absoluta.",
E:"\"occasionally\" acrescenta uma ideia de raridade que não está no texto."},
res:P("can = <b>may</b> (possibilidade). Alternativa <b>A</b>.")
});

Q("11-20",{
enun:P("The computer model discussed in the text \"…copes with chaos to deliver relief\" (title) and analyzes different factors. The only factor NOT taken in consideration in the model is the"),
ops:["probability of product decay or loss.","possible congestions in chaotic areas.","reduction of costs to increase profits.","unpredictability of status of certain routes.","most efficient route between geographical areas."], gab:"C",
dicas:["\"Rather than considering the shortest path from one place to another to maximize profit...\""],
erros:{
A:"A perecibilidade e a perda de produtos são consideradas.",
B:"Congestionamento entra como penalidade.",
D:"\"the uncertainty of supply routes\" é considerada.",
E:"O modelo calcula \"the best routes\"."},
res:P("O modelo busca custo mínimo para a ENTREGA, não lucro: \"rather than ... to maximize profit\". Alternativa <b>C</b>.")
});

/* ---------- 2018 ---------- */
B({
id:"en18", titulo:"Inglês 2018: purpose, phrasal verbs e numerical reference",
sub:"Texto \"The key energy questions for 2018\" (Financial Times). Propósito, conectores de causa, phrasal verbs, referência numérica e vocabulário.",
texto:["t18en_a","t18en_b"],
objetivos:["Distinguir speculate × explain × forecast","Reconhecer conectores de causa (given that)","Entender phrasal verbs comuns (pick up, drive by)","Checar referências numéricas com precisão (porcentagem DE QUÊ?)"],
qs:["18-11","18-12","18-13","18-14","18-15","18-16","18-17","18-18","18-19","18-20"],
aula:
"<h3>1. Propósito</h3>"+
P("Um texto que levanta \"questions\" sobre o futuro, com \"may\", \"could\", \"uncertain\", está <b>especulando</b>. Ele não \"explica as razões\" nem \"dá respostas precisas\".")+
"<h3>2. Causa</h3>"+
P("<b>given that</b> = taking into account that, considering that (dado que). <b>even though / despite</b> = concessão (mesmo que).")+
"<h3>3. Phrasal verbs</h3>"+
"<ul><li><b>pick up</b> = melhorar, aumentar, ganhar ritmo (\"economic growth has picked up\").</li><li><b>be driven by</b> = ser motivado/impulsionado por.</li><li><b>step in</b> = intervir, entrar em ação.</li><li><b>offset</b> = compensar.</li></ul>"+
"<h3>4. Referência numérica</h3>"+
P("Em questões com porcentagens, volte à frase e responda: X% DE QUÊ? Os distratores trocam o todo (global production × oil traded; manufacturing × commercialized; growth × decrease).")+
TRAP("rife = abundante, comum (não \"escasso\"); thriving = prosperando; surge = aumento repentino; flat = estável."),
exemplo:{
 titulo:"Exemplo: \"X por cento de quê?\"",
 enun:P("\"Renewables, including hydro, accounted for just 5 per cent of global daily energy supply. Solar photovoltaic capacity grew by 50 per cent in 2016.\""),
 passos:[
  {p:"Os 5% se referem a quê?", r:"À participação das <b>renováveis (incluindo hidro)</b> no suprimento global diário de energia, não só da hidrelétrica."},
  {p:"Os 50% se referem a quê?", r:"Ao <b>crescimento</b> (grew by) da capacidade fotovoltaica em 2016, não a uma redução."},
  {p:"\"China accounts for 60 per cent of total solar cell manufacturing\": 60% de quê?", r:"Da <b>fabricação</b> mundial de células solares, não do total comercializado."}
 ],
 fecho:"A questão 17 é toda construída com essas trocas."
}
});

Q("18-11",{
enun:P("The main purpose of the text is to"),
ops:["explain the reasons for the sudden increase in the price of oil in 2018.","speculate on matters that may affect the global energy market in 2018.","provide precise answers to the most relevant questions on global energy.","forecast changes in trade and energy production in Asia and the Middle East.","measure the devastating impact of renewable energy industry on coal and natural gas."], gab:"B",
dicas:["Primeiro parágrafo: \"there are four key questions, and each of which answers is highly uncertain.\""],
erros:{
A:"O preço do petróleo é um tema entre outros, e o autor não explica um aumento repentino.",
C:"O autor diz que as respostas são incertas; não dá respostas precisas.",
D:"Ásia e Oriente Médio são parte; o texto trata do mercado global.",
E:"Não há medição de impacto devastador."},
res:P("O texto levanta quatro questões incertas que podem afetar o mercado em 2018: <b>especular</b>. Alternativa <b>B</b>.")
});

Q("18-12",{
enun:P("Saudi Arabia and Iran are mentioned in paragraphs 2 and 3 (lines 8-20) because they"),
ops:["are latent enemies about to engage in violent strife.","produce more than 40 per cent of the world's crude oil.","should spread their influence over the other Gulf States.","can be considered the most stable countries in the Middle East.","might affect oil production and trade if they engage in an open conflict."], gab:"E",
dicas:["\"The risk is that an open conflict... would spread and hit oil production and trade.\""],
erros:{
A:"O texto diz que eles têm EVITADO o conflito direto; não que estão prestes a lutar.",
B:"\"over 40 per cent\" é o petróleo comercializado pelos ESTADOS DO GOLFO, não só pelos dois.",
C:"O texto não recomenda que espalhem influência.",
D:"A estabilidade saudita é a questão, mas não se diz que são os mais estáveis."},
res:P("Um conflito aberto entre eles poderia atingir a produção e o comércio de petróleo. Alternativa <b>E</b>.")
});

Q("18-13",{
enun:P("In the fragment \"The threat to stability is all the greater <b>given that</b> Iran is likely to win any such clash and to treat the result as a licence to reassert its influence in the region\" (lines 17-20), <b>given that</b> can be replaced, without change in meaning, by"),
ops:["even so","even though","despite the fact that","because of the fact that","taking into account that"], gab:"E",
dicas:["\"given that\" introduz uma CAUSA/consideração (dado que)."],
erros:{
A:"\"even so\" = mesmo assim (concessão).",
B:"\"even though\" = embora (concessão).",
C:"\"despite the fact that\" = apesar de (concessão).",
D:"Expressa causa, mas \"because of the fact that\" é construção pouco natural; a banca considerou a equivalência mais exata \"taking into account that\"."},
res:P("given that = <b>taking into account that</b> (considerando que). Alternativa <b>E</b>.")
});

Q("18-14",{
enun:P("The production of oil from shale rock in the US is mentioned in paragraph 4 (lines 21-29) because in 2018 it"),
ops:["can rapidly achieve the record level of 6 million barrels a day.","will certainly reach higher levels than those announced in 2017.","will make output from America's producing areas commercially viable in 2018.","might compensate for present OPEC production cuts and cause a decrease in oil prices.","is going to have devastating effects on the drilling activity in the country in the near future."], gab:"D",
dicas:["\"A comparable increase in 2018 would offset most of the current OPEC production cuts and either force another quota reduction or push prices down.\""],
erros:{
A:"\"over 6m\" já foi atingido; não se fala em recorde futuro.",
B:"\"will certainly\" é certeza; o texto é hipotético (\"would\").",
C:"As áreas já ficaram viáveis com o aumento de preços; não é a previsão para 2018.",
E:"O texto diz que a perfuração está AUMENTANDO."},
res:P("offset = compensar; push prices down = baixar preços. Alternativa <b>D</b>.")
});

Q("18-15",{
enun:P("The phrase <b>that shift</b> (line 46) refers to the change in China from a"),
ops:["heavy industry fuelled by coal to a service-based industry using a more varied mix.","large consumption of the world's fossil fuels to lower consumption levels.","limited demand for oil, gas and coal to an increasing demand.","low-fossil-fuel economy to a pollution-based economy.","fast-growing economy to a receding one."], gab:"A",
dicas:["Frase anterior: \"The country's economy is changing and moving away from heavy industry fuelled largely by coal to a more service-based one, with a more varied fuel mix.\""],
erros:{
B:"A mudança é de modelo econômico, não de nível de consumo.",
C:"É o inverso de algumas afirmações; não é a mudança descrita.",
D:"É o contrário: a China quer uma economia mais limpa.",
E:"Não se fala em economia em recessão."},
res:P("\"that shift\" = de indústria pesada movida a carvão para uma economia de serviços com matriz mais variada. Alternativa <b>A</b>.")
});

Q("18-16",{
enun:P("In the fragments \"some recent data suggests that as economic growth has picked up\" (lines 47-48) and \"Beijing has high ambitions for a much cleaner energy economy, driven not least by the levels of air pollution in many of the major cities\" (lines 49-51), <b>picked up</b> and <b>driven by</b> mean, respectively,"),
ops:["declined – guided by","increased – delayed by","deteriorated – caused by","improved – motivated by","stabilized – hindered by"], gab:"D",
dicas:["\"as economic growth has picked up, so has consumption of oil and coal\": o consumo subiu junto. Então o crescimento...","\"driven by\" = impulsionado por."],
erros:{
A:"\"picked up\" não é \"declined\" (caiu).",
B:"\"increased\" serve, mas \"driven by\" não é \"delayed by\" (atrasado por).",
C:"\"picked up\" não é \"deteriorated\".",
E:"\"picked up\" não é estabilizar, e \"driven by\" não é \"hindered by\" (impedido por)."},
res:P("picked up = <b>improved/increased</b>; driven by = <b>motivated by</b>. Alternativa <b>D</b>.")
});

Q("18-17",{
enun:P("In terms of numerical reference, one concludes that"),
ops:["\"over 40 per cent\" (lines 16-17) refers to the percentage of global oil produced by Iran and Saudi.","\"70 per cent\" (line 62) refers to the percentage decrease in solar energy costs since 2010.","\"60 per cent\" (line 64) refers to the total percentage of solar cells commercialized in China.","\"5 per cent\" (line 68) refers to the percentage of global energy generated by hydroelectric plants.","\"50 per cent\" (line 70) refers to the percentage decrease in solar photovoltaic capacity in 2016."], gab:"B",
dicas:["Para cada número, pergunte: porcentagem DE QUÊ? Volte à linha."],
erros:{
A:"Os 40% são do petróleo COMERCIALIZADO globalmente pelos Estados do Golfo.",
C:"60% é a participação da China na FABRICAÇÃO de células solares.",
D:"5% é de todas as renováveis, INCLUINDO hidro, no suprimento diário.",
E:"A capacidade CRESCEU 50% (grew by)."},
res:P("\"costs have fallen by 70 per cent since 2010\". Alternativa <b>B</b>.")
});

Q("18-18",{
enun:P("Based on the meanings of the words in the text, it can be said that"),
ops:["\"rife\" (line 11) and <b>scarce</b> express similar ideas.","\"claimed\" (line 34) can be replaced by <b>hidden</b>.","\"flat\" (line 43) and <b>high</b> express similar ideas.","\"thriving\" (line 61) and <b>developing</b> are synonyms.","\"surge\" (line 87) and <b>increase</b> are antonyms."], gab:"D",
dicas:["\"Solar is also thriving\" = a solar também está prosperando."],
erros:{
A:"rife = abundante; scarce = escasso: são opostos.",
B:"claimed = alegado, declarado; hidden = escondido.",
C:"flat = estável, sem crescimento; high = alto.",
E:"surge = aumento repentino: SINÔNIMO de increase."},
res:P("thriving (prosperando, crescendo) ≈ developing. Alternativa <b>D</b>.")
});

Q("18-19",{
enun:P("Concerning the renewable energy industry, the author affirms that it"),
ops:["has become highly competitive without subsidies or government support.","has been growing dramatically because of the threat posed by climate change.","needs to go through a profound change to become global and more competitive.","will provide most of the global electric supply through solar, wind and hydropower.","has been expanding faster than personal computing and mobile phones in the 1990s and 2000s."], gab:"C",
dicas:["\"A radical change will be necessary to make the industry global and capable of competing on the scale necessary...\""],
erros:{
A:"O texto diz que a eólica está APROXIMANDO-SE da paridade; e muitas empresas existem para coletar subsídios.",
B:"O texto não atribui o crescimento à mudança climática.",
D:"As renováveis respondem por só 5% do suprimento.",
E:"O texto diz que a indústria PRECISA de uma expansão comparável à da computação; não que já cresce mais rápido."},
res:P("\"A radical change will be necessary to make the industry global and capable of competing\". Alternativa <b>C</b>.")
});

Q("18-20",{
enun:P("According to the last paragraph, the author believes that the"),
ops:["future of the energy business is uncertain and difficult to anticipate.","recent increase in oil prices is definitely a long-lasting phenomenon.","four questions presented in the article will be answered sooner than we imagine.","energy business is definitely facing a moment of stability, growth and prosperity.","inevitable conflict in the Middle East will solve the imbalance between energy supply and demand."], gab:"A",
dicas:["\"the energy business is at a moment of change and transition. Every reader will have their own view...\""],
erros:{
B:"Ele diz que a alta \"is a temporary and unsustainable phenomenon\".",
C:"Não há essa previsão.",
D:"É um momento de MUDANÇA e transição, não de estabilidade.",
E:"Ele diz que seria preciso outra guerra para mudar a equação, e lamenta que isso seja possível; não diz que é inevitável nem que resolve."},
res:P("Momento de mudança, cada leitor tem sua visão: futuro incerto. Alternativa <b>A</b>.")
});

/* ---------- 2023 ---------- */
B({
id:"en23", titulo:"Inglês 2023: main idea, connectors e vocabulary",
sub:"Texto \"How space technology is bringing green wins for transport\". Ideia principal, \"however\", inferência, \"latency\", referência de \"which\" e sinônimos.",
texto:["t23en_a","t23en_b"],
objetivos:["Identificar a ideia principal de texto institucional","Reconhecer conectores de oposição","Fazer inferências simples (oferta cresce ⇒ preço cai)","Entender termos técnicos: latency, connectivity, pivotal"],
qs:["23-11","23-12","23-13","23-14","23-15","23-16","23-17","23-18","23-19","23-20"],
aula:
"<h3>1. Texto institucional</h3>"+
P("Textos de empresas costumam DESCREVER melhorias e benefícios da sua área. Alternativas negativas (disapprove, dangers) raramente são a ideia principal.")+
"<h3>2. Vocabulário técnico que caiu</h3>"+
"<ul><li><b>latency</b> = atraso (delay) na transmissão de dados. Low latency = pouco atraso.</li><li><b>connectivity</b> = conectividade; <b>terrestrial technologies</b> = tecnologias em terra (torres, cabos).</li><li><b>pivotal</b> = essencial, central.</li><li><b>booming</b> = em expansão; <b>driving down</b> = reduzindo.</li><li><b>state-of-the-art / cutting-edge</b> = de ponta.</li></ul>"+
"<h3>3. Conectores de oposição</h3>"+
P("however, but, yet, although, nevertheless = <b>opposition</b>.")+
"<h3>4. Inferência</h3>"+
P("Inferir é tirar uma conclusão lógica do que está escrito. \"The market is booming, driving down the cost\" ⇒ quanto mais acesso, menor o preço.")+
TRAP("\"which\" depois de vírgula e preposição (\"of which 91%\") retoma o substantivo que faz sentido com o resto da frase: 91% DE QUÊ é de veículos rodoviários?"),
exemplo:{
 titulo:"Exemplo: vocabulário pelo contexto",
 enun:P("\"The new network offers low latency, so video calls have almost no delay.\""),
 passos:[
  {p:"Pelo contexto, o que significa \"latency\"?", r:"<b>Atraso</b> (delay) na transmissão. A segunda parte (\"almost no delay\") explica."},
  {p:"\"Satellite links are pivotal for remote areas.\" Que palavra substituiria \"pivotal\"?", r:"<b>essential</b> (essencial, fundamental)."},
  {p:"\"The market is booming, driving down prices.\" O que acontece com os preços?", r:"<b>Caem</b> (driving down = empurrando para baixo)."}
 ],
 fecho:"As questões 14, 15 e 18 usam exatamente essas palavras."
}
});

Q("23-11",{
enun:P("The main idea of the text is to"),
ops:["disapprove space technology.","relate space technology to diseases.","figure out the costs of space technology.","list potential dangers of space technology.","describe space technology improvements."], gab:"E",
dicas:["Leia o título e a primeira frase de cada parágrafo."],
erros:{
A:"O tom é totalmente favorável à tecnologia espacial.",
B:"Doenças não são mencionadas.",
C:"Custos aparecem de passagem (estão caindo); não são o foco.",
D:"Não há lista de perigos."},
res:P("O texto descreve avanços e benefícios da tecnologia espacial para o transporte. Alternativa <b>E</b>.")
});

Q("23-12",{
enun:P("In the fragment in the first paragraph \"<b>However</b>, others are already delivering practical results\", the word <b>However</b> can be associated with the idea of"),
ops:["time","condition","emphasis","opposition","accumulation"], gab:"D",
dicas:["Frase anterior: \"Some projects are still in the planning stages\". A seguinte contrasta com ela."],
erros:{
A:"Tempo seria \"then\", \"meanwhile\".",
B:"Condição seria \"if\", \"unless\".",
C:"Ênfase seria \"indeed\", \"in fact\".",
E:"Acúmulo/adição seria \"moreover\", \"also\"."},
res:P("Alguns projetos ainda estão no papel; outros, ao contrário, já dão resultados: <b>oposição</b>.")
});

Q("23-13",{
enun:P("From the fragment in the second paragraph \"connectivity that can reach into situations where terrestrial technologies struggle to deliver\", it can be concluded that terrestrial technologies can present data problems related to their"),
ops:["price","safety","choice","marketing","transmission"], gab:"E",
dicas:["\"struggle to deliver\" connectivity = têm dificuldade de entregar/transmitir dados."],
erros:{
A:"O trecho não fala de preço.",
B:"Segurança não é mencionada no trecho.",
C:"Escolha não tem relação com \"struggle to deliver\".",
D:"Marketing não é tratado."},
res:P("O problema das tecnologias terrestres é levar a conectividade (transmissão) a certos lugares. Alternativa <b>E</b>.")
});

Q("23-14",{
enun:P("From the fragment in the second paragraph \"Right now, the satellite supplier market is booming, driving down the cost of access to satellites\", one can infer that the more access to the satellite supplier market is feasible,"),
ops:["the lower its price will be.","the higher its price will be.","the better its quality will be.","the poorer its quality will be.","the more reliable its quality will be."], gab:"A",
dicas:["\"driving down the cost\" = reduzindo o custo."],
erros:{
B:"\"driving down\" indica queda, não alta.",
C:"O trecho fala de custo, não de qualidade.",
D:"Qualidade não é mencionada.",
E:"Confiabilidade não é o assunto do trecho."},
res:P("Mercado em expansão reduz o custo de acesso: quanto mais acesso, <b>menor o preço</b>.")
});

Q("23-15",{
enun:P("The fragment in the third paragraph \"The Satellites for Digitalization of Railways (SODOR) project will provide low latency\" means that"),
ops:["low volume of data will be conveyed within hours.","low volume of data will be interrupted for a few minutes.","low volume of data will be communicated within minutes.","high volume of data will be transmitted with minimal delay.","high volume of data will be transferred after a few minutes."], gab:"D",
dicas:["latency = atraso. \"low latency\" fala do volume de dados ou do atraso?"],
erros:{
A:"\"within hours\" é atraso grande; low latency é o oposto.",
B:"Não se trata de interrupção nem de baixo volume.",
C:"\"within minutes\" ainda é atraso grande.",
E:"\"after a few minutes\" contradiz \"low latency\"."},
res:P("Low latency = transmissão com atraso mínimo. Alternativa <b>D</b>.")
});

Q("23-16",{
enun:P("In the fragment in the fourth paragraph \"Right now, the transport sector contributes around 14% of the UK's greenhouse gas emissions, of <b>which</b> 91% is from road vehicles\", the word <b>which</b> refers to"),
ops:["road vehicles","transport sector","United Kingdom","sustainable future","greenhouse gas emissions"], gab:"E",
dicas:["91% DE QUÊ vêm dos veículos rodoviários?"],
erros:{
A:"Não faz sentido dizer que 91% dos veículos rodoviários vêm dos veículos rodoviários.",
B:"O setor de transporte é a fonte dos 14%; o \"which\" retoma as emissões.",
C:"Não são 91% do Reino Unido.",
D:"\"sustainable future\" está em outra frase."},
res:P("\"of which\" = das emissões de gases de efeito estufa (do transporte), 91% vêm de veículos rodoviários. Alternativa <b>E</b>.")
});

Q("23-17",{
enun:P("From the fifth paragraph of the text, one can infer that models for wind and solar production can provide sources of"),
ops:["unreliable power","intermittent energy","constant power flow","scarce energy sources","dangerous power sources"], gab:"C",
dicas:["\"EO data will be critical in future forecasting models for wind and solar production, to help manage a consistent flow of green energy.\""],
erros:{
A:"Os modelos servem justamente para tornar a geração confiável.",
B:"Eólica e solar são intermitentes por natureza; os MODELOS ajudam a obter um fluxo constante.",
D:"Escassez não é mencionada.",
E:"Perigo não é mencionado."},
res:P("Os modelos ajudam a manter um \"consistent flow of green energy\": fluxo constante. Alternativa <b>C</b>.")
});

Q("23-18",{
enun:P("In the fragment in the sixth paragraph of the text \"Satellite communications will also be <b>pivotal</b>\", the word <b>pivotal</b> can be replaced, with no change in meaning, by"),
ops:["tricky","erratic","essential","haphazard","problematic"], gab:"C",
dicas:["pivô = eixo central. O que é algo \"pivotal\"?"],
erros:{
A:"tricky = complicado, traiçoeiro.",
B:"erratic = irregular, imprevisível.",
D:"haphazard = aleatório, desorganizado.",
E:"problematic = problemático."},
res:P("pivotal = <b>essential</b> (central, fundamental).")
});

Q("23-19",{
enun:P("From the seventh paragraph of the text, one can infer that automated driving will have the benefits of"),
ops:["human drivers","space technology","terrestrial connectivity","traffic controlled by people","20th century designed cars"], gab:"B",
dicas:["\"Satellite technology will increasingly be a part of the vehicles themselves, particularly when automated driving becomes more mainstream.\""],
erros:{
A:"Direção automatizada dispensa motoristas humanos.",
C:"O texto destaca os SATÉLITES, não a conectividade terrestre.",
D:"Tráfego controlado por pessoas é o oposto de automação.",
E:"Carros projetados no século XX não são mencionados."},
res:P("Os veículos automatizados vão depender de satélites: <b>space technology</b>.")
});

Q("23-20",{
enun:P("In the eighth paragraph of the text, the author states that, for the last 40 years, the company where he works has been"),
ops:["embedded in antipollution laws.","dedicated to space travel medicine.","involved with cutting-edge space industry.","concerned with the Earth's polar ice caps.","engaged in antinuclear weapon campaigns."], gab:"C",
dicas:["\"we have been deeply embedded in the space engineering for more than 40 years – and we continue to be involved with the state-of-the-art technologies\"."],
erros:{
A:"\"embedded\" aparece, mas em \"space engineering\", não em leis.",
B:"Medicina espacial não é mencionada.",
D:"Calotas polares não aparecem.",
E:"Armas nucleares não aparecem."},
res:P("state-of-the-art = cutting-edge: envolvida com a indústria espacial de ponta. Alternativa <b>C</b>.")
});
