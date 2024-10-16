import * as e from "react";
import n, {
  useState as t,
  useEffect as r,
  useRef as u,
  useLayoutEffect as a,
  useMemo as o,
} from "react";
import { tinykeys as i } from "tinykeys";
import l from "js-cookie";
import { polishPlurals as c } from "polish-plurals";
import * as s from "ts-storage";
function f(e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function d(e, n) {
  var t =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (
    Array.isArray(e) ||
    (t = (function (e, n) {
      if (e) {
        if ("string" == typeof e) return f(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return (
          "Object" === t && e.constructor && (t = e.constructor.name),
          "Map" === t || "Set" === t
            ? Array.from(e)
            : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? f(e, n)
              : void 0
        );
      }
    })(e)) ||
    (n && e && "number" == typeof e.length)
  ) {
    t && (e = t);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function v() {
  return (
    (v = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
    v.apply(null, arguments)
  );
}
function m(e, n) {
  if (null == e) return {};
  var t = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (n.includes(r)) continue;
      t[r] = e[r];
    }
  return t;
}
var p = /*#__PURE__*/ (function () {
    function e(e) {
      (this.message = void 0), (this._known = !0), (this.message = e.message);
    }
    return (
      (e.isServerError = function (e) {
        return !!(
          e &&
          "object" == typeof e &&
          e === Object(e) &&
          e.hasOwnProperty("_known") &&
          e.hasOwnProperty("message")
        );
      }),
      (e.extract = function (n) {
        try {
          return n.ok
            ? Promise.resolve(n)
            : Promise.resolve(n.json()).then(function (n) {
                var t = e.isServerError(n) ? n.message : "app.error.general";
                throw new e({ message: t });
              });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (e.handle = function (n) {
        try {
          throw new e({
            message: e.isServerError(n) ? n.message : "app.error.general",
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      e
    );
  })(),
  g = function (e, n) {
    return fetch(
      e,
      v({ mode: "same-origin", redirect: "follow" }, n, {
        headers: v(
          {
            "Content-Type": "application/json",
            "time-zone-offset": new Date().getTimezoneOffset().toString(),
          },
          null == n ? void 0 : n.headers,
        ),
      }),
    )
      .then(p.extract)
      .catch(p.handle);
  },
  h = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.format = function (e) {
        var n = Math.floor(e / 60),
          t = e % 60;
        return String(n).padStart(2, "0") + ":" + String(t).padStart(2, "0");
      }),
      e
    );
  })(),
  w = [
    "value",
    "set",
    "clear",
    "label",
    "input",
    "changed",
    "unchanged",
    "handleChange",
  ];
function y(e, n) {
  var u = "function" == typeof n ? n() : n,
    a = t(u),
    o = a[0],
    i = a[1];
  return (
    r(
      function () {
        return i(u);
      },
      [u],
    ),
    {
      value: o,
      set: i,
      handleChange: function (e) {
        return i(e.currentTarget.value);
      },
      clear: function () {
        return i(u);
      },
      label: { props: { htmlFor: e } },
      input: { props: { id: e, name: e } },
      changed: o !== u,
      unchanged: o === u,
    }
  );
}
function b(e) {
  return {
    field: {
      value: e.value,
      set: e.set,
      clear: e.clear,
      label: e.label,
      input: e.input,
      changed: e.changed,
      unchanged: e.unchanged,
      handleChange: e.handleChange,
    },
    rest: m(e, w),
  };
}
var x,
  E = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.allUnchanged = function (e) {
        return e.every(function (e) {
          return e.unchanged;
        });
      }),
      (e.anyUnchanged = function (e) {
        return e.some(function (e) {
          return e.unchanged;
        });
      }),
      (e.anyChanged = function (e) {
        return e.some(function (e) {
          return e.changed;
        });
      }),
      (e.clearAll = function (e) {
        return function () {
          for (var n, t = d(e); !(n = t()).done; ) n.value.clear();
        };
      }),
      e
    );
  })(),
  S = 1;
function T(n) {
  var t = e.useState(x.initial),
    r = t[0],
    u = t[1],
    a = e.useRef(null),
    o = y("duration", 0),
    i = y("currentTime", 0),
    l = y("volume", 1),
    c = 0 === l.value,
    s = 0 === o.value ? 0 : Math.round((i.value / o.value) * 100);
  function f(e) {
    var n = e.currentTarget;
    a.current &&
      ((a.current.currentTime = n.valueAsNumber), i.set(n.valueAsNumber));
  }
  function d(e) {
    var n = e.currentTarget;
    a.current && ((a.current.volume = n.valueAsNumber), l.set(n.valueAsNumber));
  }
  return {
    props: {
      audio: {
        src: n,
        onTimeUpdate: function (e) {
          i.set(Math.round(e.target.currentTime));
        },
        onLoadedMetadata: function (e) {
          var n = e.currentTarget;
          (a.current = n),
            o.set(Math.round(n.duration)),
            i.set(n.currentTime),
            l.set(n.volume),
            u(x.ready);
        },
        onEnded: function () {
          u(x.paused);
        },
        controls: !1,
      },
      player: {
        min: 0,
        step: 1,
        max: o.value,
        value: i.value,
        onInput: f,
        style: { "--percentage": s + "%" },
      },
      volume: {
        min: 0,
        max: 1,
        step: 0.01,
        value: l.value,
        onInput: d,
        style: { "--percentage": Math.floor(100 * l.value) + "%" },
      },
    },
    actions: {
      play: function () {
        a.current && (a.current.play(), u(x.playing));
      },
      pause: function () {
        a.current && (a.current.pause(), u(x.paused));
      },
      mute: function () {
        a.current && ((a.current.volume = 0), l.set(0));
      },
      unmute: function () {
        a.current && ((a.current.volume = 1), l.set(1));
      },
      reset: function () {
        a.current &&
          ((a.current.currentTime = 0),
          a.current.pause(),
          i.set(0),
          u(x.paused));
      },
      seek: f,
      changeVolume: d,
    },
    meta: {
      state: r,
      isInitial: r === x.initial,
      isReady: r === x.ready,
      isPlaying: r === x.playing,
      isPaused: r === x.paused,
      matches: function (e) {
        return e.some(function (e) {
          return e === r;
        });
      },
      percentage: { raw: s, formatted: s + "%" },
      currentTime: { raw: i.value, formatted: h.format(i.value) },
      duration: { raw: o.value, formatted: h.format(o.value) },
      volume: {
        value: l.value,
        raw: Math.floor(100 * l.value),
        formatted: Math.floor(100 * l.value) + "%",
      },
      muted: c,
    },
  };
}
function P(e) {
  n.useEffect(
    function () {
      var n;
      e.condition && (null == (n = e.ref.current) || n.focus());
    },
    [e.condition],
  );
}
function M() {
  if ("undefined" != typeof window) return window;
}
function D() {
  var e = t({ width: void 0, height: void 0 }),
    n = e[0],
    u = e[1];
  return (
    r(function () {
      var e = M();
      if (e)
        return (
          e.addEventListener("resize", n),
          n(),
          function () {
            return e.removeEventListener("resize", n);
          }
        );
      function n() {
        u({
          width: null == e ? void 0 : e.innerWidth,
          height: null == e ? void 0 : e.innerHeight,
        });
      }
    }, []),
    n
  );
}
function L(e) {
  var n,
    t = D();
  return (null != (n = null == t ? void 0 : t.width) ? n : 0) <= e;
}
function A(e, t, r) {
  n.useEffect(
    function () {
      if (e.current)
        return (
          document.addEventListener("mousedown", n),
          function () {
            return document.removeEventListener("mousedown", n);
          }
        );
      function n(n) {
        var u;
        (null != (u = e.current) && u.contains(n.target)) ||
          (null == r
            ? void 0
            : r.some(function (e) {
                var t;
                return null == (t = e.current) ? void 0 : t.contains(n.target);
              })) ||
          t();
      }
    },
    [t, e, r],
  );
}
function C(e, n) {
  var t = u(n);
  return (
    r(function () {
      t.current = e;
    }),
    t.current
  );
}
function I() {}
function F(e) {
  var n,
    u,
    a,
    o,
    i = null != (n = e.defaultQuery) ? n : void 0,
    l = null != (u = e.currentQuery) ? u : void 0,
    c =
      null != (a = e.filterFn)
        ? a
        : function (e) {
            return void 0 === v || v === String(e);
          },
    s = Object.keys(e.enum),
    f = null != (o = null == e ? void 0 : e.onUpdate) ? o : I,
    d = t(null != l ? l : i),
    v = d[0],
    m = d[1],
    p = C(v);
  return (
    r(
      function () {
        return f(v, p);
      },
      [p, v],
    ),
    {
      query: v,
      clear: function () {
        m(i);
      },
      onChange: function (n) {
        var t = n.currentTarget.value,
          r = Boolean(e.enum[String(t)]);
        m(r ? t : void 0);
      },
      filterFn: c,
      options: s,
      onUpdate: f,
      name: e.name,
      changed: v !== i,
      unchanged: v === i,
      label: { props: { htmlFor: e.name } },
      input: { props: { id: e.name, name: e.name } },
    }
  );
}
function k() {
  var e = t(""),
    n = e[0],
    r = e[1];
  return {
    query: n,
    clear: function () {
      r("");
    },
    onChange: function (e) {
      r(e.currentTarget.value);
    },
    filterFn: function (e) {
      return (
        "" === n ||
        (null == e ? void 0 : e.toLowerCase().includes(n.toLowerCase()))
      );
    },
    changed: "" !== n,
    unchanged: "" === n,
  };
}
!(function (e) {
  (e.initial = "initial"),
    (e.ready = "ready"),
    (e.playing = "playing"),
    (e.paused = "paused");
})(x || (x = {}));
var O = function () {
  return 0;
};
function N(e, n) {
  var t,
    r = y(e, n.enum.default);
  return v(
    r.value === n.enum.default
      ? { sortFn: O, options: Object.keys(n.options) }
      : {
          sortFn: null != (t = n.options[r.value]) ? t : O,
          options: Object.keys(n.options),
        },
    r,
    {
      handleChange: function (e) {
        var t = e.currentTarget.value,
          u = Boolean(n.enum[String(t)]);
        r.set(u ? t : n.enum.default);
      },
    },
  );
}
function R(e) {
  return {
    value: e,
    hours: 24 * e,
    minutes: 24 * e * 60,
    seconds: 24 * e * 60 * 60,
    ms: 24 * e * 60 * 60 * 1e3,
  };
}
function U(e) {
  return {
    value: e,
    minutes: 60 * e,
    seconds: 60 * e * 60,
    ms: 60 * e * 60 * 1e3,
  };
}
function j(e) {
  return { value: e, seconds: 60 * e, ms: 60 * e * 1e3 };
}
function _(e) {
  return { value: e, ms: 1e3 * e };
}
var H = { Days: R, Hours: U, Minutes: j, Seconds: _ };
function B() {
  return Date.now();
}
function q() {
  var e = t(B),
    n = e[0],
    u = e[1];
  return (
    r(function () {
      var e = setInterval(function () {
        return u(B());
      }, H.Seconds(1).ms);
      return function () {
        return clearInterval(e);
      };
    }, []),
    n
  );
}
function z(e) {
  var t = n.useState(e.value),
    r = t[0],
    u = t[1];
  return (
    n.useEffect(
      function () {
        var n = setTimeout(function () {
          return u(e.value);
        }, e.delayMs);
        return function () {
          return clearTimeout(n);
        };
      },
      [e.value, e.delayMs],
    ),
    r
  );
}
var W,
  Q,
  V = ["on", "off", "enable", "disable", "toggle", "props"];
function Y(e, n) {
  void 0 === e && (e = !1);
  var r = t(e),
    u = r[0],
    a = r[1];
  return {
    on: u,
    off: !u,
    enable: function () {
      return a(!0);
    },
    disable: function () {
      return a(!1);
    },
    toggle: function () {
      return a(function (e) {
        return !e;
      });
    },
    props: {
      controller: { "aria-expanded": u ? "true" : "false", "aria-controls": n },
      target: { id: n },
    },
  };
}
function K(e) {
  return {
    toggle: {
      on: e.on,
      off: e.off,
      enable: e.enable,
      disable: e.disable,
      toggle: e.toggle,
      props: e.props,
    },
    rest: m(e, V),
  };
}
function J(e, n) {
  void 0 === n && (n = 500);
  var t,
    u = Y(),
    a = Y();
  return (
    r(function () {
      return (
        (t = setTimeout(a.enable, n)),
        function () {
          return clearTimeout(t);
        }
      );
    }, []),
    r(
      function () {
        if (!a.off) return e.isLoading ? u.enable() : u.disable();
      },
      [e.isLoading, a.on],
    ),
    u
  );
}
function Z(e) {
  var n = Y(e),
    t = M();
  return (
    r(
      function () {
        t && (t.document.designMode = n.on ? "on" : "off");
      },
      [n.on],
    ),
    n
  );
}
function $(e) {
  void 0 === e && (e = !0),
    a(
      function () {
        if (e) {
          var n = document.querySelector("html"),
            t = document.body,
            r = window.getComputedStyle(n).overscrollBehavior,
            u = window.getComputedStyle(t).overscrollBehavior;
          return (
            (t.style.overscrollBehavior = "none"),
            (n.style.overscrollBehavior = "none"),
            function () {
              (t.style.overscrollBehavior = u),
                (n.style.overscrollBehavior = r);
            }
          );
        }
      },
      [e],
    );
}
function G(e) {
  n.useEffect(
    function () {
      document.title = e;
    },
    [e],
  );
}
function X(e) {
  var n = e.length - e.max,
    u = e.length > e.max;
  function a() {
    return u ? W.contracted : W.expanded;
  }
  var o = t(a),
    i = o[0],
    l = o[1];
  return (
    r(
      function () {
        return l(a());
      },
      [e.length, e.max],
    ),
    {
      state: i,
      displayShowMore: i === W.contracted,
      displayShowLess: i === W.expanded && u,
      actions: {
        showMore: function () {
          i === W.contracted && l(W.expanded);
        },
        showLess: function () {
          i === W.expanded && l(W.contracted);
        },
      },
      numberOfExcessiveElements: n,
      filterFn: function (n, t) {
        return i === W.expanded || t < e.max;
      },
    }
  );
}
function ee(e, n) {
  var r,
    u =
      null != (r = null == n ? void 0 : n.maxSize)
        ? r
        : Number.POSITIVE_INFINITY,
    a = t(0),
    i = a[0],
    l = a[1],
    c = t(Q.idle),
    s = c[0],
    f = c[1],
    d = t(null),
    v = d[0],
    m = d[1];
  function p(e) {
    var n = e.currentTarget.files;
    if (null != n && n[0]) {
      var t = n[0];
      if (!(t.size > u)) return m(t), f(Q.selected), t;
      f(Q.error);
    }
  }
  function g() {
    l(function (e) {
      return e + 1;
    }),
      m(null),
      f(Q.idle);
  }
  var h = o(
    function () {
      return v ? URL.createObjectURL(v) : void 0;
    },
    [v],
  );
  function w(e) {
    return e.some(function (e) {
      return e === s;
    });
  }
  return s === Q.idle
    ? {
        state: s,
        matches: w,
        isIdle: !0,
        isSelected: !1,
        isError: !1,
        data: null,
        actions: { selectFile: p, clearFile: g },
        label: { props: { htmlFor: e } },
        input: { props: { id: e, name: e, multiple: !1, key: i } },
      }
    : s === Q.selected
      ? {
          state: s,
          matches: w,
          data: v,
          isIdle: !1,
          isSelected: !0,
          isError: !1,
          actions: { selectFile: p, clearFile: g },
          preview: h,
          label: { props: { htmlFor: e } },
          input: { props: { id: e, name: e, multiple: !1, key: i } },
        }
      : {
          state: s,
          matches: w,
          data: null,
          isIdle: !1,
          isSelected: !1,
          isError: !0,
          actions: { selectFile: p, clearFile: g },
          label: { props: { htmlFor: e } },
          input: { props: { id: e, name: e, multiple: !1, key: i } },
        };
}
function ne(e, t) {
  var r,
    u = null == (r = null == t ? void 0 : t.enabled) || r;
  n.useEffect(
    function () {
      if (u) {
        var n = i(window, e);
        return function () {
          return n();
        };
      }
    },
    [e, u],
  );
}
function te(e) {
  var n,
    t = u(null);
  return (
    ne(
      (((n = {})[e] = function () {
        var e;
        return null == (e = t.current) ? void 0 : e.focus();
      }),
      n),
    ),
    { ref: t }
  );
}
function re(e) {
  var t,
    r = null == (t = null == e ? void 0 : e.enabled) || t,
    u = n.useRef(null),
    a = Y(!1),
    o = a.enable,
    i = a.disable;
  return (
    n.useEffect(function () {
      var e = u.current;
      return (
        e &&
          r &&
          (e.addEventListener("mouseenter", o),
          e.addEventListener("mouseleave", i)),
        function () {
          e &&
            r &&
            (e.removeEventListener("mouseenter", o),
            e.removeEventListener("mouseleave", i));
        }
      );
    }, []),
    { attach: { ref: u }, isHovering: a.on && r }
  );
}
!(function (e) {
  (e.contracted = "contracted"), (e.expanded = "expanded");
})(W || (W = {})),
  (function (e) {
    (e.idle = "idle"), (e.selected = "selected"), (e.error = "error");
  })(Q || (Q = {}));
var ue = function (e) {
    try {
      if (!e) return Promise.resolve(ae);
      var n = document.createElement("img"),
        t = new Promise(function (e, t) {
          (n.onload = function () {
            return e({ width: n.width, height: n.height });
          }),
            (n.onerror = t);
        });
      return (n.src = e), Promise.resolve(t);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  ae = { width: null, height: null };
function oe(n) {
  var t,
    r = y("resolution", ae);
  return (
    e.useEffect(
      function () {
        !(function () {
          try {
            var e,
              t = function (t) {
                if (e) return t;
                [Q.error, Q.idle].includes(n.state) &&
                  null !== r.value.width &&
                  null !== r.value.height &&
                  r.clear();
              },
              u = (function () {
                if (n.state === Q.selected)
                  return (function (t, u) {
                    try {
                      var a = Promise.resolve(ue(n.preview)).then(function (n) {
                        var t = r.set(n);
                        return (e = 1), t;
                      });
                    } catch (e) {
                      return u();
                    }
                    return a && a.then ? a.then(void 0, u) : a;
                  })(0, function () {
                    var n = r.clear();
                    return (e = 1), n;
                  });
              })();
            Promise.resolve(u && u.then ? u.then(t) : t(u));
          } catch (e) {
            return Promise.reject(e);
          }
        })();
      },
      [n.state, null == (t = n.data) ? void 0 : t.name],
    ),
    r.value
  );
}
var ie,
  le,
  ce = function () {
    var e = Y(
      "undefined" == typeof navigator ||
        "boolean" != typeof navigator.onLine ||
        navigator.onLine,
    );
    return (
      n.useEffect(function () {
        function n() {
          e.enable();
        }
        function t() {
          e.disable();
        }
        return (
          window.addEventListener("online", n),
          window.addEventListener("offline", t),
          function () {
            window.removeEventListener("online", n),
              window.removeEventListener("offline", t);
          }
        );
      }, []),
      e.on
    );
  },
  se = { threshold: 0, root: null, rootMargin: "0%", ref: { current: null } };
function fe() {
  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}
function de(e) {
  void 0 === e && (e = se);
  var n = t(!1),
    u = n[0],
    a = n[1];
  return (
    r(function () {
      var n = e.ref.current;
      if (fe() && n) {
        var t = new IntersectionObserver(function (e) {
          var n;
          return a(Boolean(null == (n = e[0]) ? void 0 : n.isIntersecting));
        }, e);
        return (
          t.observe(n),
          function () {
            return t.unobserve(n);
          }
        );
      }
    }, []),
    u
  );
}
function ve(e, n) {
  return e === n;
}
function me(e) {
  var n,
    r,
    u = null != (n = null == e ? void 0 : e.comparisonFn) ? n : ve,
    a = t(null != (r = null == e ? void 0 : e.defaultItem) ? r : null),
    o = a[0],
    i = a[1];
  return {
    clear: function () {
      return i(null);
    },
    set: function (e) {
      return i(e);
    },
    toggle: function (e) {
      return i(function (n) {
        return null === n ? e : u(n, e) ? null : e;
      });
    },
    value: o,
    isDefault: u(o, null),
    exists: !u(o, null),
    compare: function (e) {
      return u(o, e);
    },
  };
}
function pe(e) {
  var n = Object.keys(e);
  return function (t) {
    var r = t.key,
      u = e[r];
    n.includes(t.key) && e[r] && u && u();
  };
}
function ge(e) {
  if (e.language === le.en) {
    var n,
      t = null != (n = e.plural) ? n : e.singular + "s";
    return 1 === e.value ? e.singular : t;
  }
  if (e.language === le.pl) {
    var r,
      u = null != (r = e.value) ? r : 1;
    return 1 === u
      ? e.singular
      : c(e.singular, String(e.plural), String(e.genitive), u);
  }
  return (
    console.warn(
      "[@bgord/frontend] missing pluralization function for language " +
        e.language +
        ".",
    ),
    e.singular
  );
}
!(function (e) {
  (e.Enter = "Enter"), (e.Space = " ");
})(ie || (ie = {})),
  (function (e) {
    (e.en = "en"), (e.pl = "pl");
  })(le || (le = {}));
var he = n.createContext({ translations: {}, language: "en" });
function we(e) {
  return n.createElement(he.Provider, { value: e.value }, e.children);
}
function ye() {
  var e = n.useContext(he);
  if (void 0 === e)
    throw new Error(
      "useTranslations must be used within the TranslationsContext",
    );
  return function (n, t) {
    var r = e.translations[n];
    return r
      ? t
        ? Object.entries(t).reduce(function (e, n) {
            return e.replace("{{" + n[0] + "}}", String(n[1]));
          }, r)
        : r
      : (console.warn("[@bgord/frontend] missing translation for key: " + n),
        n);
  };
}
function be() {
  var e = n.useContext(he);
  if (void 0 === e)
    throw new Error("useLanguage must be used within the TranslationsContext");
  return e.language;
}
function xe() {
  var e = be();
  return function (n) {
    return ge(v({}, n, { language: e }));
  };
}
function Ee(e) {
  return F({
    enum: e,
    currentQuery: be(),
    name: "language",
    onUpdate: function (e, n) {
      var t = M();
      t &&
        e &&
        n &&
        n !== e &&
        (l.set("accept-language", e), t.document.location.reload());
    },
  });
}
function Se(e) {
  void 0 === e && (e = !1),
    n.useEffect(
      function () {
        if (e)
          return (
            window.addEventListener("beforeunload", n),
            function () {
              return window.removeEventListener("beforeunload", n);
            }
          );
        function n(e) {
          e.preventDefault();
        }
      },
      [e],
    );
}
function Te(e) {
  var n,
    r,
    u = null != (n = null == e ? void 0 : e.defaultItems) ? n : [],
    a =
      null != (r = null == e ? void 0 : e.comparisonFn)
        ? r
        : function (e, n) {
            return e === n;
          },
    o = t(u),
    i = o[0],
    l = o[1];
  function c(e) {
    l(function (n) {
      return Array.isArray(e) ? [].concat(n, e) : [].concat(n, [e]);
    });
  }
  function s(e) {
    l(function (n) {
      return n.filter(function (n) {
        return !a(n, e);
      });
    });
  }
  function f(e) {
    return i.some(function (n) {
      return a(n, e);
    });
  }
  return [
    i,
    {
      clear: function () {
        l([]);
      },
      add: c,
      remove: s,
      toggle: function (e) {
        f(e) ? s(e) : c(e);
      },
      isAdded: f,
      update: l,
    },
  ];
}
function Pe() {
  return {
    onKeyDown: function (e) {
      var n;
      "Enter" === e.key &&
        e.metaKey &&
        (null == (n = e.currentTarget.form) ||
          n.dispatchEvent(new Event("submit", { cancelable: !0 })));
    },
  };
}
function Me() {
  var e,
    n,
    t,
    r = y("meta", null),
    u = null == (e = r.value) ? void 0 : e.previousPage,
    a = null == (n = r.value) ? void 0 : n.nextPage,
    o = (null == (t = r.value) ? void 0 : t.lastPage) || 1,
    i = y("page", 1);
  return {
    current: i.value,
    last: o,
    controls: {
      firstPage: {
        active: !u,
        disabled: !1,
        exists: !0,
        go: function () {
          return i.set(1);
        },
        value: 1,
      },
      previousPage: {
        active: !1,
        disabled: !u,
        exists: Boolean(u),
        go: function () {
          return i.set(null != u ? u : i.value);
        },
        value: u,
      },
      nextPage: {
        active: !1,
        disabled: !a,
        exists: Boolean(a),
        go: function () {
          return i.set(null != a ? a : i.value);
        },
        value: a,
      },
      lastPage: {
        active: i.value === o,
        disabled: !a,
        exists: !0,
        go: function () {
          return i.set(null != o ? o : i.value);
        },
        value: o,
      },
    },
    update: function (e) {
      return r.set(e);
    },
  };
}
var De = /*#__PURE__*/ (function () {
  function e() {}
  return (
    (e.get = function (e, n) {
      return s.get(e, n).value;
    }),
    (e.set = function (e, n) {
      s.set(e, n);
    }),
    (e.clear = function (e) {
      s.remove(e);
    }),
    e
  );
})();
function Le(n, t) {
  void 0 === t && (t = !1);
  var r = Y(De.get(n, t));
  return (
    e.useEffect(
      function () {
        return De.set(n, r.on);
      },
      [n, r.on],
    ),
    v({}, r, {
      clear: function () {
        return De.clear(n);
      },
    })
  );
}
var Ae = /*#__PURE__*/ (function () {
  function e(e) {
    (this.lastInvocationTimestamp = null),
      (this.options = void 0),
      (this.options = e);
  }
  return (
    (e.prototype.verify = function (e) {
      if (!this.lastInvocationTimestamp)
        return (this.lastInvocationTimestamp = e), { allowed: !0 };
      var n = this.lastInvocationTimestamp + this.options.limitMs;
      return n <= e
        ? ((this.lastInvocationTimestamp = e), { allowed: !0 })
        : { allowed: !1, remainingMs: n - e };
    }),
    e
  );
})();
function Ce(e) {
  var n = u(new Ae(e));
  return function () {
    var t = Date.now(),
      r = n.current.verify(t);
    return r.allowed
      ? e.action.apply(e, [].slice.call(arguments))
      : null == e.fallback
        ? void 0
        : e.fallback(r.remainingMs);
  };
}
function Ie() {
  var e = M(),
    t = n.useState(0),
    r = t[0],
    u = t[1],
    a = Y(!1);
  return (
    n.useLayoutEffect(function () {
      function n() {
        e &&
          (u(null == e ? void 0 : e.scrollY),
          e.document.body.clientHeight < e.document.body.scrollHeight
            ? a.enable()
            : a.disable());
      }
      return (
        null == e || e.addEventListener("scroll", n),
        function () {
          return null == e ? void 0 : e.removeEventListener("scroll", n);
        }
      );
    }, []),
    {
      actions: {
        goToTop: function () {
          e && e.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        },
      },
      position: { value: r, isInitial: 0 === r, hasChanged: r > 0 },
      visible: a.on,
      hidden: a.off,
    }
  );
}
function Fe(e) {
  void 0 === e && (e = !0),
    r(
      function () {
        if (e) {
          var n = document.querySelector("html"),
            t = window.getComputedStyle(n).overflow;
          return (
            (n.style.overflow = "hidden"),
            function () {
              n.style.overflow = t;
            }
          );
        }
      },
      [e],
    );
}
function ke(e) {
  var n = new Audio(e);
  return { play: n.play.bind(n) };
}
function Oe(e) {
  var n,
    t = M(),
    r =
      null !=
      (n = new URLSearchParams(null == t ? void 0 : t.location.search).get(
        e.name,
      ))
        ? n
        : void 0;
  return F(
    v(
      {
        onUpdate: function (n, r) {
          if (t) {
            var u = new URL(t.location.toString()),
              a = new URLSearchParams(u.search);
            void 0 === n ? a.delete(e.name) : a.set(e.name, n),
              n !== r &&
                n !== r &&
                ((u.search = a.toString()),
                history.pushState({}, "", u.toString()));
          }
        },
      },
      e,
      { defaultQuery: e.defaultQuery, currentQuery: r },
    ),
  );
}
var Ne,
  Re = 1;
function Ue(n) {
  var t = e.useState(Ne.initial),
    r = t[0],
    u = t[1],
    a = e.useRef(null),
    o = y("duration", 0),
    i = y("currentTime", 0),
    l = y("volume", 1),
    c = 0 === l.value,
    s = 0 === o.value ? 0 : Math.round((i.value / o.value) * 100);
  function f(e) {
    var n = e.currentTarget;
    a.current &&
      ((a.current.currentTime = n.valueAsNumber), i.set(n.valueAsNumber));
  }
  function d(e) {
    var n = e.currentTarget;
    a.current && ((a.current.volume = n.valueAsNumber), l.set(n.valueAsNumber));
  }
  return {
    props: {
      video: {
        src: n,
        onTimeUpdate: function (e) {
          i.set(Math.round(e.target.currentTime));
        },
        onLoadedMetadata: function (e) {
          var n = e.currentTarget;
          (a.current = n),
            o.set(Math.round(n.duration)),
            i.set(n.currentTime),
            l.set(n.volume),
            u(Ne.ready);
        },
        onEnded: function () {
          u(Ne.paused);
        },
        controls: !1,
      },
      player: {
        min: 0,
        step: 1,
        max: o.value,
        value: i.value,
        onInput: f,
        style: { "--percentage": s + "%" },
      },
      volume: {
        min: 0,
        max: 1,
        step: 0.01,
        value: l.value,
        onInput: d,
        style: { "--percentage": Math.floor(100 * l.value) + "%" },
      },
    },
    actions: {
      play: function () {
        a.current && (a.current.play(), u(Ne.playing));
      },
      pause: function () {
        a.current && (a.current.pause(), u(Ne.paused));
      },
      mute: function () {
        a.current && ((a.current.volume = 0), l.set(0));
      },
      unmute: function () {
        a.current && ((a.current.volume = 1), l.set(1));
      },
      reset: function () {
        a.current &&
          ((a.current.currentTime = 0),
          a.current.pause(),
          i.set(0),
          u(Ne.paused));
      },
      seek: f,
      changeVolume: d,
      triggerFullscreen: function () {
        a.current && a.current.requestFullscreen();
      },
    },
    meta: {
      state: r,
      isInitial: r === Ne.initial,
      isReady: r === Ne.ready,
      isPlaying: r === Ne.playing,
      isPaused: r === Ne.paused,
      matches: function (e) {
        return e.some(function (e) {
          return e === r;
        });
      },
      percentage: { raw: s, formatted: s + "%" },
      currentTime: { raw: i.value, formatted: h.format(i.value) },
      duration: { raw: o.value, formatted: h.format(o.value) },
      volume: {
        value: l.value,
        raw: Math.floor(100 * l.value),
        formatted: Math.floor(100 * l.value) + "%",
      },
      muted: c,
    },
  };
}
function je(e) {
  var t = K(e),
    r = t.toggle,
    u = t.rest,
    a = n.useRef(null);
  return (
    n.useEffect(
      function () {
        var n, t;
        e.on
          ? null == (n = a.current) || n.showModal()
          : null == (t = a.current) || t.close();
      },
      [e.on],
    ),
    ne({ Escape: r.disable }),
    P({ ref: a, condition: e.on }),
    Fe(e.on),
    A(a, r.disable),
    n.createElement(
      "dialog",
      v(
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
        u,
      ),
    )
  );
}
function _e(e) {
  return ce() ? null : n.createElement(n.Fragment, null, e.children);
}
!(function (e) {
  (e.initial = "initial"),
    (e.ready = "ready"),
    (e.playing = "playing"),
    (e.paused = "paused");
})(Ne || (Ne = {}));
var He = ["as"];
function Be(e) {
  var t = e.as,
    r = m(e, He);
  return n.createElement(
    t || "a",
    v({ target: "_blank", rel: "noreferer noopener" }, r),
  );
}
function qe(e) {
  return function () {
    for (var n, t = d(e); !(n = t()).done; ) (0, n.value)();
  };
}
var ze = {
  Dimensions: function (e) {
    var t = D();
    return n.createElement(
      "div",
      v({ "data-fs": "12" }, e),
      t.width,
      " x ",
      t.height,
    );
  },
  Truncates: function () {
    var e = Y(),
      t = y("length", 128),
      r = n.useState(new Map()),
      u = r[0],
      a = r[1];
    return n.createElement(
      "div",
      { "data-display": "flex", "data-cross": "center", "data-gap": "6" },
      n.createElement(
        "label",
        v({ className: "c-label" }, t.label.props),
        "Length",
      ),
      n.createElement(
        "input",
        v(
          {
            className: "c-input",
            type: "number",
            value: t.value,
            onChange: function (e) {
              return t.set(e.currentTarget.valueAsNumber);
            },
          },
          t.input.props,
        ),
      ),
      n.createElement(
        "button",
        {
          className: "c-button",
          "data-variant": "bare",
          type: "button",
          onClick: qe([
            function () {
              return (
                (e = document.querySelectorAll('[data-transform="truncate"]')),
                (n = new Map(u)),
                e.forEach(function (e) {
                  var r = e.textContent;
                  n.has(e)
                    ? ((e.textContent = n.get(e)), n.delete(e))
                    : (n.set(e, r), (e.textContent = "x".repeat(t.value)));
                }),
                void a(n)
              );
              var e, n;
            },
            e.toggle,
          ]),
        },
        e.on ? "Hide truncates" : "Expand truncates",
      ),
    );
  },
};
function We(e) {
  var t = b(e),
    r = t.field;
  return n.createElement(
    n.Fragment,
    null,
    n.createElement(
      "input",
      v(
        {
          className: "c-switch-checkbox c-visually-hidden",
          type: "checkbox",
          checked: r.value,
          onChange: function (e) {
            return r.set(e.currentTarget.checked);
          },
        },
        r.input.props,
        t.rest,
      ),
    ),
    n.createElement(
      "label",
      v({ className: "c-switch-label" }, r.label.props),
      n.createElement("div", { className: "c-switch-slider" }),
    ),
  );
}
var Qe = function (e) {
    try {
      var n,
        t,
        r = null != (n = e.onFailure) ? n : Ve,
        u = null != (t = e.onSuccess) ? t : I;
      navigator.clipboard || r();
      var a = (function (n, t) {
        try {
          var r = Promise.resolve(navigator.clipboard.writeText(e.text)).then(
            function () {
              u();
            },
          );
        } catch (e) {
          return t(e);
        }
        return r && r.then ? r.then(void 0, t) : r;
      })(0, function (e) {
        r(e);
      });
      return Promise.resolve(a && a.then ? a.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  Ve = function (e) {
    return console.warn("Copying to clipboard not supported");
  },
  Ye = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.datetime = function (e, n) {
        return (
          void 0 === n && (n = "N/A"), e ? new Date(e).toLocaleString() : n
        );
      }),
      (e.monthDay = function (n) {
        var t = new Date(n);
        return (
          e._padDatePart(t.getDate()) + "/" + e._padDatePart(t.getMonth() + 1)
        );
      }),
      (e.form = function (n) {
        return n
          ? e._padDatePart(n.getFullYear()) +
              "-" +
              e._padDatePart(n.getMonth() + 1) +
              "-" +
              e._padDatePart(n.getDate())
          : e.form(new Date());
      }),
      (e.clockUTC = function (n) {
        var t = new Date(n);
        return (
          e._padDatePart(t.getUTCHours()) +
          ":" +
          e._padDatePart(t.getUTCMinutes()) +
          ":" +
          e._padDatePart(t.getUTCSeconds())
        );
      }),
      (e.clockLocal = function (n) {
        var t = new Date(n);
        return (
          e._padDatePart(t.getHours()) +
          ":" +
          e._padDatePart(t.getMinutes()) +
          ":" +
          e._padDatePart(t.getSeconds())
        );
      }),
      (e.countdown = function (n) {
        var t = new Date(n);
        return (
          e._padDatePart(t.getHours()) +
          ":" +
          e._padDatePart(t.getMinutes()) +
          ":" +
          e._padDatePart(t.getSeconds())
        );
      }),
      (e.formDatetimeLocal = function (e) {
        var n = e - j(new Date().getTimezoneOffset()).ms;
        return new Date(n).toISOString().slice(0, 16);
      }),
      (e._padDatePart = function (e) {
        return String(e).padStart(2, "0");
      }),
      e
    );
  })(),
  Ke = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.convertUtcToLocal = function (e) {
        var n = new Date().getTimezoneOffset(),
          t = ((U(e).minutes - n) / 60) % 24;
        return { value: t, label: String(t).padStart(2, "0") + ":00" };
      }),
      e
    );
  })(),
  Je = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.fromRevision = function (e) {
        return { "if-match": String(e) };
      }),
      e
    );
  })(),
  Ze = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.fromRevision = function (e) {
        return { "if-match": "W/" + e };
      }),
      e
    );
  })(),
  $e = n.createContext({});
function Ge(e) {
  return n.createElement($e.Provider, { value: e.value }, e.children);
}
function Xe() {
  var e = n.useContext($e);
  if (void 0 === e)
    throw new Error(
      "useFeatureFlags must be used within the FeatureFlagsContext",
    );
  return e;
}
function en(e) {
  var t = n.useContext($e);
  if (void 0 === t)
    throw new Error(
      "useFeatureFlag must be used within the FeatureFlagsContext",
    );
  return "yes" === t[e];
}
var nn = /*#__PURE__*/ (function () {
    function e(e, n) {
      this.value = void 0;
      var t = this.getNonEmptyFilters(n),
        r = new URLSearchParams(t);
      this.value = "" !== r.toString() ? e + "?" + r.toString() : e;
    }
    return (
      (e.prototype.getNonEmptyFilters = function (e) {
        return void 0 === e
          ? {}
          : Object.fromEntries(
              Object.entries(e).filter(function (e) {
                return void 0 !== e[1];
              }),
            );
      }),
      e
    );
  })(),
  tn = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.pattern = function (e) {
        var n,
          t = null == (n = e.required) || n;
        return e.min && !e.max
          ? { pattern: ".{" + e.min + "}", required: t }
          : e.min && e.max
            ? { pattern: ".{" + e.min + "," + e.max + "}", required: t }
            : !e.min && e.max
              ? { pattern: ".{," + e.max + "}", required: t }
              : { pattern: void 0, required: t };
      }),
      e
    );
  })();
function rn() {
  return !M();
}
function un(e) {
  return (
    void 0 === e && (e = 2),
    { "data-transform": "line-clamp", style: { "--lines": e } }
  );
}
var an = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.float = function (e, n) {
        return void 0 === n && (n = 2), Number.parseFloat(e.toFixed(n));
      }),
      e
    );
  })(),
  on = /*#__PURE__*/ (function () {
    function e(e) {
      var n, t, r, u;
      (this.min = void 0),
        (this.max = void 0),
        (this.lower = void 0),
        (this.upper = void 0);
      var a = null != (n = null == (t = e.bound) ? void 0 : t.lower) ? n : 0,
        o = null != (r = null == (u = e.bound) ? void 0 : u.upper) ? r : 1;
      if (e.max - e.min < 0)
        throw new Error("Invalid MinMaxScaler min-max config");
      if (o - a <= 0) throw new Error("Invalid MinMaxScaler bound config");
      (this.min = e.min),
        (this.max = e.max),
        (this.lower = a),
        (this.upper = o);
    }
    var n = e.prototype;
    return (
      (n.scale = function (e) {
        var n = this.min,
          t = this.max,
          r = this.lower,
          u = this.upper;
        if (e < n || e > t) throw new Error("Value out of min/max range");
        return n === t
          ? { original: e, scaled: (r + u) / 2, isMin: e === n, isMax: e === t }
          : {
              original: e,
              scaled: an.float(((e - n) / (t - n)) * (u - r) + r, 2),
              isMin: e === n,
              isMax: e === t,
            };
      }),
      (n.descale = function (e) {
        var n = this.min,
          t = this.max,
          r = this.lower,
          u = this.upper;
        if (e < r || e > u) throw new Error("Scaled value out of bounds");
        return {
          original: an.float(((e - r) / (u - r)) * (t - n) + n, 2),
          scaled: e,
          isLowerBound: e === r,
          isUpperBound: e === u,
        };
      }),
      (e.getMinMax = function (e) {
        if (0 === e.length) throw new Error("An empty array supplied");
        return { min: Math.min.apply(Math, e), max: Math.max.apply(Math, e) };
      }),
      e
    );
  })(),
  ln = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.infinite = function (e) {
        var n, t, r;
        return null !=
          (n =
            null == (t = e.data) || null == (r = t.pages)
              ? void 0
              : r.flat().flatMap(function (e) {
                  return e.result;
                }))
          ? n
          : [];
      }),
      e
    );
  })();
function cn(e) {
  var t,
    r = null == (t = e.enabled) || t,
    u = n.useState(e.initialItems),
    a = u[0],
    o = u[1];
  n.useEffect(
    function () {
      return o(e.initialItems);
    },
    [JSON.stringify(e.initialItems)],
  );
  var i = n.useRef(null),
    l = n.useState(null),
    c = l[0],
    s = l[1],
    f = n.useState(null),
    d = f[0],
    v = f[1];
  function m(e) {
    return function (n) {
      var t;
      s(e),
        (i.current = null != (t = a[e]) ? t : null),
        null != n &&
          n.dataTransfer &&
          !n.currentTarget.parentNode &&
          ((n.dataTransfer.effectAllowed = "move"),
          n.dataTransfer.setData("text/html", n.currentTarget.parentNode),
          n.dataTransfer.setDragImage(n.currentTarget.parentNode, 20, 20));
    };
  }
  function p(e) {
    return function (n) {
      n.preventDefault();
      var t = a[e];
      v(e),
        i.current !== t &&
          i.current &&
          o(
            a
              .filter(function (e) {
                return e !== i.current;
              })
              .toSpliced(e, 0, i.current),
          );
    };
  }
  function g(n) {
    return function (t) {
      var r;
      null !== c &&
        null !== d &&
        c !== d &&
        e.callback({
          correlationId: e.correlationId,
          id: null == (r = a[n]) ? void 0 : r.id,
          item: a[n],
          to: d,
        }),
        s(null),
        (i.current = null),
        v(null);
    };
  }
  var h = r ? (i.current ? "grabbing" : "grab") : "auto";
  return {
    items: a,
    enabled: r,
    props: {
      item: function (e) {
        return { onDragOver: p(e) };
      },
      handle: function (e) {
        return {
          onDragStart: m(e),
          onDragEnd: g(e),
          draggable: r,
          style: { cursor: h },
        };
      },
    },
  };
}
function sn(e) {
  return (
    void 0 === e && (e = 12),
    {
      times: function (n) {
        var t = e * n,
          r = {
            height: { height: fn(t) },
            minHeight: { minHeight: fn(t) },
            maxHeight: { maxHeight: fn(t) },
            width: { width: fn(t) },
            minWidth: { minWidth: fn(t) },
            maxWidth: { maxWidth: fn(t) },
            square: { height: fn(t), width: fn(t) },
          },
          u = {
            height: { style: { height: fn(t) } },
            minHeight: { style: { minHeight: fn(t) } },
            maxHeight: { style: { maxHeight: fn(t) } },
            width: { style: { width: fn(t) } },
            minWidth: { style: { minWidth: fn(t) } },
            maxWidth: { style: { maxWidth: fn(t) } },
            square: { style: { height: fn(t), width: fn(t) } },
          };
        return v({ px: fn(t), raw: t, style: u }, r);
      },
    }
  );
}
function fn(e) {
  return e + "px";
}
ln.empty = { result: [], meta: { exhausted: !0 } };
var dn = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.updatedAtMostRecent = function (n, t) {
        return e.descending(n.updatedAt.raw, t.updatedAt.raw);
      }),
      (e.updatedAtLeastRecent = function (n, t) {
        return e.ascending(n.updatedAt.raw, t.updatedAt.raw);
      }),
      (e.createdAtMostRecent = function (n, t) {
        return e.descending(n.createdAt.raw, t.createdAt.raw);
      }),
      (e.createdAtLeastRecent = function (n, t) {
        return e.ascending(n.createdAt.raw, t.createdAt.raw);
      }),
      (e.aToZ = function (e, n) {
        return e.localeCompare(n);
      }),
      (e.zToA = function (e, n) {
        return n.localeCompare(e);
      }),
      (e.ascending = function (e, n) {
        return e > n ? 1 : 0;
      }),
      (e.descending = function (e, n) {
        return e < n ? 1 : 0;
      }),
      e
    );
  })(),
  vn = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.format = function (n, t) {
        return (
          void 0 === t && (t = e.DEFAULT_SEPARATOR),
          n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
        );
      }),
      e
    );
  })();
vn.DEFAULT_SEPARATOR = " ";
var mn = n.createContext(void 0);
function pn(e) {
  var t,
    r,
    u,
    a,
    o =
      ((r = null != (t = null == e ? void 0 : e.timeout) ? t : 5e3),
      (u = Te({
        comparisonFn: function (e, n) {
          return e.id === n.id;
        },
      })),
      (a = u[1]),
      [
        u[0].toReversed(),
        {
          add: function (e) {
            var n = v({}, e, { id: String(Date.now()) });
            a.add(n),
              setTimeout(function () {
                return a.remove(n);
              }, r);
          },
          remove: a.remove,
          clear: a.clear,
        },
      ]);
  return n.createElement(mn.Provider, { value: [o[0], o[1]] }, e.children);
}
function gn() {
  var e = n.useContext(mn);
  if (void 0 === e)
    throw new Error("useToasts must be used within the ToastsContextProvider");
  return e;
}
function hn() {
  return gn()[1].add;
}
export {
  g as API,
  S as AUDIO_DEFAULT_VOLUME,
  an as Approximation,
  Ye as DateFormatter,
  R as Days,
  ze as DevTools,
  je as Dialog,
  h as DurationFormatter,
  Je as ETag,
  Ge as FeatureFlagsContextProvider,
  E as Fields,
  nn as FilterUrl,
  tn as Form,
  Ke as HourFormatter,
  U as Hours,
  ie as KeyNameEnum,
  un as LineClamp,
  on as MinMaxScaler,
  j as Minutes,
  _e as OfflineIndicator,
  Be as OutboundLink,
  ln as Pagination,
  sn as Rhythm,
  De as SafeLocalStorage,
  _ as Seconds,
  p as ServerError,
  dn as Sorts,
  We as Switch,
  vn as ThousandsSeparator,
  H as Time,
  pn as ToastsContextProvider,
  we as TranslationsContextProvider,
  x as UseAudioState,
  W as UseExpandableListState,
  Q as UseFileState,
  Ne as UseVideoState,
  Re as VIDEO_DEFAULT_VOLUME,
  Ze as WeakETag,
  Qe as copyToClipboard,
  O as defaultSortFn,
  se as defaultUseIsVisibleConfig,
  ae as emptyImageResolution,
  qe as exec,
  b as extractUseField,
  K as extractUseToggle,
  B as getCurrentTimestamp,
  ue as getImageResolution,
  M as getSafeWindow,
  rn as isClient,
  fe as isIntersectionObserverSupported,
  I as noop,
  ge as pluralize,
  T as useAudio,
  P as useAutofocus,
  L as useBreakpoint,
  A as useClickOutside,
  F as useClientFilter,
  k as useClientSearch,
  N as useClientSort,
  q as useCurrentTimestamp,
  z as useDebounce,
  J as useDelayedLoader,
  Z as useDesignMode,
  $ as useDisablePullToRefresh,
  G as useDocumentTitle,
  X as useExpandableList,
  en as useFeatureFlag,
  Xe as useFeatureFlags,
  y as useField,
  ee as useFile,
  te as useFocusKeyboardShortcut,
  re as useHover,
  oe as useImageFileResolution,
  ce as useIsOnline,
  de as useIsVisible,
  me as useItem,
  pe as useKeyHandler,
  ne as useKeyboardShortcuts,
  be as useLanguage,
  Ee as useLanguageSelector,
  Se as useLeavingPrompt,
  Te as useList,
  Pe as useMetaEnterSubmit,
  Me as usePagination,
  Le as usePersistentToggle,
  xe as usePluralize,
  C as usePreviousValue,
  Ce as useRateLimiter,
  cn as useReordering,
  Ie as useScroll,
  Fe as useScrollLock,
  ke as useSound,
  hn as useToastTrigger,
  gn as useToastsContext,
  Y as useToggle,
  ye as useTranslations,
  Oe as useUrlFilter,
  Ue as useVideo,
  D as useWindowDimensions,
};
//# sourceMappingURL=bgord-frontend.module.js.map
