(function(){
"use strict";
const BLOCOS = window.BLOCOS, QS = window.QS;
const KEY = "bq-transpetro-v1";
let st = {q:{}, ex:{}, last:null, tab:"aula", filtro:"todas"};
try { const raw = localStorage.getItem(KEY); if (raw) st = Object.assign(st, JSON.parse(raw)); } catch(e) {}
if (!st.last || !BLOCOS.find(b => b.id === st.last)) st.last = BLOCOS[0].id;
function save(){ try { localStorage.setItem(KEY, JSON.stringify(st)); } catch(e) {} }
function qs(id){ return st.q[id] || (st.q[id] = {ok:false, tries:0, elim:[], hint:0, show:false, errou:false}); }

const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LET = ["A","B","C","D","E","F"];
const provaNome = {"06":"Transpetro 2006 · Prova 37","08":"Transpetro 2008 · Prova 8","11":"Transpetro 2011 · Prova 9","18":"Transpetro 2018 · PSP RH 2018.1","23":"Transpetro 2023 · PSP 2023.2"};

let sample = null;
if (window.claude && window.claude.use) {
  window.claude.use("sample").then(s => { sample = s; document.querySelectorAll(".ai").forEach(el => el.hidden = !s); }).catch(() => {});
}

/* ---------- navegação ---------- */
function blockStats(b){
  let ok = 0; b.qs.forEach(id => { if (st.q[id] && st.q[id].ok) ok++; });
  return {ok, n:b.qs.length};
}
function renderNav(){
  const cur = st.last || BLOCOS[0].id;
  let tot = 0, totok = 0;
  const items = BLOCOS.map((b, i) => {
    const s = blockStats(b); tot += s.n; totok += s.ok;
    return (b.grupo ? `<li class="grp">${b.grupo}</li>` : "") + `<li><button data-b="${b.id}" aria-current="${b.id===cur}"><span class="bn">${String(i+1).padStart(2,"0")}</span><span class="bt">${b.titulo}</span><span class="bp num">${s.ok}/${s.n} questões resolvidas</span></button></li>`;
  }).join("");
  $("#blist").innerHTML = items;
  const pct = tot ? Math.round(100*totok/tot) : 0;
  $("#overall").innerHTML = `<div class="num">${totok} de ${tot} questões resolvidas (${pct}%)</div><div class="bar"><i style="width:${pct}%"></i></div>`;
  $("#msel").innerHTML = BLOCOS.map((b,i) => { const s = blockStats(b); return `<option value="${b.id}" ${b.id===cur?"selected":""}>${String(i+1).padStart(2,"0")} · ${b.titulo} (${s.ok}/${s.n})</option>`; }).join("");
}
function openBlock(id, tab){
  st.last = id; if (tab) st.tab = tab; save();
  renderNav(); renderBlock(); window.scrollTo(0,0);
}

/* ---------- bloco ---------- */
function renderBlock(){
  const b = BLOCOS.find(x => x.id === st.last) || BLOCOS[0];
  const idx = BLOCOS.indexOf(b);
  const s = blockStats(b);
  const tabs = [["aula","Aula"],["exemplo","Exemplo guiado"],["questoes",`Questões da prova (${s.ok}/${s.n})`]];
  let html = `<header class="bhead"><span class="eyebrow">Bloco ${String(idx+1).padStart(2,"0")} de ${BLOCOS.length}</span><h2>${b.titulo}</h2><p>${b.sub}</p></header>
  <nav class="tabs" role="tablist">${tabs.map(([k,l]) => `<button role="tab" data-tab="${k}" aria-selected="${st.tab===k}">${l}</button>`).join("")}</nav>`;
  if (st.tab === "aula") html += renderAula(b);
  else if (st.tab === "exemplo") html += renderExemplo(b);
  else html += renderQuestoes(b);
  const nav = [];
  if (idx > 0) nav.push(`<button class="btn" data-b="${BLOCOS[idx-1].id}">← ${BLOCOS[idx-1].titulo}</button>`);
  if (idx < BLOCOS.length-1) nav.push(`<button class="btn" data-b="${BLOCOS[idx+1].id}">${BLOCOS[idx+1].titulo} →</button>`);
  html += `<div class="actions" style="justify-content:space-between">${nav.join("")}</div>`;
  $("#content").innerHTML = html;
  document.querySelectorAll(".ai").forEach(el => el.hidden = !sample);
}

function renderAula(b){
  const intro = b === BLOCOS[0] ? `<section class="fb note"><p><b>Como usar:</b> em cada bloco, leia a <b>Aula</b> (curta, só o que cai), resolva o <b>Exemplo guiado</b> passo a passo e depois faça as <b>Questões da prova</b>. Se errar, o banco mostra onde o raciocínio falhou e você tenta de novo; a resolução só abre depois de acertar ou de insistir. Seu progresso fica salvo neste navegador.</p></section>` : "";
  return intro + `<section class="goal"><b>Ao final deste bloco você deve conseguir:</b><ul>${b.objetivos.map(o=>`<li>${o}</li>`).join("")}</ul></section>
  <article class="prose">${b.aula}</article>
  <div class="actions"><button class="btn pri" data-tab="exemplo">Praticar no exemplo guiado →</button></div>`;
}

function renderExemplo(b){
  const ex = b.exemplo; const es = st.ex[b.id] || (st.ex[b.id] = {step:0, tries:{}, shown:{}});
  let html = `<section class="prose"><h3 style="margin-top:0">${ex.titulo}</h3>${ex.enun}${ex.fig?figHtml(ex.fig):""}
  <p class="empty">Resolva passo a passo. Escreva sua resposta antes de conferir; o passo seguinte só abre depois.</p></section>`;
  ex.passos.forEach((p, i) => {
    const locked = i > es.step;
    const done = i < es.step;
    const tr = es.tries[i] || 0;
    html += `<div class="step ${locked?"locked":""}" data-step="${i}">
      <div class="sq">Passo ${i+1}. ${p.p}</div>`;
    if (!locked) {
      if (done) html += `<div class="fb ok"><span class="t">✓ Resposta do passo</span><p>${p.r}</p></div>`;
      else {
        html += `<div class="row"><input type="text" id="ex-${b.id}-${i}" placeholder="${p.v!==undefined?"Digite o valor numérico":"Escreva sua ideia em poucas palavras"}" autocomplete="off"><button class="btn pri" data-excheck="${i}">Conferir</button></div>`;
        if (tr > 0 && p.v !== undefined) html += `<div class="fb err"><span class="t">Ainda não</span><p>${p.dica || "Revise a fórmula e as unidades deste passo."}</p></div>`;
        if (tr >= 2) html += `<div class="actions"><button class="btn warn" data-exshow="${i}">Mostrar este passo</button></div>`;
      }
    }
    html += `</div>`;
  });
  if (es.step >= ex.passos.length) html += `<div class="fb ok"><span class="t">Exemplo concluído</span><p>${ex.fecho || "Agora aplique o mesmo raciocínio nas questões da prova."}</p></div><div class="actions"><button class="btn pri" data-tab="questoes">Ir para as questões →</button><button class="btn" data-exreset="1">Refazer exemplo</button></div>`;
  return html;
}
function parseNum(s){ s = String(s).trim().replace(/\s/g,"").replace(/\.(?=\d{3}(\D|$))/g,"").replace(",", "."); const m = s.match(/-?\d+(\.\d+)?(e-?\d+)?/i); return m ? parseFloat(m[0]) : NaN; }

/* ---------- questões ---------- */
function figHtml(f){ return `<div class="figs">${[].concat(f).map(x => `<img src="figs/${x}.png" alt="Figura da questão" loading="lazy">`).join("")}</div>`; }
function renderQuestoes(b){
  const f = st.filtro;
  const ids = b.qs.filter(id => { const s = st.q[id]; if (f==="pend") return !(s && s.ok); if (f==="erradas") return s && s.errou; return true; });
  let html = "";
  if (b.texto) html += `<details class="textobox" open><summary>${b.textoTitulo || "Texto da prova (leia antes de responder)"}</summary><div class="figs texto">${[].concat(b.texto).map(x => `<img src="figs/${x}.png" alt="Texto da prova" loading="lazy">`).join("")}</div></details>`;
  html += `<div class="qtools"><label for="filtro">Mostrar</label><select id="filtro"><option value="todas" ${f==="todas"?"selected":""}>Todas</option><option value="pend" ${f==="pend"?"selected":""}>Só as não resolvidas</option><option value="erradas" ${f==="erradas"?"selected":""}>Só as que já errei</option></select><span>Errou? Você vê onde o raciocínio falhou e tenta de novo. A resolução só aparece depois.</span></div>`;
  if (!ids.length) html += `<p class="empty">Nenhuma questão neste filtro.</p>`;
  ids.forEach(id => html += renderQ(id));
  return html;
}
function renderQ(id){
  const q = QS[id]; const s = qs(id);
  const [ano, n] = id.split("-");
  const status = s.ok ? `<span class="chip ok">resolvida</span>` : (s.tries ? `<span class="chip try">${s.tries} tentativa${s.tries>1?"s":""}</span>` : "");
  let h = `<article class="q ${s.ok?"ok":""}" id="q-${id}" data-q="${id}">
    <div class="qhead"><span class="chip">${provaNome[ano]} · Questão ${parseInt(n,10)}</span>${status}</div>`;
  if (q.aviso) h += `<div class="aviso"><b>Atenção:</b> ${q.aviso}</div>`;
  h += `<div class="enun">${q.enun}</div>`;
  if (q.fig) h += figHtml(q.fig);
  if (q.tipo === "vf") h += renderVF(q, s, id); else h += renderMC(q, s, id);
  h += `</article>`;
  return h;
}
function renderMC(q, s, id){
  let h = `<div class="ops" role="radiogroup">`;
  q.ops.forEach((o, i) => {
    const L = LET[i]; const el = s.elim.includes(L); const right = s.ok && L === q.gab;
    h += `<label class="op ${el?"elim":""} ${right?"right":""}"><input type="radio" name="r-${id}" value="${L}" ${el||s.ok?"disabled":""} ${right?"checked":""}><span class="L">(${L})</span><span>${o}</span></label>`;
  });
  h += `</div>`;
  const last = s.lastWrong && !s.ok ? s.lastWrong : null;
  if (last) h += `<div class="fb err"><span class="t">Alternativa ${last} não. Veja onde o raciocínio falhou:</span><p>${(q.erros && q.erros[last]) || "Essa alternativa não fecha com o enunciado. Volte às hipóteses da questão e refaça a conta com calma."}</p><p><b>Corrija esse ponto e tente de novo.</b></p></div>`;
  for (let i = 0; i < s.hint && i < q.dicas.length; i++) h += `<div class="fb hint"><span class="t">Dica ${i+1}</span><p>${q.dicas[i]}</p></div>`;
  if (!s.ok) {
    h += `<div class="actions"><button class="btn pri" data-check="${id}">Verificar</button>`;
    if (s.hint < q.dicas.length) h += `<button class="btn warn" data-hint="${id}">${s.hint?"Mais uma dica":"Pedir dica"}</button>`;
    if (s.tries >= 2 && !s.show) h += `<button class="btn" data-ask="${id}">Ver resolução</button>`;
    h += `</div>`;
    if (s.confirm) { const rest = q.ops.length - s.elim.length; h += `<div class="confirm fb note"><p>Você ainda tem ${rest} alternativas possíveis${s.hint<q.dicas.length?" e dicas não usadas":""}. Tentar mais uma vez costuma fixar melhor. Ver a resolução mesmo assim?</p><div class="actions"><button class="btn" data-reveal="${id}">Ver resolução</button><button class="btn pri" data-noreveal="${id}">Vou tentar de novo</button></div></div>`; }
    h += aiBox(id);
  }
  if (s.ok) h += `<div class="fb ok"><span class="t">${s.show && !s.acertou ? "Resolução liberada" : "Correto! Alternativa " + q.gab}</span></div>`;
  if (s.ok || s.show) h += resHtml(q, s);
  return h;
}
function renderVF(q, s, id){
  s.vf = s.vf || {};
  let h = `<p><b>Julgue cada afirmativa (V ou F):</b></p><div class="ops">`;
  q.itens.forEach((it, i) => {
    const v = s.vf[i]; const chk = s.vfchk && s.vfchk[i];
    const cls = chk === undefined ? "" : (chk ? "good" : "bad");
    h += `<div class="vfrow ${cls}"><span>${it.t}</span><span class="seg"><button data-vf="${id}|${i}|1" aria-pressed="${v===true}">V</button><button data-vf="${id}|${i}|0" aria-pressed="${v===false}">F</button></span></div>`;
    if (chk === false) h += `<div class="fb err"><p>${it.erro}</p></div>`;
  });
  h += `</div>`;
  for (let i = 0; i < s.hint && i < q.dicas.length; i++) h += `<div class="fb hint"><span class="t">Dica ${i+1}</span><p>${q.dicas[i]}</p></div>`;
  if (!s.ok) {
    h += `<div class="actions"><button class="btn pri" data-vfcheck="${id}">Verificar</button>${s.hint<q.dicas.length?`<button class="btn warn" data-hint="${id}">Pedir dica</button>`:""}${s.tries>=2&&!s.show?`<button class="btn" data-reveal="${id}">Ver resolução</button>`:""}</div>`;
    h += aiBox(id);
  } else h += `<div class="fb ok"><span class="t">Todas as afirmativas julgadas corretamente</span></div>`;
  if (s.ok || s.show) h += resHtml(q, s);
  return h;
}
function resHtml(q, s){
  let h = `<section class="res"><h4>Resolução comentada</h4>${q.res}`;
  if (q.erros && q.tipo !== "vf") {
    const outros = Object.keys(q.erros).filter(k => k !== q.gab);
    if (outros.length) h += `<div class="whyno"><p><b>Por que as outras não:</b></p>${outros.map(k => `<p><b>(${k})</b> ${q.erros[k]}</p>`).join("")}</div>`;
  }
  return h + `</section>`;
}
function aiBox(id){
  return `<details class="ai" ${sample?"":"hidden"}><summary>Mostre seu raciocínio e receba um diagnóstico</summary>
    <p class="empty">Escreva como você pensou (fórmulas, contas, hipóteses). O diagnóstico aponta o passo que falhou sem entregar a resposta.</p>
    <textarea id="raz-${id}" placeholder="Ex.: usei n = 120f/p com p = 4, achei 1800 rpm e multipliquei por (1 + s)..."></textarea>
    <div class="actions"><button class="btn" data-ai="${id}">Analisar meu raciocínio</button></div>
    <div class="out" id="out-${id}" hidden></div></details>`;
}
const strip = h => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent.replace(/\s+/g," ").trim(); };
async function diagnose(id, btn){
  const q = QS[id]; const ta = $("#raz-"+id); const out = $("#out-"+id);
  const txt = ta.value.trim(); if (!txt) { ta.focus(); return; }
  const s = qs(id);
  const sel = (document.querySelector(`input[name="r-${id}"]:checked`)||{}).value || "nenhuma";
  const ops = q.ops ? q.ops.map((o,i)=>`(${LET[i]}) ${strip(o)}`).join("\n") : q.itens.map((it,i)=>`${i+1}) ${strip(it.t)} [${it.v?"V":"F"}]`).join("\n");
  const prompt = `Você é um tutor de engenharia elétrica que ensina por aprendizagem ativa, em português do Brasil.
Um estudante está resolvendo uma questão de concurso (Transpetro, Engenharia Elétrica).

ENUNCIADO: ${strip(q.enun)}
${q.fig ? "(A questão tem uma figura; use a resolução abaixo para saber o que ela mostra.)" : ""}
ALTERNATIVAS:
${ops}
GABARITO (NÃO REVELE AO ESTUDANTE): ${q.gab || "ver itens"}
RESOLUÇÃO DE REFERÊNCIA (NÃO COPIE): ${strip(q.res)}

Alternativa que o estudante marcou: ${sel}. Alternativas já eliminadas: ${s.elim.join(", ") || "nenhuma"}.
RACIOCÍNIO DO ESTUDANTE:
"""${txt.slice(0, 4000)}"""

Tarefa: aponte com precisão o primeiro ponto em que o raciocínio do estudante falha (conceito, fórmula, hipótese, unidade ou conta) e explique por que está errado. Se o raciocínio estiver correto até onde foi, diga isso e indique o próximo passo.
Regras: NÃO diga qual é a alternativa correta, NÃO dê o valor numérico final, NÃO resolva a questão inteira. Termine com UMA pergunta orientadora que faça o estudante corrigir o erro sozinho. Máximo de 170 palavras, texto simples sem markdown.`;
  btn.disabled = true; out.hidden = false; out.textContent = "Analisando seu raciocínio...";
  try {
    await sample(prompt, {onText: ({text}) => { out.textContent = text; }, cache:false});
  } catch (e) {
    const msg = {not_granted:"Sem permissão para usar o Claude nesta página.", rate_limited:"Muitas análises seguidas. Espere um pouco e tente de novo.", session_expired:"Sua sessão expirou. Entre de novo no claude.ai."}[e && e.code];
    out.textContent = (e && e.text) ? e.text : (msg || "A análise não funcionou agora. Você também pode colar seu raciocínio na conversa com o Claude.");
    if (e && (e.code === "not_granted" || e.code === "sampling_disabled")) document.querySelectorAll(".ai").forEach(el => el.hidden = true);
  } finally { btn.disabled = false; }
}

function rerenderQ(id){
  const el = $("#q-"+id); if (!el) return;
  const open = el.querySelector("details.ai[open]"); const draft = el.querySelector("textarea") ? el.querySelector("textarea").value : "";
  const outEl = el.querySelector(".ai .out"); const outTxt = outEl && !outEl.hidden ? outEl.textContent : "";
  el.outerHTML = renderQ(id);
  const n = $("#q-"+id);
  const d = n.querySelector("details.ai"); if (d) { d.hidden = !sample; if (open) d.open = true; }
  const ta = n.querySelector("textarea"); if (ta) ta.value = draft;
  if (outTxt) { const o = n.querySelector(".ai .out"); if (o) { o.hidden = false; o.textContent = outTxt; } }
  renderNav();
  const tb = document.querySelector('[data-tab="questoes"]'); if (tb) { const b = BLOCOS.find(x=>x.id===st.last); const s = blockStats(b); tb.textContent = `Questões da prova (${s.ok}/${s.n})`; }
}

/* ---------- eventos ---------- */
document.addEventListener("click", ev => {
  const t = ev.target.closest("button"); if (!t) return;
  const d = t.dataset;
  if (d.b) return openBlock(d.b, "aula");
  if (d.tab) { st.tab = d.tab; save(); renderBlock(); return; }
  if (d.check) {
    const id = d.check, q = QS[id], s = qs(id);
    const sel = document.querySelector(`input[name="r-${id}"]:checked`);
    if (!sel) { const el = $("#q-"+id+" .ops"); el.style.outline = "2px dashed var(--amber)"; setTimeout(()=>el.style.outline="",900); return; }
    s.tries++;
    if (sel.value === q.gab) { s.ok = true; s.acertou = true; s.lastWrong = null; s.confirm = false; }
    else { s.errou = true; s.lastWrong = sel.value; if (!s.elim.includes(sel.value)) s.elim.push(sel.value); }
    save(); rerenderQ(id); return;
  }
  if (d.hint) { const s = qs(d.hint); s.hint++; save(); rerenderQ(d.hint); return; }
  if (d.ask) { const s = qs(d.ask); s.confirm = true; save(); rerenderQ(d.ask); return; }
  if (d.noreveal) { const s = qs(d.noreveal); s.confirm = false; save(); rerenderQ(d.noreveal); return; }
  if (d.reveal) { const s = qs(d.reveal); s.show = true; s.confirm = false; s.lastWrong = null; save(); rerenderQ(d.reveal); return; }
  if (d.vf) { const [id,i,v] = d.vf.split("|"); const s = qs(id); s.vf = s.vf || {}; s.vf[i] = v === "1"; if (s.vfchk) delete s.vfchk[i]; save(); rerenderQ(id); return; }
  if (d.vfcheck) {
    const id = d.vfcheck, q = QS[id], s = qs(id); s.vf = s.vf || {};
    if (q.itens.some((_, i) => s.vf[i] === undefined)) return;
    s.tries++; s.vfchk = {}; let all = true;
    q.itens.forEach((it, i) => { const ok = s.vf[i] === it.v; s.vfchk[i] = ok; if (!ok) all = false; });
    if (all) { s.ok = true; s.acertou = true; } else s.errou = true;
    save(); rerenderQ(id); return;
  }
  if (d.ai) return diagnose(d.ai, t);
  if (d.excheck !== undefined) {
    const b = BLOCOS.find(x=>x.id===st.last); const i = +d.excheck; const p = b.exemplo.passos[i]; const es = st.ex[b.id];
    const inp = $(`#ex-${b.id}-${i}`); const val = inp ? inp.value.trim() : "";
    if (!val) { if (inp) inp.focus(); return; }
    if (p.v === undefined) { es.step = i+1; save(); renderBlock(); return; }
    const x = parseNum(val); const tol = p.tol || 0.02;
    const ok = isFinite(x) && Math.abs(x - p.v) <= Math.abs(p.v)*tol + 1e-9;
    if (ok) es.step = i+1; else es.tries[i] = (es.tries[i]||0) + 1;
    save(); renderBlock();
    const nx = $(`[data-step="${ok?i+1:i}"]`); if (nx) nx.scrollIntoView({block:"nearest"});
    return;
  }
  if (d.exshow !== undefined) { const b = BLOCOS.find(x=>x.id===st.last); st.ex[b.id].step = +d.exshow + 1; save(); renderBlock(); return; }
  if (d.exreset) { const b = BLOCOS.find(x=>x.id===st.last); st.ex[b.id] = {step:0, tries:{}, shown:{}}; save(); renderBlock(); return; }
  if (d.resetall) { if (t.dataset.armed) { st = {q:{}, ex:{}, last:st.last, tab:"aula", filtro:"todas"}; save(); renderNav(); renderBlock(); t.textContent = "Zerar meu progresso"; delete t.dataset.armed; } else { t.dataset.armed = "1"; t.textContent = "Clique de novo para confirmar"; } return; }
});
document.addEventListener("change", ev => {
  if (ev.target.id === "filtro") { st.filtro = ev.target.value; save(); renderBlock(); }
  if (ev.target.id === "msel") openBlock(ev.target.value, "aula");
  if (ev.target.name && ev.target.name.startsWith("r-")) { const id = ev.target.name.slice(2); const s = qs(id); if (s.lastWrong) { s.lastWrong = s.lastWrong; } }
});
document.addEventListener("keydown", ev => {
  if (ev.key === "Enter" && ev.target.matches(".step input")) { const b = ev.target.closest(".step").querySelector("[data-excheck]"); if (b) b.click(); }
});

renderNav(); renderBlock();
})();
