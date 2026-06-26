var Kf = Object.defineProperty;
var Xf = (e, t, n) => t in e ? Kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Bo = (e, t, n) => Xf(e, typeof t != "symbol" ? t + "" : t, n);
var Xu = { exports: {} }, mo = {}, Zu = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Zf = Symbol.for("react.portal"), Jf = Symbol.for("react.fragment"), qf = Symbol.for("react.strict_mode"), ep = Symbol.for("react.profiler"), tp = Symbol.for("react.provider"), np = Symbol.for("react.context"), rp = Symbol.for("react.forward_ref"), lp = Symbol.for("react.suspense"), op = Symbol.for("react.memo"), ip = Symbol.for("react.lazy"), Oa = Symbol.iterator;
function sp(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ju = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qu = Object.assign, ec = {};
function Bn(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || Ju;
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tc() {
}
tc.prototype = Bn.prototype;
function ds(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || Ju;
}
var fs = ds.prototype = new tc();
fs.constructor = ds;
qu(fs, Bn.prototype);
fs.isPureReactComponent = !0;
var Da = Array.isArray, nc = Object.prototype.hasOwnProperty, ps = { current: null }, rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ar, type: e, key: o, ref: i, props: l, _owner: ps.current };
}
function ap(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ms(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function up(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Fa = /\/+/g;
function Vo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? up("" + e.key) : t.toString(36);
}
function Tl(e, t, n, r, l) {
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
        case Zf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Vo(i, 0) : r, Da(l) ? (n = "", e != null && (n = e.replace(Fa, "$&/") + "/"), Tl(l, t, n, "", function(m) {
    return m;
  })) : l != null && (ms(l) && (l = ap(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Fa, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Da(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var c = r + Vo(o, u);
    i += Tl(o, t, n, c, l);
  }
  else if (c = sp(e), typeof c == "function") for (e = c.call(e), u = 0; !(o = e.next()).done; ) o = o.value, c = r + Vo(o, u++), i += Tl(o, t, n, c, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function pl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function cp(e) {
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
var Ce = { current: null }, Ll = { transition: null }, dp = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Ll, ReactCurrentOwner: ps };
function oc() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: pl, forEach: function(e, t, n) {
  pl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ms(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Bn;
F.Fragment = Jf;
F.Profiler = ep;
F.PureComponent = ds;
F.StrictMode = qf;
F.Suspense = lp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
F.act = oc;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ps.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) nc.call(t, c) && !rc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
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
F.createContext = function(e) {
  return e = { $$typeof: np, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: tp, _context: e }, e.Consumer = e;
};
F.createElement = lc;
F.createFactory = function(e) {
  var t = lc.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: rp, render: e };
};
F.isValidElement = ms;
F.lazy = function(e) {
  return { $$typeof: ip, _payload: { _status: -1, _result: e }, _init: cp };
};
F.memo = function(e, t) {
  return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Ll.transition;
  Ll.transition = {};
  try {
    e();
  } finally {
    Ll.transition = t;
  }
};
F.unstable_act = oc;
F.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
F.useContext = function(e) {
  return Ce.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
F.useId = function() {
  return Ce.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return Ce.current.useRef(e);
};
F.useState = function(e) {
  return Ce.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return Ce.current.useTransition();
};
F.version = "18.3.1";
Zu.exports = F;
var S = Zu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = S, pp = Symbol.for("react.element"), mp = Symbol.for("react.fragment"), hp = Object.prototype.hasOwnProperty, gp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) hp.call(t, r) && !vp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: pp, type: e, key: o, ref: i, props: l, _owner: gp.current };
}
mo.Fragment = mp;
mo.jsx = ic;
mo.jsxs = ic;
Xu.exports = mo;
var a = Xu.exports, sc = { exports: {} }, Fe = {}, ac = { exports: {} }, uc = {};
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
  function t(P, $) {
    var I = P.length;
    P.push($);
    e: for (; 0 < I; ) {
      var W = I - 1 >>> 1, ae = P[W];
      if (0 < l(ae, $)) P[W] = $, P[I] = ae, I = W;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var $ = P[0], I = P.pop();
    if (I !== $) {
      P[0] = I;
      e: for (var W = 0, ae = P.length, _t = ae >>> 1; W < _t; ) {
        var Ue = 2 * (W + 1) - 1, kt = P[Ue], Ie = Ue + 1, Qt = P[Ie];
        if (0 > l(kt, I)) Ie < ae && 0 > l(Qt, kt) ? (P[W] = Qt, P[Ie] = I, W = Ie) : (P[W] = kt, P[Ue] = I, W = Ue);
        else if (Ie < ae && 0 > l(Qt, I)) P[W] = Qt, P[Ie] = I, W = Ie;
        else break e;
      }
    }
    return $;
  }
  function l(P, $) {
    var I = P.sortIndex - $.sortIndex;
    return I !== 0 ? I : P.id - $.id;
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
  var c = [], m = [], x = 1, w = null, g = 3, N = !1, j = !1, C = !1, V = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var $ = n(m); $ !== null; ) {
      if ($.callback === null) r(m);
      else if ($.startTime <= P) r(m), $.sortIndex = $.expirationTime, t(c, $);
      else break;
      $ = n(m);
    }
  }
  function _(P) {
    if (C = !1, h(P), !j) if (n(c) !== null) j = !0, un(E);
    else {
      var $ = n(m);
      $ !== null && cn(_, $.startTime - P);
    }
  }
  function E(P, $) {
    j = !1, C && (C = !1, p(R), R = -1), N = !0;
    var I = g;
    try {
      for (h($), w = n(c); w !== null && (!(w.expirationTime > $) || P && !pe()); ) {
        var W = w.callback;
        if (typeof W == "function") {
          w.callback = null, g = w.priorityLevel;
          var ae = W(w.expirationTime <= $);
          $ = e.unstable_now(), typeof ae == "function" ? w.callback = ae : w === n(c) && r(c), h($);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var _t = !0;
      else {
        var Ue = n(m);
        Ue !== null && cn(_, Ue.startTime - $), _t = !1;
      }
      return _t;
    } finally {
      w = null, g = I, N = !1;
    }
  }
  var T = !1, L = null, R = -1, Y = 5, b = -1;
  function pe() {
    return !(e.unstable_now() - b < Y);
  }
  function Wt() {
    if (L !== null) {
      var P = e.unstable_now();
      b = P;
      var $ = !0;
      try {
        $ = L(!0, P);
      } finally {
        $ ? wt() : (T = !1, L = null);
      }
    } else T = !1;
  }
  var wt;
  if (typeof d == "function") wt = function() {
    d(Wt);
  };
  else if (typeof MessageChannel < "u") {
    var Wr = new MessageChannel(), Qn = Wr.port2;
    Wr.port1.onmessage = Wt, wt = function() {
      Qn.postMessage(null);
    };
  } else wt = function() {
    V(Wt, 0);
  };
  function un(P) {
    L = P, T || (T = !0, wt());
  }
  function cn(P, $) {
    R = V(function() {
      P(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    j || N || (j = !0, un(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(P) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = g;
    }
    var I = g;
    g = $;
    try {
      return P();
    } finally {
      g = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, $) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var I = g;
    g = P;
    try {
      return $();
    } finally {
      g = I;
    }
  }, e.unstable_scheduleCallback = function(P, $, I) {
    var W = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? W + I : W) : I = W, P) {
      case 1:
        var ae = -1;
        break;
      case 2:
        ae = 250;
        break;
      case 5:
        ae = 1073741823;
        break;
      case 4:
        ae = 1e4;
        break;
      default:
        ae = 5e3;
    }
    return ae = I + ae, P = { id: x++, callback: $, priorityLevel: P, startTime: I, expirationTime: ae, sortIndex: -1 }, I > W ? (P.sortIndex = I, t(m, P), n(c) === null && P === n(m) && (C ? (p(R), R = -1) : C = !0, cn(_, I - W))) : (P.sortIndex = ae, t(c, P), j || N || (j = !0, un(E))), P;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(P) {
    var $ = g;
    return function() {
      var I = g;
      g = $;
      try {
        return P.apply(this, arguments);
      } finally {
        g = I;
      }
    };
  };
})(uc);
ac.exports = uc;
var yp = ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp = S, De = yp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cc = /* @__PURE__ */ new Set(), Sr = {};
function sn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Sr[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = Object.prototype.hasOwnProperty, wp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Aa = {}, Ua = {};
function _p(e) {
  return yi.call(Ua, e) ? !0 : yi.call(Aa, e) ? !1 : wp.test(e) ? Ua[e] = !0 : (Aa[e] = !0, !1);
}
function kp(e, t, n, r) {
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
function Sp(e, t, n, r) {
  if (t === null || typeof t > "u" || kp(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hs = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hs,
    gs
  );
  ye[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hs, gs);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hs, gs);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vs(e, t, n, r) {
  var l = ye.hasOwnProperty(t) ? ye[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? _p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ml = Symbol.for("react.element"), yn = Symbol.for("react.portal"), xn = Symbol.for("react.fragment"), ys = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), dc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), xs = Symbol.for("react.forward_ref"), wi = Symbol.for("react.suspense"), _i = Symbol.for("react.suspense_list"), ws = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), pc = Symbol.for("react.offscreen"), Ha = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object" ? null : (e = Ha && e[Ha] || e["@@iterator"], typeof e == "function" ? e : null);
}
var le = Object.assign, Wo;
function cr(e) {
  if (Wo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Wo = t && t[1] || "";
  }
  return `
` + Wo + e;
}
var Qo = !1;
function Go(e, t) {
  if (!e || Qo) return "";
  Qo = !0;
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
    Qo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Go(e.type, !1), e;
    case 11:
      return e = Go(e.type.render, !1), e;
    case 1:
      return e = Go(e.type, !0), e;
    default:
      return "";
  }
}
function ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case yn:
      return "Portal";
    case xi:
      return "Profiler";
    case ys:
      return "StrictMode";
    case wi:
      return "Suspense";
    case _i:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fc:
      return (e.displayName || "Context") + ".Consumer";
    case dc:
      return (e._context.displayName || "Context") + ".Provider";
    case xs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ws:
      return t = e.displayName || null, t !== null ? t : ki(e.type) || "Memo";
    case Ct:
      t = e._payload, e = e._init;
      try {
        return ki(e(t));
      } catch {
      }
  }
  return null;
}
function jp(e) {
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
      return ki(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
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
function At(e) {
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
function mc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cp(e) {
  var t = mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function hl(e) {
  e._valueTracker || (e._valueTracker = Cp(e));
}
function hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Bl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ba(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = At(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gc(e, t) {
  t = t.checked, t != null && vs(e, "checked", t, !1);
}
function Ni(e, t) {
  gc(e, t);
  var n = At(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ji(e, t.type, n) : t.hasOwnProperty("defaultValue") && ji(e, t.type, At(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Va(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ji(e, t, n) {
  (t !== "number" || Bl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var dr = Array.isArray;
function Tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Wa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (dr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: At(n) };
}
function vc(e, t) {
  var n = At(t.value), r = At(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? yc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gl, xc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (gl = gl || document.createElement("div"), gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
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
}, Ep = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
  Ep.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), mr[t] = mr[e];
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px";
}
function _c(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = wc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Pp = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pi(e, t) {
  if (t) {
    if (Pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function zi(e, t) {
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
var Ti = null;
function _s(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Li = null, Ln = null, Rn = null;
function Ga(e) {
  if (e = Br(e)) {
    if (typeof Li != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = xo(t), Li(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Ln ? Rn ? Rn.push(e) : Rn = [e] : Ln = e;
}
function Sc() {
  if (Ln) {
    var e = Ln, t = Rn;
    if (Rn = Ln = null, Ga(e), t) for (e = 0; e < t.length; e++) Ga(t[e]);
  }
}
function Nc(e, t) {
  return e(t);
}
function jc() {
}
var Yo = !1;
function Cc(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return Nc(e, t, n);
  } finally {
    Yo = !1, (Ln !== null || Rn !== null) && (jc(), Sc());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xo(n);
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
var Ri = !1;
if (ht) try {
  var rr = {};
  Object.defineProperty(rr, "passive", { get: function() {
    Ri = !0;
  } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
} catch {
  Ri = !1;
}
function zp(e, t, n, r, l, o, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var hr = !1, Vl = null, Wl = !1, Mi = null, Tp = { onError: function(e) {
  hr = !0, Vl = e;
} };
function Lp(e, t, n, r, l, o, i, u, c) {
  hr = !1, Vl = null, zp.apply(Tp, arguments);
}
function Rp(e, t, n, r, l, o, i, u, c) {
  if (Lp.apply(this, arguments), hr) {
    if (hr) {
      var m = Vl;
      hr = !1, Vl = null;
    } else throw Error(k(198));
    Wl || (Wl = !0, Mi = m);
  }
}
function an(e) {
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
function Ec(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ya(e) {
  if (an(e) !== e) throw Error(k(188));
}
function Mp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null) throw Error(k(188));
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
        if (o === n) return Ya(l), e;
        if (o === r) return Ya(l), t;
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
function Pc(e) {
  return e = Mp(e), e !== null ? zc(e) : null;
}
function zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tc = De.unstable_scheduleCallback, Ka = De.unstable_cancelCallback, Ip = De.unstable_shouldYield, bp = De.unstable_requestPaint, ue = De.unstable_now, $p = De.unstable_getCurrentPriorityLevel, ks = De.unstable_ImmediatePriority, Lc = De.unstable_UserBlockingPriority, Ql = De.unstable_NormalPriority, Op = De.unstable_LowPriority, Rc = De.unstable_IdlePriority, ho = null, st = null;
function Dp(e) {
  if (st && typeof st.onCommitFiberRoot == "function") try {
    st.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Je = Math.clz32 ? Math.clz32 : Up, Fp = Math.log, Ap = Math.LN2;
function Up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Fp(e) / Ap | 0) | 0;
}
var vl = 64, yl = 4194304;
function fr(e) {
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
function Gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = fr(u) : (o &= i, o !== 0 && (r = fr(o)));
  } else i = n & ~l, i !== 0 ? r = fr(i) : o !== 0 && (r = fr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Hp(e, t) {
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
function Bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Je(o), u = 1 << i, c = l[i];
    c === -1 ? (!(u & n) || u & r) && (l[i] = Hp(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ii(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = vl;
  return vl <<= 1, !(vl & 4194240) && (vl = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ur(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function Vp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Je(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ss(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bc, Ns, $c, Oc, Dc, bi = !1, xl = [], Rt = null, Mt = null, It = null, Cr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Pt = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function lr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Br(t), t !== null && Ns(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Qp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Rt = lr(Rt, e, t, n, r, l), !0;
    case "dragenter":
      return Mt = lr(Mt, e, t, n, r, l), !0;
    case "mouseover":
      return It = lr(It, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Cr.set(o, lr(Cr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Er.set(o, lr(Er.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Fc(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ec(n), t !== null) {
          e.blockedOn = t, Dc(e.priority, function() {
            $c(n);
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
function Rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ti = r, n.target.dispatchEvent(r), Ti = null;
    } else return t = Br(n), t !== null && Ns(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Za(e, t, n) {
  Rl(e) && n.delete(t);
}
function Gp() {
  bi = !1, Rt !== null && Rl(Rt) && (Rt = null), Mt !== null && Rl(Mt) && (Mt = null), It !== null && Rl(It) && (It = null), Cr.forEach(Za), Er.forEach(Za);
}
function or(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bi || (bi = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, Gp)));
}
function Pr(e) {
  function t(l) {
    return or(l, e);
  }
  if (0 < xl.length) {
    or(xl[0], e);
    for (var n = 1; n < xl.length; n++) {
      var r = xl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Rt !== null && or(Rt, e), Mt !== null && or(Mt, e), It !== null && or(It, e), Cr.forEach(t), Er.forEach(t), n = 0; n < Pt.length; n++) r = Pt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && (n = Pt[0], n.blockedOn === null); ) Fc(n), n.blockedOn === null && Pt.shift();
}
var Mn = xt.ReactCurrentBatchConfig, Yl = !0;
function Yp(e, t, n, r) {
  var l = B, o = Mn.transition;
  Mn.transition = null;
  try {
    B = 1, js(e, t, n, r);
  } finally {
    B = l, Mn.transition = o;
  }
}
function Kp(e, t, n, r) {
  var l = B, o = Mn.transition;
  Mn.transition = null;
  try {
    B = 4, js(e, t, n, r);
  } finally {
    B = l, Mn.transition = o;
  }
}
function js(e, t, n, r) {
  if (Yl) {
    var l = $i(e, t, n, r);
    if (l === null) oi(e, t, r, Kl, n), Xa(e, r);
    else if (Qp(l, e, t, n, r)) r.stopPropagation();
    else if (Xa(e, r), t & 4 && -1 < Wp.indexOf(e)) {
      for (; l !== null; ) {
        var o = Br(l);
        if (o !== null && bc(o), o = $i(e, t, n, r), o === null && oi(e, t, r, Kl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var Kl = null;
function $i(e, t, n, r) {
  if (Kl = null, e = _s(r), e = Xt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ec(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Kl = e, null;
}
function Ac(e) {
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
        case ks:
          return 1;
        case Lc:
          return 4;
        case Ql:
        case Op:
          return 16;
        case Rc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null, Cs = null, Ml = null;
function Uc() {
  if (Ml) return Ml;
  var e, t = Cs, n = t.length, r, l = "value" in Tt ? Tt.value : Tt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ml = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Il(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wl() {
  return !0;
}
function Ja() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? wl : Ja, this.isPropagationStopped = Ja, this;
  }
  return le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wl);
  }, persist: function() {
  }, isPersistent: wl }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Es = Ae(Vn), Hr = le({}, Vn, { view: 0, detail: 0 }), Xp = Ae(Hr), Xo, Zo, ir, go = le({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ps, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Xo = e.screenX - ir.screenX, Zo = e.screenY - ir.screenY) : Zo = Xo = 0, ir = e), Xo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zo;
} }), qa = Ae(go), Zp = le({}, go, { dataTransfer: 0 }), Jp = Ae(Zp), qp = le({}, Hr, { relatedTarget: 0 }), Jo = Ae(qp), em = le({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = Ae(em), nm = le({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rm = Ae(nm), lm = le({}, Vn, { data: 0 }), eu = Ae(lm), om = {
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
}, im = {
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
}, sm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function am(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function Ps() {
  return am;
}
var um = le({}, Hr, { key: function(e) {
  if (e.key) {
    var t = om[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? im[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ps, charCode: function(e) {
  return e.type === "keypress" ? Il(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), cm = Ae(um), dm = le({}, go, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = Ae(dm), fm = le({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ps }), pm = Ae(fm), mm = le({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hm = Ae(mm), gm = le({}, go, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), vm = Ae(gm), ym = [9, 13, 27, 32], zs = ht && "CompositionEvent" in window, gr = null;
ht && "documentMode" in document && (gr = document.documentMode);
var xm = ht && "TextEvent" in window && !gr, Hc = ht && (!zs || gr && 8 < gr && 11 >= gr), nu = " ", ru = !1;
function Bc(e, t) {
  switch (e) {
    case "keyup":
      return ym.indexOf(t.keyCode) !== -1;
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
function Vc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function wm(e, t) {
  switch (e) {
    case "compositionend":
      return Vc(t);
    case "keypress":
      return t.which !== 32 ? null : (ru = !0, nu);
    case "textInput":
      return e = t.data, e === nu && ru ? null : e;
    default:
      return null;
  }
}
function _m(e, t) {
  if (wn) return e === "compositionend" || !zs && Bc(e, t) ? (e = Uc(), Ml = Cs = Tt = null, wn = !1, e) : null;
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
      return Hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!km[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  kc(r), t = Xl(t, "onChange"), 0 < t.length && (n = new Es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var vr = null, zr = null;
function Sm(e) {
  nd(e, 0);
}
function vo(e) {
  var t = Sn(e);
  if (hc(t)) return e;
}
function Nm(e, t) {
  if (e === "change") return t;
}
var Qc = !1;
if (ht) {
  var qo;
  if (ht) {
    var ei = "oninput" in document;
    if (!ei) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"), ei = typeof ou.oninput == "function";
    }
    qo = ei;
  } else qo = !1;
  Qc = qo && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  vr && (vr.detachEvent("onpropertychange", Gc), zr = vr = null);
}
function Gc(e) {
  if (e.propertyName === "value" && vo(zr)) {
    var t = [];
    Wc(t, zr, e, _s(e)), Cc(Sm, t);
  }
}
function jm(e, t, n) {
  e === "focusin" ? (iu(), vr = t, zr = n, vr.attachEvent("onpropertychange", Gc)) : e === "focusout" && iu();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vo(zr);
}
function Em(e, t) {
  if (e === "click") return vo(t);
}
function Pm(e, t) {
  if (e === "input" || e === "change") return vo(t);
}
function zm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : zm;
function Tr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yi.call(t, l) || !et(e[l], t[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
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
    n = su(n);
  }
}
function Yc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Kc() {
  for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bl(e.document);
  }
  return t;
}
function Ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Tm(e) {
  var t = Kc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ts(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = au(n, o);
        var i = au(
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
var Lm = ht && "documentMode" in document && 11 >= document.documentMode, _n = null, Oi = null, yr = null, Di = !1;
function uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di || _n == null || _n !== Bl(r) || (r = _n, "selectionStart" in r && Ts(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), yr && Tr(yr, r) || (yr = r, r = Xl(Oi, "onSelect"), 0 < r.length && (t = new Es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _n)));
}
function _l(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var kn = { animationend: _l("Animation", "AnimationEnd"), animationiteration: _l("Animation", "AnimationIteration"), animationstart: _l("Animation", "AnimationStart"), transitionend: _l("Transition", "TransitionEnd") }, ti = {}, Xc = {};
ht && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
function yo(e) {
  if (ti[e]) return ti[e];
  if (!kn[e]) return e;
  var t = kn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xc) return ti[e] = t[n];
  return e;
}
var Zc = yo("animationend"), Jc = yo("animationiteration"), qc = yo("animationstart"), ed = yo("transitionend"), td = /* @__PURE__ */ new Map(), cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  td.set(e, t), sn(t, [e]);
}
for (var ni = 0; ni < cu.length; ni++) {
  var ri = cu[ni], Rm = ri.toLowerCase(), Mm = ri[0].toUpperCase() + ri.slice(1);
  Ht(Rm, "on" + Mm);
}
Ht(Zc, "onAnimationEnd");
Ht(Jc, "onAnimationIteration");
Ht(qc, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(ed, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Rp(r, t, void 0, e), e.currentTarget = null;
}
function nd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== o && l.isPropagationStopped()) break e;
        du(l, u, m), o = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== o && l.isPropagationStopped()) break e;
        du(l, u, m), o = c;
      }
    }
  }
  if (Wl) throw e = Mi, Wl = !1, Mi = null, e;
}
function X(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function li(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[kl]) {
    e[kl] = !0, cc.forEach(function(n) {
      n !== "selectionchange" && (Im.has(n) || li(n, !1, e), li(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || (t[kl] = !0, li("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Ac(t)) {
    case 1:
      var l = Yp;
      break;
    case 4:
      l = Kp;
      break;
    default:
      l = js;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
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
        if (i = Xt(u), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Cc(function() {
    var m = o, x = _s(n), w = [];
    e: {
      var g = td.get(e);
      if (g !== void 0) {
        var N = Es, j = e;
        switch (e) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = cm;
            break;
          case "focusin":
            j = "focus", N = Jo;
            break;
          case "focusout":
            j = "blur", N = Jo;
            break;
          case "beforeblur":
          case "afterblur":
            N = Jo;
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
            N = qa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = Jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = pm;
            break;
          case Zc:
          case Jc:
          case qc:
            N = tm;
            break;
          case ed:
            N = hm;
            break;
          case "scroll":
            N = Xp;
            break;
          case "wheel":
            N = vm;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = rm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = tu;
        }
        var C = (t & 4) !== 0, V = !C && e === "scroll", p = C ? g !== null ? g + "Capture" : null : g;
        C = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = jr(d, p), _ != null && C.push(Rr(d, _, h)))), V) break;
          d = d.return;
        }
        0 < C.length && (g = new N(g, j, null, n, x), w.push({ event: g, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", g && n !== Ti && (j = n.relatedTarget || n.fromElement) && (Xt(j) || j[gt])) break e;
        if ((N || g) && (g = x.window === x ? x : (g = x.ownerDocument) ? g.defaultView || g.parentWindow : window, N ? (j = n.relatedTarget || n.toElement, N = m, j = j ? Xt(j) : null, j !== null && (V = an(j), j !== V || j.tag !== 5 && j.tag !== 6) && (j = null)) : (N = null, j = m), N !== j)) {
          if (C = qa, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (C = tu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), V = N == null ? g : Sn(N), h = j == null ? g : Sn(j), g = new C(_, d + "leave", N, n, x), g.target = V, g.relatedTarget = h, _ = null, Xt(x) === m && (C = new C(p, d + "enter", j, n, x), C.target = h, C.relatedTarget = V, _ = C), V = _, N && j) t: {
            for (C = N, p = j, d = 0, h = C; h; h = vn(h)) d++;
            for (h = 0, _ = p; _; _ = vn(_)) h++;
            for (; 0 < d - h; ) C = vn(C), d--;
            for (; 0 < h - d; ) p = vn(p), h--;
            for (; d--; ) {
              if (C === p || p !== null && C === p.alternate) break t;
              C = vn(C), p = vn(p);
            }
            C = null;
          }
          else C = null;
          N !== null && fu(w, g, N, C, !1), j !== null && V !== null && fu(w, V, j, C, !0);
        }
      }
      e: {
        if (g = m ? Sn(m) : window, N = g.nodeName && g.nodeName.toLowerCase(), N === "select" || N === "input" && g.type === "file") var E = Nm;
        else if (lu(g)) if (Qc) E = Pm;
        else {
          E = Cm;
          var T = jm;
        }
        else (N = g.nodeName) && N.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (E = Em);
        if (E && (E = E(e, m))) {
          Wc(w, E, n, x);
          break e;
        }
        T && T(e, g, m), e === "focusout" && (T = g._wrapperState) && T.controlled && g.type === "number" && ji(g, "number", g.value);
      }
      switch (T = m ? Sn(m) : window, e) {
        case "focusin":
          (lu(T) || T.contentEditable === "true") && (_n = T, Oi = m, yr = null);
          break;
        case "focusout":
          yr = Oi = _n = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Di = !1, uu(w, n, x);
          break;
        case "selectionchange":
          if (Lm) break;
        case "keydown":
        case "keyup":
          uu(w, n, x);
      }
      var L;
      if (zs) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else wn ? Bc(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Hc && n.locale !== "ko" && (wn || R !== "onCompositionStart" ? R === "onCompositionEnd" && wn && (L = Uc()) : (Tt = x, Cs = "value" in Tt ? Tt.value : Tt.textContent, wn = !0)), T = Xl(m, R), 0 < T.length && (R = new eu(R, e, null, n, x), w.push({ event: R, listeners: T }), L ? R.data = L : (L = Vc(n), L !== null && (R.data = L)))), (L = xm ? wm(e, n) : _m(e, n)) && (m = Xl(m, "onBeforeInput"), 0 < m.length && (x = new eu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = L));
    }
    nd(w, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = jr(e, n), o != null && r.unshift(Rr(e, o, l)), o = jr(e, t), o != null && r.push(Rr(e, o, l))), e = e.return;
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, l ? (c = jr(n, o), c != null && i.unshift(Rr(n, c, u))) : l || (c = jr(n, o), c != null && i.push(Rr(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bm = /\r\n?/g, $m = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e).replace(bm, `
`).replace($m, "");
}
function Sl(e, t, n) {
  if (t = pu(t), pu(e) !== t && n) throw Error(k(425));
}
function Zl() {
}
var Fi = null, Ai = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Hi = typeof setTimeout == "function" ? setTimeout : void 0, Om = typeof clearTimeout == "function" ? clearTimeout : void 0, mu = typeof Promise == "function" ? Promise : void 0, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof mu < "u" ? function(e) {
  return mu.resolve(null).then(e).catch(Fm);
} : Hi;
function Fm(e) {
  setTimeout(function() {
    throw e;
  });
}
function ii(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Pr(t);
}
function bt(e) {
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
function hu(e) {
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
var Wn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Wn, Mr = "__reactProps$" + Wn, gt = "__reactContainer$" + Wn, Bi = "__reactEvents$" + Wn, Am = "__reactListeners$" + Wn, Um = "__reactHandles$" + Wn;
function Xt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[gt] || n[it]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = hu(e); e !== null; ) {
        if (n = e[it]) return n;
        e = hu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Br(e) {
  return e = e[it] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function xo(e) {
  return e[Mr] || null;
}
var Vi = [], Nn = -1;
function Bt(e) {
  return { current: e };
}
function Z(e) {
  0 > Nn || (e.current = Vi[Nn], Vi[Nn] = null, Nn--);
}
function G(e, t) {
  Nn++, Vi[Nn] = e.current, e.current = t;
}
var Ut = {}, Se = Bt(Ut), Le = Bt(!1), tn = Ut;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Re(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  Z(Le), Z(Se);
}
function gu(e, t, n) {
  if (Se.current !== Ut) throw Error(k(168));
  G(Se, t), G(Le, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, jp(e) || "Unknown", l));
  return le({}, n, r);
}
function ql(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, tn = Se.current, G(Se, e), G(Le, Le.current), !0;
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = ld(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Se), G(Se, e)) : Z(Le), G(Le, n);
}
var dt = null, wo = !1, si = !1;
function od(e) {
  dt === null ? dt = [e] : dt.push(e);
}
function Hm(e) {
  wo = !0, od(e);
}
function Vt() {
  if (!si && dt !== null) {
    si = !0;
    var e = 0, t = B;
    try {
      var n = dt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      dt = null, wo = !1;
    } catch (l) {
      throw dt !== null && (dt = dt.slice(e + 1)), Tc(ks, Vt), l;
    } finally {
      B = t, si = !1;
    }
  }
  return null;
}
var jn = [], Cn = 0, eo = null, to = 0, He = [], Be = 0, nn = null, ft = 1, pt = "";
function Yt(e, t) {
  jn[Cn++] = to, jn[Cn++] = eo, eo = e, to = t;
}
function id(e, t, n) {
  He[Be++] = ft, He[Be++] = pt, He[Be++] = nn, nn = e;
  var r = ft;
  e = pt;
  var l = 32 - Je(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Je(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ft = 1 << 32 - Je(t) + l | n << l | r, pt = o + e;
  } else ft = 1 << o | n << l | r, pt = e;
}
function Ls(e) {
  e.return !== null && (Yt(e, 1), id(e, 1, 0));
}
function Rs(e) {
  for (; e === eo; ) eo = jn[--Cn], jn[Cn] = null, to = jn[--Cn], jn[Cn] = null;
  for (; e === nn; ) nn = He[--Be], He[Be] = null, pt = He[--Be], He[Be] = null, ft = He[--Be], He[Be] = null;
}
var Oe = null, $e = null, q = !1, Ze = null;
function sd(e, t) {
  var n = Ve(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: ft, overflow: pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (q) {
    var t = $e;
    if (t) {
      var n = t;
      if (!yu(e, t)) {
        if (Wi(e)) throw Error(k(418));
        t = bt(n.nextSibling);
        var r = Oe;
        t && yu(e, t) ? sd(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, Oe = e);
      }
    } else {
      if (Wi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, q = !1, Oe = e;
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function Nl(e) {
  if (e !== Oe) return !1;
  if (!q) return xu(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Wi(e)) throw ad(), Error(k(418));
    for (; t; ) sd(e, t), t = bt(t.nextSibling);
  }
  if (xu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = bt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = $e; e; ) e = bt(e.nextSibling);
}
function Dn() {
  $e = Oe = null, q = !1;
}
function Ms(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var Bm = xt.ReactCurrentBatchConfig;
function sr(e, t, n) {
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
function jl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function wu(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
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
    return p = Ft(p, d), p.index = 0, p.sibling = null, p;
  }
  function o(p, d, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < d ? (p.flags |= 2, d) : h) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, _) {
    return d === null || d.tag !== 6 ? (d = mi(h, p.mode, _), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var E = h.type;
    return E === xn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ct && wu(E) === d.type) ? (_ = l(d, h.props), _.ref = sr(p, d, h), _.return = p, _) : (_ = Ul(h.type, h.key, h.props, null, p.mode, _), _.ref = sr(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = hi(h, p.mode, _), d.return = p, d) : (d = l(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, E) {
    return d === null || d.tag !== 7 ? (d = en(h, p.mode, _, E), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = mi("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ml:
          return h = Ul(d.type, d.key, d.props, null, p.mode, h), h.ref = sr(p, null, d), h.return = p, h;
        case yn:
          return d = hi(d, p.mode, h), d.return = p, d;
        case Ct:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (dr(d) || nr(d)) return d = en(d, p.mode, h, null), d.return = p, d;
      jl(p, d);
    }
    return null;
  }
  function g(p, d, h, _) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ml:
          return h.key === E ? c(p, d, h, _) : null;
        case yn:
          return h.key === E ? m(p, d, h, _) : null;
        case Ct:
          return E = h._init, g(
            p,
            d,
            E(h._payload),
            _
          );
      }
      if (dr(h) || nr(h)) return E !== null ? null : x(p, d, h, _, null);
      jl(p, h);
    }
    return null;
  }
  function N(p, d, h, _, E) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ml:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, E);
        case yn:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, E);
        case Ct:
          var T = _._init;
          return N(p, d, h, T(_._payload), E);
      }
      if (dr(_) || nr(_)) return p = p.get(h) || null, x(d, p, _, E, null);
      jl(d, _);
    }
    return null;
  }
  function j(p, d, h, _) {
    for (var E = null, T = null, L = d, R = d = 0, Y = null; L !== null && R < h.length; R++) {
      L.index > R ? (Y = L, L = null) : Y = L.sibling;
      var b = g(p, L, h[R], _);
      if (b === null) {
        L === null && (L = Y);
        break;
      }
      e && L && b.alternate === null && t(p, L), d = o(b, d, R), T === null ? E = b : T.sibling = b, T = b, L = Y;
    }
    if (R === h.length) return n(p, L), q && Yt(p, R), E;
    if (L === null) {
      for (; R < h.length; R++) L = w(p, h[R], _), L !== null && (d = o(L, d, R), T === null ? E = L : T.sibling = L, T = L);
      return q && Yt(p, R), E;
    }
    for (L = r(p, L); R < h.length; R++) Y = N(L, p, R, h[R], _), Y !== null && (e && Y.alternate !== null && L.delete(Y.key === null ? R : Y.key), d = o(Y, d, R), T === null ? E = Y : T.sibling = Y, T = Y);
    return e && L.forEach(function(pe) {
      return t(p, pe);
    }), q && Yt(p, R), E;
  }
  function C(p, d, h, _) {
    var E = nr(h);
    if (typeof E != "function") throw Error(k(150));
    if (h = E.call(h), h == null) throw Error(k(151));
    for (var T = E = null, L = d, R = d = 0, Y = null, b = h.next(); L !== null && !b.done; R++, b = h.next()) {
      L.index > R ? (Y = L, L = null) : Y = L.sibling;
      var pe = g(p, L, b.value, _);
      if (pe === null) {
        L === null && (L = Y);
        break;
      }
      e && L && pe.alternate === null && t(p, L), d = o(pe, d, R), T === null ? E = pe : T.sibling = pe, T = pe, L = Y;
    }
    if (b.done) return n(
      p,
      L
    ), q && Yt(p, R), E;
    if (L === null) {
      for (; !b.done; R++, b = h.next()) b = w(p, b.value, _), b !== null && (d = o(b, d, R), T === null ? E = b : T.sibling = b, T = b);
      return q && Yt(p, R), E;
    }
    for (L = r(p, L); !b.done; R++, b = h.next()) b = N(L, p, R, b.value, _), b !== null && (e && b.alternate !== null && L.delete(b.key === null ? R : b.key), d = o(b, d, R), T === null ? E = b : T.sibling = b, T = b);
    return e && L.forEach(function(Wt) {
      return t(p, Wt);
    }), q && Yt(p, R), E;
  }
  function V(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === xn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ml:
          e: {
            for (var E = h.key, T = d; T !== null; ) {
              if (T.key === E) {
                if (E = h.type, E === xn) {
                  if (T.tag === 7) {
                    n(p, T.sibling), d = l(T, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (T.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ct && wu(E) === T.type) {
                  n(p, T.sibling), d = l(T, h.props), d.ref = sr(p, T, h), d.return = p, p = d;
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            h.type === xn ? (d = en(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Ul(h.type, h.key, h.props, null, p.mode, _), _.ref = sr(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case yn:
          e: {
            for (T = h.key; d !== null; ) {
              if (d.key === T) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(p, d.sibling), d = l(d, h.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = hi(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case Ct:
          return T = h._init, V(p, d, T(h._payload), _);
      }
      if (dr(h)) return j(p, d, h, _);
      if (nr(h)) return C(p, d, h, _);
      jl(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, h), d.return = p, p = d) : (n(p, d), d = mi(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return V;
}
var Fn = ud(!0), cd = ud(!1), no = Bt(null), ro = null, En = null, Is = null;
function bs() {
  Is = En = ro = null;
}
function $s(e) {
  var t = no.current;
  Z(no), e._currentValue = t;
}
function Gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  ro = e, Is = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (Is !== e) if (e = { context: e, memoizedValue: t, next: null }, En === null) {
    if (ro === null) throw Error(k(308));
    En = e, ro.dependencies = { lanes: 0, firstContext: e };
  } else En = En.next = e;
  return t;
}
var Zt = null;
function Os(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Os(t)) : (n.next = l.next, l.next = n), t.interleaved = n, vt(e, r);
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Ds(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, vt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Os(r)) : (t.next = l.next, l.next = t), r.interleaved = t, vt(e, n);
}
function bl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ss(e, n);
  }
}
function _u(e, t) {
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
function lo(e, t, n, r) {
  var l = e.updateQueue;
  Et = !1;
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
      var g = u.lane, N = u.eventTime;
      if ((r & g) === g) {
        x !== null && (x = x.next = {
          eventTime: N,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var j = e, C = u;
          switch (g = t, N = n, C.tag) {
            case 1:
              if (j = C.payload, typeof j == "function") {
                w = j.call(N, w, g);
                break e;
              }
              w = j;
              break e;
            case 3:
              j.flags = j.flags & -65537 | 128;
            case 0:
              if (j = C.payload, g = typeof j == "function" ? j.call(N, w, g) : j, g == null) break e;
              w = le({}, w, g);
              break e;
            case 2:
              Et = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [u] : g.push(u));
      } else N = { eventTime: N, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, x === null ? (m = x = N, c = w) : x = x.next = N, i |= g;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        g = u, u = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (x === null && (c = w), l.baseState = c, l.firstBaseUpdate = m, l.lastBaseUpdate = x, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ln |= i, e.lanes = i, e.memoizedState = w;
  }
}
function ku(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var Vr = {}, at = Bt(Vr), Ir = Bt(Vr), br = Bt(Vr);
function Jt(e) {
  if (e === Vr) throw Error(k(174));
  return e;
}
function Fs(e, t) {
  switch (G(br, t), G(Ir, e), G(at, Vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ei(t, e);
  }
  Z(at), G(at, t);
}
function An() {
  Z(at), Z(Ir), Z(br);
}
function pd(e) {
  Jt(br.current);
  var t = Jt(at.current), n = Ei(t, e.type);
  t !== n && (G(Ir, e), G(at, n));
}
function As(e) {
  Ir.current === e && (Z(at), Z(Ir));
}
var ne = Bt(0);
function oo(e) {
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
var ai = [];
function Us() {
  for (var e = 0; e < ai.length; e++) ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var $l = xt.ReactCurrentDispatcher, ui = xt.ReactCurrentBatchConfig, rn = 0, re = null, de = null, me = null, io = !1, xr = !1, $r = 0, Vm = 0;
function we() {
  throw Error(k(321));
}
function Hs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!et(e[n], t[n])) return !1;
  return !0;
}
function Bs(e, t, n, r, l, o) {
  if (rn = o, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $l.current = e === null || e.memoizedState === null ? Ym : Km, e = n(r, l), xr) {
    o = 0;
    do {
      if (xr = !1, $r = 0, 25 <= o) throw Error(k(301));
      o += 1, me = de = null, t.updateQueue = null, $l.current = Xm, e = n(r, l);
    } while (xr);
  }
  if ($l.current = so, t = de !== null && de.next !== null, rn = 0, me = de = re = null, io = !1, t) throw Error(k(300));
  return e;
}
function Vs() {
  var e = $r !== 0;
  return $r = 0, e;
}
function ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? re.memoizedState = me = e : me = me.next = e, me;
}
function Ge() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? re.memoizedState : me.next;
  if (t !== null) me = t, de = e;
  else {
    if (e === null) throw Error(k(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, me === null ? re.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function Or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = Ge(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = de, l = r.baseQueue, o = n.pending;
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
      if ((rn & x) === x) c !== null && (c = c.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
      else {
        var w = {
          lane: x,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null
        };
        c === null ? (u = c = w, i = r) : c = c.next = w, re.lanes |= x, ln |= x;
      }
      m = m.next;
    } while (m !== null && m !== o);
    c === null ? i = r : c.next = u, et(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, re.lanes |= o, ln |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Ge(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    et(o, t.memoizedState) || (Te = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function md() {
}
function hd(e, t) {
  var n = re, r = Ge(), l = t(), o = !et(r.memoizedState, l);
  if (o && (r.memoizedState = l, Te = !0), r = r.queue, Ws(yd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, vd.bind(null, n, r, l, t), void 0, null), he === null) throw Error(k(349));
    rn & 30 || gd(n, t, l);
  }
  return l;
}
function gd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xd(t) && wd(e);
}
function yd(e, t, n) {
  return n(function() {
    xd(t) && wd(e);
  });
}
function xd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function wd(e) {
  var t = vt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function Su(e) {
  var t = ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gm.bind(null, re, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _d() {
  return Ge().memoizedState;
}
function Ol(e, t, n, r) {
  var l = ot();
  re.flags |= e, l.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function _o(e, t, n, r) {
  var l = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (o = i.destroy, r !== null && Hs(r, i.deps)) {
      l.memoizedState = Dr(t, n, o, r);
      return;
    }
  }
  re.flags |= e, l.memoizedState = Dr(1 | t, n, o, r);
}
function Nu(e, t) {
  return Ol(8390656, 8, e, t);
}
function Ws(e, t) {
  return _o(2048, 8, e, t);
}
function kd(e, t) {
  return _o(4, 2, e, t);
}
function Sd(e, t) {
  return _o(4, 4, e, t);
}
function Nd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function jd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _o(4, 4, Nd.bind(null, t, e), n);
}
function Qs() {
}
function Cd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ed(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pd(e, t, n) {
  return rn & 21 ? (et(n, t) || (n = Mc(), re.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function Wm(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ui.transition;
  ui.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, ui.transition = r;
  }
}
function zd() {
  return Ge().memoizedState;
}
function Qm(e, t, n) {
  var r = Dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Td(e)) Ld(t, n);
  else if (n = dd(e, t, n, r), n !== null) {
    var l = je();
    qe(n, e, r, l), Rd(n, t, r);
  }
}
function Gm(e, t, n) {
  var r = Dt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Td(e)) Ld(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, et(u, i)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Os(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = dd(e, t, l, r), n !== null && (l = je(), qe(n, e, r, l), Rd(n, t, r));
  }
}
function Td(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Ld(e, t) {
  xr = io = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ss(e, n);
  }
}
var so = { readContext: Qe, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Ym = { readContext: Qe, useCallback: function(e, t) {
  return ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Nu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ol(
    4194308,
    4,
    Nd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qm.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: Su, useDebugValue: Qs, useDeferredValue: function(e) {
  return ot().memoizedState = e;
}, useTransition: function() {
  var e = Su(!1), t = e[0];
  return e = Wm.bind(null, e[1]), ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, l = ot();
  if (q) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), he === null) throw Error(k(349));
    rn & 30 || gd(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Nu(yd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Dr(9, vd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ot(), t = he.identifierPrefix;
  if (q) {
    var n = pt, r = ft;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Km = {
  readContext: Qe,
  useCallback: Cd,
  useContext: Qe,
  useEffect: Ws,
  useImperativeHandle: jd,
  useInsertionEffect: kd,
  useLayoutEffect: Sd,
  useMemo: Ed,
  useReducer: ci,
  useRef: _d,
  useState: function() {
    return ci(Or);
  },
  useDebugValue: Qs,
  useDeferredValue: function(e) {
    var t = Ge();
    return Pd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = ci(Or)[0], t = Ge().memoizedState;
    return [e, t];
  },
  useMutableSource: md,
  useSyncExternalStore: hd,
  useId: zd,
  unstable_isNewReconciler: !1
}, Xm = { readContext: Qe, useCallback: Cd, useContext: Qe, useEffect: Ws, useImperativeHandle: jd, useInsertionEffect: kd, useLayoutEffect: Sd, useMemo: Ed, useReducer: di, useRef: _d, useState: function() {
  return di(Or);
}, useDebugValue: Qs, useDeferredValue: function(e) {
  var t = Ge();
  return de === null ? t.memoizedState = e : Pd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = di(Or)[0], t = Ge().memoizedState;
  return [e, t];
}, useMutableSource: md, useSyncExternalStore: hd, useId: zd, unstable_isNewReconciler: !1 };
function Ke(e, t) {
  if (e && e.defaultProps) {
    t = le({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ko = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Dt(e), o = mt(r, l);
  o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (qe(t, e, l, r), bl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Dt(e), o = mt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (qe(t, e, l, r), bl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = Dt(e), l = mt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = $t(e, l, r), t !== null && (qe(t, e, r, n), bl(t, e, r));
} };
function ju(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(l, o) : !0;
}
function Md(e, t, n) {
  var r = !1, l = Ut, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Qe(o) : (l = Re(t) ? tn : Se.current, r = t.contextTypes, o = (r = r != null) ? On(e, l) : Ut), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Cu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ko.enqueueReplaceState(t, t.state, null);
}
function Ki(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ds(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Qe(o) : (o = Re(t) ? tn : Se.current, l.context = On(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Yi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ko.enqueueReplaceState(l, l.state, null), lo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Np(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zm = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  n = mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    uo || (uo = !0, is = r), Xi(e, t);
  }, n;
}
function bd(e, t, n) {
  n = mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Xi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Xi(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = dh.bind(null, e, t, n), t.then(e, e));
}
function Pu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
}
var Jm = xt.ReactCurrentOwner, Te = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : Fn(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return In(t, l), r = Bs(e, t, n, r, o, l), n = Vs(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, yt(e, t, l)) : (q && n && Ls(t), t.flags |= 1, Ne(e, t, r, l), t.child);
}
function Lu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ea(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, $d(e, t, o, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Tr, n(i, r) && e.ref === t.ref) return yt(e, t, l);
  }
  return t.flags |= 1, e = Ft(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function $d(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Tr(o, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, yt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function Od(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(zn, be), be |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(zn, be), be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(zn, be), be |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(zn, be), be |= r;
  return Ne(e, t, l, n), t.child;
}
function Dd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var o = Re(n) ? tn : Se.current;
  return o = On(t, o), In(t, l), n = Bs(e, t, n, r, o, l), r = Vs(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, yt(e, t, l)) : (q && r && Ls(t), t.flags |= 1, Ne(e, t, n, l), t.child);
}
function Ru(e, t, n, r, l) {
  if (Re(n)) {
    var o = !0;
    ql(t);
  } else o = !1;
  if (In(t, l), t.stateNode === null) Dl(e, t), Md(t, n, r), Ki(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Qe(m) : (m = Re(n) ? tn : Se.current, m = On(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Cu(t, i, r, m), Et = !1;
    var g = t.memoizedState;
    i.state = g, lo(t, r, i, l), c = t.memoizedState, u !== r || g !== c || Le.current || Et ? (typeof x == "function" && (Yi(t, n, x, r), c = t.memoizedState), (u = Et || ju(t, n, u, r, g, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, fd(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : Ke(t.type, u), i.props = m, w = t.pendingProps, g = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Qe(c) : (c = Re(n) ? tn : Se.current, c = On(t, c));
    var N = n.getDerivedStateFromProps;
    (x = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || g !== c) && Cu(t, i, r, c), Et = !1, g = t.memoizedState, i.state = g, lo(t, r, i, l);
    var j = t.memoizedState;
    u !== w || g !== j || Le.current || Et ? (typeof N == "function" && (Yi(t, n, N, r), j = t.memoizedState), (m = Et || ju(t, n, m, r, g, j, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, j, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, j, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), i.props = r, i.state = j, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ji(e, t, n, r, o, l);
}
function Ji(e, t, n, r, l, o) {
  Dd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && vu(t, n, !1), yt(e, t, o);
  r = t.stateNode, Jm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Fn(t, e.child, null, o), t.child = Fn(t, null, u, o)) : Ne(e, t, u, o), t.memoizedState = r.state, l && vu(t, n, !0), t.child;
}
function Fd(e) {
  var t = e.stateNode;
  t.pendingContext ? gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gu(e, t.context, !1), Fs(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return Dn(), Ms(l), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ad(e, t, n) {
  var r = t.pendingProps, l = ne.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(ne, l & 1), e === null)
    return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = jo(i, r, 0, null), e = en(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = es(n), t.memoizedState = qi, e) : Gs(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return qm(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Ft(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Ft(u, o) : (o = en(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? es(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
  }
  return o = e.child, e = o.sibling, r = Ft(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Gs(e, t) {
  return t = jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cl(e, t, n, r) {
  return r !== null && Ms(r), Fn(t, e.child, null, n), e = Gs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fi(Error(k(422))), Cl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = jo({ mode: "visible", children: r.children }, l, 0, null), o = en(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Fn(t, e.child, null, i), t.child.memoizedState = es(i), t.memoizedState = qi, o);
  if (!(t.mode & 1)) return Cl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(k(419)), r = fi(o, r, void 0), Cl(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Te || u) {
    if (r = he, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, vt(e, l), qe(r, e, l, -1));
    }
    return qs(), r = fi(Error(k(421))), Cl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, $e = bt(l.nextSibling), Oe = t, q = !0, Ze = null, e !== null && (He[Be++] = ft, He[Be++] = pt, He[Be++] = nn, ft = e.id, pt = e.overflow, nn = t), t = Gs(t, r.children), t.flags |= 4096, t);
}
function Iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gi(e.return, t, n);
}
function pi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Ne(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
      else if (e.tag === 19) Iu(e, n, t);
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
  if (G(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && oo(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), pi(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && oo(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      pi(t, !0, n, null, o);
      break;
    case "together":
      pi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function eh(e, t, n) {
  switch (t.tag) {
    case 3:
      Fd(t), Dn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      Re(t.type) && ql(t);
      break;
    case 4:
      Fs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(no, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ad(e, t, n) : (G(ne, ne.current & 1), e = yt(e, t, n), e !== null ? e.sibling : null);
      G(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ud(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Od(e, t, n);
  }
  return yt(e, t, n);
}
var Hd, ts, Bd, Vd;
Hd = function(e, t) {
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
ts = function() {
};
Bd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Jt(at.current);
    var o = null;
    switch (n) {
      case "input":
        l = Si(e, l), r = Si(e, r), o = [];
        break;
      case "select":
        l = le({}, l, { value: void 0 }), r = le({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ci(e, l), r = Ci(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zl);
    }
    Pi(n, r);
    var i;
    n = null;
    for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
      var u = l[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Sr.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = l != null ? l[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (o || (o = []), o.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (o = o || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Sr.hasOwnProperty(m) ? (c != null && m === "onScroll" && X("scroll", e), o || u === c || (o = [])) : (o = o || []).push(m, c));
    }
    n && (o = o || []).push("style", n);
    var m = o;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Vd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!q) switch (e.tailMode) {
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
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function th(e, t, n) {
  var r = t.pendingProps;
  switch (Rs(t), t.tag) {
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
      return _e(t), null;
    case 1:
      return Re(t.type) && Jl(), _e(t), null;
    case 3:
      return r = t.stateNode, An(), Z(Le), Z(Se), Us(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (us(Ze), Ze = null))), ts(e, t), _e(t), null;
    case 5:
      As(t);
      var l = Jt(br.current);
      if (n = t.type, e !== null && t.stateNode != null) Bd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return _e(t), null;
        }
        if (e = Jt(at.current), Nl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[it] = t, r[Mr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < pr.length; l++) X(pr[l], r);
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
              Ba(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Wa(r, o), X("invalid", r);
          }
          Pi(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Sl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Sr.hasOwnProperty(i) && u != null && i === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              hl(r), Va(r, o, !0);
              break;
            case "textarea":
              hl(r), Qa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[it] = t, e[Mr] = r, Hd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = zi(n, r), n) {
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
                for (l = 0; l < pr.length; l++) X(pr[l], e);
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
                Ba(e, r), l = Si(e, r), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = le({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Wa(e, r), l = Ci(e, r), X("invalid", e);
                break;
              default:
                l = r;
            }
            Pi(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var c = u[o];
              o === "style" ? _c(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && xc(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Nr(e, c) : typeof c == "number" && Nr(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Sr.hasOwnProperty(o) ? c != null && o === "onScroll" && X("scroll", e) : c != null && vs(e, o, c, i));
            }
            switch (n) {
              case "input":
                hl(e), Va(e, r, !1);
                break;
              case "textarea":
                hl(e), Qa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Tn(e, !!r.multiple, o, !1) : r.defaultValue != null && Tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zl);
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
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Jt(br.current), Jt(at.current), Nl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (Z(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && $e !== null && t.mode & 1 && !(t.flags & 128)) ad(), Dn(), t.flags |= 98560, o = !1;
        else if (o = Nl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[it] = t;
          } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), o = !1;
        } else Ze !== null && (us(Ze), Ze = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : qs())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return An(), ts(e, t), e === null && Lr(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return $s(t.type._context), _e(t), null;
    case 17:
      return Re(t.type) && Jl(), _e(t), null;
    case 19:
      if (Z(ne), o = t.memoizedState, o === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) ar(o, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = oo(e), i !== null) {
            for (t.flags |= 128, ar(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Hn && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = oo(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !q) return _e(t), null;
        } else 2 * ue() - o.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = ne.current, G(ne, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return Js(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function nh(e, t) {
  switch (Rs(t), t.tag) {
    case 1:
      return Re(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), Z(Le), Z(Se), Us(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return As(t), null;
    case 13:
      if (Z(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ne), null;
    case 4:
      return An(), null;
    case 10:
      return $s(t.type._context), null;
    case 22:
    case 23:
      return Js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1, ke = !1, rh = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    se(e, t, r);
  }
  else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var bu = !1;
function lh(e, t) {
  if (Fi = Yl, e = Kc(), Ts(e)) {
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
        var i = 0, u = -1, c = -1, m = 0, x = 0, w = e, g = null;
        t: for (; ; ) {
          for (var N; w !== n || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (c = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (N = w.firstChild) !== null; )
            g = w, w = N;
          for (; ; ) {
            if (w === e) break t;
            if (g === n && ++m === l && (u = i), g === o && ++x === r && (c = i), (N = w.nextSibling) !== null) break;
            w = g, g = w.parentNode;
          }
          w = N;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ai = { focusedElem: e, selectionRange: n }, Yl = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var j = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (j !== null) {
            var C = j.memoizedProps, V = j.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Ke(t.type, C), V);
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
      se(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return j = bu, bu = !1, j;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && ns(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function So(e, t) {
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
function rs(e) {
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
function Wd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[Mr], delete t[Bi], delete t[Am], delete t[Um])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), e = e.sibling;
}
function os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), e = e.sibling;
}
var ge = null, Xe = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), n = n.sibling;
}
function Gd(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function") try {
    st.onCommitFiberUnmount(ho, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || Pn(n, t);
    case 6:
      var r = ge, l = Xe;
      ge = null, jt(e, t, n), ge = r, Xe = l, ge !== null && (Xe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (Xe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), Pr(e)) : ii(ge, n.stateNode));
      break;
    case 4:
      r = ge, l = Xe, ge = n.stateNode.containerInfo, Xe = !0, jt(e, t, n), ge = r, Xe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && ns(n, t, i), l = l.next;
        } while (l !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (!ke && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        se(n, t, u);
      }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, jt(e, t, n), ke = r) : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Ou(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rh()), t.forEach(function(r) {
      var l = ph.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ge = u.stateNode, Xe = !1;
            break e;
          case 3:
            ge = u.stateNode.containerInfo, Xe = !0;
            break e;
          case 4:
            ge = u.stateNode.containerInfo, Xe = !0;
            break e;
        }
        u = u.return;
      }
      if (ge === null) throw Error(k(160));
      Gd(o, i, l), ge = null, Xe = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (m) {
      se(l, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yd(t, e), t = t.sibling;
}
function Yd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), lt(e), r & 4) {
        try {
          wr(3, e, e.return), So(3, e);
        } catch (C) {
          se(e, e.return, C);
        }
        try {
          wr(5, e, e.return);
        } catch (C) {
          se(e, e.return, C);
        }
      }
      break;
    case 1:
      Ye(t, e), lt(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), lt(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Nr(l, "");
        } catch (C) {
          se(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && o.type === "radio" && o.name != null && gc(l, o), zi(u, i);
          var m = zi(u, o);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? _c(l, w) : x === "dangerouslySetInnerHTML" ? xc(l, w) : x === "children" ? Nr(l, w) : vs(l, x, w, m);
          }
          switch (u) {
            case "input":
              Ni(l, o);
              break;
            case "textarea":
              vc(l, o);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var N = o.value;
              N != null ? Tn(l, !!o.multiple, N, !1) : g !== !!o.multiple && (o.defaultValue != null ? Tn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Tn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Mr] = o;
        } catch (C) {
          se(e, e.return, C);
        }
      }
      break;
    case 6:
      if (Ye(t, e), lt(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (C) {
          se(e, e.return, C);
        }
      }
      break;
    case 3:
      if (Ye(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Pr(t.containerInfo);
      } catch (C) {
        se(e, e.return, C);
      }
      break;
    case 4:
      Ye(t, e), lt(e);
      break;
    case 13:
      Ye(t, e), lt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Xs = ue())), r & 4 && Ou(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (m = ke) || x, Ye(t, e), ke = m) : Ye(t, e), lt(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (z = e, x = e.child; x !== null; ) {
          for (w = z = x; z !== null; ) {
            switch (g = z, N = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                wr(4, g, g.return);
                break;
              case 1:
                Pn(g, g.return);
                var j = g.stateNode;
                if (typeof j.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, j.props = t.memoizedProps, j.state = t.memoizedState, j.componentWillUnmount();
                  } catch (C) {
                    se(r, n, C);
                  }
                }
                break;
              case 5:
                Pn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Fu(w);
                  continue;
                }
            }
            N !== null ? (N.return = g, z = N) : Fu(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                l = w.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = wc("display", i));
              } catch (C) {
                se(e, e.return, C);
              }
            }
          } else if (w.tag === 6) {
            if (x === null) try {
              w.stateNode.nodeValue = m ? "" : w.memoizedProps;
            } catch (C) {
              se(e, e.return, C);
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
      Ye(t, e), lt(e), r & 4 && Ou(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
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
          r.flags & 32 && (Nr(l, ""), r.flags &= -33);
          var o = $u(e);
          os(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = $u(e);
          ls(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (c) {
      se(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function oh(e, t, n) {
  z = e, Kd(e);
}
function Kd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || El;
      if (!i) {
        var u = l.alternate, c = u !== null && u.memoizedState !== null || ke;
        u = El;
        var m = ke;
        if (El = i, (ke = c) && !m) for (z = l; z !== null; ) i = z, c = i.child, i.tag === 22 && i.memoizedState !== null ? Au(l) : c !== null ? (c.return = i, z = c) : Au(l);
        for (; o !== null; ) z = o, Kd(o), o = o.sibling;
        z = l, El = u, ke = m;
      }
      Du(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : Du(e);
  }
}
function Du(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || So(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ku(t, o, r);
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
              ku(t, i, n);
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
                  w !== null && Pr(w);
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
        ke || t.flags & 512 && rs(t);
      } catch (g) {
        se(t, t.return, g);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function Fu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function Au(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (c) {
            se(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              se(t, l, c);
            }
          }
          var o = t.return;
          try {
            rs(t);
          } catch (c) {
            se(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            rs(t);
          } catch (c) {
            se(t, i, c);
          }
      }
    } catch (c) {
      se(t, t.return, c);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, z = u;
      break;
    }
    z = t.return;
  }
}
var ih = Math.ceil, ao = xt.ReactCurrentDispatcher, Ys = xt.ReactCurrentOwner, We = xt.ReactCurrentBatchConfig, U = 0, he = null, ce = null, ve = 0, be = 0, zn = Bt(0), fe = 0, Fr = null, ln = 0, No = 0, Ks = 0, _r = null, ze = null, Xs = 0, Hn = 1 / 0, ct = null, uo = !1, is = null, Ot = null, Pl = !1, Lt = null, co = 0, kr = 0, ss = null, Fl = -1, Al = 0;
function je() {
  return U & 6 ? ue() : Fl !== -1 ? Fl : Fl = ue();
}
function Dt(e) {
  return e.mode & 1 ? U & 2 && ve !== 0 ? ve & -ve : Bm.transition !== null ? (Al === 0 && (Al = Mc()), Al) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ac(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < kr) throw kr = 0, ss = null, Error(k(185));
  Ur(e, n, r), (!(U & 2) || e !== he) && (e === he && (!(U & 2) && (No |= n), fe === 4 && zt(e, ve)), Me(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Hn = ue() + 500, wo && Vt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Bp(e, t);
  var r = Gl(e, e === he ? ve : 0);
  if (r === 0) n !== null && Ka(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ka(n), t === 1) e.tag === 0 ? Hm(Uu.bind(null, e)) : od(Uu.bind(null, e)), Dm(function() {
      !(U & 6) && Vt();
    }), n = null;
    else {
      switch (Ic(r)) {
        case 1:
          n = ks;
          break;
        case 4:
          n = Lc;
          break;
        case 16:
          n = Ql;
          break;
        case 536870912:
          n = Rc;
          break;
        default:
          n = Ql;
      }
      n = rf(n, Xd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Xd(e, t) {
  if (Fl = -1, Al = 0, U & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = Gl(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = Jd();
    (he !== e || ve !== t) && (ct = null, Hn = ue() + 500, qt(e, t));
    do
      try {
        uh();
        break;
      } catch (u) {
        Zd(e, u);
      }
    while (!0);
    bs(), ao.current = o, U = l, ce !== null ? t = 0 : (he = null, ve = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ii(e), l !== 0 && (r = l, t = as(e, l))), t === 1) throw n = Fr, qt(e, 0), zt(e, r), Me(e, ue()), n;
    if (t === 6) zt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !sh(l) && (t = fo(e, r), t === 2 && (o = Ii(e), o !== 0 && (r = o, t = as(e, o))), t === 1)) throw n = Fr, qt(e, 0), zt(e, r), Me(e, ue()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Kt(e, ze, ct);
          break;
        case 3:
          if (zt(e, r), (r & 130023424) === r && (t = Xs + 500 - ue(), 10 < t)) {
            if (Gl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Hi(Kt.bind(null, e, ze, ct), t);
            break;
          }
          Kt(e, ze, ct);
          break;
        case 4:
          if (zt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Je(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ih(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Hi(Kt.bind(null, e, ze, ct), r);
            break;
          }
          Kt(e, ze, ct);
          break;
        case 5:
          Kt(e, ze, ct);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Me(e, ue()), e.callbackNode === n ? Xd.bind(null, e) : null;
}
function as(e, t) {
  var n = _r;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), e = fo(e, t), e !== 2 && (t = ze, ze = n, t !== null && us(t)), e;
}
function us(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function sh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!et(o(), l)) return !1;
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
function zt(e, t) {
  for (t &= ~Ks, t &= ~No, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Uu(e) {
  if (U & 6) throw Error(k(327));
  bn();
  var t = Gl(e, 0);
  if (!(t & 1)) return Me(e, ue()), null;
  var n = fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ii(e);
    r !== 0 && (t = r, n = as(e, r));
  }
  if (n === 1) throw n = Fr, qt(e, 0), zt(e, t), Me(e, ue()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kt(e, ze, ct), Me(e, ue()), null;
}
function Zs(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (Hn = ue() + 500, wo && Vt());
  }
}
function on(e) {
  Lt !== null && Lt.tag === 0 && !(U & 6) && bn();
  var t = U;
  U |= 1;
  var n = We.transition, r = B;
  try {
    if (We.transition = null, B = 1, e) return e();
  } finally {
    B = r, We.transition = n, U = t, !(U & 6) && Vt();
  }
}
function Js() {
  be = zn.current, Z(zn);
}
function qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Om(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (Rs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        An(), Z(Le), Z(Se), Us();
        break;
      case 5:
        As(r);
        break;
      case 4:
        An();
        break;
      case 13:
        Z(ne);
        break;
      case 19:
        Z(ne);
        break;
      case 10:
        $s(r.type._context);
        break;
      case 22:
      case 23:
        Js();
    }
    n = n.return;
  }
  if (he = e, ce = e = Ft(e.current, null), ve = be = t, fe = 0, Fr = null, Ks = No = ln = 0, ze = _r = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function Zd(e, t) {
  do {
    var n = ce;
    try {
      if (bs(), $l.current = so, io) {
        for (var r = re.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        io = !1;
      }
      if (rn = 0, me = de = re = null, xr = !1, $r = 0, Ys.current = null, n === null || n.return === null) {
        fe = 1, Fr = t, ce = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, c = t;
        if (t = ve, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var g = x.alternate;
            g ? (x.updateQueue = g.updateQueue, x.memoizedState = g.memoizedState, x.lanes = g.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var N = Pu(i);
          if (N !== null) {
            N.flags &= -257, zu(N, i, u, o, t), N.mode & 1 && Eu(o, m, t), t = N, c = m;
            var j = t.updateQueue;
            if (j === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(c), t.updateQueue = C;
            } else j.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(o, m, t), qs();
              break e;
            }
            c = Error(k(426));
          }
        } else if (q && u.mode & 1) {
          var V = Pu(i);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), zu(V, i, u, o, t), Ms(Un(c, u));
            break e;
          }
        }
        o = c = Un(c, u), fe !== 4 && (fe = 2), _r === null ? _r = [o] : _r.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Id(o, c, t);
              _u(o, p);
              break e;
            case 1:
              u = c;
              var d = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ot === null || !Ot.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = bd(o, u, t);
                _u(o, _);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ef(n);
    } catch (E) {
      t = E, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jd() {
  var e = ao.current;
  return ao.current = so, e === null ? so : e;
}
function qs() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), he === null || !(ln & 268435455) && !(No & 268435455) || zt(he, ve);
}
function fo(e, t) {
  var n = U;
  U |= 2;
  var r = Jd();
  (he !== e || ve !== t) && (ct = null, qt(e, t));
  do
    try {
      ah();
      break;
    } catch (l) {
      Zd(e, l);
    }
  while (!0);
  if (bs(), U = n, ao.current = r, ce !== null) throw Error(k(261));
  return he = null, ve = 0, fe;
}
function ah() {
  for (; ce !== null; ) qd(ce);
}
function uh() {
  for (; ce !== null && !Ip(); ) qd(ce);
}
function qd(e) {
  var t = nf(e.alternate, e, be);
  e.memoizedProps = e.pendingProps, t === null ? ef(e) : ce = t, Ys.current = null;
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nh(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = th(n, t, be), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Kt(e, t, n) {
  var r = B, l = We.transition;
  try {
    We.transition = null, B = 1, ch(e, t, n, r);
  } finally {
    We.transition = l, B = r;
  }
  return null;
}
function ch(e, t, n, r) {
  do
    bn();
  while (Lt !== null);
  if (U & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Vp(e, o), e === he && (ce = he = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pl || (Pl = !0, rf(Ql, function() {
    return bn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = We.transition, We.transition = null;
    var i = B;
    B = 1;
    var u = U;
    U |= 4, Ys.current = null, lh(e, n), Yd(n, e), Tm(Ai), Yl = !!Fi, Ai = Fi = null, e.current = n, oh(n), bp(), U = u, B = i, We.transition = o;
  } else e.current = n;
  if (Pl && (Pl = !1, Lt = e, co = l), o = e.pendingLanes, o === 0 && (Ot = null), Dp(n.stateNode), Me(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (uo) throw uo = !1, e = is, is = null, e;
  return co & 1 && e.tag !== 0 && bn(), o = e.pendingLanes, o & 1 ? e === ss ? kr++ : (kr = 0, ss = e) : kr = 0, Vt(), null;
}
function bn() {
  if (Lt !== null) {
    var e = Ic(co), t = We.transition, n = B;
    try {
      if (We.transition = null, B = 16 > e ? 16 : e, Lt === null) var r = !1;
      else {
        if (e = Lt, Lt = null, co = 0, U & 6) throw Error(k(331));
        var l = U;
        for (U |= 4, z = e.current; z !== null; ) {
          var o = z, i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (z = m; z !== null; ) {
                  var x = z;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, x, o);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, z = w;
                  else for (; z !== null; ) {
                    x = z;
                    var g = x.sibling, N = x.return;
                    if (Wd(x), x === m) {
                      z = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = N, z = g;
                      break;
                    }
                    z = N;
                  }
                }
              }
              var j = o.alternate;
              if (j !== null) {
                var C = j.child;
                if (C !== null) {
                  j.child = null;
                  do {
                    var V = C.sibling;
                    C.sibling = null, C = V;
                  } while (C !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                wr(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, z = p;
              break e;
            }
            z = o.return;
          }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          i = z;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, z = h;
          else e: for (i = d; z !== null; ) {
            if (u = z, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  So(9, u);
              }
            } catch (E) {
              se(u, u.return, E);
            }
            if (u === i) {
              z = null;
              break e;
            }
            var _ = u.sibling;
            if (_ !== null) {
              _.return = u.return, z = _;
              break e;
            }
            z = u.return;
          }
        }
        if (U = l, Vt(), st && typeof st.onPostCommitFiberRoot == "function") try {
          st.onPostCommitFiberRoot(ho, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      B = n, We.transition = t;
    }
  }
  return !1;
}
function Hu(e, t, n) {
  t = Un(n, t), t = Id(e, t, 1), e = $t(e, t, 1), t = je(), e !== null && (Ur(e, 1, t), Me(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Hu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Hu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
        e = Un(n, e), e = bd(t, e, 1), t = $t(t, e, 1), e = je(), t !== null && (Ur(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ve & n) === n && (fe === 4 || fe === 3 && (ve & 130023424) === ve && 500 > ue() - Xs ? qt(e, 0) : Ks |= n), Me(e, t);
}
function tf(e, t) {
  t === 0 && (e.mode & 1 ? (t = yl, yl <<= 1, !(yl & 130023424) && (yl = 4194304)) : t = 1);
  var n = je();
  e = vt(e, t), e !== null && (Ur(e, t, n), Me(e, n));
}
function fh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function ph(e, t) {
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
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, eh(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, q && t.flags & 1048576 && id(t, to, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Dl(e, t), e = t.pendingProps;
      var l = On(t, Se.current);
      In(t, n), l = Bs(null, t, r, e, l, n);
      var o = Vs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Re(r) ? (o = !0, ql(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ds(t), l.updater = ko, t.stateNode = l, l._reactInternals = t, Ki(t, r, e, n), t = Ji(null, t, r, !0, o, n)) : (t.tag = 0, q && o && Ls(t), Ne(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Dl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = hh(r), e = Ke(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = Ru(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Lu(null, t, r, Ke(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ke(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ke(r, l), Ru(e, t, r, l, n);
    case 3:
      e: {
        if (Fd(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, fd(e, t), lo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Un(Error(k(423)), t), t = Mu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Un(Error(k(424)), t), t = Mu(e, t, r, n, l);
          break e;
        } else for ($e = bt(t.stateNode.containerInfo.firstChild), Oe = t, q = !0, Ze = null, n = cd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Dn(), r === l) {
            t = yt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pd(t), e === null && Qi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ui(r, l) ? i = null : o !== null && Ui(r, o) && (t.flags |= 32), Dd(e, t), Ne(e, t, i, n), t.child;
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return Ad(e, t, n);
    case 4:
      return Fs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fn(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ke(r, l), Tu(e, t, r, l, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, G(no, r._currentValue), r._currentValue = i, o !== null) if (et(o.value, i)) {
          if (o.children === l.children && !Le.current) {
            t = yt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (o.tag === 1) {
                  c = mt(-1, n & -n), c.tag = 2;
                  var m = o.updateQueue;
                  if (m !== null) {
                    m = m.shared;
                    var x = m.pending;
                    x === null ? c.next = c : (c.next = x.next, x.next = c), m.pending = c;
                  }
                }
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Gi(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Gi(i, n, t), i = o.sibling;
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
        Ne(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, In(t, n), l = Qe(l), r = r(l), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ke(r, t.pendingProps), l = Ke(r.type, l), Lu(e, t, r, l, n);
    case 15:
      return $d(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ke(r, l), Dl(e, t), t.tag = 1, Re(r) ? (e = !0, ql(t)) : e = !1, In(t, n), Md(t, r, l), Ki(t, r, l, n), Ji(null, t, r, !0, e, n);
    case 19:
      return Ud(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function rf(e, t) {
  return Tc(e, t);
}
function mh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ve(e, t, n, r) {
  return new mh(e, t, n, r);
}
function ea(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hh(e) {
  if (typeof e == "function") return ea(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xs) return 11;
    if (e === ws) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ul(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") ea(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case xn:
      return en(n.children, l, o, t);
    case ys:
      i = 8, l |= 8;
      break;
    case xi:
      return e = Ve(12, n, t, l | 2), e.elementType = xi, e.lanes = o, e;
    case wi:
      return e = Ve(13, n, t, l), e.elementType = wi, e.lanes = o, e;
    case _i:
      return e = Ve(19, n, t, l), e.elementType = _i, e.lanes = o, e;
    case pc:
      return jo(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case dc:
          i = 10;
          break e;
        case fc:
          i = 9;
          break e;
        case xs:
          i = 11;
          break e;
        case ws:
          i = 14;
          break e;
        case Ct:
          i = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Ve(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function en(e, t, n, r) {
  return e = Ve(7, e, r, t), e.lanes = n, e;
}
function jo(e, t, n, r) {
  return e = Ve(22, e, r, t), e.elementType = pc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mi(e, t, n) {
  return e = Ve(6, e, null, t), e.lanes = n, e;
}
function hi(e, t, n) {
  return t = Ve(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ko(0), this.expirationTimes = Ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ko(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ta(e, t, n, r, l, o, i, u, c) {
  return e = new gh(e, t, n, u, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ve(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ds(o), e;
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: yn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lf(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
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
    if (Re(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, o, i, u, c) {
  return e = ta(n, r, !0, e, l, o, i, u, c), e.context = lf(null), n = e.current, r = je(), l = Dt(n), o = mt(r, l), o.callback = t ?? null, $t(n, o, l), e.current.lanes = l, Ur(e, l, r), Me(e, r), e;
}
function Co(e, t, n, r) {
  var l = t.current, o = je(), i = Dt(l);
  return n = lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(l, t, i), e !== null && (qe(e, l, i, o), bl(e, l, i)), i;
}
function po(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function na(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function yh() {
  return null;
}
var sf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ra(e) {
  this._internalRoot = e;
}
Eo.prototype.render = ra.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Co(e, t, null, null);
};
Eo.prototype.unmount = ra.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      Co(null, e, null, null);
    }), t[gt] = null;
  }
};
function Eo(e) {
  this._internalRoot = e;
}
Eo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Oc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++) ;
    Pt.splice(n, 0, e), n === 0 && Fc(e);
  }
};
function la(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Po(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vu() {
}
function xh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var m = po(i);
        o.call(m);
      };
    }
    var i = of(t, r, e, 0, null, !1, !1, "", Vu);
    return e._reactRootContainer = i, e[gt] = i.current, Lr(e.nodeType === 8 ? e.parentNode : e), on(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = po(c);
      u.call(m);
    };
  }
  var c = ta(e, 0, !1, null, null, !1, !1, "", Vu);
  return e._reactRootContainer = c, e[gt] = c.current, Lr(e.nodeType === 8 ? e.parentNode : e), on(function() {
    Co(t, c, n, r);
  }), c;
}
function zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var c = po(i);
        u.call(c);
      };
    }
    Co(t, i, e, l);
  } else i = xh(n, t, e, l, r);
  return po(i);
}
bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 && (Ss(t, n | 1), Me(t, ue()), !(U & 6) && (Hn = ue() + 500, Vt()));
      }
      break;
    case 13:
      on(function() {
        var r = vt(e, 1);
        if (r !== null) {
          var l = je();
          qe(r, e, 1, l);
        }
      }), na(e, 1);
  }
};
Ns = function(e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = je();
      qe(t, e, 134217728, n);
    }
    na(e, 134217728);
  }
};
$c = function(e) {
  if (e.tag === 13) {
    var t = Dt(e), n = vt(e, t);
    if (n !== null) {
      var r = je();
      qe(n, e, t, r);
    }
    na(e, t);
  }
};
Oc = function() {
  return B;
};
Dc = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
Li = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ni(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xo(r);
            if (!l) throw Error(k(90));
            hc(r), Ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      vc(e, n);
      break;
    case "select":
      t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
  }
};
Nc = Zs;
jc = on;
var wh = { usingClientEntryPoint: !1, Events: [Br, Sn, xo, kc, Sc, Zs] }, ur = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _h = { bundleType: ur.bundleType, version: ur.version, rendererPackageName: ur.rendererPackageName, rendererConfig: ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ur.findFiberByHostInstance || yh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber) try {
    ho = zl.inject(_h), st = zl;
  } catch {
  }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!la(t)) throw Error(k(200));
  return vh(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!la(e)) throw Error(k(299));
  var n = !1, r = "", l = sf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ta(e, 1, !1, null, null, n, !1, r, l), e[gt] = t.current, Lr(e.nodeType === 8 ? e.parentNode : e), new ra(t);
};
Fe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Pc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return on(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Po(t)) throw Error(k(200));
  return zo(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!la(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = sf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = of(t, null, e, 1, n ?? null, l, !1, o, i), e[gt] = t.current, Lr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Eo(t);
};
Fe.render = function(e, t, n) {
  if (!Po(t)) throw Error(k(200));
  return zo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Po(e)) throw Error(k(40));
  return e._reactRootContainer ? (on(function() {
    zo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[gt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = Zs;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Po(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return zo(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function af() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af);
    } catch (e) {
      console.error(e);
    }
}
af(), sc.exports = Fe;
var kh = sc.exports, uf, Wu = kh;
uf = Wu.createRoot, Wu.hydrateRoot;
async function ie(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const Qu = `
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
.ns-source-grid--audit { align-items:stretch; }
.ns-source-grid--audit .ns-audit-card { height:100%; min-width:0; display:flex; flex-direction:column; }
.ns-source-grid--audit .ns-card__head { align-items:flex-start; min-width:0; }
.ns-source-grid--audit .ns-card__body { min-height:0; flex:1 1 auto; overflow:visible; overflow-wrap:anywhere; }
.ns-source-grid--audit .ns-card__footer { margin-top:auto; }
.ns-row { display:flex; align-items:center; justify-content:flex-start; gap:14px; padding:16px 18px; }
.ns-row__main { min-width:0; display:grid; gap:5px; }
.ns-row__title { font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-source-grid--audit .ns-row__title { display:block; overflow:visible; white-space:normal; overflow-wrap:anywhere; font-size:1.0625rem; line-height:1.3; }
.ns-audit-card__selection { display:inline-flex; align-items:center; justify-content:center; width:32px; height:32px; border:1px solid var(--divider-color); border-radius:9px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); cursor:pointer; }
.ns-audit-card__selection input { width:17px; height:17px; margin:0; accent-color:var(--primary-color); cursor:pointer; }
.ns-audit-card.is-selectable { border-color:color-mix(in srgb, var(--primary-color) 52%, var(--divider-color)); }
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
.ns-custom-group-toolbar { max-width:var(--ns-page-width); margin:0 auto 14px; display:grid; gap:12px; }
.ns-custom-group-empty { width:100%; min-height:64px; display:grid; justify-items:center; gap:4px; padding:14px 16px; border:1px dashed var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:center; }
.ns-custom-group-empty__title { font-size:1rem; font-weight:700; }
.ns-custom-group-empty__meta { color:var(--secondary-text-color); font-size:.8rem; }
.ns-custom-group-control-panel { padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); }
.ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-member-button__tag--category { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-button__tag--area { background:color-mix(in srgb, #7b61ff 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap:10px; width:100%; }
.ns-custom-group-member-button { min-width:0; min-height:102px; display:grid; align-content:start; gap:7px; padding:13px; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); }
.ns-custom-group-member-button strong { min-width:0; overflow-wrap:anywhere; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button > span:last-child { color:var(--secondary-text-color); font-size:.8rem; overflow-wrap:anywhere; }
.ns-custom-group-manager__selection { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-top:16px; padding:11px 12px; border:1px solid color-mix(in srgb, var(--primary-color) 45%, var(--divider-color)); border-radius:var(--ns-radius-sm); background:color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color)); }
.ns-custom-group-manager__selection p { margin:0; flex:1 1 360px; color:var(--primary-text-color); font-size:.88rem; line-height:1.4; }
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
.ns-custom-group-manager__item-actions { flex-wrap:nowrap; }
.ns-notifications-toolbar { display:flex; align-items:center; justify-content:flex-end; gap:8px; flex-wrap:nowrap; }
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
@media (max-width: 900px) { .notify-studio { padding:14px; } .notify-studio__grid, .notify-studio__notifications-layout { grid-template-columns:1fr; } .notify-studio__notifications-activity { position:static; } .ns-form-grid, .ns-custom-group-manager__columns, .ns-assignment-dialog__columns { grid-template-columns:1fr; } .ns-custom-group-manager__create { grid-template-columns:1fr; align-items:stretch; } .ns-custom-group-manager__selection { align-items:flex-start; flex-direction:column; } .ns-notifications-toolbar { justify-content:flex-start; flex-wrap:wrap; } .ns-custom-group-manager__item-actions { flex-wrap:wrap; } .ns-field--full { grid-column:auto; } }
@media (max-width: 700px) { .ns-source-grid { grid-template-columns:1fr; } }
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } .ns-log-entry__head { align-items:flex-start; flex-direction:column; } .ns-custom-group-manager__item { align-items:flex-start; flex-direction:column; } .ns-assignment-dialog { max-height:calc(100vh - 24px); } }
`, Sh = { rendered: {}, errors: {} }, Nh = "/notify_studio_static/notify-studio-logo.png?v=0.1.17";
function cf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function cs(e, t) {
  const n = cf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function Gu(e) {
  const t = `Action ${e}`;
  return { id: cs(t, e), title: t, route: "event" };
}
function jh(e, t) {
  return `notify_studio_persistent_${cf(e || t).toLowerCase() || "notification"}`;
}
function gi(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function Yu(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Hl(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function Ku(e) {
  return e === !0;
}
function vi(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Ch(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Hl(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Eh(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function Ph(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zh({ hass: e }) {
  const t = S.useRef(e);
  t.current = e;
  const [n, r] = S.useState("audit"), [l, o] = S.useState(!!e), [i, u] = S.useState(!0), [c, m] = S.useState(null), [x, w] = S.useState([]), [g, N] = S.useState([]), [j, C] = S.useState([]), [V, p] = S.useState(!0), [d, h] = S.useState([]), [_, E] = S.useState(!1), [T, L] = S.useState(""), [R, Y] = S.useState([]), [b, pe] = S.useState([]), [Wt, wt] = S.useState(!1), [Wr, Qn] = S.useState(!1), [un, cn] = S.useState(""), [P, $] = S.useState("category"), [I, W] = S.useState(null), [ae, _t] = S.useState(null), [Ue, kt] = S.useState([]), [Ie, Qt] = S.useState(""), [Pe, To] = S.useState(null), [St, oa] = S.useState(!1), [Qr, df] = S.useState(""), [Gr, ff] = S.useState(""), [Yr, pf] = S.useState(""), [Kr, mf] = S.useState(""), [Gn, Lo] = S.useState(""), [ia, Xr] = S.useState(""), [dn, sa] = S.useState("A test notification from Notify Studio."), [ut, aa] = S.useState("Notify Studio"), [Yn, Ro] = S.useState(""), [Zr, ua] = S.useState(""), [Nt, ca] = S.useState(""), [Jr, da] = S.useState(""), [qr, fa] = S.useState(""), [el, pa] = S.useState(""), [tl, ma] = S.useState(""), [nl, ha] = S.useState(""), [rl, ga] = S.useState(""), [ll, va] = S.useState(""), [Mo, ya] = S.useState(!1), [ol, xa] = S.useState(!1), [fn, wa] = S.useState(!1), [tt, pn] = S.useState([]), [il, _a] = S.useState(""), [sl, ka] = S.useState(""), [al, Sa] = S.useState(""), [ul, Na] = S.useState(""), [cl, ja] = S.useState(""), [mn, Ca] = S.useState(Sh), [Kn, Ea] = S.useState(""), [Gt, hn] = S.useState(null), [Pa, Xn] = S.useState(""), [za, Zn] = S.useState(""), [Jn, qn] = S.useState(null), [hf, gf] = S.useState(""), Io = S.useRef(0), A = S.useMemo(
    () => x.find((s) => s.id === Gn) ?? null,
    [x, Gn]
  ), Ta = S.useMemo(
    () => g.filter((s) => s.kind === "script"),
    [g]
  ), bo = S.useMemo(
    () => T ? d.filter((s) => s.level === T) : d,
    [T, d]
  ), $o = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of b)
      for (const y of f.members) {
        const v = s.get(y.source_key) ?? [];
        v.push(f), s.set(y.source_key, v);
      }
    return s;
  }, [b]), Oo = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of g) s.set(f.entity_id, f);
    for (const f of Pe ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [g, Pe]), La = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of b) {
      let y = 0, v = 0, M = 0;
      for (const O of f.members) {
        if (!O.entity_id.startsWith("automation.")) continue;
        y += 1;
        const Q = Oo.get(O.entity_id);
        (Q == null ? void 0 : Q.enabled) === !0 ? v += 1 : (Q == null ? void 0 : Q.enabled) === !1 && (M += 1);
      }
      s.set(f.id, { automations: y, enabled: v, disabled: M });
    }
    return s;
  }, [b, Oo]), Do = S.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
    for (const v of Pe ?? []) {
      v.category && s.add(v.category);
      for (const M of v.labels ?? []) f.add(M);
      for (const M of v.notify_devices ?? v.notifiers) y.add(M);
    }
    return {
      categories: [...s].sort((v, M) => v.localeCompare(M)),
      labels: [...f].sort((v, M) => v.localeCompare(M)),
      devices: [...y].sort((v, M) => v.localeCompare(M))
    };
  }, [Pe]), Fo = S.useMemo(() => (Pe ?? []).filter((s) => {
    var f;
    if (Qr && s.source !== Qr || Gr && s.category !== Gr || Yr && !(s.labels ?? []).includes(Yr) || Kr && !(s.notify_devices ?? s.notifiers).includes(Kr)) return !1;
    if (Ie) {
      const y = `${s.source}:${s.id}`;
      if (!((f = $o.get(y)) != null && f.some((v) => v.id === Ie))) return !1;
    }
    return !0;
  }), [Gr, Kr, Yr, Qr, Ie, $o, Pe]), oe = S.useCallback((s) => {
    gf(s);
  }, []), K = S.useCallback((s, f) => {
    const y = s instanceof Error ? s.message : f;
    oe(y), window.alert(y);
  }, [oe]), Ra = S.useCallback(async () => {
    const s = t.current;
    if (!s) return;
    const [f, y, v, M, O] = await Promise.all([
      ie(s, "notify_studio/info"),
      ie(s, "notify_studio/list_notifiers"),
      ie(s, "notify_studio/list_runnables"),
      ie(s, "notify_studio/list_templates"),
      ie(s, "notify_studio/list_custom_groups")
    ]);
    m(f), w(y.services), N(v), Y(M), pe(O);
  }, []), vf = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      wt(!0);
      try {
        pe(await ie(s, "notify_studio/list_custom_groups"));
      } catch (f) {
        K(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        wt(!1);
      }
    }
  }, [K]), Ma = async () => {
    const s = t.current;
    if (!s) return;
    const f = un.trim();
    if (!f) {
      K(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }
    W("create");
    try {
      const y = await ie(s, "notify_studio/create_custom_group", {
        name: f,
        kind: P
      });
      pe((v) => [...v, y].sort((M, O) => M.kind === O.kind ? M.name.localeCompare(O.name) : M.kind.localeCompare(O.kind))), cn(""), oe(`Custom ${y.kind} “${y.name}” created.`);
    } catch (y) {
      K(y, "Unable to create the custom category or area.");
    } finally {
      W(null);
    }
  }, yf = async (s) => {
    var v;
    const f = t.current;
    if (!f) return;
    const y = (v = window.prompt(`Rename custom ${s.kind}:`, s.name)) == null ? void 0 : v.trim();
    if (!(!y || y === s.name))
      try {
        const M = await ie(f, "notify_studio/rename_custom_group", {
          group_id: s.id,
          name: y
        });
        pe((O) => O.map((Q) => Q.id === M.id ? M : Q)), oe(`Custom ${M.kind} renamed to “${M.name}”.`);
      } catch (M) {
        K(M, "Unable to rename the custom category or area.");
      }
  }, xf = async (s) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await ie(f, "notify_studio/delete_custom_group", { group_id: s.id }), pe((y) => y.filter((v) => v.id !== s.id)), Ie === s.id && Qt(""), oe(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (y) {
        K(y, "Unable to delete the custom category or area.");
      }
  }, er = (s) => `${s.source}:${s.id}`, xe = ae ? b.find((s) => s.id === ae) ?? null : null, wf = (s) => {
    _t(s.id), kt(s.members.map((f) => f.source_key)), oe(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, _f = () => {
    _t(null), kt([]), oe("Custom group selection cancelled.");
  }, kf = (s, f) => {
    const y = er(s);
    kt((v) => f ? [.../* @__PURE__ */ new Set([...v, y])] : v.filter((M) => M !== y));
  }, Sf = async () => {
    const s = t.current;
    if (!(!s || !xe)) {
      W("selection");
      try {
        const f = Pe ?? [], y = new Set(f.map(er)), v = new Set(Ue), M = xe.members.filter(
          (J) => !y.has(J.source_key)
        ), O = f.filter((J) => v.has(er(J))).map((J) => {
          var ee;
          return {
            source_key: er(J),
            name: J.name,
            entity_id: ((ee = J.runtime) == null ? void 0 : ee.entity_id) ?? ""
          };
        }), Q = await ie(s, "notify_studio/set_custom_group_members", {
          group_id: xe.id,
          members: [...M, ...O]
        });
        pe(Q), oe(`Saved ${O.length} notification source${O.length === 1 ? "" : "s"} in “${xe.name}”.`), _t(null), kt([]);
      } catch (f) {
        K(f, "Unable to save the selected custom category or area members.");
      } finally {
        W(null);
      }
    }
  }, Nf = async (s, f) => {
    const y = t.current;
    if (!y) return;
    const v = La.get(s.id), M = (v == null ? void 0 : v.automations) ?? 0;
    if (!M) {
      K(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const O = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${O} all ${M} automation${M === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      W("toggle");
      try {
        const Q = await ie(
          y,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: f }
        );
        oe(`${s.name}: ${Q.changed_entity_ids.length} automation${Q.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await dl();
      } catch (Q) {
        K(Q, `Unable to ${O} the automations in ${s.name}.`);
      } finally {
        W(null);
      }
    }
  }, tr = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      p(!0);
      try {
        const f = await ie(
          s,
          "notify_studio/list_recent_push_runnables"
        );
        C(f);
      } catch {
        C([]);
      } finally {
        p(!1);
      }
    }
  }, []), Ao = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      E(!0);
      try {
        const f = await ie(s, "notify_studio/list_logs");
        h(f);
      } catch (f) {
        K(f, "Unable to load Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, [K]), jf = async () => {
    const s = t.current;
    if (!(!s || !window.confirm("Clear the Notify Studio application logs?"))) {
      E(!0);
      try {
        const f = await ie(s, "notify_studio/clear_logs");
        h(f), oe("Notify Studio logs cleared.");
      } catch (f) {
        K(f, "Unable to clear Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, Ia = S.useCallback(async () => {
    try {
      await Ra(), To(null);
    } catch (s) {
      K(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [oe, Ra, K]);
  S.useEffect(() => {
    e && !l && o(!0);
  }, [e, l]), S.useEffect(() => {
    l && Ia();
  }, [l, Ia]), S.useEffect(() => {
    l && tr();
  }, [l, tr]), S.useEffect(() => {
    !Gn && x.length && Lo(x[0].id);
  }, [Gn, x]);
  const dl = S.useCallback(async () => {
    const s = t.current;
    if (!(!s || St)) {
      oa(!0);
      try {
        To(await ie(s, "notify_studio/scan_notify_usage")), oe("Notification audit complete.");
      } catch (f) {
        K(f, "The notification audit failed.");
      } finally {
        oa(!1);
      }
    }
  }, [oe, St, K]);
  S.useEffect(() => {
    n === "audit" && Pe === null && dl();
  }, [dl, n, Pe]), S.useEffect(() => {
    n === "audit" && tr();
  }, [tr, n]), S.useEffect(() => {
    n === "logs" && Ao();
  }, [Ao, n]);
  const fl = S.useCallback(() => {
    const s = {};
    if (Yn.trim() && (s.tag = Yn.trim()), Zr.trim() && (s.image = Zr.trim()), fn && tt.length && (s.actions = tt.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (A == null ? void 0 : A.platform) === "android")
      Nt.trim() && (s.clickAction = Nt.trim()), Jr.trim() && (s.subject = Jr.trim()), qr.trim() && (s.channel = qr.trim()), el && (s.importance = el), tl && (s.priority = tl), nl.trim() && (s.color = nl.trim()), rl.trim() && (s.notification_icon = rl.trim()), ll.trim() && (s.timeout = Number(ll)), Mo && (s.sticky = !0), ol && (s.persistent = !0);
    else if ((A == null ? void 0 : A.platform) === "ios") {
      Nt.trim() && (s.url = Nt.trim()), il.trim() && (s.subtitle = il.trim());
      const f = {};
      sl.trim() && (f.sound = sl.trim()), al.trim() && (f.badge = Number(al)), ul && (f["interruption-level"] = ul), cl.trim() && (f["thread-id"] = cl.trim()), Object.keys(f).length && (s.push = f);
    } else Nt.trim() && (s.url = Nt.trim());
    return {
      message: dn,
      ...ut.trim() ? { title: ut } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [fn, Zr, al, qr, nl, el, ul, dn, tt, rl, Nt, ol, tl, A == null ? void 0 : A.platform, sl, Mo, Jr, il, Yn, cl, ll, ut]), Uo = S.useCallback(() => fn ? tt.filter((s) => s.route !== "uri").map((s) => {
    var f, y;
    if (s.route === "script") {
      if (!((f = s.scriptEntityId) != null && f.trim()))
        throw new Error(`Choose a script for the “${s.title || "untitled"}” button.`);
      return {
        action: s.id,
        type: "script",
        script_entity_id: s.scriptEntityId.trim()
      };
    }
    if (s.route === "service") {
      if (!((y = s.service) != null && y.trim()))
        throw new Error(`Enter a Home Assistant action for the “${s.title || "untitled"}” button.`);
      return {
        action: s.id,
        type: "service",
        service: s.service.trim(),
        service_data: Ch(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [fn, tt]), Cf = S.useCallback(() => ({
    payload: fl(),
    action_handlers: Uo(),
    ...A ? { target_platform: A.platform } : {}
  }), [Uo, fl, A]), ba = () => A || (K(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  S.useEffect(() => {
    const s = t.current;
    if (!l || !s) return;
    const f = ++Io.current;
    let y = !1;
    const v = {
      message: dn,
      ...ut.trim() ? { title: ut } : {}
    }, M = window.setTimeout(() => {
      ie(s, "notify_studio/render_preview", { payload: v }).then((O) => {
        !y && f === Io.current && Ca(O);
      }).catch((O) => {
        if (y || f !== Io.current) return;
        const Q = O instanceof Error ? O.message : "Unable to render the current template.";
        Ca({ rendered: {}, errors: { message: Q } });
      });
    }, 250);
    return () => {
      y = !0, window.clearTimeout(M);
    };
  }, [l, dn, ut]);
  const Ef = async () => {
    const s = ba();
    if (!(!s || !t.current)) {
      hn("test");
      try {
        const f = await ie(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: fl()
        });
        oe(`Test notification sent to ${f.target}.`);
      } catch (f) {
        K(f, "The test notification could not be sent.");
      } finally {
        hn(null);
      }
    }
  }, Pf = async () => {
    const s = ba();
    if (!(!s || !t.current)) {
      hn("yaml");
      try {
        const f = await ie(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: fl(),
          action_handlers: Uo()
        });
        Ea(f.yaml), oe("YAML generated successfully.");
      } catch (f) {
        K(f, "Unable to generate YAML.");
      } finally {
        hn(null);
      }
    }
  }, zf = async () => {
    var f;
    if (!Kn.trim()) {
      K(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(Kn), s = !0;
      } catch {
      }
    if (!s) {
      const y = document.createElement("textarea");
      y.value = Kn, y.setAttribute("readonly", ""), y.style.position = "fixed", y.style.opacity = "0", y.style.pointerEvents = "none", document.body.appendChild(y), y.focus(), y.select();
      try {
        s = document.execCommand("copy");
      } finally {
        document.body.removeChild(y);
      }
    }
    if (s) {
      oe("Generated YAML copied to the clipboard.");
      return;
    }
    K(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, Tf = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Lf = (s) => {
    const f = s.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${f}?`)) return;
    const y = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    window.location.assign(`/config/${s.kind}/edit/${encodeURIComponent(String(y))}`);
  }, Rf = (s, f) => {
    N((y) => y.map((v) => v.entity_id === s ? { ...v, ...f } : v)), To((y) => (y == null ? void 0 : y.map((v) => {
      var M;
      return ((M = v.runtime) == null ? void 0 : M.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, $a = async (s, f) => {
    if (t.current)
      try {
        const y = await ie(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: f
        });
        Rf(y.entity_id, {
          state: y.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), oe(`${s.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (y) {
        K(y, "Unable to update that automation.");
      }
  }, Mf = async (s) => {
    if (!t.current) return;
    const f = s.kind === "automation" ? "automation" : "script", y = s.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", v = `Run “${s.name}” now? This queues its configured ${f} actions and may control real devices.${y}`;
    if (window.confirm(v))
      try {
        const M = await ie(t.current, "notify_studio/run_runnable", {
          entity_id: s.entity_id
        });
        oe(`${s.name} was queued for execution${M.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          tr();
        }, 900);
      } catch (M) {
        K(M, `Unable to run ${s.name}.`);
      }
  }, gn = (s, f) => {
    pn((y) => y.map((v, M) => M === s ? { ...v, ...f } : v));
  }, If = (s, f) => {
    pn((y) => y.map((v, M) => M !== s ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? cs(v.title, s + 1) : v.id
    }));
  }, bf = () => {
    const s = (A == null ? void 0 : A.platform) === "android" ? 3 : 10;
    pn((f) => f.length >= s ? f : [...f, Gu(f.length + 1)]);
  }, $f = (s) => {
    pn((f) => f.filter((y, v) => v !== s));
  }, Ho = S.useCallback((s) => {
    const f = s.payload, y = Hl(f.data) ? f.data : {};
    sa(te(f.message)), aa(te(f.title)), Ro(te(y.tag)), ua(te(y.image)), ca(te(y.clickAction) || te(y.url)), da(te(y.subject)), fa(te(y.channel)), pa(te(y.importance)), ma(te(y.priority)), ha(te(y.color)), ga(te(y.notification_icon)), va(y.timeout === void 0 ? "" : String(y.timeout)), ya(Ku(y.sticky)), xa(Ku(y.persistent)), _a(te(y.subtitle));
    const v = Hl(y.push) ? y.push : {};
    ka(te(v.sound)), Sa(v.badge === void 0 ? "" : String(v.badge)), Na(te(v["interruption-level"])), ja(te(v["thread-id"]));
    const M = new Map(s.action_handlers.map((J) => [J.action, J])), Q = (Array.isArray(y.actions) ? y.actions : []).filter(Hl).map((J, ee) => {
      const nt = te(J.action) || cs(`Action ${ee + 1}`, ee + 1), H = M.get(nt);
      let rt = "event";
      return nt === "URI" && te(J.uri) ? rt = "uri" : te(J.behavior) === "textInput" ? rt = "reply" : (H == null ? void 0 : H.type) === "script" ? rt = "script" : (H == null ? void 0 : H.type) === "service" && (rt = "service"), {
        id: nt,
        title: te(J.title) || `Action ${ee + 1}`,
        route: rt,
        uri: te(J.uri),
        scriptEntityId: te(H == null ? void 0 : H.script_entity_id),
        service: te(H == null ? void 0 : H.service),
        serviceData: H != null && H.service_data ? JSON.stringify(H.service_data, null, 2) : ""
      };
    });
    if (pn(Q), wa(Q.length > 0), Ea(""), s.target_platform && (A == null ? void 0 : A.platform) !== s.target_platform) {
      const J = x.find((ee) => ee.platform === s.target_platform);
      J && Lo(J.id);
    }
  }, [A == null ? void 0 : A.platform, x]), Of = (s) => {
    if (Xr(s), !s) return;
    const f = R.find((y) => y.id === s);
    f && (Ho(f.draft), oe(`Template “${f.name}” loaded into the composer.`));
  }, Df = () => {
    qn(null), Xn(ut.trim() || "New notification template"), Zn(""), r("templates");
  }, Ff = (s) => {
    qn(s.id), Xn(s.name), Zn(s.description), Ho(s.draft), r("templates"), oe(`Editing template “${s.name}”.`);
  }, Af = async () => {
    if (t.current) {
      hn("template");
      try {
        const s = await ie(t.current, "notify_studio/save_template", {
          template: {
            ...Jn ? { id: Jn } : {},
            name: Pa,
            description: za,
            draft: Cf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === s.id) === -1 ? [s, ...f] : f.map((v) => v.id === s.id ? s : v)), Xr(s.id), qn(s.id), oe(`Template “${s.name}” saved.`);
      } catch (s) {
        K(s, "Unable to save the template.");
      } finally {
        hn(null);
      }
    }
  }, Uf = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await ie(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((y) => y.id !== s.id)), ia === s.id && Xr(""), Jn === s.id && (qn(null), Xn(""), Zn("")), oe(`Template “${s.name}” deleted.`);
      } catch (f) {
        K(f, "Unable to delete the template.");
      }
  }, Hf = () => A ? A.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: Jr, onChange: (s) => da(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: qr, onChange: (s) => fa(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: el, onChange: (s) => pa(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: tl, onChange: (s) => ma(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: nl, onChange: (s) => ha(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: rl, onChange: (s) => ga(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ll, onChange: (s) => va(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Mo, onChange: (s) => ya(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: ol, onChange: (s) => {
        const f = s.target.checked;
        xa(f), f && !Yn.trim() && Ro(jh(ut, dn));
      } }),
      " Persistent notification"
    ] }),
    ol && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : A.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: il, onChange: (s) => _a(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: sl, onChange: (s) => ka(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: al, onChange: (s) => Sa(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: ul, onChange: (s) => Na(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: cl, onChange: (s) => ja(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, Bf = () => {
    if (!A || !["android", "ios"].includes(A.platform)) return null;
    const s = A.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: fn, onChange: (f) => {
          const y = f.target.checked;
          wa(y), y && !tt.length && pn([Gu(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      fn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ a.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-action-list", children: tt.map((f, y) => /* @__PURE__ */ a.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              "Button ",
              y + 1
            ] }),
            tt.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => $f(y), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (v) => gn(y, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (v) => If(y, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(D, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (v) => gn(y, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(D, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (v) => gn(y, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(D, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => gn(y, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              Ta.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (v) => gn(y, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => gn(y, { serviceData: v.target.value }), placeholder: `{
  "entity_id": "light.hall"
}` }) })
            ] })
          ] }),
          f.route === "event" && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence." }),
          f.route === "reply" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "The generated handler receives the submitted text as ",
            /* @__PURE__ */ a.jsx("code", { children: "trigger.event.data.reply_text" }),
            "."
          ] }),
          f.route === "uri" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "Android requires the Companion action key ",
            /* @__PURE__ */ a.jsx("code", { children: "URI" }),
            ". URI buttons do not generate an event handler."
          ] }),
          f.route === "script" && !Ta.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${f.id}:${y}`)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "ns-help", children: [
            tt.length,
            " of ",
            s,
            " available ",
            s === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          tt.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: bf, children: "Add button" })
        ] })
      ] })
    ] });
  }, Vf = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: vi(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), Wf = (s) => {
    var J;
    const f = er(s), y = (J = s.notify_devices) != null && J.length ? s.notify_devices : s.notifiers, v = s.runtime, M = $o.get(f) ?? [], O = xe !== null, Q = Ue.includes(f);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${O ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          O && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(xe == null ? void 0 : xe.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Q, onChange: (ee) => kf(s, ee.target.checked) }),
            /* @__PURE__ */ a.jsxs("span", { className: "ns-sr-only", children: [
              "Include ",
              s.name,
              " in ",
              xe == null ? void 0 : xe.name
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.source === "script" ? "script" : "automation"}`, children: s.source })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        Vf(v),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
          s.category && /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            s.category
          ] }),
          (s.labels ?? []).map((ee) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            ee
          ] }, `label:${ee}`)),
          y.map((ee) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            ee
          ] }, `device:${ee}`))
        ] }),
        M.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: M.map((ee) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${ee.kind}`, children: [
          ee.kind === "category" ? "Category" : "Area",
          ": ",
          ee.name
        ] }, ee.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void $a(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Mf(v), children: "Run test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Lf(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, Qf = () => b.length ? /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-control-panel", children: /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-member-grid", children: b.flatMap((s) => {
    const f = La.get(s.id) ?? { automations: 0, enabled: 0 }, v = !(f.automations > 0 && f.enabled === f.automations), M = v ? "Enable all" : "Disable all", O = s.kind === "category" ? "Category" : "Area", Q = [...s.members].sort((nt, H) => nt.name.localeCompare(H.name)), J = /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: "ns-custom-group-member-button ns-custom-group-member-button--all",
        onClick: () => void Nf(s, v),
        disabled: I === "toggle" || f.automations === 0,
        title: f.automations === 0 ? "Add notification sources with automation entities to use this bulk control." : `${M} automations in ${s.name}`,
        children: [
          /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.kind}`, children: [
            O,
            ": ",
            s.name
          ] }),
          /* @__PURE__ */ a.jsx("strong", { children: f.automations === 0 ? "No automations" : M }),
          /* @__PURE__ */ a.jsx("span", { children: f.automations === 0 ? "Add an automation source" : `All automations · ${f.enabled}/${f.automations} enabled` })
        ]
      },
      `${s.id}:all`
    ), ee = Q.map((nt) => {
      const H = Oo.get(nt.entity_id), rt = (H == null ? void 0 : H.kind) === "automation", Yf = rt ? H.enabled ? "Enabled" : "Disabled" : (H == null ? void 0 : H.kind) === "script" ? "Script" : "Unavailable";
      return /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "ns-custom-group-member-button",
          disabled: !rt,
          onClick: () => {
            rt && $a(H, !H.enabled);
          },
          title: rt ? `Toggle ${nt.name}` : (H == null ? void 0 : H.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.kind}`, children: [
              O,
              ": ",
              s.name
            ] }),
            /* @__PURE__ */ a.jsx("strong", { children: nt.name }),
            /* @__PURE__ */ a.jsx("span", { children: Yf })
          ]
        },
        `${s.id}:${nt.source_key}`
      );
    });
    return [J, ...ee];
  }) }) }) }) : /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => Qn(!0), children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
  ] }) }), Gf = () => {
    if (!Wr) return null;
    const s = b.filter((v) => v.kind === "category"), f = b.filter((v) => v.kind === "area"), y = (v, M) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !M.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: M.map((O) => {
        const Q = (xe == null ? void 0 : xe.id) === O.id;
        return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-manager__item", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("strong", { children: O.name }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              O.members.length,
              " assigned notification source",
              O.members.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions ns-custom-group-manager__item-actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${Q ? "ns-button--active" : ""}`, onClick: () => wf(O), disabled: I === "selection", children: Q ? "Selecting entities" : "Select entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void yf(O), disabled: I === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void xf(O), disabled: I === "selection", children: "Delete" })
          ] })
        ] }, O.id);
      }) })
    ] });
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-custom-group-manager", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Custom categories and areas" }),
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels." })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void vf(), disabled: Wt, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Qn(!1), disabled: I === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(D, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: un, onChange: (v) => cn(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Ma();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: P, onChange: (v) => $(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ma(), disabled: I === "create", children: I === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          y("category", s),
          y("area", f)
        ] }),
        xe && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__selection", children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
            /* @__PURE__ */ a.jsx("strong", { children: xe.name }),
            "."
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: _f, disabled: I === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Sf(), disabled: I === "selection", children: I === "selection" ? "Saving…" : `Save ${Ue.length} ${Ue.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: Qu }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: Qu }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: hf }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Nh, alt: "Notify Studio" }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h1", { children: "Notify Studio" }),
        /* @__PURE__ */ a.jsxs("p", { className: "notify-studio__subtitle", children: [
          "Build, test, template, and audit rich Companion notifications",
          c ? ` · v${c.version}` : ""
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("nav", { className: "notify-studio__tabs", "aria-label": "Notify Studio sections", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__tab-buttons", children: [
      /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ${n === "audit" ? "is-active" : ""}`, onClick: () => r("audit"), children: "Notifications" }),
      /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ${n === "compose" ? "is-active" : ""}`, onClick: () => r("compose"), children: "Compose" }),
      /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ${n === "templates" ? "is-active" : ""}`, onClick: () => r("templates"), children: "Templates" }),
      /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ${n === "logs" ? "is-active" : ""}`, onClick: () => r("logs"), children: "Logs" })
    ] }) }),
    n === "compose" && /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__grid", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notification composer" }),
          A && /* @__PURE__ */ a.jsx("span", { className: Yu(A.platform), children: gi(A.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(D, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: ia, onChange: (s) => Of(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            R.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Gn, onChange: (s) => Lo(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            gi(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          A == null ? void 0 : A.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: ut, onChange: (s) => aa(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Yn, onChange: (s) => Ro(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Nt, onChange: (s) => ca(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Zr, onChange: (s) => ua(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: dn, onChange: (s) => sa(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          Hf(),
          Bf(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Ef(), disabled: Gt !== null, children: Gt === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: Df, disabled: Gt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Pf(), disabled: Gt !== null, children: Gt === "yaml" ? "Generating…" : "Generate YAML" })
          ] })
        ] }) : /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "No ",
          /* @__PURE__ */ a.jsx("code", { children: "notify.mobile_app_*" }),
          " services were found. Connect or re-register a Home Assistant Companion App device, then reload this page."
        ] }) })
      ] }),
      /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__side", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Preview and YAML" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "The title and message preview updates automatically as you type. A test send validates the full selected-platform payload on the backend." }),
          /* @__PURE__ */ a.jsx(D, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: mn.errors.title ? `Error: ${mn.errors.title}` : mn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: mn.errors.message ? `Error: ${mn.errors.message}` : mn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              Kn && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void zf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Tf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: Kn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: Jn ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Pa, onChange: (s) => Xn(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: za, onChange: (s) => Zn(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void Af(), disabled: Gt !== null, children: Gt === "template" ? "Saving…" : Jn ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              qn(null), Xn(""), Zn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !R.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: R.map((s) => {
        var f, y;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: s.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: s.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: Yu(s.draft.target_platform), children: gi(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(y = s.draft.payload.data) == null ? void 0 : y.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              Xr(s.id), Ho(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Ff(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Uf(s), children: "Delete" })
          ] })
        ] }) }, s.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio, including run-test requests and backend errors. This in-memory list clears when Home Assistant restarts." })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Ao(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void jf(), disabled: _, children: "Clear logs" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(D, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: T, onChange: (s) => L(s.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
          /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
          /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
          /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
        ] }) }) }) })
      ] }),
      _ && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
      !_ && !bo.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
      !_ && bo.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: bo.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("span", { className: Eh(s.level), children: Ph(s.level) }),
            /* @__PURE__ */ a.jsx("strong", { children: s.message })
          ] }),
          /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: vi(s.timestamp) })
        ] }),
        s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
        s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
      ] }, `${s.timestamp}:${s.event}:${f}`)) })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      Qf(),
      Gf(),
      /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "ns-notifications-toolbar", children: [
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => Qn(!0), children: "Manage groups" }),
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void dl(), disabled: St, children: St ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Qr, onChange: (s) => df(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: Gr, onChange: (s) => ff(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Do.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: Yr, onChange: (s) => pf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Do.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: Kr, onChange: (s) => mf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Do.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: Ie, onChange: (s) => Qt(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                b.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) })
            ] }) })
          ] }),
          St && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !St && (Pe == null ? void 0 : Pe.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !St && Pe && Fo.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !St && Pe && Fo.length > 0 && /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "All notification sources" }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: Fo.map(Wf) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-recent-card", children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
            V && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
            !V && !j.length && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
            !V && j.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-recent-list", children: j.map((s) => /* @__PURE__ */ a.jsxs("article", { className: "ns-recent-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "ns-recent-item__head", children: [
                /* @__PURE__ */ a.jsx("strong", { children: s.name }),
                /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.kind}`, children: s.kind })
              ] }),
              /* @__PURE__ */ a.jsxs("span", { children: [
                "Triggered ",
                vi(s.last_triggered)
              ] })
            ] }, s.entity_id)) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function D({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ a.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    t
  ] });
}
class Th extends HTMLElement {
  constructor() {
    super(...arguments);
    Bo(this, "root");
    Bo(this, "currentHass");
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
    this.root || (this.root = uf(this)), this.root.render(/* @__PURE__ */ a.jsx(zh, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Th);
