var cp = Object.defineProperty;
var dp = (e, t, n) => t in e ? cp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Xl = (e, t, n) => dp(e, typeof t != "symbol" ? t + "" : t, n);
var uc = { exports: {} }, yl = {}, cc = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br = Symbol.for("react.element"), fp = Symbol.for("react.portal"), pp = Symbol.for("react.fragment"), mp = Symbol.for("react.strict_mode"), hp = Symbol.for("react.profiler"), gp = Symbol.for("react.provider"), vp = Symbol.for("react.context"), yp = Symbol.for("react.forward_ref"), xp = Symbol.for("react.suspense"), wp = Symbol.for("react.memo"), _p = Symbol.for("react.lazy"), Ya = Symbol.iterator;
function kp(e) {
  return e === null || typeof e != "object" ? null : (e = Ya && e[Ya] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fc = Object.assign, pc = {};
function Vn(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mc() {
}
mc.prototype = Vn.prototype;
function xs(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
}
var ws = xs.prototype = new mc();
ws.constructor = xs;
fc(ws, Vn.prototype);
ws.isPureReactComponent = !0;
var Xa = Array.isArray, hc = Object.prototype.hasOwnProperty, _s = { current: null }, gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) hc.call(t, r) && !gc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Br, type: e, key: l, ref: i, props: o, _owner: _s.current };
}
function Sp(e, t) {
  return { $$typeof: Br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ks(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function Cp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qa = /\/+/g;
function ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cp("" + e.key) : t.toString(36);
}
function Io(e, t, n, r, o) {
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
        case Br:
        case fp:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ql(i, 0) : r, Xa(o) ? (n = "", e != null && (n = e.replace(qa, "$&/") + "/"), Io(o, t, n, "", function(m) {
    return m;
  })) : o != null && (ks(o) && (o = Sp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(qa, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Xa(e)) for (var u = 0; u < e.length; u++) {
    l = e[u];
    var c = r + ql(l, u);
    i += Io(l, t, n, c, o);
  }
  else if (c = kp(e), typeof c == "function") for (e = c.call(e), u = 0; !(l = e.next()).done; ) l = l.value, c = r + ql(l, u++), i += Io(l, t, n, c, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Io(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function Np(e) {
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
var Ee = { current: null }, $o = { transition: null }, jp = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: $o, ReactCurrentOwner: _s };
function yc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: yo, forEach: function(e, t, n) {
  yo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ks(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Vn;
A.Fragment = pp;
A.Profiler = hp;
A.PureComponent = xs;
A.StrictMode = mp;
A.Suspense = xp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
A.act = yc;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = _s.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) hc.call(t, c) && !gc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Br, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: vp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gp, _context: e }, e.Consumer = e;
};
A.createElement = vc;
A.createFactory = function(e) {
  var t = vc.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: yp, render: e };
};
A.isValidElement = ks;
A.lazy = function(e) {
  return { $$typeof: _p, _payload: { _status: -1, _result: e }, _init: Np };
};
A.memo = function(e, t) {
  return { $$typeof: wp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = $o.transition;
  $o.transition = {};
  try {
    e();
  } finally {
    $o.transition = t;
  }
};
A.unstable_act = yc;
A.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
A.useContext = function(e) {
  return Ee.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
A.useId = function() {
  return Ee.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return Ee.current.useRef(e);
};
A.useState = function(e) {
  return Ee.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return Ee.current.useTransition();
};
A.version = "18.3.1";
cc.exports = A;
var k = cc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ep = k, zp = Symbol.for("react.element"), Pp = Symbol.for("react.fragment"), Tp = Object.prototype.hasOwnProperty, Lp = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Tp.call(t, r) && !Rp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: zp, type: e, key: l, ref: i, props: o, _owner: Lp.current };
}
yl.Fragment = Pp;
yl.jsx = xc;
yl.jsxs = xc;
uc.exports = yl;
var a = uc.exports, wc = { exports: {} }, Ae = {}, _c = { exports: {} }, kc = {};
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
      var X = D - 1 >>> 1, ie = P[X];
      if (0 < o(ie, O)) P[X] = O, P[D] = ie, D = X;
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
      e: for (var X = 0, ie = P.length, Gt = ie >>> 1; X < Gt; ) {
        var it = 2 * (X + 1) - 1, Gn = P[it], ce = it + 1, Ie = P[ce];
        if (0 > o(Gn, D)) ce < ie && 0 > o(Ie, Gn) ? (P[X] = Ie, P[ce] = D, X = ce) : (P[X] = Gn, P[it] = D, X = it);
        else if (ce < ie && 0 > o(Ie, D)) P[X] = Ie, P[ce] = D, X = ce;
        else break e;
      }
    }
    return O;
  }
  function o(P, O) {
    var D = P.sortIndex - O.sortIndex;
    return D !== 0 ? D : P.id - O.id;
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
  function h(P) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= P) r(m), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(m);
    }
  }
  function _(P) {
    if (j = !1, h(P), !N) if (n(c) !== null) N = !0, lt(E);
    else {
      var O = n(m);
      O !== null && dn(_, O.startTime - P);
    }
  }
  function E(P, O) {
    N = !1, j && (j = !1, p(b), b = -1), C = !0;
    var D = y;
    try {
      for (h(O), w = n(c); w !== null && (!(w.expirationTime > O) || P && !pe()); ) {
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
        it !== null && dn(_, it.startTime - O), Gt = !1;
      }
      return Gt;
    } finally {
      w = null, y = D, C = !1;
    }
  }
  var L = !1, R = null, b = -1, Y = 5, I = -1;
  function pe() {
    return !(e.unstable_now() - I < Y);
  }
  function rt() {
    if (R !== null) {
      var P = e.unstable_now();
      I = P;
      var O = !0;
      try {
        O = R(!0, P);
      } finally {
        O ? Ye() : (L = !1, R = null);
      }
    } else L = !1;
  }
  var Ye;
  if (typeof d == "function") Ye = function() {
    d(rt);
  };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(), Ml = ot.port2;
    ot.port1.onmessage = rt, Ye = function() {
      Ml.postMessage(null);
    };
  } else Ye = function() {
    W(rt, 0);
  };
  function lt(P) {
    R = P, L || (L = !0, Ye());
  }
  function dn(P, O) {
    b = W(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    N || C || (N = !0, lt(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(P) {
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
      return P();
    } finally {
      y = D;
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
    var D = y;
    y = P;
    try {
      return O();
    } finally {
      y = D;
    }
  }, e.unstable_scheduleCallback = function(P, O, D) {
    var X = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? X + D : X) : D = X, P) {
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
    return ie = D + ie, P = { id: x++, callback: O, priorityLevel: P, startTime: D, expirationTime: ie, sortIndex: -1 }, D > X ? (P.sortIndex = D, t(m, P), n(c) === null && P === n(m) && (j ? (p(b), b = -1) : j = !0, dn(_, D - X))) : (P.sortIndex = ie, t(c, P), N || C || (N = !0, lt(E))), P;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(P) {
    var O = y;
    return function() {
      var D = y;
      y = O;
      try {
        return P.apply(this, arguments);
      } finally {
        y = D;
      }
    };
  };
})(kc);
_c.exports = kc;
var bp = _c.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp = k, Fe = bp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sc = /* @__PURE__ */ new Set(), jr = {};
function un(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) Sc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ji = Object.prototype.hasOwnProperty, Ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Za = {}, Ja = {};
function $p(e) {
  return ji.call(Ja, e) ? !0 : ji.call(Za, e) ? !1 : Ip.test(e) ? Ja[e] = !0 : (Za[e] = !0, !1);
}
function Op(e, t, n, r) {
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
function Dp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r)) return !0;
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
function ze(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function Cs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ss,
    Cs
  );
  xe[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ss, Cs);
  xe[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ss, Cs);
  xe[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ns(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dp(t, n, o, r) && (n = null), r || o === null ? $p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xo = Symbol.for("react.element"), xn = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), js = Symbol.for("react.strict_mode"), Ei = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), Nc = Symbol.for("react.context"), Es = Symbol.for("react.forward_ref"), zi = Symbol.for("react.suspense"), Pi = Symbol.for("react.suspense_list"), zs = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"), jc = Symbol.for("react.offscreen"), eu = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, Zl;
function pr(e) {
  if (Zl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Zl = t && t[1] || "";
  }
  return `
` + Zl + e;
}
var Jl = !1;
function ei(e, t) {
  if (!e || Jl) return "";
  Jl = !0;
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
    Jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function Fp(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ei(e.type, !1), e;
    case 11:
      return e = ei(e.type.render, !1), e;
    case 1:
      return e = ei(e.type, !0), e;
    default:
      return "";
  }
}
function Ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case xn:
      return "Portal";
    case Ei:
      return "Profiler";
    case js:
      return "StrictMode";
    case zi:
      return "Suspense";
    case Pi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Nc:
      return (e.displayName || "Context") + ".Consumer";
    case Cc:
      return (e._context.displayName || "Context") + ".Provider";
    case Es:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case zs:
      return t = e.displayName || null, t !== null ? t : Ti(e.type) || "Memo";
    case zt:
      t = e._payload, e = e._init;
      try {
        return Ti(e(t));
      } catch {
      }
  }
  return null;
}
function Ap(e) {
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
      return Ti(t);
    case 8:
      return t === js ? "StrictMode" : "Mode";
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
function Ec(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Up(e) {
  var t = Ec(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function wo(e) {
  e._valueTracker || (e._valueTracker = Up(e));
}
function zc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ec(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ko(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Li(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pc(e, t) {
  t = t.checked, t != null && Ns(e, "checked", t, !1);
}
function Ri(e, t) {
  Pc(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bi(e, t.type, n) : t.hasOwnProperty("defaultValue") && bi(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function nu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bi(e, t, n) {
  (t !== "number" || Ko(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
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
function Mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ru(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function Tc(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Lc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var _o, Rc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (_o = _o || document.createElement("div"), _o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _o.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
}, Hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function(e) {
  Hp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vr[t] = vr[e];
  });
});
function bc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vr.hasOwnProperty(e) && vr[e] ? ("" + t).trim() : t + "px";
}
function Mc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = bc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Bp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $i(e, t) {
  if (t) {
    if (Bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Oi(e, t) {
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
var Di = null;
function Ps(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fi = null, Rn = null, bn = null;
function lu(e) {
  if (e = Qr(e)) {
    if (typeof Fi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Sl(t), Fi(e.stateNode, e.type, t));
  }
}
function Ic(e) {
  Rn ? bn ? bn.push(e) : bn = [e] : Rn = e;
}
function $c() {
  if (Rn) {
    var e = Rn, t = bn;
    if (bn = Rn = null, lu(e), t) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Dc() {
}
var ti = !1;
function Fc(e, t, n) {
  if (ti) return e(t, n);
  ti = !0;
  try {
    return Oc(e, t, n);
  } finally {
    ti = !1, (Rn !== null || bn !== null) && (Dc(), $c());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
var Ai = !1;
if (xt) try {
  var ir = {};
  Object.defineProperty(ir, "passive", { get: function() {
    Ai = !0;
  } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
} catch {
  Ai = !1;
}
function Vp(e, t, n, r, o, l, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var yr = !1, Yo = null, Xo = !1, Ui = null, Wp = { onError: function(e) {
  yr = !0, Yo = e;
} };
function Qp(e, t, n, r, o, l, i, u, c) {
  yr = !1, Yo = null, Vp.apply(Wp, arguments);
}
function Gp(e, t, n, r, o, l, i, u, c) {
  if (Qp.apply(this, arguments), yr) {
    if (yr) {
      var m = Yo;
      yr = !1, Yo = null;
    } else throw Error(S(198));
    Xo || (Xo = !0, Ui = m);
  }
}
function cn(e) {
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
function Ac(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function iu(e) {
  if (cn(e) !== e) throw Error(S(188));
}
function Kp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cn(e), t === null) throw Error(S(188));
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
        if (l === n) return iu(o), e;
        if (l === r) return iu(o), t;
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
function Uc(e) {
  return e = Kp(e), e !== null ? Hc(e) : null;
}
function Hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bc = Fe.unstable_scheduleCallback, su = Fe.unstable_cancelCallback, Yp = Fe.unstable_shouldYield, Xp = Fe.unstable_requestPaint, se = Fe.unstable_now, qp = Fe.unstable_getCurrentPriorityLevel, Ts = Fe.unstable_ImmediatePriority, Vc = Fe.unstable_UserBlockingPriority, qo = Fe.unstable_NormalPriority, Zp = Fe.unstable_LowPriority, Wc = Fe.unstable_IdlePriority, xl = null, dt = null;
function Jp(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : nm, em = Math.log, tm = Math.LN2;
function nm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (em(e) / tm | 0) | 0;
}
var ko = 64, So = 4194304;
function hr(e) {
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
function Zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = hr(u) : (l &= i, l !== 0 && (r = hr(l)));
  } else i = n & ~o, i !== 0 ? r = hr(i) : l !== 0 && (r = hr(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function rm(e, t) {
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
function om(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - et(l), u = 1 << i, c = o[i];
    c === -1 ? (!(u & n) || u & r) && (o[i] = rm(u, t)) : c <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Hi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Qc() {
  var e = ko;
  return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
}
function ni(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function lm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - et(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Ls(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function Gc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Kc, Rs, Yc, Xc, qc, Bi = !1, Co = [], Mt = null, It = null, $t = null, Pr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Tt = [], im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Qr(t), t !== null && Rs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function sm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Mt = sr(Mt, e, t, n, r, o), !0;
    case "dragenter":
      return It = sr(It, e, t, n, r, o), !0;
    case "mouseover":
      return $t = sr($t, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Pr.set(l, sr(Pr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Tr.set(l, sr(Tr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Zc(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ac(n), t !== null) {
          e.blockedOn = t, qc(e.priority, function() {
            Yc(n);
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
function Oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Di = r, n.target.dispatchEvent(r), Di = null;
    } else return t = Qr(n), t !== null && Rs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function uu(e, t, n) {
  Oo(e) && n.delete(t);
}
function am() {
  Bi = !1, Mt !== null && Oo(Mt) && (Mt = null), It !== null && Oo(It) && (It = null), $t !== null && Oo($t) && ($t = null), Pr.forEach(uu), Tr.forEach(uu);
}
function ar(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bi || (Bi = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, am)));
}
function Lr(e) {
  function t(o) {
    return ar(o, e);
  }
  if (0 < Co.length) {
    ar(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Mt !== null && ar(Mt, e), It !== null && ar(It, e), $t !== null && ar($t, e), Pr.forEach(t), Tr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Zc(n), n.blockedOn === null && Tt.shift();
}
var Mn = St.ReactCurrentBatchConfig, Jo = !0;
function um(e, t, n, r) {
  var o = V, l = Mn.transition;
  Mn.transition = null;
  try {
    V = 1, bs(e, t, n, r);
  } finally {
    V = o, Mn.transition = l;
  }
}
function cm(e, t, n, r) {
  var o = V, l = Mn.transition;
  Mn.transition = null;
  try {
    V = 4, bs(e, t, n, r);
  } finally {
    V = o, Mn.transition = l;
  }
}
function bs(e, t, n, r) {
  if (Jo) {
    var o = Vi(e, t, n, r);
    if (o === null) fi(e, t, r, el, n), au(e, r);
    else if (sm(o, e, t, n, r)) r.stopPropagation();
    else if (au(e, r), t & 4 && -1 < im.indexOf(e)) {
      for (; o !== null; ) {
        var l = Qr(o);
        if (l !== null && Kc(l), l = Vi(e, t, n, r), l === null && fi(e, t, r, el, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else fi(e, t, r, null, n);
  }
}
var el = null;
function Vi(e, t, n, r) {
  if (el = null, e = Ps(r), e = Zt(e), e !== null) if (t = cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ac(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return el = e, null;
}
function Jc(e) {
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
      switch (qp()) {
        case Ts:
          return 1;
        case Vc:
          return 4;
        case qo:
        case Zp:
          return 16;
        case Wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null, Ms = null, Do = null;
function ed() {
  if (Do) return Do;
  var e, t = Ms, n = t.length, r, o = "value" in Rt ? Rt.value : Rt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Do = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Fo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function No() {
  return !0;
}
function cu() {
  return !1;
}
function Ue(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? No : cu, this.isPropagationStopped = cu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = No);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = No);
  }, persist: function() {
  }, isPersistent: No }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Is = Ue(Wn), Wr = oe({}, Wn, { view: 0, detail: 0 }), dm = Ue(Wr), ri, oi, ur, wl = oe({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $s, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (ri = e.screenX - ur.screenX, oi = e.screenY - ur.screenY) : oi = ri = 0, ur = e), ri);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : oi;
} }), du = Ue(wl), fm = oe({}, wl, { dataTransfer: 0 }), pm = Ue(fm), mm = oe({}, Wr, { relatedTarget: 0 }), li = Ue(mm), hm = oe({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gm = Ue(hm), vm = oe({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ym = Ue(vm), xm = oe({}, Wn, { data: 0 }), fu = Ue(xm), wm = {
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
}, _m = {
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
}, km = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = km[e]) ? !!t[e] : !1;
}
function $s() {
  return Sm;
}
var Cm = oe({}, Wr, { key: function(e) {
  if (e.key) {
    var t = wm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _m[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $s, charCode: function(e) {
  return e.type === "keypress" ? Fo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nm = Ue(Cm), jm = oe({}, wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pu = Ue(jm), Em = oe({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $s }), zm = Ue(Em), Pm = oe({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tm = Ue(Pm), Lm = oe({}, wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Rm = Ue(Lm), bm = [9, 13, 27, 32], Os = xt && "CompositionEvent" in window, xr = null;
xt && "documentMode" in document && (xr = document.documentMode);
var Mm = xt && "TextEvent" in window && !xr, td = xt && (!Os || xr && 8 < xr && 11 >= xr), mu = " ", hu = !1;
function nd(e, t) {
  switch (e) {
    case "keyup":
      return bm.indexOf(t.keyCode) !== -1;
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
function rd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function Im(e, t) {
  switch (e) {
    case "compositionend":
      return rd(t);
    case "keypress":
      return t.which !== 32 ? null : (hu = !0, mu);
    case "textInput":
      return e = t.data, e === mu && hu ? null : e;
    default:
      return null;
  }
}
function $m(e, t) {
  if (_n) return e === "compositionend" || !Os && nd(e, t) ? (e = ed(), Do = Ms = Rt = null, _n = !1, e) : null;
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
      return td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Om = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Om[e.type] : t === "textarea";
}
function od(e, t, n, r) {
  Ic(r), t = tl(t, "onChange"), 0 < t.length && (n = new Is("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, Rr = null;
function Dm(e) {
  hd(e, 0);
}
function _l(e) {
  var t = Cn(e);
  if (zc(t)) return e;
}
function Fm(e, t) {
  if (e === "change") return t;
}
var ld = !1;
if (xt) {
  var ii;
  if (xt) {
    var si = "oninput" in document;
    if (!si) {
      var vu = document.createElement("div");
      vu.setAttribute("oninput", "return;"), si = typeof vu.oninput == "function";
    }
    ii = si;
  } else ii = !1;
  ld = ii && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  wr && (wr.detachEvent("onpropertychange", id), Rr = wr = null);
}
function id(e) {
  if (e.propertyName === "value" && _l(Rr)) {
    var t = [];
    od(t, Rr, e, Ps(e)), Fc(Dm, t);
  }
}
function Am(e, t, n) {
  e === "focusin" ? (yu(), wr = t, Rr = n, wr.attachEvent("onpropertychange", id)) : e === "focusout" && yu();
}
function Um(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _l(Rr);
}
function Hm(e, t) {
  if (e === "click") return _l(t);
}
function Bm(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function Vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : Vm;
function br(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ji.call(t, o) || !nt(e[o], t[o])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wu(e, t) {
  var n = xu(e);
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
    n = xu(n);
  }
}
function sd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ad() {
  for (var e = window, t = Ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ko(e.document);
  }
  return t;
}
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wm(e) {
  var t = ad(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ds(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = wu(n, l);
        var i = wu(
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
var Qm = xt && "documentMode" in document && 11 >= document.documentMode, kn = null, Wi = null, _r = null, Qi = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qi || kn == null || kn !== Ko(r) || (r = kn, "selectionStart" in r && Ds(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _r && br(_r, r) || (_r = r, r = tl(Wi, "onSelect"), 0 < r.length && (t = new Is("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
}
function jo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Sn = { animationend: jo("Animation", "AnimationEnd"), animationiteration: jo("Animation", "AnimationIteration"), animationstart: jo("Animation", "AnimationStart"), transitionend: jo("Transition", "TransitionEnd") }, ai = {}, ud = {};
xt && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
function kl(e) {
  if (ai[e]) return ai[e];
  if (!Sn[e]) return e;
  var t = Sn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ud) return ai[e] = t[n];
  return e;
}
var cd = kl("animationend"), dd = kl("animationiteration"), fd = kl("animationstart"), pd = kl("transitionend"), md = /* @__PURE__ */ new Map(), ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  md.set(e, t), un(t, [e]);
}
for (var ui = 0; ui < ku.length; ui++) {
  var ci = ku[ui], Gm = ci.toLowerCase(), Km = ci[0].toUpperCase() + ci.slice(1);
  Vt(Gm, "on" + Km);
}
Vt(cd, "onAnimationEnd");
Vt(dd, "onAnimationIteration");
Vt(fd, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(pd, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Su(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Gp(r, t, void 0, e), e.currentTarget = null;
}
function hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== l && o.isPropagationStopped()) break e;
        Su(o, u, m), l = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== l && o.isPropagationStopped()) break e;
        Su(o, u, m), l = c;
      }
    }
  }
  if (Xo) throw e = Ui, Xo = !1, Ui = null, e;
}
function Z(e, t) {
  var n = t[qi];
  n === void 0 && (n = t[qi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gd(t, e, 2, !1), n.add(r));
}
function di(e, t, n) {
  var r = 0;
  t && (r |= 4), gd(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[Eo]) {
    e[Eo] = !0, Sc.forEach(function(n) {
      n !== "selectionchange" && (Ym.has(n) || di(n, !1, e), di(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || (t[Eo] = !0, di("selectionchange", !1, t));
  }
}
function gd(e, t, n, r) {
  switch (Jc(t)) {
    case 1:
      var o = um;
      break;
    case 4:
      o = cm;
      break;
    default:
      o = bs;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ai || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function fi(e, t, n, r, o) {
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
        if (i = Zt(u), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = l = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Fc(function() {
    var m = l, x = Ps(n), w = [];
    e: {
      var y = md.get(e);
      if (y !== void 0) {
        var C = Is, N = e;
        switch (e) {
          case "keypress":
            if (Fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Nm;
            break;
          case "focusin":
            N = "focus", C = li;
            break;
          case "focusout":
            N = "blur", C = li;
            break;
          case "beforeblur":
          case "afterblur":
            C = li;
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
            C = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = pm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = zm;
            break;
          case cd:
          case dd:
          case fd:
            C = gm;
            break;
          case pd:
            C = Tm;
            break;
          case "scroll":
            C = dm;
            break;
          case "wheel":
            C = Rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = pu;
        }
        var j = (t & 4) !== 0, W = !j && e === "scroll", p = j ? y !== null ? y + "Capture" : null : y;
        j = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = zr(d, p), _ != null && j.push(Ir(d, _, h)))), W) break;
          d = d.return;
        }
        0 < j.length && (y = new C(y, N, null, n, x), w.push({ event: y, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Di && (N = n.relatedTarget || n.fromElement) && (Zt(N) || N[wt])) break e;
        if ((C || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = m, N = N ? Zt(N) : null, N !== null && (W = cn(N), N !== W || N.tag !== 5 && N.tag !== 6) && (N = null)) : (C = null, N = m), C !== N)) {
          if (j = du, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = pu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), W = C == null ? y : Cn(C), h = N == null ? y : Cn(N), y = new j(_, d + "leave", C, n, x), y.target = W, y.relatedTarget = h, _ = null, Zt(x) === m && (j = new j(p, d + "enter", N, n, x), j.target = h, j.relatedTarget = W, _ = j), W = _, C && N) t: {
            for (j = C, p = N, d = 0, h = j; h; h = yn(h)) d++;
            for (h = 0, _ = p; _; _ = yn(_)) h++;
            for (; 0 < d - h; ) j = yn(j), d--;
            for (; 0 < h - d; ) p = yn(p), h--;
            for (; d--; ) {
              if (j === p || p !== null && j === p.alternate) break t;
              j = yn(j), p = yn(p);
            }
            j = null;
          }
          else j = null;
          C !== null && Cu(w, y, C, j, !1), N !== null && W !== null && Cu(w, W, N, j, !0);
        }
      }
      e: {
        if (y = m ? Cn(m) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var E = Fm;
        else if (gu(y)) if (ld) E = Bm;
        else {
          E = Um;
          var L = Am;
        }
        else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Hm);
        if (E && (E = E(e, m))) {
          od(w, E, n, x);
          break e;
        }
        L && L(e, y, m), e === "focusout" && (L = y._wrapperState) && L.controlled && y.type === "number" && bi(y, "number", y.value);
      }
      switch (L = m ? Cn(m) : window, e) {
        case "focusin":
          (gu(L) || L.contentEditable === "true") && (kn = L, Wi = m, _r = null);
          break;
        case "focusout":
          _r = Wi = kn = null;
          break;
        case "mousedown":
          Qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qi = !1, _u(w, n, x);
          break;
        case "selectionchange":
          if (Qm) break;
        case "keydown":
        case "keyup":
          _u(w, n, x);
      }
      var R;
      if (Os) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else _n ? nd(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (td && n.locale !== "ko" && (_n || b !== "onCompositionStart" ? b === "onCompositionEnd" && _n && (R = ed()) : (Rt = x, Ms = "value" in Rt ? Rt.value : Rt.textContent, _n = !0)), L = tl(m, b), 0 < L.length && (b = new fu(b, e, null, n, x), w.push({ event: b, listeners: L }), R ? b.data = R : (R = rd(n), R !== null && (b.data = R)))), (R = Mm ? Im(e, n) : $m(e, n)) && (m = tl(m, "onBeforeInput"), 0 < m.length && (x = new fu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = R));
    }
    hd(w, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function tl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = zr(e, n), l != null && r.unshift(Ir(e, l, o)), l = zr(e, t), l != null && r.push(Ir(e, l, o))), e = e.return;
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, o ? (c = zr(n, l), c != null && i.unshift(Ir(n, c, u))) : o || (c = zr(n, l), c != null && i.push(Ir(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Xm = /\r\n?/g, qm = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xm, `
`).replace(qm, "");
}
function zo(e, t, n) {
  if (t = Nu(t), Nu(e) !== t && n) throw Error(S(425));
}
function nl() {
}
var Gi = null, Ki = null;
function Yi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xi = typeof setTimeout == "function" ? setTimeout : void 0, Zm = typeof clearTimeout == "function" ? clearTimeout : void 0, ju = typeof Promise == "function" ? Promise : void 0, Jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function(e) {
  return ju.resolve(null).then(e).catch(eh);
} : Xi;
function eh(e) {
  setTimeout(function() {
    throw e;
  });
}
function pi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Lr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Lr(t);
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
function Eu(e) {
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
var Qn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Qn, $r = "__reactProps$" + Qn, wt = "__reactContainer$" + Qn, qi = "__reactEvents$" + Qn, th = "__reactListeners$" + Qn, nh = "__reactHandles$" + Qn;
function Zt(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Eu(e); e !== null; ) {
        if (n = e[ct]) return n;
        e = Eu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Qr(e) {
  return e = e[ct] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Sl(e) {
  return e[$r] || null;
}
var Zi = [], Nn = -1;
function Wt(e) {
  return { current: e };
}
function J(e) {
  0 > Nn || (e.current = Zi[Nn], Zi[Nn] = null, Nn--);
}
function K(e, t) {
  Nn++, Zi[Nn] = e.current, e.current = t;
}
var Bt = {}, Ce = Wt(Bt), Re = Wt(!1), rn = Bt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function rl() {
  J(Re), J(Ce);
}
function zu(e, t, n) {
  if (Ce.current !== Bt) throw Error(S(168));
  K(Ce, t), K(Re, n);
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Ap(e) || "Unknown", o));
  return oe({}, n, r);
}
function ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, rn = Ce.current, K(Ce, e), K(Re, Re.current), !0;
}
function Pu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = vd(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, J(Re), J(Ce), K(Ce, e)) : J(Re), K(Re, n);
}
var ht = null, Cl = !1, mi = !1;
function yd(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function rh(e) {
  Cl = !0, yd(e);
}
function Qt() {
  if (!mi && ht !== null) {
    mi = !0;
    var e = 0, t = V;
    try {
      var n = ht;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, Cl = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Bc(Ts, Qt), o;
    } finally {
      V = t, mi = !1;
    }
  }
  return null;
}
var jn = [], En = 0, ll = null, il = 0, Be = [], Ve = 0, on = null, gt = 1, vt = "";
function Xt(e, t) {
  jn[En++] = il, jn[En++] = ll, ll = e, il = t;
}
function xd(e, t, n) {
  Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = on, on = e;
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
function Fs(e) {
  e.return !== null && (Xt(e, 1), xd(e, 1, 0));
}
function As(e) {
  for (; e === ll; ) ll = jn[--En], jn[En] = null, il = jn[--En], jn[En] = null;
  for (; e === on; ) on = Be[--Ve], Be[Ve] = null, vt = Be[--Ve], Be[Ve] = null, gt = Be[--Ve], Be[Ve] = null;
}
var De = null, Oe = null, ee = !1, Je = null;
function wd(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = Ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function es(e) {
  if (ee) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if (Ji(e)) throw Error(S(418));
        t = Ot(n.nextSibling);
        var r = De;
        t && Tu(e, t) ? wd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, De = e);
      }
    } else {
      if (Ji(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, De = e;
    }
  }
}
function Lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Po(e) {
  if (e !== De) return !1;
  if (!ee) return Lu(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yi(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Ji(e)) throw _d(), Error(S(418));
    for (; t; ) wd(e, t), t = Ot(t.nextSibling);
  }
  if (Lu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = De ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function _d() {
  for (var e = Oe; e; ) e = Ot(e.nextSibling);
}
function Fn() {
  Oe = De = null, ee = !1;
}
function Us(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var oh = St.ReactCurrentBatchConfig;
function cr(e, t, n) {
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
function To(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ru(e) {
  var t = e._init;
  return t(e._payload);
}
function kd(e) {
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
  function u(p, d, h, _) {
    return d === null || d.tag !== 6 ? (d = _i(h, p.mode, _), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var E = h.type;
    return E === wn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zt && Ru(E) === d.type) ? (_ = o(d, h.props), _.ref = cr(p, d, h), _.return = p, _) : (_ = Qo(h.type, h.key, h.props, null, p.mode, _), _.ref = cr(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = ki(h, p.mode, _), d.return = p, d) : (d = o(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, E) {
    return d === null || d.tag !== 7 ? (d = nn(h, p.mode, _, E), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = _i("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xo:
          return h = Qo(d.type, d.key, d.props, null, p.mode, h), h.ref = cr(p, null, d), h.return = p, h;
        case xn:
          return d = ki(d, p.mode, h), d.return = p, d;
        case zt:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (mr(d) || lr(d)) return d = nn(d, p.mode, h, null), d.return = p, d;
      To(p, d);
    }
    return null;
  }
  function y(p, d, h, _) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xo:
          return h.key === E ? c(p, d, h, _) : null;
        case xn:
          return h.key === E ? m(p, d, h, _) : null;
        case zt:
          return E = h._init, y(
            p,
            d,
            E(h._payload),
            _
          );
      }
      if (mr(h) || lr(h)) return E !== null ? null : x(p, d, h, _, null);
      To(p, h);
    }
    return null;
  }
  function C(p, d, h, _, E) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case xo:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, E);
        case xn:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, E);
        case zt:
          var L = _._init;
          return C(p, d, h, L(_._payload), E);
      }
      if (mr(_) || lr(_)) return p = p.get(h) || null, x(d, p, _, E, null);
      To(d, _);
    }
    return null;
  }
  function N(p, d, h, _) {
    for (var E = null, L = null, R = d, b = d = 0, Y = null; R !== null && b < h.length; b++) {
      R.index > b ? (Y = R, R = null) : Y = R.sibling;
      var I = y(p, R, h[b], _);
      if (I === null) {
        R === null && (R = Y);
        break;
      }
      e && R && I.alternate === null && t(p, R), d = l(I, d, b), L === null ? E = I : L.sibling = I, L = I, R = Y;
    }
    if (b === h.length) return n(p, R), ee && Xt(p, b), E;
    if (R === null) {
      for (; b < h.length; b++) R = w(p, h[b], _), R !== null && (d = l(R, d, b), L === null ? E = R : L.sibling = R, L = R);
      return ee && Xt(p, b), E;
    }
    for (R = r(p, R); b < h.length; b++) Y = C(R, p, b, h[b], _), Y !== null && (e && Y.alternate !== null && R.delete(Y.key === null ? b : Y.key), d = l(Y, d, b), L === null ? E = Y : L.sibling = Y, L = Y);
    return e && R.forEach(function(pe) {
      return t(p, pe);
    }), ee && Xt(p, b), E;
  }
  function j(p, d, h, _) {
    var E = lr(h);
    if (typeof E != "function") throw Error(S(150));
    if (h = E.call(h), h == null) throw Error(S(151));
    for (var L = E = null, R = d, b = d = 0, Y = null, I = h.next(); R !== null && !I.done; b++, I = h.next()) {
      R.index > b ? (Y = R, R = null) : Y = R.sibling;
      var pe = y(p, R, I.value, _);
      if (pe === null) {
        R === null && (R = Y);
        break;
      }
      e && R && pe.alternate === null && t(p, R), d = l(pe, d, b), L === null ? E = pe : L.sibling = pe, L = pe, R = Y;
    }
    if (I.done) return n(
      p,
      R
    ), ee && Xt(p, b), E;
    if (R === null) {
      for (; !I.done; b++, I = h.next()) I = w(p, I.value, _), I !== null && (d = l(I, d, b), L === null ? E = I : L.sibling = I, L = I);
      return ee && Xt(p, b), E;
    }
    for (R = r(p, R); !I.done; b++, I = h.next()) I = C(R, p, b, I.value, _), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? b : I.key), d = l(I, d, b), L === null ? E = I : L.sibling = I, L = I);
    return e && R.forEach(function(rt) {
      return t(p, rt);
    }), ee && Xt(p, b), E;
  }
  function W(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === wn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xo:
          e: {
            for (var E = h.key, L = d; L !== null; ) {
              if (L.key === E) {
                if (E = h.type, E === wn) {
                  if (L.tag === 7) {
                    n(p, L.sibling), d = o(L, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (L.elementType === E || typeof E == "object" && E !== null && E.$$typeof === zt && Ru(E) === L.type) {
                  n(p, L.sibling), d = o(L, h.props), d.ref = cr(p, L, h), d.return = p, p = d;
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === wn ? (d = nn(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Qo(h.type, h.key, h.props, null, p.mode, _), _.ref = cr(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case xn:
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
            d = ki(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case zt:
          return L = h._init, W(p, d, L(h._payload), _);
      }
      if (mr(h)) return N(p, d, h, _);
      if (lr(h)) return j(p, d, h, _);
      To(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = o(d, h), d.return = p, p = d) : (n(p, d), d = _i(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return W;
}
var An = kd(!0), Sd = kd(!1), sl = Wt(null), al = null, zn = null, Hs = null;
function Bs() {
  Hs = zn = al = null;
}
function Vs(e) {
  var t = sl.current;
  J(sl), e._currentValue = t;
}
function ts(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  al = e, Hs = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Hs !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
    if (al === null) throw Error(S(308));
    zn = e, al.dependencies = { lanes: 0, firstContext: e };
  } else zn = zn.next = e;
  return t;
}
var Jt = null;
function Ws(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function Cd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ws(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Qs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, _t(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ws(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _t(e, n);
}
function Ao(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ls(e, n);
  }
}
function bu(e, t) {
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
function ul(e, t, n, r) {
  var o = e.updateQueue;
  Pt = !1;
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
              Pt = !0;
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
    sn |= i, e.lanes = i, e.memoizedState = w;
  }
}
function Mu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var Gr = {}, ft = Wt(Gr), Or = Wt(Gr), Dr = Wt(Gr);
function en(e) {
  if (e === Gr) throw Error(S(174));
  return e;
}
function Gs(e, t) {
  switch (K(Dr, t), K(Or, e), K(ft, Gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ii(t, e);
  }
  J(ft), K(ft, t);
}
function Un() {
  J(ft), J(Or), J(Dr);
}
function jd(e) {
  en(Dr.current);
  var t = en(ft.current), n = Ii(t, e.type);
  t !== n && (K(Or, e), K(ft, n));
}
function Ks(e) {
  Or.current === e && (J(ft), J(Or));
}
var ne = Wt(0);
function cl(e) {
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
var hi = [];
function Ys() {
  for (var e = 0; e < hi.length; e++) hi[e]._workInProgressVersionPrimary = null;
  hi.length = 0;
}
var Uo = St.ReactCurrentDispatcher, gi = St.ReactCurrentBatchConfig, ln = 0, re = null, de = null, he = null, dl = !1, kr = !1, Fr = 0, lh = 0;
function _e() {
  throw Error(S(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function qs(e, t, n, r, o, l) {
  if (ln = l, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Uo.current = e === null || e.memoizedState === null ? uh : ch, e = n(r, o), kr) {
    l = 0;
    do {
      if (kr = !1, Fr = 0, 25 <= l) throw Error(S(301));
      l += 1, he = de = null, t.updateQueue = null, Uo.current = dh, e = n(r, o);
    } while (kr);
  }
  if (Uo.current = fl, t = de !== null && de.next !== null, ln = 0, he = de = re = null, dl = !1, t) throw Error(S(300));
  return e;
}
function Zs() {
  var e = Fr !== 0;
  return Fr = 0, e;
}
function ut() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? re.memoizedState = he = e : he = he.next = e, he;
}
function Ke() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? re.memoizedState : he.next;
  if (t !== null) he = t, de = e;
  else {
    if (e === null) throw Error(S(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, he === null ? re.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vi(e) {
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
      if ((ln & x) === x) c !== null && (c = c.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
      else {
        var w = {
          lane: x,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null
        };
        c === null ? (u = c = w, i = r) : c = c.next = w, re.lanes |= x, sn |= x;
      }
      m = m.next;
    } while (m !== null && m !== l);
    c === null ? i = r : c.next = u, nt(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, re.lanes |= l, sn |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yi(e) {
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
function Ed() {
}
function zd(e, t) {
  var n = re, r = Ke(), o = t(), l = !nt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Le = !0), r = r.queue, Js(Ld.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ur(9, Td.bind(null, n, r, o, t), void 0, null), ge === null) throw Error(S(349));
    ln & 30 || Pd(n, t, o);
  }
  return o;
}
function Pd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Td(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Rd(t) && bd(e);
}
function Ld(e, t, n) {
  return n(function() {
    Rd(t) && bd(e);
  });
}
function Rd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function bd(e) {
  var t = _t(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Iu(e) {
  var t = ut();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = ah.bind(null, re, e), [t.memoizedState, e];
}
function Ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Md() {
  return Ke().memoizedState;
}
function Ho(e, t, n, r) {
  var o = ut();
  re.flags |= e, o.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function Nl(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (l = i.destroy, r !== null && Xs(r, i.deps)) {
      o.memoizedState = Ur(t, n, l, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = Ur(1 | t, n, l, r);
}
function $u(e, t) {
  return Ho(8390656, 8, e, t);
}
function Js(e, t) {
  return Nl(2048, 8, e, t);
}
function Id(e, t) {
  return Nl(4, 2, e, t);
}
function $d(e, t) {
  return Nl(4, 4, e, t);
}
function Od(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Nl(4, 4, Od.bind(null, t, e), n);
}
function ea() {
}
function Fd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ad(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ud(e, t, n) {
  return ln & 21 ? (nt(n, t) || (n = Qc(), re.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function ih(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = gi.transition;
  gi.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, gi.transition = r;
  }
}
function Hd() {
  return Ke().memoizedState;
}
function sh(e, t, n) {
  var r = At(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bd(e)) Vd(t, n);
  else if (n = Cd(e, t, n, r), n !== null) {
    var o = je();
    tt(n, e, r, o), Wd(n, t, r);
  }
}
function ah(e, t, n) {
  var r = At(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bd(e)) Vd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, u = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = u, nt(u, i)) {
        var c = t.interleaved;
        c === null ? (o.next = o, Ws(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Cd(e, t, o, r), n !== null && (o = je(), tt(n, e, r, o), Wd(n, t, r));
  }
}
function Bd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Vd(e, t) {
  kr = dl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ls(e, n);
  }
}
var fl = { readContext: Ge, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, uh = { readContext: Ge, useCallback: function(e, t) {
  return ut().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: $u, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ho(
    4194308,
    4,
    Od.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ho(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ho(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ut();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ut();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ut();
  return e = { current: e }, t.memoizedState = e;
}, useState: Iu, useDebugValue: ea, useDeferredValue: function(e) {
  return ut().memoizedState = e;
}, useTransition: function() {
  var e = Iu(!1), t = e[0];
  return e = ih.bind(null, e[1]), ut().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = ut();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ge === null) throw Error(S(349));
    ln & 30 || Pd(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, $u(Ld.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Ur(9, Td.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = ut(), t = ge.identifierPrefix;
  if (ee) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = lh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ch = {
  readContext: Ge,
  useCallback: Fd,
  useContext: Ge,
  useEffect: Js,
  useImperativeHandle: Dd,
  useInsertionEffect: Id,
  useLayoutEffect: $d,
  useMemo: Ad,
  useReducer: vi,
  useRef: Md,
  useState: function() {
    return vi(Ar);
  },
  useDebugValue: ea,
  useDeferredValue: function(e) {
    var t = Ke();
    return Ud(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = vi(Ar)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: Ed,
  useSyncExternalStore: zd,
  useId: Hd,
  unstable_isNewReconciler: !1
}, dh = { readContext: Ge, useCallback: Fd, useContext: Ge, useEffect: Js, useImperativeHandle: Dd, useInsertionEffect: Id, useLayoutEffect: $d, useMemo: Ad, useReducer: yi, useRef: Md, useState: function() {
  return yi(Ar);
}, useDebugValue: ea, useDeferredValue: function(e) {
  var t = Ke();
  return de === null ? t.memoizedState = e : Ud(t, de.memoizedState, e);
}, useTransition: function() {
  var e = yi(Ar)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: Ed, useSyncExternalStore: zd, useId: Hd, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ns(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jl = { isMounted: function(e) {
  return (e = e._reactInternals) ? cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), o = At(e), l = yt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (tt(t, e, o, r), Ao(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), o = At(e), l = yt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (tt(t, e, o, r), Ao(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = At(e), o = yt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Dt(e, o, r), t !== null && (tt(t, e, r, n), Ao(t, e, r));
} };
function Ou(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(o, l) : !0;
}
function Qd(e, t, n) {
  var r = !1, o = Bt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Ge(l) : (o = be(t) ? rn : Ce.current, r = t.contextTypes, l = (r = r != null) ? Dn(e, o) : Bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Du(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jl.enqueueReplaceState(t, t.state, null);
}
function rs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Qs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Ge(l) : (l = be(t) ? rn : Ce.current, o.context = Dn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ns(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && jl.enqueueReplaceState(o, o.state, null), ul(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function xi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fh = typeof WeakMap == "function" ? WeakMap : Map;
function Gd(e, t, n) {
  n = yt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ml || (ml = !0, ms = r), os(e, t);
  }, n;
}
function Kd(e, t, n) {
  n = yt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      os(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    os(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Fu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = jh.bind(null, e, t, n), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Uu(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
}
var ph = St.ReactCurrentOwner, Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Sd(t, null, n, r) : An(t, e.child, n, r);
}
function Hu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return In(t, o), r = qs(e, t, n, r, l, o), n = Zs(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && n && Fs(t), t.flags |= 1, Ne(e, t, r, o), t.child);
}
function Bu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !aa(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Yd(e, t, l, r, o)) : (e = Qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : br, n(i, r) && e.ref === t.ref) return kt(e, t, o);
  }
  return t.flags |= 1, e = Ut(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (br(l, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, kt(e, t, o);
  }
  return ls(e, t, n, r, o);
}
function Xd(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Tn, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Tn, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(Tn, $e), $e |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Tn, $e), $e |= r;
  return Ne(e, t, o, n), t.child;
}
function qd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ls(e, t, n, r, o) {
  var l = be(n) ? rn : Ce.current;
  return l = Dn(t, l), In(t, o), n = qs(e, t, n, r, l, o), r = Zs(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && r && Fs(t), t.flags |= 1, Ne(e, t, n, o), t.child);
}
function Vu(e, t, n, r, o) {
  if (be(n)) {
    var l = !0;
    ol(t);
  } else l = !1;
  if (In(t, o), t.stateNode === null) Bo(e, t), Qd(t, n, r), rs(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Ge(m) : (m = be(n) ? rn : Ce.current, m = Dn(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Du(t, i, r, m), Pt = !1;
    var y = t.memoizedState;
    i.state = y, ul(t, r, i, o), c = t.memoizedState, u !== r || y !== c || Re.current || Pt ? (typeof x == "function" && (ns(t, n, x, r), c = t.memoizedState), (u = Pt || Ou(t, n, u, r, y, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Nd(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : qe(t.type, u), i.props = m, w = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Ge(c) : (c = be(n) ? rn : Ce.current, c = Dn(t, c));
    var C = n.getDerivedStateFromProps;
    (x = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || y !== c) && Du(t, i, r, c), Pt = !1, y = t.memoizedState, i.state = y, ul(t, r, i, o);
    var N = t.memoizedState;
    u !== w || y !== N || Re.current || Pt ? (typeof C == "function" && (ns(t, n, C, r), N = t.memoizedState), (m = Pt || Ou(t, n, m, r, y, N, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), i.props = r, i.state = N, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return is(e, t, n, r, l, o);
}
function is(e, t, n, r, o, l) {
  qd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Pu(t, n, !1), kt(e, t, l);
  r = t.stateNode, ph.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = An(t, e.child, null, l), t.child = An(t, null, u, l)) : Ne(e, t, u, l), t.memoizedState = r.state, o && Pu(t, n, !0), t.child;
}
function Zd(e) {
  var t = e.stateNode;
  t.pendingContext ? zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zu(e, t.context, !1), Gs(e, t.containerInfo);
}
function Wu(e, t, n, r, o) {
  return Fn(), Us(o), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function as(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jd(e, t, n) {
  var r = t.pendingProps, o = ne.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ne, o & 1), e === null)
    return es(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Pl(i, r, 0, null), e = nn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = as(n), t.memoizedState = ss, e) : ta(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return mh(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Ut(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Ut(u, l) : (l = nn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? as(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ss, r;
  }
  return l = e.child, e = l.sibling, r = Ut(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ta(e, t) {
  return t = Pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lo(e, t, n, r) {
  return r !== null && Us(r), An(t, e.child, null, n), e = ta(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function mh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = xi(Error(S(422))), Lo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Pl({ mode: "visible", children: r.children }, o, 0, null), l = nn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && An(t, e.child, null, i), t.child.memoizedState = as(i), t.memoizedState = ss, l);
  if (!(t.mode & 1)) return Lo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, l = Error(S(419)), r = xi(l, r, void 0), Lo(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Le || u) {
    if (r = ge, r !== null) {
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
    return sa(), r = xi(Error(S(421))), Lo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Eh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Oe = Ot(o.nextSibling), De = t, ee = !0, Je = null, e !== null && (Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = on, gt = e.id, vt = e.overflow, on = t), t = ta(t, r.children), t.flags |= 4096, t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ts(e.return, t, n);
}
function wi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function ef(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Ne(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
      else if (e.tag === 19) Qu(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && cl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), wi(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && cl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      wi(t, !0, n, null, l);
      break;
    case "together":
      wi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Bo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hh(e, t, n) {
  switch (t.tag) {
    case 3:
      Zd(t), Fn();
      break;
    case 5:
      jd(t);
      break;
    case 1:
      be(t.type) && ol(t);
      break;
    case 4:
      Gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(sl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jd(e, t, n) : (K(ne, ne.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ef(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xd(e, t, n);
  }
  return kt(e, t, n);
}
var tf, us, nf, rf;
tf = function(e, t) {
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
us = function() {
};
nf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, en(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = Li(e, o), r = Li(e, r), l = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Mi(e, o), r = Mi(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = nl);
    }
    $i(n, r);
    var i;
    n = null;
    for (m in o) if (!r.hasOwnProperty(m) && o.hasOwnProperty(m) && o[m] != null) if (m === "style") {
      var u = o[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (jr.hasOwnProperty(m) ? l || (l = []) : (l = l || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = o != null ? o[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (l || (l = []), l.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (l = l || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (jr.hasOwnProperty(m) ? (c != null && m === "onScroll" && Z("scroll", e), l || u === c || (l = [])) : (l = l || []).push(m, c));
    }
    n && (l = l || []).push("style", n);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
rf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
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
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gh(e, t, n) {
  var r = t.pendingProps;
  switch (As(t), t.tag) {
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
      return ke(t), null;
    case 1:
      return be(t.type) && rl(), ke(t), null;
    case 3:
      return r = t.stateNode, Un(), J(Re), J(Ce), Ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (vs(Je), Je = null))), us(e, t), ke(t), null;
    case 5:
      Ks(t);
      var o = en(Dr.current);
      if (n = t.type, e !== null && t.stateNode != null) nf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ke(t), null;
        }
        if (e = en(ft.current), Po(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[ct] = t, r[$r] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < gr.length; o++) Z(gr[o], r);
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
              tu(r, l), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Z("invalid", r);
              break;
            case "textarea":
              ru(r, l), Z("invalid", r);
          }
          $i(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var u = l[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && zo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && zo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : jr.hasOwnProperty(i) && u != null && i === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              wo(r), nu(r, l, !0);
              break;
            case "textarea":
              wo(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = nl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ct] = t, e[$r] = r, tf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Oi(n, r), n) {
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
                for (o = 0; o < gr.length; o++) Z(gr[o], e);
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
                tu(e, r), o = Li(e, r), Z("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                ru(e, r), o = Mi(e, r), Z("invalid", e);
                break;
              default:
                o = r;
            }
            $i(n, o), u = o;
            for (l in u) if (u.hasOwnProperty(l)) {
              var c = u[l];
              l === "style" ? Mc(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Rc(e, c)) : l === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Er(e, c) : typeof c == "number" && Er(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (jr.hasOwnProperty(l) ? c != null && l === "onScroll" && Z("scroll", e) : c != null && Ns(e, l, c, i));
            }
            switch (n) {
              case "input":
                wo(e), nu(e, r, !1);
                break;
              case "textarea":
                wo(e), ou(e);
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
                typeof o.onClick == "function" && (e.onclick = nl);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) rf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = en(Dr.current), en(ft.current), Po(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (l = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              zo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return ke(t), null;
    case 13:
      if (J(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Oe !== null && t.mode & 1 && !(t.flags & 128)) _d(), Fn(), t.flags |= 98560, l = !1;
        else if (l = Po(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
            l[ct] = t;
          } else Fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), l = !1;
        } else Je !== null && (vs(Je), Je = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : sa())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return Un(), us(e, t), e === null && Mr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Vs(t.type._context), ke(t), null;
    case 17:
      return be(t.type) && rl(), ke(t), null;
    case 19:
      if (J(ne), l = t.memoizedState, l === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) dr(l, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = cl(e), i !== null) {
            for (t.flags |= 128, dr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && se() > Bn && (t.flags |= 128, r = !0, dr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = cl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return ke(t), null;
        } else 2 * se() - l.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = se(), t.sibling = null, n = ne.current, K(ne, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return ia(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function vh(e, t) {
  switch (As(t), t.tag) {
    case 1:
      return be(t.type) && rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), J(Re), J(Ce), Ys(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ks(t), null;
    case 13:
      if (J(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ne), null;
    case 4:
      return Un(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ro = !1, Se = !1, yh = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function cs(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Gu = !1;
function xh(e, t) {
  if (Gi = Jo, e = ad(), Ds(e)) {
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
  for (Ki = { focusedElem: e, selectionRange: n }, Jo = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
  else for (; T !== null; ) {
    t = T;
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
    } catch (_) {
      le(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return N = Gu, Gu = !1, N;
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && cs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function El(e, t) {
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
function ds(e) {
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
function of(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, of(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[$r], delete t[qi], delete t[th], delete t[nh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function lf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || lf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nl));
  else if (r !== 4 && (e = e.child, e !== null)) for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), e = e.sibling;
}
function ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ps(e, t, n), e = e.sibling; e !== null; ) ps(e, t, n), e = e.sibling;
}
var ve = null, Ze = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), n = n.sibling;
}
function sf(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(xl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Pn(n, t);
    case 6:
      var r = ve, o = Ze;
      ve = null, Et(e, t, n), ve = r, Ze = o, ve !== null && (Ze ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (Ze ? (e = ve, n = n.stateNode, e.nodeType === 8 ? pi(e.parentNode, n) : e.nodeType === 1 && pi(e, n), Lr(e)) : pi(ve, n.stateNode));
      break;
    case 4:
      r = ve, o = Ze, ve = n.stateNode.containerInfo, Ze = !0, Et(e, t, n), ve = r, Ze = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && cs(n, t, i), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Se && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Et(e, t, n), Se = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yh()), t.forEach(function(r) {
      var o = zh.bind(null, e, r);
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
            ve = u.stateNode, Ze = !1;
            break e;
          case 3:
            ve = u.stateNode.containerInfo, Ze = !0;
            break e;
          case 4:
            ve = u.stateNode.containerInfo, Ze = !0;
            break e;
        }
        u = u.return;
      }
      if (ve === null) throw Error(S(160));
      sf(l, i, o), ve = null, Ze = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (m) {
      le(o, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) af(t, e), t = t.sibling;
}
function af(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), at(e), r & 4) {
        try {
          Sr(3, e, e.return), El(3, e);
        } catch (j) {
          le(e, e.return, j);
        }
        try {
          Sr(5, e, e.return);
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 1:
      Xe(t, e), at(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (Xe(t, e), at(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Er(o, "");
        } catch (j) {
          le(e, e.return, j);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && l.type === "radio" && l.name != null && Pc(o, l), Oi(u, i);
          var m = Oi(u, l);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? Mc(o, w) : x === "dangerouslySetInnerHTML" ? Rc(o, w) : x === "children" ? Er(o, w) : Ns(o, x, w, m);
          }
          switch (u) {
            case "input":
              Ri(o, l);
              break;
            case "textarea":
              Tc(o, l);
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
          o[$r] = l;
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
        Lr(t.containerInfo);
      } catch (j) {
        le(e, e.return, j);
      }
      break;
    case 4:
      Xe(t, e), at(e);
      break;
    case 13:
      Xe(t, e), at(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (oa = se())), r & 4 && Yu(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (m = Se) || x, Xe(t, e), Se = m) : Xe(t, e), at(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (T = e, x = e.child; x !== null; ) {
          for (w = T = x; T !== null; ) {
            switch (y = T, C = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Sr(4, y, y.return);
                break;
              case 1:
                Pn(y, y.return);
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
                Pn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  qu(w);
                  continue;
                }
            }
            C !== null ? (C.return = y, T = C) : qu(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                o = w.stateNode, m ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = bc("display", i));
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
      Xe(t, e), at(e), r & 4 && Yu(e);
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
          if (lf(n)) {
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
          r.flags & 32 && (Er(o, ""), r.flags &= -33);
          var l = Ku(e);
          ps(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ku(e);
          fs(e, u, i);
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
function wh(e, t, n) {
  T = e, uf(e);
}
function uf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ro;
      if (!i) {
        var u = o.alternate, c = u !== null && u.memoizedState !== null || Se;
        u = Ro;
        var m = Se;
        if (Ro = i, (Se = c) && !m) for (T = o; T !== null; ) i = T, c = i.child, i.tag === 22 && i.memoizedState !== null ? Zu(o) : c !== null ? (c.return = i, T = c) : Zu(o);
        for (; l !== null; ) T = l, uf(l), l = l.sibling;
        T = o, Ro = u, Se = m;
      }
      Xu(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, T = l) : Xu(e);
  }
}
function Xu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || El(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Mu(t, l, r);
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
              Mu(t, i, n);
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
                  w !== null && Lr(w);
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
        Se || t.flags & 512 && ds(t);
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
function qu(e) {
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
function Zu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
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
            ds(t);
          } catch (c) {
            le(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ds(t);
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
var _h = Math.ceil, pl = St.ReactCurrentDispatcher, na = St.ReactCurrentOwner, Qe = St.ReactCurrentBatchConfig, B = 0, ge = null, ue = null, ye = 0, $e = 0, Tn = Wt(0), fe = 0, Hr = null, sn = 0, zl = 0, ra = 0, Cr = null, Te = null, oa = 0, Bn = 1 / 0, mt = null, ml = !1, ms = null, Ft = null, bo = !1, bt = null, hl = 0, Nr = 0, hs = null, Vo = -1, Wo = 0;
function je() {
  return B & 6 ? se() : Vo !== -1 ? Vo : Vo = se();
}
function At(e) {
  return e.mode & 1 ? B & 2 && ye !== 0 ? ye & -ye : oh.transition !== null ? (Wo === 0 && (Wo = Qc()), Wo) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jc(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < Nr) throw Nr = 0, hs = null, Error(S(185));
  Vr(e, n, r), (!(B & 2) || e !== ge) && (e === ge && (!(B & 2) && (zl |= n), fe === 4 && Lt(e, ye)), Me(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Bn = se() + 500, Cl && Qt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  om(e, t);
  var r = Zo(e, e === ge ? ye : 0);
  if (r === 0) n !== null && su(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && su(n), t === 1) e.tag === 0 ? rh(Ju.bind(null, e)) : yd(Ju.bind(null, e)), Jm(function() {
      !(B & 6) && Qt();
    }), n = null;
    else {
      switch (Gc(r)) {
        case 1:
          n = Ts;
          break;
        case 4:
          n = Vc;
          break;
        case 16:
          n = qo;
          break;
        case 536870912:
          n = Wc;
          break;
        default:
          n = qo;
      }
      n = vf(n, cf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cf(e, t) {
  if (Vo = -1, Wo = 0, B & 6) throw Error(S(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = Zo(e, e === ge ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var l = ff();
    (ge !== e || ye !== t) && (mt = null, Bn = se() + 500, tn(e, t));
    do
      try {
        Ch();
        break;
      } catch (u) {
        df(e, u);
      }
    while (!0);
    Bs(), pl.current = l, B = o, ue !== null ? t = 0 : (ge = null, ye = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Hi(e), o !== 0 && (r = o, t = gs(e, o))), t === 1) throw n = Hr, tn(e, 0), Lt(e, r), Me(e, se()), n;
    if (t === 6) Lt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !kh(o) && (t = gl(e, r), t === 2 && (l = Hi(e), l !== 0 && (r = l, t = gs(e, l))), t === 1)) throw n = Hr, tn(e, 0), Lt(e, r), Me(e, se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          qt(e, Te, mt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = oa + 500 - se(), 10 < t)) {
            if (Zo(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Xi(qt.bind(null, e, Te, mt), t);
            break;
          }
          qt(e, Te, mt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - et(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _h(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xi(qt.bind(null, e, Te, mt), r);
            break;
          }
          qt(e, Te, mt);
          break;
        case 5:
          qt(e, Te, mt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Me(e, se()), e.callbackNode === n ? cf.bind(null, e) : null;
}
function gs(e, t) {
  var n = Cr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = gl(e, t), e !== 2 && (t = Te, Te = n, t !== null && vs(t)), e;
}
function vs(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function kh(e) {
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
function Lt(e, t) {
  for (t &= ~ra, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ju(e) {
  if (B & 6) throw Error(S(327));
  $n();
  var t = Zo(e, 0);
  if (!(t & 1)) return Me(e, se()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hi(e);
    r !== 0 && (t = r, n = gs(e, r));
  }
  if (n === 1) throw n = Hr, tn(e, 0), Lt(e, t), Me(e, se()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, Te, mt), Me(e, se()), null;
}
function la(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (Bn = se() + 500, Cl && Qt());
  }
}
function an(e) {
  bt !== null && bt.tag === 0 && !(B & 6) && $n();
  var t = B;
  B |= 1;
  var n = Qe.transition, r = V;
  try {
    if (Qe.transition = null, V = 1, e) return e();
  } finally {
    V = r, Qe.transition = n, B = t, !(B & 6) && Qt();
  }
}
function ia() {
  $e = Tn.current, J(Tn);
}
function tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zm(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (As(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && rl();
        break;
      case 3:
        Un(), J(Re), J(Ce), Ys();
        break;
      case 5:
        Ks(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        J(ne);
        break;
      case 19:
        J(ne);
        break;
      case 10:
        Vs(r.type._context);
        break;
      case 22:
      case 23:
        ia();
    }
    n = n.return;
  }
  if (ge = e, ue = e = Ut(e.current, null), ye = $e = t, fe = 0, Hr = null, ra = zl = sn = 0, Te = Cr = null, Jt !== null) {
    for (t = 0; t < Jt.length; t++) if (n = Jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var i = l.next;
        l.next = o, r.next = i;
      }
      n.pending = r;
    }
    Jt = null;
  }
  return e;
}
function df(e, t) {
  do {
    var n = ue;
    try {
      if (Bs(), Uo.current = fl, dl) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        dl = !1;
      }
      if (ln = 0, he = de = re = null, kr = !1, Fr = 0, na.current = null, n === null || n.return === null) {
        fe = 1, Hr = t, ue = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, c = t;
        if (t = ye, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = x.alternate;
            y ? (x.updateQueue = y.updateQueue, x.memoizedState = y.memoizedState, x.lanes = y.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var C = Au(i);
          if (C !== null) {
            C.flags &= -257, Uu(C, i, u, l, t), C.mode & 1 && Fu(l, m, t), t = C, c = m;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Fu(l, m, t), sa();
              break e;
            }
            c = Error(S(426));
          }
        } else if (ee && u.mode & 1) {
          var W = Au(i);
          if (W !== null) {
            !(W.flags & 65536) && (W.flags |= 256), Uu(W, i, u, l, t), Us(Hn(c, u));
            break e;
          }
        }
        l = c = Hn(c, u), fe !== 4 && (fe = 2), Cr === null ? Cr = [l] : Cr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var p = Gd(l, c, t);
              bu(l, p);
              break e;
            case 1:
              u = c;
              var d = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ft === null || !Ft.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var _ = Kd(l, u, t);
                bu(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      mf(n);
    } catch (E) {
      t = E, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ff() {
  var e = pl.current;
  return pl.current = fl, e === null ? fl : e;
}
function sa() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ge === null || !(sn & 268435455) && !(zl & 268435455) || Lt(ge, ye);
}
function gl(e, t) {
  var n = B;
  B |= 2;
  var r = ff();
  (ge !== e || ye !== t) && (mt = null, tn(e, t));
  do
    try {
      Sh();
      break;
    } catch (o) {
      df(e, o);
    }
  while (!0);
  if (Bs(), B = n, pl.current = r, ue !== null) throw Error(S(261));
  return ge = null, ye = 0, fe;
}
function Sh() {
  for (; ue !== null; ) pf(ue);
}
function Ch() {
  for (; ue !== null && !Yp(); ) pf(ue);
}
function pf(e) {
  var t = gf(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? mf(e) : ue = t, na.current = null;
}
function mf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vh(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ue = null;
        return;
      }
    } else if (n = gh(n, t, $e), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function qt(e, t, n) {
  var r = V, o = Qe.transition;
  try {
    Qe.transition = null, V = 1, Nh(e, t, n, r);
  } finally {
    Qe.transition = o, V = r;
  }
  return null;
}
function Nh(e, t, n, r) {
  do
    $n();
  while (bt !== null);
  if (B & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (lm(e, l), e === ge && (ue = ge = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bo || (bo = !0, vf(qo, function() {
    return $n(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Qe.transition, Qe.transition = null;
    var i = V;
    V = 1;
    var u = B;
    B |= 4, na.current = null, xh(e, n), af(n, e), Wm(Ki), Jo = !!Gi, Ki = Gi = null, e.current = n, wh(n), Xp(), B = u, V = i, Qe.transition = l;
  } else e.current = n;
  if (bo && (bo = !1, bt = e, hl = o), l = e.pendingLanes, l === 0 && (Ft = null), Jp(n.stateNode), Me(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ml) throw ml = !1, e = ms, ms = null, e;
  return hl & 1 && e.tag !== 0 && $n(), l = e.pendingLanes, l & 1 ? e === hs ? Nr++ : (Nr = 0, hs = e) : Nr = 0, Qt(), null;
}
function $n() {
  if (bt !== null) {
    var e = Gc(hl), t = Qe.transition, n = V;
    try {
      if (Qe.transition = null, V = 16 > e ? 16 : e, bt === null) var r = !1;
      else {
        if (e = bt, bt = null, hl = 0, B & 6) throw Error(S(331));
        var o = B;
        for (B |= 4, T = e.current; T !== null; ) {
          var l = T, i = l.child;
          if (T.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (T = m; T !== null; ) {
                  var x = T;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(8, x, l);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, T = w;
                  else for (; T !== null; ) {
                    x = T;
                    var y = x.sibling, C = x.return;
                    if (of(x), x === m) {
                      T = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = C, T = y;
                      break;
                    }
                    T = C;
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
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, T = i;
          else e: for (; T !== null; ) {
            if (l = T, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                Sr(9, l, l.return);
            }
            var p = l.sibling;
            if (p !== null) {
              p.return = l.return, T = p;
              break e;
            }
            T = l.return;
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
                  El(9, u);
              }
            } catch (E) {
              le(u, u.return, E);
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
        if (B = o, Qt(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
          dt.onPostCommitFiberRoot(xl, e);
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
function ec(e, t, n) {
  t = Hn(n, t), t = Gd(e, t, 1), e = Dt(e, t, 1), t = je(), e !== null && (Vr(e, 1, t), Me(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) ec(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ec(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = Hn(n, e), e = Kd(t, e, 1), t = Dt(t, e, 1), e = je(), t !== null && (Vr(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function jh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > se() - oa ? tn(e, 0) : ra |= n), Me(e, t);
}
function hf(e, t) {
  t === 0 && (e.mode & 1 ? (t = So, So <<= 1, !(So & 130023424) && (So = 4194304)) : t = 1);
  var n = je();
  e = _t(e, t), e !== null && (Vr(e, t, n), Me(e, n));
}
function Eh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hf(e, n);
}
function zh(e, t) {
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
  r !== null && r.delete(t), hf(e, n);
}
var gf;
gf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, hh(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, ee && t.flags & 1048576 && xd(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Bo(e, t), e = t.pendingProps;
      var o = Dn(t, Ce.current);
      In(t, n), o = qs(null, t, r, e, o, n);
      var l = Zs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (l = !0, ol(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Qs(t), o.updater = jl, t.stateNode = o, o._reactInternals = t, rs(t, r, e, n), t = is(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && Fs(t), Ne(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Bo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Th(r), e = qe(r, e), o) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = Vu(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Bu(null, t, r, qe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), ls(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Vu(e, t, r, o, n);
    case 3:
      e: {
        if (Zd(t), e === null) throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Nd(e, t), ul(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Hn(Error(S(423)), t), t = Wu(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Hn(Error(S(424)), t), t = Wu(e, t, r, n, o);
          break e;
        } else for (Oe = Ot(t.stateNode.containerInfo.firstChild), De = t, ee = !0, Je = null, n = Sd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Fn(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return jd(t), e === null && es(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Yi(r, o) ? i = null : l !== null && Yi(r, l) && (t.flags |= 32), qd(e, t), Ne(e, t, i, n), t.child;
    case 6:
      return e === null && es(t), null;
    case 13:
      return Jd(e, t, n);
    case 4:
      return Gs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Hu(e, t, r, o, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(sl, r._currentValue), r._currentValue = i, l !== null) if (nt(l.value, i)) {
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
                l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), ts(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ts(i, n, t), i = l.sibling;
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
        Ne(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, In(t, n), o = Ge(o), r = r(o), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = qe(r, t.pendingProps), o = qe(r.type, o), Bu(e, t, r, o, n);
    case 15:
      return Yd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Bo(e, t), t.tag = 1, be(r) ? (e = !0, ol(t)) : e = !1, In(t, n), Qd(t, r, o), rs(t, r, o, n), is(null, t, r, !0, e, n);
    case 19:
      return ef(e, t, n);
    case 22:
      return Xd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function vf(e, t) {
  return Bc(e, t);
}
function Ph(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Ph(e, t, n, r);
}
function aa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Th(e) {
  if (typeof e == "function") return aa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Es) return 11;
    if (e === zs) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Qo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") aa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case wn:
      return nn(n.children, o, l, t);
    case js:
      i = 8, o |= 8;
      break;
    case Ei:
      return e = We(12, n, t, o | 2), e.elementType = Ei, e.lanes = l, e;
    case zi:
      return e = We(13, n, t, o), e.elementType = zi, e.lanes = l, e;
    case Pi:
      return e = We(19, n, t, o), e.elementType = Pi, e.lanes = l, e;
    case jc:
      return Pl(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cc:
          i = 10;
          break e;
        case Nc:
          i = 9;
          break e;
        case Es:
          i = 11;
          break e;
        case zs:
          i = 14;
          break e;
        case zt:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = We(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function nn(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function Pl(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = jc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _i(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function ki(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Lh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ni(0), this.expirationTimes = ni(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ni(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ua(e, t, n, r, o, l, i, u, c) {
  return e = new Lh(e, t, n, u, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = We(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qs(l), e;
}
function Rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: xn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yf(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(S(170));
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
    if (be(n)) return vd(e, n, t);
  }
  return t;
}
function xf(e, t, n, r, o, l, i, u, c) {
  return e = ua(n, r, !0, e, o, l, i, u, c), e.context = yf(null), n = e.current, r = je(), o = At(n), l = yt(r, o), l.callback = t ?? null, Dt(n, l, o), e.current.lanes = o, Vr(e, o, r), Me(e, r), e;
}
function Tl(e, t, n, r) {
  var o = t.current, l = je(), i = At(o);
  return n = yf(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(o, t, i), e !== null && (tt(e, o, i, l), Ao(e, o, i)), i;
}
function vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ca(e, t) {
  tc(e, t), (e = e.alternate) && tc(e, t);
}
function bh() {
  return null;
}
var wf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function da(e) {
  this._internalRoot = e;
}
Ll.prototype.render = da.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Tl(e, t, null, null);
};
Ll.prototype.unmount = da.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function() {
      Tl(null, e, null, null);
    }), t[wt] = null;
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Zc(e);
  }
};
function fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function nc() {
}
function Mh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var m = vl(i);
        l.call(m);
      };
    }
    var i = xf(t, r, e, 0, null, !1, !1, "", nc);
    return e._reactRootContainer = i, e[wt] = i.current, Mr(e.nodeType === 8 ? e.parentNode : e), an(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = vl(c);
      u.call(m);
    };
  }
  var c = ua(e, 0, !1, null, null, !1, !1, "", nc);
  return e._reactRootContainer = c, e[wt] = c.current, Mr(e.nodeType === 8 ? e.parentNode : e), an(function() {
    Tl(t, c, n, r);
  }), c;
}
function bl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var c = vl(i);
        u.call(c);
      };
    }
    Tl(t, i, e, o);
  } else i = Mh(n, t, e, o, r);
  return vl(i);
}
Kc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 && (Ls(t, n | 1), Me(t, se()), !(B & 6) && (Bn = se() + 500, Qt()));
      }
      break;
    case 13:
      an(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var o = je();
          tt(r, e, 1, o);
        }
      }), ca(e, 1);
  }
};
Rs = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = je();
      tt(t, e, 134217728, n);
    }
    ca(e, 134217728);
  }
};
Yc = function(e) {
  if (e.tag === 13) {
    var t = At(e), n = _t(e, t);
    if (n !== null) {
      var r = je();
      tt(n, e, t, r);
    }
    ca(e, t);
  }
};
Xc = function() {
  return V;
};
qc = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
Fi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ri(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Sl(r);
            if (!o) throw Error(S(90));
            zc(r), Ri(r, o);
          }
        }
      }
      break;
    case "textarea":
      Tc(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
Oc = la;
Dc = an;
var Ih = { usingClientEntryPoint: !1, Events: [Qr, Cn, Sl, Ic, $c, la] }, fr = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $h = { bundleType: fr.bundleType, version: fr.version, rendererPackageName: fr.rendererPackageName, rendererConfig: fr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Uc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: fr.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mo.isDisabled && Mo.supportsFiber) try {
    xl = Mo.inject($h), dt = Mo;
  } catch {
  }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fa(t)) throw Error(S(200));
  return Rh(e, t, null, n);
};
Ae.createRoot = function(e, t) {
  if (!fa(e)) throw Error(S(299));
  var n = !1, r = "", o = wf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ua(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Mr(e.nodeType === 8 ? e.parentNode : e), new da(t);
};
Ae.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Uc(t), e = e === null ? null : e.stateNode, e;
};
Ae.flushSync = function(e) {
  return an(e);
};
Ae.hydrate = function(e, t, n) {
  if (!Rl(t)) throw Error(S(200));
  return bl(null, e, t, !0, n);
};
Ae.hydrateRoot = function(e, t, n) {
  if (!fa(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = wf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = xf(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Mr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Ll(t);
};
Ae.render = function(e, t, n) {
  if (!Rl(t)) throw Error(S(200));
  return bl(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function(e) {
  if (!Rl(e)) throw Error(S(40));
  return e._reactRootContainer ? (an(function() {
    bl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ae.unstable_batchedUpdates = la;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Rl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return bl(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function _f() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f);
    } catch (e) {
      console.error(e);
    }
}
_f(), wc.exports = Ae;
var Oh = wc.exports, kf, rc = Oh;
kf = rc.createRoot, rc.hydrateRoot;
async function G(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const oc = `
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
.ns-button { min-height:40px; border:1px solid var(--ns-control-border); border-radius:12px; padding:0px 20px; color:var(--primary-text-color); background:var(--ns-control-background); box-shadow:var(--ns-elevation); cursor:pointer; transition:filter .15s ease, transform .15s ease, background .15s ease; white-space:nowrap; }
.ns-button:hover:not(:disabled) { background:var(--ns-control-background-hover); filter:brightness(1.04); transform:translateY(-1px); }
.ns-button:disabled { opacity:.55; cursor:not-allowed; }
.ns-button--quiet, .ns-button--tab { background:var(--ns-control-background); color:var(--primary-text-color); border-color:var(--ns-control-border); }
.ns-button--tab.is-active, .ns-button--active { background:var(--ns-control-active-background); border-color:var(--ns-control-border); color:var(--primary-text-color); }
.ns-button--danger { color:var(--error-color); border-color:var(--ns-control-border); }
.ns-button--compact { min-height:32px; padding:10px 13px 10px 13px; border-radius:9px; font-size:.82rem; }
.ns-button-group { display:flex; gap:6px; flex-wrap:wrap; }
.notify-studio__grid { max-width:var(--ns-page-width); margin:0 auto; display:grid; grid-template-columns:minmax(0, 1.25fr) minmax(320px, .75fr); gap:18px; align-items:start; }
.notify-studio__side { display:grid; gap:18px; min-width:0; }
.ns-card { border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ns-elevation); overflow:hidden; }
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
.ns-custom-group-member-button { width:100%; height:100%; min-width:0; min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; align-content:stretch; gap:7px; padding:13px 56px 13px 13px; overflow:hidden; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--ns-control-background); box-shadow:var(--ns-elevation); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:var(--ns-control-background); }
.ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-member-button__tag--category { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-custom-group-member-button__tag--area { background:var(--ns-control-active-background); color:var(--primary-text-color); }
.ns-custom-group-member-button strong { min-width:0; display:-webkit-box; overflow:hidden; overflow-wrap:anywhere; -webkit-box-orient:vertical; -webkit-line-clamp:2; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button > span:last-child { overflow:hidden; color:var(--secondary-text-color); font-size:.8rem; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-favorite { position:absolute; top:6px; right:6px; z-index:1; display:grid; place-items:center; width:42px; height:42px; padding:0; border:0; border-radius:0; color:var(--secondary-text-color); background:transparent; box-shadow:none; font-size:1.9rem; line-height:1; cursor:pointer; transition:color .15s ease, opacity .15s ease, transform .15s ease; }
.ns-custom-group-favorite:hover:not(:disabled) { color:var(--primary-color); transform:scale(1.1); }
.ns-custom-group-favorite.is-favorite { color:var(--primary-color); }
.ns-custom-group-favorite:disabled { opacity:.35; cursor:not-allowed; }
.ns-custom-group-expand { flex:0 0 40px; width:40px; height:var(--ns-quick-control-height); min-height:var(--ns-quick-control-height); display:grid; place-items:center; padding:0; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--ns-control-background); box-shadow:var(--ns-elevation); cursor:pointer; font-size:1.5rem; line-height:1; transition:filter .15s ease, transform .15s ease; }
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
`, Dh = { rendered: {}, errors: {} }, Fh = "/notify_studio_static/notify-studio-logo.png?v=0.1.22", Ah = 220, Si = 10, Uh = 50;
function Sf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function ys(e, t) {
  const n = Sf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function lc(e) {
  const t = `Action ${e}`;
  return { id: ys(t, e), title: t, route: "event" };
}
function Hh(e, t) {
  return `notify_studio_persistent_${Sf(e || t).toLowerCase() || "notification"}`;
}
function Ci(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function ic(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Go(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function sc(e) {
  return e === !0;
}
function Ni(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Bh(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Go(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Vh(e) {
  return `${e}::group`;
}
function Wh(e, t) {
  return `${e}::member::${t}`;
}
function Qh(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function ac(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gh({ hass: e }) {
  const t = k.useRef(e);
  t.current = e;
  const [n, r] = k.useState("audit"), [o, l] = k.useState(!!e), [i, u] = k.useState(!0), [c, m] = k.useState(null), [x, w] = k.useState([]), [y, C] = k.useState([]), [N, j] = k.useState([]), [W, p] = k.useState(!0), [d, h] = k.useState([]), [_, E] = k.useState(!1), [L, R] = k.useState(""), [b, Y] = k.useState([]), [I, pe] = k.useState([]), [rt, Ye] = k.useState([]), [ot, Ml] = k.useState(!1), [lt, dn] = k.useState(7), [P, O] = k.useState(!1), [D, X] = k.useState(!1), [ie, Gt] = k.useState(""), [it, Gn] = k.useState("category"), [ce, Ie] = k.useState(null), [pa, Il] = k.useState(null), [Kr, Yr] = k.useState([]), [Kn, ma] = k.useState(""), [Pe, $l] = k.useState(null), [Ct, ha] = k.useState(!1), [Xr, Cf] = k.useState(""), [qr, Nf] = k.useState(""), [Zr, jf] = k.useState(""), [Jr, Ef] = k.useState(""), [Yn, Ol] = k.useState(""), [ga, eo] = k.useState(""), [fn, va] = k.useState("A test notification from Notify Studio."), [pt, ya] = k.useState("Notify Studio"), [Xn, Dl] = k.useState(""), [to, xa] = k.useState(""), [Nt, wa] = k.useState(""), [no, _a] = k.useState(""), [ro, ka] = k.useState(""), [oo, Sa] = k.useState(""), [lo, Ca] = k.useState(""), [io, Na] = k.useState(""), [so, ja] = k.useState(""), [ao, Ea] = k.useState(""), [Fl, za] = k.useState(!1), [uo, Pa] = k.useState(!1), [pn, Ta] = k.useState(!1), [st, mn] = k.useState([]), [co, La] = k.useState(""), [fo, Ra] = k.useState(""), [po, ba] = k.useState(""), [mo, Ma] = k.useState(""), [ho, Ia] = k.useState(""), [hn, $a] = k.useState(Dh), [qn, Oa] = k.useState(""), [Kt, gn] = k.useState(null), [Da, Zn] = k.useState(""), [Fa, Jn] = k.useState(""), [er, tr] = k.useState(null), [zf, Pf] = k.useState(""), Al = k.useRef(0), Aa = k.useRef(null), U = k.useMemo(
    () => x.find((s) => s.id === Yn) ?? null,
    [x, Yn]
  ), Ua = k.useMemo(
    () => y.filter((s) => s.kind === "script"),
    [y]
  ), nr = k.useMemo(
    () => L ? d.filter((s) => s.level === L) : d,
    [L, d]
  ), Ul = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I)
      for (const g of f.members) {
        const v = s.get(g.source_key) ?? [];
        v.push(f), s.set(g.source_key, v);
      }
    return s;
  }, [I]), Hl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of y) s.set(f.entity_id, f);
    for (const f of Pe ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [y, Pe]), Ha = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I) {
      let g = 0, v = 0, z = 0;
      for (const $ of f.members) {
        if (!$.entity_id.startsWith("automation.")) continue;
        g += 1;
        const M = Hl.get($.entity_id);
        (M == null ? void 0 : M.enabled) === !0 ? v += 1 : (M == null ? void 0 : M.enabled) === !1 && (z += 1);
      }
      s.set(f.id, { automations: g, enabled: v, disabled: z });
    }
    return s;
  }, [I, Hl]), Yt = k.useMemo(() => I.flatMap((s) => [
    { key: Vh(s.id), type: "group", group: s },
    ...[...s.members].sort((f, g) => f.name.localeCompare(g.name)).map((f) => ({
      key: Wh(s.id, f.source_key),
      type: "member",
      group: s,
      member: f
    }))
  ]), [I]), Bl = k.useMemo(
    () => new Map(Yt.map((s) => [s.key, s])),
    [Yt]
  ), Vl = k.useMemo(
    () => rt.map((s) => Bl.get(s)).filter((s) => s !== void 0),
    [Bl, rt]
  ), Wl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
    for (const v of Pe ?? []) {
      v.category && s.add(v.category);
      for (const z of v.labels ?? []) f.add(z);
      for (const z of v.notify_devices ?? v.notifiers) g.add(z);
    }
    return {
      categories: [...s].sort((v, z) => v.localeCompare(z)),
      labels: [...f].sort((v, z) => v.localeCompare(z)),
      devices: [...g].sort((v, z) => v.localeCompare(z))
    };
  }, [Pe]), Ql = k.useMemo(() => (Pe ?? []).filter((s) => {
    var f;
    if (Xr && s.source !== Xr || qr && s.category !== qr || Zr && !(s.labels ?? []).includes(Zr) || Jr && !(s.notify_devices ?? s.notifiers).includes(Jr)) return !1;
    if (Kn) {
      const g = `${s.source}:${s.id}`;
      if (!((f = Ul.get(g)) != null && f.some((v) => v.id === Kn))) return !1;
    }
    return !0;
  }), [qr, Jr, Zr, Xr, Kn, Ul, Pe]), q = k.useCallback((s) => {
    Pf(s);
  }, []), Q = k.useCallback((s, f) => {
    const g = s instanceof Error ? s.message : f;
    q(g), window.alert(g);
  }, [q]), Ba = k.useCallback(async () => {
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
    m(f), w(g.services), C(v), Y(z), pe($), Ye(M);
  }, []), Tf = k.useCallback(async () => {
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
  }, [Q]), Lf = k.useCallback(async (s, f) => {
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
  }, [q, Q]), Rf = (s) => {
    const f = rt.filter((z) => Bl.has(z)), g = f.includes(s);
    if (!g && f.length >= lt) {
      q(`Only ${lt} favorite control${lt === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const v = g ? f.filter((z) => z !== s) : [...f, s];
    Lf(v, g ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };
  k.useEffect(() => {
    if (n !== "audit" || !Yt.length) return;
    const s = Aa.current;
    if (!s) return;
    const f = () => {
      if (!s.isConnected) return;
      if (window.matchMedia("(max-width: 700px)").matches) {
        dn((H) => H === 7 ? H : 7);
        return;
      }
      const $ = s.getBoundingClientRect().width;
      if ($ <= 0) return;
      const M = Math.max(1, $ - Uh - Si), ae = Math.max(
        1,
        Math.floor((M + Si) / (Ah + Si))
      );
      dn((H) => H === ae ? H : ae);
    }, g = window.requestAnimationFrame(f), v = new ResizeObserver(f);
    return v.observe(s), window.addEventListener("resize", f), () => {
      window.cancelAnimationFrame(g), v.disconnect(), window.removeEventListener("resize", f);
    };
  }, [Yt.length, n]);
  const Va = async () => {
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
      pe((v) => [...v, g].sort((z, $) => z.kind === $.kind ? z.name.localeCompare($.name) : z.kind.localeCompare($.kind))), Gt(""), q(`Custom ${g.kind} “${g.name}” created.`);
    } catch (g) {
      Q(g, "Unable to create the custom category or area.");
    } finally {
      Ie(null);
    }
  }, bf = async (s) => {
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
        pe(($) => $.map((M) => M.id === z.id ? z : M)), q(`Custom ${z.kind} renamed to “${z.name}”.`);
      } catch (z) {
        Q(z, "Unable to rename the custom category or area.");
      }
  }, Mf = async (s) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await G(f, "notify_studio/delete_custom_group", { group_id: s.id }), pe((g) => g.filter((v) => v.id !== s.id)), Ye((g) => g.filter((v) => !v.startsWith(`${s.id}::`))), Kn === s.id && ma(""), q(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (g) {
        Q(g, "Unable to delete the custom category or area.");
      }
  }, rr = (s) => `${s.source}:${s.id}`, we = pa ? I.find((s) => s.id === pa) ?? null : null, If = (s) => {
    Il(s.id), Yr(s.members.map((f) => f.source_key)), q(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, $f = () => {
    Il(null), Yr([]), q("Custom group selection cancelled.");
  }, Of = (s, f) => {
    const g = rr(s);
    Yr((v) => f ? [.../* @__PURE__ */ new Set([...v, g])] : v.filter((z) => z !== g));
  }, Df = async () => {
    const s = t.current;
    if (!(!s || !we)) {
      Ie("selection");
      try {
        const f = Pe ?? [], g = new Set(f.map(rr)), v = new Set(Kr), z = we.members.filter(
          (H) => !g.has(H.source_key)
        ), $ = f.filter((H) => v.has(rr(H))).map((H) => {
          var He;
          return {
            source_key: rr(H),
            name: H.name,
            entity_id: ((He = H.runtime) == null ? void 0 : He.entity_id) ?? ""
          };
        }), M = await G(s, "notify_studio/set_custom_group_members", {
          group_id: we.id,
          members: [...z, ...$]
        });
        pe(M);
        const ae = await G(s, "notify_studio/list_custom_group_favorites");
        Ye(ae), q(`Saved ${$.length} notification source${$.length === 1 ? "" : "s"} in “${we.name}”.`), Il(null), Yr([]);
      } catch (f) {
        Q(f, "Unable to save the selected custom category or area members.");
      } finally {
        Ie(null);
      }
    }
  }, Ff = async (s, f) => {
    const g = t.current;
    if (!g) return;
    const v = Ha.get(s.id), z = (v == null ? void 0 : v.automations) ?? 0;
    if (!z) {
      Q(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const $ = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${$} all ${z} automation${z === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      Ie("toggle");
      try {
        const M = await G(
          g,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: f }
        );
        q(`${s.name}: ${M.changed_entity_ids.length} automation${M.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await go();
      } catch (M) {
        Q(M, `Unable to ${$} the automations in ${s.name}.`);
      } finally {
        Ie(null);
      }
    }
  }, or = k.useCallback(async () => {
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
  }, []), Gl = k.useCallback(async () => {
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
  }, [Q]), Af = async () => {
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
  }, Wa = k.useCallback(async () => {
    try {
      await Ba(), $l(null);
    } catch (s) {
      Q(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [q, Ba, Q]);
  k.useEffect(() => {
    e && !o && l(!0);
  }, [e, o]), k.useEffect(() => {
    o && Wa();
  }, [o, Wa]), k.useEffect(() => {
    o && or();
  }, [o, or]), k.useEffect(() => {
    !Yn && x.length && Ol(x[0].id);
  }, [Yn, x]);
  const go = k.useCallback(async () => {
    const s = t.current;
    if (!(!s || Ct)) {
      ha(!0);
      try {
        $l(await G(s, "notify_studio/scan_notify_usage")), q("Notification audit complete.");
      } catch (f) {
        Q(f, "The notification audit failed.");
      } finally {
        ha(!1);
      }
    }
  }, [q, Ct, Q]);
  k.useEffect(() => {
    n === "audit" && Pe === null && go();
  }, [go, n, Pe]), k.useEffect(() => {
    n === "audit" && or();
  }, [or, n]), k.useEffect(() => {
    n === "logs" && Gl();
  }, [Gl, n]);
  const vo = k.useCallback(() => {
    const s = {};
    if (Xn.trim() && (s.tag = Xn.trim()), to.trim() && (s.image = to.trim()), pn && st.length && (s.actions = st.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (U == null ? void 0 : U.platform) === "android")
      Nt.trim() && (s.clickAction = Nt.trim()), no.trim() && (s.subject = no.trim()), ro.trim() && (s.channel = ro.trim()), oo && (s.importance = oo), lo && (s.priority = lo), io.trim() && (s.color = io.trim()), so.trim() && (s.notification_icon = so.trim()), ao.trim() && (s.timeout = Number(ao)), Fl && (s.sticky = !0), uo && (s.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      Nt.trim() && (s.url = Nt.trim()), co.trim() && (s.subtitle = co.trim());
      const f = {};
      fo.trim() && (f.sound = fo.trim()), po.trim() && (f.badge = Number(po)), mo && (f["interruption-level"] = mo), ho.trim() && (f["thread-id"] = ho.trim()), Object.keys(f).length && (s.push = f);
    } else Nt.trim() && (s.url = Nt.trim());
    return {
      message: fn,
      ...pt.trim() ? { title: pt } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [pn, to, po, ro, io, oo, mo, fn, st, so, Nt, uo, lo, U == null ? void 0 : U.platform, fo, Fl, no, co, Xn, ho, ao, pt]), Kl = k.useCallback(() => pn ? st.filter((s) => s.route !== "uri").map((s) => {
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
        service_data: Bh(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [pn, st]), Uf = k.useCallback(() => ({
    payload: vo(),
    action_handlers: Kl(),
    ...U ? { target_platform: U.platform } : {}
  }), [Kl, vo, U]), Qa = () => U || (Q(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  k.useEffect(() => {
    const s = t.current;
    if (!o || !s) return;
    const f = ++Al.current;
    let g = !1;
    const v = {
      message: fn,
      ...pt.trim() ? { title: pt } : {}
    }, z = window.setTimeout(() => {
      G(s, "notify_studio/render_preview", { payload: v }).then(($) => {
        !g && f === Al.current && $a($);
      }).catch(($) => {
        if (g || f !== Al.current) return;
        const M = $ instanceof Error ? $.message : "Unable to render the current template.";
        $a({ rendered: {}, errors: { message: M } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(z);
    };
  }, [o, fn, pt]);
  const Hf = async () => {
    const s = Qa();
    if (!(!s || !t.current)) {
      gn("test");
      try {
        const f = await G(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: vo()
        });
        q(`Test notification sent to ${f.target}.`);
      } catch (f) {
        Q(f, "The test notification could not be sent.");
      } finally {
        gn(null);
      }
    }
  }, Bf = async () => {
    const s = Qa();
    if (!(!s || !t.current)) {
      gn("yaml");
      try {
        const f = await G(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: vo(),
          action_handlers: Kl()
        });
        Oa(f.yaml), q("YAML generated successfully.");
      } catch (f) {
        Q(f, "Unable to generate YAML.");
      } finally {
        gn(null);
      }
    }
  }, Vf = async () => {
    var f;
    if (!qn.trim()) {
      Q(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(qn), s = !0;
      } catch {
      }
    if (!s) {
      const g = document.createElement("textarea");
      g.value = qn, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
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
  }, Wf = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Qf = (s) => {
    const f = s.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${f}?`)) return;
    const g = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    window.location.assign(`/config/${s.kind}/edit/${encodeURIComponent(String(g))}`);
  }, Gf = (s, f) => {
    C((g) => g.map((v) => v.entity_id === s ? { ...v, ...f } : v)), $l((g) => (g == null ? void 0 : g.map((v) => {
      var z;
      return ((z = v.runtime) == null ? void 0 : z.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, Ga = async (s, f) => {
    if (t.current)
      try {
        const g = await G(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: f
        });
        Gf(g.entity_id, {
          state: g.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), q(`${s.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (g) {
        Q(g, "Unable to update that automation.");
      }
  }, Kf = async (s) => {
    if (!t.current) return;
    const f = s.kind === "automation" ? "automation" : "script", g = s.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", v = `Run “${s.name}” now? This queues its configured ${f} actions and may control real devices.${g}`;
    if (window.confirm(v))
      try {
        const z = await G(t.current, "notify_studio/run_runnable", {
          entity_id: s.entity_id
        });
        q(`${s.name} was queued for execution${z.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          or();
        }, 900);
      } catch (z) {
        Q(z, `Unable to run ${s.name}.`);
      }
  }, vn = (s, f) => {
    mn((g) => g.map((v, z) => z === s ? { ...v, ...f } : v));
  }, Yf = (s, f) => {
    mn((g) => g.map((v, z) => z !== s ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? ys(v.title, s + 1) : v.id
    }));
  }, Xf = () => {
    const s = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    mn((f) => f.length >= s ? f : [...f, lc(f.length + 1)]);
  }, qf = (s) => {
    mn((f) => f.filter((g, v) => v !== s));
  }, Yl = k.useCallback((s) => {
    const f = s.payload, g = Go(f.data) ? f.data : {};
    va(te(f.message)), ya(te(f.title)), Dl(te(g.tag)), xa(te(g.image)), wa(te(g.clickAction) || te(g.url)), _a(te(g.subject)), ka(te(g.channel)), Sa(te(g.importance)), Ca(te(g.priority)), Na(te(g.color)), ja(te(g.notification_icon)), Ea(g.timeout === void 0 ? "" : String(g.timeout)), za(sc(g.sticky)), Pa(sc(g.persistent)), La(te(g.subtitle));
    const v = Go(g.push) ? g.push : {};
    Ra(te(v.sound)), ba(v.badge === void 0 ? "" : String(v.badge)), Ma(te(v["interruption-level"])), Ia(te(v["thread-id"]));
    const z = new Map(s.action_handlers.map((ae) => [ae.action, ae])), M = (Array.isArray(g.actions) ? g.actions : []).filter(Go).map((ae, H) => {
      const He = te(ae.action) || ys(`Action ${H + 1}`, H + 1), me = z.get(He);
      let jt = "event";
      return He === "URI" && te(ae.uri) ? jt = "uri" : te(ae.behavior) === "textInput" ? jt = "reply" : (me == null ? void 0 : me.type) === "script" ? jt = "script" : (me == null ? void 0 : me.type) === "service" && (jt = "service"), {
        id: He,
        title: te(ae.title) || `Action ${H + 1}`,
        route: jt,
        uri: te(ae.uri),
        scriptEntityId: te(me == null ? void 0 : me.script_entity_id),
        service: te(me == null ? void 0 : me.service),
        serviceData: me != null && me.service_data ? JSON.stringify(me.service_data, null, 2) : ""
      };
    });
    if (mn(M), Ta(M.length > 0), Oa(""), s.target_platform && (U == null ? void 0 : U.platform) !== s.target_platform) {
      const ae = x.find((H) => H.platform === s.target_platform);
      ae && Ol(ae.id);
    }
  }, [U == null ? void 0 : U.platform, x]), Zf = (s) => {
    if (eo(s), !s) return;
    const f = b.find((g) => g.id === s);
    f && (Yl(f.draft), q(`Template “${f.name}” loaded into the composer.`));
  }, Jf = () => {
    tr(null), Zn(pt.trim() || "New notification template"), Jn(""), r("templates");
  }, ep = (s) => {
    tr(s.id), Zn(s.name), Jn(s.description), Yl(s.draft), r("templates"), q(`Editing template “${s.name}”.`);
  }, tp = async () => {
    if (t.current) {
      gn("template");
      try {
        const s = await G(t.current, "notify_studio/save_template", {
          template: {
            ...er ? { id: er } : {},
            name: Da,
            description: Fa,
            draft: Uf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === s.id) === -1 ? [s, ...f] : f.map((v) => v.id === s.id ? s : v)), eo(s.id), tr(s.id), q(`Template “${s.name}” saved.`);
      } catch (s) {
        Q(s, "Unable to save the template.");
      } finally {
        gn(null);
      }
    }
  }, np = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await G(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((g) => g.id !== s.id)), ga === s.id && eo(""), er === s.id && (tr(null), Zn(""), Jn("")), q(`Template “${s.name}” deleted.`);
      } catch (f) {
        Q(f, "Unable to delete the template.");
      }
  }, rp = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: no, onChange: (s) => _a(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: ro, onChange: (s) => ka(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: oo, onChange: (s) => Sa(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: lo, onChange: (s) => Ca(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: io, onChange: (s) => Na(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: so, onChange: (s) => ja(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ao, onChange: (s) => Ea(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Fl, onChange: (s) => za(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: uo, onChange: (s) => {
        const f = s.target.checked;
        Pa(f), f && !Xn.trim() && Dl(Hh(pt, fn));
      } }),
      " Persistent notification"
    ] }),
    uo && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: co, onChange: (s) => La(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: fo, onChange: (s) => Ra(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: po, onChange: (s) => ba(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: mo, onChange: (s) => Ma(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: ho, onChange: (s) => Ia(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, op = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const s = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: pn, onChange: (f) => {
          const g = f.target.checked;
          Ta(g), g && !st.length && mn([lc(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      pn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
            st.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => qf(g), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (v) => vn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (v) => Yf(g, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(F, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (v) => vn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(F, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (v) => vn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(F, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => vn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              Ua.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (v) => vn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => vn(g, { serviceData: v.target.value }), placeholder: `{
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
          f.route === "script" && !Ua.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
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
          st.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Xf, children: "Add button" })
        ] })
      ] })
    ] });
  }, lp = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: Ni(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), ip = (s) => {
    var ae;
    const f = rr(s), g = (ae = s.notify_devices) != null && ae.length ? s.notify_devices : s.notifiers, v = s.runtime, z = Ul.get(f) ?? [], $ = we !== null, M = Kr.includes(f);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${$ ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          $ && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(we == null ? void 0 : we.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: M, onChange: (H) => Of(s, H.target.checked) }),
            /* @__PURE__ */ a.jsxs("span", { className: "ns-sr-only", children: [
              "Include ",
              s.name,
              " in ",
              we == null ? void 0 : we.name
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.source === "script" ? "script" : "automation"}`, children: s.source })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        lp(v),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
          s.category && /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            s.category
          ] }),
          (s.labels ?? []).map((H) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            H
          ] }, `label:${H}`)),
          g.map((H) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            H
          ] }, `device:${H}`))
        ] }),
        z.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: z.map((H) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${H.kind}`, children: [
          H.kind === "category" ? "Category" : "Area",
          ": ",
          H.name
        ] }, H.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Ga(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Kf(v), children: "Run test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Qf(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, sp = (s) => {
    var Ka;
    const f = s.group.kind === "category" ? "Category" : "Area", g = rt.includes(s.key), v = !g && Vl.length >= lt, z = Ha.get(s.group.id) ?? { automations: 0, enabled: 0 }, $ = s.type === "group", M = s.member ? Hl.get(s.member.entity_id) : void 0, H = !(z.automations > 0 && z.enabled === z.automations), He = $ ? z.automations === 0 ? "No automations" : H ? "Enable all" : "Disable all" : ((Ka = s.member) == null ? void 0 : Ka.name) ?? "Notification source", me = $ ? z.automations === 0 ? "Add an automation source" : `All automations · ${z.enabled}/${z.automations} enabled` : (M == null ? void 0 : M.kind) === "automation" ? M.enabled ? "Enabled" : "Disabled" : (M == null ? void 0 : M.kind) === "script" ? "Script" : "Unavailable", jt = $ ? z.automations > 0 : (M == null ? void 0 : M.kind) === "automation";
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-member-control", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `ns-custom-group-member-button ${$ ? "ns-custom-group-member-button--all" : ""}`,
          disabled: !jt || ce === "toggle",
          onClick: () => {
            $ ? Ff(s.group, H) : (M == null ? void 0 : M.kind) === "automation" && Ga(M, !M.enabled);
          },
          title: jt ? $ ? `${He} automations in ${s.group.name}` : `Toggle ${He}` : (M == null ? void 0 : M.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.group.kind}`, children: [
              f,
              ": ",
              s.group.name
            ] }),
            /* @__PURE__ */ a.jsx("strong", { children: He }),
            /* @__PURE__ */ a.jsx("span", { children: me })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-favorite ${g ? "is-favorite" : ""}`,
          onClick: () => Rf(s.key),
          disabled: ce === "favorites" || v,
          "aria-pressed": g,
          "aria-label": g ? `Remove ${He} from quick controls` : `Add ${He} to quick controls`,
          title: v ? "Quick row is full. Remove a star before adding another favorite." : g ? "Remove from quick controls" : "Add to quick controls",
          children: g ? "★" : "☆"
        }
      )
    ] }, s.key);
  }, ap = () => {
    if (!I.length)
      return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => X(!0), children: [
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
      ] }) });
    const s = ot ? Yt : Vl.length > 0 ? Vl.slice(0, lt) : Yt.slice(0, lt), f = Yt.length > s.length, g = {
      "--ns-quick-control-columns": String(Math.max(1, s.length))
    };
    return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control-panel", ref: Aa, children: [
      /* @__PURE__ */ a.jsx("div", { className: `ns-custom-group-member-grid ${ot ? "is-expanded" : ""}`, style: g, children: s.map(sp) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-expand ${ot ? "is-expanded" : ""}`,
          onClick: () => Ml((v) => !v),
          "aria-expanded": ot,
          "aria-label": ot ? "Collapse quick controls" : "Show all custom group controls",
          title: ot ? "Show quick controls" : f ? "Show all controls" : "Choose favourite controls",
          children: ot ? "⌃" : "⌄"
        }
      )
    ] }) });
  }, up = () => {
    if (!D) return null;
    const s = I.filter((v) => v.kind === "category"), f = I.filter((v) => v.kind === "area"), g = (v, z) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !z.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: z.map(($) => {
        const M = (we == null ? void 0 : we.id) === $.id;
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
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${M ? "ns-button--active" : ""}`, onClick: () => If($), disabled: ce === "selection", children: M ? "Selecting entities" : "Select entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void bf($), disabled: ce === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Mf($), disabled: ce === "selection", children: "Delete" })
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
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Tf(), disabled: P, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => X(!1), disabled: ce === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(F, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: ie, onChange: (v) => Gt(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Va();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: it, onChange: (v) => Gn(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Va(), disabled: ce === "create", children: ce === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          g("category", s),
          g("area", f)
        ] }),
        we && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__selection", children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
            /* @__PURE__ */ a.jsx("strong", { children: we.name }),
            "."
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: $f, disabled: ce === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Df(), disabled: ce === "selection", children: ce === "selection" ? "Saving…" : `Save ${Kr.length} ${Kr.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: oc }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: oc }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: zf }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Fh, alt: "Notify Studio" }),
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
          U && /* @__PURE__ */ a.jsx("span", { className: ic(U.platform), children: Ci(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(F, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: ga, onChange: (s) => Zf(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            b.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Yn, onChange: (s) => Ol(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            Ci(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          U == null ? void 0 : U.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: pt, onChange: (s) => ya(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Xn, onChange: (s) => Dl(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Nt, onChange: (s) => wa(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: to, onChange: (s) => xa(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: fn, onChange: (s) => va(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          rp(),
          op(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Hf(), disabled: Kt !== null, children: Kt === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: Jf, disabled: Kt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Bf(), disabled: Kt !== null, children: Kt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx(F, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: hn.errors.title ? `Error: ${hn.errors.title}` : hn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: hn.errors.message ? `Error: ${hn.errors.message}` : hn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              qn && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Vf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Wf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: qn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: er ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Da, onChange: (s) => Zn(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Fa, onChange: (s) => Jn(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void tp(), disabled: Kt !== null, children: Kt === "template" ? "Saving…" : er ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              tr(null), Zn(""), Jn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !b.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: b.map((s) => {
        var f, g;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: s.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: s.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: ic(s.draft.target_platform), children: Ci(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(g = s.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              eo(s.id), Yl(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => ep(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void np(s), children: "Delete" })
          ] })
        ] }) }, s.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-layout", children: [
      /* @__PURE__ */ a.jsxs("aside", { className: "ns-card ns-logs-sidebar", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio. This in-memory list clears when Home Assistant restarts." }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(F, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: L, onChange: (s) => R(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
            /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
            /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
            /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
          ] }) }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-sidebar-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Gl(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Af(), disabled: _, children: "Clear logs" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-content", "aria-label": "Notify Studio log events", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-logs-content__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { children: "Recent activity" }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            nr.length,
            " event",
            nr.length === 1 ? "" : "s",
            L ? ` matching ${ac(L).toLowerCase()}` : ""
          ] })
        ] }) }),
        _ && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
        !_ && !nr.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
        !_ && nr.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: nr.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("span", { className: Qh(s.level), children: ac(s.level) }),
              /* @__PURE__ */ a.jsx("strong", { children: s.message })
            ] }),
            /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: Ni(s.timestamp) })
          ] }),
          s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
          s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
          /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
        ] }, `${s.timestamp}:${s.event}:${f}`)) })
      ] })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      ap(),
      up(),
      /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "ns-notifications-toolbar", children: [
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => X(!0), children: "Manage groups" }),
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void go(), disabled: Ct, children: Ct ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Xr, onChange: (s) => Cf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: qr, onChange: (s) => Nf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Wl.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: Zr, onChange: (s) => jf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Wl.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: Jr, onChange: (s) => Ef(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Wl.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: Kn, onChange: (s) => ma(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                I.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) })
            ] }) })
          ] }),
          Ct && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !Ct && (Pe == null ? void 0 : Pe.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !Ct && Pe && Ql.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !Ct && Pe && Ql.length > 0 && /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "All notification sources" }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: Ql.map(ip) })
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
                Ni(s.last_triggered)
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
class Kh extends HTMLElement {
  constructor() {
    super(...arguments);
    Xl(this, "root");
    Xl(this, "currentHass");
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
    this.root || (this.root = kf(this)), this.root.render(/* @__PURE__ */ a.jsx(Gh, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Kh);
