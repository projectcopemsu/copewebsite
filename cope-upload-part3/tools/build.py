"""Builds the 12 static pages and a single-file preview.
Usage: python3 tools/build.py     (run from the site folder)"""
import os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
from pages import PAGES

FILES = {"home": "index.html"}
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap">'

def page(pid, title, body):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="COPE (Communities Organizing for Prevention and Empowerment) at Montclair State University: prevention, education, outreach and youth empowerment in Paterson, NJ.">
<link rel="icon" href="assets/img/favicon.png">
{FONTS}
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div id="site-header"></div>
<main id="main" data-page="{pid}">{body}</main>
<div id="site-footer"></div>
<script src="assets/js/data.js"></script>
<script src="assets/js/site.js"></script>
</body>
</html>
"""

for pid, (title, body) in PAGES.items():
    with open(os.path.join(ROOT, FILES.get(pid, pid + ".html")), "w") as f:
        f.write(page(pid, title, body))

# ---- single-file preview (hash-routed) ----
css = open(os.path.join(ROOT, "assets/css/style.css")).read()
data = open(os.path.join(ROOT, "assets/js/data.js")).read()
import base64
for img in ("assets/img/cope-logo-full.png", "assets/img/cope-logo.png"):
    uri = "data:image/png;base64," + base64.b64encode(open(os.path.join(ROOT, img), "rb").read()).decode()
    data = data.replace('"' + img + '"', '"' + uri + '"')
js = open(os.path.join(ROOT, "assets/js/site.js")).read()
import glob as _g, json as _j
_imgs = sorted("assets/img/" + os.path.basename(f) for f in _g.glob(os.path.join(ROOT, "assets/img/*")) if not f.endswith(("cope-logo.png", "cope-logo-full.png")))
views = "".join(f'<div class="view" data-view="{pid}"{"" if pid == "home" else " hidden"}>{body}</div>' for pid, (t, body) in PAGES.items())
router = """
(function(){
  var ids=%s;
  function show(){
    var h=(location.hash||"#home").slice(1), target=null;
    if(ids.indexOf(h)<0){ target=document.getElementById(h); var v=target&&target.closest(".view"); h=v?v.dataset.view:"home"; }
    document.querySelectorAll(".view").forEach(function(v){v.hidden=v.dataset.view!==h;});
    window.COPE_chrome(h);
    if(target) target.scrollIntoView(); else window.scrollTo(0,0);
  }
  window.COPE_render(document);
  window.addEventListener("hashchange",show); show();
})();
""" % repr(list(PAGES.keys())).replace("'", '"')
preview = f"""<title>COPE Website</title>
<meta name="claude:viewport-fit-sides" content="cover">
{FONTS}
<style>{css}</style>
<div id="site-header"></div>
<main id="main">{views}</main>
<div id="site-footer"></div>
<script>window.COPE_PREVIEW=true;window.COPE_IMGS={_j.dumps(_imgs)};</script>
<script>{data}</script>
<script>{js}</script>
<script>{router}</script>
"""
os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
open(os.path.join(ROOT, "dist/preview.html"), "w").write(preview)
print("built", len(PAGES), "pages + dist/preview.html")
