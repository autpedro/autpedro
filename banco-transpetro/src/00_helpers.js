window.QS = {}; window.BLOCOS = [];
function Q(id, o){ if (window.QS[id]) throw new Error("questão duplicada " + id); window.QS[id] = o; }
function B(o){ window.BLOCOS.push(o); }
/* matriz: M("1 2;3 4") */
function M(s){ return '<table class="mat"><tbody>' + s.split(";").map(r => "<tr>" + r.trim().split(/\s+/).map(c => "<td>" + c + "</td>").join("") + "</tr>").join("") + "</tbody></table>"; }
/* fração: FR("a","b") */
function FR(a, b){ return '<span class="fr"><span>' + a + '</span><span>' + b + '</span></span>'; }
function P(t){ return "<p>" + t + "</p>"; }
function F(t){ return '<div class="formula">' + t + '</div>'; }
function TRAP(t){ return '<div class="trap"><b>Armadilha comum:</b> ' + t + '</div>'; }
function OL(arr){ return "<ol>" + arr.map(x => "<li>" + x + "</li>").join("") + "</ol>"; }
