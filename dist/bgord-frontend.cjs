var e = require("react"),
  t = require("tinykeys"),
  n = require("js-cookie"),
  r = require("polish-plurals"),
  o = require("ts-storage");
function a(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
function u(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        if ("default" !== n) {
          var r = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                },
          );
        }
      }),
    (t.default = e),
    t
  );
}
var i = /*#__PURE__*/ u(e),
  s = /*#__PURE__*/ a(e),
  l = /*#__PURE__*/ a(n),
  c = /*#__PURE__*/ u(o);
function d(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function f(e, t) {
  var n =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (
    Array.isArray(e) ||
    (n = (function (e, t) {
      if (e) {
        if ("string" == typeof e) return d(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? d(e, t)
              : void 0
        );
      }
    })(e)) ||
    (t && e && "number" == typeof e.length)
  ) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function p() {
  return (
    (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    p.apply(null, arguments)
  );
}
function v(e, t) {
  if (null == e) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
var m = /*#__PURE__*/ (function () {
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
      (e.extract = function (t) {
        try {
          return t.ok
            ? Promise.resolve(t)
            : Promise.resolve(t.json()).then(function (t) {
                var n = e.isServerError(t) ? t.message : "app.error.general";
                throw new e({ message: n });
              });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (e.handle = function (t) {
        try {
          throw new e({
            message: e.isServerError(t) ? t.message : "app.error.general",
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      e
    );
  })(),
  g = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.format = function (e) {
        var t = Math.floor(e / 60),
          n = e % 60;
        return String(t).padStart(2, "0") + ":" + String(n).padStart(2, "0");
      }),
      e
    );
  })(),
  h = [
    "value",
    "set",
    "clear",
    "label",
    "input",
    "changed",
    "unchanged",
    "handleChange",
  ];
function x(t, n) {
  var r = "function" == typeof n ? n() : n,
    o = e.useState(r),
    a = o[0],
    u = o[1];
  return (
    e.useEffect(
      function () {
        return u(r);
      },
      [r],
    ),
    {
      value: a,
      set: u,
      handleChange: function (e) {
        return u(e.currentTarget.value);
      },
      clear: function () {
        return u(r);
      },
      label: { props: { htmlFor: t } },
      input: { props: { id: t, name: t } },
      changed: a !== r,
      unchanged: a === r,
    }
  );
}
function y(e) {
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
    rest: v(e, h),
  };
}
var w,
  b = /*#__PURE__*/ (function () {
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
          for (var t, n = f(e); !(t = n()).done; ) t.value.clear();
        };
      }),
      e
    );
  })();
function S(e) {
  s.default.useEffect(
    function () {
      var t;
      e.condition && (null == (t = e.ref.current) || t.focus());
    },
    [e.condition],
  );
}
function E() {
  if ("undefined" != typeof window) return window;
}
function T() {
  var t = e.useState({ width: void 0, height: void 0 }),
    n = t[0],
    r = t[1];
  return (
    e.useEffect(function () {
      var e = E();
      if (e)
        return (
          e.addEventListener("resize", t),
          t(),
          function () {
            return e.removeEventListener("resize", t);
          }
        );
      function t() {
        r({
          width: null == e ? void 0 : e.innerWidth,
          height: null == e ? void 0 : e.innerHeight,
        });
      }
    }, []),
    n
  );
}
function U(e, t, n) {
  s.default.useEffect(
    function () {
      if (e.current)
        return (
          document.addEventListener("mousedown", r),
          function () {
            return document.removeEventListener("mousedown", r);
          }
        );
      function r(r) {
        var o;
        (null != (o = e.current) && o.contains(r.target)) ||
          (null == n
            ? void 0
            : n.some(function (e) {
                var t;
                return null == (t = e.current) ? void 0 : t.contains(r.target);
              })) ||
          t();
      }
    },
    [t, e, n],
  );
}
function F(t, n) {
  var r = e.useRef(n);
  return (
    e.useEffect(function () {
      r.current = t;
    }),
    r.current
  );
}
function L() {}
function P(t) {
  var n,
    r,
    o,
    a,
    u = null != (n = t.defaultQuery) ? n : void 0,
    i = null != (r = t.currentQuery) ? r : void 0,
    s =
      null != (o = t.filterFn)
        ? o
        : function (e) {
            return void 0 === f || f === String(e);
          },
    l = Object.keys(t.enum),
    c = null != (a = null == t ? void 0 : t.onUpdate) ? a : L,
    d = e.useState(null != i ? i : u),
    f = d[0],
    p = d[1],
    v = F(f);
  return (
    e.useEffect(
      function () {
        return c(f, v);
      },
      [v, f],
    ),
    {
      query: f,
      clear: function () {
        p(u);
      },
      onChange: function (e) {
        var n = e.currentTarget.value,
          r = Boolean(t.enum[String(n)]);
        p(r ? n : void 0);
      },
      filterFn: s,
      options: l,
      onUpdate: c,
      name: t.name,
      changed: f !== u,
      unchanged: f === u,
      label: { props: { htmlFor: t.name } },
      input: { props: { id: t.name, name: t.name } },
    }
  );
}
(exports.UseAudioState = void 0),
  ((w = exports.UseAudioState || (exports.UseAudioState = {})).initial =
    "initial"),
  (w.ready = "ready"),
  (w.playing = "playing"),
  (w.paused = "paused");
var A = function () {
  return 0;
};
function D(e) {
  return {
    value: e,
    hours: 24 * e,
    minutes: 24 * e * 60,
    seconds: 24 * e * 60 * 60,
    ms: 24 * e * 60 * 60 * 1e3,
  };
}
function M(e) {
  return {
    value: e,
    minutes: 60 * e,
    seconds: 60 * e * 60,
    ms: 60 * e * 60 * 1e3,
  };
}
function C(e) {
  return { value: e, seconds: 60 * e, ms: 60 * e * 1e3 };
}
function I(e) {
  return { value: e, ms: 1e3 * e };
}
var O = { Days: D, Hours: M, Minutes: C, Seconds: I };
function k() {
  return Date.now();
}
var R,
  N,
  j = ["on", "off", "enable", "disable", "toggle", "props"];
function _(t, n) {
  void 0 === t && (t = !1);
  var r = e.useState(t),
    o = r[0],
    a = r[1];
  return {
    on: o,
    off: !o,
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
      controller: { "aria-expanded": o ? "true" : "false", "aria-controls": n },
      target: { id: n },
    },
  };
}
function V(e) {
  return {
    toggle: {
      on: e.on,
      off: e.off,
      enable: e.enable,
      disable: e.disable,
      toggle: e.toggle,
      props: e.props,
    },
    rest: v(e, j),
  };
}
function H(e, n) {
  var r,
    o = null == (r = null == n ? void 0 : n.enabled) || r;
  s.default.useEffect(
    function () {
      if (o) {
        var n = t.tinykeys(window, e);
        return function () {
          return n();
        };
      }
    },
    [e, o],
  );
}
(exports.UseExpandableListState = void 0),
  ((R =
    exports.UseExpandableListState ||
    (exports.UseExpandableListState = {})).contracted = "contracted"),
  (R.expanded = "expanded"),
  (exports.UseFileState = void 0),
  ((N = exports.UseFileState || (exports.UseFileState = {})).idle = "idle"),
  (N.selected = "selected"),
  (N.error = "error");
var q,
  B,
  z = function (e) {
    try {
      if (!e) return Promise.resolve(W);
      var t = document.createElement("img"),
        n = new Promise(function (e, n) {
          (t.onload = function () {
            return e({ width: t.width, height: t.height });
          }),
            (t.onerror = n);
        });
      return (t.src = e), Promise.resolve(n);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  W = { width: null, height: null },
  K = function () {
    var e = _(
      "undefined" == typeof navigator ||
        "boolean" != typeof navigator.onLine ||
        navigator.onLine,
    );
    return (
      s.default.useEffect(function () {
        function t() {
          e.enable();
        }
        function n() {
          e.disable();
        }
        return (
          window.addEventListener("online", t),
          window.addEventListener("offline", n),
          function () {
            window.removeEventListener("online", t),
              window.removeEventListener("offline", n);
          }
        );
      }, []),
      e.on
    );
  },
  Q = { threshold: 0, root: null, rootMargin: "0%", ref: { current: null } };
function Y() {
  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}
function J(e, t) {
  return e === t;
}
function Z(e) {
  if (e.language === B.en) {
    var t,
      n = null != (t = e.plural) ? t : e.singular + "s";
    return 1 === e.value ? e.singular : n;
  }
  if (e.language === B.pl) {
    var o,
      a = null != (o = e.value) ? o : 1;
    return 1 === a
      ? e.singular
      : r.polishPlurals(e.singular, String(e.plural), String(e.genitive), a);
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
(exports.KeyNameEnum = void 0),
  ((q = exports.KeyNameEnum || (exports.KeyNameEnum = {})).Enter = "Enter"),
  (q.Space = " "),
  (function (e) {
    (e.en = "en"), (e.pl = "pl");
  })(B || (B = {}));
var $ = s.default.createContext({ translations: {}, language: "en" });
function G() {
  var e = s.default.useContext($);
  if (void 0 === e)
    throw new Error("useLanguage must be used within the TranslationsContext");
  return e.language;
}
function X(t) {
  var n,
    r,
    o = null != (n = null == t ? void 0 : t.defaultItems) ? n : [],
    a =
      null != (r = null == t ? void 0 : t.comparisonFn)
        ? r
        : function (e, t) {
            return e === t;
          },
    u = e.useState(o),
    i = u[0],
    s = u[1];
  function l(e) {
    s(function (t) {
      return Array.isArray(e) ? [].concat(t, e) : [].concat(t, [e]);
    });
  }
  function c(e) {
    s(function (t) {
      return t.filter(function (t) {
        return !a(t, e);
      });
    });
  }
  function d(e) {
    return i.some(function (t) {
      return a(t, e);
    });
  }
  return [
    i,
    {
      clear: function () {
        s([]);
      },
      add: l,
      remove: c,
      toggle: function (e) {
        d(e) ? c(e) : l(e);
      },
      isAdded: d,
      update: s,
    },
  ];
}
var ee,
  te = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.get = function (e, t) {
        return c.get(e, t).value;
      }),
      (e.set = function (e, t) {
        c.set(e, t);
      }),
      (e.clear = function (e) {
        c.remove(e);
      }),
      e
    );
  })(),
  ne = /*#__PURE__*/ (function () {
    function e(e) {
      (this.lastInvocationTimestamp = null),
        (this.options = void 0),
        (this.options = e);
    }
    return (
      (e.prototype.verify = function (e) {
        if (!this.lastInvocationTimestamp)
          return (this.lastInvocationTimestamp = e), { allowed: !0 };
        var t = this.lastInvocationTimestamp + this.options.limitMs;
        return t <= e
          ? ((this.lastInvocationTimestamp = e), { allowed: !0 })
          : { allowed: !1, remainingMs: t - e };
      }),
      e
    );
  })();
function re(t) {
  void 0 === t && (t = !0),
    e.useEffect(
      function () {
        if (t) {
          var e = document.querySelector("html"),
            n = window.getComputedStyle(e).overflow;
          return (
            (e.style.overflow = "hidden"),
            function () {
              e.style.overflow = n;
            }
          );
        }
      },
      [t],
    );
}
(exports.UseVideoState = void 0),
  ((ee = exports.UseVideoState || (exports.UseVideoState = {})).initial =
    "initial"),
  (ee.ready = "ready"),
  (ee.playing = "playing"),
  (ee.paused = "paused");
var oe = ["as"];
function ae(e) {
  return function () {
    for (var t, n = f(e); !(t = n()).done; ) (0, t.value)();
  };
}
var ue = {
    Dimensions: function (e) {
      var t = T();
      return s.default.createElement(
        "div",
        p({ "data-fs": "12" }, e),
        t.width,
        " x ",
        t.height,
      );
    },
    Truncates: function () {
      var e = _(),
        t = x("length", 128),
        n = s.default.useState(new Map()),
        r = n[0],
        o = n[1];
      return s.default.createElement(
        "div",
        { "data-display": "flex", "data-cross": "center", "data-gap": "6" },
        s.default.createElement(
          "label",
          p({ className: "c-label" }, t.label.props),
          "Length",
        ),
        s.default.createElement(
          "input",
          p(
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
        s.default.createElement(
          "button",
          {
            className: "c-button",
            "data-variant": "bare",
            type: "button",
            onClick: ae([
              function () {
                return (
                  (e = document.querySelectorAll(
                    '[data-transform="truncate"]',
                  )),
                  (n = new Map(r)),
                  e.forEach(function (e) {
                    var r = e.textContent;
                    n.has(e)
                      ? ((e.textContent = n.get(e)), n.delete(e))
                      : (n.set(e, r), (e.textContent = "x".repeat(t.value)));
                  }),
                  void o(n)
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
  },
  ie = function (e) {
    return console.warn("Copying to clipboard not supported");
  },
  se = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.datetime = function (e, t) {
        return (
          void 0 === t && (t = "N/A"), e ? new Date(e).toLocaleString() : t
        );
      }),
      (e.monthDay = function (t) {
        var n = new Date(t);
        return (
          e._padDatePart(n.getDate()) + "/" + e._padDatePart(n.getMonth() + 1)
        );
      }),
      (e.form = function (t) {
        return t
          ? e._padDatePart(t.getFullYear()) +
              "-" +
              e._padDatePart(t.getMonth() + 1) +
              "-" +
              e._padDatePart(t.getDate())
          : e.form(new Date());
      }),
      (e.clockUTC = function (t) {
        var n = new Date(t);
        return (
          e._padDatePart(n.getUTCHours()) +
          ":" +
          e._padDatePart(n.getUTCMinutes()) +
          ":" +
          e._padDatePart(n.getUTCSeconds())
        );
      }),
      (e.clockLocal = function (t) {
        var n = new Date(t);
        return (
          e._padDatePart(n.getHours()) +
          ":" +
          e._padDatePart(n.getMinutes()) +
          ":" +
          e._padDatePart(n.getSeconds())
        );
      }),
      (e.countdown = function (t) {
        var n = new Date(t);
        return (
          e._padDatePart(n.getHours()) +
          ":" +
          e._padDatePart(n.getMinutes()) +
          ":" +
          e._padDatePart(n.getSeconds())
        );
      }),
      (e.formDatetimeLocal = function (e) {
        var t = e - C(new Date().getTimezoneOffset()).ms;
        return new Date(t).toISOString().slice(0, 16);
      }),
      (e._padDatePart = function (e) {
        return String(e).padStart(2, "0");
      }),
      e
    );
  })(),
  le = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.convertUtcToLocal = function (e) {
        var t = new Date().getTimezoneOffset(),
          n = ((M(e).minutes - t) / 60) % 24;
        return { value: n, label: String(n).padStart(2, "0") + ":00" };
      }),
      e
    );
  })(),
  ce = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.fromRevision = function (e) {
        return { "if-match": String(e) };
      }),
      e
    );
  })(),
  de = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.fromRevision = function (e) {
        return { "if-match": "W/" + e };
      }),
      e
    );
  })(),
  fe = s.default.createContext({}),
  pe = /*#__PURE__*/ (function () {
    function e(e, t) {
      this.value = void 0;
      var n = this.getNonEmptyFilters(t),
        r = new URLSearchParams(n);
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
  ve = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.pattern = function (e) {
        var t,
          n = null == (t = e.required) || t;
        return e.min && !e.max
          ? { pattern: ".{" + e.min + "}", required: n }
          : e.min && e.max
            ? { pattern: ".{" + e.min + "," + e.max + "}", required: n }
            : !e.min && e.max
              ? { pattern: ".{," + e.max + "}", required: n }
              : { pattern: void 0, required: n };
      }),
      e
    );
  })(),
  me = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.float = function (e, t) {
        return void 0 === t && (t = 2), Number.parseFloat(e.toFixed(t));
      }),
      e
    );
  })(),
  ge = /*#__PURE__*/ (function () {
    function e(e) {
      var t, n, r, o;
      (this.min = void 0),
        (this.max = void 0),
        (this.lower = void 0),
        (this.upper = void 0);
      var a = null != (t = null == (n = e.bound) ? void 0 : n.lower) ? t : 0,
        u = null != (r = null == (o = e.bound) ? void 0 : o.upper) ? r : 1;
      if (e.max - e.min < 0)
        throw new Error("Invalid MinMaxScaler min-max config");
      if (u - a <= 0) throw new Error("Invalid MinMaxScaler bound config");
      (this.min = e.min),
        (this.max = e.max),
        (this.lower = a),
        (this.upper = u);
    }
    var t = e.prototype;
    return (
      (t.scale = function (e) {
        var t = this.min,
          n = this.max,
          r = this.lower,
          o = this.upper;
        if (e < t || e > n) throw new Error("Value out of min/max range");
        return t === n
          ? { original: e, scaled: (r + o) / 2, isMin: e === t, isMax: e === n }
          : {
              original: e,
              scaled: me.float(((e - t) / (n - t)) * (o - r) + r, 2),
              isMin: e === t,
              isMax: e === n,
            };
      }),
      (t.descale = function (e) {
        var t = this.min,
          n = this.max,
          r = this.lower,
          o = this.upper;
        if (e < r || e > o) throw new Error("Scaled value out of bounds");
        return {
          original: me.float(((e - r) / (o - r)) * (n - t) + t, 2),
          scaled: e,
          isLowerBound: e === r,
          isUpperBound: e === o,
        };
      }),
      (e.getMinMax = function (e) {
        if (0 === e.length) throw new Error("An empty array supplied");
        return { min: Math.min.apply(Math, e), max: Math.max.apply(Math, e) };
      }),
      e
    );
  })(),
  he = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.infinite = function (e) {
        var t, n, r;
        return null !=
          (t =
            null == (n = e.data) || null == (r = n.pages)
              ? void 0
              : r.flat().flatMap(function (e) {
                  return e.result;
                }))
          ? t
          : [];
      }),
      e
    );
  })();
function xe(e) {
  return e + "px";
}
he.empty = { result: [], meta: { exhausted: !0 } };
var ye = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.updatedAtMostRecent = function (t, n) {
        return e.descending(t.updatedAt.raw, n.updatedAt.raw);
      }),
      (e.updatedAtLeastRecent = function (t, n) {
        return e.ascending(t.updatedAt.raw, n.updatedAt.raw);
      }),
      (e.createdAtMostRecent = function (t, n) {
        return e.descending(t.createdAt.raw, n.createdAt.raw);
      }),
      (e.createdAtLeastRecent = function (t, n) {
        return e.ascending(t.createdAt.raw, n.createdAt.raw);
      }),
      (e.aToZ = function (e, t) {
        return e.localeCompare(t);
      }),
      (e.zToA = function (e, t) {
        return t.localeCompare(e);
      }),
      (e.ascending = function (e, t) {
        return e > t ? 1 : 0;
      }),
      (e.descending = function (e, t) {
        return e < t ? 1 : 0;
      }),
      e
    );
  })(),
  we = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.format = function (t, n) {
        return (
          void 0 === n && (n = e.DEFAULT_SEPARATOR),
          t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n)
        );
      }),
      e
    );
  })();
we.DEFAULT_SEPARATOR = " ";
var be = s.default.createContext(void 0);
function Se() {
  var e = s.default.useContext(be);
  if (void 0 === e)
    throw new Error("useToasts must be used within the ToastsContextProvider");
  return e;
}
(exports.API = function (e, t) {
  return fetch(
    e,
    p({ mode: "same-origin", redirect: "follow" }, t, {
      headers: p(
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
}),
  (exports.AUDIO_DEFAULT_VOLUME = 1),
  (exports.Approximation = me),
  (exports.DateFormatter = se),
  (exports.Days = D),
  (exports.DevTools = ue),
  (exports.Dialog = function (e) {
    var t = V(e),
      n = t.toggle,
      r = t.rest,
      o = s.default.useRef(null);
    return (
      s.default.useEffect(
        function () {
          var t, n;
          e.on
            ? null == (t = o.current) || t.showModal()
            : null == (n = o.current) || n.close();
        },
        [e.on],
      ),
      H({ Escape: n.disable }),
      S({ ref: o, condition: e.on }),
      re(e.on),
      U(o, n.disable),
      s.default.createElement(
        "dialog",
        p(
          {
            ref: o,
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
  }),
  (exports.DurationFormatter = g),
  (exports.ETag = ce),
  (exports.FeatureFlagsContextProvider = function (e) {
    return s.default.createElement(fe.Provider, { value: e.value }, e.children);
  }),
  (exports.Fields = b),
  (exports.FilterUrl = pe),
  (exports.Form = ve),
  (exports.HourFormatter = le),
  (exports.Hours = M),
  (exports.LineClamp = function (e) {
    return (
      void 0 === e && (e = 2),
      { "data-transform": "line-clamp", style: { "--lines": e } }
    );
  }),
  (exports.MinMaxScaler = ge),
  (exports.Minutes = C),
  (exports.OfflineIndicator = function (e) {
    return K()
      ? null
      : s.default.createElement(s.default.Fragment, null, e.children);
  }),
  (exports.OutboundLink = function (e) {
    var t = e.as,
      n = v(e, oe);
    return s.default.createElement(
      t || "a",
      p({ target: "_blank", rel: "noreferer noopener" }, n),
    );
  }),
  (exports.Pagination = he),
  (exports.Rhythm = function (e) {
    return (
      void 0 === e && (e = 12),
      {
        times: function (t) {
          var n = e * t,
            r = {
              height: { height: xe(n) },
              minHeight: { minHeight: xe(n) },
              maxHeight: { maxHeight: xe(n) },
              width: { width: xe(n) },
              minWidth: { minWidth: xe(n) },
              maxWidth: { maxWidth: xe(n) },
              square: { height: xe(n), width: xe(n) },
            },
            o = {
              height: { style: { height: xe(n) } },
              minHeight: { style: { minHeight: xe(n) } },
              maxHeight: { style: { maxHeight: xe(n) } },
              width: { style: { width: xe(n) } },
              minWidth: { style: { minWidth: xe(n) } },
              maxWidth: { style: { maxWidth: xe(n) } },
              square: { style: { height: xe(n), width: xe(n) } },
            };
          return p({ px: xe(n), raw: n, style: o }, r);
        },
      }
    );
  }),
  (exports.SafeLocalStorage = te),
  (exports.Seconds = I),
  (exports.ServerError = m),
  (exports.Sorts = ye),
  (exports.Switch = function (e) {
    var t = y(e),
      n = t.field;
    return s.default.createElement(
      s.default.Fragment,
      null,
      s.default.createElement(
        "input",
        p(
          {
            className: "c-switch-checkbox c-visually-hidden",
            type: "checkbox",
            checked: n.value,
            onChange: function (e) {
              return n.set(e.currentTarget.checked);
            },
          },
          n.input.props,
          t.rest,
        ),
      ),
      s.default.createElement(
        "label",
        p({ className: "c-switch-label" }, n.label.props),
        s.default.createElement("div", { className: "c-switch-slider" }),
      ),
    );
  }),
  (exports.ThousandsSeparator = we),
  (exports.Time = O),
  (exports.ToastsContextProvider = function (e) {
    var t,
      n,
      r,
      o,
      a =
        ((n = null != (t = null == e ? void 0 : e.timeout) ? t : 5e3),
        (r = X({
          comparisonFn: function (e, t) {
            return e.id === t.id;
          },
        })),
        (o = r[1]),
        [
          r[0].toReversed(),
          {
            add: function (e) {
              var t = p({}, e, { id: String(Date.now()) });
              o.add(t),
                setTimeout(function () {
                  return o.remove(t);
                }, n);
            },
            remove: o.remove,
            clear: o.clear,
          },
        ]);
    return s.default.createElement(
      be.Provider,
      { value: [a[0], a[1]] },
      e.children,
    );
  }),
  (exports.TranslationsContextProvider = function (e) {
    return s.default.createElement($.Provider, { value: e.value }, e.children);
  }),
  (exports.VIDEO_DEFAULT_VOLUME = 1),
  (exports.WeakETag = de),
  (exports.copyToClipboard = function (e) {
    try {
      var t,
        n,
        r = null != (t = e.onFailure) ? t : ie,
        o = null != (n = e.onSuccess) ? n : L;
      navigator.clipboard || r();
      var a = (function (t, n) {
        try {
          var r = Promise.resolve(navigator.clipboard.writeText(e.text)).then(
            function () {
              o();
            },
          );
        } catch (e) {
          return n(e);
        }
        return r && r.then ? r.then(void 0, n) : r;
      })(0, function (e) {
        r(e);
      });
      return Promise.resolve(a && a.then ? a.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  }),
  (exports.defaultSortFn = A),
  (exports.defaultUseIsVisibleConfig = Q),
  (exports.emptyImageResolution = W),
  (exports.exec = ae),
  (exports.extractUseField = y),
  (exports.extractUseToggle = V),
  (exports.getCurrentTimestamp = k),
  (exports.getImageResolution = z),
  (exports.getSafeWindow = E),
  (exports.isClient = function () {
    return !E();
  }),
  (exports.isIntersectionObserverSupported = Y),
  (exports.noop = L),
  (exports.pluralize = Z),
  (exports.useAudio = function (e) {
    var t = i.useState(exports.UseAudioState.initial),
      n = t[0],
      r = t[1],
      o = i.useRef(null),
      a = x("duration", 0),
      u = x("currentTime", 0),
      s = x("volume", 1),
      l = 0 === s.value,
      c = 0 === a.value ? 0 : Math.round((u.value / a.value) * 100);
    function d(e) {
      var t = e.currentTarget;
      o.current &&
        ((o.current.currentTime = t.valueAsNumber), u.set(t.valueAsNumber));
    }
    function f(e) {
      var t = e.currentTarget;
      o.current &&
        ((o.current.volume = t.valueAsNumber), s.set(t.valueAsNumber));
    }
    return {
      props: {
        audio: {
          src: e,
          onTimeUpdate: function (e) {
            u.set(Math.round(e.target.currentTime));
          },
          onLoadedMetadata: function (e) {
            var t = e.currentTarget;
            (o.current = t),
              a.set(Math.round(t.duration)),
              u.set(t.currentTime),
              s.set(t.volume),
              r(exports.UseAudioState.ready);
          },
          onEnded: function () {
            r(exports.UseAudioState.paused);
          },
          controls: !1,
        },
        player: {
          min: 0,
          step: 1,
          max: a.value,
          value: u.value,
          onInput: d,
          style: { "--percentage": c + "%" },
        },
        volume: {
          min: 0,
          max: 1,
          step: 0.01,
          value: s.value,
          onInput: f,
          style: { "--percentage": Math.floor(100 * s.value) + "%" },
        },
      },
      actions: {
        play: function () {
          o.current && (o.current.play(), r(exports.UseAudioState.playing));
        },
        pause: function () {
          o.current && (o.current.pause(), r(exports.UseAudioState.paused));
        },
        mute: function () {
          o.current && ((o.current.volume = 0), s.set(0));
        },
        unmute: function () {
          o.current && ((o.current.volume = 1), s.set(1));
        },
        reset: function () {
          o.current &&
            ((o.current.currentTime = 0),
            o.current.pause(),
            u.set(0),
            r(exports.UseAudioState.paused));
        },
        seek: d,
        changeVolume: f,
      },
      meta: {
        state: n,
        isInitial: n === exports.UseAudioState.initial,
        isReady: n === exports.UseAudioState.ready,
        isPlaying: n === exports.UseAudioState.playing,
        isPaused: n === exports.UseAudioState.paused,
        matches: function (e) {
          return e.some(function (e) {
            return e === n;
          });
        },
        percentage: { raw: c, formatted: c + "%" },
        currentTime: { raw: u.value, formatted: g.format(u.value) },
        duration: { raw: a.value, formatted: g.format(a.value) },
        volume: {
          value: s.value,
          raw: Math.floor(100 * s.value),
          formatted: Math.floor(100 * s.value) + "%",
        },
        muted: l,
      },
    };
  }),
  (exports.useAutofocus = S),
  (exports.useBreakpoint = function (e) {
    var t,
      n = T();
    return (null != (t = null == n ? void 0 : n.width) ? t : 0) <= e;
  }),
  (exports.useClickOutside = U),
  (exports.useClientFilter = P),
  (exports.useClientSearch = function () {
    var t = e.useState(""),
      n = t[0],
      r = t[1];
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
  }),
  (exports.useClientSort = function (e, t) {
    var n,
      r = x(e, t.enum.default);
    return p(
      r.value === t.enum.default
        ? { sortFn: A, options: Object.keys(t.options) }
        : {
            sortFn: null != (n = t.options[r.value]) ? n : A,
            options: Object.keys(t.options),
          },
      r,
      {
        handleChange: function (e) {
          var n = e.currentTarget.value,
            o = Boolean(t.enum[String(n)]);
          r.set(o ? n : t.enum.default);
        },
      },
    );
  }),
  (exports.useCurrentTimestamp = function () {
    var t = e.useState(k),
      n = t[0],
      r = t[1];
    return (
      e.useEffect(function () {
        var e = setInterval(function () {
          return r(k());
        }, O.Seconds(1).ms);
        return function () {
          return clearInterval(e);
        };
      }, []),
      n
    );
  }),
  (exports.useDebounce = function (e) {
    var t = s.default.useState(e.value),
      n = t[0],
      r = t[1];
    return (
      s.default.useEffect(
        function () {
          var t = setTimeout(function () {
            return r(e.value);
          }, e.delayMs);
          return function () {
            return clearTimeout(t);
          };
        },
        [e.value, e.delayMs],
      ),
      n
    );
  }),
  (exports.useDelayedLoader = function (t, n) {
    void 0 === n && (n = 500);
    var r,
      o = _(),
      a = _();
    return (
      e.useEffect(function () {
        return (
          (r = setTimeout(a.enable, n)),
          function () {
            return clearTimeout(r);
          }
        );
      }, []),
      e.useEffect(
        function () {
          if (!a.off) return t.isLoading ? o.enable() : o.disable();
        },
        [t.isLoading, a.on],
      ),
      o
    );
  }),
  (exports.useDesignMode = function (t) {
    var n = _(t),
      r = E();
    return (
      e.useEffect(
        function () {
          r && (r.document.designMode = n.on ? "on" : "off");
        },
        [n.on],
      ),
      n
    );
  }),
  (exports.useDisablePullToRefresh = function (t) {
    void 0 === t && (t = !0),
      e.useLayoutEffect(
        function () {
          if (t) {
            var e = document.querySelector("html"),
              n = document.body,
              r = window.getComputedStyle(e).overscrollBehavior,
              o = window.getComputedStyle(n).overscrollBehavior;
            return (
              (n.style.overscrollBehavior = "none"),
              (e.style.overscrollBehavior = "none"),
              function () {
                (n.style.overscrollBehavior = o),
                  (e.style.overscrollBehavior = r);
              }
            );
          }
        },
        [t],
      );
  }),
  (exports.useDocumentTitle = function (e) {
    s.default.useEffect(
      function () {
        document.title = e;
      },
      [e],
    );
  }),
  (exports.useExpandableList = function (t) {
    var n = t.length - t.max,
      r = t.length > t.max;
    function o() {
      return r
        ? exports.UseExpandableListState.contracted
        : exports.UseExpandableListState.expanded;
    }
    var a = e.useState(o),
      u = a[0],
      i = a[1];
    return (
      e.useEffect(
        function () {
          return i(o());
        },
        [t.length, t.max],
      ),
      {
        state: u,
        displayShowMore: u === exports.UseExpandableListState.contracted,
        displayShowLess: u === exports.UseExpandableListState.expanded && r,
        actions: {
          showMore: function () {
            u === exports.UseExpandableListState.contracted &&
              i(exports.UseExpandableListState.expanded);
          },
          showLess: function () {
            u === exports.UseExpandableListState.expanded &&
              i(exports.UseExpandableListState.contracted);
          },
        },
        numberOfExcessiveElements: n,
        filterFn: function (e, n) {
          return u === exports.UseExpandableListState.expanded || n < t.max;
        },
      }
    );
  }),
  (exports.useFeatureFlag = function (e) {
    var t = s.default.useContext(fe);
    if (void 0 === t)
      throw new Error(
        "useFeatureFlag must be used within the FeatureFlagsContext",
      );
    return "yes" === t[e];
  }),
  (exports.useFeatureFlags = function () {
    var e = s.default.useContext(fe);
    if (void 0 === e)
      throw new Error(
        "useFeatureFlags must be used within the FeatureFlagsContext",
      );
    return e;
  }),
  (exports.useField = x),
  (exports.useFile = function (t, n) {
    var r,
      o =
        null != (r = null == n ? void 0 : n.maxSize)
          ? r
          : Number.POSITIVE_INFINITY,
      a = e.useState(0),
      u = a[0],
      i = a[1],
      s = e.useState(exports.UseFileState.idle),
      l = s[0],
      c = s[1],
      d = e.useState(null),
      f = d[0],
      p = d[1];
    function v(e) {
      var t = e.currentTarget.files;
      if (null != t && t[0]) {
        var n = t[0];
        if (!(n.size > o)) return p(n), c(exports.UseFileState.selected), n;
        c(exports.UseFileState.error);
      }
    }
    function m() {
      i(function (e) {
        return e + 1;
      }),
        p(null),
        c(exports.UseFileState.idle);
    }
    var g = e.useMemo(
      function () {
        return f ? URL.createObjectURL(f) : void 0;
      },
      [f],
    );
    function h(e) {
      return e.some(function (e) {
        return e === l;
      });
    }
    return l === exports.UseFileState.idle
      ? {
          state: l,
          matches: h,
          isIdle: !0,
          isSelected: !1,
          isError: !1,
          data: null,
          actions: { selectFile: v, clearFile: m },
          label: { props: { htmlFor: t } },
          input: { props: { id: t, name: t, multiple: !1, key: u } },
        }
      : l === exports.UseFileState.selected
        ? {
            state: l,
            matches: h,
            data: f,
            isIdle: !1,
            isSelected: !0,
            isError: !1,
            actions: { selectFile: v, clearFile: m },
            preview: g,
            label: { props: { htmlFor: t } },
            input: { props: { id: t, name: t, multiple: !1, key: u } },
          }
        : {
            state: l,
            matches: h,
            data: null,
            isIdle: !1,
            isSelected: !1,
            isError: !0,
            actions: { selectFile: v, clearFile: m },
            label: { props: { htmlFor: t } },
            input: { props: { id: t, name: t, multiple: !1, key: u } },
          };
  }),
  (exports.useFocusKeyboardShortcut = function (t) {
    var n,
      r = e.useRef(null);
    return (
      H(
        (((n = {})[t] = function () {
          var e;
          return null == (e = r.current) ? void 0 : e.focus();
        }),
        n),
      ),
      { ref: r }
    );
  }),
  (exports.useHover = function (e) {
    var t,
      n = null == (t = null == e ? void 0 : e.enabled) || t,
      r = s.default.useRef(null),
      o = _(!1),
      a = o.enable,
      u = o.disable;
    return (
      s.default.useEffect(function () {
        var e = r.current;
        return (
          e &&
            n &&
            (e.addEventListener("mouseenter", a),
            e.addEventListener("mouseleave", u)),
          function () {
            e &&
              n &&
              (e.removeEventListener("mouseenter", a),
              e.removeEventListener("mouseleave", u));
          }
        );
      }, []),
      { attach: { ref: r }, isHovering: o.on && n }
    );
  }),
  (exports.useImageFileResolution = function (e) {
    var t,
      n = x("resolution", W);
    return (
      i.useEffect(
        function () {
          !(function () {
            try {
              var t,
                r = function (r) {
                  if (t) return r;
                  [
                    exports.UseFileState.error,
                    exports.UseFileState.idle,
                  ].includes(e.state) &&
                    null !== n.value.width &&
                    null !== n.value.height &&
                    n.clear();
                },
                o = (function () {
                  if (e.state === exports.UseFileState.selected)
                    return (function (r, o) {
                      try {
                        var a = Promise.resolve(z(e.preview)).then(
                          function (e) {
                            var r = n.set(e);
                            return (t = 1), r;
                          },
                        );
                      } catch (e) {
                        return o();
                      }
                      return a && a.then ? a.then(void 0, o) : a;
                    })(0, function () {
                      var e = n.clear();
                      return (t = 1), e;
                    });
                })();
              Promise.resolve(o && o.then ? o.then(r) : r(o));
            } catch (e) {
              return Promise.reject(e);
            }
          })();
        },
        [e.state, null == (t = e.data) ? void 0 : t.name],
      ),
      n.value
    );
  }),
  (exports.useIsOnline = K),
  (exports.useIsVisible = function (t) {
    void 0 === t && (t = Q);
    var n = e.useState(!1),
      r = n[0],
      o = n[1];
    return (
      e.useEffect(function () {
        var e = t.ref.current;
        if (Y() && e) {
          var n = new IntersectionObserver(function (e) {
            var t;
            return o(Boolean(null == (t = e[0]) ? void 0 : t.isIntersecting));
          }, t);
          return (
            n.observe(e),
            function () {
              return n.unobserve(e);
            }
          );
        }
      }, []),
      r
    );
  }),
  (exports.useItem = function (t) {
    var n,
      r,
      o = null != (n = null == t ? void 0 : t.comparisonFn) ? n : J,
      a = e.useState(
        null != (r = null == t ? void 0 : t.defaultItem) ? r : null,
      ),
      u = a[0],
      i = a[1];
    return {
      clear: function () {
        return i(null);
      },
      set: function (e) {
        return i(e);
      },
      toggle: function (e) {
        return i(function (t) {
          return null === t ? e : o(t, e) ? null : e;
        });
      },
      value: u,
      isDefault: o(u, null),
      exists: !o(u, null),
      compare: function (e) {
        return o(u, e);
      },
    };
  }),
  (exports.useKeyHandler = function (e) {
    var t = Object.keys(e);
    return function (n) {
      var r = n.key,
        o = e[r];
      t.includes(n.key) && e[r] && o && o();
    };
  }),
  (exports.useKeyboardShortcuts = H),
  (exports.useLanguage = G),
  (exports.useLanguageSelector = function (e) {
    return P({
      enum: e,
      currentQuery: G(),
      name: "language",
      onUpdate: function (e, t) {
        var n = E();
        n &&
          e &&
          t &&
          t !== e &&
          (l.default.set("accept-language", e), n.document.location.reload());
      },
    });
  }),
  (exports.useLeavingPrompt = function (e) {
    void 0 === e && (e = !1),
      s.default.useEffect(
        function () {
          if (e)
            return (
              window.addEventListener("beforeunload", t),
              function () {
                return window.removeEventListener("beforeunload", t);
              }
            );
          function t(e) {
            e.preventDefault();
          }
        },
        [e],
      );
  }),
  (exports.useList = X),
  (exports.useMetaEnterSubmit = function () {
    return {
      onKeyDown: function (e) {
        var t;
        "Enter" === e.key &&
          e.metaKey &&
          (null == (t = e.currentTarget.form) ||
            t.dispatchEvent(new Event("submit", { cancelable: !0 })));
      },
    };
  }),
  (exports.usePagination = function () {
    var e,
      t,
      n,
      r = x("meta", null),
      o = null == (e = r.value) ? void 0 : e.previousPage,
      a = null == (t = r.value) ? void 0 : t.nextPage,
      u = (null == (n = r.value) ? void 0 : n.lastPage) || 1,
      i = x("page", 1);
    return {
      current: i.value,
      last: u,
      controls: {
        firstPage: {
          active: !o,
          disabled: !1,
          exists: !0,
          go: function () {
            return i.set(1);
          },
          value: 1,
        },
        previousPage: {
          active: !1,
          disabled: !o,
          exists: Boolean(o),
          go: function () {
            return i.set(null != o ? o : i.value);
          },
          value: o,
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
          active: i.value === u,
          disabled: !a,
          exists: !0,
          go: function () {
            return i.set(null != u ? u : i.value);
          },
          value: u,
        },
      },
      update: function (e) {
        return r.set(e);
      },
    };
  }),
  (exports.usePersistentToggle = function (e, t) {
    void 0 === t && (t = !1);
    var n = _(te.get(e, t));
    return (
      i.useEffect(
        function () {
          return te.set(e, n.on);
        },
        [e, n.on],
      ),
      p({}, n, {
        clear: function () {
          return te.clear(e);
        },
      })
    );
  }),
  (exports.usePluralize = function () {
    var e = G();
    return function (t) {
      return Z(p({}, t, { language: e }));
    };
  }),
  (exports.usePreviousValue = F),
  (exports.useRateLimiter = function (t) {
    var n = e.useRef(new ne(t));
    return function () {
      var e = Date.now(),
        r = n.current.verify(e);
      return r.allowed
        ? t.action.apply(t, [].slice.call(arguments))
        : null == t.fallback
          ? void 0
          : t.fallback(r.remainingMs);
    };
  }),
  (exports.useReordering = function (e) {
    var t,
      n = null == (t = e.enabled) || t,
      r = s.default.useState(e.initialItems),
      o = r[0],
      a = r[1];
    s.default.useEffect(
      function () {
        return a(e.initialItems);
      },
      [JSON.stringify(e.initialItems)],
    );
    var u = s.default.useRef(null),
      i = s.default.useState(null),
      l = i[0],
      c = i[1],
      d = s.default.useState(null),
      f = d[0],
      p = d[1];
    function v(e) {
      return function (t) {
        var n;
        c(e),
          (u.current = null != (n = o[e]) ? n : null),
          null != t &&
            t.dataTransfer &&
            !t.currentTarget.parentNode &&
            ((t.dataTransfer.effectAllowed = "move"),
            t.dataTransfer.setData("text/html", t.currentTarget.parentNode),
            t.dataTransfer.setDragImage(t.currentTarget.parentNode, 20, 20));
      };
    }
    function m(e) {
      return function (t) {
        t.preventDefault();
        var n = o[e];
        p(e),
          u.current !== n &&
            u.current &&
            a(
              o
                .filter(function (e) {
                  return e !== u.current;
                })
                .toSpliced(e, 0, u.current),
            );
      };
    }
    function g(t) {
      return function (n) {
        var r;
        null !== l &&
          null !== f &&
          l !== f &&
          e.callback({
            correlationId: e.correlationId,
            id: null == (r = o[t]) ? void 0 : r.id,
            item: o[t],
            to: f,
          }),
          c(null),
          (u.current = null),
          p(null);
      };
    }
    var h = n ? (u.current ? "grabbing" : "grab") : "auto";
    return {
      items: o,
      enabled: n,
      props: {
        item: function (e) {
          return { onDragOver: m(e) };
        },
        handle: function (e) {
          return {
            onDragStart: v(e),
            onDragEnd: g(e),
            draggable: n,
            style: { cursor: h },
          };
        },
      },
    };
  }),
  (exports.useScroll = function () {
    var e = E(),
      t = s.default.useState(0),
      n = t[0],
      r = t[1],
      o = _(!1);
    return (
      s.default.useLayoutEffect(function () {
        function t() {
          e &&
            (r(null == e ? void 0 : e.scrollY),
            e.document.body.clientHeight < e.document.body.scrollHeight
              ? o.enable()
              : o.disable());
        }
        return (
          null == e || e.addEventListener("scroll", t),
          function () {
            return null == e ? void 0 : e.removeEventListener("scroll", t);
          }
        );
      }, []),
      {
        actions: {
          goToTop: function () {
            e && e.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          },
        },
        position: { value: n, isInitial: 0 === n, hasChanged: n > 0 },
        visible: o.on,
        hidden: o.off,
      }
    );
  }),
  (exports.useScrollLock = re),
  (exports.useSound = function (e) {
    var t = new Audio(e);
    return { play: t.play.bind(t) };
  }),
  (exports.useToastTrigger = function () {
    return Se()[1].add;
  }),
  (exports.useToastsContext = Se),
  (exports.useToggle = _),
  (exports.useTranslations = function () {
    var e = s.default.useContext($);
    if (void 0 === e)
      throw new Error(
        "useTranslations must be used within the TranslationsContext",
      );
    return function (t, n) {
      var r = e.translations[t];
      return r
        ? n
          ? Object.entries(n).reduce(function (e, t) {
              return e.replace("{{" + t[0] + "}}", String(t[1]));
            }, r)
          : r
        : (console.warn("[@bgord/frontend] missing translation for key: " + t),
          t);
    };
  }),
  (exports.useUrlFilter = function (e) {
    var t,
      n = E(),
      r =
        null !=
        (t = new URLSearchParams(null == n ? void 0 : n.location.search).get(
          e.name,
        ))
          ? t
          : void 0;
    return P(
      p(
        {
          onUpdate: function (t, r) {
            if (n) {
              var o = new URL(n.location.toString()),
                a = new URLSearchParams(o.search);
              void 0 === t ? a.delete(e.name) : a.set(e.name, t),
                t !== r &&
                  t !== r &&
                  ((o.search = a.toString()),
                  history.pushState({}, "", o.toString()));
            }
          },
        },
        e,
        { defaultQuery: e.defaultQuery, currentQuery: r },
      ),
    );
  }),
  (exports.useVideo = function (e) {
    var t = i.useState(exports.UseVideoState.initial),
      n = t[0],
      r = t[1],
      o = i.useRef(null),
      a = x("duration", 0),
      u = x("currentTime", 0),
      s = x("volume", 1),
      l = 0 === s.value,
      c = 0 === a.value ? 0 : Math.round((u.value / a.value) * 100);
    function d(e) {
      var t = e.currentTarget;
      o.current &&
        ((o.current.currentTime = t.valueAsNumber), u.set(t.valueAsNumber));
    }
    function f(e) {
      var t = e.currentTarget;
      o.current &&
        ((o.current.volume = t.valueAsNumber), s.set(t.valueAsNumber));
    }
    return {
      props: {
        video: {
          src: e,
          onTimeUpdate: function (e) {
            u.set(Math.round(e.target.currentTime));
          },
          onLoadedMetadata: function (e) {
            var t = e.currentTarget;
            (o.current = t),
              a.set(Math.round(t.duration)),
              u.set(t.currentTime),
              s.set(t.volume),
              r(exports.UseVideoState.ready);
          },
          onEnded: function () {
            r(exports.UseVideoState.paused);
          },
          controls: !1,
        },
        player: {
          min: 0,
          step: 1,
          max: a.value,
          value: u.value,
          onInput: d,
          style: { "--percentage": c + "%" },
        },
        volume: {
          min: 0,
          max: 1,
          step: 0.01,
          value: s.value,
          onInput: f,
          style: { "--percentage": Math.floor(100 * s.value) + "%" },
        },
      },
      actions: {
        play: function () {
          o.current && (o.current.play(), r(exports.UseVideoState.playing));
        },
        pause: function () {
          o.current && (o.current.pause(), r(exports.UseVideoState.paused));
        },
        mute: function () {
          o.current && ((o.current.volume = 0), s.set(0));
        },
        unmute: function () {
          o.current && ((o.current.volume = 1), s.set(1));
        },
        reset: function () {
          o.current &&
            ((o.current.currentTime = 0),
            o.current.pause(),
            u.set(0),
            r(exports.UseVideoState.paused));
        },
        seek: d,
        changeVolume: f,
        triggerFullscreen: function () {
          o.current && o.current.requestFullscreen();
        },
      },
      meta: {
        state: n,
        isInitial: n === exports.UseVideoState.initial,
        isReady: n === exports.UseVideoState.ready,
        isPlaying: n === exports.UseVideoState.playing,
        isPaused: n === exports.UseVideoState.paused,
        matches: function (e) {
          return e.some(function (e) {
            return e === n;
          });
        },
        percentage: { raw: c, formatted: c + "%" },
        currentTime: { raw: u.value, formatted: g.format(u.value) },
        duration: { raw: a.value, formatted: g.format(a.value) },
        volume: {
          value: s.value,
          raw: Math.floor(100 * s.value),
          formatted: Math.floor(100 * s.value) + "%",
        },
        muted: l,
      },
    };
  }),
  (exports.useWindowDimensions = T);
//# sourceMappingURL=bgord-frontend.cjs.map
