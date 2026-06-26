var fp = Object.defineProperty;
var pp = (e, t, n) => t in e ? fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zl = (e, t, n) => pp(e, typeof t != "symbol" ? t + "" : t, n);
var dc = { exports: {} }, wl = {}, fc = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr = Symbol.for("react.element"), mp = Symbol.for("react.portal"), hp = Symbol.for("react.fragment"), gp = Symbol.for("react.strict_mode"), vp = Symbol.for("react.profiler"), yp = Symbol.for("react.provider"), xp = Symbol.for("react.context"), wp = Symbol.for("react.forward_ref"), _p = Symbol.for("react.suspense"), kp = Symbol.for("react.memo"), Sp = Symbol.for("react.lazy"), qa = Symbol.iterator;
function Cp(e) {
  return e === null || typeof e != "object" ? null : (e = qa && e[qa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, mc = Object.assign, hc = {};
function Qn(e, t, n) {
  this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gc() {
}
gc.prototype = Qn.prototype;
function _s(e, t, n) {
  this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
}
var ks = _s.prototype = new gc();
ks.constructor = _s;
mc(ks, Qn.prototype);
ks.isPureReactComponent = !0;
var Za = Array.isArray, vc = Object.prototype.hasOwnProperty, Ss = { current: null }, yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) vc.call(t, r) && !yc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Wr, type: e, key: l, ref: i, props: o, _owner: Ss.current };
}
function Np(e, t) {
  return { $$typeof: Wr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function jp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ja = /\/+/g;
function Jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jp("" + e.key) : t.toString(36);
}
function Oo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (l) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Wr:
        case mp:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Jl(i, 0) : r, Za(o) ? (n = "", e != null && (n = e.replace(Ja, "$&/") + "/"), Oo(o, t, n, "", function(m) {
    return m;
  })) : o != null && (Cs(o) && (o = Np(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ja, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Za(e)) for (var u = 0; u < e.length; u++) {
    l = e[u];
    var c = r + Jl(l, u);
    i += Oo(l, t, n, c, o);
  }
  else if (c = Cp(e), typeof c == "function") for (e = c.call(e), u = 0; !(l = e.next()).done; ) l = l.value, c = r + Jl(l, u++), i += Oo(l, t, n, c, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function wo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Oo(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function Ep(e) {
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
var je = { current: null }, Do = { transition: null }, zp = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: Do, ReactCurrentOwner: Ss };
function wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: wo, forEach: function(e, t, n) {
  wo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Cs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Qn;
A.Fragment = hp;
A.Profiler = vp;
A.PureComponent = _s;
A.StrictMode = gp;
A.Suspense = _p;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zp;
A.act = wc;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = mc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Ss.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) vc.call(t, c) && !yc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Wr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: xp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yp, _context: e }, e.Consumer = e;
};
A.createElement = xc;
A.createFactory = function(e) {
  var t = xc.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: wp, render: e };
};
A.isValidElement = Cs;
A.lazy = function(e) {
  return { $$typeof: Sp, _payload: { _status: -1, _result: e }, _init: Ep };
};
A.memo = function(e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = Do.transition;
  Do.transition = {};
  try {
    e();
  } finally {
    Do.transition = t;
  }
};
A.unstable_act = wc;
A.useCallback = function(e, t) {
  return je.current.useCallback(e, t);
};
A.useContext = function(e) {
  return je.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return je.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return je.current.useEffect(e, t);
};
A.useId = function() {
  return je.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return je.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return je.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return je.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return je.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return je.current.useRef(e);
};
A.useState = function(e) {
  return je.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return je.current.useTransition();
};
A.version = "18.3.1";
fc.exports = A;
var k = fc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = k, Tp = Symbol.for("react.element"), Lp = Symbol.for("react.fragment"), bp = Object.prototype.hasOwnProperty, Rp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) bp.call(t, r) && !Mp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Tp, type: e, key: l, ref: i, props: o, _owner: Rp.current };
}
wl.Fragment = Lp;
wl.jsx = _c;
wl.jsxs = _c;
dc.exports = wl;
var a = dc.exports, kc = { exports: {} }, De = {}, Sc = { exports: {} }, Cc = {};
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
  function t(T, O) {
    var D = T.length;
    T.push(O);
    e: for (; 0 < D; ) {
      var J = D - 1 >>> 1, se = T[J];
      if (0 < o(se, O)) T[J] = O, T[D] = se, D = J;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], D = T.pop();
    if (D !== O) {
      T[0] = D;
      e: for (var J = 0, se = T.length, Ct = se >>> 1; J < Ct; ) {
        var lt = 2 * (J + 1) - 1, fn = T[lt], it = lt + 1, pn = T[it];
        if (0 > o(fn, D)) it < se && 0 > o(pn, fn) ? (T[J] = pn, T[it] = D, J = it) : (T[J] = fn, T[lt] = D, J = lt);
        else if (it < se && 0 > o(pn, D)) T[J] = pn, T[it] = D, J = it;
        else break e;
      }
    }
    return O;
  }
  function o(T, O) {
    var D = T.sortIndex - O.sortIndex;
    return D !== 0 ? D : T.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var c = [], m = [], x = 1, w = null, y = 3, C = !1, N = !1, j = !1, W = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= T) r(m), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(m);
    }
  }
  function _(T) {
    if (j = !1, h(T), !N) if (n(c) !== null) N = !0, ot(E);
    else {
      var O = n(m);
      O !== null && Yn(_, O.startTime - T);
    }
  }
  function E(T, O) {
    N = !1, j && (j = !1, p(R), R = -1), C = !0;
    var D = y;
    try {
      for (h(O), w = n(c); w !== null && (!(w.expirationTime > O) || T && !de()); ) {
        var J = w.callback;
        if (typeof J == "function") {
          w.callback = null, y = w.priorityLevel;
          var se = J(w.expirationTime <= O);
          O = e.unstable_now(), typeof se == "function" ? w.callback = se : w === n(c) && r(c), h(O);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var Ct = !0;
      else {
        var lt = n(m);
        lt !== null && Yn(_, lt.startTime - O), Ct = !1;
      }
      return Ct;
    } finally {
      w = null, y = D, C = !1;
    }
  }
  var L = !1, b = null, R = -1, Y = 5, I = -1;
  function de() {
    return !(e.unstable_now() - I < Y);
  }
  function nt() {
    if (b !== null) {
      var T = e.unstable_now();
      I = T;
      var O = !0;
      try {
        O = b(!0, T);
      } finally {
        O ? Ge() : (L = !1, b = null);
      }
    } else L = !1;
  }
  var Ge;
  if (typeof d == "function") Ge = function() {
    d(nt);
  };
  else if (typeof MessageChannel < "u") {
    var rt = new MessageChannel(), $l = rt.port2;
    rt.port1.onmessage = nt, Ge = function() {
      $l.postMessage(null);
    };
  } else Ge = function() {
    W(nt, 0);
  };
  function ot(T) {
    b = T, L || (L = !0, Ge());
  }
  function Yn(T, O) {
    R = W(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    N || C || (N = !0, ot(E));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(T) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = y;
    }
    var D = y;
    y = O;
    try {
      return T();
    } finally {
      y = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var D = y;
    y = T;
    try {
      return O();
    } finally {
      y = D;
    }
  }, e.unstable_scheduleCallback = function(T, O, D) {
    var J = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? J + D : J) : D = J, T) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = D + se, T = { id: x++, callback: O, priorityLevel: T, startTime: D, expirationTime: se, sortIndex: -1 }, D > J ? (T.sortIndex = D, t(m, T), n(c) === null && T === n(m) && (j ? (p(R), R = -1) : j = !0, Yn(_, D - J))) : (T.sortIndex = se, t(c, T), N || C || (N = !0, ot(E))), T;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(T) {
    var O = y;
    return function() {
      var D = y;
      y = O;
      try {
        return T.apply(this, arguments);
      } finally {
        y = D;
      }
    };
  };
})(Cc);
Sc.exports = Cc;
var Ip = Sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p = k, Oe = Ip;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Nc = /* @__PURE__ */ new Set(), zr = {};
function cn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) Nc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zi = Object.prototype.hasOwnProperty, Op = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, tu = {};
function Dp(e) {
  return zi.call(tu, e) ? !0 : zi.call(eu, e) ? !1 : Op.test(e) ? tu[e] = !0 : (eu[e] = !0, !1);
}
function Fp(e, t, n, r) {
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
function Ap(e, t, n, r) {
  if (t === null || typeof t > "u" || Fp(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
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
var Ns = /[\-:]([a-z])/g;
function js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ns,
    js
  );
  ye[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ns, js);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ns, js);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Es(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ap(t, n, o, r) && (n = null), r || o === null ? Dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _o = Symbol.for("react.element"), _n = Symbol.for("react.portal"), kn = Symbol.for("react.fragment"), zs = Symbol.for("react.strict_mode"), Pi = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), Ps = Symbol.for("react.forward_ref"), Ti = Symbol.for("react.suspense"), Li = Symbol.for("react.suspense_list"), Ts = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), zc = Symbol.for("react.offscreen"), nu = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ei;
function hr(e) {
  if (ei === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ei = t && t[1] || "";
  }
  return `
` + ei + e;
}
var ti = !1;
function ni(e, t) {
  if (!e || ti) return "";
  ti = !0;
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
      for (var o = m.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (o[i] !== l[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || o[i] !== l[u]) {
              var c = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    ti = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Up(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ni(e.type, !1), e;
    case 11:
      return e = ni(e.type.render, !1), e;
    case 1:
      return e = ni(e.type, !0), e;
    default:
      return "";
  }
}
function bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case _n:
      return "Portal";
    case Pi:
      return "Profiler";
    case zs:
      return "StrictMode";
    case Ti:
      return "Suspense";
    case Li:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ec:
      return (e.displayName || "Context") + ".Consumer";
    case jc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ps:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ts:
      return t = e.displayName || null, t !== null ? t : bi(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return bi(e(t));
      } catch {
      }
  }
  return null;
}
function Hp(e) {
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
      return bi(t);
    case 8:
      return t === zs ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function Pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bp(e) {
  var t = Pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ko(e) {
  e._valueTracker || (e._valueTracker = Bp(e));
}
function Tc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Lc(e, t) {
  t = t.checked, t != null && Es(e, "checked", t, !1);
}
function Mi(e, t) {
  Lc(e, t);
  var n = Vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ii(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ii(e, t, n) {
  (t !== "number" || Xo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function bc(e, t) {
  var n = Vt(t.value), r = Vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var So, Mc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
}, Vp = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function(e) {
  Vp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e];
  });
});
function Ic(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ic(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Wp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Di(e, t) {
  if (t) {
    if (Wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Fi(e, t) {
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
var Ai = null;
function Ls(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ui = null, Mn = null, In = null;
function su(e) {
  if (e = Kr(e)) {
    if (typeof Ui != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Nl(t), Ui(e.stateNode, e.type, t));
  }
}
function Oc(e) {
  Mn ? In ? In.push(e) : In = [e] : Mn = e;
}
function Dc() {
  if (Mn) {
    var e = Mn, t = In;
    if (In = Mn = null, su(e), t) for (e = 0; e < t.length; e++) su(t[e]);
  }
}
function Fc(e, t) {
  return e(t);
}
function Ac() {
}
var ri = !1;
function Uc(e, t, n) {
  if (ri) return e(t, n);
  ri = !0;
  try {
    return Fc(e, t, n);
  } finally {
    ri = !1, (Mn !== null || In !== null) && (Ac(), Dc());
  }
}
function Tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Hi = !1;
if (xt) try {
  var ar = {};
  Object.defineProperty(ar, "passive", { get: function() {
    Hi = !0;
  } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
  Hi = !1;
}
function Qp(e, t, n, r, o, l, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var wr = !1, qo = null, Zo = !1, Bi = null, Gp = { onError: function(e) {
  wr = !0, qo = e;
} };
function Kp(e, t, n, r, o, l, i, u, c) {
  wr = !1, qo = null, Qp.apply(Gp, arguments);
}
function Yp(e, t, n, r, o, l, i, u, c) {
  if (Kp.apply(this, arguments), wr) {
    if (wr) {
      var m = qo;
      wr = !1, qo = null;
    } else throw Error(S(198));
    Zo || (Zo = !0, Bi = m);
  }
}
function dn(e) {
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
function Hc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function au(e) {
  if (dn(e) !== e) throw Error(S(188));
}
function Xp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dn(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return au(o), e;
        if (l === r) return au(o), t;
        l = l.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var i = !1, u = o.child; u; ) {
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
      if (!i) {
        for (u = l.child; u; ) {
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
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Bc(e) {
  return e = Xp(e), e !== null ? Vc(e) : null;
}
function Vc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wc = Oe.unstable_scheduleCallback, uu = Oe.unstable_cancelCallback, qp = Oe.unstable_shouldYield, Zp = Oe.unstable_requestPaint, ie = Oe.unstable_now, Jp = Oe.unstable_getCurrentPriorityLevel, bs = Oe.unstable_ImmediatePriority, Qc = Oe.unstable_UserBlockingPriority, Jo = Oe.unstable_NormalPriority, em = Oe.unstable_LowPriority, Gc = Oe.unstable_IdlePriority, _l = null, dt = null;
function tm(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Je = Math.clz32 ? Math.clz32 : om, nm = Math.log, rm = Math.LN2;
function om(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (nm(e) / rm | 0) | 0;
}
var Co = 64, No = 4194304;
function vr(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = vr(u) : (l &= i, l !== 0 && (r = vr(l)));
  } else i = n & ~o, i !== 0 ? r = vr(i) : l !== 0 && (r = vr(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function lm(e, t) {
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
function im(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Je(l), u = 1 << i, c = o[i];
    c === -1 ? (!(u & n) || u & r) && (o[i] = lm(u, t)) : c <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Kc() {
  var e = Co;
  return Co <<= 1, !(Co & 4194240) && (Co = 64), e;
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function sm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Je(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Rs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function Yc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xc, Ms, qc, Zc, Jc, Wi = !1, jo = [], $t = null, Ot = null, Dt = null, Lr = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map(), bt = [], am = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      br.delete(t.pointerId);
  }
}
function ur(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Kr(t), t !== null && Ms(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function um(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return $t = ur($t, e, t, n, r, o), !0;
    case "dragenter":
      return Ot = ur(Ot, e, t, n, r, o), !0;
    case "mouseover":
      return Dt = ur(Dt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Lr.set(l, ur(Lr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, br.set(l, ur(br.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ed(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Hc(n), t !== null) {
          e.blockedOn = t, Jc(e.priority, function() {
            qc(n);
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
function Fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ai = r, n.target.dispatchEvent(r), Ai = null;
    } else return t = Kr(n), t !== null && Ms(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Fo(e) && n.delete(t);
}
function cm() {
  Wi = !1, $t !== null && Fo($t) && ($t = null), Ot !== null && Fo(Ot) && (Ot = null), Dt !== null && Fo(Dt) && (Dt = null), Lr.forEach(du), br.forEach(du);
}
function cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wi || (Wi = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, cm)));
}
function Rr(e) {
  function t(o) {
    return cr(o, e);
  }
  if (0 < jo.length) {
    cr(jo[0], e);
    for (var n = 1; n < jo.length; n++) {
      var r = jo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && cr($t, e), Ot !== null && cr(Ot, e), Dt !== null && cr(Dt, e), Lr.forEach(t), br.forEach(t), n = 0; n < bt.length; n++) r = bt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && (n = bt[0], n.blockedOn === null); ) ed(n), n.blockedOn === null && bt.shift();
}
var $n = St.ReactCurrentBatchConfig, tl = !0;
function dm(e, t, n, r) {
  var o = V, l = $n.transition;
  $n.transition = null;
  try {
    V = 1, Is(e, t, n, r);
  } finally {
    V = o, $n.transition = l;
  }
}
function fm(e, t, n, r) {
  var o = V, l = $n.transition;
  $n.transition = null;
  try {
    V = 4, Is(e, t, n, r);
  } finally {
    V = o, $n.transition = l;
  }
}
function Is(e, t, n, r) {
  if (tl) {
    var o = Qi(e, t, n, r);
    if (o === null) mi(e, t, r, nl, n), cu(e, r);
    else if (um(o, e, t, n, r)) r.stopPropagation();
    else if (cu(e, r), t & 4 && -1 < am.indexOf(e)) {
      for (; o !== null; ) {
        var l = Kr(o);
        if (l !== null && Xc(l), l = Qi(e, t, n, r), l === null && mi(e, t, r, nl, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else mi(e, t, r, null, n);
  }
}
var nl = null;
function Qi(e, t, n, r) {
  if (nl = null, e = Ls(r), e = Jt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Hc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return nl = e, null;
}
function td(e) {
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
      switch (Jp()) {
        case bs:
          return 1;
        case Qc:
          return 4;
        case Jo:
        case em:
          return 16;
        case Gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, $s = null, Ao = null;
function nd() {
  if (Ao) return Ao;
  var e, t = $s, n = t.length, r, o = "value" in Mt ? Mt.value : Mt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Ao = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Uo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Eo() {
  return !0;
}
function fu() {
  return !1;
}
function Fe(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Eo : fu, this.isPropagationStopped = fu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eo);
  }, persist: function() {
  }, isPersistent: Eo }), t;
}
var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Os = Fe(Gn), Gr = oe({}, Gn, { view: 0, detail: 0 }), pm = Fe(Gr), li, ii, dr, kl = oe({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ds, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== dr && (dr && e.type === "mousemove" ? (li = e.screenX - dr.screenX, ii = e.screenY - dr.screenY) : ii = li = 0, dr = e), li);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ii;
} }), pu = Fe(kl), mm = oe({}, kl, { dataTransfer: 0 }), hm = Fe(mm), gm = oe({}, Gr, { relatedTarget: 0 }), si = Fe(gm), vm = oe({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ym = Fe(vm), xm = oe({}, Gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wm = Fe(xm), _m = oe({}, Gn, { data: 0 }), mu = Fe(_m), km = {
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
}, Sm = {
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
}, Cm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cm[e]) ? !!t[e] : !1;
}
function Ds() {
  return Nm;
}
var jm = oe({}, Gr, { key: function(e) {
  if (e.key) {
    var t = km[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ds, charCode: function(e) {
  return e.type === "keypress" ? Uo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Em = Fe(jm), zm = oe({}, kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = Fe(zm), Pm = oe({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ds }), Tm = Fe(Pm), Lm = oe({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = Fe(Lm), Rm = oe({}, kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mm = Fe(Rm), Im = [9, 13, 27, 32], Fs = xt && "CompositionEvent" in window, _r = null;
xt && "documentMode" in document && (_r = document.documentMode);
var $m = xt && "TextEvent" in window && !_r, rd = xt && (!Fs || _r && 8 < _r && 11 >= _r), gu = " ", vu = !1;
function od(e, t) {
  switch (e) {
    case "keyup":
      return Im.indexOf(t.keyCode) !== -1;
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
function ld(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function Om(e, t) {
  switch (e) {
    case "compositionend":
      return ld(t);
    case "keypress":
      return t.which !== 32 ? null : (vu = !0, gu);
    case "textInput":
      return e = t.data, e === gu && vu ? null : e;
    default:
      return null;
  }
}
function Dm(e, t) {
  if (Sn) return e === "compositionend" || !Fs && od(e, t) ? (e = nd(), Ao = $s = Mt = null, Sn = !1, e) : null;
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
      return rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function id(e, t, n, r) {
  Oc(r), t = rl(t, "onChange"), 0 < t.length && (n = new Os("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var kr = null, Mr = null;
function Am(e) {
  vd(e, 0);
}
function Sl(e) {
  var t = jn(e);
  if (Tc(t)) return e;
}
function Um(e, t) {
  if (e === "change") return t;
}
var sd = !1;
if (xt) {
  var ai;
  if (xt) {
    var ui = "oninput" in document;
    if (!ui) {
      var xu = document.createElement("div");
      xu.setAttribute("oninput", "return;"), ui = typeof xu.oninput == "function";
    }
    ai = ui;
  } else ai = !1;
  sd = ai && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  kr && (kr.detachEvent("onpropertychange", ad), Mr = kr = null);
}
function ad(e) {
  if (e.propertyName === "value" && Sl(Mr)) {
    var t = [];
    id(t, Mr, e, Ls(e)), Uc(Am, t);
  }
}
function Hm(e, t, n) {
  e === "focusin" ? (wu(), kr = t, Mr = n, kr.attachEvent("onpropertychange", ad)) : e === "focusout" && wu();
}
function Bm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Mr);
}
function Vm(e, t) {
  if (e === "click") return Sl(t);
}
function Wm(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Qm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tt = typeof Object.is == "function" ? Object.is : Qm;
function Ir(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zi.call(t, o) || !tt(e[o], t[o])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = _u(e);
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
    n = _u(n);
  }
}
function ud(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ud(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function cd() {
  for (var e = window, t = Xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xo(e.document);
  }
  return t;
}
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Gm(e) {
  var t = cd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ud(n.ownerDocument.documentElement, n)) {
    if (r !== null && As(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ku(n, l);
        var i = ku(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Km = xt && "documentMode" in document && 11 >= document.documentMode, Cn = null, Gi = null, Sr = null, Ki = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ki || Cn == null || Cn !== Xo(r) || (r = Cn, "selectionStart" in r && As(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sr && Ir(Sr, r) || (Sr = r, r = rl(Gi, "onSelect"), 0 < r.length && (t = new Os("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Cn)));
}
function zo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nn = { animationend: zo("Animation", "AnimationEnd"), animationiteration: zo("Animation", "AnimationIteration"), animationstart: zo("Animation", "AnimationStart"), transitionend: zo("Transition", "TransitionEnd") }, ci = {}, dd = {};
xt && (dd = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
function Cl(e) {
  if (ci[e]) return ci[e];
  if (!Nn[e]) return e;
  var t = Nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in dd) return ci[e] = t[n];
  return e;
}
var fd = Cl("animationend"), pd = Cl("animationiteration"), md = Cl("animationstart"), hd = Cl("transitionend"), gd = /* @__PURE__ */ new Map(), Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  gd.set(e, t), cn(t, [e]);
}
for (var di = 0; di < Cu.length; di++) {
  var fi = Cu[di], Ym = fi.toLowerCase(), Xm = fi[0].toUpperCase() + fi.slice(1);
  Qt(Ym, "on" + Xm);
}
Qt(fd, "onAnimationEnd");
Qt(pd, "onAnimationIteration");
Qt(md, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(hd, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function Nu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yp(r, t, void 0, e), e.currentTarget = null;
}
function vd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== l && o.isPropagationStopped()) break e;
        Nu(o, u, m), l = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== l && o.isPropagationStopped()) break e;
        Nu(o, u, m), l = c;
      }
    }
  }
  if (Zo) throw e = Bi, Zo = !1, Bi = null, e;
}
function q(e, t) {
  var n = t[Ji];
  n === void 0 && (n = t[Ji] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yd(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), yd(n, e, r, t);
}
var Po = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[Po]) {
    e[Po] = !0, Nc.forEach(function(n) {
      n !== "selectionchange" && (qm.has(n) || pi(n, !1, e), pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Po] || (t[Po] = !0, pi("selectionchange", !1, t));
  }
}
function yd(e, t, n, r) {
  switch (td(t)) {
    case 1:
      var o = dm;
      break;
    case 4:
      o = fm;
      break;
    default:
      o = Is;
  }
  n = o.bind(null, t, n, e), o = void 0, !Hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function mi(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === o || u.nodeType === 8 && u.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var c = i.tag;
        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Jt(u), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = l = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Uc(function() {
    var m = l, x = Ls(n), w = [];
    e: {
      var y = gd.get(e);
      if (y !== void 0) {
        var C = Os, N = e;
        switch (e) {
          case "keypress":
            if (Uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Em;
            break;
          case "focusin":
            N = "focus", C = si;
            break;
          case "focusout":
            N = "blur", C = si;
            break;
          case "beforeblur":
          case "afterblur":
            C = si;
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
            C = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = hm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Tm;
            break;
          case fd:
          case pd:
          case md:
            C = ym;
            break;
          case hd:
            C = bm;
            break;
          case "scroll":
            C = pm;
            break;
          case "wheel":
            C = Mm;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = wm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = hu;
        }
        var j = (t & 4) !== 0, W = !j && e === "scroll", p = j ? y !== null ? y + "Capture" : null : y;
        j = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = Tr(d, p), _ != null && j.push(Or(d, _, h)))), W) break;
          d = d.return;
        }
        0 < j.length && (y = new C(y, N, null, n, x), w.push({ event: y, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Ai && (N = n.relatedTarget || n.fromElement) && (Jt(N) || N[wt])) break e;
        if ((C || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = m, N = N ? Jt(N) : null, N !== null && (W = dn(N), N !== W || N.tag !== 5 && N.tag !== 6) && (N = null)) : (C = null, N = m), C !== N)) {
          if (j = pu, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = hu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), W = C == null ? y : jn(C), h = N == null ? y : jn(N), y = new j(_, d + "leave", C, n, x), y.target = W, y.relatedTarget = h, _ = null, Jt(x) === m && (j = new j(p, d + "enter", N, n, x), j.target = h, j.relatedTarget = W, _ = j), W = _, C && N) t: {
            for (j = C, p = N, d = 0, h = j; h; h = wn(h)) d++;
            for (h = 0, _ = p; _; _ = wn(_)) h++;
            for (; 0 < d - h; ) j = wn(j), d--;
            for (; 0 < h - d; ) p = wn(p), h--;
            for (; d--; ) {
              if (j === p || p !== null && j === p.alternate) break t;
              j = wn(j), p = wn(p);
            }
            j = null;
          }
          else j = null;
          C !== null && ju(w, y, C, j, !1), N !== null && W !== null && ju(w, W, N, j, !0);
        }
      }
      e: {
        if (y = m ? jn(m) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var E = Um;
        else if (yu(y)) if (sd) E = Wm;
        else {
          E = Bm;
          var L = Hm;
        }
        else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Vm);
        if (E && (E = E(e, m))) {
          id(w, E, n, x);
          break e;
        }
        L && L(e, y, m), e === "focusout" && (L = y._wrapperState) && L.controlled && y.type === "number" && Ii(y, "number", y.value);
      }
      switch (L = m ? jn(m) : window, e) {
        case "focusin":
          (yu(L) || L.contentEditable === "true") && (Cn = L, Gi = m, Sr = null);
          break;
        case "focusout":
          Sr = Gi = Cn = null;
          break;
        case "mousedown":
          Ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ki = !1, Su(w, n, x);
          break;
        case "selectionchange":
          if (Km) break;
        case "keydown":
        case "keyup":
          Su(w, n, x);
      }
      var b;
      if (Fs) e: {
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
      else Sn ? od(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (rd && n.locale !== "ko" && (Sn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Sn && (b = nd()) : (Mt = x, $s = "value" in Mt ? Mt.value : Mt.textContent, Sn = !0)), L = rl(m, R), 0 < L.length && (R = new mu(R, e, null, n, x), w.push({ event: R, listeners: L }), b ? R.data = b : (b = ld(n), b !== null && (R.data = b)))), (b = $m ? Om(e, n) : Dm(e, n)) && (m = rl(m, "onBeforeInput"), 0 < m.length && (x = new mu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = b));
    }
    vd(w, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Tr(e, n), l != null && r.unshift(Or(e, l, o)), l = Tr(e, t), l != null && r.push(Or(e, l, o))), e = e.return;
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, o ? (c = Tr(n, l), c != null && i.unshift(Or(n, c, u))) : o || (c = Tr(n, l), c != null && i.push(Or(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Zm = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zm, `
`).replace(Jm, "");
}
function To(e, t, n) {
  if (t = Eu(t), Eu(e) !== t && n) throw Error(S(425));
}
function ol() {
}
var Yi = null, Xi = null;
function qi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, th = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(nh);
} : Zi;
function nh(e) {
  setTimeout(function() {
    throw e;
  });
}
function hi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Rr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Rr(t);
}
function Ft(e) {
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
function Pu(e) {
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
var Kn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Kn, Dr = "__reactProps$" + Kn, wt = "__reactContainer$" + Kn, Ji = "__reactEvents$" + Kn, rh = "__reactListeners$" + Kn, oh = "__reactHandles$" + Kn;
function Jt(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pu(e); e !== null; ) {
        if (n = e[ct]) return n;
        e = Pu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kr(e) {
  return e = e[ct] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Nl(e) {
  return e[Dr] || null;
}
var es = [], En = -1;
function Gt(e) {
  return { current: e };
}
function Z(e) {
  0 > En || (e.current = es[En], es[En] = null, En--);
}
function K(e, t) {
  En++, es[En] = e.current, e.current = t;
}
var Wt = {}, Se = Gt(Wt), Le = Gt(!1), on = Wt;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function ll() {
  Z(Le), Z(Se);
}
function Tu(e, t, n) {
  if (Se.current !== Wt) throw Error(S(168));
  K(Se, t), K(Le, n);
}
function xd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Hp(e) || "Unknown", o));
  return oe({}, n, r);
}
function il(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, on = Se.current, K(Se, e), K(Le, Le.current), !0;
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = xd(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Se), K(Se, e)) : Z(Le), K(Le, n);
}
var ht = null, jl = !1, gi = !1;
function wd(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function lh(e) {
  jl = !0, wd(e);
}
function Kt() {
  if (!gi && ht !== null) {
    gi = !0;
    var e = 0, t = V;
    try {
      var n = ht;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, jl = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Wc(bs, Kt), o;
    } finally {
      V = t, gi = !1;
    }
  }
  return null;
}
var zn = [], Pn = 0, sl = null, al = 0, Ue = [], He = 0, ln = null, gt = 1, vt = "";
function qt(e, t) {
  zn[Pn++] = al, zn[Pn++] = sl, sl = e, al = t;
}
function _d(e, t, n) {
  Ue[He++] = gt, Ue[He++] = vt, Ue[He++] = ln, ln = e;
  var r = gt;
  e = vt;
  var o = 32 - Je(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Je(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, gt = 1 << 32 - Je(t) + o | n << o | r, vt = l + e;
  } else gt = 1 << l | n << o | r, vt = e;
}
function Us(e) {
  e.return !== null && (qt(e, 1), _d(e, 1, 0));
}
function Hs(e) {
  for (; e === sl; ) sl = zn[--Pn], zn[Pn] = null, al = zn[--Pn], zn[Pn] = null;
  for (; e === ln; ) ln = Ue[--He], Ue[He] = null, vt = Ue[--He], Ue[He] = null, gt = Ue[--He], Ue[He] = null;
}
var $e = null, Ie = null, ee = !1, Ze = null;
function kd(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, Ie = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function ts(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ns(e) {
  if (ee) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!bu(e, t)) {
        if (ts(e)) throw Error(S(418));
        t = Ft(n.nextSibling);
        var r = $e;
        t && bu(e, t) ? kd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, $e = e);
      }
    } else {
      if (ts(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, $e = e;
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Lo(e) {
  if (e !== $e) return !1;
  if (!ee) return Ru(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (ts(e)) throw Sd(), Error(S(418));
    for (; t; ) kd(e, t), t = Ft(t.nextSibling);
  }
  if (Ru(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = $e ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Sd() {
  for (var e = Ie; e; ) e = Ft(e.nextSibling);
}
function Un() {
  Ie = $e = null, ee = !1;
}
function Bs(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var ih = St.ReactCurrentBatchConfig;
function fr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var u = o.refs;
        i === null ? delete u[l] : u[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function bo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mu(e) {
  var t = e._init;
  return t(e._payload);
}
function Cd(e) {
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
  function o(p, d) {
    return p = Bt(p, d), p.index = 0, p.sibling = null, p;
  }
  function l(p, d, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < d ? (p.flags |= 2, d) : h) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, _) {
    return d === null || d.tag !== 6 ? (d = Si(h, p.mode, _), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var E = h.type;
    return E === kn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tt && Mu(E) === d.type) ? (_ = o(d, h.props), _.ref = fr(p, d, h), _.return = p, _) : (_ = Ko(h.type, h.key, h.props, null, p.mode, _), _.ref = fr(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Ci(h, p.mode, _), d.return = p, d) : (d = o(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, E) {
    return d === null || d.tag !== 7 ? (d = rn(h, p.mode, _, E), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Si("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case _o:
          return h = Ko(d.type, d.key, d.props, null, p.mode, h), h.ref = fr(p, null, d), h.return = p, h;
        case _n:
          return d = Ci(d, p.mode, h), d.return = p, d;
        case Tt:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (gr(d) || sr(d)) return d = rn(d, p.mode, h, null), d.return = p, d;
      bo(p, d);
    }
    return null;
  }
  function y(p, d, h, _) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _o:
          return h.key === E ? c(p, d, h, _) : null;
        case _n:
          return h.key === E ? m(p, d, h, _) : null;
        case Tt:
          return E = h._init, y(
            p,
            d,
            E(h._payload),
            _
          );
      }
      if (gr(h) || sr(h)) return E !== null ? null : x(p, d, h, _, null);
      bo(p, h);
    }
    return null;
  }
  function C(p, d, h, _, E) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case _o:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, E);
        case _n:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, E);
        case Tt:
          var L = _._init;
          return C(p, d, h, L(_._payload), E);
      }
      if (gr(_) || sr(_)) return p = p.get(h) || null, x(d, p, _, E, null);
      bo(d, _);
    }
    return null;
  }
  function N(p, d, h, _) {
    for (var E = null, L = null, b = d, R = d = 0, Y = null; b !== null && R < h.length; R++) {
      b.index > R ? (Y = b, b = null) : Y = b.sibling;
      var I = y(p, b, h[R], _);
      if (I === null) {
        b === null && (b = Y);
        break;
      }
      e && b && I.alternate === null && t(p, b), d = l(I, d, R), L === null ? E = I : L.sibling = I, L = I, b = Y;
    }
    if (R === h.length) return n(p, b), ee && qt(p, R), E;
    if (b === null) {
      for (; R < h.length; R++) b = w(p, h[R], _), b !== null && (d = l(b, d, R), L === null ? E = b : L.sibling = b, L = b);
      return ee && qt(p, R), E;
    }
    for (b = r(p, b); R < h.length; R++) Y = C(b, p, R, h[R], _), Y !== null && (e && Y.alternate !== null && b.delete(Y.key === null ? R : Y.key), d = l(Y, d, R), L === null ? E = Y : L.sibling = Y, L = Y);
    return e && b.forEach(function(de) {
      return t(p, de);
    }), ee && qt(p, R), E;
  }
  function j(p, d, h, _) {
    var E = sr(h);
    if (typeof E != "function") throw Error(S(150));
    if (h = E.call(h), h == null) throw Error(S(151));
    for (var L = E = null, b = d, R = d = 0, Y = null, I = h.next(); b !== null && !I.done; R++, I = h.next()) {
      b.index > R ? (Y = b, b = null) : Y = b.sibling;
      var de = y(p, b, I.value, _);
      if (de === null) {
        b === null && (b = Y);
        break;
      }
      e && b && de.alternate === null && t(p, b), d = l(de, d, R), L === null ? E = de : L.sibling = de, L = de, b = Y;
    }
    if (I.done) return n(
      p,
      b
    ), ee && qt(p, R), E;
    if (b === null) {
      for (; !I.done; R++, I = h.next()) I = w(p, I.value, _), I !== null && (d = l(I, d, R), L === null ? E = I : L.sibling = I, L = I);
      return ee && qt(p, R), E;
    }
    for (b = r(p, b); !I.done; R++, I = h.next()) I = C(b, p, R, I.value, _), I !== null && (e && I.alternate !== null && b.delete(I.key === null ? R : I.key), d = l(I, d, R), L === null ? E = I : L.sibling = I, L = I);
    return e && b.forEach(function(nt) {
      return t(p, nt);
    }), ee && qt(p, R), E;
  }
  function W(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === kn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _o:
          e: {
            for (var E = h.key, L = d; L !== null; ) {
              if (L.key === E) {
                if (E = h.type, E === kn) {
                  if (L.tag === 7) {
                    n(p, L.sibling), d = o(L, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (L.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tt && Mu(E) === L.type) {
                  n(p, L.sibling), d = o(L, h.props), d.ref = fr(p, L, h), d.return = p, p = d;
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === kn ? (d = rn(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Ko(h.type, h.key, h.props, null, p.mode, _), _.ref = fr(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case _n:
          e: {
            for (L = h.key; d !== null; ) {
              if (d.key === L) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(p, d.sibling), d = o(d, h.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = Ci(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case Tt:
          return L = h._init, W(p, d, L(h._payload), _);
      }
      if (gr(h)) return N(p, d, h, _);
      if (sr(h)) return j(p, d, h, _);
      bo(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = o(d, h), d.return = p, p = d) : (n(p, d), d = Si(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return W;
}
var Hn = Cd(!0), Nd = Cd(!1), ul = Gt(null), cl = null, Tn = null, Vs = null;
function Ws() {
  Vs = Tn = cl = null;
}
function Qs(e) {
  var t = ul.current;
  Z(ul), e._currentValue = t;
}
function rs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function On(e, t) {
  cl = e, Vs = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (Vs !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
    if (cl === null) throw Error(S(308));
    Tn = e, cl.dependencies = { lanes: 0, firstContext: e };
  } else Tn = Tn.next = e;
  return t;
}
var en = null;
function Gs(e) {
  en === null ? en = [e] : en.push(e);
}
function jd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Gs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Ks(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ed(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, _t(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Gs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _t(e, n);
}
function Ho(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function dl(e, t, n, r) {
  var o = e.updateQueue;
  Lt = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var c = u, m = c.next;
    c.next = null, i === null ? l = m : i.next = m, i = c;
    var x = e.alternate;
    x !== null && (x = x.updateQueue, u = x.lastBaseUpdate, u !== i && (u === null ? x.firstBaseUpdate = m : u.next = m, x.lastBaseUpdate = c));
  }
  if (l !== null) {
    var w = o.baseState;
    i = 0, x = m = c = null, u = l;
    do {
      var y = u.lane, C = u.eventTime;
      if ((r & y) === y) {
        x !== null && (x = x.next = {
          eventTime: C,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var N = e, j = u;
          switch (y = t, C = n, j.tag) {
            case 1:
              if (N = j.payload, typeof N == "function") {
                w = N.call(C, w, y);
                break e;
              }
              w = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = j.payload, y = typeof N == "function" ? N.call(C, w, y) : N, y == null) break e;
              w = oe({}, w, y);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [u] : y.push(u));
      } else C = { eventTime: C, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, x === null ? (m = x = C, c = w) : x = x.next = C, i |= y;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (x === null && (c = w), o.baseState = c, o.firstBaseUpdate = m, o.lastBaseUpdate = x, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    an |= i, e.lanes = i, e.memoizedState = w;
  }
}
function $u(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var Yr = {}, ft = Gt(Yr), Fr = Gt(Yr), Ar = Gt(Yr);
function tn(e) {
  if (e === Yr) throw Error(S(174));
  return e;
}
function Ys(e, t) {
  switch (K(Ar, t), K(Fr, e), K(ft, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Oi(t, e);
  }
  Z(ft), K(ft, t);
}
function Bn() {
  Z(ft), Z(Fr), Z(Ar);
}
function zd(e) {
  tn(Ar.current);
  var t = tn(ft.current), n = Oi(t, e.type);
  t !== n && (K(Fr, e), K(ft, n));
}
function Xs(e) {
  Fr.current === e && (Z(ft), Z(Fr));
}
var ne = Gt(0);
function fl(e) {
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
var vi = [];
function qs() {
  for (var e = 0; e < vi.length; e++) vi[e]._workInProgressVersionPrimary = null;
  vi.length = 0;
}
var Bo = St.ReactCurrentDispatcher, yi = St.ReactCurrentBatchConfig, sn = 0, re = null, ue = null, pe = null, pl = !1, Cr = !1, Ur = 0, sh = 0;
function we() {
  throw Error(S(321));
}
function Zs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Js(e, t, n, r, o, l) {
  if (sn = l, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bo.current = e === null || e.memoizedState === null ? dh : fh, e = n(r, o), Cr) {
    l = 0;
    do {
      if (Cr = !1, Ur = 0, 25 <= l) throw Error(S(301));
      l += 1, pe = ue = null, t.updateQueue = null, Bo.current = ph, e = n(r, o);
    } while (Cr);
  }
  if (Bo.current = ml, t = ue !== null && ue.next !== null, sn = 0, pe = ue = re = null, pl = !1, t) throw Error(S(300));
  return e;
}
function ea() {
  var e = Ur !== 0;
  return Ur = 0, e;
}
function ut() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? re.memoizedState = pe = e : pe = pe.next = e, pe;
}
function Qe() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = pe === null ? re.memoizedState : pe.next;
  if (t !== null) pe = t, ue = e;
  else {
    if (e === null) throw Error(S(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, pe === null ? re.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xi(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ue, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var u = i = null, c = null, m = l;
    do {
      var x = m.lane;
      if ((sn & x) === x) c !== null && (c = c.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
      else {
        var w = {
          lane: x,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null
        };
        c === null ? (u = c = w, i = r) : c = c.next = w, re.lanes |= x, an |= x;
      }
      m = m.next;
    } while (m !== null && m !== l);
    c === null ? i = r : c.next = u, tt(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, re.lanes |= l, an |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wi(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    tt(l, t.memoizedState) || (Te = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Pd() {
}
function Td(e, t) {
  var n = re, r = Qe(), o = t(), l = !tt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Te = !0), r = r.queue, ta(Rd.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || pe !== null && pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Br(9, bd.bind(null, n, r, o, t), void 0, null), me === null) throw Error(S(349));
    sn & 30 || Ld(n, t, o);
  }
  return o;
}
function Ld(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function bd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Md(t) && Id(e);
}
function Rd(e, t, n) {
  return n(function() {
    Md(t) && Id(e);
  });
}
function Md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function Id(e) {
  var t = _t(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Ou(e) {
  var t = ut();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ch.bind(null, re, e), [t.memoizedState, e];
}
function Br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $d() {
  return Qe().memoizedState;
}
function Vo(e, t, n, r) {
  var o = ut();
  re.flags |= e, o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (l = i.destroy, r !== null && Zs(r, i.deps)) {
      o.memoizedState = Br(t, n, l, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = Br(1 | t, n, l, r);
}
function Du(e, t) {
  return Vo(8390656, 8, e, t);
}
function ta(e, t) {
  return El(2048, 8, e, t);
}
function Od(e, t) {
  return El(4, 2, e, t);
}
function Dd(e, t) {
  return El(4, 4, e, t);
}
function Fd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ad(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, Fd.bind(null, t, e), n);
}
function na() {
}
function Ud(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Hd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bd(e, t, n) {
  return sn & 21 ? (tt(n, t) || (n = Kc(), re.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
}
function ah(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = yi.transition;
  yi.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, yi.transition = r;
  }
}
function Vd() {
  return Qe().memoizedState;
}
function uh(e, t, n) {
  var r = Ht(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wd(e)) Qd(t, n);
  else if (n = jd(e, t, n, r), n !== null) {
    var o = Ne();
    et(n, e, r, o), Gd(n, t, r);
  }
}
function ch(e, t, n) {
  var r = Ht(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wd(e)) Qd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, u = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = u, tt(u, i)) {
        var c = t.interleaved;
        c === null ? (o.next = o, Gs(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = jd(e, t, o, r), n !== null && (o = Ne(), et(n, e, r, o), Gd(n, t, r));
  }
}
function Wd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Qd(e, t) {
  Cr = pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
  }
}
var ml = { readContext: We, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, dh = { readContext: We, useCallback: function(e, t) {
  return ut().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: Du, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vo(
    4194308,
    4,
    Fd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ut();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ut();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ut();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ou, useDebugValue: na, useDeferredValue: function(e) {
  return ut().memoizedState = e;
}, useTransition: function() {
  var e = Ou(!1), t = e[0];
  return e = ah.bind(null, e[1]), ut().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = ut();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), me === null) throw Error(S(349));
    sn & 30 || Ld(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Du(Rd.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Br(9, bd.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = ut(), t = me.identifierPrefix;
  if (ee) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fh = {
  readContext: We,
  useCallback: Ud,
  useContext: We,
  useEffect: ta,
  useImperativeHandle: Ad,
  useInsertionEffect: Od,
  useLayoutEffect: Dd,
  useMemo: Hd,
  useReducer: xi,
  useRef: $d,
  useState: function() {
    return xi(Hr);
  },
  useDebugValue: na,
  useDeferredValue: function(e) {
    var t = Qe();
    return Bd(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = xi(Hr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: Pd,
  useSyncExternalStore: Td,
  useId: Vd,
  unstable_isNewReconciler: !1
}, ph = { readContext: We, useCallback: Ud, useContext: We, useEffect: ta, useImperativeHandle: Ad, useInsertionEffect: Od, useLayoutEffect: Dd, useMemo: Hd, useReducer: wi, useRef: $d, useState: function() {
  return wi(Hr);
}, useDebugValue: na, useDeferredValue: function(e) {
  var t = Qe();
  return ue === null ? t.memoizedState = e : Bd(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = wi(Hr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: Pd, useSyncExternalStore: Td, useId: Vd, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function os(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Ht(e), l = yt(r, o);
  l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (et(t, e, o, r), Ho(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Ht(e), l = yt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (et(t, e, o, r), Ho(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Ht(e), o = yt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (et(t, e, r, n), Ho(t, e, r));
} };
function Fu(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(o, l) : !0;
}
function Kd(e, t, n) {
  var r = !1, o = Wt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = We(l) : (o = be(t) ? on : Se.current, r = t.contextTypes, l = (r = r != null) ? An(e, o) : Wt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Au(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function ls(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ks(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = We(l) : (l = be(t) ? on : Se.current, o.context = An(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (os(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && zl.enqueueReplaceState(o, o.state, null), dl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Up(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function _i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mh = typeof WeakMap == "function" ? WeakMap : Map;
function Yd(e, t, n) {
  n = yt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, gs = r), is(e, t);
  }, n;
}
function Xd(e, t, n) {
  n = yt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      is(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    is(e, t), typeof r != "function" && (Ut === null ? Ut = /* @__PURE__ */ new Set([this]) : Ut.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Uu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = zh.bind(null, e, t, n), t.then(e, e));
}
function Hu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var hh = St.ReactCurrentOwner, Te = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Nd(t, null, n, r) : Hn(t, e.child, n, r);
}
function Vu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return On(t, o), r = Js(e, t, n, r, l, o), n = ea(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && n && Us(t), t.flags |= 1, Ce(e, t, r, o), t.child);
}
function Wu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !ca(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, qd(e, t, l, r, o)) : (e = Ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ir, n(i, r) && e.ref === t.ref) return kt(e, t, o);
  }
  return t.flags |= 1, e = Bt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function qd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ir(l, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
    else return t.lanes = e.lanes, kt(e, t, o);
  }
  return ss(e, t, n, r, o);
}
function Zd(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(bn, Me), Me |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(bn, Me), Me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(bn, Me), Me |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(bn, Me), Me |= r;
  return Ce(e, t, o, n), t.child;
}
function Jd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ss(e, t, n, r, o) {
  var l = be(n) ? on : Se.current;
  return l = An(t, l), On(t, o), n = Js(e, t, n, r, l, o), r = ea(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && r && Us(t), t.flags |= 1, Ce(e, t, n, o), t.child);
}
function Qu(e, t, n, r, o) {
  if (be(n)) {
    var l = !0;
    il(t);
  } else l = !1;
  if (On(t, o), t.stateNode === null) Wo(e, t), Kd(t, n, r), ls(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = We(m) : (m = be(n) ? on : Se.current, m = An(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Au(t, i, r, m), Lt = !1;
    var y = t.memoizedState;
    i.state = y, dl(t, r, i, o), c = t.memoizedState, u !== r || y !== c || Le.current || Lt ? (typeof x == "function" && (os(t, n, x, r), c = t.memoizedState), (u = Lt || Fu(t, n, u, r, y, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Ed(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : Xe(t.type, u), i.props = m, w = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = We(c) : (c = be(n) ? on : Se.current, c = An(t, c));
    var C = n.getDerivedStateFromProps;
    (x = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || y !== c) && Au(t, i, r, c), Lt = !1, y = t.memoizedState, i.state = y, dl(t, r, i, o);
    var N = t.memoizedState;
    u !== w || y !== N || Le.current || Lt ? (typeof C == "function" && (os(t, n, C, r), N = t.memoizedState), (m = Lt || Fu(t, n, m, r, y, N, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), i.props = r, i.state = N, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return as(e, t, n, r, l, o);
}
function as(e, t, n, r, o, l) {
  Jd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Lu(t, n, !1), kt(e, t, l);
  r = t.stateNode, hh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Hn(t, e.child, null, l), t.child = Hn(t, null, u, l)) : Ce(e, t, u, l), t.memoizedState = r.state, o && Lu(t, n, !0), t.child;
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), Ys(e, t.containerInfo);
}
function Gu(e, t, n, r, o) {
  return Un(), Bs(o), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var us = { dehydrated: null, treeContext: null, retryLane: 0 };
function cs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps, o = ne.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ne, o & 1), e === null)
    return ns(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Ll(i, r, 0, null), e = rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = cs(n), t.memoizedState = us, e) : ra(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return gh(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Bt(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Bt(u, l) : (l = rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? cs(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = us, r;
  }
  return l = e.child, e = l.sibling, r = Bt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ra(e, t) {
  return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ro(e, t, n, r) {
  return r !== null && Bs(r), Hn(t, e.child, null, n), e = ra(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _i(Error(S(422))), Ro(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Ll({ mode: "visible", children: r.children }, o, 0, null), l = rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Hn(t, e.child, null, i), t.child.memoizedState = cs(i), t.memoizedState = us, l);
  if (!(t.mode & 1)) return Ro(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, l = Error(S(419)), r = _i(l, r, void 0), Ro(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Te || u) {
    if (r = me, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, _t(e, o), et(r, e, o, -1));
    }
    return ua(), r = _i(Error(S(421))), Ro(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ph.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ie = Ft(o.nextSibling), $e = t, ee = !0, Ze = null, e !== null && (Ue[He++] = gt, Ue[He++] = vt, Ue[He++] = ln, gt = e.id, vt = e.overflow, ln = t), t = ra(t, r.children), t.flags |= 4096, t);
}
function Ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rs(e.return, t, n);
}
function ki(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function nf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Ce(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ku(e, n, t);
      else if (e.tag === 19) Ku(e, n, t);
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
  if (K(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ki(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && fl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ki(t, !0, n, null, l);
      break;
    case "together":
      ki(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Bt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vh(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), Un();
      break;
    case 5:
      zd(t);
      break;
    case 1:
      be(t.type) && il(t);
      break;
    case 4:
      Ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(ul, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tf(e, t, n) : (K(ne, ne.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zd(e, t, n);
  }
  return kt(e, t, n);
}
var rf, ds, of, lf;
rf = function(e, t) {
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
ds = function() {
};
of = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, tn(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = Ri(e, o), r = Ri(e, r), l = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = $i(e, o), r = $i(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Di(n, r);
    var i;
    n = null;
    for (m in o) if (!r.hasOwnProperty(m) && o.hasOwnProperty(m) && o[m] != null) if (m === "style") {
      var u = o[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (zr.hasOwnProperty(m) ? l || (l = []) : (l = l || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = o != null ? o[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (l || (l = []), l.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (l = l || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (zr.hasOwnProperty(m) ? (c != null && m === "onScroll" && q("scroll", e), l || u === c || (l = [])) : (l = l || []).push(m, c));
    }
    n && (l = l || []).push("style", n);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
lf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!ee) switch (e.tailMode) {
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
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yh(e, t, n) {
  var r = t.pendingProps;
  switch (Hs(t), t.tag) {
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
      return be(t.type) && ll(), _e(t), null;
    case 3:
      return r = t.stateNode, Bn(), Z(Le), Z(Se), qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (xs(Ze), Ze = null))), ds(e, t), _e(t), null;
    case 5:
      Xs(t);
      var o = tn(Ar.current);
      if (n = t.type, e !== null && t.stateNode != null) of(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return _e(t), null;
        }
        if (e = tn(ft.current), Lo(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[ct] = t, r[Dr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < yr.length; o++) q(yr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q(
                "error",
                r
              ), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              ru(r, l), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, q("invalid", r);
              break;
            case "textarea":
              lu(r, l), q("invalid", r);
          }
          Di(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var u = l[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && To(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && To(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : zr.hasOwnProperty(i) && u != null && i === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              ko(r), ou(r, l, !0);
              break;
            case "textarea":
              ko(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ol);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ct] = t, e[Dr] = r, rf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Fi(n, r), n) {
              case "dialog":
                q("cancel", e), q("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < yr.length; o++) q(yr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  e
                ), q("load", e), o = r;
                break;
              case "details":
                q("toggle", e), o = r;
                break;
              case "input":
                ru(e, r), o = Ri(e, r), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                lu(e, r), o = $i(e, r), q("invalid", e);
                break;
              default:
                o = r;
            }
            Di(n, o), u = o;
            for (l in u) if (u.hasOwnProperty(l)) {
              var c = u[l];
              l === "style" ? $c(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Mc(e, c)) : l === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Pr(e, c) : typeof c == "number" && Pr(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (zr.hasOwnProperty(l) ? c != null && l === "onScroll" && q("scroll", e) : c != null && Es(e, l, c, i));
            }
            switch (n) {
              case "input":
                ko(e), ou(e, r, !1);
                break;
              case "textarea":
                ko(e), iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Rn(e, !!r.multiple, l, !1) : r.defaultValue != null && Rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ol);
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
      if (e && t.stateNode != null) lf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = tn(Ar.current), tn(ft.current), Lo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (l = r.nodeValue !== n) && (e = $e, e !== null)) switch (e.tag) {
            case 3:
              To(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && To(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (Z(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Ie !== null && t.mode & 1 && !(t.flags & 128)) Sd(), Un(), t.flags |= 98560, l = !1;
        else if (l = Lo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
            l[ct] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), l = !1;
        } else Ze !== null && (xs(Ze), Ze = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : ua())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Bn(), ds(e, t), e === null && $r(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return Qs(t.type._context), _e(t), null;
    case 17:
      return be(t.type) && ll(), _e(t), null;
    case 19:
      if (Z(ne), l = t.memoizedState, l === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) pr(l, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = fl(e), i !== null) {
            for (t.flags |= 128, pr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && ie() > Wn && (t.flags |= 128, r = !0, pr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return _e(t), null;
        } else 2 * ie() - l.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, pr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, n = ne.current, K(ne, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return aa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function xh(e, t) {
  switch (Hs(t), t.tag) {
    case 1:
      return be(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Bn(), Z(Le), Z(Se), qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xs(t), null;
    case 13:
      if (Z(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ne), null;
    case 4:
      return Bn(), null;
    case 10:
      return Qs(t.type._context), null;
    case 22:
    case 23:
      return aa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1, ke = !1, wh = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function fs(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Yu = !1;
function _h(e, t) {
  if (Yi = tl, e = cd(), As(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, c = -1, m = 0, x = 0, w = e, y = null;
        t: for (; ; ) {
          for (var C; w !== n || o !== 0 && w.nodeType !== 3 || (u = i + o), w !== l || r !== 0 && w.nodeType !== 3 || (c = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (C = w.firstChild) !== null; )
            y = w, w = C;
          for (; ; ) {
            if (w === e) break t;
            if (y === n && ++m === o && (u = i), y === l && ++x === r && (c = i), (C = w.nextSibling) !== null) break;
            w = y, y = w.parentNode;
          }
          w = C;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, tl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var j = N.memoizedProps, W = N.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Xe(t.type, j), W);
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
          throw Error(S(163));
      }
    } catch (_) {
      le(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return N = Yu, Yu = !1, N;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && fs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Pl(e, t) {
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
function ps(e) {
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
function sf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Dr], delete t[Ji], delete t[rh], delete t[oh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function af(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || af(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ms(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && (e = e.child, e !== null)) for (ms(e, t, n), e = e.sibling; e !== null; ) ms(e, t, n), e = e.sibling;
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), e = e.sibling;
}
var ge = null, qe = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) uf(e, t, n), n = n.sibling;
}
function uf(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(_l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || Ln(n, t);
    case 6:
      var r = ge, o = qe;
      ge = null, Pt(e, t, n), ge = r, qe = o, ge !== null && (qe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (qe ? (e = ge, n = n.stateNode, e.nodeType === 8 ? hi(e.parentNode, n) : e.nodeType === 1 && hi(e, n), Rr(e)) : hi(ge, n.stateNode));
      break;
    case 4:
      r = ge, o = qe, ge = n.stateNode.containerInfo, qe = !0, Pt(e, t, n), ge = r, qe = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && fs(n, t, i), o = o.next;
        } while (o !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (!ke && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Pt(e, t, n), ke = r) : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wh()), t.forEach(function(r) {
      var o = Th.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ge = u.stateNode, qe = !1;
            break e;
          case 3:
            ge = u.stateNode.containerInfo, qe = !0;
            break e;
          case 4:
            ge = u.stateNode.containerInfo, qe = !0;
            break e;
        }
        u = u.return;
      }
      if (ge === null) throw Error(S(160));
      uf(l, i, o), ge = null, qe = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (m) {
      le(o, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cf(t, e), t = t.sibling;
}
function cf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), at(e), r & 4) {
        try {
          Nr(3, e, e.return), Pl(3, e);
        } catch (j) {
          le(e, e.return, j);
        }
        try {
          Nr(5, e, e.return);
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 1:
      Ye(t, e), at(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (Ye(t, e), at(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Pr(o, "");
        } catch (j) {
          le(e, e.return, j);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && l.type === "radio" && l.name != null && Lc(o, l), Fi(u, i);
          var m = Fi(u, l);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? $c(o, w) : x === "dangerouslySetInnerHTML" ? Mc(o, w) : x === "children" ? Pr(o, w) : Es(o, x, w, m);
          }
          switch (u) {
            case "input":
              Mi(o, l);
              break;
            case "textarea":
              bc(o, l);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var C = l.value;
              C != null ? Rn(o, !!l.multiple, C, !1) : y !== !!l.multiple && (l.defaultValue != null ? Rn(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Rn(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Dr] = l;
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Ye(t, e), at(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Ye(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Rr(t.containerInfo);
      } catch (j) {
        le(e, e.return, j);
      }
      break;
    case 4:
      Ye(t, e), at(e);
      break;
    case 13:
      Ye(t, e), at(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ia = ie())), r & 4 && qu(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (m = ke) || x, Ye(t, e), ke = m) : Ye(t, e), at(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (P = e, x = e.child; x !== null; ) {
          for (w = P = x; P !== null; ) {
            switch (y = P, C = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nr(4, y, y.return);
                break;
              case 1:
                Ln(y, y.return);
                var N = y.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (j) {
                    le(r, n, j);
                  }
                }
                break;
              case 5:
                Ln(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Ju(w);
                  continue;
                }
            }
            C !== null ? (C.return = y, P = C) : Ju(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                o = w.stateNode, m ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = Ic("display", i));
              } catch (j) {
                le(e, e.return, j);
              }
            }
          } else if (w.tag === 6) {
            if (x === null) try {
              w.stateNode.nodeValue = m ? "" : w.memoizedProps;
            } catch (j) {
              le(e, e.return, j);
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
      Ye(t, e), at(e), r & 4 && qu(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (af(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Pr(o, ""), r.flags &= -33);
          var l = Xu(e);
          hs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Xu(e);
          ms(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (c) {
      le(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kh(e, t, n) {
  P = e, df(e);
}
function df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Mo;
      if (!i) {
        var u = o.alternate, c = u !== null && u.memoizedState !== null || ke;
        u = Mo;
        var m = ke;
        if (Mo = i, (ke = c) && !m) for (P = o; P !== null; ) i = P, c = i.child, i.tag === 22 && i.memoizedState !== null ? ec(o) : c !== null ? (c.return = i, P = c) : ec(o);
        for (; l !== null; ) P = l, df(l), l = l.sibling;
        P = o, Mo = u, ke = m;
      }
      Zu(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, P = l) : Zu(e);
  }
}
function Zu(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || Pl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && $u(t, l, r);
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
              $u(t, i, n);
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
                  w !== null && Rr(w);
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
            throw Error(S(163));
        }
        ke || t.flags & 512 && ps(t);
      } catch (y) {
        le(t, t.return, y);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Ju(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function ec(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (c) {
            le(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              le(t, o, c);
            }
          }
          var l = t.return;
          try {
            ps(t);
          } catch (c) {
            le(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ps(t);
          } catch (c) {
            le(t, i, c);
          }
      }
    } catch (c) {
      le(t, t.return, c);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, P = u;
      break;
    }
    P = t.return;
  }
}
var Sh = Math.ceil, hl = St.ReactCurrentDispatcher, oa = St.ReactCurrentOwner, Ve = St.ReactCurrentBatchConfig, H = 0, me = null, ae = null, ve = 0, Me = 0, bn = Gt(0), ce = 0, Vr = null, an = 0, Tl = 0, la = 0, jr = null, Pe = null, ia = 0, Wn = 1 / 0, mt = null, gl = !1, gs = null, Ut = null, Io = !1, It = null, vl = 0, Er = 0, vs = null, Qo = -1, Go = 0;
function Ne() {
  return H & 6 ? ie() : Qo !== -1 ? Qo : Qo = ie();
}
function Ht(e) {
  return e.mode & 1 ? H & 2 && ve !== 0 ? ve & -ve : ih.transition !== null ? (Go === 0 && (Go = Kc()), Go) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : td(e.type)), e) : 1;
}
function et(e, t, n, r) {
  if (50 < Er) throw Er = 0, vs = null, Error(S(185));
  Qr(e, n, r), (!(H & 2) || e !== me) && (e === me && (!(H & 2) && (Tl |= n), ce === 4 && Rt(e, ve)), Re(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Wn = ie() + 500, jl && Kt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  im(e, t);
  var r = el(e, e === me ? ve : 0);
  if (r === 0) n !== null && uu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && uu(n), t === 1) e.tag === 0 ? lh(tc.bind(null, e)) : wd(tc.bind(null, e)), th(function() {
      !(H & 6) && Kt();
    }), n = null;
    else {
      switch (Yc(r)) {
        case 1:
          n = bs;
          break;
        case 4:
          n = Qc;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = Gc;
          break;
        default:
          n = Jo;
      }
      n = xf(n, ff.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ff(e, t) {
  if (Qo = -1, Go = 0, H & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = el(e, e === me ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var l = mf();
    (me !== e || ve !== t) && (mt = null, Wn = ie() + 500, nn(e, t));
    do
      try {
        jh();
        break;
      } catch (u) {
        pf(e, u);
      }
    while (!0);
    Ws(), hl.current = l, H = o, ae !== null ? t = 0 : (me = null, ve = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (o = Vi(e), o !== 0 && (r = o, t = ys(e, o))), t === 1) throw n = Vr, nn(e, 0), Rt(e, r), Re(e, ie()), n;
    if (t === 6) Rt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ch(o) && (t = yl(e, r), t === 2 && (l = Vi(e), l !== 0 && (r = l, t = ys(e, l))), t === 1)) throw n = Vr, nn(e, 0), Rt(e, r), Re(e, ie()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Zt(e, Pe, mt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = ia + 500 - ie(), 10 < t)) {
            if (el(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Zi(Zt.bind(null, e, Pe, mt), t);
            break;
          }
          Zt(e, Pe, mt);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Je(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zi(Zt.bind(null, e, Pe, mt), r);
            break;
          }
          Zt(e, Pe, mt);
          break;
        case 5:
          Zt(e, Pe, mt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Re(e, ie()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function ys(e, t) {
  var n = jr;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && xs(t)), e;
}
function xs(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Ch(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!tt(l(), o)) return !1;
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
function Rt(e, t) {
  for (t &= ~la, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function tc(e) {
  if (H & 6) throw Error(S(327));
  Dn();
  var t = el(e, 0);
  if (!(t & 1)) return Re(e, ie()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vi(e);
    r !== 0 && (t = r, n = ys(e, r));
  }
  if (n === 1) throw n = Vr, nn(e, 0), Rt(e, t), Re(e, ie()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Pe, mt), Re(e, ie()), null;
}
function sa(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Wn = ie() + 500, jl && Kt());
  }
}
function un(e) {
  It !== null && It.tag === 0 && !(H & 6) && Dn();
  var t = H;
  H |= 1;
  var n = Ve.transition, r = V;
  try {
    if (Ve.transition = null, V = 1, e) return e();
  } finally {
    V = r, Ve.transition = n, H = t, !(H & 6) && Kt();
  }
}
function aa() {
  Me = bn.current, Z(bn);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, eh(n)), ae !== null) for (n = ae.return; n !== null; ) {
    var r = n;
    switch (Hs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ll();
        break;
      case 3:
        Bn(), Z(Le), Z(Se), qs();
        break;
      case 5:
        Xs(r);
        break;
      case 4:
        Bn();
        break;
      case 13:
        Z(ne);
        break;
      case 19:
        Z(ne);
        break;
      case 10:
        Qs(r.type._context);
        break;
      case 22:
      case 23:
        aa();
    }
    n = n.return;
  }
  if (me = e, ae = e = Bt(e.current, null), ve = Me = t, ce = 0, Vr = null, la = Tl = an = 0, Pe = jr = null, en !== null) {
    for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var i = l.next;
        l.next = o, r.next = i;
      }
      n.pending = r;
    }
    en = null;
  }
  return e;
}
function pf(e, t) {
  do {
    var n = ae;
    try {
      if (Ws(), Bo.current = ml, pl) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        pl = !1;
      }
      if (sn = 0, pe = ue = re = null, Cr = !1, Ur = 0, oa.current = null, n === null || n.return === null) {
        ce = 1, Vr = t, ae = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, c = t;
        if (t = ve, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = x.alternate;
            y ? (x.updateQueue = y.updateQueue, x.memoizedState = y.memoizedState, x.lanes = y.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var C = Hu(i);
          if (C !== null) {
            C.flags &= -257, Bu(C, i, u, l, t), C.mode & 1 && Uu(l, m, t), t = C, c = m;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Uu(l, m, t), ua();
              break e;
            }
            c = Error(S(426));
          }
        } else if (ee && u.mode & 1) {
          var W = Hu(i);
          if (W !== null) {
            !(W.flags & 65536) && (W.flags |= 256), Bu(W, i, u, l, t), Bs(Vn(c, u));
            break e;
          }
        }
        l = c = Vn(c, u), ce !== 4 && (ce = 2), jr === null ? jr = [l] : jr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var p = Yd(l, c, t);
              Iu(l, p);
              break e;
            case 1:
              u = c;
              var d = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ut === null || !Ut.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var _ = Xd(l, u, t);
                Iu(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      gf(n);
    } catch (E) {
      t = E, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mf() {
  var e = hl.current;
  return hl.current = ml, e === null ? ml : e;
}
function ua() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), me === null || !(an & 268435455) && !(Tl & 268435455) || Rt(me, ve);
}
function yl(e, t) {
  var n = H;
  H |= 2;
  var r = mf();
  (me !== e || ve !== t) && (mt = null, nn(e, t));
  do
    try {
      Nh();
      break;
    } catch (o) {
      pf(e, o);
    }
  while (!0);
  if (Ws(), H = n, hl.current = r, ae !== null) throw Error(S(261));
  return me = null, ve = 0, ce;
}
function Nh() {
  for (; ae !== null; ) hf(ae);
}
function jh() {
  for (; ae !== null && !qp(); ) hf(ae);
}
function hf(e) {
  var t = yf(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? gf(e) : ae = t, oa.current = null;
}
function gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xh(n, t), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, ae = null;
        return;
      }
    } else if (n = yh(n, t, Me), n !== null) {
      ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Zt(e, t, n) {
  var r = V, o = Ve.transition;
  try {
    Ve.transition = null, V = 1, Eh(e, t, n, r);
  } finally {
    Ve.transition = o, V = r;
  }
  return null;
}
function Eh(e, t, n, r) {
  do
    Dn();
  while (It !== null);
  if (H & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (sm(e, l), e === me && (ae = me = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Io || (Io = !0, xf(Jo, function() {
    return Dn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Ve.transition, Ve.transition = null;
    var i = V;
    V = 1;
    var u = H;
    H |= 4, oa.current = null, _h(e, n), cf(n, e), Gm(Xi), tl = !!Yi, Xi = Yi = null, e.current = n, kh(n), Zp(), H = u, V = i, Ve.transition = l;
  } else e.current = n;
  if (Io && (Io = !1, It = e, vl = o), l = e.pendingLanes, l === 0 && (Ut = null), tm(n.stateNode), Re(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gl) throw gl = !1, e = gs, gs = null, e;
  return vl & 1 && e.tag !== 0 && Dn(), l = e.pendingLanes, l & 1 ? e === vs ? Er++ : (Er = 0, vs = e) : Er = 0, Kt(), null;
}
function Dn() {
  if (It !== null) {
    var e = Yc(vl), t = Ve.transition, n = V;
    try {
      if (Ve.transition = null, V = 16 > e ? 16 : e, It === null) var r = !1;
      else {
        if (e = It, It = null, vl = 0, H & 6) throw Error(S(331));
        var o = H;
        for (H |= 4, P = e.current; P !== null; ) {
          var l = P, i = l.child;
          if (P.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (P = m; P !== null; ) {
                  var x = P;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, x, l);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, P = w;
                  else for (; P !== null; ) {
                    x = P;
                    var y = x.sibling, C = x.return;
                    if (sf(x), x === m) {
                      P = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = C, P = y;
                      break;
                    }
                    P = C;
                  }
                }
              }
              var N = l.alternate;
              if (N !== null) {
                var j = N.child;
                if (j !== null) {
                  N.child = null;
                  do {
                    var W = j.sibling;
                    j.sibling = null, j = W;
                  } while (j !== null);
                }
              }
              P = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, P = i;
          else e: for (; P !== null; ) {
            if (l = P, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                Nr(9, l, l.return);
            }
            var p = l.sibling;
            if (p !== null) {
              p.return = l.return, P = p;
              break e;
            }
            P = l.return;
          }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          i = P;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, P = h;
          else e: for (i = d; P !== null; ) {
            if (u = P, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Pl(9, u);
              }
            } catch (E) {
              le(u, u.return, E);
            }
            if (u === i) {
              P = null;
              break e;
            }
            var _ = u.sibling;
            if (_ !== null) {
              _.return = u.return, P = _;
              break e;
            }
            P = u.return;
          }
        }
        if (H = o, Kt(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(_l, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      V = n, Ve.transition = t;
    }
  }
  return !1;
}
function nc(e, t, n) {
  t = Vn(n, t), t = Yd(e, t, 1), e = At(e, t, 1), t = Ne(), e !== null && (Qr(e, 1, t), Re(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) nc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      nc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
        e = Vn(n, e), e = Xd(t, e, 1), t = At(t, e, 1), e = Ne(), t !== null && (Qr(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function zh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ve & n) === n && (ce === 4 || ce === 3 && (ve & 130023424) === ve && 500 > ie() - ia ? nn(e, 0) : la |= n), Re(e, t);
}
function vf(e, t) {
  t === 0 && (e.mode & 1 ? (t = No, No <<= 1, !(No & 130023424) && (No = 4194304)) : t = 1);
  var n = Ne();
  e = _t(e, t), e !== null && (Qr(e, t, n), Re(e, n));
}
function Ph(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), vf(e, n);
}
function Th(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), vf(e, n);
}
var yf;
yf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Te = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, vh(e, t, n);
    Te = !!(e.flags & 131072);
  }
  else Te = !1, ee && t.flags & 1048576 && _d(t, al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wo(e, t), e = t.pendingProps;
      var o = An(t, Se.current);
      On(t, n), o = Js(null, t, r, e, o, n);
      var l = ea();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (l = !0, il(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ks(t), o.updater = zl, t.stateNode = o, o._reactInternals = t, ls(t, r, e, n), t = as(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && Us(t), Ce(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = bh(r), e = Xe(r, e), o) {
          case 0:
            t = ss(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), ss(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), Qu(e, t, r, o, n);
    case 3:
      e: {
        if (ef(t), e === null) throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Ed(e, t), dl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Vn(Error(S(423)), t), t = Gu(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Vn(Error(S(424)), t), t = Gu(e, t, r, n, o);
          break e;
        } else for (Ie = Ft(t.stateNode.containerInfo.firstChild), $e = t, ee = !0, Ze = null, n = Nd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return zd(t), e === null && ns(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, qi(r, o) ? i = null : l !== null && qi(r, l) && (t.flags |= 32), Jd(e, t), Ce(e, t, i, n), t.child;
    case 6:
      return e === null && ns(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return Ys(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), Vu(e, t, r, o, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(ul, r._currentValue), r._currentValue = i, l !== null) if (tt(l.value, i)) {
          if (l.children === o.children && !Le.current) {
            t = kt(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var u = l.dependencies;
          if (u !== null) {
            i = l.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (l.tag === 1) {
                  c = yt(-1, n & -n), c.tag = 2;
                  var m = l.updateQueue;
                  if (m !== null) {
                    m = m.shared;
                    var x = m.pending;
                    x === null ? c.next = c : (c.next = x.next, x.next = c), m.pending = c;
                  }
                }
                l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), rs(
                  l.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (i = l.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), rs(i, n, t), i = l.sibling;
          } else i = l.child;
          if (i !== null) i.return = l;
          else for (i = l; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (l = i.sibling, l !== null) {
              l.return = i.return, i = l;
              break;
            }
            i = i.return;
          }
          l = i;
        }
        Ce(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, On(t, n), o = We(o), r = r(o), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Xe(r, t.pendingProps), o = Xe(r.type, o), Wu(e, t, r, o, n);
    case 15:
      return qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xe(r, o), Wo(e, t), t.tag = 1, be(r) ? (e = !0, il(t)) : e = !1, On(t, n), Kd(t, r, o), ls(t, r, o, n), as(null, t, r, !0, e, n);
    case 19:
      return nf(e, t, n);
    case 22:
      return Zd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function xf(e, t) {
  return Wc(e, t);
}
function Lh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new Lh(e, t, n, r);
}
function ca(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bh(e) {
  if (typeof e == "function") return ca(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ps) return 11;
    if (e === Ts) return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ko(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") ca(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case kn:
      return rn(n.children, o, l, t);
    case zs:
      i = 8, o |= 8;
      break;
    case Pi:
      return e = Be(12, n, t, o | 2), e.elementType = Pi, e.lanes = l, e;
    case Ti:
      return e = Be(13, n, t, o), e.elementType = Ti, e.lanes = l, e;
    case Li:
      return e = Be(19, n, t, o), e.elementType = Li, e.lanes = l, e;
    case zc:
      return Ll(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jc:
          i = 10;
          break e;
        case Ec:
          i = 9;
          break e;
        case Ps:
          i = 11;
          break e;
        case Ts:
          i = 14;
          break e;
        case Tt:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Be(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function rn(e, t, n, r) {
  return e = Be(7, e, r, t), e.lanes = n, e;
}
function Ll(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = zc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Si(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function Ci(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oi(0), this.expirationTimes = oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function da(e, t, n, r, o, l, i, u, c) {
  return e = new Rh(e, t, n, u, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Be(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ks(l), e;
}
function Mh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wf(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (be(n)) return xd(e, n, t);
  }
  return t;
}
function _f(e, t, n, r, o, l, i, u, c) {
  return e = da(n, r, !0, e, o, l, i, u, c), e.context = wf(null), n = e.current, r = Ne(), o = Ht(n), l = yt(r, o), l.callback = t ?? null, At(n, l, o), e.current.lanes = o, Qr(e, o, r), Re(e, r), e;
}
function bl(e, t, n, r) {
  var o = t.current, l = Ne(), i = Ht(o);
  return n = wf(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, i), e !== null && (et(e, o, i, l), Ho(e, o, i)), i;
}
function xl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fa(e, t) {
  rc(e, t), (e = e.alternate) && rc(e, t);
}
function Ih() {
  return null;
}
var kf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pa(e) {
  this._internalRoot = e;
}
Rl.prototype.render = pa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  bl(e, t, null, null);
};
Rl.prototype.unmount = pa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      bl(null, e, null, null);
    }), t[wt] = null;
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++) ;
    bt.splice(n, 0, e), n === 0 && ed(e);
  }
};
function ma(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function oc() {
}
function $h(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var m = xl(i);
        l.call(m);
      };
    }
    var i = _f(t, r, e, 0, null, !1, !1, "", oc);
    return e._reactRootContainer = i, e[wt] = i.current, $r(e.nodeType === 8 ? e.parentNode : e), un(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = xl(c);
      u.call(m);
    };
  }
  var c = da(e, 0, !1, null, null, !1, !1, "", oc);
  return e._reactRootContainer = c, e[wt] = c.current, $r(e.nodeType === 8 ? e.parentNode : e), un(function() {
    bl(t, c, n, r);
  }), c;
}
function Il(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var c = xl(i);
        u.call(c);
      };
    }
    bl(t, i, e, o);
  } else i = $h(n, t, e, o, r);
  return xl(i);
}
Xc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 && (Rs(t, n | 1), Re(t, ie()), !(H & 6) && (Wn = ie() + 500, Kt()));
      }
      break;
    case 13:
      un(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Ne();
          et(r, e, 1, o);
        }
      }), fa(e, 1);
  }
};
Ms = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ne();
      et(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
qc = function(e) {
  if (e.tag === 13) {
    var t = Ht(e), n = _t(e, t);
    if (n !== null) {
      var r = Ne();
      et(n, e, t, r);
    }
    fa(e, t);
  }
};
Zc = function() {
  return V;
};
Jc = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
Ui = function(e, t, n) {
  switch (t) {
    case "input":
      if (Mi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nl(r);
            if (!o) throw Error(S(90));
            Tc(r), Mi(r, o);
          }
        }
      }
      break;
    case "textarea":
      bc(e, n);
      break;
    case "select":
      t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
  }
};
Fc = sa;
Ac = un;
var Oh = { usingClientEntryPoint: !1, Events: [Kr, jn, Nl, Oc, Dc, sa] }, mr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Dh = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || Ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber) try {
    _l = $o.inject(Dh), dt = $o;
  } catch {
  }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ma(t)) throw Error(S(200));
  return Mh(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!ma(e)) throw Error(S(299));
  var n = !1, r = "", o = kf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = da(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new pa(t);
};
De.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Bc(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return un(e);
};
De.hydrate = function(e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return Il(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!ma(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = kf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = _f(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Rl(t);
};
De.render = function(e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return Il(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!Ml(e)) throw Error(S(40));
  return e._reactRootContainer ? (un(function() {
    Il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = sa;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ml(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Il(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Sf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sf);
    } catch (e) {
      console.error(e);
    }
}
Sf(), kc.exports = De;
var Fh = kc.exports, Cf, lc = Fh;
Cf = lc.createRoot, lc.hydrateRoot;
async function G(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const ic = `
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
.ns-button { min-height:40px; border:1px solid var(--divider-color); border-radius:12px; padding:0px 20px; color:var(--text-primary-color); background:var(--primary-color); box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px; cursor:pointer; transition:filter .15s ease, transform .15s ease, background .15s ease; white-space:nowrap; }
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
.ns-card { border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px; overflow:hidden; }
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
.ns-logs-layout { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:minmax(270px, 330px) minmax(0, 1fr); gap:18px; align-items:start; }
.ns-logs-sidebar { position:sticky; top:16px; min-width:0; }
.ns-logs-sidebar .ns-card__body { display:grid; gap:16px; }
.ns-logs-sidebar .ns-muted { margin:0; line-height:1.5; }
.ns-log-filter { max-width:none; }
.ns-log-filter .ns-field { margin:0; }
.ns-log-sidebar-actions { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:8px; }
.ns-log-sidebar-actions .ns-button { width:100%; }
.ns-logs-content { min-width:0; display:grid; gap:12px; }
.ns-logs-content__head { display:flex; align-items:flex-end; justify-content:space-between; gap:12px; padding:2px 2px 0; }
.ns-logs-content__head h2 { margin:0; font-size:clamp(1.18rem, 2vw, 1.34rem); letter-spacing:-0.01em; }
.ns-logs-content__head p { margin:4px 0 0; color:var(--secondary-text-color); font-size:.88rem; }
.ns-log-list { width:100%; margin:0; display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:12px; align-items:stretch; }
.ns-log-entry { width:100%; min-width:0; min-height:158px; display:grid; align-content:start; gap:10px; padding:18px; border-left:3px solid var(--divider-color); }
.ns-log-entry--info { border-left-color:var(--primary-color); }
.ns-log-entry--warning { border-left-color:var(--warning-color, #ff9800); }
.ns-log-entry--error { border-left-color:var(--error-color); }
.ns-log-entry__head { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
.ns-log-entry__head > div { display:flex; align-items:center; flex-wrap:wrap; gap:8px; min-width:0; }
.ns-log-entry__head strong { font-size:1rem; overflow-wrap:anywhere; }
.ns-log-entry time { flex:0 0 auto; color:var(--secondary-text-color); font-size:.8rem; white-space:nowrap; }
.ns-log-entry__entity { width:max-content; max-width:100%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; border:1px solid var(--divider-color); border-radius:8px; padding:5px 7px; background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); color:var(--secondary-text-color); font:.78rem/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
.ns-log-entry__detail { margin:0; color:var(--secondary-text-color); line-height:1.45; overflow-wrap:anywhere; }
.ns-log-entry__event { margin-top:auto; color:var(--secondary-text-color); font-size:.75rem; letter-spacing:.04em; text-transform:uppercase; }
.ns-badge--log-info { background:color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--log-warning { background:color-mix(in srgb, var(--warning-color, #ff9800) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--log-error { background:color-mix(in srgb, var(--error-color) 14%, var(--card-background-color)); color:var(--error-color); }
.ns-filter-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0 12px; }
.ns-custom-group-toolbar { max-width:var(--ns-page-width); margin:0 auto 14px; display:grid; gap:12px; }
.ns-custom-group-empty { width:100%; min-height:64px; display:grid; justify-items:center; gap:4px; padding:14px 16px; border:1px dashed var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--card-background-color); box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px; cursor:pointer; text-align:center; }
.ns-custom-group-empty__title { font-size:1rem; font-weight:700; }
.ns-custom-group-empty__meta { color:var(--secondary-text-color); font-size:.8rem; }
.ns-custom-group-control-panel { --ns-quick-control-height:122px; display:flex; align-items:stretch; gap:10px; min-width:0; padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); }
.ns-custom-group-member-grid { flex:1 1 auto; min-width:0; display:grid; grid-template-columns:repeat(var(--ns-quick-control-columns, 1), minmax(0, 1fr)); grid-auto-rows:var(--ns-quick-control-height); gap:10px; align-items:stretch; }
.ns-custom-group-member-grid.is-expanded { grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); grid-auto-rows:var(--ns-quick-control-height); }
.ns-custom-group-member-control { position:relative; min-width:0; height:100%; }
.ns-custom-group-member-button { width:100%; height:100%; min-width:0; min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; align-content:stretch; gap:7px; padding:13px 56px 13px 13px; overflow:hidden; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px; cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); }
.ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-member-button__tag--category { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-button__tag--area { background:color-mix(in srgb, #7b61ff 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-button strong { min-width:0; display:-webkit-box; overflow:hidden; overflow-wrap:anywhere; -webkit-box-orient:vertical; -webkit-line-clamp:2; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button > span:last-child { overflow:hidden; color:var(--secondary-text-color); font-size:.8rem; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-favorite { position:absolute; top:6px; right:6px; z-index:1; display:grid; place-items:center; width:38px; height:38px; padding:0; border:0; border-radius:0; color:var(--secondary-text-color); background:transparent; box-shadow:none; font-size:1.75rem; line-height:1; cursor:pointer; transition:color .15s ease, opacity .15s ease, transform .15s ease; }
.ns-custom-group-favorite:hover:not(:disabled) { color:var(--warning-color, #ffca28); transform:scale(1.1); }
.ns-custom-group-favorite.is-favorite { color:var(--warning-color, #ffca28); }
.ns-custom-group-favorite:disabled { opacity:.35; cursor:not-allowed; }
.ns-custom-group-expand { flex:0 0 40px; width:40px; height:var(--ns-quick-control-height); min-height:var(--ns-quick-control-height); display:grid; place-items:center; padding:0; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px; cursor:pointer; font-size:1.5rem; line-height:1; transition:filter .15s ease, transform .15s ease; }
.ns-custom-group-expand:hover { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-expand.is-expanded { color:var(--primary-color); }
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
@media (max-width: 900px) { .notify-studio { padding:14px; } .notify-studio__grid, .notify-studio__notifications-layout, .ns-logs-layout { grid-template-columns:1fr; } .notify-studio__notifications-activity, .ns-logs-sidebar { position:static; } .ns-form-grid, .ns-custom-group-manager__columns, .ns-assignment-dialog__columns { grid-template-columns:1fr; } .ns-custom-group-manager__create { grid-template-columns:1fr; align-items:stretch; } .ns-custom-group-manager__selection { align-items:flex-start; flex-direction:column; } .ns-notifications-toolbar { justify-content:flex-start; flex-wrap:wrap; } .ns-custom-group-manager__item-actions { flex-wrap:wrap; } .ns-field--full { grid-column:auto; } }
@media (max-width: 700px) { .ns-source-grid, .ns-log-list { grid-template-columns:1fr; } .ns-custom-group-control-panel { --ns-quick-control-height:112px; padding:10px; gap:8px; } .ns-custom-group-member-grid, .ns-custom-group-member-grid.is-expanded { display:grid; grid-template-columns:none; grid-auto-flow:column; grid-auto-columns:minmax(190px, 1fr); overflow-x:auto; overflow-y:hidden; overscroll-behavior-inline:contain; scroll-snap-type:x proximity; padding-bottom:4px; } .ns-custom-group-member-control { scroll-snap-align:start; } .ns-custom-group-member-button { min-height:0; } .ns-custom-group-expand { flex-basis:38px; width:38px; min-height:var(--ns-quick-control-height); } }
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } .ns-log-entry__head { align-items:flex-start; flex-direction:column; } .ns-custom-group-manager__item { align-items:flex-start; flex-direction:column; } .ns-assignment-dialog { max-height:calc(100vh - 24px); } }
`, Ah = { rendered: {}, errors: {} }, Uh = "/notify_studio_static/notify-studio-logo.png?v=0.1.21", Hh = 220, Ni = 10, Bh = 50;
function Nf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function ws(e, t) {
  const n = Nf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function sc(e) {
  const t = `Action ${e}`;
  return { id: ws(t, e), title: t, route: "event" };
}
function Vh(e, t) {
  return `notify_studio_persistent_${Nf(e || t).toLowerCase() || "notification"}`;
}
function ji(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function ac(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Yo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function uc(e) {
  return e === !0;
}
function Ei(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Wh(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Yo(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Qh(e) {
  return `${e}::group`;
}
function Gh(e, t) {
  return `${e}::member::${t}`;
}
function Kh(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function cc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yh({ hass: e }) {
  const t = k.useRef(e);
  t.current = e;
  const [n, r] = k.useState("audit"), [o, l] = k.useState(!!e), [i, u] = k.useState(!0), [c, m] = k.useState(null), [x, w] = k.useState([]), [y, C] = k.useState([]), [N, j] = k.useState([]), [W, p] = k.useState(!0), [d, h] = k.useState([]), [_, E] = k.useState(!1), [L, b] = k.useState(""), [R, Y] = k.useState([]), [I, de] = k.useState([]), [nt, Ge] = k.useState([]), [rt, $l] = k.useState(!1), [ot, Yn] = k.useState(7), [T, O] = k.useState(!1), [D, J] = k.useState(!1), [se, Ct] = k.useState(!1), [lt, fn] = k.useState(""), [it, pn] = k.useState("category"), [Ke, Nt] = k.useState(null), [ha, Ol] = k.useState(null), [Xr, qr] = k.useState([]), [Xn, ga] = k.useState(""), [ze, Dl] = k.useState(null), [jt, va] = k.useState(!1), [Zr, jf] = k.useState(""), [Jr, Ef] = k.useState(""), [eo, zf] = k.useState(""), [to, Pf] = k.useState(""), [qn, Fl] = k.useState(""), [ya, no] = k.useState(""), [mn, xa] = k.useState("A test notification from Notify Studio."), [pt, wa] = k.useState("Notify Studio"), [Zn, Al] = k.useState(""), [ro, _a] = k.useState(""), [Et, ka] = k.useState(""), [oo, Sa] = k.useState(""), [lo, Ca] = k.useState(""), [io, Na] = k.useState(""), [so, ja] = k.useState(""), [ao, Ea] = k.useState(""), [uo, za] = k.useState(""), [co, Pa] = k.useState(""), [Ul, Ta] = k.useState(!1), [fo, La] = k.useState(!1), [hn, ba] = k.useState(!1), [st, gn] = k.useState([]), [po, Ra] = k.useState(""), [mo, Ma] = k.useState(""), [ho, Ia] = k.useState(""), [go, $a] = k.useState(""), [vo, Oa] = k.useState(""), [vn, Da] = k.useState(Ah), [Jn, Fa] = k.useState(""), [Yt, yn] = k.useState(null), [Aa, er] = k.useState(""), [Ua, tr] = k.useState(""), [nr, rr] = k.useState(null), [Tf, Lf] = k.useState(""), Hl = k.useRef(0), Ha = k.useRef(null), U = k.useMemo(
    () => x.find((s) => s.id === qn) ?? null,
    [x, qn]
  ), Ba = k.useMemo(
    () => y.filter((s) => s.kind === "script"),
    [y]
  ), or = k.useMemo(
    () => L ? d.filter((s) => s.level === L) : d,
    [L, d]
  ), Bl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I)
      for (const g of f.members) {
        const v = s.get(g.source_key) ?? [];
        v.push(f), s.set(g.source_key, v);
      }
    return s;
  }, [I]), Vl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of y) s.set(f.entity_id, f);
    for (const f of ze ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [y, ze]), Va = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I) {
      let g = 0, v = 0, z = 0;
      for (const $ of f.members) {
        if (!$.entity_id.startsWith("automation.")) continue;
        g += 1;
        const M = Vl.get($.entity_id);
        (M == null ? void 0 : M.enabled) === !0 ? v += 1 : (M == null ? void 0 : M.enabled) === !1 && (z += 1);
      }
      s.set(f.id, { automations: g, enabled: v, disabled: z });
    }
    return s;
  }, [I, Vl]), Xt = k.useMemo(() => I.flatMap((s) => [
    { key: Qh(s.id), type: "group", group: s },
    ...[...s.members].sort((f, g) => f.name.localeCompare(g.name)).map((f) => ({
      key: Gh(s.id, f.source_key),
      type: "member",
      group: s,
      member: f
    }))
  ]), [I]), Wl = k.useMemo(
    () => new Map(Xt.map((s) => [s.key, s])),
    [Xt]
  ), Ql = k.useMemo(
    () => nt.map((s) => Wl.get(s)).filter((s) => s !== void 0),
    [Wl, nt]
  ), Gl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
    for (const v of ze ?? []) {
      v.category && s.add(v.category);
      for (const z of v.labels ?? []) f.add(z);
      for (const z of v.notify_devices ?? v.notifiers) g.add(z);
    }
    return {
      categories: [...s].sort((v, z) => v.localeCompare(z)),
      labels: [...f].sort((v, z) => v.localeCompare(z)),
      devices: [...g].sort((v, z) => v.localeCompare(z))
    };
  }, [ze]), Kl = k.useMemo(() => (ze ?? []).filter((s) => {
    var f;
    if (Zr && s.source !== Zr || Jr && s.category !== Jr || eo && !(s.labels ?? []).includes(eo) || to && !(s.notify_devices ?? s.notifiers).includes(to)) return !1;
    if (Xn) {
      const g = `${s.source}:${s.id}`;
      if (!((f = Bl.get(g)) != null && f.some((v) => v.id === Xn))) return !1;
    }
    return !0;
  }), [Jr, to, eo, Zr, Xn, Bl, ze]), X = k.useCallback((s) => {
    Lf(s);
  }, []), Q = k.useCallback((s, f) => {
    const g = s instanceof Error ? s.message : f;
    X(g), window.alert(g);
  }, [X]), Wa = k.useCallback(async () => {
    const s = t.current;
    if (!s) return;
    const [f, g, v, z, $, M] = await Promise.all([
      G(s, "notify_studio/info"),
      G(s, "notify_studio/list_notifiers"),
      G(s, "notify_studio/list_runnables"),
      G(s, "notify_studio/list_templates"),
      G(s, "notify_studio/list_custom_groups"),
      G(s, "notify_studio/list_custom_group_favorites")
    ]);
    m(f), w(g.services), C(v), Y(z), de($), Ge(M);
  }, []), bf = k.useCallback(async () => {
    const s = t.current;
    if (s) {
      J(!0);
      try {
        const [f, g] = await Promise.all([
          G(s, "notify_studio/list_custom_groups"),
          G(s, "notify_studio/list_custom_group_favorites")
        ]);
        de(f), Ge(g);
      } catch (f) {
        Q(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        J(!1);
      }
    }
  }, [Q]), Rf = k.useCallback(async (s, f) => {
    const g = t.current;
    if (g) {
      Nt("favorites");
      try {
        const v = await G(
          g,
          "notify_studio/set_custom_group_favorites",
          { control_keys: s }
        );
        Ge(v), f && X(f);
      } catch (v) {
        Q(v, "Unable to save quick-control favorites.");
      } finally {
        Nt(null);
      }
    }
  }, [X, Q]), Mf = (s) => {
    const f = nt.filter((z) => Wl.has(z)), g = f.includes(s);
    if (!g && f.length >= ot) {
      X(`Only ${ot} favorite control${ot === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const v = g ? f.filter((z) => z !== s) : [...f, s];
    Rf(v, g ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };
  k.useEffect(() => {
    const s = Ha.current;
    if (!s || !Xt.length) return;
    const f = () => {
      const v = s.getBoundingClientRect().width, z = window.matchMedia("(max-width: 700px)").matches, $ = Math.max(1, v - Bh - Ni), M = Math.max(
        1,
        Math.floor(($ + Ni) / (Hh + Ni))
      );
      Yn(z ? 7 : M), O(!0);
    };
    f();
    const g = new ResizeObserver(f);
    return g.observe(s), window.addEventListener("resize", f), () => {
      g.disconnect(), window.removeEventListener("resize", f);
    };
  }, [Xt.length]);
  const Qa = async () => {
    const s = t.current;
    if (!s) return;
    const f = lt.trim();
    if (!f) {
      Q(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }
    Nt("create");
    try {
      const g = await G(s, "notify_studio/create_custom_group", {
        name: f,
        kind: it
      });
      de((v) => [...v, g].sort((z, $) => z.kind === $.kind ? z.name.localeCompare($.name) : z.kind.localeCompare($.kind))), fn(""), X(`Custom ${g.kind} “${g.name}” created.`);
    } catch (g) {
      Q(g, "Unable to create the custom category or area.");
    } finally {
      Nt(null);
    }
  }, If = async (s) => {
    var v;
    const f = t.current;
    if (!f) return;
    const g = (v = window.prompt(`Rename custom ${s.kind}:`, s.name)) == null ? void 0 : v.trim();
    if (!(!g || g === s.name))
      try {
        const z = await G(f, "notify_studio/rename_custom_group", {
          group_id: s.id,
          name: g
        });
        de(($) => $.map((M) => M.id === z.id ? z : M)), X(`Custom ${z.kind} renamed to “${z.name}”.`);
      } catch (z) {
        Q(z, "Unable to rename the custom category or area.");
      }
  }, $f = async (s) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await G(f, "notify_studio/delete_custom_group", { group_id: s.id }), de((g) => g.filter((v) => v.id !== s.id)), Ge((g) => g.filter((v) => !v.startsWith(`${s.id}::`))), Xn === s.id && ga(""), X(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (g) {
        Q(g, "Unable to delete the custom category or area.");
      }
  }, lr = (s) => `${s.source}:${s.id}`, xe = ha ? I.find((s) => s.id === ha) ?? null : null, Of = (s) => {
    Ol(s.id), qr(s.members.map((f) => f.source_key)), X(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, Df = () => {
    Ol(null), qr([]), X("Custom group selection cancelled.");
  }, Ff = (s, f) => {
    const g = lr(s);
    qr((v) => f ? [.../* @__PURE__ */ new Set([...v, g])] : v.filter((z) => z !== g));
  }, Af = async () => {
    const s = t.current;
    if (!(!s || !xe)) {
      Nt("selection");
      try {
        const f = ze ?? [], g = new Set(f.map(lr)), v = new Set(Xr), z = xe.members.filter(
          (B) => !g.has(B.source_key)
        ), $ = f.filter((B) => v.has(lr(B))).map((B) => {
          var Ae;
          return {
            source_key: lr(B),
            name: B.name,
            entity_id: ((Ae = B.runtime) == null ? void 0 : Ae.entity_id) ?? ""
          };
        }), M = await G(s, "notify_studio/set_custom_group_members", {
          group_id: xe.id,
          members: [...z, ...$]
        });
        de(M);
        const he = await G(s, "notify_studio/list_custom_group_favorites");
        Ge(he), X(`Saved ${$.length} notification source${$.length === 1 ? "" : "s"} in “${xe.name}”.`), Ol(null), qr([]);
      } catch (f) {
        Q(f, "Unable to save the selected custom category or area members.");
      } finally {
        Nt(null);
      }
    }
  }, Uf = async (s, f) => {
    const g = t.current;
    if (!g) return;
    const v = Va.get(s.id), z = (v == null ? void 0 : v.automations) ?? 0;
    if (!z) {
      Q(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const $ = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${$} all ${z} automation${z === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      Nt("toggle");
      try {
        const M = await G(
          g,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: f }
        );
        X(`${s.name}: ${M.changed_entity_ids.length} automation${M.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await yo();
      } catch (M) {
        Q(M, `Unable to ${$} the automations in ${s.name}.`);
      } finally {
        Nt(null);
      }
    }
  }, ir = k.useCallback(async () => {
    const s = t.current;
    if (s) {
      p(!0);
      try {
        const f = await G(
          s,
          "notify_studio/list_recent_push_runnables"
        );
        j(f);
      } catch {
        j([]);
      } finally {
        p(!1);
      }
    }
  }, []), Yl = k.useCallback(async () => {
    const s = t.current;
    if (s) {
      E(!0);
      try {
        const f = await G(s, "notify_studio/list_logs");
        h(f);
      } catch (f) {
        Q(f, "Unable to load Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, [Q]), Hf = async () => {
    const s = t.current;
    if (!(!s || !window.confirm("Clear the Notify Studio application logs?"))) {
      E(!0);
      try {
        const f = await G(s, "notify_studio/clear_logs");
        h(f), X("Notify Studio logs cleared.");
      } catch (f) {
        Q(f, "Unable to clear Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, Ga = k.useCallback(async () => {
    try {
      await Wa(), Dl(null);
    } catch (s) {
      Q(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [X, Wa, Q]);
  k.useEffect(() => {
    e && !o && l(!0);
  }, [e, o]), k.useEffect(() => {
    o && Ga();
  }, [o, Ga]), k.useEffect(() => {
    o && ir();
  }, [o, ir]), k.useEffect(() => {
    !qn && x.length && Fl(x[0].id);
  }, [qn, x]);
  const yo = k.useCallback(async () => {
    const s = t.current;
    if (!(!s || jt)) {
      va(!0);
      try {
        Dl(await G(s, "notify_studio/scan_notify_usage")), X("Notification audit complete.");
      } catch (f) {
        Q(f, "The notification audit failed.");
      } finally {
        va(!1);
      }
    }
  }, [X, jt, Q]);
  k.useEffect(() => {
    n === "audit" && ze === null && yo();
  }, [yo, n, ze]), k.useEffect(() => {
    n === "audit" && ir();
  }, [ir, n]), k.useEffect(() => {
    n === "logs" && Yl();
  }, [Yl, n]);
  const xo = k.useCallback(() => {
    const s = {};
    if (Zn.trim() && (s.tag = Zn.trim()), ro.trim() && (s.image = ro.trim()), hn && st.length && (s.actions = st.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (U == null ? void 0 : U.platform) === "android")
      Et.trim() && (s.clickAction = Et.trim()), oo.trim() && (s.subject = oo.trim()), lo.trim() && (s.channel = lo.trim()), io && (s.importance = io), so && (s.priority = so), ao.trim() && (s.color = ao.trim()), uo.trim() && (s.notification_icon = uo.trim()), co.trim() && (s.timeout = Number(co)), Ul && (s.sticky = !0), fo && (s.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      Et.trim() && (s.url = Et.trim()), po.trim() && (s.subtitle = po.trim());
      const f = {};
      mo.trim() && (f.sound = mo.trim()), ho.trim() && (f.badge = Number(ho)), go && (f["interruption-level"] = go), vo.trim() && (f["thread-id"] = vo.trim()), Object.keys(f).length && (s.push = f);
    } else Et.trim() && (s.url = Et.trim());
    return {
      message: mn,
      ...pt.trim() ? { title: pt } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [hn, ro, ho, lo, ao, io, go, mn, st, uo, Et, fo, so, U == null ? void 0 : U.platform, mo, Ul, oo, po, Zn, vo, co, pt]), Xl = k.useCallback(() => hn ? st.filter((s) => s.route !== "uri").map((s) => {
    var f, g;
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
      if (!((g = s.service) != null && g.trim()))
        throw new Error(`Enter a Home Assistant action for the “${s.title || "untitled"}” button.`);
      return {
        action: s.id,
        type: "service",
        service: s.service.trim(),
        service_data: Wh(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [hn, st]), Bf = k.useCallback(() => ({
    payload: xo(),
    action_handlers: Xl(),
    ...U ? { target_platform: U.platform } : {}
  }), [Xl, xo, U]), Ka = () => U || (Q(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  k.useEffect(() => {
    const s = t.current;
    if (!o || !s) return;
    const f = ++Hl.current;
    let g = !1;
    const v = {
      message: mn,
      ...pt.trim() ? { title: pt } : {}
    }, z = window.setTimeout(() => {
      G(s, "notify_studio/render_preview", { payload: v }).then(($) => {
        !g && f === Hl.current && Da($);
      }).catch(($) => {
        if (g || f !== Hl.current) return;
        const M = $ instanceof Error ? $.message : "Unable to render the current template.";
        Da({ rendered: {}, errors: { message: M } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(z);
    };
  }, [o, mn, pt]);
  const Vf = async () => {
    const s = Ka();
    if (!(!s || !t.current)) {
      yn("test");
      try {
        const f = await G(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: xo()
        });
        X(`Test notification sent to ${f.target}.`);
      } catch (f) {
        Q(f, "The test notification could not be sent.");
      } finally {
        yn(null);
      }
    }
  }, Wf = async () => {
    const s = Ka();
    if (!(!s || !t.current)) {
      yn("yaml");
      try {
        const f = await G(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: xo(),
          action_handlers: Xl()
        });
        Fa(f.yaml), X("YAML generated successfully.");
      } catch (f) {
        Q(f, "Unable to generate YAML.");
      } finally {
        yn(null);
      }
    }
  }, Qf = async () => {
    var f;
    if (!Jn.trim()) {
      Q(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(Jn), s = !0;
      } catch {
      }
    if (!s) {
      const g = document.createElement("textarea");
      g.value = Jn, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
      try {
        s = document.execCommand("copy");
      } finally {
        document.body.removeChild(g);
      }
    }
    if (s) {
      X("Generated YAML copied to the clipboard.");
      return;
    }
    Q(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, Gf = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Kf = (s) => {
    const f = s.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${f}?`)) return;
    const g = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    window.location.assign(`/config/${s.kind}/edit/${encodeURIComponent(String(g))}`);
  }, Yf = (s, f) => {
    C((g) => g.map((v) => v.entity_id === s ? { ...v, ...f } : v)), Dl((g) => (g == null ? void 0 : g.map((v) => {
      var z;
      return ((z = v.runtime) == null ? void 0 : z.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, Ya = async (s, f) => {
    if (t.current)
      try {
        const g = await G(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: f
        });
        Yf(g.entity_id, {
          state: g.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), X(`${s.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (g) {
        Q(g, "Unable to update that automation.");
      }
  }, Xf = async (s) => {
    if (!t.current) return;
    const f = s.kind === "automation" ? "automation" : "script", g = s.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", v = `Run “${s.name}” now? This queues its configured ${f} actions and may control real devices.${g}`;
    if (window.confirm(v))
      try {
        const z = await G(t.current, "notify_studio/run_runnable", {
          entity_id: s.entity_id
        });
        X(`${s.name} was queued for execution${z.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          ir();
        }, 900);
      } catch (z) {
        Q(z, `Unable to run ${s.name}.`);
      }
  }, xn = (s, f) => {
    gn((g) => g.map((v, z) => z === s ? { ...v, ...f } : v));
  }, qf = (s, f) => {
    gn((g) => g.map((v, z) => z !== s ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? ws(v.title, s + 1) : v.id
    }));
  }, Zf = () => {
    const s = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    gn((f) => f.length >= s ? f : [...f, sc(f.length + 1)]);
  }, Jf = (s) => {
    gn((f) => f.filter((g, v) => v !== s));
  }, ql = k.useCallback((s) => {
    const f = s.payload, g = Yo(f.data) ? f.data : {};
    xa(te(f.message)), wa(te(f.title)), Al(te(g.tag)), _a(te(g.image)), ka(te(g.clickAction) || te(g.url)), Sa(te(g.subject)), Ca(te(g.channel)), Na(te(g.importance)), ja(te(g.priority)), Ea(te(g.color)), za(te(g.notification_icon)), Pa(g.timeout === void 0 ? "" : String(g.timeout)), Ta(uc(g.sticky)), La(uc(g.persistent)), Ra(te(g.subtitle));
    const v = Yo(g.push) ? g.push : {};
    Ma(te(v.sound)), Ia(v.badge === void 0 ? "" : String(v.badge)), $a(te(v["interruption-level"])), Oa(te(v["thread-id"]));
    const z = new Map(s.action_handlers.map((he) => [he.action, he])), M = (Array.isArray(g.actions) ? g.actions : []).filter(Yo).map((he, B) => {
      const Ae = te(he.action) || ws(`Action ${B + 1}`, B + 1), fe = z.get(Ae);
      let zt = "event";
      return Ae === "URI" && te(he.uri) ? zt = "uri" : te(he.behavior) === "textInput" ? zt = "reply" : (fe == null ? void 0 : fe.type) === "script" ? zt = "script" : (fe == null ? void 0 : fe.type) === "service" && (zt = "service"), {
        id: Ae,
        title: te(he.title) || `Action ${B + 1}`,
        route: zt,
        uri: te(he.uri),
        scriptEntityId: te(fe == null ? void 0 : fe.script_entity_id),
        service: te(fe == null ? void 0 : fe.service),
        serviceData: fe != null && fe.service_data ? JSON.stringify(fe.service_data, null, 2) : ""
      };
    });
    if (gn(M), ba(M.length > 0), Fa(""), s.target_platform && (U == null ? void 0 : U.platform) !== s.target_platform) {
      const he = x.find((B) => B.platform === s.target_platform);
      he && Fl(he.id);
    }
  }, [U == null ? void 0 : U.platform, x]), ep = (s) => {
    if (no(s), !s) return;
    const f = R.find((g) => g.id === s);
    f && (ql(f.draft), X(`Template “${f.name}” loaded into the composer.`));
  }, tp = () => {
    rr(null), er(pt.trim() || "New notification template"), tr(""), r("templates");
  }, np = (s) => {
    rr(s.id), er(s.name), tr(s.description), ql(s.draft), r("templates"), X(`Editing template “${s.name}”.`);
  }, rp = async () => {
    if (t.current) {
      yn("template");
      try {
        const s = await G(t.current, "notify_studio/save_template", {
          template: {
            ...nr ? { id: nr } : {},
            name: Aa,
            description: Ua,
            draft: Bf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === s.id) === -1 ? [s, ...f] : f.map((v) => v.id === s.id ? s : v)), no(s.id), rr(s.id), X(`Template “${s.name}” saved.`);
      } catch (s) {
        Q(s, "Unable to save the template.");
      } finally {
        yn(null);
      }
    }
  }, op = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await G(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((g) => g.id !== s.id)), ya === s.id && no(""), nr === s.id && (rr(null), er(""), tr("")), X(`Template “${s.name}” deleted.`);
      } catch (f) {
        Q(f, "Unable to delete the template.");
      }
  }, lp = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: oo, onChange: (s) => Sa(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: lo, onChange: (s) => Ca(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: io, onChange: (s) => Na(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: so, onChange: (s) => ja(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: ao, onChange: (s) => Ea(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: uo, onChange: (s) => za(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: co, onChange: (s) => Pa(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Ul, onChange: (s) => Ta(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: fo, onChange: (s) => {
        const f = s.target.checked;
        La(f), f && !Zn.trim() && Al(Vh(pt, mn));
      } }),
      " Persistent notification"
    ] }),
    fo && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: po, onChange: (s) => Ra(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: mo, onChange: (s) => Ma(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ho, onChange: (s) => Ia(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: go, onChange: (s) => $a(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: vo, onChange: (s) => Oa(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, ip = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const s = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: hn, onChange: (f) => {
          const g = f.target.checked;
          ba(g), g && !st.length && gn([sc(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      hn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ a.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-action-list", children: st.map((f, g) => /* @__PURE__ */ a.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              "Button ",
              g + 1
            ] }),
            st.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => Jf(g), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (v) => xn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (v) => qf(g, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(F, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (v) => xn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(F, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (v) => xn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(F, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => xn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              Ba.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (v) => xn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => xn(g, { serviceData: v.target.value }), placeholder: `{
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
          f.route === "script" && !Ba.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${f.id}:${g}`)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "ns-help", children: [
            st.length,
            " of ",
            s,
            " available ",
            s === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          st.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Zf, children: "Add button" })
        ] })
      ] })
    ] });
  }, sp = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: Ei(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), ap = (s) => {
    var he;
    const f = lr(s), g = (he = s.notify_devices) != null && he.length ? s.notify_devices : s.notifiers, v = s.runtime, z = Bl.get(f) ?? [], $ = xe !== null, M = Xr.includes(f);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${$ ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          $ && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(xe == null ? void 0 : xe.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: M, onChange: (B) => Ff(s, B.target.checked) }),
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
        sp(v),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
          s.category && /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            s.category
          ] }),
          (s.labels ?? []).map((B) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            B
          ] }, `label:${B}`)),
          g.map((B) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            B
          ] }, `device:${B}`))
        ] }),
        z.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: z.map((B) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${B.kind}`, children: [
          B.kind === "category" ? "Category" : "Area",
          ": ",
          B.name
        ] }, B.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Ya(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Xf(v), children: "Run test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Kf(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, up = (s) => {
    var Xa;
    const f = s.group.kind === "category" ? "Category" : "Area", g = nt.includes(s.key), v = !g && Ql.length >= ot, z = Va.get(s.group.id) ?? { automations: 0, enabled: 0 }, $ = s.type === "group", M = s.member ? Vl.get(s.member.entity_id) : void 0, B = !(z.automations > 0 && z.enabled === z.automations), Ae = $ ? z.automations === 0 ? "No automations" : B ? "Enable all" : "Disable all" : ((Xa = s.member) == null ? void 0 : Xa.name) ?? "Notification source", fe = $ ? z.automations === 0 ? "Add an automation source" : `All automations · ${z.enabled}/${z.automations} enabled` : (M == null ? void 0 : M.kind) === "automation" ? M.enabled ? "Enabled" : "Disabled" : (M == null ? void 0 : M.kind) === "script" ? "Script" : "Unavailable", zt = $ ? z.automations > 0 : (M == null ? void 0 : M.kind) === "automation";
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-member-control", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `ns-custom-group-member-button ${$ ? "ns-custom-group-member-button--all" : ""}`,
          disabled: !zt || Ke === "toggle",
          onClick: () => {
            $ ? Uf(s.group, B) : (M == null ? void 0 : M.kind) === "automation" && Ya(M, !M.enabled);
          },
          title: zt ? $ ? `${Ae} automations in ${s.group.name}` : `Toggle ${Ae}` : (M == null ? void 0 : M.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.group.kind}`, children: [
              f,
              ": ",
              s.group.name
            ] }),
            /* @__PURE__ */ a.jsx("strong", { children: Ae }),
            /* @__PURE__ */ a.jsx("span", { children: fe })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-favorite ${g ? "is-favorite" : ""}`,
          onClick: () => Mf(s.key),
          disabled: Ke === "favorites" || v,
          "aria-pressed": g,
          "aria-label": g ? `Remove ${Ae} from quick controls` : `Add ${Ae} to quick controls`,
          title: v ? "Quick row is full. Remove a star before adding another favorite." : g ? "Remove from quick controls" : "Add to quick controls",
          children: g ? "★" : "☆"
        }
      )
    ] }, s.key);
  }, cp = () => {
    if (!I.length)
      return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => Ct(!0), children: [
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
      ] }) });
    const s = rt ? Xt : Ql.length > 0 ? Ql.slice(0, ot) : Xt.slice(0, ot), f = Xt.length > s.length, g = {
      "--ns-quick-control-columns": String(Math.max(1, s.length))
    };
    return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control-panel", ref: Ha, children: [
      /* @__PURE__ */ a.jsx("div", { className: `ns-custom-group-member-grid ${rt ? "is-expanded" : ""}`, style: g, children: s.map(up) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-expand ${rt ? "is-expanded" : ""}`,
          onClick: () => $l((v) => !v),
          "aria-expanded": rt,
          "aria-label": rt ? "Collapse quick controls" : "Show all custom group controls",
          title: rt ? "Show quick controls" : f ? "Show all controls" : "Choose favourite controls",
          children: rt ? "⌃" : "⌄"
        }
      )
    ] }) });
  }, dp = () => {
    if (!se) return null;
    const s = I.filter((v) => v.kind === "category"), f = I.filter((v) => v.kind === "area"), g = (v, z) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !z.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: z.map(($) => {
        const M = (xe == null ? void 0 : xe.id) === $.id;
        return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-manager__item", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("strong", { children: $.name }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              $.members.length,
              " assigned notification source",
              $.members.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions ns-custom-group-manager__item-actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${M ? "ns-button--active" : ""}`, onClick: () => Of($), disabled: Ke === "selection", children: M ? "Selecting entities" : "Select entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void If($), disabled: Ke === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void $f($), disabled: Ke === "selection", children: "Delete" })
          ] })
        ] }, $.id);
      }) })
    ] });
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-custom-group-manager", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Custom categories and areas" }),
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels." })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void bf(), disabled: D, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Ct(!1), disabled: Ke === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(F, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: lt, onChange: (v) => fn(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Qa();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: it, onChange: (v) => pn(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Qa(), disabled: Ke === "create", children: Ke === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          g("category", s),
          g("area", f)
        ] }),
        xe && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__selection", children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
            /* @__PURE__ */ a.jsx("strong", { children: xe.name }),
            "."
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Df, disabled: Ke === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Af(), disabled: Ke === "selection", children: Ke === "selection" ? "Saving…" : `Save ${Xr.length} ${Xr.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: ic }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: ic }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: Tf }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Uh, alt: "Notify Studio" }),
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
          U && /* @__PURE__ */ a.jsx("span", { className: ac(U.platform), children: ji(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(F, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: ya, onChange: (s) => ep(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            R.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: qn, onChange: (s) => Fl(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            ji(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          U == null ? void 0 : U.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: pt, onChange: (s) => wa(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Zn, onChange: (s) => Al(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Et, onChange: (s) => ka(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: ro, onChange: (s) => _a(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: mn, onChange: (s) => xa(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          lp(),
          ip(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Vf(), disabled: Yt !== null, children: Yt === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: tp, disabled: Yt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Wf(), disabled: Yt !== null, children: Yt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx(F, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: vn.errors.title ? `Error: ${vn.errors.title}` : vn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: vn.errors.message ? `Error: ${vn.errors.message}` : vn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              Jn && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Qf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Gf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: Jn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: nr ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Aa, onChange: (s) => er(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Ua, onChange: (s) => tr(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void rp(), disabled: Yt !== null, children: Yt === "template" ? "Saving…" : nr ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              rr(null), er(""), tr("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !R.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: R.map((s) => {
        var f, g;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: s.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: s.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: ac(s.draft.target_platform), children: ji(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(g = s.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              no(s.id), ql(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => np(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void op(s), children: "Delete" })
          ] })
        ] }) }, s.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-layout", children: [
      /* @__PURE__ */ a.jsxs("aside", { className: "ns-card ns-logs-sidebar", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio. This in-memory list clears when Home Assistant restarts." }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(F, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: L, onChange: (s) => b(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
            /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
            /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
            /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
          ] }) }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-sidebar-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Yl(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Hf(), disabled: _, children: "Clear logs" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-content", "aria-label": "Notify Studio log events", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-logs-content__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { children: "Recent activity" }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            or.length,
            " event",
            or.length === 1 ? "" : "s",
            L ? ` matching ${cc(L).toLowerCase()}` : ""
          ] })
        ] }) }),
        _ && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
        !_ && !or.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
        !_ && or.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: or.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("span", { className: Kh(s.level), children: cc(s.level) }),
              /* @__PURE__ */ a.jsx("strong", { children: s.message })
            ] }),
            /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: Ei(s.timestamp) })
          ] }),
          s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
          s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
          /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
        ] }, `${s.timestamp}:${s.event}:${f}`)) })
      ] })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      cp(),
      dp(),
      /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "ns-notifications-toolbar", children: [
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => Ct(!0), children: "Manage groups" }),
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void yo(), disabled: jt, children: jt ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Zr, onChange: (s) => jf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: Jr, onChange: (s) => Ef(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Gl.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: eo, onChange: (s) => zf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Gl.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: to, onChange: (s) => Pf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Gl.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: Xn, onChange: (s) => ga(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                I.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) })
            ] }) })
          ] }),
          jt && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !jt && (ze == null ? void 0 : ze.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !jt && ze && Kl.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !jt && ze && Kl.length > 0 && /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "All notification sources" }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: Kl.map(ap) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-recent-card", children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
            W && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
            !W && !N.length && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
            !W && N.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-recent-list", children: N.map((s) => /* @__PURE__ */ a.jsxs("article", { className: "ns-recent-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "ns-recent-item__head", children: [
                /* @__PURE__ */ a.jsx("strong", { children: s.name }),
                /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.kind}`, children: s.kind })
              ] }),
              /* @__PURE__ */ a.jsxs("span", { children: [
                "Triggered ",
                Ei(s.last_triggered)
              ] })
            ] }, s.entity_id)) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function F({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ a.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    t
  ] });
}
class Xh extends HTMLElement {
  constructor() {
    super(...arguments);
    Zl(this, "root");
    Zl(this, "currentHass");
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
    this.root || (this.root = Cf(this)), this.root.render(/* @__PURE__ */ a.jsx(Yh, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Xh);
