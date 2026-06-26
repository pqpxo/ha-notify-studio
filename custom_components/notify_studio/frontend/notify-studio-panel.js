var wp = Object.defineProperty;
var _p = (e, t, n) => t in e ? wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ei = (e, t, n) => _p(e, typeof t != "symbol" ? t + "" : t, n);
var gc = { exports: {} }, wl = {}, vc = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr = Symbol.for("react.element"), kp = Symbol.for("react.portal"), Sp = Symbol.for("react.fragment"), Cp = Symbol.for("react.strict_mode"), Np = Symbol.for("react.profiler"), jp = Symbol.for("react.provider"), Ep = Symbol.for("react.context"), Tp = Symbol.for("react.forward_ref"), bp = Symbol.for("react.suspense"), zp = Symbol.for("react.memo"), Pp = Symbol.for("react.lazy"), nu = Symbol.iterator;
function Lp(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xc = Object.assign, wc = {};
function Wn(e, t, n) {
  this.props = e, this.context = t, this.refs = wc, this.updater = n || yc;
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _c() {
}
_c.prototype = Wn.prototype;
function Ss(e, t, n) {
  this.props = e, this.context = t, this.refs = wc, this.updater = n || yc;
}
var Cs = Ss.prototype = new _c();
Cs.constructor = Ss;
xc(Cs, Wn.prototype);
Cs.isPureReactComponent = !0;
var ru = Array.isArray, kc = Object.prototype.hasOwnProperty, Ns = { current: null }, Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) kc.call(t, r) && !Sc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Wr, type: e, key: l, ref: i, props: o, _owner: Ns.current };
}
function Rp(e, t) {
  return { $$typeof: Wr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function Mp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ou = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Mp("" + e.key) : t.toString(36);
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
        case kp:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ti(i, 0) : r, ru(o) ? (n = "", e != null && (n = e.replace(ou, "$&/") + "/"), Oo(o, t, n, "", function(m) {
    return m;
  })) : o != null && (js(o) && (o = Rp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(ou, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ru(e)) for (var u = 0; u < e.length; u++) {
    l = e[u];
    var c = r + ti(l, u);
    i += Oo(l, t, n, c, o);
  }
  else if (c = Lp(e), typeof c == "function") for (e = c.call(e), u = 0; !(l = e.next()).done; ) l = l.value, c = r + ti(l, u++), i += Oo(l, t, n, c, o);
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
function $p(e) {
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
var Te = { current: null }, Do = { transition: null }, Ip = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Do, ReactCurrentOwner: Ns };
function Nc() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: wo, forEach: function(e, t, n) {
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
  if (!js(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Wn;
F.Fragment = Sp;
F.Profiler = Np;
F.PureComponent = Ss;
F.StrictMode = Cp;
F.Suspense = bp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
F.act = Nc;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = xc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Ns.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) kc.call(t, c) && !Sc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
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
F.createContext = function(e) {
  return e = { $$typeof: Ep, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jp, _context: e }, e.Consumer = e;
};
F.createElement = Cc;
F.createFactory = function(e) {
  var t = Cc.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: Tp, render: e };
};
F.isValidElement = js;
F.lazy = function(e) {
  return { $$typeof: Pp, _payload: { _status: -1, _result: e }, _init: $p };
};
F.memo = function(e, t) {
  return { $$typeof: zp, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Do.transition;
  Do.transition = {};
  try {
    e();
  } finally {
    Do.transition = t;
  }
};
F.unstable_act = Nc;
F.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
F.useContext = function(e) {
  return Te.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
F.useId = function() {
  return Te.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return Te.current.useRef(e);
};
F.useState = function(e) {
  return Te.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return Te.current.useTransition();
};
F.version = "18.3.1";
vc.exports = F;
var _ = vc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op = _, Dp = Symbol.for("react.element"), Ap = Symbol.for("react.fragment"), Fp = Object.prototype.hasOwnProperty, Up = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Fp.call(t, r) && !Hp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Dp, type: e, key: l, ref: i, props: o, _owner: Up.current };
}
wl.Fragment = Ap;
wl.jsx = jc;
wl.jsxs = jc;
gc.exports = wl;
var a = gc.exports, Ec = { exports: {} }, Ue = {}, Tc = { exports: {} }, bc = {};
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
  function t(b, O) {
    var D = b.length;
    b.push(O);
    e: for (; 0 < D; ) {
      var X = D - 1 >>> 1, ie = b[X];
      if (0 < o(ie, O)) b[X] = O, b[D] = ie, D = X;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var O = b[0], D = b.pop();
    if (D !== O) {
      b[0] = D;
      e: for (var X = 0, ie = b.length, Gt = ie >>> 1; X < Gt; ) {
        var it = 2 * (X + 1) - 1, Kn = b[it], ue = it + 1, Ie = b[ue];
        if (0 > o(Kn, D)) ue < ie && 0 > o(Ie, Kn) ? (b[X] = Ie, b[ue] = D, X = ue) : (b[X] = Kn, b[it] = D, X = it);
        else if (ue < ie && 0 > o(Ie, D)) b[X] = Ie, b[ue] = D, X = ue;
        else break e;
      }
    }
    return O;
  }
  function o(b, O) {
    var D = b.sortIndex - O.sortIndex;
    return D !== 0 ? D : b.id - O.id;
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
  function h(b) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= b) r(m), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(m);
    }
  }
  function k(b) {
    if (j = !1, h(b), !N) if (n(c) !== null) N = !0, lt(E);
    else {
      var O = n(m);
      O !== null && fn(k, O.startTime - b);
    }
  }
  function E(b, O) {
    N = !1, j && (j = !1, p(R), R = -1), C = !0;
    var D = y;
    try {
      for (h(O), w = n(c); w !== null && (!(w.expirationTime > O) || b && !pe()); ) {
        var X = w.callback;
        if (typeof X == "function") {
          w.callback = null, y = w.priorityLevel;
          var ie = X(w.expirationTime <= O);
          O = e.unstable_now(), typeof ie == "function" ? w.callback = ie : w === n(c) && r(c), h(O);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var Gt = !0;
      else {
        var it = n(m);
        it !== null && fn(k, it.startTime - O), Gt = !1;
      }
      return Gt;
    } finally {
      w = null, y = D, C = !1;
    }
  }
  var P = !1, L = null, R = -1, Y = 5, $ = -1;
  function pe() {
    return !(e.unstable_now() - $ < Y);
  }
  function rt() {
    if (L !== null) {
      var b = e.unstable_now();
      $ = b;
      var O = !0;
      try {
        O = L(!0, b);
      } finally {
        O ? Ye() : (P = !1, L = null);
      }
    } else P = !1;
  }
  var Ye;
  if (typeof d == "function") Ye = function() {
    d(rt);
  };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(), Il = ot.port2;
    ot.port1.onmessage = rt, Ye = function() {
      Il.postMessage(null);
    };
  } else Ye = function() {
    W(rt, 0);
  };
  function lt(b) {
    L = b, P || (P = !0, Ye());
  }
  function fn(b, O) {
    R = W(function() {
      b(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    N || C || (N = !0, lt(E));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(b) {
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
      return b();
    } finally {
      y = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, O) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var D = y;
    y = b;
    try {
      return O();
    } finally {
      y = D;
    }
  }, e.unstable_scheduleCallback = function(b, O, D) {
    var X = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? X + D : X) : D = X, b) {
      case 1:
        var ie = -1;
        break;
      case 2:
        ie = 250;
        break;
      case 5:
        ie = 1073741823;
        break;
      case 4:
        ie = 1e4;
        break;
      default:
        ie = 5e3;
    }
    return ie = D + ie, b = { id: x++, callback: O, priorityLevel: b, startTime: D, expirationTime: ie, sortIndex: -1 }, D > X ? (b.sortIndex = D, t(m, b), n(c) === null && b === n(m) && (j ? (p(R), R = -1) : j = !0, fn(k, D - X))) : (b.sortIndex = ie, t(c, b), N || C || (N = !0, lt(E))), b;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(b) {
    var O = y;
    return function() {
      var D = y;
      y = O;
      try {
        return b.apply(this, arguments);
      } finally {
        y = D;
      }
    };
  };
})(bc);
Tc.exports = bc;
var Bp = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp = _, Fe = Bp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zc = /* @__PURE__ */ new Set(), Tr = {};
function cn(e, t) {
  Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) zc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zi = Object.prototype.hasOwnProperty, Wp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lu = {}, iu = {};
function Qp(e) {
  return zi.call(iu, e) ? !0 : zi.call(lu, e) ? !1 : Wp.test(e) ? iu[e] = !0 : (lu[e] = !0, !1);
}
function Gp(e, t, n, r) {
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
function Kp(e, t, n, r) {
  if (t === null || typeof t > "u" || Gp(e, t, n, r)) return !0;
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
function be(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function Ts(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Es,
    Ts
  );
  we[t] = new be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Es, Ts);
  we[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Es, Ts);
  we[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bs(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kp(t, n, o, r) && (n = null), r || o === null ? Qp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _o = Symbol.for("react.element"), wn = Symbol.for("react.portal"), _n = Symbol.for("react.fragment"), zs = Symbol.for("react.strict_mode"), Pi = Symbol.for("react.profiler"), Pc = Symbol.for("react.provider"), Lc = Symbol.for("react.context"), Ps = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), Ri = Symbol.for("react.suspense_list"), Ls = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), Rc = Symbol.for("react.offscreen"), su = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object" ? null : (e = su && e[su] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ni;
function hr(e) {
  if (ni === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ni = t && t[1] || "";
  }
  return `
` + ni + e;
}
var ri = !1;
function oi(e, t) {
  if (!e || ri) return "";
  ri = !0;
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
    ri = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Yp(e) {
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
      return e = oi(e.type, !1), e;
    case 11:
      return e = oi(e.type.render, !1), e;
    case 1:
      return e = oi(e.type, !0), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _n:
      return "Fragment";
    case wn:
      return "Portal";
    case Pi:
      return "Profiler";
    case zs:
      return "StrictMode";
    case Li:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lc:
      return (e.displayName || "Context") + ".Consumer";
    case Pc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ps:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ls:
      return t = e.displayName || null, t !== null ? t : Mi(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Mi(e(t));
      } catch {
      }
  }
  return null;
}
function Xp(e) {
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
      return Mi(t);
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
function Ht(e) {
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
function Mc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qp(e) {
  var t = Mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = qp(e));
}
function $c(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $i(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ic(e, t) {
  t = t.checked, t != null && bs(e, "checked", t, !1);
}
function Ii(e, t) {
  Ic(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oi(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Oi(e, t, n) {
  (t !== "number" || Xo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cu(e, t) {
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
  e._wrapperState = { initialValue: Ht(n) };
}
function Oc(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ai(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Dc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var So, Ac = function(e) {
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
function br(e, t) {
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
}, Zp = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function(e) {
  Zp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e];
  });
});
function Fc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px";
}
function Uc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Fc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Jp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fi(e, t) {
  if (t) {
    if (Jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Ui(e, t) {
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
var Hi = null;
function Rs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bi = null, Rn = null, Mn = null;
function fu(e) {
  if (e = Kr(e)) {
    if (typeof Bi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Nl(t), Bi(e.stateNode, e.type, t));
  }
}
function Hc(e) {
  Rn ? Mn ? Mn.push(e) : Mn = [e] : Rn = e;
}
function Bc() {
  if (Rn) {
    var e = Rn, t = Mn;
    if (Mn = Rn = null, fu(e), t) for (e = 0; e < t.length; e++) fu(t[e]);
  }
}
function Vc(e, t) {
  return e(t);
}
function Wc() {
}
var li = !1;
function Qc(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return Vc(e, t, n);
  } finally {
    li = !1, (Rn !== null || Mn !== null) && (Wc(), Bc());
  }
}
function zr(e, t) {
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
var Vi = !1;
if (xt) try {
  var ar = {};
  Object.defineProperty(ar, "passive", { get: function() {
    Vi = !0;
  } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
  Vi = !1;
}
function em(e, t, n, r, o, l, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var wr = !1, qo = null, Zo = !1, Wi = null, tm = { onError: function(e) {
  wr = !0, qo = e;
} };
function nm(e, t, n, r, o, l, i, u, c) {
  wr = !1, qo = null, em.apply(tm, arguments);
}
function rm(e, t, n, r, o, l, i, u, c) {
  if (nm.apply(this, arguments), wr) {
    if (wr) {
      var m = qo;
      wr = !1, qo = null;
    } else throw Error(S(198));
    Zo || (Zo = !0, Wi = m);
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
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function pu(e) {
  if (dn(e) !== e) throw Error(S(188));
}
function om(e) {
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
        if (l === n) return pu(o), e;
        if (l === r) return pu(o), t;
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
function Kc(e) {
  return e = om(e), e !== null ? Yc(e) : null;
}
function Yc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xc = Fe.unstable_scheduleCallback, mu = Fe.unstable_cancelCallback, lm = Fe.unstable_shouldYield, im = Fe.unstable_requestPaint, se = Fe.unstable_now, sm = Fe.unstable_getCurrentPriorityLevel, Ms = Fe.unstable_ImmediatePriority, qc = Fe.unstable_UserBlockingPriority, Jo = Fe.unstable_NormalPriority, am = Fe.unstable_LowPriority, Zc = Fe.unstable_IdlePriority, _l = null, dt = null;
function um(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : fm, cm = Math.log, dm = Math.LN2;
function fm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cm(e) / dm | 0) | 0;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function pm(e, t) {
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
function mm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - et(l), u = 1 << i, c = o[i];
    c === -1 ? (!(u & n) || u & r) && (o[i] = pm(u, t)) : c <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Qi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jc() {
  var e = Co;
  return Co <<= 1, !(Co & 4194240) && (Co = 64), e;
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function hm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - et(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function $s(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function ed(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var td, Is, nd, rd, od, Gi = !1, jo = [], Mt = null, $t = null, It = null, Pr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), zt = [], gm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function ur(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Kr(t), t !== null && Is(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function vm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Mt = ur(Mt, e, t, n, r, o), !0;
    case "dragenter":
      return $t = ur($t, e, t, n, r, o), !0;
    case "mouseover":
      return It = ur(It, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Pr.set(l, ur(Pr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Lr.set(l, ur(Lr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ld(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gc(n), t !== null) {
          e.blockedOn = t, od(e.priority, function() {
            nd(n);
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
function Ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Hi = r, n.target.dispatchEvent(r), Hi = null;
    } else return t = Kr(n), t !== null && Is(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function gu(e, t, n) {
  Ao(e) && n.delete(t);
}
function ym() {
  Gi = !1, Mt !== null && Ao(Mt) && (Mt = null), $t !== null && Ao($t) && ($t = null), It !== null && Ao(It) && (It = null), Pr.forEach(gu), Lr.forEach(gu);
}
function cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Gi || (Gi = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, ym)));
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
  for (Mt !== null && cr(Mt, e), $t !== null && cr($t, e), It !== null && cr(It, e), Pr.forEach(t), Lr.forEach(t), n = 0; n < zt.length; n++) r = zt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && (n = zt[0], n.blockedOn === null); ) ld(n), n.blockedOn === null && zt.shift();
}
var $n = St.ReactCurrentBatchConfig, tl = !0;
function xm(e, t, n, r) {
  var o = V, l = $n.transition;
  $n.transition = null;
  try {
    V = 1, Os(e, t, n, r);
  } finally {
    V = o, $n.transition = l;
  }
}
function wm(e, t, n, r) {
  var o = V, l = $n.transition;
  $n.transition = null;
  try {
    V = 4, Os(e, t, n, r);
  } finally {
    V = o, $n.transition = l;
  }
}
function Os(e, t, n, r) {
  if (tl) {
    var o = Ki(e, t, n, r);
    if (o === null) gi(e, t, r, nl, n), hu(e, r);
    else if (vm(o, e, t, n, r)) r.stopPropagation();
    else if (hu(e, r), t & 4 && -1 < gm.indexOf(e)) {
      for (; o !== null; ) {
        var l = Kr(o);
        if (l !== null && td(l), l = Ki(e, t, n, r), l === null && gi(e, t, r, nl, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var nl = null;
function Ki(e, t, n, r) {
  if (nl = null, e = Rs(r), e = Jt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return nl = e, null;
}
function id(e) {
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
      switch (sm()) {
        case Ms:
          return 1;
        case qc:
          return 4;
        case Jo:
        case am:
          return 16;
        case Zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null, Ds = null, Fo = null;
function sd() {
  if (Fo) return Fo;
  var e, t = Ds, n = t.length, r, o = "value" in Lt ? Lt.value : Lt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Fo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Uo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Eo() {
  return !0;
}
function vu() {
  return !1;
}
function He(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Eo : vu, this.isPropagationStopped = vu, this;
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
var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, As = He(Qn), Gr = oe({}, Qn, { view: 0, detail: 0 }), _m = He(Gr), si, ai, dr, kl = oe({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== dr && (dr && e.type === "mousemove" ? (si = e.screenX - dr.screenX, ai = e.screenY - dr.screenY) : ai = si = 0, dr = e), si);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ai;
} }), yu = He(kl), km = oe({}, kl, { dataTransfer: 0 }), Sm = He(km), Cm = oe({}, Gr, { relatedTarget: 0 }), ui = He(Cm), Nm = oe({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jm = He(Nm), Em = oe({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Tm = He(Em), bm = oe({}, Qn, { data: 0 }), xu = He(bm), zm = {
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
}, Pm = {
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
}, Lm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lm[e]) ? !!t[e] : !1;
}
function Fs() {
  return Rm;
}
var Mm = oe({}, Gr, { key: function(e) {
  if (e.key) {
    var t = zm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fs, charCode: function(e) {
  return e.type === "keypress" ? Uo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $m = He(Mm), Im = oe({}, kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = He(Im), Om = oe({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fs }), Dm = He(Om), Am = oe({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fm = He(Am), Um = oe({}, kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hm = He(Um), Bm = [9, 13, 27, 32], Us = xt && "CompositionEvent" in window, _r = null;
xt && "documentMode" in document && (_r = document.documentMode);
var Vm = xt && "TextEvent" in window && !_r, ad = xt && (!Us || _r && 8 < _r && 11 >= _r), _u = " ", ku = !1;
function ud(e, t) {
  switch (e) {
    case "keyup":
      return Bm.indexOf(t.keyCode) !== -1;
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
function cd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function Wm(e, t) {
  switch (e) {
    case "compositionend":
      return cd(t);
    case "keypress":
      return t.which !== 32 ? null : (ku = !0, _u);
    case "textInput":
      return e = t.data, e === _u && ku ? null : e;
    default:
      return null;
  }
}
function Qm(e, t) {
  if (kn) return e === "compositionend" || !Us && ud(e, t) ? (e = sd(), Fo = Ds = Lt = null, kn = !1, e) : null;
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
      return ad && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gm[e.type] : t === "textarea";
}
function dd(e, t, n, r) {
  Hc(r), t = rl(t, "onChange"), 0 < t.length && (n = new As("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var kr = null, Mr = null;
function Km(e) {
  kd(e, 0);
}
function Sl(e) {
  var t = Nn(e);
  if ($c(t)) return e;
}
function Ym(e, t) {
  if (e === "change") return t;
}
var fd = !1;
if (xt) {
  var ci;
  if (xt) {
    var di = "oninput" in document;
    if (!di) {
      var Cu = document.createElement("div");
      Cu.setAttribute("oninput", "return;"), di = typeof Cu.oninput == "function";
    }
    ci = di;
  } else ci = !1;
  fd = ci && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  kr && (kr.detachEvent("onpropertychange", pd), Mr = kr = null);
}
function pd(e) {
  if (e.propertyName === "value" && Sl(Mr)) {
    var t = [];
    dd(t, Mr, e, Rs(e)), Qc(Km, t);
  }
}
function Xm(e, t, n) {
  e === "focusin" ? (Nu(), kr = t, Mr = n, kr.attachEvent("onpropertychange", pd)) : e === "focusout" && Nu();
}
function qm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Mr);
}
function Zm(e, t) {
  if (e === "click") return Sl(t);
}
function Jm(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function eh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : eh;
function $r(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zi.call(t, o) || !nt(e[o], t[o])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = ju(e);
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
    n = ju(n);
  }
}
function md(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? md(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function hd() {
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
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function th(e) {
  var t = hd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && md(n.ownerDocument.documentElement, n)) {
    if (r !== null && Hs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Eu(n, l);
        var i = Eu(
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
var nh = xt && "documentMode" in document && 11 >= document.documentMode, Sn = null, Yi = null, Sr = null, Xi = !1;
function Tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xi || Sn == null || Sn !== Xo(r) || (r = Sn, "selectionStart" in r && Hs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sr && $r(Sr, r) || (Sr = r, r = rl(Yi, "onSelect"), 0 < r.length && (t = new As("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
}
function To(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Cn = { animationend: To("Animation", "AnimationEnd"), animationiteration: To("Animation", "AnimationIteration"), animationstart: To("Animation", "AnimationStart"), transitionend: To("Transition", "TransitionEnd") }, fi = {}, gd = {};
xt && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
function Cl(e) {
  if (fi[e]) return fi[e];
  if (!Cn[e]) return e;
  var t = Cn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in gd) return fi[e] = t[n];
  return e;
}
var vd = Cl("animationend"), yd = Cl("animationiteration"), xd = Cl("animationstart"), wd = Cl("transitionend"), _d = /* @__PURE__ */ new Map(), bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  _d.set(e, t), cn(t, [e]);
}
for (var pi = 0; pi < bu.length; pi++) {
  var mi = bu[pi], rh = mi.toLowerCase(), oh = mi[0].toUpperCase() + mi.slice(1);
  Vt(rh, "on" + oh);
}
Vt(vd, "onAnimationEnd");
Vt(yd, "onAnimationIteration");
Vt(xd, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(wd, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rm(r, t, void 0, e), e.currentTarget = null;
}
function kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== l && o.isPropagationStopped()) break e;
        zu(o, u, m), l = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== l && o.isPropagationStopped()) break e;
        zu(o, u, m), l = c;
      }
    }
  }
  if (Zo) throw e = Wi, Zo = !1, Wi = null, e;
}
function Z(e, t) {
  var n = t[ts];
  n === void 0 && (n = t[ts] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sd(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), Sd(n, e, r, t);
}
var bo = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[bo]) {
    e[bo] = !0, zc.forEach(function(n) {
      n !== "selectionchange" && (lh.has(n) || hi(n, !1, e), hi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bo] || (t[bo] = !0, hi("selectionchange", !1, t));
  }
}
function Sd(e, t, n, r) {
  switch (id(t)) {
    case 1:
      var o = xm;
      break;
    case 4:
      o = wm;
      break;
    default:
      o = Os;
  }
  n = o.bind(null, t, n, e), o = void 0, !Vi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function gi(e, t, n, r, o) {
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
  Qc(function() {
    var m = l, x = Rs(n), w = [];
    e: {
      var y = _d.get(e);
      if (y !== void 0) {
        var C = As, N = e;
        switch (e) {
          case "keypress":
            if (Uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = $m;
            break;
          case "focusin":
            N = "focus", C = ui;
            break;
          case "focusout":
            N = "blur", C = ui;
            break;
          case "beforeblur":
          case "afterblur":
            C = ui;
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
            C = yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Dm;
            break;
          case vd:
          case yd:
          case xd:
            C = jm;
            break;
          case wd:
            C = Fm;
            break;
          case "scroll":
            C = _m;
            break;
          case "wheel":
            C = Hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = wu;
        }
        var j = (t & 4) !== 0, W = !j && e === "scroll", p = j ? y !== null ? y + "Capture" : null : y;
        j = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var k = h.stateNode;
          if (h.tag === 5 && k !== null && (h = k, p !== null && (k = zr(d, p), k != null && j.push(Or(d, k, h)))), W) break;
          d = d.return;
        }
        0 < j.length && (y = new C(y, N, null, n, x), w.push({ event: y, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Hi && (N = n.relatedTarget || n.fromElement) && (Jt(N) || N[wt])) break e;
        if ((C || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = m, N = N ? Jt(N) : null, N !== null && (W = dn(N), N !== W || N.tag !== 5 && N.tag !== 6) && (N = null)) : (C = null, N = m), C !== N)) {
          if (j = yu, k = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = wu, k = "onPointerLeave", p = "onPointerEnter", d = "pointer"), W = C == null ? y : Nn(C), h = N == null ? y : Nn(N), y = new j(k, d + "leave", C, n, x), y.target = W, y.relatedTarget = h, k = null, Jt(x) === m && (j = new j(p, d + "enter", N, n, x), j.target = h, j.relatedTarget = W, k = j), W = k, C && N) t: {
            for (j = C, p = N, d = 0, h = j; h; h = xn(h)) d++;
            for (h = 0, k = p; k; k = xn(k)) h++;
            for (; 0 < d - h; ) j = xn(j), d--;
            for (; 0 < h - d; ) p = xn(p), h--;
            for (; d--; ) {
              if (j === p || p !== null && j === p.alternate) break t;
              j = xn(j), p = xn(p);
            }
            j = null;
          }
          else j = null;
          C !== null && Pu(w, y, C, j, !1), N !== null && W !== null && Pu(w, W, N, j, !0);
        }
      }
      e: {
        if (y = m ? Nn(m) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var E = Ym;
        else if (Su(y)) if (fd) E = Jm;
        else {
          E = qm;
          var P = Xm;
        }
        else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Zm);
        if (E && (E = E(e, m))) {
          dd(w, E, n, x);
          break e;
        }
        P && P(e, y, m), e === "focusout" && (P = y._wrapperState) && P.controlled && y.type === "number" && Oi(y, "number", y.value);
      }
      switch (P = m ? Nn(m) : window, e) {
        case "focusin":
          (Su(P) || P.contentEditable === "true") && (Sn = P, Yi = m, Sr = null);
          break;
        case "focusout":
          Sr = Yi = Sn = null;
          break;
        case "mousedown":
          Xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xi = !1, Tu(w, n, x);
          break;
        case "selectionchange":
          if (nh) break;
        case "keydown":
        case "keyup":
          Tu(w, n, x);
      }
      var L;
      if (Us) e: {
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
      else kn ? ud(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (ad && n.locale !== "ko" && (kn || R !== "onCompositionStart" ? R === "onCompositionEnd" && kn && (L = sd()) : (Lt = x, Ds = "value" in Lt ? Lt.value : Lt.textContent, kn = !0)), P = rl(m, R), 0 < P.length && (R = new xu(R, e, null, n, x), w.push({ event: R, listeners: P }), L ? R.data = L : (L = cd(n), L !== null && (R.data = L)))), (L = Vm ? Wm(e, n) : Qm(e, n)) && (m = rl(m, "onBeforeInput"), 0 < m.length && (x = new xu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = L));
    }
    kd(w, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = zr(e, n), l != null && r.unshift(Or(e, l, o)), l = zr(e, t), l != null && r.push(Or(e, l, o))), e = e.return;
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, o ? (c = zr(n, l), c != null && i.unshift(Or(n, c, u))) : o || (c = zr(n, l), c != null && i.push(Or(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ih = /\r\n?/g, sh = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e).replace(ih, `
`).replace(sh, "");
}
function zo(e, t, n) {
  if (t = Lu(t), Lu(e) !== t && n) throw Error(S(425));
}
function ol() {
}
var qi = null, Zi = null;
function Ji(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var es = typeof setTimeout == "function" ? setTimeout : void 0, ah = typeof clearTimeout == "function" ? clearTimeout : void 0, Ru = typeof Promise == "function" ? Promise : void 0, uh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ru < "u" ? function(e) {
  return Ru.resolve(null).then(e).catch(ch);
} : es;
function ch(e) {
  setTimeout(function() {
    throw e;
  });
}
function vi(e, t) {
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
function Ot(e) {
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
function Mu(e) {
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
var Gn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Gn, Dr = "__reactProps$" + Gn, wt = "__reactContainer$" + Gn, ts = "__reactEvents$" + Gn, dh = "__reactListeners$" + Gn, fh = "__reactHandles$" + Gn;
function Jt(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mu(e); e !== null; ) {
        if (n = e[ct]) return n;
        e = Mu(e);
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
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Nl(e) {
  return e[Dr] || null;
}
var ns = [], jn = -1;
function Wt(e) {
  return { current: e };
}
function J(e) {
  0 > jn || (e.current = ns[jn], ns[jn] = null, jn--);
}
function K(e, t) {
  jn++, ns[jn] = e.current, e.current = t;
}
var Bt = {}, Ne = Wt(Bt), Re = Wt(!1), on = Bt;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Me(e) {
  return e = e.childContextTypes, e != null;
}
function ll() {
  J(Re), J(Ne);
}
function $u(e, t, n) {
  if (Ne.current !== Bt) throw Error(S(168));
  K(Ne, t), K(Re, n);
}
function Cd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Xp(e) || "Unknown", o));
  return oe({}, n, r);
}
function il(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, on = Ne.current, K(Ne, e), K(Re, Re.current), !0;
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Cd(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, J(Re), J(Ne), K(Ne, e)) : J(Re), K(Re, n);
}
var ht = null, jl = !1, yi = !1;
function Nd(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function ph(e) {
  jl = !0, Nd(e);
}
function Qt() {
  if (!yi && ht !== null) {
    yi = !0;
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
      throw ht !== null && (ht = ht.slice(e + 1)), Xc(Ms, Qt), o;
    } finally {
      V = t, yi = !1;
    }
  }
  return null;
}
var En = [], Tn = 0, sl = null, al = 0, Be = [], Ve = 0, ln = null, gt = 1, vt = "";
function qt(e, t) {
  En[Tn++] = al, En[Tn++] = sl, sl = e, al = t;
}
function jd(e, t, n) {
  Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = ln, ln = e;
  var r = gt;
  e = vt;
  var o = 32 - et(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - et(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, gt = 1 << 32 - et(t) + o | n << o | r, vt = l + e;
  } else gt = 1 << l | n << o | r, vt = e;
}
function Bs(e) {
  e.return !== null && (qt(e, 1), jd(e, 1, 0));
}
function Vs(e) {
  for (; e === sl; ) sl = En[--Tn], En[Tn] = null, al = En[--Tn], En[Tn] = null;
  for (; e === ln; ) ln = Be[--Ve], Be[Ve] = null, vt = Be[--Ve], Be[Ve] = null, gt = Be[--Ve], Be[Ve] = null;
}
var Ae = null, De = null, ee = !1, Je = null;
function Ed(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, De = Ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, De = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, De = null, !0) : !1;
    default:
      return !1;
  }
}
function rs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function os(e) {
  if (ee) {
    var t = De;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (rs(e)) throw Error(S(418));
        t = Ot(n.nextSibling);
        var r = Ae;
        t && Ou(e, t) ? Ed(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ae = e);
      }
    } else {
      if (rs(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Ae = e;
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function Po(e) {
  if (e !== Ae) return !1;
  if (!ee) return Du(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ji(e.type, e.memoizedProps)), t && (t = De)) {
    if (rs(e)) throw Td(), Error(S(418));
    for (; t; ) Ed(e, t), t = Ot(t.nextSibling);
  }
  if (Du(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Ae ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function Td() {
  for (var e = De; e; ) e = Ot(e.nextSibling);
}
function Fn() {
  De = Ae = null, ee = !1;
}
function Ws(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var mh = St.ReactCurrentBatchConfig;
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
function Lo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function bd(e) {
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
    return p = Ut(p, d), p.index = 0, p.sibling = null, p;
  }
  function l(p, d, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < d ? (p.flags |= 2, d) : h) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, k) {
    return d === null || d.tag !== 6 ? (d = Ni(h, p.mode, k), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function c(p, d, h, k) {
    var E = h.type;
    return E === _n ? x(p, d, h.props.children, k, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tt && Au(E) === d.type) ? (k = o(d, h.props), k.ref = fr(p, d, h), k.return = p, k) : (k = Ko(h.type, h.key, h.props, null, p.mode, k), k.ref = fr(p, d, h), k.return = p, k);
  }
  function m(p, d, h, k) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = ji(h, p.mode, k), d.return = p, d) : (d = o(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, k, E) {
    return d === null || d.tag !== 7 ? (d = rn(h, p.mode, k, E), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ni("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case _o:
          return h = Ko(d.type, d.key, d.props, null, p.mode, h), h.ref = fr(p, null, d), h.return = p, h;
        case wn:
          return d = ji(d, p.mode, h), d.return = p, d;
        case Tt:
          var k = d._init;
          return w(p, k(d._payload), h);
      }
      if (gr(d) || sr(d)) return d = rn(d, p.mode, h, null), d.return = p, d;
      Lo(p, d);
    }
    return null;
  }
  function y(p, d, h, k) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : u(p, d, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _o:
          return h.key === E ? c(p, d, h, k) : null;
        case wn:
          return h.key === E ? m(p, d, h, k) : null;
        case Tt:
          return E = h._init, y(
            p,
            d,
            E(h._payload),
            k
          );
      }
      if (gr(h) || sr(h)) return E !== null ? null : x(p, d, h, k, null);
      Lo(p, h);
    }
    return null;
  }
  function C(p, d, h, k, E) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(h) || null, u(d, p, "" + k, E);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case _o:
          return p = p.get(k.key === null ? h : k.key) || null, c(d, p, k, E);
        case wn:
          return p = p.get(k.key === null ? h : k.key) || null, m(d, p, k, E);
        case Tt:
          var P = k._init;
          return C(p, d, h, P(k._payload), E);
      }
      if (gr(k) || sr(k)) return p = p.get(h) || null, x(d, p, k, E, null);
      Lo(d, k);
    }
    return null;
  }
  function N(p, d, h, k) {
    for (var E = null, P = null, L = d, R = d = 0, Y = null; L !== null && R < h.length; R++) {
      L.index > R ? (Y = L, L = null) : Y = L.sibling;
      var $ = y(p, L, h[R], k);
      if ($ === null) {
        L === null && (L = Y);
        break;
      }
      e && L && $.alternate === null && t(p, L), d = l($, d, R), P === null ? E = $ : P.sibling = $, P = $, L = Y;
    }
    if (R === h.length) return n(p, L), ee && qt(p, R), E;
    if (L === null) {
      for (; R < h.length; R++) L = w(p, h[R], k), L !== null && (d = l(L, d, R), P === null ? E = L : P.sibling = L, P = L);
      return ee && qt(p, R), E;
    }
    for (L = r(p, L); R < h.length; R++) Y = C(L, p, R, h[R], k), Y !== null && (e && Y.alternate !== null && L.delete(Y.key === null ? R : Y.key), d = l(Y, d, R), P === null ? E = Y : P.sibling = Y, P = Y);
    return e && L.forEach(function(pe) {
      return t(p, pe);
    }), ee && qt(p, R), E;
  }
  function j(p, d, h, k) {
    var E = sr(h);
    if (typeof E != "function") throw Error(S(150));
    if (h = E.call(h), h == null) throw Error(S(151));
    for (var P = E = null, L = d, R = d = 0, Y = null, $ = h.next(); L !== null && !$.done; R++, $ = h.next()) {
      L.index > R ? (Y = L, L = null) : Y = L.sibling;
      var pe = y(p, L, $.value, k);
      if (pe === null) {
        L === null && (L = Y);
        break;
      }
      e && L && pe.alternate === null && t(p, L), d = l(pe, d, R), P === null ? E = pe : P.sibling = pe, P = pe, L = Y;
    }
    if ($.done) return n(
      p,
      L
    ), ee && qt(p, R), E;
    if (L === null) {
      for (; !$.done; R++, $ = h.next()) $ = w(p, $.value, k), $ !== null && (d = l($, d, R), P === null ? E = $ : P.sibling = $, P = $);
      return ee && qt(p, R), E;
    }
    for (L = r(p, L); !$.done; R++, $ = h.next()) $ = C(L, p, R, $.value, k), $ !== null && (e && $.alternate !== null && L.delete($.key === null ? R : $.key), d = l($, d, R), P === null ? E = $ : P.sibling = $, P = $);
    return e && L.forEach(function(rt) {
      return t(p, rt);
    }), ee && qt(p, R), E;
  }
  function W(p, d, h, k) {
    if (typeof h == "object" && h !== null && h.type === _n && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _o:
          e: {
            for (var E = h.key, P = d; P !== null; ) {
              if (P.key === E) {
                if (E = h.type, E === _n) {
                  if (P.tag === 7) {
                    n(p, P.sibling), d = o(P, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tt && Au(E) === P.type) {
                  n(p, P.sibling), d = o(P, h.props), d.ref = fr(p, P, h), d.return = p, p = d;
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            h.type === _n ? (d = rn(h.props.children, p.mode, k, h.key), d.return = p, p = d) : (k = Ko(h.type, h.key, h.props, null, p.mode, k), k.ref = fr(p, d, h), k.return = p, p = k);
          }
          return i(p);
        case wn:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(p, d.sibling), d = o(d, h.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = ji(h, p.mode, k), d.return = p, p = d;
          }
          return i(p);
        case Tt:
          return P = h._init, W(p, d, P(h._payload), k);
      }
      if (gr(h)) return N(p, d, h, k);
      if (sr(h)) return j(p, d, h, k);
      Lo(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = o(d, h), d.return = p, p = d) : (n(p, d), d = Ni(h, p.mode, k), d.return = p, p = d), i(p)) : n(p, d);
  }
  return W;
}
var Un = bd(!0), zd = bd(!1), ul = Wt(null), cl = null, bn = null, Qs = null;
function Gs() {
  Qs = bn = cl = null;
}
function Ks(e) {
  var t = ul.current;
  J(ul), e._currentValue = t;
}
function ls(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  cl = e, Qs = bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Qs !== e) if (e = { context: e, memoizedValue: t, next: null }, bn === null) {
    if (cl === null) throw Error(S(308));
    bn = e, cl.dependencies = { lanes: 0, firstContext: e };
  } else bn = bn.next = e;
  return t;
}
var en = null;
function Ys(e) {
  en === null ? en = [e] : en.push(e);
}
function Pd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ys(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function Xs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ld(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, _t(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ys(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _t(e, n);
}
function Ho(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $s(e, n);
  }
}
function Fu(e, t) {
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
  bt = !1;
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
              bt = !0;
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
function Uu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var Yr = {}, ft = Wt(Yr), Ar = Wt(Yr), Fr = Wt(Yr);
function tn(e) {
  if (e === Yr) throw Error(S(174));
  return e;
}
function qs(e, t) {
  switch (K(Fr, t), K(Ar, e), K(ft, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ai(t, e);
  }
  J(ft), K(ft, t);
}
function Hn() {
  J(ft), J(Ar), J(Fr);
}
function Rd(e) {
  tn(Fr.current);
  var t = tn(ft.current), n = Ai(t, e.type);
  t !== n && (K(Ar, e), K(ft, n));
}
function Zs(e) {
  Ar.current === e && (J(ft), J(Ar));
}
var ne = Wt(0);
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
var xi = [];
function Js() {
  for (var e = 0; e < xi.length; e++) xi[e]._workInProgressVersionPrimary = null;
  xi.length = 0;
}
var Bo = St.ReactCurrentDispatcher, wi = St.ReactCurrentBatchConfig, sn = 0, re = null, de = null, ge = null, pl = !1, Cr = !1, Ur = 0, hh = 0;
function ke() {
  throw Error(S(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, o, l) {
  if (sn = l, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bo.current = e === null || e.memoizedState === null ? xh : wh, e = n(r, o), Cr) {
    l = 0;
    do {
      if (Cr = !1, Ur = 0, 25 <= l) throw Error(S(301));
      l += 1, ge = de = null, t.updateQueue = null, Bo.current = _h, e = n(r, o);
    } while (Cr);
  }
  if (Bo.current = ml, t = de !== null && de.next !== null, sn = 0, ge = de = re = null, pl = !1, t) throw Error(S(300));
  return e;
}
function na() {
  var e = Ur !== 0;
  return Ur = 0, e;
}
function ut() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? re.memoizedState = ge = e : ge = ge.next = e, ge;
}
function Ke() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = ge === null ? re.memoizedState : ge.next;
  if (t !== null) ge = t, de = e;
  else {
    if (e === null) throw Error(S(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, ge === null ? re.memoizedState = ge = e : ge = ge.next = e;
  }
  return ge;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _i(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = de, o = r.baseQueue, l = n.pending;
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
    c === null ? i = r : c.next = u, nt(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, re.lanes |= l, an |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    nt(l, t.memoizedState) || (Le = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Md() {
}
function $d(e, t) {
  var n = re, r = Ke(), o = t(), l = !nt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Le = !0), r = r.queue, ra(Dd.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, Br(9, Od.bind(null, n, r, o, t), void 0, null), ve === null) throw Error(S(349));
    sn & 30 || Id(n, t, o);
  }
  return o;
}
function Id(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Od(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ad(t) && Fd(e);
}
function Dd(e, t, n) {
  return n(function() {
    Ad(t) && Fd(e);
  });
}
function Ad(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Fd(e) {
  var t = _t(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Hu(e) {
  var t = ut();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = yh.bind(null, re, e), [t.memoizedState, e];
}
function Br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ud() {
  return Ke().memoizedState;
}
function Vo(e, t, n, r) {
  var o = ut();
  re.flags |= e, o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (l = i.destroy, r !== null && ea(r, i.deps)) {
      o.memoizedState = Br(t, n, l, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = Br(1 | t, n, l, r);
}
function Bu(e, t) {
  return Vo(8390656, 8, e, t);
}
function ra(e, t) {
  return El(2048, 8, e, t);
}
function Hd(e, t) {
  return El(4, 2, e, t);
}
function Bd(e, t) {
  return El(4, 4, e, t);
}
function Vd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Wd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, Vd.bind(null, t, e), n);
}
function oa() {
}
function Qd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Kd(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = Jc(), re.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function gh(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wi.transition;
  wi.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, wi.transition = r;
  }
}
function Yd() {
  return Ke().memoizedState;
}
function vh(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xd(e)) qd(t, n);
  else if (n = Pd(e, t, n, r), n !== null) {
    var o = Ee();
    tt(n, e, r, o), Zd(n, t, r);
  }
}
function yh(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xd(e)) qd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, u = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = u, nt(u, i)) {
        var c = t.interleaved;
        c === null ? (o.next = o, Ys(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Pd(e, t, o, r), n !== null && (o = Ee(), tt(n, e, r, o), Zd(n, t, r));
  }
}
function Xd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function qd(e, t) {
  Cr = pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $s(e, n);
  }
}
var ml = { readContext: Ge, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, xh = { readContext: Ge, useCallback: function(e, t) {
  return ut().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: Bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vo(
    4194308,
    4,
    Vd.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ut();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hu, useDebugValue: oa, useDeferredValue: function(e) {
  return ut().memoizedState = e;
}, useTransition: function() {
  var e = Hu(!1), t = e[0];
  return e = gh.bind(null, e[1]), ut().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = ut();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(S(349));
    sn & 30 || Id(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Bu(Dd.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Br(9, Od.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = ut(), t = ve.identifierPrefix;
  if (ee) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wh = {
  readContext: Ge,
  useCallback: Qd,
  useContext: Ge,
  useEffect: ra,
  useImperativeHandle: Wd,
  useInsertionEffect: Hd,
  useLayoutEffect: Bd,
  useMemo: Gd,
  useReducer: _i,
  useRef: Ud,
  useState: function() {
    return _i(Hr);
  },
  useDebugValue: oa,
  useDeferredValue: function(e) {
    var t = Ke();
    return Kd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = _i(Hr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: Md,
  useSyncExternalStore: $d,
  useId: Yd,
  unstable_isNewReconciler: !1
}, _h = { readContext: Ge, useCallback: Qd, useContext: Ge, useEffect: ra, useImperativeHandle: Wd, useInsertionEffect: Hd, useLayoutEffect: Bd, useMemo: Gd, useReducer: ki, useRef: Ud, useState: function() {
  return ki(Hr);
}, useDebugValue: oa, useDeferredValue: function(e) {
  var t = Ke();
  return de === null ? t.memoizedState = e : Kd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = ki(Hr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: Md, useSyncExternalStore: $d, useId: Yd, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function is(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Ft(e), l = yt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (tt(t, e, o, r), Ho(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Ft(e), l = yt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (tt(t, e, o, r), Ho(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Ft(e), o = yt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Dt(e, o, r), t !== null && (tt(t, e, r, n), Ho(t, e, r));
} };
function Vu(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(o, l) : !0;
}
function Jd(e, t, n) {
  var r = !1, o = Bt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Ge(l) : (o = Me(t) ? on : Ne.current, r = t.contextTypes, l = (r = r != null) ? An(e, o) : Bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Wu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function ss(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Xs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Ge(l) : (l = Me(t) ? on : Ne.current, o.context = An(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (is(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Tl.enqueueReplaceState(o, o.state, null), dl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function as(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var kh = typeof WeakMap == "function" ? WeakMap : Map;
function ef(e, t, n) {
  n = yt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, ys = r), as(e, t);
  }, n;
}
function tf(e, t, n) {
  n = yt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      as(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    as(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Ih.bind(null, e, t, n), t.then(e, e));
}
function Gu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
}
var Sh = St.ReactCurrentOwner, Le = !1;
function je(e, t, n, r) {
  t.child = e === null ? zd(t, null, n, r) : Un(t, e.child, n, r);
}
function Yu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return In(t, o), r = ta(e, t, n, r, l, o), n = na(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && n && Bs(t), t.flags |= 1, je(e, t, r, o), t.child);
}
function Xu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !fa(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, nf(e, t, l, r, o)) : (e = Ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(i, r) && e.ref === t.ref) return kt(e, t, o);
  }
  return t.flags |= 1, e = Ut(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function nf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if ($r(l, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, kt(e, t, o);
  }
  return us(e, t, n, r, o);
}
function rf(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Pn, Oe), Oe |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Pn, Oe), Oe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(Pn, Oe), Oe |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Pn, Oe), Oe |= r;
  return je(e, t, o, n), t.child;
}
function of(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function us(e, t, n, r, o) {
  var l = Me(n) ? on : Ne.current;
  return l = An(t, l), In(t, o), n = ta(e, t, n, r, l, o), r = na(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && r && Bs(t), t.flags |= 1, je(e, t, n, o), t.child);
}
function qu(e, t, n, r, o) {
  if (Me(n)) {
    var l = !0;
    il(t);
  } else l = !1;
  if (In(t, o), t.stateNode === null) Wo(e, t), Jd(t, n, r), ss(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Ge(m) : (m = Me(n) ? on : Ne.current, m = An(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Wu(t, i, r, m), bt = !1;
    var y = t.memoizedState;
    i.state = y, dl(t, r, i, o), c = t.memoizedState, u !== r || y !== c || Re.current || bt ? (typeof x == "function" && (is(t, n, x, r), c = t.memoizedState), (u = bt || Vu(t, n, u, r, y, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Ld(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : qe(t.type, u), i.props = m, w = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Ge(c) : (c = Me(n) ? on : Ne.current, c = An(t, c));
    var C = n.getDerivedStateFromProps;
    (x = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || y !== c) && Wu(t, i, r, c), bt = !1, y = t.memoizedState, i.state = y, dl(t, r, i, o);
    var N = t.memoizedState;
    u !== w || y !== N || Re.current || bt ? (typeof C == "function" && (is(t, n, C, r), N = t.memoizedState), (m = bt || Vu(t, n, m, r, y, N, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), i.props = r, i.state = N, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return cs(e, t, n, r, l, o);
}
function cs(e, t, n, r, o, l) {
  of(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Iu(t, n, !1), kt(e, t, l);
  r = t.stateNode, Sh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Un(t, e.child, null, l), t.child = Un(t, null, u, l)) : je(e, t, u, l), t.memoizedState = r.state, o && Iu(t, n, !0), t.child;
}
function lf(e) {
  var t = e.stateNode;
  t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1), qs(e, t.containerInfo);
}
function Zu(e, t, n, r, o) {
  return Fn(), Ws(o), t.flags |= 256, je(e, t, n, r), t.child;
}
var ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sf(e, t, n) {
  var r = t.pendingProps, o = ne.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ne, o & 1), e === null)
    return os(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Pl(i, r, 0, null), e = rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = fs(n), t.memoizedState = ds, e) : la(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return Ch(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Ut(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Ut(u, l) : (l = rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? fs(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ds, r;
  }
  return l = e.child, e = l.sibling, r = Ut(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function la(e, t) {
  return t = Pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ro(e, t, n, r) {
  return r !== null && Ws(r), Un(t, e.child, null, n), e = la(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ch(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Si(Error(S(422))), Ro(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Pl({ mode: "visible", children: r.children }, o, 0, null), l = rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Un(t, e.child, null, i), t.child.memoizedState = fs(i), t.memoizedState = ds, l);
  if (!(t.mode & 1)) return Ro(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, l = Error(S(419)), r = Si(l, r, void 0), Ro(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Le || u) {
    if (r = ve, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, _t(e, o), tt(r, e, o, -1));
    }
    return da(), r = Si(Error(S(421))), Ro(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Oh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, De = Ot(o.nextSibling), Ae = t, ee = !0, Je = null, e !== null && (Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = ln, gt = e.id, vt = e.overflow, ln = t), t = la(t, r.children), t.flags |= 4096, t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ls(e.return, t, n);
}
function Ci(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function af(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (je(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
      else if (e.tag === 19) Ju(e, n, t);
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
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ci(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && fl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ci(t, !0, n, null, l);
      break;
    case "together":
      Ci(t, !1, null, null, void 0);
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
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Nh(e, t, n) {
  switch (t.tag) {
    case 3:
      lf(t), Fn();
      break;
    case 5:
      Rd(t);
      break;
    case 1:
      Me(t.type) && il(t);
      break;
    case 4:
      qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(ul, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sf(e, t, n) : (K(ne, ne.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return af(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, rf(e, t, n);
  }
  return kt(e, t, n);
}
var uf, ps, cf, df;
uf = function(e, t) {
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
ps = function() {
};
cf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, tn(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = $i(e, o), r = $i(e, r), l = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Di(e, o), r = Di(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Fi(n, r);
    var i;
    n = null;
    for (m in o) if (!r.hasOwnProperty(m) && o.hasOwnProperty(m) && o[m] != null) if (m === "style") {
      var u = o[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Tr.hasOwnProperty(m) ? l || (l = []) : (l = l || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = o != null ? o[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (l || (l = []), l.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (l = l || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Tr.hasOwnProperty(m) ? (c != null && m === "onScroll" && Z("scroll", e), l || u === c || (l = [])) : (l = l || []).push(m, c));
    }
    n && (l = l || []).push("style", n);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
df = function(e, t, n, r) {
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
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function jh(e, t, n) {
  var r = t.pendingProps;
  switch (Vs(t), t.tag) {
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
      return Se(t), null;
    case 1:
      return Me(t.type) && ll(), Se(t), null;
    case 3:
      return r = t.stateNode, Hn(), J(Re), J(Ne), Js(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (_s(Je), Je = null))), ps(e, t), Se(t), null;
    case 5:
      Zs(t);
      var o = tn(Fr.current);
      if (n = t.type, e !== null && t.stateNode != null) cf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return Se(t), null;
        }
        if (e = tn(ft.current), Po(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[ct] = t, r[Dr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < yr.length; o++) Z(yr[o], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                r
              ), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              au(r, l), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Z("invalid", r);
              break;
            case "textarea":
              cu(r, l), Z("invalid", r);
          }
          Fi(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var u = l[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && zo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && zo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Tr.hasOwnProperty(i) && u != null && i === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              ko(r), uu(r, l, !0);
              break;
            case "textarea":
              ko(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ol);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ct] = t, e[Dr] = r, uf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ui(n, r), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < yr.length; o++) Z(yr[o], e);
                o = r;
                break;
              case "source":
                Z("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), o = r;
                break;
              case "details":
                Z("toggle", e), o = r;
                break;
              case "input":
                au(e, r), o = $i(e, r), Z("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                cu(e, r), o = Di(e, r), Z("invalid", e);
                break;
              default:
                o = r;
            }
            Fi(n, o), u = o;
            for (l in u) if (u.hasOwnProperty(l)) {
              var c = u[l];
              l === "style" ? Uc(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ac(e, c)) : l === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && br(e, c) : typeof c == "number" && br(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Tr.hasOwnProperty(l) ? c != null && l === "onScroll" && Z("scroll", e) : c != null && bs(e, l, c, i));
            }
            switch (n) {
              case "input":
                ko(e), uu(e, r, !1);
                break;
              case "textarea":
                ko(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Ln(e, !!r.multiple, l, !1) : r.defaultValue != null && Ln(
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
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = tn(Fr.current), tn(ft.current), Po(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (l = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
            case 3:
              zo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (J(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && De !== null && t.mode & 1 && !(t.flags & 128)) Td(), Fn(), t.flags |= 98560, l = !1;
        else if (l = Po(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
            l[ct] = t;
          } else Fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), l = !1;
        } else Je !== null && (_s(Je), Je = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : da())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return Hn(), ps(e, t), e === null && Ir(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return Ks(t.type._context), Se(t), null;
    case 17:
      return Me(t.type) && ll(), Se(t), null;
    case 19:
      if (J(ne), l = t.memoizedState, l === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) pr(l, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = fl(e), i !== null) {
            for (t.flags |= 128, pr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && se() > Vn && (t.flags |= 128, r = !0, pr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return Se(t), null;
        } else 2 * se() - l.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, pr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = se(), t.sibling = null, n = ne.current, K(ne, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return ca(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Eh(e, t) {
  switch (Vs(t), t.tag) {
    case 1:
      return Me(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hn(), J(Re), J(Ne), Js(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zs(t), null;
    case 13:
      if (J(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ne), null;
    case 4:
      return Hn(), null;
    case 10:
      return Ks(t.type._context), null;
    case 22:
    case 23:
      return ca(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1, Ce = !1, Th = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function ms(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var ec = !1;
function bh(e, t) {
  if (qi = tl, e = hd(), Hs(e)) {
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
  for (Zi = { focusedElem: e, selectionRange: n }, tl = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var j = N.memoizedProps, W = N.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? j : qe(t.type, j), W);
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
    } catch (k) {
      le(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return N = ec, ec = !1, N;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && ms(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function bl(e, t) {
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
function hs(e) {
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
function ff(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ff(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Dr], delete t[ts], delete t[dh], delete t[fh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || pf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && (e = e.child, e !== null)) for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), e = e.sibling;
}
function vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), e = e.sibling;
}
var ye = null, Ze = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) mf(e, t, n), n = n.sibling;
}
function mf(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(_l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || zn(n, t);
    case 6:
      var r = ye, o = Ze;
      ye = null, Et(e, t, n), ye = r, Ze = o, ye !== null && (Ze ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (Ze ? (e = ye, n = n.stateNode, e.nodeType === 8 ? vi(e.parentNode, n) : e.nodeType === 1 && vi(e, n), Rr(e)) : vi(ye, n.stateNode));
      break;
    case 4:
      r = ye, o = Ze, ye = n.stateNode.containerInfo, Ze = !0, Et(e, t, n), ye = r, Ze = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && ms(n, t, i), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Ce && (zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Et(e, t, n), Ce = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Th()), t.forEach(function(r) {
      var o = Dh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ye = u.stateNode, Ze = !1;
            break e;
          case 3:
            ye = u.stateNode.containerInfo, Ze = !0;
            break e;
          case 4:
            ye = u.stateNode.containerInfo, Ze = !0;
            break e;
        }
        u = u.return;
      }
      if (ye === null) throw Error(S(160));
      mf(l, i, o), ye = null, Ze = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (m) {
      le(o, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hf(t, e), t = t.sibling;
}
function hf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), at(e), r & 4) {
        try {
          Nr(3, e, e.return), bl(3, e);
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
      Xe(t, e), at(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (Xe(t, e), at(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          br(o, "");
        } catch (j) {
          le(e, e.return, j);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && l.type === "radio" && l.name != null && Ic(o, l), Ui(u, i);
          var m = Ui(u, l);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? Uc(o, w) : x === "dangerouslySetInnerHTML" ? Ac(o, w) : x === "children" ? br(o, w) : bs(o, x, w, m);
          }
          switch (u) {
            case "input":
              Ii(o, l);
              break;
            case "textarea":
              Oc(o, l);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var C = l.value;
              C != null ? Ln(o, !!l.multiple, C, !1) : y !== !!l.multiple && (l.defaultValue != null ? Ln(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Ln(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Dr] = l;
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Xe(t, e), at(e), r & 4) {
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
      if (Xe(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Rr(t.containerInfo);
      } catch (j) {
        le(e, e.return, j);
      }
      break;
    case 4:
      Xe(t, e), at(e);
      break;
    case 13:
      Xe(t, e), at(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (aa = se())), r & 4 && nc(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (m = Ce) || x, Xe(t, e), Ce = m) : Xe(t, e), at(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (z = e, x = e.child; x !== null; ) {
          for (w = z = x; z !== null; ) {
            switch (y = z, C = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nr(4, y, y.return);
                break;
              case 1:
                zn(y, y.return);
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
                zn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  oc(w);
                  continue;
                }
            }
            C !== null ? (C.return = y, z = C) : oc(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                o = w.stateNode, m ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = Fc("display", i));
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
      Xe(t, e), at(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      Xe(
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
          if (pf(n)) {
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
          r.flags & 32 && (br(o, ""), r.flags &= -33);
          var l = tc(e);
          vs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = tc(e);
          gs(e, u, i);
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
function zh(e, t, n) {
  z = e, gf(e);
}
function gf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Mo;
      if (!i) {
        var u = o.alternate, c = u !== null && u.memoizedState !== null || Ce;
        u = Mo;
        var m = Ce;
        if (Mo = i, (Ce = c) && !m) for (z = o; z !== null; ) i = z, c = i.child, i.tag === 22 && i.memoizedState !== null ? lc(o) : c !== null ? (c.return = i, z = c) : lc(o);
        for (; l !== null; ) z = l, gf(l), l = l.sibling;
        z = o, Mo = u, Ce = m;
      }
      rc(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, z = l) : rc(e);
  }
}
function rc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || bl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Uu(t, l, r);
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
              Uu(t, i, n);
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
        Ce || t.flags & 512 && hs(t);
      } catch (y) {
        le(t, t.return, y);
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
function oc(e) {
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
function lc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            bl(4, t);
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
            hs(t);
          } catch (c) {
            le(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            hs(t);
          } catch (c) {
            le(t, i, c);
          }
      }
    } catch (c) {
      le(t, t.return, c);
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
var Ph = Math.ceil, hl = St.ReactCurrentDispatcher, ia = St.ReactCurrentOwner, Qe = St.ReactCurrentBatchConfig, H = 0, ve = null, ae = null, xe = 0, Oe = 0, Pn = Wt(0), fe = 0, Vr = null, an = 0, zl = 0, sa = 0, jr = null, Pe = null, aa = 0, Vn = 1 / 0, mt = null, gl = !1, ys = null, At = null, $o = !1, Rt = null, vl = 0, Er = 0, xs = null, Qo = -1, Go = 0;
function Ee() {
  return H & 6 ? se() : Qo !== -1 ? Qo : Qo = se();
}
function Ft(e) {
  return e.mode & 1 ? H & 2 && xe !== 0 ? xe & -xe : mh.transition !== null ? (Go === 0 && (Go = Jc()), Go) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : id(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < Er) throw Er = 0, xs = null, Error(S(185));
  Qr(e, n, r), (!(H & 2) || e !== ve) && (e === ve && (!(H & 2) && (zl |= n), fe === 4 && Pt(e, xe)), $e(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Vn = se() + 500, jl && Qt()));
}
function $e(e, t) {
  var n = e.callbackNode;
  mm(e, t);
  var r = el(e, e === ve ? xe : 0);
  if (r === 0) n !== null && mu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && mu(n), t === 1) e.tag === 0 ? ph(ic.bind(null, e)) : Nd(ic.bind(null, e)), uh(function() {
      !(H & 6) && Qt();
    }), n = null;
    else {
      switch (ed(r)) {
        case 1:
          n = Ms;
          break;
        case 4:
          n = qc;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = Zc;
          break;
        default:
          n = Jo;
      }
      n = Cf(n, vf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vf(e, t) {
  if (Qo = -1, Go = 0, H & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (On() && e.callbackNode !== n) return null;
  var r = el(e, e === ve ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var l = xf();
    (ve !== e || xe !== t) && (mt = null, Vn = se() + 500, nn(e, t));
    do
      try {
        Mh();
        break;
      } catch (u) {
        yf(e, u);
      }
    while (!0);
    Gs(), hl.current = l, H = o, ae !== null ? t = 0 : (ve = null, xe = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Qi(e), o !== 0 && (r = o, t = ws(e, o))), t === 1) throw n = Vr, nn(e, 0), Pt(e, r), $e(e, se()), n;
    if (t === 6) Pt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Lh(o) && (t = yl(e, r), t === 2 && (l = Qi(e), l !== 0 && (r = l, t = ws(e, l))), t === 1)) throw n = Vr, nn(e, 0), Pt(e, r), $e(e, se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Zt(e, Pe, mt);
          break;
        case 3:
          if (Pt(e, r), (r & 130023424) === r && (t = aa + 500 - se(), 10 < t)) {
            if (el(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = es(Zt.bind(null, e, Pe, mt), t);
            break;
          }
          Zt(e, Pe, mt);
          break;
        case 4:
          if (Pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - et(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ph(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = es(Zt.bind(null, e, Pe, mt), r);
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
  return $e(e, se()), e.callbackNode === n ? vf.bind(null, e) : null;
}
function ws(e, t) {
  var n = jr;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && _s(t)), e;
}
function _s(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Lh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!nt(l(), o)) return !1;
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
function Pt(e, t) {
  for (t &= ~sa, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ic(e) {
  if (H & 6) throw Error(S(327));
  On();
  var t = el(e, 0);
  if (!(t & 1)) return $e(e, se()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qi(e);
    r !== 0 && (t = r, n = ws(e, r));
  }
  if (n === 1) throw n = Vr, nn(e, 0), Pt(e, t), $e(e, se()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Pe, mt), $e(e, se()), null;
}
function ua(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Vn = se() + 500, jl && Qt());
  }
}
function un(e) {
  Rt !== null && Rt.tag === 0 && !(H & 6) && On();
  var t = H;
  H |= 1;
  var n = Qe.transition, r = V;
  try {
    if (Qe.transition = null, V = 1, e) return e();
  } finally {
    V = r, Qe.transition = n, H = t, !(H & 6) && Qt();
  }
}
function ca() {
  Oe = Pn.current, J(Pn);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ah(n)), ae !== null) for (n = ae.return; n !== null; ) {
    var r = n;
    switch (Vs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ll();
        break;
      case 3:
        Hn(), J(Re), J(Ne), Js();
        break;
      case 5:
        Zs(r);
        break;
      case 4:
        Hn();
        break;
      case 13:
        J(ne);
        break;
      case 19:
        J(ne);
        break;
      case 10:
        Ks(r.type._context);
        break;
      case 22:
      case 23:
        ca();
    }
    n = n.return;
  }
  if (ve = e, ae = e = Ut(e.current, null), xe = Oe = t, fe = 0, Vr = null, sa = zl = an = 0, Pe = jr = null, en !== null) {
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
function yf(e, t) {
  do {
    var n = ae;
    try {
      if (Gs(), Bo.current = ml, pl) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        pl = !1;
      }
      if (sn = 0, ge = de = re = null, Cr = !1, Ur = 0, ia.current = null, n === null || n.return === null) {
        fe = 1, Vr = t, ae = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, c = t;
        if (t = xe, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = x.alternate;
            y ? (x.updateQueue = y.updateQueue, x.memoizedState = y.memoizedState, x.lanes = y.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var C = Gu(i);
          if (C !== null) {
            C.flags &= -257, Ku(C, i, u, l, t), C.mode & 1 && Qu(l, m, t), t = C, c = m;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(l, m, t), da();
              break e;
            }
            c = Error(S(426));
          }
        } else if (ee && u.mode & 1) {
          var W = Gu(i);
          if (W !== null) {
            !(W.flags & 65536) && (W.flags |= 256), Ku(W, i, u, l, t), Ws(Bn(c, u));
            break e;
          }
        }
        l = c = Bn(c, u), fe !== 4 && (fe = 2), jr === null ? jr = [l] : jr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var p = ef(l, c, t);
              Fu(l, p);
              break e;
            case 1:
              u = c;
              var d = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (At === null || !At.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var k = tf(l, u, t);
                Fu(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      _f(n);
    } catch (E) {
      t = E, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xf() {
  var e = hl.current;
  return hl.current = ml, e === null ? ml : e;
}
function da() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(an & 268435455) && !(zl & 268435455) || Pt(ve, xe);
}
function yl(e, t) {
  var n = H;
  H |= 2;
  var r = xf();
  (ve !== e || xe !== t) && (mt = null, nn(e, t));
  do
    try {
      Rh();
      break;
    } catch (o) {
      yf(e, o);
    }
  while (!0);
  if (Gs(), H = n, hl.current = r, ae !== null) throw Error(S(261));
  return ve = null, xe = 0, fe;
}
function Rh() {
  for (; ae !== null; ) wf(ae);
}
function Mh() {
  for (; ae !== null && !lm(); ) wf(ae);
}
function wf(e) {
  var t = Sf(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? _f(e) : ae = t, ia.current = null;
}
function _f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Eh(n, t), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ae = null;
        return;
      }
    } else if (n = jh(n, t, Oe), n !== null) {
      ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Zt(e, t, n) {
  var r = V, o = Qe.transition;
  try {
    Qe.transition = null, V = 1, $h(e, t, n, r);
  } finally {
    Qe.transition = o, V = r;
  }
  return null;
}
function $h(e, t, n, r) {
  do
    On();
  while (Rt !== null);
  if (H & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (hm(e, l), e === ve && (ae = ve = null, xe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $o || ($o = !0, Cf(Jo, function() {
    return On(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Qe.transition, Qe.transition = null;
    var i = V;
    V = 1;
    var u = H;
    H |= 4, ia.current = null, bh(e, n), hf(n, e), th(Zi), tl = !!qi, Zi = qi = null, e.current = n, zh(n), im(), H = u, V = i, Qe.transition = l;
  } else e.current = n;
  if ($o && ($o = !1, Rt = e, vl = o), l = e.pendingLanes, l === 0 && (At = null), um(n.stateNode), $e(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gl) throw gl = !1, e = ys, ys = null, e;
  return vl & 1 && e.tag !== 0 && On(), l = e.pendingLanes, l & 1 ? e === xs ? Er++ : (Er = 0, xs = e) : Er = 0, Qt(), null;
}
function On() {
  if (Rt !== null) {
    var e = ed(vl), t = Qe.transition, n = V;
    try {
      if (Qe.transition = null, V = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, vl = 0, H & 6) throw Error(S(331));
        var o = H;
        for (H |= 4, z = e.current; z !== null; ) {
          var l = z, i = l.child;
          if (z.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (z = m; z !== null; ) {
                  var x = z;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, x, l);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, z = w;
                  else for (; z !== null; ) {
                    x = z;
                    var y = x.sibling, C = x.return;
                    if (ff(x), x === m) {
                      z = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = C, z = y;
                      break;
                    }
                    z = C;
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
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, z = i;
          else e: for (; z !== null; ) {
            if (l = z, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                Nr(9, l, l.return);
            }
            var p = l.sibling;
            if (p !== null) {
              p.return = l.return, z = p;
              break e;
            }
            z = l.return;
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
                  bl(9, u);
              }
            } catch (E) {
              le(u, u.return, E);
            }
            if (u === i) {
              z = null;
              break e;
            }
            var k = u.sibling;
            if (k !== null) {
              k.return = u.return, z = k;
              break e;
            }
            z = u.return;
          }
        }
        if (H = o, Qt(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(_l, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      V = n, Qe.transition = t;
    }
  }
  return !1;
}
function sc(e, t, n) {
  t = Bn(n, t), t = ef(e, t, 1), e = Dt(e, t, 1), t = Ee(), e !== null && (Qr(e, 1, t), $e(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
        e = Bn(n, e), e = tf(t, e, 1), t = Dt(t, e, 1), e = Ee(), t !== null && (Qr(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ih(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (xe & n) === n && (fe === 4 || fe === 3 && (xe & 130023424) === xe && 500 > se() - aa ? nn(e, 0) : sa |= n), $e(e, t);
}
function kf(e, t) {
  t === 0 && (e.mode & 1 ? (t = No, No <<= 1, !(No & 130023424) && (No = 4194304)) : t = 1);
  var n = Ee();
  e = _t(e, t), e !== null && (Qr(e, t, n), $e(e, n));
}
function Oh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), kf(e, n);
}
function Dh(e, t) {
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
  r !== null && r.delete(t), kf(e, n);
}
var Sf;
Sf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, Nh(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, ee && t.flags & 1048576 && jd(t, al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wo(e, t), e = t.pendingProps;
      var o = An(t, Ne.current);
      In(t, n), o = ta(null, t, r, e, o, n);
      var l = na();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (l = !0, il(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xs(t), o.updater = Tl, t.stateNode = o, o._reactInternals = t, ss(t, r, e, n), t = cs(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && Bs(t), je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Fh(r), e = qe(r, e), o) {
          case 0:
            t = us(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, qe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), us(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), qu(e, t, r, o, n);
    case 3:
      e: {
        if (lf(t), e === null) throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Ld(e, t), dl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Bn(Error(S(423)), t), t = Zu(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Bn(Error(S(424)), t), t = Zu(e, t, r, n, o);
          break e;
        } else for (De = Ot(t.stateNode.containerInfo.firstChild), Ae = t, ee = !0, Je = null, n = zd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Fn(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rd(t), e === null && os(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Ji(r, o) ? i = null : l !== null && Ji(r, l) && (t.flags |= 32), of(e, t), je(e, t, i, n), t.child;
    case 6:
      return e === null && os(t), null;
    case 13:
      return sf(e, t, n);
    case 4:
      return qs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Un(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Yu(e, t, r, o, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(ul, r._currentValue), r._currentValue = i, l !== null) if (nt(l.value, i)) {
          if (l.children === o.children && !Re.current) {
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
                l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), ls(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ls(i, n, t), i = l.sibling;
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
        je(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, In(t, n), o = Ge(o), r = r(o), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = qe(r, t.pendingProps), o = qe(r.type, o), Xu(e, t, r, o, n);
    case 15:
      return nf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Wo(e, t), t.tag = 1, Me(r) ? (e = !0, il(t)) : e = !1, In(t, n), Jd(t, r, o), ss(t, r, o, n), cs(null, t, r, !0, e, n);
    case 19:
      return af(e, t, n);
    case 22:
      return rf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Cf(e, t) {
  return Xc(e, t);
}
function Ah(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Ah(e, t, n, r);
}
function fa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fh(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ps) return 11;
    if (e === Ls) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ko(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") fa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case _n:
      return rn(n.children, o, l, t);
    case zs:
      i = 8, o |= 8;
      break;
    case Pi:
      return e = We(12, n, t, o | 2), e.elementType = Pi, e.lanes = l, e;
    case Li:
      return e = We(13, n, t, o), e.elementType = Li, e.lanes = l, e;
    case Ri:
      return e = We(19, n, t, o), e.elementType = Ri, e.lanes = l, e;
    case Rc:
      return Pl(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pc:
          i = 10;
          break e;
        case Lc:
          i = 9;
          break e;
        case Ps:
          i = 11;
          break e;
        case Ls:
          i = 14;
          break e;
        case Tt:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = We(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function rn(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function Pl(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = Rc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ni(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function ji(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Uh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ii(0), this.expirationTimes = ii(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ii(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function pa(e, t, n, r, o, l, i, u, c) {
  return e = new Uh(e, t, n, u, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = We(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xs(l), e;
}
function Hh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Nf(e) {
  if (!e) return Bt;
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
          if (Me(t.type)) {
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
    if (Me(n)) return Cd(e, n, t);
  }
  return t;
}
function jf(e, t, n, r, o, l, i, u, c) {
  return e = pa(n, r, !0, e, o, l, i, u, c), e.context = Nf(null), n = e.current, r = Ee(), o = Ft(n), l = yt(r, o), l.callback = t ?? null, Dt(n, l, o), e.current.lanes = o, Qr(e, o, r), $e(e, r), e;
}
function Ll(e, t, n, r) {
  var o = t.current, l = Ee(), i = Ft(o);
  return n = Nf(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(o, t, i), e !== null && (tt(e, o, i, l), Ho(e, o, i)), i;
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
function ac(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  ac(e, t), (e = e.alternate) && ac(e, t);
}
function Bh() {
  return null;
}
var Ef = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ha(e) {
  this._internalRoot = e;
}
Rl.prototype.render = ha.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ll(e, t, null, null);
};
Rl.prototype.unmount = ha.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Ll(null, e, null, null);
    }), t[wt] = null;
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++) ;
    zt.splice(n, 0, e), n === 0 && ld(e);
  }
};
function ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function uc() {
}
function Vh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var m = xl(i);
        l.call(m);
      };
    }
    var i = jf(t, r, e, 0, null, !1, !1, "", uc);
    return e._reactRootContainer = i, e[wt] = i.current, Ir(e.nodeType === 8 ? e.parentNode : e), un(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = xl(c);
      u.call(m);
    };
  }
  var c = pa(e, 0, !1, null, null, !1, !1, "", uc);
  return e._reactRootContainer = c, e[wt] = c.current, Ir(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Ll(t, c, n, r);
  }), c;
}
function $l(e, t, n, r, o) {
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
    Ll(t, i, e, o);
  } else i = Vh(n, t, e, o, r);
  return xl(i);
}
td = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 && ($s(t, n | 1), $e(t, se()), !(H & 6) && (Vn = se() + 500, Qt()));
      }
      break;
    case 13:
      un(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Ee();
          tt(r, e, 1, o);
        }
      }), ma(e, 1);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ee();
      tt(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
nd = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = _t(e, t);
    if (n !== null) {
      var r = Ee();
      tt(n, e, t, r);
    }
    ma(e, t);
  }
};
rd = function() {
  return V;
};
od = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
Bi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ii(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nl(r);
            if (!o) throw Error(S(90));
            $c(r), Ii(r, o);
          }
        }
      }
      break;
    case "textarea":
      Oc(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
Vc = ua;
Wc = un;
var Wh = { usingClientEntryPoint: !1, Events: [Kr, Nn, Nl, Hc, Bc, ua] }, mr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qh = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Kc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || Bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Io.isDisabled && Io.supportsFiber) try {
    _l = Io.inject(Qh), dt = Io;
  } catch {
  }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(S(200));
  return Hh(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!ga(e)) throw Error(S(299));
  var n = !1, r = "", o = Ef;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = pa(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new ha(t);
};
Ue.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Kc(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return un(e);
};
Ue.hydrate = function(e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return $l(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!ga(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Ef;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = jf(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Ir(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Rl(t);
};
Ue.render = function(e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return $l(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!Ml(e)) throw Error(S(40));
  return e._reactRootContainer ? (un(function() {
    $l(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = ua;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ml(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return $l(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Tf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tf);
    } catch (e) {
      console.error(e);
    }
}
Tf(), Ec.exports = Ue;
var Gh = Ec.exports, bf, cc = Gh;
bf = cc.createRoot, cc.hydrateRoot;
async function G(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const dc = `
.notify-studio {
  --ns-radius: 18px;
  --ns-radius-sm: 12px;
  --ns-page-width: 1700px;
  /* Map all Notify Studio surfaces to Home Assistant theme variables. */
  --ns-control-background: color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color));
  --ns-control-background-hover: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color));
  --ns-control-active-background: color-mix(in srgb, var(--primary-color) 24%, var(--card-background-color));
  --ns-control-border: var(--divider-color);
  --ns-success-color: var(--success-color, var(--primary-color));
  --ns-favourite-color: #f5c542;
  --ns-button-background: var(--ns-control-background);
  --ns-elevation: var(--ha-card-box-shadow, rgba(0, 0, 0, 0.35) 0px 5px 15px);
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
.ns-button { min-height:40px; border:1px solid var(--ns-control-border); border-radius:12px; padding:0px 20px; color:var(--primary-text-color); background:var(--ns-button-background); box-shadow:var(--ns-elevation); cursor:pointer; transition:filter .15s ease, transform .15s ease, background .15s ease; white-space:nowrap; }
.ns-button:hover:not(:disabled) { background:var(--ns-control-background-hover); filter:brightness(1.04); transform:translateY(-1px); }
.ns-button:disabled { opacity:.55; cursor:not-allowed; }
.ns-button--quiet, .ns-button--tab { background:var(--ns-button-background); color:var(--primary-text-color); border-color:var(--ns-control-border); }
.ns-button--tab.is-active, .ns-button--active { background:var(--ns-control-active-background); border-color:var(--ns-control-border); color:var(--primary-text-color); }
.ns-button--danger { color:var(--error-color); border-color:var(--ns-control-border); }
.ns-button--compact { min-height:32px; padding:10px 13px 10px 13px; border-radius:9px; font-size:.82rem; }
.ns-button-group { display:flex; gap:6px; flex-wrap:wrap; }
.notify-studio__grid { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:minmax(0, 1.25fr) minmax(320px, .75fr); gap:18px; align-items:start; }
.notify-studio__side { display:grid; gap:18px; min-width:0; }
.ns-card { border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ns-elevation); overflow:hidden; }
.ns-card__head { display:flex; justify-content:space-between; gap:12px; align-items:center; padding:22px 22px 10px; border-bottom:0; }
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
.ns-badge { display:inline-flex; align-items:center; border-radius:999px; padding:4px 8px; font-size:.73rem; text-transform:uppercase; letter-spacing:.05em; font-weight:700; background:var(--ns-control-background); color:var(--secondary-text-color); }
.ns-badge--android, .ns-badge--ios, .ns-badge--automation, .ns-badge--script, .ns-badge--running { background:var(--ns-control-background); color:var(--primary-text-color); }
.ns-badge--enabled, .ns-badge--ready { background:color-mix(in srgb, var(--ns-success-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-badge--disabled { background:color-mix(in srgb, var(--error-color) 14%, var(--card-background-color)); color:var(--error-color); }
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
.ns-button--state.is-enabled { background:color-mix(in srgb, var(--ns-success-color) 18%, var(--card-background-color)); color:var(--primary-text-color); }
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
.ns-custom-group-empty { width:100%; min-height:64px; display:grid; justify-items:center; gap:4px; padding:14px 16px; border:1px dashed var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--card-background-color); box-shadow:var(--ns-elevation); cursor:pointer; text-align:center; }
.ns-custom-group-empty__title { font-size:1rem; font-weight:700; }
.ns-custom-group-empty__meta { color:var(--secondary-text-color); font-size:.8rem; }
.ns-custom-group-control-panel { --ns-quick-control-height:122px; display:flex; align-items:stretch; gap:10px; min-width:0; padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ns-elevation); }
.ns-custom-group-member-grid { flex:1 1 auto; min-width:0; display:grid; grid-template-columns:repeat(var(--ns-quick-control-columns, 1), minmax(0, 1fr)); grid-auto-rows:var(--ns-quick-control-height); gap:10px; align-items:stretch; }
.ns-custom-group-member-grid.is-expanded { grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); grid-auto-rows:var(--ns-quick-control-height); }
.ns-custom-group-member-control { position:relative; min-width:0; height:100%; }
.ns-custom-group-member-button { width:100%; height:100%; min-width:0; min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; align-content:stretch; gap:7px; padding:13px 56px 13px 13px; overflow:hidden; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--ns-button-background); box-shadow:var(--ns-elevation); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:var(--ns-control-background); }
.ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-member-button__tag--category { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-custom-group-member-button__tag--area { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-custom-group-member-button strong { min-width:0; display:-webkit-box; margin:4px 0 0 2px; overflow:hidden; overflow-wrap:anywhere; -webkit-box-orient:vertical; -webkit-line-clamp:2; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button__status { display:flex; align-items:center; gap:6px; min-width:0; margin-left:2px; overflow:hidden; color:var(--secondary-text-color); font-size:.8rem; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-member-button__status > span:last-child { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-member-button__status-dot { width:8px; height:8px; flex:0 0 8px; border-radius:50%; background:var(--error-color); box-shadow:0 0 0 2px color-mix(in srgb, var(--error-color) 17%, transparent); }
.ns-custom-group-member-button__status-dot.is-enabled { background:var(--ns-success-color); box-shadow:0 0 0 2px color-mix(in srgb, var(--ns-success-color) 17%, transparent); }
.ns-custom-group-member-button__status-dot.is-disabled { background:var(--error-color); box-shadow:0 0 0 2px color-mix(in srgb, var(--error-color) 17%, transparent); }
.ns-custom-group-favorite { position:absolute; top:6px; right:6px; z-index:1; display:grid; place-items:center; width:42px; height:42px; padding:0; border:0; border-radius:0; color:var(--ns-favourite-color); background:transparent; box-shadow:none; font-size:2.15rem; line-height:1; cursor:pointer; transition:color .15s ease, opacity .15s ease, transform .15s ease; }
.ns-custom-group-favorite:hover:not(:disabled) { color:var(--ns-favourite-color); transform:scale(1.1); }
.ns-custom-group-favorite.is-favorite { color:var(--ns-favourite-color); }
.ns-custom-group-favorite:disabled { opacity:.35; cursor:not-allowed; }
.ns-custom-group-expand { flex:0 0 40px; width:40px; height:var(--ns-quick-control-height); min-height:var(--ns-quick-control-height); display:grid; place-items:center; padding:0; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--ns-button-background); box-shadow:var(--ns-elevation); cursor:pointer; font-size:1.5rem; line-height:1; transition:filter .15s ease, transform .15s ease; }
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
.ns-studio-group-chip--category { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-studio-group-chip--area { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-modal-backdrop { position:fixed; inset:0; z-index:1000; display:grid; place-items:center; padding:20px; background:color-mix(in srgb, #000 48%, transparent); }
.ns-confirmation-dialog { width:min(460px, 100%); }
.ns-confirmation-dialog__message { margin:0; color:var(--primary-text-color); line-height:1.5; }
.ns-confirmation-dialog__footer { justify-content:flex-end; }
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
`, Kh = { rendered: {}, errors: {} }, Yh = "/notify_studio_static/notify-studio-logo.png?v=0.1.24", Xh = 170, Ei = 10, qh = 50;
function zf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function ks(e, t) {
  const n = zf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function fc(e) {
  const t = `Action ${e}`;
  return { id: ks(t, e), title: t, route: "event" };
}
function Zh(e, t) {
  return `notify_studio_persistent_${zf(e || t).toLowerCase() || "notification"}`;
}
function Ti(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function pc(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Yo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function mc(e) {
  return e === !0;
}
function bi(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Jh(e) {
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
function eg(e) {
  return `${e}::group`;
}
function tg(e, t) {
  return `${e}::member::${t}`;
}
function ng(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function hc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rg({ hass: e }) {
  const t = _.useRef(e);
  t.current = e;
  const [n, r] = _.useState("audit"), [o, l] = _.useState(!!e), [i, u] = _.useState(!0), [c, m] = _.useState(null), [x, w] = _.useState([]), [y, C] = _.useState([]), [N, j] = _.useState([]), [W, p] = _.useState(!0), [d, h] = _.useState([]), [k, E] = _.useState(!1), [P, L] = _.useState(""), [R, Y] = _.useState([]), [$, pe] = _.useState([]), [rt, Ye] = _.useState([]), [ot, Il] = _.useState(!1), [lt, fn] = _.useState(7), [b, O] = _.useState(!1), [D, X] = _.useState(!1), [ie, Gt] = _.useState(""), [it, Kn] = _.useState("category"), [ue, Ie] = _.useState(null), [va, Ol] = _.useState(null), [Xr, qr] = _.useState([]), [Yn, ya] = _.useState(""), [ze, Dl] = _.useState(null), [Ct, xa] = _.useState(!1), [Zr, Pf] = _.useState(""), [Jr, Lf] = _.useState(""), [eo, Rf] = _.useState(""), [to, Mf] = _.useState(""), [Xn, Al] = _.useState(""), [wa, no] = _.useState(""), [pn, _a] = _.useState("A test notification from Notify Studio."), [pt, ka] = _.useState("Notify Studio"), [qn, Fl] = _.useState(""), [ro, Sa] = _.useState(""), [Nt, Ca] = _.useState(""), [oo, Na] = _.useState(""), [lo, ja] = _.useState(""), [io, Ea] = _.useState(""), [so, Ta] = _.useState(""), [ao, ba] = _.useState(""), [uo, za] = _.useState(""), [co, Pa] = _.useState(""), [Ul, La] = _.useState(!1), [fo, Ra] = _.useState(!1), [mn, Ma] = _.useState(!1), [st, hn] = _.useState([]), [po, $a] = _.useState(""), [mo, Ia] = _.useState(""), [ho, Oa] = _.useState(""), [go, Da] = _.useState(""), [vo, Aa] = _.useState(""), [gn, Fa] = _.useState(Kh), [Zn, Ua] = _.useState(""), [Kt, vn] = _.useState(null), [Ha, Jn] = _.useState(""), [Ba, er] = _.useState(""), [tr, nr] = _.useState(null), [$f, If] = _.useState(""), [Yt, Hl] = _.useState(null), [rr, Va] = _.useState(!1), Bl = _.useRef(0), Wa = _.useRef(null), U = _.useMemo(
    () => x.find((s) => s.id === Xn) ?? null,
    [x, Xn]
  ), Qa = _.useMemo(
    () => y.filter((s) => s.kind === "script"),
    [y]
  ), or = _.useMemo(
    () => P ? d.filter((s) => s.level === P) : d,
    [P, d]
  ), Vl = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of $)
      for (const g of f.members) {
        const v = s.get(g.source_key) ?? [];
        v.push(f), s.set(g.source_key, v);
      }
    return s;
  }, [$]), Wl = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of y) s.set(f.entity_id, f);
    for (const f of ze ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [y, ze]), Ga = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of $) {
      let g = 0, v = 0, T = 0;
      for (const I of f.members) {
        if (!I.entity_id.startsWith("automation.")) continue;
        g += 1;
        const M = Wl.get(I.entity_id);
        (M == null ? void 0 : M.enabled) === !0 ? v += 1 : (M == null ? void 0 : M.enabled) === !1 && (T += 1);
      }
      s.set(f.id, { automations: g, enabled: v, disabled: T });
    }
    return s;
  }, [$, Wl]), Xt = _.useMemo(() => $.flatMap((s) => [
    { key: eg(s.id), type: "group", group: s },
    ...[...s.members].sort((f, g) => f.name.localeCompare(g.name)).map((f) => ({
      key: tg(s.id, f.source_key),
      type: "member",
      group: s,
      member: f
    }))
  ]), [$]), Ql = _.useMemo(
    () => new Map(Xt.map((s) => [s.key, s])),
    [Xt]
  ), Gl = _.useMemo(
    () => rt.map((s) => Ql.get(s)).filter((s) => s !== void 0),
    [Ql, rt]
  ), Kl = _.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
    for (const v of ze ?? []) {
      v.category && s.add(v.category);
      for (const T of v.labels ?? []) f.add(T);
      for (const T of v.notify_devices ?? v.notifiers) g.add(T);
    }
    return {
      categories: [...s].sort((v, T) => v.localeCompare(T)),
      labels: [...f].sort((v, T) => v.localeCompare(T)),
      devices: [...g].sort((v, T) => v.localeCompare(T))
    };
  }, [ze]), Yl = _.useMemo(() => (ze ?? []).filter((s) => {
    var f;
    if (Zr && s.source !== Zr || Jr && s.category !== Jr || eo && !(s.labels ?? []).includes(eo) || to && !(s.notify_devices ?? s.notifiers).includes(to)) return !1;
    if (Yn) {
      const g = `${s.source}:${s.id}`;
      if (!((f = Vl.get(g)) != null && f.some((v) => v.id === Yn))) return !1;
    }
    return !0;
  }), [Jr, to, eo, Zr, Yn, Vl, ze]), q = _.useCallback((s) => {
    If(s);
  }, []), Q = _.useCallback((s, f) => {
    const g = s instanceof Error ? s.message : f;
    q(g), window.alert(g);
  }, [q]), Xl = _.useCallback((s) => {
    Hl(s);
  }, []), Of = _.useCallback(() => {
    rr || Hl(null);
  }, [rr]), Df = _.useCallback(async () => {
    if (Yt) {
      Va(!0);
      try {
        await Yt.onConfirm(), Hl(null);
      } catch (s) {
        Q(s, "The requested action could not be completed.");
      } finally {
        Va(!1);
      }
    }
  }, [Yt, Q]), Ka = _.useCallback(async () => {
    const s = t.current;
    if (!s) return;
    const [f, g, v, T, I, M] = await Promise.all([
      G(s, "notify_studio/info"),
      G(s, "notify_studio/list_notifiers"),
      G(s, "notify_studio/list_runnables"),
      G(s, "notify_studio/list_templates"),
      G(s, "notify_studio/list_custom_groups"),
      G(s, "notify_studio/list_custom_group_favorites")
    ]);
    m(f), w(g.services), C(v), Y(T), pe(I), Ye(M);
  }, []), Af = _.useCallback(async () => {
    const s = t.current;
    if (s) {
      O(!0);
      try {
        const [f, g] = await Promise.all([
          G(s, "notify_studio/list_custom_groups"),
          G(s, "notify_studio/list_custom_group_favorites")
        ]);
        pe(f), Ye(g);
      } catch (f) {
        Q(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        O(!1);
      }
    }
  }, [Q]), Ff = _.useCallback(async (s, f) => {
    const g = t.current;
    if (g) {
      Ie("favorites");
      try {
        const v = await G(
          g,
          "notify_studio/set_custom_group_favorites",
          { control_keys: s }
        );
        Ye(v), f && q(f);
      } catch (v) {
        Q(v, "Unable to save quick-control favorites.");
      } finally {
        Ie(null);
      }
    }
  }, [q, Q]), Uf = (s) => {
    const f = rt.filter((T) => Ql.has(T)), g = f.includes(s);
    if (!g && f.length >= lt) {
      q(`Only ${lt} favorite control${lt === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const v = g ? f.filter((T) => T !== s) : [...f, s];
    Ff(v, g ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };
  _.useLayoutEffect(() => {
    if (n !== "audit" || !Xt.length) return;
    const s = Wa.current;
    if (!s) return;
    let f = 0;
    const g = [], v = () => {
      if (!s.isConnected) return;
      if (window.matchMedia("(max-width: 700px)").matches) {
        fn((me) => me === 7 ? me : 7);
        return;
      }
      const M = Math.max(s.clientWidth, s.getBoundingClientRect().width);
      if (M < 480) return;
      const ce = Math.max(
        1,
        M - qh - Ei - 28
      ), B = Math.min(
        7,
        Math.max(
          1,
          Math.floor((ce + Ei) / (Xh + Ei))
        )
      );
      fn((me) => me === B ? me : B);
    }, T = () => {
      window.cancelAnimationFrame(f), f = window.requestAnimationFrame(v);
    };
    T(), g.push(window.setTimeout(v, 80)), g.push(window.setTimeout(v, 260));
    const I = new ResizeObserver(T);
    return I.observe(s), window.addEventListener("resize", T), () => {
      window.cancelAnimationFrame(f), g.forEach((M) => window.clearTimeout(M)), I.disconnect(), window.removeEventListener("resize", T);
    };
  }, [Xt.length, n]);
  const Ya = async () => {
    const s = t.current;
    if (!s) return;
    const f = ie.trim();
    if (!f) {
      Q(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }
    Ie("create");
    try {
      const g = await G(s, "notify_studio/create_custom_group", {
        name: f,
        kind: it
      });
      pe((v) => [...v, g].sort((T, I) => T.kind === I.kind ? T.name.localeCompare(I.name) : T.kind.localeCompare(I.kind))), Gt(""), q(`Custom ${g.kind} “${g.name}” created.`);
    } catch (g) {
      Q(g, "Unable to create the custom category or area.");
    } finally {
      Ie(null);
    }
  }, Hf = async (s) => {
    var v;
    const f = t.current;
    if (!f) return;
    const g = (v = window.prompt(`Rename custom ${s.kind}:`, s.name)) == null ? void 0 : v.trim();
    if (!(!g || g === s.name))
      try {
        const T = await G(f, "notify_studio/rename_custom_group", {
          group_id: s.id,
          name: g
        });
        pe((I) => I.map((M) => M.id === T.id ? T : M)), q(`Custom ${T.kind} renamed to “${T.name}”.`);
      } catch (T) {
        Q(T, "Unable to rename the custom category or area.");
      }
  }, Bf = async (s) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await G(f, "notify_studio/delete_custom_group", { group_id: s.id }), pe((g) => g.filter((v) => v.id !== s.id)), Ye((g) => g.filter((v) => !v.startsWith(`${s.id}::`))), Yn === s.id && ya(""), q(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (g) {
        Q(g, "Unable to delete the custom category or area.");
      }
  }, lr = (s) => `${s.source}:${s.id}`, _e = va ? $.find((s) => s.id === va) ?? null : null, Vf = (s) => {
    Ol(s.id), qr(s.members.map((f) => f.source_key)), q(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, Wf = () => {
    Ol(null), qr([]), q("Custom group selection cancelled.");
  }, Qf = (s, f) => {
    const g = lr(s);
    qr((v) => f ? [.../* @__PURE__ */ new Set([...v, g])] : v.filter((T) => T !== g));
  }, Gf = async () => {
    const s = t.current;
    if (!(!s || !_e)) {
      Ie("selection");
      try {
        const f = ze ?? [], g = new Set(f.map(lr)), v = new Set(Xr), T = _e.members.filter(
          (B) => !g.has(B.source_key)
        ), I = f.filter((B) => v.has(lr(B))).map((B) => {
          var me;
          return {
            source_key: lr(B),
            name: B.name,
            entity_id: ((me = B.runtime) == null ? void 0 : me.entity_id) ?? ""
          };
        }), M = await G(s, "notify_studio/set_custom_group_members", {
          group_id: _e.id,
          members: [...T, ...I]
        });
        pe(M);
        const ce = await G(s, "notify_studio/list_custom_group_favorites");
        Ye(ce), q(`Saved ${I.length} notification source${I.length === 1 ? "" : "s"} in “${_e.name}”.`), Ol(null), qr([]);
      } catch (f) {
        Q(f, "Unable to save the selected custom category or area members.");
      } finally {
        Ie(null);
      }
    }
  }, Kf = async (s, f) => {
    const g = t.current;
    if (!g) return;
    const v = Ga.get(s.id), T = (v == null ? void 0 : v.automations) ?? 0;
    if (!T) {
      Q(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const I = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${I} all ${T} automation${T === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      Ie("toggle");
      try {
        const M = await G(
          g,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: f }
        );
        q(`${s.name}: ${M.changed_entity_ids.length} automation${M.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await yo();
      } catch (M) {
        Q(M, `Unable to ${I} the automations in ${s.name}.`);
      } finally {
        Ie(null);
      }
    }
  }, ir = _.useCallback(async () => {
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
  }, []), ql = _.useCallback(async () => {
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
  }, [Q]), Yf = async () => {
    const s = t.current;
    if (!(!s || !window.confirm("Clear the Notify Studio application logs?"))) {
      E(!0);
      try {
        const f = await G(s, "notify_studio/clear_logs");
        h(f), q("Notify Studio logs cleared.");
      } catch (f) {
        Q(f, "Unable to clear Notify Studio logs.");
      } finally {
        E(!1);
      }
    }
  }, Xa = _.useCallback(async () => {
    try {
      await Ka(), Dl(null);
    } catch (s) {
      Q(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [q, Ka, Q]);
  _.useEffect(() => {
    e && !o && l(!0);
  }, [e, o]), _.useEffect(() => {
    o && Xa();
  }, [o, Xa]), _.useEffect(() => {
    o && ir();
  }, [o, ir]), _.useEffect(() => {
    !Xn && x.length && Al(x[0].id);
  }, [Xn, x]);
  const yo = _.useCallback(async () => {
    const s = t.current;
    if (!(!s || Ct)) {
      xa(!0);
      try {
        Dl(await G(s, "notify_studio/scan_notify_usage")), q("Notification audit complete.");
      } catch (f) {
        Q(f, "The notification audit failed.");
      } finally {
        xa(!1);
      }
    }
  }, [q, Ct, Q]);
  _.useEffect(() => {
    n === "audit" && ze === null && yo();
  }, [yo, n, ze]), _.useEffect(() => {
    n === "audit" && ir();
  }, [ir, n]), _.useEffect(() => {
    n === "logs" && ql();
  }, [ql, n]);
  const xo = _.useCallback(() => {
    const s = {};
    if (qn.trim() && (s.tag = qn.trim()), ro.trim() && (s.image = ro.trim()), mn && st.length && (s.actions = st.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (U == null ? void 0 : U.platform) === "android")
      Nt.trim() && (s.clickAction = Nt.trim()), oo.trim() && (s.subject = oo.trim()), lo.trim() && (s.channel = lo.trim()), io && (s.importance = io), so && (s.priority = so), ao.trim() && (s.color = ao.trim()), uo.trim() && (s.notification_icon = uo.trim()), co.trim() && (s.timeout = Number(co)), Ul && (s.sticky = !0), fo && (s.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      Nt.trim() && (s.url = Nt.trim()), po.trim() && (s.subtitle = po.trim());
      const f = {};
      mo.trim() && (f.sound = mo.trim()), ho.trim() && (f.badge = Number(ho)), go && (f["interruption-level"] = go), vo.trim() && (f["thread-id"] = vo.trim()), Object.keys(f).length && (s.push = f);
    } else Nt.trim() && (s.url = Nt.trim());
    return {
      message: pn,
      ...pt.trim() ? { title: pt } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [mn, ro, ho, lo, ao, io, go, pn, st, uo, Nt, fo, so, U == null ? void 0 : U.platform, mo, Ul, oo, po, qn, vo, co, pt]), Zl = _.useCallback(() => mn ? st.filter((s) => s.route !== "uri").map((s) => {
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
        service_data: Jh(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [mn, st]), Xf = _.useCallback(() => ({
    payload: xo(),
    action_handlers: Zl(),
    ...U ? { target_platform: U.platform } : {}
  }), [Zl, xo, U]), qa = () => U || (Q(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  _.useEffect(() => {
    const s = t.current;
    if (!o || !s) return;
    const f = ++Bl.current;
    let g = !1;
    const v = {
      message: pn,
      ...pt.trim() ? { title: pt } : {}
    }, T = window.setTimeout(() => {
      G(s, "notify_studio/render_preview", { payload: v }).then((I) => {
        !g && f === Bl.current && Fa(I);
      }).catch((I) => {
        if (g || f !== Bl.current) return;
        const M = I instanceof Error ? I.message : "Unable to render the current template.";
        Fa({ rendered: {}, errors: { message: M } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(T);
    };
  }, [o, pn, pt]);
  const qf = async () => {
    const s = qa();
    if (!(!s || !t.current)) {
      vn("test");
      try {
        const f = await G(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: xo()
        });
        q(`Test notification sent to ${f.target}.`);
      } catch (f) {
        Q(f, "The test notification could not be sent.");
      } finally {
        vn(null);
      }
    }
  }, Zf = async () => {
    const s = qa();
    if (!(!s || !t.current)) {
      vn("yaml");
      try {
        const f = await G(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: xo(),
          action_handlers: Zl()
        });
        Ua(f.yaml), q("YAML generated successfully.");
      } catch (f) {
        Q(f, "Unable to generate YAML.");
      } finally {
        vn(null);
      }
    }
  }, Jf = async () => {
    var f;
    if (!Zn.trim()) {
      Q(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(Zn), s = !0;
      } catch {
      }
    if (!s) {
      const g = document.createElement("textarea");
      g.value = Zn, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
      try {
        s = document.execCommand("copy");
      } finally {
        document.body.removeChild(g);
      }
    }
    if (s) {
      q("Generated YAML copied to the clipboard.");
      return;
    }
    Q(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, Za = _.useCallback((s) => {
    const f = t.current;
    if (typeof (f == null ? void 0 : f.navigate) == "function") {
      f.navigate(s);
      return;
    }
    window.history.pushState({}, "", s), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
  }, []), ep = () => {
    Xl({
      title: "Open Automations?",
      message: "Open the Home Assistant Automations dashboard?",
      confirmLabel: "Open Automations",
      onConfirm: () => Za("/config/automation/dashboard")
    });
  }, tp = (s) => {
    const f = s.kind === "automation" ? "Automation" : "Script", g = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    Xl({
      title: `View ${f}?`,
      message: `Open the Home Assistant editor for “${s.name}”?`,
      confirmLabel: `View ${f}`,
      onConfirm: () => Za(`/config/${s.kind}/edit/${encodeURIComponent(String(g))}`)
    });
  }, np = (s, f) => {
    C((g) => g.map((v) => v.entity_id === s ? { ...v, ...f } : v)), Dl((g) => (g == null ? void 0 : g.map((v) => {
      var T;
      return ((T = v.runtime) == null ? void 0 : T.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, Ja = async (s, f) => {
    if (t.current)
      try {
        const g = await G(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: f
        });
        np(g.entity_id, {
          state: g.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), q(`${s.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (g) {
        Q(g, "Unable to update that automation.");
      }
  }, rp = async (s) => {
    if (!t.current)
      throw new Error("Notify Studio is not connected to Home Assistant yet.");
    const f = await G(
      t.current,
      "notify_studio/run_runnable",
      { entity_id: s.entity_id }
    );
    q(`${s.name} was queued for execution${f.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
      ir();
    }, 900);
  }, op = (s) => {
    const f = s.kind === "automation" ? "Automation" : "Script", g = s.kind === "automation" ? " Top-level conditions are bypassed for this manual test." : "";
    Xl({
      title: `Run ${f} Test?`,
      message: `Run “${s.name}” now? This can control real devices.${g}`,
      confirmLabel: "Run Test",
      onConfirm: () => rp(s)
    });
  }, yn = (s, f) => {
    hn((g) => g.map((v, T) => T === s ? { ...v, ...f } : v));
  }, lp = (s, f) => {
    hn((g) => g.map((v, T) => T !== s ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? ks(v.title, s + 1) : v.id
    }));
  }, ip = () => {
    const s = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    hn((f) => f.length >= s ? f : [...f, fc(f.length + 1)]);
  }, sp = (s) => {
    hn((f) => f.filter((g, v) => v !== s));
  }, Jl = _.useCallback((s) => {
    const f = s.payload, g = Yo(f.data) ? f.data : {};
    _a(te(f.message)), ka(te(f.title)), Fl(te(g.tag)), Sa(te(g.image)), Ca(te(g.clickAction) || te(g.url)), Na(te(g.subject)), ja(te(g.channel)), Ea(te(g.importance)), Ta(te(g.priority)), ba(te(g.color)), za(te(g.notification_icon)), Pa(g.timeout === void 0 ? "" : String(g.timeout)), La(mc(g.sticky)), Ra(mc(g.persistent)), $a(te(g.subtitle));
    const v = Yo(g.push) ? g.push : {};
    Ia(te(v.sound)), Oa(v.badge === void 0 ? "" : String(v.badge)), Da(te(v["interruption-level"])), Aa(te(v["thread-id"]));
    const T = new Map(s.action_handlers.map((ce) => [ce.action, ce])), M = (Array.isArray(g.actions) ? g.actions : []).filter(Yo).map((ce, B) => {
      const me = te(ce.action) || ks(`Action ${B + 1}`, B + 1), he = T.get(me);
      let jt = "event";
      return me === "URI" && te(ce.uri) ? jt = "uri" : te(ce.behavior) === "textInput" ? jt = "reply" : (he == null ? void 0 : he.type) === "script" ? jt = "script" : (he == null ? void 0 : he.type) === "service" && (jt = "service"), {
        id: me,
        title: te(ce.title) || `Action ${B + 1}`,
        route: jt,
        uri: te(ce.uri),
        scriptEntityId: te(he == null ? void 0 : he.script_entity_id),
        service: te(he == null ? void 0 : he.service),
        serviceData: he != null && he.service_data ? JSON.stringify(he.service_data, null, 2) : ""
      };
    });
    if (hn(M), Ma(M.length > 0), Ua(""), s.target_platform && (U == null ? void 0 : U.platform) !== s.target_platform) {
      const ce = x.find((B) => B.platform === s.target_platform);
      ce && Al(ce.id);
    }
  }, [U == null ? void 0 : U.platform, x]), ap = (s) => {
    if (no(s), !s) return;
    const f = R.find((g) => g.id === s);
    f && (Jl(f.draft), q(`Template “${f.name}” loaded into the composer.`));
  }, up = () => {
    nr(null), Jn(pt.trim() || "New notification template"), er(""), r("templates");
  }, cp = (s) => {
    nr(s.id), Jn(s.name), er(s.description), Jl(s.draft), r("templates"), q(`Editing template “${s.name}”.`);
  }, dp = async () => {
    if (t.current) {
      vn("template");
      try {
        const s = await G(t.current, "notify_studio/save_template", {
          template: {
            ...tr ? { id: tr } : {},
            name: Ha,
            description: Ba,
            draft: Xf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === s.id) === -1 ? [s, ...f] : f.map((v) => v.id === s.id ? s : v)), no(s.id), nr(s.id), q(`Template “${s.name}” saved.`);
      } catch (s) {
        Q(s, "Unable to save the template.");
      } finally {
        vn(null);
      }
    }
  }, fp = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await G(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((g) => g.id !== s.id)), wa === s.id && no(""), tr === s.id && (nr(null), Jn(""), er("")), q(`Template “${s.name}” deleted.`);
      } catch (f) {
        Q(f, "Unable to delete the template.");
      }
  }, pp = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(A, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: oo, onChange: (s) => Na(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: lo, onChange: (s) => ja(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: io, onChange: (s) => Ea(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: so, onChange: (s) => Ta(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: ao, onChange: (s) => ba(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: uo, onChange: (s) => za(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: co, onChange: (s) => Pa(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Ul, onChange: (s) => La(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: fo, onChange: (s) => {
        const f = s.target.checked;
        Ra(f), f && !qn.trim() && Fl(Zh(pt, pn));
      } }),
      " Persistent notification"
    ] }),
    fo && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(A, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: po, onChange: (s) => $a(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: mo, onChange: (s) => Ia(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ho, onChange: (s) => Oa(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: go, onChange: (s) => Da(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(A, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: vo, onChange: (s) => Aa(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, mp = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const s = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: mn, onChange: (f) => {
          const g = f.target.checked;
          Ma(g), g && !st.length && hn([fc(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      mn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
            st.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => sp(g), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(A, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (v) => yn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (v) => lp(g, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send Event Only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run Script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant Action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / Dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for Text Reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(A, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (v) => yn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(A, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (v) => yn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(A, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => yn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              Qa.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(A, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (v) => yn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(A, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => yn(g, { serviceData: v.target.value }), placeholder: `{
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
          f.route === "script" && !Qa.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
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
          st.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: ip, children: "Add Button" })
        ] })
      ] })
    ] });
  }, hp = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: bi(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), gp = (s) => {
    var ce;
    const f = lr(s), g = (ce = s.notify_devices) != null && ce.length ? s.notify_devices : s.notifiers, v = s.runtime, T = Vl.get(f) ?? [], I = _e !== null, M = Xr.includes(f);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${I ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          I && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(_e == null ? void 0 : _e.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: M, onChange: (B) => Qf(s, B.target.checked) }),
            /* @__PURE__ */ a.jsxs("span", { className: "ns-sr-only", children: [
              "Include ",
              s.name,
              " in ",
              _e == null ? void 0 : _e.name
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.source === "script" ? "script" : "automation"}`, children: s.source })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        hp(v),
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
        T.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: T.map((B) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${B.kind}`, children: [
          B.kind === "category" ? "Category" : "Area",
          ": ",
          B.name
        ] }, B.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Ja(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void op(v), children: "Run Test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => tp(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, vp = (s) => {
    var tu;
    const f = s.group.kind === "category" ? "Category" : "Area", g = rt.includes(s.key), v = !g && Gl.length >= lt, T = Ga.get(s.group.id) ?? { automations: 0, enabled: 0 }, I = s.type === "group", M = s.member ? Wl.get(s.member.entity_id) : void 0, B = !(T.automations > 0 && T.enabled === T.automations), me = I ? T.automations === 0 ? "No Automations" : B ? "Enable All" : "Disable All" : ((tu = s.member) == null ? void 0 : tu.name) ?? "Notification source", he = I ? T.automations === 0 ? "Add an Automation Source" : `All Automations · ${T.enabled}/${T.automations} Enabled` : (M == null ? void 0 : M.kind) === "automation" ? M.enabled ? "Enabled" : "Disabled" : (M == null ? void 0 : M.kind) === "script" ? "Script" : "Unavailable", jt = !I && (M == null ? void 0 : M.kind) === "automation" ? M.enabled ? "enabled" : "disabled" : null, eu = I ? T.automations > 0 : (M == null ? void 0 : M.kind) === "automation";
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-member-control", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `ns-custom-group-member-button ${I ? "ns-custom-group-member-button--all" : ""}`,
          disabled: !eu || ue === "toggle",
          onClick: () => {
            I ? Kf(s.group, B) : (M == null ? void 0 : M.kind) === "automation" && Ja(M, !M.enabled);
          },
          title: eu ? I ? `${me} automations in ${s.group.name}` : `Toggle ${me}` : (M == null ? void 0 : M.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.group.kind}`, children: [
              f,
              ": ",
              s.group.name
            ] }),
            /* @__PURE__ */ a.jsx("strong", { children: me }),
            /* @__PURE__ */ a.jsxs("span", { className: "ns-custom-group-member-button__status", children: [
              jt && /* @__PURE__ */ a.jsx("span", { className: `ns-custom-group-member-button__status-dot is-${jt}`, "aria-hidden": "true" }),
              /* @__PURE__ */ a.jsx("span", { children: he })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-favorite ${g ? "is-favorite" : ""}`,
          onClick: () => Uf(s.key),
          disabled: ue === "favorites" || v,
          "aria-pressed": g,
          "aria-label": g ? `Remove ${me} from quick controls` : `Add ${me} to quick controls`,
          title: v ? "Quick row is full. Remove a star before adding another favorite." : g ? "Remove from quick controls" : "Add to quick controls",
          children: g ? "★" : "☆"
        }
      )
    ] }, s.key);
  }, yp = () => {
    if (!$.length)
      return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => X(!0), children: [
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
      ] }) });
    const s = ot ? Xt : Gl.length > 0 ? Gl.slice(0, lt) : Xt.slice(0, lt), f = Xt.length > s.length, g = {
      "--ns-quick-control-columns": String(Math.max(1, s.length))
    };
    return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control-panel", ref: Wa, children: [
      /* @__PURE__ */ a.jsx("div", { className: `ns-custom-group-member-grid ${ot ? "is-expanded" : ""}`, style: g, children: s.map(vp) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-expand ${ot ? "is-expanded" : ""}`,
          onClick: () => Il((v) => !v),
          "aria-expanded": ot,
          "aria-label": ot ? "Collapse quick controls" : "Show all custom group controls",
          title: ot ? "Show quick controls" : f ? "Show all controls" : "Choose favourite controls",
          children: ot ? "⌃" : "⌄"
        }
      )
    ] }) });
  }, xp = () => {
    if (!D) return null;
    const s = $.filter((v) => v.kind === "category"), f = $.filter((v) => v.kind === "area"), g = (v, T) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !T.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: T.map((I) => {
        const M = (_e == null ? void 0 : _e.id) === I.id;
        return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-manager__item", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("strong", { children: I.name }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              I.members.length,
              " assigned notification source",
              I.members.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions ns-custom-group-manager__item-actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${M ? "ns-button--active" : ""}`, onClick: () => Vf(I), disabled: ue === "selection", children: M ? "Selecting Entities" : "Select Entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Hf(I), disabled: ue === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Bf(I), disabled: ue === "selection", children: "Delete" })
          ] })
        ] }, I.id);
      }) })
    ] });
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-custom-group-manager", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Custom categories and areas" }),
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels." })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Af(), disabled: b, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => X(!1), disabled: ue === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(A, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: ie, onChange: (v) => Gt(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Ya();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(A, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: it, onChange: (v) => Kn(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ya(), disabled: ue === "create", children: ue === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          g("category", s),
          g("area", f)
        ] }),
        _e && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__selection", children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
            /* @__PURE__ */ a.jsx("strong", { children: _e.name }),
            "."
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Wf, disabled: ue === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Gf(), disabled: ue === "selection", children: ue === "selection" ? "Saving…" : `Save ${Xr.length} ${Xr.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: dc }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: dc }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: $f }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Yh, alt: "Notify Studio" }),
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
          U && /* @__PURE__ */ a.jsx("span", { className: pc(U.platform), children: Ti(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(A, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: wa, onChange: (s) => ap(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            R.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(A, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Xn, onChange: (s) => Al(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            Ti(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          U == null ? void 0 : U.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(A, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: pt, onChange: (s) => ka(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: qn, onChange: (s) => Fl(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Nt, onChange: (s) => Ca(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: ro, onChange: (s) => Sa(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: pn, onChange: (s) => _a(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          pp(),
          mp(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void qf(), disabled: Kt !== null, children: Kt === "test" ? "Sending…" : "Send Test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: up, disabled: Kt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Zf(), disabled: Kt !== null, children: Kt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx(A, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: gn.errors.title ? `Error: ${gn.errors.title}` : gn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(A, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: gn.errors.message ? `Error: ${gn.errors.message}` : gn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              Zn && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Jf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: ep, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: Zn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: tr ? "Edit Template" : "Create Template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(A, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Ha, onChange: (s) => Jn(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(A, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Ba, onChange: (s) => er(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void dp(), disabled: Kt !== null, children: Kt === "template" ? "Saving…" : tr ? "Update Template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              nr(null), Jn(""), er("");
            }, children: "New Template" })
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
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: pc(s.draft.target_platform), children: Ti(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(g = s.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              no(s.id), Jl(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => cp(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void fp(s), children: "Delete" })
          ] })
        ] }) }, s.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-layout", children: [
      /* @__PURE__ */ a.jsxs("aside", { className: "ns-card ns-logs-sidebar", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio. This in-memory list clears when Home Assistant restarts." }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(A, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: P, onChange: (s) => L(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
            /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
            /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
            /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
          ] }) }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-sidebar-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void ql(), disabled: k, children: k ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Yf(), disabled: k, children: "Clear Logs" })
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
            P ? ` matching ${hc(P).toLowerCase()}` : ""
          ] })
        ] }) }),
        k && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
        !k && !or.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run Test, Send Test, or Scan Now to create diagnostic entries." }),
        !k && or.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: or.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("span", { className: ng(s.level), children: hc(s.level) }),
              /* @__PURE__ */ a.jsx("strong", { children: s.message })
            ] }),
            /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: bi(s.timestamp) })
          ] }),
          s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
          s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
          /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
        ] }, `${s.timestamp}:${s.event}:${f}`)) })
      ] })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      yp(),
      xp(),
      /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "ns-notifications-toolbar", children: [
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => X(!0), children: "Manage Groups" }),
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void yo(), disabled: Ct, children: Ct ? "Scanning…" : "Scan Now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(A, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Zr, onChange: (s) => Pf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(A, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: Jr, onChange: (s) => Lf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Kl.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(A, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: eo, onChange: (s) => Rf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Kl.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(A, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: to, onChange: (s) => Mf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Kl.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(A, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: Yn, onChange: (s) => ya(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                $.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) })
            ] }) })
          ] }),
          Ct && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !Ct && (ze == null ? void 0 : ze.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !Ct && ze && Yl.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !Ct && ze && Yl.length > 0 && /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "All notification sources" }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: Yl.map(gp) })
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
                bi(s.last_triggered)
              ] })
            ] }, s.entity_id)) })
          ] })
        ] }) })
      ] })
    ] }),
    Yt && /* @__PURE__ */ a.jsx("div", { className: "ns-modal-backdrop", role: "presentation", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-confirmation-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "notify-studio-confirmation-title", "aria-describedby": "notify-studio-confirmation-message", children: [
      /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { id: "notify-studio-confirmation-title", className: "ns-card__title", children: Yt.title }) }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsx("p", { id: "notify-studio-confirmation-message", className: "ns-confirmation-dialog__message", children: Yt.message }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer ns-confirmation-dialog__footer", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: Of, disabled: rr, children: "Cancel" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Df(), disabled: rr, children: rr ? "Working…" : Yt.confirmLabel })
      ] })
    ] }) })
  ] });
}
function A({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ a.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    t
  ] });
}
class og extends HTMLElement {
  constructor() {
    super(...arguments);
    ei(this, "root");
    ei(this, "currentHass");
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
    this.root || (this.root = bf(this)), this.root.render(/* @__PURE__ */ a.jsx(rg, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", og);
