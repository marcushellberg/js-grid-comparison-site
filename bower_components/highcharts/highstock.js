var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highstock JS v4.2.6 (2016-08-02)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (M, ja) {
  (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports ? module.exports = M.document ? ja(M) : ja : M.Highcharts = ja(M);
})(typeof window !== "undefined" ? window : this, function (M) {
  function ja(a, b) {
    var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;if (b) throw Error(c);M.console && console.log(c);
  }function Ab(a, b, c) {
    this.options = b;this.elem = a;this.prop = c;
  }function D() {
    var a,
        b = arguments,
        c,
        d = {},
        e = function e(a, b) {
      var c, d;(typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object" && (a = {});for (d in b) {
        b.hasOwnProperty(d) && (c = b[d], a[d] = c && (typeof c === "undefined" ? "undefined" : _typeof(c)) === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
      }return a;
    };b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));c = b.length;for (a = 0; a < c; a++) {
      d = e(d, b[a]);
    }return d;
  }function H(a, b) {
    return parseInt(a, b || 10);
  }function Ea(a) {
    return typeof a === "string";
  }function Ra(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  }function Ba(a, b) {
    for (var c = a.length; c--;) {
      if (a[c] === b) {
        a.splice(c, 1);break;
      }
    }
  }function t(a) {
    return a !== x && a !== null;
  }
  function $(a, b, c) {
    var d, e;if (Ea(b)) t(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));else if (t(b) && ha(b)) for (d in b) {
      a.setAttribute(d, b[d]);
    }return e;
  }function sa(a) {
    return Ra(a) ? a : [a];
  }function bb(a, b, c) {
    if (b) return setTimeout(a, b, c);a.call(0, c);
  }function O(a, b) {
    if (La && !ma && b && b.opacity !== x) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";v(a.style, b);
  }function ia(a, b, c, d, e) {
    a = C.createElement(a);b && v(a, b);e && O(a, { padding: 0, border: "none", margin: 0 });c && O(a, c);d && d.appendChild(a);return a;
  }function oa(a, b) {
    var c = function c() {};c.prototype = new a();v(c.prototype, b);return c;
  }function Sa(a, b, c) {
    return Array((b || 2) + 1 - String(a).length).join(c || 0) + a;
  }function gb(a) {
    return (hb && hb(a) || Bb || 0) * 6E4;
  }function Ma(a, b) {
    for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1;) {
      e = a.slice(0, c);if (d) {
        f = e.split(":");g = f.shift().split(".");i = g.length;e = b;for (h = 0; h < i; h++) {
          e = e[g[h]];
        }if (f.length) f = f.join(":"), g = /\.([0-9])/, h = Q.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = B.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = pa(f, e);
      }j.push(e);a = a.slice(c + 1);c = (d = !d) ? "}" : "{";
    }j.push(a);return j.join("");
  }function Cb(a) {
    return aa.pow(10, Y(aa.log(a) / aa.LN10));
  }function Db(a, b, c, d, e) {
    var f,
        g = a,
        c = q(c, 1);f = a / c;b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));for (d = 0; d < b.length; d++) {
      if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) break;
    }g *= c;return g;
  }function pb(a, b) {
    var c = a.length,
        d,
        e;for (e = 0; e < c; e++) {
      a[e].safeI = e;
    }a.sort(function (a, c) {
      d = b(a, c);return d === 0 ? a.safeI - c.safeI : d;
    });for (e = 0; e < c; e++) {
      delete a[e].safeI;
    }
  }function Na(a) {
    for (var b = a.length, c = a[0]; b--;) {
      a[b] < c && (c = a[b]);
    }return c;
  }function Fa(a) {
    for (var b = a.length, c = a[0]; b--;) {
      a[b] > c && (c = a[b]);
    }return c;
  }function Oa(a, b) {
    for (var c in a) {
      a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c];
    }
  }function Wa(a) {
    qb || (qb = ia(Xa));a && qb.appendChild(a);qb.innerHTML = "";
  }function V(a, b) {
    return parseFloat(a.toPrecision(b || 14));
  }function cb(a, b) {
    b.renderer.globalAnimation = q(a, b.animation);
  }function ib(a) {
    return ha(a) ? D(a) : { duration: a ? 500 : 0 };
  }function Qb() {
    var a = Q.global,
        b = a.useUTC,
        c = b ? "getUTC" : "get",
        d = b ? "setUTC" : "set";ea = a.Date || M.Date;Bb = b && a.timezoneOffset;hb = b && a.getTimezoneOffset;rb = function rb(a, c, d, h, i, j) {
      var k;b ? (k = ea.UTC.apply(0, arguments), k += gb(k)) : k = new ea(a, c, q(d, 1), q(h, 0), q(i, 0), q(j, 0)).getTime();return k;
    };Eb = c + "Minutes";Fb = c + "Hours";Gb = c + "Day";db = c + "Date";jb = c + "Month";kb = c + "FullYear";Rb = d + "Milliseconds";Sb = d + "Seconds";Tb = d + "Minutes";Ub = d + "Hours";sb = d + "Date";Hb = d + "Month";Ib = d + "FullYear";
  }function xa(a) {
    if (!(this instanceof xa)) return new xa(a);this.init(a);
  }function ba() {}function eb(a, b, c, d) {
    this.axis = a;this.pos = b;this.type = c || "";this.isNew = !0;!c && !d && this.addLabel();
  }function Vb(a, b, c, d, e) {
    var f = a.chart.inverted;this.axis = a;this.isNegative = c;this.options = b;this.x = d;this.total = null;this.points = {};this.stack = e;this.rightCliff = this.leftCliff = 0;this.alignOptions = { align: b.align || (f ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"), y: q(b.y, f ? 4 : c ? 14 : -6), x: q(b.x, f ? c ? -6 : 6 : 0) };this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center");
  }function tb(a, b, c) {
    this.scrollbarButtons = [];this.renderer = a;this.userOptions = b;this.options = D(Wb, b);this.chart = c;this.size = q(this.options.size, this.options.height);this.render();this.initEvents();this.addEvents();
  }function Jb(a) {
    var b = a.options,
        c = b.navigator,
        d = c.enabled,
        e = b.scrollbar,
        b = e.enabled,
        f = d ? c.height : 0,
        e = b ? e.height : 0;this.handles = [];this.elementsToDestroy = [];this.chart = a;this.setBaseSeries();this.height = f;this.scrollbarHeight = e;this.scrollbarEnabled = b;this.navigatorEnabled = d;this.navigatorOptions = c;this.outlineHeight = f + e;this.init();
  }function Kb(a) {
    this.init(a);
  }var x,
      C = M.document,
      aa = Math,
      A = aa.round,
      Y = aa.floor,
      Ga = aa.ceil,
      y = aa.max,
      E = aa.min,
      T = aa.abs,
      fa = aa.cos,
      na = aa.sin,
      Ca = aa.PI,
      ta = Ca * 2 / 360,
      Pa = M.navigator && M.navigator.userAgent || "",
      Xb = M.opera,
      La = /(msie|trident|edge)/i.test(Pa) && !Xb,
      ub = C && C.documentMode === 8,
      vb = !La && /AppleWebKit/.test(Pa),
      Ya = /Firefox/.test(Pa),
      lb = /(Mobile|Android|Windows Phone)/.test(Pa),
      Ta = "http://www.w3.org/2000/svg",
      ma = C && C.createElementNS && !!C.createElementNS(Ta, "svg").createSVGRect,
      bc = Ya && parseInt(Pa.split("Firefox/")[1], 10) < 4,
      ua = C && !ma && !La && !!C.createElement("canvas").getContext,
      Za,
      $a,
      Yb = {},
      Lb = 0,
      qb,
      Q,
      pa,
      N,
      va = function va() {},
      ca = [],
      mb = 0,
      Xa = "div",
      W = "M",
      R = "L",
      cc = /^[0-9]+$/,
      wb = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      ea,
      rb,
      Bb,
      hb,
      Eb,
      Fb,
      Gb,
      db,
      jb,
      kb,
      Rb,
      Sb,
      Tb,
      Ub,
      sb,
      Hb,
      Ib,
      I = {},
      B;B = M.Highcharts ? ja(16, !0) : { win: M };B.seriesTypes = I;var Ua = [],
      _ya2,
      qa,
      o,
      Ha,
      Mb,
      wa,
      G,
      U,
      K,
      fb,
      Qa;Ab.prototype = { dSetter: function dSetter() {
      var a = this.paths[0],
          b = this.paths[1],
          c = [],
          d = this.now,
          e = a.length,
          f;if (d === 1) c = this.toD;else if (e === b.length && d < 1) for (; e--;) {
        f = parseFloat(a[e]), c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f;
      } else c = b;this.elem.attr("d", c);
    }, update: function update() {
      var a = this.elem,
          b = this.prop,
          c = this.now,
          d = this.options.step;if (this[b + "Setter"]) this[b + "Setter"]();else a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit;d && d.call(a, c, this);
    }, run: function run(a, b, c) {
      var d = this,
          e = function e(a) {
        return e.stopped ? !1 : d.step(a);
      },
          f;this.startTime = +new ea();this.start = a;this.end = b;this.unit = c;this.now = this.start;this.pos = 0;e.elem = this.elem;if (e() && Ua.push(e) === 1) e.timerId = setInterval(function () {
        for (f = 0; f < Ua.length; f++) {
          Ua[f]() || Ua.splice(f--, 1);
        }Ua.length || clearInterval(e.timerId);
      }, 13);
    }, step: function step(a) {
      var b = +new ea(),
          c,
          d = this.options;c = this.elem;var e = d.complete,
          f = d.duration,
          g = d.curAnim,
          h;if (c.attr && !c.element) c = !1;else if (a || b >= f + this.startTime) {
        this.now = this.end;this.pos = 1;this.update();a = g[this.prop] = !0;for (h in g) {
          g[h] !== !0 && (a = !1);
        }a && e && e.call(c);c = !1;
      } else this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0;return c;
    }, initPath: function initPath(a, b, c) {
      function d(a) {
        for (n = a.length; n--;) {
          (a[n] === W || a[n] === R) && a.splice(n + 1, 0, a[n + 1], a[n + 2], a[n + 1], a[n + 2]);
        }
      }function e(a, b) {
        for (; a.length < l;) {
          a[0] = b[l - a.length];var c = a.slice(0, k);[].splice.apply(a, [0, 0].concat(c));p && (c = a.slice(a.length - k), [].splice.apply(a, [a.length, 0].concat(c)), n--);
        }a[0] = "M";
      }function f(a, b) {
        for (var c = (l - a.length) / k; c > 0 && c--;) {
          m = a.slice().splice(a.length / r - k, k * r), m[0] = b[l - k - c * k], j && (m[k - 6] = m[k - 2], m[k - 5] = m[k - 1]), [].splice.apply(a, [a.length / r, 0].concat(m)), p && c--;
        }
      }var b = b || "",
          g,
          h = a.startX,
          i = a.endX,
          j = b.indexOf("C") > -1,
          k = j ? 7 : 3,
          l,
          m,
          n,
          b = b.split(" "),
          c = c.slice(),
          p = a.isArea,
          r = p ? 2 : 1,
          s;j && (d(b), d(c));if (h && i) {
        for (n = 0; n < h.length; n++) {
          if (h[n] === i[0]) {
            g = n;break;
          } else if (h[0] === i[i.length - h.length + n]) {
            g = n;s = !0;break;
          }
        }g === void 0 && (b = []);
      }b.length && B.isNumber(g) && (l = c.length + g * r * k, s ? (e(b, c), f(c, b)) : (e(c, b), f(b, c)));return [b, c];
    } };var v = B.extend = function (a, b) {
    var c;a || (a = {});for (c in b) {
      a[c] = b[c];
    }return a;
  },
      ha = B.isObject = function (a, b) {
    return a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && (!b || !Ra(a));
  },
      z = B.isNumber = function (a) {
    return typeof a === "number" && !isNaN(a);
  },
      q = B.pick = function () {
    var a = arguments,
        b,
        c,
        d = a.length;for (b = 0; b < d; b++) {
      if (c = a[b], c !== x && c !== null) return c;
    }
  },
      S = B.wrap = function (a, b, c) {
    var d = a[b];a[b] = function () {
      var a = Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this, a);
    };
  };pa = function pa(a, b, c) {
    if (!t(b) || isNaN(b)) return Q.lang.invalidDate || "";var a = q(a, "%Y-%m-%d %H:%M:%S"),
        d = new ea(b - gb(b)),
        e,
        f = d[Fb](),
        g = d[Gb](),
        h = d[db](),
        i = d[jb](),
        j = d[kb](),
        k = Q.lang,
        l = k.weekdays,
        m = k.shortWeekdays,
        d = v({ a: m ? m[g] : l[g].substr(0, 3), A: l[g], d: Sa(h), e: Sa(h, 2, " "), w: g, b: k.shortMonths[i], B: k.months[i], m: Sa(i + 1), y: j.toString().substr(2, 2), Y: j, H: Sa(f), k: f, I: Sa(f % 12 || 12), l: f % 12 || 12, M: Sa(d[Eb]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: Sa(d.getSeconds()), L: Sa(A(b % 1E3), 3) }, B.dateFormats);for (e in d) {
      for (; a.indexOf("%" + e) !== -1;) {
        a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
      }
    }return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a;
  };N = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 };B.numberFormat = function (a, b, c, d) {
    var a = +a || 0,
        b = +b,
        e = Q.lang,
        f = (a.toString().split(".")[1] || "").length,
        g,
        h,
        i = Math.abs(a);b === -1 ? b = Math.min(f, 20) : z(b) || (b = 2);g = String(H(i.toFixed(b)));h = g.length > 3 ? g.length % 3 : 0;c = q(c, e.decimalPoint);d = q(d, e.thousandsSep);a = a < 0 ? "-" : "";a += h ? g.substr(0, h) + d : "";a += g.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d);b && (d = Math.abs(i - g + Math.pow(10, -Math.max(b, f) - 1)), a += c + d.toFixed(b).slice(2));return a;
  };Math.easeInOutSine = function (a) {
    return -0.5 * (Math.cos(Math.PI * a) - 1);
  };_ya2 = function ya(a, b) {
    var c;if (b === "width") return Math.min(a.offsetWidth, a.scrollWidth) - _ya2(a, "padding-left") - _ya2(a, "padding-right");else if (b === "height") return Math.min(a.offsetHeight, a.scrollHeight) - _ya2(a, "padding-top") - _ya2(a, "padding-bottom");return (c = M.getComputedStyle(a, void 0)) && H(c.getPropertyValue(b));
  };qa = function qa(a, b) {
    return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a);
  };Ha = function Ha(a, b) {
    return [].filter.call(a, b);
  };wa = function wa(a, b) {
    for (var c = [], d = 0, e = a.length; d < e; d++) {
      c[d] = b.call(a[d], a[d], d, a);
    }return c;
  };Mb = function Mb(a) {
    var b = C.documentElement,
        a = a.getBoundingClientRect();return { top: a.top + (M.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: a.left + (M.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) };
  };Qa = function Qa(a) {
    for (var b = Ua.length; b--;) {
      if (Ua[b].elem === a) Ua[b].stopped = !0;
    }
  };o = function o(a, b) {
    return Array.prototype.forEach.call(a, b);
  };G = function G(a, b, c) {
    function d(b) {
      b.target = b.srcElement || M;c.call(a, b);
    }var e = a.hcEvents = a.hcEvents || {};if (a.addEventListener) a.addEventListener(b, c, !1);else if (a.attachEvent) {
      if (!a.hcEventsIE) a.hcEventsIE = {};a.hcEventsIE[c.toString()] = d;a.attachEvent("on" + b, d);
    }e[b] || (e[b] = []);e[b].push(c);
  };U = function U(a, b, c) {
    function d(b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c));
    }function e() {
      var c, e, f;if (a.nodeName) for (f in b ? (c = {}, c[b] = !0) : c = g, c) {
        if (g[f]) for (e = g[f].length; e--;) {
          d(f, g[f][e]);
        }
      }
    }var f,
        g = a.hcEvents,
        h;if (g) b ? (f = g[b] || [], c ? (h = qa(c, f), h > -1 && (f.splice(h, 1), g[b] = f), d(b, c)) : (e(), g[b] = [])) : (e(), a.hcEvents = {});
  };K = function K(a, b, c, d) {
    var e;e = a.hcEvents;var f,
        g,
        c = c || {};if (C.createEvent && (a.dispatchEvent || a.fireEvent)) e = C.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, v(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e);else if (e) {
      e = e[b] || [];f = e.length;if (!c.preventDefault) c.preventDefault = function () {
        c.defaultPrevented = !0;
      };c.target = a;if (!c.type) c.type = b;for (b = 0; b < f; b++) {
        (g = e[b]) && g.call(a, c) === !1 && c.preventDefault();
      }
    }d && !c.defaultPrevented && d(c);
  };fb = function fb(a, b, c) {
    var d,
        e = "",
        f,
        g,
        h;ha(c) || (d = arguments, c = { duration: d[2], easing: d[3], complete: d[4] });if (!z(c.duration)) c.duration = 400;c.easing = typeof c.easing === "function" ? c.easing : Math[c.easing] || Math.easeInOutSine;c.curAnim = D(b);for (h in b) {
      g = new Ab(a, c, h), f = null, h === "d" ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(_ya2(a, h)) || 0, h !== "opacity" && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e);
    }
  };if (M.jQuery) M.jQuery.fn.highcharts = function () {
    var a = [].slice.call(arguments);if (this[0]) return a[0] ? (new B[Ea(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : ca[$(this[0], "data-highcharts-chart")];
  };C && !C.defaultView && (_ya2 = function _ya(a, b) {
    var c;c = { width: "clientWidth", height: "clientHeight" }[b];if (a.style[b]) return H(a.style[b]);b === "opacity" && (b = "filter");if (c) return a.style.zoom = 1, Math.max(a[c] - 2 * _ya2(a, "padding"), 0);c = a.currentStyle[b.replace(/\-(\w)/g, function (a, b) {
      return b.toUpperCase();
    })];b === "filter" && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) {
      return b / 100;
    }));return c === "" ? 1 : H(c);
  });Array.prototype.forEach || (o = function o(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      if (b.call(a[c], a[c], c, a) === !1) return c;
    }
  });Array.prototype.indexOf || (qa = function qa(a, b) {
    var c,
        d = 0;if (b) for (c = b.length; d < c; d++) {
      if (b[d] === a) return d;
    }return -1;
  });Array.prototype.filter || (Ha = function Ha(a, b) {
    for (var c = [], d = 0, e = a.length; d < e; d++) {
      b(a[d], d) && c.push(a[d]);
    }return c;
  });B.Fx = Ab;B.inArray = qa;B.each = o;B.grep = Ha;B.offset = Mb;B.map = wa;B.addEvent = G;B.removeEvent = U;B.fireEvent = K;B.animate = fb;B.animObject = ib;B.stop = Qa;Q = { colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), decimalPoint: ".", numericSymbols: "k,M,G,T,P,E".split(","),
      resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: { useUTC: !0, canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com/stock/4.2.6/gfx/vml-radial-gradient.png" }, chart: { borderColor: "#4572A7", borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }, width: null,
      height: null }, title: { text: "Chart title", align: "center", margin: 15, style: { color: "#333333", fontSize: "18px" }, widthAdjust: -44 }, subtitle: { text: "", align: "center", style: { color: "#555555" }, widthAdjust: -44 }, plotOptions: { line: { allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2, marker: { lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: { hover: { enabled: !0, lineWidthPlus: 1, radiusPlus: 2 }, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { align: "center",
          formatter: function formatter() {
            return this.y === null ? "" : B.numberFormat(this.y, -1);
          }, style: { color: "contrast", fontSize: "11px", fontWeight: "bold", textShadow: "0 0 6px contrast, 0 0 3px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3 } }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: { enabled: !0, align: "center", layout: "horizontal",
      labelFormatter: function labelFormatter() {
        return this.name;
      }, borderColor: "#909090", borderRadius: 0, navigation: { activeColor: "#274b6d", inactiveColor: "#CCC" }, shadow: !1, itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold" }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute",
        backgroundColor: "white", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: ma, backgroundColor: "rgba(249, 249, 249, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
      shadow: !0, snap: lb ? 25 : 10, style: { color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", pointerEvents: "none", whiteSpace: "nowrap" } }, credits: { enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#909090", fontSize: "9px" } } };var X = Q.plotOptions,
      ga = X.line;Qb();xa.prototype = { parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function parse(a) {
        return [H(a[1]), H(a[2]), H(a[3]), parseFloat(a[4], 10)];
      } }, { regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function parse(a) {
        return [H(a[1], 16), H(a[2], 16), H(a[3], 16), 1];
      } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function parse(a) {
        return [H(a[1]), H(a[2]), H(a[3]), 1];
      } }], init: function init(a) {
      var b, c, d, e;if ((this.input = a) && a.stops) this.stops = wa(a.stops, function (a) {
        return new xa(a[1]);
      });else for (d = this.parsers.length; d-- && !c;) {
        e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
      }this.rgba = c || [];
    }, get: function get(a) {
      var b = this.input,
          c = this.rgba,
          d;this.stops ? (d = D(b), d.stops = [].concat(d.stops), o(this.stops, function (b, c) {
        d.stops[c] = [d.stops[c][0], b.get(a)];
      })) : d = c && z(c[0]) ? a === "rgb" || !a && c[3] === 1 ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : a === "a" ? c[3] : "rgba(" + c.join(",") + ")" : b;return d;
    }, brighten: function brighten(a) {
      var b,
          c = this.rgba;if (this.stops) o(this.stops, function (b) {
        b.brighten(a);
      });else if (z(a) && a !== 0) for (b = 0; b < 3; b++) {
        c[b] += H(a * 255), c[b] < 0 && (c[b] = 0), c[b] > 255 && (c[b] = 255);
      }return this;
    }, setOpacity: function setOpacity(a) {
      this.rgba[3] = a;return this;
    } };ba.prototype = { opacity: 1, textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","), init: function init(a, b) {
      this.element = b === "span" ? ia(b) : C.createElementNS(Ta, b);this.renderer = a;
    }, animate: function animate(a, b, c) {
      b = q(b, this.renderer.globalAnimation, !0);Qa(this);if (b) {
        if (c) b.complete = c;fb(this, a, b);
      } else this.attr(a, null, c);return this;
    }, colorGradient: function colorGradient(a, b, c) {
      var d = this.renderer,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          r = [],
          s;a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");if (f) {
        g = a[f];i = d.gradients;k = a.stops;n = c.radialReference;Ra(g) && (a[f] = g = { x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse" });f === "radialGradient" && n && !t(g.gradientUnits) && (h = g, g = D(g, d.getRadialAttr(n, h), { gradientUnits: "userSpaceOnUse" }));for (p in g) {
          p !== "id" && r.push(p, g[p]);
        }for (p in k) {
          r.push(k[p]);
        }r = r.join(",");i[r] ? n = i[r].attr("id") : (g.id = n = "highcharts-" + Lb++, i[r] = j = d.createElement(f).attr(g).add(d.defs), j.radAttr = h, j.stops = [], o(k, function (a) {
          a[1].indexOf("rgba") === 0 ? (e = xa(a[1]), l = e.get("rgb"), m = e.get("a")) : (l = a[1], m = 1);a = d.createElement("stop").attr({ offset: a[0], "stop-color": l, "stop-opacity": m }).add(j);j.stops.push(a);
        }));s = "url(" + d.url + "#" + n + ")";c.setAttribute(b, s);c.gradient = r;a.toString = function () {
          return s;
        };
      }
    }, applyTextShadow: function applyTextShadow(a) {
      var b = this.element,
          c,
          d = a.indexOf("contrast") !== -1,
          e = {},
          f = this.renderer.forExport,
          g = f || b.style.textShadow !== x && !La;if (d) e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
      if (vb || f) e.textRendering = "geometricPrecision";g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function (a) {
        var d = b.firstChild,
            e,
            f,
            a = a.split(" ");e = a[a.length - 1];(f = a[a.length - 2]) && o(c, function (a, c) {
          var g;c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));g = a.cloneNode(1);$(g, { "class": "highcharts-text-shadow", fill: e, stroke: e, "stroke-opacity": 1 / y(H(f), 3), "stroke-width": f, "stroke-linejoin": "round" });b.insertBefore(g, d);
        });
      }));
    }, attr: function attr(a, b, c) {
      var d,
          e = this.element,
          f,
          g = this,
          h;typeof a === "string" && b !== x && (d = a, a = {}, a[d] = b);if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);else {
        for (d in a) {
          b = a[d];h = !1;this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);if (this.rotation && (d === "x" || d === "y")) this.doTransform = !0;h || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h));
        }if (this.doTransform) this.updateTransform(), this.doTransform = !1;
      }c && c();return g;
    }, updateShadows: function updateShadows(a, b, c) {
      for (var d = this.shadows, e = d.length; e--;) {
        c.call(d[e], a === "height" ? Math.max(b - (d[e].cutHeight || 0), 0) : a === "d" ? this.d : b, a, d[e]);
      }
    }, addClass: function addClass(a) {
      var b = this.element,
          c = $(b, "class") || "";c.indexOf(a) === -1 && $(b, "class", c + " " + a);return this;
    }, symbolAttr: function symbolAttr(a) {
      var b = this;
      o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
        b[c] = q(a[c], b[c]);
      });b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) });
    }, clip: function clip(a) {
      return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
    }, crisp: function crisp(a) {
      var b,
          c = {},
          d,
          e = this.strokeWidth || 0;d = A(e) % 2 / 2;a.x = Y(a.x || this.x || 0) + d;a.y = Y(a.y || this.y || 0) + d;a.width = Y((a.width || this.width || 0) - 2 * d);a.height = Y((a.height || this.height || 0) - 2 * d);a.strokeWidth = e;for (b in a) {
        this[b] !== a[b] && (this[b] = c[b] = a[b]);
      }return c;
    }, css: function css(a) {
      var b = this.styles,
          c = {},
          d = this.element,
          e,
          f,
          g = "";e = !b;if (a && a.color) a.fill = a.color;if (b) for (f in a) {
        a[f] !== b[f] && (c[f] = a[f], e = !0);
      }if (e) {
        e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && H(a.width) || this.textWidth;b && (a = v(b, c));this.styles = a;e && (ua || !ma && this.renderer.forExport) && delete a.width;if (La && !ma) O(this.element, a);else {
          b = function b(a, _b) {
            return "-" + _b.toLowerCase();
          };for (f in a) {
            g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
          }$(d, "style", g);
        }e && this.added && this.renderer.buildText(this);
      }return this;
    }, on: function on(a, b) {
      var c = this,
          d = c.element;$a && a === "click" ? (d.ontouchstart = function (a) {
        c.touchEventFired = ea.now();a.preventDefault();b.call(d, a);
      }, d.onclick = function (a) {
        (Pa.indexOf("Android") === -1 || ea.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a);
      }) : d["on" + a] = b;return this;
    }, setRadialReference: function setRadialReference(a) {
      var b = this.renderer.gradients[this.element.gradient];this.element.radialReference = a;b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));return this;
    },
    translate: function translate(a, b) {
      return this.attr({ translateX: a, translateY: b });
    }, invert: function invert() {
      this.inverted = !0;this.updateTransform();return this;
    }, updateTransform: function updateTransform() {
      var a = this.translateX || 0,
          b = this.translateY || 0,
          c = this.scaleX,
          d = this.scaleY,
          e = this.inverted,
          f = this.rotation,
          g = this.element;e && (a += this.attr("width"), b += this.attr("height"));a = ["translate(" + a + "," + b + ")"];e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");(t(c) || t(d)) && a.push("scale(" + q(c, 1) + " " + q(d, 1) + ")");a.length && g.setAttribute("transform", a.join(" "));
    }, toFront: function toFront() {
      var a = this.element;a.parentNode.appendChild(a);return this;
    }, align: function align(a, b, c) {
      var d,
          e,
          f,
          g,
          h = {};e = this.renderer;f = e.alignedObjects;if (a) {
        if (this.alignOptions = a, this.alignByTranslate = b, !c || Ea(c)) this.alignTo = d = c || "renderer", Ba(f, this), f.push(this), c = null;
      } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;c = q(c, e[d], e);d = a.align;e = a.verticalAlign;f = (c.x || 0) + (a.x || 0);g = (c.y || 0) + (a.y || 0);if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d];h[b ? "translateX" : "x"] = A(f);if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1);h[b ? "translateY" : "y"] = A(g);this[this.placed ? "animate" : "attr"](h);this.placed = !0;this.alignAttr = h;return this;
    }, getBBox: function getBBox(a, b) {
      var c,
          d = this.renderer,
          e,
          f,
          g,
          h = this.element,
          i = this.styles;e = this.textStr;var j,
          k = h.style,
          l,
          m = d.cache,
          n = d.cacheKeys,
          p;f = q(b, this.rotation);g = f * ta;e !== x && (p = ["", f || 0, i && i.fontSize, h.style.width].join(","), p = e === "" || cc.test(e) ? "num:" + e.toString().length + p : e + p);p && !a && (c = m[p]);if (!c) {
        if (h.namespaceURI === Ta || d.forExport) {
          try {
            l = this.fakeTS && function (a) {
              o(h.querySelectorAll(".highcharts-text-shadow"), function (b) {
                b.style.display = a;
              });
            }, Ya && k.textShadow ? (j = k.textShadow, k.textShadow = "") : l && l("none"), c = h.getBBox ? v({}, h.getBBox()) : { width: h.offsetWidth, height: h.offsetHeight }, j ? k.textShadow = j : l && l("");
          } catch (r) {}if (!c || c.width < 0) c = { width: 0, height: 0 };
        } else c = this.htmlGetBBox();if (d.isSVG) {
          d = c.width;e = c.height;if (La && i && i.fontSize === "11px" && e.toPrecision(3) === "16.9") c.height = e = 14;if (f) c.width = T(e * na(g)) + T(d * fa(g)), c.height = T(e * fa(g)) + T(d * na(g));
        }if (p) {
          for (; n.length > 250;) {
            delete m[n.shift()];
          }m[p] || n.push(p);m[p] = c;
        }
      }return c;
    }, show: function show(a) {
      return this.attr({ visibility: a ? "inherit" : "visible" });
    }, hide: function hide() {
      return this.attr({ visibility: "hidden" });
    }, fadeOut: function fadeOut(a) {
      var b = this;b.animate({ opacity: 0 }, { duration: a || 150, complete: function complete() {
          b.attr({ y: -9999 });
        } });
    }, add: function add(a) {
      var b = this.renderer,
          c = this.element,
          d;if (a) this.parentGroup = a;this.parentInverted = a && a.inverted;this.textStr !== void 0 && b.buildText(this);this.added = !0;if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();d || (a ? a.element : b.box).appendChild(c);if (this.onAdd) this.onAdd();return this;
    }, safeRemoveChild: function safeRemoveChild(a) {
      var b = a.parentNode;b && b.removeChild(a);
    }, destroy: function destroy() {
      var a = this,
          b = a.element || {},
          c = a.shadows,
          d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
          e,
          f;b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;Qa(a);if (a.clipPath) a.clipPath = a.clipPath.destroy();if (a.stops) {
        for (f = 0; f < a.stops.length; f++) {
          a.stops[f] = a.stops[f].destroy();
        }a.stops = null;
      }a.safeRemoveChild(b);for (c && o(c, function (b) {
        a.safeRemoveChild(b);
      }); d && d.div && d.div.childNodes.length === 0;) {
        b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
      }a.alignTo && Ba(a.renderer.alignedObjects, a);for (e in a) {
        delete a[e];
      }return null;
    }, shadow: function shadow(a, b, c) {
      var d = [],
          e,
          f,
          g = this.element,
          h,
          i,
          j,
          k;if (a) {
        i = q(a.width, 3);j = (a.opacity || 0.15) / i;k = this.parentInverted ? "(-1,-1)" : "(" + q(a.offsetX, 1) + ", " + q(a.offsetY, 1) + ")";for (e = 1; e <= i; e++) {
          f = g.cloneNode(0);h = i * 2 + 1 - 2 * e;$(f, { isShadow: "true", stroke: a.color || "black", "stroke-opacity": j * e, "stroke-width": h, transform: "translate" + k, fill: "none" });if (c) $(f, "height", y($(f, "height") - h, 0)), f.cutHeight = h;b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);d.push(f);
        }this.shadows = d;
      }return this;
    }, xGetter: function xGetter(a) {
      this.element.nodeName === "circle" && (a = { x: "cx", y: "cy" }[a] || a);return this._defaultGetter(a);
    }, _defaultGetter: function _defaultGetter(a) {
      a = q(this[a], this.element ? this.element.getAttribute(a) : null, 0);/^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));return a;
    }, dSetter: function dSetter(a, b, c) {
      a && a.join && (a = a.join(" "));/(NaN| {2}|^$)/.test(a) && (a = "M 0 0");c.setAttribute(b, a);this[b] = a;
    }, dashstyleSetter: function dashstyleSetter(a) {
      var b,
          c = this["stroke-width"];c === "inherit" && (c = 1);if (a = a && a.toLowerCase()) {
        a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");for (b = a.length; b--;) {
          a[b] = H(a[b]) * c;
        }a = a.join(",").replace(/NaN/g, "none");this.element.setAttribute("stroke-dasharray", a);
      }
    }, alignSetter: function alignSetter(a) {
      this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]);
    }, opacitySetter: function opacitySetter(a, b, c) {
      this[b] = a;c.setAttribute(b, a);
    }, titleSetter: function titleSetter(a) {
      var b = this.element.getElementsByTagName("title")[0];b || (b = C.createElementNS(Ta, "title"), this.element.appendChild(b));b.firstChild && b.removeChild(b.firstChild);b.appendChild(C.createTextNode(String(q(a), "").replace(/<[^>]*>/g, "")));
    }, textSetter: function textSetter(a) {
      if (a !== this.textStr) delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this);
    }, fillSetter: function fillSetter(a, b, c) {
      typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c);
    }, visibilitySetter: function visibilitySetter(a, b, c) {
      a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a);
    }, zIndexSetter: function zIndexSetter(a, b) {
      var c = this.renderer,
          d = this.parentGroup,
          c = (d || c).element || c.box,
          e,
          f,
          g = this.element,
          h;e = this.added;var i;if (t(a)) g.zIndex = a, a = +a, this[b] === a && (e = !1), this[b] = a;if (e) {
        if ((a = this.zIndex) && d) d.handleZ = !0;d = c.childNodes;for (i = 0; i < d.length && !h; i++) {
          if (e = d[i], f = e.zIndex, e !== g && (H(f) > a || !t(a) && t(f))) c.insertBefore(g, e), h = !0;
        }h || c.appendChild(g);
      }return h;
    }, _defaultSetter: function _defaultSetter(a, b, c) {
      c.setAttribute(b, a);
    } };ba.prototype.yGetter = ba.prototype.xGetter;ba.prototype.translateXSetter = ba.prototype.translateYSetter = ba.prototype.rotationSetter = ba.prototype.verticalAlignSetter = ba.prototype.scaleXSetter = ba.prototype.scaleYSetter = function (a, b) {
    this[b] = a;this.doTransform = !0;
  };ba.prototype["stroke-widthSetter"] = ba.prototype.strokeSetter = function (a, b, c) {
    this[b] = a;if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], ba.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1;
  };var za = function za() {
    this.init.apply(this, arguments);
  };
  za.prototype = { Element: ba, init: function init(a, b, c, d, e, f) {
      var g,
          d = this.createElement("svg").attr({ version: "1.1" }).css(this.getStyle(d));g = d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns") === -1 && $(g, "xmlns", Ta);this.isSVG = !0;this.box = g;this.boxWrapper = d;this.alignedObjects = [];this.url = (Ya || vb) && C.getElementsByTagName("base").length ? M.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highstock 4.2.6"));
      this.defs = this.createElement("defs").add();this.allowHTML = f;this.forExport = e;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(b, c, !1);var h;if (Ya && a.getBoundingClientRect) this.subPixelFix = b = function b() {
        O(a, { left: 0, top: 0 });h = a.getBoundingClientRect();O(a, { left: Ga(h.left) - h.left + "px", top: Ga(h.top) - h.top + "px" });
      }, b(), G(M, "resize", b);
    }, getStyle: function getStyle(a) {
      return this.style = v({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a);
    }, isHidden: function isHidden() {
      return !this.boxWrapper.getBBox().width;
    }, destroy: function destroy() {
      var a = this.defs;this.box = null;this.boxWrapper = this.boxWrapper.destroy();Oa(this.gradients || {});this.gradients = null;if (a) this.defs = a.destroy();this.subPixelFix && U(M, "resize", this.subPixelFix);return this.alignedObjects = null;
    }, createElement: function createElement(a) {
      var b = new this.Element();b.init(this, a);return b;
    }, draw: function draw() {}, getRadialAttr: function getRadialAttr(a, b) {
      return { cx: a[0] - a[2] / 2 + b.cx * a[2], cy: a[1] - a[2] / 2 + b.cy * a[2], r: b.r * a[2] };
    }, buildText: function buildText(a) {
      for (var b = a.element, c = this, d = c.forExport, e = q(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j, k = $(b, "x"), l = a.styles, m = a.textWidth, n = l && l.lineHeight, p = l && l.textShadow, r = l && l.textOverflow === "ellipsis", s = g.length, Z = m && !a.added && this.box, u = function u(a) {
        return n ? H(n) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : l && l.fontSize || c.style.fontSize || 12, a).h;
      }, w = function w(a) {
        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }; s--;) {
        b.removeChild(g[s]);
      }!f && !p && !r && !m && e.indexOf(" ") === -1 ? b.appendChild(C.createTextNode(w(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, Z && Z.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e = Ha(e, function (a) {
        return a !== "";
      }), o(e, function (e, f) {
        var g,
            n = 0,
            e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");g = e.split("|||");o(g, function (e) {
          if (e !== "" || g.length === 1) {
            var p = {},
                s = C.createElementNS(Ta, "tspan"),
                q;h.test(e) && (q = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), $(s, "style", q));i.test(e) && !d && ($(s, "onclick", 'location.href="' + e.match(i)[1] + '"'), O(s, { cursor: "pointer" }));e = w(e.replace(/<(.|\n)*?>/g, "") || " ");if (e !== " ") {
              s.appendChild(C.createTextNode(e));if (n) p.dx = 0;else if (f && k !== null) p.x = k;$(s, p);b.appendChild(s);!n && f && (!ma && d && O(s, { display: "block" }), $(s, "dy", u(s)));if (m) {
                for (var p = e.replace(/([^\^])-/g, "$1- ").split(" "), Z = g.length > 1 || f || p.length > 1 && l.whiteSpace !== "nowrap", o, F, t = [], y = u(s), x = 1, A = a.rotation, v = e, B = v.length; (Z || r) && (p.length || t.length);) {
                  a.rotation = 0, o = a.getBBox(!0), F = o.width, !ma && c.forExport && (F = c.measureSpanWidth(s.firstChild.data, a.styles)), o = F > m, j === void 0 && (j = o), r && j ? (B /= 2, v === "" || !o && B < 0.5 ? p = [] : (v = e.substring(0, v.length + (o ? -1 : 1) * Ga(B)), p = [v + (m > 3 ? "\u2026" : "")], s.removeChild(s.firstChild))) : !o || p.length === 1 ? (p = t, t = [], p.length && (x++, s = C.createElementNS(Ta, "tspan"), $(s, { dy: y, x: k }), q && $(s, "style", q), b.appendChild(s)), F > m && (m = F)) : (s.removeChild(s.firstChild), t.unshift(p.pop())), p.length && s.appendChild(C.createTextNode(p.join(" ").replace(/- /g, "-")));
                }a.rotation = A;
              }n++;
            }
          }
        });
      }), j && a.attr("title", a.textStr), Z && Z.removeChild(b), p && a.applyTextShadow && a.applyTextShadow(p));
    }, getContrast: function getContrast(a) {
      a = xa(a).rgba;return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF";
    }, button: function button(a, b, c, d, e, f, g, h, i) {
      var j = this.label(a, b, c, i, null, null, null, null, "button"),
          k = 0,
          l,
          m,
          n,
          p,
          r,
          s,
          a = { x1: 0, y1: 0, x2: 0, y2: 1 },
          e = D({ "stroke-width": 1,
        stroke: "#CCCCCC", fill: { linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]] }, r: 2, padding: 5, style: { color: "black" } }, e);n = e.style;delete e.style;f = D(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]] } }, f);p = f.style;delete f.style;g = D(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]] } }, g);r = g.style;delete g.style;h = D(e, { style: { color: "#CCC" } }, h);s = h.style;delete h.style;G(j.element, La ? "mouseover" : "mouseenter", function () {
        k !== 3 && j.attr(f).css(p);
      });G(j.element, La ? "mouseout" : "mouseleave", function () {
        k !== 3 && (l = [e, f, g][k], m = [n, p, r][k], j.attr(l).css(m));
      });j.setState = function (a) {
        (j.state = k = a) ? a === 2 ? j.attr(g).css(r) : a === 3 && j.attr(h).css(s) : j.attr(e).css(n);
      };return j.on("click", function (a) {
        k !== 3 && d.call(j, a);
      }).attr(e).css(v({ cursor: "default" }, n));
    }, crispLine: function crispLine(a, b) {
      a[1] === a[4] && (a[1] = a[4] = A(a[1]) - b % 2 / 2);a[2] === a[5] && (a[2] = a[5] = A(a[2]) + b % 2 / 2);return a;
    }, path: function path(a) {
      var b = { fill: "none" };Ra(a) ? b.d = a : ha(a) && v(b, a);return this.createElement("path").attr(b);
    }, circle: function circle(a, b, c) {
      a = ha(a) ? a : { x: a, y: b, r: c };b = this.createElement("circle");b.xSetter = b.ySetter = function (a, b, c) {
        c.setAttribute("c" + b, a);
      };return b.attr(a);
    }, arc: function arc(a, b, c, d, e, f) {
      if (ha(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 });a.r = c;return a;
    }, rect: function rect(a, b, c, d, e, f) {
      var e = ha(a) ? a.r : e,
          g = this.createElement("rect"),
          a = ha(a) ? a : a === x ? {} : { x: a, y: b, width: y(c, 0), height: y(d, 0) };if (f !== x) g.strokeWidth = f, a = g.crisp(a);if (e) a.r = e;g.rSetter = function (a, b, c) {
        $(c, { rx: a, ry: a });
      };return g.attr(a);
    }, setSize: function setSize(a, b, c) {
      var d = this.alignedObjects,
          e = d.length;this.width = a;this.height = b;for (this.boxWrapper[q(c, !0) ? "animate" : "attr"]({ width: a, height: b }); e--;) {
        d[e].align();
      }
    }, g: function g(a) {
      var b = this.createElement("g");return t(a) ? b.attr({ "class": "highcharts-" + a }) : b;
    }, image: function image(a, b, c, d, e) {
      var f = { preserveAspectRatio: "none" };arguments.length > 1 && v(f, { x: b, y: c, width: d, height: e });f = this.createElement("image").attr(f);f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);return f;
    }, symbol: function symbol(a, b, c, d, e, f) {
      var g = this,
          h,
          i = this.symbols[a],
          i = i && i(A(b), A(c), d, e, f),
          j = /^url\((.*?)\)$/,
          k,
          l;if (i) h = this.path(i), v(h, { symbolName: a, x: b, y: c, width: d, height: e }), f && v(h, f);else if (j.test(a)) l = function l(a, b) {
        a.element && (a.attr({ width: b[0], height: b[1] }), a.alignByTranslate || a.translate(A((d - b[0]) / 2), A((e - b[1]) / 2)));
      }, k = a.match(j)[1], a = Yb[k] || f && f.width && f.height && [f.width, f.height], h = this.image(k).attr({ x: b, y: c }), h.isImg = !0, a ? l(h, a) : (h.attr({ width: 0, height: 0 }), ia("img", { onload: function onload() {
          this.width === 0 && (O(this, { position: "absolute", top: "-999em" }), C.body.appendChild(this));l(h, Yb[k] = [this.width, this.height]);this.parentNode && this.parentNode.removeChild(this);g.imgCount--;if (!g.imgCount && ca[g.chartIndex].onload) ca[g.chartIndex].onload();
        }, src: k }), this.imgCount++);return h;
    }, symbols: { circle: function circle(a, b, c, d) {
        var e = 0.166 * c;return [W, a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"];
      }, square: function square(a, b, c, d) {
        return [W, a, b, R, a + c, b, a + c, b + d, a, b + d, "Z"];
      }, triangle: function triangle(a, b, c, d) {
        return [W, a + c / 2, b, R, a + c, b + d, a, b + d, "Z"];
      }, "triangle-down": function triangleDown(a, b, c, d) {
        return [W, a, b, R, a + c, b, a + c / 2, b + d, "Z"];
      }, diamond: function diamond(a, b, c, d) {
        return [W, a + c / 2, b, R, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"];
      }, arc: function arc(a, b, c, d, e) {
        var f = e.start,
            c = e.r || c || d,
            g = e.end - 0.001,
            d = e.innerR,
            h = e.open,
            i = fa(f),
            j = na(f),
            k = fa(g),
            g = na(g),
            e = e.end - f < Ca ? 0 : 1;return [W, a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? W : R, a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"];
      }, callout: function callout(a, b, c, d, e) {
        var f = E(e && e.r || 0, c, d),
            g = f + 6,
            h = e && e.anchorX,
            e = e && e.anchorY,
            i;i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);return i;
      } }, clipRect: function clipRect(a, b, c, d) {
      var e = "highcharts-" + Lb++,
          f = this.createElement("clipPath").attr({ id: e }).add(this.defs),
          a = this.rect(a, b, c, d, 0).add(f);a.id = e;a.clipPath = f;a.count = 0;return a;
    }, text: function text(a, b, c, d) {
      var e = ua || !ma && this.forExport,
          f = {};if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);f.x = Math.round(b || 0);if (c) f.y = Math.round(c);if (a || a === 0) f.text = a;a = this.createElement("text").attr(f);e && a.css({ position: "absolute" });if (!d) a.xSetter = function (a, b, c) {
        var d = c.getElementsByTagName("tspan"),
            e,
            f = c.getAttribute(b),
            m;for (m = 0; m < d.length; m++) {
          e = d[m], e.getAttribute(b) === f && e.setAttribute(b, a);
        }c.setAttribute(b, a);
      };return a;
    }, fontMetrics: function fontMetrics(a, b) {
      var c,
          d,
          a = a || this.style.fontSize;!a && b && M.getComputedStyle && (b = b.element || b, a = (c = M.getComputedStyle(b, "")) && c.fontSize);a = /px/.test(a) ? H(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;c = a < 24 ? a + 3 : A(a * 1.2);d = A(c * 0.8);return { h: c, b: d, f: a };
    }, rotCorr: function rotCorr(a, b, c) {
      var d = a;b && c && (d = y(d * fa(b * ta), 4));return { x: -a / 3 * na(b * ta), y: d };
    }, label: function label(a, b, c, d, e, f, g, h, i) {
      var j = this,
          k = j.g(i),
          l = j.text("", 0, 0, g).attr({ zIndex: 1 }),
          m,
          n,
          p = 0,
          r = 3,
          s = 0,
          q,
          u,
          w,
          F,
          L = 0,
          ka = {},
          y,
          B,
          C,
          E,
          z;C = function C() {
        var a, b;a = l.element.style;n = (q === void 0 || u === void 0 || k.styles.textAlign) && t(l.textStr) && l.getBBox();k.width = (q || n.width || 0) + 2 * r + s;k.height = (u || n.height || 0) + 2 * r;y = r + j.fontMetrics(a && a.fontSize, l).b;if (B) {
          if (!m) a = L, b = (h ? -y : 0) + L, k.box = m = j.symbols[d] ? j.symbol(d, a, b, k.width, k.height, ka) : j.rect(a, b, k.width, k.height, 0, ka["stroke-width"]), m.isImg || m.attr("fill", "none"), m.add(k);m.isImg || m.attr(v({ width: A(k.width),
            height: A(k.height) }, ka));ka = null;
        }
      };E = function E() {
        var a = k.styles,
            a = a && a.textAlign,
            b = s + r,
            c;c = h ? 0 : y;if (t(q) && n && (a === "center" || a === "right")) b += { center: 0.5, right: 1 }[a] * (q - n.width);if (b !== l.x || c !== l.y) l.attr("x", b), c !== x && l.attr("y", c);l.x = b;l.y = c;
      };z = function z(a, b) {
        m ? m.attr(a, b) : ka[a] = b;
      };k.onAdd = function () {
        l.add(k);k.attr({ text: a || a === 0 ? a : "", x: b, y: c });m && t(e) && k.attr({ anchorX: e, anchorY: f });
      };k.widthSetter = function (a) {
        q = a;
      };k.heightSetter = function (a) {
        u = a;
      };k.paddingSetter = function (a) {
        if (t(a) && a !== r) r = k.padding = a, E();
      };k.paddingLeftSetter = function (a) {
        t(a) && a !== s && (s = a, E());
      };k.alignSetter = function (a) {
        a = { left: 0, center: 0.5, right: 1 }[a];a !== p && (p = a, n && k.attr({ x: w }));
      };k.textSetter = function (a) {
        a !== x && l.textSetter(a);C();E();
      };k["stroke-widthSetter"] = function (a, b) {
        a && (B = !0);L = a % 2 / 2;z(b, a);
      };k.strokeSetter = k.fillSetter = k.rSetter = function (a, b) {
        b === "fill" && a && (B = !0);z(b, a);
      };k.anchorXSetter = function (a, b) {
        e = a;z(b, A(a) - L - w);
      };k.anchorYSetter = function (a, b) {
        f = a;z(b, a - F);
      };k.xSetter = function (a) {
        k.x = a;p && (a -= p * ((q || n.width) + 2 * r));w = A(a);k.attr("translateX", w);
      };k.ySetter = function (a) {
        F = k.y = A(a);k.attr("translateY", F);
      };var G = k.css;return v(k, { css: function css(a) {
          if (a) {
            var b = {},
                a = D(a);o(k.textProps, function (c) {
              a[c] !== x && (b[c] = a[c], delete a[c]);
            });l.css(b);
          }return G.call(k, a);
        }, getBBox: function getBBox() {
          return { width: n.width + 2 * r, height: n.height + 2 * r, x: n.x - r, y: n.y - r };
        }, shadow: function shadow(a) {
          m && m.shadow(a);return k;
        }, destroy: function destroy() {
          U(k.element, "mouseenter");U(k.element, "mouseleave");l && (l = l.destroy());m && (m = m.destroy());ba.prototype.destroy.call(k);
          k = j = C = E = z = null;
        } });
    } };Za = za;v(ba.prototype, { htmlCss: function htmlCss(a) {
      var b = this.element;if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();if (a && a.textOverflow === "ellipsis") a.whiteSpace = "nowrap", a.overflow = "hidden";this.styles = v(this.styles, a);O(this.element, a);return this;
    }, htmlGetBBox: function htmlGetBBox() {
      var a = this.element;if (a.nodeName === "text") a.style.position = "absolute";return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight };
    }, htmlUpdateTransform: function htmlUpdateTransform() {
      if (this.added) {
        var a = this.renderer,
            b = this.element,
            c = this.translateX || 0,
            d = this.translateY || 0,
            e = this.x || 0,
            f = this.y || 0,
            g = this.textAlign || "left",
            h = { left: 0, center: 0.5, right: 1 }[g],
            i = this.shadows,
            j = this.styles;O(b, { marginLeft: c, marginTop: d });i && o(i, function (a) {
          O(a, { marginLeft: c + 1, marginTop: d + 1 });
        });this.inverted && o(b.childNodes, function (c) {
          a.invertChild(c, b);
        });if (b.tagName === "SPAN") {
          var i = this.rotation,
              k = H(this.textWidth),
              l = j && j.whiteSpace,
              m = [i, g, b.innerHTML, this.textWidth, this.textAlign].join(",");if (m !== this.cTT) {
            j = a.fontMetrics(b.style.fontSize).b;
            t(i) && this.setSpanRotation(i, h, j);O(b, { width: "", whiteSpace: l || "nowrap" });if (b.offsetWidth > k && /[ \-]/.test(b.textContent || b.innerText)) O(b, { width: k + "px", display: "block", whiteSpace: l || "normal" });this.getSpanCorrection(b.offsetWidth, j, h, i, g);
          }O(b, { left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" });if (vb) j = b.offsetHeight;this.cTT = m;
        }
      } else this.alignOnAdd = !0;
    }, setSpanRotation: function setSpanRotation(a, b, c) {
      var d = {},
          e = La ? "-ms-transform" : vb ? "-webkit-transform" : Ya ? "MozTransform" : Xb ? "-o-transform" : "";d[e] = d.transform = "rotate(" + a + "deg)";d[e + (Ya ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";O(this.element, d);
    }, getSpanCorrection: function getSpanCorrection(a, b, c) {
      this.xCorr = -a * c;this.yCorr = -b;
    } });v(za.prototype, { html: function html(a, b, c) {
      var d = this.createElement("span"),
          e = d.element,
          f = d.renderer,
          g = f.isSVG,
          h = function h(a, b) {
        o(["opacity", "visibility"], function (c) {
          S(a, c + "Setter", function (a, c, d, e) {
            a.call(this, c, d, e);b[d] = c;
          });
        });
      };d.textSetter = function (a) {
        a !== e.innerHTML && delete this.bBox;e.innerHTML = this.textStr = a;d.htmlUpdateTransform();
      };
      g && h(d, d.element.style);d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) {
        b === "align" && (b = "textAlign");d[b] = a;d.htmlUpdateTransform();
      };d.attr({ text: a, x: A(b), y: A(c) }).css({ position: "absolute", fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });e.style.whiteSpace = "nowrap";d.css = d.htmlCss;if (g) d.add = function (a) {
        var b,
            c = f.box.parentNode,
            g = [];if (this.parentGroup = a) {
          if (b = a.div, !b) {
            for (; a;) {
              g.push(a), a = a.parentGroup;
            }o(g.reverse(), function (a) {
              var d,
                  e = $(a.element, "class");e && (e = { className: e });
              b = a.div = a.div || ia(Xa, e, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", opacity: a.opacity }, b || c);d = b.style;v(a, { translateXSetter: function translateXSetter(b, c) {
                  d.left = b + "px";a[c] = b;a.doTransform = !0;
                }, translateYSetter: function translateYSetter(b, c) {
                  d.top = b + "px";a[c] = b;a.doTransform = !0;
                } });h(a, d);
            });
          }
        } else b = c;b.appendChild(e);d.added = !0;d.alignOnAdd && d.htmlUpdateTransform();return d;
      };return d;
    } });var nb, da;if (!ma && !ua) da = { init: function init(a, b) {
      var c = ["<", b, ' filled="f" stroked="f"'],
          d = ["position: ", "absolute", ";"],
          e = b === Xa;(b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ", e ? "hidden" : "visible");c.push(' style="', d.join(""), '"/>');if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = ia(c);this.renderer = a;
    }, add: function add(a) {
      var b = this.renderer,
          c = this.element,
          d = b.box,
          e = a && a.inverted,
          d = a ? a.element || a : d;if (a) this.parentGroup = a;e && b.invertChild(c, d);d.appendChild(c);this.added = !0;this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();if (this.onAdd) this.onAdd();
      return this;
    }, updateTransform: ba.prototype.htmlUpdateTransform, setSpanRotation: function setSpanRotation() {
      var a = this.rotation,
          b = fa(a * ta),
          c = na(a * ta);O(this.element, { filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none" });
    }, getSpanCorrection: function getSpanCorrection(a, b, c, d, e) {
      var f = d ? fa(d * ta) : 1,
          g = d ? na(d * ta) : 0,
          h = q(this.elemHeight, this.element.offsetHeight),
          i;this.xCorr = f < 0 && -a;this.yCorr = g < 0 && -h;i = f * g < 0;this.xCorr += g * b * (i ? 1 - c : c);this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), O(this.element, { textAlign: e }));
    }, pathToVML: function pathToVML(a) {
      for (var b = a.length, c = []; b--;) {
        if (z(a[b])) c[b] = A(a[b] * 10) - 5;else if (a[b] === "Z") c[b] = "x";else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
      }return c.join(" ") || "x";
    }, clip: function clip(a) {
      var b = this,
          c;a ? (c = a.members, Ba(c, b), c.push(b), b.destroyClip = function () {
        Ba(c, b);
      }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = { clip: ub ? "inherit" : "rect(auto)" });return b.css(a);
    }, css: ba.prototype.htmlCss, safeRemoveChild: function safeRemoveChild(a) {
      a.parentNode && Wa(a);
    }, destroy: function destroy() {
      this.destroyClip && this.destroyClip();return ba.prototype.destroy.apply(this);
    }, on: function on(a, b) {
      this.element["on" + a] = function () {
        var a = M.event;a.target = a.srcElement;b(a);
      };return this;
    }, cutOffPath: function cutOffPath(a, b) {
      var c,
          a = a.split(/[ ,]/);c = a.length;if (c === 9 || c === 11) a[c - 4] = a[c - 2] = H(a[c - 2]) - 10 * b;return a.join(" ");
    }, shadow: function shadow(a, b, c) {
      var d = [],
          e,
          f = this.element,
          g = this.renderer,
          h,
          i = f.style,
          j,
          k = f.path,
          l,
          m,
          n,
          p;k && typeof k.value !== "string" && (k = "x");m = k;if (a) {
        n = q(a.width, 3);p = (a.opacity || 0.15) / n;for (e = 1; e <= 3; e++) {
          l = n * 2 + 1 - 2 * e;c && (m = this.cutOffPath(k.value, l + 0.5));j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />'];h = ia(g.prepVML(j), null, { left: H(i.left) + q(a.offsetX, 1), top: H(i.top) + q(a.offsetY, 1) });if (c) h.cutOff = l + 1;j = ['<stroke color="', a.color || "black", '" opacity="', p * e, '"/>'];ia(g.prepVML(j), null, null, h);b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);d.push(h);
        }this.shadows = d;
      }return this;
    }, updateShadows: va, setAttr: function setAttr(a, b) {
      ub ? this.element[a] = b : this.element.setAttribute(a, b);
    }, classSetter: function classSetter(a) {
      this.element.className = a;
    }, dashstyleSetter: function dashstyleSetter(a, b, c) {
      (c.getElementsByTagName("stroke")[0] || ia(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";this[b] = a;
    }, dSetter: function dSetter(a, b, c) {
      var d = this.shadows,
          a = a || [];this.d = a.join && a.join(" ");
      c.path = a = this.pathToVML(a);if (d) for (c = d.length; c--;) {
        d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
      }this.setAttr(b, a);
    }, fillSetter: function fillSetter(a, b, c) {
      var d = c.nodeName;if (d === "SPAN") c.style.color = a;else if (d !== "IMG") c.filled = a !== "none", this.setAttr("fillcolor", this.renderer.color(a, c, b, this));
    }, "fill-opacitySetter": function fillOpacitySetter(a, b, c) {
      ia(this.renderer.prepVML(["<", b.split("-")[0], ' opacity="', a, '"/>']), null, null, c);
    }, opacitySetter: va, rotationSetter: function rotationSetter(a, b, c) {
      c = c.style;this[b] = c[b] = a;c.left = -A(na(a * ta) + 1) + "px";c.top = A(fa(a * ta)) + "px";
    }, strokeSetter: function strokeSetter(a, b, c) {
      this.setAttr("strokecolor", this.renderer.color(a, c, b, this));
    }, "stroke-widthSetter": function strokeWidthSetter(a, b, c) {
      c.stroked = !!a;this[b] = a;z(a) && (a += "px");this.setAttr("strokeweight", a);
    }, titleSetter: function titleSetter(a, b) {
      this.setAttr(b, a);
    }, visibilitySetter: function visibilitySetter(a, b, c) {
      a === "inherit" && (a = "visible");this.shadows && o(this.shadows, function (c) {
        c.style[b] = a;
      });c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, ub || (c.style[b] = a ? "visible" : "hidden"), b = "top");c.style[b] = a;
    }, xSetter: function xSetter(a, b, c) {
      this[b] = a;b === "x" ? b = "left" : b === "y" && (b = "top");this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a;
    }, zIndexSetter: function zIndexSetter(a, b, c) {
      c.style[b] = a;
    } }, da["stroke-opacitySetter"] = da["fill-opacitySetter"], B.VMLElement = da = oa(ba, da), da.prototype.ySetter = da.prototype.widthSetter = da.prototype.heightSetter = da.prototype.xSetter, da = { Element: da, isIE8: Pa.indexOf("MSIE 8.0") > -1, init: function init(a, b, c, d) {
      var e;this.alignedObjects = [];d = this.createElement(Xa).css(v(this.getStyle(d), { position: "relative" }));e = d.element;a.appendChild(d.element);this.isVML = !0;this.box = e;this.boxWrapper = d;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(b, c, !1);if (!C.namespaces.hcv) {
        C.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");try {
          C.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
        } catch (f) {
          C.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
        }
      }
    },
    isHidden: function isHidden() {
      return !this.box.offsetWidth;
    }, clipRect: function clipRect(a, b, c, d) {
      var e = this.createElement(),
          f = ha(a);return v(e, { members: [], count: 0, left: (f ? a.x : a) + 1, top: (f ? a.y : b) + 1, width: (f ? a.width : c) - 1, height: (f ? a.height : d) - 1, getCSS: function getCSS(a) {
          var b = a.element,
              c = b.nodeName,
              a = a.inverted,
              d = this.top - (c === "shape" ? b.offsetTop : 0),
              e = this.left,
              b = e + this.width,
              f = d + this.height,
              d = { clip: "rect(" + A(a ? e : d) + "px," + A(a ? f : b) + "px," + A(a ? b : f) + "px," + A(a ? d : e) + "px)" };!a && ub && c === "DIV" && v(d, { width: b + "px", height: f + "px" });return d;
        },
        updateClipping: function updateClipping() {
          o(e.members, function (a) {
            a.element && a.css(e.getCSS(a));
          });
        } });
    }, color: function color(a, b, c, d) {
      var e = this,
          f,
          g = /^rgba/,
          h,
          i,
          j = "none";a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");if (i) {
        var k,
            l,
            m = a.linearGradient || a.radialGradient,
            n,
            p,
            r,
            s,
            q,
            u = "",
            a = a.stops,
            w,
            F = [],
            L = function L() {
          h = ['<fill colors="' + F.join(",") + '" opacity="', r, '" o:opacity2="', p, '" type="', i, '" ', u, 'focus="100%" method="any" />'];ia(e.prepVML(h), null, null, b);
        };n = a[0];w = a[a.length - 1];n[0] > 0 && a.unshift([0, n[1]]);w[0] < 1 && a.push([1, w[1]]);o(a, function (a, b) {
          g.test(a[1]) ? (f = xa(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);F.push(a[0] * 100 + "% " + k);b ? (r = l, s = k) : (p = l, q = k);
        });if (c === "fill") {
          if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, n = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, u = 'angle="' + (90 - aa.atan((m - a) / (n - c)) * 180 / Ca) + '"', L();else {
            var j = m.r,
                ka = j * 2,
                t = j * 2,
                y = m.cx,
                x = m.cy,
                A = b.radialReference,
                v,
                j = function j() {
              A && (v = d.getBBox(), y += (A[0] - v.x) / v.width - 0.5, x += (A[1] - v.y) / v.height - 0.5, ka *= A[2] / v.width, t *= A[2] / v.height);u = 'src="' + Q.global.VMLRadialGradientURL + '" size="' + ka + "," + t + '" origin="0.5,0.5" position="' + y + "," + x + '" color2="' + q + '" ';L();
            };d.added ? j() : d.onAdd = j;j = s;
          }
        } else j = k;
      } else if (g.test(a) && b.tagName !== "IMG") f = xa(a), d[c + "-opacitySetter"](f.get("a"), c, b), j = f.get("rgb");else {
        j = b.getElementsByTagName(c);if (j.length) j[0].opacity = 1, j[0].type = "solid";j = a;
      }return j;
    }, prepVML: function prepVML(a) {
      var b = this.isIE8,
          a = a.join("");b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");return a;
    }, text: za.prototype.html, path: function path(a) {
      var b = { coordsize: "10 10" };Ra(a) ? b.d = a : ha(a) && v(b, a);return this.createElement("shape").attr(b);
    }, circle: function circle(a, b, c) {
      var d = this.symbol("circle");if (ha(a)) c = a.r, b = a.y, a = a.x;d.isCircle = !0;d.r = c;return d.attr({ x: a, y: b });
    }, g: function g(a) {
      var b;a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a });return this.createElement(Xa).attr(b);
    }, image: function image(a, b, c, d, e) {
      var f = this.createElement("img").attr({ src: a });arguments.length > 1 && f.attr({ x: b, y: c, width: d, height: e });return f;
    }, createElement: function createElement(a) {
      return a === "rect" ? this.symbol(a) : za.prototype.createElement.call(this, a);
    }, invertChild: function invertChild(a, b) {
      var c = this,
          d = b.style,
          e = a.tagName === "IMG" && a.style;O(a, { flip: "x", left: H(d.width) - (e ? H(e.top) : 1), top: H(d.height) - (e ? H(e.left) : 1), rotation: -90 });o(a.childNodes, function (b) {
        c.invertChild(b, a);
      });
    }, symbols: { arc: function arc(a, b, c, d, e) {
        var f = e.start,
            g = e.end,
            h = e.r || c || d,
            c = e.innerR,
            d = fa(f),
            i = na(f),
            j = fa(g),
            k = na(g);if (g - f === 0) return ["x"];f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];e.open && !c && f.push("e", W, a, b);f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");f.isArc = !0;return f;
      }, circle: function circle(a, b, c, d, e) {
        e && (c = d = 2 * e.r);e && e.isCircle && (a -= c / 2, b -= d / 2);return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"];
      }, rect: function rect(a, b, c, d, e) {
        return za.prototype.symbols[!t(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e);
      } } }, B.VMLRenderer = nb = function nb() {
    this.init.apply(this, arguments);
  }, nb.prototype = D(za.prototype, da), Za = nb;za.prototype.measureSpanWidth = function (a, b) {
    var c = C.createElement("span"),
        d;d = C.createTextNode(a);c.appendChild(d);O(c, b);this.box.appendChild(c);d = c.offsetWidth;Wa(c);return d;
  };var Zb;if (ua) B.CanVGRenderer = da = function da() {
    Ta = "http://www.w3.org/1999/xhtml";
  }, da.prototype.symbols = {}, Zb = function () {
    function a() {
      var a = b.length,
          d;for (d = 0; d < a; d++) {
        b[d]();
      }b = [];
    }var b = [];return { push: function push(c, d) {
        if (b.length === 0) {
          var e = C.getElementsByTagName("head")[0],
              f = C.createElement("script");
          f.type = "text/javascript";f.src = d;f.onload = a;e.appendChild(f);
        }b.push(c);
      } };
  }(), Za = da;eb.prototype = { addLabel: function addLabel() {
      var a = this.axis,
          b = a.options,
          c = a.chart,
          d = a.categories,
          e = a.names,
          f = this.pos,
          g = b.labels,
          h = a.tickPositions,
          i = f === h[0],
          j = f === h[h.length - 1],
          e = d ? q(d[f], e[f], f) : f,
          d = this.label,
          h = h.info,
          k;a.isDatetimeAxis && h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);this.isFirst = i;this.isLast = j;b = a.labelFormatter.call({ axis: a, chart: c, isFirst: i, isLast: j, dateTimeLabelFormat: k, value: a.isLog ? V(a.lin2log(e)) : e });t(d) ? d && d.attr({ text: b }) : (this.labelLength = (this.label = d = t(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(D(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0);
    }, getLabelSize: function getLabelSize() {
      return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
    }, handleOverflow: function handleOverflow(a) {
      var b = this.axis,
          c = a.x,
          d = b.chart.chartWidth,
          e = b.chart.spacing,
          f = q(b.labelLeft, E(b.pos, e[3])),
          e = q(b.labelRight, y(b.pos + b.len, d - e[1])),
          g = this.label,
          h = this.rotation,
          i = { left: 0, center: 0.5, right: 1 }[b.labelAlign],
          j = g.getBBox().width,
          k = b.getSlotWidth(),
          l = k,
          m = 1,
          n,
          p = {};if (h) h < 0 && c - i * j < f ? n = A(c / fa(h * ta) - f) : h > 0 && c + i * j > e && (n = A((d - c) / fa(h * ta)));else if (d = c + (1 - i) * j, c - i * j < f ? l = a.x + l * (1 - i) - f : d > e && (l = e - a.x + l * i, m = -1), l = E(k, l), l < k && b.labelAlign === "center" && (a.x += m * (k - l - i * (k - E(j, l)))), j > l || b.autoRotation && g.styles.width) n = l;if (n) {
        p.width = n;if (!b.options.labels.style.textOverflow) p.textOverflow = "ellipsis";g.css(p);
      }
    }, getPosition: function getPosition(a, b, c, d) {
      var e = this.axis,
          f = e.chart,
          g = d && f.oldChartHeight || f.chartHeight;return { x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB };
    }, getLabelPosition: function getLabelPosition(a, b, c, d, e, f, g, h) {
      var i = this.axis,
          j = i.transA,
          k = i.reversed,
          l = i.staggerLines,
          m = i.tickRotCorr || { x: 0, y: 0 },
          n = e.y;t(n) || (n = i.side === 0 ? c.rotation ? -8 : -c.getBBox().height : i.side === 2 ? m.y + 8 : fa(c.rotation * ta) * (m.y - c.getBBox(!1, 0).height / 2));a = a + e.x + m.x - (f && d ? f * j * (k ? -1 : 1) : 0);b = b + n - (f && !d ? f * j * (k ? 1 : -1) : 0);l && (c = g / (h || 1) % l, i.opposite && (c = l - c - 1), b += c * (i.labelOffset / l));return { x: a, y: A(b) };
    }, getMarkPath: function getMarkPath(a, b, c, d, e, f) {
      return f.crispLine([W, a, b, R, a + (e ? 0 : -c), b + (e ? c : 0)], d);
    }, render: function render(a, b, c) {
      var d = this.axis,
          e = d.options,
          f = d.chart.renderer,
          g = d.horiz,
          h = this.type,
          i = this.label,
          j = this.pos,
          k = e.labels,
          l = this.gridLine,
          m = h ? h + "Grid" : "grid",
          n = h ? h + "Tick" : "tick",
          p = e[m + "LineWidth"],
          r = e[m + "LineColor"],
          s = e[m + "LineDashStyle"],
          m = d.tickSize(n),
          n = e[n + "Color"],
          o = this.mark,
          u = k.step,
          w = !0,
          F = d.tickmarkOffset,
          L = this.getPosition(g, j, F, b),
          ka = L.x,
          L = L.y,
          t = g && ka === d.pos + d.len || !g && L === d.pos ? -1 : 1,
          c = q(c, 1);this.isActive = !0;if (p) {
        j = d.getPlotLinePath(j + F, p * t, b, !0);if (l === x) {
          l = { stroke: r, "stroke-width": p };if (s) l.dashstyle = s;if (!h) l.zIndex = 1;if (b) l.opacity = 0;this.gridLine = l = p ? f.path(j).attr(l).add(d.gridGroup) : null;
        }if (!b && l && j) l[this.isNew ? "attr" : "animate"]({ d: j, opacity: c });
      }if (m) d.opposite && (m[0] = -m[0]), h = this.getMarkPath(ka, L, m[0], m[1] * t, g, f), o ? o.animate({ d: h, opacity: c }) : this.mark = f.path(h).attr({ stroke: n, "stroke-width": m[1],
        opacity: c }).add(d.axisGroup);if (i && z(ka)) i.xy = L = this.getLabelPosition(ka, L, i, g, k, F, a, u), this.isFirst && !this.isLast && !q(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !q(e.showLastLabel, 1) ? w = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && this.handleOverflow(L), u && a % u && (w = !1), w && z(L.y) ? (L.opacity = c, i[this.isNew ? "attr" : "animate"](L)) : (Qa(i), i.attr("y", -9999)), this.isNew = !1;
    }, destroy: function destroy() {
      Oa(this, this.axis);
    } };B.PlotLineOrBand = function (a, b) {
    this.axis = a;if (b) this.options = b, this.id = b.id;
  };B.PlotLineOrBand.prototype = { render: function render() {
      var a = this,
          b = a.axis,
          c = b.horiz,
          d = a.options,
          e = d.label,
          f = a.label,
          g = d.width,
          h = d.to,
          i = d.from,
          j = t(i) && t(h),
          k = d.value,
          l = d.dashStyle,
          m = a.svgElem,
          n = [],
          p,
          r = d.color,
          s = q(d.zIndex, 0),
          o = d.events,
          u = {},
          w = b.chart.renderer,
          n = b.log2lin;b.isLog && (i = n(i), h = n(h), k = n(k));if (g) {
        if (n = b.getPlotLinePath(k, g), u = { stroke: r, "stroke-width": g }, l) u.dashstyle = l;
      } else if (j) {
        n = b.getPlotBandPath(i, h, d);if (r) u.fill = r;if (d.borderWidth) u.stroke = d.borderColor, u["stroke-width"] = d.borderWidth;
      } else return;u.zIndex = s;if (m) {
        if (n) m.show(), m.animate({ d: n });else {
          if (m.hide(), f) a.label = f = f.destroy();
        }
      } else if (n && n.length && (a.svgElem = m = w.path(n).attr(u).add(), o)) for (p in d = function d(b) {
        m.on(b, function (c) {
          o[b].apply(a, [c]);
        });
      }, o) {
        d(p);
      }e && t(e.text) && n && n.length && b.width > 0 && b.height > 0 && !n.flat ? (e = D({ align: c && j && "center", x: c ? !j && 4 : 10, verticalAlign: !c && j && "middle", y: c ? j ? 16 : 10 : j ? 6 : -4, rotation: c && !j && 90 }, e), this.renderLabel(e, n, j, s)) : f && f.hide();return a;
    }, renderLabel: function renderLabel(a, b, c, d) {
      var e = this.label,
          f = this.axis.chart.renderer;if (!e) e = { align: a.textAlign || a.align, rotation: a.rotation }, e.zIndex = d, this.label = e = f.text(a.text, 0, 0, a.useHTML).attr(e).css(a.style).add();d = [b[1], b[4], c ? b[6] : b[1]];b = [b[2], b[5], c ? b[7] : b[2]];c = Na(d);f = Na(b);e.align(a, !1, { x: c, y: f, width: Fa(d) - c, height: Fa(b) - f });e.show();
    }, destroy: function destroy() {
      Ba(this.axis.plotLinesAndBands, this);delete this.axis;Oa(this);
    } };var J = B.Axis = function () {
    this.init.apply(this, arguments);
  };J.prototype = { defaultOptions: { dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M",
        day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, gridLineColor: "#D8D8D8", labels: { enabled: !0, style: { color: "#606060", cursor: "default", fontSize: "11px" }, x: 0 }, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01, maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle",
        style: { color: "#707070" } }, type: "linear" }, defaultYAxisOptions: { endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function formatter() {
          return B.numberFormat(this.total, -1);
        }, style: D(X.line.dataLabels.style, { color: "#000000" }) } }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45],
        x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function init(a, b) {
      var c = b.isX;this.chart = a;this.horiz = a.inverted ? !c : c;this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";this.opposite = b.opposite;this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);this.setOptions(b);var d = this.options,
          e = d.type;this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;this.userOptions = b;this.minPixelPadding = 0;this.reversed = d.reversed;this.visible = d.visible !== !1;this.zoomEnabled = d.zoomEnabled !== !1;this.categories = d.categories || e === "category";this.names = this.names || [];this.isLog = e === "logarithmic";this.isDatetimeAxis = e === "datetime";this.isLinked = t(d.linkedTo);this.ticks = {};this.labelEdge = [];this.minorTicks = {};this.plotLinesAndBands = [];this.alternateBands = {};this.len = 0;this.minRange = this.userMinRange = d.minRange || d.maxZoom;this.range = d.range;this.offset = d.offset || 0;this.stacks = {};this.oldStacks = {};this.stacksTouched = 0;this.min = this.max = null;this.crosshair = q(d.crosshair, sa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);var f,
          d = this.options.events;qa(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));this.series = this.series || [];if (a.inverted && c && this.reversed === x) this.reversed = !0;this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;for (f in d) {
        G(this, f, d[f]);
      }if (this.isLog) this.val2lin = this.log2lin, this.lin2val = this.lin2log;
    }, setOptions: function setOptions(a) {
      this.options = D(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], D(Q[this.coll], a));
    }, defaultLabelFormatter: function defaultLabelFormatter() {
      var a = this.axis,
          b = this.value,
          c = a.categories,
          d = this.dateTimeLabelFormat,
          e = Q.lang.numericSymbols,
          f = e && e.length,
          g,
          h = a.options.labels.format,
          a = a.isLog ? b : a.tickInterval;if (h) g = Ma(h, this);else if (c) g = b;else if (d) g = pa(d, b);else if (f && a >= 1E3) for (; f-- && g === x;) {
        c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !== null && b !== 0 && (g = B.numberFormat(b / c, -1) + e[f]);
      }g === x && (g = T(b) >= 1E4 ? B.numberFormat(b, -1) : B.numberFormat(b, -1, x, ""));return g;
    }, getSeriesExtremes: function getSeriesExtremes() {
      var a = this,
          b = a.chart;a.hasVisibleSeries = !1;a.dataMin = a.dataMax = a.threshold = null;a.softThreshold = !a.isXAxis;a.buildStacks && a.buildStacks();o(a.series, function (c) {
        if (c.visible || !b.options.chart.ignoreHiddenSeries) {
          var d = c.options,
              e = d.threshold,
              f;a.hasVisibleSeries = !0;a.isLog && e <= 0 && (e = null);if (a.isXAxis) {
            if (d = c.xData, d.length) c = Na(d), !z(c) && !(c instanceof ea) && (d = Ha(d, function (a) {
              return z(a);
            }), c = Na(d)), a.dataMin = E(q(a.dataMin, d[0]), c), a.dataMax = y(q(a.dataMax, d[0]), Fa(d));
          } else {
            c.getExtremes();f = c.dataMax;c = c.dataMin;if (t(c) && t(f)) a.dataMin = E(q(a.dataMin, c), c), a.dataMax = y(q(a.dataMax, f), f);if (t(e)) a.threshold = e;if (!d.softThreshold || a.isLog) a.softThreshold = !1;
          }
        }
      });
    }, translate: function translate(a, b, c, d, e, f) {
      var g = this.linkedParent || this,
          h = 1,
          i = 0,
          j = d ? g.oldTransA : g.transA,
          d = d ? g.oldMin : g.min,
          k = g.minPixelPadding,
          e = (g.isOrdinal || g.isBroken || g.isLog && e) && g.lin2val;if (!j) j = g.transA;if (c) h *= -1, i = g.len;g.reversed && (h *= -1, i -= h * (g.sector || g.len));b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (z(f) ? j * f * g.pointRange : 0));return a;
    }, toPixels: function toPixels(a, b) {
      return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
    }, toValue: function toValue(a, b) {
      return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
    }, getPlotLinePath: function getPlotLinePath(a, b, c, d, e) {
      var f = this.chart,
          g = this.left,
          h = this.top,
          i,
          j,
          k = c && f.oldChartHeight || f.chartHeight,
          l = c && f.oldChartWidth || f.chartWidth,
          m;i = this.transB;var n = function n(a, b, c) {
        if (a < b || a > c) d ? a = E(y(b, a), c) : m = !0;return a;
      },
          e = q(e, this.translate(a, null, null, c)),
          a = c = A(e + i);i = j = A(k - e - i);z(e) ? this.horiz ? (i = h, j = k - this.bottom, a = c = n(a, g, g + this.width)) : (a = g, c = l - this.right, i = j = n(i, h, h + this.height)) : m = !0;return m && !d ? null : f.renderer.crispLine([W, a, i, R, c, j], b || 1);
    }, getLinearTickPositions: function getLinearTickPositions(a, b, c) {
      var d,
          e = V(Y(b / a) * a),
          f = V(Ga(c / a) * a),
          g = [];if (b === c && z(b)) return [b];for (b = e; b <= f;) {
        g.push(b);b = V(b + a);
        if (b === d) break;d = b;
      }return g;
    }, getMinorTickPositions: function getMinorTickPositions() {
      var a = this.options,
          b = this.tickPositions,
          c = this.minorTickInterval,
          d = [],
          e,
          f = this.pointRangePadding || 0;e = this.min - f;var f = this.max + f,
          g = f - e;if (g && g / c < this.len / 3) if (this.isLog) {
        f = b.length;for (e = 1; e < f; e++) {
          d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0));
        }
      } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));else for (b = e + (b[0] - e) % c; b <= f; b += c) {
        d.push(b);
      }d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);return d;
    }, adjustForMinRange: function adjustForMinRange() {
      var a = this.options,
          b = this.min,
          c = this.max,
          d,
          e = this.dataMax - this.dataMin >= this.minRange,
          f,
          g,
          h,
          i,
          j,
          k;if (this.isXAxis && this.minRange === x && !this.isLog) t(a.min) || t(a.max) ? this.minRange = null : (o(this.series, function (a) {
        i = a.xData;for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) {
          if (h = i[g] - i[g - 1], f === x || h < f) f = h;
        }
      }), this.minRange = E(f * 5, this.dataMax - this.dataMin));if (c - b < this.minRange) {
        k = this.minRange;d = (k - c + b) / 2;d = [b - d, q(a.min, b - d)];if (e) d[2] = this.dataMin;b = Fa(d);c = [b + k, q(a.max, b + k)];if (e) c[2] = this.dataMax;c = Na(c);c - b < k && (d[0] = c - k, d[1] = q(a.min, c - k), b = Fa(d));
      }this.min = b;this.max = c;
    }, getClosest: function getClosest() {
      var a;this.categories ? a = 1 : o(this.series, function (b) {
        var c = b.closestPointRange;!b.noSharedTooltip && t(c) && (a = t(a) ? E(a, c) : c);
      });return a;
    }, setAxisTranslation: function setAxisTranslation(a) {
      var b = this,
          c = b.max - b.min,
          d = b.axisPointRange || 0,
          e,
          f = 0,
          g = 0,
          h = b.linkedParent,
          i = !!b.categories,
          j = b.transA,
          k = b.isXAxis;if (k || i || d) if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : (e = b.getClosest(), o(b.series, function (a) {
        var c = i ? 1 : k ? q(a.options.pointRange, e, 0) : b.axisPointRange || 0,
            a = a.options.pointPlacement;d = y(d, c);b.single || (f = y(f, Ea(a) ? 0 : c / 2), g = y(g, a === "on" ? 0 : c));
      })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = E(d, c), k) b.closestPointRange = e;if (a) b.oldTransA = j;b.translationSlope = b.transA = j = b.len / (c + g || 1);b.transB = b.horiz ? b.left : b.bottom;b.minPixelPadding = j * f;
    }, minFromRange: function minFromRange() {
      return this.max - this.range;
    }, setTickInterval: function setTickInterval(a) {
      var b = this,
          c = b.chart,
          d = b.options,
          e = b.isLog,
          f = b.log2lin,
          g = b.isDatetimeAxis,
          h = b.isXAxis,
          i = b.isLinked,
          j = d.maxPadding,
          k = d.minPadding,
          l = d.tickInterval,
          m = d.tickPixelInterval,
          n = b.categories,
          p = b.threshold,
          r = b.softThreshold,
          s,
          Z,
          u,
          w;!g && !n && !i && this.getTickAmount();u = q(b.userMin, d.min);w = q(b.userMax, d.max);i ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = q(c.min, c.dataMin), b.max = q(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ja(11, 1)) : (!r && t(p) && (b.dataMin >= p ? (s = p, k = 0) : b.dataMax <= p && (Z = p, j = 0)), b.min = q(u, s, b.dataMin), b.max = q(w, Z, b.dataMax));if (e) !a && E(b.min, q(b.dataMin, b.min)) <= 0 && ja(10, 1), b.min = V(f(b.min), 15), b.max = V(f(b.max), 15);if (b.range && t(b.max)) b.userMin = b.min = u = y(b.min, b.minFromRange()), b.userMax = w = b.max, b.range = null;K(b, "foundExtremes");b.beforePadding && b.beforePadding();b.adjustForMinRange();if (!n && !b.axisPointRange && !b.usePercentage && !i && t(b.min) && t(b.max) && (f = b.max - b.min)) !t(u) && k && (b.min -= f * k), !t(w) && j && (b.max += f * j);if (z(d.floor)) b.min = y(b.min, d.floor);if (z(d.ceiling)) b.max = E(b.max, d.ceiling);if (r && t(b.dataMin)) if (p = p || 0, !t(u) && b.min < p && b.dataMin >= p) b.min = p;else if (!t(w) && b.max > p && b.dataMax <= p) b.max = p;b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : i && !l && m === b.linkedParent.options.tickPixelInterval ? l = b.linkedParent.tickInterval : q(l, this.tickAmount ? (b.max - b.min) / y(this.tickAmount - 1, 1) : void 0, n ? 1 : (b.max - b.min) * m / y(b.len, m));h && !a && o(b.series, function (a) {
        a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
      });b.setAxisTranslation(!0);b.beforeSetTickPositions && b.beforeSetTickPositions();if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);if (b.pointRange && !l) b.tickInterval = y(b.pointRange, b.tickInterval);a = q(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);if (!l && b.tickInterval < a) b.tickInterval = a;if (!g && !e && !l) b.tickInterval = Db(b.tickInterval, null, Cb(b.tickInterval), q(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);if (!this.tickAmount && this.len) b.tickInterval = b.unsquish();
      this.setTickPositions();
    }, setTickPositions: function setTickPositions() {
      var a = this.options,
          b,
          c = a.tickPositions,
          d = a.tickPositioner,
          e = a.startOnTick,
          f = a.endOnTick,
          g;this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;this.tickPositions = b = c && c.slice();if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max])))) this.tickPositions = b = d;if (!this.isLinked) this.trimTicks(b, e, f), this.min === this.max && t(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount();
    },
    trimTicks: function trimTicks(a, b, c) {
      var d = a[0],
          e = a[a.length - 1],
          f = this.minPointOffset || 0;if (b) this.min = d;else for (; this.min - f > a[0];) {
        a.shift();
      }if (c) this.max = e;else for (; this.max + f < a[a.length - 1];) {
        a.pop();
      }a.length === 0 && t(d) && a.push((e + d) / 2);
    }, alignToOthers: function alignToOthers() {
      var a = {},
          b,
          c = this.options;this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && o(this.chart[this.coll], function (c) {
        var e = c.options,
            e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join(",");c.series.length && (a[e] ? b = !0 : a[e] = 1);
      });return b;
    }, getTickAmount: function getTickAmount() {
      var a = this.options,
          b = a.tickAmount,
          c = a.tickPixelInterval;!t(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);!b && this.alignToOthers() && (b = Ga(this.len / c) + 1);if (b < 4) this.finalTickAmt = b, b = 5;this.tickAmount = b;
    }, adjustTickAmount: function adjustTickAmount() {
      var a = this.tickInterval,
          b = this.tickPositions,
          c = this.tickAmount,
          d = this.finalTickAmt,
          e = b && b.length;if (e < c) {
        for (; b.length < c;) {
          b.push(V(b[b.length - 1] + a));
        }this.transA *= (e - 1) / (c - 1);this.max = b[b.length - 1];
      } else e > c && (this.tickInterval *= 2, this.setTickPositions());
      if (t(d)) {
        for (a = c = b.length; a--;) {
          (d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
        }this.finalTickAmt = x;
      }
    }, setScale: function setScale() {
      var a, b;this.oldMin = this.min;this.oldMax = this.max;this.oldAxisLength = this.len;this.setAxisSize();b = this.len !== this.oldAxisLength;o(this.series, function (b) {
        if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0;
      });if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers()) {
        if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax;
      } else this.cleanStacks && this.cleanStacks();
    }, setExtremes: function setExtremes(a, b, c, d, e) {
      var f = this,
          g = f.chart,
          c = q(c, !0);o(f.series, function (a) {
        delete a.kdTree;
      });e = v(e, { min: a, max: b });K(f, "setExtremes", e, function () {
        f.userMin = a;f.userMax = b;f.eventArgs = e;c && g.redraw(d);
      });
    }, zoom: function zoom(a, b) {
      var c = this.dataMin,
          d = this.dataMax,
          e = this.options,
          f = E(c, q(e.min, c)),
          e = y(d, q(e.max, d));this.allowZoomOutside || (t(c) && a <= f && (a = f), t(d) && b >= e && (b = e));this.displayBtn = a !== x || b !== x;this.setExtremes(a, b, !1, x, { trigger: "zoom" });return !0;
    }, setAxisSize: function setAxisSize() {
      var a = this.chart,
          b = this.options,
          c = b.offsetLeft || 0,
          d = this.horiz,
          e = q(b.width, a.plotWidth - c + (b.offsetRight || 0)),
          f = q(b.height, a.plotHeight),
          g = q(b.top, a.plotTop),
          b = q(b.left, a.plotLeft + c),
          c = /%$/;c.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight));c.test(g) && (g = Math.round(parseFloat(g) / 100 * a.plotHeight + a.plotTop));this.left = b;this.top = g;this.width = e;this.height = f;this.bottom = a.chartHeight - f - g;this.right = a.chartWidth - e - b;this.len = y(d ? e : f, 0);this.pos = d ? b : g;
    }, getExtremes: function getExtremes() {
      var a = this.isLog,
          b = this.lin2log;return { min: a ? V(b(this.min)) : this.min, max: a ? V(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
    }, getThreshold: function getThreshold(a) {
      var b = this.isLog,
          c = this.lin2log,
          d = b ? c(this.min) : this.min,
          b = b ? c(this.max) : this.max;a === null ? a = d : d > a ? a = d : b < a && (a = b);
      return this.translate(a, 0, 1, 0, 1);
    }, autoLabelAlign: function autoLabelAlign(a) {
      a = (q(a, 0) - this.side * 90 + 720) % 360;return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center";
    }, tickSize: function tickSize(a) {
      var b = this.options,
          c = b[a + "Length"],
          d = q(b[a + "Width"], a === "tick" && this.isXAxis ? 1 : 0);if (d && c) return b[a + "Position"] === "inside" && (c = -c), [c, d];
    }, labelMetrics: function labelMetrics() {
      return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label);
    }, unsquish: function unsquish() {
      var a = this.options.labels,
          b = this.horiz,
          c = this.tickInterval,
          d = c,
          e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c),
          f,
          g = a.rotation,
          h = this.labelMetrics(),
          i,
          j = Number.MAX_VALUE,
          k,
          l = function l(a) {
        a /= e || 1;a = a > 1 ? Ga(a) : 1;return a * c;
      };b ? (k = !a.staggerLines && !a.step && (t(g) ? [g] : e < q(a.autoRotationLimit, 80) && a.autoRotation)) && o(k, function (a) {
        var b;if (a === g || a && a >= -90 && a <= 90) i = l(T(h.h / na(ta * a))), b = i + T(a / 360), b < j && (j = b, f = a, d = i);
      }) : a.step || (d = l(h.h));this.autoRotation = k;this.labelRotation = q(f, g);return d;
    }, getSlotWidth: function getSlotWidth() {
      var a = this.chart,
          b = this.horiz,
          c = this.options.labels,
          d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
          e = a.margin[3];return b && (c.step || 0) < 2 && !c.rotation && (this.staggerLines || 1) * a.plotWidth / d || !b && (e && e - a.spacing[3] || a.chartWidth * 0.33);
    }, renderUnsquish: function renderUnsquish() {
      var a = this.chart,
          b = a.renderer,
          c = this.tickPositions,
          d = this.ticks,
          e = this.options.labels,
          f = this.horiz,
          g = this.getSlotWidth(),
          h = y(1, A(g - 2 * (e.padding || 5))),
          i = {},
          j = this.labelMetrics(),
          k = e.style.textOverflow,
          l,
          m = 0,
          n,
          p;if (!Ea(e.rotation)) i.rotation = e.rotation || 0;if (this.autoRotation) o(c, function (a) {
        if ((a = d[a]) && a.labelLength > m) m = a.labelLength;
      }), m > h && m > j.h ? i.rotation = this.labelRotation : this.labelRotation = 0;else if (g && (l = { width: h + "px" }, !k)) {
        l.textOverflow = "clip";for (n = c.length; !f && n--;) {
          if (p = c[n], h = d[p].label) if (h.styles.textOverflow === "ellipsis" ? h.css({ textOverflow: "clip" }) : d[p].labelLength > g && h.css({ width: g + "px" }), h.getBBox().height > this.len / c.length - (j.h - j.f)) h.specCss = { textOverflow: "ellipsis" };
        }
      }if (i.rotation && (l = { width: (m > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px" }, !k)) l.textOverflow = "ellipsis";if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) i.align = this.labelAlign;o(c, function (a) {
        var b = (a = d[a]) && a.label;if (b) b.attr(i), l && b.css(D(l, b.specCss)), delete b.specCss, a.rotation = i.rotation;
      });this.tickRotCorr = b.rotCorr(j.b, this.labelRotation || 0, this.side !== 0);
    }, hasData: function hasData() {
      return this.hasVisibleSeries || t(this.min) && t(this.max) && !!this.tickPositions;
    }, getOffset: function getOffset() {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d = a.options,
          e = a.tickPositions,
          f = a.ticks,
          g = a.horiz,
          h = a.side,
          i = b.inverted ? [1, 0, 3, 2][h] : h,
          j,
          k,
          l = 0,
          m,
          n = 0,
          p = d.title,
          r = d.labels,
          s = 0,
          Z = a.opposite,
          u = b.axisOffset,
          b = b.clipOffset,
          w = [-1, 1, 1, -1][h],
          F,
          L = a.axisParent,
          ka = this.tickSize("tick");j = a.hasData();a.showAxis = k = j || q(d.showEmpty, !0);a.staggerLines = a.horiz && r.staggerLines;if (!a.axisGroup) a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(L), a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 2 }).add(L), a.labelGroup = c.g("axis-labels").attr({ zIndex: r.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(L);if (j || a.isLinked) {
        if (o(e, function (b) {
          f[b] ? f[b].addLabel() : f[b] = new eb(a, b);
        }), a.renderUnsquish(), r.reserveSpace !== !1 && (h === 0 || h === 2 || { 1: "left", 3: "right" }[h] === a.labelAlign || a.labelAlign === "center") && o(e, function (a) {
          s = y(f[a].getLabelSize(), s);
        }), a.staggerLines) s *= a.staggerLines, a.labelOffset = s * (a.opposite ? -1 : 1);
      } else for (F in f) {
        f[F].destroy(), delete f[F];
      }if (p && p.text && p.enabled !== !1) {
        if (!a.axisTitle) (F = p.textAlign) || (F = (g ? { low: "left", middle: "center", high: "right" } : { low: Z ? "right" : "left",
          middle: "center", high: Z ? "left" : "right" })[p.align]), a.axisTitle = c.text(p.text, 0, 0, p.useHTML).attr({ zIndex: 7, rotation: p.rotation || 0, align: F }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0;if (k) l = a.axisTitle.getBBox()[g ? "height" : "width"], m = p.offset, n = t(m) ? 0 : q(p.margin, g ? 5 : 10);a.axisTitle[k ? "show" : "hide"](!0);
      }a.offset = w * q(d.offset, u[h]);a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 };c = h === 0 ? -a.labelMetrics().h : h === 2 ? a.tickRotCorr.y : 0;n = Math.abs(s) + n;s && (n -= c, n += w * (g ? q(r.y, a.tickRotCorr.y + w * 8) : r.x));a.axisTitleMargin = q(m, n);u[h] = y(u[h], a.axisTitleMargin + l + w * a.offset, n, j && e.length && ka ? ka[0] : 0);d = d.offset ? 0 : Y(d.lineWidth / 2) * 2;b[i] = y(b[i], d);
    }, getLinePath: function getLinePath(a) {
      var b = this.chart,
          c = this.opposite,
          d = this.offset,
          e = this.horiz,
          f = this.left + (c ? this.width : 0) + d,
          d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;c && (a *= -1);return b.renderer.crispLine([W, e ? this.left : f, e ? d : this.top, R, e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a);
    }, getTitlePosition: function getTitlePosition() {
      var a = this.horiz,
          b = this.left,
          c = this.top,
          d = this.len,
          e = this.options.title,
          f = a ? b : c,
          g = this.opposite,
          h = this.offset,
          i = e.x || 0,
          j = e.y || 0,
          k = this.chart.renderer.fontMetrics(e.style.fontSize).f,
          d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align],
          b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? k : 0);return { x: a ? d + i : b + (g ? this.width : 0) + h + i, y: a ? b + j - (g ? this.height : 0) + h : d + j };
    }, render: function render() {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d = a.options,
          e = a.isLog,
          f = a.lin2log,
          g = a.isLinked,
          h = a.tickPositions,
          i = a.axisTitle,
          j = a.ticks,
          k = a.minorTicks,
          l = a.alternateBands,
          m = d.stackLabels,
          n = d.alternateGridColor,
          p = a.tickmarkOffset,
          r = d.lineWidth,
          s,
          q = b.hasRendered && z(a.oldMin),
          u = a.showAxis,
          w = ib(c.globalAnimation),
          F,
          L;a.labelEdge.length = 0;a.overlap = !1;o([j, k, l], function (a) {
        for (var b in a) {
          a[b].isActive = !1;
        }
      });if (a.hasData() || g) {
        a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function (b) {
          k[b] || (k[b] = new eb(a, b, "minor"));q && k[b].isNew && k[b].render(null, !0);k[b].render(null, !1, 1);
        });if (h.length && (o(h, function (b, c) {
          if (!g || b >= a.min && b <= a.max) j[b] || (j[b] = new eb(a, b)), q && j[b].isNew && j[b].render(c, !0, 0.1), j[b].render(c);
        }), p && (a.min === 0 || a.single))) j[-1] || (j[-1] = new eb(a, -1, null, !0)), j[-1].render(-1);n && o(h, function (c, d) {
          L = h[d + 1] !== x ? h[d + 1] + p : a.max - p;if (d % 2 === 0 && c < a.max && L <= a.max + (b.polar ? -p : p)) l[c] || (l[c] = new B.PlotLineOrBand(a)), F = c + p, l[c].options = { from: e ? f(F) : F, to: e ? f(L) : L, color: n }, l[c].render(), l[c].isActive = !0;
        });if (!a._addedPlotLB) o((d.plotLines || []).concat(d.plotBands || []), function (b) {
          a.addPlotBandOrLine(b);
        }), a._addedPlotLB = !0;
      }o([j, k, l], function (a) {
        var c,
            d,
            e = [],
            f = w.duration;for (c in a) {
          if (!a[c].isActive) a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
        }bb(function () {
          for (d = e.length; d--;) {
            a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]]);
          }
        }, a === l || !b.hasRendered || !f ? 0 : f);
      });if (r) s = a.getLinePath(r), a.axisLine ? a.axisLine.animate({ d: s }) : a.axisLine = c.path(s).attr({ stroke: d.lineColor, "stroke-width": r, zIndex: 7 }).add(a.axisGroup), a.axisLine[u ? "show" : "hide"](!0);if (i && u) i[i.isNew ? "attr" : "animate"](a.getTitlePosition()), i.isNew = !1;m && m.enabled && a.renderStackTotals();a.isDirty = !1;
    }, redraw: function redraw() {
      this.visible && (this.render(), o(this.plotLinesAndBands, function (a) {
        a.render();
      }));o(this.series, function (a) {
        a.isDirty = !0;
      });
    }, destroy: function destroy(a) {
      var b = this,
          c = b.stacks,
          d,
          e = b.plotLinesAndBands;a || U(b);for (d in c) {
        Oa(c[d]), c[d] = null;
      }o([b.ticks, b.minorTicks, b.alternateBands], function (a) {
        Oa(a);
      });for (a = e.length; a--;) {
        e[a].destroy();
      }o("stackTotalGroup,axisLine,axisTitle,axisGroup,gridGroup,labelGroup,cross".split(","), function (a) {
        b[a] && (b[a] = b[a].destroy());
      });this._addedPlotLB = this.chart._labelPanes = this.ordinalSlope = void 0;
    }, drawCrosshair: function drawCrosshair(a, b) {
      var c,
          d = this.crosshair,
          e,
          f;a || (a = this.cross && this.cross.e);if (!this.crosshair || (t(b) || !q(d.snap, !0)) === !1) this.hideCrosshair();else if (q(d.snap, !0) ? t(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : q(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, c === null) this.hideCrosshair();else {
        e = this.categories && !this.isRadial;f = q(d.width, e ? this.transA : 1);if (this.cross) this.cross.attr({ d: c, visibility: "visible", "stroke-width": f });else {
          e = { "pointer-events": "none", "stroke-width": f, stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex: q(d.zIndex, 2) };if (d.dashStyle) e.dashstyle = d.dashStyle;this.cross = this.chart.renderer.path(c).attr(e).add();
        }this.cross.e = a;
      }
    }, hideCrosshair: function hideCrosshair() {
      this.cross && this.cross.hide();
    } };v(J.prototype, { getPlotBandPath: function getPlotBandPath(a, b) {
      var c = this.getPlotLinePath(b, null, null, !0),
          d = this.getPlotLinePath(a, null, null, !0);d && c ? (d.flat = d.toString() === c.toString(), d.push(c[4], c[5], c[1], c[2])) : d = null;return d;
    }, addPlotBand: function addPlotBand(a) {
      return this.addPlotBandOrLine(a, "plotBands");
    }, addPlotLine: function addPlotLine(a) {
      return this.addPlotBandOrLine(a, "plotLines");
    }, addPlotBandOrLine: function addPlotBandOrLine(a, b) {
      var c = new B.PlotLineOrBand(this, a).render(),
          d = this.userOptions;c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));return c;
    }, removePlotBandOrLine: function removePlotBandOrLine(a) {
      for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) {
        b[e].id === a && b[e].destroy();
      }o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
        for (e = b.length; e--;) {
          b[e].id === a && Ba(b, b[e]);
        }
      });
    } });J.prototype.getTimeTicks = function (a, b, c, d) {
    var e = [],
        f = {},
        g = Q.global.useUTC,
        h,
        i = new ea(b - gb(b)),
        j = a.unitRange,
        k = a.count;if (t(b)) {
      i[Rb](j >= N.second ? 0 : k * Y(i.getMilliseconds() / k));if (j >= N.second) i[Sb](j >= N.minute ? 0 : k * Y(i.getSeconds() / k));if (j >= N.minute) i[Tb](j >= N.hour ? 0 : k * Y(i[Eb]() / k));if (j >= N.hour) i[Ub](j >= N.day ? 0 : k * Y(i[Fb]() / k));if (j >= N.day) i[sb](j >= N.month ? 1 : k * Y(i[db]() / k));j >= N.month && (i[Hb](j >= N.year ? 0 : k * Y(i[jb]() / k)), h = i[kb]());j >= N.year && (h -= h % k, i[Ib](h));if (j === N.week) i[sb](i[db]() - i[Gb]() + q(d, 1));b = 1;if (Bb || hb) i = i.getTime(), i = new ea(i + gb(i));h = i[kb]();for (var d = i.getTime(), l = i[jb](), m = i[db](), n = !g || !!hb, p = (N.day + (g ? gb(i) : i.getTimezoneOffset() * 6E4)) % N.day; d < c;) {
        e.push(d), j === N.year ? d = rb(h + b * k, 0) : j === N.month ? d = rb(h, l + b * k) : n && (j === N.day || j === N.week) ? d = rb(h, l, m + b * k * (j === N.day ? 1 : 7)) : d += j * k, b++;
      }e.push(d);o(Ha(e, function (a) {
        return j <= N.hour && a % N.day === p;
      }), function (a) {
        f[a] = "day";
      });
    }e.info = v(a, { higherRanks: f, totalRange: j * k });return e;
  };J.prototype.normalizeTimeTickInterval = function (a, b) {
    var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
        d = c[c.length - 1],
        e = N[d[0]],
        f = d[1],
        g;for (g = 0; g < c.length; g++) {
      if (d = c[g], e = N[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + N[c[g + 1][0]]) / 2) break;
    }e === N.year && a < 5 * e && (f = [1, 2, 5]);c = Db(a / e, f, d[0] === "year" ? y(Cb(a / e), 1) : 1);return { unitRange: e, count: c, unitName: d[0] };
  };J.prototype.getLogTickPositions = function (a, b, c, d) {
    var e = this.options,
        f = this.len,
        g = this.lin2log,
        h = this.log2lin,
        i = [];if (!d) this._minorAutoInterval = null;if (a >= 0.5) a = A(a), i = this.getLinearTickPositions(a, b, c);else if (a >= 0.08) for (var f = Y(b), j, k, l, m, n, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !n; f++) {
      k = e.length;for (j = 0; j < k && !n; j++) {
        l = h(g(f) * e[j]), l > b && (!d || m <= c) && m !== x && i.push(m), m > c && (n = !0), m = l;
      }
    } else if (b = g(b), c = g(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = q(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = Db(a, null, Cb(a)), i = wa(this.getLinearTickPositions(a, b, c), h), !d) this._minorAutoInterval = a / 5;if (!d) this.tickInterval = a;return i;
  };J.prototype.log2lin = function (a) {
    return aa.log(a) / aa.LN10;
  };J.prototype.lin2log = function (a) {
    return aa.pow(10, a);
  };
  var Nb = B.Tooltip = function () {
    this.init.apply(this, arguments);
  };Nb.prototype = { init: function init(a, b) {
      var c = b.borderWidth,
          d = b.style,
          e = H(d.padding);this.chart = a;this.options = b;this.crosshairs = [];this.now = { x: 0, y: 0 };this.isHidden = !0;this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({ padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8 }).css(d).css({ padding: 0 }).add().attr({ y: -9E9 });ua || this.label.shadow(b.shadow);this.shared = b.shared;
    }, destroy: function destroy() {
      if (this.label) this.label = this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout);
    }, move: function move(a, b, c, d) {
      var e = this,
          f = e.now,
          g = e.options.animation !== !1 && !e.isHidden && (T(a - f.x) > 1 || T(b - f.y) > 1),
          h = e.followPointer || e.len > 1;v(f, { x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: h ? x : g ? (2 * f.anchorX + c) / 3 : c, anchorY: h ? x : g ? (f.anchorY + d) / 2 : d });e.label.attr(f);if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
        e && e.move(a, b, c, d);
      }, 32);
    }, hide: function hide(a) {
      var b = this;clearTimeout(this.hideTimer);
      a = q(a, this.options.hideDelay, 500);if (!this.isHidden) this.hideTimer = bb(function () {
        b.label[a ? "fadeOut" : "hide"]();b.isHidden = !0;
      }, a);
    }, getAnchor: function getAnchor(a, b) {
      var c,
          d = this.chart,
          e = d.inverted,
          f = d.plotTop,
          g = d.plotLeft,
          h = 0,
          i = 0,
          j,
          k,
          a = sa(a);c = a[0].tooltipPos;this.followPointer && b && (b.chartX === x && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);c || (o(a, function (a) {
        j = a.series.yAxis;k = a.series.xAxis;h += a.plotX + (!e && k ? k.left - g : 0);i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0);
      }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);return wa(c, A);
    }, getPosition: function getPosition(a, b, c) {
      var d = this.chart,
          e = this.distance,
          f = {},
          g = c.h || 0,
          h,
          i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
          j = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
          k = !this.followPointer && q(c.ttBelow, !d.inverted === !!c.negative),
          l = function l(a, b, c, d, h, i) {
        var j = c < d - e,
            m = d + e + c < b,
            l = d - e - c;d += e;if (k && m) f[a] = d;else if (!k && j) f[a] = l;else if (j) f[a] = E(i - c, l - g < 0 ? l : l - g);else if (m) f[a] = y(h, d + g + c > b ? d : d + g);else return !1;
      },
          m = function m(a, b, c, d) {
        var g;d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;return g;
      },
          n = function n(a) {
        var b = i;i = j;j = b;h = a;
      },
          p = function p() {
        l.apply(0, i) !== !1 ? m.apply(0, j) === !1 && !h && (n(!0), p()) : h ? f.x = f.y = 0 : (n(!0), p());
      };(d.inverted || this.len > 1) && n();p();return f;
    }, defaultFormatter: function defaultFormatter(a) {
      var b = this.points || sa(this),
          c;c = [a.tooltipFooterHeaderFormatter(b[0])];c = c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0], !0));return c.join("");
    }, refresh: function refresh(a, b) {
      var c = this.chart,
          d = this.label,
          e = this.options,
          f,
          g,
          h,
          i = {},
          j,
          k = [];j = e.formatter || this.defaultFormatter;var i = c.hoverPoints,
          l,
          m = this.shared;clearTimeout(this.hideTimer);this.followPointer = sa(a)[0].series.tooltipOptions.followPointer;h = this.getAnchor(a, b);f = h[0];g = h[1];m && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && o(i, function (a) {
        a.setState();
      }), o(a, function (a) {
        a.setState("hover");k.push(a.getLabelConfig());
      }), i = { x: a[0].category, y: a[0].y }, i.points = k, this.len = k.length, a = a[0]) : i = a.getLabelConfig();j = j.call(i, this);i = a.series;this.distance = q(i.tooltipOptions.distance, 16);j === !1 ? this.hide() : (this.isHidden && (Qa(d), d.attr("opacity", 1).show()), d.attr({ text: j }), l = e.borderColor || a.color || i.color || "#606060", d.attr({ stroke: l }), this.updatePosition({ plotX: f, plotY: g, negative: a.negative, ttBelow: a.ttBelow, h: h[2] || 0 }), this.isHidden = !1);K(c, "tooltipRefresh", { text: j, x: f + c.plotLeft, y: g + c.plotTop, borderColor: l });
    }, updatePosition: function updatePosition(a) {
      var b = this.chart,
          c = this.label,
          c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);this.move(A(c.x), A(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop);
    }, getXDateFormat: function getXDateFormat(a, b, c) {
      var d,
          b = b.dateTimeLabelFormats,
          e = c && c.closestPointRange,
          f,
          g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
          h,
          i = "millisecond";if (e) {
        h = pa("%m-%d %H:%M:%S.%L", a.x);for (f in N) {
          if (e === N.week && +pa("%w", a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
            f = "week";break;
          }if (N[f] > e) {
            f = i;break;
          }if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
          f !== "week" && (i = f);
        }f && (d = b[f]);
      } else d = b.day;return d || b.year;
    }, tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(a, b) {
      var c = b ? "footer" : "header",
          d = a.series,
          e = d.tooltipOptions,
          f = e.xDateFormat,
          g = d.xAxis,
          h = g && g.options.type === "datetime" && z(a.key),
          c = e[c + "Format"];h && !f && (f = this.getXDateFormat(a, e, g));h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));return Ma(c, { point: a, series: d });
    }, bodyFormatter: function bodyFormatter(a) {
      return wa(a, function (a) {
        var c = a.series.tooltipOptions;return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat);
      });
    } };var ra;$a = C && C.documentElement.ontouchstart !== x;var ab = B.Pointer = function (a, b) {
    this.init(a, b);
  };ab.prototype = { init: function init(a, b) {
      var c = b.chart,
          d = c.events,
          e = ua ? "" : c.zoomType,
          c = a.inverted,
          f;this.options = b;this.chart = a;this.zoomX = f = /x/.test(e);this.zoomY = e = /y/.test(e);this.zoomHor = f && !c || e && c;this.zoomVert = e && !c || f && c;this.hasZoom = f || e;this.runChartClick = d && !!d.click;this.pinchDown = [];this.lastValidTouch = {};if (B.Tooltip && b.tooltip.enabled) a.tooltip = new Nb(a, b.tooltip), this.followTouchMove = q(b.tooltip.followTouchMove, !0);this.setDOMEvents();
    }, normalize: function normalize(a, b) {
      var c,
          d,
          a = a || M.event;if (!a.target) a.target = a.srcElement;d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;if (!b) this.chartPosition = b = Mb(this.chart.container);d.pageX === x ? (c = y(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);return v(a, { chartX: A(c), chartY: A(d) });
    }, getCoordinates: function getCoordinates(a) {
      var b = { xAxis: [], yAxis: [] };o(this.chart.axes, function (c) {
        b[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"]) });
      });return b;
    }, runPointActions: function runPointActions(a) {
      var b = this.chart,
          c = b.series,
          d = b.tooltip,
          e = d ? d.shared : !1,
          f = b.hoverPoint,
          g = b.hoverSeries,
          h,
          i = [Number.MAX_VALUE, Number.MAX_VALUE],
          j,
          k,
          l = [],
          m = [],
          n;if (!e && !g) for (h = 0; h < c.length; h++) {
        if (c[h].directTouch || !c[h].options.stickyTracking) c = [];
      }g && (e ? g.noSharedTooltip : g.directTouch) && f ? m = [f] : (o(c, function (b) {
        j = b.noSharedTooltip && e;k = !e && b.directTouch;b.visible && !j && !k && q(b.options.enableMouseTracking, !0) && (n = b.searchPoint(a, !j && b.kdDimensions === 1)) && n.series && l.push(n);
      }), o(l, function (a) {
        a && o(["dist", "distX"], function (b, c) {
          if (z(a[b])) {
            var d = a[b] === i[c] && a.series.group.zIndex >= m[c].series.group.zIndex;if (a[b] < i[c] || d) i[c] = a[b], m[c] = a;
          }
        });
      }));if (e) for (h = l.length; h--;) {
        (l[h].clientX !== m[1].clientX || l[h].series.noSharedTooltip) && l.splice(h, 1);
      }if (m[0] && (m[0] !== this.prevKDPoint || d && d.isHidden)) {
        if (e && !m[0].series.noSharedTooltip) l.length && d && d.refresh(l, a), o(l, function (b) {
          b.onMouseOver(a, b !== (g && g.directTouch && f || m[0]));
        }), this.prevKDPoint = m[1];else {
          d && d.refresh(m[0], a);if (!g || !g.directTouch) m[0].onMouseOver(a);this.prevKDPoint = m[0];
        }
      } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({ plotX: c[0], plotY: c[1] }));if (!this._onDocumentMouseMove) this._onDocumentMouseMove = function (a) {
        if (ca[ra]) ca[ra].pointer.onDocumentMouseMove(a);
      }, G(C, "mousemove", this._onDocumentMouseMove);o(e ? l : [q(f, m[1])], function (c) {
        o(b.axes, function (b) {
          (!c || c.series[b.coll] === b) && b.drawCrosshair(a, c);
        });
      });
    }, reset: function reset(a, b) {
      var c = this.chart,
          d = c.hoverSeries,
          e = c.hoverPoint,
          f = c.hoverPoints,
          g = c.tooltip,
          h = g && g.shared ? f : e;a && h && o(sa(h), function (b) {
        b.series.isCartesian && b.plotX === void 0 && (a = !1);
      });if (a) g && h && (g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function (a) {
        a.crosshair && a.drawCrosshair(null, e);
      })));else {
        if (e) e.onMouseOut();f && o(f, function (a) {
          a.setState();
        });if (d) d.onMouseOut();g && g.hide(b);if (this._onDocumentMouseMove) U(C, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;o(c.axes, function (a) {
          a.hideCrosshair();
        });
        this.hoverX = this.prevKDPoint = c.hoverPoints = c.hoverPoint = null;
      }
    }, scaleGroups: function scaleGroups(a, b) {
      var c = this.chart,
          d;o(c.series, function (e) {
        d = a || e.getPlotBox();e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d));
      });c.clipRect.attr(b || c.clipBox);
    }, dragStart: function dragStart(a) {
      var b = this.chart;b.mouseIsDown = a.type;b.cancelClick = !1;b.mouseDownX = this.mouseDownX = a.chartX;b.mouseDownY = this.mouseDownY = a.chartY;
    },
    drag: function drag(a) {
      var b = this.chart,
          c = b.options.chart,
          d = a.chartX,
          e = a.chartY,
          f = this.zoomHor,
          g = this.zoomVert,
          h = b.plotLeft,
          i = b.plotTop,
          j = b.plotWidth,
          k = b.plotHeight,
          l,
          m = this.selectionMarker,
          n = this.mouseDownX,
          p = this.mouseDownY,
          r = c.panKey && a[c.panKey + "Key"];if (!m || !m.touch) if (d < h ? d = h : d > h + j && (d = h + j), e < i ? e = i : e > i + k && (e = i + k), this.hasDragged = Math.sqrt(Math.pow(n - d, 2) + Math.pow(p - e, 2)), this.hasDragged > 10) {
        l = b.isInsidePlot(n - h, p - i);if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !r && !m) this.selectionMarker = m = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({ fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7 }).add();m && f && (d -= n, m.attr({ width: T(d), x: (d > 0 ? 0 : d) + n }));m && g && (d = e - p, m.attr({ height: T(d), y: (d > 0 ? 0 : d) + p }));l && !m && c.panning && b.pan(a, c.panning);
      }
    }, drop: function drop(a) {
      var b = this,
          c = this.chart,
          d = this.hasPinched;if (this.selectionMarker) {
        var e = { originalEvent: a, xAxis: [], yAxis: [] },
            f = this.selectionMarker,
            g = f.attr ? f.attr("x") : f.x,
            h = f.attr ? f.attr("y") : f.y,
            i = f.attr ? f.attr("width") : f.width,
            j = f.attr ? f.attr("height") : f.height,
            k;if (this.hasDragged || d) o(c.axes, function (c) {
          if (c.zoomEnabled && t(c.min) && (d || b[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]])) {
            var f = c.horiz,
                n = a.type === "touchend" ? c.minPixelPadding : 0,
                p = c.toValue((f ? g : h) + n),
                f = c.toValue((f ? g + i : h + j) - n);e[c.coll].push({ axis: c, min: E(p, f), max: y(p, f) });k = !0;
          }
        }), k && K(c, "selection", e, function (a) {
          c.zoom(v(a, d ? { animation: !1 } : null));
        });this.selectionMarker = this.selectionMarker.destroy();d && this.scaleGroups();
      }if (c) O(c.container, { cursor: c._cursor }), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [];
    }, onContainerMouseDown: function onContainerMouseDown(a) {
      a = this.normalize(a);a.preventDefault && a.preventDefault();this.dragStart(a);
    }, onDocumentMouseUp: function onDocumentMouseUp(a) {
      ca[ra] && ca[ra].pointer.drop(a);
    }, onDocumentMouseMove: function onDocumentMouseMove(a) {
      var b = this.chart,
          c = this.chartPosition,
          a = this.normalize(a, c);c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset();
    }, onContainerMouseLeave: function onContainerMouseLeave(a) {
      var b = ca[ra];
      if (b && (a.relatedTarget || a.toElement)) b.pointer.reset(), b.pointer.chartPosition = null;
    }, onContainerMouseMove: function onContainerMouseMove(a) {
      var b = this.chart;if (!t(ra) || !ca[ra] || !ca[ra].mouseIsDown) ra = b.index;a = this.normalize(a);a.returnValue = !1;b.mouseIsDown === "mousedown" && this.drag(a);(this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a);
    }, inClass: function inClass(a, b) {
      for (var c; a;) {
        if (c = $(a, "class")) {
          if (c.indexOf(b) !== -1) return !0;if (c.indexOf("highcharts-container") !== -1) return !1;
        }a = a.parentNode;
      }
    }, onTrackerMouseOut: function onTrackerMouseOut(a) {
      var b = this.chart.hoverSeries,
          a = a.relatedTarget || a.toElement;if (b && a && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut();
    }, onContainerClick: function onContainerClick(a) {
      var b = this.chart,
          c = b.hoverPoint,
          d = b.plotLeft,
          e = b.plotTop,
          a = this.normalize(a);b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (K(c.series, "click", v(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (v(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && K(b, "click", a)));
    }, setDOMEvents: function setDOMEvents() {
      var a = this,
          b = a.chart.container;b.onmousedown = function (b) {
        a.onContainerMouseDown(b);
      };b.onmousemove = function (b) {
        a.onContainerMouseMove(b);
      };b.onclick = function (b) {
        a.onContainerClick(b);
      };G(b, "mouseleave", a.onContainerMouseLeave);mb === 1 && G(C, "mouseup", a.onDocumentMouseUp);if ($a) b.ontouchstart = function (b) {
        a.onContainerTouchStart(b);
      }, b.ontouchmove = function (b) {
        a.onContainerTouchMove(b);
      }, mb === 1 && G(C, "touchend", a.onDocumentTouchEnd);
    }, destroy: function destroy() {
      var a;U(this.chart.container, "mouseleave", this.onContainerMouseLeave);mb || (U(C, "mouseup", this.onDocumentMouseUp), U(C, "touchend", this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for (a in this) {
        this[a] = null;
      }
    } };v(B.Pointer.prototype, { pinchTranslate: function pinchTranslate(a, b, c, d, e, f) {
      (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);(this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f);
    }, pinchTranslateDirection: function pinchTranslateDirection(a, b, c, d, e, f, g, h) {
      var i = this.chart,
          j = a ? "x" : "y",
          k = a ? "X" : "Y",
          l = "chart" + k,
          m = a ? "width" : "height",
          n = i["plot" + (a ? "Left" : "Top")],
          p,
          r,
          s = h || 1,
          q = i.inverted,
          o = i.bounds[a ? "h" : "v"],
          w = b.length === 1,
          F = b[0][l],
          L = c[0][l],
          t = !w && b[1][l],
          y = !w && c[1][l],
          x,
          c = function c() {
        !w && T(F - t) > 20 && (s = h || T(L - y) / T(F - t));r = (n - L) / s + F;p = i["plot" + (a ? "Width" : "Height")] / s;
      };c();b = r;b < o.min ? (b = o.min, x = !0) : b + p > o.max && (b = o.max - p, x = !0);x ? (L -= 0.8 * (L - g[j][0]), w || (y -= 0.8 * (y - g[j][1])), c()) : g[j] = [L, y];q || (f[j] = r - n, f[m] = p);f = q ? 1 / s : s;e[m] = p;e[j] = b;d[q ? a ? "scaleY" : "scaleX" : "scale" + k] = s;d["translate" + k] = f * n + (L - f * F);
    }, pinch: function pinch(a) {
      var b = this,
          c = b.chart,
          d = b.pinchDown,
          e = a.touches,
          f = e.length,
          g = b.lastValidTouch,
          h = b.hasZoom,
          i = b.selectionMarker,
          j = {},
          k = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
          l = {};if (f > 1) b.initiated = !0;h && b.initiated && !k && a.preventDefault();wa(e, function (a) {
        return b.normalize(a);
      });if (a.type === "touchstart") o(e, function (a, b) {
        d[b] = { chartX: a.chartX, chartY: a.chartY };
      }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes, function (a) {
        if (a.zoomEnabled) {
          var b = c.bounds[a.horiz ? "h" : "v"],
              d = a.minPixelPadding,
              e = a.toPixels(q(a.options.min, a.dataMin)),
              f = a.toPixels(q(a.options.max, a.dataMax)),
              g = E(e, f),
              e = y(e, f);b.min = E(a.pos, g - d);b.max = y(a.pos + a.len, e + d);
        }
      }), b.res = !0;else if (d.length) {
        if (!i) b.selectionMarker = i = v({ destroy: va, touch: !0 }, c.plotBox);b.pinchTranslate(d, e, j, i, l, g);b.hasPinched = h;b.scaleGroups(j, l);if (!h && b.followTouchMove && f === 1) this.runPointActions(b.normalize(a));else if (b.res) b.res = !1, this.reset(!1, 0);
      }
    }, touch: function touch(a, b) {
      var c = this.chart,
          d;ra = c.index;if (a.touches.length === 1) {
        if (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu) {
          b && this.runPointActions(a);if (a.type === "touchmove") c = this.pinchDown, d = c[0] ? Math.sqrt(Math.pow(c[0].chartX - a.chartX, 2) + Math.pow(c[0].chartY - a.chartY, 2)) >= 4 : !1;q(d, !0) && this.pinch(a);
        } else b && this.reset();
      } else a.touches.length === 2 && this.pinch(a);
    }, onContainerTouchStart: function onContainerTouchStart(a) {
      this.touch(a, !0);
    }, onContainerTouchMove: function onContainerTouchMove(a) {
      this.touch(a);
    },
    onDocumentTouchEnd: function onDocumentTouchEnd(a) {
      ca[ra] && ca[ra].pointer.drop(a);
    } });if (M.PointerEvent || M.MSPointerEvent) {
    var Ia = {},
        Ob = !!M.PointerEvent,
        dc = function dc() {
      var a,
          b = [];b.item = function (a) {
        return this[a];
      };for (a in Ia) {
        Ia.hasOwnProperty(a) && b.push({ pageX: Ia[a].pageX, pageY: Ia[a].pageY, target: Ia[a].target });
      }return b;
    },
        Pb = function Pb(a, b, c, d) {
      if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && ca[ra]) d(a), d = ca[ra].pointer, d[b]({ type: c, target: a.currentTarget, preventDefault: va, touches: dc() });
    };v(ab.prototype, { onContainerPointerDown: function onContainerPointerDown(a) {
        Pb(a, "onContainerTouchStart", "touchstart", function (a) {
          Ia[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget };
        });
      }, onContainerPointerMove: function onContainerPointerMove(a) {
        Pb(a, "onContainerTouchMove", "touchmove", function (a) {
          Ia[a.pointerId] = { pageX: a.pageX, pageY: a.pageY };if (!Ia[a.pointerId].target) Ia[a.pointerId].target = a.currentTarget;
        });
      }, onDocumentPointerUp: function onDocumentPointerUp(a) {
        Pb(a, "onDocumentTouchEnd", "touchend", function (a) {
          delete Ia[a.pointerId];
        });
      }, batchMSEvents: function batchMSEvents(a) {
        a(this.chart.container, Ob ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);a(this.chart.container, Ob ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);a(C, Ob ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
      } });S(ab.prototype, "init", function (a, b, c) {
      a.call(this, b, c);this.hasZoom && O(b.container, { "-ms-touch-action": "none", "touch-action": "none" });
    });S(ab.prototype, "setDOMEvents", function (a) {
      a.apply(this);(this.hasZoom || this.followTouchMove) && this.batchMSEvents(G);
    });S(ab.prototype, "destroy", function (a) {
      this.batchMSEvents(U);
      a.call(this);
    });
  }var xb = B.Legend = function (a, b) {
    this.init(a, b);
  };xb.prototype = { init: function init(a, b) {
      var c = this,
          d = b.itemStyle,
          e = b.itemMarginTop || 0;this.options = b;if (b.enabled) c.itemStyle = d, c.itemHiddenStyle = D(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = q(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = q(b.symbolWidth, 16), c.pages = [], c.render(), G(c.chart, "endResize", function () {
        c.positionCheckboxes();
      });
    }, colorizeItem: function colorizeItem(a, b) {
      var c = this.options,
          d = a.legendItem,
          e = a.legendLine,
          f = a.legendSymbol,
          g = this.itemHiddenStyle.color,
          c = b ? c.itemStyle.color : g,
          h = b ? a.legendColor || a.color || "#CCC" : g,
          g = a.options && a.options.marker,
          i = { fill: h },
          j;d && d.css({ fill: c, color: c });e && e.attr({ stroke: h });if (f) {
        if (g && f.isMarker) for (j in i.stroke = h, g = a.convertAttribs(g), g) {
          d = g[j], d !== x && (i[j] = d);
        }f.attr(i);
      }
    }, positionItem: function positionItem(a) {
      var b = this.options,
          c = b.symbolPadding,
          b = !b.rtl,
          d = a._legendItemPos,
          e = d[0],
          d = d[1],
          f = a.checkbox;(a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);if (f) f.x = e, f.y = d;
    }, destroyItem: function destroyItem(a) {
      var b = a.checkbox;o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
        a[b] && (a[b] = a[b].destroy());
      });b && Wa(a.checkbox);
    }, destroy: function destroy() {
      var a = this.group,
          b = this.box;if (b) this.box = b.destroy();if (a) this.group = a.destroy();
    }, positionCheckboxes: function positionCheckboxes(a) {
      var b = this.group.alignAttr,
          c,
          d = this.clipHeight || this.legendHeight,
          e = this.titleHeight;if (b) c = b.translateY, o(this.allItems, function (f) {
        var g = f.checkbox,
            h;g && (h = c + e + g.y + (a || 0) + 3, O(g, { left: b.translateX + f.checkboxOffset + g.x - 20 + "px", top: h + "px", display: h > c - 6 && h < c + d - 6 ? "" : "none" }));
      });
    }, renderTitle: function renderTitle() {
      var a = this.padding,
          b = this.options.title,
          c = 0;if (b.text) {
        if (!this.title) this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group);a = this.title.getBBox();c = a.height;this.offsetWidth = a.width;this.contentGroup.attr({ translateY: c });
      }this.titleHeight = c;
    }, setText: function setText(a) {
      var b = this.options;a.legendItem.attr({ text: b.labelFormat ? Ma(b.labelFormat, a) : b.labelFormatter.call(a) });
    }, renderItem: function renderItem(a) {
      var b = this.chart,
          c = b.renderer,
          d = this.options,
          e = d.layout === "horizontal",
          f = this.symbolWidth,
          g = d.symbolPadding,
          h = this.itemStyle,
          i = this.itemHiddenStyle,
          j = this.padding,
          k = e ? q(d.itemDistance, 20) : 0,
          l = !d.rtl,
          m = d.width,
          n = d.itemMarginBottom || 0,
          p = this.itemMarginTop,
          r = this.initialItemX,
          s = a.legendItem,
          o = a.series && a.series.drawLegendSymbol ? a.series : a,
          u = o.options,
          u = this.createCheckboxForItem && u && u.showCheckbox,
          w = d.useHTML;if (!s) {
        a.legendGroup = c.g("legend-item").attr({ zIndex: 1 }).add(this.scrollGroup);a.legendItem = s = c.text("", l ? f + g : -g, this.baseline || 0, w).css(D(a.visible ? h : i)).attr({ align: l ? "left" : "right", zIndex: 2 }).add(a.legendGroup);if (!this.baseline) this.fontMetrics = c.fontMetrics(h.fontSize, s), this.baseline = this.fontMetrics.f + 3 + p, s.attr("y", this.baseline);o.drawLegendSymbol(this, a);this.setItemEvents && this.setItemEvents(a, s, w, h, i);u && this.createCheckboxForItem(a);
      }this.colorizeItem(a, a.visible);this.setText(a);c = s.getBBox();f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (u ? 20 : 0);this.itemHeight = g = A(a.legendItemHeight || c.height);if (e && this.itemX - r + f > (m || b.chartWidth - 2 * j - r - d.x)) this.itemX = r, this.itemY += p + this.lastLineHeight + n, this.lastLineHeight = 0;this.maxItemWidth = y(this.maxItemWidth, f);this.lastItemY = p + this.itemY + n;this.lastLineHeight = y(g, this.lastLineHeight);a._legendItemPos = [this.itemX, this.itemY];e ? this.itemX += f : (this.itemY += p + g + n, this.lastLineHeight = g);this.offsetWidth = m || y((e ? this.itemX - r - k : f) + j, this.offsetWidth);
    },
    getAllItems: function getAllItems() {
      var a = [];o(this.chart.series, function (b) {
        var c = b.options;if (q(c.showInLegend, !t(c.linkedTo) ? x : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b));
      });return a;
    }, adjustMargins: function adjustMargins(a, b) {
      var c = this.chart,
          d = this.options,
          e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);d.floating || o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (f, g) {
        f.test(e) && !t(a[g]) && (c[wb[g]] = y(c[wb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + q(d.margin, 12) + b[g]));
      });
    }, render: function render() {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d = a.group,
          e,
          f,
          g,
          h,
          i = a.box,
          j = a.options,
          k = a.padding,
          l = j.borderWidth,
          m = j.backgroundColor;a.itemX = a.initialItemX;a.itemY = a.initialItemY;a.offsetWidth = 0;a.lastItemY = 0;if (!d) a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup);a.renderTitle();e = a.getAllItems();pb(e, function (a, b) {
        return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
      });j.reversed && e.reverse();a.allItems = e;a.display = f = !!e.length;a.lastLineHeight = 0;o(e, function (b) {
        a.renderItem(b);
      });g = (j.width || a.offsetWidth) + k;h = a.lastItemY + a.lastLineHeight + a.titleHeight;h = a.handleOverflow(h);h += k;if (l || m) {
        if (i) {
          if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({ width: g, height: h })), i.isNew = !1;
        } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({ stroke: j.borderColor, "stroke-width": l || 0, fill: m || "none" }).add(d).shadow(j.shadow), i.isNew = !0;i[f ? "show" : "hide"]();
      }a.legendWidth = g;a.legendHeight = h;o(e, function (b) {
        a.positionItem(b);
      });f && d.align(v({ width: g, height: h }, j), !0, "spacingBox");b.isResizing || this.positionCheckboxes();
    }, handleOverflow: function handleOverflow(a) {
      var b = this,
          c = this.chart,
          d = c.renderer,
          e = this.options,
          f = e.y,
          f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
          g = e.maxHeight,
          h,
          i = this.clipRect,
          j = e.navigation,
          k = q(j.animation, !0),
          l = j.arrowSize || 12,
          m = this.nav,
          n = this.pages,
          p = this.padding,
          r,
          s = this.allItems,
          Z = function Z(a) {
        i.attr({ height: a });
        if (b.contentGroup.div) b.contentGroup.div.style.clip = "rect(" + p + "px,9999px," + (p + a) + "px,0)";
      };e.layout === "horizontal" && (f /= 2);g && (f = E(f, g));n.length = 0;if (a > f && j.enabled !== !1) {
        this.clipHeight = h = y(f - 20 - this.titleHeight - p, 0);this.currentPage = q(this.currentPage, 1);this.fullHeight = a;o(s, function (a, b) {
          var c = a._legendItemPos[1],
              d = A(a.legendItem.getBBox().height),
              e = n.length;if (!e || c - n[e - 1] > h && (r || c) !== n[e - 1]) n.push(r || c), e++;b === s.length - 1 && c + d - n[e - 1] > h && n.push(c);c !== r && (r = c);
        });if (!i) i = b.clipRect = d.clipRect(0, p, 9999, 0), b.contentGroup.clip(i);Z(h);if (!m) this.nav = m = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function () {
          b.scroll(-1, k);
        }).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function () {
          b.scroll(1, k);
        }).add(m);b.scroll(0);a = f;
      } else if (m) Z(c.chartHeight), m.hide(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0;return a;
    }, scroll: function scroll(a, b) {
      var c = this.pages,
          d = c.length,
          e = this.currentPage + a,
          f = this.clipHeight,
          g = this.options.navigation,
          h = g.activeColor,
          g = g.inactiveColor,
          i = this.pager,
          j = this.padding;e > d && (e = d);if (e > 0) b !== x && cb(b, this.chart), this.nav.attr({ translateX: j, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ fill: e === 1 ? g : h }).css({ cursor: e === 1 ? "default" : "pointer" }), i.attr({ text: e + "/" + d }), this.down.attr({ x: 18 + this.pager.getBBox().width, fill: e === d ? g : h }).css({ cursor: e === d ? "default" : "pointer" }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = e, this.positionCheckboxes(c);
    } };da = B.LegendSymbolMixin = { drawRectangle: function drawRectangle(a, b) {
      var c = a.options.symbolHeight || a.fontMetrics.f;b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({ zIndex: 3 }).add(b.legendGroup);
    }, drawLineMarker: function drawLineMarker(a) {
      var b = this.options,
          c = b.marker,
          d = a.symbolWidth,
          e = this.chart.renderer,
          f = this.legendGroup,
          a = a.baseline - A(a.fontMetrics.b * 0.3),
          g;if (b.lineWidth) {
        g = { "stroke-width": b.lineWidth };if (b.dashStyle) g.dashstyle = b.dashStyle;this.legendLine = e.path([W, 0, a, R, d, a]).attr(g).add(f);
      }if (c && c.enabled !== !1) b = c.radius, this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0;
    } };(/Trident\/7\.0/.test(Pa) || Ya) && S(xb.prototype, "positionItem", function (a, b) {
    var c = this,
        d = function d() {
      b._legendItemPos && a.call(c, b);
    };d();setTimeout(d);
  });var Da = B.Chart = function () {
    this.getArgs.apply(this, arguments);
  };B.chart = function (a, b, c) {
    return new Da(a, b, c);
  };Da.prototype = { callbacks: [], getArgs: function getArgs() {
      var a = [].slice.call(arguments);
      if (Ea(a[0]) || a[0].nodeName) this.renderTo = a.shift();this.init(a[0], a[1]);
    }, init: function init(a, b) {
      var c,
          d = a.series;a.series = null;c = D(Q, a);c.series = a.series = d;this.userOptions = a;d = c.chart;this.margin = this.splashArray("margin", d);this.spacing = this.splashArray("spacing", d);var e = d.events;this.bounds = { h: {}, v: {} };this.callback = b;this.isResizing = 0;this.options = c;this.axes = [];this.series = [];this.hasCartesianSeries = d.showAxes;var f = this,
          g;f.index = ca.length;ca.push(f);mb++;d.reflow !== !1 && G(f, "load", function () {
        f.initReflow();
      });
      if (e) for (g in e) {
        G(f, g, e[g]);
      }f.xAxis = [];f.yAxis = [];f.animation = ua ? !1 : q(d.animation, !0);f.pointCount = f.colorCounter = f.symbolCounter = 0;f.firstRender();
    }, initSeries: function initSeries(a) {
      var b = this.options.chart;(b = I[a.type || b.type || b.defaultSeriesType]) || ja(17, !0);b = new b();b.init(this, a);return b;
    }, isInsidePlot: function isInsidePlot(a, b, c) {
      var d = c ? b : a,
          a = c ? a : b;return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight;
    }, redraw: function redraw(a) {
      var b = this.axes,
          c = this.series,
          d = this.pointer,
          e = this.legend,
          f = this.isDirtyLegend,
          g,
          h,
          i = this.hasCartesianSeries,
          j = this.isDirtyBox,
          k = c.length,
          l = k,
          m = this.renderer,
          n = m.isHidden(),
          p = [];cb(a, this);n && this.cloneRenderTo();for (this.layOutTitles(); l--;) {
        if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
          h = !0;break;
        }
      }if (h) for (l = k; l--;) {
        if (a = c[l], a.options.stacking) a.isDirty = !0;
      }o(c, function (a) {
        a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0);a.isDirtyData && K(a, "updatedData");
      });if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;g && this.getStacks();if (i && !this.isResizing) this.maxTicks = null, o(b, function (a) {
        a.setScale();
      });this.getMargins();i && (o(b, function (a) {
        a.isDirty && (j = !0);
      }), o(b, function (a) {
        var b = a.min + "," + a.max;if (a.extKey !== b) a.extKey = b, p.push(function () {
          K(a, "afterSetExtremes", v(a.eventArgs, a.getExtremes()));delete a.eventArgs;
        });(j || g) && a.redraw();
      }));j && this.drawChartBox();o(c, function (a) {
        a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw();
      });d && d.reset(!0);m.draw();K(this, "redraw");n && this.cloneRenderTo(!0);o(p, function (a) {
        a.call();
      });
    }, get: function get(a) {
      var b = this.axes,
          c = this.series,
          d,
          e;for (d = 0; d < b.length; d++) {
        if (b[d].options.id === a) return b[d];
      }for (d = 0; d < c.length; d++) {
        if (c[d].options.id === a) return c[d];
      }for (d = 0; d < c.length; d++) {
        e = c[d].points || [];for (b = 0; b < e.length; b++) {
          if (e[b].id === a) return e[b];
        }
      }return null;
    }, getAxes: function getAxes() {
      var a = this,
          b = this.options,
          c = b.xAxis = sa(b.xAxis || {}),
          b = b.yAxis = sa(b.yAxis || {});o(c, function (a, b) {
        a.index = b;a.isX = !0;
      });o(b, function (a, b) {
        a.index = b;
      });c = c.concat(b);o(c, function (b) {
        new J(a, b);
      });
    }, getSelectedPoints: function getSelectedPoints() {
      var a = [];o(this.series, function (b) {
        a = a.concat(Ha(b.points || [], function (a) {
          return a.selected;
        }));
      });return a;
    }, getSelectedSeries: function getSelectedSeries() {
      return Ha(this.series, function (a) {
        return a.selected;
      });
    }, setTitle: function setTitle(a, b, c) {
      var g;var d = this,
          e = d.options,
          f;f = e.title = D(e.title, a);g = e.subtitle = D(e.subtitle, b), e = g;o([["title", a, f], ["subtitle", b, e]], function (a) {
        var b = a[0],
            c = d[b],
            e = a[1],
            a = a[2];c && e && (d[b] = c = c.destroy());a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add());
      });d.layOutTitles(c);
    }, layOutTitles: function layOutTitles(a) {
      var b = 0,
          c = this.title,
          d = this.subtitle,
          e = this.options,
          f = e.title,
          e = e.subtitle,
          g = this.renderer,
          h = this.spacingBox;if (c && (c.css({ width: (f.width || h.width + f.widthAdjust) + "px" }).align(v({ y: g.fontMetrics(f.style.fontSize, c).b - 3 }, f), !1, h), !f.floating && !f.verticalAlign)) b = c.getBBox().height;d && (d.css({ width: (e.width || h.width + e.widthAdjust) + "px" }).align(v({ y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b }, e), !1, h), !e.floating && !e.verticalAlign && (b = Ga(b + d.getBBox().height)));c = this.titleOffset !== b;this.titleOffset = b;if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered && q(a, !0) && this.isDirtyBox && this.redraw();
    }, getChartSize: function getChartSize() {
      var a = this.options.chart,
          b = a.width,
          a = a.height,
          c = this.renderToClone || this.renderTo;if (!t(b)) this.containerWidth = _ya2(c, "width");if (!t(a)) this.containerHeight = _ya2(c, "height");this.chartWidth = y(0, b || this.containerWidth || 600);this.chartHeight = y(0, q(a, this.containerHeight > 19 ? this.containerHeight : 400));
    }, cloneRenderTo: function cloneRenderTo(a) {
      var b = this.renderToClone,
          c = this.container;a ? b && (this.renderTo.appendChild(c), Wa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), O(b, { position: "absolute", top: "-9999px", display: "block" }), b.style.setProperty && b.style.setProperty("display", "block", "important"), C.body.appendChild(b), c && b.appendChild(c));
    }, getContainer: function getContainer() {
      var a,
          b = this.options,
          c = b.chart,
          d,
          e;a = this.renderTo;var f = "highcharts-" + Lb++;if (!a) this.renderTo = a = c.renderTo;if (Ea(a)) this.renderTo = a = C.getElementById(a);a || ja(13, !0);d = H($(a, "data-highcharts-chart"));z(d) && ca[d] && ca[d].hasRendered && ca[d].destroy();$(a, "data-highcharts-chart", this.index);a.innerHTML = "";!c.skipClone && !a.offsetWidth && this.cloneRenderTo();this.getChartSize();d = this.chartWidth;e = this.chartHeight;this.container = a = ia(Xa, { className: "highcharts-container" + (c.className ? " " + c.className : ""), id: f }, v({ position: "relative", overflow: "hidden", width: d + "px", height: e + "px", textAlign: "left", lineHeight: "normal",
        zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, c.style), this.renderToClone || a);this._cursor = a.style.cursor;this.renderer = new (B[c.renderer] || Za)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);ua && this.renderer.create(this, a, d, e);this.renderer.chartIndex = this.index;
    }, getMargins: function getMargins(a) {
      var b = this.spacing,
          c = this.margin,
          d = this.titleOffset;this.resetMargins();if (d && !t(c[0])) this.plotTop = y(this.plotTop, d + this.options.title.margin + b[0]);this.legend.display && this.legend.adjustMargins(c, b);this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);this.extraTopMargin && (this.plotTop += this.extraTopMargin);a || this.getAxisMargins();
    }, getAxisMargins: function getAxisMargins() {
      var a = this,
          b = a.axisOffset = [0, 0, 0, 0],
          c = a.margin;a.hasCartesianSeries && o(a.axes, function (a) {
        a.visible && a.getOffset();
      });o(wb, function (d, e) {
        t(c[e]) || (a[d] += b[e]);
      });a.setChartSize();
    }, reflow: function reflow(a) {
      var b = this,
          c = b.options.chart,
          d = b.renderTo,
          e = t(c.width),
          f = c.width || _ya2(d, "width"),
          c = c.height || _ya2(d, "height"),
          d = a ? a.target : M;if (!e && !b.isPrinting && f && c && (d === M || d === C)) {
        if (f !== b.containerWidth || c !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = bb(function () {
          b.container && b.setSize(void 0, void 0, !1);
        }, a ? 100 : 0);b.containerWidth = f;b.containerHeight = c;
      }
    }, initReflow: function initReflow() {
      var a = this,
          b = function b(_b2) {
        a.reflow(_b2);
      };G(M, "resize", b);G(a, "destroy", function () {
        U(M, "resize", b);
      });
    }, setSize: function setSize(a, b, c) {
      var d = this,
          e = d.renderer;d.isResizing += 1;cb(c, d);d.oldChartHeight = d.chartHeight;d.oldChartWidth = d.chartWidth;if (a !== void 0) d.options.chart.width = a;if (b !== void 0) d.options.chart.height = b;d.getChartSize();a = e.globalAnimation;(a ? fb : O)(d.container, { width: d.chartWidth + "px", height: d.chartHeight + "px" }, a);d.setChartSize(!0);e.setSize(d.chartWidth, d.chartHeight, c);d.maxTicks = null;o(d.axes, function (a) {
        a.isDirty = !0;a.setScale();
      });o(d.series, function (a) {
        a.isDirty = !0;
      });d.isDirtyLegend = !0;d.isDirtyBox = !0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight = null;K(d, "resize");bb(function () {
        d && K(d, "endResize", null, function () {
          d.isResizing -= 1;
        });
      }, ib(a).duration);
    },
    setChartSize: function setChartSize(a) {
      var b = this.inverted,
          c = this.renderer,
          d = this.chartWidth,
          e = this.chartHeight,
          f = this.options.chart,
          g = this.spacing,
          h = this.clipOffset,
          i,
          j,
          k,
          l;this.plotLeft = i = A(this.plotLeft);this.plotTop = j = A(this.plotTop);this.plotWidth = k = y(0, A(d - i - this.marginRight));this.plotHeight = l = y(0, A(e - j - this.marginBottom));this.plotSizeX = b ? l : k;this.plotSizeY = b ? k : l;this.plotBorderWidth = f.plotBorderWidth || 0;this.spacingBox = c.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2] };this.plotBox = c.plotBox = { x: i, y: j, width: k, height: l };d = 2 * Y(this.plotBorderWidth / 2);b = Ga(y(d, h[3]) / 2);c = Ga(y(d, h[0]) / 2);this.clipBox = { x: b, y: c, width: Y(this.plotSizeX - y(d, h[1]) / 2 - b), height: y(0, Y(this.plotSizeY - y(d, h[2]) / 2 - c)) };a || o(this.axes, function (a) {
        a.setAxisSize();a.setAxisTranslation();
      });
    }, resetMargins: function resetMargins() {
      var a = this;o(wb, function (b, c) {
        a[b] = q(a.margin[c], a.spacing[c]);
      });a.axisOffset = [0, 0, 0, 0];a.clipOffset = [0, 0, 0, 0];
    }, drawChartBox: function drawChartBox() {
      var a = this.options.chart,
          b = this.renderer,
          c = this.chartWidth,
          d = this.chartHeight,
          e = this.chartBackground,
          f = this.plotBackground,
          g = this.plotBorder,
          h = this.plotBGImage,
          i = a.borderWidth || 0,
          j = a.backgroundColor,
          k = a.plotBackgroundColor,
          l = a.plotBackgroundImage,
          m = a.plotBorderWidth || 0,
          n,
          p = this.plotLeft,
          r = this.plotTop,
          s = this.plotWidth,
          q = this.plotHeight,
          o = this.plotBox,
          w = this.clipRect,
          F = this.clipBox;n = i + (a.shadow ? 8 : 0);if (i || j) if (e) e.animate(e.crisp({ width: c - n, height: d - n }));else {
        e = { fill: j || "none" };if (i) e.stroke = a.borderColor, e["stroke-width"] = i;this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow);
      }if (k) f ? f.animate(o) : this.plotBackground = b.rect(p, r, s, q, 0).attr({ fill: k }).add().shadow(a.plotShadow);if (l) h ? h.animate(o) : this.plotBGImage = b.image(l, p, r, s, q).add();w ? w.animate({ width: F.width, height: F.height }) : this.clipRect = b.clipRect(F);if (m) g ? (g.strokeWidth = -m, g.animate(g.crisp({ x: p, y: r, width: s, height: q }))) : this.plotBorder = b.rect(p, r, s, q, 0, -m).attr({ stroke: a.plotBorderColor, "stroke-width": m, fill: "none", zIndex: 1 }).add();this.isDirtyBox = !1;
    }, propFromSeries: function propFromSeries() {
      var a = this,
          b = a.options.chart,
          c,
          d = a.options.series,
          e,
          f;o(["inverted", "angular", "polar"], function (g) {
        c = I[b.type || b.defaultSeriesType];f = a[g] || b[g] || c && c.prototype[g];for (e = d && d.length; !f && e--;) {
          (c = I[d[e].type]) && c.prototype[g] && (f = !0);
        }a[g] = f;
      });
    }, linkSeries: function linkSeries() {
      var a = this,
          b = a.series;o(b, function (a) {
        a.linkedSeries.length = 0;
      });o(b, function (b) {
        var d = b.options.linkedTo;if (Ea(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent = d, b.visible = q(b.options.visible, d.options.visible, b.visible);
      });
    }, renderSeries: function renderSeries() {
      o(this.series, function (a) {
        a.translate();a.render();
      });
    }, renderLabels: function renderLabels() {
      var a = this,
          b = a.options.labels;b.items && o(b.items, function (c) {
        var d = v(b.style, c.style),
            e = H(d.left) + a.plotLeft,
            f = H(d.top) + a.plotTop + 12;delete d.left;delete d.top;a.renderer.text(c.html, e, f).attr({ zIndex: 2 }).css(d).add();
      });
    }, render: function render() {
      var a = this.axes,
          b = this.renderer,
          c = this.options,
          d,
          e,
          f,
          g;this.setTitle();this.legend = new xb(this, c.legend);this.getStacks && this.getStacks();this.getMargins(!0);this.setChartSize();d = this.plotWidth;e = this.plotHeight -= 21;o(a, function (a) {
        a.setScale();
      });this.getAxisMargins();f = d / this.plotWidth > 1.1;g = e / this.plotHeight > 1.05;if (f || g) this.maxTicks = null, o(a, function (a) {
        (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0);
      }), this.getMargins();this.drawChartBox();this.hasCartesianSeries && o(a, function (a) {
        a.visible && a.render();
      });if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add();this.renderSeries();this.renderLabels();
      this.showCredits(c.credits);this.hasRendered = !0;
    }, showCredits: function showCredits(a) {
      if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text, 0, 0).on("click", function () {
        if (a.href) M.location.href = a.href;
      }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position);
    }, destroy: function destroy() {
      var a = this,
          b = a.axes,
          c = a.series,
          d = a.container,
          e,
          f = d && d.parentNode;K(a, "destroy");ca[a.index] = x;mb--;a.renderTo.removeAttribute("data-highcharts-chart");U(a);for (e = b.length; e--;) {
        b[e] = b[e].destroy();
      }for (e = c.length; e--;) {
        c[e] = c[e].destroy();
      }o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) {
        var c = a[b];c && c.destroy && (a[b] = c.destroy());
      });if (d) d.innerHTML = "", U(d), f && Wa(d);for (e in a) {
        delete a[e];
      }
    }, isReadyToRender: function isReadyToRender() {
      var a = this;return !ma && M == M.top && C.readyState !== "complete" || ua && !M.canvg ? (ua ? Zb.push(function () {
        a.firstRender();
      }, a.options.global.canvasToolsURL) : C.attachEvent("onreadystatechange", function () {
        C.detachEvent("onreadystatechange", a.firstRender);C.readyState === "complete" && a.firstRender();
      }), !1) : !0;
    }, firstRender: function firstRender() {
      var a = this,
          b = a.options;if (a.isReadyToRender()) {
        a.getContainer();K(a, "init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();o(b.series || [], function (b) {
          a.initSeries(b);
        });a.linkSeries();K(a, "beforeRender");if (B.Pointer) a.pointer = new ab(a, b);a.render();a.renderer.draw();if (!a.renderer.imgCount && a.onload) a.onload();
        a.cloneRenderTo(!0);
      }
    }, onload: function onload() {
      var a = this;o([this.callback].concat(this.callbacks), function (b) {
        b && a.index !== void 0 && b.apply(a, [a]);
      });K(a, "load");this.onload = null;
    }, splashArray: function splashArray(a, b) {
      var c = b[a],
          c = ha(c) ? c : [c, c, c, c];return [q(b[a + "Top"], c[0]), q(b[a + "Right"], c[1]), q(b[a + "Bottom"], c[2]), q(b[a + "Left"], c[3])];
    } };var ec = B.CenteredSeriesMixin = { getCenter: function getCenter() {
      var a = this.options,
          b = this.chart,
          c = 2 * (a.slicedOffset || 0),
          d = b.plotWidth - 2 * c,
          b = b.plotHeight - 2 * c,
          e = a.center,
          e = [q(e[0], "50%"), q(e[1], "50%"), a.size || "100%", a.innerSize || 0],
          f = E(d, b),
          g,
          h;for (g = 0; g < 4; ++g) {
        h = e[g], a = g < 2 || g === 2 && /%$/.test(h), e[g] = (/%$/.test(h) ? [d, b, f, e[2]][g] * parseFloat(h) / 100 : parseFloat(h)) + (a ? c : 0);
      }e[3] > e[2] && (e[3] = e[2]);return e;
    } },
      Ja = function Ja() {};Ja.prototype = { init: function init(a, b, c) {
      this.series = a;this.color = a.color;this.applyOptions(b, c);this.pointAttr = {};if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;a.chart.pointCount++;
      return this;
    }, applyOptions: function applyOptions(a, b) {
      var c = this.series,
          d = c.options.pointValKey || c.pointValKey,
          a = Ja.prototype.optionsToObject.call(this, a);v(this, a);this.options = this.options ? v(this.options, a) : a;if (d) this.y = this[d];this.isNull = this.x === null || !z(this.y, !0);if (this.x === void 0 && c) this.x = b === void 0 ? c.autoIncrement(this) : b;if (c.xAxis && c.xAxis.names) c.xAxis.names[this.x] = this.name;return this;
    }, optionsToObject: function optionsToObject(a) {
      var b = {},
          c = this.series,
          d = c.options.keys,
          e = d || c.pointArrayMap || ["y"],
          f = e.length,
          g = 0,
          h = 0;if (z(a) || a === null) b[e[0]] = a;else if (Ra(a)) {
        if (!d && a.length > f) {
          c = _typeof(a[0]);if (c === "string") b.name = a[0];else if (c === "number") b.x = a[0];g++;
        }for (; h < f;) {
          if (!d || a[g] !== void 0) b[e[h]] = a[g];g++;h++;
        }
      } else if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === "object") {
        b = a;if (a.dataLabels) c._hasPointLabels = !0;if (a.marker) c._hasPointMarkers = !0;
      }return b;
    }, destroy: function destroy() {
      var a = this.series.chart,
          b = a.hoverPoints,
          c;a.pointCount--;if (b && (this.setState(), Ba(b, this), !b.length)) a.hoverPoints = null;if (this === a.hoverPoint) this.onMouseOut();if (this.graphic || this.dataLabel) U(this), this.destroyElements();this.legendItem && a.legend.destroyItem(this);for (c in this) {
        this[c] = null;
      }
    }, destroyElements: function destroyElements() {
      for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) {
        b = a[c], this[b] && (this[b] = this[b].destroy());
      }
    }, getLabelConfig: function getLabelConfig() {
      return { x: this.category, y: this.y, color: this.color, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
    }, tooltipFormatter: function tooltipFormatter(a) {
      var b = this.series,
          c = b.tooltipOptions,
          d = q(c.valueDecimals, ""),
          e = c.valuePrefix || "",
          f = c.valueSuffix || "";o(b.pointArrayMap || ["y"], function (b) {
        b = "{point." + b;if (e || f) a = a.replace(b + "}", e + b + "}" + f);a = a.replace(b + "}", b + ":,." + d + "f}");
      });return Ma(a, { point: this, series: this.series });
    }, firePointEvent: function firePointEvent(a, b, c) {
      var d = this,
          e = this.series.options;(e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();a === "click" && e.allowPointSelect && (c = function c(a) {
        d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
      });K(this, a, b, c);
    }, visible: !0 };var P = B.Series = function () {};P.prototype = { isCartesian: !0, type: "line", pointClass: Ja, sorted: !0, requireSorting: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function init(a, b) {
      var c = this,
          d,
          e,
          f = a.series,
          g = function g(a, b) {
        return q(a.options.index, a._i) - q(b.options.index, b._i);
      };c.chart = a;c.options = b = c.setOptions(b);c.linkedSeries = [];c.bindAxes();v(c, { name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0 });if (ua) b.animation = !1;e = b.events;for (d in e) {
        G(c, d, e[d]);
      }if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;c.getColor();c.getSymbol();o(c.parallelArrays, function (a) {
        c[a + "Data"] = [];
      });c.setData(b.data, !1);if (c.isCartesian) a.hasCartesianSeries = !0;f.push(c);c._i = f.length - 1;pb(f, g);this.yAxis && pb(this.yAxis.series, g);o(f, function (a, b) {
        a.index = b;a.name = a.name || "Series " + (b + 1);
      });
    }, bindAxes: function bindAxes() {
      var a = this,
          b = a.options,
          c = a.chart,
          d;o(a.axisTypes || [], function (e) {
        o(c[e], function (c) {
          d = c.options;if (b[e] === d.index || b[e] !== x && b[e] === d.id || b[e] === x && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0;
        });!a[e] && a.optionalAxis !== e && ja(18, !0);
      });
    }, updateParallelArrays: function updateParallelArrays(a, b) {
      var c = a.series,
          d = arguments,
          e = z(b) ? function (d) {
        var e = d === "y" && c.toYData ? c.toYData(a) : a[d];c[d + "Data"][b] = e;
      } : function (a) {
        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2));
      };o(c.parallelArrays, e);
    }, autoIncrement: function autoIncrement(a) {
      var g;var b = this.options,
          c = this.xIncrement,
          d = b.pointIntervalUnit,
          e = this.xAxis,
          f,
          c = q(c, b.pointStart, 0);this.pointInterval = b = q(this.pointInterval, b.pointInterval, 1);if (e && e.categories && a.name) if (this.requireSorting = !1, g = (f = Ra(e.categories)) ? e.categories : e.names, e = g, a = qa(a.name, e), a === -1) {
        if (!f) c = e.length;
      } else c = a;d && (a = new ea(c), d === "day" ? a = +a[sb](a[db]() + b) : d === "month" ? a = +a[Hb](a[jb]() + b) : d === "year" && (a = +a[Ib](a[kb]() + b)), b = a - c);this.xIncrement = c + b;return c;
    }, setOptions: function setOptions(a) {
      var b = this.chart,
          c = b.options.plotOptions,
          b = b.userOptions || {},
          d = b.plotOptions || {},
          e = c[this.type];this.userOptions = a;c = D(e, c.series, a);this.tooltipOptions = D(Q.tooltip, Q.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);e.marker === null && delete c.marker;this.zoneAxis = c.zoneAxis;a = this.zones = (c.zones || []).slice();if ((c.negativeColor || c.negativeFillColor) && !c.zones) a.push({ value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, color: c.negativeColor, fillColor: c.negativeFillColor });a.length && t(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor });return c;
    }, getCyclic: function getCyclic(a, b, c) {
      var d = this.userOptions,
          e = "_" + a + "Index",
          f = a + "Counter";b || (t(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);this[a] = b;
    }, getColor: function getColor() {
      this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || X[this.type].color, this.chart.options.colors);
    }, getSymbol: function getSymbol() {
      var a = this.options.marker;this.getCyclic("symbol", a.symbol, this.chart.options.symbols);if (/^url/.test(this.symbol)) a.radius = 0;
    }, drawLegendSymbol: da.drawLineMarker, setData: function setData(a, b, c, d) {
      var e = this,
          f = e.points,
          g = f && f.length || 0,
          h,
          i = e.options,
          j = e.chart,
          k = null,
          l = e.xAxis,
          m = i.turboThreshold,
          n = this.xData,
          p = this.yData,
          r = (h = e.pointArrayMap) && h.length,
          a = a || [];h = a.length;b = q(b, !0);if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) o(a, function (a, b) {
        f[b].update && a !== i.data[b] && f[b].update(a, !1, null, !1);
      });else {
        e.xIncrement = null;e.colorCounter = 0;o(this.parallelArrays, function (a) {
          e[a + "Data"].length = 0;
        });if (m && h > m) {
          for (c = 0; k === null && c < h;) {
            k = a[c], c++;
          }if (z(k)) {
            k = q(i.pointStart, 0);r = q(i.pointInterval, 1);for (c = 0; c < h; c++) {
              n[c] = k, p[c] = a[c], k += r;
            }e.xIncrement = k;
          } else if (Ra(k)) {
            if (r) for (c = 0; c < h; c++) {
              k = a[c], n[c] = k[0], p[c] = k.slice(1, r + 1);
            } else for (c = 0; c < h; c++) {
              k = a[c], n[c] = k[0], p[c] = k[1];
            }
          } else ja(12);
        } else for (c = 0; c < h; c++) {
          a[c] !== x && (k = { series: e }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c));
        }Ea(p[0]) && ja(14, !0);e.data = [];e.options.data = e.userOptions.data = a;for (c = g; c--;) {
          f[c] && f[c].destroy && f[c].destroy();
        }if (l) l.minRange = l.userMinRange;e.isDirty = e.isDirtyData = j.isDirtyBox = !0;c = !1;
      }i.legendType === "point" && (this.processData(), this.generatePoints());b && j.redraw(c);
    }, processData: function processData(a) {
      var b = this.xData,
          c = this.yData,
          d = b.length,
          e;e = 0;var f,
          g,
          h = this.xAxis,
          i,
          j = this.options;i = j.cropThreshold;var k = this.getExtremesFromAll || j.getExtremesFromAll,
          l = this.isCartesian,
          j = h && h.val2lin,
          m = h && h.isLog,
          n,
          p;if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;if (h) a = h.getExtremes(), n = a.min, p = a.max;if (l && this.sorted && !k && (!i || d > i || this.forceCrop)) if (b[d - 1] < n || b[0] > p) b = [], c = [];else if (b[0] < n || b[d - 1] > p) e = this.cropData(this.xData, this.yData, n, p), b = e.xData, c = e.yData, e = e.start, f = !0;for (i = b.length || 1; --i;) {
        d = m ? j(b[i]) - j(b[i - 1]) : b[i] - b[i - 1], d > 0 && (g === x || d < g) ? g = d : d < 0 && this.requireSorting && ja(15);
      }this.cropped = f;this.cropStart = e;this.processedXData = b;this.processedYData = c;this.closestPointRange = g;
    }, cropData: function cropData(a, b, c, d) {
      var e = a.length,
          f = 0,
          g = e,
          h = q(this.cropShoulder, 1),
          i;for (i = 0; i < e; i++) {
        if (a[i] >= c) {
          f = y(0, i - h);break;
        }
      }for (c = i; c < e; c++) {
        if (a[c] > d) {
          g = c + h;break;
        }
      }return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g };
    }, generatePoints: function generatePoints() {
      var a = this.options.data,
          b = this.data,
          c,
          d = this.processedXData,
          e = this.processedYData,
          f = this.pointClass,
          g = d.length,
          h = this.cropStart || 0,
          i,
          j = this.hasGroupedData,
          k,
          l = [],
          m;if (!b && !j) b = [], b.length = a.length, b = this.data = b;for (m = 0; m < g; m++) {
        i = h + m, j ? (l[m] = new f().init(this, [d[m]].concat(sa(e[m]))), l[m].dataGroup = this.groupMap[m]) : (b[i] ? k = b[i] : a[i] !== x && (b[i] = k = new f().init(this, a[i], d[m])), l[m] = k), l[m].index = i;
      }if (b && (g !== (c = b.length) || j)) for (m = 0; m < c; m++) {
        if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = x;
      }this.data = b;this.points = l;
    }, getExtremes: function getExtremes(a) {
      var b = this.yAxis,
          c = this.processedXData,
          d,
          e = [],
          f = 0;d = this.xAxis.getExtremes();var g = d.min,
          h = d.max,
          i,
          j,
          k,
          l,
          a = a || this.stackedYData || this.processedYData || [];d = a.length;for (l = 0; l < d; l++) {
        if (j = c[l], k = a[l], i = k !== null && k !== x && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j) if (i = k.length) for (; i--;) {
          k[i] !== null && (e[f++] = k[i]);
        } else e[f++] = k;
      }this.dataMin = Na(e);this.dataMax = Fa(e);
    }, translate: function translate() {
      this.processedXData || this.processData();this.generatePoints();for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || z(i), k = a.threshold, l = a.startFromThreshold ? k : 0, m, n, p, r, s = Number.MAX_VALUE, a = 0; a < g; a++) {
        var o = f[a],
            u = o.x,
            w = o.y;n = o.low;var F = b && e.stacks[(this.negStacks && w < (l ? 0 : k) ? "-" : "") + this.stackKey],
            L;if (e.isLog && w !== null && w <= 0) o.y = w = null, ja(10);o.plotX = m = V(E(y(-1E5, c.translate(u, 0, 0, 0, 1, i, this.type === "flags")), 1E5));if (b && this.visible && !o.isNull && F && F[u]) r = this.getStackIndicator(r, u, this.index), L = F[u], w = L.points[r.key], n = w[0], w = w[1], n === l && r.key === F[u].base && (n = q(k, e.min)), e.isLog && n <= 0 && (n = null), o.total = o.stackTotal = L.total, o.percentage = L.total && o.y / L.total * 100, o.stackY = w, L.setOffset(this.pointXOffset || 0, this.barW || 0);o.yBottom = t(n) ? e.translate(n, 0, 1, 0, 1) : null;h && (w = this.modifyValue(w, o));o.plotY = n = typeof w === "number" && w !== Infinity ? E(y(-1E5, e.translate(w, 0, 1, 0, 1)), 1E5) : x;o.isInside = n !== x && n >= 0 && n <= e.len && m >= 0 && m <= c.len;o.clientX = j ? V(c.translate(u, 0, 0, 0, 1)) : m;o.negative = o.y < (k || 0);o.category = d && d[o.x] !== x ? d[o.x] : o.x;o.isNull || (p !== void 0 && (s = E(s, T(m - p))), p = m);
      }this.closestPointRangePx = s;
    }, getValidPoints: function getValidPoints(a, b) {
      var c = this.chart;
      return Ha(a || this.points || [], function (a) {
        return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull;
      });
    }, setClip: function setClip(a) {
      var b = this.chart,
          c = this.options,
          d = b.renderer,
          e = b.inverted,
          f = this.clipBox,
          g = f || b.clipBox,
          h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","),
          i = b[h],
          j = b[h + "m"];if (!i) {
        if (a) g.width = 0, b[h + "m"] = j = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);b[h] = i = d.clipRect(g);i.count = { length: 0 };
      }a && !i.count[this.index] && (i.count[this.index] = !0, i.count.length += 1);if (c.clip !== !1) this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(j), this.sharedClipKey = h;a || (i.count[this.index] && (delete i.count[this.index], i.count.length -= 1), i.count.length === 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
    }, animate: function animate(a) {
      var b = this.chart,
          c = this.options.animation,
          d;if (c && !ha(c)) c = X[this.type].animation;a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99 }, c), this.animate = null);
    }, afterAnimate: function afterAnimate() {
      this.setClip();K(this, "afterAnimate");
    }, drawPoints: function drawPoints() {
      var a,
          b = this.points,
          c = this.chart,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this.options.marker,
          m = this.pointAttr[""],
          n,
          p,
          r,
          s = this.markerGroup,
          o = q(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);if (l.enabled !== !1 || this._hasPointMarkers) for (f = b.length; f--;) {
        if (g = b[f], d = Y(g.plotX), e = g.plotY, k = g.graphic, n = g.marker || {}, p = !!g.marker, a = o && n.enabled === x || n.enabled, r = g.isInside, a && z(e) && g.y !== null) {
          if (a = g.pointAttr[g.selected ? "select" : ""] || m, h = a.r, i = q(n.symbol, this.symbol), j = i.indexOf("url") === 0, k) k[r ? "show" : "hide"](!0).attr(a).animate(v({ x: d - h, y: e - h }, k.symbolName ? { width: 2 * h, height: 2 * h } : {}));else {
            if (r && (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, p ? n : l).attr(a).add(s);
          }
        } else if (k) g.graphic = k.destroy();
      }
    }, convertAttribs: function convertAttribs(a, b, c, d) {
      var e = this.pointAttrToOptions,
          f,
          g,
          h = {},
          a = a || {},
          b = b || {},
          c = c || {},
          d = d || {};for (f in e) {
        g = e[f], h[f] = q(a[g], b[f], c[f], d[f]);
      }return h;
    },
    getAttribs: function getAttribs() {
      var a = this,
          b = a.options,
          c = X[a.type].marker ? b.marker : b,
          d = c.states,
          e = d.hover,
          f,
          g = a.color,
          h = a.options.negativeColor,
          i = { stroke: g, fill: g },
          j = a.points || [],
          k,
          l = [],
          m,
          n = a.pointAttrToOptions;f = a.hasPointSpecificOptions;var p = c.lineColor,
          r = c.fillColor;k = b.turboThreshold;var s = a.zones,
          Z = a.zoneAxis || "y",
          u,
          w;b.marker ? (e.radius = +e.radius || +c.radius + +e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || xa(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || xa(e.negativeColor || h).brighten(e.brightness).get());l[""] = a.convertAttribs(c, i);o(["hover", "select"], function (b) {
        l[b] = a.convertAttribs(d[b], l[""]);
      });a.pointAttr = l;g = j.length;if (!k || g < k || f) for (; g--;) {
        k = j[g];if ((c = k.options && k.options.marker || k.options) && c.enabled === !1) c.radius = 0;i = null;if (s.length) {
          f = 0;for (i = s[f]; k[Z] >= i.value;) {
            i = s[++f];
          }k.color = k.fillColor = i = q(i.color, a.color);
        }f = b.colorByPoint || k.color;if (k.options) for (w in n) {
          t(c[n[w]]) && (f = !0);
        }if (f) {
          c = c || {};m = [];d = c.states || {};f = d.hover = d.hover || {};if (!b.marker || k.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ? "negativeColor" : "color"] || xa(k.color).brighten(f.brightness || e.brightness).get();u = { color: k.color };if (!r) u.fillColor = k.color;if (!p) u.lineColor = k.color;c.hasOwnProperty("color") && !c.color && delete c.color;if (i && !e.fillColor) f.fillColor = i;m[""] = a.convertAttribs(v(u, c), l[""]);m.hover = a.convertAttribs(d.hover, l.hover, m[""]);m.select = a.convertAttribs(d.select, l.select, m[""]);
        } else m = l;k.pointAttr = m;
      }
    }, destroy: function destroy() {
      var a = this,
          b = a.chart,
          c = /AppleWebKit\/533/.test(Pa),
          d,
          e = a.data || [],
          f,
          g,
          h;K(a, "destroy");U(a);o(a.axisTypes || [], function (b) {
        if (h = a[b]) Ba(h.series, a), h.isDirty = h.forceRedraw = !0;
      });a.legendItem && a.chart.legend.destroyItem(a);for (d = e.length; d--;) {
        (f = e[d]) && f.destroy && f.destroy();
      }a.points = null;clearTimeout(a.animationTimeout);for (g in a) {
        a[g] instanceof ba && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
      }if (b.hoverSeries === a) b.hoverSeries = null;Ba(b.series, a);for (g in a) {
        delete a[g];
      }
    }, getGraphPath: function getGraphPath(a, b, c) {
      var d = this,
          e = d.options,
          f = e.step,
          g,
          h = [],
          i = [],
          j,
          a = a || d.points;(g = a.reversed) && a.reverse();(f = { right: 1, center: 2 }[f] || f && 3) && g && (f = 4 - f);e.connectNulls && !b && !c && (a = this.getValidPoints(a));o(a, function (g, l) {
        var m = g.plotX,
            n = g.plotY,
            p = a[l - 1];if ((g.leftCliff || p && p.rightCliff) && !c) j = !0;g.isNull && !t(b) && l > 0 ? j = !e.connectNulls : g.isNull && !b ? j = !0 : (l === 0 || j ? p = [W, g.plotX, g.plotY] : d.getPointSpline ? p = d.getPointSpline(a, g, l) : f ? (p = f === 1 ? [R, p.plotX, n] : f === 2 ? [R, (p.plotX + m) / 2, p.plotY, R, (p.plotX + m) / 2, n] : [R, m, p.plotY], p.push(R, m, n)) : p = [R, m, n], i.push(g.x), f && i.push(g.x), h.push.apply(h, p), j = !1);
      });h.xMap = i;return d.graphPath = h;
    }, drawGraph: function drawGraph() {
      var a = this,
          b = this.options,
          c = [["graph", b.lineColor || this.color, b.dashStyle]],
          d = b.lineWidth,
          e = b.linecap !== "square",
          f = (this.gappedPath || this.getGraphPath).call(this);o(this.zones, function (d, e) {
        c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle]);
      });o(c, function (c, h) {
        var i = c[0],
            j = a[i];if (j) j.endX = f.xMap, j.animate({ d: f });else if (d && f.length) j = { stroke: c[1], "stroke-width": d, fill: "none", zIndex: 1 }, c[2] ? j.dashstyle = c[2] : e && (j["stroke-linecap"] = j["stroke-linejoin"] = "round"), j = a[i] = a.chart.renderer.path(f).attr(j).add(a.group).shadow(h < 2 && b.shadow);if (j) j.startX = f.xMap, j.isArea = f.isArea;
      });
    }, applyZones: function applyZones() {
      var a = this,
          b = this.chart,
          c = b.renderer,
          d = this.zones,
          e,
          f,
          g = this.clips || [],
          h,
          i = this.graph,
          j = this.area,
          k = y(b.chartWidth, b.chartHeight),
          l = this[(this.zoneAxis || "y") + "Axis"],
          m,
          n = l.reversed,
          p = b.inverted,
          r = l.horiz,
          s,
          Z,
          u,
          w = !1;if (d.length && (i || j) && l.min !== x) i && i.hide(), j && j.hide(), m = l.getExtremes(), o(d, function (d, o) {
        e = n ? r ? b.plotWidth : 0 : r ? 0 : l.toPixels(m.min);e = E(y(q(f, e), 0), k);f = E(y(A(l.toPixels(q(d.value, m.max), !0)), 0), k);w && (e = f = l.toPixels(m.max));s = Math.abs(e - f);Z = E(e, f);u = y(e, f);if (l.isXAxis) {
          if (h = { x: p ? u : Z, y: 0, width: s, height: k }, !r) h.x = b.plotHeight - h.x;
        } else if (h = { x: 0, y: p ? u : Z, width: k, height: s }, r) h.y = b.plotWidth - h.y;b.inverted && c.isVML && (h = l.isXAxis ? { x: 0, y: n ? Z : u, height: h.width, width: b.chartWidth } : { x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight });g[o] ? g[o].animate(h) : (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), j && a["zoneArea" + o].clip(g[o]));w = d.value > m.max;
      }), this.clips = g;
    }, invertGroups: function invertGroups() {
      function a() {
        var a = { width: b.yAxis.len, height: b.xAxis.len };o(["group", "markerGroup"], function (c) {
          b[c] && b[c].attr(a).invert();
        });
      }var b = this,
          c = b.chart;if (b.xAxis) G(c, "resize", a), G(b, "destroy", function () {
        U(c, "resize", a);
      }), a(), b.invertGroups = a;
    }, plotGroup: function plotGroup(a, b, c, d, e) {
      var f = this[a],
          g = !f;g && (this[a] = f = this.chart.renderer.g(b).attr({ zIndex: d || 0.1 }).add(e), f.addClass("highcharts-series-" + this.index));f.attr({ visibility: c })[g ? "attr" : "animate"](this.getPlotBox());return f;
    }, getPlotBox: function getPlotBox() {
      var a = this.chart,
          b = this.xAxis,
          c = this.yAxis;if (a.inverted) b = c, c = this.xAxis;return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 };
    }, render: function render() {
      var a = this,
          b = a.chart,
          c,
          d = a.options,
          e = !!a.animate && b.renderer.isSVG && ib(d.animation).duration,
          f = a.visible ? "inherit" : "hidden",
          g = d.zIndex,
          h = a.hasRendered,
          i = b.seriesGroup;c = a.plotGroup("group", "series", f, g, i);a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);e && a.animate(!0);a.getAttribs();c.inverted = a.isCartesian ? b.inverted : !1;a.drawGraph && (a.drawGraph(), a.applyZones());o(a.points, function (a) {
        a.redraw && a.redraw();
      });a.drawDataLabels && a.drawDataLabels();a.visible && a.drawPoints();a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();b.inverted && a.invertGroups();d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);e && a.animate();if (!h) a.animationTimeout = bb(function () {
        a.afterAnimate();
      }, e);a.isDirty = a.isDirtyData = !1;a.hasRendered = !0;
    }, redraw: function redraw() {
      var a = this.chart,
          b = this.isDirty || this.isDirtyData,
          c = this.group,
          d = this.xAxis,
          e = this.yAxis;c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: q(d && d.left, a.plotLeft), translateY: q(e && e.top, a.plotTop) }));this.translate();this.render();b && delete this.kdTree;
    }, kdDimensions: 1, kdAxisArray: ["clientX", "plotY"], searchPoint: function searchPoint(a, b) {
      var c = this.xAxis,
          d = this.yAxis,
          e = this.chart.inverted;return this.searchKDTree({ clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b);
    }, buildKDTree: function buildKDTree() {
      function a(c, e, f) {
        var g, h;if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function (a, b) {
          return a[g] - b[g];
        }), h = Math.floor(h / 2), { point: c[h], left: a(c.slice(0, h), e + 1, f), right: a(c.slice(h + 1), e + 1, f) };
      }var b = this,
          c = b.kdDimensions;delete b.kdTree;bb(function () {
        b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);
      }, b.options.kdNow ? 0 : 1);
    }, searchKDTree: function searchKDTree(a, b) {
      function c(a, b, j, k) {
        var l = b.point,
            m = d.kdAxisArray[j % k],
            n,
            p,
            r = l;p = t(a[e]) && t(l[e]) ? Math.pow(a[e] - l[e], 2) : null;n = t(a[f]) && t(l[f]) ? Math.pow(a[f] - l[f], 2) : null;n = (p || 0) + (n || 0);l.dist = t(n) ? Math.sqrt(n) : Number.MAX_VALUE;l.distX = t(p) ? Math.sqrt(p) : Number.MAX_VALUE;m = a[m] - l[m];n = m < 0 ? "left" : "right";p = m < 0 ? "right" : "left";b[n] && (n = c(a, b[n], j + 1, k), r = n[g] < r[g] ? n : l);b[p] && Math.sqrt(m * m) < r[g] && (a = c(a, b[p], j + 1, k), r = a[g] < r[g] ? a : r);return r;
      }var d = this,
          e = this.kdAxisArray[0],
          f = this.kdAxisArray[1],
          g = b ? "distX" : "dist";this.kdTree || this.buildKDTree();if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions);
    } };Vb.prototype = { destroy: function destroy() {
      Oa(this, this.axis);
    }, render: function render(a) {
      var b = this.options,
          c = b.format,
          c = c ? Ma(c, this) : b.formatter.call(this);this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({ align: this.textAlign, rotation: b.rotation, visibility: "hidden" }).add(a);
    },
    setOffset: function setOffset(a, b) {
      var c = this.axis,
          d = c.chart,
          e = d.inverted,
          f = c.reversed,
          f = this.isNegative && !f || !this.isNegative && f,
          g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
          c = c.translate(0),
          c = T(g - c),
          h = d.xAxis[0].translate(this.x) + a,
          i = d.plotHeight,
          f = { x: e ? f ? g : g - c : h, y: e ? i - h - b : f ? i - g - c : i - g, width: e ? c : b, height: e ? b : c };if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0);
    } };Da.prototype.getStacks = function () {
    var a = this;o(a.yAxis, function (a) {
      if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks;
    });o(a.series, function (b) {
      if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) b.stackKey = b.type + q(b.options.stack, "");
    });
  };J.prototype.buildStacks = function () {
    var a = this.series,
        b,
        c = q(this.options.reversedStacks, !0),
        d = a.length,
        e;if (!this.isXAxis) {
      this.usePercentage = !1;for (e = d; e--;) {
        a[c ? e : d - e - 1].setStackedPoints();
      }for (e = d; e--;) {
        b = a[c ? e : d - e - 1], b.setStackCliffs && b.setStackCliffs();
      }if (this.usePercentage) for (e = 0; e < d; e++) {
        a[e].setPercentStacks();
      }
    }
  };
  J.prototype.renderStackTotals = function () {
    var a = this.chart,
        b = a.renderer,
        c = this.stacks,
        d,
        e,
        f = this.stackTotalGroup;if (!f) this.stackTotalGroup = f = b.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add();f.translate(a.plotLeft, a.plotTop);for (d in c) {
      for (e in a = c[d], a) {
        a[e].render(f);
      }
    }
  };J.prototype.resetStacks = function () {
    var a = this.stacks,
        b,
        c;if (!this.isXAxis) for (b in a) {
      for (c in a[b]) {
        a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0);
      }
    }
  };J.prototype.cleanStacks = function () {
    var a, b, c;if (!this.isXAxis) {
      if (this.oldStacks) a = this.stacks = this.oldStacks;for (b in a) {
        for (c in a[b]) {
          a[b][c].cum = a[b][c].total;
        }
      }
    }
  };P.prototype.setStackedPoints = function () {
    if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
      var a = this.processedXData,
          b = this.processedYData,
          c = [],
          d = b.length,
          e = this.options,
          f = e.threshold,
          g = e.startFromThreshold ? f : 0,
          h = e.stack,
          e = e.stacking,
          i = this.stackKey,
          j = "-" + i,
          k = this.negStacks,
          l = this.yAxis,
          m = l.stacks,
          n = l.oldStacks,
          p,
          r,
          s,
          o,
          u,
          w,
          F;l.stacksTouched += 1;for (u = 0; u < d; u++) {
        w = a[u];F = b[u];p = this.getStackIndicator(p, w, this.index);o = p.key;s = (r = k && F < (g ? 0 : f)) ? j : i;m[s] || (m[s] = {});if (!m[s][w]) n[s] && n[s][w] ? (m[s][w] = n[s][w], m[s][w].total = null) : m[s][w] = new Vb(l, l.options.stackLabels, r, w, h);s = m[s][w];if (F !== null) {
          s.points[o] = s.points[this.index] = [q(s.cum, g)];if (!t(s.cum)) s.base = o;s.touched = l.stacksTouched;p.index > 0 && this.singleStacks === !1 && (s.points[o][0] = s.points[this.index + "," + w + ",0"][0]);
        }e === "percent" ? (r = r ? i : j, k && m[r] && m[r][w] ? (r = m[r][w], s.total = r.total = y(r.total, s.total) + T(F) || 0) : s.total = V(s.total + (T(F) || 0))) : s.total = V(s.total + (F || 0));s.cum = q(s.cum, g) + (F || 0);if (F !== null) s.points[o].push(s.cum), c[u] = s.cum;
      }if (e === "percent") l.usePercentage = !0;this.stackedYData = c;l.oldStacks = {};
    }
  };P.prototype.setPercentStacks = function () {
    var a = this,
        b = a.stackKey,
        c = a.yAxis.stacks,
        d = a.processedXData,
        e;o([b, "-" + b], function (b) {
      var f;for (var g = d.length, h, i; g--;) {
        if (h = d[g], e = a.getStackIndicator(e, h, a.index), f = (i = c[b] && c[b][h]) && i.points[e.key], h = f) i = i.total ? 100 / i.total : 0, h[0] = V(h[0] * i), h[1] = V(h[1] * i), a.stackedYData[g] = h[1];
      }
    });
  };P.prototype.getStackIndicator = function (a, b, c) {
    !t(a) || a.x !== b ? a = { x: b, index: 0 } : a.index++;a.key = [c, b, a.index].join(",");return a;
  };v(Da.prototype, { addSeries: function addSeries(a, b, c) {
      var d,
          e = this;a && (b = q(b, !0), K(e, "addSeries", { options: a }, function () {
        d = e.initSeries(a);e.isDirtyLegend = !0;e.linkSeries();b && e.redraw(c);
      }));return d;
    }, addAxis: function addAxis(a, b, c, d) {
      var e = b ? "xAxis" : "yAxis",
          f = this.options,
          a = D(a, { index: this[e].length, isX: b });new J(this, a);f[e] = sa(f[e] || {});f[e].push(a);q(c, !0) && this.redraw(d);
    }, showLoading: function showLoading(a) {
      var b = this,
          c = b.options,
          d = b.loadingDiv,
          e = c.loading,
          f = function f() {
        d && O(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" });
      };if (!d) b.loadingDiv = d = ia(Xa, { className: "highcharts-loading" }, v(e.style, { zIndex: 10, display: "none" }), b.container), b.loadingSpan = ia("span", null, e.labelStyle, d), G(b, "redraw", f);b.loadingSpan.innerHTML = a || c.lang.loading;if (!b.loadingShown) O(d, { opacity: 0, display: "" }), fb(d, { opacity: e.style.opacity }, { duration: e.showDuration || 0 }), b.loadingShown = !0;f();
    }, hideLoading: function hideLoading() {
      var a = this.options,
          b = this.loadingDiv;b && fb(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function complete() {
          O(b, { display: "none" });
        } });this.loadingShown = !1;
    } });v(Ja.prototype, { update: function update(a, b, c, d) {
      function e() {
        f.applyOptions(a);if (f.y === null && h) f.graphic = h.destroy();if (ha(a, !0)) f.redraw = function () {
          if (h && h.element && a && a.marker && a.marker.symbol) f.graphic = h.destroy();if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();f.redraw = null;
        };i = f.index;g.updateParallelArrays(f, i);if (l && f.name) l[f.x] = f.name;k.data[i] = ha(k.data[i], !0) ? f.options : a;g.isDirty = g.isDirtyData = !0;if (!g.fixedBox && g.hasCartesianSeries) j.isDirtyBox = !0;if (k.legendType === "point") j.isDirtyLegend = !0;b && j.redraw(c);
      }var f = this,
          g = f.series,
          h = f.graphic,
          i,
          j = g.chart,
          k = g.options,
          l = g.xAxis && g.xAxis.names,
          b = q(b, !0);d === !1 ? e() : f.firePointEvent("update", { options: a }, e);
    }, remove: function remove(a, b) {
      this.series.removePoint(qa(this, this.series.data), a, b);
    } });v(P.prototype, { addPoint: function addPoint(a, b, c, d) {
      var e = this.options,
          f = this.data,
          g = this.chart,
          h = this.xAxis && this.xAxis.names,
          i = e.data,
          j,
          k = this.xData,
          l,
          m;cb(d, g);b = q(b, !0);d = { series: this };this.pointClass.prototype.applyOptions.apply(d, [a]);m = d.x;l = k.length;if (this.requireSorting && m < k[l - 1]) for (j = !0; l && k[l - 1] > m;) {
        l--;
      }this.updateParallelArrays(d, "splice", l, 0, 0);this.updateParallelArrays(d, l);if (h && d.name) h[m] = d.name;i.splice(l, 0, a);j && (this.data.splice(l, 0, null), this.processData());e.legendType === "point" && this.generatePoints();c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), i.shift()));this.isDirtyData = this.isDirty = !0;b && (this.getAttribs(), g.redraw());
    }, removePoint: function removePoint(a, b, c) {
      var d = this,
          e = d.data,
          f = e[a],
          g = d.points,
          h = d.chart,
          i = function i() {
        g && g.length === e.length && g.splice(a, 1);e.splice(a, 1);d.options.data.splice(a, 1);d.updateParallelArrays(f || { series: d }, "splice", a, 1);f && f.destroy();d.isDirty = !0;d.isDirtyData = !0;b && h.redraw();
      };cb(c, h);b = q(b, !0);f ? f.firePointEvent("remove", null, i) : i();
    }, remove: function remove(a, b) {
      var c = this,
          d = c.chart;K(c, "remove", null, function () {
        c.destroy();d.isDirtyLegend = d.isDirtyBox = !0;d.linkSeries();q(a, !0) && d.redraw(b);
      });
    }, update: function update(a, b) {
      var c = this,
          d = this.chart,
          e = this.userOptions,
          f = this.type,
          g = I[f].prototype,
          h = ["group", "markerGroup", "dataLabelsGroup"],
          i;if (a.type && a.type !== f || a.zIndex !== void 0) h.length = 0;o(h, function (a) {
        h[a] = c[a];delete c[a];
      });a = D(e, { animation: !1, index: this.index, pointStart: this.xData[0] }, { data: this.options.data }, a);this.remove(!1);
      for (i in g) {
        this[i] = x;
      }v(this, I[a.type || f].prototype);o(h, function (a) {
        c[a] = h[a];
      });this.init(d, a);d.linkSeries();q(b, !0) && d.redraw(!1);
    } });v(J.prototype, { update: function update(a, b) {
      var c = this.chart,
          a = c.options[this.coll][this.options.index] = D(this.userOptions, a);this.destroy(!0);this.init(c, v(a, { events: x }));c.isDirtyBox = !0;q(b, !0) && c.redraw();
    }, remove: function remove(a) {
      for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) {
        d[e] && d[e].remove(!1);
      }Ba(b.axes, this);Ba(b[c], this);b.options[c].splice(this.options.index, 1);o(b[c], function (a, b) {
        a.options.index = b;
      });this.destroy();b.isDirtyBox = !0;q(a, !0) && b.redraw();
    }, setTitle: function setTitle(a, b) {
      this.update({ title: a }, b);
    }, setCategories: function setCategories(a, b) {
      this.update({ categories: a }, b);
    } });var Ka = oa(P);I.line = Ka;X.area = D(ga, { softThreshold: !1, threshold: 0 });var Aa = oa(P, { type: "area", singleStacks: !1, getStackPoints: function getStackPoints() {
      var a = [],
          b = [],
          c = this.xAxis,
          d = this.yAxis,
          e = d.stacks[this.stackKey],
          f = {},
          g = this.points,
          h = this.index,
          i = d.series,
          j = i.length,
          k,
          l = q(d.options.reversedStacks, !0) ? 1 : -1,
          m,
          n;if (this.options.stacking) {
        for (m = 0; m < g.length; m++) {
          f[g[m].x] = g[m];
        }for (n in e) {
          e[n].total !== null && b.push(n);
        }b.sort(function (a, b) {
          return a - b;
        });k = wa(i, function () {
          return this.visible;
        });o(b, function (g, i) {
          var n = 0,
              q,
              u;if (f[g] && !f[g].isNull) a.push(f[g]), o([-1, 1], function (a) {
            var c = a === 1 ? "rightNull" : "leftNull",
                d = 0,
                n = e[b[i + a]];if (n) for (m = h; m >= 0 && m < j;) {
              q = n.points[m], q || (m === h ? f[g][c] = !0 : k[m] && (u = e[g].points[m]) && (d -= u[1] - u[0])), m += l;
            }f[g][a === 1 ? "rightCliff" : "leftCliff"] = d;
          });else {
            for (m = h; m >= 0 && m < j;) {
              if (q = e[g].points[m]) {
                n = q[1];break;
              }m += l;
            }n = d.toPixels(n, !0);a.push({ isNull: !0, plotX: c.toPixels(g, !0), plotY: n, yBottom: n });
          }
        });
      }return a;
    }, getGraphPath: function getGraphPath(a) {
      var b = P.prototype.getGraphPath,
          c = this.options,
          d = c.stacking,
          e = this.yAxis,
          f,
          g,
          h = [],
          i = [],
          j = this.index,
          k,
          l = e.stacks[this.stackKey],
          m = c.threshold,
          n = e.getThreshold(c.threshold),
          p,
          c = c.connectNulls || d === "percent",
          r = function r(b, c, f) {
        var g = a[b],
            b = d && l[g.x].points[j],
            p = g[f + "Null"] || 0,
            f = g[f + "Cliff"] || 0,
            r,
            o,
            g = !0;f || p ? (r = (p ? b[0] : b[1]) + f, o = b[0] + f, g = !!p) : !d && a[c] && a[c].isNull && (r = o = m);r !== void 0 && (i.push({ plotX: k, plotY: r === null ? n : e.getThreshold(r), isNull: g }), h.push({ plotX: k, plotY: o === null ? n : e.getThreshold(o) }));
      },
          a = a || this.points;d && (a = this.getStackPoints());for (f = 0; f < a.length; f++) {
        if (g = a[f].isNull, k = q(a[f].rectPlotX, a[f].plotX), p = q(a[f].yBottom, n), !g || c) {
          c || r(f, f - 1, "left");if (!g || d || !c) i.push(a[f]), h.push({ x: f, plotX: k, plotY: p });c || r(f, f + 1, "right");
        }
      }f = b.call(this, i, !0, !0);h.reversed = !0;g = b.call(this, h, !0, !0);g.length && (g[0] = R);g = f.concat(g);b = b.call(this, i, !1, c);g.xMap = f.xMap;
      this.areaPath = g;return b;
    }, drawGraph: function drawGraph() {
      this.areaPath = [];P.prototype.drawGraph.apply(this);var a = this,
          b = this.areaPath,
          c = this.options,
          d = [["area", this.color, c.fillColor]];o(this.zones, function (b, f) {
        d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor]);
      });o(d, function (d) {
        var f = d[0],
            g = a[f];g ? (g.endX = b.xMap, g.animate({ d: b })) : (g = { fill: d[2] || d[1], zIndex: 0 }, d[2] || (g["fill-opacity"] = q(c.fillOpacity, 0.75)), g = a[f] = a.chart.renderer.path(b).attr(g).add(a.group), g.isArea = !0);g.startX = b.xMap;g.shiftUnit = c.step ? 2 : 1;
      });
    }, drawLegendSymbol: da.drawRectangle });I.area = Aa;X.spline = D(ga);Ka = oa(P, { type: "spline", getPointSpline: function getPointSpline(a, b, c) {
      var d = b.plotX,
          e = b.plotY,
          f = a[c - 1],
          c = a[c + 1],
          g,
          h,
          i,
          j;if (f && !f.isNull && c && !c.isNull) {
        a = f.plotY;i = c.plotX;var c = c.plotY,
            k = 0;g = (1.5 * d + f.plotX) / 2.5;h = (1.5 * e + a) / 2.5;i = (1.5 * d + i) / 2.5;j = (1.5 * e + c) / 2.5;i !== g && (k = (j - h) * (i - d) / (i - g) + e - j);h += k;j += k;h > a && h > e ? (h = y(a, e), j = 2 * e - h) : h < a && h < e && (h = E(a, e), j = 2 * e - h);j > c && j > e ? (j = y(c, e), h = 2 * e - j) : j < c && j < e && (j = E(c, e), h = 2 * e - j);b.rightContX = i;b.rightContY = j;
      }b = ["C", q(f.rightContX, f.plotX), q(f.rightContY, f.plotY), q(g, d), q(h, e), d, e];f.rightContX = f.rightContY = null;return b;
    } });I.spline = Ka;X.areaspline = D(X.area);Aa = Aa.prototype;Ka = oa(Ka, { type: "areaspline", getStackPoints: Aa.getStackPoints, getGraphPath: Aa.getGraphPath, setStackCliffs: Aa.setStackCliffs, drawGraph: Aa.drawGraph, drawLegendSymbol: da.drawRectangle });I.areaspline = Ka;X.column = D(ga, { borderColor: "#FFFFFF", borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null,
    states: { hover: { brightness: 0.1, shadow: !1, halo: !1 }, select: { color: "#C0C0C0", borderColor: "#000000", shadow: !1 } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0 });Ka = oa(P, { type: "column", pointAttrToOptions: { stroke: "borderColor", fill: "color", r: "borderRadius" }, cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function init() {
      P.prototype.init.apply(this, arguments);var a = this,
          b = a.chart;
      b.hasRendered && o(b.series, function (b) {
        if (b.type === a.type) b.isDirty = !0;
      });
    }, getColumnMetrics: function getColumnMetrics() {
      var a = this,
          b = a.options,
          c = a.xAxis,
          d = a.yAxis,
          e = c.reversed,
          f,
          g = {},
          h = 0;b.grouping === !1 ? h = 1 : o(a.chart.series, function (b) {
        var c = b.options,
            e = b.yAxis,
            i;if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === x && (g[f] = h++), i = g[f]) : c.grouping !== !1 && (i = h++), b.columnIndex = i;
      });var i = E(T(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
          j = i * b.groupPadding,
          k = (i - 2 * j) / h,
          b = E(b.maxPointWidth || c.len, q(b.pointWidth, k * (1 - 2 * b.pointPadding)));a.columnMetrics = { width: b, offset: (k - b) / 2 + (j + ((a.columnIndex || 0) + (e ? 1 : 0)) * k - i / 2) * (e ? -1 : 1) };return a.columnMetrics;
    }, crispCol: function crispCol(a, b, c, d) {
      var e = this.chart,
          f = this.borderWidth,
          g = -(f % 2 ? 0.5 : 0),
          f = f % 2 ? 0.5 : 1;e.inverted && e.renderer.isVML && (f += 1);c = Math.round(a + c) + g;a = Math.round(a) + g;c -= a;d = Math.round(b + d) + f;g = T(b) <= 0.5 && d > 0.5;b = Math.round(b) + f;d -= b;g && d && (b -= 1, d += 1);return { x: a, y: b, width: c, height: d };
    }, translate: function translate() {
      var a = this,
          b = a.chart,
          c = a.options,
          d = a.borderWidth = q(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1),
          e = a.yAxis,
          f = a.translatedThreshold = e.getThreshold(c.threshold),
          g = q(c.minPointLength, 5),
          h = a.getColumnMetrics(),
          i = h.width,
          j = a.barW = y(i, 1 + 2 * d),
          k = a.pointXOffset = h.offset;b.inverted && (f -= 0.5);c.pointPadding && (j = Ga(j));P.prototype.translate.apply(a);o(a.points, function (c) {
        var d = E(q(c.yBottom, f), 9E4),
            h = 999 + T(d),
            h = E(y(-h, c.plotY), e.len + h),
            p = c.plotX + k,
            r = j,
            o = E(h, d),
            t,
            u = y(h, d) - o;T(u) < g && g && (u = g, t = !e.reversed && !c.negative || e.reversed && c.negative, o = T(o - f) > g ? d - g : f - (t ? g : 0));c.barX = p;c.pointWidth = i;c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - p - r / 2, u] : [p + r / 2, h + e.pos - b.plotTop, u];c.shapeType = "rect";c.shapeArgs = a.crispCol(p, o, r, u);
      });
    }, getSymbol: va, drawLegendSymbol: da.drawRectangle, drawGraph: va, drawPoints: function drawPoints() {
      var a = this,
          b = this.chart,
          c = a.options,
          d = b.renderer,
          e = c.animationLimit || 250,
          f,
          g;o(a.points, function (h) {
        var i = h.graphic,
            j;if (z(h.plotY) && h.y !== null) f = h.shapeArgs, j = t(a.borderWidth) ? { "stroke-width": a.borderWidth } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], i ? (Qa(i), i.attr(j).attr(g)[b.pointCount < e ? "animate" : "attr"](D(f))) : h.graphic = d[h.shapeType](f).attr(j).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);else if (i) h.graphic = i.destroy();
      });
    }, animate: function animate(a) {
      var b = this,
          c = this.yAxis,
          d = b.options,
          e = this.chart.inverted,
          f = {};if (ma) a ? (f.scaleY = 0.001, a = E(c.pos + c.len, y(c.pos, c.toPixels(d.threshold))), e ? f.translateX = a - c.len : f.translateY = a, b.group.attr(f)) : (f[e ? "translateX" : "translateY"] = c.pos, b.group.animate(f, v(ib(b.options.animation), { step: function step(a, c) {
          b.group.attr({ scaleY: y(0.001, c.pos) });
        } })), b.animate = null);
    }, remove: function remove() {
      var a = this,
          b = a.chart;b.hasRendered && o(b.series, function (b) {
        if (b.type === a.type) b.isDirty = !0;
      });P.prototype.remove.apply(a, arguments);
    } });I.column = Ka;X.bar = D(X.column);Aa = oa(Ka, { type: "bar", inverted: !0 });I.bar = Aa;X.scatter = D(ga, { lineWidth: 0, marker: { enabled: !0 }, tooltip: { headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px;\"> {series.name}</span><br/>",
      pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } });Aa = oa(P, { type: "scatter", sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, kdDimensions: 2, drawGraph: function drawGraph() {
      this.options.lineWidth && P.prototype.drawGraph.call(this);
    } });I.scatter = Aa;X.pie = D(ga, { borderColor: "#FFFFFF", borderWidth: 1, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function formatter() {
        return this.y === null ? void 0 : this.point.name;
      },
      x: 0 }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, states: { hover: { brightness: 0.1, shadow: !1 } }, stickyTracking: !1, tooltip: { followPointer: !0 } });ga = { type: "pie", isCartesian: !1, pointClass: oa(Ja, { init: function init() {
        Ja.prototype.init.apply(this, arguments);var a = this,
            b;a.name = q(a.name, "Slice");b = function b(_b3) {
          a.slice(_b3.type === "select");
        };G(a, "select", b);G(a, "unselect", b);return a;
      }, setVisible: function setVisible(a, b) {
        var c = this,
            d = c.series,
            e = d.chart,
            f = d.options.ignoreHiddenPoint,
            b = q(b, f);if (a !== c.visible) {
          c.visible = c.options.visible = a = a === x ? !c.visible : a;d.options.data[qa(c, d.data)] = c.options;o(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
            if (c[b]) c[b][a ? "show" : "hide"](!0);
          });c.legendItem && e.legend.colorizeItem(c, a);!a && c.state === "hover" && c.setState("");if (f) d.isDirty = !0;b && e.redraw();
        }
      }, slice: function slice(a, b, c) {
        var d = this.series;cb(c, d.chart);q(b, !0);this.sliced = this.options.sliced = a = t(a) ? a : !this.sliced;d.options.data[qa(this, d.data)] = this.options;a = a ? this.slicedTranslation : { translateX: 0, translateY: 0 };this.graphic.animate(a);this.shadowGroup && this.shadowGroup.animate(a);
      }, haloPath: function haloPath(a) {
        var b = this.shapeArgs,
            c = this.series.chart;return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, { innerR: this.shapeArgs.r, start: b.start, end: b.end });
      } }), requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth",
      fill: "color" }, animate: function animate(a) {
      var b = this,
          c = b.points,
          d = b.startAngleRad;if (!a) o(c, function (a) {
        var c = a.graphic,
            g = a.shapeArgs;c && (c.attr({ r: a.startR || b.center[3] / 2, start: d, end: d }), c.animate({ r: g.r, start: g.start, end: g.end }, b.options.animation));
      }), b.animate = null;
    }, updateTotals: function updateTotals() {
      var a,
          b = 0,
          c = this.points,
          d = c.length,
          e,
          f = this.options.ignoreHiddenPoint;for (a = 0; a < d; a++) {
        e = c[a];if (e.y < 0) e.y = null;b += f && !e.visible ? 0 : e.y;
      }this.total = b;for (a = 0; a < d; a++) {
        e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b;
      }
    }, generatePoints: function generatePoints() {
      P.prototype.generatePoints.call(this);this.updateTotals();
    }, translate: function translate(a) {
      this.generatePoints();var b = 0,
          c = this.options,
          d = c.slicedOffset,
          e = d + c.borderWidth,
          f,
          g,
          h,
          i = c.startAngle || 0,
          j = this.startAngleRad = Ca / 180 * (i - 90),
          i = (this.endAngleRad = Ca / 180 * (q(c.endAngle, i + 360) - 90)) - j,
          k = this.points,
          l = c.dataLabels.distance,
          c = c.ignoreHiddenPoint,
          m,
          n = k.length,
          p;if (!a) this.center = a = this.getCenter();this.getX = function (b, c) {
        h = aa.asin(E((b - a[1]) / (a[2] / 2 + l), 1));return a[0] + (c ? -1 : 1) * fa(h) * (a[2] / 2 + l);
      };for (m = 0; m < n; m++) {
        p = k[m];f = j + b * i;if (!c || p.visible) b += p.percentage / 100;g = j + b * i;p.shapeType = "arc";p.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: A(f * 1E3) / 1E3, end: A(g * 1E3) / 1E3 };h = (g + f) / 2;h > 1.5 * Ca ? h -= 2 * Ca : h < -Ca / 2 && (h += 2 * Ca);p.slicedTranslation = { translateX: A(fa(h) * d), translateY: A(na(h) * d) };f = fa(h) * a[2] / 2;g = na(h) * a[2] / 2;p.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];p.half = h < -Ca / 2 || h > Ca / 2 ? 1 : 0;p.angle = h;e = E(e, l / 2);p.labelPos = [a[0] + f + fa(h) * l, a[1] + g + na(h) * l, a[0] + f + fa(h) * e, a[1] + g + na(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : p.half ? "right" : "left", h];
      }
    }, drawGraph: null, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart.renderer,
          c,
          d,
          e = a.options.shadow,
          f,
          g,
          h,
          i;if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group);o(a.points, function (j) {
        if (j.y !== null) {
          d = j.graphic;h = j.shapeArgs;f = j.shadowGroup;g = j.pointAttr[j.selected ? "select" : ""];if (!g.stroke) g.stroke = g.fill;if (e && !f) f = j.shadowGroup = b.g("shadow").add(a.shadowGroup);c = j.sliced ? j.slicedTranslation : { translateX: 0, translateY: 0 };f && f.attr(c);if (d) d.setRadialReference(a.center).attr(g).animate(v(h, c));else {
            i = { "stroke-linejoin": "round" };if (!j.visible) i.visibility = "hidden";j.graphic = d = b[j.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e, f);
          }
        }
      });
    }, searchPoint: va, sortByAngle: function sortByAngle(a, b) {
      a.sort(function (a, d) {
        return a.angle !== void 0 && (d.angle - a.angle) * b;
      });
    }, drawLegendSymbol: da.drawRectangle, getCenter: ec.getCenter, getSymbol: va };ga = oa(P, ga);I.pie = ga;P.prototype.drawDataLabels = function () {
    var a = this,
        b = a.options,
        c = b.cursor,
        d = b.dataLabels,
        e = a.points,
        f,
        g,
        h = a.hasRendered || 0,
        i,
        j,
        k = q(d.defer, !0),
        l = a.chart.renderer;if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup", "data-labels", k && !h ? "hidden" : "visible", d.zIndex || 6), k && (j.attr({ opacity: +h }), h || G(a, "afterAnimate", function () {
      a.visible && j.show(!0);j[b.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 });
    })), g = d, o(e, function (e) {
      var h,
          k = e.dataLabel,
          r,
          o,
          y = e.connector,
          u = !0,
          w,
          F = {};f = e.dlOptions || e.options && e.options.dataLabels;h = q(f && f.enabled, g.enabled) && e.y !== null;if (k && !h) e.dataLabel = k.destroy();else if (h) {
        d = D(g, f);w = d.style;h = d.rotation;r = e.getLabelConfig();i = d.format ? Ma(d.format, r) : d.formatter.call(r, d);w.color = q(d.color, w.color, a.color, "black");if (k) {
          if (t(i)) k.attr({ text: i }), u = !1;else {
            if (e.dataLabel = k = k.destroy(), y) e.connector = y.destroy();
          }
        } else if (t(i)) {
          k = { fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: h, padding: d.padding, zIndex: 1 };if (w.color === "contrast") F.color = d.inside || d.distance < 0 || b.stacking ? l.getContrast(e.color || a.color) : "#000000";if (c) F.cursor = c;for (o in k) {
            k[o] === x && delete k[o];
          }k = e.dataLabel = l[h ? "text" : "label"](i, 0, -9999, d.shape, null, null, d.useHTML).attr(k).css(v(w, F)).add(j).shadow(d.shadow);
        }k && a.alignDataLabel(e, k, d, null, u);
      }
    });
  };P.prototype.alignDataLabel = function (a, b, c, d, e) {
    var f = this.chart,
        g = f.inverted,
        h = q(a.plotX, -9999),
        i = q(a.plotY, -9999),
        j = b.getBBox(),
        k = f.renderer.fontMetrics(c.style.fontSize).b,
        l = c.rotation,
        m = c.align,
        n = this.visible && (a.series.forceDL || f.isInsidePlot(h, A(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g)),
        p = q(c.overflow, "justify") === "justify";if (n) d = v({ x: g ? f.plotWidth - i : h, y: A(g ? f.plotHeight - h : i), width: 0, height: 0 }, d), v(c, { width: j.width, height: j.height }), l ? (p = !1, g = f.renderer.rotCorr(k, l), g = { x: d.x + c.x + d.width / 2 + g.x, y: d.y + c.y + { top: 0, middle: 0.5, bottom: 1 }[c.verticalAlign] * d.height }, b[e ? "attr" : "animate"](g).attr({ align: m }), h = (l + 720) % 360, h = h > 180 && h < 360, m === "left" ? g.y -= h ? j.height : 0 : m === "center" ? (g.x -= j.width / 2, g.y -= j.height / 2) : m === "right" && (g.x -= j.width, g.y -= h ? 0 : j.height)) : (b.align(c, null, d), g = b.alignAttr), p ? this.justifyDataLabel(b, c, g, j, d, e) : q(c.crop, !0) && (n = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)), c.shape && !l && b.attr({ anchorX: a.plotX, anchorY: a.plotY });if (!n) Qa(b), b.attr({ y: -9999 }), b.placed = !1;
  };P.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
    var g = this.chart,
        h = b.align,
        i = b.verticalAlign,
        j,
        k,
        l = a.box ? 0 : a.padding || 0;j = c.x + l;if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0;j = c.x + d.width - l;if (j > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;
    j = c.y + l;if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;j = c.y + d.height - l;if (j > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;if (k) a.placed = !f, a.align(b, null, e);
  };if (I.pie) I.pie.prototype.drawDataLabels = function () {
    var a = this,
        b = a.data,
        c,
        d = a.chart,
        e = a.options.dataLabels,
        f = q(e.connectorPadding, 10),
        g = q(e.connectorWidth, 1),
        h = d.plotWidth,
        i = d.plotHeight,
        j,
        k,
        l = q(e.softConnector, !0),
        m = e.distance,
        n = a.center,
        p = n[2] / 2,
        r = n[1],
        s = m > 0,
        t,
        u,
        w,
        F = [[], []],
        x,
        v,
        B,
        D,
        z,
        C = [0, 0, 0, 0],
        G = function G(a, b) {
      return b.y - a.y;
    };if (a.visible && (e.enabled || a._hasPointLabels)) {
      P.prototype.drawDataLabels.apply(a);o(b, function (a) {
        if (a.dataLabel && a.visible) F[a.half].push(a), a.dataLabel._pos = null;
      });for (D = 2; D--;) {
        var J = [],
            M = [],
            H = F[D],
            K = H.length,
            I;if (K) {
          a.sortByAngle(H, D - 0.5);for (z = b = 0; !b && H[z];) {
            b = H[z] && H[z].dataLabel && (H[z].dataLabel.getBBox().height || 21), z++;
          }if (m > 0) {
            u = E(r + p + m, d.plotHeight);for (z = y(0, r - p - m); z <= u; z += b) {
              J.push(z);
            }u = J.length;if (K > u) {
              c = [].concat(H);c.sort(G);for (z = K; z--;) {
                c[z].rank = z;
              }for (z = K; z--;) {
                H[z].rank >= u && H.splice(z, 1);
              }K = H.length;
            }for (z = 0; z < K; z++) {
              c = H[z];w = c.labelPos;c = 9999;var O, N;for (N = 0; N < u; N++) {
                O = T(J[N] - w[1]), O < c && (c = O, I = N);
              }if (I < z && J[z] !== null) I = z;else for (u < K - z + I && J[z] !== null && (I = u - K + z); J[I] === null;) {
                I++;
              }M.push({ i: I, y: J[I] });J[I] = null;
            }M.sort(G);
          }for (z = 0; z < K; z++) {
            c = H[z];w = c.labelPos;t = c.dataLabel;B = c.visible === !1 ? "hidden" : "inherit";c = w[1];if (m > 0) {
              if (u = M.pop(), I = u.i, v = u.y, c > v && J[I + 1] !== null || c < v && J[I - 1] !== null) v = E(y(0, c), d.plotHeight);
            } else v = c;x = e.justify ? n[0] + (D ? -1 : 1) * (p + m) : a.getX(v === r - p - m || v === r + p + m ? c : v, D);t._attr = { visibility: B, align: w[6] };t._pos = { x: x + e.x + ({ left: f, right: -f }[w[6]] || 0), y: v + e.y - 10 };t.connX = x;t.connY = v;if (this.options.size === null) u = t.width, x - u < f ? C[3] = y(A(u - x + f), C[3]) : x + u > h - f && (C[1] = y(A(x + u - h + f), C[1])), v - b / 2 < 0 ? C[0] = y(A(-v + b / 2), C[0]) : v + b / 2 > i && (C[2] = y(A(v + b / 2 - i), C[2]));
          }
        }
      }if (Fa(C) === 0 || this.verifyDataLabelOverflow(C)) this.placeDataLabels(), s && g && o(this.points, function (b) {
        j = b.connector;w = b.labelPos;if ((t = b.dataLabel) && t._pos && b.visible) B = t._attr.visibility, x = t.connX, v = t.connY, k = l ? [W, x + (w[6] === "left" ? 5 : -5), v, "C", x, v, 2 * w[2] - w[4], 2 * w[3] - w[5], w[2], w[3], R, w[4], w[5]] : [W, x + (w[6] === "left" ? 5 : -5), v, R, w[2], w[3], R, w[4], w[5]], j ? (j.animate({ d: k }), j.attr("visibility", B)) : b.connector = j = a.chart.renderer.path(k).attr({ "stroke-width": g, stroke: e.connectorColor || b.color || "#606060", visibility: B }).add(a.dataLabelsGroup);else if (j) b.connector = j.destroy();
      });
    }
  }, I.pie.prototype.placeDataLabels = function () {
    o(this.points, function (a) {
      var b = a.dataLabel;if (b && a.visible) (a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 });
    });
  }, I.pie.prototype.alignDataLabel = va, I.pie.prototype.verifyDataLabelOverflow = function (a) {
    var b = this.center,
        c = this.options,
        d = c.center,
        e = c.minSize || 80,
        f = e,
        g;d[0] !== null ? f = y(b[2] - y(a[1], a[3]), e) : (f = y(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);d[1] !== null ? f = y(E(f, b[2] - y(a[0], a[2])), e) : (f = y(E(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : g = !0;return g;
  };if (I.column) I.column.prototype.alignDataLabel = function (a, b, c, d, e) {
    var f = this.chart.inverted,
        g = a.series,
        h = a.dlBox || a.shapeArgs,
        i = q(a.below, a.plotY > q(this.translatedThreshold, g.yAxis.len)),
        j = q(c.inside, !!this.options.stacking);if (h) {
      d = D(h);if (d.y < 0) d.height += d.y, d.y = 0;h = d.y + d.height - g.yAxis.len;h > 0 && (d.height -= h);f && (d = { x: g.yAxis.len - d.y - d.height, y: g.xAxis.len - d.x - d.width, width: d.height, height: d.width });if (!j) f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
    }c.align = q(c.align, !f || j ? "center" : i ? "right" : "left");c.verticalAlign = q(c.verticalAlign, f || j ? "middle" : i ? "top" : "bottom");P.prototype.alignDataLabel.call(this, a, b, c, d, e);
  };(function (a) {
    var b = a.Chart,
        c = a.each,
        d = a.pick,
        e = a.addEvent;b.prototype.callbacks.push(function (a) {
      function b() {
        var e = [];c(a.series, function (a) {
          var b = a.options.dataLabels,
              f = a.dataLabelCollections || ["dataLabel"];(b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function (b) {
            c(a.points, function (a) {
              if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b]);
            });
          });
        });a.hideOverlappingLabels(e);
      }b();e(a, "redraw", b);
    });b.prototype.hideOverlappingLabels = function (a) {
      var b = a.length,
          d,
          e,
          j,
          k,
          l,
          m,
          n,
          p,
          r;for (e = 0; e < b; e++) {
        if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
      }a.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });for (e = 0; e < b; e++) {
        j = a[e];for (d = e + 1; d < b; ++d) {
          if (k = a[d], j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, m = k.alignAttr, n = j.parentGroup, p = k.parentGroup, r = 2 * (j.box ? 0 : j.padding), l = !(m.x + p.translateX > l.x + n.translateX + (j.width - r) || m.x + p.translateX + (k.width - r) < l.x + n.translateX || m.y + p.translateY > l.y + n.translateY + (j.height - r) || m.y + p.translateY + (k.height - r) < l.y + n.translateY))) (j.labelrank < k.labelrank ? j : k).newOpacity = 0;
        }
      }c(a, function (a) {
        var b, c;if (a) {
          c = a.newOpacity;if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function b() {
            a.hide();
          }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);a.isOld = !0;
        }
      });
    };
  })(B);var ob = B.TrackerMixin = { drawTrackerPoint: function drawTrackerPoint() {
      var a = this,
          b = a.chart,
          c = b.pointer,
          d = a.options.cursor,
          e = d && { cursor: d },
          f = function f(a) {
        for (var c = a.target, d; c && !d;) {
          d = c.point, c = c.parentNode;
        }if (d !== x && d !== b.hoverPoint) d.onMouseOver(a);
      };o(a.points, function (a) {
        if (a.graphic) a.graphic.element.point = a;if (a.dataLabel) a.dataLabel.element.point = a;
      });if (!a._hasTracking) o(a.trackerGroups, function (b) {
        if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
          c.onTrackerMouseOut(a);
        }).css(e), $a)) a[b].on("touchstart", f);
      }), a._hasTracking = !0;
    },
    drawTrackerGraph: function drawTrackerGraph() {
      var a = this,
          b = a.options,
          c = b.trackByArea,
          d = [].concat(c ? a.areaPath : a.graphPath),
          e = d.length,
          f = a.chart,
          g = f.pointer,
          h = f.renderer,
          i = f.options.tooltip.snap,
          j = a.tracker,
          k = b.cursor,
          l = k && { cursor: k },
          m = function m() {
        if (f.hoverSeries !== a) a.onMouseOver();
      },
          n = "rgba(192,192,192," + (ma ? 1.0E-4 : 0.002) + ")";if (e && !c) for (k = e + 1; k--;) {
        d[k] === W && d.splice(k + 1, 0, d[k + 1] - i, d[k + 2], R), (k && d[k] === W || k === e) && d.splice(k, 0, R, d[k - 2] + i, d[k - 1]);
      }j ? j.attr({ d: d }) : (a.tracker = h.path(d).attr({ "stroke-linejoin": "round",
        visibility: a.visible ? "visible" : "hidden", stroke: n, fill: c ? n : "none", "stroke-width": b.lineWidth + (c ? 0 : 2 * i), zIndex: 2 }).add(a.group), o([a.tracker, a.markerGroup], function (a) {
        a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (a) {
          g.onTrackerMouseOut(a);
        }).css(l);if ($a) a.on("touchstart", m);
      }));
    } };if (I.column) Ka.prototype.drawTracker = ob.drawTrackerPoint;if (I.pie) I.pie.prototype.drawTracker = ob.drawTrackerPoint;if (I.scatter) Aa.prototype.drawTracker = ob.drawTrackerPoint;v(xb.prototype, { setItemEvents: function setItemEvents(a, b, c, d, e) {
      var f = this;(c ? b : a.legendGroup).on("mouseover", function () {
        a.setState("hover");b.css(f.options.itemHoverStyle);
      }).on("mouseout", function () {
        b.css(a.visible ? d : e);a.setState();
      }).on("click", function (b) {
        var c = function c() {
          a.setVisible && a.setVisible();
        },
            b = { browserEvent: b };a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : K(a, "legendItemClick", b, c);
      });
    }, createCheckboxForItem: function createCheckboxForItem(a) {
      a.checkbox = ia("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container);G(a.checkbox, "click", function (b) {
        K(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () {
          a.select();
        });
      });
    } });Q.legend.itemStyle.cursor = "pointer";v(Da.prototype, { showResetZoom: function showResetZoom() {
      var a = this,
          b = Q.lang,
          c = a.options.chart.resetZoomButton,
          d = c.theme,
          e = d.states,
          f = c.relativeTo === "chart" ? null : "plotBox";this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
        a.zoomOut();
      }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).add().align(c.position, !1, f);
    }, zoomOut: function zoomOut() {
      var a = this;K(a, "selection", { resetSelection: !0 }, function () {
        a.zoom();
      });
    }, zoom: function zoom(a) {
      var b,
          c = this.pointer,
          d = !1,
          e;!a || a.resetSelection ? o(this.axes, function (a) {
        b = a.zoom();
      }) : o(a.xAxis.concat(a.yAxis), function (a) {
        var e = a.axis,
            h = e.isXAxis;if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0);
      });e = this.resetZoomButton;if (d && !e) this.showResetZoom();else if (!d && ha(e)) this.resetZoomButton = e.destroy();b && this.redraw(q(this.options.chart.animation, a && a.animation, this.pointCount < 100));
    }, pan: function pan(a, b) {
      var c = this,
          d = c.hoverPoints,
          e;d && o(d, function (a) {
        a.setState();
      });o(b === "xy" ? [1, 0] : [1], function (b) {
        var b = c[b ? "xAxis" : "yAxis"][0],
            d = b.horiz,
            h = a[d ? "chartX" : "chartY"],
            d = d ? "mouseDownX" : "mouseDownY",
            i = c[d],
            j = (b.pointRange || 0) / 2,
            k = b.getExtremes(),
            l = b.toValue(i - h, !0) + j,
            j = b.toValue(i + b.len - h, !0) - j,
            i = i > h;if (b.series.length && (i || l > E(k.dataMin, k.min)) && (!i || j < y(k.dataMax, k.max))) b.setExtremes(l, j, !1, !1, { trigger: "pan" }), e = !0;c[d] = h;
      });e && c.redraw(!1);O(c.container, { cursor: "move" });
    } });v(Ja.prototype, { select: function select(a, b) {
      var c = this,
          d = c.series,
          e = d.chart,
          a = q(a, !c.selected);c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
        c.selected = c.options.selected = a;d.options.data[qa(c, d.data)] = c.options;c.setState(a && "select");b || o(e.getSelectedPoints(), function (a) {
          if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[qa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect");
        });
      });
    }, onMouseOver: function onMouseOver(a, b) {
      var c = this.series,
          d = c.chart,
          e = d.tooltip,
          f = d.hoverPoint;if (d.hoverSeries !== c) c.onMouseOver();if (f && f !== this) f.onMouseOut();if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) d.hoverPoint = this;
    }, onMouseOut: function onMouseOut() {
      var a = this.series.chart,
          b = a.hoverPoints;this.firePointEvent("mouseOut");if (!b || qa(this, b) === -1) this.setState(), a.hoverPoint = null;
    }, importEvents: function importEvents() {
      if (!this.hasImportedEvents) {
        var a = D(this.series.options.point, this.options).events,
            b;this.events = a;for (b in a) {
          G(this, b, a[b]);
        }this.hasImportedEvents = !0;
      }
    }, setState: function setState(a, b) {
      var c = Y(this.plotX),
          d = this.plotY,
          e = this.series,
          f = e.options.states,
          g = X[e.type].marker && e.options.marker,
          h = g && !g.enabled,
          i = g && g.states[a],
          j = i && i.enabled === !1,
          k = e.stateMarkerGraphic,
          l = this.marker || {},
          m = e.chart,
          n = e.halo,
          p,
          a = a || "";p = this.pointAttr[a] || e.pointAttr[a];if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
        if (this.graphic) g = g && this.graphic.symbolName && p.r, this.graphic.attr(D(p, g ? { x: c - g, y: d - g, width: 2 * g, height: 2 * g } : {})), k && k.hide();else {
          if (a && i) if (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({ x: c - g, y: d - g });else if (l) e.stateMarkerGraphic = k = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(p).add(e.markerGroup), k.currentSymbol = l;if (k) k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"](), k.element.point = this;
        }if ((c = f[a] && f[a].halo) && c.size) {
          if (!n) e.halo = n = m.renderer.path().add(m.seriesGroup);
          n.attr(v({ fill: this.color || e.color, "fill-opacity": c.opacity, zIndex: -1 }, c.attributes))[b ? "animate" : "attr"]({ d: this.haloPath(c.size) });
        } else n && n.attr({ d: [] });this.state = a;
      }
    }, haloPath: function haloPath(a) {
      var b = this.series,
          c = b.chart,
          d = b.getPlotBox(),
          e = c.inverted,
          f = Math.floor(this.plotX);return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, a * 2, a * 2);
    } });v(P.prototype, { onMouseOver: function onMouseOver() {
      var a = this.chart,
          b = a.hoverSeries;if (b && b !== this) b.onMouseOut();
      this.options.events.mouseOver && K(this, "mouseOver");this.setState("hover");a.hoverSeries = this;
    }, onMouseOut: function onMouseOut() {
      var a = this.options,
          b = this.chart,
          c = b.tooltip,
          d = b.hoverPoint;b.hoverSeries = null;if (d) d.onMouseOut();this && a.events.mouseOut && K(this, "mouseOut");c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();this.setState();
    }, setState: function setState(a) {
      var b = this.options,
          c = this.graph,
          d = b.states,
          e = b.lineWidth,
          b = 0,
          a = a || "";if (this.state !== a && (this.state = a, !(d[a] && d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
        a = { "stroke-width": e };for (c.attr(a); this["zoneGraph" + b];) {
          this["zoneGraph" + b].attr(a), b += 1;
        }
      }
    }, setVisible: function setVisible(a, b) {
      var c = this,
          d = c.chart,
          e = c.legendItem,
          f,
          g = d.options.chart.ignoreHiddenSeries,
          h = c.visible;f = (c.visible = a = c.userOptions.visible = a === x ? !h : a) ? "show" : "hide";o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
        if (c[a]) c[a][f]();
      });if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();e && d.legend.colorizeItem(c, a);c.isDirty = !0;c.options.stacking && o(d.series, function (a) {
        if (a.options.stacking && a.visible) a.isDirty = !0;
      });o(c.linkedSeries, function (b) {
        b.setVisible(a, !1);
      });if (g) d.isDirtyBox = !0;b !== !1 && d.redraw();K(c, f);
    }, show: function show() {
      this.setVisible(!0);
    }, hide: function hide() {
      this.setVisible(!1);
    }, select: function select(a) {
      this.selected = a = a === x ? !this.selected : a;if (this.checkbox) this.checkbox.checked = a;K(this, a ? "select" : "unselect");
    }, drawTracker: ob.drawTrackerGraph });S(P.prototype, "init", function (a) {
    var b;a.apply(this, Array.prototype.slice.call(arguments, 1));(b = this.xAxis) && b.options.ordinal && G(this, "updatedData", function () {
      delete b.ordinalIndex;
    });
  });S(J.prototype, "getTimeTicks", function (a, b, c, d, e, f, g, h) {
    var i = 0,
        j,
        k,
        l = {},
        m,
        n,
        p,
        o = [],
        q = -Number.MAX_VALUE,
        v = this.options.tickPixelInterval;if (!this.options.ordinal && !this.options.breaks || !f || f.length < 3 || c === x) return a.call(this, b, c, d, e);n = f.length;for (j = 0; j < n; j++) {
      p = j && f[j - 1] > d;f[j] < c && (i = j);if (j === n - 1 || f[j + 1] - f[j] > g * 5 || p) {
        if (f[j] > q) {
          for (k = a.call(this, b, f[i], f[j], e); k.length && k[0] <= q;) {
            k.shift();
          }k.length && (q = k[k.length - 1]);o = o.concat(k);
        }i = j + 1;
      }if (p) break;
    }a = k.info;if (h && a.unitRange <= N.hour) {
      j = o.length - 1;for (i = 1; i < j; i++) {
        pa("%d", o[i]) !== pa("%d", o[i - 1]) && (l[o[i]] = "day", m = !0);
      }m && (l[o[0]] = "day");a.higherRanks = l;
    }o.info = a;if (h && t(v)) {
      h = a = o.length;j = [];var u;for (m = []; h--;) {
        i = this.translate(o[h]), u && (m[h] = u - i), j[h] = u = i;
      }m.sort();m = m[Y(m.length / 2)];m < v * 0.6 && (m = null);h = o[a - 1] > d ? a - 1 : a;for (u = void 0; h--;) {
        i = j[h], d = u - i, u && d < v * 0.8 && (m === null || d < m * 0.8) ? (l[o[h]] && !l[o[h + 1]] ? (d = h + 1, u = i) : d = h, o.splice(d, 1)) : u = i;
      }
    }return o;
  });
  v(J.prototype, { beforeSetTickPositions: function beforeSetTickPositions() {
      var a,
          b = [],
          c = !1,
          d,
          e = this.getExtremes(),
          f = e.min,
          g = e.max,
          h,
          i = this.isXAxis && !!this.options.breaks;if ((e = this.options.ordinal) || i) {
        o(this.series, function (c, d) {
          if (c.visible !== !1 && (c.takeOrdinalPosition !== !1 || i)) if (b = b.concat(c.processedXData), a = b.length, b.sort(function (a, b) {
            return a - b;
          }), a) for (d = a - 1; d--;) {
            b[d] === b[d + 1] && b.splice(d, 1);
          }
        });a = b.length;if (a > 2) {
          d = b[1] - b[0];for (h = a - 1; h-- && !c;) {
            b[h + 1] - b[h] !== d && (c = !0);
          }if (!this.options.keepOrdinalPadding && (b[0] - f > d || g - b[b.length - 1] > d)) c = !0;
        }c ? (this.ordinalPositions = b, d = this.val2lin(y(f, b[0]), !0), h = y(this.val2lin(E(g, b[b.length - 1]), !0), 1), this.ordinalSlope = g = (g - f) / (h - d), this.ordinalOffset = f - d * g) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = x;
      }this.isOrdinal = e && c;this.groupIntervalFactor = null;
    }, val2lin: function val2lin(a, b) {
      var c = this.ordinalPositions,
          d;if (c) {
        var e = c.length,
            f;for (d = e; d--;) {
          if (c[d] === a) {
            f = d;break;
          }
        }for (d = e - 1; d--;) {
          if (a > c[d] || d === 0) {
            c = (a - c[d]) / (c[d + 1] - c[d]);f = d + c;break;
          }
        }d = b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset;
      } else d = a;return d;
    }, lin2val: function lin2val(a, b) {
      var c = this.ordinalPositions;if (c) {
        var d = this.ordinalSlope,
            e = this.ordinalOffset,
            f = c.length - 1,
            g,
            h;if (b) a < 0 ? a = c[0] : a > f ? a = c[f] : (f = Y(a), h = a - f);else for (; f--;) {
          if (g = d * f + e, a >= g) {
            d = d * (f + 1) + e;h = (a - g) / (d - g);break;
          }
        }c = h !== x && c[f] !== x ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a;
      } else c = a;return c;
    }, getExtendedPositions: function getExtendedPositions() {
      var a = this.chart,
          b = this.series[0].currentDataGrouping,
          c = this.ordinalIndex,
          d = b ? b.count + b.unitName : "raw",
          e = this.getExtremes(),
          f,
          g;if (!c) c = this.ordinalIndex = {};if (!c[d]) f = { series: [], getExtremes: function getExtremes() {
          return { min: e.dataMin, max: e.dataMax };
        }, options: { ordinal: !0 }, val2lin: J.prototype.val2lin }, o(this.series, function (c) {
        g = { xAxis: f, xData: c.xData, chart: a, destroyGroupedData: va };g.options = { dataGrouping: b ? { enabled: !0, forced: !0, approximation: "open", units: [[b.unitName, [b.count]]] } : { enabled: !1 } };c.processData.apply(g);f.series.push(g);
      }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions;return c[d];
    }, getGroupIntervalFactor: function getGroupIntervalFactor(a, b, c) {
      var d,
          c = c.processedXData,
          e = c.length,
          f = [];d = this.groupIntervalFactor;if (!d) {
        for (d = 0; d < e - 1; d++) {
          f[d] = c[d + 1] - c[d];
        }f.sort(function (a, b) {
          return a - b;
        });f = f[Y(e / 2)];a = y(a, c[0]);b = E(b, c[e - 1]);this.groupIntervalFactor = d = e * f / (b - a);
      }return d;
    }, postProcessTickInterval: function postProcessTickInterval(a) {
      var b = this.ordinalSlope;return b ? this.options.breaks ? this.closestPointRange : a / (b / this.closestPointRange) : a;
    } });S(Da.prototype, "pan", function (a, b) {
    var c = this.xAxis[0],
        d = b.chartX,
        e = !1;if (c.options.ordinal && c.series.length) {
      var f = this.mouseDownX,
          g = c.getExtremes(),
          h = g.dataMax,
          i = g.min,
          j = g.max,
          k = this.hoverPoints,
          l = c.closestPointRange,
          f = (f - d) / (c.translationSlope * (c.ordinalSlope || l)),
          m = { ordinalPositions: c.getExtendedPositions() },
          l = c.lin2val,
          n = c.val2lin,
          p;if (m.ordinalPositions) {
        if (T(f) > 1) k && o(k, function (a) {
          a.setState();
        }), f < 0 ? (k = m, p = c.ordinalPositions ? c : m) : (k = c.ordinalPositions ? c : m, p = m), m = p.ordinalPositions, h > m[m.length - 1] && m.push(h), this.fixedRange = j - i, f = c.toFixedRange(null, null, l.apply(k, [n.apply(k, [i, !0]) + f, !0]), l.apply(p, [n.apply(p, [j, !0]) + f, !0])), f.min >= E(g.dataMin, i) && f.max <= y(h, j) && c.setExtremes(f.min, f.max, !0, !1, { trigger: "pan" }), this.mouseDownX = d, O(this.container, { cursor: "move" });
      } else e = !0;
    } else e = !0;e && a.apply(this, Array.prototype.slice.call(arguments, 1));
  });P.prototype.gappedPath = function () {
    var a = this.options.gapSize,
        b = this.points.slice(),
        c = b.length - 1;if (a && c > 0) for (; c--;) {
      b[c + 1].x - b[c].x > this.closestPointRange * a && b.splice(c + 1, 0, { isNull: !0 });
    }return this.getGraphPath(b);
  };(function (a) {
    a(B);
  })(function (a) {
    function b() {
      return Array.prototype.slice.call(arguments, 1);
    }function c(a) {
      a.apply(this);this.drawBreaks(this.xAxis, ["x"]);this.drawBreaks(this.yAxis, d(this.pointArrayMap, ["y"]));
    }var d = a.pick,
        e = a.wrap,
        f = a.each,
        g = a.extend,
        h = a.fireEvent,
        i = a.Axis,
        j = a.Series;g(i.prototype, { isInBreak: function isInBreak(a, b) {
        var c = a.repeat || Infinity,
            d = a.from,
            e = a.to - a.from,
            c = b >= d ? (b - d) % c : c - (d - b) % c;return a.inclusive ? c <= e : c < e && c !== 0;
      }, isInAnyBreak: function isInAnyBreak(a, b) {
        var c = this.options.breaks,
            e = c && c.length,
            f,
            g,
            h;if (e) {
          for (; e--;) {
            this.isInBreak(c[e], a) && (f = !0, g || (g = d(c[e].showPoints, this.isXAxis ? !1 : !0)));
          }h = f && b ? f && !g : f;
        }return h;
      } });e(i.prototype, "setTickPositions", function (a) {
      a.apply(this, Array.prototype.slice.call(arguments, 1));if (this.options.breaks) {
        var b = this.tickPositions,
            c = this.tickPositions.info,
            d = [],
            e;for (e = 0; e < b.length; e++) {
          this.isInAnyBreak(b[e]) || d.push(b[e]);
        }this.tickPositions = d;this.tickPositions.info = c;
      }
    });e(i.prototype, "init", function (a, b, c) {
      if (c.breaks && c.breaks.length) c.ordinal = !1;a.call(this, b, c);if (this.options.breaks) {
        var d = this;d.isBroken = !0;this.val2lin = function (a) {
          var b = a,
              c,
              e;for (e = 0; e < d.breakArray.length; e++) {
            if (c = d.breakArray[e], c.to <= a) b -= c.len;else if (c.from >= a) break;else if (d.isInBreak(c, a)) {
              b -= a - c.from;break;
            }
          }return b;
        };this.lin2val = function (a) {
          var b, c;for (c = 0; c < d.breakArray.length; c++) {
            if (b = d.breakArray[c], b.from >= a) break;else b.to < a ? a += b.len : d.isInBreak(b, a) && (a += b.len);
          }return a;
        };this.setExtremes = function (a, b, c, d, e) {
          for (; this.isInAnyBreak(a);) {
            a -= this.closestPointRange;
          }for (; this.isInAnyBreak(b);) {
            b -= this.closestPointRange;
          }i.prototype.setExtremes.call(this, a, b, c, d, e);
        };this.setAxisTranslation = function (a) {
          i.prototype.setAxisTranslation.call(this, a);var b = d.options.breaks,
              a = [],
              c = [],
              e = 0,
              f,
              g,
              j = d.userMin || d.min,
              k = d.userMax || d.max,
              l,
              m;for (m in b) {
            g = b[m], f = g.repeat || Infinity, d.isInBreak(g, j) && (j += g.to % f - j % f), d.isInBreak(g, k) && (k -= k % f - g.from % f);
          }for (m in b) {
            g = b[m];l = g.from;for (f = g.repeat || Infinity; l - f > j;) {
              l -= f;
            }for (; l < j;) {
              l += f;
            }for (; l < k; l += f) {
              a.push({ value: l, move: "in" }), a.push({ value: l + (g.to - g.from), move: "out", size: g.breakSize });
            }
          }a.sort(function (a, b) {
            return a.value === b.value ? (a.move === "in" ? 0 : 1) - (b.move === "in" ? 0 : 1) : a.value - b.value;
          });b = 0;l = j;for (m in a) {
            g = a[m];b += g.move === "in" ? 1 : -1;if (b === 1 && g.move === "in") l = g.value;b === 0 && (c.push({ from: l, to: g.value, len: g.value - l - (g.size || 0) }), e += g.value - l - (g.size || 0));
          }d.breakArray = c;h(d, "afterBreaks");d.transA *= (k - d.min) / (k - j - e);d.min = j;d.max = k;
        };
      }
    });e(j.prototype, "generatePoints", function (a) {
      a.apply(this, b(arguments));var c = this.xAxis,
          d = this.yAxis,
          e = this.points,
          f,
          g = e.length,
          h = this.options.connectNulls,
          i;if (c && d && (c.options.breaks || d.options.breaks)) for (; g--;) {
        if (f = e[g], i = f.y === null && h === !1, !i && (c.isInAnyBreak(f.x, !0) || d.isInAnyBreak(f.y, !0))) e.splice(g, 1), this.data[g] && this.data[g].destroyElements();
      }
    });a.Series.prototype.drawBreaks = function (a, b) {
      var c = this,
          e = c.points,
          g,
          i,
          j,
          o;f(b, function (b) {
        g = a.breakArray || [];i = a.isXAxis ? a.min : d(c.options.threshold, a.min);f(e, function (c) {
          o = d(c["stack" + b.toUpperCase()], c[b]);f(g, function (b) {
            j = !1;if (i < b.from && o > b.to || i > b.from && o < b.from) j = "pointBreak";else if (i < b.from && o > b.from && o < b.to || i > b.from && o > b.to && o < b.from) j = "pointInBreak";
            j && h(a, j, { point: c, brk: b });
          });
        });
      });
    };e(a.seriesTypes.column.prototype, "drawPoints", c);e(a.Series.prototype, "drawPoints", c);
  });var la = P.prototype,
      fc = la.processData,
      gc = la.generatePoints,
      hc = la.destroy,
      ic = { approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: { millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"] } },
      $b = { line: {}, spline: {}, area: {}, areaspline: {}, column: { approximation: "sum", groupPixelWidth: 10 }, arearange: { approximation: "range" }, areasplinerange: { approximation: "range" }, columnrange: { approximation: "range", groupPixelWidth: 10 }, candlestick: { approximation: "ohlc", groupPixelWidth: 10 }, ohlc: { approximation: "ohlc", groupPixelWidth: 5 } },
      ac = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]],
      Va = { sum: function sum(a) {
      var b = a.length,
          c;if (!b && a.hasNulls) c = null;else if (b) for (c = 0; b--;) {
        c += a[b];
      }return c;
    }, average: function average(a) {
      var b = a.length,
          a = Va.sum(a);z(a) && b && (a /= b);return a;
    }, open: function open(a) {
      return a.length ? a[0] : a.hasNulls ? null : x;
    }, high: function high(a) {
      return a.length ? Fa(a) : a.hasNulls ? null : x;
    }, low: function low(a) {
      return a.length ? Na(a) : a.hasNulls ? null : x;
    }, close: function close(a) {
      return a.length ? a[a.length - 1] : a.hasNulls ? null : x;
    }, ohlc: function ohlc(a, b, c, d) {
      a = Va.open(a);b = Va.high(b);c = Va.low(c);d = Va.close(d);if (z(a) || z(b) || z(c) || z(d)) return [a, b, c, d];
    }, range: function range(a, b) {
      a = Va.low(a);b = Va.high(b);if (z(a) || z(b)) return [a, b];
    } };la.groupData = function (a, b, c, d) {
    var e = this.data,
        f = this.options.data,
        g = [],
        h = [],
        i = [],
        j = a.length,
        k,
        l,
        m = !!b,
        n = [[], [], [], []],
        d = typeof d === "function" ? d : Va[d],
        p = this.pointArrayMap,
        o = p && p.length,
        q,
        t = 0,
        u = 0;for (q = 0; q <= j; q++) {
      if (a[q] >= c[0]) break;
    }for (; q <= j; q++) {
      for (; c[t + 1] !== void 0 && a[q] >= c[t + 1] || q === j;) {
        if (k = c[t], l = d.apply(0, n), l !== x && (g.push(k), h.push(l), i.push({ start: u, length: n[0].length })), u = q, n[0] = [], n[1] = [], n[2] = [], n[3] = [], t += 1, q === j) break;
      }if (q === j) break;if (p) {
        k = this.cropStart + q;k = e && e[k] || this.pointClass.prototype.applyOptions.apply({ series: this }, [f[k]]);var w;for (l = 0; l < o; l++) {
          if (w = k[p[l]], z(w)) n[l].push(w);else if (w === null) n[l].hasNulls = !0;
        }
      } else if (k = m ? b[q] : null, z(k)) n[0].push(k);else if (k === null) n[0].hasNulls = !0;
    }return [g, h, i];
  };la.processData = function () {
    var a = this.chart,
        b = this.options.dataGrouping,
        c = this.allowDG !== !1 && b && q(b.enabled, a.options._stock),
        d;this.forceCrop = c;this.groupPixelWidth = null;this.hasProcessed = !0;if (fc.apply(this, arguments) !== !1 && c) {
      this.destroyGroupedData();var e = this.processedXData,
          f = this.processedYData,
          g = a.plotSizeX,
          a = this.xAxis,
          h = a.options.ordinal,
          i = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth();if (i) {
        d = !0;this.points = null;var j = a.getExtremes(),
            c = j.min,
            j = j.max,
            h = h && a.getGroupIntervalFactor(c, j, this) || 1,
            g = i * (j - c) / g * h,
            i = a.getTimeTicks(a.normalizeTimeTickInterval(g, b.units || ac), Math.min(c, e[0]), Math.max(j, e[e.length - 1]), a.options.startOfWeek, e, this.closestPointRange),
            e = la.groupData.apply(this, [e, f, i, b.approximation]),
            f = e[0],
            h = e[1];if (b.smoothed) {
          b = f.length - 1;for (f[b] = Math.min(f[b], j); b-- && b > 0;) {
            f[b] += g / 2;
          }f[0] = Math.max(f[0], c);
        }this.currentDataGrouping = i.info;this.closestPointRange = i.info.totalRange;this.groupMap = e[2];if (t(f[0]) && f[0] < a.dataMin) {
          if (a.min === a.dataMin) a.min = f[0];a.dataMin = f[0];
        }this.processedXData = f;this.processedYData = h;
      } else this.currentDataGrouping = this.groupMap = null;this.hasGroupedData = d;
    }
  };la.destroyGroupedData = function () {
    var a = this.groupedData;o(a || [], function (b, c) {
      b && (a[c] = b.destroy ? b.destroy() : null);
    });this.groupedData = null;
  };la.generatePoints = function () {
    gc.apply(this);this.destroyGroupedData();this.groupedData = this.hasGroupedData ? this.points : null;
  };S(Nb.prototype, "tooltipFooterHeaderFormatter", function (a, b, c) {
    var d = b.series,
        e = d.tooltipOptions,
        f = d.options.dataGrouping,
        g = e.xDateFormat,
        h,
        i = d.xAxis;return i && i.options.type === "datetime" && f && z(b.key) ? (a = d.currentDataGrouping, f = f.dateTimeLabelFormats, a ? (i = f[a.unitName], a.count === 1 ? g = i[0] : (g = i[1], h = i[2])) : !g && f && (g = this.getXDateFormat(b, e, i)), g = pa(g, b.key), h && (g += pa(h, b.key + a.totalRange - 1)), Ma(e[(c ? "footer" : "header") + "Format"], { point: v(b.point, { key: g }), series: d })) : a.call(this, b, c);
  });la.destroy = function () {
    for (var a = this.groupedData || [], b = a.length; b--;) {
      a[b] && a[b].destroy();
    }hc.apply(this);
  };S(la, "setOptions", function (a, b) {
    var c = a.call(this, b),
        d = this.type,
        e = this.chart.options.plotOptions,
        f = X[d].dataGrouping;if ($b[d]) f || (f = D(ic, $b[d])), c.dataGrouping = D(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping);if (this.chart.options._stock) this.requireSorting = !0;return c;
  });S(J.prototype, "setScale", function (a) {
    a.call(this);o(this.series, function (a) {
      a.hasProcessed = !1;
    });
  });J.prototype.getGroupPixelWidth = function () {
    var a = this.series,
        b = a.length,
        c,
        d = 0,
        e = !1,
        f;for (c = b; c--;) {
      (f = a[c].options.dataGrouping) && (d = y(d, f.groupPixelWidth));
    }for (c = b; c--;) {
      if ((f = a[c].options.dataGrouping) && a[c].hasProcessed) if (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) e = !0;
    }return e ? d : 0;
  };J.prototype.setDataGrouping = function (a, b) {
    var c,
        b = q(b, !0);a || (a = { forced: !1, units: null });if (this instanceof J) for (c = this.series.length; c--;) {
      this.series[c].update({ dataGrouping: a }, !1);
    } else o(this.chart.options.series, function (b) {
      b.dataGrouping = a;
    }, !1);b && this.chart.redraw();
  };X.ohlc = D(X.column, { lineWidth: 1, tooltip: { pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>" },
    states: { hover: { lineWidth: 3 } }, threshold: null });ga = oa(I.column, { type: "ohlc", pointArrayMap: ["open", "high", "low", "close"], toYData: function toYData(a) {
      return [a.open, a.high, a.low, a.close];
    }, pointValKey: "high", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, upColorProp: "stroke", getAttribs: function getAttribs() {
      I.column.prototype.getAttribs.apply(this, arguments);var a = this.options,
          b = a.states,
          a = a.upColor || this.color,
          c = D(this.pointAttr),
          d = this.upColorProp;c[""][d] = a;c.hover[d] = b.hover.upColor || a;c.select[d] = b.select.upColor || a;o(this.points, function (a) {
        if (a.open < a.close && !a.options.color) a.pointAttr = c;
      });
    }, translate: function translate() {
      var a = this.yAxis;I.column.prototype.translate.apply(this);o(this.points, function (b) {
        if (b.open !== null) b.plotOpen = a.translate(b.open, 0, 1, 0, 1);if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1);
      });
    }, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j;o(a.points, function (k) {
        if (k.plotY !== x) i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] % 2 / 2, j = A(k.plotX) - f, g = A(k.shapeArgs.width / 2), h = ["M", j, A(k.yBottom), "L", j, A(k.plotY)], k.open !== null && (d = A(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = A(k.plotClose) + f, h.push("M", j, e, "L", j + g, e)), i ? i.attr(c).animate({ d: h }) : k.graphic = b.renderer.path(h).attr(c).add(a.group);
      });
    }, animate: null });I.ohlc = ga;X.candlestick = D(X.column, { lineColor: "black", lineWidth: 1, states: { hover: { lineWidth: 2 } }, tooltip: X.ohlc.tooltip, threshold: null, upColor: "white" });ga = oa(ga, { type: "candlestick", pointAttrToOptions: { fill: "color", stroke: "lineColor",
      "stroke-width": "lineWidth" }, upColorProp: "fill", getAttribs: function getAttribs() {
      I.ohlc.prototype.getAttribs.apply(this, arguments);var a = this.options,
          b = a.states,
          c = a.upLineColor || a.lineColor,
          d = b.hover.upLineColor || c,
          e = b.select.upLineColor || c;o(this.points, function (a) {
        if (a.open < a.close) {
          if (a.lineColor) a.pointAttr = D(a.pointAttr), c = a.lineColor;a.pointAttr[""].stroke = c;a.pointAttr.hover.stroke = d;a.pointAttr.select.stroke = e;
        }
      });
    }, drawPoints: function drawPoints() {
      var a = this,
          b = a.chart,
          c,
          d = a.pointAttr[""],
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p;o(a.points, function (o) {
        m = o.graphic;if (o.plotY !== x) c = o.pointAttr[o.selected ? "selected" : ""] || d, k = c["stroke-width"] % 2 / 2, l = A(o.plotX) - k, e = o.plotOpen, f = o.plotClose, g = aa.min(e, f), h = aa.max(e, f), p = A(o.shapeArgs.width / 2), i = A(g) !== A(o.plotY), j = h !== o.yBottom, g = A(g) + k, h = A(h) + k, n = [], n.push("M", l - p, h, "L", l - p, g, "L", l + p, g, "L", l + p, h, "Z", "M", l, g, "L", l, i ? A(o.plotY) : g, "M", l, h, "L", l, j ? A(o.yBottom) : h), m ? m.attr(c).animate({ d: n }) : o.graphic = b.renderer.path(n).attr(c).add(a.group).shadow(a.options.shadow);
      });
    } });I.candlestick = ga;var yb = za.prototype.symbols;X.flags = D(X.column, { fillColor: "white", lineWidth: 1, pointRange: 0, shape: "flag", stackDistance: 12, states: { hover: { lineColor: "black", fillColor: "#FCFFC5" } }, style: { fontSize: "11px", fontWeight: "bold", textAlign: "center" }, tooltip: { pointFormat: "{point.text}<br/>" }, threshold: null, y: -30 });I.flags = oa(I.column, { type: "flags", sorted: !1, noSharedTooltip: !0, allowDG: !1, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: P.prototype.init, pointAttrToOptions: { fill: "fillColor", stroke: "color",
      "stroke-width": "lineWidth", r: "radius" }, translate: function translate() {
      I.column.prototype.translate.apply(this);var a = this.options,
          b = this.chart,
          c = this.points,
          d = c.length - 1,
          e,
          f,
          g = a.onSeries;e = g && b.get(g);var a = a.onKey || "y",
          g = e && e.options.step,
          h = e && e.points,
          i = h && h.length,
          j = this.xAxis,
          k = j.getExtremes(),
          l,
          m,
          n;if (e && e.visible && i) {
        e = e.currentDataGrouping;m = h[i - 1].x + (e ? e.totalRange : 0);c.sort(function (a, b) {
          return a.x - b.x;
        });for (a = "plot" + a[0].toUpperCase() + a.substr(1); i-- && c[d];) {
          if (e = c[d], l = h[i], l.x <= e.x && l[a] !== void 0) {
            if (e.x <= m) e.plotY = l[a], l.x < e.x && !g && (n = h[i + 1]) && n[a] !== x && (e.plotY += (e.x - l.x) / (n.x - l.x) * (n[a] - l[a]));d--;i++;if (d < 0) break;
          }
        }
      }o(c, function (a, d) {
        var e;if (a.plotY === x) a.x >= k.min && a.x <= k.max ? a.plotY = b.chartHeight - j.bottom - (j.opposite ? j.height : 0) + j.offset - b.plotTop : a.shapeArgs = {};if ((f = c[d - 1]) && f.plotX === a.plotX) {
          if (f.stackIndex === x) f.stackIndex = 0;e = f.stackIndex + 1;
        }a.stackIndex = e;
      });
    }, drawPoints: function drawPoints() {
      var a,
          b = this.pointAttr[""],
          c = this.points,
          d = this.chart,
          e = d.renderer,
          f,
          g,
          h = this.options,
          i = h.y,
          j,
          k,
          l,
          m,
          n,
          p,
          o = this.yAxis,
          s;for (k = c.length; k--;) {
        if (l = c[k], a = l.plotX > this.xAxis.len, f = l.plotX, f > 0 && (f -= q(l.lineWidth, h.lineWidth) % 2), m = l.stackIndex, j = l.options.shape || h.shape, g = l.plotY, g !== x && (g = l.plotY + i - (m !== x && m * h.stackDistance)), n = m ? x : l.plotX, p = m ? x : l.plotY, m = l.graphic, g !== x && f >= 0 && !a) a = l.pointAttr[l.selected ? "select" : ""] || b, s = q(l.options.title, h.title, "A"), m ? m.attr({ text: s }).attr({ x: f, y: g, r: a.r, anchorX: n, anchorY: p }) : l.graphic = e.label(s, f, g, j, n, p, h.useHTML).css(D(h.style, l.style)).attr(a).attr({ align: j === "flag" ? "left" : "center",
          width: h.width, height: h.height }).add(this.markerGroup).shadow(h.shadow), l.tooltipPos = d.inverted ? [o.len + o.pos - d.plotLeft - g, this.xAxis.len - f] : [f, g];else if (m) l.graphic = m.destroy();
      }
    }, drawTracker: function drawTracker() {
      var a = this.points;ob.drawTrackerPoint.apply(this);o(a, function (b) {
        var c = b.graphic;c && G(c.element, "mouseover", function () {
          if (b.stackIndex > 0 && !b.raised) b._y = c.y, c.attr({ y: b._y - 8 }), b.raised = !0;o(a, function (a) {
            if (a !== b && a.raised && a.graphic) a.graphic.attr({ y: a._y }), a.raised = !1;
          });
        });
      });
    }, animate: va, buildKDTree: va,
    setClip: va });yb.flag = function (a, b, c, d, e) {
    return ["M", e && e.anchorX || a, e && e.anchorY || b, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "Z"];
  };o(["circle", "square"], function (a) {
    yb[a + "pin"] = function (b, c, d, e, f) {
      var g = f && f.anchorX,
          f = f && f.anchorY;a === "circle" && e > d && (b -= A((e - d) / 2), d = e);b = yb[a](b, c, d, e);g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);return b;
    };
  });Za === B.VMLRenderer && o(["flag", "circlepin", "squarepin"], function (a) {
    nb.prototype.symbols[a] = yb[a];
  });var Wb = { height: lb ? 20 : 14, barBackgroundColor: "#bfc8d1", barBorderRadius: 0, barBorderWidth: 1,
    barBorderColor: "#bfc8d1", buttonArrowColor: "#666", buttonBackgroundColor: "#ebe7e8", buttonBorderColor: "#bbb", buttonBorderRadius: 0, buttonBorderWidth: 1, margin: 10, minWidth: 6, rifleColor: "#666", zIndex: 3, step: 0.2, trackBackgroundColor: "#eeeeee", trackBorderColor: "#eeeeee", trackBorderWidth: 1, liveRedraw: ma && !lb };Q.scrollbar = D(!0, Wb, Q.scrollbar);tb.prototype = { render: function render() {
      var a = this.renderer,
          b = this.options,
          c = b.trackBorderWidth,
          d = b.barBorderWidth,
          e = this.size,
          f;this.group = f = a.g("highcharts-scrollbar").attr({ zIndex: b.zIndex,
        translateY: -99999 }).add();this.track = a.rect().attr({ height: e, width: e, y: -c % 2 / 2, x: -c % 2 / 2, "stroke-width": c, fill: b.trackBackgroundColor, stroke: b.trackBorderColor, r: b.trackBorderRadius || 0 }).add(f);this.scrollbarGroup = a.g().add(f);this.scrollbar = a.rect().attr({ height: e, width: e, y: -d % 2 / 2, x: -d % 2 / 2, "stroke-width": d, fill: b.barBackgroundColor, stroke: b.barBorderColor, r: b.barBorderRadius || 0 }).add(this.scrollbarGroup);this.scrollbarRifles = a.path(this.swapXY([W, -3, e / 4, R, -3, 2 * e / 3, W, 0, e / 4, R, 0, 2 * e / 3, W, 3, e / 4, R, 3, 2 * e / 3], b.vertical)).attr({ stroke: b.rifleColor, "stroke-width": 1 }).add(this.scrollbarGroup);this.drawScrollbarButton(0);this.drawScrollbarButton(1);
    }, position: function position(a, b, c, d) {
      var e = this.options,
          f = e.vertical,
          g = 0,
          h = this.rendered ? "animate" : "attr";this.x = a;this.y = b + e.trackBorderWidth;this.width = c;this.xOffset = this.height = d;this.yOffset = g;f ? (this.width = this.yOffset = c = g = this.size, this.xOffset = b = 0, this.barWidth = d - c * 2, this.x = a += this.options.margin) : (this.height = this.xOffset = d = b = this.size, this.barWidth = c - d * 2, this.y += this.options.margin);this.group[h]({ translateX: a, translateY: this.y });this.track[h]({ width: c, height: d });this.scrollbarButtons[1].attr({ translateX: f ? 0 : c - b, translateY: f ? d - g : 0 });
    }, drawScrollbarButton: function drawScrollbarButton(a) {
      var b = this.renderer,
          c = this.scrollbarButtons,
          d = this.options,
          e = this.size,
          f;f = b.g().add(this.group);c.push(f);b.rect(-0.5, -0.5, e + 1, e + 1, d.buttonBorderRadius, d.buttonBorderWidth).attr({ stroke: d.buttonBorderColor, "stroke-width": d.buttonBorderWidth, fill: d.buttonBackgroundColor }).add(f);b.path(this.swapXY(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, "L", e / 2 + (a ? 2 : -2), e / 2], d.vertical)).attr({ fill: d.buttonArrowColor }).add(f);
    }, swapXY: function swapXY(a, b) {
      var c,
          d = a.length,
          e;if (b) for (c = 0; c < d; c += 3) {
        e = a[c + 1], a[c + 1] = a[c + 2], a[c + 2] = e;
      }return a;
    }, setRange: function setRange(a, b) {
      var c = this.options,
          d = c.vertical,
          e,
          f,
          g,
          h = this.rendered && !this.hasDragged ? "animate" : "attr";if (t(this.barWidth)) e = this.barWidth * Math.max(a, 0), f = this.barWidth * Math.min(b, 1), f = Math.max(V(f - e), c.minWidth), e = Math.floor(e + this.xOffset + this.yOffset), g = f / 2 - 0.5, this.from = a, this.to = b, d ? (this.scrollbarGroup[h]({ translateY: e }), this.scrollbar[h]({ height: f }), this.scrollbarRifles[h]({ translateY: g }), this.scrollbarTop = e, this.scrollbarLeft = 0) : (this.scrollbarGroup[h]({ translateX: e }), this.scrollbar[h]({ width: f }), this.scrollbarRifles[h]({ translateX: g }), this.scrollbarLeft = e, this.scrollbarTop = 0), f <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), c.showFull === !1 && (a <= 0 && b >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0;
    }, initEvents: function initEvents() {
      var a = this;a.mouseMoveHandler = function (b) {
        var c = a.chart.pointer.normalize(b),
            d = a.options.vertical ? "chartY" : "chartX",
            e = a.initPositions;if (a.grabbedCenter && (!b.touches || b.touches[0][d] !== 0)) c = { chartX: (c.chartX - a.x - a.xOffset) / a.barWidth, chartY: (c.chartY - a.y - a.yOffset) / a.barWidth }[d], d = a[d], d = c - d, a.hasDragged = !0, a.updatePosition(e[0] + d, e[1] + d), a.hasDragged && K(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMType: b.type, DOMEvent: b });
      };a.mouseUpHandler = function (b) {
        a.hasDragged && K(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar",
          DOMType: b.type, DOMEvent: b });a.grabbedCenter = a.hasDragged = a.chartX = a.chartY = null;
      };a.mouseDownHandler = function (b) {
        b = a.chart.pointer.normalize(b);a.chartX = (b.chartX - a.x - a.xOffset) / a.barWidth;a.chartY = (b.chartY - a.y - a.yOffset) / a.barWidth;a.initPositions = [a.from, a.to];a.grabbedCenter = !0;
      };a.buttonToMinClick = function (b) {
        var c = V(a.to - a.from) * a.options.step;a.updatePosition(V(a.from - c), V(a.to - c));K(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
      };a.buttonToMaxClick = function (b) {
        var c = (a.to - a.from) * a.options.step;a.updatePosition(a.from + c, a.to + c);K(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
      };a.trackClick = function (b) {
        var c = a.chart.pointer.normalize(b),
            d = a.to - a.from,
            e = a.y + a.scrollbarTop,
            f = a.x + a.scrollbarLeft;a.options.vertical && c.chartY > e || !a.options.vertical && c.chartX > f ? a.updatePosition(a.from + d, a.to + d) : a.updatePosition(a.from - d, a.to - d);K(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b });
      };
    }, updatePosition: function updatePosition(a, b) {
      b > 1 && (a = V(1 - V(b - a)), b = 1);a < 0 && (b = V(b - a), a = 0);this.from = a;this.to = b;
    }, addEvents: function addEvents() {
      var a = this.options.inverted ? [1, 0] : [0, 1],
          b = this.scrollbarButtons,
          c = this.scrollbarGroup.element,
          d = this.mouseDownHandler,
          e = this.mouseMoveHandler,
          f = this.mouseUpHandler,
          a = [[b[a[0]].element, "click", this.buttonToMinClick], [b[a[1]].element, "click", this.buttonToMaxClick], [this.track.element, "click", this.trackClick], [c, "mousedown", d], [C, "mousemove", e], [C, "mouseup", f]];$a && a.push([c, "touchstart", d], [C, "touchmove", e], [C, "touchend", f]);o(a, function (a) {
        G.apply(null, a);
      });this._events = a;
    }, removeEvents: function removeEvents() {
      o(this._events, function (a) {
        U.apply(null, a);
      });this._events = x;
    }, destroy: function destroy() {
      this.removeEvents();o([this.track, this.scrollbarRifles, this.scrollbar, this.scrollbarGroup, this.group], function (a) {
        a && a.destroy && a.destroy();
      });Oa(this.scrollbarButtons);
    } };S(J.prototype, "init", function (a) {
    var b = this;a.apply(b, [].slice.call(arguments, 1));if (b.options.scrollbar && b.options.scrollbar.enabled) b.options.scrollbar.vertical = !b.horiz, b.options.startOnTick = b.options.endOnTick = !1, b.scrollbar = new tb(b.chart.renderer, b.options.scrollbar, b.chart), G(b.scrollbar, "changed", function (a) {
      var d = Math.min(q(b.options.min, b.min), b.min, b.dataMin),
          e = Math.max(q(b.options.max, b.max), b.max, b.dataMax) - d,
          f;b.horiz && !b.reversed || !b.horiz && b.reversed ? (f = d + e * this.to, d += e * this.from) : (f = d + e * (1 - this.from), d += e * (1 - this.to));b.setExtremes(d, f, !0, !1, a);
    });
  });S(J.prototype, "render", function (a) {
    var b = Math.min(q(this.options.min, this.min), this.min, this.dataMin),
        c = Math.max(q(this.options.max, this.max), this.max, this.dataMax),
        d = this.scrollbar,
        e;a.apply(this, [].slice.call(arguments, 1));d && (this.horiz ? d.position(this.left, this.top + this.height + this.offset + 2 + (this.opposite ? 0 : this.axisTitleMargin), this.width, this.height) : d.position(this.left + this.width + 2 + this.offset + (this.opposite ? this.axisTitleMargin : 0), this.top, this.width, this.height), isNaN(b) || isNaN(c) || !t(this.min) || !t(this.max) ? d.setRange(0, 0) : (e = (this.min - b) / (c - b), b = (this.max - b) / (c - b), this.horiz && !this.reversed || !this.horiz && this.reversed ? d.setRange(e, b) : d.setRange(1 - b, 1 - e)));
  });S(J.prototype, "getOffset", function (a) {
    var b = this.horiz ? 2 : 1,
        c = this.scrollbar;a.apply(this, [].slice.call(arguments, 1));c && (this.chart.axisOffset[b] += c.size + c.options.margin);
  });S(J.prototype, "destroy", function (a) {
    if (this.scrollbar) this.scrollbar = this.scrollbar.destroy();a.apply(this, [].slice.call(arguments, 1));
  });B.Scrollbar = tb;var ga = [].concat(ac),
      zb = function zb(a) {
    var b = Ha(arguments, z);if (b.length) return Math[a].apply(0, b);
  };ga[4] = ["day", [1, 2, 3, 4]];ga[5] = ["week", [1, 2, 3]];v(Q, { navigator: { handles: { backgroundColor: "#ebe7e8",
        borderColor: "#b2b1b6" }, height: 40, margin: 25, maskFill: "rgba(128,179,236,0.3)", maskInside: !0, outlineColor: "#b2b1b6", outlineWidth: 1, series: { type: I.areaspline === x ? "line" : "areaspline", color: "#4572A7", compare: null, fillOpacity: 0.05, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: ga }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", lineColor: null, lineWidth: 1, marker: { enabled: !1 }, pointRange: 0, shadow: !1, threshold: null }, xAxis: { tickWidth: 0, lineWidth: 0, gridLineColor: "#EEE",
        gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#888" }, x: 3, y: -4 }, crosshair: !1 }, yAxis: { gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, maxPadding: 0.1, labels: { enabled: !1 }, crosshair: !1, title: { text: null }, tickWidth: 0 } } });Jb.prototype = { drawHandle: function drawHandle(a, b) {
      var c = this.chart.renderer,
          d = this.elementsToDestroy,
          e = this.handles,
          f = this.navigatorOptions.handles,
          f = { fill: f.backgroundColor, stroke: f.borderColor, "stroke-width": 1 },
          g;this.rendered || (e[b] = c.g("navigator-handle-" + ["left", "right"][b]).css({ cursor: "ew-resize" }).attr({ zIndex: 10 - b }).add(), g = c.rect(-4.5, 0, 9, 16, 0, 1).attr(f).add(e[b]), d.push(g), g = c.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(f).add(e[b]), d.push(g));e[b][this.rendered && !this.hasDragged ? "animate" : "attr"]({ translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), translateY: this.top + this.height / 2 - 8 });
    }, render: function render(a, b, c, d) {
      var e = this.chart,
          f = e.renderer,
          g,
          h,
          i,
          j,
          k = this.navigatorGroup;j = this.scrollbarHeight;var k = this.xAxis,
          l = this.navigatorOptions,
          m = this.height,
          n = this.top,
          p = this.navigatorEnabled,
          o = l.outlineWidth,
          s = o / 2,
          v = this.outlineHeight,
          u = n + s,
          w = this.rendered;if (z(a) && z(b) && (!this.hasDragged || t(c))) {
        this.navigatorLeft = g = q(k.left, e.plotLeft + j);this.navigatorWidth = h = q(k.len, e.plotWidth - 2 * j);this.scrollerLeft = i = g - j;this.scrollerWidth = j = j = h + 2 * j;c = q(c, k.translate(a));d = q(d, k.translate(b));if (!z(c) || T(c) === Infinity) c = 0, d = j;if (!(k.translate(d, !0) - k.translate(c, !0) < e.xAxis[0].minRange)) {
          this.zoomedMax = E(y(c, d, 0), h);this.zoomedMin = E(y(this.fixedWidth ? this.zoomedMax - this.fixedWidth : E(c, d), 0), h);this.range = this.zoomedMax - this.zoomedMin;b = A(this.zoomedMax);a = A(this.zoomedMin);if (!w && p) this.navigatorGroup = k = f.g("navigator").attr({ zIndex: 3 }).add(), this.leftShade = f.rect().attr({ fill: l.maskFill }).add(k), l.maskInside ? this.leftShade.css({ cursor: "ew-resize" }) : this.rightShade = f.rect().attr({ fill: l.maskFill }).add(k), this.outline = f.path().attr({ "stroke-width": o, stroke: l.outlineColor }).add(k);f = w && !this.hasDragged ? "animate" : "attr";if (p) {
            this.leftShade[f](l.maskInside ? { x: g + a, y: n, width: b - a, height: m } : { x: g, y: n, width: a, height: m });if (this.rightShade) this.rightShade[f]({ x: g + b, y: n, width: h - b, height: m });this.outline[f]({ d: [W, i, u, R, g + a - s, u, g + a - s, u + v, R, g + b - s, u + v, R, g + b - s, u, i + j, u].concat(l.maskInside ? [W, g + a + s, u, R, g + b - s, u] : []) });this.drawHandle(a + s, 0);this.drawHandle(b + s, 1);
          }if (this.scrollbar) this.scrollbar.hasDragged = this.hasDragged, this.scrollbar.position(this.scrollerLeft, this.top + (p ? this.height : -this.scrollbarHeight), this.scrollerWidth, this.scrollbarHeight), this.scrollbar.setRange(a / h, b / h);this.rendered = !0;
        }
      }
    }, addEvents: function addEvents() {
      var a = this.chart,
          b = a.container,
          c = this.mouseDownHandler,
          d = this.mouseMoveHandler,
          e = this.mouseUpHandler,
          f;f = [[b, "mousedown", c], [b, "mousemove", d], [C, "mouseup", e]];$a && f.push([b, "touchstart", c], [b, "touchmove", d], [C, "touchend", e]);o(f, function (a) {
        G.apply(null, a);
      });this._events = f;this.series && G(this.series.xAxis, "foundExtremes", function () {
        a.scroller.modifyNavigatorAxisExtremes();
      });G(a, "redraw", function () {
        var a = this.scroller,
            b = a && a.baseSeries && a.baseSeries.xAxis;
        b && a.render(b.min, b.max);
      });
    }, removeEvents: function removeEvents() {
      o(this._events, function (a) {
        U.apply(null, a);
      });this._events = x;this.removeBaseSeriesEvents();
    }, removeBaseSeriesEvents: function removeBaseSeriesEvents() {
      this.navigatorEnabled && this.baseSeries && this.baseSeries.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1 && (U(this.baseSeries, "updatedData", this.updatedDataHandler), U(this.baseSeries.xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
    }, init: function init() {
      var a = this,
          b = a.chart,
          c,
          d,
          e = a.scrollbarHeight,
          f = a.navigatorOptions,
          g = a.height,
          h = a.top,
          i,
          j = a.baseSeries;a.mouseDownHandler = function (d) {
        var d = b.pointer.normalize(d),
            e = a.zoomedMin,
            f = a.zoomedMax,
            h = a.top,
            j = a.scrollerLeft,
            k = a.scrollerWidth,
            l = a.navigatorLeft,
            o = a.navigatorWidth,
            q = a.scrollbarPad || 0,
            t = a.range,
            v = d.chartX,
            x = d.chartY,
            d = b.xAxis[0],
            y,
            z = lb ? 10 : 7;if (x > h && x < h + g) if (aa.abs(v - e - l) < z) a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null;else if (aa.abs(v - f - l) < z) a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null;else if (v > l + e - q && v < l + f + q) a.grabbedCenter = v, a.fixedWidth = t, i = v - e;else if (v > j && v < j + k) {
          f = v - l - t / 2;if (f < 0) f = 0;else if (f + t >= o) f = o - t, y = a.getUnionExtremes().dataMax;if (f !== e) a.fixedWidth = t, e = c.toFixedRange(f, f + t, null, y), d.setExtremes(e.min, e.max, !0, null, { trigger: "navigator" });
        }
      };a.mouseMoveHandler = function (c) {
        var d = a.scrollbarHeight,
            e = a.navigatorLeft,
            f = a.navigatorWidth,
            g = a.scrollerLeft,
            h = a.scrollerWidth,
            j = a.range,
            k;if (!c.touches || c.touches[0].pageX !== 0) {
          c = b.pointer.normalize(c);k = c.chartX;k < e ? k = e : k > g + h - d && (k = g + h - d);if (a.grabbedLeft) a.hasDragged = !0, a.render(0, 0, k - e, a.otherHandlePos);else if (a.grabbedRight) a.hasDragged = !0, a.render(0, 0, a.otherHandlePos, k - e);else if (a.grabbedCenter) a.hasDragged = !0, k < i ? k = i : k > f + i - j && (k = f + i - j), a.render(0, 0, k - i, k - i + j);if (a.hasDragged && a.scrollbar && a.scrollbar.options.liveRedraw) c.DOMType = c.type, setTimeout(function () {
            a.mouseUpHandler(c);
          }, 0);
        }
      };a.mouseUpHandler = function (d) {
        var e,
            f,
            g = d.DOMEvent || d;if (a.hasDragged || d.trigger === "scrollbar") {
          if (a.zoomedMin === a.otherHandlePos) e = a.fixedExtreme;else if (a.zoomedMax === a.otherHandlePos) f = a.fixedExtreme;if (a.zoomedMax === a.navigatorWidth) f = a.getUnionExtremes().dataMax;e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f);t(e.min) && b.xAxis[0].setExtremes(e.min, e.max, !0, a.hasDragged ? !1 : null, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: g });
        }if (d.DOMType !== "mousemove") a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = a.hasDragged = i = null;
      };var k = b.xAxis.length,
          l = b.yAxis.length;b.extraBottomMargin = a.outlineHeight + f.margin;a.navigatorEnabled ? (a.xAxis = c = new J(b, D({ breaks: j && j.xAxis.options.breaks, ordinal: j && j.xAxis.options.ordinal }, f.xAxis, { id: "navigator-x-axis", isX: !0, type: "datetime", index: k, height: g, offset: 0, offsetLeft: e, offsetRight: -e, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1 })), a.yAxis = d = new J(b, D(f.yAxis, { id: "navigator-y-axis", alignTicks: !1, height: g, offset: 0, index: l, zoomEnabled: !1 })), j || f.series.data ? a.addBaseSeries() : b.series.length === 0 && S(b, "redraw", function (c, d) {
        if (b.series.length > 0 && !a.series) a.setBaseSeries(), b.redraw = c;c.call(b, d);
      })) : a.xAxis = c = { translate: function translate(a, c) {
          var d = b.xAxis[0],
              f = d.getExtremes(),
              g = b.plotWidth - 2 * e,
              h = zb("min", d.options.min, f.dataMin),
              d = zb("max", d.options.max, f.dataMax) - h;return c ? a * d / g + h : g * (a - h) / d;
        }, toFixedRange: J.prototype.toFixedRange };if (b.options.scrollbar.enabled) a.scrollbar = new tb(b.renderer, D(b.options.scrollbar, { margin: a.navigatorEnabled ? 0 : 10 }), b), G(a.scrollbar, "changed", function (c) {
        var d = a.navigatorWidth,
            e = d * this.to;d *= this.from;a.hasDragged = a.scrollbar.hasDragged;a.render(0, 0, d, e);(b.options.scrollbar.liveRedraw || c.DOMType !== "mousemove") && setTimeout(function () {
          a.mouseUpHandler(c);
        });
      });a.addBaseSeriesEvents();S(b, "getMargins", function (b) {
        var e = this.legend,
            f = e.options;b.apply(this, [].slice.call(arguments, 1));a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign === "bottom" && f.enabled && !f.floating ? e.legendHeight + q(f.margin, 10) : 0);if (c && d) c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize();
      });a.addEvents();
    }, getUnionExtremes: function getUnionExtremes(a) {
      var b = this.chart.xAxis[0],
          c = this.xAxis,
          d = c.options,
          e = b.options,
          f;if (!a || b.dataMin !== null) f = { dataMin: q(d && d.min, zb("min", e.min, b.dataMin, c.dataMin, c.min)), dataMax: q(d && d.max, zb("max", e.max, b.dataMax, c.dataMax, c.max)) };return f;
    }, setBaseSeries: function setBaseSeries(a) {
      var b = this.chart,
          a = a || b.options.navigator.baseSeries;this.series && (this.removeBaseSeriesEvents(), this.series.remove());this.baseSeries = b.series[a] || typeof a === "string" && b.get(a) || b.series[0];this.xAxis && this.addBaseSeries();
    }, addBaseSeries: function addBaseSeries() {
      var a = this.baseSeries,
          b = a ? a.options : {},
          a = b.data,
          c = this.navigatorOptions.series,
          d;d = c.data;this.hasNavigatorData = !!d;b = D(b, c, { enableMouseTracking: !1, group: "nav", padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", name: "Navigator", showInLegend: !1, stacking: !1, isInternal: !0, visible: !0 });b.data = d || a.slice(0);this.series = this.chart.initSeries(b);this.addBaseSeriesEvents();
    }, addBaseSeriesEvents: function addBaseSeriesEvents() {
      var a = this.baseSeries;if (a && a.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1) G(a, "updatedData", this.updatedDataHandler), G(a.xAxis, "foundExtremes", this.modifyBaseAxisExtremes), a.userOptions.events = v(a.userOptions.event, { updatedData: this.updatedDataHandler });
    }, modifyNavigatorAxisExtremes: function modifyNavigatorAxisExtremes() {
      var a = this.xAxis,
          b;if (a.getExtremes && (b = this.getUnionExtremes(!0)) && (b.dataMin !== a.min || b.dataMax !== a.max)) a.min = b.dataMin, a.max = b.dataMax;
    }, modifyBaseAxisExtremes: function modifyBaseAxisExtremes() {
      if (this.chart.scroller.baseSeries && this.chart.scroller.baseSeries.xAxis) {
        var a = this.chart.scroller,
            b = this.getExtremes(),
            c = b.dataMin,
            d = b.dataMax,
            b = b.max - b.min,
            e = a.stickToMin,
            f = a.stickToMax,
            g,
            h,
            i = a.series,
            j = !!this.setExtremes;if (!(this.eventArgs && this.eventArgs.trigger === "rangeSelectorButton") && (e && (h = c, g = h + b), f && (g = d, e || (h = y(g - b, i && i.xData ? i.xData[0] : -Number.MAX_VALUE))), j && (e || f) && z(h))) this.min = this.userMin = h, this.max = this.userMax = g;a.stickToMin = a.stickToMax = null;
      }
    }, updatedDataHandler: function updatedDataHandler() {
      var a = this.chart.scroller,
          b = a.baseSeries,
          c = a.series;a.stickToMin = z(b.xAxis.min) && b.xAxis.min <= b.xData[0];a.stickToMax = Math.round(a.zoomedMax) >= Math.round(a.navigatorWidth);if (c && !a.hasNavigatorData) c.options.pointStart = b.xData[0], c.setData(b.options.data, !1, null, !1);
    }, destroy: function destroy() {
      this.removeEvents();o([this.scrollbar, this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline], function (a) {
        a && a.destroy && a.destroy();
      });this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = null;o([this.handles, this.elementsToDestroy], function (a) {
        Oa(a);
      });
    } };B.Navigator = Jb;S(J.prototype, "zoom", function (a, b, c) {
    var d = this.chart,
        e = d.options,
        f = e.chart.zoomType,
        g = e.navigator,
        e = e.rangeSelector,
        h;if (this.isXAxis && (g && g.enabled || e && e.enabled)) if (f === "x") d.resetZoomButton = "blocked";else if (f === "y") h = !1;else if (f === "xy") d = this.previousZoom, t(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);return h !== x ? h : a.call(this, b, c);
  });S(Da.prototype, "init", function (a, b, c) {
    G(this, "beforeRender", function () {
      var a = this.options;if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new Jb(this);
    });a.call(this, b, c);
  });S(P.prototype, "addPoint", function (a, b, c, d, e) {
    var f = this.options.turboThreshold;f && this.xData.length > f && ha(b, !0) && this.chart.scroller && ja(20, !0);a.call(this, b, c, d, e);
  });v(Q, { rangeSelector: { buttonTheme: { width: 28, height: 18, fill: "#f7f7f7", padding: 2, r: 0, "stroke-width": 0, style: { color: "#444", cursor: "pointer", fontWeight: "normal" }, zIndex: 7, states: { hover: { fill: "#e7e7e7" }, select: { fill: "#e7f0f9", style: { color: "black", fontWeight: "bold" } } } }, height: 35, inputPosition: { align: "right" }, labelStyle: { color: "#666" } } });Q.lang = D(Q.lang, { rangeSelectorZoom: "Zoom",
    rangeSelectorFrom: "From", rangeSelectorTo: "To" });Kb.prototype = { clickButton: function clickButton(a, b) {
      var c = this,
          d = c.selected,
          e = c.chart,
          f = c.buttons,
          g = c.buttonOptions[a],
          h = e.xAxis[0],
          i = e.scroller && e.scroller.getUnionExtremes() || h || {},
          j = i.dataMin,
          k = i.dataMax,
          l,
          m = h && A(E(h.max, q(k, h.max))),
          n = g.type,
          p,
          i = g._range,
          r,
          s,
          t,
          u = g.dataGrouping;if (!(j === null || k === null || a === c.selected)) {
        e.fixedRange = i;if (u) this.forcedDataGrouping = !0, J.prototype.setDataGrouping.call(h || { chart: this.chart }, u, !1);if (n === "month" || n === "year") {
          if (h) {
            if (n = { range: g, max: m, dataMin: j, dataMax: k }, l = h.minFromRange.call(n), z(n.newMax)) m = n.newMax;
          } else i = g;
        } else if (i) l = y(m - i, j), m = E(l + i, k);else if (n === "ytd") {
          if (h) {
            if (k === x) j = Number.MAX_VALUE, k = Number.MIN_VALUE, o(e.series, function (a) {
              a = a.xData;j = E(a[0], j);k = y(a[a.length - 1], k);
            }), b = !1;m = new ea(k);l = m.getFullYear();l = r = y(j || 0, ea.UTC(l, 0, 1));m = m.getTime();m = E(k || m, m);
          } else {
            G(e, "beforeRender", function () {
              c.clickButton(a);
            });return;
          }
        } else n === "all" && h && (l = j, m = k);f[d] && f[d].setState(0);if (f[a]) f[a].setState(2), c.lastSelected = a;h ? (h.setExtremes(l, m, q(b, 1), null, { trigger: "rangeSelectorButton", rangeSelectorButton: g }), c.setSelected(a)) : (p = sa(e.options.xAxis)[0], t = p.range, p.range = i, s = p.min, p.min = r, c.setSelected(a), G(e, "load", function () {
          p.range = t;p.min = s;
        }));
      }
    }, setSelected: function setSelected(a) {
      this.selected = this.options.selected = a;
    }, defaultButtons: [{ type: "month", count: 1, text: "1m" }, { type: "month", count: 3, text: "3m" }, { type: "month", count: 6, text: "6m" }, { type: "ytd", text: "YTD" }, { type: "year", count: 1, text: "1y" }, { type: "all", text: "All" }], init: function init(a) {
      var b = this,
          c = a.options.rangeSelector,
          d = c.buttons || [].concat(b.defaultButtons),
          e = c.selected,
          f = b.blurInputs = function () {
        var a = b.minInput,
            c = b.maxInput;a && a.blur && K(a, "blur");c && c.blur && K(c, "blur");
      };b.chart = a;b.options = c;b.buttons = [];a.extraTopMargin = c.height;b.buttonOptions = d;G(a.container, "mousedown", f);G(a, "resize", f);o(d, b.computeButtonRange);e !== x && d[e] && this.clickButton(e, !1);G(a, "load", function () {
        G(a.xAxis[0], "setExtremes", function (c) {
          this.max - this.min !== a.fixedRange && c.trigger !== "rangeSelectorButton" && c.trigger !== "updatedData" && b.forcedDataGrouping && this.setDataGrouping(!1, !1);
        });G(a.xAxis[0], "afterSetExtremes", function () {
          b.updateButtonStates(!0);
        });
      });
    }, updateButtonStates: function updateButtonStates(a) {
      var b = this,
          c = this.chart,
          d = c.xAxis[0],
          e = c.scroller && c.scroller.getUnionExtremes() || d,
          f = e.dataMin,
          g = e.dataMax,
          h = b.selected,
          i = b.options.allButtonsEnabled,
          j = b.buttons;a && c.fixedRange !== A(d.max - d.min) && (j[h] && j[h].setState(0), b.setSelected(null));o(b.buttonOptions, function (a, e) {
        var m = A(d.max - d.min),
            n = a._range,
            o = a.type,
            q = a.count || 1,
            s = n > g - f,
            t = n < d.minRange,
            u = a.type === "all" && d.max - d.min >= g - f && j[e].state !== 2,
            w = a.type === "ytd" && pa("%Y", f) === pa("%Y", g),
            v = c.renderer.forExport && e === h,
            n = n === m,
            x = !d.hasVisibleSeries;if ((o === "month" || o === "year") && m >= { month: 28, year: 365 }[o] * 864E5 * q && m <= { month: 31, year: 366 }[o] * 864E5 * q) n = !0;v || n && e !== h && e === b.lastSelected ? (b.setSelected(e), j[e].setState(2)) : !i && (s || t || u || w || x) ? j[e].setState(3) : j[e].state === 3 && j[e].setState(0);
      });
    }, computeButtonRange: function computeButtonRange(a) {
      var b = a.type,
          c = a.count || 1,
          d = { millisecond: 1, second: 1E3,
        minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5 };if (d[b]) a._range = d[b] * c;else if (b === "month" || b === "year") a._range = { month: 30, year: 365 }[b] * 864E5 * c;
    }, setInputValue: function setInputValue(a, b) {
      var c = this.chart.options.rangeSelector;if (t(b)) this[a + "Input"].HCTime = b;this[a + "Input"].value = pa(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);this[a + "DateBox"].attr({ text: pa(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime) });
    }, showInput: function showInput(a) {
      var b = this.inputGroup,
          c = this[a + "DateBox"];O(this[a + "Input"], { left: b.translateX + c.x + "px", top: b.translateY + "px", width: c.width - 2 + "px", height: c.height - 2 + "px", border: "2px solid silver" });
    }, hideInput: function hideInput(a) {
      O(this[a + "Input"], { border: 0, width: "1px", height: "1px" });this.setInputValue(a);
    }, drawInput: function drawInput(a) {
      function b() {
        var a = j.value,
            b = (g.inputDateParser || ea.parse)(a),
            e = d.xAxis[0],
            f = e.dataMin,
            h = e.dataMax;if (b !== j.previousValue) j.previousValue = b, z(b) || (b = a.split("-"), b = ea.UTC(H(b[0]), H(b[1]) - 1, H(b[2]))), z(b) && (Q.global.useUTC || (b += new ea().getTimezoneOffset() * 6E4), i ? b > c.maxInput.HCTime ? b = x : b < f && (b = f) : b < c.minInput.HCTime ? b = x : b > h && (b = h), b !== x && d.xAxis[0].setExtremes(i ? b : e.min, i ? e.max : b, x, x, { trigger: "rangeSelectorInput" }));
      }var c = this,
          d = c.chart,
          e = d.renderer.style,
          f = d.renderer,
          g = d.options.rangeSelector,
          h = c.div,
          i = a === "min",
          j,
          k,
          l = this.inputGroup;this[a + "Label"] = k = f.label(Q.lang[i ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({ padding: 2 }).css(D(e, g.labelStyle)).add(l);l.offset += k.width + 5;this[a + "DateBox"] = f = f.label("", l.offset).attr({ padding: 2, width: g.inputBoxWidth || 90, height: g.inputBoxHeight || 17, stroke: g.inputBoxBorderColor || "silver", "stroke-width": 1 }).css(D({ textAlign: "center", color: "#444" }, e, g.inputStyle)).on("click", function () {
        c.showInput(a);c[a + "Input"].focus();
      }).add(l);l.offset += f.width + (i ? 10 : 0);this[a + "Input"] = j = ia("input", { name: a, className: "highcharts-range-selector", type: "text" }, v({ position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: e.fontSize, fontFamily: e.fontFamily, left: "-9em", top: d.plotTop + "px" }, g.inputStyle), h);j.onfocus = function () {
        c.showInput(a);
      };j.onblur = function () {
        c.hideInput(a);
      };j.onchange = b;j.onkeypress = function (a) {
        a.keyCode === 13 && b();
      };
    }, getPosition: function getPosition() {
      var a = this.chart,
          b = a.options.rangeSelector,
          a = q((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height);return { buttonTop: a, inputTop: a - 10 };
    }, render: function render(a, b) {
      var c = this,
          d = c.chart,
          e = d.renderer,
          f = d.container,
          g = d.options,
          h = g.exporting && g.exporting.enabled !== !1 && g.navigation && g.navigation.buttonOptions,
          i = g.rangeSelector,
          j = c.buttons,
          g = Q.lang,
          k = c.div,
          k = c.inputGroup,
          l = i.buttonTheme,
          m = i.buttonPosition || {},
          n = i.inputEnabled,
          p = l && l.states,
          r = d.plotLeft,
          s,
          x = this.getPosition(),
          u = c.group,
          w = c.rendered;if (!w && (c.group = u = e.g("range-selector-buttons").add(), c.zoomText = e.text(g.rangeSelectorZoom, q(m.x, r), 15).css(i.labelStyle).add(u), s = q(m.x, r) + c.zoomText.getBBox().width + 5, o(c.buttonOptions, function (a, b) {
        j[b] = e.button(a.text, s, 0, function () {
          c.clickButton(b);c.isActive = !0;
        }, l, p && p.hover, p && p.select, p && p.disabled).css({ textAlign: "center" }).add(u);s += j[b].width + q(i.buttonSpacing, 5);c.selected === b && j[b].setState(2);
      }), c.updateButtonStates(), n !== !1)) c.div = k = ia("div", null, { position: "relative", height: 0, zIndex: 1 }), f.parentNode.insertBefore(k, f), c.inputGroup = k = e.g("input-group").add(), k.offset = 0, c.drawInput("min"), c.drawInput("max");u[w ? "animate" : "attr"]({ translateY: x.buttonTop });n !== !1 && (k.align(v({ y: x.inputTop, width: k.offset, x: h && x.inputTop < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0 }, i.inputPosition), !0, d.spacingBox), t(n) || (d = u.getBBox(), k[k.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b));c.rendered = !0;
    }, destroy: function destroy() {
      var a = this.minInput,
          b = this.maxInput,
          c = this.chart,
          d = this.blurInputs,
          e;U(c.container, "mousedown", d);U(c, "resize", d);Oa(this.buttons);if (a) a.onfocus = a.onblur = a.onchange = null;if (b) b.onfocus = b.onblur = b.onchange = null;for (e in this) {
        this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Wa(this[e])), this[e] = null;
      }
    } };J.prototype.toFixedRange = function (a, b, c, d) {
    var e = this.chart && this.chart.fixedRange,
        a = q(c, this.translate(a, !0)),
        b = q(d, this.translate(b, !0)),
        c = e && (b - a) / e;c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e);z(a) || (a = b = void 0);return { min: a, max: b };
  };J.prototype.minFromRange = function () {
    var a = this.range,
        b = { month: "Month", year: "FullYear" }[a.type],
        c,
        d = this.max,
        e,
        f,
        g = function g(a, c) {
      var d = new ea(a);d["set" + b](d["get" + b]() + c);return d.getTime() - a;
    };z(a) ? (c = this.max - a, f = a) : c = d + g(d, -a.count);e = q(this.dataMin, Number.MIN_VALUE);z(c) || (c = e);if (c <= e) c = e, f === void 0 && (f = g(c, a.count)), this.newMax = E(c + f, this.dataMax);z(d) || (c = void 0);return c;
  };S(Da.prototype, "init", function (a, b, c) {
    G(this, "init", function () {
      if (this.options.rangeSelector.enabled) this.rangeSelector = new Kb(this);
    });a.call(this, b, c);
  });B.RangeSelector = Kb;Da.prototype.callbacks.push(function (a) {
    function b() {
      d = a.xAxis[0].getExtremes();z(d.min) && f.render(d.min, d.max);
    }function c(a) {
      f.render(a.min, a.max);
    }var d,
        e = a.scroller,
        f = a.rangeSelector;e && (d = a.xAxis[0].getExtremes(), e.render(d.min, d.max));f && (G(a.xAxis[0], "afterSetExtremes", c), G(a, "resize", b), b());G(a, "destroy", function () {
      f && (U(a, "resize", b), U(a.xAxis[0], "afterSetExtremes", c));
    });
  });B.StockChart = B.stockChart = function (a, b, c) {
    var d = Ea(a) || a.nodeName,
        e = arguments[d ? 1 : 0],
        f = e.series,
        g,
        h = q(e.navigator && e.navigator.enabled, !0) ? { startOnTick: !1, endOnTick: !1 } : null,
        i = { marker: { enabled: !1, radius: 2 } },
        j = { shadow: !1, borderWidth: 0 };e.xAxis = wa(sa(e.xAxis || {}), function (a) {
      return D({ minPadding: 0, maxPadding: 0, ordinal: !0, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: !0 }, a, { type: "datetime", categories: null }, h);
    });e.yAxis = wa(sa(e.yAxis || {}), function (a) {
      g = q(a.opposite, !0);return D({ labels: { y: -2 }, opposite: g, showLastLabel: !1, title: { text: null } }, a);
    });e.series = null;e = D({ chart: { panning: !0, pinchType: "x" }, navigator: { enabled: !0 }, scrollbar: { enabled: !0 }, rangeSelector: { enabled: !0 }, title: { text: null, style: { fontSize: "16px" } }, tooltip: { shared: !0, crosshairs: !0 }, legend: { enabled: !1 }, plotOptions: { line: i, spline: i, area: i, areaspline: i, arearange: i, areasplinerange: i, column: j, columnrange: j, candlestick: j, ohlc: j } }, e, { _stock: !0, chart: { inverted: !1 } });
    e.series = f;return d ? new Da(a, e, c) : new Da(e, b);
  };S(ab.prototype, "init", function (a, b, c) {
    var d = c.chart.pinchType || "";a.call(this, b, c);this.pinchX = this.pinchHor = d.indexOf("x") !== -1;this.pinchY = this.pinchVert = d.indexOf("y") !== -1;this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert;
  });S(J.prototype, "autoLabelAlign", function (a) {
    var b = this.chart,
        c = this.options,
        b = b._labelPanes = b._labelPanes || {},
        d = this.options.labels;if (this.chart.options._stock && this.coll === "yAxis" && (c = c.top + "," + c.height, !b[c] && d.enabled)) {
      if (d.x === 15) d.x = 0;if (d.align === void 0) d.align = "right";b[c] = 1;return "right";
    }return a.call(this, [].slice.call(arguments, 1));
  });S(J.prototype, "getPlotLinePath", function (a, b, c, d, e, f) {
    var g = this,
        h = this.isLinked && !this.series ? this.linkedParent.series : this.series,
        i = g.chart,
        j = i.renderer,
        k = g.left,
        l = g.top,
        m,
        n,
        p,
        r,
        s = [],
        v = [],
        u,
        w;if (g.coll === "colorAxis") return a.apply(this, [].slice.call(arguments, 1));v = g.isXAxis ? t(g.options.yAxis) ? [i.yAxis[g.options.yAxis]] : wa(h, function (a) {
      return a.yAxis;
    }) : t(g.options.xAxis) ? [i.xAxis[g.options.xAxis]] : wa(h, function (a) {
      return a.xAxis;
    });o(g.isXAxis ? i.yAxis : i.xAxis, function (a) {
      if (t(a.options.id) ? a.options.id.indexOf("navigator") === -1 : 1) {
        var b = a.isXAxis ? "yAxis" : "xAxis",
            b = t(a.options[b]) ? i[b][a.options[b]] : i[b][0];g === b && v.push(a);
      }
    });u = v.length ? [] : [g.isXAxis ? i.yAxis[0] : i.xAxis[0]];o(v, function (a) {
      qa(a, u) === -1 && u.push(a);
    });w = q(f, g.translate(b, null, null, d));z(w) && (g.horiz ? o(u, function (a) {
      var b;n = a.pos;r = n + a.len;m = p = A(w + g.transB);if (m < k || m > k + g.width) e ? m = p = E(y(k, m), k + g.width) : b = !0;b || s.push("M", m, n, "L", p, r);
    }) : o(u, function (a) {
      var b;m = a.pos;p = m + a.len;n = r = A(l + g.height - w);if (n < l || n > l + g.height) e ? n = r = E(y(l, n), g.top + g.height) : b = !0;b || s.push("M", m, n, "L", p, r);
    }));return s.length > 0 ? j.crispPolyLine(s, c || 1) : null;
  });J.prototype.getPlotBandPath = function (a, b) {
    var c = this.getPlotLinePath(b, null, null, !0),
        d = this.getPlotLinePath(a, null, null, !0),
        e = [],
        f;if (d && c && d.toString() !== c.toString()) for (f = 0; f < d.length; f += 6) {
      e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
    } else e = null;return e;
  };za.prototype.crispPolyLine = function (a, b) {
    var c;for (c = 0; c < a.length; c += 6) {
      a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = A(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = A(a[c + 2]) + b % 2 / 2);
    }return a;
  };if (Za === B.VMLRenderer) nb.prototype.crispPolyLine = za.prototype.crispPolyLine;S(J.prototype, "hideCrosshair", function (a, b) {
    a.call(this, b);if (this.crossLabel) this.crossLabel = this.crossLabel.hide();
  });S(J.prototype, "drawCrosshair", function (a, b, c) {
    var d, e;a.call(this, b, c);if (t(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
      var a = this.chart,
          f = this.options.crosshair.label,
          g = this.horiz,
          h = this.opposite,
          i = this.left,
          j = this.top,
          k = this.crossLabel,
          l,
          m = f.format,
          n = "",
          o = this.options.tickPosition === "inside",
          r = this.crosshair.snap !== !1;b || (b = this.cross && this.cross.e);l = g ? "center" : h ? this.labelAlign === "right" ? "right" : "left" : this.labelAlign === "left" ? "left" : "center";if (!k) k = this.crossLabel = a.renderer.label(null, null, null, f.shape || "callout").attr({ align: f.align || l, zIndex: 12, fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray", padding: q(f.padding, 8), stroke: f.borderColor || "", "stroke-width": f.borderWidth || 0, r: q(f.borderRadius, 3) }).css(v({ color: "white", fontWeight: "normal", fontSize: "11px", textAlign: "center" }, f.style)).add();g ? (l = r ? c.plotX + i : b.chartX, j += h ? 0 : this.height) : (l = h ? this.width + i : 0, j = r ? c.plotY + j : b.chartY);!m && !f.formatter && (this.isDatetimeAxis && (n = "%b %d, %Y"), m = "{value" + (n ? ":" + n : "") + "}");b = r ? c[this.isXAxis ? "x" : "y"] : this.toValue(g ? b.chartX : b.chartY);k.attr({ text: m ? Ma(m, { value: b }) : f.formatter.call(this, b), anchorX: g ? l : this.opposite ? 0 : a.chartWidth,
        anchorY: g ? this.opposite ? a.chartHeight : 0 : j, x: l, y: j, visibility: "visible" });b = k.getBBox();if (g) {
        if (o && !h || !o && h) j = k.y - b.height;
      } else j = k.y - b.height / 2;g ? (d = i - b.x, e = i + this.width - b.x) : (d = this.labelAlign === "left" ? i : 0, e = this.labelAlign === "right" ? i + this.width : a.chartWidth);k.translateX < d && (l += d - k.translateX);k.translateX + b.width >= e && (l -= k.translateX + b.width - e);k.attr({ x: l, y: j, visibility: "visible" });
    }
  });var jc = la.init,
      kc = la.processData,
      lc = Ja.prototype.tooltipFormatter;la.init = function () {
    jc.apply(this, arguments);
    this.setCompare(this.options.compare);
  };la.setCompare = function (a) {
    this.modifyValue = a === "value" || a === "percent" ? function (b, c) {
      var d = this.compareValue;if (b !== x && (b = a === "value" ? b - d : b = 100 * (b / d) - 100, c)) c.change = b;return b;
    } : null;this.userOptions.compare = a;if (this.chart.hasRendered) this.isDirty = !0;
  };la.processData = function () {
    var a,
        b = -1,
        c,
        d,
        e,
        f;kc.apply(this, arguments);if (this.xAxis && this.processedYData) {
      c = this.processedXData;d = this.processedYData;e = d.length;this.pointArrayMap && (b = qa(this.pointValKey || "y", this.pointArrayMap));
      for (a = 0; a < e - 1; a++) {
        if (f = b > -1 ? d[a][b] : d[a], z(f) && c[a + 1] >= this.xAxis.min && f !== 0) {
          this.compareValue = f;break;
        }
      }
    }
  };S(la, "getExtremes", function (a) {
    var b;a.apply(this, [].slice.call(arguments, 1));if (this.modifyValue) b = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = Na(b), this.dataMax = Fa(b);
  });J.prototype.setCompare = function (a, b) {
    this.isXAxis || (o(this.series, function (b) {
      b.setCompare(a);
    }), q(b, !0) && this.chart.redraw());
  };Ja.prototype.tooltipFormatter = function (a) {
    a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + B.numberFormat(this.change, q(this.series.tooltipOptions.changeDecimals, 2)));return lc.apply(this, [a]);
  };S(P.prototype, "render", function (a) {
    if (this.chart.options._stock && this.xAxis) !this.clipBox && this.animate ? (this.clipBox = D(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && (Qa(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({ width: this.xAxis.len, height: this.yAxis.len }));a.call(this);
  });
  v(B, { Color: xa, Point: Ja, Tick: eb, Renderer: Za, SVGElement: ba, SVGRenderer: za, arrayMin: Na, arrayMax: Fa, charts: ca, correctFloat: V, dateFormat: pa, error: ja, format: Ma, pathAnim: void 0, getOptions: function getOptions() {
      return Q;
    }, hasBidiBug: bc, isTouchDevice: lb, setOptions: function setOptions(a) {
      Q = D(!0, Q, a);Qb();return Q;
    }, addEvent: G, removeEvent: U, createElement: ia, discardElement: Wa, css: O, each: o, map: wa, merge: D, splat: sa, stableSort: pb, extendClass: oa, pInt: H, svg: ma, canvas: ua, vml: !ma && !ua, product: "Highstock", version: "4.2.6" });return B;
});