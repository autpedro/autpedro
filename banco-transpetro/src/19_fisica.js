B({
id:"b19", titulo:"Física aplicada: termodinâmica, fluidos, calor e eletromagnetismo",
sub:"1ª lei, processos de gás ideal, ciclos e rendimento de Carnot, Pascal, Pitot, Torricelli, leis de semelhança de bombas, raio crítico de isolamento, força magnética e análise dimensional.",
objetivos:["Aplicar a 1ª lei a processos isotérmicos, adiabáticos e isobáricos","Calcular trabalho como área sob a curva no diagrama P-V","Usar temperaturas absolutas no rendimento de Carnot","Resolver problemas de prensa hidráulica, Pitot e jato de Torricelli","Aplicar as leis de semelhança de bombas centrífugas","Usar o raio crítico de isolamento e a força de Lorentz"],
qs:["06-30","06-32","08-35","11-63","11-64","11-65","11-60","11-66","11-67","11-62","11-68","18-50","18-59","23-61","23-60"],
aula:
"<h3>1. Termodinâmica</h3>"+
F("1ª lei: ΔU = Q − W (W = trabalho realizado PELO gás)<br>Gás ideal: U depende só de T ⇒ isotérmico: ΔU = 0 ⇒ Q = W<br>Adiabático: Q = 0 (recipiente isolado ou processo muito rápido) ⇒ ΔU = −W<br>Trabalho: W = ∫P dV = área sob a curva no diagrama P-V")+
P("O trabalho depende do CAMINHO entre os estados (não é função de estado). A variação de energia interna depende só dos estados inicial e final.")+
F("Carnot: η = 1 − T<sub>fria</sub>/T<sub>quente</sub> (temperaturas em KELVIN)<br>Ciclo de Carnot: 2 isotérmicas + 2 adiabáticas")+
TRAP("usar °C no rendimento de Carnot. 273 °C não é \"metade\" de 546 °C em termos absolutos.")+
"<h3>2. Fluidos</h3>"+
"<ul><li><b>Pascal (prensa):</b> F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub>; com êmbolos na mesma altura, m<sub>2</sub> = m<sub>1</sub>·(d<sub>2</sub>/d<sub>1</sub>)².</li><li><b>Pitot com manômetro:</b> ρ<sub>1</sub>v²/2 = (ρ<sub>2</sub> − ρ<sub>1</sub>)gΔh ≈ ρ<sub>2</sub>gΔh ⇒ v = √(2gΔh·ρ<sub>2</sub>/ρ<sub>1</sub>).</li><li><b>Torricelli:</b> orifício a uma profundidade y abaixo da superfície: v = √(2gy). Saindo na horizontal a uma altura h do chão: alcance x = 2√(y·h).</li></ul>"+
"<h3>3. Leis de semelhança de bombas centrífugas</h3>"+
F("Q ∝ n·D³ &nbsp;&nbsp; H ∝ n²·D² &nbsp;&nbsp; P ∝ n³·D⁵<br>Motor: n ≈ 120f/p (síncrono exato)")+
"<h3>4. Transferência de calor</h3>"+
F("Raio crítico de isolamento (cilindro): r<sub>c</sub> = k/h")+
P("Abaixo de r<sub>c</sub>, aumentar a espessura AUMENTA a troca de calor (a área externa cresce mais que a resistência de condução). A troca é máxima com raio externo igual a r<sub>c</sub>.")+
"<h3>5. Eletromagnetismo</h3>"+
F("Força de Lorentz: F = q·v × B (perpendicular a v ⇒ não muda |v|)<br>v ∥ B ⇒ F = 0 ⇒ movimento retilíneo uniforme<br>a = ω × v com ω ⊥ v ⇒ movimento circular de raio |v|/|ω|")+
"<h3>6. Análise dimensional</h3>"+
P("Isole a constante e substitua as unidades de cada grandeza. Energia: J = W·s. Se a grandeza for \"por massa\", aparece kg⁻¹."),
exemplo:{
 titulo:"Exemplo: trabalho e Carnot",
 enun:P("Um gás ideal expande de 1 m³ para 4 m³ a pressão constante de 2×10⁵ Pa. Depois, considere uma máquina de Carnot operando entre 327 °C e 27 °C."),
 passos:[
  {p:"Trabalho na expansão isobárica (em kJ)?", v:600, r:"W = PΔV = 2×10⁵·3 = 6×10⁵ J = <b>600 kJ</b>.", dica:"W = área sob a curva = P·ΔV."},
  {p:"Rendimento de Carnot (em %)?", v:50, r:"T<sub>q</sub> = 600 K, T<sub>f</sub> = 300 K ⇒ η = 1 − 300/600 = <b>50%</b>.", dica:"Converta para kelvin: some 273."},
  {p:"Se usasse °C diretamente, quanto daria (em %)? (só para ver o erro)", v:91.74, tol:0.01, r:"1 − 27/327 = 91,7%. Valor fisicamente errado: por isso sempre kelvin.", dica:"Faça 1 − 27/327."}
 ],
 fecho:"A 11-65 é o passo 2 com 546 °C e 273 °C."
}
});

Q("06-30",{
enun:P("De acordo com a Primeira Lei da Termodinâmica, com relação às transformações isotérmicas de um gás ideal, é correto afirmar que o(a)"),
ops:["calor trocado pelo gás com o meio exterior é igual ao trabalho realizado no mesmo processo.","quantidade de calor recebida é maior que o trabalho realizado.","variação da energia interna do gás é igual à quantidade de calor trocada com o meio exterior.","temperatura final do gás é sempre maior que a inicial.","pressão do gás permanece constante durante toda a transformação."], gab:"A",
dicas:["Para gás ideal, a energia interna só depende da temperatura.","Isotérmico ⇒ ΔU = 0. Aplique ΔU = Q − W."],
erros:{
B:"Se Q &gt; W, sobraria energia para aumentar U, o que mudaria a temperatura. Isotérmico ⇒ ΔU = 0 ⇒ Q = W.",
C:"ΔU = 0 no isotérmico, enquanto Q ≠ 0 (o gás troca calor). Logo ΔU ≠ Q.",
D:"Isotérmico significa temperatura CONSTANTE.",
E:"Pressão constante define o processo isobárico. No isotérmico, PV = constante: P varia com V."},
res:P("Isotérmico em gás ideal: ΔU = 0 ⇒ Q = W. Alternativa <b>A</b>.")
});

Q("06-32",{
enun:P("Um gás sofre uma transformação adiabática quando"),
ops:["está contido em um recipiente lacrado de volume constante.","a pressão se mantém constante durante todo o processo.","a variação da energia interna do gás é maior em módulo que o trabalho realizado na transformação.","está contido no interior de um recipiente termicamente isolado do ambiente externo.","ocorrem expansões e compressões suficientemente lentas, de maneira que as trocas de calor com o ambiente externo possam ser desprezadas."], gab:"D",
dicas:["Adiabático = sem troca de calor (Q = 0).","Para não trocar calor, ou o recipiente é isolado, ou o processo é RÁPIDO."],
erros:{
A:"Volume constante define o processo isocórico (isovolumétrico), não o adiabático.",
B:"Pressão constante é isobárico.",
C:"Num adiabático, |ΔU| = |W| (Q = 0). Não há desigualdade.",
E:"É o contrário: processos LENTOS dão tempo para trocar calor (tendem a isotérmicos). Adiabático costuma ser rápido."},
res:P("Adiabático ⇔ Q = 0: gás termicamente isolado do ambiente. Alternativa <b>D</b>.")
});

Q("08-35",{
enun:P("Duas amostras de um gás ideal são expandidas do estado inicial para o final, nos processos 1 e 2 quase-estáticos, conforme os diagramas PV. Processo 1: a pressão cai de 7 para 5 (×10⁵ Pa) a V = 2 m³ e depois o gás expande até 5 m³ a 5×10⁵ Pa. Processo 2: expande de 2 a 5 m³ a 7×10⁵ Pa e depois a pressão cai a 5×10⁵ Pa a V = 5 m³. Os trabalhos realizados, em joules, por amostra de gás, são, respectivamente,"),
fig:"f08_35", ops:["6 e 6","6 e 21","15 e 21","21 e 15","21 e 21"], gab:"C",
aviso:"pelas escalas do gráfico os trabalhos são 15×10⁵ J e 21×10⁵ J. As alternativas omitem o fator 10⁵; compare apenas os números.",
dicas:["Trechos a volume constante não realizam trabalho.","Trabalho = área sob a curva: P × ΔV em cada trecho horizontal."],
erros:{
A:"6 = 2 × 3? A diferença de pressão (7 − 5) não é o que conta. O trabalho é a área sob o trecho horizontal: P·ΔV.",
B:"No processo 1 o trecho horizontal está em 5 (×10⁵) e ΔV = 3: área 15.",
D:"Ordem trocada: o processo 1 expande na pressão MENOR (5), o 2 na maior (7).",
E:"Os caminhos são diferentes, e o trabalho depende do caminho."},
res:P("Processo 1: isocórico (W = 0) + isobárico a 5×10⁵ Pa: W = 5×10⁵·3 = 15×10⁵ J. Processo 2: isobárico a 7×10⁵ Pa: 21×10⁵ J + isocórico (0). Resposta <b>15 e 21</b>.")
});

Q("11-63",{
enun:P("Um gás ideal pode ir do estado inicial x ao final y pelos processos 1, 2 e 3 do diagrama P-V. Afirmação 1: O trabalho realizado pelo gás nos três processos será o mesmo. PORQUE Afirmação 2: O trabalho realizado por um gás depende apenas de seus estados inicial e final de pressão-volume. Conclui-se que"),
fig:"f11_63", ops:["as duas afirmações são verdadeiras, e a segunda justifica a primeira.","as duas afirmações são verdadeiras, e a segunda não justifica a primeira.","a primeira afirmação é verdadeira, e a segunda é falsa.","a primeira afirmação é falsa, e a segunda é verdadeira.","as duas afirmações são falsas."], gab:"E",
dicas:["Compare as áreas sob os três caminhos: são iguais?","Trabalho é função de estado ou de caminho?"],
erros:{
A:"As áreas sob os caminhos 1, 2 e 3 são claramente diferentes (o 3 tem a maior). E o trabalho depende do caminho.",
B:"Nenhuma das duas é verdadeira: as áreas diferem e o trabalho é função de caminho.",
C:"A primeira é falsa: o processo 3 (expansão a pressão alta) tem área maior que o 1 (expansão a pressão baixa).",
D:"A segunda descreve uma FUNÇÃO DE ESTADO (como U). Trabalho não é função de estado."},
res:P("Trabalho = área sob a curva, que depende do caminho: W<sub>3</sub> &gt; W<sub>2</sub> &gt; W<sub>1</sub>. As duas afirmações são <b>falsas</b>.")
});

Q("11-64",{
enun:P("A figura mostra o ciclo térmico de um gás ideal formado por dois processos isotérmicos e dois processos adiabáticos; Q<sub>1</sub> e Q<sub>2</sub> são as energias térmicas absorvida e rejeitada. O ciclo é conhecido como ciclo de"),
fig:"f11_64", ops:["Rankine","Otto","Brayton","Diesel","Carnot"], gab:"E",
dicas:["Qual ciclo ideal é definido exatamente por duas isotérmicas e duas adiabáticas?"],
erros:{
A:"Rankine é o ciclo a vapor (bomba, caldeira, turbina, condensador), com mudança de fase.",
B:"Otto: 2 adiabáticas + 2 ISOCÓRICAS (volume constante).",
C:"Brayton: 2 adiabáticas + 2 ISOBÁRICAS (turbina a gás).",
D:"Diesel: 2 adiabáticas, 1 isobárica e 1 isocórica."},
res:P("Duas isotérmicas + duas adiabáticas = ciclo de <b>Carnot</b>, o de maior rendimento entre duas temperaturas.")
});

Q("11-65",{
enun:P("Uma máquina térmica reversível a vapor absorve calor de um reservatório a 546 °C, a 20 atm, realiza trabalho e expele calor a 273 °C, a 1 atm. O zero absoluto é −273 °C. O máximo rendimento possível é"),
ops:["3/4","2/3","1/2","1/3","1/4"], gab:"D",
dicas:["Converta para kelvin: 546 + 273 e 273 + 273.","η = 1 − T<sub>f</sub>/T<sub>q</sub>. As pressões não entram."],
erros:{
A:"3/4 não sai de temperaturas absolutas. Calcule 1 − 546/819.",
B:"2/3 é a RAZÃO T<sub>f</sub>/T<sub>q</sub> = 546/819. O rendimento é 1 menos isso.",
C:"1/2 = 1 − 273/546: você usou °C. O rendimento de Carnot exige kelvin.",
E:"1/4 não sai das temperaturas dadas. Confira a conversão para kelvin."},
res:P("T<sub>q</sub> = 819 K, T<sub>f</sub> = 546 K. η = 1 − 546/819 = 1 − 2/3 = <b>1/3</b>.")
});

Q("11-60",{
enun:P("Um carro está suspenso por uma prensa hidráulica. O êmbolo maior, que sustenta o carro, tem diâmetro d<sub>1</sub> = 40 cm; o êmbolo menor tem d<sub>2</sub> = 5 cm. O fluido é ideal e as massas dos êmbolos são desprezíveis; os dois êmbolos estão na mesma altura. Se a massa do carro é 1.600 kg, qual a massa do contrapeso, em kg, para manter o carro em equilíbrio?"),
fig:"f11_60", ops:["25","50","100","200","400"], gab:"A",
dicas:["Pascal: mesma pressão nos dois êmbolos (mesma altura).","As áreas escalam com o quadrado do diâmetro: (5/40)² = 1/64."],
erros:{
B:"50 kg seria com razão 1/32. As áreas dependem do diâmetro AO QUADRADO: (40/5)² = 64.",
C:"100 kg = 1600/16: você usou a razão dos raios ou diâmetros elevada a uma potência errada? (40/5)² = 64.",
D:"200 kg = 1600/8: você usou a razão dos diâmetros sem elevar ao quadrado.",
E:"400 kg = 1600/4. A razão das áreas é 64."},
res:P("m<sub>2</sub> = 1600·(5/40)² = 1600/64 = <b>25 kg</b>.")
});

Q("11-66",{
enun:P("Deseja-se medir a velocidade v do fluido 1 com o instrumento (tubo de Pitot com manômetro em U) da figura. A diferença de nível do fluido 2 é 5 cm. Com g = 9,8 m/s² e densidade do fluido 1 igual a 9,8×10⁻⁵ vezes a do fluido 2, a velocidade do fluido 1, em m/s, é"),
fig:"f11_66", ops:["50","100","250","500","1000"], gab:"B",
dicas:["A pressão dinâmica ρ<sub>1</sub>v²/2 é equilibrada pela coluna (ρ<sub>2</sub> − ρ<sub>1</sub>)gΔh ≈ ρ<sub>2</sub>gΔh.","v² = 2gΔh·(ρ<sub>2</sub>/ρ<sub>1</sub>) = 2·9,8·0,05/(9,8×10⁻⁵)."],
erros:{
A:"Confira: v² = 0,98/(9,8×10⁻⁵) = 10⁴.",
C:"Talvez Δh tenha ficado em cm ou o fator 2 tenha sido esquecido. Use Δh = 0,05 m.",
D:"500 m/s sai de unidades erradas em Δh. Converta 5 cm = 0,05 m.",
E:"1000 m/s: você esqueceu a raiz quadrada? v² = 10⁴."},
res:P("v = √(2·9,8·0,05/9,8×10⁻⁵) = √(0,98/9,8×10⁻⁵) = √10⁴ = <b>100 m/s</b>.")
});

Q("11-67",{
enun:P("Deseja-se fazer um pequeno orifício na parede de um reservatório de água para que o jato atinja exatamente o ponto x, a 6 m da base. O nível da água permanece H = 10 m. Qual o valor, em metros, da distância mínima y da lâmina d'água (abaixo da superfície) para que a água atinja x?"),
fig:"f11_67", ops:["1,0","3,0","4,0","6,0","9,0"], gab:"A",
dicas:["v = √(2gy) (Torricelli); o orifício está a h = 10 − y do chão.","Alcance: x = v·√(2h/g) = 2√(y·h). Resolva 2√(y(10 − y)) = 6."],
erros:{
B:"Com y = 3: x = 2√(3·7) ≈ 9,2 m. Monte a equação y(10 − y) = 9.",
C:"Com y = 4: x = 2√(4·6) ≈ 9,8 m.",
D:"Com y = 6: x ≈ 9,8 m (simétrico ao y = 4).",
E:"y = 9 também atinge 6 m (é a outra raiz), mas a pergunta pede a profundidade MÍNIMA."},
res:OL(["x = 2√(y·h), com h = 10 − y.","36 = 4y(10 − y) ⇒ y² − 10y + 9 = 0 ⇒ y = 1 ou 9.","Mínima: <b>y = 1 m</b>."])
});

Q("11-62",{
enun:P("Num sistema de bombeamento, uma bomba centrífuga tem vazão 0,5 m³/s e altura de carga total 3 m a 1.800 rpm, acionada por um motor síncrono de 4 polos em 60 Hz. O escoamento é permanente, não viscoso, uniforme e sem perdas. Se o motor for substituído por um motor síncrono de 2 polos, a altura de carga total da bomba, em metros, é"),
ops:["0,75","1,50","6,00","9,00","12,00"], gab:"E",
dicas:["2 polos em 60 Hz ⇒ 3600 rpm: a rotação dobra.","H ∝ n²."],
erros:{
A:"0,75 = 3/4: com MENOS polos a rotação aumenta, e a altura também.",
B:"Menos polos ⇒ mais velocidade. A altura não cai.",
C:"6 m supõe H ∝ n. A altura de carga varia com o QUADRADO da rotação.",
D:"9 m supõe rotação triplicada. De 4 para 2 polos a rotação dobra."},
res:P("n: 1800 → 3600 rpm (×2). H ∝ n² ⇒ H = 3·4 = <b>12 m</b>. (A vazão dobraria e a potência ficaria 8 vezes maior.)")
});

Q("11-68",{
enun:P("Uma bomba centrífuga com impelidor de diâmetro D bombeia um fluido ideal a uma vazão Q à velocidade de rotação ω. Deseja-se substituí-la por outra semelhante para operar na mesma velocidade, porém com uma vazão n vezes maior. O diâmetro do impelidor da nova bomba deve ser"),
ops:["D·∛n","D·√n","D·n²","D/n²","D/n³"], gab:"A",
dicas:["Lei de semelhança: Q ∝ ω·D³.","Mesma ω: Q'/Q = (D'/D)³ = n."],
erros:{
B:"√n viria de Q ∝ D², que vale para a altura (H ∝ D²·ω²), não para a vazão.",
C:"Aumentar D ao quadrado de n multiplicaria a vazão por n⁶.",
D:"Para MAIS vazão o impelidor deve AUMENTAR.",
E:"Para mais vazão o diâmetro aumenta, e a relação é a raiz cúbica."},
res:P("Q ∝ ωD³ ⇒ (D'/D)³ = n ⇒ <b>D' = D·∛n</b>.")
});

Q("18-50",{
enun:P("Um duto cilíndrico metálico, longo, imerso na água, conduz um fluido aquecido. O diâmetro interno do duto é 16 cm; a condutividade térmica do duto é 40 W/(m·°C); o coeficiente de convecção da água é 400 W/(m²·°C); a temperatura do fluido é constante e o regime é permanente. A espessura de parede do duto que confere a MÁXIMA transferência de calor do fluido à água é, em cm,"),
ops:["0,1","0,5","2","4","8"], gab:"C",
dicas:["Raio crítico: r<sub>c</sub> = k/h.","Espessura = r<sub>c</sub> − r<sub>interno</sub>."],
erros:{
A:"Confira r<sub>c</sub> = 40/400 = 0,1 m = 10 cm (não 0,1 cm).",
B:"0,5 cm não sai de r<sub>c</sub> − r<sub>i</sub>. Use r<sub>i</sub> = 8 cm (metade do diâmetro).",
D:"4 cm = 10 − 6? O raio interno é 16/2 = 8 cm.",
E:"8 cm é o raio interno. A espessura é 10 − 8."},
res:P("r<sub>c</sub> = k/h = 40/400 = 0,10 m = 10 cm. r<sub>i</sub> = 8 cm ⇒ espessura = <b>2 cm</b>.")
});

Q("18-59",{
enun:P("Um campo magnético B uniforme, orientado na direção y, está no espaço pontilhado da figura. Uma partícula de massa M e carga +Q, com velocidade v constante e na direção y, penetra no campo. Enquanto estiver no interior do campo, o módulo da velocidade instantânea |v| e a forma da trajetória serão, respectivamente,"),
fig:"f18_59", ops:["crescente e hiperbólica","decrescente e circular","constante e elíptica","constante e circular","constante e retilínea"], gab:"E",
dicas:["F = Q·v × B. Qual o produto vetorial de dois vetores paralelos?"],
erros:{
A:"A força magnética nunca realiza trabalho (é perpendicular a v), então |v| não cresce.",
B:"A força magnética não freia a partícula. E aqui ela é nula.",
C:"Trajetórias curvas só aparecem se v tiver componente perpendicular a B.",
D:"Circular seria com v perpendicular a B. Aqui v é paralela a B."},
res:P("v ∥ B ⇒ v × B = 0 ⇒ F = 0. A partícula segue em <b>movimento retilíneo com velocidade constante</b>.")
});

Q("23-61",{
enun:P("Uma partícula segue um movimento retilíneo no R³, com velocidade constante (1, 2, 2), até entrar numa região que provoca um vetor aceleração A = (2, −2, 1) × v, onde × é o produto vetorial e v a velocidade instantânea. Enquanto estiver na região, a partícula descreverá um(a)"),
ops:["arco de círculo de raio 1","arco de círculo de raio 3","arco de parábola","trajetória helicoidal","trajetória retilínea"], gab:"A",
dicas:["a = ω × v é a cinemática de rotação com velocidade angular ω = (2, −2, 1), |ω| = 3.","Verifique se v é perpendicular a ω: v·ω = 2 − 4 + 2. Se for, a trajetória é um círculo de raio |v|/|ω|."],
erros:{
B:"Raio = |v|/|ω| = 3/3 = 1. Você usou |v| ou |ω| sozinho.",
C:"Parábola exige aceleração constante. Aqui a aceleração gira junto com v.",
D:"Hélice aparece quando v tem componente PARALELA a ω. Como v·ω = 0, não há avanço ao longo do eixo.",
E:"A aceleração não é nula: (2, −2, 1) × (1, 2, 2) ≠ 0."},
res:OL(["ω = (2, −2, 1), |ω| = 3; |v| = √(1 + 4 + 4) = 3.","v·ω = 2 − 4 + 2 = 0 ⇒ v ⊥ ω: movimento circular num plano perpendicular a ω.","R = |v|/|ω| = <b>1</b>."])
});

Q("23-60",{
enun:P("A equação de Bond relaciona a energia E necessária para quebrar partículas de minério do diâmetro d<sub>1</sub> para d<sub>2</sub> (d<sub>2</sub> &lt; d<sub>1</sub>): E = 2K·[1/√d<sub>2</sub> − 1/√d<sub>1</sub>]. A dimensão da constante de Bond K pode ser escrita como"),
ops:["m<sup>−1/2</sup>·kg·W·s","m<sup>1/2</sup>·kg<sup>−1</sup>·W·s<sup>−1</sup>","m<sup>1/2</sup>·W·s","m<sup>−1/2</sup>·kg<sup>−1</sup>·W·s","m<sup>−1/2</sup>·kg·W·s<sup>−1</sup>"], gab:"C",
aviso:"o enunciado fala em energia \"por quantidade de massa\", mas nenhuma alternativa traz kg⁻¹ com o expoente correto do metro. A alternativa compatível é a que trata E como energia (J = W·s).",
dicas:["K = E·√d/2: a unidade de K é [E]·m<sup>1/2</sup>.","Energia em J = W·s."],
erros:{
A:"O termo 1/√d tem unidade m<sup>−1/2</sup>; para compensar, K leva m<sup>+1/2</sup>. E não há motivo para kg multiplicando.",
B:"W·s⁻¹ não é energia. Energia é W·s.",
D:"O expoente do metro deve ser +1/2 (K = E·√d).",
E:"Expoente do metro e da unidade de tempo invertidos. K = E·√d ⇒ W·s·m<sup>1/2</sup>."},
res:P("K = E·√d/2 ⇒ [K] = J·m<sup>1/2</sup> = <b>m<sup>1/2</sup>·W·s</b>.")
});
