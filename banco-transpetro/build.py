"""Gera dist/index.html (página única) a partir de src/ e copia as figuras."""
import glob, os, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
DIST = os.path.join(ROOT, "dist")

css = open(os.path.join(SRC, "style.css"), encoding="utf-8").read()
data = "\n".join(open(f, encoding="utf-8").read() for f in sorted(glob.glob(os.path.join(SRC, "[0-9]*.js"))))
app = open(os.path.join(SRC, "app.js"), encoding="utf-8").read()

html = f"""<title>Banco Transpetro Elétrica</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=JetBrains+Mono:wght@400;600&family=Source+Sans+3:wght@400;600;700&display=swap">
<style>
{css}
</style>
<div class="mobile-nav"><b>Banco Transpetro · Elétrica</b><select id="msel" aria-label="Escolher bloco"></select></div>
<div class="app">
  <aside class="side">
    <div class="brand"><span class="eyebrow">Engenheiro(a) Júnior · Elétrica</span><h1>Banco Transpetro</h1><p>185 questões de 5 provas (2006 a 2023), organizadas em blocos de estudo com aprendizagem ativa.</p></div>
    <div class="overall" id="overall"></div>
    <ul class="blist" id="blist"></ul>
    <p style="margin-top:18px"><button class="btn" data-resetall="1">Zerar meu progresso</button></p>
    <p class="empty" style="font-size:.8rem">Gabarito elaborado a partir da resolução de cada questão. Questões com problema no enunciado estão sinalizadas.</p>
  </aside>
  <main class="main"><div class="wrap" id="content"></div></main>
</div>
<script>
{data}
</script>
<script>
{app}
</script>
"""
os.makedirs(DIST, exist_ok=True)
open(os.path.join(DIST, "index.html"), "w", encoding="utf-8").write(html)
if os.path.exists(os.path.join(DIST, "figs")):
    shutil.rmtree(os.path.join(DIST, "figs"))
shutil.copytree(os.path.join(ROOT, "figs"), os.path.join(DIST, "figs"))
print("ok", len(html) // 1024, "KB")
