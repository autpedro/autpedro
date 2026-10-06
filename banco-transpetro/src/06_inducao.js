B({
id:"b06", titulo:"Motor de indução e métodos de partida",
sub:"Velocidade síncrona, escorregamento, fluxo de potência no rotor, torque e as partidas estrela-triângulo, compensadora, rotor bobinado e inversor.",
objetivos:["Calcular n<sub>s</sub>, escorregamento e velocidade do rotor","Usar o fluxo de potência: P<sub>entreferro</sub>, perdas no rotor e potência mecânica","Calcular torque com a velocidade certa (do eixo)","Comparar correntes e torques nos métodos de partida","Aplicar o efeito da resistência rotórica no torque"],
qs:["06-21","23-27","18-26","06-25","11-26","23-28","23-55","11-42","11-43","11-44"],
aula:
"<h3>1. Velocidade e escorregamento</h3>"+
F("n<sub>s</sub> = 120·f/p &nbsp;(rpm; p = número de POLOS)<br>s = (n<sub>s</sub> − n)/n<sub>s</sub> &nbsp;⇒&nbsp; n = n<sub>s</sub>·(1 − s)<br>Frequência no rotor: f<sub>r</sub> = s·f")+
P("Em 60 Hz: 2 polos → 3600 rpm; 4 → 1800; 6 → 1200; 8 → 900. O motor sempre gira um pouco ABAIXO de n<sub>s</sub>.")+
"<h3>2. Fluxo de potência</h3>"+
F("P<sub>entrada</sub> → (perdas no estator) → P<sub>entreferro</sub> (P<sub>g</sub>)<br>Perdas Joule no rotor = s·P<sub>g</sub> &nbsp;&nbsp; P<sub>mec</sub> = (1 − s)·P<sub>g</sub><br>Torque eletromagnético: T = P<sub>g</sub>/ω<sub>s</sub> = P<sub>mec</sub>/ω<sub>r</sub> &nbsp;&nbsp; ω = 2πn/60")+
P("Se a questão dá P<sub>g</sub> e as perdas Joule do rotor, o escorregamento sai direto: s = P<sub>Joule,rotor</sub>/P<sub>g</sub>.")+
TRAP("calcular o torque dividindo pela velocidade síncrona a potência do EIXO. Potência do eixo se divide pela velocidade do eixo.")+
"<h3>3. Torque e resistência do rotor</h3>"+
P("Na região normal de operação (s pequeno) o torque é aproximadamente proporcional a s/R<sub>2</sub>. Para manter o mesmo torque com mais resistência no rotor (rotor bobinado), o escorregamento cresce na mesma proporção:")+
F("R<sub>2</sub>/s<sub>1</sub> = (R<sub>2</sub> + R<sub>ext</sub>)/s<sub>2</sub>")+
P("Aumentar R<sub>2</sub> desloca o torque máximo para escorregamentos maiores sem mudar o seu valor: por isso a partida de rotor bobinado começa com a MAIOR resistência (mais torque de partida, menos corrente).")+
"<h3>4. Métodos de partida</h3>"+
"<ul><li><b>Direta:</b> corrente de partida 5 a 8 vezes a nominal.</li><li><b>Estrela-triângulo:</b> o motor (projetado para Δ) parte em Y. Tensão no enrolamento cai √3 vezes; corrente de LINHA e torque caem para <b>1/3</b>. Ao contrário: em Δ a corrente de linha é 3 vezes a de Y.</li><li><b>Chave compensadora</b> (autotrafo com tap k): corrente da linha e torque caem para k².</li><li><b>Soft-starter:</b> rampa de tensão por tiristores.</li><li><b>Inversor de frequência:</b> controla V/f constante; parte com corrente baixa e torque alto (melhor que a direta).</li><li><b>Motor CC:</b> resistência em série na armadura; o campo deve estar plenamente excitado.</li><li><b>Síncrono:</b> parte como indução (enrolamento amortecedor) ou com motor auxiliar; só depois se aplica a excitação CC.</li></ul>"+
"<h3>5. Na instalação (NBR 5410)</h3>"+
"<ul><li>Queda de tensão na partida: até 10% nos terminais do dispositivo de partida.</li><li>Resistência de aquecimento: evita condensação de umidade com o motor parado.</li><li>Corrente de projeto: P<sub>eixo</sub>/(η·√3·V·FP).</li></ul>",
exemplo:{
 titulo:"Exemplo: do entreferro ao eixo",
 enun:P("Motor de indução trifásico, 6 polos, 60 Hz. A potência transferida ao rotor pelo entreferro é 20 kW e as perdas Joule no rotor são 0,6 kW. Despreze atrito e ventilação."),
 passos:[
  {p:"Qual a velocidade síncrona (em rpm)?", v:1200, r:"n<sub>s</sub> = 120·60/6 = <b>1200 rpm</b>.", dica:"n<sub>s</sub> = 120f/p, com p = número de polos."},
  {p:"Qual o escorregamento (em %)?", v:3, r:"s = 0,6/20 = 0,03 = <b>3%</b>.", dica:"Perdas Joule no rotor = s·P<sub>g</sub>."},
  {p:"Qual a velocidade do eixo (em rpm)?", v:1164, r:"n = 1200·(1 − 0,03) = <b>1164 rpm</b>.", dica:"n = n<sub>s</sub>(1 − s)."},
  {p:"Qual o torque no eixo (em N·m)?", v:159.2, tol:0.01, r:"P<sub>mec</sub> = 20 − 0,6 = 19,4 kW; ω = 2π·1164/60 = 121,9 rad/s ⇒ T = 19 400/121,9 = <b>159,2 N·m</b>. Confira: P<sub>g</sub>/ω<sub>s</sub> = 20 000/125,66 = 159,2 N·m.", dica:"T = P<sub>mec</sub>/ω<sub>r</sub> (ou P<sub>g</sub>/ω<sub>s</sub>, dá o mesmo). Converta rpm para rad/s."}
 ],
 fecho:"A 23-27 usa exatamente os passos 2 e 3; a 18-26 usa o passo 4 partindo das perdas totais."
}
});

Q("06-21",{
enun:P("Um motor de indução trifásico, alimentado por uma fonte de 60 Hz, tem 3 ranhuras por polo e por fase do estator. O escorregamento é de 2%. A velocidade de rotação, em rpm, deste motor é"),
ops:["3600","3564","1224","1200","1176"], gab:"E",
aviso:"o número de ranhuras por polo e por fase não determina o número de polos, então o enunciado está incompleto. A única alternativa compatível com escorregamento de 2% é a de um motor de 6 polos. Use a questão para treinar a relação n = n<sub>s</sub>(1 − s).",
dicas:["O motor gira abaixo da síncrona: n = n<sub>s</sub>·(1 − 0,02).","Teste as velocidades síncronas possíveis em 60 Hz (3600, 1800, 1200, 900) e veja qual dá um valor presente nas alternativas."],
erros:{
A:"3600 rpm é uma velocidade SÍNCRONA (2 polos). Com escorregamento de 2%, o rotor gira abaixo dela.",
B:"3564 = 3600 × 0,99 corresponde a escorregamento de 1%, não de 2%.",
C:"1224 = 1200 × 1,02: você somou o escorregamento. Motor de indução gira ABAIXO da síncrona: n = n<sub>s</sub>(1 − s).",
D:"1200 rpm é a velocidade síncrona de 6 polos. O rotor não pode girar exatamente nela (não haveria corrente induzida)."},
res:P("Das velocidades síncronas de 60 Hz, só 1200 rpm (6 polos) leva a uma alternativa: n = 1200·(1 − 0,02) = <b>1176 rpm</b>.")
});

Q("23-27",{
enun:P("Um motor de indução trifásico de quatro polos, 60 Hz, opera com 1,2 kW de perdas Joule no enrolamento do rotor e com potência do rotor (potência total transferida pelo entreferro desde o estator) igual a 50 kW. Nessas condições, qual é a velocidade, em rpm, de operação do motor?"),
ops:["1800,0","1798,9","1756,8","1755,7","1171,2"], gab:"C",
dicas:["Perdas Joule no rotor = s·P<sub>g</sub> ⇒ s = 1,2/50.","n = n<sub>s</sub>(1 − s), com n<sub>s</sub> = 1800 rpm."],
erros:{
A:"1800 rpm é a velocidade síncrona de 4 polos. O rotor gira com escorregamento s = 1,2/50.",
B:"1798,9 corresponde a um escorregamento muito pequeno. Confira: s = P<sub>Joule</sub>/P<sub>entreferro</sub> = 1,2/50 = 0,024.",
D:"Valor próximo, mas confira a conta: 1800 × (1 − 0,024) = 1800 × 0,976.",
E:"1171,2 = 1200 × 0,976: você usou 6 polos. O motor tem 4 polos ⇒ n<sub>s</sub> = 1800 rpm."},
res:OL(["s = 1,2/50 = 0,024.","n<sub>s</sub> = 120·60/4 = 1800 rpm.","n = 1800·(1 − 0,024) = <b>1756,8 rpm</b>."])
});

Q("18-26",{
enun:P("Um motor de indução trifásico, 220 V, 6 polos, 60 Hz, ligação Y, opera com escorregamento de 5%. Drena da rede 40 A com fator de potência 0,8 indutivo. Sabendo que as perdas do motor nessas condições são 1200 W, o valor aproximado do torque mecânico aplicado à carga, em N·m, é"),
ops:["87","92","102","112","117"], gab:"B",
dicas:["P<sub>entrada</sub> = √3·220·40·0,8. Subtraia as perdas para ter a potência no eixo.","Divida pela velocidade do EIXO: n = 1200·0,95 rpm, em rad/s."],
erros:{
A:"87 N·m sai dividindo a potência do eixo pela velocidade SÍNCRONA (125,7 rad/s). O eixo gira a 1140 rpm.",
C:"102 N·m sai usando a potência de ENTRADA. As perdas de 1200 W não chegam à carga.",
D:"112 N·m não fecha com as grandezas do problema. Monte: P<sub>eixo</sub> = P<sub>entrada</sub> − 1200 e ω = 2π·1140/60.",
E:"117 N·m: confira o cálculo da potência de entrada (com √3 e FP 0,8) e se você usou a velocidade em rad/s."},
res:OL(["P<sub>entrada</sub> = √3·220·40·0,8 = 12 194 W.","P<sub>eixo</sub> = 12 194 − 1200 = 10 994 W.","n = 1200·(1 − 0,05) = 1140 rpm ⇒ ω = 2π·1140/60 = 119,4 rad/s.","T = 10 994/119,4 ≈ <b>92 N·m</b>."])
});

Q("06-25",{
enun:P("A chave estrela-triângulo é muito utilizada para a partida de motores, em função de seu custo reduzido, praticidade e outras vantagens. Para um dado motor, possível de ser ligado nas configurações estrela e triângulo, a utilização desta chave garante a redução na corrente de partida de"),
ops:["1/√3","1/2","1/3","1/4","2/3"], gab:"C",
dicas:["Em Y, cada enrolamento recebe V/√3, então a corrente no enrolamento cai √3 vezes.","Em Δ, a corrente de LINHA é √3 vezes a do enrolamento. Junte os dois efeitos."],
erros:{
A:"1/√3 é a redução da TENSÃO no enrolamento (e da corrente no enrolamento). A corrente de LINHA cai mais, porque em Δ ela já era √3 vezes a de fase.",
B:"1/2 não aparece na chave Y-Δ. Compare a corrente de linha em Y (V/(√3Z)) com a de Δ (√3V/Z).",
D:"1/4 seria o efeito de uma compensadora com tap de 50% (k² = 0,25), não da Y-Δ.",
E:"2/3 não corresponde à relação entre as ligações. Calcule I<sub>Y</sub>/I<sub>Δ</sub> com a mesma impedância por enrolamento."},
res:P("Com impedância Z por enrolamento: em Δ, I<sub>linha</sub> = √3·V/Z; em Y, I<sub>linha</sub> = (V/√3)/Z. Razão: I<sub>Y</sub>/I<sub>Δ</sub> = <b>1/3</b>. O torque também cai para 1/3 (proporcional a V²).")
});

Q("11-26",{
enun:P("Para a partida de um motor trifásico foi utilizada uma chave estrela-delta. Se a corrente de partida desse motor na configuração estrela é igual a I, na configuração delta a corrente será igual a"),
ops:["I/6","I/3","3I","6I","8I"], gab:"C",
dicas:["É a mesma relação da chave Y-Δ, só que perguntada ao contrário.","Se em Y a corrente de linha é 1/3 da de Δ, então em Δ ela é..."],
erros:{
A:"Em Δ a corrente é MAIOR que em Y (é para isso que se parte em Y).",
B:"I/3 seria a corrente em Y sabendo a de Δ. Aqui é o inverso: conhece-se Y e pede-se Δ.",
D:"6I não sai das relações √3 × √3. A corrente de linha muda por um fator 3.",
E:"8I parece a relação I<sub>p</sub>/I<sub>n</sub> típica de partida direta, que não é o que se pergunta."},
res:P("I<sub>Y</sub> = I<sub>Δ</sub>/3 ⇒ I<sub>Δ</sub> = <b>3I</b>.")
});

Q("23-28",{
enun:P("Existem diversos procedimentos de acionamento de motores para partida que se propõem a condicionar a corrente e o torque de partida. Verifica-se que, na partida do motor"),
ops:["de corrente contínua, o procedimento de acionamento deve garantir a inexistência de corrente elétrica no enrolamento de campo do motor para que, assim, haja torque de partida.","de corrente contínua, deve ser utilizado um motor de indução auxiliar para, assim, alcançar velocidade próxima à velocidade síncrona antes de alimentar a armadura com tensão nominal, garantindo sincronismo e baixa corrente de partida.","de indução de rotor bobinado, o procedimento de acionamento deve garantir inicialmente a menor resistência rotórica possível para que, assim, haja o maior torque de partida possível do motor.","de indução, o procedimento de acionamento, com controle da razão entre a amplitude da tensão e a frequência de alimentação, possibilita uma menor corrente de partida com maior torque de partida com relação à corrente e ao torque obtidos na partida direta com tensão nominal.","síncrono, a aplicação de corrente alternada de frequência progressiva no enrolamento de campo possibilita uma menor corrente de partida, com aumento gradativo da velocidade até valores próximos da velocidade síncrona."], gab:"D",
dicas:["Pense no inversor de frequência controlando V/f: o fluxo fica constante e o motor trabalha perto do torque máximo desde a partida.","Para cada alternativa, pergunte: o que gera torque nessa máquina?"],
erros:{
A:"Sem corrente de campo não há fluxo, e sem fluxo não há torque (T = k·φ·I<sub>a</sub>). Na partida do motor CC o campo deve estar com excitação plena.",
B:"Motor CC não tem velocidade síncrona nem precisa de motor auxiliar; parte-se com resistência em série na armadura ou tensão reduzida.",
C:"É o contrário: começa-se com a MAIOR resistência rotórica, que aumenta o torque de partida e reduz a corrente.",
E:"No motor síncrono, o campo recebe corrente CONTÍNUA. A frequência variável (inversor) seria aplicada à armadura, não ao campo."},
res:P("Com controle V/f (inversor), o fluxo de entreferro fica constante e o motor parte em baixa frequência, com escorregamento pequeno: corrente baixa e torque próximo do máximo, ambos melhores que na partida direta. Alternativa <b>D</b>.")
});

Q("23-55",{
enun:P("O motor de indução bobinado permite inserir resistências adicionais no circuito do rotor por meio de escovas. Considere um MIT bobinado: 60 Hz; 8 polos; 440 V; resistência do rotor 0,2 Ω. Sabendo que o torque nominal ocorre com escorregamento de 4%, o valor da resistência a ser adicionada ao circuito do rotor, em Ω, para que o torque nominal ocorra com escorregamento de 10%, é de"),
ops:["0,2","0,3","0,4","0,5","1,0"], gab:"B",
dicas:["Para o mesmo torque, a razão R<sub>2</sub>/s precisa ficar constante.","0,2/0,04 = (0,2 + R<sub>x</sub>)/0,10."],
erros:{
A:"0,2 Ω dobraria a resistência total (0,4 Ω), o que levaria o escorregamento a 8%. Queremos 10%.",
C:"0,4 Ω é a resistência TOTAL que daria 8%. Monte (0,2 + R<sub>x</sub>)/0,10 = 5.",
D:"0,5 Ω é a resistência TOTAL necessária (0,2 + R<sub>x</sub>). A pergunta é quanto ADICIONAR.",
E:"Com 1,0 Ω adicional a resistência total seria 1,2 Ω e o torque nominal ocorreria com s = 24%. Confira a proporção: R<sub>total</sub> = 0,2·(0,10/0,04)."},
res:OL(["Torque constante ⇒ R<sub>2</sub>/s constante: 0,2/0,04 = 5.","R<sub>total</sub> = 5·0,10 = 0,5 Ω.","R<sub>adicional</sub> = 0,5 − 0,2 = <b>0,3 Ω</b>."])
});

Q("11-42",{
enun:P("Em um motor de indução, a função da resistência de aquecimento é"),
ops:["proteger o enrolamento do rotor contra sobrecarga.","proteger o enrolamento do estator do motor para evitar sobrecarga do equipamento.","aumentar o torque de partida do motor, de modo a atender cargas com grande inércia.","reduzir a corrente de partida do motor acima de 5 CV, de modo a não aumentar a demanda da instalação.","impedir a condensação de água no motor, quando ele se encontrar instalado em locais úmidos."], gab:"E",
dicas:["Ela fica ligada quando o motor está PARADO.","O que acontece com a umidade do ar dentro de uma carcaça fria à noite?"],
erros:{
A:"Proteção contra sobrecarga é feita por relé térmico ou sondas (PTC), não por uma resistência que aquece.",
B:"Aquecer o motor não protege contra sobrecarga. Pense em quando a resistência é ligada: com o motor desligado.",
C:"Torque de partida depende de projeto do rotor ou do método de partida; uma resistência de aquecimento na carcaça não age no torque.",
D:"Redução de corrente de partida é papel da chave Y-Δ, compensadora, soft-starter ou inversor."},
res:P("A resistência de aquecimento mantém a carcaça alguns graus acima do ambiente com o motor parado, evitando a condensação de umidade que degrada a isolação. Alternativa <b>E</b>.")
});

Q("11-43",{
enun:P("Considere um motor trifásico de 10 HP (1 HP = 746 W), com rendimento de 80%, fator de potência de 1/√3, alimentado por uma tensão de linha de 100 V. A corrente elétrica a ser considerada no dimensionamento dos cabos utilizados em sua instalação, em ampères, é"),
ops:["99,80","98,25","95,40","93,25","89,50"], gab:"D",
dicas:["P<sub>entrada</sub> = 7460/0,8.","I = P/(√3·V·FP). Com FP = 1/√3, o √3 se cancela."],
erros:{
A:"Confira: P<sub>entrada</sub> = 7460/0,8 = 9325 W e √3·100·(1/√3) = 100. A corrente é 9325/100.",
B:"Valor próximo, mas não sai da conta. Use exatamente 1 HP = 746 W e η = 0,8.",
C:"Refaça P<sub>entrada</sub>: o rendimento divide (7460/0,8), não subtrai 20% de outra grandeza.",
E:"89,5 A corresponde a outra potência de entrada. Confira 10 × 746 / 0,8."},
res:OL(["P<sub>entrada</sub> = 10·746/0,8 = 9325 W.","√3·V·FP = √3·100·(1/√3) = 100.","I = 9325/100 = <b>93,25 A</b>."])
});

Q("11-44",{
enun:P("As Normas referentes à instalação de motores elétricos de indução com rotor de gaiola em instalações de baixa tensão, e as técnicas de instalação desses equipamentos, preconizam"),
ops:["consultar, obrigatoriamente, a empresa de distribuição de energia elétrica local, no caso de partida direta de motores com potência acima de 2 (dois) CV, ligados diretamente à rede pública.","considerar um fator de potência igual a 0,6 para o rotor bloqueado na ocasião da partida, ao se calcular a queda de tensão.","proteger o equipamento contra sobrecargas e curto-circuito com o uso de fusíveis ou chaves magnéticas com relés térmicos (disjuntores) no ramal ligado à terra e/ou neutro.","instalar chaves estrela-triângulo ou um compensador para limitar correntes de sobrecarga nos respectivos motores em regime permanente.","dimensionar os condutores de forma tal que, durante a partida do motor, limitem a queda de tensão máxima nos terminais do dispositivo de partida a 10% da tensão nominal respectiva."], gab:"E",
dicas:["A NBR 5410 tem um limite específico de queda de tensão durante a partida de motores.","Lembre: proteção nunca vai no condutor de proteção (terra); Y-Δ age na partida, não em regime."],
erros:{
A:"O limite citado na norma para consulta à concessionária é maior (motores acima de 5 CV, conforme a rede). 2 CV não é o valor normativo.",
B:"Na partida o fator de potência típico de rotor bloqueado é baixo, por volta de 0,3, e não 0,6.",
C:"Dispositivo de proteção não é instalado no condutor de terra (PE). O neutro também tem regras próprias.",
D:"Y-Δ e compensadora limitam a corrente de PARTIDA, não sobrecargas em regime permanente."},
res:P("A NBR 5410 estabelece que, durante a partida do motor, a queda de tensão nos terminais do dispositivo de partida não deve ultrapassar 10% da tensão nominal. Alternativa <b>E</b>.")
});
