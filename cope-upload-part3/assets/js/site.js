/* COPE site engine — builds header/footer and renders the lists in data.js.
   You normally never need to edit this file. */
(function () {
  var D = window.COPE;
  var PREVIEW = !!window.COPE_PREVIEW;

  var PAGES = {
    home: "index.html", about: "about.html", approach: "approach.html", campaigns: "campaigns.html", internships: "internships.html", initiatives: "initiatives.html", workshops: "workshops.html",
    youth: "youth.html", community: "community.html", "local-legends": "local-legends.html",
    partners: "partners.html", research: "research.html", news: "news.html",
    resources: "resources.html", contact: "contact.html"
  };
  function href(id) { return PREVIEW ? "#" + id : PAGES[id]; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  /* Photos: each slot has a fixed filename in assets/img/ (see PHOTO-GUIDE.md).
     Drop a file with that name in the folder and it shows up. An explicit
     image: "..." in data.js overrides the automatic name. */
  var IMG = "assets/img/";
  function slug(s) {
    return String(s).toLowerCase().replace(/^dr\.?\s+/, "").replace(/&/g, "and").replace(/['\u2019\u2018"\u201c\u201d.]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  window.COPE_slug = slug;
  function imgTag(srcs, alt) {
    return '<img src="' + esc(srcs[0]) + '" data-alts="' + esc(srcs.slice(1).join("|")) + '" alt="' + esc(alt) + '" loading="lazy" onerror="COPE_imgfail(this)">';
  }
  window.COPE_imgfail = function (el) {
    var alts = el.getAttribute("data-alts");
    if (alts) { var a = alts.split("|"); el.setAttribute("data-alts", a.slice(1).join("|")); el.src = a[0]; return; }
    el.parentNode.classList.remove("has-img"); el.remove();
  };
  function ph(image, label, cls, auto) {
    var srcs = [image].concat(auto || []).filter(Boolean);
    var file = [image].concat(auto || []).filter(Boolean)[0]; file = file ? file.split("/").pop() : "";
    if (PREVIEW) srcs = srcs.filter(function (s) { return (window.COPE_IMGS || []).indexOf(s) >= 0; });
    var has = srcs.length > 0;
    return '<div class="ph ' + (cls || "") + (has ? " has-img" : "") + '" data-label="' + esc(file || label) + '">' +
      (has ? imgTag(srcs, label) : "") + "</div>";
  }
  function sample(o) { return o.sample ? '<span class="chip sample">Sample entry</span>' : ""; }
  function link(url, text) { return url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + text + "</a>" : ""; }
  window.COPE_href = href;

  /* ---------- header & footer ---------- */
  function wordmark() {
    if (D.org.logo) return '<img src="' + esc(D.org.logo) + '" alt="COPE"><span class="tagline">Communities Organizing for Prevention and Empowerment</span>';
    return '<span class="wordmark"><b>COPE</b><span>Communities Organizing for Prevention and Empowerment</span></span>';
  }
  function header(current) {
    var programs = [
      ["workshops", "Workshops & Trainings", "For schools, parents, youth & professionals"],
      ["youth", "Youth Groups & Campaigns", "Youth-led groups and campaigns"],
      ["community", "City Initiatives & Events", "Ongoing community events in Paterson"],
      ["initiatives", "Grants & Initiatives", "The funded programs we run"],
      ["campaigns", "Campaigns & Infographics", "Public awareness campaigns"],
      ["internships", "Internships", "3–10 college interns each semester"]
    ];
    var inPrograms = programs.some(function (p) { return p[0] === current; });
    function a(id, t) { return '<a href="' + href(id) + '"' + (id === current ? ' aria-current="page"' : "") + ">" + t + "</a>"; }
    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="' + href("home") + '" aria-label="COPE home">' + wordmark() + "</a>" +
      '<button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="nav" id="site-nav" aria-label="Main">' +
      (function () {
        var cur = current === "about" || current === "approach";
        return "<details><summary" + (cur ? ' aria-current="page"' : "") + '>About</summary><div class="menu">' +
          '<a href="' + href("about") + '">About COPE<small>Mission, what we do, our team</small></a>' +
          '<a href="' + href("approach") + '">Our Approach<small>How we plan, deliver and measure prevention</small></a>' +
          "</div></details>";
      })() +
      '<details' + (inPrograms ? ' class="cur"' : "") + "><summary" + (inPrograms ? ' aria-current="page"' : "") + '>Programs</summary><div class="menu">' +
      programs.map(function (p) { return '<a href="' + href(p[0]) + '">' + esc(p[1]) + "<small>" + esc(p[2]) + "</small></a>"; }).join("") +
      "</div></details>" +
      a("local-legends", "Local Legends") + a("partners", "Partners") + a("research", "Research") +
      a("news", "News") + a("resources", "Resources") +
      '<a class="btn" href="' + href("contact") + '">Contact</a>' +
      "</nav></div></header>";
  }
  function igLinks(sep) {
    return D.org.social.instagram.map(function (h) { return '<a href="https://instagram.com/' + esc(h) + '" target="_blank" rel="noopener">@' + esc(h) + "</a>"; }).join(sep);
  }
  function footer() {
    var s = D.org.social;
    return '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
      '<div class="stack"><a href="' + href("home") + '"><img class="foot-logo" src="' + esc(D.org.logoFull) + '" alt="COPE: Communities Organizing for Prevention and Empowerment"></a>' +
      "<p>" + esc(D.org.mission) + "</p></div>" +
      "<div><h4>Programs</h4><ul>" +
      '<li><a href="' + href("workshops") + '">Workshops & Trainings</a></li><li><a href="' + href("youth") + '">Youth Groups & Campaigns</a></li>' +
      '<li><a href="' + href("community") + '">City Initiatives & Events</a></li><li><a href="' + href("initiatives") + '">Grants & Initiatives</a></li>' +
      '<li><a href="' + href("local-legends") + '">Local Legends</a></li><li><a href="' + href("internships") + '">Internships</a></li></ul></div>' +
      "<div><h4>Learn</h4><ul>" +
      '<li><a href="' + href("about") + '">About Us</a></li><li><a href="' + href("approach") + '">Our Approach</a></li><li><a href="' + href("research") + '">Research & Publications</a></li>' +
      '<li><a href="' + href("news") + '">News & Newsletters</a></li><li><a href="' + href("partners") + '">Partners</a></li><li><a href="' + href("resources") + '">Resources</a></li></ul></div>' +
      "<div><h4>Reach us</h4><ul>" +
      "<li>" + esc(D.org.address) + "</li><li>" + esc(D.org.phone) + "</li><li>" + esc(D.org.email) + "</li>" +
      '<li>Instagram: ' + igLinks(", ") + '</li><li><a href="' + esc(s.facebook) + '" target="_blank" rel="noopener">Facebook</a> · <a href="' + esc(s.x) + '" target="_blank" rel="noopener">X</a></li></ul></div>' +
      '</div><div class="foot-base"><span>© ' + new Date().getFullYear() + " COPE · " + esc(D.org.affiliation) + "</span>" +
      '<span>In crisis? Call or text <b>988</b>. Emergency: <b>911</b>.</span></div></div></footer>';
  }

  /* ---------- renderers ---------- */
  var R = {};
  R.stats = function () { return D.stats.map(function (s) { return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>"; }).join(""); };

  R.initiatives = function (el) {
    var limit = el.dataset.limit ? +el.dataset.limit : 99;
    return D.initiatives.slice(0, limit).map(function (i) {
      return '<article class="initiative' + (i.noPhoto ? " no-photo" : "") + '">' + (i.noPhoto ? "" : ph(i.image, i.code + " photo", "contain", [IMG + "grant-" + slug(i.code) + ".jpg"])) +
        '<div class="body"><div class="chips"><span class="tag">' + esc(i.code) + '</span>' + (i.status ? '<span class="chip' + (i.status === "Active" ? " live" : "") + '">' + esc(i.status) + "</span>" : "") + (i.partOf ? '<span class="chip">Part of ' + esc(i.partOf) + "</span>" : "") + "</div><h3>" + esc(i.name) + "</h3><p>" + esc(i.summary) + "</p>" +
        '<dl class="facts"><dt>Funded by</dt><dd>' + esc(i.funder) + "</dd><dt>Years</dt><dd>" + esc(i.years) + "</dd>" + (i.grant ? "<dt>Grant no.</dt><dd>" + esc(i.grant) + "</dd>" : "") + "<dt>Serves</dt><dd>" + esc(i.serves) + "</dd></dl>" +
        (i.link ? "<p>" + link(i.link, "Visit " + esc(i.code) + " site →") + "</p>" : "") + "</div></article>";
    }).join("");
  };
  R.initiativeCards = function () {
    return D.initiatives.map(function (i) {
      return '<a class="card" href="' + href("initiatives") + '" style="text-decoration:none;color:inherit"><div class="body"><span class="eyebrow">' + esc(i.code) + " · " + esc(i.years) + "</span><h3>" + esc(i.name) + "</h3><p class=\"meta\">" + esc(i.summary) + "</p></div></a>";
    }).join("");
  };

  function workshopCard(w) {
    return '<article class="card" data-aud="' + esc(w.topic) + '">' + ph(w.image, w.title + " photo", "contain", [IMG + "workshop-" + slug(w.title) + ".jpg", IMG + "workshop-topic-" + slug(w.topic) + ".jpg"]) +
      '<div class="body"><div class="chips"><span class="chip">' + esc(w.topic) + "</span>" + (w.evidence ? '<span class="chip red">Evidence-based curriculum</span>' : "") + "</div><h3>" + esc(w.title) + "</h3>" +
      ((w.grades || w.length) ? '<dl class="facts">' + (w.grades ? "<dt>Best for</dt><dd>" + esc(w.grades) + "</dd>" : "") + (w.length ? "<dt>Length</dt><dd>" + esc(w.length) + "</dd>" : "") + "</dl>" : "") +
      '<ul class="goals">' + w.goals.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="foot"><a class="btn alt" href="' + href("contact") + '">Book this</a></div></article>';
  }
  R.workshops = function (el) {
    if (D.parentWorkshop && D.workshops.indexOf(D.parentWorkshop) < 0) D.workshops.push(D.parentWorkshop);
    var tops = ["All"];
    D.workshops.forEach(function (w) { if (tops.indexOf(w.topic) < 0) tops.push(w.topic); });
    var f = '<div class="filters" role="group" aria-label="Filter by topic">' + tops.map(function (a, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-f="' + esc(a) + '">' + (i === 0 ? "All workshops (" + D.workshops.length + ")" : esc(a)) + "</button>"; }).join("") + "</div>";
    setTimeout(function () {
      el.querySelectorAll(".filters button").forEach(function (b) {
        b.addEventListener("click", function () {
          el.querySelectorAll(".filters button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
          el.querySelectorAll("[data-aud]").forEach(function (c) { c.hidden = !(b.dataset.f === "All" || c.dataset.aud === b.dataset.f); });
        });
      });
    });
    return f + '<div class="grid">' + D.workshops.map(workshopCard).join("") + "</div>";
  };
  R.workshopPreview = function () {
    var pick = ["Don't Get Vaped In", "Stress for Youth", "Love ST-Island"];
    return D.workshops.filter(function (w) { return pick.indexOf(w.title) >= 0; }).map(workshopCard).join("");
  };
  R.curriculum = function () {
    return '<ol class="path">' + D.curriculum.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ol>";
  };
  R.trainings = function () {
    return D.trainings.map(function (t) {
      return '<article class="card">' + ph(t.image, t.title + " photo", "", [IMG + "training-" + slug(t.title) + ".jpg"]) + '<div class="body"><span class="chip red" style="justify-self:start">Training</span><h3>' + esc(t.title) + "</h3><p>" + esc(t.what) + '</p><dl class="facts"><dt>For</dt><dd>' + esc(t.who) + "</dd></dl></div>" +
        '<div class="foot"><a class="btn alt" href="' + href("contact") + '">Request a training</a></div></article>';
    }).join("");
  };
  R.whatWeDo = function () {
    return '<ol class="wwd">' + D.whatWeDo.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ol>";
  };
  R.spf = function () {
    return '<div class="steps five">' + D.spf.map(function (s) { return '<div class="step"><h3>' + esc(s.step) + '</h3><p class="meta"><i>' + esc(s.q) + "</i></p><p>" + esc(s.what) + "</p></div>"; }).join("") + "</div>";
  };
  R.pace = function () {
    return '<div class="pace">' + D.pace.map(function (p) { return "<div><b>" + esc(p.letter) + "</b><span>" + esc(p.word) + "</span></div>"; }).join("") + "</div>";
  };
  R.dataMethods = function () {
    return '<div class="chips big">' + D.dataMethods.map(function (m) { return '<span class="chip">' + esc(m) + "</span>"; }).join("") + "</div>";
  };

  R.youthGroups = function () {
    return D.youthGroups.map(function (g) {
      return '<article class="card">' + ph(g.image, g.name + " photo", "", [IMG + "youth-" + slug(g.name) + ".jpg"]) + '<div class="body"><div class="chips"><span class="chip">' + esc(g.ages) + "</span>" + sample(g) + "</div><h3>" + esc(g.name) + "</h3><p>" + esc(g.what) + '</p><dl class="facts"><dt>Meets</dt><dd>' + esc(g.meets) + "</dd></dl></div>" +
        '<div class="foot"><a class="btn teal" href="' + href("contact") + '">Join</a></div></article>';
    }).join("");
  };
  R.youthCampaigns = function () {
    return D.youthCampaigns.map(function (c) {
      return '<a class="card" style="text-decoration:none;color:inherit" href="' + href("campaigns") + (PREVIEW ? "" : "#camp-" + slug(c.name)) + '">' + ph(c.image, c.name + " campaign", "poster", [IMG + "campaign-" + slug(c.name) + ".jpg"]) + '<div class="body"><div class="chips"><span class="chip red">' + esc(c.topic) + "</span></div><h3>" + esc(c.name) + "</h3><p>" + esc(c.what) + "</p></div></a>";
    }).join("");
  };

  function art(item, alt) {
    var ok = item.file && (!PREVIEW || (window.COPE_IMGS || []).indexOf(item.file) >= 0);
    if (!ok) return '<figure class="art"><div class="zoom">' + ph("", item.file ? item.file.split("/").pop() : alt, "poster") + "</div><figcaption>" + esc(item.title) + "</figcaption></figure>";
    return '<figure class="art"><div class="zoom"><img src="' + esc(item.file) + '" alt="' + esc(item.title) + '" loading="lazy" onerror="this.closest(\'figure\').remove()"></div><figcaption>' + esc(item.title) + "</figcaption></figure>";
  }
  R.campaignPage = function () {
    var nav = '<nav class="res-jump" aria-label="Campaigns">' + D.youthCampaigns.map(function (c) { return '<a href="#camp-' + slug(c.name) + '">' + esc(c.name) + "</a>"; }).join("") + "</nav>";
    return nav + D.youthCampaigns.map(function (c) {
      var s = slug(c.name);
      var info = (c.infographics || []).map(function (g) { return art(g, g.title); }).join("");
      var gal = (c.gallery || []).map(function (g) { return art(g, g.title); }).join("");
      return '<section class="camp" id="camp-' + s + '"><header class="camp-head"><div class="chips"><span class="chip red">' + esc(c.topic) + "</span>" + (c.year ? '<span class="chip">' + esc(c.year) + "</span>" : "") + "</div><h2>" + esc(c.name) + '</h2><p class="lede">' + esc(c.what) + "</p></header>" +
        (info ? '<h3 class="camp-sub">Infographics</h3><div class="art-grid">' + info + "</div>" : "") +
        (gal ? '<h3 class="camp-sub">Ads, signs &amp; photos</h3><div class="art-grid wide">' + gal + "</div>" : "") +
        ((c.downloads || []).length ? '<h3 class="camp-sub">Download</h3><div class="dl-row">' + c.downloads.map(function (x) { return '<a class="btn alt" href="' + esc(x.file) + '" target="_blank" rel="noopener">' + esc(x.title) + " (PDF)</a>"; }).join("") + "</div>" : "") + "</section>";
    }).join("");
  };
  R.events = function (el) {
    var limit = el.dataset.limit ? +el.dataset.limit : 99;
    return D.communityEvents.slice(0, limit).map(function (e) {
      return '<article class="event' + (e.featured ? " featured" : "") + '">' + ph(e.image, e.name + " photo", e.fit || "", [IMG + "event-" + slug(e.name) + ".jpg"]) +
        '<div class="body"><div class="chips">' + (e.featured ? '<span class="chip red">Featured</span>' : "") + '<span class="chip">Ongoing</span>' + sample(e) + "</div><h3>" + esc(e.name) + "</h3><p>" + esc(e.what) + '</p><dl class="facts"><dt>When</dt><dd>' + esc(e.when) + "</dd><dt>Where</dt><dd>" + esc(e.where) + "</dd></dl>" + (e.history ? '<ol class="timeline">' + e.history.map(function (h) { return "<li><b>" + esc(h.year) + "</b><span>" + esc(h.place) + "</span></li>"; }).join("") + "</ol>" : "") + (e.join ? '<div><a class="btn teal" href="#join" data-join="' + esc(e.name) + '">Ask to join</a></div>' : "") + (e.gallery ? '<div class="mini-gallery">' + e.gallery.map(function (g) { return '<div class="zoom">' + ph("", g.title, "square", [IMG + g.file]) + "</div>"; }).join("") + "</div>" : "") + (e.quote ? '<blockquote class="pull">“' + esc(e.quote) + "”<cite>" + esc(e.quoteBy) + "</cite></blockquote>" : "") + "</div></article>";
    }).join("");
  };
  R.cityInitiatives = function () {
    return D.cityInitiatives.map(function (c) {
      return '<article class="card">' + ph(c.image, c.name + " photo", c.fit || "", [IMG + "city-" + slug(c.name) + ".jpg"]) + '<div class="body">' + (c.sample ? '<div class="chips">' + sample(c) + "</div>" : "") + "<h3>" + esc(c.name) + "</h3><p>" + esc(c.what) + "</p></div></article>";
    }).join("");
  };

  R.partners = function (el) {
    var types = ["All"];
    D.partners.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });
    setTimeout(function () {
      el.querySelectorAll(".filters button").forEach(function (b) {
        b.addEventListener("click", function () {
          el.querySelectorAll(".filters button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
          el.querySelectorAll("[data-type]").forEach(function (c) { c.hidden = !(b.dataset.f === "All" || c.dataset.type === b.dataset.f); });
        });
      });
    });
    return '<div class="filters" role="group" aria-label="Filter partners">' + types.map(function (t, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-f="' + esc(t) + '">' + (i === 0 ? "All partners" : esc(({ "University": "Universities", "Government": "Government", "Business": "Businesses" })[t] || t + "s")) + "</button>"; }).join("") + "</div>" +
      '<div class="logo-wall">' + D.partners.map(function (p) {
        return '<div class="logo-tile" data-type="' + esc(p.type) + '">' + ph(p.logo, p.name + " logo", "", [IMG + "logo-" + slug(p.name) + ".png"]) + "<b>" + esc(p.name) + "</b><small>" + esc(p.type) + (p.since ? " · since " + esc(p.since) : "") + "</small></div>";
      }).join("") + "</div>";
  };
  R.partnerStrip = function () {
    return D.partners.slice(0, 6).map(function (p) { return '<div class="logo-tile">' + ph(p.logo, p.name + " logo", "", [IMG + "logo-" + slug(p.name) + ".png"]) + "<b>" + esc(p.name) + "</b></div>"; }).join("");
  };

  R.researchAreas = function () {
    return D.researchAreas.map(function (r) { return '<div class="pillar"><span class="big">' + esc(r.name) + "</span><p>" + esc(r.what) + "</p></div>"; }).join("");
  };
  R.publications = function (el) {
    D.publications.sort(function (a, b) { var x = parseInt(a.year, 10) || 0, y = parseInt(b.year, 10) || 0; return y - x; });
    var years = []; D.publications.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    var list = function (q, y) {
      q = (q || "").toLowerCase();
      var rows = D.publications.filter(function (p) {
        return (!y || p.year === y) && (!q || (p.title + " " + p.authors + " " + p.venue + " " + p.topic).toLowerCase().indexOf(q) >= 0);
      });
      if (!rows.length) return '<p class="placeholder-note" style="margin-top:20px">No publications match that search.</p>';
      return rows.map(function (p) {
        return '<article class="pub"><span class="yr">' + esc(p.year) + '</span><div><div class="t">' + esc(p.title) + '</div><div class="a">' + esc(p.authors) + (p.venue && p.venue.indexOf("[") < 0 ? " · <i>" + esc(p.venue) + "</i>" : "") + (p.date ? " · " + esc(p.date) : "") + '</div><div class="chips" style="margin-top:8px"><span class="chip red">' + esc(p.type) + '</span><span class="chip">' + esc(p.topic) + "</span>" + sample(p) + '</div></div><div class="links">' +
          (p.pdf ? link(p.pdf, "PDF") : "") + (p.link ? link(p.link, "Read") : "") + (p.doi ? link(p.doi, "DOI") : "") + (!p.pdf && !p.link ? '<span class="chip sample">Link/PDF needed</span>' : "") + "</div></article>";
      }).join("");
    };
    setTimeout(function () {
      var qi = el.querySelector("#pub-q"), ys = el.querySelector("#pub-y"), out = el.querySelector(".pubs");
      function go() { out.innerHTML = list(qi.value, ys.value); }
      qi.addEventListener("input", go); ys.addEventListener("change", go);
    });
    return '<div class="toolbar"><input id="pub-q" type="search" placeholder="Search titles, authors, topics" aria-label="Search publications"><select id="pub-y" aria-label="Filter by year"><option value="">All years</option>' +
      years.map(function (y) { return "<option>" + esc(y) + "</option>"; }).join("") + '</select></div><div class="pubs">' + list("", "") + "</div>";
  };

  function fmtDate(d) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d);
    if (/^\d{4}$/.test(d)) return '<span class="date"><b>' + esc(d) + "</b></span>";
    if (!m) return '<span class="date"><b>—</b>' + esc(d) + "</span>";
    var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+m[2] - 1];
    return '<span class="date"><b>' + (+m[3]) + "</b>" + mo + " " + m[1] + "</span>";
  }
  function annList(n) {
    return D.announcements.slice(0, n).map(function (a) {
      return '<article class="news-item">' + fmtDate(a.date) + '<div class="body"><div class="chips"><span class="chip">' + esc(a.tag) + "</span>" + sample(a) + "</div><h3>" + esc(a.title) + "</h3><p>" + esc(a.body) + "</p></div></article>";
    }).join("");
  }
  R.announcements = function (el) { return annList(el.dataset.limit ? +el.dataset.limit : 99); };
  R.newsletters = function () {
    return D.newsletters.map(function (n) {
      return '<article class="newsletter">' + ph(n.cover, "Cover") + "<div>" + sample(n) + "<h3 style=\"margin-top:6px\">" + esc(n.title) + '</h3><p class="meta">' + esc(n.date) + "</p></div>" + (n.pdf ? '<a class="btn alt" href="' + esc(n.pdf) + '" target="_blank" rel="noopener">Read issue</a>' : "") + "</article>";
    }).join("");
  };

  R.legendPillars = function () {
    return D.legendPillars.map(function (p) { return '<div class="pillar"><span class="big">' + esc(p.name) + "</span><p>" + esc(p.what) + "</p></div>"; }).join("");
  };
  R.legends = function () {
    return D.legends.map(function (l) {
      return '<article class="card">' + ph(l.image, l.name + " photo", "square", l.sample ? [] : [IMG + "legend-" + slug(l.name) + ".jpg"]) + '<div class="body"><div class="chips"><span class="chip red">' + esc(l.pillar) + "</span>" + (l.year ? '<span class="chip">' + esc(l.year) + "</span>" : "") + sample(l) + "</div><h3>" + esc(l.name) + "</h3><p>" + esc(l.why) + "</p></div></article>";
    }).join("");
  };
  R.team = function () {
    return D.team.map(function (t) { return '<article class="card team">' + ph(t.image, t.name + " headshot", "", [IMG + "team-" + slug(t.name) + ".jpg"]) + '<div class="body"><h3>' + esc(t.name) + '</h3><p class="meta">' + esc(t.role) + "</p></div></article>"; }).join("");
  };

  R.crisis = function () {
    return '<div class="crisis"><h3>Need help right now?</h3><div class="lines">' + D.crisisLines.map(function (c) { return "<div><b>" + esc(c.number) + "</b><small>" + esc(c.label) + " · " + esc(c.note) + "</small></div>"; }).join("") + "</div></div>";
  };
  R.resources = function () {
    return '<nav class="res-jump" aria-label="Resource categories">' + D.resources.map(function (g) { return '<a href="#res-' + g.id + '" data-jump="res-' + g.id + '">' + esc(g.title) + "</a>"; }).join("") + "</nav>" +
      D.resources.map(function (g) {
        return '<section class="res-group" id="res-' + g.id + '"><header><span class="eyebrow">Resources</span><h2>' + esc(g.title) + '</h2><p class="lede">' + esc(g.intro) + '</p></header><div class="res-list">' +
          g.items.map(resCard).join("") + "</div></section>";
      }).join("");
  };
  function telHref(n) { return "tel:" + String(n).replace(/[^0-9+]/g, ""); }
  function resCard(i) {
    var rows = "";
    if (i.address) rows += '<div class="r-row"><dt>Address</dt><dd><a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(i.address + ", NJ") + '" target="_blank" rel="noopener">' + esc(i.address) + "</a></dd></div>";
    if (i.hours) rows += '<div class="r-row"><dt>Hours</dt><dd>' + i.hours.split(" · ").map(esc).join("<br>") + "</dd></div>";
    if (i.phones && i.phones.length) rows += '<div class="r-row"><dt>Call</dt><dd>' + i.phones.map(function (n) { return '<a class="r-tel" href="' + telHref(n) + '">' + esc(n) + "</a>"; }).join("<br>") + "</dd></div>";
    if (i.text) rows += '<div class="r-row"><dt>Text</dt><dd><a class="r-tel" href="sms:' + esc(i.text.to) + (i.text.code ? "?&body=" + encodeURIComponent(i.text.code) : "") + '">' + (i.text.code ? esc(i.text.code) + " to " : "") + esc(i.text.to) + "</a></dd></div>";
    if (i.email) rows += '<div class="r-row"><dt>Email</dt><dd><a href="mailto:' + esc(i.email) + '">' + esc(i.email) + "</a></dd></div>";
    var svc = (i.services || []).length ? '<ul class="r-svc">' + i.services.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" : "";
    var notes = (i.notes || []).length ? '<div class="r-notes">' + i.notes.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div>" : "";
    return '<article class="res"><header class="r-head"><span class="n">' + esc(i.name) + "</span>" + (i.partner ? '<span class="chip">COPE partner</span>' : "") + "</header>" +
      (rows ? '<dl class="r-info">' + rows + "</dl>" : "") + svc + notes +
      (i.url ? '<a class="r-web" href="' + esc(i.url) + '" target="_blank" rel="noopener">Visit website →</a>' : "") + "</article>";
  }
  R.contactInfo = function () {
    var o = D.org, s = o.social;
    return '<dl class="contact-list"><div><dt>Visit</dt><dd>' + esc(o.address) + "</dd></div><div><dt>Call</dt><dd>" + esc(o.phone) + "</dd></div><div><dt>Email</dt><dd>" + esc(o.email) + "</dd></div><div><dt>Hours</dt><dd>" + esc(o.hours) + "</dd></div>" +
      '<div><dt>Instagram</dt><dd>' + igLinks(" · ") + '</dd></div><div><dt>Follow</dt><dd><a href="' + esc(s.facebook) + '" target="_blank" rel="noopener">Facebook</a> · <a href="' + esc(s.x) + '" target="_blank" rel="noopener">X</a></dd></div></dl>';
  };

  /* ---------- forms ---------- */
  function wireForms(root) {
    root.querySelectorAll("form[data-form]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = f.querySelector(".form-status");
        if (!f.reportValidity()) return;
        var key = D.forms.accessKey;
        if (PREVIEW || !key) {
          status.hidden = false;
          status.textContent = PREVIEW ? "Preview: this form works, but submissions aren't sent from the preview." : "Form not connected yet: add a Web3Forms access key in data.js.";
          return;
        }
        var data = new FormData(f);
        data.append("access_key", key);
        data.append("subject", "COPE website: " + f.dataset.form);
        status.hidden = false; status.textContent = "Sending…";
        fetch(D.forms.endpoint, { method: "POST", body: data }).then(function (r) { return r.json(); }).then(function (j) {
          status.textContent = j.success ? "Thank you. We received your submission." : "That didn't go through. Please try again or email us.";
          if (j.success) f.reset();
        }).catch(function () { status.textContent = "That didn't go through. Check your connection and try again."; });
      });
    });
  }

  /* ---------- boot ---------- */
  function render(root) {
    root.querySelectorAll("[data-render]").forEach(function (el) {
      var fn = R[el.dataset.render];
      if (fn) el.innerHTML = fn(el);
    });
    root.querySelectorAll(".ph[data-src]").forEach(function (el) {
      var f = el.getAttribute("data-src");
      el.setAttribute("data-label", f);
      if ((!PREVIEW || (window.COPE_IMGS || []).indexOf(IMG + f) >= 0) && !el.querySelector("img")) { el.classList.add("has-img"); el.insertAdjacentHTML("beforeend", imgTag([IMG + f], el.getAttribute("data-alt") || "")); }
    });
    root.querySelectorAll("[data-href]").forEach(function (a) { a.setAttribute("href", href(a.dataset.href)); });
    root.querySelectorAll("[data-org]").forEach(function (el) { el.textContent = D.org[el.dataset.org]; });
    wireForms(root);
    if (!document.getElementById("lightbox")) {
      document.body.insertAdjacentHTML("beforeend", '<div id="lightbox" class="lightbox" hidden><button type="button" aria-label="Close">×</button><img alt=""></div>');
      var lb = document.getElementById("lightbox");
      lb.addEventListener("click", function () { lb.hidden = true; });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });
      document.addEventListener("click", function (e) {
        var z = e.target.closest(".zoom"); if (!z) return;
        var im = z.querySelector("img"); if (!im || !im.naturalWidth) return;
        lb.querySelector("img").src = im.src; lb.querySelector("img").alt = im.alt; lb.hidden = false;
      });
    }
  }
  function wireHeader() {
    var t = document.getElementById("menu-toggle"), n = document.getElementById("site-nav");
    if (t) t.addEventListener("click", function () { var o = n.classList.toggle("open"); t.setAttribute("aria-expanded", o); });
    document.addEventListener("click", function (e) {
      document.querySelectorAll(".nav details[open]").forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute("open"); });
    });
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-join]"); if (!a) return;
    var s = document.getElementById("j-meeting"); if (s) s.value = a.getAttribute("data-join");
  });
  window.COPE_render = render;
  window.COPE_chrome = function (current) {
    var h = document.getElementById("site-header"), f = document.getElementById("site-footer");
    if (h) h.innerHTML = header(current);
    if (f) f.innerHTML = footer();
    wireHeader();
  };

  if (!PREVIEW) {
    var main = document.getElementById("main");
    window.COPE_chrome(main ? main.dataset.page : "home");
    render(document);
  }
})();
