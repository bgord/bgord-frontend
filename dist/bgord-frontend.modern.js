import * as e from "react";
import t, {
  useState as n,
  useEffect as r,
  useRef as a,
  useLayoutEffect as o,
  useMemo as u,
} from "react";
import { tinykeys as i } from "tinykeys";
import l from "js-cookie";
import { polishPlurals as s } from "polish-plurals";
import * as c from "ts-storage";
function d() {
  return (
    (d = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    d.apply(null, arguments)
  );
}
function f(e, t) {
  if (null == e) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
class m {
  constructor(e) {
    (this.message = void 0), (this._known = !0), (this.message = e.message);
  }
  static isServerError(e) {
    return !!(
      e &&
      "object" == typeof e &&
      e === Object(e) &&
      e.hasOwnProperty("_known") &&
      e.hasOwnProperty("message")
    );
  }
  static async extract(e) {
    if (e.ok) return e;
    const t = await e.json(),
      n = m.isServerError(t) ? t.message : "app.error.general";
    throw new m({ message: n });
  }
  static async handle(e) {
    throw new m({
      message: m.isServerError(e) ? e.message : "app.error.general",
    });
  }
}
const v = (e, t) =>
  fetch(
    e,
    d({ mode: "same-origin", redirect: "follow" }, t, {
      headers: d(
        {
          "Content-Type": "application/json",
          "time-zone-offset": new Date().getTimezoneOffset().toString(),
        },
        null == t ? void 0 : t.headers,
      ),
    }),
  )
    .then(m.extract)
    .catch(m.handle);
class p {
  static format(e) {
    const t = Math.floor(e / 60),
      n = e % 60;
    return `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
  }
}
const g = [
  "value",
  "set",
  "clear",
  "label",
  "input",
  "changed",
  "unchanged",
  "handleChange",
];
function h(e, t) {
  const a = "function" == typeof t ? t() : t,
    [o, u] = n(a);
  return (
    r(() => u(a), [a]),
    {
      value: o,
      set: u,
      handleChange: (e) => u(e.currentTarget.value),
      clear: () => u(a),
      label: { props: { htmlFor: e } },
      input: { props: { id: e, name: e } },
      changed: o !== a,
      unchanged: o === a,
    }
  );
}
function w(e) {
  const {
    value: t,
    set: n,
    clear: r,
    label: a,
    input: o,
    changed: u,
    unchanged: i,
    handleChange: l,
  } = e;
  return {
    field: {
      value: t,
      set: n,
      clear: r,
      label: a,
      input: o,
      changed: u,
      unchanged: i,
      handleChange: l,
    },
    rest: f(e, g),
  };
}
class y {
  static allUnchanged(e) {
    return e.every((e) => e.unchanged);
  }
  static anyUnchanged(e) {
    return e.some((e) => e.unchanged);
  }
  static anyChanged(e) {
    return e.some((e) => e.changed);
  }
  static clearAll(e) {
    return () => {
      for (const t of e) t.clear();
    };
  }
}
const b = 1;
var x;
function E(t) {
  const [n, r] = e.useState(x.initial),
    a = e.useRef(null),
    o = h("duration", 0),
    u = h("currentTime", 0),
    i = h("volume", 1),
    l = 0 === i.value,
    s = 0 === o.value ? 0 : Math.round((u.value / o.value) * 100);
  function c(e) {
    const t = e.currentTarget;
    a.current &&
      ((a.current.currentTime = t.valueAsNumber), u.set(t.valueAsNumber));
  }
  function d(e) {
    const t = e.currentTarget;
    a.current && ((a.current.volume = t.valueAsNumber), i.set(t.valueAsNumber));
  }
  return {
    props: {
      audio: {
        src: t,
        onTimeUpdate: function (e) {
          u.set(Math.round(e.target.currentTime));
        },
        onLoadedMetadata: function (e) {
          const t = e.currentTarget;
          (a.current = t),
            o.set(Math.round(t.duration)),
            u.set(t.currentTime),
            i.set(t.volume),
            r(x.ready);
        },
        onEnded: function () {
          r(x.paused);
        },
        controls: !1,
      },
      player: {
        min: 0,
        step: 1,
        max: o.value,
        value: u.value,
        onInput: c,
        style: { "--percentage": `${s}%` },
      },
      volume: {
        min: 0,
        max: 1,
        step: 0.01,
        value: i.value,
        onInput: d,
        style: { "--percentage": `${Math.floor(100 * i.value)}%` },
      },
    },
    actions: {
      play: function () {
        a.current && (a.current.play(), r(x.playing));
      },
      pause: function () {
        a.current && (a.current.pause(), r(x.paused));
      },
      mute: function () {
        a.current && ((a.current.volume = 0), i.set(0));
      },
      unmute: function () {
        a.current && ((a.current.volume = 1), i.set(1));
      },
      reset: function () {
        a.current &&
          ((a.current.currentTime = 0),
          a.current.pause(),
          u.set(0),
          r(x.paused));
      },
      seek: c,
      changeVolume: d,
    },
    meta: {
      state: n,
      isInitial: n === x.initial,
      isReady: n === x.ready,
      isPlaying: n === x.playing,
      isPaused: n === x.paused,
      matches: (e) => e.some((e) => e === n),
      percentage: { raw: s, formatted: `${s}%` },
      currentTime: { raw: u.value, formatted: p.format(u.value) },
      duration: { raw: o.value, formatted: p.format(o.value) },
      volume: {
        value: i.value,
        raw: Math.floor(100 * i.value),
        formatted: `${Math.floor(100 * i.value)}%`,
      },
      muted: l,
    },
  };
}
function T(e) {
  t.useEffect(() => {
    var t;
    e.condition && (null == (t = e.ref.current) || t.focus());
  }, [e.condition]);
}
function S() {
  if ("undefined" != typeof window) return window;
}
function M() {
  const [e, t] = n({ width: void 0, height: void 0 });
  return (
    r(() => {
      const e = S();
      if (e)
        return (
          e.addEventListener("resize", n),
          n(),
          () => e.removeEventListener("resize", n)
        );
      function n() {
        t({
          width: null == e ? void 0 : e.innerWidth,
          height: null == e ? void 0 : e.innerHeight,
        });
      }
    }, []),
    e
  );
}
function D(e) {
  var t;
  const n = M();
  return (null != (t = null == n ? void 0 : n.width) ? t : 0) <= e;
}
function L(e, n, r) {
  t.useEffect(() => {
    if (e.current)
      return (
        document.addEventListener("mousedown", t),
        () => document.removeEventListener("mousedown", t)
      );
    function t(t) {
      var a;
      (null != (a = e.current) && a.contains(t.target)) ||
        (null == r
          ? void 0
          : r.some((e) => {
              var n;
              return null == (n = e.current) ? void 0 : n.contains(t.target);
            })) ||
        n();
    }
  }, [n, e, r]);
}
function C(e, t) {
  const n = a(t);
  return (
    r(() => {
      n.current = e;
    }),
    n.current
  );
}
function F() {}
function P(e) {
  var t, a, o, u;
  const i = null != (t = e.defaultQuery) ? t : void 0,
    l = null != (a = e.currentQuery) ? a : void 0,
    s =
      null != (o = e.filterFn)
        ? o
        : function (e) {
            return void 0 === f || f === String(e);
          },
    c = Object.keys(e.enum),
    d = null != (u = null == e ? void 0 : e.onUpdate) ? u : F,
    [f, m] = n(null != l ? l : i),
    v = C(f);
  return (
    r(() => d(f, v), [v, f]),
    {
      query: f,
      clear: function () {
        m(i);
      },
      onChange: function (t) {
        const n = t.currentTarget.value,
          r = Boolean(e.enum[String(n)]);
        m(r ? n : void 0);
      },
      filterFn: s,
      options: c,
      onUpdate: d,
      name: e.name,
      changed: f !== i,
      unchanged: f === i,
      label: { props: { htmlFor: e.name } },
      input: { props: { id: e.name, name: e.name } },
    }
  );
}
function I() {
  const [e, t] = n("");
  return {
    query: e,
    clear: function () {
      t("");
    },
    onChange: function (e) {
      t(e.currentTarget.value);
    },
    filterFn: function (t) {
      return (
        "" === e ||
        (null == t ? void 0 : t.toLowerCase().includes(e.toLowerCase()))
      );
    },
    changed: "" !== e,
    unchanged: "" === e,
  };
}
!(function (e) {
  (e.initial = "initial"),
    (e.ready = "ready"),
    (e.playing = "playing"),
    (e.paused = "paused");
})(x || (x = {}));
const A = () => 0;
function $(e, t) {
  var n;
  const r = h(e, t.enum.default);
  return d(
    r.value === t.enum.default
      ? { sortFn: A, options: Object.keys(t.options) }
      : {
          sortFn: null != (n = t.options[r.value]) ? n : A,
          options: Object.keys(t.options),
        },
    r,
    {
      handleChange: function (e) {
        const n = e.currentTarget.value,
          a = Boolean(t.enum[String(n)]);
        r.set(a ? n : t.enum.default);
      },
    },
  );
}
function k(e) {
  return {
    value: e,
    hours: 24 * e,
    minutes: 24 * e * 60,
    seconds: 24 * e * 60 * 60,
    ms: 24 * e * 60 * 60 * 1e3,
  };
}
function O(e) {
  return {
    value: e,
    minutes: 60 * e,
    seconds: 60 * e * 60,
    ms: 60 * e * 60 * 1e3,
  };
}
function N(e) {
  return { value: e, seconds: 60 * e, ms: 60 * e * 1e3 };
}
function R(e) {
  return { value: e, ms: 1e3 * e };
}
const U = { Days: k, Hours: O, Minutes: N, Seconds: R };
function _() {
  return Date.now();
}
function H() {
  const [e, t] = n(_);
  return (
    r(() => {
      const e = setInterval(() => t(_()), U.Seconds(1).ms);
      return () => clearInterval(e);
    }, []),
    e
  );
}
function j(e) {
  const [n, r] = t.useState(e.value);
  return (
    t.useEffect(() => {
      const t = setTimeout(() => r(e.value), e.delayMs);
      return () => clearTimeout(t);
    }, [e.value, e.delayMs]),
    n
  );
}
const B = ["on", "off", "enable", "disable", "toggle", "props"];
function q(e = !1, t) {
  const [r, a] = n(e);
  return {
    on: r,
    off: !r,
    enable: () => a(!0),
    disable: () => a(!1),
    toggle: () => a((e) => !e),
    props: {
      controller: { "aria-expanded": r ? "true" : "false", "aria-controls": t },
      target: { id: t },
    },
  };
}
function z(e) {
  const { on: t, off: n, enable: r, disable: a, toggle: o, props: u } = e;
  return {
    toggle: { on: t, off: n, enable: r, disable: a, toggle: o, props: u },
    rest: f(e, B),
  };
}
function W(e, t = 500) {
  const n = q(),
    a = q();
  let o;
  return (
    r(() => ((o = setTimeout(a.enable, t)), () => clearTimeout(o)), []),
    r(() => {
      if (!a.off) return e.isLoading ? n.enable() : n.disable();
    }, [e.isLoading, a.on]),
    n
  );
}
function Q(e) {
  const t = q(e),
    n = S();
  return (
    r(() => {
      n && (n.document.designMode = t.on ? "on" : "off");
    }, [t.on]),
    t
  );
}
function V(e = !0) {
  o(() => {
    if (!e) return;
    const t = document.querySelector("html"),
      n = document.body,
      r = window.getComputedStyle(t).overscrollBehavior,
      a = window.getComputedStyle(n).overscrollBehavior;
    return (
      (n.style.overscrollBehavior = "none"),
      (t.style.overscrollBehavior = "none"),
      () => {
        (n.style.overscrollBehavior = a), (t.style.overscrollBehavior = r);
      }
    );
  }, [e]);
}
function Y(e) {
  t.useEffect(() => {
    document.title = e;
  }, [e]);
}
var K, J;
function Z(e) {
  const t = e.length - e.max,
    a = e.length > e.max;
  function o() {
    return a ? K.contracted : K.expanded;
  }
  const [u, i] = n(o);
  return (
    r(() => i(o()), [e.length, e.max]),
    {
      state: u,
      displayShowMore: u === K.contracted,
      displayShowLess: u === K.expanded && a,
      actions: {
        showMore: function () {
          u === K.contracted && i(K.expanded);
        },
        showLess: function () {
          u === K.expanded && i(K.contracted);
        },
      },
      numberOfExcessiveElements: t,
      filterFn: function (t, n) {
        return u === K.expanded || n < e.max;
      },
    }
  );
}
function G(e, t) {
  var r;
  const a =
      null != (r = null == t ? void 0 : t.maxSize)
        ? r
        : Number.POSITIVE_INFINITY,
    [o, i] = n(0),
    [l, s] = n(J.idle),
    [c, d] = n(null);
  function f(e) {
    const t = e.currentTarget.files;
    if (null == t || !t[0]) return;
    const n = t[0];
    if (!(n.size > a)) return d(n), s(J.selected), n;
    s(J.error);
  }
  function m() {
    i((e) => e + 1), d(null), s(J.idle);
  }
  const v = u(() => (c ? URL.createObjectURL(c) : void 0), [c]);
  function p(e) {
    return e.some((e) => e === l);
  }
  return l === J.idle
    ? {
        state: l,
        matches: p,
        isIdle: !0,
        isSelected: !1,
        isError: !1,
        data: null,
        actions: { selectFile: f, clearFile: m },
        label: { props: { htmlFor: e } },
        input: { props: { id: e, name: e, multiple: !1, key: o } },
      }
    : l === J.selected
      ? {
          state: l,
          matches: p,
          data: c,
          isIdle: !1,
          isSelected: !0,
          isError: !1,
          actions: { selectFile: f, clearFile: m },
          preview: v,
          label: { props: { htmlFor: e } },
          input: { props: { id: e, name: e, multiple: !1, key: o } },
        }
      : {
          state: l,
          matches: p,
          data: null,
          isIdle: !1,
          isSelected: !1,
          isError: !0,
          actions: { selectFile: f, clearFile: m },
          label: { props: { htmlFor: e } },
          input: { props: { id: e, name: e, multiple: !1, key: o } },
        };
}
function X(e, n) {
  var r;
  const a = null == (r = null == n ? void 0 : n.enabled) || r;
  t.useEffect(() => {
    if (!a) return;
    const t = i(window, e);
    return () => t();
  }, [e, a]);
}
function ee(e) {
  const t = a(null);
  return (
    X({
      [e]: () => {
        var e;
        return null == (e = t.current) ? void 0 : e.focus();
      },
    }),
    { ref: t }
  );
}
function te(e) {
  var n;
  const r = null == (n = null == e ? void 0 : e.enabled) || n,
    a = t.useRef(null),
    o = q(!1),
    u = o.enable,
    i = o.disable;
  return (
    t.useEffect(() => {
      const e = a.current;
      return (
        e &&
          r &&
          (e.addEventListener("mouseenter", u),
          e.addEventListener("mouseleave", i)),
        () => {
          e &&
            r &&
            (e.removeEventListener("mouseenter", u),
            e.removeEventListener("mouseleave", i));
        }
      );
    }, []),
    { attach: { ref: a }, isHovering: o.on && r }
  );
}
!(function (e) {
  (e.contracted = "contracted"), (e.expanded = "expanded");
})(K || (K = {})),
  (function (e) {
    (e.idle = "idle"), (e.selected = "selected"), (e.error = "error");
  })(J || (J = {}));
const ne = { width: null, height: null };
async function re(e) {
  if (!e) return ne;
  const t = document.createElement("img"),
    n = new Promise((e, n) => {
      (t.onload = () => e({ width: t.width, height: t.height })),
        (t.onerror = n);
    });
  return (t.src = e), n;
}
function ae(t) {
  var n;
  const r = h("resolution", ne);
  return (
    e.useEffect(() => {
      !(async function () {
        if (t.state === J.selected)
          try {
            const e = await re(t.preview);
            return r.set(e);
          } catch (e) {
            return r.clear();
          }
        [J.error, J.idle].includes(t.state) &&
          null !== r.value.width &&
          null !== r.value.height &&
          r.clear();
      })();
    }, [t.state, null == (n = t.data) ? void 0 : n.name]),
    r.value
  );
}
const oe = () => {
    const e = q(
      "undefined" == typeof navigator ||
        "boolean" != typeof navigator.onLine ||
        navigator.onLine,
    );
    return (
      t.useEffect(() => {
        function t() {
          e.enable();
        }
        function n() {
          e.disable();
        }
        return (
          window.addEventListener("online", t),
          window.addEventListener("offline", n),
          () => {
            window.removeEventListener("online", t),
              window.removeEventListener("offline", n);
          }
        );
      }, []),
      e.on
    );
  },
  ue = { threshold: 0, root: null, rootMargin: "0%", ref: { current: null } };
function ie() {
  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}
function le(e = ue) {
  const [t, a] = n(!1);
  return (
    r(() => {
      const t = e.ref.current;
      if (!ie() || !t) return;
      const n = new IntersectionObserver((e) => {
        var t;
        return a(Boolean(null == (t = e[0]) ? void 0 : t.isIntersecting));
      }, e);
      return n.observe(t), () => n.unobserve(t);
    }, []),
    t
  );
}
function se(e, t) {
  return e === t;
}
function ce(e) {
  var t, r;
  const a = null != (t = null == e ? void 0 : e.comparisonFn) ? t : se,
    [o, u] = n(null != (r = null == e ? void 0 : e.defaultItem) ? r : null);
  return {
    clear: () => u(null),
    set: (e) => u(e),
    toggle: (e) => u((t) => (null === t ? e : a(t, e) ? null : e)),
    value: o,
    isDefault: a(o, null),
    exists: !a(o, null),
    compare: (e) => a(o, e),
  };
}
var de, fe;
function me(e) {
  const t = Object.keys(e);
  return function (n) {
    const r = n.key,
      a = e[r];
    t.includes(n.key) && e[r] && a && a();
  };
}
function ve(e) {
  if (e.language === fe.en) {
    var t;
    const n = null != (t = e.plural) ? t : `${e.singular}s`;
    return 1 === e.value ? e.singular : n;
  }
  if (e.language === fe.pl) {
    var n;
    const t = null != (n = e.value) ? n : 1;
    return 1 === t
      ? e.singular
      : s(e.singular, String(e.plural), String(e.genitive), t);
  }
  return (
    console.warn(
      `[@bgord/frontend] missing pluralization function for language ${e.language}.`,
    ),
    e.singular
  );
}
!(function (e) {
  (e.Enter = "Enter"), (e.Space = " ");
})(de || (de = {})),
  (function (e) {
    (e.en = "en"), (e.pl = "pl");
  })(fe || (fe = {}));
const pe = t.createContext({ translations: {}, language: "en" });
function ge(e) {
  return t.createElement(pe.Provider, { value: e.value }, e.children);
}
function he() {
  const e = t.useContext(pe);
  if (void 0 === e)
    throw new Error(
      "useTranslations must be used within the TranslationsContext",
    );
  return function (t, n) {
    const r = e.translations[t];
    return r
      ? n
        ? Object.entries(n).reduce(
            (e, [t, n]) => e.replace(`{{${t}}}`, String(n)),
            r,
          )
        : r
      : (console.warn(`[@bgord/frontend] missing translation for key: ${t}`),
        t);
  };
}
function we() {
  const e = t.useContext(pe);
  if (void 0 === e)
    throw new Error("useLanguage must be used within the TranslationsContext");
  return e.language;
}
function ye() {
  const e = we();
  return (t) => ve(d({}, t, { language: e }));
}
function be(e) {
  return P({
    enum: e,
    currentQuery: we(),
    name: "language",
    onUpdate: (e, t) => {
      const n = S();
      n &&
        e &&
        t &&
        t !== e &&
        (l.set("accept-language", e), n.document.location.reload());
    },
  });
}
function xe(e = !1) {
  t.useEffect(() => {
    if (e)
      return (
        window.addEventListener("beforeunload", t),
        () => window.removeEventListener("beforeunload", t)
      );
    function t(e) {
      e.preventDefault();
    }
  }, [e]);
}
function Ee(e) {
  var t, r;
  const a = null != (t = null == e ? void 0 : e.defaultItems) ? t : [],
    o =
      null != (r = null == e ? void 0 : e.comparisonFn) ? r : (e, t) => e === t,
    [u, i] = n(a);
  function l(e) {
    i((t) => (Array.isArray(e) ? [...t, ...e] : [...t, e]));
  }
  function s(e) {
    i((t) => t.filter((t) => !o(t, e)));
  }
  function c(e) {
    return u.some((t) => o(t, e));
  }
  return [
    u,
    {
      clear: function () {
        i([]);
      },
      add: l,
      remove: s,
      toggle: function (e) {
        c(e) ? s(e) : l(e);
      },
      isAdded: c,
      update: i,
    },
  ];
}
function Te() {
  return {
    onKeyDown: (e) => {
      var t;
      "Enter" === e.key &&
        e.metaKey &&
        (null == (t = e.currentTarget.form) ||
          t.dispatchEvent(new Event("submit", { cancelable: !0 })));
    },
  };
}
function Se() {
  var e, t, n;
  const r = h("meta", null),
    a = null == (e = r.value) ? void 0 : e.previousPage,
    o = null == (t = r.value) ? void 0 : t.nextPage,
    u = (null == (n = r.value) ? void 0 : n.lastPage) || 1,
    i = h("page", 1);
  return {
    current: i.value,
    last: u,
    controls: {
      firstPage: {
        active: !a,
        disabled: !1,
        exists: !0,
        go: () => i.set(1),
        value: 1,
      },
      previousPage: {
        active: !1,
        disabled: !a,
        exists: Boolean(a),
        go: () => i.set(null != a ? a : i.value),
        value: a,
      },
      nextPage: {
        active: !1,
        disabled: !o,
        exists: Boolean(o),
        go: () => i.set(null != o ? o : i.value),
        value: o,
      },
      lastPage: {
        active: i.value === u,
        disabled: !o,
        exists: !0,
        go: () => i.set(null != u ? u : i.value),
        value: u,
      },
    },
    update: (e) => r.set(e),
  };
}
class Me {
  static get(e, t) {
    return c.get(e, t).value;
  }
  static set(e, t) {
    c.set(e, t);
  }
  static clear(e) {
    c.remove(e);
  }
}
function De(t, n = !1) {
  const r = q(Me.get(t, n));
  return (
    e.useEffect(() => Me.set(t, r.on), [t, r.on]),
    d({}, r, { clear: () => Me.clear(t) })
  );
}
class Le {
  constructor(e) {
    (this.lastInvocationTimestamp = null),
      (this.options = void 0),
      (this.options = e);
  }
  verify(e) {
    if (!this.lastInvocationTimestamp)
      return (this.lastInvocationTimestamp = e), { allowed: !0 };
    const t = this.lastInvocationTimestamp + this.options.limitMs;
    return t <= e
      ? ((this.lastInvocationTimestamp = e), { allowed: !0 })
      : { allowed: !1, remainingMs: t - e };
  }
}
function Ce(e) {
  const t = a(new Le(e));
  return function (...n) {
    const r = Date.now(),
      a = t.current.verify(r);
    return a.allowed
      ? e.action(...n)
      : null == e.fallback
        ? void 0
        : e.fallback(a.remainingMs);
  };
}
function Fe() {
  const e = S(),
    [n, r] = t.useState(0),
    a = q(!1);
  return (
    t.useLayoutEffect(() => {
      function t() {
        e &&
          (r(null == e ? void 0 : e.scrollY),
          e.document.body.clientHeight < e.document.body.scrollHeight
            ? a.enable()
            : a.disable());
      }
      return (
        null == e || e.addEventListener("scroll", t),
        () => (null == e ? void 0 : e.removeEventListener("scroll", t))
      );
    }, []),
    {
      actions: {
        goToTop: function () {
          e && e.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        },
      },
      position: { value: n, isInitial: 0 === n, hasChanged: n > 0 },
      visible: a.on,
      hidden: a.off,
    }
  );
}
function Pe(e = !0) {
  r(() => {
    if (!e) return;
    const t = document.querySelector("html"),
      n = window.getComputedStyle(t).overflow;
    return (
      (t.style.overflow = "hidden"),
      () => {
        t.style.overflow = n;
      }
    );
  }, [e]);
}
function Ie(e) {
  const t = new Audio(e);
  return { play: t.play.bind(t) };
}
function Ae(e) {
  var t;
  const n = S(),
    r =
      null !=
      (t = new URLSearchParams(null == n ? void 0 : n.location.search).get(
        e.name,
      ))
        ? t
        : void 0;
  return P(
    d(
      {
        onUpdate: (t, r) => {
          if (!n) return;
          const a = new URL(n.location.toString()),
            o = new URLSearchParams(a.search);
          void 0 === t ? o.delete(e.name) : o.set(e.name, t),
            t !== r &&
              t !== r &&
              ((a.search = o.toString()),
              history.pushState({}, "", a.toString()));
        },
      },
      e,
      { defaultQuery: e.defaultQuery, currentQuery: r },
    ),
  );
}
const $e = 1;
var ke;
function Oe(t) {
  const [n, r] = e.useState(ke.initial),
    a = e.useRef(null),
    o = h("duration", 0),
    u = h("currentTime", 0),
    i = h("volume", 1),
    l = 0 === i.value,
    s = 0 === o.value ? 0 : Math.round((u.value / o.value) * 100);
  function c(e) {
    const t = e.currentTarget;
    a.current &&
      ((a.current.currentTime = t.valueAsNumber), u.set(t.valueAsNumber));
  }
  function d(e) {
    const t = e.currentTarget;
    a.current && ((a.current.volume = t.valueAsNumber), i.set(t.valueAsNumber));
  }
  return {
    props: {
      video: {
        src: t,
        onTimeUpdate: function (e) {
          u.set(Math.round(e.target.currentTime));
        },
        onLoadedMetadata: function (e) {
          const t = e.currentTarget;
          (a.current = t),
            o.set(Math.round(t.duration)),
            u.set(t.currentTime),
            i.set(t.volume),
            r(ke.ready);
        },
        onEnded: function () {
          r(ke.paused);
        },
        controls: !1,
      },
      player: {
        min: 0,
        step: 1,
        max: o.value,
        value: u.value,
        onInput: c,
        style: { "--percentage": `${s}%` },
      },
      volume: {
        min: 0,
        max: 1,
        step: 0.01,
        value: i.value,
        onInput: d,
        style: { "--percentage": `${Math.floor(100 * i.value)}%` },
      },
    },
    actions: {
      play: function () {
        a.current && (a.current.play(), r(ke.playing));
      },
      pause: function () {
        a.current && (a.current.pause(), r(ke.paused));
      },
      mute: function () {
        a.current && ((a.current.volume = 0), i.set(0));
      },
      unmute: function () {
        a.current && ((a.current.volume = 1), i.set(1));
      },
      reset: function () {
        a.current &&
          ((a.current.currentTime = 0),
          a.current.pause(),
          u.set(0),
          r(ke.paused));
      },
      seek: c,
      changeVolume: d,
      triggerFullscreen: function () {
        a.current && a.current.requestFullscreen();
      },
    },
    meta: {
      state: n,
      isInitial: n === ke.initial,
      isReady: n === ke.ready,
      isPlaying: n === ke.playing,
      isPaused: n === ke.paused,
      matches: (e) => e.some((e) => e === n),
      percentage: { raw: s, formatted: `${s}%` },
      currentTime: { raw: u.value, formatted: p.format(u.value) },
      duration: { raw: o.value, formatted: p.format(o.value) },
      volume: {
        value: i.value,
        raw: Math.floor(100 * i.value),
        formatted: `${Math.floor(100 * i.value)}%`,
      },
      muted: l,
    },
  };
}
function Ne(e) {
  const { toggle: n, rest: r } = z(e),
    a = t.useRef(null);
  return (
    t.useEffect(() => {
      var t, n;
      e.on
        ? null == (t = a.current) || t.showModal()
        : null == (n = a.current) || n.close();
    }, [e.on]),
    X({ Escape: n.disable }),
    T({ ref: a, condition: e.on }),
    Pe(e.on),
    L(a, n.disable),
    t.createElement(
      "dialog",
      d(
        {
          ref: a,
          tabIndex: 0,
          "aria-modal": "true",
          "data-display": e.on ? "flex" : "none",
          "data-direction": "column",
          "data-mx": "auto",
          "data-p": "24",
          "data-position": "fixed",
          "data-z": "2",
          "data-bg": "white",
          "data-br": "4",
          "data-bc": "gray-300",
          "data-bw": "1",
          "data-backdrop": "black",
        },
        r,
      ),
    )
  );
}
function Re(e) {
  return oe() ? null : t.createElement(t.Fragment, null, e.children);
}
!(function (e) {
  (e.initial = "initial"),
    (e.ready = "ready"),
    (e.playing = "playing"),
    (e.paused = "paused");
})(ke || (ke = {}));
const Ue = ["as"];
function _e(e) {
  const { as: n } = e,
    r = f(e, Ue);
  return t.createElement(
    n || "a",
    d({ target: "_blank", rel: "noreferer noopener" }, r),
  );
}
function He(e) {
  return function () {
    for (const t of e) t();
  };
}
const je = {
  Dimensions: function (e) {
    const n = M();
    return t.createElement(
      "div",
      d({ "data-fs": "12" }, e),
      n.width,
      " x ",
      n.height,
    );
  },
  Truncates: function () {
    const e = q(),
      n = h("length", 128),
      [r, a] = t.useState(new Map());
    return t.createElement(
      "div",
      { "data-display": "flex", "data-cross": "center", "data-gap": "6" },
      t.createElement(
        "label",
        d({ className: "c-label" }, n.label.props),
        "Length",
      ),
      t.createElement(
        "input",
        d(
          {
            className: "c-input",
            type: "number",
            value: n.value,
            onChange: (e) => n.set(e.currentTarget.valueAsNumber),
          },
          n.input.props,
        ),
      ),
      t.createElement(
        "button",
        {
          className: "c-button",
          "data-variant": "bare",
          type: "button",
          onClick: He([
            () =>
              (() => {
                const e = document.querySelectorAll(
                    '[data-transform="truncate"]',
                  ),
                  t = new Map(r);
                e.forEach((e) => {
                  const r = e.textContent;
                  t.has(e)
                    ? ((e.textContent = t.get(e)), t.delete(e))
                    : (t.set(e, r), (e.textContent = "x".repeat(n.value)));
                }),
                  a(t);
              })(),
            e.toggle,
          ]),
        },
        e.on ? "Hide truncates" : "Expand truncates",
      ),
    );
  },
};
function Be(e) {
  const { field: n, rest: r } = w(e);
  return t.createElement(
    t.Fragment,
    null,
    t.createElement(
      "input",
      d(
        {
          className: "c-switch-checkbox c-visually-hidden",
          type: "checkbox",
          checked: n.value,
          onChange: (e) => n.set(e.currentTarget.checked),
        },
        n.input.props,
        r,
      ),
    ),
    t.createElement(
      "label",
      d({ className: "c-switch-label" }, n.label.props),
      t.createElement("div", { className: "c-switch-slider" }),
    ),
  );
}
const qe = (e) => console.warn("Copying to clipboard not supported");
async function ze(e) {
  var t, n;
  const r = null != (t = e.onFailure) ? t : qe,
    a = null != (n = e.onSuccess) ? n : F;
  navigator.clipboard || r();
  try {
    await navigator.clipboard.writeText(e.text), a();
  } catch (e) {
    r(e);
  }
}
class We {
  static datetime(e, t = "N/A") {
    return e ? new Date(e).toLocaleString() : t;
  }
  static monthDay(e) {
    const t = new Date(e);
    return `${We._padDatePart(t.getDate())}/${We._padDatePart(t.getMonth() + 1)}`;
  }
  static form(e) {
    return e
      ? `${We._padDatePart(e.getFullYear())}-${We._padDatePart(e.getMonth() + 1)}-${We._padDatePart(e.getDate())}`
      : We.form(new Date());
  }
  static clockUTC(e) {
    const t = new Date(e);
    return `${We._padDatePart(t.getUTCHours())}:${We._padDatePart(t.getUTCMinutes())}:${We._padDatePart(t.getUTCSeconds())}`;
  }
  static clockLocal(e) {
    const t = new Date(e);
    return `${We._padDatePart(t.getHours())}:${We._padDatePart(t.getMinutes())}:${We._padDatePart(t.getSeconds())}`;
  }
  static countdown(e) {
    const t = new Date(e);
    return `${We._padDatePart(t.getHours())}:${We._padDatePart(t.getMinutes())}:${We._padDatePart(t.getSeconds())}`;
  }
  static formDatetimeLocal(e) {
    const t = e - N(new Date().getTimezoneOffset()).ms;
    return new Date(t).toISOString().slice(0, 16);
  }
  static _padDatePart(e) {
    return String(e).padStart(2, "0");
  }
}
class Qe {
  static convertUtcToLocal(e) {
    const t = new Date().getTimezoneOffset(),
      n = ((O(e).minutes - t) / 60) % 24;
    return { value: n, label: `${String(n).padStart(2, "0")}:00` };
  }
}
class Ve {
  static fromRevision(e) {
    return { "if-match": String(e) };
  }
}
class Ye {
  static fromRevision(e) {
    return { "if-match": `W/${e}` };
  }
}
const Ke = t.createContext({});
function Je(e) {
  return t.createElement(Ke.Provider, { value: e.value }, e.children);
}
function Ze() {
  const e = t.useContext(Ke);
  if (void 0 === e)
    throw new Error(
      "useFeatureFlags must be used within the FeatureFlagsContext",
    );
  return e;
}
function Ge(e) {
  const n = t.useContext(Ke);
  if (void 0 === n)
    throw new Error(
      "useFeatureFlag must be used within the FeatureFlagsContext",
    );
  return "yes" === n[e];
}
class Xe {
  constructor(e, t) {
    this.value = void 0;
    const n = this.getNonEmptyFilters(t),
      r = new URLSearchParams(n);
    this.value = "" !== r.toString() ? `${e}?${r.toString()}` : e;
  }
  getNonEmptyFilters(e) {
    return void 0 === e
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t));
  }
}
class et {
  static pattern(e) {
    var t;
    const n = null == (t = e.required) || t;
    return e.min && !e.max
      ? { pattern: `.{${e.min}}`, required: n }
      : e.min && e.max
        ? { pattern: `.{${e.min},${e.max}}`, required: n }
        : !e.min && e.max
          ? { pattern: `.{,${e.max}}`, required: n }
          : { pattern: void 0, required: n };
  }
}
function tt() {
  return !S();
}
function nt(e = 2) {
  return { "data-transform": "line-clamp", style: { "--lines": e } };
}
class rt {
  static float(e, t = 2) {
    return Number.parseFloat(e.toFixed(t));
  }
}
class at {
  constructor(e) {
    var t, n, r, a;
    (this.min = void 0),
      (this.max = void 0),
      (this.lower = void 0),
      (this.upper = void 0);
    const o = null != (t = null == (n = e.bound) ? void 0 : n.lower) ? t : 0,
      u = null != (r = null == (a = e.bound) ? void 0 : a.upper) ? r : 1;
    if (e.max - e.min < 0)
      throw new Error("Invalid MinMaxScaler min-max config");
    if (u - o <= 0) throw new Error("Invalid MinMaxScaler bound config");
    (this.min = e.min), (this.max = e.max), (this.lower = o), (this.upper = u);
  }
  scale(e) {
    const { min: t, max: n, lower: r, upper: a } = this;
    if (e < t || e > n) throw new Error("Value out of min/max range");
    return t === n
      ? { original: e, scaled: (r + a) / 2, isMin: e === t, isMax: e === n }
      : {
          original: e,
          scaled: rt.float(((e - t) / (n - t)) * (a - r) + r, 2),
          isMin: e === t,
          isMax: e === n,
        };
  }
  descale(e) {
    const { min: t, max: n, lower: r, upper: a } = this;
    if (e < r || e > a) throw new Error("Scaled value out of bounds");
    return {
      original: rt.float(((e - r) / (a - r)) * (n - t) + t, 2),
      scaled: e,
      isLowerBound: e === r,
      isUpperBound: e === a,
    };
  }
  static getMinMax(e) {
    if (0 === e.length) throw new Error("An empty array supplied");
    return { min: Math.min(...e), max: Math.max(...e) };
  }
}
class ot {
  static infinite(e) {
    var t, n, r;
    return null !=
      (t =
        null == (n = e.data) || null == (r = n.pages)
          ? void 0
          : r.flat().flatMap((e) => e.result))
      ? t
      : [];
  }
}
function ut(e) {
  var n;
  const r = null == (n = e.enabled) || n,
    [a, o] = t.useState(e.initialItems);
  t.useEffect(() => o(e.initialItems), [JSON.stringify(e.initialItems)]);
  const u = t.useRef(null),
    [i, l] = t.useState(null),
    [s, c] = t.useState(null);
  function d(e) {
    return function (t) {
      var n;
      l(e),
        (u.current = null != (n = a[e]) ? n : null),
        null != t &&
          t.dataTransfer &&
          !t.currentTarget.parentNode &&
          ((t.dataTransfer.effectAllowed = "move"),
          t.dataTransfer.setData("text/html", t.currentTarget.parentNode),
          t.dataTransfer.setDragImage(t.currentTarget.parentNode, 20, 20));
    };
  }
  function f(e) {
    return function (t) {
      t.preventDefault();
      const n = a[e];
      c(e),
        u.current !== n &&
          u.current &&
          o(a.filter((e) => e !== u.current).toSpliced(e, 0, u.current));
    };
  }
  function m(t) {
    return function (n) {
      var r;
      null !== i &&
        null !== s &&
        i !== s &&
        e.callback({
          correlationId: e.correlationId,
          id: null == (r = a[t]) ? void 0 : r.id,
          item: a[t],
          to: s,
        }),
        l(null),
        (u.current = null),
        c(null);
    };
  }
  const v = r ? (u.current ? "grabbing" : "grab") : "auto";
  return {
    items: a,
    enabled: r,
    props: {
      item: (e) => ({ onDragOver: f(e) }),
      handle: (e) => ({
        onDragStart: d(e),
        onDragEnd: m(e),
        draggable: r,
        style: { cursor: v },
      }),
    },
  };
}
function it(e = 12) {
  return {
    times(t) {
      const n = e * t,
        r = {
          height: { height: lt(n) },
          minHeight: { minHeight: lt(n) },
          maxHeight: { maxHeight: lt(n) },
          width: { width: lt(n) },
          minWidth: { minWidth: lt(n) },
          maxWidth: { maxWidth: lt(n) },
          square: { height: lt(n), width: lt(n) },
        },
        a = {
          height: { style: { height: lt(n) } },
          minHeight: { style: { minHeight: lt(n) } },
          maxHeight: { style: { maxHeight: lt(n) } },
          width: { style: { width: lt(n) } },
          minWidth: { style: { minWidth: lt(n) } },
          maxWidth: { style: { maxWidth: lt(n) } },
          square: { style: { height: lt(n), width: lt(n) } },
        };
      return d({ px: lt(n), raw: n, style: a }, r);
    },
  };
}
function lt(e) {
  return `${e}px`;
}
ot.empty = { result: [], meta: { exhausted: !0 } };
class st {
  static updatedAtMostRecent(e, t) {
    return st.descending(e.updatedAt.raw, t.updatedAt.raw);
  }
  static updatedAtLeastRecent(e, t) {
    return st.ascending(e.updatedAt.raw, t.updatedAt.raw);
  }
  static createdAtMostRecent(e, t) {
    return st.descending(e.createdAt.raw, t.createdAt.raw);
  }
  static createdAtLeastRecent(e, t) {
    return st.ascending(e.createdAt.raw, t.createdAt.raw);
  }
  static aToZ(e, t) {
    return e.localeCompare(t);
  }
  static zToA(e, t) {
    return t.localeCompare(e);
  }
  static ascending(e, t) {
    return e > t ? 1 : 0;
  }
  static descending(e, t) {
    return e < t ? 1 : 0;
  }
}
class ct {
  static format(e, t = ct.DEFAULT_SEPARATOR) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t);
  }
}
ct.DEFAULT_SEPARATOR = " ";
const dt = t.createContext(void 0);
function ft(e) {
  const [n, r] = (function () {
    var t;
    const n = null != (t = null == e ? void 0 : e.timeout) ? t : 5e3,
      [r, a] = Ee({ comparisonFn: (e, t) => e.id === t.id });
    return [
      r.toReversed(),
      {
        add: function (e) {
          const t = d({}, e, { id: String(Date.now()) });
          a.add(t), setTimeout(() => a.remove(t), n);
        },
        remove: a.remove,
        clear: a.clear,
      },
    ];
  })();
  return t.createElement(dt.Provider, { value: [n, r] }, e.children);
}
function mt() {
  const e = t.useContext(dt);
  if (void 0 === e)
    throw new Error("useToasts must be used within the ToastsContextProvider");
  return e;
}
function vt() {
  const [, e] = mt();
  return e.add;
}
export {
  v as API,
  b as AUDIO_DEFAULT_VOLUME,
  rt as Approximation,
  We as DateFormatter,
  k as Days,
  je as DevTools,
  Ne as Dialog,
  p as DurationFormatter,
  Ve as ETag,
  Je as FeatureFlagsContextProvider,
  y as Fields,
  Xe as FilterUrl,
  et as Form,
  Qe as HourFormatter,
  O as Hours,
  de as KeyNameEnum,
  nt as LineClamp,
  at as MinMaxScaler,
  N as Minutes,
  Re as OfflineIndicator,
  _e as OutboundLink,
  ot as Pagination,
  it as Rhythm,
  Me as SafeLocalStorage,
  R as Seconds,
  m as ServerError,
  st as Sorts,
  Be as Switch,
  ct as ThousandsSeparator,
  U as Time,
  ft as ToastsContextProvider,
  ge as TranslationsContextProvider,
  x as UseAudioState,
  K as UseExpandableListState,
  J as UseFileState,
  ke as UseVideoState,
  $e as VIDEO_DEFAULT_VOLUME,
  Ye as WeakETag,
  ze as copyToClipboard,
  A as defaultSortFn,
  ue as defaultUseIsVisibleConfig,
  ne as emptyImageResolution,
  He as exec,
  w as extractUseField,
  z as extractUseToggle,
  _ as getCurrentTimestamp,
  re as getImageResolution,
  S as getSafeWindow,
  tt as isClient,
  ie as isIntersectionObserverSupported,
  F as noop,
  ve as pluralize,
  E as useAudio,
  T as useAutofocus,
  D as useBreakpoint,
  L as useClickOutside,
  P as useClientFilter,
  I as useClientSearch,
  $ as useClientSort,
  H as useCurrentTimestamp,
  j as useDebounce,
  W as useDelayedLoader,
  Q as useDesignMode,
  V as useDisablePullToRefresh,
  Y as useDocumentTitle,
  Z as useExpandableList,
  Ge as useFeatureFlag,
  Ze as useFeatureFlags,
  h as useField,
  G as useFile,
  ee as useFocusKeyboardShortcut,
  te as useHover,
  ae as useImageFileResolution,
  oe as useIsOnline,
  le as useIsVisible,
  ce as useItem,
  me as useKeyHandler,
  X as useKeyboardShortcuts,
  we as useLanguage,
  be as useLanguageSelector,
  xe as useLeavingPrompt,
  Ee as useList,
  Te as useMetaEnterSubmit,
  Se as usePagination,
  De as usePersistentToggle,
  ye as usePluralize,
  C as usePreviousValue,
  Ce as useRateLimiter,
  ut as useReordering,
  Fe as useScroll,
  Pe as useScrollLock,
  Ie as useSound,
  vt as useToastTrigger,
  mt as useToastsContext,
  q as useToggle,
  he as useTranslations,
  Ae as useUrlFilter,
  Oe as useVideo,
  M as useWindowDimensions,
};
//# sourceMappingURL=bgord-frontend.modern.js.map
