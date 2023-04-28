import { reactive as Ne, onMounted as Qt, nextTick as Be, onActivated as Pr, isRef as Vv, watch as ie, onBeforeUnmount as _t, onDeactivated as _n, unref as tt, inject as Mv, getCurrentInstance as Qa, computed as R, provide as Bv, isVNode as yt, Comment as Ev, Fragment as Oe, ref as M, createApp as Iv, h as vs, onBeforeMount as Nv, onUnmounted as _a, defineComponent as _, createVNode as J, Teleport as Da, Transition as ze, withDirectives as Se, vShow as Cr, mergeProps as Ee, openBlock as p, createBlock as ye, resolveDynamicComponent as xa, normalizeClass as c, normalizeStyle as W, resolveComponent as te, resolveDirective as Ie, withCtx as ve, createElementVNode as z, renderSlot as F, toDisplayString as ae, createElementBlock as O, renderList as Ae, createCommentVNode as ee, onUpdated as xt, createTextVNode as we, pushScopeId as za, popScopeId as Aa, withModifiers as gn, normalizeProps as bt, guardReactiveProps as eo, vModelText as Dv, toRefs as zv, watchEffect as Av, withKeys as qi, toRaw as Xi, TransitionGroup as Lv } from "vue";
var fs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, dS = Ne(fs);
const hn = Ne(fs), Ue = (e) => typeof e == "string", Po = (e) => typeof e == "boolean", an = (e) => typeof e == "number", bi = (e) => Object.prototype.toString.call(e) === "[object Object]", Rv = (e) => typeof e == "object" && e !== null, wt = (e) => typeof e == "function", $e = (e) => Array.isArray(e), Uv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ue(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Po(e) ? Number(e) : e, Ht = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, wi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, Ct = () => typeof window < "u", Ki = (e) => [...new Set(e)], cs = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Hv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Fv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Oo = (e) => $e(e) ? e : [e];
var Zi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ji = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Yv = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && Ht(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Vo = (e) => e, Qi = (e) => Math.pow(e, 3), ms = (e) => e < 0.5 ? Qi(e * 2) / 2 : 1 - Qi((1 - e) * 2) / 2, no = (e, n) => e ?? n, ps = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ba = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function $n(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function _i(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function xi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        xi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        xi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Wv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function el(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function dt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ci(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Gv(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = jv(function* (e) {
    yield Dn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: l
    } = window, i = a <= o && t >= 0, s = n <= l && r >= 0;
    return i && s;
  }), Mo.apply(this, arguments);
}
function bo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Sr(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function qv(e) {
  for (var n = [], r = e; r !== window; )
    r = Sr(r), n.push(r);
  return n;
}
function hs(e, n) {
  if (Ue(e)) {
    var r = document.querySelector(e);
    return r || $n(n, "target element cannot found"), r;
  }
  if (Rv(e))
    return e;
  $n(n, 'type of prop "target" should be a selector or an element object');
}
function nl() {
  var {
    innerWidth: e,
    innerHeight: n
  } = window;
  return e > n ? {
    vMin: n,
    vMax: e
  } : {
    vMin: e,
    vMax: n
  };
}
var gs = (e) => Ue(e) && e.endsWith("rem"), Xv = (e) => Ue(e) && e.endsWith("px") || an(e), Kv = (e) => Ue(e) && e.endsWith("%"), ys = (e) => Ue(e) && e.endsWith("vw"), bs = (e) => Ue(e) && e.endsWith("vh"), ws = (e) => Ue(e) && e.endsWith("vmin"), Cs = (e) => Ue(e) && e.endsWith("vmax"), Zv = (e) => Ue(e) && e.startsWith("calc("), Jv = (e) => Ue(e) && e.startsWith("var("), Re = (e) => {
  if (an(e))
    return e;
  if (Xv(e))
    return +e.replace("px", "");
  if (ys(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (bs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (gs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return ws(e) ? nl().vMin : Cs(e) ? nl().vMax : Ue(e) ? L(e) : 0;
}, ge = (e) => {
  if (e != null)
    return Kv(e) || ys(e) || bs(e) || gs(e) || Zv(e) || Jv(e) || ws(e) || Cs(e) ? e : Re(e) + "px";
}, nn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ge(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function wn(e) {
  var n = ps();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function rl(e) {
  var n = ps();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ro(e) {
  wn(() => {
    wn(e);
  });
}
function Dn() {
  return new Promise((e) => {
    wn(() => {
      wn(e);
    });
  });
}
function Qv() {
  return new Promise((e) => {
    wn(e);
  });
}
function vt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = dt(e), s = Ci(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), wn(d);
      } else
        e.scrollTo(a, r), u();
    };
    wn(d);
  });
}
function Ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Hv(a);
    return n[o] = t, n;
  }, {});
}
function _v() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Ft(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function dn(e) {
  let n = !1;
  Qt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), Pr(() => {
    n && e();
  });
}
function Kn(e, n, r, a = {}) {
  if (!Ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => wt(m) ? m() : tt(m), u = (m) => {
    if (l || i)
      return;
    const g = s(m);
    g && (g.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const g = s(m);
    g && (g.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let v;
  Vv(e) && (v = ie(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return dn(() => {
    u(e);
  }), _t(() => {
    d(e);
  }), _n(() => {
    d(e);
  }), f;
}
function ks(e, n, r) {
  if (!Ct())
    return;
  Kn(document, n, (t) => {
    const o = tt(e);
    o && !o.contains(t.target) && r(t);
  });
}
var xv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function ef(e) {
  const n = Qa();
  return e in n.provides;
}
function vn(e) {
  if (!ef(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Mv(e), { childInstances: r, collect: a, clear: t } = n, o = xv(n, ["childInstances", "collect", "clear"]), l = Qa();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Qt(() => {
        Be().then(() => {
          a(l, u);
        });
      }), _t(() => {
        Be().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function nf(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      yt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function fn(e) {
  const n = Qa(), r = Ne([]), a = [], t = R(() => r.length), o = () => {
    const u = nf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ht(r, u), Ht(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Bv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bo.apply(this, arguments);
}
function qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function rf(e) {
  var n = Iv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function et(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => vs(e, Bo({}, n, r));
    }
  }, {
    unmount: t
  } = rf(a);
  return {
    unmountInstance: t
  };
}
function $s(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Ev) {
      if (r.type === Oe && $e(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function Tn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = tl(function* (o, l, i) {
      if (!$e(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(l, i)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(l, i, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = tl(function* (o, l, i, s, u) {
      o.includes(l) && (yield n(i, s, u)) && (e.value = "");
    });
    return function(l, i, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function af(e) {
  Kn(() => window, "hashchange", e), Kn(() => window, "popstate", e);
}
function ao() {
  var e = M(!1);
  return Pr(() => {
    e.value = !1;
  }), _n(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function x(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if ($e(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    n: a,
    classes: t
  };
}
function $(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if ($e(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function cn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Ts(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return R({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : $(e[i], d);
      }
    });
  var u = M(s());
  return ie(() => e[n], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : $(e[i], d);
  }), u;
}
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}
var {
  n: Ps
} = x("ripple"), ol = 250;
function tf(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function of(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, m = u - l;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: i
  };
}
function Os(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !hn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = of(this, e), s = document.createElement("div");
      s.classList.add(Ps()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), tf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Eo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ps());
    if (r.length) {
      var a = r[r.length - 1], t = ol - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ol);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Vs() {
  if (!(!_v() || !hn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function lf(e, n) {
  var r;
  e._ripple = Yt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Eo.bind(e)
  }), e.addEventListener("touchstart", Os, {
    passive: !0
  }), e.addEventListener("touchmove", Vs, {
    passive: !0
  }), e.addEventListener("dragstart", Eo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function sf(e) {
  e.removeEventListener("touchstart", Os), e.removeEventListener("touchmove", Vs), e.removeEventListener("dragstart", Eo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function uf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Yt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ms = {
  mounted: lf,
  unmounted: sf,
  updated: uf,
  install(e) {
    e.directive("ripple", this);
  }
}, vS = Ms;
const He = Ms;
function df(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var St = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: df
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function Bs() {
  var e = Object.keys(hn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Pt(e) {
  hn.locks[e] = 1, Bs();
}
function Ot(e) {
  delete hn.locks[e], Bs();
}
function to(e, n) {
  var {
    uid: r
  } = Qa();
  n && ie(n, (a) => {
    a === !1 ? Ot(r) : a === !0 && e() === !0 && Pt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? Pt(r) : Ot(r));
  }), Nv(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  }), _a(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), Pr(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  }), _n(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  });
}
function kt(e, n) {
  var r = M(hn.zIndex);
  return ie(e, (a) => {
    a && (hn.zIndex += n, r.value = hn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Io.apply(this, arguments);
}
function vf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Rn,
  classes: wo
} = x("popup");
const Cn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: St,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = kt(() => e.show, 3), {
      disabled: o
    } = ao(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), af(() => $(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: wo(Rn("overlay"), d),
        style: Io({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => J("div", Ee({
      class: wo(Rn("content"), Rn("--" + e.position), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: y
      } = e;
      return J(ze, {
        name: Rn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(J("div", {
          class: wo(Rn("$--box"), Rn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), J(ze, {
          name: g || Rn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Cr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return J(Da, {
          to: d,
          disabled: o.value
        }, vf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var fS = Cn, Es = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: {
    type: String
  },
  onClick: U()
};
function il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ff(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cf,
  classes: mf
} = x("icon");
function pf(e, n) {
  return p(), ye(
    xa(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
      style: W({
        color: e.color,
        "transition-duration": e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
var Is = _({
  name: "VarIcon",
  props: Es,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = ff(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: cf,
      classes: mf,
      nextName: n,
      animateInProgress: r,
      isURL: Uv,
      toNumber: L,
      toSizeUnit: ge
    };
  }
});
Is.render = pf;
const Pe = Is;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var cS = Pe;
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, No.apply(this, arguments);
}
var hf = No({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: U(),
  "onUpdate:show": U()
}, qe(St, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
const Si = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往"
}, Ns = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
function ki() {
  var e = {}, n = M({}), r = (o, l) => {
    l.lang = o, e[o] = l;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, l) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = Do({}, e[o], l), a(o);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: Ds,
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs
} = ki();
$i("zh-CN", Si);
Ti("zh-CN");
var mS = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs,
  useLocale: ki
};
const zo = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs,
  useLocale: ki
};
var {
  n: gf,
  classes: yf
} = x("action-sheet"), bf = ["onClick"];
function wf(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ie("ripple");
  return p(), ye(
    a,
    Ee({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ve(() => [z(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [F(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), F(e.$slots, "actions", {}, () => [(p(!0), O(
          Oe,
          null,
          Ae(e.actions, (o) => Se((p(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: W({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), ye(
              r,
              {
                key: 0,
                class: c(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : ee("v-if", !0), z(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            bf
          )), [[t, {
            disabled: o.disabled
          }]])),
          128
          /* KEYED_FRAGMENT */
        ))])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var As = _({
  name: "VarActionSheet",
  directives: {
    Ripple: He
  },
  components: {
    VarPopup: Cn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: hf,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        $(l, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: gf,
      classes: yf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ge,
      dt: no,
      handleSelect: r
    };
  }
});
As.render = wf;
const dr = As;
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var tr, Pi = {};
function Cf(e) {
  return e === void 0 && (e = {}), Ao({}, Pi, e);
}
function Zn(e) {
  return Ct() ? new Promise((n) => {
    Zn.close();
    var r = Ne(Cf(e));
    r.teleport = "body", tr = r;
    var {
      unmountInstance: a
    } = et(dr, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), tr === r && (tr = null);
      },
      onRouteChange: () => {
        a(), tr === r && (tr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Zn.setDefaultOptions = function(e) {
  Pi = e;
};
Zn.resetDefaultOptions = function() {
  Pi = {};
};
Zn.close = function() {
  if (tr != null) {
    var e = tr;
    tr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Zn.Component = dr;
dr.install = function(e) {
  e.component(dr.name, dr);
};
Zn.install = function(e) {
  e.component(dr.name, dr);
};
var pS = dr;
function Sf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var kf = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: Sf
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  image: {
    type: String
  },
  imageLinearGradient: {
    type: String
  },
  safeAreaTop: {
    type: Boolean,
    default: !1
  }
}, {
  n: $f,
  classes: Tf
} = x("app-bar");
function Pf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: W(e.rootStyles)
    },
    [z(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [z(
        "div",
        {
          class: c(e.n("left"))
        },
        [F(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [we(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [we(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), z(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [we(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), F(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), F(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Ls = _({
  name: "VarAppBar",
  props: kf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = R(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return dn(o), xt(o), {
      n: $f,
      classes: Tf,
      formatElevation: cn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ls.render = Pf;
const Er = Ls;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var hS = Er;
function ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function oo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
var Of = "background-image", Vf = "lazy-loading", Mf = "lazy-error", sl = "lazy-attempt", Bf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ro = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ga = [], jt = [], Rs = Yv(100), je = {
  loading: Ro,
  error: Ro,
  attempt: 3,
  throttleWait: 300,
  events: Bf
}, Oi = wi($t, je.throttleWait);
function io(e, n) {
  e._lazy.arg === Of ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Ef(e) {
  e._lazy.loading && io(e, e._lazy.loading), $t();
}
function If(e) {
  e._lazy.error && io(e, e._lazy.error), e._lazy.state = "error", Mi(e), $t();
}
function Us(e, n) {
  io(e, n), e._lazy.state = "success", Mi(e), $t();
}
function Nf(e) {
  var n;
  jt.includes(e) || (jt.push(e), (n = je.events) == null || n.forEach((r) => {
    e.addEventListener(r, Oi, {
      passive: !0
    });
  }));
}
function Df() {
  jt.forEach((e) => {
    var n;
    (n = je.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Oi);
    });
  }), jt.length = 0;
}
function zf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Vf)) != null ? r : je.loading,
    error: (a = e.getAttribute(Mf)) != null ? a : je.error,
    attempt: e.getAttribute(sl) ? Number(e.getAttribute(sl)) : je.attempt
  };
  e._lazy = Lo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), io(e, Ro), $(je.filter, e._lazy);
}
function Af(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Rs.add(n), Us(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? If(e) : Hs(e);
  });
}
function Hs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Rs.has(n)) {
      Us(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Ef(e), Af(e, n);
  }
}
function Vi(e) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = oo(function* (e) {
    (yield Gv(e)) && Hs(e);
  }), Uo.apply(this, arguments);
}
function $t() {
  Ga.forEach((e) => Vi(e));
}
function Lf(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = oo(function* (e) {
    !Ga.includes(e) && Ga.push(e), qv(e).forEach(Nf), yield Vi(e);
  }), Ho.apply(this, arguments);
}
function Mi(e) {
  Ht(Ga, e), Ga.length === 0 && Df();
}
function Rf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Fs(e, n) {
  return Fo.apply(this, arguments);
}
function Fo() {
  return Fo = oo(function* (e, n) {
    zf(e, n), yield Lf(e);
  }), Fo.apply(this, arguments);
}
function Uf(e, n) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = oo(function* (e, n) {
    if (!Rf(e, n)) {
      Ga.includes(e) && (yield Vi(e));
      return;
    }
    yield Fs(e, n);
  }), Yo.apply(this, arguments);
}
function Hf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  je.events = n ?? je.events, je.loading = r ?? je.loading, je.error = a ?? je.error, je.attempt = t ?? je.attempt, je.throttleWait = o ?? je.throttleWait, je.filter = l;
}
var Ys = {
  mounted: Fs,
  unmounted: Mi,
  updated: Uf,
  install(e, n) {
    Hf(n), Oi = wi($t, je.throttleWait), e.directive("lazy", this);
  }
}, gS = Ys;
const ft = Ys;
function Ff(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var js = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ws(e) {
  return js(e) || an(e) || Ue(e);
}
var Yf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ws,
    default: "normal"
  },
  color: {
    type: String
  },
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ff,
    default: "cover"
  },
  bordered: {
    type: Boolean,
    default: !1
  },
  borderColor: {
    type: String
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: jf,
  classes: Wf
} = x("avatar"), Gf = ["src", "lazy-loading", "lazy-error"], qf = ["src"];
function Xf(e, n) {
  var r = Ie("lazy");
  return p(), O(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: W({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), O(
      Oe,
      {
        key: 0
      },
      [e.lazy ? Se((p(), O(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          src: e.src,
          style: W({
            objectFit: e.fit
          }),
          "lazy-loading": e.loading,
          "lazy-error": e.error,
          onLoad: n[0] || (n[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Gf
      )), [[r, e.src]]) : (p(), O(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: W({
            objectFit: e.fit
          }),
          onLoad: n[1] || (n[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: n[2] || (n[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        qf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: W({
          transform: "scale(" + e.scale + ")"
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Gs = _({
  name: "VarAvatar",
  directives: {
    Lazy: ft
  },
  props: Yf,
  setup(e) {
    var n = M(null), r = M(null), a = M(1), t = () => {
      if (!n.value || !r.value) {
        a.value = 1;
        return;
      }
      var s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }, o = (s) => {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && $(v, s), u._lazy.state === "error" && $(f, s)) : $(v, s);
    }, l = (s) => {
      $(e.onError, s);
    }, i = (s) => {
      $(e.onClick, s);
    };
    return dn(t), xt(t), {
      internalSizeValidator: js,
      sizeValidator: Ws,
      toSizeUnit: ge,
      n: jf,
      classes: Wf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Gs.render = Xf;
const Ir = Gs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var yS = Ir, Kf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Zf,
  classes: Jf
} = x("avatar-group");
function Qf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: W(e.rootStyles)
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var qs = _({
  name: "VarAvatarGroup",
  props: Kf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: Zf,
      classes: Jf,
      toSizeUnit: ge,
      rootStyles: n
    };
  }
});
qs.render = Qf;
const Nr = qs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var bS = Nr;
function _f(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function xf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var lr = {
  type: {
    type: String,
    default: "circle",
    validator: _f
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: xf
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: ec,
  classes: nc
} = x("loading"), rc = (e) => (za(""), e = e(), Aa(), e), ac = /* @__PURE__ */ rc(() => /* @__PURE__ */ z(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ z("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), tc = [ac];
function oc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.isShow ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [z(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: W({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          tc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (p(!0), O(
        Oe,
        null,
        Ae(e.loadingTypeDict, (r, a) => (p(), O(
          Oe,
          {
            key: a
          },
          [e.type === a ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), O(
              Oe,
              null,
              Ae(r, (t) => (p(), O(
                "div",
                {
                  key: t + a,
                  style: W({
                    backgroundColor: e.color
                  }),
                  class: c(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )) : ee("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: W({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [we(
          ae(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Xs = _({
  name: "VarLoading",
  props: lr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => $(r.default) ? e.loading : !0);
    return {
      n: ec,
      classes: nc,
      multiplySizeUnit: nn,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Xs.render = oc;
const Bn = Xs;
Bn.install = function(e) {
  e.component(Bn.name, Bn);
};
var wS = Bn, ic = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: lc,
  classes: sc
} = x("hover-overlay");
function uc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var Ks = _({
  name: "VarHoverOverlay",
  props: ic,
  setup() {
    return {
      n: lc,
      classes: sc
    };
  }
});
Ks.render = uc;
const sn = Ks;
sn.install = function(e) {
  e.component(sn.name, sn);
};
function kr() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var CS = sn;
function Zs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function dc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[cs(t)] = o, r;
  }, {}) : {};
}
function vc(e) {
  var {
    value: n
  } = e._hover, r = dc(e);
  Object.keys(n).forEach((a) => {
    var t = cs(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Bi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function fc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Js(e) {
  fc(e), Bi(e, e._hover.rawStyle);
}
function Qs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, wt(e)) {
    e(this._hover.hovering);
    return;
  }
  Bi(this, e);
}
function _s() {
  if (this._hover.hovering = !1, wt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Js(this);
}
function xs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Zs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, vc(e), e.addEventListener("mouseenter", Qs), e.addEventListener("mouseleave", _s));
}
function eu(e, n) {
  Zs(n.arg) || (Js(e), e.removeEventListener("mouseenter", Qs), e.removeEventListener("mouseleave", _s));
}
function cc(e, n) {
  e._hover && eu(e, n);
}
function mc(e, n) {
  return !wt(n.value) && e._hover.hovering;
}
function pc(e, n) {
  xs(e, n), mc(e, n) && Bi(e, n.value);
}
var nu = {
  mounted: xs,
  unmounted: eu,
  beforeUpdate: cc,
  updated: pc,
  install(e) {
    e.directive("hover", this);
  }
}, SS = nu;
const zn = nu;
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function ru(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function hc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function gc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var yc = {
  type: {
    type: String,
    validator: ru
  },
  nativeType: {
    type: String,
    default: "button",
    validator: gc
  },
  size: {
    type: String,
    validator: hc
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: qe(lr, "type"),
  loadingSize: qe(lr, "size"),
  loadingColor: jo({}, qe(lr, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, au = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function bc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = fn(au);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function wc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = vn(au);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Cc,
  classes: Sc
} = x("button"), kc = ["type", "disabled"];
function $c(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return Se((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: W({
        color: e.states.textColor,
        background: e.states.color
      }),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (p(), ye(
      r,
      {
        key: 0,
        class: c(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    kc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var tu = _({
  name: "VarButton",
  components: {
    VarLoading: Bn,
    VarHoverOverlay: sn
  },
  directives: {
    Ripple: He,
    Hover: zn
  },
  props: yc,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = wc(), {
      hovering: a,
      handleHovering: t
    } = kr(), o = R(() => {
      if (!r)
        return {
          elevation: cn(e.elevation, 2),
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      var {
        type: u,
        size: d,
        color: v,
        textColor: f,
        mode: m
      } = r;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), l = (u) => {
      e.autoLoading && (n.value = !0, u = $e(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, i = (u) => {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || n.value || l($(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l($(f, u));
    };
    return {
      n: Cc,
      classes: Sc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
tu.render = $c;
const Qe = tu;
Qe.install = function(e) {
  e.component(Qe.name, Qe);
};
var kS = Qe, Tc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: U()
}, {
  n: Pc,
  classes: Oc
} = x("back-top");
function Vc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return p(), ye(
    Da,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Ee({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = gn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [F(e.$slots, "default", {}, () => [J(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [J(r, {
            name: "chevron-up"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["elevation"]
      )])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var ou = _({
  name: "VarBackTop",
  components: {
    VarButton: Qe,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Tc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      $(e.onClick, d);
      var v = Ci(t);
      vt(t, {
        left: v,
        duration: e.duration,
        animation: ms
      });
    }, l = wi(() => {
      n.value = dt(t) >= Re(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? hs(e.target, "BackTop") : Sr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Qt(() => {
      i(), s(), a.value = !1;
    }), Pr(s), _t(u), _n(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ge,
      n: Pc,
      classes: Oc,
      handleClick: o
    };
  }
});
ou.render = Vc;
const Dr = ou;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var $S = Dr;
function Mc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Bc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ec = {
  type: {
    type: String,
    default: "default",
    validator: Mc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Bc
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  dot: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  color: {
    type: String
  }
}, {
  n: Ic,
  classes: Nc
} = x("badge");
function Dc(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "default"), J(
      ze,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [Se(z(
          "span",
          Ee({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), ye(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-badge-cover": "",
              name: e.icon
            },
            null,
            8,
            ["class", "name"]
          )) : ee("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : ee("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[Cr, !e.hidden]])]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name"]
    )],
    2
    /* CLASS */
  );
}
var iu = _({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ec,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Ic,
      classes: Nc,
      value: n
    };
  }
});
iu.render = Dc;
const vr = iu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var TS = vr, zc = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: U(),
  "onUpdate:active": U(),
  onBeforeChange: U(),
  onFabClick: U(),
  fabProps: {
    type: Object
  }
}, lu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Ac() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = fn(lu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
var {
  n: Lc,
  classes: Rc
} = x("bottom-navigation"), {
  n: lo
} = x("bottom-navigation-item"), ul = lo("--right-half-space"), dl = lo("--left-half-space"), vl = lo("--right-space"), Uc = {
  type: "primary"
};
function Hc(e, n) {
  var r = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: W("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (p(), ye(
      r,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [F(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var su = _({
  name: "VarBottomNavigation",
  components: {
    VarButton: Qe
  },
  props: zc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Ac(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((b) => {
      var {
        name: B
      } = b;
      return t.value === B.value;
    }), m = () => u.find((b) => {
      var {
        index: B
      } = b;
      return t.value === B.value;
    }), g = () => {
      an(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, y = (b) => {
      t.value !== b && (e.onBeforeChange ? h(b) : w(b));
    }, h = (b) => {
      var B = Oo($(e.onBeforeChange, b));
      Promise.all(B).then((D) => {
        D.every(Boolean) && w(b);
      });
    }, w = (b) => {
      $(e["onUpdate:active"], b), $(e.onChange, b);
    }, V = () => {
      var b = E();
      b.forEach((B) => {
        B.classList.remove(ul, dl, vl);
      });
    }, S = (b) => {
      var B = E(), D = B.length, C = b % 2 === 0;
      B.forEach((k, A) => {
        T(C, k, A, D);
      });
    }, T = (b, B, D, C) => {
      var k = D === C - 1;
      if (!b && k) {
        B.classList.add(vl);
        return;
      }
      var A = D === C / 2 - 1, Z = D === C / 2;
      A ? B.classList.add(ul) : Z && B.classList.add(dl);
    }, E = () => Array.from(a.value.querySelectorAll("." + lo())), P = () => {
      $(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(I), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = Wo({}, Uc, b);
    }, {
      immediate: !0,
      deep: !0
    }), dn(() => {
      r.fab && S(s.value);
    }), xt(() => {
      V(), r.fab && S(s.value);
    }), {
      n: Lc,
      classes: Rc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
su.render = Hc;
const zr = su;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var PS = zr, Fc = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: U()
};
function Yc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn(lu);
  return r || $n("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: jc,
  classes: Wc
} = x("bottom-navigation-item"), Gc = {
  type: "danger",
  dot: !0
};
function qc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ie("ripple");
  return Se((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), ye(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: c(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : ee("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), ye(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : ee("v-if", !0), z(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (p(), O(
        Oe,
        {
          key: 0
        },
        [we(
          ae(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var uu = _({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: vr,
    VarIcon: Pe
  },
  directives: {
    Ripple: He
  },
  props: Fc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Yc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = n.value) != null ? m : t.value;
      $(e.onClick, g), $(o.onToggle, g);
    };
    return l(d), ie(() => r.value, (m) => {
      a.value = m === !0 ? Gc : r.value;
    }, {
      immediate: !0
    }), {
      n: jc,
      classes: Wc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
uu.render = qc;
const Ar = uu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var OS = Ar, Xc = {
  separator: {
    type: String
  },
  onClick: U()
}, du = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Kc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = fn(du);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Zc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = vn(du);
  return n || $n("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Jc,
  classes: Qc
} = x("breadcrumb");
function _c(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : F(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [z(
        "div",
        {
          class: c(e.n("separator"))
        },
        ae((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var vu = _({
  name: "VarBreadcrumb",
  props: Xc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Zc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || $(e.onClick, i);
    };
    return a(null), {
      n: Jc,
      classes: Qc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
vu.render = _c;
const Lr = vu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var VS = Lr, xc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: em
} = x("breadcrumbs");
function nm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fu = _({
  name: "VarBreadcrumbs",
  props: xc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Kc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: em
    };
  }
});
fu.render = nm;
const Rr = fu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var MS = Rr;
function rm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function am(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function tm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var om = {
  type: {
    type: String,
    default: "default",
    validator: rm
  },
  size: {
    type: String,
    default: "normal",
    validator: am
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  mode: {
    type: String,
    default: "normal",
    validator: tm
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: im,
  classes: lm
} = x("button-group");
function sm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = _({
  name: "VarButtonGroup",
  props: om,
  setup(e) {
    var {
      bindButtons: n
    } = bc(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: im,
      classes: lm,
      formatElevation: cn
    };
  }
});
cu.render = sm;
const Ur = cu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var BS = Ur;
function um(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var dm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: um,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  "onUpdate:floating": U()
};
function fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: vm,
  classes: fm
} = x("card"), cm = 500, mm = ["src", "alt"];
function pm(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: W({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: W({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [F(e.$slots, "image", {}, () => [e.src ? (p(), O(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: W({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        mm
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: W({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [F(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: W({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [F(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: gn(e.close, ["stop"])
          },
          {
            default: ve(() => [J(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: c(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
            /* STABLE */
          },
          8,
          ["class", "onClick"]
        )])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), z(
      "div",
      {
        class: c(e.n("holder")),
        style: W({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
var mu = _({
  name: "VarCard",
  directives: {
    Ripple: He
  },
  components: {
    VarIcon: Pe,
    VarButton: Qe
  },
  props: dm,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = R(() => e.layout === "row"), g = M(!1), y = M(!1), {
      zIndex: h
    } = kt(() => e.floating, 1);
    to(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", S = null, T = M(null), E = /* @__PURE__ */ function() {
      var B = cl(function* () {
        clearTimeout(T.value), clearTimeout(S), T.value = null, T.value = setTimeout(/* @__PURE__ */ cl(function* () {
          var {
            width: D,
            height: C,
            left: k,
            top: A
          } = n.value.getBoundingClientRect();
          a.value = ge(D), t.value = ge(C), o.value = a.value, l.value = t.value, i.value = ge(A), s.value = ge(k), u.value = "fixed", w = i.value, V = s.value, g.value = !0, yield Dn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? cm : 0);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout(S), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", g.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      $(e["onUpdate:floating"], !1);
    }, b = (B) => {
      $(e.onClick, B);
    };
    return ie(() => e.floating, (B) => {
      m.value || Be(() => {
        B ? E() : P();
      });
    }, {
      immediate: !0
    }), {
      n: vm,
      classes: fm,
      toSizeUnit: ge,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: T,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: h,
      isRow: m,
      close: I,
      showFloatingButtons: g,
      floated: y,
      formatElevation: cn,
      handleClick: b
    };
  }
});
mu.render = pm;
const Hr = mu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var ES = Hr, hm = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  borderOffset: {
    type: [Number, String]
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, {
  n: gm,
  classes: ym
} = x("cell");
function bm(e, n) {
  var r = te("var-icon"), a = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: W(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [J(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), z(
      "div",
      {
        class: c(e.n("content"))
      },
      [F(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pu = _({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: He
  },
  props: hm,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: gm,
      classes: ym,
      toSizeUnit: ge,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
pu.render = bm;
const fr = pu;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var IS = fr, wm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Cm
} = x("form-details"), Sm = {
  key: 0
}, km = {
  key: 0
};
function $m(e, n) {
  return p(), ye(
    ze,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [z(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [J(
            ze,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), O(
                "div",
                Sm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [J(
            ze,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), O(
                "div",
                km,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var hu = _({
  name: "VarFormDetails",
  props: wm,
  setup: () => ({
    n: Cm
  })
});
hu.render = $m;
const Ke = hu;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var NS = Ke, Tm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, gu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Pm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = fn(gu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Om() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = vn(gu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
var yu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Pn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn(yu), a = Qa(), t = r ? (o) => {
    r(Go({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Vm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = fn(yu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Mm,
  classes: Bm
} = x("checkbox");
function Em(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [Se((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]), J(
          a,
          {
            hovering: !e.disabled && !e.formDisabled && e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), z(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var bu = _({
  name: "VarCheckbox",
  directives: {
    Ripple: He,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  props: Tm,
  setup(e) {
    var n = M(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Om(), {
      hovering: i,
      handleHovering: s
    } = kr(), {
      form: u,
      bindForm: d
    } = Pn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Tn(), y = (b) => {
      Be(() => {
        var {
          validateTrigger: B,
          rules: D,
          modelValue: C
        } = e;
        f(B, b, D, C);
      });
    }, h = (b) => {
      n.value = b;
      var {
        checkedValue: B,
        onChange: D
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(D, n.value), y("onChange"), b === B ? o == null || o.onChecked(B) : o == null || o.onUnchecked(B);
    }, w = (b) => {
      var {
        disabled: B,
        readonly: D,
        checkedValue: C,
        uncheckedValue: k,
        onClick: A
      } = e;
      if (!(u != null && u.disabled.value || B) && ($(A, b), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var Z = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Z || h(r.value ? k : C);
      }
    }, V = (b) => {
      var {
        checkedValue: B,
        uncheckedValue: D
      } = e;
      n.value = b.includes(B) ? B : D;
    }, S = () => {
      t.value = !1;
    }, T = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, E = (b) => {
      var {
        checkedValue: B,
        uncheckedValue: D
      } = e, C = ![B, D].includes(b);
      C && (b = r.value ? D : B), h(b);
    }, P = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: P,
      resetValidation: g,
      reset: T,
      resetWithAnimation: S
    };
    return $(l, I), $(d, I), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Mm,
      classes: Bm,
      handleClick: w,
      toggle: E,
      reset: T,
      validate: P,
      resetValidation: g
    };
  }
});
bu.render = Em;
const cr = bu;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var DS = cr;
function Im(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Nm = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Im
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Dm,
  classes: zm
} = x("checkbox-group");
function Am(e, n) {
  var r = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var wu = _({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ke
  },
  props: Nm,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Pm(), {
      bindForm: l
    } = Pn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), v = R(() => i.value), f = (I) => {
      Be(() => {
        var {
          validateTrigger: b,
          rules: B,
          modelValue: D
        } = e;
        s(b, I, B, D);
      });
    }, m = (I) => {
      $(e["onUpdate:modelValue"], I), $(e.onChange, I), f("onChange");
    }, g = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) || m([...b, I]);
    }, y = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) && m(b.filter((B) => B !== I));
    }, h = () => t.forEach((I) => {
      var {
        sync: b
      } = I;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, V = () => {
      var I = t.map((B) => {
        var {
          checkedValue: D
        } = B;
        return D.value;
      }), b = Ki(I);
      return w(), $(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      var I = t.filter((B) => {
        var {
          checked: D
        } = B;
        return !D.value;
      }).map((B) => {
        var {
          checkedValue: D
        } = B;
        return D.value;
      }), b = Ki(I);
      return w(), $(e["onUpdate:modelValue"], b), b;
    }, T = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, h, {
      deep: !0
    }), ie(() => a.value, h);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: y,
      validate: E,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), $(l, P), {
      errorMessage: i,
      n: Dm,
      classes: zm,
      checkAll: V,
      inverseAll: S,
      reset: T,
      validate: E,
      resetValidation: d
    };
  }
});
wu.render = Am;
const Fr = wu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var zS = Fr;
function Lm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Rm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Um = {
  type: {
    type: String,
    default: "default",
    validator: Lm
  },
  size: {
    type: String,
    default: "normal",
    validator: Rm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(Es, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: U()
}, {
  n: xn,
  classes: Hm
} = x("chip");
function Fm(e, n) {
  var r = te("var-icon");
  return p(), ye(
    ze,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [z(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [F(e.$slots, "left"), z(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        ), F(e.$slots, "right"), e.closable ? (p(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [J(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )) : ee("v-if", !0)],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["name"]
  );
}
var Cu = _({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Um,
  setup(e) {
    var n = R(() => {
      var {
        plain: t,
        textColor: o,
        color: l
      } = e;
      return t ? {
        color: o || l,
        borderColor: l
      } : {
        color: o,
        background: l
      };
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = xn(o ? "$--flex" : "$--inline-flex"), d = i ? xn("plain") + " " + xn("plain-" + l) : xn("--" + l), v = s ? xn("--round") : null;
      return [xn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: xn,
      classes: Hm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Cu.render = Fm;
const mr = Cu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var AS = mr;
function Ym(e) {
  return ["row", "column"].includes(e);
}
function jm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Wm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Gm = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: Ym
  },
  justify: {
    type: String,
    validator: jm
  },
  align: {
    type: String,
    validator: Wm
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  },
  onClick: U()
}, Su = Symbol("ROW_BIND_COL_KEY");
function qm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = fn(Su);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Xm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn(Su);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Vt,
  classes: Km
} = x("col");
function Zm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: W({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ku = _({
  name: "VarCol",
  props: Gm,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Xm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (bi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Vt("--span-" + u + "-" + m)), f && v.push(Vt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Vt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, l), {
      n: Vt,
      classes: Km,
      padding: n,
      toNumber: L,
      toSizeUnit: ge,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Ft
    };
  }
});
ku.render = Zm;
const Yr = ku;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var LS = Yr, $u = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Jm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = fn($u);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Qm = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: _m
} = x("collapse");
function xm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Tu = _({
  name: "VarCollapse",
  props: Qm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Jm(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !$e(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && $e(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (y, h) => s() ? h ? e.accordion ? y : [...e.modelValue, y] : e.accordion ? null : e.modelValue.filter((w) => w !== y) : null, d = (y, h) => {
      var w = u(y, h);
      $(e["onUpdate:modelValue"], w), $(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: w
          } = h;
          return e.modelValue === w.value;
        });
      var y = r.filter((h) => {
        var {
          name: w
        } = h;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return y.length ? y : void 0;
    }, f = () => e.accordion ? r.find((y) => {
      var {
        index: h,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue === h.value;
    }) : r.filter((y) => {
      var {
        index: h,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var y = v() || f();
        if (e.accordion && !y || !e.accordion && !y.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var w = e.accordion ? y === h : y.includes(h);
          h.init(e.accordion, w);
        });
      }
    }, g = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(g), ie(() => n.value, () => Be().then(m)), ie(() => e.modelValue, () => Be().then(m)), {
      n: _m,
      divider: l
    };
  }
});
Tu.render = xm;
const jr = Tu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var RS = jr;
function ep() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn($u);
  return r || $n("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var np = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: rp,
  classes: ap
} = x("collapse-item");
function tp(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: W("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), z(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [z(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [F(e.$slots, "title", {}, () => [we(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [F(e.$slots, "icon", {}, () => [J(
          r,
          {
            name: e.icon,
            transition: 250,
            class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Se(z(
      "div",
      {
        class: c(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Cr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Pu = _({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
  },
  props: np,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = ep(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = R(() => e.name), g = (E, P) => {
      s.value === void 0 || E && $e(s.value) || P === i.value || (i.value = P, y(!0));
    }, y = (E) => {
      e.disabled || E || f(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, wn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = 0 + "px", wn(() => {
          o.value.style.height = E + "px", t && ro(() => {
            t && S();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", wn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, S = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: m,
      init: g
    };
    return a(T), ie(i, (E) => {
      E ? h() : V();
    }), {
      n: rp,
      start: w,
      classes: ap,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: y,
      contentEl: o,
      transitionend: S,
      formatElevation: cn
    };
  }
});
Pu.render = tp;
const Wr = Pu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var US = Wr, op = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: U(),
  onChange: U()
}, {
  n: ip
} = x("countdown"), qo = 1e3, Xo = 60 * qo, Ko = 60 * Xo, ml = 24 * Ko;
function lp(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default", bt(eo(e.timeData)), () => [we(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ou = _({
  name: "VarCountdown",
  props: op,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, y) => {
      var h = Object.values(y), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((T, E) => {
        g.includes(T) ? g = g.replace(T, Ba("" + h[E], 2, "0")) : h[E + 1] += h[E] * V[E];
      }), g.includes("S")) {
        var S = Ba("" + h[h.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", S) : g.includes("SS") ? g = g.replace("SS", S.slice(0, 2)) : g = g.replace("S", S.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var y = Math.floor(g / ml), h = Math.floor(g % ml / Ko), w = Math.floor(g % Ko / Xo), V = Math.floor(g % Xo / qo), S = Math.floor(g % qo), T = {
        days: y,
        hours: h,
        minutes: w,
        seconds: V,
        milliseconds: S
      };
      r.value = T, $(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: g,
        onEnd: y
      } = e, h = performance.now();
      if (a || (a = h + L(g)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        $(y);
        return;
      }
      t && (o = wn(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, rl(o);
    }, m = () => {
      a = 0, t = !1, rl(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Pr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), _n(() => {
      i = t, f();
    }), _a(f), {
      showTime: n,
      timeData: r,
      n: ip,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Ou.render = lp;
const Gr = Ou;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var HS = Gr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ua = 9e15, Or = 1e9, Zo = "0123456789abcdef", Wt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Jo = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Ua,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ua,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Vu, Hn, pe = !0, so = "[DecimalError] ", $r = so + "Invalid argument: ", Mu = so + "Precision limit exceeded", Bu = so + "crypto unavailable", Eu = "[object Decimal]", _e = Math.floor, We = Math.pow, sp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, up = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, dp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Iu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, En = 1e7, ce = 7, vp = 9007199254740991, fp = Wt.length - 1, Qo = Gt.length - 1, X = { toStringTag: Eu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
X.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error($r + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
X.comparedTo = X.cmp = function(e) {
  var n, r, a, t, o = this, l = o.d, i = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!l || !i)
    return !s || !u ? NaN : s !== u ? s : l === i ? 0 : !l ^ s < 0 ? 1 : -1;
  if (!l[0] || !i[0])
    return l[0] ? s : i[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = l.length, t = i.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (l[n] !== i[n])
      return l[n] > i[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
X.cosine = X.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = cp(a, Lu(a, r)), a.precision = e, a.rounding = n, fe(Hn == 2 || Hn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (pe = !1, o = d.s * We(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Je(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = We(r, 1 / 3), e = _e((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Me(u.plus(d).times(i), u.plus(s), l + 2, 1), Je(i.d).slice(0, l) === (r = Je(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (fe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (fe(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return pe = !0, fe(a, e, v.rounding, n);
};
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - _e(this.e / ce)) * ce, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
X.dividedBy = X.div = function(e) {
  return Me(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, r = n.constructor;
  return fe(Me(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
X.hyperbolicCosine = X.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / vo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = qa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = qa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / vo(5, e)), t = qa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, fe(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Me(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Mn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Mn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Mn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, pe = !1, r = r.times(r).minus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, pe = !1, r = r.times(r).plus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Me(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Mn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Qo)
      return l = Mn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Qo)
      return l = Mn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ce + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (pe = !1, n = Math.ceil(i / ce), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), pe = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && _e(this.e / ce) > this.d.length - 2;
};
X.isNaN = function() {
  return !this.s;
};
X.isNegative = X.isNeg = function() {
  return this.s < 0;
};
X.isPositive = X.isPos = function() {
  return this.s > 0;
};
X.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
X.lessThan = X.lt = function(e) {
  return this.cmp(e) < 0;
};
X.lessThanOrEqualTo = X.lte = function(e) {
  return this.cmp(e) < 1;
};
X.logarithm = X.log = function(e) {
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      o = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      o = t !== 1;
    }
  if (pe = !1, i = v + m, l = sr(u, i), a = n ? qt(d, i + 10) : sr(e, i), s = Me(l, a, i, 1), ct(s.d, t = v, f))
    do
      if (i += 10, l = sr(u, i), a = n ? qt(d, i + 10) : sr(e, i), s = Me(l, a, i, 1), !o) {
        +Je(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (ct(s.d, t += 10, f));
  return pe = !0, fe(s, v, f);
};
X.minus = X.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return pe ? fe(e, i, s) : e;
  }
  if (r = _e(e.e / ce), d = _e(m.e / ce), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ce), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, l = f.length, v = a < l, v && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), l = u.length, a = f.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = En - 1;
      --u[t], u[a] += En;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = uo(u, r), pe ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? fe(new a(r), a.precision, a.rounding) : (pe = !1, a.modulo == 9 ? (n = Me(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Me(r, e, 0, a.modulo, 1), n = n.times(e), pe = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return _o(this);
};
X.naturalLogarithm = X.ln = function() {
  return sr(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
X.plus = X.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), pe ? fe(e, i, s) : e;
  if (o = _e(v.e / ce), a = _e(e.e / ce), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ce), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / En | 0, u[t] %= En;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = uo(u, a), pe ? fe(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error($r + e);
  return r.d ? (n = Nu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return fe(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = pp(a, Lu(a, r)), a.precision = e, a.rounding = n, fe(Hn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (pe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Je(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = _e((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Me(l, o, r + 2, 1)).times(0.5), Je(o.d).slice(0, r) === (n = Je(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (fe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (fe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return pe = !0, fe(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Me(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, fe(Hn == 2 || Hn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = _e(d.e / ce) + _e(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % En | 0, n = i / En | 0;
    o[t] = (o[t] + n) % En | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = uo(o, r), pe ? fe(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Ei(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (un(e, 0, Or), n === void 0 ? n = a.rounding : un(n, 0, 8), fe(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, !0) : (un(e, 0, Or), n === void 0 ? n = t.rounding : un(n, 0, 8), a = fe(new t(a), e + 1, n), r = An(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = An(t) : (un(e, 0, Or), n === void 0 ? n = o.rounding : un(n, 0, 8), a = fe(new o(t), e + t.e + 1, n), r = An(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, y = m.constructor;
  if (!g)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Nu(g) - m.e - 1, l = o % ce, n.d[0] = We(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error($r + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (pe = !1, i = new y(Je(g)), d = y.precision, y.precision = o = g.length * ce * 2; v = Me(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Me(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Me(u, a, o, 1).minus(m).abs().cmp(Me(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, pe = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Ei(this, 16, e, n);
};
X.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : un(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (pe = !1, r = Me(r, e, 0, n, 1).times(e), pe = !0, fe(r)) : (e.s = r.s, r = e), r;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return Ei(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(We(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (n = _e(e.e / ce), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vp)
    return t = Du(s, i, r, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = We(+i, u), n = r == 0 || !isFinite(r) ? _e(u * (Math.log("0." + Je(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (pe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = _o(e.times(sr(i, a + r)), a), t.d && (t = fe(t, a + 5, 1), ct(t.d, a, o) && (n = a + 10, t = fe(_o(e.times(sr(i, n + r)), n), n + 5, 1), +Je(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, pe = !0, s.rounding = o, fe(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (un(e, 1, Or), n === void 0 ? n = t.rounding : un(n, 0, 8), a = fe(new t(a), e, n), r = An(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (un(e, 1, Or), n === void 0 ? n = a.rounding : un(n, 0, 8)), fe(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Je(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ce - a.length, r && (o += nr(r)), o += a;
    l = e[n], a = l + "", r = ce - a.length, r && (o += nr(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function un(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error($r + e);
}
function ct(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ce, t = 0) : (t = Math.ceil((n + 1) / ce), n %= ce), o = We(10, ce - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == We(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == We(10, n - 3) - 1, l;
}
function zt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Zo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function cp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / vo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = qa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Me = function() {
  function e(a, t, o) {
    var l, i = 0, s = a.length;
    for (a = a.slice(); s--; )
      l = a[s] * t + i, a[s] = l % o | 0, i = l / o | 0;
    return i && a.unshift(i), a;
  }
  function n(a, t, o, l) {
    var i, s;
    if (o != l)
      s = o > l ? 1 : -1;
    else
      for (i = s = 0; i < o; i++)
        if (a[i] != t[i]) {
          s = a[i] > t[i] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, l) {
    for (var i = 0; o--; )
      a[o] -= i, i = a[o] < t[o] ? 1 : 0, a[o] = i * l + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, l, i, s) {
    var u, d, v, f, m, g, y, h, w, V, S, T, E, P, I, b, B, D, C, k, A = a.constructor, Z = a.s == t.s ? 1 : -1, Q = a.d, Y = t.d;
    if (!Q || !Q[0] || !Y || !Y[0])
      return new A(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (Q ? Y && Q[0] == Y[0] : !Y) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Q && Q[0] == 0 || !Y ? Z * 0 : Z / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = En, m = ce, d = _e(a.e / m) - _e(t.e / m)), C = Y.length, B = Q.length, w = new A(Z), V = w.d = [], v = 0; Y[v] == (Q[v] || 0); v++)
      ;
    if (Y[v] > (Q[v] || 0) && d--, o == null ? (P = o = A.precision, l = A.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), g = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, Y = Y[0], P++; (v < B || f) && P--; v++)
          I = f * s + (Q[v] || 0), V[v] = I / Y | 0, f = I % Y | 0;
        g = f || v < B;
      } else {
        for (f = s / (Y[0] + 1) | 0, f > 1 && (Y = e(Y, f, s), Q = e(Q, f, s), C = Y.length, B = Q.length), b = C, S = Q.slice(0, C), T = S.length; T < C; )
          S[T++] = 0;
        k = Y.slice(), k.unshift(0), D = Y[0], Y[1] >= s / 2 && ++D;
        do
          f = 0, u = n(Y, S, C, T), u < 0 ? (E = S[0], C != T && (E = E * s + (S[1] || 0)), f = E / D | 0, f > 1 ? (f >= s && (f = s - 1), y = e(Y, f, s), h = y.length, T = S.length, u = n(y, S, h, T), u == 1 && (f--, r(y, C < h ? k : Y, h, s))) : (f == 0 && (u = f = 1), y = Y.slice()), h = y.length, h < T && y.unshift(0), r(S, y, T, s), u == -1 && (T = S.length, u = n(Y, S, C, T), u < 1 && (f++, r(S, C < T ? k : Y, T, s))), T = S.length) : u === 0 && (f++, S = [0]), V[v++] = f, u && S[0] ? S[T++] = Q[b] || 0 : (S = [Q[b]], T = 1);
        while ((b++ < B || S[0] !== void 0) && P--);
        g = S[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Vu = g;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, g);
    }
    return w;
  };
}();
function fe(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ce, l = n, d = v[f = 0], s = d / We(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ce), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ce, l = o - ce + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ce, l = o - ce + t, s = l < 0 ? 0 : d / We(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % We(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / We(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = We(10, (ce - n % ce) % ce), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = We(10, ce - o), v[f] = l > 0 ? (d / We(10, t - l) % We(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == En && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != En)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return pe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function An(e, n, r) {
  if (!e.isFinite())
    return Au(e);
  var a, t = e.e, o = Je(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nr(-t - 1) + o, r && (a = r - l) > 0 && (o += nr(a))) : t >= l ? (o += nr(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + nr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += nr(a))), o;
}
function uo(e, n) {
  var r = e[0];
  for (n *= ce; r >= 10; r /= 10)
    n++;
  return n;
}
function qt(e, n, r) {
  if (n > fp)
    throw pe = !0, r && (e.precision = r), Error(Mu);
  return fe(new e(Wt), n, 1, !0);
}
function Mn(e, n, r) {
  if (n > Qo)
    throw Error(Mu);
  return fe(new e(Gt), n, r, !0);
}
function Nu(e) {
  var n = e.length - 1, r = n * ce + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function nr(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Du(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (pe = !1; ; ) {
    if (r % 2 && (o = o.times(n), hl(o.d, l) && (t = !0)), r = _e(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), hl(n.d, l);
  }
  return pe = !0, o;
}
function pl(e) {
  return e.d[e.d.length - 1] & 1;
}
function zu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function _o(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (pe = !1, s = g) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(We(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), r = r.times(++d), i = l.plus(Me(o, r, s, 1)), Je(i.d).slice(0, s) === Je(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ct(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = g, m, pe = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function sr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, y = e, h = y.d, w = y.constructor, V = w.rounding, S = w.precision;
  if (y.s < 0 || !h || !h[0] || !y.e && h[0] == 1 && h.length == 1)
    return new w(h && !h[0] ? -1 / 0 : y.s != 1 ? NaN : h ? 0 : y);
  if (n == null ? (pe = !1, d = S) : d = n, w.precision = d += g, r = Je(h), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Je(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new w("0." + r), o++) : y = new w(a + "." + r.slice(1));
  } else
    return u = qt(w, d + 2, S).times(o + ""), y = sr(new w(a + "." + r.slice(1)), d - g).plus(u), w.precision = S, n == null ? fe(y, S, V, pe = !0) : y;
  for (v = y, s = l = y = Me(y.minus(1), y.plus(1), d, 1), f = fe(y.times(y), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Me(l, new w(t), d, 1)), Je(u.d).slice(0, d) === Je(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(qt(w, d + 2, S).times(o + ""))), s = Me(s, new w(m), d, 1), n == null)
        if (ct(s.d, d - g, V, i))
          w.precision = d += g, u = l = y = Me(v.minus(1), v.plus(1), d, 1), f = fe(y.times(y), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, V, pe = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Au(e) {
  return String(e.s * e.s / 0);
}
function xo(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ce, r < 0 && (a += ce), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ce; a < t; )
        e.d.push(+n.slice(a, a += ce));
      n = n.slice(a), a = ce - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), pe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function mp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Iu.test(n))
      return xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (up.test(n))
    r = 16, n = n.toLowerCase();
  else if (sp.test(n))
    r = 2;
  else if (dp.test(n))
    r = 8;
  else
    throw Error($r + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Du(a, new a(r), o, o * 2)), u = zt(n, r, En), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = uo(u, d), e.d = u, pe = !1, l && (e = Me(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? We(2, s) : ur.pow(2, s))), pe = !0, e);
}
function pp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : qa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / vo(5, r)), n = qa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function qa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ce);
  for (pe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Me(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Me(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return pe = !0, l.d.length = d + 1, l;
}
function vo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Lu(e, n) {
  var r, a = n.s < 0, t = Mn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Hn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Hn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Hn = pl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Hn = pl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ei(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = r !== void 0;
  if (g ? (un(r, 1, Or), a === void 0 ? a = m.rounding : un(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Au(e);
  else {
    for (d = An(e), l = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = zt(An(f), 10, t), f.e = f.d.length), v = zt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Me(e, f, r, a, 0, t), v = e.d, o = e.e, u = Vu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Zo.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = zt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Zo.charAt(v[l]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          d = "0" + d;
        d = "0." + d;
      } else if (++o > s)
        for (o -= s; o--; )
          d += "0";
      else
        o < s && (d = d.slice(0, o) + "." + d.slice(o));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function hl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function hp(e) {
  return new this(e).abs();
}
function gp(e) {
  return new this(e).acos();
}
function yp(e) {
  return new this(e).acosh();
}
function bp(e, n) {
  return new this(e).plus(n);
}
function wp(e) {
  return new this(e).asin();
}
function Cp(e) {
  return new this(e).asinh();
}
function Sp(e) {
  return new this(e).atan();
}
function kp(e) {
  return new this(e).atanh();
}
function $p(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Mn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Mn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Mn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Me(e, n, o, 1)), n = Mn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Me(e, n, o, 1)), r;
}
function Tp(e) {
  return new this(e).cbrt();
}
function Pp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Op(e, n, r) {
  return new this(e).clamp(n, r);
}
function Vp(e) {
  if (!e || typeof e != "object")
    throw Error(so + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Or,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ua,
    0,
    "toExpPos",
    0,
    Ua,
    "maxE",
    0,
    Ua,
    "minE",
    -Ua,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Jo[r]), (a = e[r]) !== void 0)
      if (_e(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error($r + r + ": " + a);
  if (r = "crypto", t && (this[r] = Jo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Bu);
      else
        this[r] = !1;
    else
      throw Error($r + r + ": " + a);
  return this;
}
function Mp(e) {
  return new this(e).cos();
}
function Bp(e) {
  return new this(e).cosh();
}
function Ru(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, gl(o)) {
      u.s = o.s, pe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (l = 0, i = o; i >= 10; i /= 10)
          l++;
        pe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return xo(u, o.toString());
    } else if (s !== "string")
      throw Error($r + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Iu.test(o) ? xo(u, o) : mp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Vp, t.clone = Ru, t.isDecimal = gl, t.abs = hp, t.acos = gp, t.acosh = yp, t.add = bp, t.asin = wp, t.asinh = Cp, t.atan = Sp, t.atanh = kp, t.atan2 = $p, t.cbrt = Tp, t.ceil = Pp, t.clamp = Op, t.cos = Mp, t.cosh = Bp, t.div = Ep, t.exp = Ip, t.floor = Np, t.hypot = Dp, t.ln = zp, t.log = Ap, t.log10 = Rp, t.log2 = Lp, t.max = Up, t.min = Hp, t.mod = Fp, t.mul = Yp, t.pow = jp, t.random = Wp, t.round = Gp, t.sign = qp, t.sin = Xp, t.sinh = Kp, t.sqrt = Zp, t.sub = Jp, t.sum = Qp, t.tan = _p, t.tanh = xp, t.trunc = eh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ep(e, n) {
  return new this(e).div(n);
}
function Ip(e) {
  return new this(e).exp();
}
function Np(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Dp() {
  var e, n, r = new this(0);
  for (pe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return pe = !0, new this(1 / 0);
      r = n;
    }
  return pe = !0, r.sqrt();
}
function gl(e) {
  return e instanceof ur || e && e.toStringTag === Eu || !1;
}
function zp(e) {
  return new this(e).ln();
}
function Ap(e, n) {
  return new this(e).log(n);
}
function Lp(e) {
  return new this(e).log(2);
}
function Rp(e) {
  return new this(e).log(10);
}
function Up() {
  return zu(this, arguments, "lt");
}
function Hp() {
  return zu(this, arguments, "gt");
}
function Fp(e, n) {
  return new this(e).mod(n);
}
function Yp(e, n) {
  return new this(e).mul(n);
}
function jp(e, n) {
  return new this(e).pow(n);
}
function Wp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : un(e, 1, Or), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Bu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ce, a && e && (t = We(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ce)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ce && (r -= ce - a);
  }
  return l.e = r, l.d = i, l;
}
function Gp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function qp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Xp(e) {
  return new this(e).sin();
}
function Kp(e) {
  return new this(e).sinh();
}
function Zp(e) {
  return new this(e).sqrt();
}
function Jp(e, n) {
  return new this(e).sub(n);
}
function Qp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (pe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return pe = !0, fe(r, this.precision, this.rounding);
}
function _p(e) {
  return new this(e).tan();
}
function xp(e) {
  return new this(e).tanh();
}
function eh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var ur = X.constructor = Ru(Jo);
Wt = new ur(Wt);
Gt = new ur(Gt);
var nh = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: rh,
  classes: ah
} = x("counter"), yl = 100, bl = 600, th = ["inputmode", "readonly", "disabled"];
function oh(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [J(
        a,
        {
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          round: "",
          "var-counter-cover": "",
          ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        {
          default: ve(() => [J(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), Se(z(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        th
      ), [[Dv, e.inputValue]]), J(
        a,
        {
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: W({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          round: "",
          "var-counter-cover": "",
          ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        {
          default: ve(() => [J(r, {
            name: "plus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      )],
      16
      /* FULL_PROPS */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Uu = _({
  name: "VarCounter",
  components: {
    VarButton: Qe,
    VarIcon: Pe,
    VarFormDetails: Ke
  },
  directives: {
    Ripple: He
  },
  inheritAttrs: !1,
  props: nh,
  setup(e) {
    var n = M(""), {
      bindForm: r,
      form: a
    } = Pn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Tn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), y = (Y) => {
      Be(() => {
        var {
          validateTrigger: j,
          rules: ue,
          modelValue: G
        } = e;
        o(j, Y, ue, G);
      });
    }, h = () => {
      var {
        min: Y
      } = e;
      $(e["onUpdate:modelValue"], Y != null ? L(Y) : 0), i();
    }, w = {
      reset: h,
      validate: g,
      resetValidation: i
    }, V = R(() => {
      var {
        max: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) >= L(Y);
    }), S = R(() => {
      var {
        min: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) <= L(Y);
    }), T = (Y) => {
      var {
        decimalLength: j,
        max: ue,
        min: G
      } = e, H = L(Y);
      return ue != null && H > L(ue) && (H = L(ue)), G != null && H < L(G) && (H = L(G)), Y = String(H), j != null && (Y = H.toFixed(L(j))), Y;
    }, E = (Y) => {
      var {
        lazyChange: j,
        onBeforeChange: ue
      } = e, {
        value: G
      } = Y.target, H = T(G);
      j ? $(ue, L(H), Q) : Z(H), y("onInputChange");
    }, P = () => {
      var {
        disabled: Y,
        readonly: j,
        disableDecrement: ue,
        decrementButton: G,
        lazyChange: H,
        step: N,
        modelValue: q,
        onDecrement: ne,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || ue || !G) && !S.value) {
        var de = new ur(L(q)).minus(new ur(L(N))).toString(), K = T(de), re = L(K);
        $(ne, re), H ? $(se, re, Q) : (Z(K), y("onDecrement"));
      }
    }, I = () => {
      var {
        disabled: Y,
        readonly: j,
        disableIncrement: ue,
        incrementButton: G,
        lazyChange: H,
        step: N,
        modelValue: q,
        onIncrement: ne,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || ue || !G) && !V.value) {
        var de = new ur(L(q)).plus(new ur(L(N))).toString(), K = T(de), re = L(K);
        $(ne, re), H ? $(se, re, Q) : (Z(K), y("onIncrement"));
      }
    }, b = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (m = window.setTimeout(() => {
        A();
      }, bl));
    }, B = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (f = window.setTimeout(() => {
        k();
      }, bl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, k = () => {
      d = window.setTimeout(() => {
        I(), k();
      }, yl);
    }, A = () => {
      v = window.setTimeout(() => {
        P(), A();
      }, yl);
    }, Z = (Y) => {
      n.value = Y;
      var j = L(Y);
      $(e["onUpdate:modelValue"], j);
    }, Q = (Y) => {
      Z(T(String(Y))), y("onLazyChange");
    };
    return $(r, w), ie(() => e.modelValue, (Y) => {
      Z(T(String(Y))), $(e.onChange, L(Y));
    }), Z(T(String(e.modelValue))), {
      n: rh,
      classes: ah,
      formatElevation: cn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: S,
      validate: g,
      reset: h,
      resetValidation: i,
      handleChange: E,
      decrement: P,
      increment: I,
      pressDecrement: b,
      pressIncrement: B,
      releaseDecrement: D,
      releaseIncrement: C,
      toSizeUnit: ge,
      toNumber: L
    };
  }
});
Uu.render = oh;
const qr = Uu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var FS = qr, Hu = 60, Fu = Hu * 60, Yu = Fu * 24, ih = Yu * 7, Xa = 1e3, Co = Hu * Xa, wl = Fu * Xa, lh = Yu * Xa, sh = ih * Xa, Ii = "millisecond", Ha = "second", Fa = "minute", Ya = "hour", rr = "day", At = "week", Vn = "month", ju = "quarter", ar = "year", ja = "date", uh = "YYYY-MM-DDTHH:mm:ssZ", Cl = "Invalid Date", dh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, vh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const fh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ei = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ch = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ei(t, 2, "0") + ":" + ei(o, 2, "0");
}, mh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Vn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Vn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ph = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, hh = function(n) {
  var r = {
    M: Vn,
    y: ar,
    w: At,
    d: rr,
    D: ja,
    h: Ya,
    m: Fa,
    s: Ha,
    ms: Ii,
    Q: ju
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, gh = function(n) {
  return n === void 0;
};
const yh = {
  s: ei,
  z: ch,
  m: mh,
  a: ph,
  p: hh,
  u: gh
};
var ot = "en", Xr = {};
Xr[ot] = fh;
var Ni = function(n) {
  return n instanceof fo;
}, Xt = function e(n, r, a) {
  var t;
  if (!n)
    return ot;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Xr[o] && (t = o), r && (Xr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Xr[i] = n, t = i;
  }
  return !a && t && (ot = t), t || !a && ot;
}, oe = function(n, r) {
  if (Ni(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new fo(a);
}, bh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ve = yh;
Ve.l = Xt;
Ve.i = Ni;
Ve.w = bh;
var wh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Ve.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(dh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, fo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Xt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = wh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Ve;
  }, n.isValid = function() {
    return this.$d.toString() !== Cl;
  }, n.isSame = function(a, t) {
    var o = oe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return oe(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < oe(a);
  }, n.$g = function(a, t, o) {
    return Ve.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Ve.u(t) ? !0 : t, i = Ve.p(a), s = function(w, V) {
      var S = Ve.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? S : S.endOf(rr);
    }, u = function(w, V) {
      var S = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Ve.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case ar:
        return l ? s(1, 0) : s(31, 11);
      case Vn:
        return l ? s(1, v) : s(0, v + 1);
      case At: {
        var g = this.$locale().weekStart || 0, y = (d < g ? d + 7 : d) - g;
        return s(l ? f - y : f + (6 - y), v);
      }
      case rr:
      case ja:
        return u(m + "Hours", 0);
      case Ya:
        return u(m + "Minutes", 1);
      case Fa:
        return u(m + "Seconds", 2);
      case Ha:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Ve.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[rr] = i + "Date", o[ja] = i + "Date", o[Vn] = i + "Month", o[ar] = i + "FullYear", o[Ya] = i + "Hours", o[Fa] = i + "Minutes", o[Ha] = i + "Seconds", o[Ii] = i + "Milliseconds", o)[l], u = l === rr ? this.$D + (t - this.$W) : t;
    if (l === Vn || l === ar) {
      var d = this.clone().set(ja, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ja, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Ve.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Ve.p(t), s = function(f) {
      var m = oe(o);
      return Ve.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Vn)
      return this.set(Vn, this.$M + a);
    if (i === ar)
      return this.set(ar, this.$y + a);
    if (i === rr)
      return s(1);
    if (i === At)
      return s(7);
    var u = (l = {}, l[Fa] = Co, l[Ya] = wl, l[Ha] = Xa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ve.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Cl;
    var l = a || uh, i = Ve.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(S, T, E, P) {
      return S && (S[T] || S(t, l)) || E[T].slice(0, P);
    }, y = function(S) {
      return Ve.s(s % 12 || 12, S, "0");
    }, h = m || function(V, S, T) {
      var E = V < 12 ? "AM" : "PM";
      return T ? E.toLowerCase() : E;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ve.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Ve.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ve.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Ve.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ve.s(this.$s, 2, "0"),
      SSS: Ve.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(vh, function(V, S) {
      return S || w[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Ve.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * Co, d = this - s, v = Ve.m(this, s);
    return v = (l = {}, l[ar] = v / 12, l[Vn] = v, l[ju] = v / 3, l[At] = (d - u) / sh, l[rr] = (d - u) / lh, l[Ya] = d / wl, l[Fa] = d / Co, l[Ha] = d / Xa, l)[i] || d, o ? v : Ve.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Vn).$D;
  }, n.$locale = function() {
    return Xr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Xt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Ve.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Wu = fo.prototype;
oe.prototype = Wu;
[["$ms", Ii], ["$s", Ha], ["$m", Fa], ["$H", Ya], ["$W", rr], ["$M", Vn], ["$y", ar], ["$D", ja]].forEach(function(e) {
  Wu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, fo, oe), e.$i = !0), oe;
};
oe.locale = Xt;
oe.isDayjs = Ni;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Xr[ot];
oe.Ls = Xr;
oe.p = {};
const Gu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, qu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Ch(e) {
  return ["date", "month"].includes(e);
}
var Lt = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], at = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], Sh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ch
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: kh
} = x("picker-header");
function $h(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [J(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [J(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), z(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [J(
        ze,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O(
            "div",
            {
              key: e.showDate
            },
            ae(e.showDate),
            1
            /* TEXT */
          ))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    ), J(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [J(r, {
          name: "chevron-right"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    )],
    2
    /* CLASS */
  );
}
var Xu = _({
  name: "PanelHeader",
  components: {
    VarButton: Qe,
    VarIcon: Pe
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = M(!1), t = M(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = Ge.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ge.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: kh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Xu.render = $h;
const Ku = Xu;
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
oe.extend(Gu);
oe.extend(qu);
var {
  n: Mt,
  classes: Th
} = x("month-picker"), {
  n: Bt
} = x("date-picker");
function Ph(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), J(
        ze,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O("ul", {
            key: e.panelKey
          }, [(p(!0), O(
            Oe,
            null,
            Ae(e.MONTH_LIST, (t) => (p(), O("li", {
              key: t.index
            }, [J(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ni({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [we(
                  ae(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["elevation", "onClick"]
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Zu = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Qe,
    PanelHeader: Ku
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ne({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (V) => {
      var S, T;
      return (S = (T = Ge.value.datePickerMonthDict) == null ? void 0 : T[V].abbr) != null ? S : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: T,
          max: E
        }
      } = e, P = !0, I = !0, b = S + "-" + V;
      return E && (P = oe(b).isSameOrBefore(oe(E), "month")), T && (I = oe(b).isSameOrAfter(oe(T), "month")), P && I;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: T,
          chooseRangeMonth: E
        },
        componentProps: {
          type: P,
          range: I
        }
      } = e;
      if (I) {
        if (!E.length)
          return !1;
        var b = oe(V).isSameOrBefore(oe(E[1]), "month"), B = oe(V).isSameOrAfter(oe(E[0]), "month");
        return b && B;
      }
      return P === "month" ? S.includes(V) : T.some((D) => D.includes(V));
    }, g = (V) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: E,
          color: P,
          multiple: I,
          range: b
        }
      } = e, B = T + "-" + V, D = () => b || I ? m(B) : (S == null ? void 0 : S.index) === V && u.value, C = () => f(V) ? E ? !E(B) : !1 : !0, k = C(), A = () => k ? !0 : b || I ? !m(B) : !u.value || (S == null ? void 0 : S.index) !== V, Z = () => d.value && t === V && e.componentProps.showCurrent ? (b || I || u.value) && k ? !0 : b || I ? !m(B) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, Q = () => k ? "" : Z() ? P ?? "" : D() ? "" : Bt() + "-color-cover", Y = Q().startsWith(Bt());
      return {
        outline: Z(),
        text: A(),
        color: A() ? "" : P,
        textColor: Y ? "" : Q(),
        [Bt() + "-color-cover"]: Y,
        class: Th(Mt("button"), [k, Mt("button--disabled")]),
        disabled: k
      };
    }, y = (V, S) => {
      var T = S.currentTarget;
      T.classList.contains(Mt("button--disabled")) || r("choose-month", V);
    }, h = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return ie(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: S,
          max: T
        }
      } = e;
      T && (s.right = !oe("" + (L(V) + 1)).isSameOrBefore(oe(T), "year")), S && (s.left = !oe("" + (L(V) - 1)).isSameOrAfter(oe(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Mt,
      nDate: Bt,
      pack: Ge,
      MONTH_LIST: Lt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: h
    };
  }
});
Zu.render = Ph;
const Oh = Zu;
var {
  n: Sl,
  classes: Vh
} = x("year-picker"), Mh = ["onClick"];
function Bh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Oe,
      null,
      Ae(e.yearList, (r) => (p(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: W({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ae(r),
        15,
        Mh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ju = _({
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = R(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [L(l) + 100, L(l) - 100];
      if (i) {
        var d = oe(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = oe(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return dn(() => {
      var o = document.querySelector("." + Sl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Sl,
      classes: Vh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ju.render = Bh;
const Eh = Ju;
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
oe.extend(Gu);
oe.extend(qu);
var {
  n: Ra,
  classes: Ih
} = x("day-picker"), {
  n: Et
} = x("date-picker");
function Nh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), J(
        ze,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), O(
              Oe,
              null,
              Ae(e.sortWeekList, (t) => (p(), O(
                "li",
                {
                  key: t.index
                },
                ae(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), z(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), O(
              Oe,
              null,
              Ae(e.days, (t, o) => (p(), O("li", {
                key: o
              }, [J(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ri({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [we(
                    ae(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["elevation", "onClick"]
              )]))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Qu = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Qe,
    PanelHeader: Ku
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ne({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var b = at.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? at : at.slice(b).concat(at.slice(0, b));
    }), g = (b) => {
      var B, D;
      return (B = (D = Ge.value.datePickerWeekDict) == null ? void 0 : D[b].abbr) != null ? B : "";
    }, y = (b) => b > 0 ? b : "", h = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: B
        }
      } = e, D = oe(B + "-" + b.index).daysInMonth(), C = oe(B + "-" + b.index + "-01").day(), k = m.value.findIndex((A) => A.index === "" + C);
      l.value = [...Array(k).fill(-1), ...Array.from(Array(D + 1).keys())].filter((A) => A);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: B
        },
        componentProps: {
          max: D,
          min: C
        }
      } = e;
      if (D) {
        var k = b + "-" + (L(B.index) + 1);
        d.right = !oe(k).isSameOrBefore(oe(D), "month");
      }
      if (C) {
        var A = b + "-" + (L(B.index) - 1);
        d.left = !oe(A).isSameOrAfter(oe(C), "month");
      }
    }, V = (b) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: D
        },
        componentProps: {
          min: C,
          max: k
        }
      } = e, A = !0, Z = !0, Q = B + "-" + D.index + "-" + b;
      return k && (A = oe(Q).isSameOrBefore(oe(k), "day")), C && (Z = oe(Q).isSameOrAfter(oe(C), "day")), A && Z;
    }, S = (b) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: D
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!D.length)
          return !1;
        var k = oe(b).isSameOrBefore(oe(D[1]), "day"), A = oe(b).isSameOrAfter(oe(D[0]), "day");
        return k && A;
      }
      return B.includes(b);
    }, T = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ra("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: D,
          previewMonth: C
        },
        componentProps: {
          allowedDates: k,
          color: A,
          multiple: Z,
          range: Q
        }
      } = e, Y = D + "-" + C.index + "-" + b, j = () => Q || Z ? S(Y) : L(B) === b && f.value, ue = () => V(b) ? k ? !k(Y) : !1 : !0, G = ue(), H = () => G ? !0 : Q || Z ? !S(Y) : !f.value || L(B) !== b, N = () => v.value && L(o) === b && e.componentProps.showCurrent ? (Q || Z || f.value) && G ? !0 : Q || Z ? !S(Y) : f.value ? B !== o : !0 : !1, q = () => G ? "" : N() ? A ?? "" : j() ? "" : Et() + "-color-cover", ne = q().startsWith(Et());
      return {
        text: H(),
        outline: N(),
        textColor: ne ? "" : q(),
        [Et() + "-color-cover"]: ne,
        class: Ih(Ra("button"), Ra("button--usable"), [G, Ra("button--disabled")]),
        disabled: G
      };
    }, E = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, r("check-preview", "month", b);
    }, P = (b, B) => {
      var D = B.currentTarget;
      D.classList.contains(Ra("button--disabled")) || r("choose-day", b);
    }, I = (b) => {
      u.value.checkDate(b);
    };
    return dn(() => {
      h(), w();
    }), ie(() => e.preview, () => {
      h(), w();
    }), {
      n: Ra,
      nDate: Et,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: I,
      filterDay: y,
      getDayAbbr: g,
      checkDate: E,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Qu.render = Nh;
const Dh = Qu;
var {
  n: zh,
  classes: Ah
} = x("date-picker");
function Lh(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [we(
          ae(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [J(
          ze,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), O("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [we(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [we(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "date", bt(Ee({
                key: 2
              }, e.slotProps)), () => [we(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )])]))];
            }),
            _: 3
            /* FORWARDED */
          },
          8,
          ["name"]
        )],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), z(
      "div",
      {
        class: c(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [J(
        ze,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), ye(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (p(), ye(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (p(), ye(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : ee("v-if", !0)]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    )],
    2
    /* CLASS */
  );
}
var _u = _({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Oh,
    YearPickerPanel: Eh,
    DayPickerPanel: Dh
  },
  props: Sh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Lt.find((le) => le.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), g = M(), y = M(s), h = M(l), w = M(!1), V = M([]), S = M([]), T = M([]), E = M([]), P = M(null), I = M(null), b = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), B = R(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: V.value,
      chooseDays: S.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: E.value
    })), D = R(() => ({
      previewMonth: y.value,
      previewYear: h.value
    })), C = R(() => {
      var {
        multiple: le,
        range: be
      } = e;
      if (be)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var he = "";
      if (f.value) {
        var ke, Te;
        he = (ke = (Te = Ge.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ke : "";
      }
      return le ? "" + V.value.length + Ge.value.datePickerSelected : he;
    }), k = R(() => {
      var le, be, he, ke, {
        multiple: Te,
        range: Ye
      } = e;
      if (Ye) {
        var en = E.value.map((yo) => oe(yo).format("YYYY-MM-DD"));
        return en.length ? en[0] + " ~ " + en[1] : "";
      }
      if (Te)
        return "" + S.value.length + Ge.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var yn = oe(m.value + "-" + f.value.index + "-" + g.value).day(), La = at.find((yo) => yo.index === "" + yn), Gi = (le = (be = Ge.value.datePickerWeekDict) == null ? void 0 : be[La.index].name) != null ? le : "", Pv = (he = (ke = Ge.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? he : "", Ov = Ba(g.value, 2, "0");
      return Ge.value.lang === "zh-CN" ? f.value.index + "-" + Ov + " " + Gi.slice(0, 3) : Gi.slice(0, 3) + ", " + Pv.slice(0, 3) + " " + g.value;
    }), A = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Z = R(() => !e.touchable || ["", "year"].includes(A.value)), Q = R(() => {
      var le, be, he, ke, Te = oe(m.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + g.value).day(), Ye = g.value ? Ba(g.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (be = m.value) != null ? be : "",
        month: (he = (ke = f.value) == null ? void 0 : ke.index) != null ? he : "",
        date: Ye
      };
    }), Y = R(() => B.value.chooseRangeDay.map((le) => oe(le).format("YYYY-MM-DD"))), j = R(() => m.value === h.value), ue = R(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === y.value.index;
    }), G = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, H = (le) => {
      if (!Z.value) {
        var {
          clientX: be,
          clientY: he
        } = le.touches[0];
        n = be, r = he;
      }
    }, N = (le, be) => le >= be && le > 20 ? "x" : "y", q = (le) => {
      if (!Z.value) {
        var {
          clientX: be,
          clientY: he
        } = le.touches[0], ke = be - n, Te = he - r;
        t = N(Math.abs(ke), Math.abs(Te)), a = ke > 0 ? "prev" : "next";
      }
    }, ne = () => {
      if (!(Z.value || t !== "x")) {
        var le = A.value === "month" ? P : I;
        ro(() => {
          le.value.forwardRef(a), Mr();
        });
      }
    }, se = (le, be) => {
      var he = be === "month" ? T : E;
      if (he.value = v.value ? [le, le] : [he.value[0], le], v.value = !v.value, v.value) {
        var ke = oe(he.value[0]).isAfter(he.value[1]), Te = ke ? [he.value[1], he.value[0]] : [...he.value];
        $(e["onUpdate:modelValue"], Te), $(e.onChange, Te);
      }
    }, de = (le, be) => {
      var he = be === "month" ? V : S, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = he.value.map((en) => oe(en).format(ke)), Ye = Te.findIndex((en) => en === le);
      Ye === -1 ? Te.push(le) : Te.splice(Ye, 1), $(e["onUpdate:modelValue"], Te), $(e.onChange, Te);
    }, K = (le, be) => !m.value || !f.value ? !1 : j.value ? le === "month" ? be.index < f.value.index : ue.value ? be < L(g.value) : f.value.index > y.value.index : m.value > h.value, re = (le) => {
      var {
        readonly: be,
        range: he,
        multiple: ke,
        onChange: Te,
        "onUpdate:modelValue": Ye
      } = e;
      if (!(le < 0 || be)) {
        w.value = K("day", le);
        var en = h.value + "-" + y.value.index + "-" + le, yn = oe(en).format("YYYY-MM-DD");
        he ? se(yn, "day") : ke ? de(yn, "day") : ($(Ye, yn), $(Te, yn));
      }
    }, me = (le) => {
      var {
        type: be,
        readonly: he,
        range: ke,
        multiple: Te,
        onChange: Ye,
        onPreview: en,
        "onUpdate:modelValue": yn
      } = e;
      if (w.value = K("month", le), be === "month" && !he) {
        var La = h.value + "-" + le.index;
        ke ? se(La, "month") : Te ? de(La, "month") : ($(yn, La), $(Ye, La));
      } else
        y.value = le, $(en, L(h.value), L(y.value.index));
      d.value = !1;
    }, Ce = (le) => {
      h.value = "" + le, u.value = !1, d.value = !0, $(e.onPreview, L(h.value), L(y.value.index));
    }, Le = (le, be) => {
      var he = be === "prev" ? -1 : 1;
      if (le === "year")
        h.value = "" + (L(h.value) + he);
      else {
        var ke = L(y.value.index) + he;
        ke < 1 && (h.value = "" + (L(h.value) - 1), ke = 12), ke > 12 && (h.value = "" + (L(h.value) + 1), ke = 1), y.value = Lt.find((Te) => L(Te.index) === ke);
      }
      $(e.onPreview, L(h.value), L(y.value.index));
    }, xe = () => (e.multiple || e.range) && !$e(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && $e(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ze = (le) => $e(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Fe = (le, be) => {
      var he = be === "month" ? T : E, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = le.map((yn) => oe(yn).format(ke)).slice(0, 2), Ye = he.value.some((yn) => Ze(yn));
      if (!Ye) {
        he.value = Te;
        var en = oe(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && en && (he.value = [he.value[1], he.value[0]]);
      }
    }, mn = (le, be) => {
      var he = be === "month" ? V : S, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(le.map((Ye) => oe(Ye).format(ke))));
      he.value = Te.filter((Ye) => Ye !== "Invalid Date");
    }, Tt = (le) => {
      var be = oe(le).format("YYYY-MM-D");
      if (!Ze(be)) {
        var [he, ke, Te] = be.split("-"), Ye = Lt.find((en) => en.index === ke);
        f.value = Ye, m.value = he, g.value = Te, y.value = Ye, h.value = he;
      }
    }, Mr = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (le) => {
      if (!(!xe() || Ze(le) || !le))
        if (e.range) {
          if (!$e(le))
            return;
          v.value = le.length !== 1, Fe(le, e.type);
        } else if (e.multiple) {
          if (!$e(le))
            return;
          mn(le, e.type);
        } else
          Tt(le);
    }, {
      immediate: !0
    }), ie(A, Mr), {
      n: zh,
      classes: Ah,
      monthPanelEl: P,
      dayPanelEl: I,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: k,
      getPanelType: A,
      getChoose: B,
      getPreview: D,
      componentProps: b,
      slotProps: Q,
      formatRange: Y,
      clickEl: G,
      handleTouchstart: H,
      handleTouchmove: q,
      handleTouchend: ne,
      getChooseDay: re,
      getChooseMonth: me,
      getChooseYear: Ce,
      checkPreview: Le,
      formatElevation: cn
    };
  }
});
_u.render = Lh;
const Kr = _u;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var YS = Kr;
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
function Rh(e) {
  return ["left", "center", "right"].includes(e);
}
var Uh = ai({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: Rh
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, qe(St, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
var {
  n: Hh,
  classes: Fh
} = x("dialog");
function Yh(e, n) {
  var r = te("var-button"), a = te("var-popup");
  return p(), ye(
    a,
    {
      class: c(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ve(() => [z(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ti({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: c(e.n("title"))
          },
          [F(e.$slots, "title", {}, () => [we(
            ae(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.n("message")),
            style: W({
              textAlign: e.messageAlign
            })
          },
          [F(e.$slots, "default", {}, () => [we(
            ae(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (p(), ye(
            r,
            {
              key: 0,
              class: c(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [we(
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0), e.confirmButton ? (p(), ye(
            r,
            {
              key: 1,
              class: c(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [we(
                ae(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0)],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
var xu = _({
  name: "VarDialog",
  components: {
    VarPopup: Cn,
    VarButton: Qe
  },
  inheritAttrs: !1,
  props: Uh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!i) {
        if (u != null) {
          $(u, "close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if ($(s), i != null) {
        $(i, "confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if ($(s), i != null) {
        $(i, "cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Hh,
      classes: Fh,
      pack: Ge,
      dt: no,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
xu.render = Yh;
const pr = xu;
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
var or, Zt = {};
function jh(e) {
  return e === void 0 && (e = {}), Ue(e) ? Kt({}, Zt, {
    message: e
  }) : Kt({}, Zt, e);
}
function Jn(e) {
  return Ct() ? new Promise((n) => {
    Jn.close();
    var r = jh(e), a = Ne(r);
    a.teleport = "body", or = a;
    var {
      unmountInstance: t
    } = et(pr, a, {
      onConfirm: () => {
        $(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(a.onCancel), n("cancel");
      },
      onClose: () => {
        $(a.onClose), n("close");
      },
      onClosed: () => {
        $(a.onClosed), t(), or === a && (or = null);
      },
      onRouteChange: () => {
        t(), or === a && (or = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Jn.setDefaultOptions = function(e) {
  Zt = e;
};
Jn.resetDefaultOptions = function() {
  Zt = {};
};
Jn.close = function() {
  if (or != null) {
    var e = or;
    or = null, Be().then(() => {
      e.show = !1;
    });
  }
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
Jn.install = function(e) {
  e.component(pr.name, pr);
};
Jn.Component = pr;
var jS = pr, Wh = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
var {
  n: Gh,
  classes: qh
} = x("divider");
function Xh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: W(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var ed = _({
  name: "VarDivider",
  props: Wh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = R(() => Po(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Po(i) || i === 0)
        return Wa({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Wa({}, d, {
        height: "calc(80% - " + ge(f) + ")"
      }) : Wa({}, d, {
        width: "calc(100% - " + ge(f) + ")",
        left: v > 0 ? ge(f) : ge(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return dn(() => {
      l();
    }), xt(() => {
      l();
    }), Wa({
      n: Gh,
      classes: qh
    }, zv(a), {
      style: o,
      isInset: t
    });
  }
});
ed.render = Xh;
const Zr = ed;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var WS = Zr, Kh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Kh[n];
  });
}
var Fn = "top", Tr = "bottom", Ea = "right", hr = "left", co = "auto", mo = [Fn, Tr, Ea, hr], po = "start", mt = "end", Zh = "clippingParents", nd = "viewport", nt = "popper", Jh = "reference", kl = /* @__PURE__ */ mo.reduce(function(e, n) {
  return e.concat([n + "-" + po, n + "-" + mt]);
}, []), rd = /* @__PURE__ */ [].concat(mo, [co]).reduce(function(e, n) {
  return e.concat([n, n + "-" + po, n + "-" + mt]);
}, []), Qh = "beforeRead", _h = "read", xh = "afterRead", eg = "beforeMain", ng = "main", rg = "afterMain", ag = "beforeWrite", tg = "write", og = "afterWrite", oi = [Qh, _h, xh, eg, ng, rg, ag, tg, og];
function Yn(e) {
  return e.split("-")[0];
}
var ig = {
  start: "end",
  end: "start"
};
function $l(e) {
  return e.replace(/start|end/g, function(n) {
    return ig[n];
  });
}
function On(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ia(e) {
  var n = On(e).Element;
  return e instanceof n || e instanceof Element;
}
function Sn(e) {
  var n = On(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = On(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Vr(e) {
  return ((Ia(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var it = Math.max, Tl = Math.min, Ka = Math.round;
function ii() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ad() {
  return !/^((?!chrome|android).)*safari/i.test(ii());
}
function Za(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && Sn(e) && (t = e.offsetWidth > 0 && Ka(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ka(a.height) / e.offsetHeight || 1);
  var l = Ia(e) ? On(e) : window, i = l.visualViewport, s = !ad() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function zi(e) {
  var n = On(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ai(e) {
  return Za(Vr(e)).left + zi(e).scrollLeft;
}
function lg(e, n) {
  var r = On(e), a = Vr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ad();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ai(e),
    y: s
  };
}
function In(e) {
  return On(e).getComputedStyle(e);
}
function sg(e) {
  var n, r = Vr(e), a = zi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = it(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = it(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ai(e), s = -a.scrollTop;
  return In(t || r).direction === "rtl" && (i += it(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Ln(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ho(e) {
  return Ln(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vr(e)
  );
}
function Li(e) {
  var n = In(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function td(e) {
  return ["html", "body", "#document"].indexOf(Ln(e)) >= 0 ? e.ownerDocument.body : Sn(e) && Li(e) ? e : td(ho(e));
}
function lt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = td(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = On(a), l = t ? [o].concat(o.visualViewport || [], Li(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(lt(ho(l)))
  );
}
function ug(e) {
  return ["table", "td", "th"].indexOf(Ln(e)) >= 0;
}
function Pl(e) {
  return !Sn(e) || // https://github.com/popperjs/popper-core/issues/837
  In(e).position === "fixed" ? null : e.offsetParent;
}
function dg(e) {
  var n = /firefox/i.test(ii()), r = /Trident/i.test(ii());
  if (r && Sn(e)) {
    var a = In(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ho(e);
  for (Di(t) && (t = t.host); Sn(t) && ["html", "body"].indexOf(Ln(t)) < 0; ) {
    var o = In(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ri(e) {
  for (var n = On(e), r = Pl(e); r && ug(r) && In(r).position === "static"; )
    r = Pl(r);
  return r && (Ln(r) === "html" || Ln(r) === "body" && In(r).position === "static") ? n : r || dg(e) || n;
}
function vg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Di(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function li(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fg(e, n) {
  var r = Za(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ol(e, n, r) {
  return n === nd ? li(lg(e, r)) : Ia(n) ? fg(n, r) : li(sg(Vr(e)));
}
function cg(e) {
  var n = lt(ho(e)), r = ["absolute", "fixed"].indexOf(In(e).position) >= 0, a = r && Sn(e) ? Ri(e) : e;
  return Ia(a) ? n.filter(function(t) {
    return Ia(t) && vg(t, a) && Ln(t) !== "body";
  }) : [];
}
function mg(e, n, r, a) {
  var t = n === "clippingParents" ? cg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ol(e, u, a);
    return s.top = it(d.top, s.top), s.right = Tl(d.right, s.right), s.bottom = Tl(d.bottom, s.bottom), s.left = it(d.left, s.left), s;
  }, Ol(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function pt(e) {
  return e.split("-")[1];
}
function pg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function od(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? pt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Fn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case Tr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Ea:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case hr:
      s = {
        x: n.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? pg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case po:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case mt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function hg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gg(e) {
  return Object.assign({}, hg(), e);
}
function yg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function id(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Zh : i, u = r.rootBoundary, d = u === void 0 ? nd : u, v = r.elementContext, f = v === void 0 ? nt : v, m = r.altBoundary, g = m === void 0 ? !1 : m, y = r.padding, h = y === void 0 ? 0 : y, w = gg(typeof h != "number" ? h : yg(h, mo)), V = f === nt ? Jh : nt, S = e.rects.popper, T = e.elements[g ? V : f], E = mg(Ia(T) ? T : T.contextElement || Vr(e.elements.popper), s, d, l), P = Za(e.elements.reference), I = od({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: t
  }), b = li(Object.assign({}, S, I)), B = f === nt ? b : P, D = {
    top: E.top - B.top + w.top,
    bottom: B.bottom - E.bottom + w.bottom,
    left: E.left - B.left + w.left,
    right: B.right - E.right + w.right
  }, C = e.modifiersData.offset;
  if (f === nt && C) {
    var k = C[t];
    Object.keys(D).forEach(function(A) {
      var Z = [Ea, Tr].indexOf(A) >= 0 ? 1 : -1, Q = [Fn, Tr].indexOf(A) >= 0 ? "y" : "x";
      D[A] += k[Q] * Z;
    });
  }
  return D;
}
function bg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? rd : s, d = pt(a), v = d ? i ? kl : kl.filter(function(g) {
    return pt(g) === d;
  }) : mo, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, y) {
    return g[y] = id(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Yn(y)], g;
  }, {});
  return Object.keys(m).sort(function(g, y) {
    return m[g] - m[y];
  });
}
function wg(e) {
  if (Yn(e) === co)
    return [];
  var n = Rt(e);
  return [$l(e), n, $l(n)];
}
function Cg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, g = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, h = n.options.placement, w = Yn(h), V = w === h, S = s || (V || !g ? [Rt(h)] : wg(h)), T = [h].concat(S).reduce(function(se, de) {
      return se.concat(Yn(de) === co ? bg(n, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : de);
    }, []), E = n.rects.reference, P = n.rects.popper, I = /* @__PURE__ */ new Map(), b = !0, B = T[0], D = 0; D < T.length; D++) {
      var C = T[D], k = Yn(C), A = pt(C) === po, Z = [Fn, Tr].indexOf(k) >= 0, Q = Z ? "width" : "height", Y = id(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), j = Z ? A ? Ea : hr : A ? Tr : Fn;
      E[Q] > P[Q] && (j = Rt(j));
      var ue = Rt(j), G = [];
      if (o && G.push(Y[k] <= 0), i && G.push(Y[j] <= 0, Y[ue] <= 0), G.every(function(se) {
        return se;
      })) {
        B = C, b = !1;
        break;
      }
      I.set(C, G);
    }
    if (b)
      for (var H = g ? 3 : 1, N = function(de) {
        var K = T.find(function(re) {
          var me = I.get(re);
          if (me)
            return me.slice(0, de).every(function(Ce) {
              return Ce;
            });
        });
        if (K)
          return B = K, "break";
      }, q = H; q > 0; q--) {
        var ne = N(q);
        if (ne === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const Sg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kg(e, n, r) {
  var a = Yn(e), t = [hr, Fn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [hr, Ea].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function $g(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = rd.reduce(function(d, v) {
    return d[v] = kg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Tg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $g
};
function Pg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Og(e) {
  return e === On(e) || !Sn(e) ? zi(e) : Pg(e);
}
function Vg(e) {
  var n = e.getBoundingClientRect(), r = Ka(n.width) / e.offsetWidth || 1, a = Ka(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Mg(e, n, r) {
  r === void 0 && (r = !1);
  var a = Sn(n), t = Sn(n) && Vg(n), o = Vr(n), l = Za(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Ln(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Li(o)) && (i = Og(n)), Sn(n) ? (s = Za(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ai(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Bg(e) {
  var n = Za(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Eg(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = n.get(i);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function Ig(e) {
  var n = Eg(e);
  return oi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Ng(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function er(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Dg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Vl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function zg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Vl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(er(Br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(er(Br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          oi.indexOf(n.phase) < 0 && console.error(er(Br, n.name, '"phase"', "either " + oi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(er(Br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(er(Br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(er(Br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(er(Br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Vl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(er(Dg, String(n.name), a, a));
      });
    });
  });
}
function Ag(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Lg(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var Ml = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Rg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function El() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ug(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Bl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(w) {
        var V = typeof w == "function" ? w(d.options) : w;
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Ia(i) ? lt(i) : i.contextElement ? lt(i.contextElement) : [],
          popper: lt(s)
        };
        var S = Ig(Lg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Ag([].concat(S, d.options.modifiers), function(C) {
            var k = C.name;
            return k;
          });
          if (zg(T), Yn(d.options.placement) === co) {
            var E = d.orderedModifiers.find(function(C) {
              var k = C.name;
              return k === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = In(s), I = P.marginTop, b = P.marginRight, B = P.marginBottom, D = P.marginLeft;
          [I, b, B, D].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, V = w.reference, S = w.popper;
          if (!El(V, S)) {
            process.env.NODE_ENV !== "production" && console.error(Ml);
            return;
          }
          d.rects = {
            reference: Mg(V, Ri(S), d.options.strategy === "fixed"),
            popper: Bg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Rg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var P = d.orderedModifiers[E], I = P.fn, b = P.options, B = b === void 0 ? {} : b, D = P.name;
            typeof I == "function" && (d = I({
              state: d,
              options: B,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ng(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!El(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ml), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      d.orderedModifiers.forEach(function(h) {
        var w = h.name, V = h.options, S = V === void 0 ? {} : V, T = h.effect;
        if (typeof T == "function") {
          var E = T({
            state: d,
            name: w,
            instance: m,
            options: S
          }), P = function() {
          };
          v.push(E || P);
        }
      });
    }
    function y() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return m;
  };
}
var It = {
  passive: !0
};
function Hg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = On(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, It);
  }), i && s.addEventListener("resize", r.update, It), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, It);
    }), i && s.removeEventListener("resize", r.update, It);
  };
}
const Fg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hg,
  data: {}
};
function Yg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = od({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const jg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yg,
  data: {}
};
var Wg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ka(n * t) / t || 0,
    y: Ka(r * t) / t || 0
  };
}
function Il(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, y = g === void 0 ? 0 : g, h = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = h.x, y = h.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), S = hr, T = Fn, E = window;
  if (u) {
    var P = Ri(r), I = "clientHeight", b = "clientWidth";
    if (P === On(r) && (P = Vr(r), In(P).position !== "static" && i === "absolute" && (I = "scrollHeight", b = "scrollWidth")), P = P, t === Fn || (t === hr || t === Ea) && o === mt) {
      T = Tr;
      var B = v && P === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[I]
      );
      y -= B - a.height, y *= s ? 1 : -1;
    }
    if (t === hr || (t === Fn || t === Tr) && o === mt) {
      S = Ea;
      var D = v && P === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[b]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Wg), k = d === !0 ? Gg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = k.x, y = k.y, s) {
    var A;
    return Object.assign({}, C, (A = {}, A[T] = V ? "0" : "", A[S] = w ? "0" : "", A.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", A));
  }
  return Object.assign({}, C, (n = {}, n[T] = V ? y + "px" : "", n[S] = w ? m + "px" : "", n.transform = "", n));
}
function qg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = In(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Yn(n.placement),
    variation: pt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Il(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Il(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Xg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qg,
  data: {}
};
function Kg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !Sn(o) || !Ln(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Zg(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Sn(t) || !Ln(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Kg,
  effect: Zg,
  requires: ["computeStyles"]
};
var Qg = [Fg, jg, Xg, Jg], _g = /* @__PURE__ */ Ug({
  defaultModifiers: Qg
});
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jt.apply(this, arguments);
}
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Nl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function ld(e) {
  var n = M(null), r = M(null), a = M({
    width: 0,
    height: 0
  }), t = Ts(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, I) {
      I ? (S(), $(e.onOpen)) : $(e.onClose);
    }
  }), {
    zIndex: o
  } = kt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: I
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Re(P),
      height: Re(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var P = Dl(function* () {
      e.trigger === "hover" && (s = !1, yield Dn(), !i && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Dl(function* () {
      e.trigger === "hover" && (i = !1, yield Dn(), !s && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), g = () => {
    T();
  }, y = () => {
    t.value = !1, $(e["onUpdate:show"], !1);
  }, h = () => {
    e.trigger === "click" && y();
  }, w = () => {
    u();
    var P = {
      x: Re(e.offsetX),
      y: Re(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: P.y,
          distance: P.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: P.y,
          distance: -P.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: P.y,
          distance: -P.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: P.x,
          distance: -P.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: P.x,
          distance: P.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: P.y,
          distance: P.x
        };
    }
  }, V = () => {
    var {
      placement: P,
      skidding: I,
      distance: b
    } = w(), B = [Jt({}, Sg, {
      enabled: t.value
    }), Jt({}, Tg, {
      options: {
        offset: [I, b]
      }
    })];
    return {
      placement: P,
      modifiers: B
    };
  }, S = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, $(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, $(e["onUpdate:show"], !1);
  };
  return ks(n, "click", h), ie(() => e.offsetX, S), ie(() => e.offsetY, S), ie(() => e.placement, S), ie(() => e.disabled, E), Qt(() => {
    var P, I = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = _g(I ?? n.value, r.value, V());
  }), _a(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: T,
    close: E
  };
}
function xg(e) {
  return ["click", "hover"].includes(e);
}
function ey(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ny(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ry = {
  type: {
    type: String,
    default: "default",
    validator: ny
  },
  color: {
    type: String
  },
  content: {
    type: String
  },
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "hover",
    validator: xg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ey
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: ay,
  classes: ty
} = x("tooltip");
function oy(e, n) {
  return p(), O(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [F(e.$slots, "default"), (p(), ye(
      Da,
      {
        to: e.teleport
      },
      [J(
        ze,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(z(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: W({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = gn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [z(
              "div",
              {
                style: W({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [F(e.$slots, "content", {}, () => [we(
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Cr, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var sd = _({
  name: "VarTooltip",
  props: ry,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: g
    } = ld(e);
    return {
      toSizeUnit: ge,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ay,
      classes: ty,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: g,
      open: f,
      close: m
    };
  }
});
sd.render = oy;
const gr = sd;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var GS = gr;
function iy(e) {
  return ["click"].includes(e);
}
var ly = {
  expandTrigger: {
    type: String,
    validator: iy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
var {
  n: sy,
  classes: uy
} = x("ellipsis"), dy = {
  key: 0
};
function vy(e, n) {
  var r = te("var-tooltip");
  return p(), ye(
    r,
    bt(eo(e.tooltip)),
    {
      content: ve(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          dy,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [z(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: W(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var ud = _({
  name: "VarEllipsis",
  components: {
    VarTooltip: gr
  },
  props: ly,
  setup(e) {
    var n = M(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : si({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: sy,
      classes: uy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
ud.render = vy;
const Jr = ud;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var qS = Jr;
function fy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function cy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function my(e) {
  return ["click", "hover"].includes(e);
}
var py = {
  active: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !0
  },
  type: {
    type: String,
    default: "primary",
    validator: ru
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: fy
  },
  direction: {
    type: String,
    default: "top",
    validator: cy
  },
  trigger: {
    type: String,
    default: "click",
    validator: my
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: {
    type: [Number, String]
  },
  activeIconSize: {
    type: [Number, String]
  },
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  left: {
    type: [Number, String]
  },
  right: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String
  },
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function zl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  classes: Al,
  n: tn
} = x("fab");
const Qr = _({
  name: "VarFab",
  inheritAttrs: !1,
  props: py,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ts(e, "active"), o = M(null), {
      disabled: l
    } = ao(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          $(e.onClick, t.value, f);
          return;
        }
        t.value = m, $(e.onClick, t.value, f), $(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, $(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, $(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : Se(J(Qe, {
      "var-fab-cover": !0,
      class: tn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [J(Pe, {
        "var-fab-cover": !0,
        class: Al([t.value, tn("trigger-active-icon"), tn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: tn("--trigger-icon-animation")
      }, null)]
    }), [[Cr, e.show]]), v = () => {
      var f, m, g = $s((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return J("div", Ee({
        class: Al(tn(), tn("--position-" + e.position), tn("--direction-" + e.direction), [e.fixed, tn("--fixed"), tn("--absolute")], [e.safeArea, tn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (y) => i(y, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [J(ze, {
        name: tn("--active-transition")
      }, zl(f = d()) ? f : {
        default: () => [f]
      }), J(ze, {
        name: tn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Se(J("div", {
          class: tn("actions"),
          onClick: (y) => y.stopPropagation()
        }, [g.map((y) => J("div", {
          class: tn("action")
        }, [y]))]), [[Cr, e.show && t.value && g.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), ks(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return J(Da, {
          to: f,
          disabled: l.value
        }, zl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var XS = Qr;
function hy(e) {
  return ["start", "end"].includes(e);
}
var gy = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: hy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: by
} = x("form");
function wy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var dd = _({
  name: "VarForm",
  props: gy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Vm(), o = (d) => {
      setTimeout(() => {
        var v = Sr(d), f = v === window ? 0 : el(v), m = el(d) - f - Re(e.scrollToErrorOffsetY);
        vt(v, {
          top: m,
          animation: Vo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = yy(function* () {
        var v = yield Promise.all(a.map((h) => {
          var {
            validate: w
          } = h;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Fv(v, (h) => h === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, y = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(y);
          }
          return !m;
        }
        return v.every((h) => h === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: v
      } = d;
      return v();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: v
      } = d;
      return v();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: by,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
dd.render = wy;
const jn = dd;
jn.install = function(e) {
  e.component(jn.name, jn);
};
jn.useValidation = Tn;
jn.useForm = Pn;
var KS = jn;
function Cy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Sy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cy,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: ky,
  classes: $y
} = x("image"), Ty = ["alt", "title", "lazy-error", "lazy-loading"], Py = ["alt", "title", "src"];
function Oy(e, n) {
  var r = Ie("lazy"), a = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((p(), O(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: W({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      Ty
    )), [[r, e.src]]) : (p(), O(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: W({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      Py
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var vd = _({
  name: "VarImage",
  directives: {
    Lazy: ft,
    Ripple: He
  },
  props: Sy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && $(i, t), o._lazy.state === "error" && $(s, t)) : $(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && $(l, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: ky,
      classes: $y,
      toSizeUnit: ge,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
vd.render = Oy;
const _r = vd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ZS = _r, fd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Vy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = fn(fd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var cd = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: U()
};
function Rl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function My(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Rl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Rl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var By = 250, Ey = 20, {
  n: Iy,
  classes: Ny
} = x("swipe"), Dy = ["onClick"];
function zy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: W({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        Oe,
        null,
        Ae(e.length, (r, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: W({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Dy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)])],
    2
    /* CLASS */
  );
}
var md = _({
  name: "VarSwipe",
  props: cd,
  setup(e) {
    var n = M(null), r = M(0), a = R(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Vy(), v = !1, f = !1, m = -1, g, y, h, w, V, S = (N) => s.find((q) => {
      var {
        index: ne
      } = q;
      return ne.value === N;
    }), T = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && S(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, E = (N) => {
      var q = an(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: ne
      } = e;
      return q <= -1 ? ne ? -1 : 0 : q >= d.value ? ne ? d.value : d.value - 1 : q;
    }, P = (N) => {
      var {
        loop: q
      } = e;
      return N === -1 ? q ? d.value - 1 : 0 : N === d.value ? q ? 0 : d.value - 1 : N;
    }, I = (N) => {
      var {
        loop: q
      } = e;
      return N < 0 ? q ? d.value - 1 : 0 : N > d.value - 1 ? q ? 0 : d.value - 1 : N;
    }, b = (N) => {
      var q = o.value >= r.value, ne = o.value <= -t.value, se = 0, de = -(t.value - r.value);
      l.value = !0, (q || ne) && (l.value = !0, o.value = ne ? se : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), ro(() => {
        l.value = !1, $(N);
      });
    }, B = () => {
      i.value = I(L(e.initialIndex));
    }, D = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (C(), m = window.setTimeout(() => {
        j(), D();
      }, L(N)));
    }, C = () => {
      m && clearTimeout(m);
    }, k = (N, q) => {
      if (N > q && N > 10)
        return "horizontal";
      if (q > N && q > 10)
        return "vertical";
    }, A = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: q,
          clientY: ne
        } = N.touches[0];
        g = q, y = ne, h = performance.now(), f = !0, C(), b(() => {
          l.value = !0;
        });
      }
    }, Z = (N) => {
      var {
        touchable: q,
        vertical: ne
      } = e;
      if (!(!f || !q)) {
        var {
          clientX: se,
          clientY: de
        } = N.touches[0], K = Math.abs(se - g), re = Math.abs(de - y), me = k(K, re), Ce = ne ? "vertical" : "horizontal";
        if (me === Ce) {
          N.preventDefault();
          var Le = w !== void 0 ? se - w : 0, xe = V !== void 0 ? de - V : 0;
          w = se, V = de, o.value += ne ? xe : Le, T();
        }
      }
    }, Q = () => {
      if (f) {
        var {
          vertical: N,
          onChange: q
        } = e, ne = N ? V < y : w < g, se = Math.abs(N ? y - V : g - w), de = performance.now() - h <= By && se >= Ey, K = de ? E(ne ? i.value + 1 : i.value - 1) : E();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = K * -r.value;
        var re = i.value;
        i.value = P(K), D(), re !== i.value && $(q, i.value);
      }
    }, Y = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (N) => {
      if (!(d.value <= 1)) {
        v = !0;
        var {
          loop: q,
          onChange: ne
        } = e, se = i.value;
        i.value = I(se + 1), (N == null ? void 0 : N.event) !== !1 && $(ne, i.value), b(() => {
          if (se === d.value - 1 && q) {
            S(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          se !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, ue = (N) => {
      if (!(d.value <= 1)) {
        v = !0;
        var {
          loop: q,
          onChange: ne
        } = e, se = i.value;
        i.value = I(se - 1), (N == null ? void 0 : N.event) !== !1 && $(ne, i.value), b(() => {
          if (se === 0 && q) {
            S(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          se !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, G = (N, q) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var ne = N > i.value ? j : ue, se = Math.abs(N - i.value);
        Array.from({
          length: se
        }).forEach((de, K) => {
          ne({
            event: K === se - 1 ? q == null ? void 0 : q.event : !1
          });
        });
      }
    }, H = {
      size: r,
      vertical: a
    };
    return u(H), ie(() => d.value, /* @__PURE__ */ My(function* () {
      v = !1, yield Dn(), !v && B(), Y();
    })), Pr(Y), _n(C), _a(C), Kn(() => window, "resize", Y), {
      n: Iy,
      classes: Ny,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: A,
      handleTouchmove: Z,
      handleTouchend: Q,
      next: j,
      prev: ue,
      to: G,
      resize: Y,
      toNumber: L
    };
  }
});
md.render = zy;
const Wn = md;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var JS = Wn;
function Ay() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = vn(fd);
  return e || $n("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ly
} = x("swipe-item");
function Ry(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: W({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var pd = _({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ay(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Ly,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
pd.render = Ry;
const Gn = pd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var QS = Gn;
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var Uy = ui({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": U()
}, qe(cd, ["loop", "indicator", "onChange"]), qe(St, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Ul,
  classes: Hy
} = x("image-preview"), Hl = 12, Fl = 200, Fy = 350, Yl = 200, Yy = ["src", "alt"];
function jy(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), o = te("var-popup");
  return p(), ye(
    o,
    {
      class: c(e.n("popup")),
      "var-image-preview-cover": "",
      transition: e.n("$-fade"),
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ve(() => [J(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), O(
            Oe,
            null,
            Ae(e.images, (l) => (p(), ye(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [z(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: W({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [z(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Yy
                  )],
                  38
                  /* CLASS, STYLE, HYDRATE_EVENTS */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class"]
            ))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [F(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : ee("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), F(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ye(
        t,
        {
          key: 0,
          class: c(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("extra"))
        },
        [F(e.$slots, "extra")],
        2
        /* CLASS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var hd = _({
  name: "VarImagePreview",
  components: {
    VarSwipe: Wn,
    VarSwipeItem: Gn,
    VarPopup: Cn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Uy,
  setup(e) {
    var n = M(!1), r = R(() => {
      var {
        images: D,
        current: C
      } = e, k = D.findIndex((A) => A === C);
      return k >= 0 ? k : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = (D, C) => {
      var {
        clientX: k,
        clientY: A
      } = D, {
        clientX: Z,
        clientY: Q
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Z - k, 2) + Math.pow(Q - A, 2)));
    }, m = (D, C) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: Date.now(),
      target: C
    }), g = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Yl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, h = (D) => d ? f(d, D) <= Hl && D.timestamp - d.timestamp <= Fl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= Hl && Date.now() - d.timestamp < Fy && (D === u.target || D.parentNode === u.target), V = (D) => {
      v = window.setTimeout(() => {
        w(D.target) && B(), u = null;
      }, Fl);
    }, S = (D) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = D, k = m(C[0], D.currentTarget);
      if (u = k, h(k)) {
        a.value > 1 ? y() : g();
        return;
      }
      d = k;
    }, T = (D) => {
      var {
        offsetWidth: C,
        offsetHeight: k
      } = D, {
        naturalWidth: A,
        naturalHeight: Z
      } = D.querySelector("." + Ul("image"));
      return {
        width: C,
        height: k,
        imageRadio: Z / A,
        rootRadio: k / C,
        zoom: L(e.zoom)
      };
    }, E = (D) => {
      var {
        zoom: C,
        imageRadio: k,
        rootRadio: A,
        width: Z,
        height: Q
      } = T(D);
      if (!k)
        return 0;
      var Y = k > A ? Q / k : Z;
      return Math.max(0, (C * Y - Z) / 2) / C;
    }, P = (D) => {
      var {
        zoom: C,
        imageRadio: k,
        rootRadio: A,
        width: Z,
        height: Q
      } = T(D);
      if (!k)
        return 0;
      var Y = k > A ? Q : Z * k;
      return Math.max(0, (C * Y - Q) / 2) / C;
    }, I = (D, C, k) => D + C >= k ? k : D + C <= -k ? -k : D + C, b = (D) => {
      if (d) {
        var C = D.currentTarget, {
          touches: k
        } = D, A = m(k[0], C);
        if (a.value > 1) {
          var Z = A.clientX - d.clientX, Q = A.clientY - d.clientY, Y = E(C), j = P(C);
          t.value = I(t.value, Z, Y), o.value = I(o.value, Q, j);
        }
        d = A;
      }
    }, B = () => {
      if (a.value > 1) {
        y(), setTimeout(() => $(e["onUpdate:show"], !1), Yl);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (D) => {
      n.value = D;
    }, {
      immediate: !0
    }), {
      n: Ul,
      classes: Hy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: b,
      handleTouchend: V,
      close: B
    };
  }
});
hd.render = jy;
const yr = hd;
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
var ir, ut = {};
function Wy(e) {
  return e === void 0 && (e = {}), Ue(e) ? st({}, ut, {
    images: [e]
  }) : $e(e) ? st({}, ut, {
    images: e
  }) : st({}, ut, e);
}
function Nn(e) {
  if (Ct()) {
    Nn.close();
    var n = Wy(e), r = Ne(n);
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = et(yr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), ir === r && (ir = null);
      },
      onRouteChange: () => {
        a(), ir === r && (ir = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Nn.close = () => {
  if (ir != null) {
    var e = ir;
    ir = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Nn.setDefaultOptions = (e) => {
  ut = e;
};
Nn.resetDefaultOptions = () => {
  ut = {};
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
Nn.install = function(e) {
  e.component(yr.name, yr);
};
Nn.Component = yr;
var _S = yr, Ut = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: U()
};
function jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Wl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        jl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        jl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Gy,
  classes: qy
} = x("sticky");
function Xy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: W({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [z(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: W({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var gd = _({
  name: "VarSticky",
  props: Ut,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Re(e.offsetTop)), m, g = () => {
      var {
        cssMode: S,
        disabled: T
      } = e;
      if (!T) {
        var E = 0;
        if (m !== window) {
          var {
            top: P
          } = m.getBoundingClientRect();
          E = P;
        }
        var I = r.value, b = n.value, {
          top: B,
          left: D
        } = b.getBoundingClientRect(), C = B - E;
        return C <= f.value ? (S || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = E + f.value + "px", o.value = D + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var S = g();
        S && $(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var S = Wl(function* () {
        a.value = !1, yield Qv(), g();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = Wl(function* () {
        yield Dn(), m = Sr(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, h), dn(w), _a(V), _n(V), Kn(() => window, "scroll", y), Kn(() => window, "resize", h), {
      n: Gy,
      classes: qy,
      resize: h,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
gd.render = Xy;
const qn = gd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var xS = qn, yd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Ky() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = fn(yd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Zy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn(yd);
  return r || $n("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Jy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Qy,
  classes: _y
} = x("index-anchor");
function xy(e, n) {
  return p(), ye(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [z(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [F(e.$slots, "default", {}, () => [we(
          ae(e.name),
          1
          /* TEXT */
        )])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
var bd = _({
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Zy(), t = M(0), o = M(!1), l = R(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (h) => {
      o.value = h;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(y), {
      n: Qy,
      classes: _y,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: ze
    };
  }
});
bd.render = xy;
const xr = bd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ek = xr, eb = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: U(),
  onChange: U()
};
function Gl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Gl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Gl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nb,
  classes: rb
} = x("index-bar"), ab = ["onClick"];
function tb(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: W({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        Oe,
        null,
        Ae(e.anchorNameList, (r) => (p(), O(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: W({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ae(r),
          15,
          ab
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      6
      /* CLASS, STYLE */
    )],
    2
    /* CLASS */
  );
}
var wd = _({
  name: "VarIndexBar",
  props: eb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ky(), t = M(""), o = M(null), l = M([]), i = M(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Re(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var y = (I, b) => {
      var B = bi(I) ? I.name.value : I;
      B === i.value || B === void 0 || (i.value = B, (b == null ? void 0 : b.event) !== !1 && $(e.onChange, B));
    }, h = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: I
      } = f.getBoundingClientRect(), {
        scrollTop: b
      } = f, {
        top: B
      } = o.value.getBoundingClientRect();
      return b - I + B;
    }, w = () => {
      var I = dt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, B = h();
      r.forEach((D, C) => {
        var k = D.ownTop.value, A = I - k + d.value - B, Z = C === r.length - 1 ? b : r[C + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), A >= 0 && A < Z && t.value === "" && (D.setDisabled(!1), y(D));
      });
    }, V = /* @__PURE__ */ function() {
      var I = Nt(function* (b) {
        var {
          anchorName: B,
          manualCall: D = !1,
          options: C
        } = b;
        if (D && $(e.onClick, B), !(B === i.value && !m)) {
          var k = r.find((Y) => {
            var {
              name: j
            } = Y;
            return B === j.value;
          });
          if (k) {
            var A = h(), Z = k.ownTop.value - d.value + A, Q = Ci(f);
            t.value = B, y(B, C), yield vt(f, {
              left: Q,
              top: Z,
              animation: ms,
              duration: L(e.duration)
            }), ro(() => {
              t.value = "";
            });
          }
        }
      });
      return function(B) {
        return I.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var I = Nt(function* () {
        yield Dn(), f = Sr(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, P = (I, b) => {
      wn(() => V({
        anchorName: I,
        options: b
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Nt(function* () {
      yield Dn(), r.forEach((I) => {
        var {
          name: b,
          setOwnTop: B
        } = I;
        b.value && l.value.push(b.value), B();
      });
    })), dn(/* @__PURE__ */ Nt(function* () {
      yield S(), T();
    })), _t(E), _n(() => {
      m = !0, E();
    }), Pr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: nb,
      classes: rb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: P,
      anchorClick: V
    };
  }
});
wd.render = tb;
const ea = wd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var nk = ea;
function ob(e) {
  return ["small", "normal"].includes(e);
}
function ib(e) {
  return ["outlined", "standard"].includes(e);
}
var Ui = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: {
    type: Boolean
  },
  size: {
    type: String,
    default: "normal",
    validator: ob
  },
  variant: {
    type: String,
    default: "standard",
    validator: ib
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  errorMessage: {
    type: String
  },
  formDisabled: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  cursor: {
    type: String
  },
  composing: {
    type: Boolean,
    default: !1
  },
  alwaysCustomPlaceholder: {
    type: Boolean,
    default: !0
  },
  onClick: U(),
  onClear: U()
}, {
  n: So,
  classes: lb
} = x("field-decorator"), sb = ["for"];
function ub(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      style: W({
        "--field-decorator-legend-max-width": e.legendMaxWidth,
        "--filed-decorator-controller-width": e.controllerWidth
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        ref: "controllerEl",
        style: W({
          color: e.color,
          cursor: e.cursor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])),
          ref: "prependIconEl"
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [F(e.$slots, "default"), e.hint || e.alwaysCustomPlaceholder ? (p(), O(
          "label",
          {
            key: 0,
            class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
            style: W({
              transform: e.placeholderTransform,
              color: e.color
            }),
            for: e.id
          },
          [z(
            "span",
            null,
            ae(e.placeholder),
            1
            /* TEXT */
          ), z(
            "span",
            {
              class: c(e.n("placeholder-text")),
              ref: "placeholderTextEl"
            },
            ae(e.placeholder),
            3
            /* TEXT, CLASS */
          )],
          14,
          sb
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), ye(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-field-decorator-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : ee("v-if", !0), F(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      Oe,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          ref: "fieldsetEl"
        },
        [z(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.hint && (!e.isEmpty(e.value) || e.isFocus), e.n("line-legend--hint")])),
            style: W({
              width: e.legendWidth,
              maxWidth: e.legendMaxWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: W({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
            style: W({
              background: e.errorMessage ? void 0 : e.focusColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Cd = _({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Ui,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(null), o = M(""), l = M(""), i = M(""), s = M(""), u = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), d = () => {
      var {
        hint: y,
        value: h,
        isFocus: w,
        composing: V
      } = e;
      if (!y && (!Un(h) || V))
        return So("--placeholder-hidden");
      if (y && (!Un(h) || w))
        return So("--placeholder-hint");
    }, v = () => {
      l.value = "", o.value = "", s.value = "", i.value = "";
    }, f = () => {
      var {
        size: y,
        placeholder: h,
        hint: w,
        value: V,
        isFocus: S,
        variant: T
      } = e;
      Be().then(() => {
        var E, P;
        if (!(!a.value || !r.value || !t.value) && !(T === "outlined" && !n.value)) {
          var I = w && (!Un(V) || S);
          if (!I || !h) {
            v();
            return;
          }
          var b = "var(--field-decorator-outlined-" + y + "-placeholder-space)", B = (E = window.getComputedStyle(a.value)) == null ? void 0 : E.width, D = (P = window.getComputedStyle(t.value)) == null ? void 0 : P.width, C = T === "outlined" ? "-50%" : "0";
          if (s.value = "translate(-" + D + ", " + C + ") scale(0.75)", i.value = window.getComputedStyle(r.value).width, T === "outlined") {
            var {
              width: k,
              paddingLeft: A,
              paddingRight: Z
            } = window.getComputedStyle(n.value);
            l.value = "calc(" + B + " * 0.75 + 2 * " + b + ")", o.value = "calc(" + k + " - " + A + " - " + Z + ")";
          }
        }
      });
    }, m = (y) => {
      $(e.onClear, y);
    }, g = (y) => {
      $(e.onClick, y);
    };
    return Av(f), Kn(() => window, "resize", f), {
      fieldsetEl: n,
      controllerEl: r,
      placeholderTextEl: a,
      prependIconEl: t,
      placeholderTransform: s,
      color: u,
      legendWidth: l,
      legendMaxWidth: o,
      controllerWidth: i,
      computePlaceholderState: d,
      n: So,
      classes: lb,
      isEmpty: Un,
      handleClear: m,
      handleClick: g
    };
  }
});
Cd.render = ub;
const Sd = Cd;
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
function db(e) {
  return ["text", "password", "number"].includes(e);
}
var vb = di({
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: db
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: {
    type: [String, Number]
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: U(),
  onBlur: U(),
  onInput: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, qe(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: fb,
  classes: cb
} = x("input"), mb = ["placeholder"], pb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows"], hb = ["id", "disabled", "type", "value", "placeholder", "maxlength"];
function gb(e, n) {
  var r = te("var-field-decorator"), a = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [J(
      r,
      bt(eo({
        value: e.modelValue,
        id: e.id,
        size: e.size,
        variant: e.variant,
        placeholder: e.placeholder,
        line: e.line,
        hint: e.hint,
        textColor: e.textColor,
        focusColor: e.focusColor,
        blurColor: e.blurColor,
        isFocus: e.isFocus,
        errorMessage: e.errorMessage,
        formDisabled: e.formDisabled,
        disabled: e.disabled,
        clearable: e.clearable,
        cursor: e.cursor,
        composing: e.isComposing,
        alwaysCustomPlaceholder: !1,
        onClick: e.handleClick,
        onClear: e.handleClear
      })),
      {
        "prepend-icon": ve(() => [F(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [F(e.$slots, "append-icon")]),
        default: ve(() => [e.type === "password" ? (p(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: W({
              "--input-placeholder-color": e.placeholderColor
            })
          },
          null,
          14,
          mb
        )) : ee("v-if", !0), e.textarea ? (p(), O(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            rows: e.rows,
            style: W({
              color: e.errorMessage ? void 0 : e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none",
              "--input-placeholder-color": e.placeholderColor
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[5] || (n[5] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[6] || (n[6] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          `
      `,
          46,
          pb
        )) : (p(), O(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            style: W({
              color: e.errorMessage ? void 0 : e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              "--input-placeholder-color": e.placeholderColor
            }),
            onFocus: n[7] || (n[7] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[8] || (n[8] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[9] || (n[9] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[10] || (n[10] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[11] || (n[11] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[12] || (n[12] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[13] || (n[13] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          null,
          46,
          hb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), J(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = gn(() => {
        }, ["stop"]))
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var kd = _({
  name: "VarInput",
  components: {
    VarFormDetails: Ke,
    VarFieldDecorator: Sd
  },
  props: vb,
  setup(e) {
    var n = M("var-input-" + Qa().uid), r = M(null), a = M(!1), t = M(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: G,
        modelValue: H
      } = e;
      return G ? Un(H) ? "0 / " + G : String(H).length + "/" + G : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: G,
        blurColor: H,
        focusColor: N
      } = e;
      if (!G)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? N || "var(--field-decorator-focus-color)" : H || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Pn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Tn(), y = (G) => {
      Be(() => {
        var {
          validateTrigger: H,
          rules: N,
          modelValue: q
        } = e;
        f(H, G, N, q);
      });
    }, h = (G) => {
      a.value = !0, $(e.onFocus, G), y("onFocus");
    }, w = (G) => {
      a.value = !1, $(e.onBlur, G), y("onBlur");
    }, V = (G) => {
      var H = G.target, {
        value: N
      } = H;
      return e.type === "number" && (N = B(N)), C(D(N));
    }, S = () => {
      t.value = !0;
    }, T = (G) => {
      t.value && (t.value = !1, G.target.dispatchEvent(new Event("input")));
    }, E = (G) => {
      if (!t.value) {
        var H = V(G);
        $(e["onUpdate:modelValue"], H), $(e.onInput, H, G), y("onInput");
      }
    }, P = (G) => {
      var H = V(G);
      $(e.onChange, H, G), y("onChange");
    }, I = () => {
      var {
        disabled: G,
        readonly: H,
        clearable: N,
        onClear: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || H || !N || ($(e["onUpdate:modelValue"], ""), $(q, ""), y("onClear"));
    }, b = (G) => {
      var {
        disabled: H,
        onClick: N
      } = e;
      d != null && d.disabled.value || H || ($(N, G), y("onClick"));
    }, B = (G) => {
      var H = G.indexOf("-"), N = G.indexOf(".");
      return H > -1 && (G = H === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), N > -1 && (G = G.slice(0, N + 1) + G.slice(N).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }, D = (G) => e.modelModifiers.trim ? G.trim() : G, C = (G) => e.maxlength ? G.slice(0, L(e.maxlength)) : G, k = (G) => {
      var {
        disabled: H,
        readonly: N
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || G.stopPropagation();
    };
    function A(G) {
      var {
        disabled: H
      } = e;
      d != null && d.disabled.value || H || G.target === r.value || (Y(), G.preventDefault());
    }
    var Z = () => {
      $(e["onUpdate:modelValue"], ""), g();
    }, Q = () => m(e.rules, e.modelValue), Y = () => {
      var G;
      (G = r.value) == null || G.focus();
    }, j = () => {
      r.value.blur();
    }, ue = {
      reset: Z,
      validate: Q,
      resetValidation: g
    };
    return $(u, ue), dn(() => {
      e.autofocus && Y();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: v,
      placeholderColor: s,
      type: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: fb,
      classes: cb,
      isEmpty: Un,
      handleFocus: h,
      handleBlur: w,
      handleInput: E,
      handleChange: P,
      handleClear: I,
      handleClick: b,
      handleTouchstart: k,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: A,
      validate: Q,
      resetValidation: g,
      reset: Z,
      focus: Y,
      blur: j
    };
  }
});
kd.render = gb;
const br = kd;
br.install = function(e) {
  e.component(br.name, br);
};
var rk = br;
function yb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bb(e) {
  return ["always", "hover", "none"].includes(e);
}
var wb = {
  type: {
    type: String,
    default: "default",
    validator: yb
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: !1
  },
  underline: {
    type: String,
    default: "always",
    validator: bb
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textSize: {
    type: [String, Number]
  },
  textColor: {
    type: String
  },
  onClick: U()
}, {
  n: Cb,
  classes: Sb
} = x("link");
function kb(e, n) {
  return p(), ye(
    xa(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var $d = _({
  name: "VarLink",
  props: wb,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: l
      } = e;
      o || $(l, t);
    };
    return {
      n: Cb,
      classes: Sb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
$d.render = kb;
const na = $d;
na.install = function(e) {
  e.component(na.name, na);
};
var ak = na, $b = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: U(),
  "onUpdate:loading": U(),
  "onUpdate:error": U()
};
function ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ql(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ql(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Pb,
  classes: Ob
} = x("list");
function Vb(e, n) {
  var r = te("var-loading"), a = Ie("ripple");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
      key: 0
    }, () => [z(
      "div",
      {
        class: c(e.n("loading"))
      },
      [z(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), J(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [Se((p(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [we(
        ae(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Td = _({
  name: "VarList",
  directives: {
    Ripple: He
  },
  components: {
    VarLoading: Bn
  },
  props: $b,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var s = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: u
      } = r.value.getBoundingClientRect();
      return Math.floor(u) - Re(e.offset) <= s;
    }, l = () => {
      a.removeEventListener("scroll", i);
    }, i = /* @__PURE__ */ function() {
      var s = Tb(function* () {
        yield Be();
        var {
          loading: u,
          finished: d,
          error: v
        } = e;
        !u && !d && !v && o() && t();
      });
      return function() {
        return s.apply(this, arguments);
      };
    }();
    return dn(() => {
      a = Sr(n.value), a.addEventListener("scroll", i), e.immediateCheck && i();
    }), _n(l), _a(l), {
      pack: Ge,
      listEl: n,
      detectorEl: r,
      dt: no,
      isNumber: an,
      load: t,
      check: i,
      n: Pb,
      classes: Ob
    };
  }
});
Td.render = Vb;
const ra = Td;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var tk = ra, Mb = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  errorColor: {
    type: String
  },
  height: {
    type: [Number, String]
  },
  top: {
    type: [Number, String]
  }
}, {
  classes: Bb,
  n: Xl
} = x("loading-bar");
const Eb = _({
  name: "VarLoadingBar",
  props: Mb,
  setup(e) {
    return () => J("div", {
      class: Bb(Xl(), [e.error, Xl("--error")]),
      style: {
        zIndex: hn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ge(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ge(e.top)
      }
    }, null);
  }
});
var Pd, Od, go, Vd, Kl, Md = {}, Ib = {
  value: 0,
  opacity: 0,
  error: !1
}, Xe = Ne(Ib), Nb = (e) => {
  Object.assign(Xe, e);
}, Db = (e) => {
  Object.assign(Xe, e), Md = e;
}, zb = () => {
  Object.keys(Md).forEach((e) => {
    Xe[e] !== void 0 && (Xe[e] = void 0);
  });
}, Bd = () => {
  Kl || (Kl = !0, et(Eb, Xe));
}, Hi = () => {
  Pd = window.setTimeout(() => {
    if (!(Xe.value >= 95)) {
      var e = Math.random();
      Xe.value < 70 && (e = Math.round(5 * Math.random())), Xe.value += e, Hi();
    }
  }, 200);
}, Fi = () => {
  window.clearTimeout(Od), window.clearTimeout(Pd), window.clearTimeout(go), window.clearTimeout(Vd);
}, Ab = () => {
  Fi(), Xe.error = !1, Xe.value = 0, Bd(), go = window.setTimeout(() => {
    Xe.opacity = 1;
  }, 200), Hi();
}, Ed = () => {
  Fi(), Xe.value = 100, go = window.setTimeout(() => {
    Xe.opacity = 0, Od = window.setTimeout(() => {
      Xe.error = !1;
    }, 250);
  }, 300);
}, Lb = () => {
  Fi(), Xe.error = !0, Xe.value === 100 && (Xe.value = 0), Bd(), go = window.setTimeout(() => {
    Xe.opacity = 1;
  }, 200), Hi(), Vd = window.setTimeout(Ed, 300);
}, Id = {
  start: Ab,
  finish: Ed,
  error: Lb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Nb,
  setDefaultOptions: Db,
  resetDefaultOptions: zb
}, ok = Id;
const vi = Id;
function Rb(e) {
  return ["click", "hover"].includes(e);
}
function Ub(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Hb = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: Rb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Ub
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Fb,
  classes: Yb
} = x("menu");
function jb(e, n) {
  return p(), O(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [F(e.$slots, "default"), (p(), ye(
      Da,
      {
        to: e.teleport
      },
      [J(
        ze,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(z(
            "div",
            {
              ref: "popover",
              style: W({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = gn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [F(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Cr, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Nd = _({
  name: "VarMenu",
  props: Hb,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: g
    } = ld(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: cn,
      toSizeUnit: ge,
      n: Fb,
      classes: Yb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: g,
      open: f,
      close: m
    };
  }
});
Nd.render = jb;
const Xn = Nd;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ik = Xn, Dd = Symbol("SELECT_BIND_OPTION_KEY");
function Wb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = fn(Dd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Gb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = vn(Dd);
  return r || $n("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var qb = {
  label: {},
  value: {}
}, {
  n: Xb,
  classes: Kb
} = x("option");
function Zb(e, n) {
  var r = te("var-checkbox"), a = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: W({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: W({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), ye(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = gn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [F(e.$slots, "default", {}, () => [we(
        ae(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[a]]);
}
var zd = _({
  name: "VarOption",
  directives: {
    Ripple: He
  },
  components: {
    VarCheckbox: cr
  },
  props: qb,
  setup(e) {
    var n = M(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Gb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(g);
    }, f = () => u(g), m = (y) => {
      n.value = y;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: Xb,
      classes: Kb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
zd.render = Zb;
const aa = zd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var lk = aa, Jb = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onClick: U(),
  "onUpdate:show": U()
};
function Qb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Zl
} = x("overlay");
const ta = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Jb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = kt(() => e.show, 1), {
      disabled: o
    } = ao(), l = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll);
    var i = () => J("div", Ee({
      class: Zl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(ze, {
        name: Zl("--fade")
      }, {
        default: () => [u && i()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return J(Da, {
          to: u,
          disabled: o.value
        }, Qb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var sk = ta, _b = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  n: xb,
  classes: e0
} = x("pagination"), n0 = ["item-mode", "onClick"];
function r0(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), l = Ie("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [Se((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [J(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), O(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = qi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), z("span", null, [we(
        " / " + ae(e.pageCount) + " ",
        1
        /* TEXT */
      ), z(
        "div",
        {
          class: c(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (p(!0), O(
      Oe,
      {
        key: 1
      },
      Ae(e.pageList, (i, s) => Se((p(), O(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [we(
          ae(i),
          1
          /* TEXT */
        )],
        10,
        n0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [J(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), O(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), O(
            Oe,
            null,
            Ae(e.sizeOption, (i, s) => Se((p(), ye(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [we(
                  ae(i) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[l]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = gn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [z(
              "span",
              null,
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), J(
              r,
              {
                class: c(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
            /* CLASS */
          )]),
          _: 1
          /* STABLE */
        },
        8,
        ["disabled", "show"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [we(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = qi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ad = _({
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: Pe,
    VarCell: fr,
    VarInput: br
  },
  directives: {
    Ripple: He
  },
  props: _b,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(L(e.current) || 1), i = M(L(e.size) || 10), s = M([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var T = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, L(e.total));
      return [T, E];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (T, E) => an(T) ? !1 : E === 1 ? t.value : o.value, g = (T, E) => an(T) ? "basic" : E === 1 ? "head" : "tail", y = (T, E) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (T === "prev") {
          l.value = V(l.value - 1);
          return;
        }
        if (T === "next") {
          l.value = V(l.value + 1);
          return;
        }
        an(T) && (l.value = T);
      }
    }, h = () => {
      e.disabled || (n.value = !0);
    }, w = (T) => {
      i.value = T, n.value = !1;
      var E = V(l.value);
      a.value = String(E), l.value = E;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, S = (T, E, P) => {
      P.target.blur();
      var I = V(L(E));
      a.value = String(I), l.value = I, T === "quick" && (r.value = "");
    };
    return ie([() => e.current, () => e.size], (T) => {
      var [E, P] = T;
      l.value = L(E) || 1, i.value = L(P || 10);
    }), ie([l, i, d], (T, E) => {
      var [P, I, b] = T, [B, D] = E, C = [], {
        maxPagerCount: k,
        total: A,
        onChange: Z
      } = e, Q = Math.ceil(L(A) / L(D)), Y = b - (k - u.value) - 1;
      if (a.value = "" + P, b - 2 > k) {
        if (B === void 0 || b !== Q)
          for (var j = 2; j < k + 2; j++)
            C.push(j);
        if (P <= k && P < Y) {
          C = [];
          for (var ue = 1; ue < k + 1; ue++)
            C.push(ue + 1);
          t.value = !0, o.value = !1;
        }
        if (P > k && P < Y) {
          C = [];
          for (var G = 1; G < k + 1; G++)
            C.push(P + G - u.value);
          t.value = P === 2 && k === 1, o.value = !1;
        }
        if (P >= Y) {
          C = [];
          for (var H = 1; H < k + 1; H++)
            C.push(b - (k - H) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", b];
      } else
        for (var N = 1; N <= b; N++)
          C.push(N);
      s.value = C, B != null && b > 0 && $(Z, P, I), $(e["onUpdate:current"], P), $(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: xb,
      classes: e0,
      pack: Ge,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: m,
      clickItem: y,
      showMenu: h,
      clickSize: w,
      setPage: S,
      toNumber: L,
      formatElevation: cn
    };
  }
});
Ad.render = r0;
const oa = Ad;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var uk = oa, a0 = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  radius: {
    type: [Number, String]
  },
  width: {
    type: [Number, String]
  },
  height: {
    type: [Number, String]
  },
  round: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, {
  n: t0,
  classes: o0
} = x("paper");
function i0(e, n) {
  var r = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Ld = _({
  name: "VarPaper",
  directives: {
    Ripple: He
  },
  props: a0,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: t0,
      classes: o0,
      formatElevation: cn,
      toSizeUnit: ge,
      handleClick: n
    };
  }
});
Ld.render = i0;
const ia = Ld;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var dk = ia;
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
var l0 = fi({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: !1
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, qe(St, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: s0,
  classes: u0
} = x("picker"), Jl = 300, d0 = 15, Ql = 0, v0 = ["onTouchstart", "onTouchmove", "onTouchend"], f0 = ["onTransitionend"];
function c0(e, n) {
  var r = te("var-button");
  return p(), ye(
    xa(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ve(() => [z(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [J(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [we(
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), F(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [J(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [we(
                ae(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
          /* CLASS */
        )) : ee("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: W({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Oe,
            null,
            Ae(e.scrollColumns, (a) => (p(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: gn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: W({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), O(
                  Oe,
                  null,
                  Ae(a.column.texts, (t) => (p(), O(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: W({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [z(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ae(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                f0
              )],
              42,
              v0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), z(
            "div",
            {
              class: c(e.n("picked")),
              style: W({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), z(
            "div",
            {
              class: c(e.n("mask")),
              style: W({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var Rd = _({
  name: "VarPicker",
  components: {
    VarButton: Qe,
    VarPopup: Cn
  },
  inheritAttrs: !1,
  props: l0,
  setup(e) {
    var n = M([]), r = R(() => Re(e.optionHeight)), a = R(() => Re(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (C, k) => {
      k.scrollEl = C;
    }, s = (C) => {
      $(e["onUpdate:show"], C);
    }, u = (C) => {
      var k = r.value + t.value, A = t.value - C.column.texts.length * r.value;
      C.translate >= k && (C.translate = k), C.translate <= A && (C.translate = A);
    }, d = (C, k) => {
      var {
        length: A
      } = C.column.texts;
      return k = k >= A ? A - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (C) => {
      var k = Math.round((t.value - C.translate) / r.value);
      return d(C, k);
    }, f = () => {
      var C = n.value.map((A) => A.column.texts[A.index]), k = n.value.map((A) => A.index);
      return {
        texts: C,
        indexes: k
      };
    }, m = function(C, k, A, Z) {
      Z === void 0 && (Z = !1);
      var Q = t.value - d(C, k) * r.value;
      Q === C.translate && (C.scrolling = !1, !Z && I(C)), C.translate = Q, C.duration = A;
    }, g = (C, k, A) => {
      C.translate += Math.abs(k / A) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (C, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = bo(k.scrollEl);
    }, h = (C, k) => {
      if (k.touching) {
        var {
          clientY: A
        } = C.touches[0], Z = k.prevY !== void 0 ? A - k.prevY : 0;
        k.prevY = A, k.translate += Z, u(k);
        var Q = performance.now();
        Q - k.momentumTime > Jl && (k.momentumTime = Q, k.momentumPrevY = k.translate);
      }
    }, w = (C, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var A = k.translate - k.momentumPrevY, Z = performance.now() - k.momentumTime, Q = Math.abs(A) >= d0 && Z <= Jl;
      Q && g(k, A, Z), k.index = v(k), m(k, k.index, Q ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, I(C);
    }, S = (C) => C.map((k, A) => {
      var Z, Q = $e(k) ? {
        texts: k
      } : k, Y = {
        id: Ql++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Z = Q.initialIndex) != null ? Z : 0,
        columnIndex: A,
        duration: 0,
        momentumTime: 0,
        column: Q,
        scrollEl: null,
        scrolling: !1
      };
      return m(Y, Y.index, 0, !0), Y;
    }), T = (C) => {
      var k = [];
      return E(k, C, 0, !0), k;
    }, E = function(C, k, A, Z) {
      if (Z === void 0 && (Z = !1), $e(k) && k.length) {
        var Q, Y = Z && (Q = e.cascadeInitialIndexes[C.length]) != null ? Q : 0, j = {
          id: Ql++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: Y,
          columnIndex: A,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((ue) => ue[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        C.push(j), m(j, j.index, 0, !0), E(C, j.columns[j.index].children, A + 1, Z);
      }
    }, P = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, I = (C) => {
      var {
        cascade: k,
        onChange: A
      } = e;
      k && P(C);
      var Z = n.value.some((ue) => ue.scrolling);
      if (!Z) {
        var {
          texts: Q,
          indexes: Y
        } = f(), j = Y.every((ue, G) => ue === l[G]);
        j || (l = [...Y], $(A, Q, Y));
      }
    }, b = () => {
      if (e.cascade) {
        var C = n.value.find((k) => k.scrolling);
        C && (C.translate = bo(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, P(C));
      } else
        n.value.forEach((k) => {
          k.translate = bo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, B = () => {
      b();
      var {
        texts: C,
        indexes: k
      } = f();
      l = [...k], $(e.onConfirm, C, k);
    }, D = () => {
      b();
      var {
        texts: C,
        indexes: k
      } = f();
      l = [...k], $(e.onCancel, C, k);
    };
    return ie(() => e.columns, (C) => {
      n.value = e.cascade ? T(Xi(C)) : S(Xi(C));
      var {
        indexes: k
      } = f();
      l = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: s0,
      classes: u0,
      pack: Ge,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: ze,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: h,
      handleTouchend: w,
      handleTransitionend: V,
      confirm: B,
      cancel: D,
      dt: no
    };
  }
});
Rd.render = c0;
const wr = Rd;
var on;
function Na(e) {
  return new Promise((n) => {
    Na.close();
    var r = $e(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", on = a;
    var {
      unmountInstance: t
    } = et(wr, a, {
      onConfirm: (o, l) => {
        $(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, on === a && (on = null);
      },
      onCancel: (o, l) => {
        $(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, on === a && (on = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), on === a && (on = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), on === a && (on = null);
      },
      onRouteChange: () => {
        t(), on === a && (on = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
wr.install = function(e) {
  e.component(wr.name, wr);
};
Na.Component = wr;
Na.install = function(e) {
  e.component(wr.name, wr);
};
Na.close = function() {
  if (on != null) {
    var e = on;
    on = null, Be().then(() => {
      e.show = !1;
    });
  }
};
var vk = wr;
function m0(e) {
  return ["linear", "circle"].includes(e);
}
var p0 = {
  mode: {
    type: String,
    default: "linear",
    validator: m0
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: h0,
  classes: g0
} = x("progress"), y0 = ["viewBox"], b0 = ["cx", "cy", "r", "stroke-width"], w0 = ["cx", "cy", "r", "stroke-width"];
function C0(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: W({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: W({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), z(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: W({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      ), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [we(
          ae(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: W({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: W({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), O(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: W({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          b0
        )) : ee("v-if", !0), z(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: W({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          w0
        )],
        14,
        y0
      )), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [we(
          ae(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = _({
  name: "VarProgress",
  props: p0,
  setup(e) {
    var n = R(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = R(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + Re(a) + " " + Re(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (Re(a) - Re(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: h0,
      classes: g0,
      toSizeUnit: ge,
      multiplySizeUnit: nn,
      linearProps: n,
      circleProps: r
    };
  }
});
Ud.render = C0;
const la = Ud;
la.install = function(e) {
  e.component(la.name, la);
};
var fk = la, S0 = {
  modelValue: {
    type: Boolean
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: !1
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  // 成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  // control 的背景颜色
  bgColor: {
    type: String
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String
  },
  // control 的颜色
  color: {
    type: String
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String
  },
  target: {
    type: [String, Object]
  },
  onRefresh: U(),
  "onUpdate:modelValue": U()
};
function _l(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        _l(o, a, t, l, i, "next", s);
      }
      function i(s) {
        _l(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: es,
  classes: k0
} = x("pull-refresh"), ns = 150;
function $0(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchend: n[1] || (n[1] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [z(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: W(e.controlStyle)
      },
      [J(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), F(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Hd = _({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: S0,
  setup(e) {
    var n = M(0), r = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = xl(function* (B) {
        if (l.value !== B)
          return l.value = B, new Promise((D) => {
            window.setTimeout(D, ns);
          });
      });
      return function(D) {
        return b.apply(this, arguments);
      };
    }(), g = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + (Ue(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), h = R(() => Math.abs(2 * n.value)), w = R(() => i.value === "success"), V = (b) => {
      var B = "classList" in u ? u : document.body;
      B.classList[b](es() + "--lock");
    }, S = (b) => {
      if (n.value === 0) {
        var {
          width: B
        } = a.value.getBoundingClientRect();
        n.value = -(B + B * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Sr(b.target);
    }, T = (b) => {
      if (g.value && !(d !== u && dt(d) > 0)) {
        var B = dt(u);
        if (!(B > 0)) {
          var D = B === 0, C = b.touches[0];
          f = C.clientY - v, D && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), D && o.value > n.value && V("add");
          var k = (b.touches[0].clientY - t.value) / 2 + n.value;
          o.value = k >= h.value ? h.value : k, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var b = xl(function* () {
        g.value && (s.value = !0, o.value >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, $(e["onUpdate:modelValue"], !0), Be(() => {
          $(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? hs(e.target, "PullRefresh") : Sr(r.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, I();
      }, L(e.successDuration)));
    }), dn(P), Kn(r, "touchmove", T), {
      n: es,
      classes: k0,
      ICON_TRANSITION: ns,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: S,
      touchMove: T,
      touchEnd: E,
      iconName: l,
      controlStyle: y,
      isSuccess: w
    };
  }
});
Hd.render = $0;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ck = sa, T0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, Fd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function P0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = fn(Fd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function O0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = vn(Fd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: V0,
  classes: M0
} = x("radio");
function B0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]), J(
          a,
          {
            hovering: !e.disabled && !e.formDisabled && e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [l, e.handleHovering, "desktop"]]), z(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Yd = _({
  name: "VarRadio",
  directives: {
    Ripple: He,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  inheritAttrs: !1,
  props: T0,
  setup(e) {
    var n = M(!1), r = R(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = O0(), {
      hovering: l,
      handleHovering: i
    } = kr(), {
      form: s,
      bindForm: u
    } = Pn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Tn(), g = (P) => {
      Be(() => {
        var {
          validateTrigger: I,
          rules: b,
          modelValue: B
        } = e;
        v(I, P, b, B);
      });
    }, y = (P) => {
      var {
        checkedValue: I,
        onChange: b
      } = e;
      t && n.value === I || (n.value = P, $(e["onUpdate:modelValue"], n.value), $(b, n.value), t == null || t.onToggle(I), g("onChange"));
    }, h = (P) => {
      var {
        disabled: I,
        readonly: b,
        uncheckedValue: B,
        checkedValue: D,
        onClick: C
      } = e;
      s != null && s.disabled.value || I || ($(C, P), !(s != null && s.readonly.value || b) && (a.value = !0, y(r.value ? B : D)));
    }, w = (P) => {
      var {
        checkedValue: I,
        uncheckedValue: b
      } = e;
      n.value = P === I ? I : b;
    }, V = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: I,
        checkedValue: b
      } = e, B = ![I, b].includes(P);
      B && (P = r.value ? I : b), y(P);
    };
    ie(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var E = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: V
    };
    return $(o, E), $(u, E), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: V0,
      classes: M0,
      handleClick: h,
      toggle: T,
      reset: V,
      validate: S,
      resetValidation: m
    };
  }
});
Yd.render = B0;
const ua = Yd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var mk = ua;
function E0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var I0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: E0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: N0,
  classes: D0
} = x("radio-group");
function z0(e, n) {
  var r = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var jd = _({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ke
  },
  props: I0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = P0(), {
      bindForm: t
    } = Pn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Tn(), u = R(() => o.value), d = (h) => {
      Be(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: S
        } = e;
        l(w, h, V, S);
      });
    }, v = () => r.forEach((h) => {
      var {
        sync: w
      } = h;
      return w(e.modelValue);
    }), f = (h) => {
      $(e["onUpdate:modelValue"], h), $(e.onChange, h), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, y), a(y), {
      errorMessage: o,
      n: N0,
      classes: D0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
jd.render = z0;
const da = jd;
da.install = function(e) {
  e.component(da.name, da);
};
var pk = da, A0 = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: rt
} = x("rate"), L0 = ["onClick"];
function R0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), O(
        Oe,
        null,
        Ae(e.toNumber(e.count), (i) => Se((p(), O(
          "div",
          {
            key: i,
            style: W(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [J(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: W({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), J(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          L0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Wd = _({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  directives: {
    Ripple: He,
    Hover: zn
  },
  props: A0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i
    } = kr(), s = M(-1), u = (S) => {
      var {
        count: T,
        gap: E
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== L(T) ? ge(E) : 0
      };
    }, d = (S) => {
      var {
        name: T,
        color: E
      } = v(S);
      return {
        [rt("content")]: !0,
        [rt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [rt("--error")]: a.value,
        [rt("--primary")]: T !== e.emptyIcon && !E
      };
    }, v = (S) => {
      var {
        modelValue: T,
        disabled: E,
        disabledColor: P,
        color: I,
        half: b,
        emptyColor: B,
        icon: D,
        halfIcon: C,
        emptyIcon: k
      } = e, A = I;
      return (E || n != null && n.disabled.value) && (A = P), S <= L(T) ? {
        color: A,
        name: D
      } : b && S <= L(T) + 0.5 ? {
        color: A,
        name: C
      } : {
        color: E || n != null && n.disabled.value ? P : B,
        name: k
      };
    }, f = (S, T) => {
      if (e.half) {
        var {
          offsetWidth: E
        } = T.target;
        T.offsetX <= Math.floor(E / 2) && (S -= 0.5);
      }
      $(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, L(e.modelValue)), g = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (S, T) => {
      var {
        readonly: E,
        disabled: P,
        onChange: I
      } = e;
      E || P || n != null && n.disabled.value || n != null && n.readonly.value || (f(S, T), $(I, S), g());
    }, h = (S) => (T) => {
      s.value = S, i.value = T;
    }, w = () => {
      $(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return $(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: h,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: L,
      n: rt
    };
  }
});
Wd.render = R0;
const va = Wd;
va.install = function(e) {
  e.component(va.name, va);
};
var hk = va;
function U0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var H0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: U0
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  animation: {
    type: Boolean,
    default: !0
  }
}, F0 = (e) => (za(""), e = e(), Aa(), e), Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, j0 = /* @__PURE__ */ F0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), W0 = [j0];
function G0(e, n) {
  return p(), O("svg", Y0, W0);
}
var Gd = _({});
Gd.render = G0;
const q0 = Gd;
var X0 = (e) => (za(""), e = e(), Aa(), e), K0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Z0 = /* @__PURE__ */ X0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), J0 = [Z0];
function Q0(e, n) {
  return p(), O("svg", K0, J0);
}
var qd = _({});
qd.render = Q0;
const _0 = qd;
var x0 = (e) => (za(""), e = e(), Aa(), e), e1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, n1 = /* @__PURE__ */ x0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), r1 = [n1];
function a1(e, n) {
  return p(), O("svg", e1, r1);
}
var Xd = _({});
Xd.render = a1;
const t1 = Xd;
var {
  n: o1,
  classes: i1
} = x("result");
function l1(e, n) {
  return p(), O(
    Oe,
    null,
    [z(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), z(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: W({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: W({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: W({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), z(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: W({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    64
    /* STABLE_FRAGMENT */
  );
}
var Kd = _({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: o1,
      classes: i1,
      toNumber: L
    };
  }
});
Kd.render = l1;
const s1 = Kd;
var u1 = (e) => (za(""), e = e(), Aa(), e), d1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, v1 = /* @__PURE__ */ u1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), f1 = [v1];
function c1(e, n) {
  return p(), O("svg", d1, f1);
}
var Zd = _({});
Zd.render = c1;
const m1 = Zd;
var p1 = (e) => (za(""), e = e(), Aa(), e), h1 = {
  viewBox: "-4 -4 32 32"
}, g1 = /* @__PURE__ */ p1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), y1 = [g1];
function b1(e, n) {
  return p(), O("svg", h1, y1);
}
var Jd = _({});
Jd.render = b1;
const w1 = Jd;
var {
  n: C1,
  classes: S1
} = x("result");
function k1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: W({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), ye(
          xa(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qd = _({
  name: "VarResult",
  components: {
    Info: q0,
    Success: s1,
    Warning: t1,
    Error: _0,
    Question: m1,
    Empty: w1
  },
  props: H0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: C1,
      classes: S1,
      toNumber: L,
      toPxNum: Re,
      toSizeUnit: ge,
      circleSize: n,
      borderSize: r
    };
  }
});
Qd.render = k1;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var gk = fa;
function $1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function T1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var P1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: $1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: T1
  },
  onClick: U()
}, {
  n: O1,
  classes: V1
} = x("row");
function M1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: W({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var _d = _({
  name: "VarRow",
  props: P1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = qm(), t = R(() => {
      var s = Re(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      $(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: O1,
      classes: V1,
      average: t,
      handleClick: l,
      padStartFlex: Ft
    };
  }
});
_d.render = M1;
const ca = _d;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var yk = ca;
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
function B1(e) {
  return ["left", "right", "center"].includes(e);
}
var E1 = ci({
  modelValue: {
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: B1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: U(),
  onBlur: U(),
  onClose: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, qe(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: I1,
  classes: N1
} = x("select"), D1 = {
  key: 1
};
function z1(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-field-decorator"), o = te("var-menu"), l = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [J(
      o,
      {
        class: c(e.n("menu")),
        "var-select-cover": "",
        "same-width": "",
        "offset-y": e.offsetY,
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
        placement: e.placement,
        "default-style": !1,
        show: e.isFocus,
        "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
        onClose: e.handleBlur
      },
      {
        menu: ve(() => [z(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [J(
          t,
          bt(eo({
            value: e.modelValue,
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            line: e.line,
            hint: e.hint,
            textColor: e.textColor,
            focusColor: e.focusColor,
            blurColor: e.blurColor,
            isFocus: e.isFocus,
            errorMessage: e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          {
            "prepend-icon": ve(() => [F(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [F(e.$slots, "append-icon")]),
            default: ve(() => [z(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: W({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [z(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? ee("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), O(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), O(
                      Oe,
                      null,
                      Ae(e.labels, (i) => (p(), ye(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = gn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [we(
                            ae(i),
                            1
                            /* TEXT */
                          )]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1032,
                        ["class", "type", "onClose"]
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))],
                    2
                    /* CLASS */
                  )) : (p(), O(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    ae(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (p(), O(
                  "span",
                  D1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), F(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [J(
                a,
                {
                  class: c(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
              /* CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["class", "offset-y", "disabled", "placement", "show", "onClose"]
    ), J(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = gn(() => {
        }, ["stop"]))
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var xd = _({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: Xn,
    VarChip: mr,
    VarFieldDecorator: Sd,
    VarFormDetails: Ke
  },
  props: E1,
  setup(e) {
    var n = M(!1), r = R(() => e.multiple), a = R(() => e.focusColor), t = M(""), o = M([]), l = R(() => Un(e.modelValue)), i = R(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Pn(), {
      length: v,
      options: f,
      bindOptions: m
    } = Wb(), {
      errorMessage: g,
      validateWithTrigger: y,
      validate: h,
      // expose
      resetValidation: w
    } = Tn(), V = M(null), S = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      if (H) {
        var q = N;
        o.value = q.map(I);
      }
      !H && !Un(N) && (t.value = I(N)), !H && Un(N) && (t.value = "");
    }, E = (H) => {
      Be(() => {
        var {
          validateTrigger: N,
          rules: q,
          modelValue: ne
        } = e;
        y(N, H, q, ne);
      });
    }, P = (H) => {
      var {
        value: N,
        label: q
      } = H;
      return N.value != null ? N.value : q.value;
    }, I = (H) => {
      var N, q, ne = f.find((se) => {
        var {
          value: de
        } = se;
        return de.value === H;
      });
      return ne || (ne = f.find((se) => {
        var {
          label: de
        } = se;
        return de.value === H;
      })), (N = (q = ne) == null ? void 0 : q.label.value) != null ? N : "";
    }, b = () => {
      var {
        disabled: H,
        readonly: N,
        onFocus: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || (s.value = Re(e.offsetY), n.value = !0, $(q), E("onFocus"));
    }, B = () => {
      var {
        disabled: H,
        readonly: N,
        onBlur: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || ($(q), E("onBlur"));
    }, D = (H) => {
      var {
        disabled: N,
        readonly: q,
        multiple: ne,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || q)) {
        var de = ne ? f.filter((K) => {
          var {
            selected: re
          } = K;
          return re.value;
        }).map(P) : P(H);
        $(e["onUpdate:modelValue"], de), $(se, de), E("onChange"), !ne && (n.value = !1);
      }
    }, C = () => {
      var {
        disabled: H,
        readonly: N,
        multiple: q,
        clearable: ne,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || N || !ne)) {
        var de = q ? [] : void 0;
        $(e["onUpdate:modelValue"], de), $(se, de), E("onClear");
      }
    }, k = (H) => {
      var {
        disabled: N,
        onClick: q
      } = e;
      d != null && d.disabled.value || N || ($(q, H), E("onClick"));
    }, A = (H) => {
      var {
        disabled: N,
        readonly: q,
        modelValue: ne,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || q)) {
        var de = ne, K = f.find((me) => {
          var {
            label: Ce
          } = me;
          return Ce.value === H;
        }), re = de.filter((me) => {
          var Ce;
          return me !== ((Ce = K.value.value) != null ? Ce : K.label.value);
        });
        $(e["onUpdate:modelValue"], re), $(se, re), E("onClose");
      }
    }, Z = () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      if (H) {
        var q = N;
        f.forEach((ne) => ne.sync(q.includes(P(ne))));
      } else
        f.forEach((ne) => ne.sync(N === P(ne)));
      T();
    }, Q = () => {
      s.value = Re(e.offsetY), n.value = !0;
    }, Y = () => {
      n.value = !1;
    }, j = () => h(e.rules, e.modelValue), ue = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      H && !$e(N) && $n("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, Z, {
      deep: !0
    }), ie(() => v.value, Z);
    var G = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: D,
      reset: ue,
      validate: j,
      resetValidation: w
    };
    return m(G), $(u, G), {
      offsetY: s,
      isFocus: n,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: S,
      cursor: i,
      n: I1,
      classes: N1,
      handleFocus: b,
      handleBlur: B,
      handleClear: C,
      handleClick: k,
      handleClose: A,
      reset: ue,
      validate: j,
      resetValidation: w,
      focus: Q,
      blur: Y
    };
  }
});
xd.render = z1;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var bk = ma, A1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: L1,
  classes: R1
} = x("skeleton");
function U1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: W({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [z(
          "div",
          {
            class: c(e.n("--animation"))
          },
          null,
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: W({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [z(
            "div",
            {
              class: c(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: W({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [z(
              "div",
              {
                class: c(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : ee("v-if", !0), (p(!0), O(
            Oe,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (p(), O(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: W({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [z(
                "div",
                {
                  class: c(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (p(), O(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: W({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [z(
        "div",
        {
          class: c(e.n("--animation"))
        },
        null,
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var ev = _({
  name: "VarSkeleton",
  props: A1,
  setup() {
    return {
      n: L1,
      classes: R1,
      toSizeUnit: ge,
      toNumber: L
    };
  }
});
ev.render = U1;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var wk = pa;
function H1(e) {
  return ["always", "normal", "never"].includes(e);
}
var De;
(function(e) {
  e.First = "1", e.Second = "2";
})(De || (De = {}));
var F1 = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: H1
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: !1
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: {
    type: Array
  },
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: rs,
  classes: Y1
} = x("slider"), j1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function W1(e, n) {
  var r = te("var-hover-overlay"), a = te("var-form-details"), t = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [z(
          "div",
          {
            class: c(e.n(e.direction + "-track-background")),
            style: W({
              background: e.trackColor,
              height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
              width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n(e.direction + "-track-fill")),
            style: W(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), O(
        Oe,
        null,
        Ae(e.thumbList, (o) => (p(), O(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: W(e.thumbStyle(o)),
            onTouchstart: gn((l) => e.start(l, o.enumValue), ["stop"]),
            onTouchmove: gn((l) => e.move(l, o.enumValue), ["stop"]),
            onTouchend: (l) => e.end(o.enumValue),
            onTouchcancel: (l) => e.end(o.enumValue)
          },
          [F(e.$slots, "button", {
            currentValue: o.text
          }, () => [Se(z(
            "div",
            {
              class: c(e.n(e.direction + "-thumb-block")),
              style: W({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (l) => e.hover(l, o), "desktop"]]), z(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
              style: W({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [J(
              r,
              {
                hovering: o.hovering
              },
              null,
              8,
              ["hovering"]
            )],
            6
            /* CLASS, STYLE */
          ), z(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
              style: W({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [z(
              "span",
              null,
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          j1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
      a,
      {
        "error-message": e.errorMessage,
        class: c(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
    /* CLASS */
  );
}
var nv = _({
  name: "VarSlider",
  components: {
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  directives: {
    Hover: zn
  },
  props: F1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = kr(), {
      hovering: u,
      handleHovering: d
    } = kr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = M(null), y = M(0), h = M(!1), w = Ne({
      [De.First]: f(),
      [De.Second]: f()
    }), V = R(() => L(e.max) - L(e.min)), S = R(() => y.value / V.value * L(e.step)), T = R(() => {
      var {
        modelValue: K,
        range: re
      } = e, me = [];
      return re && $e(K) ? me = [{
        value: k(K[0]),
        enumValue: De.First,
        text: A(K[0]),
        hovering: tt(i),
        handleHovering: s
      }, {
        value: k(K[1]),
        enumValue: De.Second,
        text: A(K[1]),
        hovering: tt(u),
        handleHovering: d
      }] : an(K) && (me = [{
        value: k(K),
        enumValue: De.First,
        text: A(K),
        hovering: tt(i),
        handleHovering: s
      }]), me;
    }), E = R(() => {
      var {
        activeColor: K,
        range: re,
        modelValue: me
      } = e, Ce = re && $e(me) ? k(Math.min(me[0], me[1])) : 0, Le = re && $e(me) ? k(Math.max(me[0], me[1])) - Ce : k(me);
      return b.value ? {
        left: "0px",
        height: Le + "%",
        bottom: Ce + "%",
        background: K
      } : {
        top: "0px",
        width: Le + "%",
        left: Ce + "%",
        background: K
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), I = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = R(() => e.direction === "vertical"), B = (K) => {
      var re = K.currentTarget;
      return re ? b.value ? y.value - (K.clientY - re.getBoundingClientRect().top) : K.clientX - Wv(re) : 0;
    }, D = (K) => {
      var re = b.value ? "bottom" : "left";
      return {
        [re]: K.value + "%",
        zIndex: w[K.enumValue].active ? 1 : void 0
      };
    }, C = (K) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[K].active, k = (K) => {
      var {
        min: re,
        max: me
      } = e;
      return K < L(re) ? 0 : K > L(me) ? 100 : (K - L(re)) / V.value * 100;
    }, A = (K) => {
      if (!an(K))
        return 0;
      var re = K;
      re < Number(e.min) && (re = Number(e.min)), re > Number(e.max) && (re = Number(e.max));
      var me = parseInt("" + re, 10) === re;
      return me ? re : L(re.toPrecision(5));
    }, Z = (K, re) => {
      P.value || re.handleHovering(K);
    }, Q = (K, re) => {
      var me = [], {
        step: Ce,
        range: Le,
        modelValue: xe,
        onChange: Ze,
        min: Fe
      } = e, mn = L(Ce), Tt = Math.round(K / S.value), Mr = Tt * mn + L(Fe), le = w[re].percentValue * mn + L(Fe);
      if (w[re].percentValue = Tt, Le && $e(xe) && (me = re === De.First ? [Mr, xe[1]] : [xe[0], Mr]), le !== Mr) {
        var be = Le ? me.map((he) => A(he)) : A(Mr);
        $(Ze, be), $(e["onUpdate:modelValue"], be), m();
      }
    }, Y = (K) => {
      if (!e.range)
        return De.First;
      var re = w[De.First].percentValue * S.value, me = w[De.Second].percentValue * S.value, Ce = Math.abs(K - re), Le = Math.abs(K - me);
      return Ce <= Le ? De.First : De.Second;
    }, j = (K, re) => {
      y.value || (y.value = g.value.offsetWidth), P.value || (w[re].active = !0), !(P.value || I.value) && ($(e.onStart), h.value = !0, w[re].startPosition = K.touches[0][b.value ? "clientY" : "clientX"]);
    }, ue = (K, re) => {
      if (!(P.value || I.value || !h.value)) {
        var {
          startPosition: me,
          currentOffset: Ce
        } = w[re], {
          clientX: Le,
          clientY: xe
        } = K.touches[0], Ze = (b.value ? me - xe : Le - me) + Ce;
        Ze <= 0 ? Ze = 0 : Ze >= y.value && (Ze = y.value), Q(Ze, re);
      }
    }, G = (K) => {
      var {
        range: re,
        modelValue: me,
        onEnd: Ce,
        step: Le,
        min: xe
      } = e;
      if (P.value || (w[K].active = !1), !(P.value || I.value)) {
        var Ze = [];
        w[K].currentOffset = w[K].percentValue * S.value;
        var Fe = w[K].percentValue * L(Le) + L(xe);
        re && $e(me) && (Ze = K === De.First ? [Fe, me[1]] : [me[0], Fe]), $(Ce, re ? Ze : Fe), h.value = !1;
      }
    }, H = (K) => {
      if (!(P.value || I.value) && !K.target.closest("." + rs("thumb"))) {
        var re = B(K), me = Y(re);
        Q(re, me), G(me);
      }
    }, N = () => {
      var K = L(e.step);
      return isNaN(K) ? (_i("Slider", 'type of prop "step" should be Number'), !1) : K < 0 ? (_i("Slider", '"step" should be > 0'), !1) : !0;
    }, q = () => {
      var {
        range: K,
        modelValue: re
      } = e;
      return K && !$e(re) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !K && $e(re) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : K && $e(re) && re.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ne = function(K, re) {
      K === void 0 && (K = e.modelValue), re === void 0 && (re = L(e.step));
      var me = (Ce) => {
        var {
          min: Le,
          max: xe
        } = e;
        return Ce < L(Le) ? 0 : Ce > L(xe) ? V.value / re : (Ce - L(Le)) / re;
      };
      e.range && $e(K) ? (w[De.First].percentValue = me(K[0]), w[De.First].currentOffset = w[De.First].percentValue * S.value, w[De.Second].percentValue = me(K[1]), w[De.Second].currentOffset = w[De.Second].percentValue * S.value) : an(K) && (w[De.First].currentOffset = me(K) * S.value);
    }, se = () => {
      var K = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], K), l();
    }, de = {
      reset: se,
      validate: v,
      resetValidation: l
    };
    return $(n, de), ie([() => e.modelValue, () => e.step], (K) => {
      var [re, me] = K;
      !N() || !q() || h.value || ne(re, L(me));
    }), ie(y, () => ne()), dn(() => {
      !N() || !q() || (y.value = g.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), {
      n: rs,
      classes: Y1,
      Thumbs: De,
      sliderEl: g,
      getFillStyle: E,
      isDisabled: P,
      isVertical: b,
      thumbStyle: D,
      errorMessage: a,
      thumbsProps: w,
      thumbList: T,
      hover: Z,
      multiplySizeUnit: nn,
      toNumber: L,
      showLabel: C,
      start: j,
      move: ue,
      end: G,
      click: H
    };
  }
});
nv.render = W1;
const ha = nv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Ck = ha;
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function G1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function q1(e) {
  return Yi.includes(e);
}
var rv = {
  type: {
    type: String,
    validator: q1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: G1
  },
  // content内容
  content: {
    type: [String, Function, Object]
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String
  },
  // snackbar 持续时间
  duration: {
    type: Number,
    default: 3e3
  },
  // 是否将消息条内容堆叠在操作（按钮）之上
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: qe(lr, "type"),
  loadingSize: qe(lr, "size"),
  loadingRadius: qe(lr, "radius"),
  loadingColor: mi({}, qe(lr, "color"), {
    default: "currentColor"
  }),
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: !1
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: !1
  },
  // teleport
  teleport: {
    type: String,
    default: "body"
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: !1
  },
  // 打开时的回调函数
  onOpen: U(),
  // 打开动画结束时的回调
  onOpened: U(),
  // 关闭时的回调函数
  onClose: U(),
  // 关闭动画结束时的回调
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: X1,
  classes: K1
} = x("snackbar"), Z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function J1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return Se((p(), O(
    "div",
    {
      class: c(e.n()),
      style: W({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: W({
          zIndex: e.zIndex
        })
      },
      [z(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [F(e.$slots, "default", {}, () => [we(
          ae(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c([e.n("icon")])
        },
        [F(e.$slots, "icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ye(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (p(), ye(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : ee("v-if", !0), F(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Cr, e.show]]);
}
var av = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Bn,
    VarIcon: Pe
  },
  props: rv,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = kt(() => e.show, 1);
    to(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? Z1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? ($(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), $(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), dn(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Yi,
      n: X1,
      classes: K1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
av.render = J1;
const tv = av;
var {
  n: Q1
} = x("snackbar");
function _1(e, n) {
  var r = te("var-snackbar-core");
  return p(), ye(
    Da,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      ze,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [J(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [F(e.$slots, "icon")]),
            action: ve(() => [F(e.$slots, "action")]),
            default: ve(() => [F(e.$slots, "default", {}, () => [we(
              ae(e.content),
              1
              /* TEXT */
            )])]),
            _: 3
            /* FORWARDED */
          },
          16,
          ["class"]
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
var ov = _({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: tv
  },
  props: rv,
  setup() {
    var {
      disabled: e
    } = ao();
    return {
      n: Q1,
      disabled: e
    };
  }
});
ov.render = _1;
const ga = ov;
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ht.apply(this, arguments);
}
function x1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Yi = ["loading", "success", "warning", "info", "error"], as = 0, pi = !1, iv, Ja = !1, lv = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, kn = Ne([]), ji = lv, ew = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ko = (e) => () => wt(e) ? e() : e, nw = {
  setup() {
    return () => {
      var e = kn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ja && (a.position = "top");
        var l = Ja ? "relative" : "absolute", i = ht({
          position: l
        }, lw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: ko(s),
          icon: ko(u),
          action: ko(d)
        };
        return J(tv, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return J(Lv, Ee(ew, {
        style: {
          zIndex: hn.zIndex
        },
        onAfterEnter: rw,
        onAfterLeave: aw
      }), x1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Qn = function(e) {
  var n = ow(e), r = Ne(ht({}, ji, n));
  r.show = !0, pi || (pi = !0, iv = et(nw).unmountInstance);
  var {
    length: a
  } = kn, t = {
    id: as++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ja)
    tw(t);
  else {
    var o = "update-" + as;
    iw(r, o);
  }
  return {
    clear() {
      !Ja && kn.length ? kn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Yi.forEach((e) => {
  Qn[e] = (n) => (bi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Qn(n));
});
Qn.install = function(e) {
  e.component(ga.name, ga);
};
Qn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ja && (kn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ja = e);
};
Qn.clear = function() {
  kn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Qn.setDefaultOptions = function(e) {
  ji = e;
};
Qn.resetDefaultOptions = function() {
  ji = lv;
};
Qn.Component = ga;
function rw(e) {
  var n = e.getAttribute("data-id"), r = kn.find((a) => a.id === L(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function aw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = kn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = kn.every((t) => t.animationEnd);
  a && ($(iv), kn = Ne([]), pi = !1);
}
function tw(e) {
  kn.push(e);
}
function ow(e) {
  return e === void 0 && (e = {}), Ue(e) ? {
    content: e
  } : e;
}
function iw(e, n) {
  var [r] = kn;
  r.reactiveSnackOptions = ht({}, r.reactiveSnackOptions, e), r._update = n;
}
function lw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Sk = ga;
const hi = Qn;
var sv = (e) => ["mini", "small", "normal", "large"].includes(e), sw = (e) => sv(e) || $e(e) || an(e) || Ue(e), uw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), dw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), vw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: sw
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: uw
  },
  align: {
    type: String,
    validator: dw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function pn(e) {
  return "calc(" + e + " / 2)";
}
function fw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = pn(e) + " " + n + " " + pn(e) + " 0" : i = pn(e) + " 0" : t === "space-around" ? i = pn(e) + " " + pn(n) : t === "space-between" && (o === 0 ? i = pn(e) + " " + pn(n) + " " + pn(e) + " 0" : o === l ? i = pn(e) + " 0 " + pn(e) + " " + pn(n) : i = pn(e) + " " + pn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: $o,
  classes: cw
} = x("space");
const ya = _({
  name: "VarSpace",
  props: vw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : $e(t) ? t.map(ge) : [ge(t), ge(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = $(r.default)) != null ? t : [], f = sv(d), [m, g] = a(d, f);
      v = $s(v);
      var y = v.length - 1, h = v.map((w, V) => {
        var S = fw(m, g, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: y
        });
        return J("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return J("div", {
        class: cw($o(), $o("$--box"), [o, $o("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Ft(l),
          alignItems: Ft(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [h]);
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var kk = ya, mw = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, uv = Symbol("STEPS_BIND_STEP_KEY");
function pw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = fn(uv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function hw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = vn(uv);
  return r || $n("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: gw,
  classes: yw
} = x("step"), bw = {
  key: 3
};
function ww(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: W({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), ye(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (p(), ye(
            r,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (p(), ye(
            r,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (p(), O(
            "span",
            bw,
            ae(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? ee("v-if", !0) : (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: W({
            margin: e.lineMargin
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ))],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var dv = _({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: mw,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = hw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), m = R(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, y = () => v(a.value), h = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), ie(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: gw,
      classes: yw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: h
    };
  }
});
dv.render = ww;
const ba = dv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var $k = ba;
function Cw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Sw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Cw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: kw
} = x("steps");
function $w(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: W({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var vv = _({
  name: "VarSteps",
  props: Sw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = pw(), i = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: kw
    };
  }
});
vv.render = $w;
const wa = vv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Tk = wa, Tw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Pw
} = x("style-provider"), Ow = _({
  name: "VarStyleProvider",
  props: Tw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => vs(e.tag, {
      class: Pw(),
      style: Ss(e.styleVars)
    }, $(r.default));
  }
});
const Ca = Ow;
var To = [];
function gt(e) {
  To.forEach((r) => document.documentElement.style.removeProperty(r)), To.length = 0;
  var n = Ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), To.push(a);
  });
}
gt.Component = Ca;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
gt.install = function(e) {
  e.component(Ca.name, Ca);
};
var Pk = Ca, Vw = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Mw,
  classes: Bw
} = x("switch");
function Ew(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return Se((p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: W(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: W(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Se((p(), O(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: W(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: W(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), ye(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), J(
          a,
          {
            hovering: e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  )), [[l, e.hover, "desktop"]]);
}
var fv = _({
  name: "VarSwitch",
  components: {
    VarLoading: Bn,
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  directives: {
    Ripple: He,
    Hover: zn
  },
  props: Vw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = kr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: w,
        modelValue: V,
        color: S,
        closeColor: T,
        loadingColor: E,
        activeValue: P
      } = e;
      return {
        handle: {
          width: nn(w),
          height: nn(w),
          backgroundColor: V === P ? S : T,
          color: E
        },
        ripple: {
          left: V === P ? nn(w, 0.5) : "-" + nn(w, 0.5),
          color: V === P ? S : T || "#999",
          width: nn(w, 2),
          height: nn(w, 2)
        },
        track: {
          height: nn(w, 0.72),
          width: nn(w, 1.9),
          borderRadius: nn(w, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? S : T
        },
        switch: {
          height: nn(w, 1.2),
          width: nn(w, 2)
        }
      };
    }), f = R(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return nn(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: S,
        disabled: T,
        loading: E,
        readonly: P,
        modelValue: I,
        activeValue: b,
        inactiveValue: B,
        "onUpdate:modelValue": D
      } = e;
      if ($(V, w), !(T || E || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = I === b ? B : b;
        $(S, C), $(D, C), d();
      }
    }, g = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, y = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return $(n, h), {
      n: Mw,
      classes: Bw,
      switchActive: m,
      hovering: i,
      hover: g,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
fv.render = Ew;
const Sa = fv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Ok = Sa, Iw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, cv = Symbol("TABS_BIND_TAB_KEY");
function Nw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = fn(cv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Dw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = vn(cv);
  return n || $n("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Dt,
  classes: zw
} = x("tab");
function Aw(e, n) {
  var r = Ie("ripple");
  return Se((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var mv = _({
  name: "VarTab",
  directives: {
    Ripple: He
  },
  props: Iw,
  setup(e) {
    var n = M(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Dw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : h() ? d.value : v.value, V = () => e.disabled ? Dt("$-tab--disabled") : h() ? Dt("$-tab--active") : Dt("$-tab--inactive"), S = (T) => {
      var {
        disabled: E,
        name: P,
        onClick: I
      } = e;
      E || ($(I, P ?? o.value, T), s(y));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Dt,
      classes: zw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: V,
      handleClick: S
    };
  }
});
mv.render = Aw;
const ka = mv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Vk = ka, pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Lw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = fn(pv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Rw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = vn(pv);
  return n || $n("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Uw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Hw,
  classes: Fw
} = x("tab-item");
function Yw(e, n) {
  var r = te("var-swipe-item");
  return p(), ye(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? F(e.$slots, "default", {
        key: 0
      }) : ee("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var hv = _({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: Uw,
  setup(e) {
    var n = M(!1), r = M(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Rw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Hw,
      classes: Fw,
      current: n,
      initSlot: r
    };
  }
});
hv.render = Yw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Mk = $a, jw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Ww,
  classes: Gw
} = x("table");
function qw(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("main"))
      },
      [z(
        "table",
        {
          class: c(e.n("table")),
          style: W({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var gv = _({
  name: "VarTable",
  props: jw,
  setup() {
    return {
      toSizeUnit: ge,
      n: Ww,
      classes: Gw,
      formatElevation: cn
    };
  }
});
gv.render = qw;
const Ta = gv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Bk = Ta;
function ts(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Xw(e) {
  return ["auto", "always"].includes(e);
}
function Kw(e) {
  return ["normal", "reverse"].includes(e);
}
var Zw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ts
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ts
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto",
    validator: Xw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Kw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: qe(Ut, "cssMode"),
  stickyZIndex: qe(Ut, "zIndex"),
  offsetTop: qe(Ut, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function os(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function is(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        os(o, a, t, l, i, "next", s);
      }
      function i(s) {
        os(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Jw,
  classes: Qw
} = x("tabs");
function _w(e, n) {
  return p(), ye(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [z(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [z(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [F(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: W({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [z(
              "div",
              {
                class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
                style: W({
                  background: e.indicatorColor || e.activeColor
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )],
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["css-mode", "offset-top", "z-index"]
  );
}
var yv = _({
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Zw,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = M(null), {
      tabList: g,
      bindTabList: y,
      length: h
    } = Nw(), w = (C) => {
      var k, A = (k = C.name.value) != null ? k : C.index.value, {
        active: Z,
        onChange: Q,
        onClick: Y
      } = e;
      $(e["onUpdate:active"], A), $(Y, A), A !== Z && $(Q, A);
    }, V = () => g.find((C) => {
      var {
        name: k
      } = C;
      return e.active === k.value;
    }), S = (C) => g.find((k) => {
      var {
        index: A
      } = k;
      return (C ?? e.active) === A.value;
    }), T = () => {
      if (h.value !== 0) {
        var {
          active: C
        } = e;
        if (an(C)) {
          var k = C > h.value - 1 ? h.value - 1 : 0;
          return $(e["onUpdate:active"], k), S(k);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, P = (C) => {
      var {
        element: k
      } = C, A = k.value;
      A && (e.layoutDirection === "horizontal" ? (n.value = A.offsetWidth + "px", a.value = A.offsetLeft + "px") : (r.value = A.offsetHeight + "px", t.value = A.offsetTop + "px"));
    }, I = (C) => {
      var {
        element: k
      } = C;
      if (o.value) {
        var A = l.value, Z = k.value;
        if (e.layoutDirection === "horizontal") {
          var Q = Z.offsetLeft + Z.offsetWidth / 2 - A.offsetWidth / 2;
          vt(A, {
            left: Q,
            animation: Vo
          });
        } else {
          var Y = Z.offsetTop + Z.offsetHeight / 2 - A.offsetHeight / 2;
          vt(A, {
            top: Y,
            animation: Vo
          });
        }
      }
    }, b = () => {
      var C = V() || S() || T();
      !C || C.disabled.value || (E(), P(C), I(C));
    }, B = /* @__PURE__ */ function() {
      var C = is(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), D = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: w
    };
    return y(D), ie(() => h.value, /* @__PURE__ */ is(function* () {
      yield Dn(), b();
    })), ie(() => e.active, b), ie(() => e.scrollable, b), Pr(b), Kn(() => window, "resize", b), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: ze,
      toSizeUnit: ge,
      n: Jw,
      classes: Qw,
      resize: b,
      resizeSticky: B,
      formatElevation: cn
    };
  }
});
yv.render = _w;
const Pa = yv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Ek = Pa, xw = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": U()
};
function ls(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ls(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ls(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nC
} = x("tabs-items");
function rC(e, n) {
  var r = te("var-swipe");
  return p(), ye(
    r,
    {
      class: c(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var bv = _({
  name: "VarTabsItems",
  components: {
    VarSwipe: Wn
  },
  props: xw,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Lw(), o = (f) => r.find((m) => {
      var {
        name: g
      } = m;
      return f === g.value;
    }), l = (f) => r.find((m) => {
      var {
        index: g
      } = m;
      return f === g.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var m, g = i(f);
      g && (r.forEach((y) => {
        var {
          setCurrent: h
        } = y;
        return h(!1);
      }), g.setCurrent(!0), (m = n.value) == null || m.to(g.index.value));
    }, u = (f) => {
      var m, g = r.find((h) => {
        var {
          index: w
        } = h;
        return w.value === f;
      }), y = (m = g.name.value) != null ? m : g.index.value;
      $(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ eC(function* () {
      yield Dn(), s(e.active);
    })), {
      swipe: n,
      n: nC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
bv.render = rC;
const Oa = bv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Ik = Oa;
const aC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, tC = {
  "--badge-default-color": "#555"
}, oC = {
  "--button-default-color": "#303030"
}, iC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, lC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, sC = {
  "--checkbox-unchecked-color": "#fff"
}, uC = {
  "--chip-default-color": "#555"
}, dC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, vC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, fC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, cC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, mC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, pC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, hC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, gC = {
  "--popup-content-background-color": "#1e1e1e"
}, yC = {
  "--pull-refresh-background": "#303030"
}, bC = {
  "--radio-unchecked-color": "#fff"
}, wC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, CC = {
  "--select-scroller-background": "#303030"
}, SC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, kC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, $C = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, TC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, PC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, OC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, VC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, MC = {
  "--tabs-background": "#1e1e1e"
}, BC = {
  "--app-bar-color": "#272727"
}, EC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, IC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, NC = {
  "--menu-background-color": "#272727"
}, DC = {
  "--breadcrumb-inactive-color": "#aaa"
}, zC = {
  "--paper-background": "#303030"
}, AC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
const LC = gi({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, oC, lC, iC, OC, vC, SC, MC, TC, gC, fC, aC, uC, tC, VC, dC, yC, $C, kC, pC, PC, mC, CC, bC, sC, cC, hC, BC, EC, IC, NC, wC, DC, zC, AC);
var RC = {
  dark: LC
}, Nk = null;
const yi = RC;
var bn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], rn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function UC(e) {
  return ["ampm", "24hr"].includes(e);
}
var HC = {
  modelValue: {
    type: String
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: UC
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": U(),
  onChange: U()
}, wv = (e, n) => e === "24hr" || n === "am", Wi = (e, n, r) => {
  var a = bn.findIndex((o) => L(o) === L(r)), t = wv(e, n) ? r : rn[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, ln = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, Cv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    max: i,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Wi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: y
    } = ln(i);
    f = g === v && a > y;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: w
    } = ln(s);
    f = h === v && a < w;
  }
  if (i && s) {
    var {
      hour: V,
      minute: S
    } = ln(i), {
      hour: T,
      minute: E
    } = ln(s);
    f = T === v && a < E || V === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Sv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    minute: i,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Wi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: h,
      second: w
    } = ln(s);
    m = y === f && h < i || h === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: S,
      second: T
    } = ln(u);
    m = V === f && S > i || S === i && a > T;
  }
  if (s && u) {
    var {
      hour: E,
      minute: P,
      second: I
    } = ln(s), {
      hour: b,
      minute: B,
      second: D
    } = ln(u);
    m = E === f && P < i || b === f && B > i || E === f && P === i && a > I || b === f && B === i && a < D;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || g;
}, {
  n: FC,
  classes: YC
} = x("time-picker");
function jC(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n("clock"))
    },
    [z(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: W(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), O(
      Oe,
      null,
      Ae(e.timeScales, (r, a) => (p(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: W(e.getStyle(a, r, !1))
        },
        ae(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), O(
        Oe,
        null,
        Ae(e.hours24, (r, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: W(e.getStyle(a, r, !0))
          },
          ae(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var kv = _({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = M(null), t = M([]), o = M([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = R(() => e.type === "hour" ? bn : ss), u = (h, w) => {
      var V;
      h = (V = h) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Cv : Sv, T = {
        time: L(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(T, "minute"), S(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? rn[i.value] : s.value[i.value];
      return s.value === ss ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (wv(e.format, e.ampm))
          return t.value.includes(h);
        var w = bn.findIndex((V) => V === h);
        return o.value.includes(w);
      }
      return u(h, !0);
    }, m = (h, w, V) => {
      var S = 2 * Math.PI / 12 * h - Math.PI / 2, T = 50 * (1 + Math.cos(S)), E = 50 * (1 + Math.sin(S)), P = () => v(h, V) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: I,
        color: b
      } = P();
      return {
        left: T + "%",
        top: E + "%",
        backgroundColor: I,
        color: b
      };
    }, g = () => {
      var {
        width: h,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: h,
        height: w
      };
    }, y = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? bn : rn;
        return Ba(h[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (h, w) => {
      var [V, S] = h, [T, E] = w, P = V === T && S === E;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var I = S ? rn[i.value] : y(), b = e.useSeconds ? ":" + e.time.second : "", B = I + ":" + e.time.minute + b;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), ie(() => e.rad, (h, w) => {
      if (!(e.type === "hour" || h === void 0 || w === void 0)) {
        var V = h / 6 >= 0 ? h / 6 : h / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== S) {
          var T, {
            hourStr: E
          } = Wi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = oe().minute(V).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            T = E + ":" + P + I;
          }
          if (e.type === "second") {
            var b = oe().second(V).format("ss"), B = e.useSeconds ? ":" + b : "";
            T = E + ":" + e.time.minute + B;
          }
          r("update", T);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [w, V, S] = h;
      if (t.value = [], w && !V) {
        var {
          hour: T
        } = ln(w), E = bn.filter((j) => L(j) > T), P = rn.filter((j) => L(j) > T);
        t.value = [...E, ...P];
      }
      if (!w && V) {
        var {
          hour: I
        } = ln(V), b = bn.filter((j) => L(j) < I), B = rn.filter((j) => L(j) < I);
        t.value = [...b, ...B];
      }
      if (w && V) {
        var {
          hour: D
        } = ln(w), {
          hour: C
        } = ln(V), k = bn.filter((j) => L(j) < C || L(j) > D), A = rn.filter((j) => L(j) < C || L(j) > D);
        t.value = [...k, ...A];
      }
      if (S != null && S.hours) {
        var {
          hours: Z
        } = S, Q = bn.filter((j) => !Z(L(j))), Y = rn.filter((j) => !Z(L(j)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...Q, ...Y])];
      }
      o.value = t.value.map((j) => rn.findIndex((ue) => j === ue)).filter((j) => j >= 0);
    }, {
      immediate: !0
    }), {
      n: FC,
      classes: YC,
      hours24: rn,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: g,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
kv.render = jC;
const WC = kv;
var {
  n: GC,
  classes: qC
} = x("time-picker"), XC = (e) => (za(""), e = e(), Aa(), e), KC = /* @__PURE__ */ XC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), ZC = {
  key: 0
};
function JC(e, n) {
  var r = te("clock");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), KC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", ZC, ":")) : ee("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), z(
      "div",
      {
        class: c(e.n("body"))
      },
      [z(
        "div",
        {
          class: c(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [J(
          ze,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), ye(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
            /* STABLE */
          },
          8,
          ["name"]
        )],
        34
        /* CLASS, HYDRATE_EVENTS */
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var $v = _({
  name: "VarTimePicker",
  components: {
    Clock: WC
  },
  props: HC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), g = M(!1), y = M(!1), h = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ne({
      x: 0,
      y: 0
    }), V = Ne({
      x: [],
      y: []
    }), S = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (H) => {
      $(e["onUpdate:modelValue"], H), $(e.onChange, H);
    }, E = (H) => H * 57.29577951308232, P = (H) => {
      i.value = !1, y.value = !1, f.value = H;
    }, I = (H) => {
      var {
        disableHour: N
      } = a.value, q = bn.findIndex((de) => L(de) === L(h.value.hour)), ne = H === "am" ? bn : rn, se = [...ne.slice(q), ...ne.slice(0, q)];
      return se.find((de, K) => (o.value = K !== 0, !N.includes(de)));
    }, b = (H) => {
      if (!e.readonly) {
        m.value = H;
        var N = I(H);
        if (N) {
          var q = e.useSeconds ? ":" + h.value.second : "", ne = Ba(N, 2, "0") + ":" + h.value.minute + q;
          T(ne);
        }
      }
    }, B = (H, N) => {
      var q = H >= V.x[0] && H <= V.x[1], ne = N >= V.y[0] && N <= V.y[1];
      return q && ne;
    }, D = (H) => {
      var N = e.format === "24hr" ? "HH" : "hh", {
        hour: q,
        minute: ne,
        second: se
      } = ln(H);
      return {
        hour: oe().hour(q).format(N),
        minute: oe().minute(ne).format("mm"),
        second: oe().second(se).format("ss")
      };
    }, C = (H) => {
      var N = H / 30;
      return N >= 0 ? N : N + 12;
    }, k = () => {
      var {
        width: H,
        height: N
      } = a.value.getSize(), q = w.x - H / 2 - 8, ne = w.x + H / 2 + 8, se = w.y - N / 2 - 8, de = w.y + N / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: ne,
        rangeYMin: se,
        rangeYMax: de
      };
    }, A = (H, N, q) => {
      var {
        disableHour: ne
      } = a.value;
      l.value = B(H, N);
      var se = Math.round(q / 30) * 30 + 90, de = C(se), K = t.value ? bn[de] : rn[de];
      if (ne.includes(K) || (t.value = e.format === "24hr" ? B(H, N) : !1), t.value === l.value) {
        var re = t.value || m.value === "pm" ? rn[de] : bn[de];
        g.value = ne.includes(re), !g.value && (u.value = se, i.value = !0);
      }
    }, Z = (H) => {
      var {
        disableHour: N
      } = a.value, q = Math.round(H / 6) * 6 + 90, ne = q / 6 >= 0 ? q / 6 : q / 6 + 60, se = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      y.value = Cv(se), !y.value && (d.value = q, s.value = !0);
    }, Q = (H) => {
      var {
        disableHour: N
      } = a.value, q = Math.round(H / 6) * 6 + 90, ne = q / 6 >= 0 ? q / 6 : q / 6 + 60, se = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: L(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      Sv(se) || (v.value = q);
    }, Y = () => {
      var {
        left: H,
        top: N,
        width: q,
        height: ne
      } = n.value.getBoundingClientRect();
      if (w.x = H + q / 2, w.y = N + ne / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: se,
          rangeXMax: de,
          rangeYMin: K,
          rangeYMax: re
        } = k();
        V.x = [se, de], V.y = [K, re];
      }
    }, j = (H) => {
      if (H.preventDefault(), !e.readonly) {
        Y();
        var {
          clientX: N,
          clientY: q
        } = H.touches[0], ne = N - w.x, se = q - w.y, de = Math.round(E(Math.atan2(se, ne)));
        f.value === "hour" ? A(N, q, de) : f.value === "minute" ? Z(de) : Q(de);
      }
    }, ue = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, G = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (H) => {
      if (H) {
        var {
          hour: N,
          minute: q,
          second: ne
        } = ln(H), se = oe().hour(N).format("hh"), de = oe().hour(N).format("HH"), K = oe().minute(q).format("mm"), re = oe().second(ne).format("ss");
        u.value = (se === "12" ? 0 : L(se)) * 30, d.value = L(K) * 6, v.value = L(re) * 6, h.value = D(H), e.format !== "24hr" && (m.value = Ba("" + N, 2, "0") === de && rn.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && rn.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: GC,
      classes: qC,
      getRad: S,
      time: h,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: j,
      checkPanel: P,
      checkAmpm: b,
      end: ue,
      update: T,
      changePreventUpdate: G,
      formatElevation: cn
    };
  }
});
$v.render = JC;
const Va = $v;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Dk = Va, QC = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
};
function us(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ds(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        us(o, a, t, l, i, "next", s);
      }
      function i(s) {
        us(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: _C,
  classes: xC
} = x("uploader"), eS = 0, nS = ["onClick"], rS = ["onClick"], aS = ["src", "alt"], tS = ["multiple", "accept", "capture", "disabled"], oS = ["src"];
function iS(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = te("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), O(
        Oe,
        null,
        Ae(e.files, (s) => Se((p(), O(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [z(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: gn((u) => e.handleRemove(s), ["stop"])
            },
            [J(
              r,
              {
                class: c(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            rS
          )) : ee("v-if", !0), s.cover ? (p(), O(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: W({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            aS
          )) : ee("v-if", !0), z(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          nS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [z(
          "input",
          {
            ref: "input",
            type: "file",
            class: c(e.n("action-input")),
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          tS
        ), F(e.$slots, "default", {}, () => [J(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), J(
          a,
          {
            hovering: e.hovering && !e.disabled && !e.formDisabled
          },
          null,
          8,
          ["hovering"]
        )])],
        2
        /* CLASS */
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), J(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), J(
      o,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), O(
            "video",
            {
              key: 0,
              class: c(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            },
            null,
            10,
            oS
          )) : ee("v-if", !0)];
        }),
        _: 1
        /* STABLE */
      },
      8,
      ["class", "show"]
    )],
    2
    /* CLASS */
  );
}
var Tv = _({
  name: "VarUploader",
  directives: {
    Ripple: He,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarPopup: Cn,
    VarFormDetails: Ke,
    VarHoverOverlay: sn
  },
  props: QC,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = R(() => {
      var {
        maxlength: j,
        modelValue: {
          length: ue
        }
      } = e;
      return an(j) ? ue + " / " + j : "";
    }), {
      form: o,
      bindForm: l
    } = Pn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), {
      hovering: v,
      handleHovering: f
    } = kr(), m = R(() => {
      var {
        modelValue: j,
        hideList: ue
      } = e;
      return ue ? [] : j;
    }), g = (j) => {
      var {
        disabled: ue,
        readonly: G,
        previewed: H
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ue || G || !H)) {
        var {
          url: N
        } = j;
        if (Ue(N) && Zi(N)) {
          Nn(N);
          return;
        }
        Ue(N) && Ji(N) && (a.value = j, r.value = !0);
      }
    }, y = (j) => ({
      id: eS++,
      url: "",
      cover: "",
      name: j.name,
      file: j
    }), h = (j) => {
      var ue = j.target, {
        files: G
      } = ue;
      return Array.from(G);
    }, w = (j) => new Promise((ue) => {
      var G = new FileReader();
      G.onload = () => {
        var H = G.result;
        j.file.type.startsWith("image") && (j.cover = H), j.url = H, ue(j);
      }, G.readAsDataURL(j.file);
    }), V = (j) => j.map(w), S = (j) => {
      var {
        onBeforeRead: ue
      } = e;
      return j.map((G) => new Promise((H) => {
        ue || H({
          valid: !0,
          varFile: G
        });
        var N = Oo($(ue, Ne(G)));
        Promise.all(N).then((q) => {
          H({
            valid: q.every(Boolean),
            varFile: G
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var j = ds(function* (ue) {
        var {
          maxsize: G,
          maxlength: H,
          modelValue: N,
          onOversize: q,
          onAfterRead: ne,
          readonly: se,
          disabled: de
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || de || se)) {
          var K = (Fe) => Fe.filter((mn) => mn.file.size > L(G) ? ($(q, Ne(mn)), !1) : !0), re = (Fe) => {
            var mn = Math.min(Fe.length, L(H) - N.length);
            return Fe.slice(0, mn);
          }, me = h(ue), Ce = me.map(y);
          Ce = G != null ? K(Ce) : Ce, Ce = H != null ? re(Ce) : Ce;
          var Le = yield Promise.all(V(Ce)), xe = yield Promise.all(S(Le)), Ze = xe.filter((Fe) => {
            var {
              valid: mn
            } = Fe;
            return mn;
          }).map((Fe) => {
            var {
              varFile: mn
            } = Fe;
            return mn;
          });
          $(e["onUpdate:modelValue"], [...N, ...Ze]), ue.target.value = "", Ze.forEach((Fe) => $(ne, Ne(Fe)));
        }
      });
      return function(G) {
        return j.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var j = ds(function* (ue) {
        var {
          disabled: G,
          readonly: H,
          modelValue: N,
          onBeforeRemove: q,
          onRemove: ne
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || G || H)) {
          if (q) {
            var se = Oo($(q, Ne(ue)));
            if ((yield Promise.all(se)).some((K) => !K))
              return;
          }
          var de = N.filter((K) => K !== ue);
          $(ne, Ne(ue)), k("onRemove"), $(e["onUpdate:modelValue"], de);
        }
      });
      return function(G) {
        return j.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((j) => j.state === "success"), I = () => e.modelValue.filter((j) => j.state === "error"), b = () => e.modelValue.filter((j) => j.state === "loading"), B = () => {
      n.value.click();
    }, D = () => {
      a.value = null, r.value = !1, Nn.close();
    }, C = {
      getSuccess: P,
      getError: I,
      getLoading: b
    }, k = (j) => {
      Be(() => {
        var {
          validateTrigger: ue,
          rules: G,
          modelValue: H
        } = e;
        s(ue, j, G, H, C);
      });
    }, A = !1, Z = () => u(e.rules, e.modelValue, C), Q = () => {
      A = !0, $(e["onUpdate:modelValue"], []), d();
    }, Y = {
      validate: Z,
      resetValidation: d,
      reset: Q
    };
    return $(l, Y), ie(() => e.modelValue, () => {
      !A && k("onChange"), A = !1;
    }, {
      deep: !0
    }), {
      n: _C,
      classes: xC,
      formatElevation: cn,
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: f,
      isHTMLSupportVideo: Ji,
      isHTMLSupportImage: Zi,
      preview: g,
      handleChange: T,
      handleRemove: E,
      getSuccess: P,
      getError: I,
      getLoading: b,
      validate: Z,
      resetValidation: d,
      reset: Q,
      chooseFile: B,
      closePreview: D
    };
  }
});
Tv.render = iS;
const Ma = Tv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var zk = Ma;
const lS = "2.10.0";
function sS(e) {
  Zn.install && e.use(Zn), Er.install && e.use(Er), Ir.install && e.use(Ir), Nr.install && e.use(Nr), Dr.install && e.use(Dr), vr.install && e.use(vr), zr.install && e.use(zr), Ar.install && e.use(Ar), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Qe.install && e.use(Qe), Ur.install && e.use(Ur), Hr.install && e.use(Hr), fr.install && e.use(fr), cr.install && e.use(cr), Fr.install && e.use(Fr), mr.install && e.use(mr), Yr.install && e.use(Yr), jr.install && e.use(jr), Wr.install && e.use(Wr), hn.install && e.use(hn), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Jn.install && e.use(Jn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), jn.install && e.use(jn), Ke.install && e.use(Ke), zn.install && e.use(zn), sn.install && e.use(sn), Pe.install && e.use(Pe), _r.install && e.use(_r), Nn.install && e.use(Nn), xr.install && e.use(xr), ea.install && e.use(ea), br.install && e.use(br), ft.install && e.use(ft), na.install && e.use(na), ra.install && e.use(ra), Bn.install && e.use(Bn), vi.install && e.use(vi), zo.install && e.use(zo), Xn.install && e.use(Xn), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Na.install && e.use(Na), Cn.install && e.use(Cn), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), He.install && e.use(He), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), hi.install && e.use(hi), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), qn.install && e.use(qn), gt.install && e.use(gt), Wn.install && e.use(Wn), Gn.install && e.use(Gn), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), yi.install && e.use(yi), Va.install && e.use(Va), gr.install && e.use(gr), Ma.install && e.use(Ma);
}
const Ak = {
  version: lS,
  install: sS,
  ActionSheet: Zn,
  AppBar: Er,
  Avatar: Ir,
  AvatarGroup: Nr,
  BackTop: Dr,
  Badge: vr,
  BottomNavigation: zr,
  BottomNavigationItem: Ar,
  Breadcrumb: Lr,
  Breadcrumbs: Rr,
  Button: Qe,
  ButtonGroup: Ur,
  Card: Hr,
  Cell: fr,
  Checkbox: cr,
  CheckboxGroup: Fr,
  Chip: mr,
  Col: Yr,
  Collapse: jr,
  CollapseItem: Wr,
  Context: hn,
  Countdown: Gr,
  Counter: qr,
  DatePicker: Kr,
  Dialog: Jn,
  Divider: Zr,
  Ellipsis: Jr,
  Fab: Qr,
  Form: jn,
  FormDetails: Ke,
  Hover: zn,
  HoverOverlay: sn,
  Icon: Pe,
  Image: _r,
  ImagePreview: Nn,
  IndexAnchor: xr,
  IndexBar: ea,
  Input: br,
  Lazy: ft,
  Link: na,
  List: ra,
  Loading: Bn,
  LoadingBar: vi,
  Locale: zo,
  Menu: Xn,
  Option: aa,
  Overlay: ta,
  Pagination: oa,
  Paper: ia,
  Picker: Na,
  Popup: Cn,
  Progress: la,
  PullRefresh: sa,
  Radio: ua,
  RadioGroup: da,
  Rate: va,
  Result: fa,
  Ripple: He,
  Row: ca,
  Select: ma,
  Skeleton: pa,
  Slider: ha,
  Snackbar: hi,
  Space: ya,
  Step: ba,
  Steps: wa,
  Sticky: qn,
  StyleProvider: gt,
  Swipe: Wn,
  SwipeItem: Gn,
  Switch: Sa,
  Tab: ka,
  TabItem: $a,
  Table: Ta,
  Tabs: Pa,
  TabsItems: Oa,
  Themes: yi,
  TimePicker: Va,
  Tooltip: gr,
  Uploader: Ma
};
export {
  Zn as ActionSheet,
  Er as AppBar,
  Ir as Avatar,
  Nr as AvatarGroup,
  Dr as BackTop,
  vr as Badge,
  zr as BottomNavigation,
  Ar as BottomNavigationItem,
  Lr as Breadcrumb,
  Rr as Breadcrumbs,
  Qe as Button,
  Ur as ButtonGroup,
  Hr as Card,
  fr as Cell,
  cr as Checkbox,
  Fr as CheckboxGroup,
  mr as Chip,
  Yr as Col,
  jr as Collapse,
  Wr as CollapseItem,
  hn as Context,
  Gr as Countdown,
  qr as Counter,
  Kr as DatePicker,
  Jn as Dialog,
  Zr as Divider,
  Jr as Ellipsis,
  Qr as Fab,
  jn as Form,
  Ke as FormDetails,
  zn as Hover,
  sn as HoverOverlay,
  Pe as Icon,
  _r as Image,
  Nn as ImagePreview,
  xr as IndexAnchor,
  ea as IndexBar,
  br as Input,
  ft as Lazy,
  na as Link,
  ra as List,
  Bn as Loading,
  vi as LoadingBar,
  zo as Locale,
  Xn as Menu,
  aa as Option,
  ta as Overlay,
  Ro as PIXEL,
  oa as Pagination,
  ia as Paper,
  Na as Picker,
  Cn as Popup,
  la as Progress,
  sa as PullRefresh,
  ua as Radio,
  da as RadioGroup,
  va as Rate,
  fa as Result,
  He as Ripple,
  ca as Row,
  Yi as SNACKBAR_TYPE,
  ma as Select,
  pa as Skeleton,
  ha as Slider,
  hi as Snackbar,
  ya as Space,
  ba as Step,
  wa as Steps,
  qn as Sticky,
  gt as StyleProvider,
  Wn as Swipe,
  Gn as SwipeItem,
  Sa as Switch,
  ka as Tab,
  $a as TabItem,
  Ta as Table,
  Pa as Tabs,
  Oa as TabsItems,
  yi as Themes,
  Va as TimePicker,
  gr as Tooltip,
  Ma as Uploader,
  pS as _ActionSheetComponent,
  hS as _AppBarComponent,
  yS as _AvatarComponent,
  bS as _AvatarGroupComponent,
  $S as _BackTopComponent,
  TS as _BadgeComponent,
  PS as _BottomNavigationComponent,
  OS as _BottomNavigationItemComponent,
  VS as _BreadcrumbComponent,
  MS as _BreadcrumbsComponent,
  kS as _ButtonComponent,
  BS as _ButtonGroupComponent,
  ES as _CardComponent,
  IS as _CellComponent,
  DS as _CheckboxComponent,
  zS as _CheckboxGroupComponent,
  AS as _ChipComponent,
  LS as _ColComponent,
  RS as _CollapseComponent,
  US as _CollapseItemComponent,
  dS as _ContextComponent,
  HS as _CountdownComponent,
  FS as _CounterComponent,
  YS as _DatePickerComponent,
  jS as _DialogComponent,
  WS as _DividerComponent,
  qS as _EllipsisComponent,
  XS as _FabComponent,
  KS as _FormComponent,
  NS as _FormDetailsComponent,
  SS as _HoverComponent,
  CS as _HoverOverlayComponent,
  cS as _IconComponent,
  ZS as _ImageComponent,
  _S as _ImagePreviewComponent,
  ek as _IndexAnchorComponent,
  nk as _IndexBarComponent,
  rk as _InputComponent,
  gS as _LazyComponent,
  ak as _LinkComponent,
  tk as _ListComponent,
  ok as _LoadingBarComponent,
  wS as _LoadingComponent,
  mS as _LocaleComponent,
  ik as _MenuComponent,
  lk as _OptionComponent,
  sk as _OverlayComponent,
  uk as _PaginationComponent,
  dk as _PaperComponent,
  vk as _PickerComponent,
  fS as _PopupComponent,
  fk as _ProgressComponent,
  ck as _PullRefreshComponent,
  mk as _RadioComponent,
  pk as _RadioGroupComponent,
  hk as _RateComponent,
  gk as _ResultComponent,
  vS as _RippleComponent,
  yk as _RowComponent,
  bk as _SelectComponent,
  wk as _SkeletonComponent,
  Ck as _SliderComponent,
  Sk as _SnackbarComponent,
  kk as _SpaceComponent,
  $k as _StepComponent,
  Tk as _StepsComponent,
  xS as _StickyComponent,
  Pk as _StyleProviderComponent,
  JS as _SwipeComponent,
  QS as _SwipeItemComponent,
  Ok as _SwitchComponent,
  Vk as _TabComponent,
  Mk as _TabItemComponent,
  Bk as _TableComponent,
  Ek as _TabsComponent,
  Ik as _TabsItemsComponent,
  Nk as _ThemesComponent,
  Dk as _TimePickerComponent,
  GS as _TooltipComponent,
  zk as _UploaderComponent,
  hf as actionSheetProps,
  $i as add,
  kf as appBarProps,
  Kf as avatarGroupProps,
  Yf as avatarProps,
  Tc as backTopProps,
  Ec as badgeProps,
  Fc as bottomNavigationItemProps,
  zc as bottomNavigationProps,
  Xc as breadcrumbProps,
  xc as breadcrumbsProps,
  yc as buttonProps,
  dm as cardProps,
  hm as cellProps,
  Nm as checkboxGroupProps,
  Tm as checkboxProps,
  Um as chipProps,
  Gm as colProps,
  np as collapseItemProps,
  Qm as collapseProps,
  op as countdownProps,
  nh as counterProps,
  Sh as datePickerProps,
  Ak as default,
  je as defaultLazyOptions,
  Uh as dialogProps,
  Wh as dividerProps,
  Ns as enUS,
  wm as formDetailsProps,
  gy as formProps,
  Es as iconProps,
  Rs as imageCache,
  Uy as imagePreviewProps,
  Sy as imageProps,
  Jy as indexAnchorProps,
  eb as indexBarProps,
  vb as inputProps,
  sS as install,
  wb as linkProps,
  $b as listProps,
  Mb as loadingBarProps,
  lr as loadingProps,
  Hb as menuProps,
  zs as merge,
  qb as optionProps,
  Jb as overlayProps,
  Ge as pack,
  Ds as packs,
  _b as paginationProps,
  a0 as paperProps,
  l0 as pickerProps,
  St as popupProps,
  p0 as progressProps,
  S0 as pullRefreshProps,
  I0 as radioGroupProps,
  T0 as radioProps,
  A0 as rateProps,
  H0 as resultProps,
  P1 as rowProps,
  E1 as selectProps,
  A1 as skeletonProps,
  F1 as sliderProps,
  rv as snackbarProps,
  vw as spaceProps,
  mw as stepProps,
  Sw as stepsProps,
  Ut as stickyProps,
  Tw as styleProviderProps,
  cd as swipeProps,
  Vw as switchProps,
  Uw as tabItemProps,
  Iw as tabProps,
  jw as tableProps,
  xw as tabsItemsProps,
  Zw as tabsProps,
  HC as timePickerProps,
  ry as tooltipProps,
  QC as uploaderProps,
  Ti as use,
  kr as useHoverOverlay,
  ki as useLocale,
  lS as version,
  Si as zhCN
};
