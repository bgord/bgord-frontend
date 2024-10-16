!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("tinykeys"),
        require("js-cookie"),
        require("polish-plurals"),
        require("ts-storage"),
      )
    : "function" == typeof define && define.amd
      ? define(
          [
            "exports",
            "react",
            "tinykeys",
            "js-cookie",
            "polish-plurals",
            "ts-storage",
          ],
          t,
        )
      : t(
          ((e || self).frontend = {}),
          e.react,
          e.tinykeys,
          e.jsCookie,
          e.polishPlurals,
          e.tsStorage,
        );
})(this, function (e, t, n, r, a, u) {
  function o(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  function i(e) {
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
  var l = /*#__PURE__*/ i(t),
    s = /*#__PURE__*/ o(t),
    c = /*#__PURE__*/ o(r),
    d = /*#__PURE__*/ i(u);
  function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function v(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return f(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? f(e, t)
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
  function m() {
    return (
      (m = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      m.apply(null, arguments)
    );
  }
  function p(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  var g = /*#__PURE__*/ (function () {
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
    h = /*#__PURE__*/ (function () {
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
    y = [
      "value",
      "set",
      "clear",
      "label",
      "input",
      "changed",
      "unchanged",
      "handleChange",
    ];
  function w(e, n) {
    var r = "function" == typeof n ? n() : n,
      a = t.useState(r),
      u = a[0],
      o = a[1];
    return (
      t.useEffect(
        function () {
          return o(r);
        },
        [r],
      ),
      {
        value: u,
        set: o,
        handleChange: function (e) {
          return o(e.currentTarget.value);
        },
        clear: function () {
          return o(r);
        },
        label: { props: { htmlFor: e } },
        input: { props: { id: e, name: e } },
        changed: u !== r,
        unchanged: u === r,
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
      rest: p(e, y),
    };
  }
  var S,
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
            for (var t, n = v(e); !(t = n()).done; ) t.value.clear();
          };
        }),
        e
      );
    })();
  function x(e) {
    s.default.useEffect(
      function () {
        var t;
        e.condition && (null == (t = e.ref.current) || t.focus());
      },
      [e.condition],
    );
  }
  function T() {
    if ("undefined" != typeof window) return window;
  }
  function U() {
    var e = t.useState({ width: void 0, height: void 0 }),
      n = e[0],
      r = e[1];
    return (
      t.useEffect(function () {
        var e = T();
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
  function F(e, t, n) {
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
          var a;
          (null != (a = e.current) && a.contains(r.target)) ||
            (null == n
              ? void 0
              : n.some(function (e) {
                  var t;
                  return null == (t = e.current)
                    ? void 0
                    : t.contains(r.target);
                })) ||
            t();
        }
      },
      [t, e, n],
    );
  }
  function L(e, n) {
    var r = t.useRef(n);
    return (
      t.useEffect(function () {
        r.current = e;
      }),
      r.current
    );
  }
  function P() {}
  function A(e) {
    var n,
      r,
      a,
      u,
      o = null != (n = e.defaultQuery) ? n : void 0,
      i = null != (r = e.currentQuery) ? r : void 0,
      l =
        null != (a = e.filterFn)
          ? a
          : function (e) {
              return void 0 === f || f === String(e);
            },
      s = Object.keys(e.enum),
      c = null != (u = null == e ? void 0 : e.onUpdate) ? u : P,
      d = t.useState(null != i ? i : o),
      f = d[0],
      v = d[1],
      m = L(f);
    return (
      t.useEffect(
        function () {
          return c(f, m);
        },
        [m, f],
      ),
      {
        query: f,
        clear: function () {
          v(o);
        },
        onChange: function (t) {
          var n = t.currentTarget.value,
            r = Boolean(e.enum[String(n)]);
          v(r ? n : void 0);
        },
        filterFn: l,
        options: s,
        onUpdate: c,
        name: e.name,
        changed: f !== o,
        unchanged: f === o,
        label: { props: { htmlFor: e.name } },
        input: { props: { id: e.name, name: e.name } },
      }
    );
  }
  (e.UseAudioState = void 0),
    ((S = e.UseAudioState || (e.UseAudioState = {})).initial = "initial"),
    (S.ready = "ready"),
    (S.playing = "playing"),
    (S.paused = "paused");
  var D = function () {
    return 0;
  };
  function M(e) {
    return {
      value: e,
      hours: 24 * e,
      minutes: 24 * e * 60,
      seconds: 24 * e * 60 * 60,
      ms: 24 * e * 60 * 60 * 1e3,
    };
  }
  function C(e) {
    return {
      value: e,
      minutes: 60 * e,
      seconds: 60 * e * 60,
      ms: 60 * e * 60 * 1e3,
    };
  }
  function I(e) {
    return { value: e, seconds: 60 * e, ms: 60 * e * 1e3 };
  }
  function O(e) {
    return { value: e, ms: 1e3 * e };
  }
  var k = { Days: M, Hours: C, Minutes: I, Seconds: O };
  function R() {
    return Date.now();
  }
  var j,
    N,
    _ = ["on", "off", "enable", "disable", "toggle", "props"];
  function V(e, n) {
    void 0 === e && (e = !1);
    var r = t.useState(e),
      a = r[0],
      u = r[1];
    return {
      on: a,
      off: !a,
      enable: function () {
        return u(!0);
      },
      disable: function () {
        return u(!1);
      },
      toggle: function () {
        return u(function (e) {
          return !e;
        });
      },
      props: {
        controller: {
          "aria-expanded": a ? "true" : "false",
          "aria-controls": n,
        },
        target: { id: n },
      },
    };
  }
  function H(e) {
    return {
      toggle: {
        on: e.on,
        off: e.off,
        enable: e.enable,
        disable: e.disable,
        toggle: e.toggle,
        props: e.props,
      },
      rest: p(e, _),
    };
  }
  function q(e, t) {
    var r,
      a = null == (r = null == t ? void 0 : t.enabled) || r;
    s.default.useEffect(
      function () {
        if (a) {
          var t = n.tinykeys(window, e);
          return function () {
            return t();
          };
        }
      },
      [e, a],
    );
  }
  (e.UseExpandableListState = void 0),
    ((j =
      e.UseExpandableListState || (e.UseExpandableListState = {})).contracted =
      "contracted"),
    (j.expanded = "expanded"),
    (e.UseFileState = void 0),
    ((N = e.UseFileState || (e.UseFileState = {})).idle = "idle"),
    (N.selected = "selected"),
    (N.error = "error");
  var B = function (e) {
      try {
        if (!e) return Promise.resolve(z);
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
    z = { width: null, height: null },
    W = function () {
      var e = V(
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
    K = { threshold: 0, root: null, rootMargin: "0%", ref: { current: null } };
  function Q() {
    return (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    );
  }
  function Y(e, t) {
    return e === t;
  }
  var J,
    Z,
    $ = null;
  function G(e) {
    if (e.language === Z.en) {
      var t,
        n = null != (t = e.plural) ? t : e.singular + "s";
      return 1 === e.value ? e.singular : n;
    }
    if (e.language === Z.pl) {
      var r,
        u = null != (r = e.value) ? r : 1;
      return 1 === u
        ? e.singular
        : a.polishPlurals(e.singular, String(e.plural), String(e.genitive), u);
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
  (e.KeyNameEnum = void 0),
    ((J = e.KeyNameEnum || (e.KeyNameEnum = {})).Enter = "Enter"),
    (J.Space = " "),
    (function (e) {
      (e.en = "en"), (e.pl = "pl");
    })(Z || (Z = {}));
  var X = s.default.createContext({ translations: {}, language: "en" });
  function ee() {
    var e = s.default.useContext(X);
    if (void 0 === e)
      throw new Error(
        "useLanguage must be used within the TranslationsContext",
      );
    return e.language;
  }
  function te(e) {
    var n,
      r,
      a = null != (n = null == e ? void 0 : e.defaultItems) ? n : [],
      u =
        null != (r = null == e ? void 0 : e.comparisonFn)
          ? r
          : function (e, t) {
              return e === t;
            },
      o = t.useState(a),
      i = o[0],
      l = o[1];
    function s(e) {
      l(function (t) {
        return Array.isArray(e) ? [].concat(t, e) : [].concat(t, [e]);
      });
    }
    function c(e) {
      l(function (t) {
        return t.filter(function (t) {
          return !u(t, e);
        });
      });
    }
    function d(e) {
      return i.some(function (t) {
        return u(t, e);
      });
    }
    return [
      i,
      {
        clear: function () {
          l([]);
        },
        add: s,
        remove: c,
        toggle: function (e) {
          d(e) ? c(e) : s(e);
        },
        isAdded: d,
        update: l,
      },
    ];
  }
  var ne,
    re = /*#__PURE__*/ (function () {
      function e() {}
      return (
        (e.get = function (e, t) {
          return d.get(e, t).value;
        }),
        (e.set = function (e, t) {
          d.set(e, t);
        }),
        (e.clear = function (e) {
          d.remove(e);
        }),
        e
      );
    })(),
    ae = /*#__PURE__*/ (function () {
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
  function ue(e) {
    void 0 === e && (e = !0),
      t.useEffect(
        function () {
          if (e) {
            var t = document.querySelector("html"),
              n = window.getComputedStyle(t).overflow;
            return (
              (t.style.overflow = "hidden"),
              function () {
                t.style.overflow = n;
              }
            );
          }
        },
        [e],
      );
  }
  (e.UseVideoState = void 0),
    ((ne = e.UseVideoState || (e.UseVideoState = {})).initial = "initial"),
    (ne.ready = "ready"),
    (ne.playing = "playing"),
    (ne.paused = "paused");
  var oe = ["as"];
  function ie(e) {
    return function () {
      for (var t, n = v(e); !(t = n()).done; ) (0, t.value)();
    };
  }
  var le = {
      Dimensions: function (e) {
        var t = U();
        return s.default.createElement(
          "div",
          m({ "data-fs": "12" }, e),
          t.width,
          " x ",
          t.height,
        );
      },
      Truncates: function () {
        var e = V(),
          t = w("length", 128),
          n = s.default.useState(new Map()),
          r = n[0],
          a = n[1];
        return s.default.createElement(
          "div",
          { "data-display": "flex", "data-cross": "center", "data-gap": "6" },
          s.default.createElement(
            "label",
            m({ className: "c-label" }, t.label.props),
            "Length",
          ),
          s.default.createElement(
            "input",
            m(
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
              onClick: ie([
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
    },
    se = function (e) {
      return console.warn("Copying to clipboard not supported");
    },
    ce = /*#__PURE__*/ (function () {
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
          var t = e - I(new Date().getTimezoneOffset()).ms;
          return new Date(t).toISOString().slice(0, 16);
        }),
        (e._padDatePart = function (e) {
          return String(e).padStart(2, "0");
        }),
        e
      );
    })(),
    de = /*#__PURE__*/ (function () {
      function e() {}
      return (
        (e.convertUtcToLocal = function (e) {
          var t = new Date().getTimezoneOffset(),
            n = ((C(e).minutes - t) / 60) % 24;
          return { value: n, label: String(n).padStart(2, "0") + ":00" };
        }),
        e
      );
    })(),
    fe = /*#__PURE__*/ (function () {
      function e() {}
      return (
        (e.fromRevision = function (e) {
          return { "if-match": String(e) };
        }),
        e
      );
    })(),
    ve = /*#__PURE__*/ (function () {
      function e() {}
      return (
        (e.fromRevision = function (e) {
          return { "if-match": "W/" + e };
        }),
        e
      );
    })(),
    me = s.default.createContext({}),
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
    ge = /*#__PURE__*/ (function () {
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
    he = /*#__PURE__*/ (function () {
      function e() {}
      return (
        (e.float = function (e, t) {
          return void 0 === t && (t = 2), Number.parseFloat(e.toFixed(t));
        }),
        e
      );
    })(),
    ye = /*#__PURE__*/ (function () {
      function e(e) {
        var t, n, r, a;
        (this.min = void 0),
          (this.max = void 0),
          (this.lower = void 0),
          (this.upper = void 0);
        var u = null != (t = null == (n = e.bound) ? void 0 : n.lower) ? t : 0,
          o = null != (r = null == (a = e.bound) ? void 0 : a.upper) ? r : 1;
        if (e.max - e.min < 0)
          throw new Error("Invalid MinMaxScaler min-max config");
        if (o - u <= 0) throw new Error("Invalid MinMaxScaler bound config");
        (this.min = e.min),
          (this.max = e.max),
          (this.lower = u),
          (this.upper = o);
      }
      var t = e.prototype;
      return (
        (t.scale = function (e) {
          var t = this.min,
            n = this.max,
            r = this.lower,
            a = this.upper;
          if (e < t || e > n) throw new Error("Value out of min/max range");
          return t === n
            ? {
                original: e,
                scaled: (r + a) / 2,
                isMin: e === t,
                isMax: e === n,
              }
            : {
                original: e,
                scaled: he.float(((e - t) / (n - t)) * (a - r) + r, 2),
                isMin: e === t,
                isMax: e === n,
              };
        }),
        (t.descale = function (e) {
          var t = this.min,
            n = this.max,
            r = this.lower,
            a = this.upper;
          if (e < r || e > a) throw new Error("Scaled value out of bounds");
          return {
            original: he.float(((e - r) / (a - r)) * (n - t) + t, 2),
            scaled: e,
            isLowerBound: e === r,
            isUpperBound: e === a,
          };
        }),
        (e.getMinMax = function (e) {
          if (0 === e.length) throw new Error("An empty array supplied");
          return { min: Math.min.apply(Math, e), max: Math.max.apply(Math, e) };
        }),
        e
      );
    })(),
    we = /*#__PURE__*/ (function () {
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
  function be(e) {
    return e + "px";
  }
  we.empty = { result: [], meta: { exhausted: !0 } };
  var Se = /*#__PURE__*/ (function () {
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
    Ee = /*#__PURE__*/ (function () {
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
  Ee.DEFAULT_SEPARATOR = " ";
  var xe = s.default.createContext(void 0);
  function Te() {
    var e = s.default.useContext(xe);
    if (void 0 === e)
      throw new Error(
        "useToasts must be used within the ToastsContextProvider",
      );
    return e;
  }
  (e.API = function (e, t) {
    return fetch(
      e,
      m({ mode: "same-origin", redirect: "follow" }, t, {
        headers: m(
          {
            "Content-Type": "application/json",
            "time-zone-offset": new Date().getTimezoneOffset().toString(),
          },
          null == t ? void 0 : t.headers,
        ),
      }),
    )
      .then(g.extract)
      .catch(g.handle);
  }),
    (e.AUDIO_DEFAULT_VOLUME = 1),
    (e.Approximation = he),
    (e.DateFormatter = ce),
    (e.Days = M),
    (e.DevTools = le),
    (e.Dialog = function (e) {
      var t = H(e),
        n = t.toggle,
        r = t.rest,
        a = s.default.useRef(null);
      return (
        s.default.useEffect(
          function () {
            var t, n;
            e.on
              ? null == (t = a.current) || t.showModal()
              : null == (n = a.current) || n.close();
          },
          [e.on],
        ),
        q({ Escape: n.disable }),
        x({ ref: a, condition: e.on }),
        ue(e.on),
        F(a, n.disable),
        s.default.createElement(
          "dialog",
          m(
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
    }),
    (e.DurationFormatter = h),
    (e.ETag = fe),
    (e.FeatureFlagsContextProvider = function (e) {
      return s.default.createElement(
        me.Provider,
        { value: e.value },
        e.children,
      );
    }),
    (e.Fields = E),
    (e.FilterUrl = pe),
    (e.Form = ge),
    (e.HourFormatter = de),
    (e.Hours = C),
    (e.LineClamp = function (e) {
      return (
        void 0 === e && (e = 2),
        { "data-transform": "line-clamp", style: { "--lines": e } }
      );
    }),
    (e.MinMaxScaler = ye),
    (e.Minutes = I),
    (e.OfflineIndicator = function (e) {
      return W()
        ? null
        : s.default.createElement(s.default.Fragment, null, e.children);
    }),
    (e.OutboundLink = function (e) {
      var t = e.as,
        n = p(e, oe);
      return s.default.createElement(
        t || "a",
        m({ target: "_blank", rel: "noreferer noopener" }, n),
      );
    }),
    (e.Pagination = we),
    (e.Rhythm = function (e) {
      return (
        void 0 === e && (e = 12),
        {
          times: function (t) {
            var n = e * t,
              r = {
                height: { height: be(n) },
                minHeight: { minHeight: be(n) },
                maxHeight: { maxHeight: be(n) },
                width: { width: be(n) },
                minWidth: { minWidth: be(n) },
                maxWidth: { maxWidth: be(n) },
                square: { height: be(n), width: be(n) },
              },
              a = {
                height: { style: { height: be(n) } },
                minHeight: { style: { minHeight: be(n) } },
                maxHeight: { style: { maxHeight: be(n) } },
                width: { style: { width: be(n) } },
                minWidth: { style: { minWidth: be(n) } },
                maxWidth: { style: { maxWidth: be(n) } },
                square: { style: { height: be(n), width: be(n) } },
              };
            return m({ px: be(n), raw: n, style: a }, r);
          },
        }
      );
    }),
    (e.SafeLocalStorage = re),
    (e.Seconds = O),
    (e.ServerError = g),
    (e.Sorts = Se),
    (e.Switch = function (e) {
      var t = b(e),
        n = t.field;
      return s.default.createElement(
        s.default.Fragment,
        null,
        s.default.createElement(
          "input",
          m(
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
          m({ className: "c-switch-label" }, n.label.props),
          s.default.createElement("div", { className: "c-switch-slider" }),
        ),
      );
    }),
    (e.ThousandsSeparator = Ee),
    (e.Time = k),
    (e.ToastsContextProvider = function (e) {
      var t,
        n,
        r,
        a,
        u =
          ((n = null != (t = null == e ? void 0 : e.timeout) ? t : 5e3),
          (r = te({
            comparisonFn: function (e, t) {
              return e.id === t.id;
            },
          })),
          (a = r[1]),
          [
            r[0].toReversed(),
            {
              add: function (e) {
                var t = m({}, e, { id: String(Date.now()) });
                a.add(t),
                  setTimeout(function () {
                    return a.remove(t);
                  }, n);
              },
              remove: a.remove,
              clear: a.clear,
            },
          ]);
      return s.default.createElement(
        xe.Provider,
        { value: [u[0], u[1]] },
        e.children,
      );
    }),
    (e.TranslationsContextProvider = function (e) {
      return s.default.createElement(
        X.Provider,
        { value: e.value },
        e.children,
      );
    }),
    (e.VIDEO_DEFAULT_VOLUME = 1),
    (e.WeakETag = ve),
    (e.copyToClipboard = function (e) {
      try {
        var t,
          n,
          r = null != (t = e.onFailure) ? t : se,
          a = null != (n = e.onSuccess) ? n : P;
        navigator.clipboard || r();
        var u = (function (t, n) {
          try {
            var r = Promise.resolve(navigator.clipboard.writeText(e.text)).then(
              function () {
                a();
              },
            );
          } catch (e) {
            return n(e);
          }
          return r && r.then ? r.then(void 0, n) : r;
        })(0, function (e) {
          r(e);
        });
        return Promise.resolve(u && u.then ? u.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    }),
    (e.defaultSortFn = D),
    (e.defaultUseIsVisibleConfig = K),
    (e.emptyImageResolution = z),
    (e.exec = ie),
    (e.extractUseField = b),
    (e.extractUseToggle = H),
    (e.getCurrentTimestamp = R),
    (e.getImageResolution = B),
    (e.getSafeWindow = T),
    (e.isClient = function () {
      return !T();
    }),
    (e.isIntersectionObserverSupported = Q),
    (e.noop = P),
    (e.pluralize = G),
    (e.useAudio = function (t) {
      var n = l.useState(e.UseAudioState.initial),
        r = n[0],
        a = n[1],
        u = l.useRef(null),
        o = w("duration", 0),
        i = w("currentTime", 0),
        s = w("volume", 1),
        c = 0 === s.value,
        d = 0 === o.value ? 0 : Math.round((i.value / o.value) * 100);
      function f(e) {
        var t = e.currentTarget;
        u.current &&
          ((u.current.currentTime = t.valueAsNumber), i.set(t.valueAsNumber));
      }
      function v(e) {
        var t = e.currentTarget;
        u.current &&
          ((u.current.volume = t.valueAsNumber), s.set(t.valueAsNumber));
      }
      return {
        props: {
          audio: {
            src: t,
            onTimeUpdate: function (e) {
              i.set(Math.round(e.target.currentTime));
            },
            onLoadedMetadata: function (t) {
              var n = t.currentTarget;
              (u.current = n),
                o.set(Math.round(n.duration)),
                i.set(n.currentTime),
                s.set(n.volume),
                a(e.UseAudioState.ready);
            },
            onEnded: function () {
              a(e.UseAudioState.paused);
            },
            controls: !1,
          },
          player: {
            min: 0,
            step: 1,
            max: o.value,
            value: i.value,
            onInput: f,
            style: { "--percentage": d + "%" },
          },
          volume: {
            min: 0,
            max: 1,
            step: 0.01,
            value: s.value,
            onInput: v,
            style: { "--percentage": Math.floor(100 * s.value) + "%" },
          },
        },
        actions: {
          play: function () {
            u.current && (u.current.play(), a(e.UseAudioState.playing));
          },
          pause: function () {
            u.current && (u.current.pause(), a(e.UseAudioState.paused));
          },
          mute: function () {
            u.current && ((u.current.volume = 0), s.set(0));
          },
          unmute: function () {
            u.current && ((u.current.volume = 1), s.set(1));
          },
          reset: function () {
            u.current &&
              ((u.current.currentTime = 0),
              u.current.pause(),
              i.set(0),
              a(e.UseAudioState.paused));
          },
          seek: f,
          changeVolume: v,
        },
        meta: {
          state: r,
          isInitial: r === e.UseAudioState.initial,
          isReady: r === e.UseAudioState.ready,
          isPlaying: r === e.UseAudioState.playing,
          isPaused: r === e.UseAudioState.paused,
          matches: function (e) {
            return e.some(function (e) {
              return e === r;
            });
          },
          percentage: { raw: d, formatted: d + "%" },
          currentTime: { raw: i.value, formatted: h.format(i.value) },
          duration: { raw: o.value, formatted: h.format(o.value) },
          volume: {
            value: s.value,
            raw: Math.floor(100 * s.value),
            formatted: Math.floor(100 * s.value) + "%",
          },
          muted: c,
        },
      };
    }),
    (e.useAutofocus = x),
    (e.useBreakpoint = function (e) {
      var t,
        n = U();
      return (null != (t = null == n ? void 0 : n.width) ? t : 0) <= e;
    }),
    (e.useClickOutside = F),
    (e.useClientFilter = A),
    (e.useClientSearch = function () {
      var e = t.useState(""),
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
    }),
    (e.useClientSort = function (e, t) {
      var n,
        r = w(e, t.enum.default);
      return m(
        r.value === t.enum.default
          ? { sortFn: D, options: Object.keys(t.options) }
          : {
              sortFn: null != (n = t.options[r.value]) ? n : D,
              options: Object.keys(t.options),
            },
        r,
        {
          handleChange: function (e) {
            var n = e.currentTarget.value,
              a = Boolean(t.enum[String(n)]);
            r.set(a ? n : t.enum.default);
          },
        },
      );
    }),
    (e.useCurrentTimestamp = function () {
      var e = t.useState(R),
        n = e[0],
        r = e[1];
      return (
        t.useEffect(function () {
          var e = setInterval(function () {
            return r(R());
          }, k.Seconds(1).ms);
          return function () {
            return clearInterval(e);
          };
        }, []),
        n
      );
    }),
    (e.useDebounce = function (e) {
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
    (e.useDelayedLoader = function (e, n) {
      void 0 === n && (n = 500);
      var r,
        a = V(),
        u = V();
      return (
        t.useEffect(function () {
          return (
            (r = setTimeout(u.enable, n)),
            function () {
              return clearTimeout(r);
            }
          );
        }, []),
        t.useEffect(
          function () {
            if (!u.off) return e.isLoading ? a.enable() : a.disable();
          },
          [e.isLoading, u.on],
        ),
        a
      );
    }),
    (e.useDesignMode = function (e) {
      var n = V(e),
        r = T();
      return (
        t.useEffect(
          function () {
            r && (r.document.designMode = n.on ? "on" : "off");
          },
          [n.on],
        ),
        n
      );
    }),
    (e.useDisablePullToRefresh = function (e) {
      void 0 === e && (e = !0),
        t.useLayoutEffect(
          function () {
            if (e) {
              var t = document.querySelector("html"),
                n = document.body,
                r = window.getComputedStyle(t).overscrollBehavior,
                a = window.getComputedStyle(n).overscrollBehavior;
              return (
                (n.style.overscrollBehavior = "none"),
                (t.style.overscrollBehavior = "none"),
                function () {
                  (n.style.overscrollBehavior = a),
                    (t.style.overscrollBehavior = r);
                }
              );
            }
          },
          [e],
        );
    }),
    (e.useDocumentTitle = function (e) {
      s.default.useEffect(
        function () {
          document.title = e;
        },
        [e],
      );
    }),
    (e.useExpandableList = function (n) {
      var r = n.length - n.max,
        a = n.length > n.max;
      function u() {
        return a
          ? e.UseExpandableListState.contracted
          : e.UseExpandableListState.expanded;
      }
      var o = t.useState(u),
        i = o[0],
        l = o[1];
      return (
        t.useEffect(
          function () {
            return l(u());
          },
          [n.length, n.max],
        ),
        {
          state: i,
          displayShowMore: i === e.UseExpandableListState.contracted,
          displayShowLess: i === e.UseExpandableListState.expanded && a,
          actions: {
            showMore: function () {
              i === e.UseExpandableListState.contracted &&
                l(e.UseExpandableListState.expanded);
            },
            showLess: function () {
              i === e.UseExpandableListState.expanded &&
                l(e.UseExpandableListState.contracted);
            },
          },
          numberOfExcessiveElements: r,
          filterFn: function (t, r) {
            return i === e.UseExpandableListState.expanded || r < n.max;
          },
        }
      );
    }),
    (e.useFeatureFlag = function (e) {
      var t = s.default.useContext(me);
      if (void 0 === t)
        throw new Error(
          "useFeatureFlag must be used within the FeatureFlagsContext",
        );
      return "yes" === t[e];
    }),
    (e.useFeatureFlags = function () {
      var e = s.default.useContext(me);
      if (void 0 === e)
        throw new Error(
          "useFeatureFlags must be used within the FeatureFlagsContext",
        );
      return e;
    }),
    (e.useField = w),
    (e.useFile = function (n, r) {
      var a,
        u =
          null != (a = null == r ? void 0 : r.maxSize)
            ? a
            : Number.POSITIVE_INFINITY,
        o = t.useState(0),
        i = o[0],
        l = o[1],
        s = t.useState(e.UseFileState.idle),
        c = s[0],
        d = s[1],
        f = t.useState(null),
        v = f[0],
        m = f[1];
      function p(t) {
        var n = t.currentTarget.files;
        if (null != n && n[0]) {
          var r = n[0];
          if (!(r.size > u)) return m(r), d(e.UseFileState.selected), r;
          d(e.UseFileState.error);
        }
      }
      function g() {
        l(function (e) {
          return e + 1;
        }),
          m(null),
          d(e.UseFileState.idle);
      }
      var h = t.useMemo(
        function () {
          return v ? URL.createObjectURL(v) : void 0;
        },
        [v],
      );
      function y(e) {
        return e.some(function (e) {
          return e === c;
        });
      }
      return c === e.UseFileState.idle
        ? {
            state: c,
            matches: y,
            isIdle: !0,
            isSelected: !1,
            isError: !1,
            data: null,
            actions: { selectFile: p, clearFile: g },
            label: { props: { htmlFor: n } },
            input: { props: { id: n, name: n, multiple: !1, key: i } },
          }
        : c === e.UseFileState.selected
          ? {
              state: c,
              matches: y,
              data: v,
              isIdle: !1,
              isSelected: !0,
              isError: !1,
              actions: { selectFile: p, clearFile: g },
              preview: h,
              label: { props: { htmlFor: n } },
              input: { props: { id: n, name: n, multiple: !1, key: i } },
            }
          : {
              state: c,
              matches: y,
              data: null,
              isIdle: !1,
              isSelected: !1,
              isError: !0,
              actions: { selectFile: p, clearFile: g },
              label: { props: { htmlFor: n } },
              input: { props: { id: n, name: n, multiple: !1, key: i } },
            };
    }),
    (e.useFocusKeyboardShortcut = function (e) {
      var n,
        r = t.useRef(null);
      return (
        q(
          (((n = {})[e] = function () {
            var e;
            return null == (e = r.current) ? void 0 : e.focus();
          }),
          n),
        ),
        { ref: r }
      );
    }),
    (e.useHover = function (e) {
      var t,
        n = null == (t = null == e ? void 0 : e.enabled) || t,
        r = s.default.useRef(null),
        a = V(!1),
        u = a.enable,
        o = a.disable;
      return (
        s.default.useEffect(function () {
          var e = r.current;
          return (
            e &&
              n &&
              (e.addEventListener("mouseenter", u),
              e.addEventListener("mouseleave", o)),
            function () {
              e &&
                n &&
                (e.removeEventListener("mouseenter", u),
                e.removeEventListener("mouseleave", o));
            }
          );
        }, []),
        { attach: { ref: r }, isHovering: a.on && n }
      );
    }),
    (e.useImageFileResolution = function (t) {
      var n,
        r = w("resolution", z);
      return (
        l.useEffect(
          function () {
            !(function () {
              try {
                var n,
                  a = function (a) {
                    if (n) return a;
                    [e.UseFileState.error, e.UseFileState.idle].includes(
                      t.state,
                    ) &&
                      null !== r.value.width &&
                      null !== r.value.height &&
                      r.clear();
                  },
                  u = (function () {
                    if (t.state === e.UseFileState.selected)
                      return (function (e, a) {
                        try {
                          var u = Promise.resolve(B(t.preview)).then(
                            function (e) {
                              var t = r.set(e);
                              return (n = 1), t;
                            },
                          );
                        } catch (e) {
                          return a();
                        }
                        return u && u.then ? u.then(void 0, a) : u;
                      })(0, function () {
                        var e = r.clear();
                        return (n = 1), e;
                      });
                  })();
                Promise.resolve(u && u.then ? u.then(a) : a(u));
              } catch (e) {
                return Promise.reject(e);
              }
            })();
          },
          [t.state, null == (n = t.data) ? void 0 : n.name],
        ),
        r.value
      );
    }),
    (e.useIsOnline = W),
    (e.useIsVisible = function (e) {
      void 0 === e && (e = K);
      var n = t.useState(!1),
        r = n[0],
        a = n[1];
      return (
        t.useEffect(function () {
          var t = e.ref.current;
          if (Q() && t) {
            var n = new IntersectionObserver(function (e) {
              var t;
              return a(Boolean(null == (t = e[0]) ? void 0 : t.isIntersecting));
            }, e);
            return (
              n.observe(t),
              function () {
                return n.unobserve(t);
              }
            );
          }
        }, []),
        r
      );
    }),
    (e.useItem = function (e) {
      var n,
        r,
        a = null != (n = null == e ? void 0 : e.comparisonFn) ? n : Y,
        u = t.useState(
          null != (r = null == e ? void 0 : e.defaultItem) ? r : $,
        ),
        o = u[0],
        i = u[1];
      return {
        clear: function () {
          return i($);
        },
        set: function (e) {
          return i(e);
        },
        toggle: function (e) {
          return i(function (t) {
            return t === $ ? e : a(t, e) ? $ : e;
          });
        },
        value: o,
        isDefault: a(o, $),
        exists: !a(o, $),
        compare: function (e) {
          return a(o, e);
        },
      };
    }),
    (e.useKeyHandler = function (e) {
      var t = Object.keys(e);
      return function (n) {
        var r = n.key,
          a = e[r];
        t.includes(n.key) && e[r] && a && a();
      };
    }),
    (e.useKeyboardShortcuts = q),
    (e.useLanguage = ee),
    (e.useLanguageSelector = function (e) {
      return A({
        enum: e,
        currentQuery: ee(),
        name: "language",
        onUpdate: function (e, t) {
          var n = T();
          n &&
            e &&
            t &&
            t !== e &&
            (c.default.set("accept-language", e), n.document.location.reload());
        },
      });
    }),
    (e.useLeavingPrompt = function (e) {
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
    (e.useList = te),
    (e.useMetaEnterSubmit = function () {
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
    (e.usePagination = function () {
      var e,
        t,
        n,
        r = w("meta", null),
        a = null == (e = r.value) ? void 0 : e.previousPage,
        u = null == (t = r.value) ? void 0 : t.nextPage,
        o = (null == (n = r.value) ? void 0 : n.lastPage) || 1,
        i = w("page", 1);
      return {
        current: i.value,
        last: o,
        controls: {
          firstPage: {
            active: !a,
            disabled: !1,
            exists: !0,
            go: function () {
              return i.set(1);
            },
            value: 1,
          },
          previousPage: {
            active: !1,
            disabled: !a,
            exists: Boolean(a),
            go: function () {
              return i.set(null != a ? a : i.value);
            },
            value: a,
          },
          nextPage: {
            active: !1,
            disabled: !u,
            exists: Boolean(u),
            go: function () {
              return i.set(null != u ? u : i.value);
            },
            value: u,
          },
          lastPage: {
            active: i.value === o,
            disabled: !u,
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
    }),
    (e.usePersistentToggle = function (e, t) {
      void 0 === t && (t = !1);
      var n = V(re.get(e, t));
      return (
        l.useEffect(
          function () {
            return re.set(e, n.on);
          },
          [e, n.on],
        ),
        m({}, n, {
          clear: function () {
            return re.clear(e);
          },
        })
      );
    }),
    (e.usePluralize = function () {
      var e = ee();
      return function (t) {
        return G(m({}, t, { language: e }));
      };
    }),
    (e.usePreviousValue = L),
    (e.useRateLimiter = function (e) {
      var n = t.useRef(new ae(e));
      return function () {
        var t = Date.now(),
          r = n.current.verify(t);
        return r.allowed
          ? e.action.apply(e, [].slice.call(arguments))
          : null == e.fallback
            ? void 0
            : e.fallback(r.remainingMs);
      };
    }),
    (e.useReordering = function (e) {
      var t,
        n = null == (t = e.enabled) || t,
        r = s.default.useState(e.initialItems),
        a = r[0],
        u = r[1];
      s.default.useEffect(
        function () {
          return u(e.initialItems);
        },
        [JSON.stringify(e.initialItems)],
      );
      var o = s.default.useRef(null),
        i = s.default.useState(null),
        l = i[0],
        c = i[1],
        d = s.default.useState(null),
        f = d[0],
        v = d[1];
      function m(e) {
        return function (t) {
          var n;
          c(e),
            (o.current = null != (n = a[e]) ? n : null),
            null != t &&
              t.dataTransfer &&
              !t.currentTarget.parentNode &&
              ((t.dataTransfer.effectAllowed = "move"),
              t.dataTransfer.setData("text/html", t.currentTarget.parentNode),
              t.dataTransfer.setDragImage(t.currentTarget.parentNode, 20, 20));
        };
      }
      function p(e) {
        return function (t) {
          t.preventDefault();
          var n = a[e];
          v(e),
            o.current !== n &&
              o.current &&
              u(
                a
                  .filter(function (e) {
                    return e !== o.current;
                  })
                  .toSpliced(e, 0, o.current),
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
              id: null == (r = a[t]) ? void 0 : r.id,
              item: a[t],
              to: f,
            }),
            c(null),
            (o.current = null),
            v(null);
        };
      }
      var h = n ? (o.current ? "grabbing" : "grab") : "auto";
      return {
        items: a,
        enabled: n,
        props: {
          item: function (e) {
            return { onDragOver: p(e) };
          },
          handle: function (e) {
            return {
              onDragStart: m(e),
              onDragEnd: g(e),
              draggable: n,
              style: { cursor: h },
            };
          },
        },
      };
    }),
    (e.useScroll = function () {
      var e = T(),
        t = s.default.useState(0),
        n = t[0],
        r = t[1],
        a = V(!1);
      return (
        s.default.useLayoutEffect(function () {
          function t() {
            e &&
              (r(null == e ? void 0 : e.scrollY),
              e.document.body.clientHeight < e.document.body.scrollHeight
                ? a.enable()
                : a.disable());
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
          visible: a.on,
          hidden: a.off,
        }
      );
    }),
    (e.useScrollLock = ue),
    (e.useSound = function (e) {
      var t = new Audio(e);
      return { play: t.play.bind(t) };
    }),
    (e.useToastTrigger = function () {
      return Te()[1].add;
    }),
    (e.useToastsContext = Te),
    (e.useToggle = V),
    (e.useTranslations = function () {
      var e = s.default.useContext(X);
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
          : (console.warn(
              "[@bgord/frontend] missing translation for key: " + t,
            ),
            t);
      };
    }),
    (e.useUrlFilter = function (e) {
      var t,
        n = T(),
        r =
          null !=
          (t = new URLSearchParams(null == n ? void 0 : n.location.search).get(
            e.name,
          ))
            ? t
            : void 0;
      return A(
        m(
          {
            onUpdate: function (t, r) {
              if (n) {
                var a = new URL(n.location.toString()),
                  u = new URLSearchParams(a.search);
                void 0 === t ? u.delete(e.name) : u.set(e.name, t),
                  t !== r &&
                    t !== r &&
                    ((a.search = u.toString()),
                    history.pushState({}, "", a.toString()));
              }
            },
          },
          e,
          { defaultQuery: e.defaultQuery, currentQuery: r },
        ),
      );
    }),
    (e.useVideo = function (t) {
      var n = l.useState(e.UseVideoState.initial),
        r = n[0],
        a = n[1],
        u = l.useRef(null),
        o = w("duration", 0),
        i = w("currentTime", 0),
        s = w("volume", 1),
        c = 0 === s.value,
        d = 0 === o.value ? 0 : Math.round((i.value / o.value) * 100);
      function f(e) {
        var t = e.currentTarget;
        u.current &&
          ((u.current.currentTime = t.valueAsNumber), i.set(t.valueAsNumber));
      }
      function v(e) {
        var t = e.currentTarget;
        u.current &&
          ((u.current.volume = t.valueAsNumber), s.set(t.valueAsNumber));
      }
      return {
        props: {
          video: {
            src: t,
            onTimeUpdate: function (e) {
              i.set(Math.round(e.target.currentTime));
            },
            onLoadedMetadata: function (t) {
              var n = t.currentTarget;
              (u.current = n),
                o.set(Math.round(n.duration)),
                i.set(n.currentTime),
                s.set(n.volume),
                a(e.UseVideoState.ready);
            },
            onEnded: function () {
              a(e.UseVideoState.paused);
            },
            controls: !1,
          },
          player: {
            min: 0,
            step: 1,
            max: o.value,
            value: i.value,
            onInput: f,
            style: { "--percentage": d + "%" },
          },
          volume: {
            min: 0,
            max: 1,
            step: 0.01,
            value: s.value,
            onInput: v,
            style: { "--percentage": Math.floor(100 * s.value) + "%" },
          },
        },
        actions: {
          play: function () {
            u.current && (u.current.play(), a(e.UseVideoState.playing));
          },
          pause: function () {
            u.current && (u.current.pause(), a(e.UseVideoState.paused));
          },
          mute: function () {
            u.current && ((u.current.volume = 0), s.set(0));
          },
          unmute: function () {
            u.current && ((u.current.volume = 1), s.set(1));
          },
          reset: function () {
            u.current &&
              ((u.current.currentTime = 0),
              u.current.pause(),
              i.set(0),
              a(e.UseVideoState.paused));
          },
          seek: f,
          changeVolume: v,
          triggerFullscreen: function () {
            u.current && u.current.requestFullscreen();
          },
        },
        meta: {
          state: r,
          isInitial: r === e.UseVideoState.initial,
          isReady: r === e.UseVideoState.ready,
          isPlaying: r === e.UseVideoState.playing,
          isPaused: r === e.UseVideoState.paused,
          matches: function (e) {
            return e.some(function (e) {
              return e === r;
            });
          },
          percentage: { raw: d, formatted: d + "%" },
          currentTime: { raw: i.value, formatted: h.format(i.value) },
          duration: { raw: o.value, formatted: h.format(o.value) },
          volume: {
            value: s.value,
            raw: Math.floor(100 * s.value),
            formatted: Math.floor(100 * s.value) + "%",
          },
          muted: c,
        },
      };
    }),
    (e.useWindowDimensions = U);
});
//# sourceMappingURL=bgord-frontend.umd.js.map
