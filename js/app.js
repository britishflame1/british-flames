(() => {
  "use strict";

  const MENU = window.BF_MENU || [];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Traduction : fournie par i18n.js, sinon le texte français tel quel.
  const T = window.BF_T || ((text, vars) => {
    let out = text;
    if (vars) Object.keys(vars).forEach((k) => { out = out.split(`{${k}}`).join(vars[k]); });
    return out;
  });

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe");
  const img = (name) => `assets/img/${name}.webp`;

  /* ---------- Flammes en aplats ---------- */
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function flamePath({ w, h, n, min, max, base, seed }) {
    const r = rng(seed);
    const f = (v) => v.toFixed(1);
    // Largeurs irrégulières : une rangée de langues identiques ressemble à une scie.
    const weights = Array.from({ length: n }, () => 0.6 + r() * 0.9);
    const sum = weights.reduce((a, b) => a + b, 0);
    let x0 = 0;
    let y = h - base;
    let d = `M0 ${h}V${f(y)}`;
    for (let i = 0; i < n; i++) {
      const step = (weights[i] / sum) * w;
      const x1 = x0 + step;
      const fh = min + r() * (max - min);
      const lean = r() < 0.5 ? -1 : 1;
      const tx = x0 + step * (0.5 + lean * (0.12 + r() * 0.2));
      const ty = h - base - fh;
      const end = i === n - 1 ? h - base : h - base - r() * base * 0.7;
      // Flanc bombé, pointe qui se recourbe, puis creux sous la pointe.
      if (lean > 0) {
        d += `C${f(x0 - step * 0.04)} ${f(y - fh * 0.62)} ${f(tx - step * 0.42)} ${f(ty + fh * 0.3)} ${f(tx)} ${f(ty)}`;
        d += `C${f(tx - step * 0.1)} ${f(ty + fh * 0.36)} ${f(x1 + step * 0.06)} ${f(end - fh * 0.5)} ${f(x1)} ${f(end)}`;
      } else {
        d += `C${f(x0 - step * 0.06)} ${f(y - fh * 0.5)} ${f(tx + step * 0.1)} ${f(ty + fh * 0.36)} ${f(tx)} ${f(ty)}`;
        d += `C${f(tx + step * 0.42)} ${f(ty + fh * 0.3)} ${f(x1 + step * 0.04)} ${f(end - fh * 0.62)} ${f(x1)} ${f(end)}`;
      }
      x0 = x1;
      y = end;
    }
    return `${d}V${h}Z`;
  }

  $$("svg[data-flame]").forEach((svg) => {
    const o = svg.dataset;
    const w = 1440;
    const h = +o.h;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", flamePath({ w, h, n: +o.n, min: +o.min, max: +o.max, base: +o.base, seed: +o.seed }));
    svg.appendChild(path);
  });

  /* ---------- Braises ---------- */
  // host : conteneur ; count : nombre de braises ; slow : plus lentes et plus hautes (ambiance de la carte)
  function spawnEmbers(host, count, seed, slow) {
    if (!host || reduced) return;
    const r = rng(seed);
    const colors = ["#FFB81C", "#FF6B0A", "#FFD84A", "#F2331F"];
    for (let i = 0; i < count; i++) {
      const e = document.createElement("span");
      e.className = "ember";
      e.style.left = `${(r() * 100).toFixed(1)}%`;
      e.style.setProperty("--size", `${2 + Math.round(r() * 3)}px`);
      e.style.setProperty("--c", colors[Math.floor(r() * colors.length)]);
      e.style.setProperty("--dur", `${((slow ? 9 : 4) + r() * (slow ? 8 : 5)).toFixed(2)}s`);
      e.style.setProperty("--delay", `${(-r() * (slow ? 17 : 9)).toFixed(2)}s`);
      e.style.setProperty("--drift", `${Math.round((r() - 0.5) * (slow ? 160 : 120))}px`);
      e.style.setProperty("--lift", `${-Math.round(slow ? window.innerHeight * (0.55 + r() * 0.4) : 220 + r() * 360)}px`);
      host.appendChild(e);
    }
  }
  const small = window.innerWidth < 640;
  spawnEmbers($("#embers"), small ? 12 : 30, 99, false);
  spawnEmbers($("#menuEmbers"), small ? 8 : 16, 314, true);

  /* ---------- Prix ---------- */
  function priceHTML(item) {
    if (item.p == null) return `<span class="price-todo caption-4">${T("Prix à confirmer")}</span>`;
    const rows = Array.isArray(item.p) ? item.p : [["", item.p]];
    return rows.map(([label, value]) =>
      `<span class="price">${label ? `<span class="caption-2 price-label">${esc(label)}</span>` : ""}<span class="heading-6 price-val">${value}<span class="caption-3"> DH</span></span></span>`
    ).join("");
  }

  /* ---------- Best sellers ---------- */
  const bestGrid = $("#bestGrid");
  const best = [];
  MENU.forEach((cat) => cat.items.forEach((it) => { if (it.best) best.push({ it, cat }); }));
  best.sort((a, b) => a.it.best - b.it.best);
  if (bestGrid) {
    bestGrid.innerHTML = best.slice(0, 4).map(({ it, cat }, i) => {
      const tall = i === 0 || i === 3;
      return `
      <article class="card best b${i + 1} ${tall ? "tall" : ""}" style="--ratio:${cat.ratio || "1 / 1"}">
        <div class="card-media">
          <span class="flag caption-3" aria-hidden="true"><svg class="icon i-fire" aria-hidden="true"><use href="#i-fire"/></svg>N°${it.best}</span>
          <img class="${it.fit === "contain" ? "contain" : ""}" src="${img(it.img)}" alt="${esc(it.n)}" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <p class="sr-only">${T("Numéro {n} des best sellers", { n: it.best })}</p>
          <h3 class="heading-6">${esc(it.bn || it.n)}</h3>
          <p class="caption-2 best-cat">${esc(cat.title)}</p>
          <div class="card-prices">${priceHTML(it)}</div>
        </div>
      </article>`;
    }).join("");
  }

  /* ---------- Carte ---------- */
  const list = $("#menuList");
  const filters = $("#filters");
  const countEl = $("#count");
  const empty = $("#empty");
  const emptyTitle = $("#emptyTitle");
  const search = $("#search");
  const total = MENU.reduce((n, c) => n + c.items.length, 0);
  let active = "all";

  const statItems = $("#statItems");
  const statCats = $("#statCats");
  if (statItems) statItems.textContent = total;
  if (statCats) statCats.textContent = MENU.length;

  function itemHTML(it, cat) {
    const flag = it.best ? `<span class="flag caption-3"><svg class="icon i-fire" aria-hidden="true"><use href="#i-fire"/></svg>${T("Best seller")}</span>` : "";
    const desc = it.d ? `<p class="caption-2 card-desc">${esc(it.d)}</p>` : "";
    const key = esc(norm(`${it.n} ${cat.title} ${cat.label} ${it.d || ""}`));
    return `
      <article class="card item ${cat.list ? "row" : ""}" data-key="${key}">
        <div class="card-media">
          ${cat.list ? "" : flag}
          <img class="${it.fit === "contain" ? "contain" : ""}" src="${img(it.img)}" alt="${esc(it.n)}" loading="lazy" decoding="async">
        </div>
        <div class="card-body">
          <h4 class="title-3">${esc(it.n)}</h4>
          ${desc}
          ${cat.list ? "" : `<div class="card-prices">${priceHTML(it)}</div>`}
        </div>
        ${cat.list ? `<div class="card-prices">${priceHTML(it)}</div>` : ""}
      </article>`;
  }

  const track = $("#filtersTrack");

  if (list && filters && track) {
    track.innerHTML =
      `<button class="filter button-sm" type="button" data-cat="all" aria-pressed="true">${T("Tout")} <span class="n caption-4">${total}</span></button>` +
      MENU.map((c) => `<button class="filter button-sm" type="button" data-cat="${c.id}" aria-pressed="false">${esc(c.label)} <span class="n caption-4">${c.items.length}</span></button>`).join("");

    list.innerHTML = MENU.map((c) => `
      <section class="group" id="cat-${c.id}" data-cat="${c.id}" aria-labelledby="t-${c.id}">
        <header class="group-head">
          <h3 class="group-title" id="t-${c.id}">${esc(c.title)}</h3>
          <span class="caption-2 group-count"></span>
          ${c.note ? `<p class="caption-1 group-note"><svg class="icon i-info" aria-hidden="true"><use href="#i-info"/></svg>${esc(c.note)}</p>` : ""}
        </header>
        <div class="grid ${c.wide ? "wide" : ""} ${c.list ? "list" : ""}" style="--ratio:${c.ratio || "1 / 1"}">
          ${c.items.map((it) => itemHTML(it, c)).join("")}
        </div>
      </section>`).join("");

    const groups = $$(".group", list);
    const plural = (n) => `${n} ${T(n > 1 ? "plats" : "plat")}`;

    function apply(animate) {
      const q = norm(search.value.trim());
      const words = q.split(/\s+/).filter(Boolean);
      let shown = 0;
      let order = 0;
      groups.forEach((g) => {
        const inCat = active === "all" || g.dataset.cat === active;
        let n = 0;
        $$(".item", g).forEach((el) => {
          const ok = inCat && words.every((w) => el.dataset.key.includes(w));
          el.hidden = !ok;
          el.classList.remove("pop");
          if (ok) {
            n++;
            if (animate) {
              el.style.setProperty("--d", `${Math.min(order * 30, 400)}ms`);
              void el.offsetWidth;
              el.classList.add("pop");
              order++;
            }
          }
        });
        g.hidden = n === 0;
        $(".group-count", g).textContent = plural(n);
        shown += n;
      });

      empty.hidden = shown !== 0;
      if (shown === 0) emptyTitle.textContent = T("Aucun plat ne correspond à « {q} »", { q: search.value.trim() });

      const cat = MENU.find((c) => c.id === active);
      const scope = cat ? cat.title : T("Toute la carte");
      countEl.textContent = q
        ? T("{count} pour « {q} » dans : {scope}", { count: plural(shown), q: search.value.trim(), scope })
        : T("{scope} : {count}", { scope, count: plural(shown) });
    }

    function setActive(id, scroll) {
      active = id;
      $$(".filter", track).forEach((b) => {
        const on = b.dataset.cat === id;
        b.setAttribute("aria-pressed", String(on));
        if (on && track.scrollWidth > track.clientWidth) {
          track.scrollTo({ left: b.offsetLeft - track.clientWidth / 2 + b.offsetWidth / 2, behavior: reduced ? "auto" : "smooth" });
        }
      });
      apply(true);
      updateBar();
      if (scroll) {
        const top = list.getBoundingClientRect().top;
        // Sur téléphone la barre de catégories est en bas : seule la navigation occupe le haut.
        const stickyTop = parseFloat(getComputedStyle(filters).top);
        const shown = filters.offsetParent !== null;
        const offset = !shown || Number.isNaN(stickyTop) ? 96 : filters.offsetHeight + stickyTop + 24;
        if (top < offset - 1) {
          window.scrollTo({ top: window.scrollY + top - offset, behavior: reduced ? "auto" : "smooth" });
        }
      }
    }

    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (b) setActive(b.dataset.cat, true);
    });

    /* ---------- Barre de catégories (téléphone) ---------- */
    const catOpen = $("#catOpen");
    const catThumb = $("#catThumb");
    const catKicker = $("#catKicker");
    const catName = $("#catName");
    const catCount = $("#catCount");
    const sheet = $("#catSheet");
    const catGrid = $("#catGrid");
    const fireIcon = `<svg class="icon i-fire" aria-hidden="true"><use href="#i-fire"/></svg>`;
    const thumbOf = (c) => c ? `<img src="${img(c.items[0].img)}" alt="" class="${c.list ? "contain" : ""}" decoding="async">` : fireIcon;
    let inView = null;

    function updateBar() {
      if (!catOpen) return;
      const cat = MENU.find((c) => c.id === active);
      const seen = !cat && inView ? MENU.find((c) => c.id === inView) : null;
      const shownIn = (id) => $$(".item:not([hidden])", $(`#cat-${id}`)).length;
      if (cat) {
        catKicker.textContent = T("Catégorie");
        catName.textContent = cat.label;
        catCount.textContent = shownIn(cat.id);
      } else if (seen) {
        catKicker.textContent = T("Toute la carte");
        catName.textContent = seen.label;
        catCount.textContent = shownIn(seen.id);
      } else {
        catKicker.textContent = T("Catégorie");
        catName.textContent = T("Toute la carte");
        catCount.textContent = total;
      }
      const key = (cat || seen || { id: "all" }).id;
      if (catThumb.dataset.key !== key) {
        catThumb.dataset.key = key;
        catThumb.innerHTML = thumbOf(cat || seen);
      }
      catOpen.setAttribute("aria-label", T("Changer de catégorie. Actuellement : {name}", { name: cat ? cat.title : T("toute la carte") }));
      // Nom trop long pour une ligne : on retire la petite ligne du dessus et le nom passe sur deux lignes.
      catOpen.classList.remove("long");
      if (catName.scrollWidth > catName.clientWidth + 1) catOpen.classList.add("long");
    }

    // En mode « Tout », la barre indique la famille qu'on est en train de regarder.
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) inView = en.target.dataset.cat; });
      if (active === "all") updateBar();
    }, { rootMargin: "-45% 0px -50% 0px" });
    groups.forEach((g) => spy.observe(g));
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && entries[0].boundingClientRect.top > 0) { inView = null; if (active === "all") updateBar(); }
    }, { rootMargin: "0px 0px -50% 0px" }).observe($(".search"));

    if (catOpen && sheet && catGrid) {
      const panelEl = $(".cat-panel", sheet);
      const tiles = [{ id: "all", title: T("Toute la carte"), n: total }].concat(MENU.map((c) => ({ id: c.id, title: c.label, n: c.items.length, c })));
      catGrid.innerHTML = tiles.map((t) => `
        <button class="cat-tile" type="button" data-cat="${t.id}" aria-pressed="false">
          <span class="cat-tile-thumb ${t.c ? "" : "all"}" aria-hidden="true">${t.c ? `<img src="${img(t.c.items[0].img)}" alt="" class="${t.c.list ? "contain" : ""}" loading="lazy" decoding="async">` : fireIcon}</span>
          <span class="cat-tile-text"><span class="body-5 cat-tile-name">${esc(t.title)}</span><span class="caption-5 cat-tile-n">${plural(t.n)}</span></span>
        </button>`).join("");

      let closeTimer = 0;
      const isOpen = () => !sheet.hidden && sheet.classList.contains("open");

      function openSheet() {
        clearTimeout(closeTimer);
        $$(".cat-tile", catGrid).forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.cat === active)));
        sheet.hidden = false;
        panelEl.style.transform = "";
        void sheet.offsetWidth;
        sheet.classList.add("open");
        catOpen.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        const current = $(`.cat-tile[data-cat="${active}"]`, catGrid);
        current.scrollIntoView({ block: "nearest" });
        current.focus({ preventScroll: true });
      }
      function closeSheet(restoreFocus = true) {
        if (sheet.hidden) return;
        sheet.classList.remove("open");
        panelEl.style.transform = "";
        catOpen.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        closeTimer = setTimeout(() => { sheet.hidden = true; }, reduced ? 0 : 400);
        if (restoreFocus) catOpen.focus({ preventScroll: true });
      }

      catOpen.addEventListener("click", openSheet);
      sheet.addEventListener("click", (e) => {
        const tile = e.target.closest(".cat-tile");
        if (tile) {
          closeSheet();
          setActive(tile.dataset.cat, true);
          return;
        }
        if (e.target.closest("[data-close]")) closeSheet();
      });
      sheet.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { e.preventDefault(); closeSheet(); return; }
        if (e.key !== "Tab") return;
        // Le focus reste dans la feuille tant qu'elle est ouverte.
        const items = $$("button", panelEl);
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
      window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => { if (e.matches) closeSheet(false); });

      // Glisser la poignée vers le bas ferme la feuille.
      const handle = $("#catHandle");
      let pull = null;
      handle.addEventListener("pointerdown", (e) => {
        if (!isOpen()) return;
        pull = { y: e.clientY, id: e.pointerId, dy: 0 };
        try { handle.setPointerCapture(e.pointerId); } catch (err) { /* pointeur déjà relâché */ }
        panelEl.classList.add("pulling");
      });
      handle.addEventListener("pointermove", (e) => {
        if (!pull || e.pointerId !== pull.id) return;
        pull.dy = Math.max(0, e.clientY - pull.y);
        panelEl.style.transform = `translateY(${pull.dy}px)`;
      });
      const endPull = (e) => {
        if (!pull || e.pointerId !== pull.id) return;
        const { dy } = pull;
        pull = null;
        panelEl.classList.remove("pulling");
        if (dy > 80) closeSheet();
        else panelEl.style.transform = "";
      };
      handle.addEventListener("pointerup", endPull);
      handle.addEventListener("pointercancel", endPull);
    }

    const catSearch = $("#catSearch");
    if (catSearch) {
      catSearch.addEventListener("click", () => {
        const top = search.getBoundingClientRect().top;
        window.scrollTo({ top: window.scrollY + top - 96, behavior: reduced ? "auto" : "smooth" });
        search.focus({ preventScroll: true });
      });
    }

    /* ---------- Rangée de filtres (tablette) : glisser et fondu des bords ---------- */
    const paintEdges = () => {
      const max = track.scrollWidth - track.clientWidth;
      filters.classList.toggle("fade-start", track.scrollLeft > 2);
      filters.classList.toggle("fade-end", track.scrollLeft < max - 2);
    };
    // Deux lectures et deux classes : assez léger pour suivre chaque événement de défilement.
    track.addEventListener("scroll", paintEdges, { passive: true });
    window.addEventListener("resize", paintEdges, { passive: true });
    paintEdges();

    let fdrag = null;
    let swallowClick = false;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0 || track.scrollWidth <= track.clientWidth + 1) return;
      fdrag = { x: e.clientX, left: track.scrollLeft, moved: false, id: e.pointerId };
    });
    track.addEventListener("pointermove", (e) => {
      if (!fdrag || e.pointerId !== fdrag.id) return;
      const dx = e.clientX - fdrag.x;
      if (!fdrag.moved && Math.abs(dx) < 5) return;
      if (!fdrag.moved) {
        fdrag.moved = true;
        track.classList.add("dragging");
        try { track.setPointerCapture(fdrag.id); } catch (err) { /* pointeur déjà relâché */ }
      }
      track.scrollLeft = fdrag.left - dx;
    });
    const endFdrag = (e) => {
      if (!fdrag || e.pointerId !== fdrag.id) return;
      swallowClick = fdrag.moved;
      fdrag = null;
      track.classList.remove("dragging");
    };
    track.addEventListener("pointerup", endFdrag);
    track.addEventListener("pointercancel", endFdrag);
    // Un glissé ne doit pas aussi sélectionner le bouton sous la souris.
    track.addEventListener("click", (e) => {
      if (swallowClick) { e.stopPropagation(); e.preventDefault(); swallowClick = false; }
    }, true);
    track.addEventListener("dragstart", (e) => e.preventDefault());
    // Une recherche porte sur toute la carte : on quitte la famille en cours.
    search.addEventListener("input", () => {
      if (search.value.trim() && active !== "all") setActive("all", false);
      else apply(false);
    });
    // Entrée : on ferme le clavier du téléphone et on montre les résultats.
    search.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      search.blur();
      const top = list.getBoundingClientRect().top;
      window.scrollTo({ top: window.scrollY + top - 96, behavior: reduced ? "auto" : "smooth" });
    });
    $("#emptyReset").addEventListener("click", () => {
      search.value = "";
      setActive("all", false);
      search.focus();
    });

    apply(false);
    updateBar();
  }

  /* ---------- Vendredi ---------- */
  const friday = $("#fridayChip span");
  if (friday && new Date().getDay() === 5) friday.textContent = T("Disponible aujourd'hui");

  /* ---------- Navigation ---------- */
  const toggle = $("#navToggle");
  const panel = $("#navPanel");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", T(open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      panel.hidden = false;
      void panel.offsetWidth; // force le rendu de l'état fermé avant la transition
      panel.classList.add("open");
    } else {
      panel.classList.remove("open");
      setTimeout(() => { if (!panel.classList.contains("open")) panel.hidden = true; }, 300);
    }
  }
  if (toggle && panel) {
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    panel.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
  }

  // Téléphone : la barre se range quand on descend et revient dès qu'on remonte.
  const navEl = $("#nav");
  const compact = window.matchMedia("(max-width: 959px)");
  if (navEl) {
    let lastY = window.scrollY;
    let navTick = false;
    const showNav = () => navEl.classList.remove("is-away");
    const onNavScroll = () => {
      navTick = false;
      const y = window.scrollY;
      const open = toggle && toggle.getAttribute("aria-expanded") === "true";
      if (!compact.matches || open || y < 160) showNav();
      else if (y > lastY + 6) navEl.classList.add("is-away");
      else if (y < lastY - 6) showNav();
      lastY = y;
    };
    window.addEventListener("scroll", () => {
      if (!navTick) { navTick = true; requestAnimationFrame(onNavScroll); }
    }, { passive: true });
    navEl.addEventListener("focusin", showNav);
    compact.addEventListener("change", showNav);
  }

  // Hors écran, les flammes et les braises s'arrêtent.
  const pauser = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.target.classList.toggle("paused", !en.isIntersecting));
  }, { rootMargin: "80px 0px" });
  $$(".flames, .embers").forEach((el) => pauser.observe(el));

  // Best sellers : la rangée ne prend le focus clavier que lorsqu'elle défile.
  const phone = window.matchMedia("(max-width: 639px)");
  const syncBest = () => {
    if (!bestGrid) return;
    if (phone.matches) {
      bestGrid.setAttribute("tabindex", "0");
      bestGrid.setAttribute("role", "region");
      bestGrid.setAttribute("aria-label", T("Best sellers, faites défiler horizontalement"));
    } else {
      bestGrid.removeAttribute("tabindex");
      bestGrid.removeAttribute("role");
      bestGrid.removeAttribute("aria-label");
    }
  };
  syncBest();
  phone.addEventListener("change", syncBest);

  /* ---------- Best sellers : rangée à faire glisser ---------- */
  const bestPrev = $("#bestPrev");
  const bestNext = $("#bestNext");
  const bestDots = $("#bestDots");
  if (bestGrid && bestPrev && bestNext && bestDots) {
    const cards = Array.from(bestGrid.children);
    const pad = 16;
    bestDots.innerHTML = cards.map(() => "<span></span>").join("");
    const dots = Array.from(bestDots.children);
    const scrollable = () => bestGrid.scrollWidth > bestGrid.clientWidth + 1;
    const offsetOf = (card) => bestGrid.scrollLeft + card.getBoundingClientRect().left - bestGrid.getBoundingClientRect().left - pad;

    const current = () => {
      if (bestGrid.scrollLeft >= bestGrid.scrollWidth - bestGrid.clientWidth - 2) return cards.length - 1;
      let idx = 0;
      let min = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs(offsetOf(card) - bestGrid.scrollLeft);
        if (d < min) { min = d; idx = i; }
      });
      return idx;
    };
    const paint = () => {
      const i = current();
      dots.forEach((d, n) => d.classList.toggle("on", n === i));
      bestPrev.disabled = i === 0;
      bestNext.disabled = i === cards.length - 1;
    };
    const go = (i) => {
      const n = Math.max(0, Math.min(cards.length - 1, i));
      bestGrid.scrollTo({ left: offsetOf(cards[n]), behavior: reduced ? "auto" : "smooth" });
    };

    bestPrev.addEventListener("click", () => go(current() - 1));
    bestNext.addEventListener("click", () => go(current() + 1));

    let bestTick = false;
    bestGrid.addEventListener("scroll", () => {
      if (!bestTick) { bestTick = true; requestAnimationFrame(() => { bestTick = false; paint(); }); }
    }, { passive: true });
    phone.addEventListener("change", paint);
    paint();

    // À la souris, le doigt n'existe pas : on fait glisser en maintenant le clic.
    let drag = null;
    bestGrid.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0 || !scrollable()) return;
      drag = { x: e.clientX, left: bestGrid.scrollLeft, from: current(), moved: false, id: e.pointerId };
    });
    bestGrid.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) < 5) return;
      if (!drag.moved) {
        drag.moved = true;
        bestGrid.classList.add("dragging");
        try { bestGrid.setPointerCapture(drag.id); } catch (err) { /* pointeur déjà relâché */ }
      }
      bestGrid.scrollLeft = drag.left - dx;
    });
    const endDrag = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      const { moved, from } = drag;
      drag = null;
      if (!moved) return;
      // On vise la carte avant de rendre la main à l'aimantation, sinon elle saute.
      go(dx < -40 ? from + 1 : dx > 40 ? from - 1 : current());
      bestGrid.classList.remove("dragging");
    };
    bestGrid.addEventListener("pointerup", endDrag);
    bestGrid.addEventListener("pointercancel", endDrag);
    bestGrid.addEventListener("dragstart", (e) => e.preventDefault());
  }

  const links = $$(".nav-links a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => {
        if (a.getAttribute("href") === `#${en.target.id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  links.forEach((a) => {
    const target = $(a.getAttribute("href"));
    if (target) spy.observe(target);
  });
  const hero = $("#accueil");
  if (hero) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) links.forEach((a) => a.removeAttribute("aria-current"));
    }, { rootMargin: "-40% 0px -55% 0px" }).observe(hero);
  }

  /* ---------- Apparitions ---------- */
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  $$(".reveal").forEach((el) => revealer.observe(el));

  /* ---------- Tagline mot à mot ---------- */
  const tagline = $("#tagline");
  if (tagline) {
    const words = tagline.textContent.trim().split(/\s+/);
    tagline.setAttribute("aria-label", tagline.textContent.trim());
    tagline.innerHTML = words.map((w) => `<span class="w" aria-hidden="true">${esc(w)}</span>`).join(" ");
    const spans = $$(".w", tagline);
    if (reduced) {
      spans.forEach((s) => s.classList.add("on"));
    } else {
      let lit = 0;
      let ticking = false;
      const update = () => {
        ticking = false;
        const r = tagline.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.45;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)));
        const n = Math.round(p * spans.length);
        if (n > lit) {
          for (let i = lit; i < n; i++) spans[i].classList.add("on");
          lit = n;
          if (lit === spans.length) window.removeEventListener("scroll", onScroll);
        }
      };
      const onScroll = () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      update();
    }
  }
})();
