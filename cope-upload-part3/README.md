# COPE Website

Plain HTML/CSS/JS. No build step needed to host it.

## Put it online (GitHub + Cloudflare Pages)
1. Create a GitHub repo and upload everything in this folder (except `dist/` and `tools/`, which are optional).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build command: *(leave empty)*. Output directory: `/`. Deploy.
4. Custom domains → add `msucope.org` (needs access to the domain's DNS).

Every push to GitHub redeploys the site automatically.

## Everyday updates — edit `assets/js/data.js` only
- News, newsletters, publications, partners, workshops, youth groups, events, Local Legends honorees, team, resources, impact numbers.
- Copy an existing entry, paste it, change the text. Delete `sample: true` once it's real.
- Photos/logos: upload to `assets/img/` and set `image: "assets/img/file.jpg"`.
- PDFs (publications, newsletters): upload to `assets/docs/` and set `pdf: "assets/docs/file.pdf"`.

## Logo
Save the logo as `assets/img/cope-logo.png` (and a small square `assets/img/favicon.png`).

## Forms (Contact + Local Legends)
1. Go to web3forms.com, enter the email that should receive submissions, copy the access key.
2. Paste it in `data.js` → `forms: { accessKey: "PASTE-HERE" }`.

## Changing page layouts
Page text lives in `tools/pages.py`. After editing, run `python3 tools/build.py` to regenerate the HTML pages.
