B({
id:"b20", titulo:"Setor elétrico, energia, tarifas e normas",
sub:"Estrutura do setor (ANEEL, CCEE, desverticalização), contratos, tarifas horo-sazonais, fator de carga, fontes renováveis, termelétricas, NR-10 e licitações.",
objetivos:["Saber o papel de cada instituição do setor elétrico","Distinguir tarifas azul e verde e o efeito do fator de carga","Avaliar afirmações sobre fontes renováveis e termelétricas com critério técnico","Aplicar NR-10 (qualificado, habilitado, capacitado, autorizado) e a modalidade de licitação certa"],
qs:["06-35","06-40","08-34","08-36","06-38","08-38","08-37","06-37","06-34","06-33","06-39","08-39","08-40","23-53","23-58"],
aula:
"<h3>1. Instituições</h3>"+
"<ul><li><b>MME:</b> formula a política energética.</li><li><b>ANEEL:</b> agência reguladora: regula e fiscaliza, define as TARIFAS.</li><li><b>ONS:</b> opera o sistema interligado.</li><li><b>CCEE:</b> contabiliza e liquida a comercialização de energia (contratos no ACR e ACL).</li><li><b>EPE:</b> planejamento.</li><li><b>Eletrobras:</b> holding estatal de geração e transmissão.</li></ul>"+
P("<b>Reforma do setor:</b> a competição veio da <b>desverticalização</b>, separando geração, transmissão, distribuição e comercialização. Geração e comercialização são competitivas; transmissão e distribuição são monopólios naturais regulados.")+
P("<b>Contratos na CCEE:</b> bilaterais (ACL), CCEAR (ambiente regulado, leilões), Itaipu, PROINFA, entre outros. Banco (BNDES) financia, não é contrato registrado.")+
"<h3>2. Tarifas e fator de carga</h3>"+
"<ul><li><b>Horo-sazonal azul:</b> valores DIFERENCIADOS de demanda e de consumo para ponta e fora de ponta.</li><li><b>Horo-sazonal verde:</b> demanda ÚNICA; consumo diferenciado por posto horário.</li><li><b>Convencional:</b> sem diferenciação horária.</li></ul>"+
F("Fator de carga FC = demanda média / demanda máxima (0 &lt; FC ≤ 1)")+
P("FC próximo de 1 = uso uniforme: para o mesmo consumo, a demanda máxima é menor. Isso reduz a demanda contratada e otimiza o dimensionamento de cabos e transformadores. FC não tem relação com fator de potência.")+
"<h3>3. Fontes</h3>"+
"<ul><li><b>Termelétricas:</b> construção mais rápida e próximas da carga, mas com custo OPERACIONAL alto (combustível). Ciclo combinado: o calor dos gases de escape da turbina a gás gera vapor para uma turbina a vapor (maior rendimento).</li><li><b>Hidrelétricas:</b> custo de operação baixo, construção longa. Grande potencial remanescente na Amazônia, longe da carga e com restrições ambientais.</li><li><b>Renováveis:</b> eólica já opera em grande escala; nenhuma fonte é \"totalmente limpa\" no ciclo de vida (fabricação de painéis, por exemplo). PCHs servem bem a locais com recurso hídrico e dificuldade de transmissão.</li></ul>"+
TRAP("palavras absolutas (\"totalmente\", \"todos\", \"somente\", \"sempre\") costumam tornar falsa uma afirmação desse tema.")+
"<h3>4. NR-10 e licitação</h3>"+
"<ul><li><b>Qualificado:</b> curso específico reconhecido pelo sistema oficial de ensino. <b>Habilitado:</b> qualificado e com registro no conselho de classe. <b>Capacitado:</b> treinado sob orientação e responsabilidade de profissional habilitado e autorizado. <b>Autorizado:</b> qualificado/capacitado/habilitado com anuência formal da empresa.</li><li><b>Pregão:</b> modalidade para bens e serviços comuns, com padrões objetivamente definidos no edital (EPI, EPC, ferramentas).</li></ul>",
exemplo:{
 titulo:"Exemplo: fator de carga e demanda",
 enun:P("Uma indústria consome 72 MWh num mês de 30 dias, e a maior demanda registrada (integração de 15 min) foi 250 kW."),
 passos:[
  {p:"Qual a demanda média (kW)?", v:100, r:"72 000 kWh/720 h = <b>100 kW</b>.", dica:"Demanda média = energia/tempo. 30 dias = 720 h."},
  {p:"Qual o fator de carga?", v:0.4, r:"FC = 100/250 = <b>0,4</b>.", dica:"FC = média/máxima."},
  {p:"Se, deslocando cargas, o FC subir para 0,8 com o mesmo consumo, qual a nova demanda máxima (kW)?", v:125, r:"D<sub>máx</sub> = 100/0,8 = <b>125 kW</b>: metade da demanda a contratar, com o mesmo consumo.", dica:"Mesmo consumo ⇒ mesma demanda média."}
 ],
 fecho:"É o raciocínio por trás das questões 06-38 e 08-38."
}
});

Q("06-35",{
enun:P("O sistema tarifário de energia elétrica segue um conjunto de normas e regulamentos para estabelecer o preço da energia para os diversos tipos de consumidores. A responsabilidade pela regulamentação das tarifas é"),
ops:["do Ministério de Minas e Energia – MME.","da ELETROBRÁS.","da Agência Nacional de Energia Elétrica – ANEEL.","da Câmara de Comercialização de Energia Elétrica – CCEE.","das Concessionárias de Energia Elétrica."], gab:"C",
dicas:["Quem regula e fiscaliza os serviços de energia elétrica?"],
erros:{
A:"O MME formula políticas; a regulação tarifária é da agência reguladora.",
B:"A Eletrobras é uma empresa (holding) do setor, não reguladora.",
D:"A CCEE contabiliza e liquida a comercialização; não fixa tarifas de consumidores.",
E:"As concessionárias aplicam as tarifas, mas não as regulamentam."},
res:P("A <b>ANEEL</b> regula e fiscaliza o setor, incluindo a definição das tarifas.")
});

Q("06-40",{
enun:P("O setor elétrico vem sofrendo mudanças para permitir a introdução da iniciativa privada no mercado de energia e, com isso, estabelecer a competitividade, melhorando a qualidade e diminuindo os custos para o consumidor final. A medida que contribui para o estabelecimento dessa competitividade é a(o)"),
ops:["introdução das geradoras térmicas pela iniciativa privada.","construção de usinas hidrelétricas de grande porte.","desverticalização das empresas do setor elétrico existentes.","privatização das usinas hidrelétricas existentes.","aumento da participação do Estado na geração."], gab:"C",
dicas:["Competição exige separar as atividades que podem competir (geração, comercialização) das que são monopólio natural (redes)."],
erros:{
A:"Ter térmicas privadas não cria competição por si só se as empresas continuam integradas (geração + rede + venda).",
B:"Porte das usinas não tem relação com a estrutura de mercado.",
D:"Privatizar troca o dono, mas uma empresa verticalizada privada continua sendo monopólio.",
E:"Aumentar a participação estatal vai na direção oposta à abertura do mercado."},
res:P("A <b>desverticalização</b> separa geração, transmissão, distribuição e comercialização, permitindo competição onde ela é possível.")
});

Q("08-34",{
enun:P("Das modalidades de contratação de compra e venda de energia elétrica mencionadas abaixo, aquela que NÃO está no conjunto dos contratos sujeitos ao registro da CCEE é o Contrato"),
ops:["Bilateral.","de Comercialização de Energia no Ambiente Regulado.","de Itaipu.","do PROINFA.","do BNDES."], gab:"E",
dicas:["A CCEE registra contratos de energia. Qual dessas instituições não vende energia?"],
erros:{
A:"Contratos bilaterais (ambiente livre) são registrados na CCEE. A pergunta pede o que NÃO é.",
B:"O CCEAR (ambiente regulado) é registrado na CCEE.",
C:"A energia de Itaipu é comercializada com contratos registrados na CCEE.",
D:"Os contratos do PROINFA são registrados na CCEE."},
res:P("O BNDES é um banco de fomento: financia empreendimentos, não vende energia. Alternativa <b>E</b>.")
});

Q("08-36",{
enun:P("A estrutura tarifária brasileira está calcada na demanda de potência e no consumo de energia de uma instalação. Para horários de ponta e fora de ponta, a tarifa"),
ops:["horo-sazonal azul tem valores diferenciados de demandas.","horo-sazonal verde tem valores diferenciados de demandas.","horo-sazonal verde tem valor único de consumo.","horo-sazonal azul tem valor único de consumo.","convencional tem valores diferenciados de consumo."], gab:"A",
dicas:["Azul: diferencia demanda E consumo. Verde: demanda única; consumo diferenciado."],
erros:{
B:"Na verde a demanda é ÚNICA.",
C:"Na verde o CONSUMO é diferenciado por posto horário.",
D:"Na azul o consumo também é diferenciado.",
E:"A convencional não diferencia postos horários."},
res:P("Tarifa <b>azul</b>: demandas e consumos diferenciados em ponta e fora de ponta.")
});

Q("06-38",{
enun:P("O Fator de Carga (FC) é a razão entre a demanda média e a demanda máxima de uma instalação ou sistema. Quanto mais próximo da unidade,"),
ops:["mais otimizado será o dimensionamento dos materiais elétricos da instalação ou sistema.","menor será o consumo da energia da instalação ou sistema.","melhor será o fator de potência da instalação ou do sistema.","melhor a qualidade no fornecimento de energia elétrica.","menor potência poderão ter os equipamentos que mobiliam a instalação."], gab:"A",
dicas:["FC alto: a instalação usa sua capacidade de forma uniforme, sem picos."],
erros:{
B:"FC não reduz o consumo: o mesmo consumo pode ocorrer com FC alto ou baixo.",
C:"Fator de carga e fator de potência são coisas diferentes (um é sobre tempo, outro sobre reativos).",
D:"Qualidade de fornecimento (tensão, interrupções) depende da rede, não do FC do consumidor.",
E:"A potência dos equipamentos é a que eles precisam; o FC diz como seu uso se distribui no tempo."},
res:P("Com FC alto, os condutores e transformadores trabalham perto de sua capacidade durante mais tempo, sem picos ociosos: <b>dimensionamento otimizado</b>.")
});

Q("08-38",{
enun:P("Sob a ótica do consumidor, as medidas de eficiência energética visam à melhor utilização da energia elétrica. A elevação do fator de carga é uma dessas medidas, que tem como consequência imediata para a instalação a"),
ops:["elevação somente do fator de potência.","diminuição da demanda de potência.","diminuição somente do consumo de energia elétrica.","diminuição da demanda de potência e do consumo de energia elétrica.","diminuição do consumo de energia elétrica e a elevação do fator de potência."], gab:"B",
dicas:["FC = média/máxima. Com o mesmo consumo (mesma média), subir o FC significa reduzir..."],
erros:{
A:"FC não tem relação com fator de potência.",
C:"Deslocar cargas no tempo não muda o consumo total.",
D:"O consumo fica igual; só a demanda máxima cai.",
E:"Nem consumo nem fator de potência são afetados diretamente."},
res:P("Mesmo consumo, FC maior ⇒ <b>demanda máxima menor</b>.")
});

Q("08-37",{
enun:P("As usinas termelétricas produzem energia elétrica a partir da queima de combustível e podem ser de ciclo simples ou combinado. A grande vantagem do ciclo combinado é o maior rendimento, alcançado devido ao(à)"),
ops:["melhor configuração da torre de arrefecimento, o que implica menor perda de água.","maior eficiência das caldeiras, que aproveitam o calor desprendido, reutilizando-o nelas próprias no ciclo seguinte.","necessidade de menor temperatura para as caldeiras de geração de vapor.","aproveitamento da energia térmica desprendida no processo primário de geração, que pode ser utilizada em outras máquinas térmicas.","aproveitamento da energia térmica desprendida no processo de arrefecimento da geração, que pode ser utilizada em outras máquinas térmicas."], gab:"D",
dicas:["No ciclo combinado há DUAS máquinas: turbina a gás e turbina a vapor. De onde vem o calor que gera o vapor?"],
erros:{
A:"Torre de arrefecimento não é o que distingue o ciclo combinado.",
B:"Não é a caldeira reaproveitando seu próprio calor; é a turbina a gás cedendo calor de escape para outro ciclo.",
C:"A temperatura da caldeira não é o diferencial.",
E:"O calor aproveitado é o dos gases de ESCAPE da turbina a gás (processo primário), não o do arrefecimento."},
res:P("Os gases de escape da turbina a gás (processo primário), ainda muito quentes, geram vapor numa caldeira de recuperação para uma turbina a vapor. Alternativa <b>D</b>.")
});

Q("06-37",{
enun:P("O Brasil tem as usinas hidrelétricas como base no fornecimento de energia elétrica. No entanto, a energia térmica vem aumentando sua participação na geração. Dentre as alternativas, aquela que NÃO favoreceu esse aumento foi a(o)"),
ops:["introdução da iniciativa privada no mercado.","necessidade do país de se construir usinas geradoras em um menor tempo.","falta de interesse da iniciativa privada pela construção de hidrelétricas.","longo tempo para a construção de hidrelétricas.","baixo custo operacional das termelétricas."], gab:"E",
dicas:["Procure a afirmação FALSA sobre termelétricas: quanto custa operar uma usina que queima combustível?"],
erros:{
A:"A entrada da iniciativa privada FAVORECEU as térmicas (retorno mais rápido). A pergunta pede o que NÃO favoreceu.",
B:"Térmicas são construídas mais rápido: isso FAVORECEU sua expansão.",
C:"O desinteresse privado por hidrelétricas FAVORECEU as térmicas.",
D:"O longo prazo das hidrelétricas FAVORECEU as térmicas."},
res:P("Termelétricas têm custo operacional ALTO (combustível). Esse fator não pode ter favorecido sua expansão: alternativa <b>E</b>.")
});

Q("06-34",{
enun:P("As termelétricas a gás natural vêm se tornando uma opção interessante, mas os investimentos privados não foram os esperados. Considere: I – O livre mercado de energia dificulta a inserção das termelétricas no modelo competitivo, tendo em vista que o custo da energia das hidrelétricas em operação é menor. II – Uma cota específica de geração térmica poderia viabilizar os investimentos privados nesse setor. III – Uma garantia no custo do gás natural poderia incentivar os investimentos nesse tipo de geração. A(s) afirmação(ões) correta(s) é(são) apenas"),
ops:["I","II","III","I e III","I, II e III"], gab:"E",
aviso:"questão conceitual de contexto da época (2006); o gabarito oficial não foi encontrado e a resposta foi definida por análise.",
dicas:["Pense nos riscos de um investidor em térmica: competir com hidrelétricas amortizadas, incerteza de despacho e preço do gás.","Cada afirmação descreve um risco (I) ou um mecanismo para reduzi-lo (II e III)."],
erros:{
A:"I é verdadeira, mas II e III também descrevem medidas que reduzem riscos do investidor.",
B:"II é verdadeira, mas I explica a dificuldade e III é outra medida de incentivo (o Programa Prioritário de Termeletricidade previa preço do gás garantido).",
C:"III é verdadeira, mas I e II também.",
D:"II também é verdadeira: uma reserva de mercado (cota) dá previsibilidade de receita."},
res:P("I descreve o problema (hidrelétricas amortizadas têm energia mais barata); II e III são mecanismos que reduzem o risco do investidor. Todas verdadeiras: <b>E</b>.")
});

Q("06-33",{
enun:P("Hoje a questão ambiental caminha lado a lado com a energética. Considere: I – a utilização da energia solar é limpa em todo o seu processo; II – o protocolo de Kioto foi assinado por todos os principais países do mundo; III – as fontes alternativas de energia tendem a ter participação maior no balanço energético mundial. A(s) afirmação(ões) correta(s) é(são) apenas"),
ops:["I","II","III","I e II","II e III"], gab:"C",
dicas:["Procure as palavras absolutas: \"todo o seu processo\", \"todos os principais países\"."],
erros:{
A:"I é falsa: a fabricação de painéis e baterias envolve mineração e processos poluentes.",
B:"II é falsa: os EUA, por exemplo, não ratificaram o Protocolo de Kioto.",
D:"I e II são falsas (afirmações absolutas que não se sustentam).",
E:"II é falsa: nem todos os grandes países aderiram ao protocolo."},
res:P("I falsa (ciclo de vida não é 100% limpo), II falsa (EUA fora), III verdadeira. Alternativa <b>C</b>.")
});

Q("06-39",{
enun:P("Energias renováveis são recursos que não derivam de recursos minerais finitos e têm potencial de prover serviços energéticos com pouca ou nenhuma emissão de poluentes. Considere: I – a energia eólica permite a geração de energia elétrica em grande escala; II – a energia solar não permite a geração de energia elétrica em grande escala; III – as células de hidrogênio permitem a geração de energia elétrica em grande escala. A(s) afirmação(ões) correta(s) é(são) apenas"),
ops:["I","II","III","I e II","II e III"], gab:"A",
aviso:"questão datada (2006). O gabarito oficial não foi encontrado; a resposta foi definida por análise técnica. Na época já existiam usinas solares de centenas de MW (térmicas solares), o que torna II falsa.",
dicas:["Parques eólicos de centenas de MW já operavam em 2006.","Célula a combustível (hidrogênio) é tecnologia de pequena e média escala."],
erros:{
B:"Solar em grande escala já existia (usinas termossolares na Califórnia, centenas de MW). E I é verdadeira.",
C:"Células de hidrogênio são aplicações de pequeno porte; não são geração em grande escala.",
D:"II é falsa: há geração solar em grande escala.",
E:"II e III são falsas."},
res:P("I verdadeira; II falsa; III falsa. Alternativa <b>A</b>.")
});

Q("08-39",{
enun:P("As temáticas energética e ambiental são analisadas em todos os empreendimentos energéticos, o que vem favorecendo a geração por fontes renováveis. A respeito desse tema, é correto afirmar que"),
ops:["o potencial do bagaço de cana é uma possibilidade viável somente para o atendimento aos pequenos consumidores.","a geração por meio de geradores a biodiesel é uma possibilidade viável, tendo em vista a facilidade de se produzir o combustível.","a geração fotovoltaica, além de ser uma energia totalmente limpa, permite atender aos grandes centros urbanos consumidores.","a geração eólica tem um grande potencial no Brasil, o que vem favorecendo uma participação na matriz energética brasileira cada vez mais significativa.","a geração por meio de pequenas centrais hidrelétricas é uma possibilidade viável para locais que possuem recursos hídricos compatíveis e dificuldades inerentes às linhas de transmissão."], gab:"E",
aviso:"questão de contexto da época (2008). O gabarito oficial não foi encontrado. A alternativa D também tem um fundo verdadeiro, mas em 2008 a participação eólica era muito pequena; a E é a única sem ressalvas.",
dicas:["Elimine as afirmações com palavras absolutas (\"somente\", \"totalmente\").","Qual alternativa descreve uma aplicação técnica sem exageros?"],
erros:{
A:"\"Somente\" torna falsa: a cogeração com bagaço abastece a rede e grandes consumidores.",
B:"Produzir biodiesel em escala não é simples, e geração a diesel/biodiesel tem custo alto.",
C:"\"Totalmente limpa\" é falso (ciclo de vida dos painéis), e em 2008 a fotovoltaica não atendia grandes centros.",
D:"Em 2008 a participação eólica na matriz era muito pequena (abaixo de 1%); \"cada vez mais significativa\" era exagero para a época."},
res:P("PCHs são adequadas para locais com recurso hídrico e com dificuldade de transmissão (sistemas isolados, cargas remotas). Alternativa <b>E</b>.")
});

Q("08-40",{
enun:P("O Brasil, com suas dimensões continentais, apresenta demanda crescente de energia. Considere: I – A bacia hidrográfica do Amazonas é a que apresenta maior potencial hidrelétrico, e sua distância dos grandes centros consumidores é o maior impeditivo para a implementação dos empreendimentos de geração nessa região. II – O aproveitamento do potencial hidrelétrico da bacia do Rio Paraná visa, principalmente, ao abastecimento dos grandes centros industriais das Regiões Sul e Sudeste. III – A dependência do gás natural da Bolívia é um dos fatores que dificulta a expansão de termelétricas que usam esse tipo de combustível. É(São) correta(s) APENAS a(s) afirmativa(s)"),
ops:["I","II","III","I e III","II e III"], gab:"E",
aviso:"questão de contexto da época (2008); gabarito oficial não encontrado. A afirmativa I foi considerada falsa por apontar a distância como o MAIOR impeditivo, quando as restrições socioambientais pesam tanto quanto ou mais.",
dicas:["Em I, a palavra-chave é \"o maior impeditivo\". É só a distância que trava as usinas amazônicas?","III: lembre da nacionalização do gás boliviano em 2006."],
erros:{
A:"I tem uma generalização forte (\"o maior impeditivo\"): questões ambientais e indígenas são barreiras tão ou mais relevantes. II e III são verdadeiras.",
B:"II é verdadeira, mas III também: a dependência do gás boliviano gerou insegurança no suprimento das térmicas.",
C:"III é verdadeira, mas II também: a bacia do Paraná atende o Sul e o Sudeste industriais.",
D:"I é questionável pela afirmação de que a distância é o maior impeditivo. II é verdadeira."},
res:P("II e III verdadeiras; I falsa pela generalização. Alternativa <b>E</b>.")
});

Q("23-53",{
enun:P("Numa auditoria, foi identificada irregularidade na capacitação dos empregados designados para trabalhar em instalações elétricas. Após análise da documentação, a capacitação teve que ser revogada porque"),
ops:["os empregados capacitados não possuíam graduação em engenharia elétrica.","os empregados capacitados não possuíam curso técnico em eletrotécnica.","o profissional que realizou a capacitação não possuía registro no competente conselho de classe.","os empregados capacitados não possuíam qualificação para o trabalho em instalações elétricas.","o empregado capacitado estava trabalhando sob a supervisão de profissional habilitado e autorizado."], gab:"C",
dicas:["NR-10: o capacitado é quem recebe treinamento sob orientação e responsabilidade de um profissional habilitado e autorizado.","Habilitado = qualificado + registro no conselho de classe."],
erros:{
A:"Capacitado não precisa de graduação. Essa exigência é do profissional habilitado.",
B:"Ter curso técnico é o que define o QUALIFICADO. O capacitado não precisa dele.",
D:"Capacitação existe justamente para quem não é qualificado.",
E:"Trabalhar sob supervisão de profissional habilitado e autorizado é uma EXIGÊNCIA da NR-10, não uma irregularidade."},
res:P("A capacitação precisa ser conduzida por profissional habilitado (com registro no conselho de classe) e autorizado. Sem registro, ela é inválida: alternativa <b>C</b>.")
});

Q("23-58",{
enun:P("A equipe de licitação de uma empresa está elaborando o processo para aquisição de ferramentas, EPIs e EPCs para a equipe de manutenção. Na fase inicial, verificou-se que todos os itens podem ser bem definidos no edital. A modalidade de licitação a ser escolhida para a aquisição dos bens é o(a)"),
ops:["diálogo competitivo","concurso","pregão","leilão","concorrência"], gab:"C",
dicas:["Bens comuns, com especificações objetivas no edital: qual modalidade é feita para isso?"],
erros:{
A:"Diálogo competitivo é para objetos inovadores ou complexos que a administração não consegue especificar sozinha.",
B:"Concurso escolhe trabalho técnico, científico ou artístico com prêmio.",
D:"Leilão é para VENDER bens.",
E:"Concorrência serve a obras, serviços especiais e bens não comuns. Para bens comuns, usa-se o pregão."},
res:P("Bens e serviços comuns, com padrões de desempenho e qualidade definidos objetivamente no edital ⇒ <b>pregão</b> (Lei 14.133/2021).")
});
