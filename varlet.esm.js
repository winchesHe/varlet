import { reactive as Ee, onMounted as ze, onUnmounted as pr, ref as E, onActivated as Zo, onDeactivated as Jo, createApp as xd, getCurrentInstance as Ya, provide as Ll, computed as U, inject as Rl, nextTick as Me, h as Ul, onBeforeUnmount as Bt, isVNode as It, watch as le, onBeforeMount as ev, defineComponent as x, createVNode as re, Teleport as Fa, Transition as De, withDirectives as Se, vShow as Ha, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Wa, normalizeClass as m, normalizeStyle as j, resolveComponent as ie, resolveDirective as Fe, withCtx as ve, createElementVNode as D, renderSlot as F, toDisplayString as ne, createElementBlock as T, Fragment as Pe, renderList as Ie, createCommentVNode as _, onUpdated as Nt, createTextVNode as be, pushScopeId as ka, popScopeId as $a, withModifiers as Vn, normalizeProps as Qo, guardReactiveProps as Yl, vModelText as nv, toRefs as rv, withKeys as $i, toRaw as Ti, TransitionGroup as av, Comment as tv } from "vue";
var Fl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, mC = Ee(Fl);
const dn = Ee(Fl), qe = (e) => typeof e == "string", oo = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", _o = (e) => Object.prototype.toString.call(e) === "[object Object]", ov = (e) => typeof e == "object" && e !== null, we = (e) => Array.isArray(e), iv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : oo(e) ? Number(e) : e, Dt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, xo = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, ei = () => typeof window < "u", Oi = (e) => [...new Set(e)], lv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), sv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Pi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Vi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), uv = (e) => {
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
      this.has(r) && Dt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, io = (e) => e, Ei = (e) => Math.pow(e, 3), Hl = (e) => e < 0.5 ? Ei(e * 2) / 2 : 1 - Ei((1 - e) * 2) / 2, At = (e, n) => e ?? n, Wl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ga = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Mi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function dv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Mi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Mi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function vv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Bi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function zt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function ni(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function fv(e) {
  return lo.apply(this, arguments);
}
function lo() {
  return lo = dv(function* (e) {
    yield En();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: i
    } = window, l = a <= o && t >= 0, s = n <= i && r >= 0;
    return l && s;
  }), lo.apply(this, arguments);
}
function Qt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ta(e) {
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
function cv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ta(r), n.push(r);
  return n;
}
function jl(e, n) {
  if (qe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (ov(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Gl = (e) => qe(e) && e.endsWith("rem"), mv = (e) => qe(e) && e.endsWith("px") || xe(e), pv = (e) => qe(e) && e.endsWith("%"), ql = (e) => qe(e) && e.endsWith("vw"), Kl = (e) => qe(e) && e.endsWith("vh"), hv = (e) => qe(e) && e.startsWith("calc("), gv = (e) => qe(e) && e.startsWith("var("), Ne = (e) => {
  if (xe(e))
    return e;
  if (mv(e))
    return +e.replace("px", "");
  if (ql(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Kl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Gl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, he = (e) => {
  if (e != null)
    return pv(e) || ql(e) || Kl(e) || Gl(e) || hv(e) || gv(e) ? e : Ne(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = Wl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function yv(e) {
  var n = Wl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Lt(e) {
  On(() => {
    On(e);
  });
}
function En() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function bv() {
  return new Promise((e) => {
    On(e);
  });
}
function Qa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = zt(e), s = ni(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function Xl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + lv(a);
    return n[o] = t, n;
  }, {});
}
function wv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Cv = ["collect", "clear"];
function Ii(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ni(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ii(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ii(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Sv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function kv(e) {
  var n = xd(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function ja(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Ul(e, wt({}, n, r));
    }
  }, {
    unmount: t
  } = kv(a);
  return {
    unmountInstance: t
  };
}
function $v(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      It(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function vn(e) {
  var n = Ee([]), r = Ya(), a = () => {
    var l = $v(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Dt(n, l);
  };
  Ll(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var i = U(() => n.length);
  return {
    length: i
  };
}
function fn(e) {
  if (!Zl(e))
    return {
      index: null
    };
  var n = Rl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Ya();
  ze(() => {
    Me().then(() => r(o));
  }), pr(() => {
    Me().then(() => a(o));
  });
  var i = U(() => t.indexOf(o));
  return {
    index: i
  };
}
function on(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Dt(n, o);
  }, t = (o) => {
    Ll(e, wt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function ln(e) {
  if (!Zl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Rl(e), {
    collect: r,
    clear: a
  } = n, t = Sv(n, Cv), o = (i) => {
    ze(() => r(i)), Bt(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Zl(e) {
  var n = Ya();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Ni(function* (o, i, l) {
      if (!we(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(i, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(i, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Ni(function* (o, i, l, s, u) {
      o.includes(i) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(i, l, s, u, d) {
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
function Tv(e) {
  ze(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), pr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function ri() {
  var e = E(!1);
  return Zo(() => {
    e.value = !1;
  }), Jo(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return i.map((s) => {
      if (we(s)) {
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
  if (we(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
var {
  n: Jl
} = ee("ripple"), Di = 250;
function Ov(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Pv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, i = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, l = i * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - i * 2) / 2, v = (o - i * 2) / 2, f = s - i, c = u - i;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: l
  };
}
function Ql(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = Pv(this, e), s = document.createElement("div");
      s.classList.add(Jl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Ov(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function so() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Jl());
    if (r.length) {
      var a = r[r.length - 1], t = Di - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Di);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function _l() {
  var e = this._ripple;
  wv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Vv(e, n) {
  var r, a, t;
  e._ripple = Ct({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : dn.touchmoveForbid,
    removeRipple: so.bind(e)
  }), e.addEventListener("touchstart", Ql, {
    passive: !0
  }), e.addEventListener("touchmove", _l, {
    passive: !0
  }), e.addEventListener("dragstart", so, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Ev(e) {
  e.removeEventListener("touchstart", Ql), e.removeEventListener("touchmove", _l), e.removeEventListener("dragstart", so), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Mv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : dn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Ct({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var xl = {
  mounted: Vv,
  unmounted: Ev,
  updated: Mv,
  install(e) {
    e.directive("ripple", this);
  }
}, pC = xl;
const Ae = xl;
function Bv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var tt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Bv
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  // internal for Dialog
  onRouteChange: Y()
};
function es() {
  var e = Object.keys(dn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function lt(e) {
  dn.locks[e] = 1, es();
}
function st(e) {
  delete dn.locks[e], es();
}
function Rt(e, n) {
  var {
    uid: r
  } = Ya();
  n && le(n, (a) => {
    a === !1 ? st(r) : a === !0 && e() === !0 && lt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? lt(r) : st(r));
  }), ev(() => {
    n && n() === !1 || e() === !0 && lt(r);
  }), pr(() => {
    n && n() === !1 || e() === !0 && st(r);
  }), Zo(() => {
    n && n() === !1 || e() === !0 && lt(r);
  }), Jo(() => {
    n && n() === !1 || e() === !0 && st(r);
  });
}
function ot(e, n) {
  var r = E(dn.zIndex);
  return le(e, (a) => {
    a && (dn.zIndex += n, r.value = dn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, uo.apply(this, arguments);
}
function Iv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var {
  n: In,
  classes: _t
} = ee("popup");
const hn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: tt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ot(() => e.show, 3), {
      disabled: o
    } = ri(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Rt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Tv(() => $(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: _t(In("overlay"), d),
        style: uo({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: _t(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: g,
        position: w
      } = e;
      return re(De, {
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: _t(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(De, {
          name: g || In("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Ha, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Fa, {
          to: d,
          disabled: o.value
        }, Iv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
hn.install = function(e) {
  e.component(hn.name, hn);
};
var hC = hn, ns = {
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
  onClick: Y()
};
function Ai(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ai(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ai(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Dv,
  classes: Av
} = ee("icon");
function zv(e, n) {
  return h(), me(
    Wa(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: j({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
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
var rs = x({
  name: "VarIcon",
  props: ns,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = Nv(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || z(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, z(l));
      });
      return function(i, l) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: Dv,
      classes: Av,
      nextName: n,
      shrinking: r,
      isURL: iv,
      toNumber: z,
      toSizeUnit: he
    };
  }
});
rs.render = zv;
const $e = rs;
$e.install = function(e) {
  e.component($e.name, $e);
};
var gC = $e;
function vo() {
  return vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vo.apply(this, arguments);
}
var Lv = vo({
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
  onSelect: Y(),
  "onUpdate:show": Y()
}, Xe(tt, [
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
const ai = {
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
}, as = {
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
function fo() {
  return fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fo.apply(this, arguments);
}
function ti() {
  var e = {}, n = E({}), r = (o, i) => {
    i.lang = o, e[o] = i;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, i) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = fo({}, e[o], i), a(o);
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
  packs: ts,
  pack: We,
  add: oi,
  use: ii,
  merge: os
} = ti();
oi("zh-CN", ai);
ii("zh-CN");
var yC = {
  zhCN: ai,
  enUS: as,
  packs: ts,
  pack: We,
  add: oi,
  use: ii,
  merge: os,
  useLocale: ti
};
const co = {
  zhCN: ai,
  enUS: as,
  packs: ts,
  pack: We,
  add: oi,
  use: ii,
  merge: os,
  useLocale: ti
};
var {
  n: Rv,
  classes: Uv
} = ee("action-sheet"), Yv = ["onClick"];
function Fv(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Fe("ripple");
  return h(), me(
    a,
    Ve({
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [F(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), F(e.$slots, "actions", {}, () => [(h(!0), T(
          Pe,
          null,
          Ie(e.actions, (o) => Se((h(), T(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: j({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (h(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : _("v-if", !0), D(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            Yv
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
var is = x({
  name: "VarActionSheet",
  directives: {
    Ripple: Ae
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Lv,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        $(i, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Rv,
      classes: Uv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: At,
      handleSelect: r
    };
  }
});
is.render = Fv;
const rr = is;
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mo.apply(this, arguments);
}
var Jn, li = {};
function Hv(e) {
  return e === void 0 && (e = {}), mo({}, li, e);
}
function ya(e) {
  return ei() ? new Promise((n) => {
    ya.close();
    var r = Ee(Hv(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = ja(rr, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), Jn === r && (Jn = null);
      },
      onRouteChange: () => {
        a(), Jn === r && (Jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function Wv(e) {
  li = e;
}
function jv() {
  li = {};
}
function Gv() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
ya.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ya.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ya, {
  setDefaultOptions: Wv,
  resetDefaultOptions: jv,
  close: Gv
});
var bC = rr;
function qv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Kv = {
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
    validator: qv
  },
  elevation: {
    type: Boolean,
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
  }
}, {
  n: Xv,
  classes: Zv
} = ee("app-bar");
function Jv(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: j(e.rootStyles)
    },
    [D(
      "div",
      {
        class: m(e.n("toolbar"))
      },
      [D(
        "div",
        {
          class: m(e.n("left"))
        },
        [F(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: j({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), D(
        "div",
        {
          class: m(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: j({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), F(e.$slots, "right")],
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
var ls = x({
  name: "VarAppBar",
  props: Kv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = U(() => {
      var {
        image: l,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (l != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + l + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return ze(o), Nt(o), {
      n: Xv,
      classes: Zv,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ls.render = Jv;
const br = ls;
br.install = function(e) {
  e.component(br.name, br);
};
var wC = br;
function zi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ut(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        zi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        zi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function po() {
  return po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, po.apply(this, arguments);
}
var Qv = "background-image", _v = "lazy-loading", xv = "lazy-error", Li = "lazy-attempt", ef = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ho = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Da = [], St = [], ss = uv(100), Ue = {
  loading: ho,
  error: ho,
  attempt: 3,
  throttleWait: 300,
  events: ef
}, si = xo(it, Ue.throttleWait);
function Yt(e, n) {
  e._lazy.arg === Qv ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function nf(e) {
  e._lazy.loading && Yt(e, e._lazy.loading), it();
}
function rf(e) {
  e._lazy.error && Yt(e, e._lazy.error), e._lazy.state = "error", di(e), it();
}
function us(e, n) {
  Yt(e, n), e._lazy.state = "success", di(e), it();
}
function af(e) {
  var n;
  St.includes(e) || (St.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, si, {
      passive: !0
    });
  }));
}
function tf() {
  St.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, si);
    });
  }), St.length = 0;
}
function of(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(_v)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(xv)) != null ? a : Ue.error,
    attempt: e.getAttribute(Li) ? Number(e.getAttribute(Li)) : Ue.attempt
  };
  e._lazy = po({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Yt(e, ho), $(Ue.filter, e._lazy);
}
function lf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ss.add(n), us(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? rf(e) : ds(e);
  });
}
function ds(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ss.has(n)) {
      us(e, n), e._lazy.attemptLock = !1;
      return;
    }
    nf(e), lf(e, n);
  }
}
function ui(e) {
  return go.apply(this, arguments);
}
function go() {
  return go = Ut(function* (e) {
    (yield fv(e)) && ds(e);
  }), go.apply(this, arguments);
}
function it() {
  Da.forEach((e) => ui(e));
}
function sf(e) {
  return yo.apply(this, arguments);
}
function yo() {
  return yo = Ut(function* (e) {
    !Da.includes(e) && Da.push(e), cv(e).forEach(af), yield ui(e);
  }), yo.apply(this, arguments);
}
function di(e) {
  Dt(Da, e), Da.length === 0 && tf();
}
function uf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function vs(e, n) {
  return bo.apply(this, arguments);
}
function bo() {
  return bo = Ut(function* (e, n) {
    of(e, n), yield sf(e);
  }), bo.apply(this, arguments);
}
function df(e, n) {
  return wo.apply(this, arguments);
}
function wo() {
  return wo = Ut(function* (e, n) {
    if (!uf(e, n)) {
      Da.includes(e) && (yield ui(e));
      return;
    }
    yield vs(e, n);
  }), wo.apply(this, arguments);
}
function vf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = i;
}
var fs = {
  mounted: vs,
  unmounted: di,
  updated: df,
  install(e, n) {
    vf(n), si = xo(it, Ue.throttleWait), e.directive("lazy", this);
  }
}, CC = fs;
const _a = fs;
function ff(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var cs = (e) => ["mini", "small", "normal", "large"].includes(e);
function ms(e) {
  return cs(e) || xe(e) || qe(e);
}
var cf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: ms,
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
    validator: ff,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: mf,
  classes: pf
} = ee("avatar"), hf = ["src", "lazy-loading", "lazy-error"], gf = ["src"];
function yf(e, n) {
  var r = Fe("lazy");
  return h(), T(
    "div",
    {
      ref: "avatarElement",
      class: m(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: j({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), T(
      Pe,
      {
        key: 0
      },
      [e.lazy ? Se((h(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          src: e.src,
          style: j({
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
        hf
      )), [[r, e.src]]) : (h(), T(
        "img",
        {
          key: 1,
          class: m(e.n("image")),
          src: e.src,
          style: j({
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
        gf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: m(e.n("text")),
        style: j({
          scale: e.scale
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
var ps = x({
  name: "VarAvatar",
  directives: {
    Lazy: _a
  },
  props: cf,
  setup(e) {
    var n = E(null), r = E(null), a = E(1), t = () => {
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
    }, i = (s) => {
      $(e.onError, s);
    }, l = (s) => {
      $(e.onClick, s);
    };
    return ze(t), Nt(t), {
      internalSizeValidator: cs,
      sizeValidator: ms,
      toSizeUnit: he,
      n: mf,
      classes: pf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
ps.render = yf;
const wr = ps;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var SC = wr, bf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: wf,
  classes: Cf
} = ee("avatar-group");
function Sf(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: j(e.rootStyles)
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var hs = x({
  name: "VarAvatarGroup",
  props: bf,
  setup(e) {
    var n = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: wf,
      classes: Cf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
hs.render = Sf;
const Cr = hs;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var kC = Cr;
function kf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function $f(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: kf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: $f
  },
  // loading颜色
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
  n: Tf,
  classes: Of
} = ee("loading"), Pf = (e) => (ka(""), e = e(), $a(), e), Vf = /* @__PURE__ */ Pf(() => /* @__PURE__ */ D(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ D("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Ef = [Vf];
function Mf(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (h(), T(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [D(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: j({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Ef,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (h(!0), T(
        Pe,
        null,
        Ie(e.loadingTypeDict, (r, a) => (h(), T(
          Pe,
          {
            key: a
          },
          [e.type === a ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), T(
              Pe,
              null,
              Ie(r, (t) => (h(), T(
                "div",
                {
                  key: t + a,
                  style: j({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
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
          )) : _("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (h(), T(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: j({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [be(
          ne(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var gs = x({
  name: "VarLoading",
  props: xn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = U(() => $(r.default) ? e.loading : !0);
    return {
      n: Tf,
      classes: Of,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
gs.render = Mf;
const $n = gs;
$n.install = function(e) {
  e.component($n.name, $n);
};
var $C = $n;
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Co.apply(this, arguments);
}
function Bf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function If(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Nf(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Df = {
  type: {
    type: String,
    validator: Bf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Nf
  },
  size: {
    type: String,
    validator: If
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
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingColor: Co({}, Xe(xn, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, ys = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), bs = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function Af() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(ys), {
    length: r
  } = vn(bs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function zf() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(ys), {
    index: r
  } = fn(bs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Lf,
  classes: Rf
} = ee("button"), Uf = ["type", "disabled"];
function Yf(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return Se((h(), T(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: j({
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
    [e.loading || e.pending ? (h(), me(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : _("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    Uf
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var ws = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ae
  },
  props: Df,
  setup(e) {
    var n = E(!1), {
      buttonGroup: r
    } = zf(), a = U(() => {
      if (!r)
        return {
          elevation: 2,
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      var {
        type: l,
        size: s,
        color: u,
        textColor: d,
        mode: v
      } = r;
      return {
        elevation: 0,
        type: e.type != null ? e.type : l.value,
        size: e.size != null ? e.size : s.value,
        color: e.color != null ? e.color : u.value,
        textColor: e.textColor != null ? e.textColor : d.value,
        text: v.value !== "normal",
        outline: v.value === "outline"
      };
    }), t = (l) => {
      e.autoLoading && (n.value = !0, l = we(l) ? l : [l], Promise.all(l).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, o = (l) => {
      var {
        loading: s,
        disabled: u,
        onClick: d
      } = e;
      !d || s || u || n.value || t($(d, l));
    }, i = (l) => {
      var {
        loading: s,
        disabled: u,
        onTouchstart: d
      } = e;
      !d || s || u || n.value || t($(d, l));
    };
    return {
      n: Lf,
      classes: Rf,
      pending: n,
      states: a,
      handleClick: o,
      handleTouchstart: i
    };
  }
});
ws.render = Yf;
const en = ws;
en.install = function(e) {
  e.component(en.name, en);
};
var TC = en, Ff = {
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
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: Y()
}, {
  n: Hf,
  classes: Wf
} = ee("back-top");
function jf(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), me(
    Fa,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Vn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [F(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [re(r, {
          name: "chevron-up"
        })]),
        _: 1
        /* STABLE */
      })])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var Cs = x({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ff,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      $(e.onClick, s);
      var u = ni(t);
      Qa(t, {
        left: u,
        duration: e.duration,
        animation: Hl
      });
    }, i = () => {
      n.value = zt(t) >= Ne(e.visibilityHeight);
    }, l = xo(i, 200);
    return ze(() => {
      t = e.target ? jl(e.target, "BackTop") : Ta(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Bt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: Hf,
      classes: Wf,
      click: o
    };
  }
});
Cs.render = jf;
const Sr = Cs;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var OC = Sr;
function Gf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qf(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Kf = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: Gf
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: !1
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: !1
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: "right-top",
    validator: qf
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: jn,
  classes: Xf
} = ee("badge"), Zf = {
  key: 1
};
function Jf(e, n) {
  var r = ie("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [Se(D(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (h(), T(
            "span",
            Zf,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ha, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ss = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Kf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = U(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && jn("position") + " " + jn("--" + l), v = s ? jn("dot") : null, f = o(), c = u ? jn("icon") : null;
      return [jn("--" + i), d, v, f, c];
    }), t = U(() => {
      var {
        dot: i,
        value: l,
        maxValue: s
      } = e;
      return i ? "" : l !== void 0 && s !== void 0 && z(l) > s ? s + "+" : l;
    }), o = () => {
      var {
        position: i,
        dot: l
      } = e;
      if (l) {
        if (i.includes("right"))
          return jn("dot--right");
        if (i.includes("left"))
          return jn("dot--left");
      }
    };
    return {
      n: jn,
      classes: Xf,
      values: t,
      contentClass: a
    };
  }
});
Ss.render = Jf;
const ar = Ss;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var PC = ar, Qf = {
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
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, ks = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), $s = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function _f() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(ks), {
    length: r
  } = vn($s);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, So.apply(this, arguments);
}
var {
  n: xf,
  classes: ec
} = ee("bottom-navigation"), {
  n: Ft
} = ee("bottom-navigation-item"), Ri = Ft("--right-half-space"), Ui = Ft("--left-half-space"), Yi = Ft("--right-space"), nc = {
  type: "primary"
};
function rc(e, n) {
  var r = ie("var-button");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: j("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (h(), me(
      r,
      Ve({
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Ts = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: Qf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = U(() => e.active), o = U(() => e.activeColor), i = U(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = _f(), v = () => {
      s.value === 0 || f() || c() || g();
    }, f = () => u.find((M) => {
      var {
        name: B
      } = M;
      return t.value === B.value;
    }), c = () => u.find((M) => {
      var {
        index: B
      } = M;
      return t.value === B.value;
    }), g = () => {
      xe(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, w = (M) => {
      t.value !== M && (e.onBeforeChange ? y(M) : O(M));
    }, y = (M) => {
      var B = $(e.onBeforeChange, M);
      B = we(B) ? B : [B], Promise.all(B).then((I) => {
        I.some((p) => !p) || O(M);
      });
    }, O = (M) => {
      $(e["onUpdate:active"], M), $(e.onChange, M);
    }, P = () => {
      var M = V();
      M.forEach((B) => {
        B.classList.remove(Ri, Ui, Yi);
      });
    }, b = (M) => {
      var B = V(), I = B.length, p = M % 2 === 0;
      B.forEach((S, L) => {
        C(p, S, L, I);
      });
    }, C = (M, B, I, p) => {
      var S = I === p - 1;
      if (!M && S) {
        B.classList.add(Yi);
        return;
      }
      var L = I === p / 2 - 1, Q = I === p / 2;
      L ? B.classList.add(Ri) : Q && B.classList.add(Ui);
    }, V = () => Array.from(a.value.querySelectorAll("." + Ft())), k = () => {
      $(e.onFabClick);
    }, A = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: w
    };
    return d(A), le(() => s.value, v), le(() => e.fabProps, (M) => {
      l.value = So({}, nc, M);
    }, {
      immediate: !0,
      deep: !0
    }), ze(() => {
      r.fab && b(s.value);
    }), Nt(() => {
      P(), r.fab && b(s.value);
    }), {
      n: xf,
      classes: ec,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
Ts.render = rc;
const kr = Ts;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var VC = kr, ac = {
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
  onClick: Y()
};
function tc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(ks), {
    index: r
  } = fn($s);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: oc,
  classes: ic
} = ee("bottom-navigation-item"), lc = {
  type: "danger",
  dot: !0
};
function sc(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Fe("ripple");
  return Se((h(), T(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: j({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : _("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : _("v-if", !0), D(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (h(), T(
        Pe,
        {
          key: 0
        },
        [be(
          ne(e.label),
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
var Os = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: ac,
  setup(e) {
    var n = U(() => e.name), r = U(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = tc(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, g = (c = n.value) != null ? c : t.value;
      $(e.onClick, g), $(o.onToggle, g);
    };
    return i(d), le(() => r.value, (c) => {
      a.value = c === !0 ? lc : r.value;
    }, {
      immediate: !0
    }), {
      n: oc,
      classes: ic,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Os.render = sc;
const $r = Os;
$r.install = function(e) {
  e.component($r.name, $r);
};
var EC = $r, uc = {
  separator: {
    type: String
  },
  onClick: Y()
}, Ps = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Vs = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function dc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Ps), {
    length: r
  } = vn(Vs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function vc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Ps), {
    index: r
  } = fn(Vs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: fc,
  classes: cc
} = ee("breadcrumb");
function mc(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : F(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [D(
        "div",
        {
          class: m(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Es = x({
  name: "VarBreadcrumb",
  props: uc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = vc(), t = U(() => n.value === r.length.value - 1), o = U(() => r.separator.value), i = (l) => {
      t.value || $(e.onClick, l);
    };
    return a(null), {
      n: fc,
      classes: cc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
Es.render = mc;
const Tr = Es;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var MC = Tr, pc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: hc
} = ee("breadcrumbs");
function gc(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ms = x({
  name: "VarBreadcrumbs",
  props: pc,
  setup(e) {
    var n = U(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = dc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: hc
    };
  }
});
Ms.render = gc;
const Or = Ms;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var BC = Or;
function yc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function wc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Cc = {
  type: {
    type: String,
    default: "default",
    validator: yc
  },
  size: {
    type: String,
    default: "normal",
    validator: bc
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
    validator: wc
  },
  elevation: {
    type: [Number, String],
    default: 2
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Sc,
  classes: kc
} = ee("button-group");
function $c(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Bs = x({
  name: "VarButtonGroup",
  props: Cc,
  setup(e) {
    var {
      bindButtons: n
    } = Af(), r = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return n(r), {
      n: Sc,
      classes: kc
    };
  }
});
Bs.render = $c;
const Pr = Bs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var IC = Pr;
function Tc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Oc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Tc,
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
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  "onUpdate:floating": Y()
};
function Fi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Fi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Fi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Pc,
  classes: Vc
} = ee("card"), Ec = 500, Mc = ["src", "alt"];
function Bc(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: j({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        ref: "cardFloater",
        class: m(e.n("floater")),
        style: j({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [F(e.$slots, "image", {}, () => [e.src ? (h(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: j({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Mc
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: j({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [F(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: j({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [F(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Vn(e.close, ["stop"])
          },
          {
            default: ve(() => [re(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), D(
      "div",
      {
        class: m(e.n("holder")),
        style: j({
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
var Is = x({
  name: "VarCard",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarButton: en
  },
  props: Oc,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = U(() => e.layout === "row"), g = E(!1), w = E(!1), {
      zIndex: y
    } = ot(() => e.floating, 1);
    Rt(() => e.floating, () => !c.value);
    var O = "auto", P = "auto", b = null, C = E(null), V = /* @__PURE__ */ function() {
      var B = Hi(function* () {
        clearTimeout(C.value), clearTimeout(b), C.value = null, C.value = setTimeout(/* @__PURE__ */ Hi(function* () {
          var {
            width: I,
            height: p,
            left: S,
            top: L
          } = n.value.getBoundingClientRect();
          a.value = he(I), t.value = he(p), o.value = a.value, i.value = t.value, l.value = he(L), s.value = he(S), u.value = "fixed", O = l.value, P = s.value, g.value = !0, yield En(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? Ec : 0);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(b), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = O, s.value = P, v.value = "0px", f.value = "0", g.value = !1, b = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", O = "auto", P = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      $(e["onUpdate:floating"], !1);
    }, M = (B) => {
      $(e.onClick, B);
    };
    return le(() => e.floating, (B) => {
      c.value || Me(() => {
        B ? V() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Pc,
      classes: Vc,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: y,
      isRow: c,
      close: A,
      showFloatingButtons: g,
      floated: w,
      handleClick: M
    };
  }
});
Is.render = Bc;
const Vr = Is;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var NC = Vr, Ic = {
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
  onClick: Y
}, {
  n: Nc,
  classes: Dc
} = ee("cell");
function Ac(e, n) {
  var r = ie("var-icon"), a = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: j(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), e.iconClass))
      },
      [re(
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
    )) : _("v-if", !0)]), D(
      "div",
      {
        class: m(e.n("content"))
      },
      [F(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Ns = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: Ic,
  setup(e) {
    var n = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: Nc,
      classes: Dc,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Ns.render = Ac;
const tr = Ns;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var DC = tr, zc = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Lc
} = ee("form-details"), Rc = {
  key: 0
}, Uc = {
  key: 0
};
function Yc(e, n) {
  return h(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [D(
          "div",
          {
            class: m(e.n("error-message"))
          },
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                Rc,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), D(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [re(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                Uc,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var Ds = x({
  name: "VarFormDetails",
  props: zc,
  setup: () => ({
    n: Lc
  })
});
Ds.render = Yc;
const je = Ds;
je.install = function(e) {
  e.component(je.name, je);
};
var AC = je, Fc = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, As = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), zs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Hc() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(As), {
    length: r
  } = vn(zs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Wc() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(As), {
    index: r
  } = fn(zs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}
var Ls = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Ls), r = Ya(), a = e ? (t) => {
    e(ko({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function jc() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Ls);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Gc,
  classes: qc
} = ee("checkbox");
function Kc(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [Se((h(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: j({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), D(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), re(
      a,
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
var Rs = x({
  name: "VarCheckbox",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: Fc,
  setup(e) {
    var n = E(!1), r = U(() => n.value === e.checkedValue), a = U(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = Wc(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (k) => {
      Me(() => {
        var {
          validateTrigger: A,
          rules: M,
          modelValue: B
        } = e;
        d(A, k, M, B);
      });
    }, g = (k) => {
      n.value = k;
      var {
        checkedValue: A,
        onChange: M
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(M, n.value), c("onChange"), k === A ? o == null || o.onChecked(A) : o == null || o.onUnchecked(A);
    }, w = (k) => {
      var {
        disabled: A,
        readonly: M,
        checkedValue: B,
        uncheckedValue: I,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || A) && ($(p, k), !(l != null && l.readonly.value || M))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || g(r.value ? I : B);
      }
    }, y = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: M
      } = e;
      n.value = k.includes(A) ? A : M;
    }, O = () => {
      t.value = !1;
    }, P = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, b = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: M
      } = e, B = ![A, M].includes(k);
      B && (k = r.value ? M : A), g(k);
    }, C = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var V = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: C,
      resetValidation: f,
      reset: P,
      resetWithAnimation: O
    };
    return $(i, V), $(s, V), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Gc,
      classes: qc,
      handleClick: w,
      toggle: b,
      reset: P,
      validate: C,
      resetValidation: f
    };
  }
});
Rs.render = Kc;
const or = Rs;
or.install = function(e) {
  e.component(or.name, or);
};
var zC = or;
function Xc(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Zc = {
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
    validator: Xc
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Jc,
  classes: Qc
} = ee("checkbox-group");
function _c(e, n) {
  var r = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
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
var Us = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: Zc,
  setup(e) {
    var n = U(() => e.max), r = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Hc(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = U(() => l.value), f = (A) => {
      Me(() => {
        var {
          validateTrigger: M,
          rules: B,
          modelValue: I
        } = e;
        s(M, A, B, I);
      });
    }, c = (A) => {
      $(e["onUpdate:modelValue"], A), $(e.onChange, A), f("onChange");
    }, g = (A) => {
      var {
        modelValue: M
      } = e;
      M.includes(A) || c([...M, A]);
    }, w = (A) => {
      var {
        modelValue: M
      } = e;
      M.includes(A) && c(M.filter((B) => B !== A));
    }, y = () => t.forEach((A) => {
      var {
        sync: M
      } = A;
      return M(e.modelValue);
    }), O = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, P = () => {
      var A = t.map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), M = Oi(A);
      return O(), $(e["onUpdate:modelValue"], M), M;
    }, b = () => {
      var A = t.filter((B) => {
        var {
          checked: I
        } = B;
        return !I.value;
      }).map((B) => {
        var {
          checkedValue: I
        } = B;
        return I.value;
      }), M = Oi(A);
      return O(), $(e["onUpdate:modelValue"], M), M;
    }, C = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, V = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, y, {
      deep: !0
    }), le(() => a.value, y);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: w,
      validate: V,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(k), $(i, k), {
      errorMessage: l,
      n: Jc,
      classes: Qc,
      checkAll: P,
      inverseAll: b,
      reset: C,
      validate: V,
      resetValidation: d
    };
  }
});
Us.render = _c;
const Er = Us;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var LC = Er;
function xc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function em(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nm = {
  type: {
    type: String,
    default: "default",
    validator: xc
  },
  size: {
    type: String,
    default: "normal",
    validator: em
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(ns, "name"),
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
  onClose: Y()
}, {
  n: Gn,
  classes: rm
} = ee("chip");
function am(e, n) {
  var r = ie("var-icon");
  return h(), me(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [D(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [F(e.$slots, "left"), D(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        ), F(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [re(
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
        )) : _("v-if", !0)],
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
var Ys = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: nm,
  setup(e) {
    var n = U(() => {
      var {
        plain: t,
        textColor: o,
        color: i
      } = e;
      return t ? {
        color: o || i,
        borderColor: i
      } : {
        color: o,
        background: i
      };
    }), r = U(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Gn(o ? "$--flex" : "$--inline-flex"), d = l ? Gn("plain") + " " + Gn("plain-" + i) : Gn("--" + i), v = s ? Gn("--round") : null;
      return [Gn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: Gn,
      classes: rm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Ys.render = am;
const ir = Ys;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var RC = ir;
function tm(e) {
  return ["row", "column"].includes(e);
}
var om = {
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
    validator: tm
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
  onClick: Y()
}, Fs = Symbol("ROW_BIND_COL_KEY"), Hs = Symbol("ROW_COUNT_COL_KEY");
function im() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Fs), {
    length: r
  } = vn(Hs);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function lm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Fs), {
    index: r
  } = fn(Hs);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: ut,
  classes: sm
} = ee("col");
function um(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: j({
        flexDirection: e.direction,
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
var Ws = x({
  name: "VarCol",
  props: om,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = U(() => z(e.span)), a = U(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = lm(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (_o(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(ut("--span-" + u + "-" + c)), f && v.push(ut("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(ut("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, i), {
      n: ut,
      classes: sm,
      padding: n,
      toNumber: z,
      toSizeUnit: he,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s
    };
  }
});
Ws.render = um;
const Mr = Ws;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var UC = Mr, js = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Gs = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function dm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(js), {
    length: r
  } = vn(Gs);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var vm = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: fm
} = ee("collapse");
function cm(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var qs = x({
  name: "VarCollapse",
  props: vm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = dm(), t = U(() => e.modelValue), o = U(() => e.offset), i = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, g) => i() ? g ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((w) => w !== c) : null, s = (c, g) => {
      var w = l(c, g);
      $(e["onUpdate:modelValue"], w), $(e.onChange, w);
    }, u = () => {
      if (e.accordion)
        return r.find((g) => {
          var {
            name: w
          } = g;
          return e.modelValue === w.value;
        });
      var c = r.filter((g) => {
        var {
          name: w
        } = g;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: g,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue === g.value;
    }) : r.filter((c) => {
      var {
        index: g,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue.includes(g.value);
    }), v = () => {
      if (i()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((g) => {
          var w = e.accordion ? c === g : c.includes(g);
          g.init(e.accordion, w);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Me().then(v)), le(() => e.modelValue, () => Me().then(v)), {
      n: fm
    };
  }
});
qs.render = cm;
const Br = qs;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var YC = Br;
function mm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(js), {
    index: r
  } = fn(Gs);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var pm = {
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
  n: hm,
  classes: gm
} = ee("collapse-item");
function ym(e, n) {
  var r = ie("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [D(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [F(e.$slots, "title", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [F(e.$slots, "icon", {}, () => [re(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
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
    ), Se(D(
      "div",
      {
        class: m(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [D(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Ha, e.show]])],
    2
    /* CLASS */
  );
}
var Ks = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: pm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = mm(), t = !0, o = E(null), i = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = U(() => e.name), f = (b, C) => {
      s.value === void 0 || b && we(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (b) => {
      e.disabled || b || d(e.name || n.value, !l.value);
    }, g = () => {
      o.value && (o.value.style.height = "", i.value = !0, Me(() => {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = b + "px", t && Lt(() => {
            t && O();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, y = () => {
      if (o.value) {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = b + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, O = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), le(l, (b) => {
      b ? g() : y();
    }), {
      n: hm,
      start: w,
      classes: gm,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: O
    };
  }
});
Ks.render = ym;
const Ir = Ks;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var FC = Ir, bm = {
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
  onEnd: Y(),
  onChange: Y()
}, {
  n: wm
} = ee("countdown"), $o = 1e3, To = 60 * $o, Oo = 60 * To, Wi = 24 * Oo;
function Cm(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default", Qo(Yl(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Xs = x({
  name: "VarCountdown",
  props: bm,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), o = E(0), i = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, g) => {
      var w = Object.values(g), y = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (y.forEach((b, C) => {
        c.includes(b) ? c = c.replace(b, ga("" + w[C], 2, "0")) : w[C + 1] += w[C] * O[C];
      }), c.includes("S")) {
        var P = ga("" + w[w.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", P) : c.includes("SS") ? c = c.replace("SS", P.slice(0, 2)) : c = c.replace("S", P.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var g = Math.floor(c / Wi), w = Math.floor(c % Wi / Oo), y = Math.floor(c % Oo / To), O = Math.floor(c % To / $o), P = Math.floor(c % $o), b = {
        days: g,
        hours: w,
        minutes: y,
        seconds: O,
        milliseconds: P
      };
      i.value = b, $(e.onChange, i.value), a.value = l(e.format, b);
    }, u = () => {
      var {
        time: c,
        onEnd: g,
        autoStart: w
      } = e, y = performance.now();
      n.value || (n.value = y + z(c));
      var O = n.value - y;
      if (O < 0 && (O = 0), o.value = O, s(O), O === 0) {
        $(g);
        return;
      }
      (w || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, yv(t.value), u();
    };
    return le(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: wm,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Xs.render = Cm;
const Nr = Xs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var HC = Nr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Va = 9e15, hr = 1e9, Po = "0123456789abcdef", kt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", $t = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Vo = {
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
  minE: -Va,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Va,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Zs, Dn, fe = !0, Ht = "[DecimalError] ", cr = Ht + "Invalid argument: ", Js = Ht + "Precision limit exceeded", Qs = Ht + "crypto unavailable", _s = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, Sm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, km = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, $m = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, xs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Tm = 9007199254740991, Om = kt.length - 1, Eo = $t.length - 1, q = { toStringTag: _s };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
q.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(cr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, o = this, i = o.d, l = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = i.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Pm(a, tu(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Oe(u.plus(d).times(l), u.plus(s), i + 2, 1), Ge(l.d).slice(0, i) === (r = Ge(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Oe(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / jt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Aa(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Aa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / jt(5, e)), t = Aa(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Eo)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Eo)
      return i = kn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), fe = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function(e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function(e) {
  var n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
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
  if (fe = !1, l = v + c, i = er(u, l), a = n ? Tt(d, l + 10) : er(e, l), s = Oe(i, a, l, 1), xa(s.d, t = v, f))
    do
      if (l += 10, i = er(u, l), a = n ? Tt(d, l + 10) : er(e, l), s = Oe(i, a, l, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (xa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, g = c.constructor;
  if (e = new g(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new g(NaN) : c.d ? e.s = -e.s : e = new g(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(c);
    else
      return new g(s === 3 ? -0 : 0);
    return fe ? ue(e, l, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / de), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, i = f.length, v = a < i, v && (i = a), a = 0; a < i; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), i = u.length, a = f.length - i; a > 0; --a)
    u[i++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Tn - 1;
      --u[t], u[a] += Tn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Wt(u, r), fe ? ue(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return Mo(this);
};
q.naturalLogarithm = q.ln = function() {
  return er(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Wt(u, a), fe ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cr + e);
  return r.d ? (n = eu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Em(a, tu(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Ge(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(i, o, r + 2, 1)).times(0.5), Ge(o.d).slice(0, r) === (n = Ge(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + c[a] * f[t - a - 1] + n, o[t--] = l % Tn | 0, n = l / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Wt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return vi(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, hr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, g = c.d, w = c.constructor;
  if (!g)
    return new w(c);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), o = n.e = eu(g) - c.e - 1, i = o % de, n.d[0] = Ye(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new w(e), !l.isInt() || l.lt(u))
      throw Error(cr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new w(Ge(g)), d = w.precision, w.precision = o = g.length * de * 2; v = Oe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Oe(u, a, o, 1).minus(c).abs().cmp(Oe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return vi(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : tn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Oe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return vi(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ye(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Tm)
    return t = nu(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Ye(+l, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + Ge(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Mo(e.times(er(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), xa(t.d, a, o) && (n = a + 10, t = ue(Mo(e.times(er(l, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ge(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Kn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += Kn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(cr + e);
}
function xa(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, i;
}
function pt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Po.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Pm(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / jt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Aa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
  function e(a, t, o) {
    var i, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      i = a[s] * t + l, a[s] = i % o | 0, l = i / o | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, o, i) {
    var l, s;
    if (o != i)
      s = o > i ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, i) {
    for (var l = 0; o--; )
      a[o] -= l, l = a[o] < t[o] ? 1 : 0, a[o] = l * i + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, i, l, s) {
    var u, d, v, f, c, g, w, y, O, P, b, C, V, k, A, M, B, I, p, S, L = a.constructor, Q = a.s == t.s ? 1 : -1, H = a.d, R = t.d;
    if (!H || !H[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (H ? R && H[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !R ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), p = R.length, B = H.length, O = new L(Q), P = O.d = [], v = 0; R[v] == (H[v] || 0); v++)
      ;
    if (R[v] > (H[v] || 0) && d--, o == null ? (k = o = L.precision, i = L.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      P.push(1), g = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < B || f) && k--; v++)
          A = f * s + (H[v] || 0), P[v] = A / R | 0, f = A % R | 0;
        g = f || v < B;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), H = e(H, f, s), p = R.length, B = H.length), M = p, b = H.slice(0, p), C = b.length; C < p; )
          b[C++] = 0;
        S = R.slice(), S.unshift(0), I = R[0], R[1] >= s / 2 && ++I;
        do
          f = 0, u = n(R, b, p, C), u < 0 ? (V = b[0], p != C && (V = V * s + (b[1] || 0)), f = V / I | 0, f > 1 ? (f >= s && (f = s - 1), w = e(R, f, s), y = w.length, C = b.length, u = n(w, b, y, C), u == 1 && (f--, r(w, p < y ? S : R, y, s))) : (f == 0 && (u = f = 1), w = R.slice()), y = w.length, y < C && w.unshift(0), r(b, w, C, s), u == -1 && (C = b.length, u = n(R, b, p, C), u < 1 && (f++, r(b, p < C ? S : R, C, s))), C = b.length) : u === 0 && (f++, b = [0]), P[v++] = f, u && b[0] ? b[C++] = H[M] || 0 : (b = [H[M]], C = 1);
        while ((M++ < B || b[0] !== void 0) && k--);
        g = b[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      O.e = d, Zs = g;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      O.e = v + d * c - 1, ue(O, l ? o + O.e + 1 : o, i, g);
    }
    return O;
  };
}();
function ue(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (o = n - t, o < 0)
        o += de, i = n, d = v[f = 0], s = d / Ye(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, i = o - de + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / Ye(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Ye(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Ye(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ye(10, de - o), v[f] = i > 0 ? (d / Ye(10, t - i) % Ye(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Tn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Tn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Mn(e, n, r) {
  if (!e.isFinite())
    return au(e);
  var a, t = e.e, o = Ge(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - i) > 0 && (o += Kn(a))) : t >= i ? (o += Kn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Kn(a))), o;
}
function Wt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Tt(e, n, r) {
  if (n > Om)
    throw fe = !0, r && (e.precision = r), Error(Js);
  return ue(new e(kt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > Eo)
    throw Error(Js);
  return ue(new e($t), n, r, !0);
}
function eu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Kn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function nu(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Gi(o.d, i) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Gi(n.d, i);
  }
  return fe = !0, o;
}
function ji(e) {
  return e.d[e.d.length - 1] & 1;
}
function ru(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Mo(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Oe(o, r, s, 1)), Ge(l.d).slice(0, s) === Ge(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && xa(i.d, s - a, c, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = g, c, fe = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function er(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, g = 10, w = e, y = w.d, O = w.constructor, P = O.rounding, b = O.precision;
  if (w.s < 0 || !y || !y[0] || !w.e && y[0] == 1 && y.length == 1)
    return new O(y && !y[0] ? -1 / 0 : w.s != 1 ? NaN : y ? 0 : w);
  if (n == null ? (fe = !1, d = b) : d = n, O.precision = d += g, r = Ge(y), a = r.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = Ge(w.d), a = r.charAt(0), c++;
    o = w.e, a > 1 ? (w = new O("0." + r), o++) : w = new O(a + "." + r.slice(1));
  } else
    return u = Tt(O, d + 2, b).times(o + ""), w = er(new O(a + "." + r.slice(1)), d - g).plus(u), O.precision = b, n == null ? ue(w, b, P, fe = !0) : w;
  for (v = w, s = i = w = Oe(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Oe(i, new O(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Tt(O, d + 2, b).times(o + ""))), s = Oe(s, new O(c), d, 1), n == null)
        if (xa(s.d, d - g, P, l))
          O.precision = d += g, u = i = w = Oe(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = l = 1;
        else
          return ue(s, O.precision = b, P, fe = !0);
      else
        return O.precision = b, s;
    s = u, t += 2;
  }
}
function au(e) {
  return String(e.s * e.s / 0);
}
function Bo(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Vm(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), xs.test(n))
      return Bo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (km.test(n))
    r = 16, n = n.toLowerCase();
  else if (Sm.test(n))
    r = 2;
  else if ($m.test(n))
    r = 8;
  else
    throw Error(cr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = nu(a, new a(r), o, o * 2)), u = pt(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Wt(u, d), e.d = u, fe = !1, i && (e = Oe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : nr.pow(2, s))), fe = !0, e);
}
function Em(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Aa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / jt(5, r)), n = Aa(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Aa(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Oe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Oe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return fe = !0, i.d.length = d + 1, i;
}
function jt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function tu(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = ji(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = ji(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function vi(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, g = r !== void 0;
  if (g ? (tn(r, 1, hr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = au(e);
  else {
    for (d = Mn(e), i = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = pt(Mn(f), 10, t), f.e = f.d.length), v = pt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Zs), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += Po.charAt(v[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = pt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += Po.charAt(v[i]);
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
function Gi(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Mm(e) {
  return new this(e).abs();
}
function Bm(e) {
  return new this(e).acos();
}
function Im(e) {
  return new this(e).acosh();
}
function Nm(e, n) {
  return new this(e).plus(n);
}
function Dm(e) {
  return new this(e).asin();
}
function Am(e) {
  return new this(e).asinh();
}
function zm(e) {
  return new this(e).atan();
}
function Lm(e) {
  return new this(e).atanh();
}
function Rm(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function Um(e) {
  return new this(e).cbrt();
}
function Ym(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function Fm(e, n, r) {
  return new this(e).clamp(n, r);
}
function Hm(e) {
  if (!e || typeof e != "object")
    throw Error(Ht + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Va,
    0,
    "toExpPos",
    0,
    Va,
    "maxE",
    0,
    Va,
    "minE",
    -Va,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Vo[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(cr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Vo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Qs);
      else
        this[r] = !1;
    else
      throw Error(cr + r + ": " + a);
  return this;
}
function Wm(e) {
  return new this(e).cos();
}
function jm(e) {
  return new this(e).cosh();
}
function ou(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, qi(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, l = o; l >= 10; l /= 10)
          i++;
        fe ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Bo(u, o.toString());
    } else if (s !== "string")
      throw Error(cr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), xs.test(o) ? Bo(u, o) : Vm(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Hm, t.clone = ou, t.isDecimal = qi, t.abs = Mm, t.acos = Bm, t.acosh = Im, t.add = Nm, t.asin = Dm, t.asinh = Am, t.atan = zm, t.atanh = Lm, t.atan2 = Rm, t.cbrt = Um, t.ceil = Ym, t.clamp = Fm, t.cos = Wm, t.cosh = jm, t.div = Gm, t.exp = qm, t.floor = Km, t.hypot = Xm, t.ln = Zm, t.log = Jm, t.log10 = _m, t.log2 = Qm, t.max = xm, t.min = ep, t.mod = np, t.mul = rp, t.pow = ap, t.random = tp, t.round = op, t.sign = ip, t.sin = lp, t.sinh = sp, t.sqrt = up, t.sub = dp, t.sum = vp, t.tan = fp, t.tanh = cp, t.trunc = mp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Gm(e, n) {
  return new this(e).div(n);
}
function qm(e) {
  return new this(e).exp();
}
function Km(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Xm() {
  var e, n, r = new this(0);
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function qi(e) {
  return e instanceof nr || e && e.toStringTag === _s || !1;
}
function Zm(e) {
  return new this(e).ln();
}
function Jm(e, n) {
  return new this(e).log(n);
}
function Qm(e) {
  return new this(e).log(2);
}
function _m(e) {
  return new this(e).log(10);
}
function xm() {
  return ru(this, arguments, "lt");
}
function ep() {
  return ru(this, arguments, "gt");
}
function np(e, n) {
  return new this(e).mod(n);
}
function rp(e, n) {
  return new this(e).mul(n);
}
function ap(e, n) {
  return new this(e).pow(n);
}
function tp(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, hr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Qs);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= de, a && e && (t = Ye(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= de)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return i.e = r, i.d = l, i;
}
function op(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function ip(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function lp(e) {
  return new this(e).sin();
}
function sp(e) {
  return new this(e).sinh();
}
function up(e) {
  return new this(e).sqrt();
}
function dp(e, n) {
  return new this(e).sub(n);
}
function vp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function fp(e) {
  return new this(e).tan();
}
function cp(e) {
  return new this(e).tanh();
}
function mp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var nr = q.constructor = ou(Vo);
kt = new nr(kt);
$t = new nr($t);
var pp = {
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
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: hp,
  classes: gp
} = ee("counter"), Ki = 100, Xi = 600, yp = ["inputmode", "readonly", "disabled"];
function bp(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: j({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Se(D(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: j({
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
        yp
      ), [[nv, e.inputValue]]), Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: j({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
      /* FULL_PROPS */
    ), re(
      a,
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
var iu = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  inheritAttrs: !1,
  props: pp,
  setup(e) {
    var n = E(""), r, a, t, o, {
      bindForm: i,
      form: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), {
      readonly: f,
      disabled: c
    } = l ?? {}, g = () => d(e.rules, e.modelValue), w = (R) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: G,
          modelValue: K
        } = e;
        u(J, R, G, K);
      });
    }, y = () => {
      var {
        min: R
      } = e;
      $(e["onUpdate:modelValue"], R != null ? z(R) : 0), v();
    }, O = {
      reset: y,
      validate: g,
      resetValidation: v
    }, P = U(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && z(J) >= z(R);
    }), b = U(() => {
      var {
        min: R,
        modelValue: J
      } = e;
      return R != null && z(J) <= z(R);
    }), C = (R) => {
      var {
        decimalLength: J,
        max: G,
        min: K
      } = e, N = z(R);
      return G != null && N > z(G) && (N = z(G)), K != null && N < z(K) && (N = z(K)), R = String(N), J != null && (R = N.toFixed(z(J))), R;
    }, V = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: G
      } = e, {
        value: K
      } = R.target, N = C(K);
      J ? $(G, z(N), H) : Q(N), w("onInputChange");
    }, k = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: G,
        decrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: W,
        onDecrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || G || !K) && !b.value) {
        var oe = new nr(z(W)).minus(new nr(z(X))).toString(), ge = C(oe), pe = z(ge);
        $(Z, pe), N ? $(ae, pe, H) : (Q(ge), w("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: G,
        incrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: W,
        onIncrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || G || !K) && !P.value) {
        var oe = new nr(z(W)).plus(new nr(z(X))).toString(), ge = C(oe), pe = z(ge);
        $(Z, pe), N ? $(ae, pe, H) : (Q(ge), w("onIncrement"));
      }
    }, M = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (o = window.setTimeout(() => {
        L();
      }, Xi));
    }, B = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        S();
      }, Xi));
    }, I = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, S = () => {
      r = window.setTimeout(() => {
        A(), S();
      }, Ki);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Ki);
    }, Q = (R) => {
      n.value = R;
      var J = z(R);
      $(e["onUpdate:modelValue"], J);
    }, H = (R) => {
      Q(C(String(R))), w("onLazyChange");
    };
    return $(i, O), le(() => e.modelValue, (R) => {
      Q(C(String(R))), $(e.onChange, z(R));
    }), Q(C(String(e.modelValue))), {
      n: hp,
      classes: gp,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: b,
      validate: g,
      reset: y,
      resetValidation: v,
      handleChange: V,
      decrement: k,
      increment: A,
      pressDecrement: M,
      pressIncrement: B,
      releaseDecrement: I,
      releaseIncrement: p,
      toSizeUnit: he,
      toNumber: z
    };
  }
});
iu.render = bp;
const Dr = iu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var WC = Dr, lu = 60, su = lu * 60, uu = su * 24, wp = uu * 7, za = 1e3, xt = lu * za, Zi = su * za, Cp = uu * za, Sp = wp * za, fi = "millisecond", Ea = "second", Ma = "minute", Ba = "hour", Xn = "day", ht = "week", Sn = "month", du = "quarter", Zn = "year", Ia = "date", kp = "YYYY-MM-DDTHH:mm:ssZ", Ji = "Invalid Date", $p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Tp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Op = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Io = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Pp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Io(t, 2, "0") + ":" + Io(o, 2, "0");
}, Vp = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, Ep = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Mp = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: ht,
    d: Xn,
    D: Ia,
    h: Ba,
    m: Ma,
    s: Ea,
    ms: fi,
    Q: du
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Bp = function(n) {
  return n === void 0;
};
const Ip = {
  s: Io,
  z: Pp,
  m: Vp,
  a: Ep,
  p: Mp,
  u: Bp
};
var Xa = "en", Ar = {};
Ar[Xa] = Op;
var ci = function(n) {
  return n instanceof Gt;
}, Ot = function e(n, r, a) {
  var t;
  if (!n)
    return Xa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ar[o] && (t = o), r && (Ar[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Ar[l] = n, t = l;
  }
  return !a && t && (Xa = t), t || !a && Xa;
}, te = function(n, r) {
  if (ci(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Gt(a);
}, Np = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Ip;
Te.l = Ot;
Te.i = ci;
Te.w = Np;
var Dp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match($p);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, Gt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ot(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Dp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Ji;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(O, P) {
      var b = Te.w(o.$u ? Date.UTC(o.$y, P, O) : new Date(o.$y, P, O), o);
      return i ? b : b.endOf(Xn);
    }, u = function(O, P) {
      var b = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[O].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? b : C).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Zn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case ht: {
        var g = this.$locale().weekStart || 0, w = (d < g ? d + 7 : d) - g;
        return s(i ? f - w : f + (6 - w), v);
      }
      case Xn:
      case Ia:
        return u(c + "Hours", 0);
      case Ba:
        return u(c + "Minutes", 1);
      case Ma:
        return u(c + "Seconds", 2);
      case Ea:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = l + "Date", o[Ia] = l + "Date", o[Sn] = l + "Month", o[Zn] = l + "FullYear", o[Ba] = l + "Hours", o[Ma] = l + "Minutes", o[Ea] = l + "Seconds", o[fi] = l + "Milliseconds", o)[i], u = i === Xn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Zn) {
      var d = this.clone().set(Ia, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ia, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, i;
    a = Number(a);
    var l = Te.p(t), s = function(f) {
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (l === Sn)
      return this.set(Sn, this.$M + a);
    if (l === Zn)
      return this.set(Zn, this.$y + a);
    if (l === Xn)
      return s(1);
    if (l === ht)
      return s(7);
    var u = (i = {}, i[Ma] = xt, i[Ba] = Zi, i[Ea] = za, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ji;
    var i = a || kp, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, g = function(b, C, V, k) {
      return b && (b[C] || b(t, i)) || V[C].slice(0, k);
    }, w = function(b) {
      return Te.s(s % 12 || 12, b, "0");
    }, y = c || function(P, b, C) {
      var V = P < 12 ? "AM" : "PM";
      return C ? V.toLowerCase() : V;
    }, O = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Tp, function(P, b) {
      return b || O[P] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * xt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Zn] = v / 12, i[Sn] = v, i[du] = v / 3, i[ht] = (d - u) / Sp, i[Xn] = (d - u) / Cp, i[Ba] = d / Zi, i[Ma] = d / xt, i[Ea] = d / za, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Ar[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = Ot(a, t, !0);
    return i && (o.$L = i), o;
  }, n.clone = function() {
    return Te.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), vu = Gt.prototype;
te.prototype = vu;
[["$ms", fi], ["$s", Ea], ["$m", Ma], ["$H", Ba], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Ia]].forEach(function(e) {
  vu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Gt, te), e.$i = !0), te;
};
te.locale = Ot;
te.isDayjs = ci;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ar[Xa];
te.Ls = Ar;
te.p = {};
const fu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, cu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Ap(e) {
  return ["date", "month"].includes(e);
}
var gt = [{
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
}], Ka = [{
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
}], zp = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ap
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
    type: Boolean,
    default: !1
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
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Lp
} = ee("picker-header");
function Rp(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [re(
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
        default: ve(() => [re(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), D(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [re(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
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
    ), re(
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
        default: ve(() => [re(r, {
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
var mu = x({
  name: "PanelHeader",
  components: {
    VarButton: en,
    VarIcon: $e
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
    } = n, a = E(!1), t = E(0), o = U(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: Lp,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
mu.render = Rp;
const pu = mu;
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
te.extend(fu);
te.extend(cu);
var {
  n: dt,
  classes: Up
} = ee("month-picker"), {
  n: vt
} = ee("date-picker");
function Yp(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
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
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Pe,
            null,
            Ie(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, No({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  ne(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["onClick"]
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
var hu = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: pu
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
    } = n, [a, t] = e.current.split("-"), o = E(!1), i = E(0), l = E(null), s = Ee({
      left: !1,
      right: !1
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (P) => {
      var b, C;
      return (b = (C = We.value.datePickerMonthDict) == null ? void 0 : C[P].abbr) != null ? b : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: b
        },
        componentProps: {
          min: C,
          max: V
        }
      } = e, k = !0, A = !0, M = b + "-" + P;
      return V && (k = te(M).isSameOrBefore(te(V), "month")), C && (A = te(M).isSameOrAfter(te(C), "month")), k && A;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: b,
          chooseDays: C,
          chooseRangeMonth: V
        },
        componentProps: {
          type: k,
          range: A
        }
      } = e;
      if (A) {
        if (!V.length)
          return !1;
        var M = te(P).isSameOrBefore(te(V[1]), "month"), B = te(P).isSameOrAfter(te(V[0]), "month");
        return M && B;
      }
      return k === "month" ? b.includes(P) : C.some((I) => I.includes(P));
    }, g = (P) => {
      var {
        choose: {
          chooseMonth: b
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: V,
          color: k,
          multiple: A,
          range: M
        }
      } = e, B = C + "-" + P, I = () => M || A ? c(B) : (b == null ? void 0 : b.index) === P && u.value, p = () => f(P) ? V ? !V(B) : !1 : !0, S = p(), L = () => S ? !0 : M || A ? !c(B) : !u.value || (b == null ? void 0 : b.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (M || A || u.value) && S ? !0 : M || A ? !c(B) : u.value ? (b == null ? void 0 : b.index) !== t : !0 : !1, H = () => S ? "" : Q() ? k ?? "" : I() ? "" : vt() + "-color-cover", R = H().startsWith(vt());
      return {
        outline: Q(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : H(),
        [vt() + "-color-cover"]: R,
        class: Up(dt("button"), [S, dt("button--disabled")])
      };
    }, w = (P, b) => {
      var C = b.currentTarget;
      C.classList.contains(dt("button--disabled")) || r("choose-month", P);
    }, y = (P) => {
      o.value = P === "prev", i.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, O = (P) => {
      l.value.checkDate(P);
    };
    return le(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: b,
          max: C
        }
      } = e;
      C && (s.right = !te("" + (z(P) + 1)).isSameOrBefore(te(C), "year")), b && (s.left = !te("" + (z(P) - 1)).isSameOrAfter(te(b), "year"));
    }, {
      immediate: !0
    }), {
      n: dt,
      nDate: vt,
      pack: We,
      MONTH_LIST: gt,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: y
    };
  }
});
hu.render = Yp;
const Fp = hu;
var {
  n: Qi,
  classes: Hp
} = ee("year-picker"), Wp = ["onClick"];
function jp(e, n) {
  return h(), T(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), T(
      Pe,
      null,
      Ie(e.yearList, (r) => (h(), T(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: j({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        Wp
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var gu = x({
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
    } = n, a = U(() => {
      var o = [], {
        preview: i,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!i)
        return o;
      var u = [z(i) + 100, z(i) - 100];
      if (l) {
        var d = te(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), c = z(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ze(() => {
      var o = document.querySelector("." + Qi("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Qi,
      classes: Hp,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
gu.render = jp;
const Gp = gu;
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
te.extend(fu);
te.extend(cu);
var {
  n: Pa,
  classes: qp
} = ee("day-picker"), {
  n: ft
} = ee("date-picker");
function Kp(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
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
      ), re(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(h(!0), T(
              Pe,
              null,
              Ie(e.sortWeekList, (t) => (h(), T(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), D(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(h(!0), T(
              Pe,
              null,
              Ie(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Do({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: ve(() => [be(
                    ne(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["onClick"]
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
var yu = x({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: pu
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
    } = n, [a, t, o] = e.current.split("-"), i = E([]), l = E(!1), s = E(0), u = E(null), d = Ee({
      left: !1,
      right: !1
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var M;
      return e.choose.chooseYear === e.preview.previewYear && ((M = e.choose.chooseMonth) == null ? void 0 : M.index) === e.preview.previewMonth.index;
    }), c = U(() => {
      var M = Ka.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Ka : Ka.slice(M).concat(Ka.slice(0, M));
    }), g = (M) => {
      var B, I;
      return (B = (I = We.value.datePickerWeekDict) == null ? void 0 : I[M].abbr) != null ? B : "";
    }, w = (M) => M > 0 ? M : "", y = () => {
      var {
        preview: {
          previewMonth: M,
          previewYear: B
        }
      } = e, I = te(B + "-" + M.index).daysInMonth(), p = te(B + "-" + M.index + "-01").day(), S = c.value.findIndex((L) => L.index === "" + p);
      i.value = [...Array(S).fill(-1), ...Array.from(Array(I + 1).keys())].filter((L) => L);
    }, O = () => {
      var {
        preview: {
          previewYear: M,
          previewMonth: B
        },
        componentProps: {
          max: I,
          min: p
        }
      } = e;
      if (I) {
        var S = M + "-" + (z(B.index) + 1);
        d.right = !te(S).isSameOrBefore(te(I), "month");
      }
      if (p) {
        var L = M + "-" + (z(B.index) - 1);
        d.left = !te(L).isSameOrAfter(te(p), "month");
      }
    }, P = (M) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: I
        },
        componentProps: {
          min: p,
          max: S
        }
      } = e, L = !0, Q = !0, H = B + "-" + I.index + "-" + M;
      return S && (L = te(H).isSameOrBefore(te(S), "day")), p && (Q = te(H).isSameOrAfter(te(p), "day")), L && Q;
    }, b = (M) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: I
        },
        componentProps: {
          range: p
        }
      } = e;
      if (p) {
        if (!I.length)
          return !1;
        var S = te(M).isSameOrBefore(te(I[1]), "day"), L = te(M).isSameOrAfter(te(I[0]), "day");
        return S && L;
      }
      return B.includes(M);
    }, C = (M) => {
      if (M < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Pa("button")
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: I,
          previewMonth: p
        },
        componentProps: {
          allowedDates: S,
          color: L,
          multiple: Q,
          range: H
        }
      } = e, R = I + "-" + p.index + "-" + M, J = () => H || Q ? b(R) : z(B) === M && f.value, G = () => P(M) ? S ? !S(R) : !1 : !0, K = G(), N = () => K ? !0 : H || Q ? !b(R) : !f.value || z(B) !== M, X = () => v.value && z(o) === M && e.componentProps.showCurrent ? (H || Q || f.value) && K ? !0 : H || Q ? !b(R) : f.value ? B !== o : !0 : !1, W = () => K ? "" : X() ? L ?? "" : J() ? "" : ft() + "-color-cover", Z = W().startsWith(ft());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : W(),
        [ft() + "-color-cover"]: Z,
        class: qp(Pa("button"), Pa("button--usable"), [K, Pa("button--disabled")])
      };
    }, V = (M) => {
      l.value = M === "prev", s.value += M === "prev" ? -1 : 1, r("check-preview", "month", M);
    }, k = (M, B) => {
      var I = B.currentTarget;
      I.classList.contains(Pa("button--disabled")) || r("choose-day", M);
    }, A = (M) => {
      u.value.checkDate(M);
    };
    return ze(() => {
      y(), O();
    }), le(() => e.preview, () => {
      y(), O();
    }), {
      n: Pa,
      nDate: ft,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: w,
      getDayAbbr: g,
      checkDate: V,
      chooseDay: k,
      buttonProps: C
    };
  }
});
yu.render = Kp;
const Xp = yu;
var {
  n: Zp,
  classes: Jp
} = ee("date-picker");
function Qp(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: j({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [re(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, i, l;
              return [e.type === "month" ? (h(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), T("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "date", Qo(Ve({
                key: 2
              }, e.slotProps)), () => [be(
                ne(e.getDateTitle),
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
    ), D(
      "div",
      {
        class: m(e.n("body")),
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
      [re(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), me(
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
          )) : e.getPanelType === "month" ? (h(), me(
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
          )) : e.getPanelType === "date" ? (h(), me(
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
          )) : _("v-if", !0)]),
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
var bu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Fp,
    YearPickerPanel: Gp,
    DayPickerPanel: Xp
  },
  props: zp,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = gt.find((se) => se.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), g = E(), w = E(s), y = E(i), O = E(!1), P = E([]), b = E([]), C = E([]), V = E([]), k = E(null), A = E(null), M = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), B = U(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: g.value,
      chooseMonths: P.value,
      chooseDays: b.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: V.value
    })), I = U(() => ({
      previewMonth: w.value,
      previewYear: y.value
    })), p = U(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = We.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + We.value.datePickerSelected : ce;
    }), S = U(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = V.value.map((Jt) => te(Jt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + b.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !g.value)
        return "";
      var mn = te(c.value + "-" + f.value.index + "-" + g.value).day(), Oa = Ka.find((Jt) => Jt.index === "" + mn), ki = (se = (ye = We.value.datePickerWeekDict) == null ? void 0 : ye[Oa.index].name) != null ? se : "", Qd = (ce = (Ce = We.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", _d = ga(g.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + _d + " " + ki.slice(0, 3) : ki.slice(0, 3) + ", " + Qd.slice(0, 3) + " " + g.value;
    }), L = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = U(() => !e.touchable || ["", "year"].includes(L.value)), H = U(() => {
      var se, ye, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + g.value).day(), Re = g.value ? ga(g.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Re
      };
    }), R = U(() => B.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), J = U(() => c.value === y.value), G = U(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === w.value.index;
    }), K = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, X = (se, ye) => se >= ye && se > 20 ? "x" : "y", W = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, ke = ce - r;
        t = X(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Q.value || t !== "x")) {
        var se = L.value === "month" ? k : A;
        Lt(() => {
          se.value.forwardRef(a), Si();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? C : V;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? P : b, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Je) => te(Je).format(Ce)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ye.index < f.value.index : G.value ? ye < z(g.value) : f.value.index > w.value.index : c.value > y.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        O.value = ge("day", se);
        var Je = y.value + "-" + w.value.index + "-" + se, mn = te(Je).format("YYYY-MM-DD");
        ce ? ae(mn, "day") : Ce ? oe(mn, "day") : ($(Re, mn), $(ke, mn));
      }
    }, He = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": mn
      } = e;
      if (O.value = ge("month", se), ye === "month" && !ce) {
        var Oa = y.value + "-" + se.index;
        Ce ? ae(Oa, "month") : ke ? oe(Oa, "month") : ($(mn, Oa), $(Re, Oa));
      } else
        w.value = se, $(Je, z(y.value), z(w.value.index));
      d.value = !1;
    }, nn = (se) => {
      y.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, z(y.value), z(w.value.index));
    }, sn = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        y.value = "" + (z(y.value) + ce);
      else {
        var Ce = z(w.value.index) + ce;
        Ce < 1 && (y.value = "" + (z(y.value) - 1), Ce = 12), Ce > 12 && (y.value = "" + (z(y.value) + 1), Ce = 1), w.value = gt.find((ke) => z(ke.index) === Ce);
      }
      $(e.onPreview, z(y.value), z(w.value.index));
    }, Le = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, cn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Xd = (se, ye) => {
      var ce = ye === "month" ? C : V, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => te(mn).format(Ce)).slice(0, 2), Re = ce.value.some((mn) => cn(mn));
      if (!Re) {
        ce.value = ke;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Zd = (se, ye) => {
      var ce = ye === "month" ? P : b, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Ce))));
      ce.value = ke.filter((Re) => Re !== "Invalid Date");
    }, Jd = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!cn(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Re = gt.find((Je) => Je.index === Ce);
        f.value = Re, c.value = ce, g.value = ke, w.value = Re, y.value = ce;
      }
    }, Si = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || cn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, Xd(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          Zd(se, e.type);
        } else
          Jd(se);
    }, {
      immediate: !0
    }), le(L, Si), {
      n: Zp,
      classes: Jp,
      monthPanelEl: k,
      dayPanelEl: A,
      reverse: O,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: S,
      getPanelType: L,
      getChoose: B,
      getPreview: I,
      componentProps: M,
      slotProps: H,
      formatRange: R,
      clickEl: K,
      handleTouchstart: N,
      handleTouchmove: W,
      handleTouchend: Z,
      getChooseDay: pe,
      getChooseMonth: He,
      getChooseYear: nn,
      checkPreview: sn
    };
  }
});
bu.render = Qp;
const zr = bu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var jC = zr;
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
function _p(e) {
  return ["left", "center", "right"].includes(e);
}
var xp = Ao({
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
    validator: _p
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
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, Xe(tt, [
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
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
var {
  n: eh,
  classes: nh
} = ee("dialog");
function rh(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return h(), me(
    a,
    {
      class: m(e.n("popup")),
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: zo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("title"))
          },
          [F(e.$slots, "title", {}, () => [be(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), D(
          "div",
          {
            class: m(e.n("message")),
            style: j({
              textAlign: e.messageAlign
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (h(), me(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0), e.confirmButton ? (h(), me(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0)],
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
var wu = x({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: xp,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if ($(s), l != null) {
        l("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if ($(s), l != null) {
        l("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: eh,
      classes: nh,
      pack: We,
      dt: At,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: he
    };
  }
});
wu.render = rh;
const lr = wu;
function Pt() {
  return Pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Pt.apply(this, arguments);
}
var Qn, Vt = {};
function ah(e) {
  return e === void 0 && (e = {}), qe(e) ? Pt({}, Vt, {
    message: e
  }) : Pt({}, Vt, e);
}
function ba(e) {
  return ei() ? new Promise((n) => {
    ba.close();
    var r = ah(e), a = Ee(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = ja(lr, a, {
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
        $(a.onClosed), t(), Qn === a && (Qn = null);
      },
      onRouteChange: () => {
        t(), Qn === a && (Qn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function th(e) {
  Vt = e;
}
function oh() {
  Vt = {};
}
function ih() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ba, {
  setDefaultOptions: th,
  resetDefaultOptions: oh,
  close: ih
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
ba.install = function(e) {
  e.component(lr.name, lr);
};
ba.Component = lr;
var GC = lr, lh = {
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
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Na.apply(this, arguments);
}
var {
  n: sh,
  classes: uh
} = ee("divider");
function dh(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: j(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Cu = x({
  name: "VarDivider",
  props: lh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = U(() => oo(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (oo(l) || l === 0)
        return Na({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Na({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Na({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ze(() => {
      i();
    }), Nt(() => {
      i();
    }), Na({
      n: sh,
      classes: uh
    }, rv(a), {
      style: o,
      isInset: t
    });
  }
});
Cu.render = dh;
const Lr = Cu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var qC = Lr, vh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return vh[n];
  });
}
var An = "top", mr = "bottom", wa = "right", sr = "left", qt = "auto", Kt = [An, mr, wa, sr], Xt = "start", et = "end", fh = "clippingParents", Su = "viewport", Ga = "popper", ch = "reference", _i = /* @__PURE__ */ Kt.reduce(function(e, n) {
  return e.concat([n + "-" + Xt, n + "-" + et]);
}, []), ku = /* @__PURE__ */ [].concat(Kt, [qt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Xt, n + "-" + et]);
}, []), mh = "beforeRead", ph = "read", hh = "afterRead", gh = "beforeMain", yh = "main", bh = "afterMain", wh = "beforeWrite", Ch = "write", Sh = "afterWrite", Lo = [mh, ph, hh, gh, yh, bh, wh, Ch, Sh];
function zn(e) {
  return e.split("-")[0];
}
var kh = {
  start: "end",
  end: "start"
};
function xi(e) {
  return e.replace(/start|end/g, function(n) {
    return kh[n];
  });
}
function Cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ca(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function gn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function mi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((Ca(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Za = Math.max, el = Math.min, La = Math.round;
function Ro() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function $u() {
  return !/^((?!chrome|android).)*safari/i.test(Ro());
}
function Ra(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && La(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && La(a.height) / e.offsetHeight || 1);
  var i = Ca(e) ? Cn(e) : window, l = i.visualViewport, s = !$u() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function pi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function hi(e) {
  return Ra(gr(e)).left + pi(e).scrollLeft;
}
function $h(e, n) {
  var r = Cn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = $u();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + hi(e),
    y: s
  };
}
function Pn(e) {
  return Cn(e).getComputedStyle(e);
}
function Th(e) {
  var n, r = gr(e), a = pi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Za(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Za(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + hi(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (l += Za(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Zt(e) {
  return Bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (mi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gr(e)
  );
}
function gi(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Tu(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : gn(e) && gi(e) ? e : Tu(Zt(e));
}
function Ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Tu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], gi(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ja(Zt(i)))
  );
}
function Oh(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function nl(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function Ph(e) {
  var n = /firefox/i.test(Ro()), r = /Trident/i.test(Ro());
  if (r && gn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Zt(e);
  for (mi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Bn(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function yi(e) {
  for (var n = Cn(e), r = nl(e); r && Oh(r) && Pn(r).position === "static"; )
    r = nl(r);
  return r && (Bn(r) === "html" || Bn(r) === "body" && Pn(r).position === "static") ? n : r || Ph(e) || n;
}
function Vh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && mi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Uo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Eh(e, n) {
  var r = Ra(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function rl(e, n, r) {
  return n === Su ? Uo($h(e, r)) : Ca(n) ? Eh(n, r) : Uo(Th(gr(e)));
}
function Mh(e) {
  var n = Ja(Zt(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && gn(e) ? yi(e) : e;
  return Ca(a) ? n.filter(function(t) {
    return Ca(t) && Vh(t, a) && Bn(t) !== "body";
  }) : [];
}
function Bh(e, n, r, a) {
  var t = n === "clippingParents" ? Mh(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = rl(e, u, a);
    return s.top = Za(d.top, s.top), s.right = el(d.right, s.right), s.bottom = el(d.bottom, s.bottom), s.left = Za(d.left, s.left), s;
  }, rl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function nt(e) {
  return e.split("-")[1];
}
function Ih(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ou(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? nt(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case mr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case wa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case sr:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? Ih(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Xt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case et:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Nh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dh(e) {
  return Object.assign({}, Nh(), e);
}
function Ah(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Pu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? fh : l, u = r.rootBoundary, d = u === void 0 ? Su : u, v = r.elementContext, f = v === void 0 ? Ga : v, c = r.altBoundary, g = c === void 0 ? !1 : c, w = r.padding, y = w === void 0 ? 0 : w, O = Dh(typeof y != "number" ? y : Ah(y, Kt)), P = f === Ga ? ch : Ga, b = e.rects.popper, C = e.elements[g ? P : f], V = Bh(Ca(C) ? C : C.contextElement || gr(e.elements.popper), s, d, i), k = Ra(e.elements.reference), A = Ou({
    reference: k,
    element: b,
    strategy: "absolute",
    placement: t
  }), M = Uo(Object.assign({}, b, A)), B = f === Ga ? M : k, I = {
    top: V.top - B.top + O.top,
    bottom: B.bottom - V.bottom + O.bottom,
    left: V.left - B.left + O.left,
    right: B.right - V.right + O.right
  }, p = e.modifiersData.offset;
  if (f === Ga && p) {
    var S = p[t];
    Object.keys(I).forEach(function(L) {
      var Q = [wa, mr].indexOf(L) >= 0 ? 1 : -1, H = [An, mr].indexOf(L) >= 0 ? "y" : "x";
      I[L] += S[H] * Q;
    });
  }
  return I;
}
function zh(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? ku : s, d = nt(a), v = d ? l ? _i : _i.filter(function(g) {
    return nt(g) === d;
  }) : Kt, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(g, w) {
    return g[w] = Pu(e, {
      placement: w,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[zn(w)], g;
  }, {});
  return Object.keys(c).sort(function(g, w) {
    return c[g] - c[w];
  });
}
function Lh(e) {
  if (zn(e) === qt)
    return [];
  var n = yt(e);
  return [xi(e), n, xi(n)];
}
function Rh(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, g = c === void 0 ? !0 : c, w = r.allowedAutoPlacements, y = n.options.placement, O = zn(y), P = O === y, b = s || (P || !g ? [yt(y)] : Lh(y)), C = [y].concat(b).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === qt ? zh(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: w
      }) : oe);
    }, []), V = n.rects.reference, k = n.rects.popper, A = /* @__PURE__ */ new Map(), M = !0, B = C[0], I = 0; I < C.length; I++) {
      var p = C[I], S = zn(p), L = nt(p) === Xt, Q = [An, mr].indexOf(S) >= 0, H = Q ? "width" : "height", R = Pu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Q ? L ? wa : sr : L ? mr : An;
      V[H] > k[H] && (J = yt(J));
      var G = yt(J), K = [];
      if (o && K.push(R[S] <= 0), l && K.push(R[J] <= 0, R[G] <= 0), K.every(function(ae) {
        return ae;
      })) {
        B = p, M = !1;
        break;
      }
      A.set(p, K);
    }
    if (M)
      for (var N = g ? 3 : 1, X = function(oe) {
        var ge = C.find(function(pe) {
          var He = A.get(pe);
          if (He)
            return He.slice(0, oe).every(function(nn) {
              return nn;
            });
        });
        if (ge)
          return B = ge, "break";
      }, W = N; W > 0; W--) {
        var Z = X(W);
        if (Z === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const Uh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Rh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yh(e, n, r) {
  var a = zn(e), t = [sr, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [sr, wa].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Fh(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = ku.reduce(function(d, v) {
    return d[v] = Yh(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const Hh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Fh
};
function Wh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function jh(e) {
  return e === Cn(e) || !gn(e) ? pi(e) : Wh(e);
}
function Gh(e) {
  var n = e.getBoundingClientRect(), r = La(n.width) / e.offsetWidth || 1, a = La(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function qh(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && Gh(n), o = gr(n), i = Ra(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Bn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gi(o)) && (l = jh(n)), gn(n) ? (s = Ra(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = hi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Kh(e) {
  var n = Ra(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Xh(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function Zh(e) {
  var n = Xh(e);
  return Lo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Jh(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function qn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Qh = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', al = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function _h(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), al).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(qn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(qn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Lo.indexOf(n.phase) < 0 && console.error(qn(yr, n.name, '"phase"', "either " + Lo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(qn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(qn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(qn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(qn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + al.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn(Qh, String(n.name), a, a));
      });
    });
  });
}
function xh(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function eg(e) {
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
var tl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ng = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ol = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function il() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function rg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? ol : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ol, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(O) {
        var P = typeof O == "function" ? O(d.options) : O;
        w(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Ca(l) ? Ja(l) : l.contextElement ? Ja(l.contextElement) : [],
          popper: Ja(s)
        };
        var b = Zh(eg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = b.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = xh([].concat(b, d.options.modifiers), function(p) {
            var S = p.name;
            return S;
          });
          if (_h(C), zn(d.options.placement) === qt) {
            var V = d.orderedModifiers.find(function(p) {
              var S = p.name;
              return S === "flip";
            });
            V || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Pn(s), A = k.marginTop, M = k.marginRight, B = k.marginBottom, I = k.marginLeft;
          [A, M, B, I].some(function(p) {
            return parseFloat(p);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var O = d.elements, P = O.reference, b = O.popper;
          if (!il(P, b)) {
            process.env.NODE_ENV !== "production" && console.error(tl);
            return;
          }
          d.rects = {
            reference: qh(P, yi(b), d.options.strategy === "fixed"),
            popper: Kh(b)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, V = 0; V < d.orderedModifiers.length; V++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(ng);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, V = -1;
              continue;
            }
            var k = d.orderedModifiers[V], A = k.fn, M = k.options, B = M === void 0 ? {} : M, I = k.name;
            typeof A == "function" && (d = A({
              state: d,
              options: B,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Jh(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!il(l, s))
      return process.env.NODE_ENV !== "production" && console.error(tl), c;
    c.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var O = y.name, P = y.options, b = P === void 0 ? {} : P, C = y.effect;
        if (typeof C == "function") {
          var V = C({
            state: d,
            name: O,
            instance: c,
            options: b
          }), k = function() {
          };
          v.push(V || k);
        }
      });
    }
    function w() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return c;
  };
}
var ct = {
  passive: !0
};
function ag(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, ct);
  }), l && s.addEventListener("resize", r.update, ct), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, ct);
    }), l && s.removeEventListener("resize", r.update, ct);
  };
}
const tg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ag,
  data: {}
};
function og(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ou({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ig = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: og,
  data: {}
};
var lg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function sg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: La(n * t) / t || 0,
    y: La(r * t) / t || 0
  };
}
function ll(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, g = i.y, w = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = y.x, w = y.y;
  var O = i.hasOwnProperty("x"), P = i.hasOwnProperty("y"), b = sr, C = An, V = window;
  if (u) {
    var k = yi(r), A = "clientHeight", M = "clientWidth";
    if (k === Cn(r) && (k = gr(r), Pn(k).position !== "static" && l === "absolute" && (A = "scrollHeight", M = "scrollWidth")), k = k, t === An || (t === sr || t === wa) && o === et) {
      C = mr;
      var B = v && k === V && V.visualViewport ? V.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      w -= B - a.height, w *= s ? 1 : -1;
    }
    if (t === sr || (t === An || t === mr) && o === et) {
      b = wa;
      var I = v && k === V && V.visualViewport ? V.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[M]
      );
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && lg), S = d === !0 ? sg({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  if (c = S.x, w = S.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = P ? "0" : "", L[b] = O ? "0" : "", L.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = P ? w + "px" : "", n[b] = O ? c + "px" : "", n.transform = "", n));
}
function ug(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Pn(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: nt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ll(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ll(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const dg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ug,
  data: {}
};
function vg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Bn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function fg(e) {
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
      var t = n.elements[a], o = n.attributes[a] || {}, i = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !gn(t) || !Bn(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const cg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vg,
  effect: fg,
  requires: ["computeStyles"]
};
var mg = [tg, ig, dg, cg], pg = /* @__PURE__ */ rg({
  defaultModifiers: mg
});
function Et() {
  return Et = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Et.apply(this, arguments);
}
function sl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ul(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        sl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        sl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Vu(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = ot(() => a.value, 1), i = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: A
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(k),
      height: Ne(A)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, C());
  }, f = /* @__PURE__ */ function() {
    var k = ul(function* () {
      e.trigger === "hover" && (u = !1, yield En(), !s && V());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, g = /* @__PURE__ */ function() {
    var k = ul(function* () {
      e.trigger === "hover" && (s = !1, yield En(), !u && V());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), w = () => {
    C(), l = !0;
  }, y = () => {
    if (l) {
      l = !1;
      return;
    }
    a.value = !1, $(e["onUpdate:show"], !1);
  }, O = () => {
    d();
    var k = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: k.y,
          distance: k.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: k.y,
          distance: -k.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: -k.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: -k.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: k.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: k.x
        };
    }
  }, P = () => {
    var {
      placement: k,
      skidding: A,
      distance: M
    } = O(), B = [Et({}, Uh, {
      enabled: a.value
    }), Et({}, Hh, {
      options: {
        offset: [A, M]
      }
    })];
    return {
      placement: k,
      modifiers: B
    };
  }, b = () => {
    i.setOptions(P());
  }, C = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, $(e["onUpdate:show"], !0));
  }, V = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return le(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, b), le(() => e.offsetY, b), le(() => e.placement, b), le(() => a.value, (k) => {
    k ? (b(), $(e.onOpen)) : $(e.onClose);
  }), le(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
  }), le(() => e.disabled, V), ze(() => {
    i = pg(n.value, r.value, P()), e.trigger === "click" && document.addEventListener("click", y);
  }), pr(() => {
    document.removeEventListener("click", y), i.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: w,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: g,
    resize: b,
    open: C,
    close: V
  };
}
function hg(e) {
  return ["click", "hover"].includes(e);
}
function gg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function yg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var bg = {
  type: {
    type: String,
    default: "default",
    validator: yg
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
    validator: hg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: gg
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: wg,
  classes: Cg
} = ee("tooltip");
function Sg(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
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
    [F(e.$slots, "default"), (h(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(D(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: j({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [D(
              "div",
              {
                style: j({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [F(e.$slots, "content", {}, () => [be(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ha, e.show]])]),
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
var Eu = x({
  name: "VarTooltip",
  props: bg,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: g
    } = Vu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: wg,
      classes: Cg,
      handleHostClick: i,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: g,
      open: f,
      close: c
    };
  }
});
Eu.render = Sg;
const ur = Eu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var KC = ur;
function kg(e) {
  return ["click"].includes(e);
}
var $g = {
  expandTrigger: {
    type: String,
    validator: kg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
var {
  n: Tg,
  classes: Og
} = ee("ellipsis"), Pg = {
  key: 0
};
function Vg(e, n) {
  var r = ie("var-tooltip");
  return h(), me(
    r,
    Qo(Yl(e.tooltip)),
    {
      content: ve(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          Pg,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [D(
        "span",
        {
          class: m(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: j(e.rootStyles),
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
var Mu = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: ur
  },
  props: $g,
  setup(e) {
    var n = E(!1), r = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Yo({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Tg,
      classes: Og,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Mu.render = Vg;
const Rr = Mu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var XC = Rr;
function Eg(e) {
  return ["start", "end"].includes(e);
}
var Mg = {
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
    validator: Eg
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function dl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        dl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        dl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ig
} = ee("form");
function Ng(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Bu = x({
  name: "VarForm",
  props: Mg,
  setup(e) {
    var n = U(() => e.disabled), r = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = jc(), o = (d, v) => {
      setTimeout(() => {
        var f = Ta(v), c = f === window ? 0 : Bi(f), g = Bi(v) - c - Ne(e.scrollToErrorOffsetY);
        Qa(f, {
          top: g,
          animation: io
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = Bg(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: O
          } = y;
          return O();
        }));
        if (e.scrollToError) {
          var [, f] = sv(v, (y) => y === !1, e.scrollToError), c = f > -1;
          if (c) {
            var g, w = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(f, w);
          }
          return !c;
        }
        return v.every((y) => y === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), l = () => a.forEach((d) => {
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
      n: Ig,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
Bu.render = Ng;
const Ln = Bu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = bn;
Ln.useForm = wn;
var ZC = Ln;
function Dg(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ag = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Dg,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: zg,
  classes: Lg
} = ee("image"), Rg = ["alt", "title", "lazy-error", "lazy-loading"], Ug = ["alt", "title", "src"];
function Yg(e, n) {
  var r = Fe("lazy"), a = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: j({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((h(), T(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: j({
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
      Rg
    )), [[r, e.src]]) : (h(), T(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: j({
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
      Ug
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Iu = x({
  name: "VarImage",
  directives: {
    Lazy: _a,
    Ripple: Ae
  },
  props: Ag,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && $(l, t), o._lazy.state === "error" && $(s, t)) : $(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && $(i, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: zg,
      classes: Lg,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Iu.render = Yg;
const Ur = Iu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var JC = Ur, Nu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Du = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Fg() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Nu), {
    length: r
  } = vn(Du);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Au = {
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
  onChange: Y()
};
function vl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        vl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        vl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var Wg = 250, jg = 20, {
  n: Gg,
  classes: qg
} = ee("swipe"), Kg = ["onClick"];
function Xg(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: j({
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
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Pe,
        null,
        Ie(e.length, (r, a) => (h(), T(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: j({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Kg
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var zu = x({
  name: "VarSwipe",
  props: Au,
  setup(e) {
    var n = E(null), r = E(0), a = U(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Fg(), v = !1, f = -1, c, g, w, y, O, P = (N) => s.find((X) => {
      var {
        index: W
      } = X;
      return W.value === N;
    }), b = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, C = (N) => {
      var X = xe(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: W
      } = e;
      return X <= -1 ? W ? -1 : 0 : X >= d.value ? W ? d.value : d.value - 1 : X;
    }, V = (N) => {
      var {
        loop: X
      } = e;
      return N === -1 ? X ? d.value - 1 : 0 : N === d.value ? X ? 0 : d.value - 1 : N;
    }, k = (N) => {
      var {
        loop: X
      } = e;
      return N < 0 ? X ? d.value - 1 : 0 : N > d.value - 1 ? X ? 0 : d.value - 1 : N;
    }, A = (N) => {
      var X = o.value >= r.value, W = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || W) && (i.value = !0, o.value = W ? Z : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Lt(() => {
        i.value = !1, $(N);
      });
    }, M = () => {
      l.value = k(z(e.initialIndex));
    }, B = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (I(), f = window.setTimeout(() => {
        R(), B();
      }, z(N)));
    }, I = () => {
      f && clearTimeout(f);
    }, p = (N, X) => {
      if (N > X && N > 10)
        return "horizontal";
      if (X > N && X > 10)
        return "vertical";
    }, S = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: W
        } = N.touches[0];
        c = X, g = W, w = performance.now(), v = !0, I(), A(() => {
          i.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: X,
        vertical: W
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Z,
          clientY: ae
        } = N.touches[0], oe = Math.abs(Z - c), ge = Math.abs(ae - g), pe = p(oe, ge), He = W ? "vertical" : "horizontal";
        if (pe === He) {
          N.preventDefault();
          var nn = y !== void 0 ? Z - y : 0, sn = O !== void 0 ? ae - O : 0;
          y = Z, O = ae, o.value += W ? sn : nn, b();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, W = N ? O < g : y < c, Z = Math.abs(N ? g - O : c - y), ae = performance.now() - w <= Wg && Z >= jg, oe = ae ? C(W ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, y = void 0, O = void 0, o.value = oe * -r.value;
        var ge = l.value;
        l.value = V(oe), B(), ge !== l.value && $(X, l.value);
      }
    }, H = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), B(), setTimeout(() => {
        i.value = !1;
      }));
    }, R = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: W
        } = e, Z = l.value;
        l.value = k(Z + 1), (N == null ? void 0 : N.event) !== !1 && $(W, l.value), A(() => {
          if (Z === d.value - 1 && X) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          Z !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, J = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: W
        } = e, Z = l.value;
        l.value = k(Z - 1), (N == null ? void 0 : N.event) !== !1 && $(W, l.value), A(() => {
          if (Z === 0 && X) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          Z !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, G = (N, X) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var W = N > l.value ? R : J, Z = Math.abs(N - l.value);
        Array.from({
          length: Z
        }).forEach((ae, oe) => {
          W({
            event: oe === Z - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, K = {
      size: r,
      vertical: a
    };
    return u(K), le(() => d.value, /* @__PURE__ */ Hg(function* () {
      yield En(), M(), H();
    })), ze(() => {
      window.addEventListener("resize", H);
    }), pr(() => {
      window.removeEventListener("resize", H), I();
    }), {
      n: Gg,
      classes: qg,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: S,
      handleTouchmove: L,
      handleTouchend: Q,
      next: R,
      prev: J,
      to: G,
      resize: H,
      toNumber: z
    };
  }
});
zu.render = Xg;
const Rn = zu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var QC = Rn;
function Zg() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Nu), {
    index: r
  } = fn(Du);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Jg
} = ee("swipe-item");
function Qg(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      style: j({
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
var Lu = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Zg(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: Jg,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Lu.render = Qg;
const Un = Lu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var _C = Un;
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
var _g = Fo({
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
  "onUpdate:show": Y()
}, Xe(Au, ["loop", "indicator", "onChange"]), Xe(tt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: fl,
  classes: xg
} = ee("image-preview"), cl = 12, ml = 200, ey = 350, pl = 200, ny = ["src", "alt"];
function ry(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return h(), me(
    o,
    {
      class: m(e.n("popup")),
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
      default: ve(() => [re(
        a,
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(h(!0), T(
            Pe,
            null,
            Ie(e.images, (i) => (h(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
              },
              {
                default: ve(() => [D(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: j({
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
                  [D(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    ny
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
          indicator: ve((i) => {
            var {
              index: l,
              length: s
            } = i;
            return [F(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), T(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), F(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("extra"))
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
var Ru = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: _g,
  setup(e) {
    var n = E(!1), r = U(() => {
      var {
        images: I,
        current: p
      } = e, S = I.findIndex((L) => L === p);
      return S >= 0 ? S : 0;
    }), a = E(1), t = E(0), o = E(0), i = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, v = null, f = (I, p) => {
      var {
        clientX: S,
        clientY: L
      } = I, {
        clientX: Q,
        clientY: H
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Q - S, 2) + Math.pow(H - L, 2)));
    }, c = (I, p) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: p
    }), g = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, pl);
    }, w = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, y = (I) => d ? f(d, I) <= cl && I.timestamp - d.timestamp <= ml && d.target === I.target : !1, O = (I) => !I || !u || !d ? !1 : f(u, d) <= cl && Date.now() - d.timestamp < ey && (I === u.target || I.parentNode === u.target), P = (I) => {
      v = window.setTimeout(() => {
        O(I.target) && B(), u = null;
      }, ml);
    }, b = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = I, S = c(p[0], I.currentTarget);
      if (u = S, y(S)) {
        a.value > 1 ? w() : g();
        return;
      }
      d = S;
    }, C = (I) => {
      var {
        offsetWidth: p,
        offsetHeight: S
      } = I, {
        naturalWidth: L,
        naturalHeight: Q
      } = I.querySelector("." + fl("image"));
      return {
        width: p,
        height: S,
        imageRadio: Q / L,
        rootRadio: S / p,
        zoom: z(e.zoom)
      };
    }, V = (I) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: H
      } = C(I);
      if (!S)
        return 0;
      var R = S > L ? H / S : Q;
      return Math.max(0, (p * R - Q) / 2) / p;
    }, k = (I) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: H
      } = C(I);
      if (!S)
        return 0;
      var R = S > L ? H : Q * S;
      return Math.max(0, (p * R - H) / 2) / p;
    }, A = (I, p, S) => I + p >= S ? S : I + p <= -S ? -S : I + p, M = (I) => {
      if (d) {
        var p = I.currentTarget, {
          touches: S
        } = I, L = c(S[0], p);
        if (a.value > 1) {
          var Q = L.clientX - d.clientX, H = L.clientY - d.clientY, R = V(p), J = k(p);
          t.value = A(t.value, Q, R), o.value = A(o.value, H, J);
        }
        d = L;
      }
    }, B = () => {
      if (a.value > 1) {
        w(), setTimeout(() => $(e["onUpdate:show"], !1), pl);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: fl,
      classes: xg,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: b,
      handleTouchmove: M,
      handleTouchend: P,
      close: B
    };
  }
});
Ru.render = ry;
const dr = Ru;
var _n;
function Hn(e) {
  if (ei()) {
    Hn.close();
    var n = qe(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Ee(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = ja(dr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), _n === r && (_n = null);
      },
      onRouteChange: () => {
        a(), _n === r && (_n = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (_n != null) {
    var e = _n;
    _n = null, Me().then(() => {
      e.show = !1;
    });
  }
};
dr.install = function(e) {
  e.component(dr.name, dr);
};
Hn.install = function(e) {
  e.component(dr.name, dr);
};
Hn.Component = dr;
var xC = dr, bt = {
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
  onScroll: Y()
};
function hl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        hl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        hl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ay,
  classes: ty
} = ee("sticky");
function oy(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: j({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [D(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: j({
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
var Uu = x({
  name: "VarSticky",
  props: bt,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), i = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => Ne(e.offsetTop)), c, g = () => {
      var {
        cssMode: b,
        disabled: C
      } = e;
      if (!C) {
        var V = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          V = k;
        }
        var A = r.value, M = n.value, {
          top: B,
          left: I
        } = M.getBoundingClientRect(), p = B - V;
        return p <= f.value ? (b || (i.value = M.offsetWidth + "px", l.value = M.offsetHeight + "px", t.value = V + f.value + "px", o.value = I + "px", s.value = A.offsetWidth + "px", u.value = A.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, w = () => {
      var b = g();
      b && $(e.onScroll, b.offsetTop, b.isFixed);
    }, y = /* @__PURE__ */ function() {
      var b = gl(function* () {
        a.value = !1, yield bv(), g();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), O = /* @__PURE__ */ function() {
      var b = gl(function* () {
        yield En(), c = Ta(n.value), c !== window && c.addEventListener("scroll", w), window.addEventListener("scroll", w), w();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
    return le(() => e.disabled, y), Zo(O), Jo(P), ze(O), pr(P), {
      n: ay,
      classes: ty,
      resize: y,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: z
    };
  }
});
Uu.render = oy;
const Yn = Uu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var eS = Yn, Yu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), Fu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function iy() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Yu), {
    length: r
  } = vn(Fu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function ly() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Yu), {
    index: r
  } = fn(Fu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var sy = {
  index: {
    type: [Number, String]
  }
}, {
  n: uy,
  classes: dy
} = ee("index-anchor");
function vy(e, n) {
  return h(), me(
    Wa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [D(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [F(e.$slots, "default", {}, () => [be(
          ne(e.name),
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
var Hu = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: sy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = ly(), t = E(0), o = E(!1), i = U(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, w = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: c,
      setDisabled: g
    };
    return a(w), {
      n: uy,
      classes: dy,
      name: i,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: De
    };
  }
});
Hu.render = vy;
const Yr = Hu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var nS = Yr, fy = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
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
  onClick: Y(),
  onChange: Y()
};
function yl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        yl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        yl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: cy,
  classes: my
} = ee("index-bar"), py = ["onClick"];
function hy(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), D(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: j({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), T(
        Pe,
        null,
        Ie(e.anchorNameList, (r) => (h(), T(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: j({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          py
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
var Wu = x({
  name: "VarIndexBar",
  props: fy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = iy(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = U(() => e.sticky), d = U(() => e.cssMode), v = U(() => Ne(e.stickyOffsetTop)), f = U(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var g = (b, C) => {
      var V = _o(b) ? b.name.value : b;
      V === s.value || V === void 0 || (s.value = V, (C == null ? void 0 : C.event) !== !1 && $(e.onChange, V));
    }, w = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: b
      } = o.value.getBoundingClientRect(), {
        scrollTop: C
      } = o.value, {
        top: V
      } = i.value.getBoundingClientRect();
      return C - b + V;
    }, y = () => {
      var b = zt(o.value), C = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, V = w();
      r.forEach((k, A) => {
        var M = k.ownTop.value, B = b - M + v.value - V, I = A === r.length - 1 ? C : r[A + 1].ownTop.value - k.ownTop.value;
        B >= 0 && B < I && t.value === "" && (A && !e.cssMode && r[A - 1].setDisabled(!0), k.setDisabled(!1), g(k));
      });
    }, O = /* @__PURE__ */ function() {
      var b = eo(function* (C) {
        var {
          anchorName: V,
          manualCall: k = !1,
          options: A
        } = C;
        if (k && $(e.onClick, V), V !== s.value) {
          var M = r.find((S) => {
            var {
              name: L
            } = S;
            return V === L.value;
          });
          if (M) {
            var B = w(), I = M.ownTop.value - v.value + B, p = ni(o.value);
            t.value = V, g(V, A), yield Qa(o.value, {
              left: p,
              top: I,
              animation: Hl,
              duration: z(e.duration)
            }), Lt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return b.apply(this, arguments);
      };
    }(), P = (b, C) => {
      On(() => O({
        anchorName: b,
        options: C
      }));
    };
    return le(() => n.value, /* @__PURE__ */ eo(function* () {
      yield En(), r.forEach((b) => {
        var {
          name: C,
          setOwnTop: V
        } = b;
        C.value && l.value.push(C.value), V();
      });
    })), ze(/* @__PURE__ */ eo(function* () {
      yield En(), o.value = Ta(i.value), o.value.addEventListener("scroll", y);
    })), Bt(() => {
      $(o.value.removeEventListener, "scroll", y);
    }), {
      n: cy,
      classes: my,
      barEl: i,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: P,
      anchorClick: O
    };
  }
});
Wu.render = hy;
const Fr = Wu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var rS = Fr;
function gy(e) {
  return ["text", "password", "number"].includes(e);
}
var yy = {
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
    validator: gy
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
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
  maxlength: {
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
  clearable: {
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
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: no,
  classes: by
} = ee("input"), wy = ["id", "disabled", "type", "value", "maxlength", "rows"], Cy = ["id", "disabled", "type", "value", "maxlength"], Sy = ["for"];
function ky(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: j({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), T(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (h(), T(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: j({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
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
            })
          },
          `
        `,
          46,
          wy
        )) : (h(), T(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: j({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          Cy
        )), D(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: j({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Sy
        )],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: j({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: j({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
    /* CLASS */
  );
}
var ju = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: yy,
  setup(e) {
    var n = E("var-input-" + Ya().uid), r = E(null), a = E(!1), t = U(() => {
      var {
        maxlength: p,
        modelValue: S
      } = e;
      return p ? Nn(S) ? "0 / " + p : String(S).length + "/" + p : "";
    }), {
      bindForm: o,
      form: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = (p) => {
      Me(() => {
        var {
          validateTrigger: S,
          rules: L,
          modelValue: Q
        } = e;
        s(S, p, L, Q);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: S
      } = e;
      if (!p && !Nn(S))
        return no("--placeholder-hidden");
      if (p && (!Nn(S) || a.value))
        return no("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, $(e.onFocus, p), v("onFocus");
    }, g = (p) => {
      a.value = !1, $(e.onBlur, p), v("onBlur");
    }, w = (p) => {
      var S = p.target, {
        value: L
      } = S;
      L = C(b(L)), S.value = L, $(e["onUpdate:modelValue"], L), $(e.onInput, L, p), v("onInput");
    }, y = (p) => {
      var S = p.target, {
        value: L
      } = S;
      L = C(b(L)), S.value = L, $(e.onChange, L, p), v("onChange");
    }, O = () => {
      var {
        disabled: p,
        readonly: S,
        clearable: L,
        onClear: Q
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || p || S || !L || ($(e["onUpdate:modelValue"], ""), $(Q, ""), v("onClear"));
    }, P = (p) => {
      var {
        disabled: S,
        onClick: L
      } = e;
      i != null && i.disabled.value || S || ($(L, p), v("onClick"));
    }, b = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, V = (p) => {
      var {
        disabled: S,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || S || L || p.stopPropagation();
    }, k = () => {
      $(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), M = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, B = () => {
      r.value.blur();
    }, I = {
      reset: k,
      validate: A,
      resetValidation: d
    };
    return $(o, I), ze(() => {
      e.autofocus && M();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: no,
      classes: by,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: g,
      handleInput: w,
      handleChange: y,
      handleClear: O,
      handleClick: P,
      handleTouchstart: V,
      validate: A,
      resetValidation: d,
      reset: k,
      focus: M,
      blur: B
    };
  }
});
ju.render = ky;
const vr = ju;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var aS = vr;
function $y(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ty(e) {
  return ["always", "hover", "none"].includes(e);
}
var Oy = {
  type: {
    type: String,
    default: "default",
    validator: $y
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
    validator: Ty
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
  onClick: Y()
}, {
  n: Py,
  classes: Vy
} = ee("link");
function Ey(e, n) {
  return h(), me(
    Wa(e.tag),
    Ve(e.linkProps, {
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
var Gu = x({
  name: "VarLink",
  props: Oy,
  setup(e) {
    var n = U(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = U(() => {
      var {
        disabled: t,
        href: o,
        target: i,
        to: l,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: i
      } : l ? {
        to: l,
        target: i,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: i
      } = e;
      o || $(i, t);
    };
    return {
      n: Py,
      classes: Vy,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
Gu.render = Ey;
const Hr = Gu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var tS = Hr, My = {
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
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function bl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function By(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        bl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        bl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Iy,
  classes: Ny
} = ee("list");
function Dy(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: m(e.n("loading"))
      },
      [D(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), re(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [Se((h(), T(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : _("v-if", !0), D(
      "div",
      {
        class: m(e.n("detector")),
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
var qu = x({
  name: "VarList",
  directives: {
    Ripple: Ae
  },
  components: {
    VarLoading: $n
  },
  props: My,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = By(function* () {
        yield Me();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return ze(() => {
      a = Ta(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), pr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: We,
      listEl: n,
      detectorEl: r,
      dt: At,
      isNumber: xe,
      load: t,
      check: i,
      n: Iy,
      classes: Ny
    };
  }
});
qu.render = Dy;
const Wr = qu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var oS = Wr, Ay = {
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
  classes: zy,
  n: wl
} = ee("loading-bar");
const Ly = x({
  name: "VarLoadingBar",
  props: Ay,
  setup(e) {
    return () => re("div", {
      class: zy(wl(), [e.error, wl("--error")]),
      style: {
        zIndex: dn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var Ku, Cl, Xu = {}, Ry = {
  value: 0,
  opacity: 0,
  error: !1
}, Ke = Ee(Ry), Uy = (e) => {
  Object.assign(Ke, e);
}, Yy = (e) => {
  Object.assign(Ke, e), Xu = e;
}, Fy = () => {
  Object.keys(Xu).forEach((e) => {
    Ke[e] !== void 0 && (Ke[e] = void 0);
  });
}, Zu = () => {
  Ku = window.setTimeout(() => {
    if (!(Ke.value >= 95)) {
      var e = Math.random();
      Ke.value < 70 && (e = Math.round(5 * Math.random())), Ke.value += e, Zu();
    }
  }, 200);
}, Hy = () => {
  Cl || (Cl = !0, ja(Ly, Ke)), (!Ke.error || Ke.value === 100) && (Ke.value = 0), setTimeout(() => {
    Ke.opacity = 1;
  }, 200), Zu();
}, Wy = () => {
  Ke.value = 100, setTimeout(() => {
    Ke.opacity = 0, setTimeout(() => {
      Ke.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Ku);
}, jy = () => {
  Ke.error = !0, Mt.start(), setTimeout(Mt.finish, 300);
}, Mt = {
  start: Hy,
  finish: Wy,
  error: jy,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Uy,
  setDefaultOptions: Yy,
  resetDefaultOptions: Fy
}, iS = Mt;
const Ho = Mt;
function Gy(e) {
  return ["click", "hover"].includes(e);
}
function qy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Ky = {
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
    validator: Gy
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: qy
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
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Xy,
  classes: Zy
} = ee("menu");
function Jy(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
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
    [F(e.$slots, "default"), (h(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(D(
            "div",
            {
              ref: "popover",
              style: j({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Vn(() => {
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
          ), [[Ha, e.show]])]),
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
var Ju = x({
  name: "VarMenu",
  props: Ky,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: g
    } = Vu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: Xy,
      classes: Zy,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: g,
      open: f,
      close: c
    };
  }
});
Ju.render = Jy;
const Fn = Ju;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var lS = Fn, Qu = Symbol("SELECT_BIND_OPTION_KEY"), _u = Symbol("SELECT_COUNT_OPTION_KEY");
function Qy() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Qu), {
    length: r
  } = vn(_u);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function _y() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Qu), {
    index: r
  } = fn(_u);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var xy = {
  label: {},
  value: {}
}, {
  n: eb,
  classes: nb
} = ee("option");
function rb(e, n) {
  var r = ie("var-checkbox"), a = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: j({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: j({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Vn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : _("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [F(e.$slots, "default", {}, () => [be(
        ne(e.label),
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
var xu = x({
  name: "VarOption",
  directives: {
    Ripple: Ae
  },
  components: {
    VarCheckbox: or
  },
  props: xy,
  setup(e) {
    var n = E(!1), r = U(() => n.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: i
    } = _y(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(g);
    }, f = () => d(g), c = (w) => {
      n.value = w;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return le([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), i(g), {
      n: eb,
      classes: nb,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
xu.render = rb;
const jr = xu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var sS = jr, ab = {
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
  onClick: Y(),
  "onUpdate:show": Y()
};
function tb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var {
  n: Sl
} = ee("overlay");
const Gr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: ab,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ot(() => e.show, 1), {
      disabled: o
    } = ri(), i = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Rt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: Sl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: Sl("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return re(Fa, {
          to: u,
          disabled: o.value
        }, tb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var uS = Gr, ob = {
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
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: ib,
  classes: lb
} = ee("pagination"), sb = ["item-mode", "onClick"];
function ub(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), i = Fe("ripple");
  return h(), T(
    "ul",
    {
      class: m(e.n())
    },
    [Se((h(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), T(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = $i((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), D("span", null, [be(
        " / " + ne(e.pageCount) + " ",
        1
        /* TEXT */
      ), D(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (h(!0), T(
      Pe,
      {
        key: 1
      },
      Ie(e.pageList, (l, s) => Se((h(), T(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          ne(l),
          1
          /* TEXT */
        )],
        10,
        sb
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((h(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), T(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Pe,
            null,
            Ie(e.sizeOption, (l, s) => Se((h(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [be(
                  ne(l) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[i]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [D(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [D(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), re(
              r,
              {
                class: m(e.n("size--open-icon")),
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
        ["show"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = $i((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (h(), T(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ed = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: vr
  },
  directives: {
    Ripple: Ae
  },
  props: ob,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(z(e.total) / z(l.value))), v = U(() => {
      var C = l.value * (i.value - 1) + 1, V = Math.min(l.value * i.value, z(e.total));
      return [C, V];
    }), f = U(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (C, V) => xe(C) ? !1 : V === 1 ? t.value : o.value, g = (C, V) => xe(C) ? "basic" : V === 1 ? "head" : "tail", w = (C, V) => {
      C === i.value || e.disabled || (xe(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (V === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, O = (C) => {
      l.value = C, n.value = !1;
    }, P = (C) => {
      var V = /^[1-9][0-9]*$/;
      return V.test(C);
    }, b = (C, V, k) => {
      if (k.target.blur(), P(V)) {
        var A = z(V);
        A > d.value && (A = d.value, a.value = "" + A), A !== i.value && (i.value = A);
      }
      C === "quick" && (r.value = ""), C === "simple" && !P(V) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (C) => {
      var [V, k] = C;
      i.value = z(V) || 1, l.value = z(k || 10);
    }), le([i, l, d], (C, V) => {
      var [k, A, M] = C, [B, I] = V, p = [], {
        maxPagerCount: S,
        total: L,
        onChange: Q
      } = e, H = Math.ceil(z(L) / z(I)), R = M - (S - u.value) - 1;
      if (a.value = "" + k, M - 2 > S) {
        if (B === void 0 || M !== H)
          for (var J = 2; J < S + 2; J++)
            p.push(J);
        if (k <= S && k < R) {
          p = [];
          for (var G = 1; G < S + 1; G++)
            p.push(G + 1);
          t.value = !0, o.value = !1;
        }
        if (k > S && k < R) {
          p = [];
          for (var K = 1; K < S + 1; K++)
            p.push(k + K - u.value);
          t.value = k === 2 && S === 1, o.value = !1;
        }
        if (k >= R) {
          p = [];
          for (var N = 1; N < S + 1; N++)
            p.push(M - (S - N) - 1);
          t.value = !1, o.value = !0;
        }
        p = [1, "...", ...p, "...", M];
      } else
        for (var X = 1; X <= M; X++)
          p.push(X);
      s.value = p, B !== void 0 && M > 0 && $(Q, k, A), $(e["onUpdate:current"], k), $(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: ib,
      classes: lb,
      pack: We,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: c,
      clickItem: w,
      showMenu: y,
      clickSize: O,
      setPage: b,
      toNumber: z
    };
  }
});
ed.render = ub;
const qr = ed;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var dS = qr, db = {
  elevation: {
    type: [Number, String]
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
  onClick: Y()
}, {
  n: vb,
  classes: fb
} = ee("paper");
function cb(e, n) {
  var r = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: j({
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
var nd = x({
  name: "VarPaper",
  directives: {
    Ripple: Ae
  },
  props: db,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: vb,
      classes: fb,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
nd.render = cb;
const Kr = nd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var vS = Kr;
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
var mb = Wo({
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
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, Xe(tt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: pb,
  classes: hb
} = ee("picker"), kl = 300, gb = 15, $l = 0, yb = ["onTouchstart", "onTouchmove", "onTouchend"], bb = ["onTransitionend"];
function wb(e, n) {
  var r = ie("var-button");
  return h(), me(
    Wa(e.dynamic ? e.n("$-popup") : e.Transition),
    Ve(e.dynamic ? {
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [re(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), F(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [re(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : _("v-if", !0), D(
          "div",
          {
            class: m(e.n("columns")),
            style: j({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Pe,
            null,
            Ie(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: j({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), T(
                  Pe,
                  null,
                  Ie(a.column.texts, (t) => (h(), T(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: j({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [D(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
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
                bb
              )],
              42,
              yb
            ))),
            128
            /* KEYED_FRAGMENT */
          )), D(
            "div",
            {
              class: m(e.n("picked")),
              style: j({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.n("mask")),
              style: j({
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
var rd = x({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: mb,
  setup(e) {
    var n = E([]), r = U(() => Ne(e.optionHeight)), a = U(() => Ne(e.optionCount)), t = U(() => a.value * r.value / 2 - r.value / 2), o = U(() => a.value * r.value), i = [], l = (p, S) => {
      S.scrollEl = p;
    }, s = (p) => {
      $(e["onUpdate:show"], p);
    }, u = (p) => {
      var S = r.value + t.value, L = t.value - p.column.texts.length * r.value;
      p.translate >= S && (p.translate = S), p.translate <= L && (p.translate = L);
    }, d = (p, S) => {
      var {
        length: L
      } = p.column.texts;
      return S = S >= L ? L - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (p) => {
      var S = Math.round((t.value - p.translate) / r.value);
      return d(p, S);
    }, f = () => {
      var p = n.value.map((L) => L.column.texts[L.index]), S = n.value.map((L) => L.index);
      return {
        texts: p,
        indexes: S
      };
    }, c = function(p, S, L, Q) {
      Q === void 0 && (Q = !1);
      var H = t.value - d(p, S) * r.value;
      H === p.translate && (p.scrolling = !1, !Q && A(p)), p.translate = H, p.duration = L;
    }, g = (p, S, L) => {
      p.translate += Math.abs(S / L) / 3e-3 * (S < 0 ? -1 : 1);
    }, w = (p, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = Qt(S.scrollEl);
    }, y = (p, S) => {
      if (S.touching) {
        var {
          clientY: L
        } = p.touches[0], Q = S.prevY !== void 0 ? L - S.prevY : 0;
        S.prevY = L, S.translate += Q, u(S);
        var H = performance.now();
        H - S.momentumTime > kl && (S.momentumTime = H, S.momentumPrevY = S.translate);
      }
    }, O = (p, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var L = S.translate - S.momentumPrevY, Q = performance.now() - S.momentumTime, H = Math.abs(L) >= gb && Q <= kl;
      H && g(S, L, Q), S.index = v(S), c(S, S.index, H ? 1e3 : 200);
    }, P = (p) => {
      p.scrolling = !1, A(p);
    }, b = (p) => p.map((S, L) => {
      var Q, H = we(S) ? {
        texts: S
      } : S, R = {
        id: $l++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = H.initialIndex) != null ? Q : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: H,
        scrollEl: null,
        scrolling: !1
      };
      return c(R, R.index, 0, !0), R;
    }), C = (p) => {
      var S = [];
      return V(S, p, 0, !0), S;
    }, V = function(p, S, L, Q) {
      if (Q === void 0 && (Q = !1), we(S) && S.length) {
        var H, R = Q && (H = e.cascadeInitialIndexes[p.length]) != null ? H : 0, J = {
          id: $l++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((G) => G[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), V(p, J.columns[J.index].children, L + 1, Q);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), V(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, A = (p) => {
      var {
        cascade: S,
        onChange: L
      } = e;
      S && k(p);
      var Q = n.value.some((G) => G.scrolling);
      if (!Q) {
        var {
          texts: H,
          indexes: R
        } = f(), J = R.every((G, K) => G === i[K]);
        J || (i = [...R], $(L, H, R));
      }
    }, M = () => {
      if (e.cascade) {
        var p = n.value.find((S) => S.scrolling);
        p && (p.translate = Qt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((S) => {
          S.translate = Qt(S.scrollEl), S.index = v(S), c(S, S.index, 0);
        });
    }, B = () => {
      M();
      var {
        texts: p,
        indexes: S
      } = f();
      i = [...S], $(e.onConfirm, p, S);
    }, I = () => {
      M();
      var {
        texts: p,
        indexes: S
      } = f();
      i = [...S], $(e.onCancel, p, S);
    };
    return le(() => e.columns, (p) => {
      n.value = e.cascade ? C(Ti(p)) : b(Ti(p));
      var {
        indexes: S
      } = f();
      i = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: pb,
      classes: hb,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: w,
      handleTouchmove: y,
      handleTouchend: O,
      handleTransitionend: P,
      confirm: B,
      cancel: I,
      dt: At
    };
  }
});
rd.render = wb;
const fr = rd;
var rn;
function Sa(e) {
  return new Promise((n) => {
    Sa.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = ja(fr, a, {
      onConfirm: (o, i) => {
        $(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, i) => {
        $(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
fr.install = function(e) {
  e.component(fr.name, fr);
};
Sa.Component = fr;
Sa.install = function(e) {
  e.component(fr.name, fr);
};
Sa.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
var fS = fr;
function Cb(e) {
  return ["linear", "circle"].includes(e);
}
var Sb = {
  mode: {
    type: String,
    default: "linear",
    validator: Cb
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
  n: kb,
  classes: $b
} = ee("progress"), Tb = ["viewBox"], Ob = ["cx", "cy", "r", "stroke-width"], Pb = ["cx", "cy", "r", "stroke-width"];
function Vb(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [D(
        "div",
        {
          class: m(e.n("linear-block")),
          style: j({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: j({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), D(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: j({
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
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (h(), T(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: j({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: j({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), T(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: j({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Ob
        )) : _("v-if", !0), D(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: j({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          Pb
        )],
        14,
        Tb
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ad = x({
  name: "VarProgress",
  props: Sb,
  setup(e) {
    var n = U(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = U(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, i = "0 0 " + Ne(a) + " " + Ne(a), l = z(o) > 100 ? 100 : Math.round(z(o)), s = (Ne(a) - Ne(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: kb,
      classes: $b,
      toSizeUnit: he,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
ad.render = Vb;
const Xr = ad;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var cS = Xr, Eb = {
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
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
};
function Tl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Tl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Tl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ol,
  classes: Bb
} = ee("pull-refresh"), Pl = 150;
function Ib(e, n) {
  var r = ie("var-icon");
  return h(), T(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: j(e.controlStyle)
      },
      [re(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
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
var td = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Eb,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), g = U(() => u.value !== "loading" && u.value !== "success" && !e.disabled), w = U(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: O.value ? e.successBgColor : e.bgColor,
      color: O.value ? e.successColor : e.color
    })), y = U(() => Math.abs(2 * a.value)), O = U(() => u.value === "success"), P = () => new Promise((B) => {
      window.setTimeout(() => {
        c.value = !0, B();
      }, Pl);
    }), b = (B) => {
      var I = "classList" in n ? n : document.body;
      I.classList[B](Ol() + "--lock");
    }, C = (B) => {
      v = B.touches[0].clientY, f = 0;
    }, V = (B) => {
      if (g.value) {
        var I = zt(n);
        if (!(I > 0)) {
          var p = I === 0, S = B.touches[0];
          f = S.clientY - v, p && f >= 0 && B.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = B.touches[0].clientY), p && l.value > a.value && b("add");
          var L = (B.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= y.value ? y.value : L, l.value >= y.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var B = Mb(function* () {
        g.value && (d.value = !0, l.value >= y.value * 0.2 ? (yield r, u.value = "loading", l.value = y.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), b("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, b("remove");
        }, z(e.animationDuration))));
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), A = () => {
      var {
        width: B
      } = o.value.getBoundingClientRect();
      l.value = -(B + B * 0.25), a.value = -(B + B * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return le(() => e.modelValue, (B) => {
      B === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), ze(() => {
      var B;
      n = e.target ? jl(e.target, "PullRefresh") : Ta(t.value), A(), (B = t.value) == null || B.addEventListener("touchmove", V, {
        passive: !1
      });
    }), Bt(() => {
      var B;
      (B = t.value) == null || B.removeEventListener("touchmove", V);
    }), {
      n: Ol,
      classes: Bb,
      iconHasChanged: c,
      ICON_TRANSITION: Pl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: V,
      touchEnd: k,
      iconName: s,
      controlStyle: w,
      isSuccess: O
    };
  }
});
td.render = Ib;
const Zr = td;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var mS = Zr, Nb = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, od = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), id = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Db() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(od), {
    length: r
  } = vn(id);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Ab() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(od), {
    index: r
  } = fn(id);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: zb,
  classes: Lb
} = ee("radio");
function Rb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((h(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: j({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), D(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), re(
      a,
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
var ld = x({
  name: "VarRadio",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: Nb,
  setup(e) {
    var n = E(!1), r = U(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Ab(), {
      form: i,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (C) => {
      Me(() => {
        var {
          validateTrigger: V,
          rules: k,
          modelValue: A
        } = e;
        u(V, C, k, A);
      });
    }, c = (C) => {
      var {
        checkedValue: V,
        onChange: k
      } = e;
      t && n.value === V || (n.value = C, $(e["onUpdate:modelValue"], n.value), $(k, n.value), t == null || t.onToggle(V), f("onChange"));
    }, g = (C) => {
      var {
        disabled: V,
        readonly: k,
        uncheckedValue: A,
        checkedValue: M,
        onClick: B
      } = e;
      i != null && i.disabled.value || V || ($(B, C), !(i != null && i.readonly.value || k) && (a.value = !0, c(r.value ? A : M)));
    }, w = (C) => {
      var {
        checkedValue: V,
        uncheckedValue: k
      } = e;
      n.value = C === V ? V : k;
    }, y = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), P = (C) => {
      var {
        uncheckedValue: V,
        checkedValue: k
      } = e, A = ![V, k].includes(C);
      A && (C = r.value ? V : k), c(C);
    };
    le(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var b = {
      sync: w,
      validate: O,
      resetValidation: v,
      reset: y
    };
    return $(o, b), $(l, b), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: zb,
      classes: Lb,
      handleClick: g,
      toggle: P,
      reset: y,
      validate: O,
      resetValidation: v
    };
  }
});
ld.render = Rb;
const Jr = ld;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var pS = Jr;
function Ub(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Yb = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ub
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Fb,
  classes: Hb
} = ee("radio-group");
function Wb(e, n) {
  var r = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
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
var sd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: Yb,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Db(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = U(() => o.value), d = (y) => {
      Me(() => {
        var {
          validateTrigger: O,
          rules: P,
          modelValue: b
        } = e;
        i(O, y, P, b);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: O
      } = y;
      return O(e.modelValue);
    }), f = (y) => {
      $(e["onUpdate:modelValue"], y), $(e.onChange, y), d("onChange");
    }, c = () => l(e.rules, e.modelValue), g = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var w = {
      onToggle: f,
      validate: c,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, w), a(w), {
      errorMessage: o,
      n: Fb,
      classes: Hb,
      reset: g,
      validate: c,
      resetValidation: s
    };
  }
});
sd.render = Wb;
const Qr = sd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var hS = Qr, jb = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: qa
} = ee("rate"), Gb = ["onClick"];
function qb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [(h(!0), T(
        Pe,
        null,
        Ie(e.toNumber(e.count), (o) => Se((h(), T(
          "div",
          {
            key: o,
            style: j(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (i) => e.handleClick(o, i)
          },
          [re(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: j({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Gb
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      a,
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
var ud = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: jb,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = (y) => {
      var {
        count: O,
        gap: P
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== z(O) ? he(P) : 0
      };
    }, s = (y) => {
      var {
        name: O,
        color: P
      } = u(y);
      return {
        [qa("content")]: !0,
        [qa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [qa("--error")]: a.value,
        [qa("--primary")]: O !== e.emptyIcon && !P
      };
    }, u = (y) => {
      var {
        modelValue: O,
        disabled: P,
        disabledColor: b,
        color: C,
        half: V,
        emptyColor: k,
        icon: A,
        halfIcon: M,
        emptyIcon: B
      } = e, I = C;
      return (P || n != null && n.disabled.value) && (I = b), y <= z(O) ? {
        color: I,
        name: A
      } : V && y <= z(O) + 0.5 ? {
        color: I,
        name: M
      } : {
        color: P || n != null && n.disabled.value ? b : k,
        name: B
      };
    }, d = (y, O) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = O.target;
        O.offsetX <= Math.floor(P / 2) && (y -= 0.5);
      }
      $(e["onUpdate:modelValue"], y);
    }, v = () => o(e.rules, z(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, O) => {
      var {
        readonly: P,
        disabled: b,
        onChange: C
      } = e;
      P || b || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, O), $(C, y), f());
    }, g = () => {
      $(e["onUpdate:modelValue"], 0), i();
    }, w = {
      reset: g,
      validate: v,
      resetValidation: i
    };
    return $(r, w), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: g,
      validate: v,
      resetValidation: i,
      toSizeUnit: he,
      toNumber: z,
      n: qa
    };
  }
});
ud.render = qb;
const _r = ud;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var gS = _r;
function Kb(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Xb = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Kb
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
}, Zb = (e) => (ka(""), e = e(), $a(), e), Jb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Qb = /* @__PURE__ */ Zb(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), _b = [Qb];
function xb(e, n) {
  return h(), T("svg", Jb, _b);
}
var dd = x({});
dd.render = xb;
const e0 = dd;
var n0 = (e) => (ka(""), e = e(), $a(), e), r0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, a0 = /* @__PURE__ */ n0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), t0 = [a0];
function o0(e, n) {
  return h(), T("svg", r0, t0);
}
var vd = x({});
vd.render = o0;
const i0 = vd;
var l0 = (e) => (ka(""), e = e(), $a(), e), s0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, u0 = /* @__PURE__ */ l0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), d0 = [u0];
function v0(e, n) {
  return h(), T("svg", s0, d0);
}
var fd = x({});
fd.render = v0;
const f0 = fd;
var {
  n: c0,
  classes: m0
} = ee("result");
function p0(e, n) {
  return h(), T(
    Pe,
    null,
    [D(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), D(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: j({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: j({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        ref: "circle",
        class: m(e.n("success-circle")),
        style: j({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), D(
      "span",
      {
        class: m(e.n("success-cover-right")),
        style: j({
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
var cd = x({
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
      n: c0,
      classes: m0,
      toNumber: z
    };
  }
});
cd.render = p0;
const h0 = cd;
var g0 = (e) => (ka(""), e = e(), $a(), e), y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, b0 = /* @__PURE__ */ g0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), w0 = [b0];
function C0(e, n) {
  return h(), T("svg", y0, w0);
}
var md = x({});
md.render = C0;
const S0 = md;
var k0 = (e) => (ka(""), e = e(), $a(), e), $0 = {
  viewBox: "-4 -4 32 32"
}, T0 = /* @__PURE__ */ k0(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), O0 = [T0];
function P0(e, n) {
  return h(), T("svg", $0, O0);
}
var pd = x({});
pd.render = P0;
const V0 = pd;
var {
  n: E0,
  classes: M0
} = ee("result");
function B0(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: j({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Wa(e.type),
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
    )) : _("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var hd = x({
  name: "VarResult",
  components: {
    Info: e0,
    Success: h0,
    Warning: f0,
    Error: i0,
    Question: S0,
    Empty: V0
  },
  props: Xb,
  setup(e) {
    var n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: E0,
      classes: M0,
      toNumber: z,
      toPxNum: Ne,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
hd.render = B0;
const xr = hd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var yS = xr;
function I0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function N0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var D0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: I0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: N0
  },
  onClick: Y()
}, {
  n: A0,
  classes: z0
} = ee("row");
function L0(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: j({
        justifyContent: e.justify,
        alignItems: e.align,
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
var gd = x({
  name: "VarRow",
  props: D0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = im(), t = U(() => {
      var s = Ne(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = (s) => {
      $(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: A0,
      classes: z0,
      average: t,
      handleClick: i
    };
  }
});
gd.render = L0;
const ea = gd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var bS = ea;
function R0(e) {
  return ["left", "right", "center"].includes(e);
}
var U0 = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
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
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
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
    validator: R0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: ro,
  classes: Y0
} = ee("select"), F0 = {
  key: 1
};
function H0(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: j({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [re(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [D(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [F(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [D(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: j({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [D(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), T(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), T(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(h(!0), T(
                      Pe,
                      null,
                      Ie(e.labels, (i) => (h(), me(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Vn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [be(
                            ne(i),
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
                  )) : (h(), T(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), T(
                  "span",
                  F0,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), F(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [re(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
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
            ), D(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: j({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ne(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: j({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: j({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      o,
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
var yd = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: je
  },
  props: U0,
  setup(e) {
    var n = E(null), r = E(!1), a = U(() => e.multiple), t = U(() => e.focusColor), o = E(""), i = E([]), l = U(() => Nn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: g
    } = Qy(), {
      errorMessage: w,
      validateWithTrigger: y,
      validate: O,
      // expose
      resetValidation: P
    } = bn(), b = E(null), C = () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W) {
        var ae = Z;
        i.value = ae.map(A);
      }
      !W && !Nn(Z) && (o.value = A(Z)), !W && Nn(Z) && (o.value = "");
    }, V = (W) => {
      Me(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        y(Z, W, ae, oe);
      });
    }, k = (W) => {
      var {
        value: Z,
        label: ae
      } = W;
      return Z.value != null ? Z.value : ae.value;
    }, A = (W) => {
      var Z, ae, oe = c.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === W;
      });
      return oe || (oe = c.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === W;
      })), (Z = (ae = oe) == null ? void 0 : ae.label.value) != null ? Z : "";
    }, M = () => {
      var {
        hint: W,
        modelValue: Z
      } = e;
      if (!W && !Nn(Z))
        return ro("--placeholder-hidden");
      if (W && (!Nn(Z) || r.value))
        return ro("--placeholder-hint");
    }, B = () => n.value && window.getComputedStyle(n.value).width || "0px", I = () => {
      var {
        disabled: W,
        readonly: Z,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Z || (s.value = B(), u.value = Ne(e.offsetY), r.value = !0, $(ae), V("onFocus"));
    }, p = () => {
      var {
        disabled: W,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Z || ($(ae), V("onBlur"));
    }, S = (W) => {
      var {
        disabled: Z,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe ? c.filter((He) => {
          var {
            selected: nn
          } = He;
          return nn.value;
        }).map(k) : k(W);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), V("onChange"), !oe && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: W,
        readonly: Z,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || W || Z || !oe)) {
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), V("onClear");
      }
    }, Q = (W) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || ($(ae, W), V("onClick"));
    }, H = (W) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe, He = c.find((sn) => {
          var {
            label: Le
          } = sn;
          return Le.value === W;
        }), nn = pe.filter((sn) => {
          var Le;
          return sn !== ((Le = He.value.value) != null ? Le : He.label.value);
        });
        $(e["onUpdate:modelValue"], nn), $(ge, nn), V("onClose");
      }
    }, R = () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W) {
        var ae = Z;
        c.forEach((oe) => oe.sync(ae.includes(k(oe))));
      } else
        c.forEach((oe) => oe.sync(Z === k(oe)));
      C();
    }, J = () => {
      s.value = B(), u.value = Ne(e.offsetY), r.value = !0;
    }, G = () => {
      r.value = !1;
    }, K = () => O(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    le(() => e.multiple, () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W && !we(Z))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, R, {
      deep: !0
    }), le(() => f.value, R);
    var X = {
      wrapWidth: U(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: S,
      reset: N,
      validate: K,
      resetValidation: P
    };
    return g(X), $(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: w,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: b,
      n: ro,
      classes: Y0,
      computePlaceholderState: M,
      handleFocus: I,
      handleBlur: p,
      handleClear: L,
      handleClick: Q,
      handleClose: H,
      reset: N,
      validate: K,
      resetValidation: P,
      focus: J,
      blur: G
    };
  }
});
yd.render = H0;
const na = yd;
na.install = function(e) {
  e.component(na.name, na);
};
var wS = na, W0 = {
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
  n: j0,
  classes: G0
} = ee("skeleton");
function q0(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), T(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: j({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (h(), T(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: j({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: j({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : _("v-if", !0), (h(!0), T(
            Pe,
            null,
            Ie(e.toNumber(e.rows), (r, a) => (h(), T(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: j({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
                "div",
                {
                  class: m(e.n("--animation"))
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (h(), T(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: j({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var bd = x({
  name: "VarSkeleton",
  props: W0,
  setup() {
    return {
      n: j0,
      classes: G0,
      toSizeUnit: he,
      toNumber: z
    };
  }
});
bd.render = q0;
const ra = bd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var CS = ra;
function K0(e) {
  return ["always", "normal", "never"].includes(e);
}
var Be;
(function(e) {
  e.First = "1", e.Second = "2";
})(Be || (Be = {}));
var X0 = {
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
    validator: K0
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
  rules: {
    type: Array
  },
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Vl,
  classes: Z0
} = ee("slider"), J0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Q0(e, n) {
  var r = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: m(e.n("track"))
        },
        [D(
          "div",
          {
            class: m(e.n("track-background")),
            style: j({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.n("track-fill")),
            style: j(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), T(
        Pe,
        null,
        Ie(e.thumbList, (a) => (h(), T(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: j({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [F(e.$slots, "button", {
            currentValue: a.text
          }, () => [D(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: j({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: j({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: j({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [D(
              "span",
              null,
              ne(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          J0
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
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
var wd = x({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: X0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Ee({
      [Be.First]: s(),
      [Be.Second]: s()
    }), g = U(() => z(e.max) - z(e.min)), w = U(() => v.value / g.value * z(e.step)), y = U(() => {
      var {
        modelValue: G,
        range: K
      } = e, N = [];
      return K && we(G) ? N = [{
        value: V(G[0]),
        enumValue: Be.First,
        text: k(G[0])
      }, {
        value: V(G[1]),
        enumValue: Be.Second,
        text: k(G[1])
      }] : xe(G) && (N = [{
        value: V(G),
        enumValue: Be.First,
        text: k(G)
      }]), N;
    }), O = U(() => {
      var {
        activeColor: G,
        range: K,
        modelValue: N
      } = e, X = K && we(N) ? V(Math.min(N[0], N[1])) : 0, W = K && we(N) ? V(Math.max(N[0], N[1])) - X : V(N);
      return {
        width: W + "%",
        left: X + "%",
        background: G
      };
    }), P = U(() => e.disabled || (r == null ? void 0 : r.disabled.value)), b = U(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (G) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[G].active, V = (G) => {
      var {
        min: K,
        max: N
      } = e;
      return G < z(K) ? 0 : G > z(N) ? 100 : (G - z(K)) / g.value * 100;
    }, k = (G) => {
      if (!xe(G))
        return 0;
      var K = G;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var N = parseInt("" + K, 10) === K;
      return N ? K : z(K.toPrecision(5));
    }, A = (G, K) => {
      var N = [], {
        step: X,
        range: W,
        modelValue: Z,
        onChange: ae,
        min: oe
      } = e, ge = z(X), pe = Math.round(G / w.value), He = pe * ge + z(oe), nn = c[K].percentValue * ge + z(oe);
      if (c[K].percentValue = pe, W && we(Z) && (N = K === Be.First ? [He, Z[1]] : [Z[0], He]), nn !== He) {
        var sn = W ? N.map((Le) => k(Le)) : k(He);
        $(ae, sn), $(e["onUpdate:modelValue"], sn), u();
      }
    }, M = (G) => {
      if (!e.range)
        return Be.First;
      var K = c[Be.First].percentValue * w.value, N = c[Be.Second].percentValue * w.value, X = Math.abs(G - K), W = Math.abs(G - N);
      return X <= W ? Be.First : Be.Second;
    }, B = (G, K) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || b.value) && ($(e.onStart), f.value = !0, c[K].startPosition = G.touches[0].clientX);
    }, I = (G, K) => {
      if (!(P.value || b.value || !f.value)) {
        var N = G.touches[0].clientX - c[K].startPosition + c[K].currentLeft;
        c[K].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), A(N, K);
      }
    }, p = (G) => {
      var {
        range: K,
        modelValue: N,
        onEnd: X,
        step: W,
        min: Z
      } = e;
      if (!(P.value || b.value)) {
        var ae = [];
        c[G].currentLeft = c[G].percentValue * w.value, c[G].active = !1;
        var oe = c[G].percentValue * z(W) + z(Z);
        K && we(N) && (ae = G === Be.First ? [oe, N[1]] : [N[0], oe]), $(X, K ? ae : oe), f.value = !1;
      }
    }, S = (G) => {
      if (!(P.value || b.value) && !G.target.closest("." + Vl("thumb"))) {
        var K = G.clientX - vv(G.currentTarget), N = M(K);
        A(K, N), p(N);
      }
    }, L = () => {
      var G = z(e.step);
      return isNaN(G) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : G < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: G,
        modelValue: K
      } = e;
      return G && !we(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !G && we(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : G && we(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, H = function(G, K) {
      G === void 0 && (G = e.modelValue), K === void 0 && (K = z(e.step));
      var N = (X) => {
        var {
          min: W,
          max: Z
        } = e;
        return X < z(W) ? 0 : X > z(Z) ? g.value / K : (X - z(W)) / K;
      };
      e.range && we(G) ? (c[Be.First].percentValue = N(G[0]), c[Be.First].currentLeft = c[Be.First].percentValue * w.value, c[Be.Second].percentValue = N(G[1]), c[Be.Second].currentLeft = c[Be.Second].percentValue * w.value) : xe(G) && (c[Be.First].currentLeft = N(G) * w.value);
    }, R = () => {
      var G = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], G), i();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return $(n, J), le([() => e.modelValue, () => e.step], (G) => {
      var [K, N] = G;
      !L() || !Q() || f.value || H(K, z(N));
    }), le(v, () => H()), ze(() => {
      !L() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Vl,
      classes: Z0,
      Thumbs: Be,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: c,
      thumbList: y,
      multiplySizeUnit: Qe,
      toNumber: z,
      showLabel: C,
      start: B,
      move: I,
      end: p,
      click: S
    };
  }
});
wd.render = Q0;
const aa = wd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var SS = aa;
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
function _0(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function x0(e) {
  return bi.includes(e);
}
var Cd = {
  type: {
    type: String,
    validator: x0
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: _0
  },
  // content内容
  content: {
    type: String
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
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingRadius: Xe(xn, "radius"),
  loadingColor: jo({}, Xe(xn, "color"), {
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
  onOpen: Y(),
  // 打开动画结束时的回调
  onOpened: Y(),
  // 关闭时的回调函数
  onClose: Y(),
  // 关闭动画结束时的回调
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: e1,
  classes: n1
} = ee("snackbar"), r1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function a1(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return Se((h(), T(
    "div",
    {
      class: m(e.n()),
      style: j({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: j({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (h(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (h(), me(
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
        )) : _("v-if", !0), F(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Ha, e.show]]);
}
var Sd = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: Cd,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = ot(() => e.show, 1);
    Rt(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? r1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? ($(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), $(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ze(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: bi,
      n: e1,
      classes: n1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Sd.render = a1;
const kd = Sd;
var {
  n: t1
} = ee("snackbar");
function o1(e, n) {
  var r = ie("var-snackbar-core");
  return h(), me(
    Fa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [re(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [F(e.$slots, "action")]),
            default: ve(() => [F(e.$slots, "default", {}, () => [be(
              ne(e.content),
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
var $d = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: kd
  },
  props: Cd,
  setup() {
    var {
      disabled: e
    } = ri();
    return {
      n: t1,
      disabled: e
    };
  }
});
$d.render = o1;
const ta = $d;
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, rt.apply(this, arguments);
}
function i1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var bi = ["loading", "success", "warning", "info", "error"], El = 0, Go = !1, Td, Ua = !1, Od = {
  type: void 0,
  content: "",
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
}, yn = Ee([]), wi = Od, l1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, s1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ua && (a.position = "top");
        var i = Ua ? "relative" : "absolute", l = rt({
          position: i
        }, m1(a.position));
        return re(kd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(av, Ve(l1, {
        style: {
          zIndex: dn.zIndex
        },
        onAfterEnter: u1,
        onAfterLeave: d1
      }), i1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  var n = f1(e), r = Ee(rt({}, wi, n));
  r.show = !0, Go || (Go = !0, Td = ja(s1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: El++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ua)
    v1(t);
  else {
    var o = "update-" + El;
    c1(r, o);
  }
  return {
    clear() {
      !Ua && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
bi.forEach((e) => {
  Wn[e] = (n) => (_o(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.install = function(e) {
  e.component(ta.name, ta);
};
Wn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ua && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ua = e);
};
Wn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  wi = e;
};
Wn.resetDefaultOptions = function() {
  wi = Od;
};
Wn.Component = ta;
function u1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === z(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function d1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && ($(Td), yn = Ee([]), Go = !1);
}
function v1(e) {
  yn.push(e);
}
function f1(e) {
  return e === void 0 && (e = {}), qe(e) ? {
    content: e
  } : e;
}
function c1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = rt({}, r.reactiveSnackOptions, e), r._update = n;
}
function m1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ta.install = function(e) {
  e.component(ta.name, ta);
};
var kS = ta;
const qo = Wn;
var Pd = (e) => ["mini", "small", "normal", "large"].includes(e), p1 = (e) => Pd(e) || we(e) || xe(e) || qe(e), h1 = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), g1 = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: p1
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
    default: "start",
    validator: h1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function un(e) {
  return "calc(" + e + " / 2)";
}
function y1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = un(e) + " " + n + " " + un(e) + " 0" : l = un(e) + " 0" : t === "space-around" ? l = un(e) + " " + un(n) : t === "space-between" && (o === 0 ? l = un(e) + " " + un(n) + " " + un(e) + " 0" : o === i ? l = un(e) + " 0 " + un(e) + " " + un(n) : l = un(e) + " " + un(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: ao,
  classes: b1
} = ee("space");
const oa = x({
  name: "VarSpace",
  props: g1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (o, i) => i ? ["var(--space-size-" + o + "-y)", "var(--space-size-" + o + "-x)"] : we(o) ? o.map(he) : [he(o), he(o)], t = (o) => o === "start" || o === "end" ? "flex-" + o : o;
    return () => {
      var o, {
        inline: i,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (o = $(r.default)) != null ? o : [], c = Pd(v), [g, w] = a(v, c), y = (b) => {
        var C = [];
        return b.forEach((V) => {
          if (V.type !== tv) {
            if (V.type === Pe && we(V.children)) {
              V.children.forEach((k) => {
                C.push(k);
              });
              return;
            }
            C.push(V);
          }
        }), C;
      };
      f = y(f);
      var O = f.length - 1, P = f.map((b, C) => {
        var V = y1(g, w, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: O
        });
        return re("div", {
          style: {
            margin: V
          }
        }, [b]);
      });
      return re("div", {
        class: b1(ao(), ao("$--box"), [i, ao("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + g + " / 2) 0" : void 0
        }
      }, [P]);
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var $S = oa, w1 = {
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
}, Vd = Symbol("STEPS_BIND_STEP_KEY"), Ed = Symbol("STEPS_COUNT_STEP_KEY");
function C1() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Vd), {
    length: r
  } = vn(Ed);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function S1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Vd), {
    index: r
  } = fn(Ed);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: k1,
  classes: $1
} = ee("step"), T1 = {
  key: 3
};
function O1(e, n) {
  var r = ie("var-icon");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: j({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), me(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (h(), me(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (h(), me(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), T(
            "span",
            T1,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
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
      ), e.isLastChild ? _("v-if", !0) : (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: j({
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
var Md = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: w1,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = S1(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = U(() => i.value === a.value), c = U(() => a.value !== -1 && i.value > a.value), g = {
      index: a
    }, w = () => v(a.value), y = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return o(g), le(l, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: k1,
      classes: $1,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: w,
      getRef: y
    };
  }
});
Md.render = O1;
const ia = Md;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var TS = ia;
function P1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var V1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: P1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: E1
} = ee("steps");
function M1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n()),
      style: j({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Bd = x({
  name: "VarSteps",
  props: V1,
  setup(e) {
    var n = U(() => e.active), r = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
      length: o,
      bindStep: i
    } = C1(), l = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: E1
    };
  }
});
Bd.render = M1;
const la = Bd;
la.install = function(e) {
  e.component(la.name, la);
};
var OS = la, B1 = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: I1
} = ee("style-provider"), N1 = x({
  name: "VarStyleProvider",
  props: B1,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Ul(e.tag, {
      class: I1(),
      style: Xl(e.styleVars)
    }, $(r.default));
  }
});
const sa = N1;
var to = [];
function at(e) {
  to.forEach((r) => document.documentElement.style.removeProperty(r)), to.length = 0;
  var n = Xl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), to.push(a);
  });
}
at.Component = sa;
sa.install = function(e) {
  e.component(sa.name, sa);
};
at.install = function(e) {
  e.component(sa.name, sa);
};
var PS = sa, D1 = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: A1,
  classes: z1
} = ee("switch");
function L1(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: j(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: j(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Se((h(), T(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: j(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: j(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : _("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), re(
      a,
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
var Id = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: D1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = U(() => {
      var {
        size: g,
        modelValue: w,
        color: y,
        closeColor: O,
        loadingColor: P,
        activeValue: b
      } = e;
      return {
        handle: {
          width: Qe(g),
          height: Qe(g),
          backgroundColor: w === b ? y : O,
          color: P
        },
        ripple: {
          left: w === b ? Qe(g, 0.5) : "-" + Qe(g, 0.5),
          color: w === b ? y : O || "#999",
          width: Qe(g, 2),
          height: Qe(g, 2)
        },
        track: {
          height: Qe(g, 0.72),
          width: Qe(g, 1.9),
          borderRadius: Qe(g, 2 / 3),
          filter: w === b || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: w === b ? y : O
        },
        switch: {
          height: Qe(g, 1.2),
          width: Qe(g, 2)
        }
      };
    }), d = U(() => {
      var {
        size: g = "5.333vw"
      } = e;
      return Qe(g, 0.4);
    }), v = (g) => {
      var {
        onClick: w,
        onChange: y,
        disabled: O,
        loading: P,
        readonly: b,
        modelValue: C,
        activeValue: V,
        inactiveValue: k,
        "onUpdate:modelValue": A
      } = e;
      if ($(w, g), !(O || P || b || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var M = C === V ? k : V;
        $(y, M), $(A, M), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return $(n, c), {
      n: A1,
      classes: z1,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Id.render = L1;
const ua = Id;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var VS = ua, R1 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Nd = Symbol("TABS_BIND_TAB_KEY"), Dd = Symbol("TABS_COUNT_TAB_KEY");
function U1() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Nd), {
    length: r
  } = vn(Dd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Y1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Nd), {
    index: r
  } = fn(Dd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: mt,
  classes: F1
} = ee("tab");
function H1(e, n) {
  var r = Fe("ripple");
  return Se((h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: j({
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
var Ad = x({
  name: "VarTab",
  directives: {
    Ripple: Ae
  },
  props: R1,
  setup(e) {
    var n = E(null), r = U(() => e.name), a = U(() => e.disabled), t = U(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Y1(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: g
    } = i, w = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(w);
    var y = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? f.value : u.value === C || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, O = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? mt("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? mt("$-tab--active") : mt("$-tab--inactive");
    }, P = (b) => {
      var {
        disabled: C,
        name: V,
        onClick: k
      } = e;
      C || ($(k, V ?? o.value, b), s(w));
    };
    return le(() => e.name, g), le(() => e.disabled, g), {
      n: mt,
      classes: F1,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: O,
      handleClick: P
    };
  }
});
Ad.render = H1;
const da = Ad;
da.install = function(e) {
  e.component(da.name, da);
};
var ES = da, zd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Ld = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function W1() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(zd), {
    length: r
  } = vn(Ld);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function j1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(zd), {
    index: r
  } = fn(Ld);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var G1 = {
  name: {
    type: [String, Number]
  }
}, {
  n: q1,
  classes: K1
} = ee("tab-item");
function X1(e, n) {
  var r = ie("var-swipe-item");
  return h(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? F(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var Rd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: G1,
  setup(e) {
    var n = E(!1), r = E(!1), a = U(() => e.name), {
      index: t,
      bindTabsItems: o
    } = j1(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: q1,
      classes: K1,
      current: n,
      initSlot: r
    };
  }
});
Rd.render = X1;
const va = Rd;
va.install = function(e) {
  e.component(va.name, va);
};
var MS = va, Z1 = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: J1,
  classes: Q1
} = ee("table");
function _1(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("main"))
      },
      [D(
        "table",
        {
          class: m(e.n("table")),
          style: j({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = x({
  name: "VarTable",
  props: Z1,
  setup() {
    return {
      toSizeUnit: he,
      n: J1,
      classes: Q1
    };
  }
});
Ud.render = _1;
const fa = Ud;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var BS = fa;
function Ml(e) {
  return ["horizontal", "vertical"].includes(e);
}
var x1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Ml
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Ml
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
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Xe(bt, "cssMode"),
  stickyZIndex: Xe(bt, "zIndex"),
  offsetTop: Xe(bt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function Bl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Il(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Bl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Bl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ew,
  classes: nw
} = ee("tabs");
function rw(e, n) {
  return h(), me(
    Wa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [D(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [F(e.$slots, "default"), D(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: j({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
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
var Yd = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: x1,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = U(() => e.active), s = U(() => e.activeColor), u = U(() => e.inactiveColor), d = U(() => e.disabledColor), v = U(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: g,
      length: w
    } = U1(), y = (I) => {
      var p, S = (p = I.name.value) != null ? p : I.index.value, {
        active: L,
        onChange: Q,
        onClick: H
      } = e;
      $(e["onUpdate:active"], S), $(H, S), S !== L && $(Q, S);
    }, O = () => c.find((I) => {
      var {
        name: p
      } = I;
      return e.active === p.value;
    }), P = (I) => c.find((p) => {
      var {
        index: S
      } = p;
      return (I ?? e.active) === S.value;
    }), b = () => {
      if (w.value !== 0) {
        var {
          active: I
        } = e;
        if (xe(I)) {
          var p = I > w.value - 1 ? w.value - 1 : 0;
          return $(e["onUpdate:active"], p), P(p);
        }
      }
    }, C = () => {
      o.value = c.length >= 5;
    }, V = (I) => {
      var {
        element: p
      } = I, S = p.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, k = (I) => {
      var {
        element: p
      } = I;
      if (o.value) {
        var S = i.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Q = L.offsetLeft + L.offsetWidth / 2 - S.offsetWidth / 2;
          Qa(S, {
            left: Q,
            animation: io
          });
        } else {
          var H = L.offsetTop + L.offsetHeight / 2 - S.offsetHeight / 2;
          Qa(S, {
            top: H,
            animation: io
          });
        }
      }
    }, A = () => {
      var I = O() || P() || b();
      !I || I.disabled.value || (C(), V(I), k(I));
    }, M = /* @__PURE__ */ function() {
      var I = Il(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), B = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: A,
      onTabClick: y
    };
    return g(B), le(() => w.value, /* @__PURE__ */ Il(function* () {
      yield En(), A();
    })), le(() => e.active, A), ze(() => window.addEventListener("resize", A)), pr(() => window.removeEventListener("resize", A)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: he,
      n: ew,
      classes: nw,
      resize: A,
      resizeSticky: M
    };
  }
});
Yd.render = rw;
const ca = Yd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var IS = ca, aw = {
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
  "onUpdate:active": Y()
};
function Nl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Nl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Nl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ow
} = ee("tabs-items");
function iw(e, n) {
  var r = ie("var-swipe");
  return h(), me(
    r,
    {
      class: m(e.n()),
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
var Fd = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: aw,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = W1(), o = (f) => r.find((c) => {
      var {
        name: g
      } = c;
      return f === g.value;
    }), i = (f) => r.find((c) => {
      var {
        index: g
      } = c;
      return f === g.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var c, g = l(f);
      g && (r.forEach((w) => {
        var {
          setCurrent: y
        } = w;
        return y(!1);
      }), g.setCurrent(!0), (c = n.value) == null || c.to(g.index.value));
    }, u = (f) => {
      var c, g = r.find((y) => {
        var {
          index: O
        } = y;
        return O.value === f;
      }), w = (c = g.name.value) != null ? c : g.index.value;
      $(e["onUpdate:active"], w);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ tw(function* () {
      yield En(), s(e.active);
    })), {
      swipe: n,
      n: ow,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Fd.render = iw;
const ma = Fd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var NS = ma;
const lw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, sw = {
  "--badge-default-color": "#555"
}, uw = {
  "--button-default-color": "#303030"
}, dw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, vw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, fw = {
  "--checkbox-unchecked-color": "#fff"
}, cw = {
  "--chip-default-color": "#555"
}, mw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, pw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, hw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, gw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, yw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, bw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, ww = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Cw = {
  "--popup-content-background-color": "#1e1e1e"
}, Sw = {
  "--pull-refresh-background": "#303030"
}, kw = {
  "--radio-unchecked-color": "#fff"
}, $w = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, Tw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, Ow = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, Pw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, Vw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, Ew = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, Mw = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Bw = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, Iw = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, Nw = {
  "--tabs-background": "#1e1e1e"
}, Dw = {
  "--app-bar-color": "#272727"
}, Aw = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, zw = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, Lw = {
  "--menu-background-color": "#272727"
}, Rw = {
  "--breadcrumb-inactive-color": "#aaa"
}, Uw = {
  "--paper-background": "#303030"
}, Yw = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
const Fw = Ko({
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
}, uw, vw, dw, Bw, pw, Ow, Nw, Ew, Cw, hw, lw, cw, sw, Iw, mw, Sw, Vw, Pw, bw, Mw, yw, Tw, kw, fw, gw, ww, Dw, Aw, zw, Lw, $w, Rw, Uw, Yw);
var Hw = {
  dark: Fw
}, DS = null;
const Xo = Hw;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Dl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Ww(e) {
  return ["ampm", "24hr"].includes(e);
}
var jw = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
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
    validator: Ww
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
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, Hd = (e, n) => e === "24hr" || n === "am", Ci = (e, n, r) => {
  var a = pn.findIndex((o) => z(o) === z(r)), t = Hd(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, Wd = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Ci(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: g,
      minute: w
    } = an(l);
    f = g === v && a > w;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: O
    } = an(s);
    f = y === v && a < O;
  }
  if (l && s) {
    var {
      hour: P,
      minute: b
    } = an(l), {
      hour: C,
      minute: V
    } = an(s);
    f = C === v && a < V || P === v && a > b;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, jd = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Ci(t, o, i), c = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: y,
      second: O
    } = an(s);
    c = w === f && y < l || y === l && a > O;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: b,
      second: C
    } = an(u);
    c = P === f && b > l || b === l && a > C;
  }
  if (s && u) {
    var {
      hour: V,
      minute: k,
      second: A
    } = an(s), {
      hour: M,
      minute: B,
      second: I
    } = an(u);
    c = V === f && k < l || M === f && B > l || V === f && k === l && a > A || M === f && B === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || g;
}, {
  n: Gw,
  classes: qw
} = ee("time-picker");
function Kw(e, n) {
  return h(), T(
    "div",
    {
      class: m(e.n("clock"))
    },
    [D(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: j(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), T(
      Pe,
      null,
      Ie(e.timeScales, (r, a) => (h(), T(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: j(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Pe,
        null,
        Ie(e.hours24, (r, a) => (h(), T(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: j(e.getStyle(a, r, !0))
          },
          ne(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Gd = x({
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
    } = n, a = E(null), t = E([]), o = E([]), i = U(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = U(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = U(() => e.type === "hour" ? pn : Dl), u = (y, O) => {
      var P;
      y = (P = y) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var b = e.type === "minute" ? Wd : jd, C = {
        time: z(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return O && e.type === "minute" && Reflect.deleteProperty(C, "minute"), b(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var y = e.isInner ? _e[l.value] : s.value[l.value];
      return s.value === Dl ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, O) => O ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Hd(e.format, e.ampm))
          return t.value.includes(y);
        var O = pn.findIndex((P) => P === y);
        return o.value.includes(O);
      }
      return u(y, !0);
    }, c = (y, O, P) => {
      var b = 2 * Math.PI / 12 * y - Math.PI / 2, C = 50 * (1 + Math.cos(b)), V = 50 * (1 + Math.sin(b)), k = () => v(y, P) ? f(O) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: A,
        color: M
      } = k();
      return {
        left: C + "%",
        top: V + "%",
        backgroundColor: A,
        color: M
      };
    }, g = () => {
      var {
        width: y,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: O
      };
    }, w = () => {
      if (l.value !== void 0) {
        var y = e.ampm === "am" ? pn : _e;
        return ga(y[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (y, O) => {
      var [P, b] = y, [C, V] = O, k = P === C && b === V;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var A = b ? _e[l.value] : w(), M = e.useSeconds ? ":" + e.time.second : "", B = A + ":" + e.time.minute + M;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), le(() => e.rad, (y, O) => {
      if (!(e.type === "hour" || y === void 0 || O === void 0)) {
        var P = y / 6 >= 0 ? y / 6 : y / 6 + 60, b = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (P !== b) {
          var C, {
            hourStr: V
          } = Ci(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(P).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            C = V + ":" + k + A;
          }
          if (e.type === "second") {
            var M = te().second(P).format("ss"), B = e.useSeconds ? ":" + M : "";
            C = V + ":" + e.time.minute + B;
          }
          r("update", C);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [O, P, b] = y;
      if (t.value = [], O && !P) {
        var {
          hour: C
        } = an(O), V = pn.filter((J) => z(J) > C), k = _e.filter((J) => z(J) > C);
        t.value = [...V, ...k];
      }
      if (!O && P) {
        var {
          hour: A
        } = an(P), M = pn.filter((J) => z(J) < A), B = _e.filter((J) => z(J) < A);
        t.value = [...M, ...B];
      }
      if (O && P) {
        var {
          hour: I
        } = an(O), {
          hour: p
        } = an(P), S = pn.filter((J) => z(J) < p || z(J) > I), L = _e.filter((J) => z(J) < p || z(J) > I);
        t.value = [...S, ...L];
      }
      if (b != null && b.hours) {
        var {
          hours: Q
        } = b, H = pn.filter((J) => !Q(z(J))), R = _e.filter((J) => !Q(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...H, ...R])];
      }
      o.value = t.value.map((J) => _e.findIndex((G) => J === G)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: Gw,
      classes: qw,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: g,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
Gd.render = Kw;
const Xw = Gd;
var {
  n: Zw,
  classes: Jw
} = ee("time-picker"), Qw = (e) => (ka(""), e = e(), $a(), e), _w = /* @__PURE__ */ Qw(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), xw = {
  key: 0
};
function eC(e, n) {
  var r = ie("clock");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: j({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), _w, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", xw, ":")) : _("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), D(
      "div",
      {
        class: m(e.n("body"))
      },
      [D(
        "div",
        {
          class: m(e.n("clock-container")),
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
        [re(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), me(
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
var qd = x({
  name: "VarTimePicker",
  components: {
    Clock: Xw
  },
  props: jw,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), o = E(!1), i = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), g = E(!1), w = E(!1), y = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ee({
      x: 0,
      y: 0
    }), P = Ee({
      x: [],
      y: []
    }), b = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, V = (N) => N * 57.29577951308232, k = (N) => {
      l.value = !1, w.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: X
      } = a.value, W = pn.findIndex((oe) => z(oe) === z(y.value.hour)), Z = N === "am" ? pn : _e, ae = [...Z.slice(W), ...Z.slice(0, W)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !X.includes(oe)));
    }, M = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = A(N);
        if (X) {
          var W = e.useSeconds ? ":" + y.value.second : "", Z = ga(X, 2, "0") + ":" + y.value.minute + W;
          C(Z);
        }
      }
    }, B = (N, X) => {
      var W = N >= P.x[0] && N <= P.x[1], Z = X >= P.y[0] && X <= P.y[1];
      return W && Z;
    }, I = (N) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: Z,
        second: ae
      } = an(N);
      return {
        hour: te().hour(W).format(X),
        minute: te().minute(Z).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, p = (N) => {
      var X = N / 30;
      return X >= 0 ? X : X + 12;
    }, S = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), W = O.x - N / 2 - 8, Z = O.x + N / 2 + 8, ae = O.y - X / 2 - 8, oe = O.y + X / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: Z,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, L = (N, X, W) => {
      var {
        disableHour: Z
      } = a.value;
      i.value = B(N, X);
      var ae = Math.round(W / 30) * 30 + 90, oe = p(ae), ge = t.value ? pn[oe] : _e[oe];
      if (Z.includes(ge) || (t.value = e.format === "24hr" ? B(N, X) : !1), t.value === i.value) {
        var pe = t.value || c.value === "pm" ? _e[oe] : pn[oe];
        g.value = Z.includes(pe), !g.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Z = W / 6 >= 0 ? W / 6 : W / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      w.value = Wd(ae), !w.value && (d.value = W, s.value = !0);
    }, H = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Z = W / 6 >= 0 ? W / 6 : W / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        minute: z(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      jd(ae) || (v.value = W);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: W,
        height: Z
      } = n.value.getBoundingClientRect();
      if (O.x = N + W / 2, O.y = X + Z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: pe
        } = S();
        P.x = [ae, oe], P.y = [ge, pe];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: W
        } = N.touches[0], Z = X - O.x, ae = W - O.y, oe = Math.round(V(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, W, oe) : f.value === "minute" ? Q(oe) : H(oe);
      }
    }, G = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, K = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: W,
          second: Z
        } = an(N), ae = te().hour(X).format("hh"), oe = te().hour(X).format("HH"), ge = te().minute(W).format("mm"), pe = te().second(Z).format("ss");
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(ge) * 6, v.value = z(pe) * 6, y.value = I(N), e.format !== "24hr" && (c.value = ga("" + X, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: Zw,
      classes: Jw,
      getRad: b,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: J,
      checkPanel: k,
      checkAmpm: M,
      end: G,
      update: C,
      changePreventUpdate: K
    };
  }
});
qd.render = eC;
const pa = qd;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var AS = pa, nC = {
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
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function Al(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Al(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Al(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: rC,
  classes: aC
} = ee("uploader"), tC = 0, oC = ["onClick"], iC = ["onClick"], lC = ["src", "alt"], sC = ["multiple", "accept", "capture", "disabled"], uC = ["src"];
function dC(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Fe("ripple");
  return h(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(h(!0), T(
        Pe,
        null,
        Ie(e.files, (i) => Se((h(), T(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [i.state === "loading", e.n("--loading")])),
            key: i.id,
            onClick: (l) => e.preview(i)
          },
          [D(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(i.name || i.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((l) => e.handleRemove(i), ["stop"])
            },
            [re(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            iC
          )) : _("v-if", !0), i.cover ? (h(), T(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: j({
                objectFit: i.fit
              }),
              src: i.cover,
              alt: i.name
            },
            null,
            14,
            lC
          )) : _("v-if", !0), D(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          oC
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((h(), T(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [D(
          "input",
          {
            ref: "input",
            type: "file",
            class: m(e.n("action-input")),
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
          sC
        ), F(e.$slots, "default", {}, () => [re(
          r,
          {
            class: m(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
        /* CLASS */
      )), [[o, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), re(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (i) => e.showPreview = i),
        onClosed: n[3] || (n[3] = (i) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var i, l;
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (h(), T(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            uC
          )) : _("v-if", !0)];
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
var Kd = x({
  name: "VarUploader",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: je
  },
  props: nC,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = U(() => {
      var {
        maxlength: H,
        modelValue: {
          length: R
        }
      } = e;
      return xe(H) ? R + " / " + H : "";
    }), {
      form: o,
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = U(() => {
      var {
        modelValue: H,
        hideList: R
      } = e;
      return R ? [] : H;
    }), f = (H) => {
      var {
        disabled: R,
        readonly: J,
        previewed: G
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || J || !G)) {
        var {
          url: K
        } = H;
        if (qe(K) && Pi(K)) {
          Hn(K);
          return;
        }
        qe(K) && Vi(K) && (a.value = H, r.value = !0);
      }
    }, c = (H) => ({
      id: tC++,
      url: "",
      cover: "",
      name: H.name,
      file: H
    }), g = (H) => {
      var R = H.target, {
        files: J
      } = R;
      return Array.from(J);
    }, w = (H) => new Promise((R) => {
      var J = new FileReader();
      J.onload = () => {
        var G = J.result;
        H.file.type.startsWith("image") && (H.cover = G), H.url = G, R(H);
      }, J.readAsDataURL(H.file);
    }), y = (H) => H.map(w), O = (H) => {
      var {
        onBeforeRead: R
      } = e;
      return H.map((J) => new Promise((G) => {
        R || G({
          valid: !0,
          varFile: J
        });
        var K = $(R, Ee(J));
        K = we(K) ? K : [K], Promise.all(K).then((N) => {
          G({
            valid: !N.some((X) => !X),
            varFile: J
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var H = zl(function* (R) {
        var {
          maxsize: J,
          maxlength: G,
          modelValue: K,
          onOversize: N,
          onAfterRead: X,
          readonly: W,
          disabled: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Z || W)) {
          var ae = (Le) => Le.filter((cn) => cn.file.size > z(J) ? ($(N, Ee(cn)), !1) : !0), oe = (Le) => {
            var cn = Math.min(Le.length, z(G) - K.length);
            return Le.slice(0, cn);
          }, ge = g(R), pe = ge.map(c);
          pe = J != null ? ae(pe) : pe, pe = G != null ? oe(pe) : pe;
          var He = yield Promise.all(y(pe)), nn = yield Promise.all(O(He)), sn = nn.filter((Le) => {
            var {
              valid: cn
            } = Le;
            return cn;
          }).map((Le) => {
            var {
              varFile: cn
            } = Le;
            return cn;
          });
          $(e["onUpdate:modelValue"], [...K, ...sn]), R.target.value = "", sn.forEach((Le) => $(X, Ee(Le)));
        }
      });
      return function(J) {
        return H.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var H = zl(function* (R) {
        var {
          disabled: J,
          readonly: G,
          modelValue: K,
          onBeforeRemove: N,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          if (N) {
            var W = $(N, Ee(R));
            if (W = we(W) ? W : [W], (yield Promise.all(W)).some((ae) => !ae))
              return;
          }
          var Z = K.filter((ae) => ae !== R);
          $(X, Ee(R)), I("onRemove"), $(e["onUpdate:modelValue"], Z);
        }
      });
      return function(J) {
        return H.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((H) => H.state === "success"), V = () => e.modelValue.filter((H) => H.state === "error"), k = () => e.modelValue.filter((H) => H.state === "loading"), A = () => {
      n.value.click();
    }, M = () => {
      a.value = null, r.value = !1, Hn.close();
    }, B = {
      getSuccess: C,
      getError: V,
      getLoading: k
    }, I = (H) => {
      Me(() => {
        var {
          validateTrigger: R,
          rules: J,
          modelValue: G
        } = e;
        s(R, H, J, G, B);
      });
    }, p = !1, S = () => u(e.rules, e.modelValue, B), L = () => {
      p = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: S,
      resetValidation: d,
      reset: L
    };
    return $(i, Q), le(() => e.modelValue, () => {
      !p && I("onChange"), p = !1;
    }, {
      deep: !0
    }), {
      n: rC,
      classes: aC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Vi,
      isHTMLSupportImage: Pi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: b,
      getSuccess: C,
      getError: V,
      getLoading: k,
      validate: S,
      resetValidation: d,
      reset: L,
      chooseFile: A,
      closePreview: M
    };
  }
});
Kd.render = dC;
const ha = Kd;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var zS = ha;
const vC = "2.8.2";
function fC(e) {
  ya.install && e.use(ya), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), ar.install && e.use(ar), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Or.install && e.use(Or), en.install && e.use(en), Pr.install && e.use(Pr), Vr.install && e.use(Vr), tr.install && e.use(tr), or.install && e.use(or), Er.install && e.use(Er), ir.install && e.use(ir), Mr.install && e.use(Mr), Br.install && e.use(Br), Ir.install && e.use(Ir), dn.install && e.use(dn), Nr.install && e.use(Nr), Dr.install && e.use(Dr), zr.install && e.use(zr), ba.install && e.use(ba), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ln.install && e.use(Ln), je.install && e.use(je), $e.install && e.use($e), Ur.install && e.use(Ur), Hn.install && e.use(Hn), Yr.install && e.use(Yr), Fr.install && e.use(Fr), vr.install && e.use(vr), _a.install && e.use(_a), Hr.install && e.use(Hr), Wr.install && e.use(Wr), $n.install && e.use($n), Ho.install && e.use(Ho), co.install && e.use(co), Fn.install && e.use(Fn), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Sa.install && e.use(Sa), hn.install && e.use(hn), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), Ae.install && e.use(Ae), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), qo.install && e.use(qo), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Yn.install && e.use(Yn), at.install && e.use(at), Rn.install && e.use(Rn), Un.install && e.use(Un), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), Xo.install && e.use(Xo), pa.install && e.use(pa), ur.install && e.use(ur), ha.install && e.use(ha);
}
const LS = {
  version: vC,
  install: fC,
  ActionSheet: ya,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: ar,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Or,
  Button: en,
  ButtonGroup: Pr,
  Card: Vr,
  Cell: tr,
  Checkbox: or,
  CheckboxGroup: Er,
  Chip: ir,
  Col: Mr,
  Collapse: Br,
  CollapseItem: Ir,
  Context: dn,
  Countdown: Nr,
  Counter: Dr,
  DatePicker: zr,
  Dialog: ba,
  Divider: Lr,
  Ellipsis: Rr,
  Form: Ln,
  FormDetails: je,
  Icon: $e,
  Image: Ur,
  ImagePreview: Hn,
  IndexAnchor: Yr,
  IndexBar: Fr,
  Input: vr,
  Lazy: _a,
  Link: Hr,
  List: Wr,
  Loading: $n,
  LoadingBar: Ho,
  Locale: co,
  Menu: Fn,
  Option: jr,
  Overlay: Gr,
  Pagination: qr,
  Paper: Kr,
  Picker: Sa,
  Popup: hn,
  Progress: Xr,
  PullRefresh: Zr,
  Radio: Jr,
  RadioGroup: Qr,
  Rate: _r,
  Result: xr,
  Ripple: Ae,
  Row: ea,
  Select: na,
  Skeleton: ra,
  Slider: aa,
  Snackbar: qo,
  Space: oa,
  Step: ia,
  Steps: la,
  Sticky: Yn,
  StyleProvider: at,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: ua,
  Tab: da,
  TabItem: va,
  Table: fa,
  Tabs: ca,
  TabsItems: ma,
  Themes: Xo,
  TimePicker: pa,
  Tooltip: ur,
  Uploader: ha
};
export {
  ya as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  ar as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Or as Breadcrumbs,
  en as Button,
  Pr as ButtonGroup,
  Vr as Card,
  tr as Cell,
  or as Checkbox,
  Er as CheckboxGroup,
  ir as Chip,
  Mr as Col,
  Br as Collapse,
  Ir as CollapseItem,
  dn as Context,
  Nr as Countdown,
  Dr as Counter,
  zr as DatePicker,
  ba as Dialog,
  Lr as Divider,
  Rr as Ellipsis,
  Ln as Form,
  je as FormDetails,
  $e as Icon,
  Ur as Image,
  Hn as ImagePreview,
  Yr as IndexAnchor,
  Fr as IndexBar,
  vr as Input,
  _a as Lazy,
  Hr as Link,
  Wr as List,
  $n as Loading,
  Ho as LoadingBar,
  co as Locale,
  Fn as Menu,
  jr as Option,
  Gr as Overlay,
  ho as PIXEL,
  qr as Pagination,
  Kr as Paper,
  Sa as Picker,
  hn as Popup,
  Xr as Progress,
  Zr as PullRefresh,
  Jr as Radio,
  Qr as RadioGroup,
  _r as Rate,
  xr as Result,
  Ae as Ripple,
  ea as Row,
  bi as SNACKBAR_TYPE,
  na as Select,
  ra as Skeleton,
  aa as Slider,
  qo as Snackbar,
  oa as Space,
  ia as Step,
  la as Steps,
  Yn as Sticky,
  at as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  ua as Switch,
  da as Tab,
  va as TabItem,
  fa as Table,
  ca as Tabs,
  ma as TabsItems,
  Xo as Themes,
  pa as TimePicker,
  ur as Tooltip,
  ha as Uploader,
  bC as _ActionSheetComponent,
  wC as _AppBarComponent,
  SC as _AvatarComponent,
  kC as _AvatarGroupComponent,
  OC as _BackTopComponent,
  PC as _BadgeComponent,
  VC as _BottomNavigationComponent,
  EC as _BottomNavigationItemComponent,
  MC as _BreadcrumbComponent,
  BC as _BreadcrumbsComponent,
  TC as _ButtonComponent,
  IC as _ButtonGroupComponent,
  NC as _CardComponent,
  DC as _CellComponent,
  zC as _CheckboxComponent,
  LC as _CheckboxGroupComponent,
  RC as _ChipComponent,
  UC as _ColComponent,
  YC as _CollapseComponent,
  FC as _CollapseItemComponent,
  mC as _ContextComponent,
  HC as _CountdownComponent,
  WC as _CounterComponent,
  jC as _DatePickerComponent,
  GC as _DialogComponent,
  qC as _DividerComponent,
  XC as _EllipsisComponent,
  ZC as _FormComponent,
  AC as _FormDetailsComponent,
  gC as _IconComponent,
  JC as _ImageComponent,
  xC as _ImagePreviewComponent,
  nS as _IndexAnchorComponent,
  rS as _IndexBarComponent,
  aS as _InputComponent,
  CC as _LazyComponent,
  tS as _LinkComponent,
  oS as _ListComponent,
  iS as _LoadingBarComponent,
  $C as _LoadingComponent,
  yC as _LocaleComponent,
  lS as _MenuComponent,
  sS as _OptionComponent,
  uS as _OverlayComponent,
  dS as _PaginationComponent,
  vS as _PaperComponent,
  fS as _PickerComponent,
  hC as _PopupComponent,
  cS as _ProgressComponent,
  mS as _PullRefreshComponent,
  pS as _RadioComponent,
  hS as _RadioGroupComponent,
  gS as _RateComponent,
  yS as _ResultComponent,
  pC as _RippleComponent,
  bS as _RowComponent,
  wS as _SelectComponent,
  CS as _SkeletonComponent,
  SS as _SliderComponent,
  kS as _SnackbarComponent,
  $S as _SpaceComponent,
  TS as _StepComponent,
  OS as _StepsComponent,
  eS as _StickyComponent,
  PS as _StyleProviderComponent,
  QC as _SwipeComponent,
  _C as _SwipeItemComponent,
  VS as _SwitchComponent,
  ES as _TabComponent,
  MS as _TabItemComponent,
  BS as _TableComponent,
  IS as _TabsComponent,
  NS as _TabsItemsComponent,
  DS as _ThemesComponent,
  AS as _TimePickerComponent,
  KC as _TooltipComponent,
  zS as _UploaderComponent,
  Lv as actionSheetProps,
  oi as add,
  Kv as appBarProps,
  bf as avatarGroupProps,
  cf as avatarProps,
  Ff as backTopProps,
  Kf as badgeProps,
  ac as bottomNavigationItemProps,
  Qf as bottomNavigationProps,
  uc as breadcrumbProps,
  pc as breadcrumbsProps,
  Df as buttonProps,
  Oc as cardProps,
  Ic as cellProps,
  Zc as checkboxGroupProps,
  Fc as checkboxProps,
  nm as chipProps,
  om as colProps,
  pm as collapseItemProps,
  vm as collapseProps,
  bm as countdownProps,
  pp as counterProps,
  zp as datePickerProps,
  LS as default,
  Ue as defaultLazyOptions,
  xp as dialogProps,
  lh as dividerProps,
  as as enUS,
  zc as formDetailsProps,
  Mg as formProps,
  ns as iconProps,
  ss as imageCache,
  _g as imagePreviewProps,
  Ag as imageProps,
  sy as indexAnchorProps,
  fy as indexBarProps,
  yy as inputProps,
  fC as install,
  Oy as linkProps,
  My as listProps,
  Ay as loadingBarProps,
  xn as loadingProps,
  Ky as menuProps,
  os as merge,
  xy as optionProps,
  ab as overlayProps,
  We as pack,
  ts as packs,
  ob as paginationProps,
  db as paperProps,
  mb as pickerProps,
  tt as popupProps,
  Sb as progressProps,
  Eb as pullRefreshProps,
  Yb as radioGroupProps,
  Nb as radioProps,
  jb as rateProps,
  Xb as resultProps,
  D0 as rowProps,
  U0 as selectProps,
  W0 as skeletonProps,
  X0 as sliderProps,
  Cd as snackbarProps,
  g1 as spaceProps,
  w1 as stepProps,
  V1 as stepsProps,
  bt as stickyProps,
  B1 as styleProviderProps,
  Au as swipeProps,
  D1 as switchProps,
  G1 as tabItemProps,
  R1 as tabProps,
  Z1 as tableProps,
  aw as tabsItemsProps,
  x1 as tabsProps,
  jw as timePickerProps,
  bg as tooltipProps,
  nC as uploaderProps,
  ii as use,
  ti as useLocale,
  vC as version,
  ai as zhCN
};
