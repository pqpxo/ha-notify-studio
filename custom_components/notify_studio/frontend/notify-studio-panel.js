var Xf = Object.defineProperty;
var Zf = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ho = (e, t, n) => Zf(e, typeof t != "symbol" ? t + "" : t, n);
var Ku = { exports: {} }, po = {}, Xu = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Jf = Symbol.for("react.portal"), qf = Symbol.for("react.fragment"), ep = Symbol.for("react.strict_mode"), tp = Symbol.for("react.profiler"), np = Symbol.for("react.provider"), rp = Symbol.for("react.context"), lp = Symbol.for("react.forward_ref"), op = Symbol.for("react.suspense"), ip = Symbol.for("react.memo"), sp = Symbol.for("react.lazy"), Da = Symbol.iterator;
function ap(e) {
  return e === null || typeof e != "object" ? null : (e = Da && e[Da] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ju = Object.assign, qu = {};
function bn(e, t, n) {
  this.props = e, this.context = t, this.refs = qu, this.updater = n || Zu;
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ec() {
}
ec.prototype = bn.prototype;
function cs(e, t, n) {
  this.props = e, this.context = t, this.refs = qu, this.updater = n || Zu;
}
var ds = cs.prototype = new ec();
ds.constructor = cs;
Ju(ds, bn.prototype);
ds.isPureReactComponent = !0;
var $a = Array.isArray, tc = Object.prototype.hasOwnProperty, fs = { current: null }, nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) tc.call(t, r) && !nc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ar, type: e, key: o, ref: i, props: l, _owner: fs.current };
}
function up(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ps(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function cp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Aa = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? cp("" + e.key) : t.toString(36);
}
function zl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ar:
        case Jf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Bo(i, 0) : r, $a(l) ? (n = "", e != null && (n = e.replace(Aa, "$&/") + "/"), zl(l, t, n, "", function(m) {
    return m;
  })) : l != null && (ps(l) && (l = up(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Aa, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", $a(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var c = r + Bo(o, u);
    i += zl(o, t, n, c, l);
  }
  else if (c = ap(e), typeof c == "function") for (e = c.call(e), u = 0; !(o = e.next()).done; ) o = o.value, c = r + Bo(o, u++), i += zl(o, t, n, c, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return zl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function dp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null }, Tl = { transition: null }, fp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Tl, ReactCurrentOwner: fs };
function lc() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: fl, forEach: function(e, t, n) {
  fl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ps(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = bn;
U.Fragment = qf;
U.Profiler = tp;
U.PureComponent = cs;
U.StrictMode = ep;
U.Suspense = op;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
U.act = lc;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ju({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = fs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) tc.call(t, c) && !nc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Ar, type: e.type, key: l, ref: o, props: r, _owner: i };
};
U.createContext = function(e) {
  return e = { $$typeof: rp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: np, _context: e }, e.Consumer = e;
};
U.createElement = rc;
U.createFactory = function(e) {
  var t = rc.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: lp, render: e };
};
U.isValidElement = ps;
U.lazy = function(e) {
  return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: dp };
};
U.memo = function(e, t) {
  return { $$typeof: ip, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = Tl.transition;
  Tl.transition = {};
  try {
    e();
  } finally {
    Tl.transition = t;
  }
};
U.unstable_act = lc;
U.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
U.useContext = function(e) {
  return Se.current.useContext(e);
};
U.useDebugValue = function() {
};
U.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
U.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
U.useId = function() {
  return Se.current.useId();
};
U.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
U.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
U.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
U.useRef = function(e) {
  return Se.current.useRef(e);
};
U.useState = function(e) {
  return Se.current.useState(e);
};
U.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function() {
  return Se.current.useTransition();
};
U.version = "18.3.1";
Xu.exports = U;
var S = Xu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp = S, mp = Symbol.for("react.element"), hp = Symbol.for("react.fragment"), gp = Object.prototype.hasOwnProperty, vp = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) gp.call(t, r) && !yp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: mp, type: e, key: o, ref: i, props: l, _owner: vp.current };
}
po.Fragment = hp;
po.jsx = oc;
po.jsxs = oc;
Ku.exports = po;
var s = Ku.exports, ic = { exports: {} }, De = {}, sc = { exports: {} }, ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(z, $) {
    var D = z.length;
    z.push($);
    e: for (; 0 < D; ) {
      var W = D - 1 >>> 1, Q = z[W];
      if (0 < l(Q, $)) z[W] = $, z[D] = Q, D = W;
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var $ = z[0], D = z.pop();
    if (D !== $) {
      z[0] = D;
      e: for (var W = 0, Q = z.length, Je = Q >>> 1; W < Je; ) {
        var qe = 2 * (W + 1) - 1, sn = z[qe], Te = qe + 1, bt = z[Te];
        if (0 > l(sn, D)) Te < Q && 0 > l(bt, sn) ? (z[W] = bt, z[Te] = D, W = Te) : (z[W] = sn, z[qe] = D, W = qe);
        else if (Te < Q && 0 > l(bt, D)) z[W] = bt, z[Te] = D, W = Te;
        else break e;
      }
    }
    return $;
  }
  function l(z, $) {
    var D = z.sortIndex - $.sortIndex;
    return D !== 0 ? D : z.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var c = [], m = [], x = 1, w = null, y = 3, N = !1, C = !1, E = !1, V = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(z) {
    for (var $ = n(m); $ !== null; ) {
      if ($.callback === null) r(m);
      else if ($.startTime <= z) r(m), $.sortIndex = $.expirationTime, t(c, $);
      else break;
      $ = n(m);
    }
  }
  function _(z) {
    if (E = !1, h(z), !C) if (n(c) !== null) C = !0, ln(P);
    else {
      var $ = n(m);
      $ !== null && on(_, $.startTime - z);
    }
  }
  function P(z, $) {
    C = !1, E && (E = !1, p(M), M = -1), N = !0;
    var D = y;
    try {
      for (h($), w = n(c); w !== null && (!(w.expirationTime > $) || z && !ce()); ) {
        var W = w.callback;
        if (typeof W == "function") {
          w.callback = null, y = w.priorityLevel;
          var Q = W(w.expirationTime <= $);
          $ = e.unstable_now(), typeof Q == "function" ? w.callback = Q : w === n(c) && r(c), h($);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var Je = !0;
      else {
        var qe = n(m);
        qe !== null && on(_, qe.startTime - $), Je = !1;
      }
      return Je;
    } finally {
      w = null, y = D, N = !1;
    }
  }
  var L = !1, R = null, M = -1, Y = 5, I = -1;
  function ce() {
    return !(e.unstable_now() - I < Y);
  }
  function Ut() {
    if (R !== null) {
      var z = e.unstable_now();
      I = z;
      var $ = !0;
      try {
        $ = R(!0, z);
      } finally {
        $ ? vt() : (L = !1, R = null);
      }
    } else L = !1;
  }
  var vt;
  if (typeof d == "function") vt = function() {
    d(Ut);
  };
  else if (typeof MessageChannel < "u") {
    var Br = new MessageChannel(), rn = Br.port2;
    Br.port1.onmessage = Ut, vt = function() {
      rn.postMessage(null);
    };
  } else vt = function() {
    V(Ut, 0);
  };
  function ln(z) {
    R = z, L || (L = !0, vt());
  }
  function on(z, $) {
    M = V(function() {
      z(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    C || N || (C = !0, ln(P));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(z) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = y;
    }
    var D = y;
    y = $;
    try {
      return z();
    } finally {
      y = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, $) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var D = y;
    y = z;
    try {
      return $();
    } finally {
      y = D;
    }
  }, e.unstable_scheduleCallback = function(z, $, D) {
    var W = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? W + D : W) : D = W, z) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = D + Q, z = { id: x++, callback: $, priorityLevel: z, startTime: D, expirationTime: Q, sortIndex: -1 }, D > W ? (z.sortIndex = D, t(m, z), n(c) === null && z === n(m) && (E ? (p(M), M = -1) : E = !0, on(_, D - W))) : (z.sortIndex = Q, t(c, z), C || N || (C = !0, ln(P))), z;
  }, e.unstable_shouldYield = ce, e.unstable_wrapCallback = function(z) {
    var $ = y;
    return function() {
      var D = y;
      y = $;
      try {
        return z.apply(this, arguments);
      } finally {
        y = D;
      }
    };
  };
})(ac);
sc.exports = ac;
var xp = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp = S, Oe = xp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uc = /* @__PURE__ */ new Set(), _r = {};
function tn(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) uc.add(t[e]);
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vi = Object.prototype.hasOwnProperty, _p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fa = {}, Ua = {};
function kp(e) {
  return vi.call(Ua, e) ? !0 : vi.call(Fa, e) ? !1 : _p.test(e) ? Ua[e] = !0 : (Fa[e] = !0, !1);
}
function Sp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Np(e, t, n, r) {
  if (t === null || typeof t > "u" || Sp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ne(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ms = /[\-:]([a-z])/g;
function hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ms,
    hs
  );
  he[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ms, hs);
  he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ms, hs);
  he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gs(e, t, n, r) {
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Np(t, n, l, r) && (n = null), r || l === null ? kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pl = Symbol.for("react.element"), gn = Symbol.for("react.portal"), vn = Symbol.for("react.fragment"), vs = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), ys = Symbol.for("react.forward_ref"), xi = Symbol.for("react.suspense"), wi = Symbol.for("react.suspense_list"), xs = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), fc = Symbol.for("react.offscreen"), ba = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = ba && e[ba] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, Vo;
function ar(e) {
  if (Vo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vo = t && t[1] || "";
  }
  return `
` + Vo + e;
}
var Wo = !1;
function Qo(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (m) {
        var r = m;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (m) {
        r = m;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (m) {
        r = m;
      }
      e();
    }
  } catch (m) {
    if (m && r && typeof m.stack == "string") {
      for (var l = m.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var c = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Wo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function jp(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Qo(e.type, !1), e;
    case 11:
      return e = Qo(e.type.render, !1), e;
    case 1:
      return e = Qo(e.type, !0), e;
    default:
      return "";
  }
}
function _i(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case gn:
      return "Portal";
    case yi:
      return "Profiler";
    case vs:
      return "StrictMode";
    case xi:
      return "Suspense";
    case wi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case dc:
      return (e.displayName || "Context") + ".Consumer";
    case cc:
      return (e._context.displayName || "Context") + ".Provider";
    case ys:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case xs:
      return t = e.displayName || null, t !== null ? t : _i(e.type) || "Memo";
    case _t:
      t = e._payload, e = e._init;
      try {
        return _i(e(t));
      } catch {
      }
  }
  return null;
}
function Cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _i(t);
    case 8:
      return t === vs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ot(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ep(e) {
  var t = pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ml(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function mc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ki(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ha(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ot(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hc(e, t) {
  t = t.checked, t != null && gs(e, "checked", t, !1);
}
function Si(e, t) {
  hc(e, t);
  var n = Ot(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ni(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ni(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ba(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ni(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Pn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ot(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Va(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function gc(e, t) {
  var n = Ot(t.value), r = Ot(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Wa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, yc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hl = hl || document.createElement("div"), hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  Pp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function wc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var zp = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ei(e, t) {
  if (t) {
    if (zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zi = null;
function ws(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ti = null, zn = null, Tn = null;
function Qa(e) {
  if (e = br(e)) {
    if (typeof Ti != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = yo(t), Ti(e.stateNode, e.type, t));
  }
}
function _c(e) {
  zn ? Tn ? Tn.push(e) : Tn = [e] : zn = e;
}
function kc() {
  if (zn) {
    var e = zn, t = Tn;
    if (Tn = zn = null, Qa(e), t) for (e = 0; e < t.length; e++) Qa(t[e]);
  }
}
function Sc(e, t) {
  return e(t);
}
function Nc() {
}
var Go = !1;
function jc(e, t, n) {
  if (Go) return e(t, n);
  Go = !0;
  try {
    return Sc(e, t, n);
  } finally {
    Go = !1, (zn !== null || Tn !== null) && (Nc(), kc());
  }
}
function Sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Li = !1;
if (ft) try {
  var tr = {};
  Object.defineProperty(tr, "passive", { get: function() {
    Li = !0;
  } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
} catch {
  Li = !1;
}
function Tp(e, t, n, r, l, o, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var pr = !1, Bl = null, Vl = !1, Ri = null, Lp = { onError: function(e) {
  pr = !0, Bl = e;
} };
function Rp(e, t, n, r, l, o, i, u, c) {
  pr = !1, Bl = null, Tp.apply(Lp, arguments);
}
function Mp(e, t, n, r, l, o, i, u, c) {
  if (Rp.apply(this, arguments), pr) {
    if (pr) {
      var m = Bl;
      pr = !1, Bl = null;
    } else throw Error(k(198));
    Vl || (Vl = !0, Ri = m);
  }
}
function nn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ga(e) {
  if (nn(e) !== e) throw Error(k(188));
}
function Ip(e) {
  var t = e.alternate;
  if (!t) {
    if (t = nn(e), t === null) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ga(l), e;
        if (o === r) return Ga(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ec(e) {
  return e = Ip(e), e !== null ? Pc(e) : null;
}
function Pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zc = Oe.unstable_scheduleCallback, Ya = Oe.unstable_cancelCallback, Op = Oe.unstable_shouldYield, Dp = Oe.unstable_requestPaint, oe = Oe.unstable_now, $p = Oe.unstable_getCurrentPriorityLevel, _s = Oe.unstable_ImmediatePriority, Tc = Oe.unstable_UserBlockingPriority, Wl = Oe.unstable_NormalPriority, Ap = Oe.unstable_LowPriority, Lc = Oe.unstable_IdlePriority, mo = null, lt = null;
function Fp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function") try {
    lt.onCommitFiberRoot(mo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ke = Math.clz32 ? Math.clz32 : Hp, Up = Math.log, bp = Math.LN2;
function Hp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Up(e) / bp | 0) | 0;
}
var gl = 64, vl = 4194304;
function cr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = cr(u) : (o &= i, o !== 0 && (r = cr(o)));
  } else i = n & ~l, i !== 0 ? r = cr(i) : o !== 0 && (r = cr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ke(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Bp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ke(o), u = 1 << i, c = l[i];
    c === -1 ? (!(u & n) || u & r) && (l[i] = Bp(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Mi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rc() {
  var e = gl;
  return gl <<= 1, !(gl & 4194240) && (gl = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ke(t), e[t] = n;
}
function Wp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ke(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ks(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function Mc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ic, Ss, Oc, Dc, $c, Ii = !1, yl = [], Et = null, Pt = null, zt = null, Nr = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), St = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ka(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(t.pointerId);
  }
}
function nr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = br(t), t !== null && Ss(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Gp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Et = nr(Et, e, t, n, r, l), !0;
    case "dragenter":
      return Pt = nr(Pt, e, t, n, r, l), !0;
    case "mouseover":
      return zt = nr(zt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Nr.set(o, nr(Nr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, jr.set(o, nr(jr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ac(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Cc(n), t !== null) {
          e.blockedOn = t, $c(e.priority, function() {
            Oc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ll(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zi = r, n.target.dispatchEvent(r), zi = null;
    } else return t = br(n), t !== null && Ss(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Xa(e, t, n) {
  Ll(e) && n.delete(t);
}
function Yp() {
  Ii = !1, Et !== null && Ll(Et) && (Et = null), Pt !== null && Ll(Pt) && (Pt = null), zt !== null && Ll(zt) && (zt = null), Nr.forEach(Xa), jr.forEach(Xa);
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ii || (Ii = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Yp)));
}
function Cr(e) {
  function t(l) {
    return rr(l, e);
  }
  if (0 < yl.length) {
    rr(yl[0], e);
    for (var n = 1; n < yl.length; n++) {
      var r = yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Et !== null && rr(Et, e), Pt !== null && rr(Pt, e), zt !== null && rr(zt, e), Nr.forEach(t), jr.forEach(t), n = 0; n < St.length; n++) r = St[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && (n = St[0], n.blockedOn === null); ) Ac(n), n.blockedOn === null && St.shift();
}
var Ln = gt.ReactCurrentBatchConfig, Gl = !0;
function Kp(e, t, n, r) {
  var l = B, o = Ln.transition;
  Ln.transition = null;
  try {
    B = 1, Ns(e, t, n, r);
  } finally {
    B = l, Ln.transition = o;
  }
}
function Xp(e, t, n, r) {
  var l = B, o = Ln.transition;
  Ln.transition = null;
  try {
    B = 4, Ns(e, t, n, r);
  } finally {
    B = l, Ln.transition = o;
  }
}
function Ns(e, t, n, r) {
  if (Gl) {
    var l = Oi(e, t, n, r);
    if (l === null) li(e, t, r, Yl, n), Ka(e, r);
    else if (Gp(l, e, t, n, r)) r.stopPropagation();
    else if (Ka(e, r), t & 4 && -1 < Qp.indexOf(e)) {
      for (; l !== null; ) {
        var o = br(l);
        if (o !== null && Ic(o), o = Oi(e, t, n, r), o === null && li(e, t, r, Yl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var Yl = null;
function Oi(e, t, n, r) {
  if (Yl = null, e = ws(r), e = Wt(e), e !== null) if (t = nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Cc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yl = e, null;
}
function Fc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($p()) {
        case _s:
          return 1;
        case Tc:
          return 4;
        case Wl:
        case Ap:
          return 16;
        case Lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null, js = null, Rl = null;
function Uc() {
  if (Rl) return Rl;
  var e, t = js, n = t.length, r, l = "value" in jt ? jt.value : jt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Rl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ml(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xl() {
  return !0;
}
function Za() {
  return !1;
}
function $e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xl : Za, this.isPropagationStopped = Za, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xl);
  }, persist: function() {
  }, isPersistent: xl }), t;
}
var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cs = $e(Hn), Ur = ne({}, Hn, { view: 0, detail: 0 }), Zp = $e(Ur), Ko, Xo, lr, ho = ne({}, Ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Es, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (Ko = e.screenX - lr.screenX, Xo = e.screenY - lr.screenY) : Xo = Ko = 0, lr = e), Ko);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Xo;
} }), Ja = $e(ho), Jp = ne({}, ho, { dataTransfer: 0 }), qp = $e(Jp), em = ne({}, Ur, { relatedTarget: 0 }), Zo = $e(em), tm = ne({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nm = $e(tm), rm = ne({}, Hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), lm = $e(rm), om = ne({}, Hn, { data: 0 }), qa = $e(om), im = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, sm = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, am = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function um(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = am[e]) ? !!t[e] : !1;
}
function Es() {
  return um;
}
var cm = ne({}, Ur, { key: function(e) {
  if (e.key) {
    var t = im[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Es, charCode: function(e) {
  return e.type === "keypress" ? Ml(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), dm = $e(cm), fm = ne({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), eu = $e(fm), pm = ne({}, Ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Es }), mm = $e(pm), hm = ne({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gm = $e(hm), vm = ne({}, ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ym = $e(vm), xm = [9, 13, 27, 32], Ps = ft && "CompositionEvent" in window, mr = null;
ft && "documentMode" in document && (mr = document.documentMode);
var wm = ft && "TextEvent" in window && !mr, bc = ft && (!Ps || mr && 8 < mr && 11 >= mr), tu = " ", nu = !1;
function Hc(e, t) {
  switch (e) {
    case "keyup":
      return xm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return Bc(t);
    case "keypress":
      return t.which !== 32 ? null : (nu = !0, tu);
    case "textInput":
      return e = t.data, e === tu && nu ? null : e;
    default:
      return null;
  }
}
function km(e, t) {
  if (yn) return e === "compositionend" || !Ps && Hc(e, t) ? (e = Uc(), Rl = js = jt = null, yn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sm[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  _c(r), t = Kl(t, "onChange"), 0 < t.length && (n = new Cs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, Er = null;
function Nm(e) {
  td(e, 0);
}
function go(e) {
  var t = _n(e);
  if (mc(t)) return e;
}
function jm(e, t) {
  if (e === "change") return t;
}
var Wc = !1;
if (ft) {
  var Jo;
  if (ft) {
    var qo = "oninput" in document;
    if (!qo) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"), qo = typeof lu.oninput == "function";
    }
    Jo = qo;
  } else Jo = !1;
  Wc = Jo && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  hr && (hr.detachEvent("onpropertychange", Qc), Er = hr = null);
}
function Qc(e) {
  if (e.propertyName === "value" && go(Er)) {
    var t = [];
    Vc(t, Er, e, ws(e)), jc(Nm, t);
  }
}
function Cm(e, t, n) {
  e === "focusin" ? (ou(), hr = t, Er = n, hr.attachEvent("onpropertychange", Qc)) : e === "focusout" && ou();
}
function Em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return go(Er);
}
function Pm(e, t) {
  if (e === "click") return go(t);
}
function zm(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function Tm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ze = typeof Object.is == "function" ? Object.is : Tm;
function Pr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Ze(e[l], t[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, t) {
  var n = iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = iu(n);
  }
}
function Gc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yc() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Lm(e) {
  var t = Yc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
    if (r !== null && zs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = su(n, o);
        var i = su(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Rm = ft && "documentMode" in document && 11 >= document.documentMode, xn = null, Di = null, gr = null, $i = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $i || xn == null || xn !== Hl(r) || (r = xn, "selectionStart" in r && zs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gr && Pr(gr, r) || (gr = r, r = Kl(Di, "onSelect"), 0 < r.length && (t = new Cs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xn)));
}
function wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, ei = {}, Kc = {};
ft && (Kc = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function vo(e) {
  if (ei[e]) return ei[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kc) return ei[e] = t[n];
  return e;
}
var Xc = vo("animationend"), Zc = vo("animationiteration"), Jc = vo("animationstart"), qc = vo("transitionend"), ed = /* @__PURE__ */ new Map(), uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $t(e, t) {
  ed.set(e, t), tn(t, [e]);
}
for (var ti = 0; ti < uu.length; ti++) {
  var ni = uu[ti], Mm = ni.toLowerCase(), Im = ni[0].toUpperCase() + ni.slice(1);
  $t(Mm, "on" + Im);
}
$t(Xc, "onAnimationEnd");
$t(Zc, "onAnimationIteration");
$t(Jc, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(qc, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function cu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Mp(r, t, void 0, e), e.currentTarget = null;
}
function td(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== o && l.isPropagationStopped()) break e;
        cu(l, u, m), o = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== o && l.isPropagationStopped()) break e;
        cu(l, u, m), o = c;
      }
    }
  }
  if (Vl) throw e = Ri, Vl = !1, Ri = null, e;
}
function X(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nd(t, e, 2, !1), n.add(r));
}
function ri(e, t, n) {
  var r = 0;
  t && (r |= 4), nd(n, e, r, t);
}
var _l = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[_l]) {
    e[_l] = !0, uc.forEach(function(n) {
      n !== "selectionchange" && (Om.has(n) || ri(n, !1, e), ri(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_l] || (t[_l] = !0, ri("selectionchange", !1, t));
  }
}
function nd(e, t, n, r) {
  switch (Fc(t)) {
    case 1:
      var l = Kp;
      break;
    case 4:
      l = Xp;
      break;
    default:
      l = Ns;
  }
  n = l.bind(null, t, n, e), l = void 0, !Li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var c = i.tag;
        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Wt(u), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  jc(function() {
    var m = o, x = ws(n), w = [];
    e: {
      var y = ed.get(e);
      if (y !== void 0) {
        var N = Cs, C = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = dm;
            break;
          case "focusin":
            C = "focus", N = Zo;
            break;
          case "focusout":
            C = "blur", N = Zo;
            break;
          case "beforeblur":
          case "afterblur":
            N = Zo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = Ja;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = mm;
            break;
          case Xc:
          case Zc:
          case Jc:
            N = nm;
            break;
          case qc:
            N = gm;
            break;
          case "scroll":
            N = Zp;
            break;
          case "wheel":
            N = ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = lm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = eu;
        }
        var E = (t & 4) !== 0, V = !E && e === "scroll", p = E ? y !== null ? y + "Capture" : null : y;
        E = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = Sr(d, p), _ != null && E.push(Tr(d, _, h)))), V) break;
          d = d.return;
        }
        0 < E.length && (y = new N(y, C, null, n, x), w.push({ event: y, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", y && n !== zi && (C = n.relatedTarget || n.fromElement) && (Wt(C) || C[pt])) break e;
        if ((N || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, N ? (C = n.relatedTarget || n.toElement, N = m, C = C ? Wt(C) : null, C !== null && (V = nn(C), C !== V || C.tag !== 5 && C.tag !== 6) && (C = null)) : (N = null, C = m), N !== C)) {
          if (E = Ja, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (E = eu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), V = N == null ? y : _n(N), h = C == null ? y : _n(C), y = new E(_, d + "leave", N, n, x), y.target = V, y.relatedTarget = h, _ = null, Wt(x) === m && (E = new E(p, d + "enter", C, n, x), E.target = h, E.relatedTarget = V, _ = E), V = _, N && C) t: {
            for (E = N, p = C, d = 0, h = E; h; h = hn(h)) d++;
            for (h = 0, _ = p; _; _ = hn(_)) h++;
            for (; 0 < d - h; ) E = hn(E), d--;
            for (; 0 < h - d; ) p = hn(p), h--;
            for (; d--; ) {
              if (E === p || p !== null && E === p.alternate) break t;
              E = hn(E), p = hn(p);
            }
            E = null;
          }
          else E = null;
          N !== null && du(w, y, N, E, !1), C !== null && V !== null && du(w, V, C, E, !0);
        }
      }
      e: {
        if (y = m ? _n(m) : window, N = y.nodeName && y.nodeName.toLowerCase(), N === "select" || N === "input" && y.type === "file") var P = jm;
        else if (ru(y)) if (Wc) P = zm;
        else {
          P = Em;
          var L = Cm;
        }
        else (N = y.nodeName) && N.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (P = Pm);
        if (P && (P = P(e, m))) {
          Vc(w, P, n, x);
          break e;
        }
        L && L(e, y, m), e === "focusout" && (L = y._wrapperState) && L.controlled && y.type === "number" && Ni(y, "number", y.value);
      }
      switch (L = m ? _n(m) : window, e) {
        case "focusin":
          (ru(L) || L.contentEditable === "true") && (xn = L, Di = m, gr = null);
          break;
        case "focusout":
          gr = Di = xn = null;
          break;
        case "mousedown":
          $i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $i = !1, au(w, n, x);
          break;
        case "selectionchange":
          if (Rm) break;
        case "keydown":
        case "keyup":
          au(w, n, x);
      }
      var R;
      if (Ps) e: {
        switch (e) {
          case "compositionstart":
            var M = "onCompositionStart";
            break e;
          case "compositionend":
            M = "onCompositionEnd";
            break e;
          case "compositionupdate":
            M = "onCompositionUpdate";
            break e;
        }
        M = void 0;
      }
      else yn ? Hc(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (bc && n.locale !== "ko" && (yn || M !== "onCompositionStart" ? M === "onCompositionEnd" && yn && (R = Uc()) : (jt = x, js = "value" in jt ? jt.value : jt.textContent, yn = !0)), L = Kl(m, M), 0 < L.length && (M = new qa(M, e, null, n, x), w.push({ event: M, listeners: L }), R ? M.data = R : (R = Bc(n), R !== null && (M.data = R)))), (R = wm ? _m(e, n) : km(e, n)) && (m = Kl(m, "onBeforeInput"), 0 < m.length && (x = new qa("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = R));
    }
    td(w, t);
  });
}
function Tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Sr(e, n), o != null && r.unshift(Tr(e, o, l)), o = Sr(e, t), o != null && r.push(Tr(e, o, l))), e = e.return;
  }
  return r;
}
function hn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, l ? (c = Sr(n, o), c != null && i.unshift(Tr(n, c, u))) : l || (c = Sr(n, o), c != null && i.push(Tr(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Dm = /\r\n?/g, $m = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Dm, `
`).replace($m, "");
}
function kl(e, t, n) {
  if (t = fu(t), fu(e) !== t && n) throw Error(k(425));
}
function Xl() {
}
var Ai = null, Fi = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var bi = typeof setTimeout == "function" ? setTimeout : void 0, Am = typeof clearTimeout == "function" ? clearTimeout : void 0, pu = typeof Promise == "function" ? Promise : void 0, Fm = typeof queueMicrotask == "function" ? queueMicrotask : typeof pu < "u" ? function(e) {
  return pu.resolve(null).then(e).catch(Um);
} : bi;
function Um(e) {
  setTimeout(function() {
    throw e;
  });
}
function oi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Cr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Cr(t);
}
function Tt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bn = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Bn, Lr = "__reactProps$" + Bn, pt = "__reactContainer$" + Bn, Hi = "__reactEvents$" + Bn, bm = "__reactListeners$" + Bn, Hm = "__reactHandles$" + Bn;
function Wt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mu(e); e !== null; ) {
        if (n = e[rt]) return n;
        e = mu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function br(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function yo(e) {
  return e[Lr] || null;
}
var Bi = [], kn = -1;
function At(e) {
  return { current: e };
}
function Z(e) {
  0 > kn || (e.current = Bi[kn], Bi[kn] = null, kn--);
}
function G(e, t) {
  kn++, Bi[kn] = e.current, e.current = t;
}
var Dt = {}, we = At(Dt), Ee = At(!1), Xt = Dt;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function Zl() {
  Z(Ee), Z(we);
}
function hu(e, t, n) {
  if (we.current !== Dt) throw Error(k(168));
  G(we, t), G(Ee, n);
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Cp(e) || "Unknown", l));
  return ne({}, n, r);
}
function Jl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, Xt = we.current, G(we, e), G(Ee, Ee.current), !0;
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = rd(e, t, Xt), r.__reactInternalMemoizedMergedChildContext = e, Z(Ee), Z(we), G(we, e)) : Z(Ee), G(Ee, n);
}
var at = null, xo = !1, ii = !1;
function ld(e) {
  at === null ? at = [e] : at.push(e);
}
function Bm(e) {
  xo = !0, ld(e);
}
function Ft() {
  if (!ii && at !== null) {
    ii = !0;
    var e = 0, t = B;
    try {
      var n = at;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, xo = !1;
    } catch (l) {
      throw at !== null && (at = at.slice(e + 1)), zc(_s, Ft), l;
    } finally {
      B = t, ii = !1;
    }
  }
  return null;
}
var Sn = [], Nn = 0, ql = null, eo = 0, Ae = [], Fe = 0, Zt = null, ut = 1, ct = "";
function Bt(e, t) {
  Sn[Nn++] = eo, Sn[Nn++] = ql, ql = e, eo = t;
}
function od(e, t, n) {
  Ae[Fe++] = ut, Ae[Fe++] = ct, Ae[Fe++] = Zt, Zt = e;
  var r = ut;
  e = ct;
  var l = 32 - Ke(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ke(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ut = 1 << 32 - Ke(t) + l | n << l | r, ct = o + e;
  } else ut = 1 << o | n << l | r, ct = e;
}
function Ts(e) {
  e.return !== null && (Bt(e, 1), od(e, 1, 0));
}
function Ls(e) {
  for (; e === ql; ) ql = Sn[--Nn], Sn[Nn] = null, eo = Sn[--Nn], Sn[Nn] = null;
  for (; e === Zt; ) Zt = Ae[--Fe], Ae[Fe] = null, ct = Ae[--Fe], Ae[Fe] = null, ut = Ae[--Fe], Ae[Fe] = null;
}
var Ie = null, Me = null, J = !1, Ye = null;
function id(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Me = Tt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: ut, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wi(e) {
  if (J) {
    var t = Me;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (Vi(e)) throw Error(k(418));
        t = Tt(n.nextSibling);
        var r = Ie;
        t && vu(e, t) ? id(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, Ie = e);
      }
    } else {
      if (Vi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, J = !1, Ie = e;
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function Sl(e) {
  if (e !== Ie) return !1;
  if (!J) return yu(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Vi(e)) throw sd(), Error(k(418));
    for (; t; ) id(e, t), t = Tt(t.nextSibling);
  }
  if (yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ie ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function sd() {
  for (var e = Me; e; ) e = Tt(e.nextSibling);
}
function Dn() {
  Me = Ie = null, J = !1;
}
function Rs(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Vm = gt.ReactCurrentBatchConfig;
function or(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function ad(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [d], p.flags |= 16) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), d = d.sibling;
    return null;
  }
  function r(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function l(p, d) {
    return p = It(p, d), p.index = 0, p.sibling = null, p;
  }
  function o(p, d, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < d ? (p.flags |= 2, d) : h) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, _) {
    return d === null || d.tag !== 6 ? (d = pi(h, p.mode, _), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var P = h.type;
    return P === vn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _t && xu(P) === d.type) ? (_ = l(d, h.props), _.ref = or(p, d, h), _.return = p, _) : (_ = Ul(h.type, h.key, h.props, null, p.mode, _), _.ref = or(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = mi(h, p.mode, _), d.return = p, d) : (d = l(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, P) {
    return d === null || d.tag !== 7 ? (d = Kt(h, p.mode, _, P), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = pi("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pl:
          return h = Ul(d.type, d.key, d.props, null, p.mode, h), h.ref = or(p, null, d), h.return = p, h;
        case gn:
          return d = mi(d, p.mode, h), d.return = p, d;
        case _t:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (ur(d) || er(d)) return d = Kt(d, p.mode, h, null), d.return = p, d;
      Nl(p, d);
    }
    return null;
  }
  function y(p, d, h, _) {
    var P = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return P !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case pl:
          return h.key === P ? c(p, d, h, _) : null;
        case gn:
          return h.key === P ? m(p, d, h, _) : null;
        case _t:
          return P = h._init, y(
            p,
            d,
            P(h._payload),
            _
          );
      }
      if (ur(h) || er(h)) return P !== null ? null : x(p, d, h, _, null);
      Nl(p, h);
    }
    return null;
  }
  function N(p, d, h, _, P) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case pl:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, P);
        case gn:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, P);
        case _t:
          var L = _._init;
          return N(p, d, h, L(_._payload), P);
      }
      if (ur(_) || er(_)) return p = p.get(h) || null, x(d, p, _, P, null);
      Nl(d, _);
    }
    return null;
  }
  function C(p, d, h, _) {
    for (var P = null, L = null, R = d, M = d = 0, Y = null; R !== null && M < h.length; M++) {
      R.index > M ? (Y = R, R = null) : Y = R.sibling;
      var I = y(p, R, h[M], _);
      if (I === null) {
        R === null && (R = Y);
        break;
      }
      e && R && I.alternate === null && t(p, R), d = o(I, d, M), L === null ? P = I : L.sibling = I, L = I, R = Y;
    }
    if (M === h.length) return n(p, R), J && Bt(p, M), P;
    if (R === null) {
      for (; M < h.length; M++) R = w(p, h[M], _), R !== null && (d = o(R, d, M), L === null ? P = R : L.sibling = R, L = R);
      return J && Bt(p, M), P;
    }
    for (R = r(p, R); M < h.length; M++) Y = N(R, p, M, h[M], _), Y !== null && (e && Y.alternate !== null && R.delete(Y.key === null ? M : Y.key), d = o(Y, d, M), L === null ? P = Y : L.sibling = Y, L = Y);
    return e && R.forEach(function(ce) {
      return t(p, ce);
    }), J && Bt(p, M), P;
  }
  function E(p, d, h, _) {
    var P = er(h);
    if (typeof P != "function") throw Error(k(150));
    if (h = P.call(h), h == null) throw Error(k(151));
    for (var L = P = null, R = d, M = d = 0, Y = null, I = h.next(); R !== null && !I.done; M++, I = h.next()) {
      R.index > M ? (Y = R, R = null) : Y = R.sibling;
      var ce = y(p, R, I.value, _);
      if (ce === null) {
        R === null && (R = Y);
        break;
      }
      e && R && ce.alternate === null && t(p, R), d = o(ce, d, M), L === null ? P = ce : L.sibling = ce, L = ce, R = Y;
    }
    if (I.done) return n(
      p,
      R
    ), J && Bt(p, M), P;
    if (R === null) {
      for (; !I.done; M++, I = h.next()) I = w(p, I.value, _), I !== null && (d = o(I, d, M), L === null ? P = I : L.sibling = I, L = I);
      return J && Bt(p, M), P;
    }
    for (R = r(p, R); !I.done; M++, I = h.next()) I = N(R, p, M, I.value, _), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? M : I.key), d = o(I, d, M), L === null ? P = I : L.sibling = I, L = I);
    return e && R.forEach(function(Ut) {
      return t(p, Ut);
    }), J && Bt(p, M), P;
  }
  function V(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === vn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case pl:
          e: {
            for (var P = h.key, L = d; L !== null; ) {
              if (L.key === P) {
                if (P = h.type, P === vn) {
                  if (L.tag === 7) {
                    n(p, L.sibling), d = l(L, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (L.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _t && xu(P) === L.type) {
                  n(p, L.sibling), d = l(L, h.props), d.ref = or(p, L, h), d.return = p, p = d;
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === vn ? (d = Kt(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Ul(h.type, h.key, h.props, null, p.mode, _), _.ref = or(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case gn:
          e: {
            for (L = h.key; d !== null; ) {
              if (d.key === L) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(p, d.sibling), d = l(d, h.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = mi(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case _t:
          return L = h._init, V(p, d, L(h._payload), _);
      }
      if (ur(h)) return C(p, d, h, _);
      if (er(h)) return E(p, d, h, _);
      Nl(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, h), d.return = p, p = d) : (n(p, d), d = pi(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return V;
}
var $n = ad(!0), ud = ad(!1), to = At(null), no = null, jn = null, Ms = null;
function Is() {
  Ms = jn = no = null;
}
function Os(e) {
  var t = to.current;
  Z(to), e._currentValue = t;
}
function Qi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Rn(e, t) {
  no = e, Ms = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (Ms !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (no === null) throw Error(k(308));
    jn = e, no.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var Qt = null;
function Ds(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function cd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ds(t)) : (n.next = l.next, l.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function $s(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function dd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ds(r)) : (t.next = l.next, l.next = t), r.interleaved = t, mt(e, n);
}
function Il(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ks(e, n);
  }
}
function wu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ro(e, t, n, r) {
  var l = e.updateQueue;
  kt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var c = u, m = c.next;
    c.next = null, i === null ? o = m : i.next = m, i = c;
    var x = e.alternate;
    x !== null && (x = x.updateQueue, u = x.lastBaseUpdate, u !== i && (u === null ? x.firstBaseUpdate = m : u.next = m, x.lastBaseUpdate = c));
  }
  if (o !== null) {
    var w = l.baseState;
    i = 0, x = m = c = null, u = o;
    do {
      var y = u.lane, N = u.eventTime;
      if ((r & y) === y) {
        x !== null && (x = x.next = {
          eventTime: N,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, E = u;
          switch (y = t, N = n, E.tag) {
            case 1:
              if (C = E.payload, typeof C == "function") {
                w = C.call(N, w, y);
                break e;
              }
              w = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = E.payload, y = typeof C == "function" ? C.call(N, w, y) : C, y == null) break e;
              w = ne({}, w, y);
              break e;
            case 2:
              kt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [u] : y.push(u));
      } else N = { eventTime: N, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, x === null ? (m = x = N, c = w) : x = x.next = N, i |= y;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (x === null && (c = w), l.baseState = c, l.firstBaseUpdate = m, l.lastBaseUpdate = x, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    qt |= i, e.lanes = i, e.memoizedState = w;
  }
}
function _u(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var Hr = {}, ot = At(Hr), Rr = At(Hr), Mr = At(Hr);
function Gt(e) {
  if (e === Hr) throw Error(k(174));
  return e;
}
function As(e, t) {
  switch (G(Mr, t), G(Rr, e), G(ot, Hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ci(t, e);
  }
  Z(ot), G(ot, t);
}
function An() {
  Z(ot), Z(Rr), Z(Mr);
}
function fd(e) {
  Gt(Mr.current);
  var t = Gt(ot.current), n = Ci(t, e.type);
  t !== n && (G(Rr, e), G(ot, n));
}
function Fs(e) {
  Rr.current === e && (Z(ot), Z(Rr));
}
var ee = At(0);
function lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var si = [];
function Us() {
  for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
  si.length = 0;
}
var Ol = gt.ReactCurrentDispatcher, ai = gt.ReactCurrentBatchConfig, Jt = 0, te = null, ae = null, de = null, oo = !1, vr = !1, Ir = 0, Wm = 0;
function ve() {
  throw Error(k(321));
}
function bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Hs(e, t, n, r, l, o) {
  if (Jt = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ol.current = e === null || e.memoizedState === null ? Km : Xm, e = n(r, l), vr) {
    o = 0;
    do {
      if (vr = !1, Ir = 0, 25 <= o) throw Error(k(301));
      o += 1, de = ae = null, t.updateQueue = null, Ol.current = Zm, e = n(r, l);
    } while (vr);
  }
  if (Ol.current = io, t = ae !== null && ae.next !== null, Jt = 0, de = ae = te = null, oo = !1, t) throw Error(k(300));
  return e;
}
function Bs() {
  var e = Ir !== 0;
  return Ir = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function Be() {
  if (ae === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, ae = e;
  else {
    if (e === null) throw Error(k(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ae, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, c = null, m = o;
    do {
      var x = m.lane;
      if ((Jt & x) === x) c !== null && (c = c.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
      else {
        var w = {
          lane: x,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null
        };
        c === null ? (u = c = w, i = r) : c = c.next = w, te.lanes |= x, qt |= x;
      }
      m = m.next;
    } while (m !== null && m !== o);
    c === null ? i = r : c.next = u, Ze(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, te.lanes |= o, qt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ci(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ze(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function pd() {
}
function md(e, t) {
  var n = te, r = Be(), l = t(), o = !Ze(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ce = !0), r = r.queue, Vs(vd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, gd.bind(null, n, r, l, t), void 0, null), fe === null) throw Error(k(349));
    Jt & 30 || hd(n, t, l);
  }
  return l;
}
function hd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yd(t) && xd(e);
}
function vd(e, t, n) {
  return n(function() {
    yd(t) && xd(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function xd(e) {
  var t = mt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function ku(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ym.bind(null, te, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function wd() {
  return Be().memoizedState;
}
function Dl(e, t, n, r) {
  var l = nt();
  te.flags |= e, l.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function wo(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ae !== null) {
    var i = ae.memoizedState;
    if (o = i.destroy, r !== null && bs(r, i.deps)) {
      l.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  te.flags |= e, l.memoizedState = Dr(1 | t, n, o, r);
}
function Su(e, t) {
  return Dl(8390656, 8, e, t);
}
function Vs(e, t) {
  return wo(2048, 8, e, t);
}
function _d(e, t) {
  return wo(4, 2, e, t);
}
function kd(e, t) {
  return wo(4, 4, e, t);
}
function Sd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Nd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wo(4, 4, Sd.bind(null, t, e), n);
}
function Ws() {
}
function jd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Cd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ed(e, t, n) {
  return Jt & 21 ? (Ze(n, t) || (n = Rc(), te.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Qm(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ai.transition;
  ai.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, ai.transition = r;
  }
}
function Pd() {
  return Be().memoizedState;
}
function Gm(e, t, n) {
  var r = Mt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zd(e)) Td(t, n);
  else if (n = cd(e, t, n, r), n !== null) {
    var l = ke();
    Xe(n, e, r, l), Ld(n, t, r);
  }
}
function Ym(e, t, n) {
  var r = Mt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zd(e)) Td(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ze(u, i)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ds(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = cd(e, t, l, r), n !== null && (l = ke(), Xe(n, e, r, l), Ld(n, t, r));
  }
}
function zd(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Td(e, t) {
  vr = oo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ks(e, n);
  }
}
var io = { readContext: He, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useInsertionEffect: ve, useLayoutEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useMutableSource: ve, useSyncExternalStore: ve, useId: ve, unstable_isNewReconciler: !1 }, Km = { readContext: He, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: Su, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Dl(
    4194308,
    4,
    Sd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Dl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Dl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gm.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ku, useDebugValue: Ws, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = ku(!1), t = e[0];
  return e = Qm.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, l = nt();
  if (J) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(k(349));
    Jt & 30 || hd(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Su(vd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, gd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = fe.identifierPrefix;
  if (J) {
    var n = ct, r = ut;
    n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Wm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Xm = {
  readContext: He,
  useCallback: jd,
  useContext: He,
  useEffect: Vs,
  useImperativeHandle: Nd,
  useInsertionEffect: _d,
  useLayoutEffect: kd,
  useMemo: Cd,
  useReducer: ui,
  useRef: wd,
  useState: function() {
    return ui(Or);
  },
  useDebugValue: Ws,
  useDeferredValue: function(e) {
    var t = Be();
    return Ed(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = ui(Or)[0], t = Be().memoizedState;
    return [e, t];
  },
  useMutableSource: pd,
  useSyncExternalStore: md,
  useId: Pd,
  unstable_isNewReconciler: !1
}, Zm = { readContext: He, useCallback: jd, useContext: He, useEffect: Vs, useImperativeHandle: Nd, useInsertionEffect: _d, useLayoutEffect: kd, useMemo: Cd, useReducer: ci, useRef: wd, useState: function() {
  return ci(Or);
}, useDebugValue: Ws, useDeferredValue: function(e) {
  var t = Be();
  return ae === null ? t.memoizedState = e : Ed(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = ci(Or)[0], t = Be().memoizedState;
  return [e, t];
}, useMutableSource: pd, useSyncExternalStore: md, useId: Pd, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = { isMounted: function(e) {
  return (e = e._reactInternals) ? nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Mt(e), o = dt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (Xe(t, e, l, r), Il(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = Mt(e), o = dt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (Xe(t, e, l, r), Il(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = Mt(e), l = dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Lt(e, l, r), t !== null && (Xe(t, e, r, n), Il(t, e, r));
} };
function Nu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(l, o) : !0;
}
function Rd(e, t, n) {
  var r = !1, l = Dt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = He(o) : (l = Pe(t) ? Xt : we.current, r = t.contextTypes, o = (r = r != null) ? On(e, l) : Dt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _o, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ju(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Yi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, $s(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = He(o) : (o = Pe(t) ? Xt : we.current, l.context = On(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Gi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _o.enqueueReplaceState(l, l.state, null), ro(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fn(e, t) {
  try {
    var n = "", r = t;
    do
      n += jp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Jm = typeof WeakMap == "function" ? WeakMap : Map;
function Md(e, t, n) {
  n = dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ao || (ao = !0, os = r), Ki(e, t);
  }, n;
}
function Id(e, t, n) {
  n = dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ki(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ki(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Cu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = fh.bind(null, e, t, n), t.then(e, e));
}
function Eu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var qm = gt.ReactCurrentOwner, Ce = !1;
function _e(e, t, n, r) {
  t.child = e === null ? ud(t, null, n, r) : $n(t, e.child, n, r);
}
function zu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Rn(t, l), r = Hs(e, t, n, r, o, l), n = Bs(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (J && n && Ts(t), t.flags |= 1, _e(e, t, r, l), t.child);
}
function Tu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !qs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Od(e, t, o, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(i, r) && e.ref === t.ref) return ht(e, t, l);
  }
  return t.flags |= 1, e = It(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Od(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, ht(e, t, l);
  }
  return Xi(e, t, n, r, l);
}
function Dd(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(En, Re), Re |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(En, Re), Re |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(En, Re), Re |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(En, Re), Re |= r;
  return _e(e, t, l, n), t.child;
}
function $d(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Xi(e, t, n, r, l) {
  var o = Pe(n) ? Xt : we.current;
  return o = On(t, o), Rn(t, l), n = Hs(e, t, n, r, o, l), r = Bs(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (J && r && Ts(t), t.flags |= 1, _e(e, t, n, l), t.child);
}
function Lu(e, t, n, r, l) {
  if (Pe(n)) {
    var o = !0;
    Jl(t);
  } else o = !1;
  if (Rn(t, l), t.stateNode === null) $l(e, t), Rd(t, n, r), Yi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = He(m) : (m = Pe(n) ? Xt : we.current, m = On(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && ju(t, i, r, m), kt = !1;
    var y = t.memoizedState;
    i.state = y, ro(t, r, i, l), c = t.memoizedState, u !== r || y !== c || Ee.current || kt ? (typeof x == "function" && (Gi(t, n, x, r), c = t.memoizedState), (u = kt || Nu(t, n, u, r, y, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, dd(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : Qe(t.type, u), i.props = m, w = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = He(c) : (c = Pe(n) ? Xt : we.current, c = On(t, c));
    var N = n.getDerivedStateFromProps;
    (x = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || y !== c) && ju(t, i, r, c), kt = !1, y = t.memoizedState, i.state = y, ro(t, r, i, l);
    var C = t.memoizedState;
    u !== w || y !== C || Ee.current || kt ? (typeof N == "function" && (Gi(t, n, N, r), C = t.memoizedState), (m = kt || Nu(t, n, m, r, y, C, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, C, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), i.props = r, i.state = C, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zi(e, t, n, r, o, l);
}
function Zi(e, t, n, r, l, o) {
  $d(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && gu(t, n, !1), ht(e, t, o);
  r = t.stateNode, qm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = $n(t, e.child, null, o), t.child = $n(t, null, u, o)) : _e(e, t, u, o), t.memoizedState = r.state, l && gu(t, n, !0), t.child;
}
function Ad(e) {
  var t = e.stateNode;
  t.pendingContext ? hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hu(e, t.context, !1), As(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
  return Dn(), Rs(l), t.flags |= 256, _e(e, t, n, r), t.child;
}
var Ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fd(e, t, n) {
  var r = t.pendingProps, l = ee.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(ee, l & 1), e === null)
    return Wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = No(i, r, 0, null), e = Kt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = qi(n), t.memoizedState = Ji, e) : Qs(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return eh(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = It(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = It(u, o) : (o = Kt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? qi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ji, r;
  }
  return o = e.child, e = o.sibling, r = It(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qs(e, t) {
  return t = No({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jl(e, t, n, r) {
  return r !== null && Rs(r), $n(t, e.child, null, n), e = Qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function eh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = di(Error(k(422))), jl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = No({ mode: "visible", children: r.children }, l, 0, null), o = Kt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $n(t, e.child, null, i), t.child.memoizedState = qi(i), t.memoizedState = Ji, o);
  if (!(t.mode & 1)) return jl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(k(419)), r = di(o, r, void 0), jl(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = fe, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, mt(e, l), Xe(r, e, l, -1));
    }
    return Js(), r = di(Error(k(421))), jl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ph.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Me = Tt(l.nextSibling), Ie = t, J = !0, Ye = null, e !== null && (Ae[Fe++] = ut, Ae[Fe++] = ct, Ae[Fe++] = Zt, ut = e.id, ct = e.overflow, Zt = t), t = Qs(t, r.children), t.flags |= 4096, t);
}
function Mu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qi(e.return, t, n);
}
function fi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (_e(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
      else if (e.tag === 19) Mu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (G(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && lo(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), fi(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && lo(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      fi(t, !0, n, null, o);
      break;
    case "together":
      fi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $l(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function th(e, t, n) {
  switch (t.tag) {
    case 3:
      Ad(t), Dn();
      break;
    case 5:
      fd(t);
      break;
    case 1:
      Pe(t.type) && Jl(t);
      break;
    case 4:
      As(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(to, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Fd(e, t, n) : (G(ee, ee.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      G(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ud(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dd(e, t, n);
  }
  return ht(e, t, n);
}
var bd, es, Hd, Bd;
bd = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
es = function() {
};
Hd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Gt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        l = ki(e, l), r = ki(e, r), o = [];
        break;
      case "select":
        l = ne({}, l, { value: void 0 }), r = ne({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ji(e, l), r = ji(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xl);
    }
    Ei(n, r);
    var i;
    n = null;
    for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
      var u = l[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (_r.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = l != null ? l[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (o || (o = []), o.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (o = o || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (_r.hasOwnProperty(m) ? (c != null && m === "onScroll" && X("scroll", e), o || u === c || (o = [])) : (o = o || []).push(m, c));
    }
    n && (o = o || []).push("style", n);
    var m = o;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Bd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!J) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function nh(e, t, n) {
  var r = t.pendingProps;
  switch (Ls(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Pe(t.type) && Zl(), ye(t), null;
    case 3:
      return r = t.stateNode, An(), Z(Ee), Z(we), Us(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (as(Ye), Ye = null))), es(e, t), ye(t), null;
    case 5:
      Fs(t);
      var l = Gt(Mr.current);
      if (n = t.type, e !== null && t.stateNode != null) Hd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ye(t), null;
        }
        if (e = Gt(ot.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[Lr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < dr.length; l++) X(dr[l], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X(
                "error",
                r
              ), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Ha(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Va(r, o), X("invalid", r);
          }
          Ei(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && kl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && kl(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : _r.hasOwnProperty(i) && u != null && i === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              ml(r), Ba(r, o, !0);
              break;
            case "textarea":
              ml(r), Wa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[Lr] = r, bd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Pi(n, r), n) {
              case "dialog":
                X("cancel", e), X("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) X(dr[l], e);
                l = r;
                break;
              case "source":
                X("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                X(
                  "error",
                  e
                ), X("load", e), l = r;
                break;
              case "details":
                X("toggle", e), l = r;
                break;
              case "input":
                Ha(e, r), l = ki(e, r), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ne({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Va(e, r), l = ji(e, r), X("invalid", e);
                break;
              default:
                l = r;
            }
            Ei(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var c = u[o];
              o === "style" ? wc(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && yc(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && kr(e, c) : typeof c == "number" && kr(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (_r.hasOwnProperty(o) ? c != null && o === "onScroll" && X("scroll", e) : c != null && gs(e, o, c, i));
            }
            switch (n) {
              case "input":
                ml(e), Ba(e, r, !1);
                break;
              case "textarea":
                ml(e), Wa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Pn(e, !!r.multiple, o, !1) : r.defaultValue != null && Pn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) Bd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Gt(Mr.current), Gt(ot.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              kl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && kl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (Z(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && Me !== null && t.mode & 1 && !(t.flags & 128)) sd(), Dn(), t.flags |= 98560, o = !1;
        else if (o = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[rt] = t;
          } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), o = !1;
        } else Ye !== null && (as(Ye), Ye = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ue === 0 && (ue = 3) : Js())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return An(), es(e, t), e === null && zr(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return Os(t.type._context), ye(t), null;
    case 17:
      return Pe(t.type) && Zl(), ye(t), null;
    case 19:
      if (Z(ee), o = t.memoizedState, o === null) return ye(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) ir(o, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = lo(e), i !== null) {
            for (t.flags |= 128, ir(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && oe() > Un && (t.flags |= 128, r = !0, ir(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = lo(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ir(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !J) return ye(t), null;
        } else 2 * oe() - o.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, ir(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = oe(), t.sibling = null, n = ee.current, G(ee, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return Zs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function rh(e, t) {
  switch (Ls(t), t.tag) {
    case 1:
      return Pe(t.type) && Zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), Z(Ee), Z(we), Us(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fs(t), null;
    case 13:
      if (Z(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ee), null;
    case 4:
      return An(), null;
    case 10:
      return Os(t.type._context), null;
    case 22:
    case 23:
      return Zs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cl = !1, xe = !1, lh = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function ts(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Iu = !1;
function oh(e, t) {
  if (Ai = Gl, e = Yc(), zs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, c = -1, m = 0, x = 0, w = e, y = null;
        t: for (; ; ) {
          for (var N; w !== n || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (c = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (N = w.firstChild) !== null; )
            y = w, w = N;
          for (; ; ) {
            if (w === e) break t;
            if (y === n && ++m === l && (u = i), y === o && ++x === r && (c = i), (N = w.nextSibling) !== null) break;
            w = y, y = w.parentNode;
          }
          w = N;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fi = { focusedElem: e, selectionRange: n }, Gl = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
  else for (; T !== null; ) {
    t = T;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var E = C.memoizedProps, V = C.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Qe(t.type, E), V);
            p.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(k(163));
      }
    } catch (_) {
      le(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return C = Iu, Iu = !1, C;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && ts(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ko(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ns(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Vd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Lr], delete t[Hi], delete t[bm], delete t[Hm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xl));
  else if (r !== 4 && (e = e.child, e !== null)) for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), e = e.sibling;
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), e = e.sibling;
}
var pe = null, Ge = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) Qd(e, t, n), n = n.sibling;
}
function Qd(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function") try {
    lt.onCommitFiberUnmount(mo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      xe || Cn(n, t);
    case 6:
      var r = pe, l = Ge;
      pe = null, wt(e, t, n), pe = r, Ge = l, pe !== null && (Ge ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null && (Ge ? (e = pe, n = n.stateNode, e.nodeType === 8 ? oi(e.parentNode, n) : e.nodeType === 1 && oi(e, n), Cr(e)) : oi(pe, n.stateNode));
      break;
    case 4:
      r = pe, l = Ge, pe = n.stateNode.containerInfo, Ge = !0, wt(e, t, n), pe = r, Ge = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && ts(n, t, i), l = l.next;
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (!xe && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, wt(e, t, n), xe = r) : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lh()), t.forEach(function(r) {
      var l = mh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            pe = u.stateNode, Ge = !1;
            break e;
          case 3:
            pe = u.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            pe = u.stateNode.containerInfo, Ge = !0;
            break e;
        }
        u = u.return;
      }
      if (pe === null) throw Error(k(160));
      Qd(o, i, l), pe = null, Ge = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (m) {
      le(l, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gd(t, e), t = t.sibling;
}
function Gd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e), tt(e), r & 4) {
        try {
          yr(3, e, e.return), ko(3, e);
        } catch (E) {
          le(e, e.return, E);
        }
        try {
          yr(5, e, e.return);
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 1:
      We(t, e), tt(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (We(t, e), tt(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          kr(l, "");
        } catch (E) {
          le(e, e.return, E);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && o.type === "radio" && o.name != null && hc(l, o), Pi(u, i);
          var m = Pi(u, o);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? wc(l, w) : x === "dangerouslySetInnerHTML" ? yc(l, w) : x === "children" ? kr(l, w) : gs(l, x, w, m);
          }
          switch (u) {
            case "input":
              Si(l, o);
              break;
            case "textarea":
              gc(l, o);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var N = o.value;
              N != null ? Pn(l, !!o.multiple, N, !1) : y !== !!o.multiple && (o.defaultValue != null ? Pn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Pn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Lr] = o;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 6:
      if (We(t, e), tt(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 3:
      if (We(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Cr(t.containerInfo);
      } catch (E) {
        le(e, e.return, E);
      }
      break;
    case 4:
      We(t, e), tt(e);
      break;
    case 13:
      We(t, e), tt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ks = oe())), r & 4 && Du(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (m = xe) || x, We(t, e), xe = m) : We(t, e), tt(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (T = e, x = e.child; x !== null; ) {
          for (w = T = x; T !== null; ) {
            switch (y = T, N = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                yr(4, y, y.return);
                break;
              case 1:
                Cn(y, y.return);
                var C = y.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (E) {
                    le(r, n, E);
                  }
                }
                break;
              case 5:
                Cn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Au(w);
                  continue;
                }
            }
            N !== null ? (N.return = y, T = N) : Au(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                l = w.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = xc("display", i));
              } catch (E) {
                le(e, e.return, E);
              }
            }
          } else if (w.tag === 6) {
            if (x === null) try {
              w.stateNode.nodeValue = m ? "" : w.memoizedProps;
            } catch (E) {
              le(e, e.return, E);
            }
          } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
            w.child.return = w, w = w.child;
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            x === w && (x = null), w = w.return;
          }
          x === w && (x = null), w.sibling.return = w.return, w = w.sibling;
        }
      }
      break;
    case 19:
      We(t, e), tt(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      We(
        t,
        e
      ), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (kr(l, ""), r.flags &= -33);
          var o = Ou(e);
          ls(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ou(e);
          rs(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (c) {
      le(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ih(e, t, n) {
  T = e, Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cl;
      if (!i) {
        var u = l.alternate, c = u !== null && u.memoizedState !== null || xe;
        u = Cl;
        var m = xe;
        if (Cl = i, (xe = c) && !m) for (T = l; T !== null; ) i = T, c = i.child, i.tag === 22 && i.memoizedState !== null ? Fu(l) : c !== null ? (c.return = i, T = c) : Fu(l);
        for (; o !== null; ) T = o, Yd(o), o = o.sibling;
        T = l, Cl = u, xe = m;
      }
      $u(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : $u(e);
  }
}
function $u(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xe || ko(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !xe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && _u(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              _u(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var m = t.alternate;
              if (m !== null) {
                var x = m.memoizedState;
                if (x !== null) {
                  var w = x.dehydrated;
                  w !== null && Cr(w);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(k(163));
        }
        xe || t.flags & 512 && ns(t);
      } catch (y) {
        le(t, t.return, y);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Au(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Fu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ko(4, t);
          } catch (c) {
            le(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              le(t, l, c);
            }
          }
          var o = t.return;
          try {
            ns(t);
          } catch (c) {
            le(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ns(t);
          } catch (c) {
            le(t, i, c);
          }
      }
    } catch (c) {
      le(t, t.return, c);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var sh = Math.ceil, so = gt.ReactCurrentDispatcher, Gs = gt.ReactCurrentOwner, be = gt.ReactCurrentBatchConfig, H = 0, fe = null, se = null, me = 0, Re = 0, En = At(0), ue = 0, $r = null, qt = 0, So = 0, Ys = 0, xr = null, je = null, Ks = 0, Un = 1 / 0, st = null, ao = !1, os = null, Rt = null, El = !1, Ct = null, uo = 0, wr = 0, is = null, Al = -1, Fl = 0;
function ke() {
  return H & 6 ? oe() : Al !== -1 ? Al : Al = oe();
}
function Mt(e) {
  return e.mode & 1 ? H & 2 && me !== 0 ? me & -me : Vm.transition !== null ? (Fl === 0 && (Fl = Rc()), Fl) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fc(e.type)), e) : 1;
}
function Xe(e, t, n, r) {
  if (50 < wr) throw wr = 0, is = null, Error(k(185));
  Fr(e, n, r), (!(H & 2) || e !== fe) && (e === fe && (!(H & 2) && (So |= n), ue === 4 && Nt(e, me)), ze(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Un = oe() + 500, xo && Ft()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Vp(e, t);
  var r = Ql(e, e === fe ? me : 0);
  if (r === 0) n !== null && Ya(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ya(n), t === 1) e.tag === 0 ? Bm(Uu.bind(null, e)) : ld(Uu.bind(null, e)), Fm(function() {
      !(H & 6) && Ft();
    }), n = null;
    else {
      switch (Mc(r)) {
        case 1:
          n = _s;
          break;
        case 4:
          n = Tc;
          break;
        case 16:
          n = Wl;
          break;
        case 536870912:
          n = Lc;
          break;
        default:
          n = Wl;
      }
      n = nf(n, Kd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Kd(e, t) {
  if (Al = -1, Fl = 0, H & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (Mn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = Zd();
    (fe !== e || me !== t) && (st = null, Un = oe() + 500, Yt(e, t));
    do
      try {
        ch();
        break;
      } catch (u) {
        Xd(e, u);
      }
    while (!0);
    Is(), so.current = o, H = l, se !== null ? t = 0 : (fe = null, me = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (l = Mi(e), l !== 0 && (r = l, t = ss(e, l))), t === 1) throw n = $r, Yt(e, 0), Nt(e, r), ze(e, oe()), n;
    if (t === 6) Nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ah(l) && (t = co(e, r), t === 2 && (o = Mi(e), o !== 0 && (r = o, t = ss(e, o))), t === 1)) throw n = $r, Yt(e, 0), Nt(e, r), ze(e, oe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Vt(e, je, st);
          break;
        case 3:
          if (Nt(e, r), (r & 130023424) === r && (t = Ks + 500 - oe(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = bi(Vt.bind(null, e, je, st), t);
            break;
          }
          Vt(e, je, st);
          break;
        case 4:
          if (Nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ke(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = bi(Vt.bind(null, e, je, st), r);
            break;
          }
          Vt(e, je, st);
          break;
        case 5:
          Vt(e, je, st);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ze(e, oe()), e.callbackNode === n ? Kd.bind(null, e) : null;
}
function ss(e, t) {
  var n = xr;
  return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = co(e, t), e !== 2 && (t = je, je = n, t !== null && as(t)), e;
}
function as(e) {
  je === null ? je = e : je.push.apply(je, e);
}
function ah(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ze(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Nt(e, t) {
  for (t &= ~Ys, t &= ~So, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ke(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Uu(e) {
  if (H & 6) throw Error(k(327));
  Mn();
  var t = Ql(e, 0);
  if (!(t & 1)) return ze(e, oe()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mi(e);
    r !== 0 && (t = r, n = ss(e, r));
  }
  if (n === 1) throw n = $r, Yt(e, 0), Nt(e, t), ze(e, oe()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vt(e, je, st), ze(e, oe()), null;
}
function Xs(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Un = oe() + 500, xo && Ft());
  }
}
function en(e) {
  Ct !== null && Ct.tag === 0 && !(H & 6) && Mn();
  var t = H;
  H |= 1;
  var n = be.transition, r = B;
  try {
    if (be.transition = null, B = 1, e) return e();
  } finally {
    B = r, be.transition = n, H = t, !(H & 6) && Ft();
  }
}
function Zs() {
  Re = En.current, Z(En);
}
function Yt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Am(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (Ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zl();
        break;
      case 3:
        An(), Z(Ee), Z(we), Us();
        break;
      case 5:
        Fs(r);
        break;
      case 4:
        An();
        break;
      case 13:
        Z(ee);
        break;
      case 19:
        Z(ee);
        break;
      case 10:
        Os(r.type._context);
        break;
      case 22:
      case 23:
        Zs();
    }
    n = n.return;
  }
  if (fe = e, se = e = It(e.current, null), me = Re = t, ue = 0, $r = null, Ys = So = qt = 0, je = xr = null, Qt !== null) {
    for (t = 0; t < Qt.length; t++) if (n = Qt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Qt = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = se;
    try {
      if (Is(), Ol.current = io, oo) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        oo = !1;
      }
      if (Jt = 0, de = ae = te = null, vr = !1, Ir = 0, Gs.current = null, n === null || n.return === null) {
        ue = 1, $r = t, se = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, c = t;
        if (t = me, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = x.alternate;
            y ? (x.updateQueue = y.updateQueue, x.memoizedState = y.memoizedState, x.lanes = y.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var N = Eu(i);
          if (N !== null) {
            N.flags &= -257, Pu(N, i, u, o, t), N.mode & 1 && Cu(o, m, t), t = N, c = m;
            var C = t.updateQueue;
            if (C === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(c), t.updateQueue = E;
            } else C.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Cu(o, m, t), Js();
              break e;
            }
            c = Error(k(426));
          }
        } else if (J && u.mode & 1) {
          var V = Eu(i);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), Pu(V, i, u, o, t), Rs(Fn(c, u));
            break e;
          }
        }
        o = c = Fn(c, u), ue !== 4 && (ue = 2), xr === null ? xr = [o] : xr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Md(o, c, t);
              wu(o, p);
              break e;
            case 1:
              u = c;
              var d = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Rt === null || !Rt.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = Id(o, u, t);
                wu(o, _);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qd(n);
    } catch (P) {
      t = P, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zd() {
  var e = so.current;
  return so.current = io, e === null ? io : e;
}
function Js() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), fe === null || !(qt & 268435455) && !(So & 268435455) || Nt(fe, me);
}
function co(e, t) {
  var n = H;
  H |= 2;
  var r = Zd();
  (fe !== e || me !== t) && (st = null, Yt(e, t));
  do
    try {
      uh();
      break;
    } catch (l) {
      Xd(e, l);
    }
  while (!0);
  if (Is(), H = n, so.current = r, se !== null) throw Error(k(261));
  return fe = null, me = 0, ue;
}
function uh() {
  for (; se !== null; ) Jd(se);
}
function ch() {
  for (; se !== null && !Op(); ) Jd(se);
}
function Jd(e) {
  var t = tf(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? qd(e) : se = t, Gs.current = null;
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rh(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, se = null;
        return;
      }
    } else if (n = nh(n, t, Re), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Vt(e, t, n) {
  var r = B, l = be.transition;
  try {
    be.transition = null, B = 1, dh(e, t, n, r);
  } finally {
    be.transition = l, B = r;
  }
  return null;
}
function dh(e, t, n, r) {
  do
    Mn();
  while (Ct !== null);
  if (H & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Wp(e, o), e === fe && (se = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || El || (El = !0, nf(Wl, function() {
    return Mn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = be.transition, be.transition = null;
    var i = B;
    B = 1;
    var u = H;
    H |= 4, Gs.current = null, oh(e, n), Gd(n, e), Lm(Fi), Gl = !!Ai, Fi = Ai = null, e.current = n, ih(n), Dp(), H = u, B = i, be.transition = o;
  } else e.current = n;
  if (El && (El = !1, Ct = e, uo = l), o = e.pendingLanes, o === 0 && (Rt = null), Fp(n.stateNode), ze(e, oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ao) throw ao = !1, e = os, os = null, e;
  return uo & 1 && e.tag !== 0 && Mn(), o = e.pendingLanes, o & 1 ? e === is ? wr++ : (wr = 0, is = e) : wr = 0, Ft(), null;
}
function Mn() {
  if (Ct !== null) {
    var e = Mc(uo), t = be.transition, n = B;
    try {
      if (be.transition = null, B = 16 > e ? 16 : e, Ct === null) var r = !1;
      else {
        if (e = Ct, Ct = null, uo = 0, H & 6) throw Error(k(331));
        var l = H;
        for (H |= 4, T = e.current; T !== null; ) {
          var o = T, i = o.child;
          if (T.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (T = m; T !== null; ) {
                  var x = T;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, x, o);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, T = w;
                  else for (; T !== null; ) {
                    x = T;
                    var y = x.sibling, N = x.return;
                    if (Vd(x), x === m) {
                      T = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = N, T = y;
                      break;
                    }
                    T = N;
                  }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var E = C.child;
                if (E !== null) {
                  C.child = null;
                  do {
                    var V = E.sibling;
                    E.sibling = null, E = V;
                  } while (E !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, T = i;
          else e: for (; T !== null; ) {
            if (o = T, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                yr(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, T = p;
              break e;
            }
            T = o.return;
          }
        }
        var d = e.current;
        for (T = d; T !== null; ) {
          i = T;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, T = h;
          else e: for (i = d; T !== null; ) {
            if (u = T, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ko(9, u);
              }
            } catch (P) {
              le(u, u.return, P);
            }
            if (u === i) {
              T = null;
              break e;
            }
            var _ = u.sibling;
            if (_ !== null) {
              _.return = u.return, T = _;
              break e;
            }
            T = u.return;
          }
        }
        if (H = l, Ft(), lt && typeof lt.onPostCommitFiberRoot == "function") try {
          lt.onPostCommitFiberRoot(mo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      B = n, be.transition = t;
    }
  }
  return !1;
}
function bu(e, t, n) {
  t = Fn(n, t), t = Md(e, t, 1), e = Lt(e, t, 1), t = ke(), e !== null && (Fr(e, 1, t), ze(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) bu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
        e = Fn(n, e), e = Id(t, e, 1), t = Lt(t, e, 1), e = ke(), t !== null && (Fr(t, 1, e), ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ue === 4 || ue === 3 && (me & 130023424) === me && 500 > oe() - Ks ? Yt(e, 0) : Ys |= n), ze(e, t);
}
function ef(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = ke();
  e = mt(e, t), e !== null && (Fr(e, t, n), ze(e, n));
}
function ph(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ef(e, n);
}
function mh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), ef(e, n);
}
var tf;
tf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, th(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, J && t.flags & 1048576 && od(t, eo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $l(e, t), e = t.pendingProps;
      var l = On(t, we.current);
      Rn(t, n), l = Hs(null, t, r, e, l, n);
      var o = Bs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Jl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $s(t), l.updater = _o, t.stateNode = l, l._reactInternals = t, Yi(t, r, e, n), t = Zi(null, t, r, !0, o, n)) : (t.tag = 0, J && o && Ts(t), _e(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($l(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = gh(r), e = Qe(r, e), l) {
          case 0:
            t = Xi(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = zu(null, t, r, e, n);
            break e;
          case 14:
            t = Tu(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(k(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), Xi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), Lu(e, t, r, l, n);
    case 3:
      e: {
        if (Ad(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, dd(e, t), ro(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Fn(Error(k(423)), t), t = Ru(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Fn(Error(k(424)), t), t = Ru(e, t, r, n, l);
          break e;
        } else for (Me = Tt(t.stateNode.containerInfo.firstChild), Ie = t, J = !0, Ye = null, n = ud(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Dn(), r === l) {
            t = ht(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fd(t), e === null && Wi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ui(r, l) ? i = null : o !== null && Ui(r, o) && (t.flags |= 32), $d(e, t), _e(e, t, i, n), t.child;
    case 6:
      return e === null && Wi(t), null;
    case 13:
      return Fd(e, t, n);
    case 4:
      return As(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), zu(e, t, r, l, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, G(to, r._currentValue), r._currentValue = i, o !== null) if (Ze(o.value, i)) {
          if (o.children === l.children && !Ee.current) {
            t = ht(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (o.tag === 1) {
                  c = dt(-1, n & -n), c.tag = 2;
                  var m = o.updateQueue;
                  if (m !== null) {
                    m = m.shared;
                    var x = m.pending;
                    x === null ? c.next = c : (c.next = x.next, x.next = c), m.pending = c;
                  }
                }
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Qi(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(k(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Qi(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        _e(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Rn(t, n), l = He(l), r = r(l), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Qe(r, t.pendingProps), l = Qe(r.type, l), Tu(e, t, r, l, n);
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), $l(e, t), t.tag = 1, Pe(r) ? (e = !0, Jl(t)) : e = !1, Rn(t, n), Rd(t, r, l), Yi(t, r, l, n), Zi(null, t, r, !0, e, n);
    case 19:
      return Ud(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function nf(e, t) {
  return zc(e, t);
}
function hh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new hh(e, t, n, r);
}
function qs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gh(e) {
  if (typeof e == "function") return qs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ys) return 11;
    if (e === xs) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ul(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") qs(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case vn:
      return Kt(n.children, l, o, t);
    case vs:
      i = 8, l |= 8;
      break;
    case yi:
      return e = Ue(12, n, t, l | 2), e.elementType = yi, e.lanes = o, e;
    case xi:
      return e = Ue(13, n, t, l), e.elementType = xi, e.lanes = o, e;
    case wi:
      return e = Ue(19, n, t, l), e.elementType = wi, e.lanes = o, e;
    case fc:
      return No(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cc:
          i = 10;
          break e;
        case dc:
          i = 9;
          break e;
        case ys:
          i = 11;
          break e;
        case xs:
          i = 14;
          break e;
        case _t:
          i = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Ue(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Kt(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function No(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = fc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function pi(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function mi(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function vh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yo(0), this.expirationTimes = Yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ea(e, t, n, r, l, o, i, u, c) {
  return e = new vh(e, t, n, u, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ue(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $s(o), e;
}
function yh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rf(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return rd(e, n, t);
  }
  return t;
}
function lf(e, t, n, r, l, o, i, u, c) {
  return e = ea(n, r, !0, e, l, o, i, u, c), e.context = rf(null), n = e.current, r = ke(), l = Mt(n), o = dt(r, l), o.callback = t ?? null, Lt(n, o, l), e.current.lanes = l, Fr(e, l, r), ze(e, r), e;
}
function jo(e, t, n, r) {
  var l = t.current, o = ke(), i = Mt(l);
  return n = rf(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(l, t, i), e !== null && (Xe(e, l, i, o), Il(e, l, i)), i;
}
function fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ta(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function xh() {
  return null;
}
var of = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function na(e) {
  this._internalRoot = e;
}
Co.prototype.render = na.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  jo(e, t, null, null);
};
Co.prototype.unmount = na.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      jo(null, e, null, null);
    }), t[pt] = null;
  }
};
function Co(e) {
  this._internalRoot = e;
}
Co.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++) ;
    St.splice(n, 0, e), n === 0 && Ac(e);
  }
};
function ra(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Eo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Bu() {
}
function wh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var m = fo(i);
        o.call(m);
      };
    }
    var i = lf(t, r, e, 0, null, !1, !1, "", Bu);
    return e._reactRootContainer = i, e[pt] = i.current, zr(e.nodeType === 8 ? e.parentNode : e), en(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = fo(c);
      u.call(m);
    };
  }
  var c = ea(e, 0, !1, null, null, !1, !1, "", Bu);
  return e._reactRootContainer = c, e[pt] = c.current, zr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    jo(t, c, n, r);
  }), c;
}
function Po(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var c = fo(i);
        u.call(c);
      };
    }
    jo(t, i, e, l);
  } else i = wh(n, t, e, l, r);
  return fo(i);
}
Ic = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 && (ks(t, n | 1), ze(t, oe()), !(H & 6) && (Un = oe() + 500, Ft()));
      }
      break;
    case 13:
      en(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var l = ke();
          Xe(r, e, 1, l);
        }
      }), ta(e, 1);
  }
};
Ss = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = ke();
      Xe(t, e, 134217728, n);
    }
    ta(e, 134217728);
  }
};
Oc = function(e) {
  if (e.tag === 13) {
    var t = Mt(e), n = mt(e, t);
    if (n !== null) {
      var r = ke();
      Xe(n, e, t, r);
    }
    ta(e, t);
  }
};
Dc = function() {
  return B;
};
$c = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
Ti = function(e, t, n) {
  switch (t) {
    case "input":
      if (Si(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yo(r);
            if (!l) throw Error(k(90));
            mc(r), Si(r, l);
          }
        }
      }
      break;
    case "textarea":
      gc(e, n);
      break;
    case "select":
      t = n.value, t != null && Pn(e, !!n.multiple, t, !1);
  }
};
Sc = Xs;
Nc = en;
var _h = { usingClientEntryPoint: !1, Events: [br, _n, yo, _c, kc, Xs] }, sr = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, kh = { bundleType: sr.bundleType, version: sr.version, rendererPackageName: sr.rendererPackageName, rendererConfig: sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ec(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sr.findFiberByHostInstance || xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pl.isDisabled && Pl.supportsFiber) try {
    mo = Pl.inject(kh), lt = Pl;
  } catch {
  }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _h;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ra(t)) throw Error(k(200));
  return yh(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!ra(e)) throw Error(k(299));
  var n = !1, r = "", l = of;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ea(e, 1, !1, null, null, n, !1, r, l), e[pt] = t.current, zr(e.nodeType === 8 ? e.parentNode : e), new na(t);
};
De.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Ec(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return en(e);
};
De.hydrate = function(e, t, n) {
  if (!Eo(t)) throw Error(k(200));
  return Po(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!ra(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = of;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = lf(t, null, e, 1, n ?? null, l, !1, o, i), e[pt] = t.current, zr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Co(t);
};
De.render = function(e, t, n) {
  if (!Eo(t)) throw Error(k(200));
  return Po(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!Eo(e)) throw Error(k(40));
  return e._reactRootContainer ? (en(function() {
    Po(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = Xs;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Eo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Po(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function sf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf);
    } catch (e) {
      console.error(e);
    }
}
sf(), ic.exports = De;
var Sh = ic.exports, af, Vu = Sh;
af = Vu.createRoot, Vu.hydrateRoot;
async function re(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const Wu = `
.notify-studio {
  --ns-radius: 18px;
  --ns-radius-sm: 12px;
  --ns-page-width: 1700px;
  box-sizing: border-box;
  min-height: 100%;
  padding: 20px;
  color: var(--primary-text-color);
  background: var(--primary-background-color);
  font-family: Roboto, "Noto Sans", sans-serif;
}
.notify-studio *, .notify-studio *::before, .notify-studio *::after { box-sizing: border-box; }
.notify-studio__header { display:flex; align-items:center; justify-content:flex-start; gap:16px; margin:0 auto 20px; max-width:var(--ns-page-width); }
.notify-studio__heading { display:flex; align-items:center; gap:12px; min-width:0; }
.notify-studio__logo-image { width:90px; height:90px; flex:0 0 90px; object-fit:contain; box-shadow:none; filter:none; }
.notify-studio h1 { font-size:clamp(1.55rem, 3.4vw, 2.05rem); margin:0; letter-spacing:-0.02em; }
.notify-studio__subtitle { color:var(--secondary-text-color); margin:4px 0 0; font-size:1rem; }
.notify-studio__tabs { display:flex; align-items:center; flex-wrap:wrap; gap:8px; max-width:var(--ns-page-width); margin:0 auto 18px; }
.notify-studio__tab-buttons { display:flex; flex-wrap:wrap; gap:8px; min-width:0; }
.notify-studio button { font:inherit; }
.ns-button { min-height:40px; border:1px solid var(--divider-color); border-radius:12px; padding:0px 20px; color:var(--text-primary-color); background:var(--primary-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; transition:filter .15s ease, transform .15s ease, background .15s ease; white-space:nowrap; }
.ns-button:hover:not(:disabled) { filter:brightness(1.08); transform:translateY(-1px); }
.ns-button:disabled { opacity:.55; cursor:not-allowed; }
.ns-button--quiet { background:transparent; color:var(--primary-text-color); border-color:var(--divider-color); }
.ns-button--tab { background:color-mix(in srgb, var(--card-background-color) 82%, transparent); color:var(--secondary-text-color); border-color:var(--divider-color); }
.ns-button--tab.is-active { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); border-color:var(--divider-color); color:var(--primary-text-color); }
.ns-button--danger { color:var(--error-color); border-color:var(--divider-color); }
.ns-button--compact { min-height:32px; padding:10px 13px 10px 13px; border-radius:9px; font-size:.82rem; }
.ns-button--active { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); border-color:var(--divider-color); color:var(--primary-text-color); }
.ns-button-group { display:flex; gap:6px; flex-wrap:wrap; }
.notify-studio__grid { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:minmax(0, 1.25fr) minmax(320px, .75fr); gap:18px; align-items:start; }
.notify-studio__side { display:grid; gap:18px; min-width:0; }
.ns-card { border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); overflow:hidden; }
.ns-card__head { display:flex; justify-content:space-between; gap:12px; align-items:center; padding:22px 22px 10px; border-bottom:1px solid var(--divider-color); }
.ns-card__title { margin:0; font-size:clamp(1.18rem, 2vw, 1.34rem); font-weight:700; letter-spacing:-0.01em; }
.ns-card__body { padding:18px; }
.ns-card__actions { display:flex; align-items:center; justify-content:flex-end; gap:8px; flex-wrap:wrap; }
.ns-field { display:grid; gap:7px; margin-bottom:14px; }
.ns-field > span { color:var(--secondary-text-color); font-size:1rem; font-weight:700; }
.ns-field input, .ns-field select, .ns-field textarea { width:100%; border:1px solid var(--divider-color); border-radius:10px; color:var(--primary-text-color); background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); padding:10px 12px; font:inherit; outline:none; }
.ns-field textarea { min-height:130px; resize:vertical; line-height:1.45; }
.ns-field input:focus, .ns-field select:focus, .ns-field textarea:focus { border-color:var(--primary-color); box-shadow:0 0 0 2px color-mix(in srgb, var(--primary-color) 20%, transparent); }
.ns-form-grid { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 12px; }
.ns-field--full { grid-column:1 / -1; }
.ns-options { margin-top:14px; padding-top:14px; border-top:1px solid var(--divider-color); }
.ns-options h3 { font-size:1.18rem; font-weight:700; margin:0 0 14px; }
.ns-options--actionable { margin-top:18px; }
.ns-check { display:flex; gap:10px; align-items:center; padding:10px 0; color:var(--primary-text-color); }
.ns-check input { accent-color:var(--primary-color); width:17px; height:17px; }
.ns-help { margin:3px 0 10px; color:var(--secondary-text-color); font-size:.84rem; line-height:1.45; }
.ns-actions { display:flex; flex-wrap:wrap; gap:10px; margin-top:18px; }
.ns-warning { border-left:3px solid var(--warning-color, #ff9800); padding:9px 11px; margin:10px 0; background:color-mix(in srgb, var(--warning-color, #ff9800) 9%, var(--card-background-color)); border-radius:0 9px 9px 0; color:var(--primary-text-color); font-size:.88rem; line-height:1.4; }
.ns-warning code { font:500 .82rem/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
.ns-code { margin:0; max-height:460px; overflow:auto; padding:14px; border-radius:12px; background:var(--code-editor-background-color, #182033); color:var(--code-editor-text-color, #f6f7fb); font:500 .82rem/1.55 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; white-space:pre-wrap; }
.ns-muted { color:var(--secondary-text-color); }
.ns-badge { display:inline-flex; align-items:center; border-radius:999px; padding:4px 8px; font-size:.73rem; text-transform:uppercase; letter-spacing:.05em; font-weight:700; background:var(--secondary-background-color); color:var(--secondary-text-color); }
.ns-badge--android { background:color-mix(in srgb, #3ddc84 18%, var(--card-background-color)); color:color-mix(in srgb, #3ddc84 80%, var(--primary-text-color)); }
.ns-badge--ios { background:color-mix(in srgb, #4c8bf5 18%, var(--card-background-color)); color:color-mix(in srgb, #4c8bf5 80%, var(--primary-text-color)); }
.ns-badge--automation { background:color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--script { background:color-mix(in srgb, #7b61ff 18%, var(--card-background-color)); color:color-mix(in srgb, #7b61ff 80%, var(--primary-text-color)); }
.ns-badge--enabled, .ns-badge--ready { background:color-mix(in srgb, #3ddc84 18%, var(--card-background-color)); color:color-mix(in srgb, #3ddc84 82%, var(--primary-text-color)); }
.ns-badge--disabled { background:color-mix(in srgb, var(--error-color) 14%, var(--card-background-color)); color:var(--error-color); }
.ns-badge--running { background:color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-action-list { display:grid; gap:10px; margin-top:12px; }
.ns-action-card { border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); background:color-mix(in srgb, var(--card-background-color) 90%, var(--primary-background-color)); padding:12px; }
.ns-action-card__head { display:flex; justify-content:flex-start; align-items:center; gap:10px; margin-bottom:10px; }
.ns-action-list__footer { display:flex; justify-content:flex-start; align-items:center; gap:12px; margin-top:10px; }
.ns-action-list__footer .ns-help { margin:0; }
.ns-list { max-width:var(--ns-page-width); margin:0 auto; display:grid; gap:12px; }
.notify-studio__notifications-layout { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:minmax(0, 1.7fr) minmax(340px, .8fr); gap:18px; align-items:start; }
.notify-studio__notifications-main { min-width:0; display:grid; gap:14px; }
.notify-studio__notifications-activity { min-width:0; position:sticky; top:16px; }
.ns-recent-card { min-width:0; }
.ns-source-grid { max-width:none; margin:0; display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:14px; }
.ns-source-grid .ns-card { min-width:0; }
.ns-source-grid--audit { grid-auto-rows:360px; }
.ns-source-grid--audit .ns-audit-card { height:100%; min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; }
.ns-source-grid--audit .ns-card__head { align-items:flex-start; min-width:0; }
.ns-source-grid--audit .ns-card__body { min-height:0; overflow:auto; overflow-wrap:anywhere; }
.ns-source-grid--audit .ns-card__footer { margin-top:auto; }
.ns-row { display:flex; align-items:center; justify-content:flex-start; gap:14px; padding:16px 18px; }
.ns-row__main { min-width:0; display:grid; gap:5px; }
.ns-row__title { font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-source-grid--audit .ns-row__title { display:-webkit-box; overflow:hidden; white-space:normal; overflow-wrap:anywhere; font-size:1.0625rem; line-height:1.3; -webkit-box-orient:vertical; -webkit-line-clamp:2; }
.ns-button--state.is-enabled { background:color-mix(in srgb, #3ddc84 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-button--state.is-disabled { background:color-mix(in srgb, var(--error-color) 14%, var(--card-background-color)); color:var(--error-color); }
.ns-chip-row { display:flex; flex-wrap:wrap; gap:6px; }
.ns-chip { border:1px solid var(--divider-color); border-radius:999px; padding:4px 8px; font:500 .75rem/1 ui-monospace, monospace; color:var(--secondary-text-color); }
.ns-runtime { display:grid; grid-template-columns:minmax(0, 1fr); gap:10px; margin:12px 0; }
.ns-runtime__item { display:grid; gap:3px; padding:10px; border-radius:10px; background:color-mix(in srgb, var(--card-background-color) 88%, var(--primary-background-color)); }
.ns-runtime__label { color:var(--secondary-text-color); font-size:.72rem; text-transform:uppercase; letter-spacing:.06em; }
.ns-runtime__value { font-size:.9rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-card__footer { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:14px 18px; border-top:1px solid var(--divider-color); }
.ns-recent-list { display:grid; gap:8px; }
.ns-recent-item { display:grid; gap:6px; padding:11px 12px; border:1px solid var(--divider-color); border-radius:10px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); }
.ns-recent-item__head { display:flex; align-items:center; justify-content:space-between; gap:8px; min-width:0; }
.ns-recent-item strong { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.92rem; }
.ns-recent-item > span { color:var(--secondary-text-color); font-size:.82rem; }
.ns-log-filter { max-width:260px; }
.ns-log-list { max-width:var(--ns-page-width); margin:0 auto; display:grid; gap:10px; }
.ns-log-entry { display:grid; gap:9px; padding:16px 18px; border-left:3px solid var(--divider-color); }
.ns-log-entry--info { border-left-color:var(--primary-color); }
.ns-log-entry--warning { border-left-color:var(--warning-color, #ff9800); }
.ns-log-entry--error { border-left-color:var(--error-color); }
.ns-log-entry__head { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
.ns-log-entry__head > div { display:flex; align-items:center; flex-wrap:wrap; gap:8px; min-width:0; }
.ns-log-entry__head strong { font-size:.98rem; overflow-wrap:anywhere; }
.ns-log-entry time { color:var(--secondary-text-color); font-size:.8rem; white-space:nowrap; }
.ns-log-entry__entity { width:max-content; max-width:100%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; border:1px solid var(--divider-color); border-radius:8px; padding:5px 7px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); color:var(--secondary-text-color); font:.78rem/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
.ns-log-entry__detail { margin:0; color:var(--secondary-text-color); line-height:1.45; overflow-wrap:anywhere; }
.ns-log-entry__event { color:var(--secondary-text-color); font-size:.75rem; letter-spacing:.04em; text-transform:uppercase; }
.ns-badge--log-info { background:color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--log-warning { background:color-mix(in srgb, var(--warning-color, #ff9800) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--log-error { background:color-mix(in srgb, var(--error-color) 14%, var(--card-background-color)); color:var(--error-color); }
.ns-filter-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0 12px; }
.ns-custom-group-toolbar { max-width:var(--ns-page-width); margin:0 auto 14px; }
.ns-custom-group-toggle-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap:10px; width:100%; }
.ns-custom-group-toggle { width:100%; min-height:86px; display:grid; align-content:center; justify-items:start; gap:4px; padding:14px 16px; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-toggle:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-toggle:disabled { opacity:.58; cursor:not-allowed; }
.ns-custom-group-toggle--category { border-left:4px solid var(--primary-color); }
.ns-custom-group-toggle--area { border-left:4px solid color-mix(in srgb, #7b61ff 80%, var(--primary-color)); }
.ns-custom-group-toggle--create { min-height:64px; border-style:dashed; justify-items:center; text-align:center; }
.ns-custom-group-toggle__title { font-size:1rem; font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:100%; }
.ns-custom-group-toggle__meta { color:var(--secondary-text-color); font-size:.8rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:100%; }
.ns-custom-group-toggle strong { font-size:.83rem; color:var(--primary-text-color); }
.ns-custom-group-manager { max-width:var(--ns-page-width); margin:0 auto 14px; }
.ns-custom-group-manager__create { display:grid; grid-template-columns:minmax(0, 1fr) minmax(180px, .45fr) auto; align-items:end; gap:12px; }
.ns-custom-group-manager__create .ns-field { margin-bottom:0; }
.ns-custom-group-manager__columns { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; margin-top:18px; }
.ns-custom-group-manager__section { min-width:0; }
.ns-custom-group-manager__section h3 { margin:0 0 10px; font-size:1rem; }
.ns-custom-group-manager__list { display:grid; gap:8px; }
.ns-custom-group-manager__item { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:11px 12px; border:1px solid var(--divider-color); border-radius:10px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); }
.ns-custom-group-manager__item > div:first-child { min-width:0; display:grid; gap:4px; }
.ns-custom-group-manager__item strong { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-manager__item span { color:var(--secondary-text-color); font-size:.8rem; }
.ns-studio-group-chips { display:flex; flex-wrap:wrap; gap:6px; margin-top:10px; }
.ns-studio-group-chip { display:inline-flex; align-items:center; max-width:100%; padding:4px 8px; border-radius:999px; font-size:.75rem; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-studio-group-chip--category { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-studio-group-chip--area { background:color-mix(in srgb, #7b61ff 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-modal-backdrop { position:fixed; inset:0; z-index:1000; display:grid; place-items:center; padding:20px; background:color-mix(in srgb, #000 48%, transparent); }
.ns-assignment-dialog { width:min(760px, 100%); max-height:calc(100vh - 40px); display:grid; grid-template-rows:auto minmax(0, 1fr) auto; overflow:hidden; }
.ns-assignment-dialog .ns-card__body { overflow:auto; }
.ns-assignment-dialog__columns { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; }
.ns-assignment-dialog__section { min-width:0; }
.ns-assignment-dialog__section h3 { margin:0 0 10px; font-size:1rem; }
.ns-assignment-dialog__choices { display:grid; gap:8px; }
.ns-assignment-choice { display:flex; align-items:center; gap:9px; min-width:0; padding:10px 11px; border:1px solid var(--divider-color); border-radius:10px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); cursor:pointer; }
.ns-assignment-choice input { width:17px; height:17px; accent-color:var(--primary-color); flex:0 0 auto; }
.ns-assignment-choice span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-audit-group { display:grid; gap:10px; }
.ns-audit-group > h3 { width:100%; margin:8px 0 0; font-size:1.05rem; }
.ns-template-picker { display:grid; grid-template-columns:minmax(0, 1fr); gap:8px; margin-bottom:14px; align-items:end; }
.ns-template-grid { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:14px; }
.ns-template-card { display:grid; min-height:220px; }
.ns-template-card__body { display:grid; gap:12px; align-content:start; }
.ns-template-card__title { margin:0; font-size:1rem; }
.ns-template-card__meta { color:var(--secondary-text-color); font-size:.8rem; }
.ns-template-card__footer { margin-top:auto; display:flex; flex-wrap:wrap; gap:8px; }
.ns-empty { max-width:var(--ns-page-width); margin:0 auto; padding:48px 22px; text-align:center; border:1px dashed var(--divider-color); border-radius:var(--ns-radius); color:var(--secondary-text-color); }
.ns-loading { display:grid; place-items:center; min-height:260px; color:var(--secondary-text-color); }
.ns-sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
@media (max-width: 1180px) { .ns-source-grid { grid-template-columns:repeat(2, minmax(0, 1fr)); } }
@media (max-width: 900px) { .notify-studio { padding:14px; } .notify-studio__grid, .notify-studio__notifications-layout { grid-template-columns:1fr; } .notify-studio__notifications-activity { position:static; } .ns-form-grid, .ns-custom-group-manager__columns, .ns-assignment-dialog__columns { grid-template-columns:1fr; } .ns-custom-group-manager__create { grid-template-columns:1fr; align-items:stretch; } .ns-field--full { grid-column:auto; } }
@media (max-width: 700px) { .ns-source-grid { grid-template-columns:1fr; } }
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } .ns-log-entry__head { align-items:flex-start; flex-direction:column; } .ns-custom-group-manager__item { align-items:flex-start; flex-direction:column; } .ns-assignment-dialog { max-height:calc(100vh - 24px); } }
`, Nh = { rendered: {}, errors: {} }, jh = "/notify_studio_static/notify-studio-logo.png?v=0.1.15";
function uf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function us(e, t) {
  const n = uf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function Qu(e) {
  const t = `Action ${e}`;
  return { id: us(t, e), title: t, route: "event" };
}
function Ch(e, t) {
  return `notify_studio_persistent_${uf(e || t).toLowerCase() || "notification"}`;
}
function hi(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function Gu(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function bl(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function q(e) {
  return typeof e == "string" ? e : "";
}
function Yu(e) {
  return e === !0;
}
function gi(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Eh(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!bl(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Ph(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function zh(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Th({ hass: e }) {
  const t = S.useRef(e);
  t.current = e;
  const [n, r] = S.useState("audit"), [l, o] = S.useState(!!e), [i, u] = S.useState(!0), [c, m] = S.useState(null), [x, w] = S.useState([]), [y, N] = S.useState([]), [C, E] = S.useState([]), [V, p] = S.useState(!0), [d, h] = S.useState([]), [_, P] = S.useState(!1), [L, R] = S.useState(""), [M, Y] = S.useState([]), [I, ce] = S.useState([]), [Ut, vt] = S.useState(!1), [Br, rn] = S.useState(!1), [ln, on] = S.useState(""), [z, $] = S.useState("category"), [D, W] = S.useState(null), [Q, Je] = S.useState(null), [qe, sn] = S.useState([]), [Te, bt] = S.useState(""), [Le, zo] = S.useState(null), [yt, la] = S.useState(!1), [Vr, cf] = S.useState(""), [Wr, df] = S.useState(""), [Qr, ff] = S.useState(""), [Gr, pf] = S.useState(""), [an, mf] = S.useState("none"), [Vn, To] = S.useState(""), [oa, Yr] = S.useState(""), [un, ia] = S.useState("A test notification from Notify Studio."), [it, sa] = S.useState("Notify Studio"), [Wn, Lo] = S.useState(""), [Kr, aa] = S.useState(""), [xt, ua] = S.useState(""), [Xr, ca] = S.useState(""), [Zr, da] = S.useState(""), [Jr, fa] = S.useState(""), [qr, pa] = S.useState(""), [el, ma] = S.useState(""), [tl, ha] = S.useState(""), [nl, ga] = S.useState(""), [Ro, va] = S.useState(!1), [rl, ya] = S.useState(!1), [cn, xa] = S.useState(!1), [et, dn] = S.useState([]), [ll, wa] = S.useState(""), [ol, _a] = S.useState(""), [il, ka] = S.useState(""), [sl, Sa] = S.useState(""), [al, Na] = S.useState(""), [fn, ja] = S.useState(Nh), [Qn, Ca] = S.useState(""), [Ht, pn] = S.useState(null), [Ea, Gn] = S.useState(""), [Pa, Yn] = S.useState(""), [Kn, Xn] = S.useState(null), [hf, gf] = S.useState(""), Mo = S.useRef(0), b = S.useMemo(
    () => x.find((a) => a.id === Vn) ?? null,
    [x, Vn]
  ), za = S.useMemo(
    () => y.filter((a) => a.kind === "script"),
    [y]
  ), Io = S.useMemo(
    () => L ? d.filter((a) => a.level === L) : d,
    [L, d]
  ), ul = S.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    for (const f of I)
      for (const g of f.members) {
        const v = a.get(g.source_key) ?? [];
        v.push(f), a.set(g.source_key, v);
      }
    return a;
  }, [I]), Ta = S.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    for (const f of y) a.set(f.entity_id, f);
    for (const f of Le ?? [])
      f.runtime && a.set(f.runtime.entity_id, f.runtime);
    return a;
  }, [y, Le]), La = S.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    for (const f of I) {
      let g = 0, v = 0, j = 0;
      for (const O of f.members) {
        if (!O.entity_id.startsWith("automation.")) continue;
        g += 1;
        const A = Ta.get(O.entity_id);
        (A == null ? void 0 : A.enabled) === !0 ? v += 1 : (A == null ? void 0 : A.enabled) === !1 && (j += 1);
      }
      a.set(f.id, { automations: g, enabled: v, disabled: j });
    }
    return a;
  }, [I, Ta]), Oo = S.useMemo(() => {
    const a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
    for (const v of Le ?? []) {
      v.category && a.add(v.category);
      for (const j of v.labels ?? []) f.add(j);
      for (const j of v.notify_devices ?? v.notifiers) g.add(j);
    }
    return {
      categories: [...a].sort((v, j) => v.localeCompare(j)),
      labels: [...f].sort((v, j) => v.localeCompare(j)),
      devices: [...g].sort((v, j) => v.localeCompare(j))
    };
  }, [Le]), Do = S.useMemo(() => (Le ?? []).filter((a) => {
    var f;
    if (Vr && a.source !== Vr || Wr && a.category !== Wr || Qr && !(a.labels ?? []).includes(Qr) || Gr && !(a.notify_devices ?? a.notifiers).includes(Gr)) return !1;
    if (Te) {
      const g = `${a.source}:${a.id}`;
      if (!((f = ul.get(g)) != null && f.some((v) => v.id === Te))) return !1;
    }
    return !0;
  }), [Wr, Gr, Qr, Vr, Te, ul, Le]), vf = S.useMemo(() => {
    var g, v;
    const a = /* @__PURE__ */ new Map(), f = (j, O) => {
      const A = a.get(j) ?? [];
      A.push(O), a.set(j, A);
    };
    for (const j of Do)
      if (an === "source") f(j.source === "script" ? "Scripts" : j.source === "automation" ? "Automations" : "Alerts", j);
      else if (an === "category") f(j.category || "Uncategorised", j);
      else if (an === "label") {
        const O = (g = j.labels) != null && g.length ? j.labels : ["No label"];
        for (const A of O) f(A, j);
      } else if (an === "device") {
        const O = (v = j.notify_devices) != null && v.length ? j.notify_devices : j.notifiers.length ? j.notifiers : ["No notify device"];
        for (const A of O) f(A, j);
      } else f("All notification sources", j);
    return [...a.entries()].map(([j, O]) => ({ title: j, items: O })).sort((j, O) => j.title.localeCompare(O.title));
  }, [an, Do]), ie = S.useCallback((a) => {
    gf(a);
  }, []), K = S.useCallback((a, f) => {
    const g = a instanceof Error ? a.message : f;
    ie(g), window.alert(g);
  }, [ie]), Ra = S.useCallback(async () => {
    const a = t.current;
    if (!a) return;
    const [f, g, v, j, O] = await Promise.all([
      re(a, "notify_studio/info"),
      re(a, "notify_studio/list_notifiers"),
      re(a, "notify_studio/list_runnables"),
      re(a, "notify_studio/list_templates"),
      re(a, "notify_studio/list_custom_groups")
    ]);
    m(f), w(g.services), N(v), Y(j), ce(O);
  }, []), yf = S.useCallback(async () => {
    const a = t.current;
    if (a) {
      vt(!0);
      try {
        ce(await re(a, "notify_studio/list_custom_groups"));
      } catch (f) {
        K(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        vt(!1);
      }
    }
  }, [K]), Ma = async () => {
    const a = t.current;
    if (!a) return;
    const f = ln.trim();
    if (!f) {
      K(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }
    W("create");
    try {
      const g = await re(a, "notify_studio/create_custom_group", {
        name: f,
        kind: z
      });
      ce((v) => [...v, g].sort((j, O) => j.kind === O.kind ? j.name.localeCompare(O.name) : j.kind.localeCompare(O.kind))), on(""), ie(`Custom ${g.kind} “${g.name}” created.`);
    } catch (g) {
      K(g, "Unable to create the custom category or area.");
    } finally {
      W(null);
    }
  }, xf = async (a) => {
    var v;
    const f = t.current;
    if (!f) return;
    const g = (v = window.prompt(`Rename custom ${a.kind}:`, a.name)) == null ? void 0 : v.trim();
    if (!(!g || g === a.name))
      try {
        const j = await re(f, "notify_studio/rename_custom_group", {
          group_id: a.id,
          name: g
        });
        ce((O) => O.map((A) => A.id === j.id ? j : A)), ie(`Custom ${j.kind} renamed to “${j.name}”.`);
      } catch (j) {
        K(j, "Unable to rename the custom category or area.");
      }
  }, wf = async (a) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${a.kind} “${a.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await re(f, "notify_studio/delete_custom_group", { group_id: a.id }), ce((g) => g.filter((v) => v.id !== a.id)), Te === a.id && bt(""), ie(`Custom ${a.kind} “${a.name}” deleted.`);
      } catch (g) {
        K(g, "Unable to delete the custom category or area.");
      }
  }, $o = (a) => `${a.source}:${a.id}`, _f = (a) => {
    const f = ul.get($o(a)) ?? [];
    Je(a), sn(f.map((g) => g.id));
  }, kf = (a, f) => {
    sn((g) => f ? [.../* @__PURE__ */ new Set([...g, a])] : g.filter((v) => v !== a));
  }, Sf = async () => {
    var f;
    const a = t.current;
    if (!(!a || !Q)) {
      W("membership");
      try {
        const g = await re(a, "notify_studio/set_custom_group_memberships", {
          source_key: $o(Q),
          source_name: Q.name,
          entity_id: ((f = Q.runtime) == null ? void 0 : f.entity_id) ?? null,
          group_ids: qe
        });
        ce(g), ie(`Custom groups updated for “${Q.name}”.`), Je(null);
      } catch (g) {
        K(g, "Unable to save custom category and area assignments.");
      } finally {
        W(null);
      }
    }
  }, Nf = async (a, f) => {
    const g = t.current;
    if (!g) return;
    const v = La.get(a.id), j = (v == null ? void 0 : v.automations) ?? 0;
    if (!j) {
      K(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const O = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${O} all ${j} automation${j === 1 ? "" : "s"} in “${a.name}”? Scripts and alerts are not changed.`)) {
      W("toggle");
      try {
        const A = await re(
          g,
          "notify_studio/toggle_custom_group",
          { group_id: a.id, enabled: f }
        );
        ie(`${a.name}: ${A.changed_entity_ids.length} automation${A.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await cl();
      } catch (A) {
        K(A, `Unable to ${O} the automations in ${a.name}.`);
      } finally {
        W(null);
      }
    }
  }, Zn = S.useCallback(async () => {
    const a = t.current;
    if (a) {
      p(!0);
      try {
        const f = await re(
          a,
          "notify_studio/list_recent_push_runnables"
        );
        E(f);
      } catch {
        E([]);
      } finally {
        p(!1);
      }
    }
  }, []), Ao = S.useCallback(async () => {
    const a = t.current;
    if (a) {
      P(!0);
      try {
        const f = await re(a, "notify_studio/list_logs");
        h(f);
      } catch (f) {
        K(f, "Unable to load Notify Studio logs.");
      } finally {
        P(!1);
      }
    }
  }, [K]), jf = async () => {
    const a = t.current;
    if (!(!a || !window.confirm("Clear the Notify Studio application logs?"))) {
      P(!0);
      try {
        const f = await re(a, "notify_studio/clear_logs");
        h(f), ie("Notify Studio logs cleared.");
      } catch (f) {
        K(f, "Unable to clear Notify Studio logs.");
      } finally {
        P(!1);
      }
    }
  }, Ia = S.useCallback(async () => {
    try {
      await Ra(), zo(null);
    } catch (a) {
      K(a, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [ie, Ra, K]);
  S.useEffect(() => {
    e && !l && o(!0);
  }, [e, l]), S.useEffect(() => {
    l && Ia();
  }, [l, Ia]), S.useEffect(() => {
    l && Zn();
  }, [l, Zn]), S.useEffect(() => {
    !Vn && x.length && To(x[0].id);
  }, [Vn, x]);
  const cl = S.useCallback(async () => {
    const a = t.current;
    if (!(!a || yt)) {
      la(!0);
      try {
        zo(await re(a, "notify_studio/scan_notify_usage")), ie("Notification audit complete.");
      } catch (f) {
        K(f, "The notification audit failed.");
      } finally {
        la(!1);
      }
    }
  }, [ie, yt, K]);
  S.useEffect(() => {
    n === "audit" && Le === null && cl();
  }, [cl, n, Le]), S.useEffect(() => {
    n === "audit" && Zn();
  }, [Zn, n]), S.useEffect(() => {
    n === "logs" && Ao();
  }, [Ao, n]);
  const dl = S.useCallback(() => {
    const a = {};
    if (Wn.trim() && (a.tag = Wn.trim()), Kr.trim() && (a.image = Kr.trim()), cn && et.length && (a.actions = et.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (b == null ? void 0 : b.platform) === "android")
      xt.trim() && (a.clickAction = xt.trim()), Xr.trim() && (a.subject = Xr.trim()), Zr.trim() && (a.channel = Zr.trim()), Jr && (a.importance = Jr), qr && (a.priority = qr), el.trim() && (a.color = el.trim()), tl.trim() && (a.notification_icon = tl.trim()), nl.trim() && (a.timeout = Number(nl)), Ro && (a.sticky = !0), rl && (a.persistent = !0);
    else if ((b == null ? void 0 : b.platform) === "ios") {
      xt.trim() && (a.url = xt.trim()), ll.trim() && (a.subtitle = ll.trim());
      const f = {};
      ol.trim() && (f.sound = ol.trim()), il.trim() && (f.badge = Number(il)), sl && (f["interruption-level"] = sl), al.trim() && (f["thread-id"] = al.trim()), Object.keys(f).length && (a.push = f);
    } else xt.trim() && (a.url = xt.trim());
    return {
      message: un,
      ...it.trim() ? { title: it } : {},
      ...Object.keys(a).length ? { data: a } : {}
    };
  }, [cn, Kr, il, Zr, el, Jr, sl, un, et, tl, xt, rl, qr, b == null ? void 0 : b.platform, ol, Ro, Xr, ll, Wn, al, nl, it]), Fo = S.useCallback(() => cn ? et.filter((a) => a.route !== "uri").map((a) => {
    var f, g;
    if (a.route === "script") {
      if (!((f = a.scriptEntityId) != null && f.trim()))
        throw new Error(`Choose a script for the “${a.title || "untitled"}” button.`);
      return {
        action: a.id,
        type: "script",
        script_entity_id: a.scriptEntityId.trim()
      };
    }
    if (a.route === "service") {
      if (!((g = a.service) != null && g.trim()))
        throw new Error(`Enter a Home Assistant action for the “${a.title || "untitled"}” button.`);
      return {
        action: a.id,
        type: "service",
        service: a.service.trim(),
        service_data: Eh(a.serviceData ?? "")
      };
    }
    return a.route === "reply" ? { action: a.id, type: "reply" } : { action: a.id, type: "event" };
  }) : [], [cn, et]), Cf = S.useCallback(() => ({
    payload: dl(),
    action_handlers: Fo(),
    ...b ? { target_platform: b.platform } : {}
  }), [Fo, dl, b]), Oa = () => b || (K(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  S.useEffect(() => {
    const a = t.current;
    if (!l || !a) return;
    const f = ++Mo.current;
    let g = !1;
    const v = {
      message: un,
      ...it.trim() ? { title: it } : {}
    }, j = window.setTimeout(() => {
      re(a, "notify_studio/render_preview", { payload: v }).then((O) => {
        !g && f === Mo.current && ja(O);
      }).catch((O) => {
        if (g || f !== Mo.current) return;
        const A = O instanceof Error ? O.message : "Unable to render the current template.";
        ja({ rendered: {}, errors: { message: A } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(j);
    };
  }, [l, un, it]);
  const Ef = async () => {
    const a = Oa();
    if (!(!a || !t.current)) {
      pn("test");
      try {
        const f = await re(t.current, "notify_studio/send_test", {
          target_id: a.id,
          payload: dl()
        });
        ie(`Test notification sent to ${f.target}.`);
      } catch (f) {
        K(f, "The test notification could not be sent.");
      } finally {
        pn(null);
      }
    }
  }, Pf = async () => {
    const a = Oa();
    if (!(!a || !t.current)) {
      pn("yaml");
      try {
        const f = await re(t.current, "notify_studio/generate_yaml", {
          target_id: a.id,
          payload: dl(),
          action_handlers: Fo()
        });
        Ca(f.yaml), ie("YAML generated successfully.");
      } catch (f) {
        K(f, "Unable to generate YAML.");
      } finally {
        pn(null);
      }
    }
  }, zf = async () => {
    var f;
    if (!Qn.trim()) {
      K(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let a = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(Qn), a = !0;
      } catch {
      }
    if (!a) {
      const g = document.createElement("textarea");
      g.value = Qn, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
      try {
        a = document.execCommand("copy");
      } finally {
        document.body.removeChild(g);
      }
    }
    if (a) {
      ie("Generated YAML copied to the clipboard.");
      return;
    }
    K(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, Tf = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Lf = (a) => {
    const f = a.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${f}?`)) return;
    const g = a.id ?? a.entity_id.replace(`${a.kind}.`, "");
    window.location.assign(`/config/${a.kind}/edit/${encodeURIComponent(String(g))}`);
  }, Rf = (a, f) => {
    N((g) => g.map((v) => v.entity_id === a ? { ...v, ...f } : v)), zo((g) => (g == null ? void 0 : g.map((v) => {
      var j;
      return ((j = v.runtime) == null ? void 0 : j.entity_id) === a ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, Mf = async (a, f) => {
    if (t.current)
      try {
        const g = await re(t.current, "notify_studio/toggle_automation", {
          entity_id: a.entity_id,
          enabled: f
        });
        Rf(g.entity_id, {
          state: g.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), ie(`${a.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (g) {
        K(g, "Unable to update that automation.");
      }
  }, If = async (a) => {
    if (!t.current) return;
    const f = a.kind === "automation" ? "automation" : "script", g = a.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", v = `Run “${a.name}” now? This queues its configured ${f} actions and may control real devices.${g}`;
    if (window.confirm(v))
      try {
        const j = await re(t.current, "notify_studio/run_runnable", {
          entity_id: a.entity_id
        });
        ie(`${a.name} was queued for execution${j.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          Zn();
        }, 900);
      } catch (j) {
        K(j, `Unable to run ${a.name}.`);
      }
  }, mn = (a, f) => {
    dn((g) => g.map((v, j) => j === a ? { ...v, ...f } : v));
  }, Of = (a, f) => {
    dn((g) => g.map((v, j) => j !== a ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? us(v.title, a + 1) : v.id
    }));
  }, Df = () => {
    const a = (b == null ? void 0 : b.platform) === "android" ? 3 : 10;
    dn((f) => f.length >= a ? f : [...f, Qu(f.length + 1)]);
  }, $f = (a) => {
    dn((f) => f.filter((g, v) => v !== a));
  }, Uo = S.useCallback((a) => {
    const f = a.payload, g = bl(f.data) ? f.data : {};
    ia(q(f.message)), sa(q(f.title)), Lo(q(g.tag)), aa(q(g.image)), ua(q(g.clickAction) || q(g.url)), ca(q(g.subject)), da(q(g.channel)), fa(q(g.importance)), pa(q(g.priority)), ma(q(g.color)), ha(q(g.notification_icon)), ga(g.timeout === void 0 ? "" : String(g.timeout)), va(Yu(g.sticky)), ya(Yu(g.persistent)), wa(q(g.subtitle));
    const v = bl(g.push) ? g.push : {};
    _a(q(v.sound)), ka(v.badge === void 0 ? "" : String(v.badge)), Sa(q(v["interruption-level"])), Na(q(v["thread-id"]));
    const j = new Map(a.action_handlers.map((Ve) => [Ve.action, Ve])), A = (Array.isArray(g.actions) ? g.actions : []).filter(bl).map((Ve, Jn) => {
      const bo = q(Ve.action) || us(`Action ${Jn + 1}`, Jn + 1), ge = j.get(bo);
      let qn = "event";
      return bo === "URI" && q(Ve.uri) ? qn = "uri" : q(Ve.behavior) === "textInput" ? qn = "reply" : (ge == null ? void 0 : ge.type) === "script" ? qn = "script" : (ge == null ? void 0 : ge.type) === "service" && (qn = "service"), {
        id: bo,
        title: q(Ve.title) || `Action ${Jn + 1}`,
        route: qn,
        uri: q(Ve.uri),
        scriptEntityId: q(ge == null ? void 0 : ge.script_entity_id),
        service: q(ge == null ? void 0 : ge.service),
        serviceData: ge != null && ge.service_data ? JSON.stringify(ge.service_data, null, 2) : ""
      };
    });
    if (dn(A), xa(A.length > 0), Ca(""), a.target_platform && (b == null ? void 0 : b.platform) !== a.target_platform) {
      const Ve = x.find((Jn) => Jn.platform === a.target_platform);
      Ve && To(Ve.id);
    }
  }, [b == null ? void 0 : b.platform, x]), Af = (a) => {
    if (Yr(a), !a) return;
    const f = M.find((g) => g.id === a);
    f && (Uo(f.draft), ie(`Template “${f.name}” loaded into the composer.`));
  }, Ff = () => {
    Xn(null), Gn(it.trim() || "New notification template"), Yn(""), r("templates");
  }, Uf = (a) => {
    Xn(a.id), Gn(a.name), Yn(a.description), Uo(a.draft), r("templates"), ie(`Editing template “${a.name}”.`);
  }, bf = async () => {
    if (t.current) {
      pn("template");
      try {
        const a = await re(t.current, "notify_studio/save_template", {
          template: {
            ...Kn ? { id: Kn } : {},
            name: Ea,
            description: Pa,
            draft: Cf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === a.id) === -1 ? [a, ...f] : f.map((v) => v.id === a.id ? a : v)), Yr(a.id), Xn(a.id), ie(`Template “${a.name}” saved.`);
      } catch (a) {
        K(a, "Unable to save the template.");
      } finally {
        pn(null);
      }
    }
  }, Hf = async (a) => {
    if (t.current && window.confirm(`Delete the “${a.name}” template? This cannot be undone.`))
      try {
        await re(t.current, "notify_studio/delete_template", { template_id: a.id }), Y((f) => f.filter((g) => g.id !== a.id)), oa === a.id && Yr(""), Kn === a.id && (Xn(null), Gn(""), Yn("")), ie(`Template “${a.name}” deleted.`);
      } catch (f) {
        K(f, "Unable to delete the template.");
      }
  }, Bf = () => b ? b.platform === "android" ? /* @__PURE__ */ s.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ s.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ s.jsx(F, { label: "Subject", children: /* @__PURE__ */ s.jsx("input", { value: Xr, onChange: (a) => ca(a.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Channel", children: /* @__PURE__ */ s.jsx("input", { value: Zr, onChange: (a) => da(a.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Importance", children: /* @__PURE__ */ s.jsxs("select", { value: Jr, onChange: (a) => fa(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ s.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ s.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ s.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Priority", children: /* @__PURE__ */ s.jsxs("select", { value: qr, onChange: (a) => pa(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ s.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ s.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ s.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Colour", children: /* @__PURE__ */ s.jsx("input", { value: el, onChange: (a) => ma(a.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Status-bar icon", children: /* @__PURE__ */ s.jsx("input", { value: tl, onChange: (a) => ha(a.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Timeout (seconds)", children: /* @__PURE__ */ s.jsx("input", { inputMode: "numeric", value: nl, onChange: (a) => ga(a.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: Ro, onChange: (a) => va(a.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: rl, onChange: (a) => {
        const f = a.target.checked;
        ya(f), f && !Wn.trim() && Lo(Ch(it, un));
      } }),
      " Persistent notification"
    ] }),
    rl && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : b.platform === "ios" ? /* @__PURE__ */ s.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ s.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ s.jsx(F, { label: "Subtitle", children: /* @__PURE__ */ s.jsx("input", { value: ll, onChange: (a) => wa(a.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Sound", children: /* @__PURE__ */ s.jsx("input", { value: ol, onChange: (a) => _a(a.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Badge", children: /* @__PURE__ */ s.jsx("input", { inputMode: "numeric", value: il, onChange: (a) => ka(a.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Interruption level", children: /* @__PURE__ */ s.jsxs("select", { value: sl, onChange: (a) => Sa(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ s.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ s.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ s.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ s.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ s.jsx(F, { label: "Thread ID", children: /* @__PURE__ */ s.jsx("input", { value: al, onChange: (a) => Na(a.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ s.jsx("section", { className: "ns-options", children: /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, Vf = () => {
    if (!b || !["android", "ios"].includes(b.platform)) return null;
    const a = b.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ s.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: cn, onChange: (f) => {
          const g = f.target.checked;
          xa(g), g && !et.length && dn([Qu(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      cn && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ s.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-action-list", children: et.map((f, g) => /* @__PURE__ */ s.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ s.jsxs("strong", { children: [
              "Button ",
              g + 1
            ] }),
            et.length > 1 && /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => $f(g), children: "Remove" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx(F, { label: "Button label", children: /* @__PURE__ */ s.jsx("input", { value: f.title, onChange: (v) => mn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Button action", children: /* @__PURE__ */ s.jsxs("select", { value: f.route, onChange: (v) => Of(g, v.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ s.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ s.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ s.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ s.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ s.jsx(F, { label: "Action ID", children: /* @__PURE__ */ s.jsx("input", { value: f.id, onChange: (v) => mn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ s.jsx(F, { label: "URI", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: f.uri ?? "", onChange: (v) => mn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ s.jsx(F, { label: "Script", children: /* @__PURE__ */ s.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => mn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Choose a script…" }),
              za.map((v) => /* @__PURE__ */ s.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx(F, { label: "Home Assistant action", children: /* @__PURE__ */ s.jsx("input", { value: f.service ?? "", onChange: (v) => mn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ s.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => mn(g, { serviceData: v.target.value }), placeholder: `{
  "entity_id": "light.hall"
}` }) })
            ] })
          ] }),
          f.route === "event" && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence." }),
          f.route === "reply" && /* @__PURE__ */ s.jsxs("p", { className: "ns-help", children: [
            "The generated handler receives the submitted text as ",
            /* @__PURE__ */ s.jsx("code", { children: "trigger.event.data.reply_text" }),
            "."
          ] }),
          f.route === "uri" && /* @__PURE__ */ s.jsxs("p", { className: "ns-help", children: [
            "Android requires the Companion action key ",
            /* @__PURE__ */ s.jsx("code", { children: "URI" }),
            ". URI buttons do not generate an event handler."
          ] }),
          f.route === "script" && !za.length && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${f.id}:${g}`)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ s.jsxs("span", { className: "ns-help", children: [
            et.length,
            " of ",
            a,
            " available ",
            a === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          et.length < a && /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Df, children: "Add button" })
        ] })
      ] })
    ] });
  }, Wf = (a) => a ? /* @__PURE__ */ s.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ s.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ s.jsx("span", { className: "ns-runtime__value", children: gi(a.last_triggered) })
  ] }) }) : /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), Qf = (a) => {
    var O;
    const f = $o(a), g = (O = a.notify_devices) != null && O.length ? a.notify_devices : a.notifiers, v = a.runtime, j = ul.get(f) ?? [];
    return /* @__PURE__ */ s.jsxs("article", { className: "ns-card ns-audit-card", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ s.jsx("div", { className: "ns-row__title", children: a.name }) }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__actions", children: /* @__PURE__ */ s.jsx("span", { className: `ns-badge ns-badge--${a.source === "script" ? "script" : "automation"}`, children: a.source }) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
        Wf(v),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-chip-row", children: [
          a.category && /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            a.category
          ] }),
          (a.labels ?? []).map((A) => /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            A
          ] }, `label:${A}`)),
          g.map((A) => /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            A
          ] }, `device:${A}`))
        ] }),
        j.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: j.map((A) => /* @__PURE__ */ s.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${A.kind}`, children: [
          A.kind === "category" ? "Category" : "Area",
          ": ",
          A.name
        ] }, A.id)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__footer", children: [
        /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => I.length ? _f(a) : rn(!0), children: I.length ? "Assign groups" : "Create groups" }),
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Mf(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void If(v), children: "Run test" }),
        v && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Lf(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, Gf = () => I.length ? /* @__PURE__ */ s.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ s.jsx("div", { className: "ns-custom-group-toggle-grid", children: I.map((a) => {
    const f = La.get(a.id) ?? { automations: 0, enabled: 0 }, v = !(f.automations > 0 && f.enabled === f.automations), j = v ? "Enable all" : "Disable all", O = a.members.length;
    return /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: `ns-custom-group-toggle ns-custom-group-toggle--${a.kind}`,
        onClick: () => void Nf(a, v),
        disabled: D === "toggle" || f.automations === 0,
        title: f.automations === 0 ? "Add notification sources with automation entities to use the bulk toggle." : `${j} automations in ${a.name}`,
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "ns-custom-group-toggle__title", children: a.name }),
          /* @__PURE__ */ s.jsxs("span", { className: "ns-custom-group-toggle__meta", children: [
            a.kind === "category" ? "Custom category" : "Custom area",
            " · ",
            O,
            " source",
            O === 1 ? "" : "s"
          ] }),
          /* @__PURE__ */ s.jsx("strong", { children: f.automations === 0 ? "No automations" : `${j} · ${f.enabled}/${f.automations} enabled` })
        ]
      },
      a.id
    );
  }) }) }) : /* @__PURE__ */ s.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ s.jsxs("button", { type: "button", className: "ns-custom-group-toggle ns-custom-group-toggle--create", onClick: () => rn(!0), children: [
    /* @__PURE__ */ s.jsx("span", { className: "ns-custom-group-toggle__title", children: "Create custom categories and areas" }),
    /* @__PURE__ */ s.jsx("span", { className: "ns-custom-group-toggle__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
  ] }) }), Yf = () => {
    if (!Br) return null;
    const a = I.filter((v) => v.kind === "category"), f = I.filter((v) => v.kind === "area"), g = (v, j) => /* @__PURE__ */ s.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ s.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !j.length && /* @__PURE__ */ s.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "ns-custom-group-manager__list", children: j.map((O) => /* @__PURE__ */ s.jsxs("article", { className: "ns-custom-group-manager__item", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: O.name }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            O.members.length,
            " assigned notification source",
            O.members.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void xf(O), children: "Rename" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void wf(O), children: "Delete" })
        ] })
      ] }, O.id)) })
    ] });
    return /* @__PURE__ */ s.jsxs("section", { className: "ns-card ns-custom-group-manager", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Custom categories and areas" }),
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels." })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void yf(), disabled: Ut, children: "Refresh" }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => rn(!1), children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ s.jsx(F, { label: "Create", children: /* @__PURE__ */ s.jsx("input", { value: ln, onChange: (v) => on(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Ma();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ s.jsx(F, { label: "Type", children: /* @__PURE__ */ s.jsxs("select", { value: z, onChange: (v) => $(v.target.value), children: [
            /* @__PURE__ */ s.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ s.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ma(), disabled: D === "create", children: D === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          g("category", a),
          g("area", f)
        ] })
      ] })
    ] });
  }, Kf = () => {
    if (!Q) return null;
    const a = I.filter((v) => v.kind === "category"), f = I.filter((v) => v.kind === "area"), g = (v, j) => /* @__PURE__ */ s.jsxs("section", { className: "ns-assignment-dialog__section", children: [
      /* @__PURE__ */ s.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !j.length && /* @__PURE__ */ s.jsxs("p", { className: "ns-muted", children: [
        "Create a custom ",
        v,
        " first, then return here to assign it."
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "ns-assignment-dialog__choices", children: j.map((O) => /* @__PURE__ */ s.jsxs("label", { className: "ns-assignment-choice", children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: qe.includes(O.id), onChange: (A) => kf(O.id, A.target.checked) }),
        /* @__PURE__ */ s.jsx("span", { children: O.name })
      ] }, O.id)) })
    ] });
    return /* @__PURE__ */ s.jsx("div", { className: "ns-modal-backdrop", role: "presentation", onMouseDown: () => Je(null), children: /* @__PURE__ */ s.jsxs("section", { className: "ns-card ns-assignment-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "ns-assignment-title", onMouseDown: (v) => v.stopPropagation(), children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", id: "ns-assignment-title", children: "Assign custom groups" }),
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: Q.name })
        ] }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Je(null), children: "Close" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Choose the Notify Studio categories and areas for this notification source. This is stored only in Notify Studio and does not modify Home Assistant’s own organisation." }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-assignment-dialog__columns", children: [
          g("category", a),
          g("area", f)
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__footer", children: [
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => Je(null), disabled: D === "membership", children: "Cancel" }),
        /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Sf(), disabled: D === "membership", children: D === "membership" ? "Saving…" : "Save groups" })
      ] })
    ] }) });
  };
  return i ? /* @__PURE__ */ s.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ s.jsx("style", { children: Wu }),
    /* @__PURE__ */ s.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ s.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ s.jsx("style", { children: Wu }),
    /* @__PURE__ */ s.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: hf }),
    /* @__PURE__ */ s.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ s.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ s.jsx("img", { className: "notify-studio__logo-image", src: jh, alt: "Notify Studio" }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h1", { children: "Notify Studio" }),
        /* @__PURE__ */ s.jsxs("p", { className: "notify-studio__subtitle", children: [
          "Build, test, template, and audit rich Companion notifications",
          c ? ` · v${c.version}` : ""
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("nav", { className: "notify-studio__tabs", "aria-label": "Notify Studio sections", children: /* @__PURE__ */ s.jsxs("div", { className: "notify-studio__tab-buttons", children: [
      /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ${n === "audit" ? "is-active" : ""}`, onClick: () => r("audit"), children: "Notifications" }),
      /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ${n === "compose" ? "is-active" : ""}`, onClick: () => r("compose"), children: "Compose" }),
      /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ${n === "templates" ? "is-active" : ""}`, onClick: () => r("templates"), children: "Templates" }),
      /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ${n === "logs" ? "is-active" : ""}`, onClick: () => r("logs"), children: "Logs" })
    ] }) }),
    n === "compose" && /* @__PURE__ */ s.jsxs("section", { className: "notify-studio__grid", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
          /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Notification composer" }),
          b && /* @__PURE__ */ s.jsx("span", { className: Gu(b.platform), children: hi(b.platform) })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ s.jsx(F, { label: "Template", children: /* @__PURE__ */ s.jsxs("select", { value: oa, onChange: (a) => Af(a.target.value), children: [
            /* @__PURE__ */ s.jsx("option", { value: "", children: "Choose a saved template…" }),
            M.map((a) => /* @__PURE__ */ s.jsx("option", { value: a.id, children: a.name }, a.id))
          ] }) }) }),
          /* @__PURE__ */ s.jsx(F, { label: "Send to", children: /* @__PURE__ */ s.jsx("select", { value: Vn, onChange: (a) => To(a.target.value), children: x.map((a) => /* @__PURE__ */ s.jsxs("option", { value: a.id, children: [
            a.name,
            " · ",
            hi(a.platform),
            a.model ? ` · ${a.model}` : ""
          ] }, a.id)) }) }),
          b == null ? void 0 : b.warnings.map((a) => /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: a }, a)),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx(F, { label: "Title", children: /* @__PURE__ */ s.jsx("input", { value: it, onChange: (a) => sa(a.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Tag", children: /* @__PURE__ */ s.jsx("input", { value: Wn, onChange: (a) => Lo(a.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Open URL", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: xt, onChange: (a) => ua(a.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: Kr, onChange: (a) => aa(a.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Message", full: !0, children: /* @__PURE__ */ s.jsx("textarea", { value: un, onChange: (a) => ia(a.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          Bf(),
          Vf(),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Ef(), disabled: Ht !== null, children: Ht === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: Ff, disabled: Ht !== null, children: "Save Template" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Pf(), disabled: Ht !== null, children: Ht === "yaml" ? "Generating…" : "Generate YAML" })
          ] })
        ] }) : /* @__PURE__ */ s.jsxs("div", { className: "ns-warning", children: [
          "No ",
          /* @__PURE__ */ s.jsx("code", { children: "notify.mobile_app_*" }),
          " services were found. Connect or re-register a Home Assistant Companion App device, then reload this page."
        ] }) })
      ] }),
      /* @__PURE__ */ s.jsx("aside", { className: "notify-studio__side", children: /* @__PURE__ */ s.jsxs("section", { className: "ns-card", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Preview and YAML" }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "The title and message preview updates automatically as you type. A test send validates the full selected-platform payload on the backend." }),
          /* @__PURE__ */ s.jsx(F, { label: "Rendered title", children: /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: fn.errors.title ? `Error: ${fn.errors.title}` : fn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ s.jsx(F, { label: "Rendered message", children: /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: fn.errors.message ? `Error: ${fn.errors.message}` : fn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ s.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
              Qn && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void zf(), children: "Copy" }),
              /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Tf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: Qn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ s.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: Kn ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx(F, { label: "Template name", children: /* @__PURE__ */ s.jsx("input", { value: Ea, onChange: (a) => Gn(a.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ s.jsx(F, { label: "Description", children: /* @__PURE__ */ s.jsx("input", { value: Pa, onChange: (a) => Yn(a.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button", onClick: () => void bf(), disabled: Ht !== null, children: Ht === "template" ? "Saving…" : Kn ? "Update template" : "Save Template" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              Xn(null), Gn(""), Yn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !M.length && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ s.jsx("div", { className: "ns-template-grid", children: M.map((a) => {
        var f, g;
        return /* @__PURE__ */ s.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "ns-template-card__title", children: a.name }),
            /* @__PURE__ */ s.jsx("p", { className: "ns-template-card__meta", children: a.description || "No description" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-chip-row", children: [
            a.draft.target_platform && /* @__PURE__ */ s.jsx("span", { className: Gu(a.draft.target_platform), children: hi(a.draft.target_platform) }),
            /* @__PURE__ */ s.jsx("span", { className: "ns-chip", children: Array.isArray((f = a.draft.payload.data) == null ? void 0 : f.actions) ? `${(g = a.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              Yr(a.id), Uo(a.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Uf(a), children: "Edit" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Hf(a), children: "Delete" })
          ] })
        ] }) }, a.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ s.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ s.jsxs("section", { className: "ns-card", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }),
            /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio, including run-test requests and backend errors. This in-memory list clears when Home Assistant restarts." })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Ao(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void jf(), disabled: _, children: "Clear logs" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ s.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ s.jsx(F, { label: "Level", children: /* @__PURE__ */ s.jsxs("select", { value: L, onChange: (a) => R(a.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "", children: "All levels" }),
          /* @__PURE__ */ s.jsx("option", { value: "error", children: "Errors" }),
          /* @__PURE__ */ s.jsx("option", { value: "warning", children: "Warnings" }),
          /* @__PURE__ */ s.jsx("option", { value: "info", children: "Information" })
        ] }) }) }) })
      ] }),
      _ && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
      !_ && !Io.length && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
      !_ && Io.length > 0 && /* @__PURE__ */ s.jsx("section", { className: "ns-log-list", children: Io.map((a, f) => /* @__PURE__ */ s.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${a.level}`, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-log-entry__head", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("span", { className: Ph(a.level), children: zh(a.level) }),
            /* @__PURE__ */ s.jsx("strong", { children: a.message })
          ] }),
          /* @__PURE__ */ s.jsx("time", { dateTime: a.timestamp, children: gi(a.timestamp) })
        ] }),
        a.entity_id && /* @__PURE__ */ s.jsx("code", { className: "ns-log-entry__entity", children: a.entity_id }),
        a.detail && /* @__PURE__ */ s.jsx("p", { className: "ns-log-entry__detail", children: a.detail }),
        /* @__PURE__ */ s.jsx("span", { className: "ns-log-entry__event", children: a.event.replaceAll("_", " ") })
      ] }, `${a.timestamp}:${a.event}:${f}`)) })
    ] }),
    n === "audit" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      Gf(),
      Yf(),
      /* @__PURE__ */ s.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ s.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => rn(!0), children: "Manage groups" }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void cl(), disabled: yt, children: yt ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ s.jsx(F, { label: "Type", children: /* @__PURE__ */ s.jsxs("select", { value: Vr, onChange: (a) => cf(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ s.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ s.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Home Assistant category", children: /* @__PURE__ */ s.jsxs("select", { value: Wr, onChange: (a) => df(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "", children: "All categories" }),
                Oo.categories.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
              ] }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Home Assistant label", children: /* @__PURE__ */ s.jsxs("select", { value: Qr, onChange: (a) => ff(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "", children: "All labels" }),
                Oo.labels.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
              ] }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Notify device", children: /* @__PURE__ */ s.jsxs("select", { value: Gr, onChange: (a) => pf(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "", children: "All notify devices" }),
                Oo.devices.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
              ] }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Notify Studio group", children: /* @__PURE__ */ s.jsxs("select", { value: Te, onChange: (a) => bt(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "", children: "All custom groups" }),
                I.map((a) => /* @__PURE__ */ s.jsxs("option", { value: a.id, children: [
                  a.kind === "category" ? "Category" : "Area",
                  ": ",
                  a.name
                ] }, a.id))
              ] }) }),
              /* @__PURE__ */ s.jsx(F, { label: "Group by", children: /* @__PURE__ */ s.jsxs("select", { value: an, onChange: (a) => mf(a.target.value), children: [
                /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" }),
                /* @__PURE__ */ s.jsx("option", { value: "source", children: "Automation / Script" }),
                /* @__PURE__ */ s.jsx("option", { value: "category", children: "Home Assistant category" }),
                /* @__PURE__ */ s.jsx("option", { value: "label", children: "Home Assistant label" }),
                /* @__PURE__ */ s.jsx("option", { value: "device", children: "Notify device" })
              ] }) })
            ] }) })
          ] }),
          yt && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !yt && (Le == null ? void 0 : Le.length) === 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !yt && Le && Do.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !yt && Le && vf.map((a) => /* @__PURE__ */ s.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ s.jsx("h3", { children: a.title }),
            /* @__PURE__ */ s.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: a.items.map(Qf) })
          ] }, a.title))
        ] }),
        /* @__PURE__ */ s.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ s.jsxs("section", { className: "ns-card ns-recent-card", children: [
          /* @__PURE__ */ s.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
            /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
          ] }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
            V && /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
            !V && !C.length && /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
            !V && C.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-recent-list", children: C.map((a) => /* @__PURE__ */ s.jsxs("article", { className: "ns-recent-item", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "ns-recent-item__head", children: [
                /* @__PURE__ */ s.jsx("strong", { children: a.name }),
                /* @__PURE__ */ s.jsx("span", { className: `ns-badge ns-badge--${a.kind}`, children: a.kind })
              ] }),
              /* @__PURE__ */ s.jsxs("span", { children: [
                "Triggered ",
                gi(a.last_triggered)
              ] })
            ] }, a.entity_id)) })
          ] })
        ] }) })
      ] }),
      Kf()
    ] })
  ] });
}
function F({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ s.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ s.jsx("span", { children: e }),
    t
  ] });
}
class Lh extends HTMLElement {
  constructor() {
    super(...arguments);
    Ho(this, "root");
    Ho(this, "currentHass");
  }
  set hass(n) {
    this.currentHass = n, this.renderPanel();
  }
  connectedCallback() {
    this.renderPanel();
  }
  disconnectedCallback() {
    var n;
    (n = this.root) == null || n.unmount(), this.root = void 0;
  }
  renderPanel() {
    this.root || (this.root = af(this)), this.root.render(/* @__PURE__ */ s.jsx(Th, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Lh);
