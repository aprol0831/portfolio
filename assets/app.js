/* 作品集網站程式 —— 一般不需要修改；內容請改 content.js */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const MEDIA = "media/";
  const pad = (n) => String(n).padStart(2, "0");
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // 文字格式：換行 \n → <br>，*文字* → 紅色強調
  const rich = (t) => esc(t).replace(/\*(.+?)\*/g, '<span class="red">$1</span>').replace(/\n/g, "<br>");

  const norm = (m) => (typeof m === "string" ? { src: m } : m);
  const isVideo = (src) => /\.(mp4|webm|m4v|mov)$/i.test(src);
  const poster = (src) => src.replace(/\.[^.]+$/, ".poster.jpg");
  const url = (src) => (/^(https?:)?\/\//.test(src) ? src : MEDIA + src);

  /* ---------- 共用：綁定文字 ---------- */
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = el.dataset.bind.split(".").reduce((o, k) => (o ? o[k] : ""), S);
    el.innerHTML = rich(v);
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- 影片：進入畫面才播放 ---------- */
  const vio = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting) { if (v.preload === "none") v.preload = "metadata"; v.play().catch(() => {}); }
        else v.pause();
      }), { threshold: 0.25 })
    : null;
  function videoEl(src, { autoplay = true, controls = false } = {}) {
    const v = document.createElement("video");
    v.src = url(src); v.poster = url(poster(src));
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = "none";
    v.setAttribute("playsinline", ""); v.setAttribute("muted", "");
    if (controls) v.controls = true;
    if (autoplay && vio) vio.observe(v);
    v.addEventListener("error", () => { v.removeAttribute("poster"); }, { once: true });
    return v;
  }
  function imgEl(src, alt = "") {
    const i = new Image(); i.src = url(src); i.alt = alt; i.loading = "lazy"; i.decoding = "async";
    return i;
  }

  /* ---------- 捲動浮現 ---------- */
  const rio = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  const reveal = (el) => { if (rio) { el.classList.add("reveal"); rio.observe(el); } return el; };

  /* ---------- 頂部頭像 ---------- */
  if (S.portrait) { const im = imgEl(S.portrait, S.name); im.loading = "eager"; $("#profilePhoto").append(im); }
  else $("#profilePhoto").hidden = true;

  /* ---------- Hero ---------- */
  const hero = $("#heroMedia");
  if (S.heroVideo) {
    const v = videoEl(S.heroVideo); if (S.heroPoster) v.poster = url(S.heroPoster);
    v.preload = "auto"; hero.append(v);
  } else if (S.heroImage) hero.append(imgEl(S.heroImage));
  else hero.hidden = true;
  if (S.heroCaption) hero.insertAdjacentHTML("beforeend", `<figcaption>${esc(S.heroCaption)}</figcaption>`);

  /* ---------- Stats ---------- */
  $("#stats").innerHTML = (S.stats || []).map((s) =>
    `<div class="stat"><p class="stat__v">${esc(s.value)}<small>${esc(s.unit)}</small></p><p class="stat__l">${esc(s.label)}</p></div>`).join("");

  /* ---------- 關於我（履歷） ---------- */
  const A = S.about;
  if (A) {
    const row = (t, org, time, note) =>
      `<li class="cv__row"><div><b>${esc(t)}</b><span>${esc(org || "")}</span>${note ? `<em>${esc(note)}</em>` : ""}</div><span class="mono">${esc(time || "")}</span></li>`;
    $("#aboutBody").innerHTML = `
      <p class="mono">${esc(A.title || "")}</p>
      <p class="about__lead">${esc(A.summaryZh || "")}</p>
      <p class="about__en">${esc(A.summary || "")}</p>
      ${(A.experience || []).length ? `<h3 class="cv__h mono">Experience 經歷</h3><ul class="cv">${A.experience.map((e) => `
        <li class="cv__exp">
          <div class="cv__row"><div><b>${esc(e.org)}</b><span>${esc(e.role)}${e.place ? " · " + esc(e.place) : ""}</span></div><span class="mono">${esc(e.time)}</span></div>
          ${(e.points || []).length ? `<ul class="cv__pts">${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        </li>`).join("")}</ul>` : ""}
      ${(A.education || []).length ? `<h3 class="cv__h mono">Education 學歷</h3><ul class="cv">${A.education.map((e) => row(e.title, e.org, e.time, e.note)).join("")}</ul>` : ""}
      ${(A.certifications || []).length ? `<h3 class="cv__h mono">Certifications 證照</h3><ul class="cv">${A.certifications.map((e) => row(e.title, e.org, e.time, e.note)).join("")}</ul>` : ""}
      ${A.cvFile ? `<a class="btn" href="${esc(url(A.cvFile))}" download>下載履歷 CV ↓</a>` : ""}`;
    reveal($("#aboutBody"));
  } else $("#about").hidden = true;

  /* ---------- 作品格子 ---------- */
  const P = S.projects || [];
  $("#workCount").textContent = `${pad(P.length)} Projects`;
  const grid = $("#grid");
  P.forEach((p, i) => {
    const media = (p.media || []).map(norm);
    const cover = p.cover || (media[0] && media[0].src);
    const a = document.createElement("a");
    a.className = "card"; a.href = `#work/${p.id}`;
    const box = document.createElement("div");
    box.className = "card__img" + (p.coverFit === "contain" ? " contain" : "");
    if (p.coverText || !cover) {
      box.innerHTML = `<div class="typo"><span class="typo__small">${esc(p.category || "")}</span><div><div class="typo__big">${esc(p.coverText || p.titleEn?.slice(0, 2) || "")}</div><div class="typo__rule"></div></div><span class="typo__small">${esc(p.titleEn || "")}</span></div>`;
    } else {
      box.append(imgEl(isVideo(cover) ? poster(cover) : cover, p.title));
    }
    box.insertAdjacentHTML("afterbegin", `<span class="card__no">${pad(i + 1)}</span>`);
    if (p.tag) box.insertAdjacentHTML("beforeend", `<span class="card__tag">${esc(p.tag)}</span>`);
    a.append(box);
    a.insertAdjacentHTML("beforeend",
      `<p class="mono card__cat">${esc(p.category || "")}${p.year ? " · " + esc(p.year) : ""}</p>
       <h3 class="card__title">${esc(p.title)}</h3>
       <p class="card__en">${esc(p.titleEn || "")}</p>
       <p class="card__sum">${esc(p.summary || "")}</p>`);
    a.addEventListener("click", (e) => { e.preventDefault(); history.pushState({ detail: true }, "", `#work/${p.id}`); route(); });
    grid.append(reveal(a));
  });

  /* ---------- 媒體方塊（可點開燈箱） ---------- */
  function tile(m, list, idx) {
    const b = document.createElement("button");
    b.className = "tile"; b.type = "button";
    b.setAttribute("aria-label", m.caption || "放大檢視");
    if (isVideo(m.src)) { b.append(videoEl(m.src)); b.insertAdjacentHTML("beforeend", '<span class="tile__play" aria-hidden="true"></span>'); }
    else b.append(imgEl(m.src, m.caption || ""));
    if (m.caption) b.insertAdjacentHTML("beforeend", `<span class="tile__cap">${esc(m.caption)}</span>`);
    b.addEventListener("click", () => openLB(list, idx));
    return b;
  }

  /* ---------- 心得 ---------- */
  const J = S.journal || {};
  $("#chapters").innerHTML = (J.chapters || []).map((c) =>
    `<div class="chapter"><p class="mono">${esc(c.label)}</p><h3>${rich(c.heading)}</h3><div class="chapter__text">${(c.text || []).map((t) => `<p>${rich(t)}</p>`).join("")}</div></div>`).join("");
  document.querySelectorAll(".chapter").forEach(reveal);
  const jm = (J.media || []).map(norm);
  const strip = $("#strip");
  jm.forEach((m, i) => strip.append(tile(m, jm, i)));
  if (!jm.length) strip.hidden = true;

  /* ---------- 展覽資訊 ---------- */
  if ((S.news || []).length) {
    $("#news").hidden = false;
    $("#newsList").innerHTML = S.news.map((n) =>
      `<li><span class="mono">${esc(n.date)}</span><b>${esc(n.title)}</b><span>${esc(n.place || "")}</span></li>`).join("");
  }

  /* ---------- 聯絡 ---------- */
  const C = S.contact || {};
  const links = [];
  if (C.email) links.push(`<li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>`);
  if (C.phone) links.push(`<li><a href="tel:${esc(C.phone.replace(/[^+\d]/g, ""))}">${esc(C.phone)}</a></li>`);
  if (C.location) links.push(`<li><span>${esc(C.location)}</span></li>`);
  if (C.instagram) links.push(`<li><a href="${esc(C.instagram.startsWith("http") ? C.instagram : "https://instagram.com/" + C.instagram.replace("@", ""))}" target="_blank" rel="noopener">Instagram ↗</a></li>`);
  if (C.linkedin) links.push(`<li><a href="${esc(C.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a></li>`);
  $("#contactLinks").innerHTML = links.join("");

  /* ---------- 作品內頁 ---------- */
  const detail = $("#detail"), body = $("#detailBody");
  let lastFocus = null;
  function openDetail(p) {
    const i = P.indexOf(p);
    const media = (p.media || []).map(norm);
    $("#detailIndex").textContent = `${pad(i + 1)} / ${pad(P.length)} — ${p.category || ""}`;
    const facts = [...(p.location ? [["地點", p.location]] : []), ...(p.year ? [["年份", p.year]] : []), ...(p.role ? [["角色", p.role]] : []), ...(p.facts || [])];
    const prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    body.innerHTML = `
      <header class="d-head"><p class="mono">${esc(p.category || "")}</p><h1 class="d-title">${rich(p.title)}</h1><p class="d-en">${esc(p.titleEn || "")}</p></header>
      <div id="dCover"></div>
      <section class="d-info">
        <dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <div class="d-text">${(p.body || []).map((t) => `<p>${rich(t)}</p>`).join("")}
          ${(p.dialogue || []).length ? `<figure class="dialogue"><figcaption class="mono">${esc(p.dialogueTitle || "Dialogue")}</figcaption>${p.dialogue.map((d) => `<p class="dialogue__line${/^(me|you|我)$/i.test(d.speaker) ? " is-me" : ""}"><span class="mono">${esc(d.speaker)}</span>${esc(d.text)}</p>`).join("")}</figure>` : ""}
          ${(p.docs || []).length ? `<div class="docs"><p class="mono">參考文件 · Documents</p>${p.docs.map((d) => `<a class="doc" href="${esc(url(d.file))}" download><span><b>${esc(d.title)}</b><small>${esc(d.desc || "")}</small></span><span class="doc__ico" aria-hidden="true">↓</span></a>`).join("")}</div>` : ""}
        </div>
      </section>
      <div class="gallery" id="dGallery"></div>
      <nav class="d-nav">
        <a href="#work/${prev.id}"><span class="mono">← Prev</span><b>${esc(prev.title)}</b></a>
        <a href="#work/${next.id}"><span class="mono">Next →</span><b>${esc(next.title)}</b></a>
      </nav>`;
    if (media.length) {
      const c = $("#dCover");
      c.className = "d-cover" + (p.coverFit === "contain" ? " contain" : "");
      c.append(isVideo(media[0].src) ? videoEl(media[0].src) : imgEl(media[0].src, media[0].caption));
      c.addEventListener("click", () => openLB(media, 0));
      const g = $("#dGallery");
      media.slice(1).forEach((m, k) => g.append(tile(m, media, k + 1)));
      if (media.length < 2) g.hidden = true;
    } else $("#dGallery").hidden = true;
    body.querySelectorAll(".d-nav a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); history.replaceState(history.state, "", a.getAttribute("href")); route();
    }));
    detail.scrollTop = 0;
    if (!detail.classList.contains("open")) lastFocus = document.activeElement;
    detail.classList.add("open"); detail.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
    document.title = `${p.title} — ${S.name}`;
    detail.focus({ preventScroll: true });
  }
  function closeDetail() {
    if (!detail.classList.contains("open")) return;
    detail.classList.remove("open"); detail.setAttribute("aria-hidden", "true");
    document.body.classList.remove("locked");
    detail.querySelectorAll("video").forEach((v) => v.pause());
    document.title = `${S.name} Portfolio`;
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $("#detailClose").addEventListener("click", () => {
    if (history.state && history.state.detail) history.back();
    else { history.replaceState(null, "", location.pathname + location.search); closeDetail(); }
  });

  function route() {
    const m = location.hash.match(/^#work\/(.+)$/);
    const p = m && P.find((x) => x.id === decodeURIComponent(m[1]));
    if (p) openDetail(p); else closeDetail();
  }
  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);
  route();

  /* ---------- 燈箱 ---------- */
  const lb = $("#lightbox"), stage = $("#lbStage"), cap = $("#lbCap");
  let lbList = [], lbIdx = 0;
  function showLB() {
    const m = lbList[lbIdx];
    stage.innerHTML = "";
    if (isVideo(m.src)) {
      const v = videoEl(m.src, { autoplay: false, controls: true });
      v.preload = "auto"; v.muted = false; v.loop = false; stage.append(v);
      v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
    } else stage.append(imgEl(m.src, m.caption || ""));
    cap.textContent = `${pad(lbIdx + 1)} / ${pad(lbList.length)}${m.caption ? "　" + m.caption : ""}`;
    const multi = lbList.length > 1;
    $("#lbPrev").hidden = $("#lbNext").hidden = !multi;
  }
  function openLB(list, idx) {
    lbList = list; lbIdx = idx; showLB();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
  }
  function closeLB() {
    lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); stage.innerHTML = "";
    if (!detail.classList.contains("open")) document.body.classList.remove("locked");
  }
  const step = (d) => { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLB(); };
  $("#lbClose").addEventListener("click", closeLB);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target === stage) closeLB(); });
  let tx = null, ty = null;
  lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLB();
    tx = null;
  });
  document.addEventListener("keydown", (e) => {
    if (lb.classList.contains("open")) {
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    } else if (e.key === "Escape" && detail.classList.contains("open")) $("#detailClose").click();
  });
})();
