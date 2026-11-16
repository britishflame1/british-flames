/* Flamme qui suit le curseur : ordinateur uniquement (souris), désactivée si l'utilisateur réduit les animations. */
(function () {
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) return;

  var cv = document.createElement("canvas");
  if (!cv.getContext) return;
  cv.className = "cursor-fire";
  cv.setAttribute("aria-hidden", "true");
  document.body.appendChild(cv);

  var ctx = cv.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0;
  function size() {
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  addEventListener("resize", size);

  var parts = [], mx = 0, my = 0, px = 0, py = 0, inside = false, running = false;

  addEventListener("pointermove", function (e) {
    mx = e.clientX; my = e.clientY;
    if (!inside) { px = mx; py = my; }
    inside = true;
    start();
  });
  document.addEventListener("pointerleave", function () { inside = false; });
  addEventListener("blur", function () { inside = false; });

  function spawn(x, y, speed) {
    var n = 2 + Math.min(3, speed / 9);
    for (var i = 0; i < n; i++) {
      parts.push({
        x: x + (Math.random() - .5) * 10, y: y + (Math.random() - .5) * 6,
        vx: (Math.random() - .5) * .5, vy: -(0.95 + Math.random() * 1.2),
        r: 7 + Math.random() * 7, life: 0, max: 22 + Math.random() * 16,
        wob: Math.random() * 6.28
      });
    }
  }

  // Jaune pâle, puis orange, puis rouge
  function color(t) {
    if (t < .25) return [255, 230 - t * 160, 120 - t * 400];
    if (t < .6) return [255, 190 - (t - .25) * 330, 30];
    return [216 - (t - .6) * 200, 40, 20];
  }

  function start() { if (!running) { running = true; requestAnimationFrame(tick); } }

  function tick() {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, W, H);

    if (inside) {
      var speed = Math.hypot(mx - px, my - py);
      var steps = Math.max(1, Math.floor(speed / 11));
      for (var s = 1; s <= steps; s++) spawn(px + (mx - px) * s / steps, py + (my - py) * s / steps, speed / steps);
      px = mx; py = my;
    }

    ctx.globalCompositeOperation = "lighter";
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      p.life++;
      var t = p.life / p.max;
      if (t >= 1) { parts.splice(i, 1); continue; }
      p.wob += .18;
      p.x += p.vx + Math.sin(p.wob) * .35;
      p.y += p.vy; p.vy *= .985;
      var r = p.r * (1 - t * .85);
      var c = color(t), a = (1 - t) * .43;
      var rgb = (c[0] | 0) + "," + (c[1] | 0) + "," + Math.max(0, c[2] | 0);
      var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      g.addColorStop(0, "rgba(" + rgb + "," + a + ")");
      g.addColorStop(1, "rgba(" + rgb + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.2832); ctx.fill();
    }
    if (parts.length > 450) parts.splice(0, parts.length - 450);

    // S'arrête quand le curseur est sorti et que les dernières braises sont éteintes
    if (inside || parts.length) requestAnimationFrame(tick);
    else { running = false; ctx.clearRect(0, 0, W, H); }
  }
})();
