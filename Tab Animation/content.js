var focusSnail = function () {
  "use strict";
  var e = {
    enabled: !0,
    trigger: t
  };

  function t(e, t) {
    var a, o;
    c ? g() : ((o = s.createElement("div")).innerHTML = '<svg id="focus-snail_svg" width="100%" height="100%"><linearGradient id="focus-snail_gradient"><stop id="focus-snail_start" offset="0%" stop-color="rgb(91, 157, 217)" stop-opacity="0"/><stop id="focus-snail_middle" offset="80%" stop-color="rgb(91, 157, 217)" stop-opacity="0.8"/><stop id="focus-snail_end" offset="100%" stop-color="rgb(91, 157, 217)" stop-opacity="0"/></linearGradient><polygon id="focus-snail_polygon" fill="url(#focus-snail_gradient)"/></svg>',
      c = _(a = o, "svg"),
      h = _(a, "polygon"),
      p = _(a, "start"),
      f = _(a, "middle"),
      _(a, "end"),
      m = _(a, "gradient"),
      r.appendChild(c));
    var u, v, L, D, k, x, T = M(e), S = M(t), Y = 0, C = 0, H = 0, A = 0, j = function (e) {
      return 50 * Math.pow(function (e, t, i) {
        if (e <= t) return t;
        if (e >= i) return i;
        return e
      }(e, 32, 1024), 1 / 3)
    }((u = T.left,
      v = T.top,
      L = S.left,
      D = S.top,
      k = u - L,
      x = v - D,
      Math.sqrt(k * k + x * x)));
    var N = !0;
    !function (e, t) {
      var i = Date.now();
      !function n() {
        l = requestAnimationFrame((function () {
          var s = Date.now() - i;
          e(s / t),
            s < t && n()
        }))
      }()
    }((function (e) {
      var t;
      N && (t = w(),
        c.style.left = t.left + "px",
        c.style.top = t.top + "px",
        //c.setAttribute("width", n.innerWidth),
        //c.setAttribute("height", n.innerHeight),
        c.classList.add("focus-snail_visible"),
        Y = S.left - t.left,
        C = T.left - t.left,
        H = S.top - t.top,
        A = T.top - t.top,
        function (e, t, i, n, s, a, r, o, l) {
          var u = d(t, i, n, s)
            , c = d(a, r, o, l)
            , h = function (e) {
              var t = Math.floor(e / Math.PI * 2) + 2
                , i = Math.PI / 4 + Math.PI / 2 * t
                , n = Math.sqrt(2)
                , s = Math.cos(Math.abs(i - e)) * n
                , a = s * Math.cos(e)
                , r = s * Math.sin(e);
              return {
                x1: a < 0 ? 1 : 0,
                y1: r < 0 ? 1 : 0,
                x2: a >= 0 ? a : a + 1,
                y2: r >= 0 ? r : r + 1
              }
            }(Math.atan2(u.y - c.y, u.x - c.x));
          e.setAttribute("x1", h.x1),
            e.setAttribute("y1", h.y1),
            e.setAttribute("x2", h.x2),
            e.setAttribute("y2", h.y2)
        }(m, C, A, T.width, T.height, Y, H, S.width, S.height),
        function (e, t) {
          t.points.clear();
          for (var i = 0; i < e.length; i++) {
            y(t, e[i])
          }
        }(function (e, t) {
          var i = 0;
          e.top < t.top && (i = 1);
          e.right > t.right && (i += 2);
          e.bottom > t.bottom && (i += 4);
          e.left < t.left && (i += 8);
          for (var n = [[], [0, 1], [1, 2], [0, 1, 2], [2, 3], [0, 1], [1, 2, 3], [0, 1, 2, 3], [3, 0], [3, 0, 1], [3, 0], [3, 0, 1, 2], [2, 3, 0], [2, 3, 0, 1], [1, 2, 3, 0], [0, 1, 2, 3, 0]], s = b(e).concat(b(t)), a = [], r = n[i], o = 0; o < r.length; o++)
            a.push(s[r[o]]);
          for (; o--;)
            a.push(s[r[o] + 4]);
          return a
        }({
          top: A,
          right: C + T.width,
          bottom: A + T.height,
          left: C
        }, {
          top: H,
          right: Y + S.width,
          bottom: H + S.height,
          left: Y
        }), h));
      var s = e > .4 ? i((e - .4) / .6) : 0
        , a = e < .8 ? i(e / .8) : 1;
      p.setAttribute("offset", 100 * s + "%"),
        f.setAttribute("offset", 100 * a + "%"),
        e >= 1 && g(),
        N = !1
    }
    ), j)
  }

  function i(e) {
    return 2 * e - e * e
  }

  var n = window
    , s = document
    , a = s.documentElement
    , r = s.body
    , o = null
    , l = 0
    , u = 0;

  function d(e, t, i, n) {
    return {
      x: e + i / 2,
      y: t + n / 2
    }
  }

  a.addEventListener("keydown", (function (t) {
    if (e.enabled) {
      var i = t.which;
      (9 === i || i > 36 && i < 41) && (u = Date.now())
    }
  }
  ), !1),
    a.addEventListener("blur", (function (t) {
      e.enabled && (g(),
        o = v() ? t.target : null)
    }
    ), !0),
    a.addEventListener("focus", (function (e) {
      o && v() && t(o, e.target)
    }
    ), !0);

  var c = null
    , h = null
    , p = null
    , f = null
    , m = null;

  function _(e, t) {
    return e.querySelector("#focus-snail_" + t)
  }

  function g() {
    l && (cancelAnimationFrame(l),
      l = 0,
      c.classList.remove("focus-snail_visible"))
  }

  function v() {
    return Date.now() - u < 42
  }

  function y(e, t) {
    var i = e.ownerSVGElement.createSVGPoint();
    i.x = t.x,
      i.y = t.y,
      e.points.appendItem(i)
  }

  function b(e) {
    return [{
      x: e.left,
      y: e.top
    }, {
      x: e.right,
      y: e.top
    }, {
      x: e.right,
      y: e.bottom
    }, {
      x: e.left,
      y: e.bottom
    }]
  }

  function M(e) {
    var t, i, n, s, o, l, u = (t = e.getBoundingClientRect(),
      i = w(),
      n = a.clientTop || r.clientTop,
      s = a.clientLeft || r.clientLeft,
      o = t.top + i.top - n,
      l = t.left + i.left - s,
    {
      top: o || 0,
      left: l || 0
    });
    return {
      left: u.left - 0,
      top: u.top - 0,
      width: Math.max(12, e.offsetWidth) + 0,
      height: Math.max(8, e.offsetHeight) + 0
    }
  }

  function w() {
    return {
      top: n.pageYOffset || a.scrollTop || 0,
      left: n.pageXOffset || a.scrollLeft || 0
    }
  }

  var L = s.createElement("style");
  return L.textContent = "#focus-snail_svg {\tposition: absolute;\ttop: 0;\tright: 0;\tbottom: 0;\tleft: 0;\tmargin: 0;\tbackground: transparent;\tvisibility: hidden;\tpointer-events: none;\t-webkit-transform: translateZ(0);}#focus-snail_svg.focus-snail_visible {\tvisibility: visible;\tz-index: 999;}#focus-snail_polygon {\tstroke-width: 0;}",
    r.appendChild(L),
    e
}();