var gf = Object.defineProperty;
var yf = (e, t, n) => t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pi = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n);
var zu = { exports: {} }, ei = {}, Ru = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = Symbol.for("react.element"), xf = Symbol.for("react.portal"), wf = Symbol.for("react.fragment"), kf = Symbol.for("react.strict_mode"), _f = Symbol.for("react.profiler"), Sf = Symbol.for("react.provider"), Nf = Symbol.for("react.context"), jf = Symbol.for("react.forward_ref"), Cf = Symbol.for("react.suspense"), Ef = Symbol.for("react.memo"), Pf = Symbol.for("react.lazy"), ya = Symbol.iterator;
function Lf(e) {
  return e === null || typeof e != "object" ? null : (e = ya && e[ya] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Iu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Mu = Object.assign, Ou = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ou, this.updater = n || Iu;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Du() {
}
Du.prototype = Fn.prototype;
function Jo(e, t, n) {
  this.props = e, this.context = t, this.refs = Ou, this.updater = n || Iu;
}
var qo = Jo.prototype = new Du();
qo.constructor = Jo;
Mu(qo, Fn.prototype);
qo.isPureReactComponent = !0;
var xa = Array.isArray, Fu = Object.prototype.hasOwnProperty, bo = { current: null }, $u = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uu(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Fu.call(t, r) && !$u.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var c = Array(u), p = 0; p < u; p++) c[p] = arguments[p + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Mr, type: e, key: i, ref: o, props: l, _owner: bo.current };
}
function Tf(e, t) {
  return { $$typeof: Mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function es(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wa = /\/+/g;
function Li(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zf("" + e.key) : t.toString(36);
}
function gl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Mr:
        case xf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Li(o, 0) : r, xa(l) ? (n = "", e != null && (n = e.replace(wa, "$&/") + "/"), gl(l, t, n, "", function(p) {
    return p;
  })) : l != null && (es(l) && (l = Tf(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(wa, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xa(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var c = r + Li(i, u);
    o += gl(i, t, n, c, l);
  }
  else if (c = Lf(e), typeof c == "function") for (e = c.call(e), u = 0; !(i = e.next()).done; ) i = i.value, c = r + Li(i, u++), o += gl(i, t, n, c, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return gl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Rf(e) {
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
var _e = { current: null }, yl = { transition: null }, If = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: yl, ReactCurrentOwner: bo };
function Au() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: el, forEach: function(e, t, n) {
  el(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return el(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return el(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!es(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Fn;
F.Fragment = wf;
F.Profiler = _f;
F.PureComponent = Jo;
F.StrictMode = kf;
F.Suspense = Cf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
F.act = Au;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Mu({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = bo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) Fu.call(t, c) && !$u.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var p = 0; p < c; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Mr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function(e) {
  return e = { $$typeof: Nf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Sf, _context: e }, e.Consumer = e;
};
F.createElement = Uu;
F.createFactory = function(e) {
  var t = Uu.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: jf, render: e };
};
F.isValidElement = es;
F.lazy = function(e) {
  return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: Rf };
};
F.memo = function(e, t) {
  return { $$typeof: Ef, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
F.unstable_act = Au;
F.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
F.useContext = function(e) {
  return _e.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
F.useId = function() {
  return _e.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return _e.current.useRef(e);
};
F.useState = function(e) {
  return _e.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return _e.current.useTransition();
};
F.version = "18.3.1";
Ru.exports = F;
var N = Ru.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mf = N, Of = Symbol.for("react.element"), Df = Symbol.for("react.fragment"), Ff = Object.prototype.hasOwnProperty, $f = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hu(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ff.call(t, r) && !Uf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Of, type: e, key: i, ref: o, props: l, _owner: $f.current };
}
ei.Fragment = Df;
ei.jsx = Hu;
ei.jsxs = Hu;
zu.exports = ei;
var s = zu.exports, Bu = { exports: {} }, Oe = {}, Vu = { exports: {} }, Wu = {};
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
  function t(P, O) {
    var D = P.length;
    P.push(O);
    e: for (; 0 < D; ) {
      var X = D - 1 >>> 1, Q = P[X];
      if (0 < l(Q, O)) P[X] = O, P[D] = Q, D = X;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0], D = P.pop();
    if (D !== O) {
      P[0] = D;
      e: for (var X = 0, Q = P.length, rn = Q >>> 1; X < rn; ) {
        var Te = 2 * (X + 1) - 1, Ht = P[Te], qe = Te + 1, it = P[qe];
        if (0 > l(Ht, D)) qe < Q && 0 > l(it, Ht) ? (P[X] = it, P[qe] = D, X = qe) : (P[X] = Ht, P[Te] = D, X = Te);
        else if (qe < Q && 0 > l(it, D)) P[X] = it, P[qe] = D, X = qe;
        else break e;
      }
    }
    return O;
  }
  function l(P, O) {
    var D = P.sortIndex - O.sortIndex;
    return D !== 0 ? D : P.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var c = [], p = [], g = 1, y = null, v = 3, S = !1, j = !1, C = !1, B = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var O = n(p); O !== null; ) {
      if (O.callback === null) r(p);
      else if (O.startTime <= P) r(p), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(p);
    }
  }
  function x(P) {
    if (C = !1, m(P), !j) if (n(c) !== null) j = !0, yt(E);
    else {
      var O = n(p);
      O !== null && An(x, O.startTime - P);
    }
  }
  function E(P, O) {
    j = !1, C && (C = !1, f(R), R = -1), S = !0;
    var D = v;
    try {
      for (m(O), y = n(c); y !== null && (!(y.expirationTime > O) || P && !ge()); ) {
        var X = y.callback;
        if (typeof X == "function") {
          y.callback = null, v = y.priorityLevel;
          var Q = X(y.expirationTime <= O);
          O = e.unstable_now(), typeof Q == "function" ? y.callback = Q : y === n(c) && r(c), m(O);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var rn = !0;
      else {
        var Te = n(p);
        Te !== null && An(x, Te.startTime - O), rn = !1;
      }
      return rn;
    } finally {
      y = null, v = D, S = !1;
    }
  }
  var T = !1, z = null, R = -1, W = 5, M = -1;
  function ge() {
    return !(e.unstable_now() - M < W);
  }
  function Ne() {
    if (z !== null) {
      var P = e.unstable_now();
      M = P;
      var O = !0;
      try {
        O = z(!0, P);
      } finally {
        O ? gt() : (T = !1, z = null);
      }
    } else T = !1;
  }
  var gt;
  if (typeof d == "function") gt = function() {
    d(Ne);
  };
  else if (typeof MessageChannel < "u") {
    var At = new MessageChannel(), vi = At.port2;
    At.port1.onmessage = Ne, gt = function() {
      vi.postMessage(null);
    };
  } else gt = function() {
    B(Ne, 0);
  };
  function yt(P) {
    z = P, T || (T = !0, gt());
  }
  function An(P, O) {
    R = B(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    j || S || (j = !0, yt(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(P) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = v;
    }
    var D = v;
    v = O;
    try {
      return P();
    } finally {
      v = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, O) {
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
    var D = v;
    v = P;
    try {
      return O();
    } finally {
      v = D;
    }
  }, e.unstable_scheduleCallback = function(P, O, D) {
    var X = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? X + D : X) : D = X, P) {
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
    return Q = D + Q, P = { id: g++, callback: O, priorityLevel: P, startTime: D, expirationTime: Q, sortIndex: -1 }, D > X ? (P.sortIndex = D, t(p, P), n(c) === null && P === n(p) && (C ? (f(R), R = -1) : C = !0, An(x, D - X))) : (P.sortIndex = Q, t(c, P), j || S || (j = !0, yt(E))), P;
  }, e.unstable_shouldYield = ge, e.unstable_wrapCallback = function(P) {
    var O = v;
    return function() {
      var D = v;
      v = O;
      try {
        return P.apply(this, arguments);
      } finally {
        v = D;
      }
    };
  };
})(Wu);
Vu.exports = Wu;
var Af = Vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hf = N, Me = Af;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Qu = /* @__PURE__ */ new Set(), gr = {};
function tn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (gr[e] = t, e = 0; e < t.length; e++) Qu.add(t[e]);
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ro = Object.prototype.hasOwnProperty, Bf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, _a = {};
function Vf(e) {
  return ro.call(_a, e) ? !0 : ro.call(ka, e) ? !1 : Bf.test(e) ? _a[e] = !0 : (ka[e] = !0, !1);
}
function Wf(e, t, n, r) {
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
function Qf(e, t, n, r) {
  if (t === null || typeof t > "u" || Wf(e, t, n, r)) return !0;
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
function Se(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ts = /[\-:]([a-z])/g;
function ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ts,
    ns
  );
  ce[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ts, ns);
  ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ts, ns);
  ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rs(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qf(t, n, l, r) && (n = null), r || l === null ? Vf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tl = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), ls = Symbol.for("react.strict_mode"), lo = Symbol.for("react.profiler"), Yu = Symbol.for("react.provider"), Ku = Symbol.for("react.context"), is = Symbol.for("react.forward_ref"), io = Symbol.for("react.suspense"), oo = Symbol.for("react.suspense_list"), os = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Gu = Symbol.for("react.offscreen"), Sa = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var b = Object.assign, Ti;
function lr(e) {
  if (Ti === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ti = t && t[1] || "";
  }
  return `
` + Ti + e;
}
var zi = !1;
function Ri(e, t) {
  if (!e || zi) return "";
  zi = !0;
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
      } catch (p) {
        var r = p;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (p) {
        r = p;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (var l = p.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var c = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    zi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function Yf(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ri(e.type, !1), e;
    case 11:
      return e = Ri(e.type.render, !1), e;
    case 1:
      return e = Ri(e.type, !0), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case fn:
      return "Portal";
    case lo:
      return "Profiler";
    case ls:
      return "StrictMode";
    case io:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ku:
      return (e.displayName || "Context") + ".Consumer";
    case Yu:
      return (e._context.displayName || "Context") + ".Provider";
    case is:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case os:
      return t = e.displayName || null, t !== null ? t : so(e.type) || "Memo";
    case kt:
      t = e._payload, e = e._init;
      try {
        return so(e(t));
      } catch {
      }
  }
  return null;
}
function Kf(e) {
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
      return so(t);
    case 8:
      return t === ls ? "StrictMode" : "Mode";
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
function Xu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gf(e) {
  var t = Xu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function nl(e) {
  e._valueTracker || (e._valueTracker = Gf(e));
}
function Zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Xu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Tl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return b({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Na(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ot(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ju(e, t) {
  t = t.checked, t != null && rs(e, "checked", t, !1);
}
function uo(e, t) {
  Ju(e, t);
  var n = Ot(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? co(e, t.type, n) : t.hasOwnProperty("defaultValue") && co(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ja(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function co(e, t, n) {
  (t !== "number" || Tl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Nn(e, t, n, r) {
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
function fo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return b({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ca(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function qu(e, t) {
  var n = Ot(t.value), r = Ot(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? bu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rl, ec = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (rl = rl || document.createElement("div"), rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = rl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ar = {
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
}, Xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function(e) {
  Xf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ar[t] = ar[e];
  });
});
function tc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px";
}
function nc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = tc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Zf = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function mo(e, t) {
  if (t) {
    if (Zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ho(e, t) {
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
var vo = null;
function ss(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var go = null, jn = null, Cn = null;
function Pa(e) {
  if (e = Fr(e)) {
    if (typeof go != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = ii(t), go(e.stateNode, e.type, t));
  }
}
function rc(e) {
  jn ? Cn ? Cn.push(e) : Cn = [e] : jn = e;
}
function lc() {
  if (jn) {
    var e = jn, t = Cn;
    if (Cn = jn = null, Pa(e), t) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function ic(e, t) {
  return e(t);
}
function oc() {
}
var Ii = !1;
function sc(e, t, n) {
  if (Ii) return e(t, n);
  Ii = !0;
  try {
    return ic(e, t, n);
  } finally {
    Ii = !1, (jn !== null || Cn !== null) && (oc(), lc());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ii(n);
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var yo = !1;
if (ft) try {
  var Jn = {};
  Object.defineProperty(Jn, "passive", { get: function() {
    yo = !0;
  } }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
  yo = !1;
}
function Jf(e, t, n, r, l, i, o, u, c) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (g) {
    this.onError(g);
  }
}
var ur = !1, zl = null, Rl = !1, xo = null, qf = { onError: function(e) {
  ur = !0, zl = e;
} };
function bf(e, t, n, r, l, i, o, u, c) {
  ur = !1, zl = null, Jf.apply(qf, arguments);
}
function ep(e, t, n, r, l, i, o, u, c) {
  if (bf.apply(this, arguments), ur) {
    if (ur) {
      var p = zl;
      ur = !1, zl = null;
    } else throw Error(w(198));
    Rl || (Rl = !0, xo = p);
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
function ac(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function La(e) {
  if (nn(e) !== e) throw Error(w(188));
}
function tp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = nn(e), t === null) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return La(l), e;
        if (i === r) return La(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function uc(e) {
  return e = tp(e), e !== null ? cc(e) : null;
}
function cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dc = Me.unstable_scheduleCallback, Ta = Me.unstable_cancelCallback, np = Me.unstable_shouldYield, rp = Me.unstable_requestPaint, ne = Me.unstable_now, lp = Me.unstable_getCurrentPriorityLevel, as = Me.unstable_ImmediatePriority, fc = Me.unstable_UserBlockingPriority, Il = Me.unstable_NormalPriority, ip = Me.unstable_LowPriority, pc = Me.unstable_IdlePriority, ti = null, rt = null;
function op(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function") try {
    rt.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xe = Math.clz32 ? Math.clz32 : up, sp = Math.log, ap = Math.LN2;
function up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sp(e) / ap | 0) | 0;
}
var ll = 64, il = 4194304;
function or(e) {
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
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = or(u) : (i &= o, i !== 0 && (r = or(i)));
  } else o = n & ~l, o !== 0 ? r = or(o) : i !== 0 && (r = or(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function cp(e, t) {
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
function dp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Xe(i), u = 1 << o, c = l[o];
    c === -1 ? (!(u & n) || u & r) && (l[o] = cp(u, t)) : c <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function wo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function mc() {
  var e = ll;
  return ll <<= 1, !(ll & 4194240) && (ll = 64), e;
}
function Mi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function fp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Xe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function us(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var H = 0;
function hc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var vc, cs, gc, yc, xc, ko = !1, ol = [], Et = null, Pt = null, Lt = null, wr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), St = [], pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function za(e, t) {
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
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      kr.delete(t.pointerId);
  }
}
function qn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Fr(t), t !== null && cs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function mp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Et = qn(Et, e, t, n, r, l), !0;
    case "dragenter":
      return Pt = qn(Pt, e, t, n, r, l), !0;
    case "mouseover":
      return Lt = qn(Lt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return wr.set(i, qn(wr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, kr.set(i, qn(kr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function wc(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ac(n), t !== null) {
          e.blockedOn = t, xc(e.priority, function() {
            gc(n);
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
function xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      vo = r, n.target.dispatchEvent(r), vo = null;
    } else return t = Fr(n), t !== null && cs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  xl(e) && n.delete(t);
}
function hp() {
  ko = !1, Et !== null && xl(Et) && (Et = null), Pt !== null && xl(Pt) && (Pt = null), Lt !== null && xl(Lt) && (Lt = null), wr.forEach(Ra), kr.forEach(Ra);
}
function bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ko || (ko = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, hp)));
}
function _r(e) {
  function t(l) {
    return bn(l, e);
  }
  if (0 < ol.length) {
    bn(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Et !== null && bn(Et, e), Pt !== null && bn(Pt, e), Lt !== null && bn(Lt, e), wr.forEach(t), kr.forEach(t), n = 0; n < St.length; n++) r = St[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && (n = St[0], n.blockedOn === null); ) wc(n), n.blockedOn === null && St.shift();
}
var En = vt.ReactCurrentBatchConfig, Ol = !0;
function vp(e, t, n, r) {
  var l = H, i = En.transition;
  En.transition = null;
  try {
    H = 1, ds(e, t, n, r);
  } finally {
    H = l, En.transition = i;
  }
}
function gp(e, t, n, r) {
  var l = H, i = En.transition;
  En.transition = null;
  try {
    H = 4, ds(e, t, n, r);
  } finally {
    H = l, En.transition = i;
  }
}
function ds(e, t, n, r) {
  if (Ol) {
    var l = _o(e, t, n, r);
    if (l === null) Wi(e, t, r, Dl, n), za(e, r);
    else if (mp(l, e, t, n, r)) r.stopPropagation();
    else if (za(e, r), t & 4 && -1 < pp.indexOf(e)) {
      for (; l !== null; ) {
        var i = Fr(l);
        if (i !== null && vc(i), i = _o(e, t, n, r), i === null && Wi(e, t, r, Dl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wi(e, t, r, null, n);
  }
}
var Dl = null;
function _o(e, t, n, r) {
  if (Dl = null, e = ss(r), e = Qt(e), e !== null) if (t = nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ac(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Dl = e, null;
}
function kc(e) {
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
      switch (lp()) {
        case as:
          return 1;
        case fc:
          return 4;
        case Il:
        case ip:
          return 16;
        case pc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null, fs = null, wl = null;
function _c() {
  if (wl) return wl;
  var e, t = fs, n = t.length, r, l = "value" in jt ? jt.value : jt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return wl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function kl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sl() {
  return !0;
}
function Ia() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? sl : Ia, this.isPropagationStopped = Ia, this;
  }
  return b(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sl);
  }, persist: function() {
  }, isPersistent: sl }), t;
}
var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ps = De($n), Dr = b({}, $n, { view: 0, detail: 0 }), yp = De(Dr), Oi, Di, er, ni = b({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ms, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (Oi = e.screenX - er.screenX, Di = e.screenY - er.screenY) : Di = Oi = 0, er = e), Oi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Di;
} }), Ma = De(ni), xp = b({}, ni, { dataTransfer: 0 }), wp = De(xp), kp = b({}, Dr, { relatedTarget: 0 }), Fi = De(kp), _p = b({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sp = De(_p), Np = b({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jp = De(Np), Cp = b({}, $n, { data: 0 }), Oa = De(Cp), Ep = {
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
}, Pp = {
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
}, Lp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1;
}
function ms() {
  return Tp;
}
var zp = b({}, Dr, { key: function(e) {
  if (e.key) {
    var t = Ep[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ms, charCode: function(e) {
  return e.type === "keypress" ? kl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rp = De(zp), Ip = b({}, ni, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Da = De(Ip), Mp = b({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ms }), Op = De(Mp), Dp = b({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = De(Dp), $p = b({}, ni, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Up = De($p), Ap = [9, 13, 27, 32], hs = ft && "CompositionEvent" in window, cr = null;
ft && "documentMode" in document && (cr = document.documentMode);
var Hp = ft && "TextEvent" in window && !cr, Sc = ft && (!hs || cr && 8 < cr && 11 >= cr), Fa = " ", $a = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return Ap.indexOf(t.keyCode) !== -1;
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
function jc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return jc(t);
    case "keypress":
      return t.which !== 32 ? null : ($a = !0, Fa);
    case "textInput":
      return e = t.data, e === Fa && $a ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (mn) return e === "compositionend" || !hs && Nc(e, t) ? (e = _c(), wl = fs = jt = null, mn = !1, e) : null;
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
      return Sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wp[e.type] : t === "textarea";
}
function Cc(e, t, n, r) {
  rc(r), t = Fl(t, "onChange"), 0 < t.length && (n = new ps("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var dr = null, Sr = null;
function Qp(e) {
  Fc(e, 0);
}
function ri(e) {
  var t = gn(e);
  if (Zu(t)) return e;
}
function Yp(e, t) {
  if (e === "change") return t;
}
var Ec = !1;
if (ft) {
  var $i;
  if (ft) {
    var Ui = "oninput" in document;
    if (!Ui) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"), Ui = typeof Aa.oninput == "function";
    }
    $i = Ui;
  } else $i = !1;
  Ec = $i && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  dr && (dr.detachEvent("onpropertychange", Pc), Sr = dr = null);
}
function Pc(e) {
  if (e.propertyName === "value" && ri(Sr)) {
    var t = [];
    Cc(t, Sr, e, ss(e)), sc(Qp, t);
  }
}
function Kp(e, t, n) {
  e === "focusin" ? (Ha(), dr = t, Sr = n, dr.attachEvent("onpropertychange", Pc)) : e === "focusout" && Ha();
}
function Gp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ri(Sr);
}
function Xp(e, t) {
  if (e === "click") return ri(t);
}
function Zp(e, t) {
  if (e === "input" || e === "change") return ri(t);
}
function Jp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Jp;
function Nr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ro.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Va(e, t) {
  var n = Ba(e);
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
    n = Ba(n);
  }
}
function Lc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Tc() {
  for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tl(e.document);
  }
  return t;
}
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qp(e) {
  var t = Tc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Lc(n.ownerDocument.documentElement, n)) {
    if (r !== null && vs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Va(n, i);
        var o = Va(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var bp = ft && "documentMode" in document && 11 >= document.documentMode, hn = null, So = null, fr = null, No = !1;
function Wa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  No || hn == null || hn !== Tl(r) || (r = hn, "selectionStart" in r && vs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fr && Nr(fr, r) || (fr = r, r = Fl(So, "onSelect"), 0 < r.length && (t = new ps("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
}
function al(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: al("Animation", "AnimationEnd"), animationiteration: al("Animation", "AnimationIteration"), animationstart: al("Animation", "AnimationStart"), transitionend: al("Transition", "TransitionEnd") }, Ai = {}, zc = {};
ft && (zc = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function li(e) {
  if (Ai[e]) return Ai[e];
  if (!vn[e]) return e;
  var t = vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zc) return Ai[e] = t[n];
  return e;
}
var Rc = li("animationend"), Ic = li("animationiteration"), Mc = li("animationstart"), Oc = li("transitionend"), Dc = /* @__PURE__ */ new Map(), Qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  Dc.set(e, t), tn(t, [e]);
}
for (var Hi = 0; Hi < Qa.length; Hi++) {
  var Bi = Qa[Hi], em = Bi.toLowerCase(), tm = Bi[0].toUpperCase() + Bi.slice(1);
  Ft(em, "on" + tm);
}
Ft(Rc, "onAnimationEnd");
Ft(Ic, "onAnimationIteration");
Ft(Mc, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Oc, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ep(r, t, void 0, e), e.currentTarget = null;
}
function Fc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], c = u.instance, p = u.currentTarget;
        if (u = u.listener, c !== i && l.isPropagationStopped()) break e;
        Ya(l, u, p), i = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], c = u.instance, p = u.currentTarget, u = u.listener, c !== i && l.isPropagationStopped()) break e;
        Ya(l, u, p), i = c;
      }
    }
  }
  if (Rl) throw e = xo, Rl = !1, xo = null, e;
}
function Y(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($c(t, e, 2, !1), n.add(r));
}
function Vi(e, t, n) {
  var r = 0;
  t && (r |= 4), $c(n, e, r, t);
}
var ul = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
  if (!e[ul]) {
    e[ul] = !0, Qu.forEach(function(n) {
      n !== "selectionchange" && (nm.has(n) || Vi(n, !1, e), Vi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ul] || (t[ul] = !0, Vi("selectionchange", !1, t));
  }
}
function $c(e, t, n, r) {
  switch (kc(t)) {
    case 1:
      var l = vp;
      break;
    case 4:
      l = gp;
      break;
    default:
      l = ds;
  }
  n = l.bind(null, t, n, e), l = void 0, !yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Wi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = Qt(u), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  sc(function() {
    var p = i, g = ss(n), y = [];
    e: {
      var v = Dc.get(e);
      if (v !== void 0) {
        var S = ps, j = e;
        switch (e) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Rp;
            break;
          case "focusin":
            j = "focus", S = Fi;
            break;
          case "focusout":
            j = "blur", S = Fi;
            break;
          case "beforeblur":
          case "afterblur":
            S = Fi;
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
            S = Ma;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = wp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Op;
            break;
          case Rc:
          case Ic:
          case Mc:
            S = Sp;
            break;
          case Oc:
            S = Fp;
            break;
          case "scroll":
            S = yp;
            break;
          case "wheel":
            S = Up;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Da;
        }
        var C = (t & 4) !== 0, B = !C && e === "scroll", f = C ? v !== null ? v + "Capture" : null : v;
        C = [];
        for (var d = p, m; d !== null; ) {
          m = d;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, f !== null && (x = xr(d, f), x != null && C.push(Cr(d, x, m)))), B) break;
          d = d.return;
        }
        0 < C.length && (v = new S(v, j, null, n, g), y.push({ event: v, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", v && n !== vo && (j = n.relatedTarget || n.fromElement) && (Qt(j) || j[pt])) break e;
        if ((S || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, S ? (j = n.relatedTarget || n.toElement, S = p, j = j ? Qt(j) : null, j !== null && (B = nn(j), j !== B || j.tag !== 5 && j.tag !== 6) && (j = null)) : (S = null, j = p), S !== j)) {
          if (C = Ma, x = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (C = Da, x = "onPointerLeave", f = "onPointerEnter", d = "pointer"), B = S == null ? v : gn(S), m = j == null ? v : gn(j), v = new C(x, d + "leave", S, n, g), v.target = B, v.relatedTarget = m, x = null, Qt(g) === p && (C = new C(f, d + "enter", j, n, g), C.target = m, C.relatedTarget = B, x = C), B = x, S && j) t: {
            for (C = S, f = j, d = 0, m = C; m; m = dn(m)) d++;
            for (m = 0, x = f; x; x = dn(x)) m++;
            for (; 0 < d - m; ) C = dn(C), d--;
            for (; 0 < m - d; ) f = dn(f), m--;
            for (; d--; ) {
              if (C === f || f !== null && C === f.alternate) break t;
              C = dn(C), f = dn(f);
            }
            C = null;
          }
          else C = null;
          S !== null && Ka(y, v, S, C, !1), j !== null && B !== null && Ka(y, B, j, C, !0);
        }
      }
      e: {
        if (v = p ? gn(p) : window, S = v.nodeName && v.nodeName.toLowerCase(), S === "select" || S === "input" && v.type === "file") var E = Yp;
        else if (Ua(v)) if (Ec) E = Zp;
        else {
          E = Gp;
          var T = Kp;
        }
        else (S = v.nodeName) && S.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = Xp);
        if (E && (E = E(e, p))) {
          Cc(y, E, n, g);
          break e;
        }
        T && T(e, v, p), e === "focusout" && (T = v._wrapperState) && T.controlled && v.type === "number" && co(v, "number", v.value);
      }
      switch (T = p ? gn(p) : window, e) {
        case "focusin":
          (Ua(T) || T.contentEditable === "true") && (hn = T, So = p, fr = null);
          break;
        case "focusout":
          fr = So = hn = null;
          break;
        case "mousedown":
          No = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          No = !1, Wa(y, n, g);
          break;
        case "selectionchange":
          if (bp) break;
        case "keydown":
        case "keyup":
          Wa(y, n, g);
      }
      var z;
      if (hs) e: {
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
      else mn ? Nc(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Sc && n.locale !== "ko" && (mn || R !== "onCompositionStart" ? R === "onCompositionEnd" && mn && (z = _c()) : (jt = g, fs = "value" in jt ? jt.value : jt.textContent, mn = !0)), T = Fl(p, R), 0 < T.length && (R = new Oa(R, e, null, n, g), y.push({ event: R, listeners: T }), z ? R.data = z : (z = jc(n), z !== null && (R.data = z)))), (z = Hp ? Bp(e, n) : Vp(e, n)) && (p = Fl(p, "onBeforeInput"), 0 < p.length && (g = new Oa("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: p }), g.data = z));
    }
    Fc(y, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = xr(e, n), i != null && r.unshift(Cr(e, i, l)), i = xr(e, t), i != null && r.push(Cr(e, i, l))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ka(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, p = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && p !== null && (u = p, l ? (c = xr(n, i), c != null && o.unshift(Cr(n, c, u))) : l || (c = xr(n, i), c != null && o.push(Cr(n, c, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var rm = /\r\n?/g, lm = /\u0000|\uFFFD/g;
function Ga(e) {
  return (typeof e == "string" ? e : "" + e).replace(rm, `
`).replace(lm, "");
}
function cl(e, t, n) {
  if (t = Ga(t), Ga(e) !== t && n) throw Error(w(425));
}
function $l() {
}
var jo = null, Co = null;
function Eo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0, im = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, om = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(sm);
} : Po;
function sm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Qi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), _r(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  _r(t);
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
function Za(e) {
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
var Un = Math.random().toString(36).slice(2), nt = "__reactFiber$" + Un, Er = "__reactProps$" + Un, pt = "__reactContainer$" + Un, Lo = "__reactEvents$" + Un, am = "__reactListeners$" + Un, um = "__reactHandles$" + Un;
function Qt(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Za(e); e !== null; ) {
        if (n = e[nt]) return n;
        e = Za(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Fr(e) {
  return e = e[nt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function ii(e) {
  return e[Er] || null;
}
var To = [], yn = -1;
function $t(e) {
  return { current: e };
}
function K(e) {
  0 > yn || (e.current = To[yn], To[yn] = null, yn--);
}
function V(e, t) {
  yn++, To[yn] = e.current, e.current = t;
}
var Dt = {}, ve = $t(Dt), Ee = $t(!1), Zt = Dt;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function Ul() {
  K(Ee), K(ve);
}
function Ja(e, t, n) {
  if (ve.current !== Dt) throw Error(w(168));
  V(ve, t), V(Ee, n);
}
function Uc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Kf(e) || "Unknown", l));
  return b({}, n, r);
}
function Al(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, Zt = ve.current, V(ve, e), V(Ee, Ee.current), !0;
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = Uc(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, K(Ee), K(ve), V(ve, e)) : K(Ee), V(Ee, n);
}
var at = null, oi = !1, Yi = !1;
function Ac(e) {
  at === null ? at = [e] : at.push(e);
}
function cm(e) {
  oi = !0, Ac(e);
}
function Ut() {
  if (!Yi && at !== null) {
    Yi = !0;
    var e = 0, t = H;
    try {
      var n = at;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, oi = !1;
    } catch (l) {
      throw at !== null && (at = at.slice(e + 1)), dc(as, Ut), l;
    } finally {
      H = t, Yi = !1;
    }
  }
  return null;
}
var xn = [], wn = 0, Hl = null, Bl = 0, Fe = [], $e = 0, Jt = null, ut = 1, ct = "";
function Vt(e, t) {
  xn[wn++] = Bl, xn[wn++] = Hl, Hl = e, Bl = t;
}
function Hc(e, t, n) {
  Fe[$e++] = ut, Fe[$e++] = ct, Fe[$e++] = Jt, Jt = e;
  var r = ut;
  e = ct;
  var l = 32 - Xe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Xe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, ut = 1 << 32 - Xe(t) + l | n << l | r, ct = i + e;
  } else ut = 1 << i | n << l | r, ct = e;
}
function gs(e) {
  e.return !== null && (Vt(e, 1), Hc(e, 1, 0));
}
function ys(e) {
  for (; e === Hl; ) Hl = xn[--wn], xn[wn] = null, Bl = xn[--wn], xn[wn] = null;
  for (; e === Jt; ) Jt = Fe[--$e], Fe[$e] = null, ct = Fe[--$e], Fe[$e] = null, ut = Fe[--$e], Fe[$e] = null;
}
var Ie = null, Re = null, G = !1, Ge = null;
function Bc(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Re = Tt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: ut, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (G) {
    var t = Re;
    if (t) {
      var n = t;
      if (!ba(e, t)) {
        if (zo(e)) throw Error(w(418));
        t = Tt(n.nextSibling);
        var r = Ie;
        t && ba(e, t) ? Bc(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ie = e);
      }
    } else {
      if (zo(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ie = e;
    }
  }
}
function eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function dl(e) {
  if (e !== Ie) return !1;
  if (!G) return eu(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps)), t && (t = Re)) {
    if (zo(e)) throw Vc(), Error(w(418));
    for (; t; ) Bc(e, t), t = Tt(t.nextSibling);
  }
  if (eu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Ie ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vc() {
  for (var e = Re; e; ) e = Tt(e.nextSibling);
}
function Rn() {
  Re = Ie = null, G = !1;
}
function xs(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var dm = vt.ReactCurrentBatchConfig;
function tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function fl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tu(e) {
  var t = e._init;
  return t(e._payload);
}
function Wc(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? (f.deletions = [d], f.flags |= 16) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function l(f, d) {
    return f = Mt(f, d), f.index = 0, f.sibling = null, f;
  }
  function i(f, d, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < d ? (f.flags |= 2, d) : m) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, d, m, x) {
    return d === null || d.tag !== 6 ? (d = bi(m, f.mode, x), d.return = f, d) : (d = l(d, m), d.return = f, d);
  }
  function c(f, d, m, x) {
    var E = m.type;
    return E === pn ? g(f, d, m.props.children, x, m.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kt && tu(E) === d.type) ? (x = l(d, m.props), x.ref = tr(f, d, m), x.return = f, x) : (x = Pl(m.type, m.key, m.props, null, f.mode, x), x.ref = tr(f, d, m), x.return = f, x);
  }
  function p(f, d, m, x) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = eo(m, f.mode, x), d.return = f, d) : (d = l(d, m.children || []), d.return = f, d);
  }
  function g(f, d, m, x, E) {
    return d === null || d.tag !== 7 ? (d = Xt(m, f.mode, x, E), d.return = f, d) : (d = l(d, m), d.return = f, d);
  }
  function y(f, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = bi("" + d, f.mode, m), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tl:
          return m = Pl(d.type, d.key, d.props, null, f.mode, m), m.ref = tr(f, null, d), m.return = f, m;
        case fn:
          return d = eo(d, f.mode, m), d.return = f, d;
        case kt:
          var x = d._init;
          return y(f, x(d._payload), m);
      }
      if (ir(d) || Zn(d)) return d = Xt(d, f.mode, m, null), d.return = f, d;
      fl(f, d);
    }
    return null;
  }
  function v(f, d, m, x) {
    var E = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : u(f, d, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case tl:
          return m.key === E ? c(f, d, m, x) : null;
        case fn:
          return m.key === E ? p(f, d, m, x) : null;
        case kt:
          return E = m._init, v(
            f,
            d,
            E(m._payload),
            x
          );
      }
      if (ir(m) || Zn(m)) return E !== null ? null : g(f, d, m, x, null);
      fl(f, m);
    }
    return null;
  }
  function S(f, d, m, x, E) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(m) || null, u(d, f, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case tl:
          return f = f.get(x.key === null ? m : x.key) || null, c(d, f, x, E);
        case fn:
          return f = f.get(x.key === null ? m : x.key) || null, p(d, f, x, E);
        case kt:
          var T = x._init;
          return S(f, d, m, T(x._payload), E);
      }
      if (ir(x) || Zn(x)) return f = f.get(m) || null, g(d, f, x, E, null);
      fl(d, x);
    }
    return null;
  }
  function j(f, d, m, x) {
    for (var E = null, T = null, z = d, R = d = 0, W = null; z !== null && R < m.length; R++) {
      z.index > R ? (W = z, z = null) : W = z.sibling;
      var M = v(f, z, m[R], x);
      if (M === null) {
        z === null && (z = W);
        break;
      }
      e && z && M.alternate === null && t(f, z), d = i(M, d, R), T === null ? E = M : T.sibling = M, T = M, z = W;
    }
    if (R === m.length) return n(f, z), G && Vt(f, R), E;
    if (z === null) {
      for (; R < m.length; R++) z = y(f, m[R], x), z !== null && (d = i(z, d, R), T === null ? E = z : T.sibling = z, T = z);
      return G && Vt(f, R), E;
    }
    for (z = r(f, z); R < m.length; R++) W = S(z, f, R, m[R], x), W !== null && (e && W.alternate !== null && z.delete(W.key === null ? R : W.key), d = i(W, d, R), T === null ? E = W : T.sibling = W, T = W);
    return e && z.forEach(function(ge) {
      return t(f, ge);
    }), G && Vt(f, R), E;
  }
  function C(f, d, m, x) {
    var E = Zn(m);
    if (typeof E != "function") throw Error(w(150));
    if (m = E.call(m), m == null) throw Error(w(151));
    for (var T = E = null, z = d, R = d = 0, W = null, M = m.next(); z !== null && !M.done; R++, M = m.next()) {
      z.index > R ? (W = z, z = null) : W = z.sibling;
      var ge = v(f, z, M.value, x);
      if (ge === null) {
        z === null && (z = W);
        break;
      }
      e && z && ge.alternate === null && t(f, z), d = i(ge, d, R), T === null ? E = ge : T.sibling = ge, T = ge, z = W;
    }
    if (M.done) return n(
      f,
      z
    ), G && Vt(f, R), E;
    if (z === null) {
      for (; !M.done; R++, M = m.next()) M = y(f, M.value, x), M !== null && (d = i(M, d, R), T === null ? E = M : T.sibling = M, T = M);
      return G && Vt(f, R), E;
    }
    for (z = r(f, z); !M.done; R++, M = m.next()) M = S(z, f, R, M.value, x), M !== null && (e && M.alternate !== null && z.delete(M.key === null ? R : M.key), d = i(M, d, R), T === null ? E = M : T.sibling = M, T = M);
    return e && z.forEach(function(Ne) {
      return t(f, Ne);
    }), G && Vt(f, R), E;
  }
  function B(f, d, m, x) {
    if (typeof m == "object" && m !== null && m.type === pn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case tl:
          e: {
            for (var E = m.key, T = d; T !== null; ) {
              if (T.key === E) {
                if (E = m.type, E === pn) {
                  if (T.tag === 7) {
                    n(f, T.sibling), d = l(T, m.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (T.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kt && tu(E) === T.type) {
                  n(f, T.sibling), d = l(T, m.props), d.ref = tr(f, T, m), d.return = f, f = d;
                  break e;
                }
                n(f, T);
                break;
              } else t(f, T);
              T = T.sibling;
            }
            m.type === pn ? (d = Xt(m.props.children, f.mode, x, m.key), d.return = f, f = d) : (x = Pl(m.type, m.key, m.props, null, f.mode, x), x.ref = tr(f, d, m), x.return = f, f = x);
          }
          return o(f);
        case fn:
          e: {
            for (T = m.key; d !== null; ) {
              if (d.key === T) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                n(f, d.sibling), d = l(d, m.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = eo(m, f.mode, x), d.return = f, f = d;
          }
          return o(f);
        case kt:
          return T = m._init, B(f, d, T(m._payload), x);
      }
      if (ir(m)) return j(f, d, m, x);
      if (Zn(m)) return C(f, d, m, x);
      fl(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, m), d.return = f, f = d) : (n(f, d), d = bi(m, f.mode, x), d.return = f, f = d), o(f)) : n(f, d);
  }
  return B;
}
var In = Wc(!0), Qc = Wc(!1), Vl = $t(null), Wl = null, kn = null, ws = null;
function ks() {
  ws = kn = Wl = null;
}
function _s(e) {
  var t = Vl.current;
  K(Vl), e._currentValue = t;
}
function Io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Pn(e, t) {
  Wl = e, ws = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (ws !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (Wl === null) throw Error(w(308));
    kn = e, Wl.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var Yt = null;
function Ss(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function Yc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ss(t)) : (n.next = l.next, l.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function Ns(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Kc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ss(r)) : (t.next = l.next, l.next = t), r.interleaved = t, mt(e, n);
}
function _l(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, us(e, n);
  }
}
function nu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ql(e, t, n, r) {
  var l = e.updateQueue;
  _t = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var c = u, p = c.next;
    c.next = null, o === null ? i = p : o.next = p, o = c;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== o && (u === null ? g.firstBaseUpdate = p : u.next = p, g.lastBaseUpdate = c));
  }
  if (i !== null) {
    var y = l.baseState;
    o = 0, g = p = c = null, u = i;
    do {
      var v = u.lane, S = u.eventTime;
      if ((r & v) === v) {
        g !== null && (g = g.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var j = e, C = u;
          switch (v = t, S = n, C.tag) {
            case 1:
              if (j = C.payload, typeof j == "function") {
                y = j.call(S, y, v);
                break e;
              }
              y = j;
              break e;
            case 3:
              j.flags = j.flags & -65537 | 128;
            case 0:
              if (j = C.payload, v = typeof j == "function" ? j.call(S, y, v) : j, v == null) break e;
              y = b({}, y, v);
              break e;
            case 2:
              _t = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
      } else S = { eventTime: S, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (p = g = S, c = y) : g = g.next = S, o |= v;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (c = y), l.baseState = c, l.firstBaseUpdate = p, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    bt |= o, e.lanes = o, e.memoizedState = y;
  }
}
function ru(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var $r = {}, lt = $t($r), Pr = $t($r), Lr = $t($r);
function Kt(e) {
  if (e === $r) throw Error(w(174));
  return e;
}
function js(e, t) {
  switch (V(Lr, t), V(Pr, e), V(lt, $r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : po(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = po(t, e);
  }
  K(lt), V(lt, t);
}
function Mn() {
  K(lt), K(Pr), K(Lr);
}
function Gc(e) {
  Kt(Lr.current);
  var t = Kt(lt.current), n = po(t, e.type);
  t !== n && (V(Pr, e), V(lt, n));
}
function Cs(e) {
  Pr.current === e && (K(lt), K(Pr));
}
var J = $t(0);
function Yl(e) {
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
var Ki = [];
function Es() {
  for (var e = 0; e < Ki.length; e++) Ki[e]._workInProgressVersionPrimary = null;
  Ki.length = 0;
}
var Sl = vt.ReactCurrentDispatcher, Gi = vt.ReactCurrentBatchConfig, qt = 0, q = null, le = null, oe = null, Kl = !1, pr = !1, Tr = 0, fm = 0;
function pe() {
  throw Error(w(321));
}
function Ps(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Ls(e, t, n, r, l, i) {
  if (qt = i, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sl.current = e === null || e.memoizedState === null ? vm : gm, e = n(r, l), pr) {
    i = 0;
    do {
      if (pr = !1, Tr = 0, 25 <= i) throw Error(w(301));
      i += 1, oe = le = null, t.updateQueue = null, Sl.current = ym, e = n(r, l);
    } while (pr);
  }
  if (Sl.current = Gl, t = le !== null && le.next !== null, qt = 0, oe = le = q = null, Kl = !1, t) throw Error(w(300));
  return e;
}
function Ts() {
  var e = Tr !== 0;
  return Tr = 0, e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? q.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Be() {
  if (le === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = oe === null ? q.memoizedState : oe.next;
  if (t !== null) oe = t, le = e;
  else {
    if (e === null) throw Error(w(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, oe === null ? q.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xi(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = le, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, c = null, p = i;
    do {
      var g = p.lane;
      if ((qt & g) === g) c !== null && (c = c.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var y = {
          lane: g,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        c === null ? (u = c = y, o = r) : c = c.next = y, q.lanes |= g, bt |= g;
      }
      p = p.next;
    } while (p !== null && p !== i);
    c === null ? o = r : c.next = u, Je(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, q.lanes |= i, bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zi(e) {
  var t = Be(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Je(i, t.memoizedState) || (Ce = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Xc() {
}
function Zc(e, t) {
  var n = q, r = Be(), l = t(), i = !Je(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ce = !0), r = r.queue, zs(bc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, qc.bind(null, n, r, l, t), void 0, null), se === null) throw Error(w(349));
    qt & 30 || Jc(n, t, l);
  }
  return l;
}
function Jc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ed(t) && td(e);
}
function bc(e, t, n) {
  return n(function() {
    ed(t) && td(e);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function td(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function lu(e) {
  var t = tt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = hm.bind(null, q, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nd() {
  return Be().memoizedState;
}
function Nl(e, t, n, r) {
  var l = tt();
  q.flags |= e, l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function si(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var o = le.memoizedState;
    if (i = o.destroy, r !== null && Ps(r, o.deps)) {
      l.memoizedState = Rr(t, n, i, r);
      return;
    }
  }
  q.flags |= e, l.memoizedState = Rr(1 | t, n, i, r);
}
function iu(e, t) {
  return Nl(8390656, 8, e, t);
}
function zs(e, t) {
  return si(2048, 8, e, t);
}
function rd(e, t) {
  return si(4, 2, e, t);
}
function ld(e, t) {
  return si(4, 4, e, t);
}
function id(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function od(e, t, n) {
  return n = n != null ? n.concat([e]) : null, si(4, 4, id.bind(null, t, e), n);
}
function Rs() {
}
function sd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ad(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ud(e, t, n) {
  return qt & 21 ? (Je(n, t) || (n = mc(), q.lanes |= n, bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function pm(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Gi.transition;
  Gi.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Gi.transition = r;
  }
}
function cd() {
  return Be().memoizedState;
}
function mm(e, t, n) {
  var r = It(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dd(e)) fd(t, n);
  else if (n = Yc(e, t, n, r), n !== null) {
    var l = ke();
    Ze(n, e, r, l), pd(n, t, r);
  }
}
function hm(e, t, n) {
  var r = It(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dd(e)) fd(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Je(u, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ss(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Yc(e, t, l, r), n !== null && (l = ke(), Ze(n, e, r, l), pd(n, t, r));
  }
}
function dd(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q;
}
function fd(e, t) {
  pr = Kl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, us(e, n);
  }
}
var Gl = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, vm = { readContext: He, useCallback: function(e, t) {
  return tt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: iu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Nl(
    4194308,
    4,
    id.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Nl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Nl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mm.bind(null, q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tt();
  return e = { current: e }, t.memoizedState = e;
}, useState: lu, useDebugValue: Rs, useDeferredValue: function(e) {
  return tt().memoizedState = e;
}, useTransition: function() {
  var e = lu(!1), t = e[0];
  return e = pm.bind(null, e[1]), tt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = q, l = tt();
  if (G) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(w(349));
    qt & 30 || Jc(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, iu(bc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Rr(9, qc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tt(), t = se.identifierPrefix;
  if (G) {
    var n = ct, r = ut;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gm = {
  readContext: He,
  useCallback: sd,
  useContext: He,
  useEffect: zs,
  useImperativeHandle: od,
  useInsertionEffect: rd,
  useLayoutEffect: ld,
  useMemo: ad,
  useReducer: Xi,
  useRef: nd,
  useState: function() {
    return Xi(zr);
  },
  useDebugValue: Rs,
  useDeferredValue: function(e) {
    var t = Be();
    return ud(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = Xi(zr)[0], t = Be().memoizedState;
    return [e, t];
  },
  useMutableSource: Xc,
  useSyncExternalStore: Zc,
  useId: cd,
  unstable_isNewReconciler: !1
}, ym = { readContext: He, useCallback: sd, useContext: He, useEffect: zs, useImperativeHandle: od, useInsertionEffect: rd, useLayoutEffect: ld, useMemo: ad, useReducer: Zi, useRef: nd, useState: function() {
  return Zi(zr);
}, useDebugValue: Rs, useDeferredValue: function(e) {
  var t = Be();
  return le === null ? t.memoizedState = e : ud(t, le.memoizedState, e);
}, useTransition: function() {
  var e = Zi(zr)[0], t = Be().memoizedState;
  return [e, t];
}, useMutableSource: Xc, useSyncExternalStore: Zc, useId: cd, unstable_isNewReconciler: !1 };
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = b({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ai = { isMounted: function(e) {
  return (e = e._reactInternals) ? nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = It(e), i = dt(r, l);
  i.payload = t, n != null && (i.callback = n), t = zt(e, i, l), t !== null && (Ze(t, e, l, r), _l(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = It(e), i = dt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = zt(e, i, l), t !== null && (Ze(t, e, l, r), _l(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = It(e), l = dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = zt(e, l, r), t !== null && (Ze(t, e, r, n), _l(t, e, r));
} };
function ou(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(l, i) : !0;
}
function md(e, t, n) {
  var r = !1, l = Dt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = He(i) : (l = Pe(t) ? Zt : ve.current, r = t.contextTypes, i = (r = r != null) ? zn(e, l) : Dt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ai, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function su(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ai.enqueueReplaceState(t, t.state, null);
}
function Oo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ns(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = He(i) : (i = Pe(t) ? Zt : ve.current, l.context = zn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Mo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ai.enqueueReplaceState(l, l.state, null), Ql(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ji(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Do(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xm = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
  n = dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zl || (Zl = !0, Yo = r), Do(e, t);
  }, n;
}
function vd(e, t, n) {
  n = dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Do(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Do(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Im.bind(null, e, t, n), t.then(e, e));
}
function uu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e);
}
var wm = vt.ReactCurrentOwner, Ce = !1;
function we(e, t, n, r) {
  t.child = e === null ? Qc(t, null, n, r) : In(t, e.child, n, r);
}
function du(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Pn(t, l), r = Ls(e, t, n, r, i, l), n = Ts(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (G && n && gs(t), t.flags |= 1, we(e, t, r, l), t.child);
}
function fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !As(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, gd(e, t, i, r, l)) : (e = Pl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Nr, n(o, r) && e.ref === t.ref) return ht(e, t, l);
  }
  return t.flags |= 1, e = Mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function gd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Nr(i, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, ht(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function yd(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(Sn, ze), ze |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(Sn, ze), ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, V(Sn, ze), ze |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, V(Sn, ze), ze |= r;
  return we(e, t, l, n), t.child;
}
function xd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Fo(e, t, n, r, l) {
  var i = Pe(n) ? Zt : ve.current;
  return i = zn(t, i), Pn(t, l), n = Ls(e, t, n, r, i, l), r = Ts(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (G && r && gs(t), t.flags |= 1, we(e, t, n, l), t.child);
}
function pu(e, t, n, r, l) {
  if (Pe(n)) {
    var i = !0;
    Al(t);
  } else i = !1;
  if (Pn(t, l), t.stateNode === null) jl(e, t), md(t, n, r), Oo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var c = o.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = He(p) : (p = Pe(n) ? Zt : ve.current, p = zn(t, p));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || c !== p) && su(t, o, r, p), _t = !1;
    var v = t.memoizedState;
    o.state = v, Ql(t, r, o, l), c = t.memoizedState, u !== r || v !== c || Ee.current || _t ? (typeof g == "function" && (Mo(t, n, g, r), c = t.memoizedState), (u = _t || ou(t, n, u, r, v, c, p)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = p, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Kc(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : Ye(t.type, u), o.props = p, y = t.pendingProps, v = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = He(c) : (c = Pe(n) ? Zt : ve.current, c = zn(t, c));
    var S = n.getDerivedStateFromProps;
    (g = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== y || v !== c) && su(t, o, r, c), _t = !1, v = t.memoizedState, o.state = v, Ql(t, r, o, l);
    var j = t.memoizedState;
    u !== y || v !== j || Ee.current || _t ? (typeof S == "function" && (Mo(t, n, S, r), j = t.memoizedState), (p = _t || ou(t, n, p, r, v, j, c) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, j, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, j, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = j), o.props = r, o.state = j, o.context = c, r = p) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $o(e, t, n, r, i, l);
}
function $o(e, t, n, r, l, i) {
  xd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && qa(t, n, !1), ht(e, t, i);
  r = t.stateNode, wm.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = In(t, e.child, null, i), t.child = In(t, null, u, i)) : we(e, t, u, i), t.memoizedState = r.state, l && qa(t, n, !0), t.child;
}
function wd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ja(e, t.context, !1), js(e, t.containerInfo);
}
function mu(e, t, n, r, l) {
  return Rn(), xs(l), t.flags |= 256, we(e, t, n, r), t.child;
}
var Uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ao(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kd(e, t, n) {
  var r = t.pendingProps, l = J.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(J, l & 1), e === null)
    return Ro(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = di(o, r, 0, null), e = Xt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ao(n), t.memoizedState = Uo, e) : Is(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return km(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Mt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Mt(u, i) : (i = Xt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ao(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Uo, r;
  }
  return i = e.child, e = i.sibling, r = Mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Is(e, t) {
  return t = di({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pl(e, t, n, r) {
  return r !== null && xs(r), In(t, e.child, null, n), e = Is(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function km(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ji(Error(w(422))), pl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = di({ mode: "visible", children: r.children }, l, 0, null), i = Xt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && In(t, e.child, null, o), t.child.memoizedState = Ao(o), t.memoizedState = Uo, i);
  if (!(t.mode & 1)) return pl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(w(419)), r = Ji(i, r, void 0), pl(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Ce || u) {
    if (r = se, r !== null) {
      switch (o & -o) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, mt(e, l), Ze(r, e, l, -1));
    }
    return Us(), r = Ji(Error(w(421))), pl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Re = Tt(l.nextSibling), Ie = t, G = !0, Ge = null, e !== null && (Fe[$e++] = ut, Fe[$e++] = ct, Fe[$e++] = Jt, ut = e.id, ct = e.overflow, Jt = t), t = Is(t, r.children), t.flags |= 4096, t);
}
function hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function qi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function _d(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (we(e, t, r.children, n), r = J.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hu(e, n, t);
      else if (e.tag === 19) hu(e, n, t);
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
  if (V(J, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Yl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), qi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Yl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      qi(t, !0, n, null, i);
      break;
    case "together":
      qi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function jl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function _m(e, t, n) {
  switch (t.tag) {
    case 3:
      wd(t), Rn();
      break;
    case 5:
      Gc(t);
      break;
    case 1:
      Pe(t.type) && Al(t);
      break;
    case 4:
      js(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(Vl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kd(e, t, n) : (V(J, J.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      V(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return _d(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(J, J.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yd(e, t, n);
  }
  return ht(e, t, n);
}
var Sd, Ho, Nd, jd;
Sd = function(e, t) {
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
Ho = function() {
};
Nd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Kt(lt.current);
    var i = null;
    switch (n) {
      case "input":
        l = ao(e, l), r = ao(e, r), i = [];
        break;
      case "select":
        l = b({}, l, { value: void 0 }), r = b({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = fo(e, l), r = fo(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $l);
    }
    mo(n, r);
    var o;
    n = null;
    for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
      var u = l[p];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (gr.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
    for (p in r) {
      var c = r[p];
      if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && c !== u && (c != null || u != null)) if (p === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && u[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (i || (i = []), i.push(
        p,
        n
      )), n = c;
      else p === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (i = i || []).push(p, c)) : p === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(p, "" + c) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (gr.hasOwnProperty(p) ? (c != null && p === "onScroll" && Y("scroll", e), i || u === c || (i = [])) : (i = i || []).push(p, c));
    }
    n && (i = i || []).push("style", n);
    var p = i;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
jd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!G) switch (e.tailMode) {
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Sm(e, t, n) {
  var r = t.pendingProps;
  switch (ys(t), t.tag) {
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
      return me(t), null;
    case 1:
      return Pe(t.type) && Ul(), me(t), null;
    case 3:
      return r = t.stateNode, Mn(), K(Ee), K(ve), Es(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Xo(Ge), Ge = null))), Ho(e, t), me(t), null;
    case 5:
      Cs(t);
      var l = Kt(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) Nd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return me(t), null;
        }
        if (e = Kt(lt.current), dl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[nt] = t, r[Er] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < sr.length; l++) Y(sr[l], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Na(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              Ca(r, i), Y("invalid", r);
          }
          mo(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && cl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && cl(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : gr.hasOwnProperty(o) && u != null && o === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              nl(r), ja(r, i, !0);
              break;
            case "textarea":
              nl(r), Ea(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $l);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[nt] = t, e[Er] = r, Sd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ho(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < sr.length; l++) Y(sr[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), l = r;
                break;
              case "details":
                Y("toggle", e), l = r;
                break;
              case "input":
                Na(e, r), l = ao(e, r), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = b({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                Ca(e, r), l = fo(e, r), Y("invalid", e);
                break;
              default:
                l = r;
            }
            mo(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var c = u[i];
              i === "style" ? nc(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && ec(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && yr(e, c) : typeof c == "number" && yr(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (gr.hasOwnProperty(i) ? c != null && i === "onScroll" && Y("scroll", e) : c != null && rs(e, i, c, o));
            }
            switch (n) {
              case "input":
                nl(e), ja(e, r, !1);
                break;
              case "textarea":
                nl(e), Ea(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Nn(e, !!r.multiple, i, !1) : r.defaultValue != null && Nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $l);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Kt(Lr.current), Kt(lt.current), dl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (i = r.nodeValue !== n) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              cl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && cl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (K(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Re !== null && t.mode & 1 && !(t.flags & 128)) Vc(), Rn(), t.flags |= 98560, i = !1;
        else if (i = dl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[nt] = t;
          } else Rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else Ge !== null && (Xo(Ge), Ge = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ie === 0 && (ie = 3) : Us())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Mn(), Ho(e, t), e === null && jr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return _s(t.type._context), me(t), null;
    case 17:
      return Pe(t.type) && Ul(), me(t), null;
    case 19:
      if (K(J), i = t.memoizedState, i === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) nr(i, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Yl(e), o !== null) {
            for (t.flags |= 128, nr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ne() > Dn && (t.flags |= 128, r = !0, nr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Yl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !G) return me(t), null;
        } else 2 * ne() - i.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128, r = !0, nr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = J.current, V(J, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return $s(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Nm(e, t) {
  switch (ys(t), t.tag) {
    case 1:
      return Pe(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Mn(), K(Ee), K(ve), Es(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cs(t), null;
    case 13:
      if (K(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        Rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(J), null;
    case 4:
      return Mn(), null;
    case 10:
      return _s(t.type._context), null;
    case 22:
    case 23:
      return $s(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ml = !1, he = !1, jm = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function Bo(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var vu = !1;
function Cm(e, t) {
  if (jo = Ol, e = Tc(), vs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, u = -1, c = -1, p = 0, g = 0, y = e, v = null;
        t: for (; ; ) {
          for (var S; y !== n || l !== 0 && y.nodeType !== 3 || (u = o + l), y !== i || r !== 0 && y.nodeType !== 3 || (c = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (S = y.firstChild) !== null; )
            v = y, y = S;
          for (; ; ) {
            if (y === e) break t;
            if (v === n && ++p === l && (u = o), v === i && ++g === r && (c = o), (S = y.nextSibling) !== null) break;
            y = v, v = y.parentNode;
          }
          y = S;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Co = { focusedElem: e, selectionRange: n }, Ol = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var j = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (j !== null) {
            var C = j.memoizedProps, B = j.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Ye(t.type, C), B);
            f.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(w(163));
      }
    } catch (x) {
      ee(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return j = vu, vu = !1, j;
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Bo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ui(e, t) {
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
function Vo(e) {
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
function Cd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[Er], delete t[Lo], delete t[am], delete t[um])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ed(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $l));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), e = e.sibling;
}
function Qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), e = e.sibling;
}
var ae = null, Ke = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) Pd(e, t, n), n = n.sibling;
}
function Pd(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function") try {
    rt.onCommitFiberUnmount(ti, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || _n(n, t);
    case 6:
      var r = ae, l = Ke;
      ae = null, wt(e, t, n), ae = r, Ke = l, ae !== null && (Ke ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ke ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Qi(e.parentNode, n) : e.nodeType === 1 && Qi(e, n), _r(e)) : Qi(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ke, ae = n.stateNode.containerInfo, Ke = !0, wt(e, t, n), ae = r, Ke = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Bo(n, t, o), l = l.next;
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (!he && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ee(n, t, u);
      }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, wt(e, t, n), he = r) : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jm()), t.forEach(function(r) {
      var l = Om.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ae = u.stateNode, Ke = !1;
            break e;
          case 3:
            ae = u.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            ae = u.stateNode.containerInfo, Ke = !0;
            break e;
        }
        u = u.return;
      }
      if (ae === null) throw Error(w(160));
      Pd(i, o, l), ae = null, Ke = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (p) {
      ee(l, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ld(t, e), t = t.sibling;
}
function Ld(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qe(t, e), et(e), r & 4) {
        try {
          mr(3, e, e.return), ui(3, e);
        } catch (C) {
          ee(e, e.return, C);
        }
        try {
          mr(5, e, e.return);
        } catch (C) {
          ee(e, e.return, C);
        }
      }
      break;
    case 1:
      Qe(t, e), et(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (Qe(t, e), et(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          yr(l, "");
        } catch (C) {
          ee(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Ju(l, i), ho(u, o);
          var p = ho(u, i);
          for (o = 0; o < c.length; o += 2) {
            var g = c[o], y = c[o + 1];
            g === "style" ? nc(l, y) : g === "dangerouslySetInnerHTML" ? ec(l, y) : g === "children" ? yr(l, y) : rs(l, g, y, p);
          }
          switch (u) {
            case "input":
              uo(l, i);
              break;
            case "textarea":
              qu(l, i);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? Nn(l, !!i.multiple, S, !1) : v !== !!i.multiple && (i.defaultValue != null ? Nn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Nn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Er] = i;
        } catch (C) {
          ee(e, e.return, C);
        }
      }
      break;
    case 6:
      if (Qe(t, e), et(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (C) {
          ee(e, e.return, C);
        }
      }
      break;
    case 3:
      if (Qe(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _r(t.containerInfo);
      } catch (C) {
        ee(e, e.return, C);
      }
      break;
    case 4:
      Qe(t, e), et(e);
      break;
    case 13:
      Qe(t, e), et(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ds = ne())), r & 4 && yu(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (p = he) || g, Qe(t, e), he = p) : Qe(t, e), et(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !g && e.mode & 1) for (L = e, g = e.child; g !== null; ) {
          for (y = L = g; L !== null; ) {
            switch (v = L, S = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mr(4, v, v.return);
                break;
              case 1:
                _n(v, v.return);
                var j = v.stateNode;
                if (typeof j.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, j.props = t.memoizedProps, j.state = t.memoizedState, j.componentWillUnmount();
                  } catch (C) {
                    ee(r, n, C);
                  }
                }
                break;
              case 5:
                _n(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  wu(y);
                  continue;
                }
            }
            S !== null ? (S.return = v, L = S) : wu(y);
          }
          g = g.sibling;
        }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                l = y.stateNode, p ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = y.stateNode, c = y.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = tc("display", o));
              } catch (C) {
                ee(e, e.return, C);
              }
            }
          } else if (y.tag === 6) {
            if (g === null) try {
              y.stateNode.nodeValue = p ? "" : y.memoizedProps;
            } catch (C) {
              ee(e, e.return, C);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            g === y && (g = null), y = y.return;
          }
          g === y && (g = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Qe(t, e), et(e), r & 4 && yu(e);
      break;
    case 21:
      break;
    default:
      Qe(
        t,
        e
      ), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ed(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (yr(l, ""), r.flags &= -33);
          var i = gu(e);
          Qo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = gu(e);
          Wo(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (c) {
      ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Em(e, t, n) {
  L = e, Td(e);
}
function Td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || ml;
      if (!o) {
        var u = l.alternate, c = u !== null && u.memoizedState !== null || he;
        u = ml;
        var p = he;
        if (ml = o, (he = c) && !p) for (L = l; L !== null; ) o = L, c = o.child, o.tag === 22 && o.memoizedState !== null ? ku(l) : c !== null ? (c.return = o, L = c) : ku(l);
        for (; i !== null; ) L = i, Td(i), i = i.sibling;
        L = l, ml = u, he = p;
      }
      xu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, L = i) : xu(e);
  }
}
function xu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || ui(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ru(t, i, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ru(t, o, n);
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
              var p = t.alternate;
              if (p !== null) {
                var g = p.memoizedState;
                if (g !== null) {
                  var y = g.dehydrated;
                  y !== null && _r(y);
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
            throw Error(w(163));
        }
        he || t.flags & 512 && Vo(t);
      } catch (v) {
        ee(t, t.return, v);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function wu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function ku(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ui(4, t);
          } catch (c) {
            ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ee(t, l, c);
            }
          }
          var i = t.return;
          try {
            Vo(t);
          } catch (c) {
            ee(t, i, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Vo(t);
          } catch (c) {
            ee(t, o, c);
          }
      }
    } catch (c) {
      ee(t, t.return, c);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, L = u;
      break;
    }
    L = t.return;
  }
}
var Pm = Math.ceil, Xl = vt.ReactCurrentDispatcher, Ms = vt.ReactCurrentOwner, Ae = vt.ReactCurrentBatchConfig, A = 0, se = null, re = null, ue = 0, ze = 0, Sn = $t(0), ie = 0, Ir = null, bt = 0, ci = 0, Os = 0, hr = null, je = null, Ds = 0, Dn = 1 / 0, st = null, Zl = !1, Yo = null, Rt = null, hl = !1, Ct = null, Jl = 0, vr = 0, Ko = null, Cl = -1, El = 0;
function ke() {
  return A & 6 ? ne() : Cl !== -1 ? Cl : Cl = ne();
}
function It(e) {
  return e.mode & 1 ? A & 2 && ue !== 0 ? ue & -ue : dm.transition !== null ? (El === 0 && (El = mc()), El) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : kc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < vr) throw vr = 0, Ko = null, Error(w(185));
  Or(e, n, r), (!(A & 2) || e !== se) && (e === se && (!(A & 2) && (ci |= n), ie === 4 && Nt(e, ue)), Le(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Dn = ne() + 500, oi && Ut()));
}
function Le(e, t) {
  var n = e.callbackNode;
  dp(e, t);
  var r = Ml(e, e === se ? ue : 0);
  if (r === 0) n !== null && Ta(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ta(n), t === 1) e.tag === 0 ? cm(_u.bind(null, e)) : Ac(_u.bind(null, e)), om(function() {
      !(A & 6) && Ut();
    }), n = null;
    else {
      switch (hc(r)) {
        case 1:
          n = as;
          break;
        case 4:
          n = fc;
          break;
        case 16:
          n = Il;
          break;
        case 536870912:
          n = pc;
          break;
        default:
          n = Il;
      }
      n = $d(n, zd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zd(e, t) {
  if (Cl = -1, El = 0, A & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (Ln() && e.callbackNode !== n) return null;
  var r = Ml(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ql(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var i = Id();
    (se !== e || ue !== t) && (st = null, Dn = ne() + 500, Gt(e, t));
    do
      try {
        zm();
        break;
      } catch (u) {
        Rd(e, u);
      }
    while (!0);
    ks(), Xl.current = i, A = l, re !== null ? t = 0 : (se = null, ue = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = wo(e), l !== 0 && (r = l, t = Go(e, l))), t === 1) throw n = Ir, Gt(e, 0), Nt(e, r), Le(e, ne()), n;
    if (t === 6) Nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Lm(l) && (t = ql(e, r), t === 2 && (i = wo(e), i !== 0 && (r = i, t = Go(e, i))), t === 1)) throw n = Ir, Gt(e, 0), Nt(e, r), Le(e, ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Wt(e, je, st);
          break;
        case 3:
          if (Nt(e, r), (r & 130023424) === r && (t = Ds + 500 - ne(), 10 < t)) {
            if (Ml(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Po(Wt.bind(null, e, je, st), t);
            break;
          }
          Wt(e, je, st);
          break;
        case 4:
          if (Nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Po(Wt.bind(null, e, je, st), r);
            break;
          }
          Wt(e, je, st);
          break;
        case 5:
          Wt(e, je, st);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Le(e, ne()), e.callbackNode === n ? zd.bind(null, e) : null;
}
function Go(e, t) {
  var n = hr;
  return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = ql(e, t), e !== 2 && (t = je, je = n, t !== null && Xo(t)), e;
}
function Xo(e) {
  je === null ? je = e : je.push.apply(je, e);
}
function Lm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Je(i(), l)) return !1;
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
  for (t &= ~Os, t &= ~ci, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _u(e) {
  if (A & 6) throw Error(w(327));
  Ln();
  var t = Ml(e, 0);
  if (!(t & 1)) return Le(e, ne()), null;
  var n = ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wo(e);
    r !== 0 && (t = r, n = Go(e, r));
  }
  if (n === 1) throw n = Ir, Gt(e, 0), Nt(e, t), Le(e, ne()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, je, st), Le(e, ne()), null;
}
function Fs(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Dn = ne() + 500, oi && Ut());
  }
}
function en(e) {
  Ct !== null && Ct.tag === 0 && !(A & 6) && Ln();
  var t = A;
  A |= 1;
  var n = Ae.transition, r = H;
  try {
    if (Ae.transition = null, H = 1, e) return e();
  } finally {
    H = r, Ae.transition = n, A = t, !(A & 6) && Ut();
  }
}
function $s() {
  ze = Sn.current, K(Sn);
}
function Gt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, im(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (ys(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ul();
        break;
      case 3:
        Mn(), K(Ee), K(ve), Es();
        break;
      case 5:
        Cs(r);
        break;
      case 4:
        Mn();
        break;
      case 13:
        K(J);
        break;
      case 19:
        K(J);
        break;
      case 10:
        _s(r.type._context);
        break;
      case 22:
      case 23:
        $s();
    }
    n = n.return;
  }
  if (se = e, re = e = Mt(e.current, null), ue = ze = t, ie = 0, Ir = null, Os = ci = bt = 0, je = hr = null, Yt !== null) {
    for (t = 0; t < Yt.length; t++) if (n = Yt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Yt = null;
  }
  return e;
}
function Rd(e, t) {
  do {
    var n = re;
    try {
      if (ks(), Sl.current = Gl, Kl) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Kl = !1;
      }
      if (qt = 0, oe = le = q = null, pr = !1, Tr = 0, Ms.current = null, n === null || n.return === null) {
        ie = 1, Ir = t, re = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, c = t;
        if (t = ue, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var p = c, g = u, y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var v = g.alternate;
            v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var S = uu(o);
          if (S !== null) {
            S.flags &= -257, cu(S, o, u, i, t), S.mode & 1 && au(i, p, t), t = S, c = p;
            var j = t.updateQueue;
            if (j === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(c), t.updateQueue = C;
            } else j.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              au(i, p, t), Us();
              break e;
            }
            c = Error(w(426));
          }
        } else if (G && u.mode & 1) {
          var B = uu(o);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), cu(B, o, u, i, t), xs(On(c, u));
            break e;
          }
        }
        i = c = On(c, u), ie !== 4 && (ie = 2), hr === null ? hr = [i] : hr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = hd(i, c, t);
              nu(i, f);
              break e;
            case 1:
              u = c;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Rt === null || !Rt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = vd(i, u, t);
                nu(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Od(n);
    } catch (E) {
      t = E, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Id() {
  var e = Xl.current;
  return Xl.current = Gl, e === null ? Gl : e;
}
function Us() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || !(bt & 268435455) && !(ci & 268435455) || Nt(se, ue);
}
function ql(e, t) {
  var n = A;
  A |= 2;
  var r = Id();
  (se !== e || ue !== t) && (st = null, Gt(e, t));
  do
    try {
      Tm();
      break;
    } catch (l) {
      Rd(e, l);
    }
  while (!0);
  if (ks(), A = n, Xl.current = r, re !== null) throw Error(w(261));
  return se = null, ue = 0, ie;
}
function Tm() {
  for (; re !== null; ) Md(re);
}
function zm() {
  for (; re !== null && !np(); ) Md(re);
}
function Md(e) {
  var t = Fd(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? Od(e) : re = t, Ms.current = null;
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Nm(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, re = null;
        return;
      }
    } else if (n = Sm(n, t, ze), n !== null) {
      re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Wt(e, t, n) {
  var r = H, l = Ae.transition;
  try {
    Ae.transition = null, H = 1, Rm(e, t, n, r);
  } finally {
    Ae.transition = l, H = r;
  }
  return null;
}
function Rm(e, t, n, r) {
  do
    Ln();
  while (Ct !== null);
  if (A & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (fp(e, i), e === se && (re = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hl || (hl = !0, $d(Il, function() {
    return Ln(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ae.transition, Ae.transition = null;
    var o = H;
    H = 1;
    var u = A;
    A |= 4, Ms.current = null, Cm(e, n), Ld(n, e), qp(Co), Ol = !!jo, Co = jo = null, e.current = n, Em(n), rp(), A = u, H = o, Ae.transition = i;
  } else e.current = n;
  if (hl && (hl = !1, Ct = e, Jl = l), i = e.pendingLanes, i === 0 && (Rt = null), op(n.stateNode), Le(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zl) throw Zl = !1, e = Yo, Yo = null, e;
  return Jl & 1 && e.tag !== 0 && Ln(), i = e.pendingLanes, i & 1 ? e === Ko ? vr++ : (vr = 0, Ko = e) : vr = 0, Ut(), null;
}
function Ln() {
  if (Ct !== null) {
    var e = hc(Jl), t = Ae.transition, n = H;
    try {
      if (Ae.transition = null, H = 16 > e ? 16 : e, Ct === null) var r = !1;
      else {
        if (e = Ct, Ct = null, Jl = 0, A & 6) throw Error(w(331));
        var l = A;
        for (A |= 4, L = e.current; L !== null; ) {
          var i = L, o = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var p = u[c];
                for (L = p; L !== null; ) {
                  var g = L;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(8, g, i);
                  }
                  var y = g.child;
                  if (y !== null) y.return = g, L = y;
                  else for (; L !== null; ) {
                    g = L;
                    var v = g.sibling, S = g.return;
                    if (Cd(g), g === p) {
                      L = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = S, L = v;
                      break;
                    }
                    L = S;
                  }
                }
              }
              var j = i.alternate;
              if (j !== null) {
                var C = j.child;
                if (C !== null) {
                  j.child = null;
                  do {
                    var B = C.sibling;
                    C.sibling = null, C = B;
                  } while (C !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, L = o;
          else e: for (; L !== null; ) {
            if (i = L, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                mr(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, L = f;
              break e;
            }
            L = i.return;
          }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          o = L;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, L = m;
          else e: for (o = d; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ui(9, u);
              }
            } catch (E) {
              ee(u, u.return, E);
            }
            if (u === o) {
              L = null;
              break e;
            }
            var x = u.sibling;
            if (x !== null) {
              x.return = u.return, L = x;
              break e;
            }
            L = u.return;
          }
        }
        if (A = l, Ut(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
          rt.onPostCommitFiberRoot(ti, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, Ae.transition = t;
    }
  }
  return !1;
}
function Su(e, t, n) {
  t = On(n, t), t = hd(e, t, 1), e = zt(e, t, 1), t = ke(), e !== null && (Or(e, 1, t), Le(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) Su(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Su(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
        e = On(n, e), e = vd(t, e, 1), t = zt(t, e, 1), e = ke(), t !== null && (Or(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (ie === 4 || ie === 3 && (ue & 130023424) === ue && 500 > ne() - Ds ? Gt(e, 0) : Os |= n), Le(e, t);
}
function Dd(e, t) {
  t === 0 && (e.mode & 1 ? (t = il, il <<= 1, !(il & 130023424) && (il = 4194304)) : t = 1);
  var n = ke();
  e = mt(e, t), e !== null && (Or(e, t, n), Le(e, n));
}
function Mm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dd(e, n);
}
function Om(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), Dd(e, n);
}
var Fd;
Fd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, _m(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, G && t.flags & 1048576 && Hc(t, Bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      jl(e, t), e = t.pendingProps;
      var l = zn(t, ve.current);
      Pn(t, n), l = Ls(null, t, r, e, l, n);
      var i = Ts();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (i = !0, Al(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ns(t), l.updater = ai, t.stateNode = l, l._reactInternals = t, Oo(t, r, e, n), t = $o(null, t, r, !0, i, n)) : (t.tag = 0, G && i && gs(t), we(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (jl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Fm(r), e = Ye(r, e), l) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = pu(null, t, r, e, n);
            break e;
          case 11:
            t = du(null, t, r, e, n);
            break e;
          case 14:
            t = fu(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Fo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), pu(e, t, r, l, n);
    case 3:
      e: {
        if (wd(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Kc(e, t), Ql(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = On(Error(w(423)), t), t = mu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = On(Error(w(424)), t), t = mu(e, t, r, n, l);
          break e;
        } else for (Re = Tt(t.stateNode.containerInfo.firstChild), Ie = t, G = !0, Ge = null, n = Qc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Rn(), r === l) {
            t = ht(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Gc(t), e === null && Ro(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Eo(r, l) ? o = null : i !== null && Eo(r, i) && (t.flags |= 32), xd(e, t), we(e, t, o, n), t.child;
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return kd(e, t, n);
    case 4:
      return js(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), du(e, t, r, l, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, V(Vl, r._currentValue), r._currentValue = o, i !== null) if (Je(i.value, o)) {
          if (i.children === l.children && !Ee.current) {
            t = ht(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (i.tag === 1) {
                  c = dt(-1, n & -n), c.tag = 2;
                  var p = i.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var g = p.pending;
                    g === null ? c.next = c : (c.next = g.next, g.next = c), p.pending = c;
                  }
                }
                i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), Io(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(w(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Io(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        we(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Pn(t, n), l = He(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ye(r, t.pendingProps), l = Ye(r.type, l), fu(e, t, r, l, n);
    case 15:
      return gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), jl(e, t), t.tag = 1, Pe(r) ? (e = !0, Al(t)) : e = !1, Pn(t, n), md(t, r, l), Oo(t, r, l, n), $o(null, t, r, !0, e, n);
    case 19:
      return _d(e, t, n);
    case 22:
      return yd(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function $d(e, t) {
  return dc(e, t);
}
function Dm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new Dm(e, t, n, r);
}
function As(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function") return As(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === is) return 11;
    if (e === os) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Pl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") As(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case pn:
      return Xt(n.children, l, i, t);
    case ls:
      o = 8, l |= 8;
      break;
    case lo:
      return e = Ue(12, n, t, l | 2), e.elementType = lo, e.lanes = i, e;
    case io:
      return e = Ue(13, n, t, l), e.elementType = io, e.lanes = i, e;
    case oo:
      return e = Ue(19, n, t, l), e.elementType = oo, e.lanes = i, e;
    case Gu:
      return di(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Yu:
          o = 10;
          break e;
        case Ku:
          o = 9;
          break e;
        case is:
          o = 11;
          break e;
        case os:
          o = 14;
          break e;
        case kt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Ue(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Xt(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function di(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = Gu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bi(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function eo(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $m(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mi(0), this.expirationTimes = Mi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Hs(e, t, n, r, l, i, o, u, c) {
  return e = new $m(e, t, n, u, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ue(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ns(i), e;
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ud(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(w(170));
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
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Uc(e, n, t);
  }
  return t;
}
function Ad(e, t, n, r, l, i, o, u, c) {
  return e = Hs(n, r, !0, e, l, i, o, u, c), e.context = Ud(null), n = e.current, r = ke(), l = It(n), i = dt(r, l), i.callback = t ?? null, zt(n, i, l), e.current.lanes = l, Or(e, l, r), Le(e, r), e;
}
function fi(e, t, n, r) {
  var l = t.current, i = ke(), o = It(l);
  return n = Ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(l, t, o), e !== null && (Ze(e, l, o, i), _l(e, l, o)), o;
}
function bl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Nu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bs(e, t) {
  Nu(e, t), (e = e.alternate) && Nu(e, t);
}
function Am() {
  return null;
}
var Hd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vs(e) {
  this._internalRoot = e;
}
pi.prototype.render = Vs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  fi(e, t, null, null);
};
pi.prototype.unmount = Vs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      fi(null, e, null, null);
    }), t[pt] = null;
  }
};
function pi(e) {
  this._internalRoot = e;
}
pi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++) ;
    St.splice(n, 0, e), n === 0 && wc(e);
  }
};
function Ws(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ju() {
}
function Hm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = bl(o);
        i.call(p);
      };
    }
    var o = Ad(t, r, e, 0, null, !1, !1, "", ju);
    return e._reactRootContainer = o, e[pt] = o.current, jr(e.nodeType === 8 ? e.parentNode : e), en(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = bl(c);
      u.call(p);
    };
  }
  var c = Hs(e, 0, !1, null, null, !1, !1, "", ju);
  return e._reactRootContainer = c, e[pt] = c.current, jr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    fi(t, c, n, r);
  }), c;
}
function hi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var c = bl(o);
        u.call(c);
      };
    }
    fi(t, o, e, l);
  } else o = Hm(n, t, e, l, r);
  return bl(o);
}
vc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (us(t, n | 1), Le(t, ne()), !(A & 6) && (Dn = ne() + 500, Ut()));
      }
      break;
    case 13:
      en(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var l = ke();
          Ze(r, e, 1, l);
        }
      }), Bs(e, 1);
  }
};
cs = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = ke();
      Ze(t, e, 134217728, n);
    }
    Bs(e, 134217728);
  }
};
gc = function(e) {
  if (e.tag === 13) {
    var t = It(e), n = mt(e, t);
    if (n !== null) {
      var r = ke();
      Ze(n, e, t, r);
    }
    Bs(e, t);
  }
};
yc = function() {
  return H;
};
xc = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
go = function(e, t, n) {
  switch (t) {
    case "input":
      if (uo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ii(r);
            if (!l) throw Error(w(90));
            Zu(r), uo(r, l);
          }
        }
      }
      break;
    case "textarea":
      qu(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
ic = Fs;
oc = en;
var Bm = { usingClientEntryPoint: !1, Events: [Fr, gn, ii, rc, lc, Fs] }, rr = { findFiberByHostInstance: Qt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vm = { bundleType: rr.bundleType, version: rr.version, rendererPackageName: rr.rendererPackageName, rendererConfig: rr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = uc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: rr.findFiberByHostInstance || Am, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    ti = vl.inject(Vm), rt = vl;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ws(t)) throw Error(w(200));
  return Um(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!Ws(e)) throw Error(w(299));
  var n = !1, r = "", l = Hd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Hs(e, 1, !1, null, null, n, !1, r, l), e[pt] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new Vs(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = uc(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return en(e);
};
Oe.hydrate = function(e, t, n) {
  if (!mi(t)) throw Error(w(200));
  return hi(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!Ws(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Hd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ad(t, null, e, 1, n ?? null, l, !1, i, o), e[pt] = t.current, jr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new pi(t);
};
Oe.render = function(e, t, n) {
  if (!mi(t)) throw Error(w(200));
  return hi(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!mi(e)) throw Error(w(40));
  return e._reactRootContainer ? (en(function() {
    hi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = Fs;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!mi(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return hi(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Bd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd);
    } catch (e) {
      console.error(e);
    }
}
Bd(), Bu.exports = Oe;
var Wm = Bu.exports, Vd, Cu = Wm;
Vd = Cu.createRoot, Cu.hydrateRoot;
async function xe(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const Eu = `
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
@media (max-width: 900px) { .notify-studio { padding:14px; } .notify-studio__grid, .notify-studio__notifications-layout { grid-template-columns:1fr; } .notify-studio__notifications-activity { position:static; } .ns-form-grid { grid-template-columns:1fr; } .ns-field--full { grid-column:auto; } }
@media (max-width: 700px) { .ns-source-grid { grid-template-columns:1fr; } }
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } .ns-log-entry__head { align-items:flex-start; flex-direction:column; } }
`, Qm = { rendered: {}, errors: {} }, Ym = "/notify_studio_static/notify-studio-logo.png?v=0.1.13";
function Wd(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function Zo(e, t) {
  const n = Wd(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function Pu(e) {
  const t = `Action ${e}`;
  return { id: Zo(t, e), title: t, route: "event" };
}
function Km(e, t) {
  return `notify_studio_persistent_${Wd(e || t).toLowerCase() || "notification"}`;
}
function to(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function Lu(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Ll(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Z(e) {
  return typeof e == "string" ? e : "";
}
function Tu(e) {
  return e === !0;
}
function no(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Gm(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Ll(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Xm(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function Zm(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Jm({ hass: e }) {
  const t = N.useRef(e);
  t.current = e;
  const [n, r] = N.useState("audit"), [l, i] = N.useState(!!e), [o, u] = N.useState(!0), [c, p] = N.useState(null), [g, y] = N.useState([]), [v, S] = N.useState([]), [j, C] = N.useState([]), [B, f] = N.useState(!0), [d, m] = N.useState([]), [x, E] = N.useState(!1), [T, z] = N.useState(""), [R, W] = N.useState([]), [M, ge] = N.useState(null), [Ne, gt] = N.useState(!1), [At, vi] = N.useState(""), [yt, An] = N.useState(""), [P, O] = N.useState(""), [D, X] = N.useState(""), [Q, rn] = N.useState("none"), [Te, Ht] = N.useState(""), [qe, it] = N.useState(""), [ln, Qs] = N.useState("A test notification from Notify Studio."), [ot, Ys] = N.useState("Notify Studio"), [Hn, gi] = N.useState(""), [Ur, Ks] = N.useState(""), [xt, Gs] = N.useState(""), [Ar, Xs] = N.useState(""), [Hr, Zs] = N.useState(""), [Br, Js] = N.useState(""), [Vr, qs] = N.useState(""), [Wr, bs] = N.useState(""), [Qr, ea] = N.useState(""), [Yr, ta] = N.useState(""), [yi, na] = N.useState(!1), [Kr, ra] = N.useState(!1), [on, la] = N.useState(!1), [be, sn] = N.useState([]), [Gr, ia] = N.useState(""), [Xr, oa] = N.useState(""), [Zr, sa] = N.useState(""), [Jr, aa] = N.useState(""), [qr, ua] = N.useState(""), [an, ca] = N.useState(Qm), [Bn, da] = N.useState(""), [Bt, un] = N.useState(null), [fa, Vn] = N.useState(""), [pa, Wn] = N.useState(""), [Qn, Yn] = N.useState(null), [Qd, Yd] = N.useState(""), xi = N.useRef(0), U = N.useMemo(
    () => g.find((a) => a.id === Te) ?? null,
    [g, Te]
  ), ma = N.useMemo(
    () => v.filter((a) => a.kind === "script"),
    [v]
  ), wi = N.useMemo(
    () => T ? d.filter((a) => a.level === T) : d,
    [T, d]
  ), ki = N.useMemo(() => {
    const a = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
    for (const _ of M ?? []) {
      _.category && a.add(_.category);
      for (const I of _.labels ?? []) h.add(I);
      for (const I of _.notify_devices ?? _.notifiers) k.add(I);
    }
    return {
      categories: [...a].sort((_, I) => _.localeCompare(I)),
      labels: [...h].sort((_, I) => _.localeCompare(I)),
      devices: [...k].sort((_, I) => _.localeCompare(I))
    };
  }, [M]), _i = N.useMemo(() => (M ?? []).filter((a) => !(At && a.source !== At || yt && a.category !== yt || P && !(a.labels ?? []).includes(P) || D && !(a.notify_devices ?? a.notifiers).includes(D))), [yt, D, P, At, M]), Kd = N.useMemo(() => {
    var k, _;
    const a = /* @__PURE__ */ new Map(), h = (I, te) => {
      const Ve = a.get(I) ?? [];
      Ve.push(te), a.set(I, Ve);
    };
    for (const I of _i)
      if (Q === "source") h(I.source === "script" ? "Scripts" : I.source === "automation" ? "Automations" : "Alerts", I);
      else if (Q === "category") h(I.category || "Uncategorised", I);
      else if (Q === "label") {
        const te = (k = I.labels) != null && k.length ? I.labels : ["No label"];
        for (const Ve of te) h(Ve, I);
      } else if (Q === "device") {
        const te = (_ = I.notify_devices) != null && _.length ? I.notify_devices : I.notifiers.length ? I.notifiers : ["No notify device"];
        for (const Ve of te) h(Ve, I);
      } else h("All notification sources", I);
    return [...a.entries()].map(([I, te]) => ({ title: I, items: te })).sort((I, te) => I.title.localeCompare(te.title));
  }, [Q, _i]), ye = N.useCallback((a) => {
    Yd(a);
  }, []), de = N.useCallback((a, h) => {
    const k = a instanceof Error ? a.message : h;
    ye(k), window.alert(k);
  }, [ye]), ha = N.useCallback(async () => {
    const a = t.current;
    if (!a) return;
    const [h, k, _, I] = await Promise.all([
      xe(a, "notify_studio/info"),
      xe(a, "notify_studio/list_notifiers"),
      xe(a, "notify_studio/list_runnables"),
      xe(a, "notify_studio/list_templates")
    ]);
    p(h), y(k.services), S(_), W(I);
  }, []), Kn = N.useCallback(async () => {
    const a = t.current;
    if (a) {
      f(!0);
      try {
        const h = await xe(
          a,
          "notify_studio/list_recent_push_runnables"
        );
        C(h);
      } catch {
        C([]);
      } finally {
        f(!1);
      }
    }
  }, []), Si = N.useCallback(async () => {
    const a = t.current;
    if (a) {
      E(!0);
      try {
        const h = await xe(a, "notify_studio/list_logs");
        m(h);
      } catch (h) {
        de(h, "Unable to load Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, [de]), Gd = async () => {
    const a = t.current;
    if (!(!a || !window.confirm("Clear the Notify Studio application logs?"))) {
      E(!0);
      try {
        const h = await xe(a, "notify_studio/clear_logs");
        m(h), ye("Notify Studio logs cleared.");
      } catch (h) {
        de(h, "Unable to clear Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, va = N.useCallback(async () => {
    try {
      await ha(), ge(null);
    } catch (a) {
      de(a, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [ye, ha, de]);
  N.useEffect(() => {
    e && !l && i(!0);
  }, [e, l]), N.useEffect(() => {
    l && va();
  }, [l, va]), N.useEffect(() => {
    l && Kn();
  }, [l, Kn]), N.useEffect(() => {
    !Te && g.length && Ht(g[0].id);
  }, [Te, g]);
  const Ni = N.useCallback(async () => {
    const a = t.current;
    if (!(!a || Ne)) {
      gt(!0);
      try {
        ge(await xe(a, "notify_studio/scan_notify_usage")), ye("Notification audit complete.");
      } catch (h) {
        de(h, "The notification audit failed.");
      } finally {
        gt(!1);
      }
    }
  }, [ye, Ne, de]);
  N.useEffect(() => {
    n === "audit" && M === null && Ni();
  }, [Ni, n, M]), N.useEffect(() => {
    n === "audit" && Kn();
  }, [Kn, n]), N.useEffect(() => {
    n === "logs" && Si();
  }, [Si, n]);
  const br = N.useCallback(() => {
    const a = {};
    if (Hn.trim() && (a.tag = Hn.trim()), Ur.trim() && (a.image = Ur.trim()), on && be.length && (a.actions = be.map((h) => h.route === "uri" ? {
      action: "URI",
      title: h.title,
      uri: h.uri ?? ""
    } : h.route === "reply" ? {
      action: h.id,
      title: h.title,
      behavior: "textInput"
    } : { action: h.id, title: h.title })), (U == null ? void 0 : U.platform) === "android")
      xt.trim() && (a.clickAction = xt.trim()), Ar.trim() && (a.subject = Ar.trim()), Hr.trim() && (a.channel = Hr.trim()), Br && (a.importance = Br), Vr && (a.priority = Vr), Wr.trim() && (a.color = Wr.trim()), Qr.trim() && (a.notification_icon = Qr.trim()), Yr.trim() && (a.timeout = Number(Yr)), yi && (a.sticky = !0), Kr && (a.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      xt.trim() && (a.url = xt.trim()), Gr.trim() && (a.subtitle = Gr.trim());
      const h = {};
      Xr.trim() && (h.sound = Xr.trim()), Zr.trim() && (h.badge = Number(Zr)), Jr && (h["interruption-level"] = Jr), qr.trim() && (h["thread-id"] = qr.trim()), Object.keys(h).length && (a.push = h);
    } else xt.trim() && (a.url = xt.trim());
    return {
      message: ln,
      ...ot.trim() ? { title: ot } : {},
      ...Object.keys(a).length ? { data: a } : {}
    };
  }, [on, Ur, Zr, Hr, Wr, Br, Jr, ln, be, Qr, xt, Kr, Vr, U == null ? void 0 : U.platform, Xr, yi, Ar, Gr, Hn, qr, Yr, ot]), ji = N.useCallback(() => on ? be.filter((a) => a.route !== "uri").map((a) => {
    var h, k;
    if (a.route === "script") {
      if (!((h = a.scriptEntityId) != null && h.trim()))
        throw new Error(`Choose a script for the “${a.title || "untitled"}” button.`);
      return {
        action: a.id,
        type: "script",
        script_entity_id: a.scriptEntityId.trim()
      };
    }
    if (a.route === "service") {
      if (!((k = a.service) != null && k.trim()))
        throw new Error(`Enter a Home Assistant action for the “${a.title || "untitled"}” button.`);
      return {
        action: a.id,
        type: "service",
        service: a.service.trim(),
        service_data: Gm(a.serviceData ?? "")
      };
    }
    return a.route === "reply" ? { action: a.id, type: "reply" } : { action: a.id, type: "event" };
  }) : [], [on, be]), Xd = N.useCallback(() => ({
    payload: br(),
    action_handlers: ji(),
    ...U ? { target_platform: U.platform } : {}
  }), [ji, br, U]), ga = () => U || (de(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  N.useEffect(() => {
    const a = t.current;
    if (!l || !a) return;
    const h = ++xi.current;
    let k = !1;
    const _ = {
      message: ln,
      ...ot.trim() ? { title: ot } : {}
    }, I = window.setTimeout(() => {
      xe(a, "notify_studio/render_preview", { payload: _ }).then((te) => {
        !k && h === xi.current && ca(te);
      }).catch((te) => {
        if (k || h !== xi.current) return;
        const Ve = te instanceof Error ? te.message : "Unable to render the current template.";
        ca({ rendered: {}, errors: { message: Ve } });
      });
    }, 250);
    return () => {
      k = !0, window.clearTimeout(I);
    };
  }, [l, ln, ot]);
  const Zd = async () => {
    const a = ga();
    if (!(!a || !t.current)) {
      un("test");
      try {
        const h = await xe(t.current, "notify_studio/send_test", {
          target_id: a.id,
          payload: br()
        });
        ye(`Test notification sent to ${h.target}.`);
      } catch (h) {
        de(h, "The test notification could not be sent.");
      } finally {
        un(null);
      }
    }
  }, Jd = async () => {
    const a = ga();
    if (!(!a || !t.current)) {
      un("yaml");
      try {
        const h = await xe(t.current, "notify_studio/generate_yaml", {
          target_id: a.id,
          payload: br(),
          action_handlers: ji()
        });
        da(h.yaml), ye("YAML generated successfully.");
      } catch (h) {
        de(h, "Unable to generate YAML.");
      } finally {
        un(null);
      }
    }
  }, qd = async () => {
    var h;
    if (!Bn.trim()) {
      de(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let a = !1;
    if (window.isSecureContext && ((h = navigator.clipboard) != null && h.writeText))
      try {
        await navigator.clipboard.writeText(Bn), a = !0;
      } catch {
      }
    if (!a) {
      const k = document.createElement("textarea");
      k.value = Bn, k.setAttribute("readonly", ""), k.style.position = "fixed", k.style.opacity = "0", k.style.pointerEvents = "none", document.body.appendChild(k), k.focus(), k.select();
      try {
        a = document.execCommand("copy");
      } finally {
        document.body.removeChild(k);
      }
    }
    if (a) {
      ye("Generated YAML copied to the clipboard.");
      return;
    }
    de(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, bd = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, ef = (a) => {
    const h = a.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${h}?`)) return;
    const k = a.id ?? a.entity_id.replace(`${a.kind}.`, "");
    window.location.assign(`/config/${a.kind}/edit/${encodeURIComponent(String(k))}`);
  }, tf = (a, h) => {
    S((k) => k.map((_) => _.entity_id === a ? { ..._, ...h } : _)), ge((k) => (k == null ? void 0 : k.map((_) => {
      var I;
      return ((I = _.runtime) == null ? void 0 : I.entity_id) === a ? { ..._, runtime: { ..._.runtime, ...h } } : _;
    })) ?? null);
  }, nf = async (a, h) => {
    if (t.current)
      try {
        const k = await xe(t.current, "notify_studio/toggle_automation", {
          entity_id: a.entity_id,
          enabled: h
        });
        tf(k.entity_id, {
          state: k.state,
          enabled: h,
          status: h ? "enabled" : "disabled"
        }), ye(`${a.name} is now ${h ? "enabled" : "disabled"}.`);
      } catch (k) {
        de(k, "Unable to update that automation.");
      }
  }, rf = async (a) => {
    if (!t.current) return;
    const h = a.kind === "automation" ? "automation" : "script", k = a.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", _ = `Run “${a.name}” now? This queues its configured ${h} actions and may control real devices.${k}`;
    if (window.confirm(_))
      try {
        const I = await xe(t.current, "notify_studio/run_runnable", {
          entity_id: a.entity_id
        });
        ye(`${a.name} was queued for execution${I.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          Kn();
        }, 900);
      } catch (I) {
        de(I, `Unable to run ${a.name}.`);
      }
  }, cn = (a, h) => {
    sn((k) => k.map((_, I) => I === a ? { ..._, ...h } : _));
  }, lf = (a, h) => {
    sn((k) => k.map((_, I) => I !== a ? _ : {
      ..._,
      route: h,
      id: h === "uri" ? "URI" : _.id === "URI" ? Zo(_.title, a + 1) : _.id
    }));
  }, of = () => {
    const a = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    sn((h) => h.length >= a ? h : [...h, Pu(h.length + 1)]);
  }, sf = (a) => {
    sn((h) => h.filter((k, _) => _ !== a));
  }, Ci = N.useCallback((a) => {
    const h = a.payload, k = Ll(h.data) ? h.data : {};
    Qs(Z(h.message)), Ys(Z(h.title)), gi(Z(k.tag)), Ks(Z(k.image)), Gs(Z(k.clickAction) || Z(k.url)), Xs(Z(k.subject)), Zs(Z(k.channel)), Js(Z(k.importance)), qs(Z(k.priority)), bs(Z(k.color)), ea(Z(k.notification_icon)), ta(k.timeout === void 0 ? "" : String(k.timeout)), na(Tu(k.sticky)), ra(Tu(k.persistent)), ia(Z(k.subtitle));
    const _ = Ll(k.push) ? k.push : {};
    oa(Z(_.sound)), sa(_.badge === void 0 ? "" : String(_.badge)), aa(Z(_["interruption-level"])), ua(Z(_["thread-id"]));
    const I = new Map(a.action_handlers.map((We) => [We.action, We])), Ve = (Array.isArray(k.actions) ? k.actions : []).filter(Ll).map((We, Gn) => {
      const Ei = Z(We.action) || Zo(`Action ${Gn + 1}`, Gn + 1), fe = I.get(Ei);
      let Xn = "event";
      return Ei === "URI" && Z(We.uri) ? Xn = "uri" : Z(We.behavior) === "textInput" ? Xn = "reply" : (fe == null ? void 0 : fe.type) === "script" ? Xn = "script" : (fe == null ? void 0 : fe.type) === "service" && (Xn = "service"), {
        id: Ei,
        title: Z(We.title) || `Action ${Gn + 1}`,
        route: Xn,
        uri: Z(We.uri),
        scriptEntityId: Z(fe == null ? void 0 : fe.script_entity_id),
        service: Z(fe == null ? void 0 : fe.service),
        serviceData: fe != null && fe.service_data ? JSON.stringify(fe.service_data, null, 2) : ""
      };
    });
    if (sn(Ve), la(Ve.length > 0), da(""), a.target_platform && (U == null ? void 0 : U.platform) !== a.target_platform) {
      const We = g.find((Gn) => Gn.platform === a.target_platform);
      We && Ht(We.id);
    }
  }, [U == null ? void 0 : U.platform, g]), af = (a) => {
    if (it(a), !a) return;
    const h = R.find((k) => k.id === a);
    h && (Ci(h.draft), ye(`Template “${h.name}” loaded into the composer.`));
  }, uf = () => {
    Yn(null), Vn(ot.trim() || "New notification template"), Wn(""), r("templates");
  }, cf = (a) => {
    Yn(a.id), Vn(a.name), Wn(a.description), Ci(a.draft), r("templates"), ye(`Editing template “${a.name}”.`);
  }, df = async () => {
    if (t.current) {
      un("template");
      try {
        const a = await xe(t.current, "notify_studio/save_template", {
          template: {
            ...Qn ? { id: Qn } : {},
            name: fa,
            description: pa,
            draft: Xd()
          }
        });
        W((h) => h.findIndex((_) => _.id === a.id) === -1 ? [a, ...h] : h.map((_) => _.id === a.id ? a : _)), it(a.id), Yn(a.id), ye(`Template “${a.name}” saved.`);
      } catch (a) {
        de(a, "Unable to save the template.");
      } finally {
        un(null);
      }
    }
  }, ff = async (a) => {
    if (t.current && window.confirm(`Delete the “${a.name}” template? This cannot be undone.`))
      try {
        await xe(t.current, "notify_studio/delete_template", { template_id: a.id }), W((h) => h.filter((k) => k.id !== a.id)), qe === a.id && it(""), Qn === a.id && (Yn(null), Vn(""), Wn("")), ye(`Template “${a.name}” deleted.`);
      } catch (h) {
        de(h, "Unable to delete the template.");
      }
  }, pf = () => U ? U.platform === "android" ? /* @__PURE__ */ s.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ s.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ s.jsx($, { label: "Subject", children: /* @__PURE__ */ s.jsx("input", { value: Ar, onChange: (a) => Xs(a.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Channel", children: /* @__PURE__ */ s.jsx("input", { value: Hr, onChange: (a) => Zs(a.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Importance", children: /* @__PURE__ */ s.jsxs("select", { value: Br, onChange: (a) => Js(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ s.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ s.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ s.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ s.jsx($, { label: "Priority", children: /* @__PURE__ */ s.jsxs("select", { value: Vr, onChange: (a) => qs(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ s.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ s.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ s.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ s.jsx($, { label: "Colour", children: /* @__PURE__ */ s.jsx("input", { value: Wr, onChange: (a) => bs(a.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Status-bar icon", children: /* @__PURE__ */ s.jsx("input", { value: Qr, onChange: (a) => ea(a.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Timeout (seconds)", children: /* @__PURE__ */ s.jsx("input", { inputMode: "numeric", value: Yr, onChange: (a) => ta(a.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: yi, onChange: (a) => na(a.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: Kr, onChange: (a) => {
        const h = a.target.checked;
        ra(h), h && !Hn.trim() && gi(Km(ot, ln));
      } }),
      " Persistent notification"
    ] }),
    Kr && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ s.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ s.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ s.jsx($, { label: "Subtitle", children: /* @__PURE__ */ s.jsx("input", { value: Gr, onChange: (a) => ia(a.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Sound", children: /* @__PURE__ */ s.jsx("input", { value: Xr, onChange: (a) => oa(a.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Badge", children: /* @__PURE__ */ s.jsx("input", { inputMode: "numeric", value: Zr, onChange: (a) => sa(a.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ s.jsx($, { label: "Interruption level", children: /* @__PURE__ */ s.jsxs("select", { value: Jr, onChange: (a) => aa(a.target.value), children: [
        /* @__PURE__ */ s.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ s.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ s.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ s.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ s.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ s.jsx($, { label: "Thread ID", children: /* @__PURE__ */ s.jsx("input", { value: qr, onChange: (a) => ua(a.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ s.jsx("section", { className: "ns-options", children: /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, mf = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const a = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ s.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ s.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ s.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ s.jsx("input", { type: "checkbox", checked: on, onChange: (h) => {
          const k = h.target.checked;
          la(k), k && !be.length && sn([Pu(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      on && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ s.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-action-list", children: be.map((h, k) => /* @__PURE__ */ s.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ s.jsxs("strong", { children: [
              "Button ",
              k + 1
            ] }),
            be.length > 1 && /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => sf(k), children: "Remove" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx($, { label: "Button label", children: /* @__PURE__ */ s.jsx("input", { value: h.title, onChange: (_) => cn(k, { title: _.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Button action", children: /* @__PURE__ */ s.jsxs("select", { value: h.route, onChange: (_) => lf(k, _.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ s.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ s.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ s.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ s.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            h.route !== "uri" && /* @__PURE__ */ s.jsx($, { label: "Action ID", children: /* @__PURE__ */ s.jsx("input", { value: h.id, onChange: (_) => cn(k, { id: _.target.value }), placeholder: "Unique event ID" }) }),
            h.route === "uri" && /* @__PURE__ */ s.jsx($, { label: "URI", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: h.uri ?? "", onChange: (_) => cn(k, { uri: _.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            h.route === "script" && /* @__PURE__ */ s.jsx($, { label: "Script", children: /* @__PURE__ */ s.jsxs("select", { value: h.scriptEntityId ?? "", onChange: (_) => cn(k, { scriptEntityId: _.target.value }), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "Choose a script…" }),
              ma.map((_) => /* @__PURE__ */ s.jsxs("option", { value: _.entity_id, children: [
                _.name,
                " · ",
                _.entity_id
              ] }, _.entity_id))
            ] }) }),
            h.route === "service" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsx($, { label: "Home Assistant action", children: /* @__PURE__ */ s.jsx("input", { value: h.service ?? "", onChange: (_) => cn(k, { service: _.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ s.jsx($, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ s.jsx("textarea", { value: h.serviceData ?? "", onChange: (_) => cn(k, { serviceData: _.target.value }), placeholder: `{
  "entity_id": "light.hall"
}` }) })
            ] })
          ] }),
          h.route === "event" && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence." }),
          h.route === "reply" && /* @__PURE__ */ s.jsxs("p", { className: "ns-help", children: [
            "The generated handler receives the submitted text as ",
            /* @__PURE__ */ s.jsx("code", { children: "trigger.event.data.reply_text" }),
            "."
          ] }),
          h.route === "uri" && /* @__PURE__ */ s.jsxs("p", { className: "ns-help", children: [
            "Android requires the Companion action key ",
            /* @__PURE__ */ s.jsx("code", { children: "URI" }),
            ". URI buttons do not generate an event handler."
          ] }),
          h.route === "script" && !ma.length && /* @__PURE__ */ s.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${h.id}:${k}`)) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ s.jsxs("span", { className: "ns-help", children: [
            be.length,
            " of ",
            a,
            " available ",
            a === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          be.length < a && /* @__PURE__ */ s.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: of, children: "Add button" })
        ] })
      ] })
    ] });
  }, hf = (a) => a ? /* @__PURE__ */ s.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ s.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ s.jsx("span", { className: "ns-runtime__value", children: no(a.last_triggered) })
  ] }) }) : /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), vf = (a) => {
    var I;
    const h = `${a.source}:${a.id}`, k = (I = a.notify_devices) != null && I.length ? a.notify_devices : a.notifiers, _ = a.runtime;
    return /* @__PURE__ */ s.jsxs("article", { className: "ns-card ns-audit-card", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ s.jsx("div", { className: "ns-row__title", children: a.name }) }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__actions", children: /* @__PURE__ */ s.jsx("span", { className: `ns-badge ns-badge--${a.source === "script" ? "script" : "automation"}`, children: a.source }) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
        hf(_),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-chip-row", children: [
          a.category && /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            a.category
          ] }),
          (a.labels ?? []).map((te) => /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            te
          ] }, `label:${te}`)),
          k.map((te) => /* @__PURE__ */ s.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            te
          ] }, `device:${te}`))
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card__footer", children: [
        (_ == null ? void 0 : _.kind) === "automation" && /* @__PURE__ */ s.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${_.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void nf(_, !_.enabled), children: _.enabled ? "Enabled" : "Disabled" }),
        (_ == null ? void 0 : _.supports_run) && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void rf(_), children: "Run test" }),
        _ && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => ef(_), children: _.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, h);
  };
  return o ? /* @__PURE__ */ s.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ s.jsx("style", { children: Eu }),
    /* @__PURE__ */ s.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ s.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ s.jsx("style", { children: Eu }),
    /* @__PURE__ */ s.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: Qd }),
    /* @__PURE__ */ s.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ s.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ s.jsx("img", { className: "notify-studio__logo-image", src: Ym, alt: "Notify Studio" }),
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
          U && /* @__PURE__ */ s.jsx("span", { className: Lu(U.platform), children: to(U.platform) })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: g.length ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ s.jsx($, { label: "Template", children: /* @__PURE__ */ s.jsxs("select", { value: qe, onChange: (a) => af(a.target.value), children: [
            /* @__PURE__ */ s.jsx("option", { value: "", children: "Choose a saved template…" }),
            R.map((a) => /* @__PURE__ */ s.jsx("option", { value: a.id, children: a.name }, a.id))
          ] }) }) }),
          /* @__PURE__ */ s.jsx($, { label: "Send to", children: /* @__PURE__ */ s.jsx("select", { value: Te, onChange: (a) => Ht(a.target.value), children: g.map((a) => /* @__PURE__ */ s.jsxs("option", { value: a.id, children: [
            a.name,
            " · ",
            to(a.platform),
            a.model ? ` · ${a.model}` : ""
          ] }, a.id)) }) }),
          U == null ? void 0 : U.warnings.map((a) => /* @__PURE__ */ s.jsx("div", { className: "ns-warning", children: a }, a)),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx($, { label: "Title", children: /* @__PURE__ */ s.jsx("input", { value: ot, onChange: (a) => Ys(a.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Tag", children: /* @__PURE__ */ s.jsx("input", { value: Hn, onChange: (a) => gi(a.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Open URL", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: xt, onChange: (a) => Gs(a.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ s.jsx("input", { value: Ur, onChange: (a) => Ks(a.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Message", full: !0, children: /* @__PURE__ */ s.jsx("textarea", { value: ln, onChange: (a) => Qs(a.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          pf(),
          mf(),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Zd(), disabled: Bt !== null, children: Bt === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: uf, disabled: Bt !== null, children: "Save Template" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Jd(), disabled: Bt !== null, children: Bt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ s.jsx($, { label: "Rendered title", children: /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: an.errors.title ? `Error: ${an.errors.title}` : an.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ s.jsx($, { label: "Rendered message", children: /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: an.errors.message ? `Error: ${an.errors.message}` : an.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ s.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ s.jsxs("div", { className: "ns-card__actions", children: [
              Bn && /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void qd(), children: "Copy" }),
              /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: bd, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx("pre", { className: "ns-code", children: Bn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ s.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: Qn ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ s.jsx($, { label: "Template name", children: /* @__PURE__ */ s.jsx("input", { value: fa, onChange: (a) => Vn(a.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ s.jsx($, { label: "Description", children: /* @__PURE__ */ s.jsx("input", { value: pa, onChange: (a) => Wn(a.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button", onClick: () => void df(), disabled: Bt !== null, children: Bt === "template" ? "Saving…" : Qn ? "Update template" : "Save Template" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              Yn(null), Vn(""), Wn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !R.length && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ s.jsx("div", { className: "ns-template-grid", children: R.map((a) => {
        var h, k;
        return /* @__PURE__ */ s.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "ns-template-card__title", children: a.name }),
            /* @__PURE__ */ s.jsx("p", { className: "ns-template-card__meta", children: a.description || "No description" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-chip-row", children: [
            a.draft.target_platform && /* @__PURE__ */ s.jsx("span", { className: Lu(a.draft.target_platform), children: to(a.draft.target_platform) }),
            /* @__PURE__ */ s.jsx("span", { className: "ns-chip", children: Array.isArray((h = a.draft.payload.data) == null ? void 0 : h.actions) ? `${(k = a.draft.payload.data) == null ? void 0 : k.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              it(a.id), Ci(a.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => cf(a), children: "Edit" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void ff(a), children: "Delete" })
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
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Si(), disabled: x, children: x ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Gd(), disabled: x, children: "Clear logs" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ s.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ s.jsx($, { label: "Level", children: /* @__PURE__ */ s.jsxs("select", { value: T, onChange: (a) => z(a.target.value), children: [
          /* @__PURE__ */ s.jsx("option", { value: "", children: "All levels" }),
          /* @__PURE__ */ s.jsx("option", { value: "error", children: "Errors" }),
          /* @__PURE__ */ s.jsx("option", { value: "warning", children: "Warnings" }),
          /* @__PURE__ */ s.jsx("option", { value: "info", children: "Information" })
        ] }) }) }) })
      ] }),
      x && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
      !x && !wi.length && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
      !x && wi.length > 0 && /* @__PURE__ */ s.jsx("section", { className: "ns-log-list", children: wi.map((a, h) => /* @__PURE__ */ s.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${a.level}`, children: [
        /* @__PURE__ */ s.jsxs("div", { className: "ns-log-entry__head", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("span", { className: Xm(a.level), children: Zm(a.level) }),
            /* @__PURE__ */ s.jsx("strong", { children: a.message })
          ] }),
          /* @__PURE__ */ s.jsx("time", { dateTime: a.timestamp, children: no(a.timestamp) })
        ] }),
        a.entity_id && /* @__PURE__ */ s.jsx("code", { className: "ns-log-entry__entity", children: a.entity_id }),
        a.detail && /* @__PURE__ */ s.jsx("p", { className: "ns-log-entry__detail", children: a.detail }),
        /* @__PURE__ */ s.jsx("span", { className: "ns-log-entry__event", children: a.event.replaceAll("_", " ") })
      ] }, `${a.timestamp}:${a.event}:${h}`)) })
    ] }),
    n === "audit" && /* @__PURE__ */ s.jsxs("section", { className: "notify-studio__notifications-layout", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "notify-studio__notifications-main", children: [
        /* @__PURE__ */ s.jsxs("section", { className: "ns-card", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "ns-card__head", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
              /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, filter them by organisation, and run or enable matching automations." })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "ns-card__actions", children: /* @__PURE__ */ s.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Ni(), disabled: Ne, children: Ne ? "Scanning…" : "Scan now" }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ s.jsxs("div", { className: "ns-filter-grid", children: [
            /* @__PURE__ */ s.jsx($, { label: "Type", children: /* @__PURE__ */ s.jsxs("select", { value: At, onChange: (a) => vi(a.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "All sources" }),
              /* @__PURE__ */ s.jsx("option", { value: "automation", children: "Automation" }),
              /* @__PURE__ */ s.jsx("option", { value: "script", children: "Script" })
            ] }) }),
            /* @__PURE__ */ s.jsx($, { label: "Category", children: /* @__PURE__ */ s.jsxs("select", { value: yt, onChange: (a) => An(a.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "All categories" }),
              ki.categories.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
            ] }) }),
            /* @__PURE__ */ s.jsx($, { label: "Label", children: /* @__PURE__ */ s.jsxs("select", { value: P, onChange: (a) => O(a.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "All labels" }),
              ki.labels.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
            ] }) }),
            /* @__PURE__ */ s.jsx($, { label: "Notify device", children: /* @__PURE__ */ s.jsxs("select", { value: D, onChange: (a) => X(a.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "", children: "All notify devices" }),
              ki.devices.map((a) => /* @__PURE__ */ s.jsx("option", { value: a, children: a }, a))
            ] }) }),
            /* @__PURE__ */ s.jsx($, { label: "Group by", children: /* @__PURE__ */ s.jsxs("select", { value: Q, onChange: (a) => rn(a.target.value), children: [
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" }),
              /* @__PURE__ */ s.jsx("option", { value: "source", children: "Automation / Script" }),
              /* @__PURE__ */ s.jsx("option", { value: "category", children: "Category" }),
              /* @__PURE__ */ s.jsx("option", { value: "label", children: "Label" }),
              /* @__PURE__ */ s.jsx("option", { value: "device", children: "Notify device" })
            ] }) })
          ] }) })
        ] }),
        Ne && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
        !Ne && (M == null ? void 0 : M.length) === 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
        !Ne && M && _i.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
        !Ne && M && Kd.map((a) => /* @__PURE__ */ s.jsxs("section", { className: "ns-audit-group", children: [
          /* @__PURE__ */ s.jsx("h3", { children: a.title }),
          /* @__PURE__ */ s.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: a.items.map(vf) })
        ] }, a.title))
      ] }),
      /* @__PURE__ */ s.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ s.jsxs("section", { className: "ns-card ns-recent-card", children: [
        /* @__PURE__ */ s.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
          /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
        ] }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "ns-card__body", children: [
          B && /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
          !B && !j.length && /* @__PURE__ */ s.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
          !B && j.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "ns-recent-list", children: j.map((a) => /* @__PURE__ */ s.jsxs("article", { className: "ns-recent-item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "ns-recent-item__head", children: [
              /* @__PURE__ */ s.jsx("strong", { children: a.name }),
              /* @__PURE__ */ s.jsx("span", { className: `ns-badge ns-badge--${a.kind}`, children: a.kind })
            ] }),
            /* @__PURE__ */ s.jsxs("span", { children: [
              "Triggered ",
              no(a.last_triggered)
            ] })
          ] }, a.entity_id)) })
        ] })
      ] }) })
    ] })
  ] });
}
function $({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ s.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ s.jsx("span", { children: e }),
    t
  ] });
}
class qm extends HTMLElement {
  constructor() {
    super(...arguments);
    Pi(this, "root");
    Pi(this, "currentHass");
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
    this.root || (this.root = Vd(this)), this.root.render(/* @__PURE__ */ s.jsx(Jm, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", qm);
