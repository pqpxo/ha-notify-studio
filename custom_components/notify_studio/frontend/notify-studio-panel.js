var Np = Object.defineProperty;
var Cp = (e, t, n) => t in e ? Np(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nl = (e, t, n) => Cp(e, typeof t != "symbol" ? t + "" : t, n);
var xc = { exports: {} }, ki = {}, wc = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr = Symbol.for("react.element"), jp = Symbol.for("react.portal"), Ep = Symbol.for("react.fragment"), bp = Symbol.for("react.strict_mode"), Tp = Symbol.for("react.profiler"), Lp = Symbol.for("react.provider"), zp = Symbol.for("react.context"), Pp = Symbol.for("react.forward_ref"), Rp = Symbol.for("react.suspense"), Mp = Symbol.for("react.memo"), $p = Symbol.for("react.lazy"), ou = Symbol.iterator;
function Ip(e) {
  return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _c = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kc = Object.assign, Sc = {};
function Gn(e, t, n) {
  this.props = e, this.context = t, this.refs = Sc, this.updater = n || _c;
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nc() {
}
Nc.prototype = Gn.prototype;
function Cs(e, t, n) {
  this.props = e, this.context = t, this.refs = Sc, this.updater = n || _c;
}
var js = Cs.prototype = new Nc();
js.constructor = Cs;
kc(js, Gn.prototype);
js.isPureReactComponent = !0;
var iu = Array.isArray, Cc = Object.prototype.hasOwnProperty, Es = { current: null }, jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ec(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Cc.call(t, r) && !jc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Gr, type: e, key: i, ref: l, props: o, _owner: Es.current };
}
function Op(e, t) {
  return { $$typeof: Gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function Ap(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var lu = /\/+/g;
function rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ap("" + e.key) : t.toString(36);
}
function Do(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Gr:
        case jp:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + rl(l, 0) : r, iu(o) ? (n = "", e != null && (n = e.replace(lu, "$&/") + "/"), Do(o, t, n, "", function(m) {
    return m;
  })) : o != null && (bs(o) && (o = Op(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(lu, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", iu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var c = r + rl(i, u);
    l += Do(i, t, n, c, o);
  }
  else if (c = Ip(e), typeof c == "function") for (e = c.call(e), u = 0; !(i = e.next()).done; ) i = i.value, c = r + rl(i, u++), l += Do(i, t, n, c, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ko(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Do(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Dp(e) {
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
var be = { current: null }, Fo = { transition: null }, Fp = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: Fo, ReactCurrentOwner: Es };
function bc() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: ko, forEach: function(e, t, n) {
  ko(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ko(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ko(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Gn;
F.Fragment = Ep;
F.Profiler = Tp;
F.PureComponent = Cs;
F.StrictMode = bp;
F.Suspense = Rp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fp;
F.act = bc;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = kc({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Es.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) Cc.call(t, c) && !jc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Gr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
F.createContext = function(e) {
  return e = { $$typeof: zp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lp, _context: e }, e.Consumer = e;
};
F.createElement = Ec;
F.createFactory = function(e) {
  var t = Ec.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: Pp, render: e };
};
F.isValidElement = bs;
F.lazy = function(e) {
  return { $$typeof: $p, _payload: { _status: -1, _result: e }, _init: Dp };
};
F.memo = function(e, t) {
  return { $$typeof: Mp, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Fo.transition;
  Fo.transition = {};
  try {
    e();
  } finally {
    Fo.transition = t;
  }
};
F.unstable_act = bc;
F.useCallback = function(e, t) {
  return be.current.useCallback(e, t);
};
F.useContext = function(e) {
  return be.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return be.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return be.current.useEffect(e, t);
};
F.useId = function() {
  return be.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return be.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return be.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return be.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return be.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return be.current.useRef(e);
};
F.useState = function(e) {
  return be.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return be.current.useTransition();
};
F.version = "18.3.1";
wc.exports = F;
var _ = wc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up = _, Hp = Symbol.for("react.element"), Bp = Symbol.for("react.fragment"), Vp = Object.prototype.hasOwnProperty, Wp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Vp.call(t, r) && !Gp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Hp, type: e, key: i, ref: l, props: o, _owner: Wp.current };
}
ki.Fragment = Bp;
ki.jsx = Tc;
ki.jsxs = Tc;
xc.exports = ki;
var a = xc.exports, Lc = { exports: {} }, Ue = {}, zc = { exports: {} }, Pc = {};
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
    var A = T.length;
    T.push(O);
    e: for (; 0 < A; ) {
      var X = A - 1 >>> 1, se = T[X];
      if (0 < o(se, O)) T[X] = O, T[A] = se, A = X;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], A = T.pop();
    if (A !== O) {
      T[0] = A;
      e: for (var X = 0, se = T.length, Qt = se >>> 1; X < Qt; ) {
        var st = 2 * (X + 1) - 1, Yn = T[st], ce = st + 1, Ie = T[ce];
        if (0 > o(Yn, A)) ce < se && 0 > o(Ie, Yn) ? (T[X] = Ie, T[ce] = A, X = ce) : (T[X] = Yn, T[st] = A, X = st);
        else if (ce < se && 0 > o(Ie, A)) T[X] = Ie, T[ce] = A, X = ce;
        else break e;
      }
    }
    return O;
  }
  function o(T, O) {
    var A = T.sortIndex - O.sortIndex;
    return A !== 0 ? A : T.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var c = [], m = [], x = 1, w = null, y = 3, N = !1, C = !1, E = !1, G = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= T) r(m), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(m);
    }
  }
  function k(T) {
    if (E = !1, h(T), !C) if (n(c) !== null) C = !0, lt(b);
    else {
      var O = n(m);
      O !== null && pn(k, O.startTime - T);
    }
  }
  function b(T, O) {
    C = !1, E && (E = !1, p(M), M = -1), N = !0;
    var A = y;
    try {
      for (h(O), w = n(c); w !== null && (!(w.expirationTime > O) || T && !pe()); ) {
        var X = w.callback;
        if (typeof X == "function") {
          w.callback = null, y = w.priorityLevel;
          var se = X(w.expirationTime <= O);
          O = e.unstable_now(), typeof se == "function" ? w.callback = se : w === n(c) && r(c), h(O);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var Qt = !0;
      else {
        var st = n(m);
        st !== null && pn(k, st.startTime - O), Qt = !1;
      }
      return Qt;
    } finally {
      w = null, y = A, N = !1;
    }
  }
  var z = !1, P = null, M = -1, q = 5, I = -1;
  function pe() {
    return !(e.unstable_now() - I < q);
  }
  function ot() {
    if (P !== null) {
      var T = e.unstable_now();
      I = T;
      var O = !0;
      try {
        O = P(!0, T);
      } finally {
        O ? Ye() : (z = !1, P = null);
      }
    } else z = !1;
  }
  var Ye;
  if (typeof f == "function") Ye = function() {
    f(ot);
  };
  else if (typeof MessageChannel < "u") {
    var it = new MessageChannel(), Ai = it.port2;
    it.port1.onmessage = ot, Ye = function() {
      Ai.postMessage(null);
    };
  } else Ye = function() {
    G(ot, 0);
  };
  function lt(T) {
    P = T, z || (z = !0, Ye());
  }
  function pn(T, O) {
    M = G(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    C || N || (C = !0, lt(b));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < T ? Math.floor(1e3 / T) : 5;
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
    var A = y;
    y = O;
    try {
      return T();
    } finally {
      y = A;
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
    var A = y;
    y = T;
    try {
      return O();
    } finally {
      y = A;
    }
  }, e.unstable_scheduleCallback = function(T, O, A) {
    var X = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? X + A : X) : A = X, T) {
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
    return se = A + se, T = { id: x++, callback: O, priorityLevel: T, startTime: A, expirationTime: se, sortIndex: -1 }, A > X ? (T.sortIndex = A, t(m, T), n(c) === null && T === n(m) && (E ? (p(M), M = -1) : E = !0, pn(k, A - X))) : (T.sortIndex = se, t(c, T), C || N || (C = !0, lt(b))), T;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(T) {
    var O = y;
    return function() {
      var A = y;
      y = O;
      try {
        return T.apply(this, arguments);
      } finally {
        y = A;
      }
    };
  };
})(Pc);
zc.exports = Pc;
var Qp = zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp = _, Fe = Qp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Rc = /* @__PURE__ */ new Set(), Tr = {};
function dn(e, t) {
  Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Rc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pl = Object.prototype.hasOwnProperty, Yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, su = {}, au = {};
function qp(e) {
  return Pl.call(au, e) ? !0 : Pl.call(su, e) ? !1 : Yp.test(e) ? au[e] = !0 : (su[e] = !0, !1);
}
function Xp(e, t, n, r) {
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
function Zp(e, t, n, r) {
  if (t === null || typeof t > "u" || Xp(e, t, n, r)) return !0;
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
function Te(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ts = /[\-:]([a-z])/g;
function Ls(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ts,
    Ls
  );
  we[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ts, Ls);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ts, Ls);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zs(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zp(t, n, o, r) && (n = null), r || o === null ? qp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, So = Symbol.for("react.element"), _n = Symbol.for("react.portal"), kn = Symbol.for("react.fragment"), Ps = Symbol.for("react.strict_mode"), Rl = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"), $c = Symbol.for("react.context"), Rs = Symbol.for("react.forward_ref"), Ml = Symbol.for("react.suspense"), $l = Symbol.for("react.suspense_list"), Ms = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Ic = Symbol.for("react.offscreen"), uu = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ol;
function gr(e) {
  if (ol === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ol = t && t[1] || "";
  }
  return `
` + ol + e;
}
var il = !1;
function ll(e, t) {
  if (!e || il) return "";
  il = !0;
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
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (o[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || o[l] !== i[u]) {
              var c = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    il = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function Jp(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ll(e.type, !1), e;
    case 11:
      return e = ll(e.type.render, !1), e;
    case 1:
      return e = ll(e.type, !0), e;
    default:
      return "";
  }
}
function Il(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case _n:
      return "Portal";
    case Rl:
      return "Profiler";
    case Ps:
      return "StrictMode";
    case Ml:
      return "Suspense";
    case $l:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case $c:
      return (e.displayName || "Context") + ".Consumer";
    case Mc:
      return (e._context.displayName || "Context") + ".Provider";
    case Rs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ms:
      return t = e.displayName || null, t !== null ? t : Il(e.type) || "Memo";
    case bt:
      t = e._payload, e = e._init;
      try {
        return Il(e(t));
      } catch {
      }
  }
  return null;
}
function em(e) {
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
      return Il(t);
    case 8:
      return t === Ps ? "StrictMode" : "Mode";
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
function Oc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function tm(e) {
  var t = Oc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function No(e) {
  e._valueTracker || (e._valueTracker = tm(e));
}
function Ac(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Oc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ol(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Dc(e, t) {
  t = t.checked, t != null && zs(e, "checked", t, !1);
}
function Al(e, t) {
  Dc(e, t);
  var n = Ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Dl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Dl(e, t, n) {
  (t !== "number" || Zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Rn(e, t, n, r) {
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
function Fl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function Fc(e, t) {
  var n = Ht(t.value), r = Ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Co, Hc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Co = Co || document.createElement("div"), Co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Co.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
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
}, nm = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function(e) {
  nm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
  });
});
function Bc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
}
function Vc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Bc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var rm = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Hl(e, t) {
  if (t) {
    if (rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Bl(e, t) {
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
var Vl = null;
function $s(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Wl = null, Mn = null, $n = null;
function mu(e) {
  if (e = Yr(e)) {
    if (typeof Wl != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Ei(t), Wl(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  Mn ? $n ? $n.push(e) : $n = [e] : Mn = e;
}
function Gc() {
  if (Mn) {
    var e = Mn, t = $n;
    if ($n = Mn = null, mu(e), t) for (e = 0; e < t.length; e++) mu(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Kc() {
}
var sl = !1;
function Yc(e, t, n) {
  if (sl) return e(t, n);
  sl = !0;
  try {
    return Qc(e, t, n);
  } finally {
    sl = !1, (Mn !== null || $n !== null) && (Kc(), Gc());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ei(n);
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
var Gl = !1;
if (xt) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Gl = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Gl = !1;
}
function om(e, t, n, r, o, i, l, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var _r = !1, Jo = null, ei = !1, Ql = null, im = { onError: function(e) {
  _r = !0, Jo = e;
} };
function lm(e, t, n, r, o, i, l, u, c) {
  _r = !1, Jo = null, om.apply(im, arguments);
}
function sm(e, t, n, r, o, i, l, u, c) {
  if (lm.apply(this, arguments), _r) {
    if (_r) {
      var m = Jo;
      _r = !1, Jo = null;
    } else throw Error(S(198));
    ei || (ei = !0, Ql = m);
  }
}
function fn(e) {
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
function qc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function hu(e) {
  if (fn(e) !== e) throw Error(S(188));
}
function am(e) {
  var t = e.alternate;
  if (!t) {
    if (t = fn(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return hu(o), e;
        if (i === r) return hu(o), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = o, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Xc(e) {
  return e = am(e), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jc = Fe.unstable_scheduleCallback, gu = Fe.unstable_cancelCallback, um = Fe.unstable_shouldYield, cm = Fe.unstable_requestPaint, ae = Fe.unstable_now, dm = Fe.unstable_getCurrentPriorityLevel, Is = Fe.unstable_ImmediatePriority, ed = Fe.unstable_UserBlockingPriority, ti = Fe.unstable_NormalPriority, fm = Fe.unstable_LowPriority, td = Fe.unstable_IdlePriority, Si = null, ft = null;
function pm(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function") try {
    ft.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var tt = Math.clz32 ? Math.clz32 : gm, mm = Math.log, hm = Math.LN2;
function gm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (mm(e) / hm | 0) | 0;
}
var jo = 64, Eo = 4194304;
function yr(e) {
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
function ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = yr(u) : (i &= l, i !== 0 && (r = yr(i)));
  } else l = n & ~o, l !== 0 ? r = yr(l) : i !== 0 && (r = yr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - tt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function vm(e, t) {
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
function ym(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - tt(i), u = 1 << l, c = o[l];
    c === -1 ? (!(u & n) || u & r) && (o[l] = vm(u, t)) : c <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Kl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function nd() {
  var e = jo;
  return jo <<= 1, !(jo & 4194240) && (jo = 64), e;
}
function al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function xm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Os(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var W = 0;
function rd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var od, As, id, ld, sd, Yl = !1, bo = [], Mt = null, $t = null, It = null, Pr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Lt = [], wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vu(e, t) {
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
      Rr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Yr(t), t !== null && As(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function _m(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Mt = cr(Mt, e, t, n, r, o), !0;
    case "dragenter":
      return $t = cr($t, e, t, n, r, o), !0;
    case "mouseover":
      return It = cr(It, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Pr.set(i, cr(Pr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Rr.set(i, cr(Rr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ad(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = qc(n), t !== null) {
          e.blockedOn = t, sd(e.priority, function() {
            id(n);
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
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Vl = r, n.target.dispatchEvent(r), Vl = null;
    } else return t = Yr(n), t !== null && As(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  Uo(e) && n.delete(t);
}
function km() {
  Yl = !1, Mt !== null && Uo(Mt) && (Mt = null), $t !== null && Uo($t) && ($t = null), It !== null && Uo(It) && (It = null), Pr.forEach(yu), Rr.forEach(yu);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yl || (Yl = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, km)));
}
function Mr(e) {
  function t(o) {
    return dr(o, e);
  }
  if (0 < bo.length) {
    dr(bo[0], e);
    for (var n = 1; n < bo.length; n++) {
      var r = bo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Mt !== null && dr(Mt, e), $t !== null && dr($t, e), It !== null && dr(It, e), Pr.forEach(t), Rr.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) ad(n), n.blockedOn === null && Lt.shift();
}
var In = St.ReactCurrentBatchConfig, ri = !0;
function Sm(e, t, n, r) {
  var o = W, i = In.transition;
  In.transition = null;
  try {
    W = 1, Ds(e, t, n, r);
  } finally {
    W = o, In.transition = i;
  }
}
function Nm(e, t, n, r) {
  var o = W, i = In.transition;
  In.transition = null;
  try {
    W = 4, Ds(e, t, n, r);
  } finally {
    W = o, In.transition = i;
  }
}
function Ds(e, t, n, r) {
  if (ri) {
    var o = ql(e, t, n, r);
    if (o === null) yl(e, t, r, oi, n), vu(e, r);
    else if (_m(o, e, t, n, r)) r.stopPropagation();
    else if (vu(e, r), t & 4 && -1 < wm.indexOf(e)) {
      for (; o !== null; ) {
        var i = Yr(o);
        if (i !== null && od(i), i = ql(e, t, n, r), i === null && yl(e, t, r, oi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else yl(e, t, r, null, n);
  }
}
var oi = null;
function ql(e, t, n, r) {
  if (oi = null, e = $s(r), e = en(e), e !== null) if (t = fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return oi = e, null;
}
function ud(e) {
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
      switch (dm()) {
        case Is:
          return 1;
        case ed:
          return 4;
        case ti:
        case fm:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, Fs = null, Ho = null;
function cd() {
  if (Ho) return Ho;
  var e, t = Fs, n = t.length, r, o = "value" in Pt ? Pt.value : Pt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ho = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Bo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function To() {
  return !0;
}
function xu() {
  return !1;
}
function He(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? To : xu, this.isPropagationStopped = xu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = To);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = To);
  }, persist: function() {
  }, isPersistent: To }), t;
}
var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Us = He(Qn), Kr = oe({}, Qn, { view: 0, detail: 0 }), Cm = He(Kr), ul, cl, fr, Ni = oe({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (ul = e.screenX - fr.screenX, cl = e.screenY - fr.screenY) : cl = ul = 0, fr = e), ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cl;
} }), wu = He(Ni), jm = oe({}, Ni, { dataTransfer: 0 }), Em = He(jm), bm = oe({}, Kr, { relatedTarget: 0 }), dl = He(bm), Tm = oe({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lm = He(Tm), zm = oe({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pm = He(zm), Rm = oe({}, Qn, { data: 0 }), _u = He(Rm), Mm = {
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
}, $m = {
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
}, Im = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Om(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Im[e]) ? !!t[e] : !1;
}
function Hs() {
  return Om;
}
var Am = oe({}, Kr, { key: function(e) {
  if (e.key) {
    var t = Mm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $m[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hs, charCode: function(e) {
  return e.type === "keypress" ? Bo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Dm = He(Am), Fm = oe({}, Ni, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ku = He(Fm), Um = oe({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hs }), Hm = He(Um), Bm = oe({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vm = He(Bm), Wm = oe({}, Ni, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gm = He(Wm), Qm = [9, 13, 27, 32], Bs = xt && "CompositionEvent" in window, kr = null;
xt && "documentMode" in document && (kr = document.documentMode);
var Km = xt && "TextEvent" in window && !kr, dd = xt && (!Bs || kr && 8 < kr && 11 >= kr), Su = " ", Nu = !1;
function fd(e, t) {
  switch (e) {
    case "keyup":
      return Qm.indexOf(t.keyCode) !== -1;
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
function pd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function Ym(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : (Nu = !0, Su);
    case "textInput":
      return e = t.data, e === Su && Nu ? null : e;
    default:
      return null;
  }
}
function qm(e, t) {
  if (Sn) return e === "compositionend" || !Bs && fd(e, t) ? (e = cd(), Ho = Fs = Pt = null, Sn = !1, e) : null;
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
      return dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xm[e.type] : t === "textarea";
}
function md(e, t, n, r) {
  Wc(r), t = ii(t, "onChange"), 0 < t.length && (n = new Us("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, $r = null;
function Zm(e) {
  Cd(e, 0);
}
function Ci(e) {
  var t = jn(e);
  if (Ac(t)) return e;
}
function Jm(e, t) {
  if (e === "change") return t;
}
var hd = !1;
if (xt) {
  var fl;
  if (xt) {
    var pl = "oninput" in document;
    if (!pl) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"), pl = typeof ju.oninput == "function";
    }
    fl = pl;
  } else fl = !1;
  hd = fl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  Sr && (Sr.detachEvent("onpropertychange", gd), $r = Sr = null);
}
function gd(e) {
  if (e.propertyName === "value" && Ci($r)) {
    var t = [];
    md(t, $r, e, $s(e)), Yc(Zm, t);
  }
}
function eh(e, t, n) {
  e === "focusin" ? (Eu(), Sr = t, $r = n, Sr.attachEvent("onpropertychange", gd)) : e === "focusout" && Eu();
}
function th(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci($r);
}
function nh(e, t) {
  if (e === "click") return Ci(t);
}
function rh(e, t) {
  if (e === "input" || e === "change") return Ci(t);
}
function oh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : oh;
function Ir(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pl.call(t, o) || !rt(e[o], t[o])) return !1;
  }
  return !0;
}
function bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = bu(e);
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
    n = bu(n);
  }
}
function vd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yd() {
  for (var e = window, t = Zo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zo(e.document);
  }
  return t;
}
function Vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ih(e) {
  var t = yd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && vd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tu(n, i);
        var l = Tu(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var lh = xt && "documentMode" in document && 11 >= document.documentMode, Nn = null, Xl = null, Nr = null, Zl = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zl || Nn == null || Nn !== Zo(r) || (r = Nn, "selectionStart" in r && Vs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Ir(Nr, r) || (Nr = r, r = ii(Xl, "onSelect"), 0 < r.length && (t = new Us("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Nn)));
}
function Lo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Cn = { animationend: Lo("Animation", "AnimationEnd"), animationiteration: Lo("Animation", "AnimationIteration"), animationstart: Lo("Animation", "AnimationStart"), transitionend: Lo("Transition", "TransitionEnd") }, ml = {}, xd = {};
xt && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
function ji(e) {
  if (ml[e]) return ml[e];
  if (!Cn[e]) return e;
  var t = Cn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in xd) return ml[e] = t[n];
  return e;
}
var wd = ji("animationend"), _d = ji("animationiteration"), kd = ji("animationstart"), Sd = ji("transitionend"), Nd = /* @__PURE__ */ new Map(), zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
  Nd.set(e, t), dn(t, [e]);
}
for (var hl = 0; hl < zu.length; hl++) {
  var gl = zu[hl], sh = gl.toLowerCase(), ah = gl[0].toUpperCase() + gl.slice(1);
  Vt(sh, "on" + ah);
}
Vt(wd, "onAnimationEnd");
Vt(_d, "onAnimationIteration");
Vt(kd, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(Sd, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Pu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, sm(r, t, void 0, e), e.currentTarget = null;
}
function Cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== i && o.isPropagationStopped()) break e;
        Pu(o, u, m), i = c;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], c = u.instance, m = u.currentTarget, u = u.listener, c !== i && o.isPropagationStopped()) break e;
        Pu(o, u, m), i = c;
      }
    }
  }
  if (ei) throw e = Ql, ei = !1, Ql = null, e;
}
function Z(e, t) {
  var n = t[rs];
  n === void 0 && (n = t[rs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jd(t, e, 2, !1), n.add(r));
}
function vl(e, t, n) {
  var r = 0;
  t && (r |= 4), jd(n, e, r, t);
}
var zo = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[zo]) {
    e[zo] = !0, Rc.forEach(function(n) {
      n !== "selectionchange" && (uh.has(n) || vl(n, !1, e), vl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zo] || (t[zo] = !0, vl("selectionchange", !1, t));
  }
}
function jd(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var o = Sm;
      break;
    case 4:
      o = Nm;
      break;
    default:
      o = Ds;
  }
  n = o.bind(null, t, n, e), o = void 0, !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function yl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === o || u.nodeType === 8 && u.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var c = l.tag;
        if ((c === 3 || c === 4) && (c = l.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = en(u), l === null) return;
        if (c = l.tag, c === 5 || c === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Yc(function() {
    var m = i, x = $s(n), w = [];
    e: {
      var y = Nd.get(e);
      if (y !== void 0) {
        var N = Us, C = e;
        switch (e) {
          case "keypress":
            if (Bo(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = Dm;
            break;
          case "focusin":
            C = "focus", N = dl;
            break;
          case "focusout":
            C = "blur", N = dl;
            break;
          case "beforeblur":
          case "afterblur":
            N = dl;
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
            N = wu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = Em;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = Hm;
            break;
          case wd:
          case _d:
          case kd:
            N = Lm;
            break;
          case Sd:
            N = Vm;
            break;
          case "scroll":
            N = Cm;
            break;
          case "wheel":
            N = Gm;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = Pm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = ku;
        }
        var E = (t & 4) !== 0, G = !E && e === "scroll", p = E ? y !== null ? y + "Capture" : null : y;
        E = [];
        for (var f = m, h; f !== null; ) {
          h = f;
          var k = h.stateNode;
          if (h.tag === 5 && k !== null && (h = k, p !== null && (k = zr(f, p), k != null && E.push(Ar(f, k, h)))), G) break;
          f = f.return;
        }
        0 < E.length && (y = new N(y, C, null, n, x), w.push({ event: y, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", y && n !== Vl && (C = n.relatedTarget || n.fromElement) && (en(C) || C[wt])) break e;
        if ((N || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, N ? (C = n.relatedTarget || n.toElement, N = m, C = C ? en(C) : null, C !== null && (G = fn(C), C !== G || C.tag !== 5 && C.tag !== 6) && (C = null)) : (N = null, C = m), N !== C)) {
          if (E = wu, k = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = ku, k = "onPointerLeave", p = "onPointerEnter", f = "pointer"), G = N == null ? y : jn(N), h = C == null ? y : jn(C), y = new E(k, f + "leave", N, n, x), y.target = G, y.relatedTarget = h, k = null, en(x) === m && (E = new E(p, f + "enter", C, n, x), E.target = h, E.relatedTarget = G, k = E), G = k, N && C) t: {
            for (E = N, p = C, f = 0, h = E; h; h = wn(h)) f++;
            for (h = 0, k = p; k; k = wn(k)) h++;
            for (; 0 < f - h; ) E = wn(E), f--;
            for (; 0 < h - f; ) p = wn(p), h--;
            for (; f--; ) {
              if (E === p || p !== null && E === p.alternate) break t;
              E = wn(E), p = wn(p);
            }
            E = null;
          }
          else E = null;
          N !== null && Ru(w, y, N, E, !1), C !== null && G !== null && Ru(w, G, C, E, !0);
        }
      }
      e: {
        if (y = m ? jn(m) : window, N = y.nodeName && y.nodeName.toLowerCase(), N === "select" || N === "input" && y.type === "file") var b = Jm;
        else if (Cu(y)) if (hd) b = rh;
        else {
          b = th;
          var z = eh;
        }
        else (N = y.nodeName) && N.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (b = nh);
        if (b && (b = b(e, m))) {
          md(w, b, n, x);
          break e;
        }
        z && z(e, y, m), e === "focusout" && (z = y._wrapperState) && z.controlled && y.type === "number" && Dl(y, "number", y.value);
      }
      switch (z = m ? jn(m) : window, e) {
        case "focusin":
          (Cu(z) || z.contentEditable === "true") && (Nn = z, Xl = m, Nr = null);
          break;
        case "focusout":
          Nr = Xl = Nn = null;
          break;
        case "mousedown":
          Zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zl = !1, Lu(w, n, x);
          break;
        case "selectionchange":
          if (lh) break;
        case "keydown":
        case "keyup":
          Lu(w, n, x);
      }
      var P;
      if (Bs) e: {
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
      else Sn ? fd(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (dd && n.locale !== "ko" && (Sn || M !== "onCompositionStart" ? M === "onCompositionEnd" && Sn && (P = cd()) : (Pt = x, Fs = "value" in Pt ? Pt.value : Pt.textContent, Sn = !0)), z = ii(m, M), 0 < z.length && (M = new _u(M, e, null, n, x), w.push({ event: M, listeners: z }), P ? M.data = P : (P = pd(n), P !== null && (M.data = P)))), (P = Km ? Ym(e, n) : qm(e, n)) && (m = ii(m, "onBeforeInput"), 0 < m.length && (x = new _u("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = P));
    }
    Cd(w, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = zr(e, n), i != null && r.unshift(Ar(e, i, o)), i = zr(e, t), i != null && r.push(Ar(e, i, o))), e = e.return;
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
function Ru(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, o ? (c = zr(n, i), c != null && l.unshift(Ar(n, c, u))) : o || (c = zr(n, i), c != null && l.push(Ar(n, c, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ch = /\r\n?/g, dh = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(ch, `
`).replace(dh, "");
}
function Po(e, t, n) {
  if (t = Mu(t), Mu(e) !== t && n) throw Error(S(425));
}
function li() {
}
var Jl = null, es = null;
function ts(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ns = typeof setTimeout == "function" ? setTimeout : void 0, fh = typeof clearTimeout == "function" ? clearTimeout : void 0, $u = typeof Promise == "function" ? Promise : void 0, ph = typeof queueMicrotask == "function" ? queueMicrotask : typeof $u < "u" ? function(e) {
  return $u.resolve(null).then(e).catch(mh);
} : ns;
function mh(e) {
  setTimeout(function() {
    throw e;
  });
}
function xl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Mr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Mr(t);
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
function Iu(e) {
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
var Kn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Kn, Dr = "__reactProps$" + Kn, wt = "__reactContainer$" + Kn, rs = "__reactEvents$" + Kn, hh = "__reactListeners$" + Kn, gh = "__reactHandles$" + Kn;
function en(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[dt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Iu(e); e !== null; ) {
        if (n = e[dt]) return n;
        e = Iu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Yr(e) {
  return e = e[dt] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Ei(e) {
  return e[Dr] || null;
}
var os = [], En = -1;
function Wt(e) {
  return { current: e };
}
function J(e) {
  0 > En || (e.current = os[En], os[En] = null, En--);
}
function Y(e, t) {
  En++, os[En] = e.current, e.current = t;
}
var Bt = {}, Ce = Wt(Bt), Re = Wt(!1), ln = Bt;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Me(e) {
  return e = e.childContextTypes, e != null;
}
function si() {
  J(Re), J(Ce);
}
function Ou(e, t, n) {
  if (Ce.current !== Bt) throw Error(S(168));
  Y(Ce, t), Y(Re, n);
}
function Ed(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, em(e) || "Unknown", o));
  return oe({}, n, r);
}
function ai(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, ln = Ce.current, Y(Ce, e), Y(Re, Re.current), !0;
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Ed(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, J(Re), J(Ce), Y(Ce, e)) : J(Re), Y(Re, n);
}
var ht = null, bi = !1, wl = !1;
function bd(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function vh(e) {
  bi = !0, bd(e);
}
function Gt() {
  if (!wl && ht !== null) {
    wl = !0;
    var e = 0, t = W;
    try {
      var n = ht;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, bi = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Jc(Is, Gt), o;
    } finally {
      W = t, wl = !1;
    }
  }
  return null;
}
var bn = [], Tn = 0, ui = null, ci = 0, Be = [], Ve = 0, sn = null, gt = 1, vt = "";
function Zt(e, t) {
  bn[Tn++] = ci, bn[Tn++] = ui, ui = e, ci = t;
}
function Td(e, t, n) {
  Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = sn, sn = e;
  var r = gt;
  e = vt;
  var o = 32 - tt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - tt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, gt = 1 << 32 - tt(t) + o | n << o | r, vt = i + e;
  } else gt = 1 << i | n << o | r, vt = e;
}
function Ws(e) {
  e.return !== null && (Zt(e, 1), Td(e, 1, 0));
}
function Gs(e) {
  for (; e === ui; ) ui = bn[--Tn], bn[Tn] = null, ci = bn[--Tn], bn[Tn] = null;
  for (; e === sn; ) sn = Be[--Ve], Be[Ve] = null, vt = Be[--Ve], Be[Ve] = null, gt = Be[--Ve], Be[Ve] = null;
}
var De = null, Ae = null, ee = !1, et = null;
function Ld(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = Ot(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ls(e) {
  if (ee) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Du(e, t)) {
        if (is(e)) throw Error(S(418));
        t = Ot(n.nextSibling);
        var r = De;
        t && Du(e, t) ? Ld(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, De = e);
      }
    } else {
      if (is(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, De = e;
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Ro(e) {
  if (e !== De) return !1;
  if (!ee) return Fu(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ts(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (is(e)) throw zd(), Error(S(418));
    for (; t; ) Ld(e, t), t = Ot(t.nextSibling);
  }
  if (Fu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = De ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function zd() {
  for (var e = Ae; e; ) e = Ot(e.nextSibling);
}
function Un() {
  Ae = De = null, ee = !1;
}
function Qs(e) {
  et === null ? et = [e] : et.push(e);
}
var yh = St.ReactCurrentBatchConfig;
function pr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Mo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Pd(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [f], p.flags |= 16) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function o(p, f) {
    return p = Ut(p, f), p.index = 0, p.sibling = null, p;
  }
  function i(p, f, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < f ? (p.flags |= 2, f) : h) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, h, k) {
    return f === null || f.tag !== 6 ? (f = El(h, p.mode, k), f.return = p, f) : (f = o(f, h), f.return = p, f);
  }
  function c(p, f, h, k) {
    var b = h.type;
    return b === kn ? x(p, f, h.props.children, k, h.key) : f !== null && (f.elementType === b || typeof b == "object" && b !== null && b.$$typeof === bt && Uu(b) === f.type) ? (k = o(f, h.props), k.ref = pr(p, f, h), k.return = p, k) : (k = qo(h.type, h.key, h.props, null, p.mode, k), k.ref = pr(p, f, h), k.return = p, k);
  }
  function m(p, f, h, k) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = bl(h, p.mode, k), f.return = p, f) : (f = o(f, h.children || []), f.return = p, f);
  }
  function x(p, f, h, k, b) {
    return f === null || f.tag !== 7 ? (f = on(h, p.mode, k, b), f.return = p, f) : (f = o(f, h), f.return = p, f);
  }
  function w(p, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = El("" + f, p.mode, h), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case So:
          return h = qo(f.type, f.key, f.props, null, p.mode, h), h.ref = pr(p, null, f), h.return = p, h;
        case _n:
          return f = bl(f, p.mode, h), f.return = p, f;
        case bt:
          var k = f._init;
          return w(p, k(f._payload), h);
      }
      if (vr(f) || ar(f)) return f = on(f, p.mode, h, null), f.return = p, f;
      Mo(p, f);
    }
    return null;
  }
  function y(p, f, h, k) {
    var b = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return b !== null ? null : u(p, f, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case So:
          return h.key === b ? c(p, f, h, k) : null;
        case _n:
          return h.key === b ? m(p, f, h, k) : null;
        case bt:
          return b = h._init, y(
            p,
            f,
            b(h._payload),
            k
          );
      }
      if (vr(h) || ar(h)) return b !== null ? null : x(p, f, h, k, null);
      Mo(p, h);
    }
    return null;
  }
  function N(p, f, h, k, b) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(h) || null, u(f, p, "" + k, b);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case So:
          return p = p.get(k.key === null ? h : k.key) || null, c(f, p, k, b);
        case _n:
          return p = p.get(k.key === null ? h : k.key) || null, m(f, p, k, b);
        case bt:
          var z = k._init;
          return N(p, f, h, z(k._payload), b);
      }
      if (vr(k) || ar(k)) return p = p.get(h) || null, x(f, p, k, b, null);
      Mo(f, k);
    }
    return null;
  }
  function C(p, f, h, k) {
    for (var b = null, z = null, P = f, M = f = 0, q = null; P !== null && M < h.length; M++) {
      P.index > M ? (q = P, P = null) : q = P.sibling;
      var I = y(p, P, h[M], k);
      if (I === null) {
        P === null && (P = q);
        break;
      }
      e && P && I.alternate === null && t(p, P), f = i(I, f, M), z === null ? b = I : z.sibling = I, z = I, P = q;
    }
    if (M === h.length) return n(p, P), ee && Zt(p, M), b;
    if (P === null) {
      for (; M < h.length; M++) P = w(p, h[M], k), P !== null && (f = i(P, f, M), z === null ? b = P : z.sibling = P, z = P);
      return ee && Zt(p, M), b;
    }
    for (P = r(p, P); M < h.length; M++) q = N(P, p, M, h[M], k), q !== null && (e && q.alternate !== null && P.delete(q.key === null ? M : q.key), f = i(q, f, M), z === null ? b = q : z.sibling = q, z = q);
    return e && P.forEach(function(pe) {
      return t(p, pe);
    }), ee && Zt(p, M), b;
  }
  function E(p, f, h, k) {
    var b = ar(h);
    if (typeof b != "function") throw Error(S(150));
    if (h = b.call(h), h == null) throw Error(S(151));
    for (var z = b = null, P = f, M = f = 0, q = null, I = h.next(); P !== null && !I.done; M++, I = h.next()) {
      P.index > M ? (q = P, P = null) : q = P.sibling;
      var pe = y(p, P, I.value, k);
      if (pe === null) {
        P === null && (P = q);
        break;
      }
      e && P && pe.alternate === null && t(p, P), f = i(pe, f, M), z === null ? b = pe : z.sibling = pe, z = pe, P = q;
    }
    if (I.done) return n(
      p,
      P
    ), ee && Zt(p, M), b;
    if (P === null) {
      for (; !I.done; M++, I = h.next()) I = w(p, I.value, k), I !== null && (f = i(I, f, M), z === null ? b = I : z.sibling = I, z = I);
      return ee && Zt(p, M), b;
    }
    for (P = r(p, P); !I.done; M++, I = h.next()) I = N(P, p, M, I.value, k), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? M : I.key), f = i(I, f, M), z === null ? b = I : z.sibling = I, z = I);
    return e && P.forEach(function(ot) {
      return t(p, ot);
    }), ee && Zt(p, M), b;
  }
  function G(p, f, h, k) {
    if (typeof h == "object" && h !== null && h.type === kn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case So:
          e: {
            for (var b = h.key, z = f; z !== null; ) {
              if (z.key === b) {
                if (b = h.type, b === kn) {
                  if (z.tag === 7) {
                    n(p, z.sibling), f = o(z, h.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (z.elementType === b || typeof b == "object" && b !== null && b.$$typeof === bt && Uu(b) === z.type) {
                  n(p, z.sibling), f = o(z, h.props), f.ref = pr(p, z, h), f.return = p, p = f;
                  break e;
                }
                n(p, z);
                break;
              } else t(p, z);
              z = z.sibling;
            }
            h.type === kn ? (f = on(h.props.children, p.mode, k, h.key), f.return = p, p = f) : (k = qo(h.type, h.key, h.props, null, p.mode, k), k.ref = pr(p, f, h), k.return = p, p = k);
          }
          return l(p);
        case _n:
          e: {
            for (z = h.key; f !== null; ) {
              if (f.key === z) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(p, f.sibling), f = o(f, h.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = bl(h, p.mode, k), f.return = p, p = f;
          }
          return l(p);
        case bt:
          return z = h._init, G(p, f, z(h._payload), k);
      }
      if (vr(h)) return C(p, f, h, k);
      if (ar(h)) return E(p, f, h, k);
      Mo(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(p, f.sibling), f = o(f, h), f.return = p, p = f) : (n(p, f), f = El(h, p.mode, k), f.return = p, p = f), l(p)) : n(p, f);
  }
  return G;
}
var Hn = Pd(!0), Rd = Pd(!1), di = Wt(null), fi = null, Ln = null, Ks = null;
function Ys() {
  Ks = Ln = fi = null;
}
function qs(e) {
  var t = di.current;
  J(di), e._currentValue = t;
}
function ss(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function On(e, t) {
  fi = e, Ks = Ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (Ks !== e) if (e = { context: e, memoizedValue: t, next: null }, Ln === null) {
    if (fi === null) throw Error(S(308));
    Ln = e, fi.dependencies = { lanes: 0, firstContext: e };
  } else Ln = Ln.next = e;
  return t;
}
var tn = null;
function Xs(e) {
  tn === null ? tn = [e] : tn.push(e);
}
function Md(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function Zs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function $d(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, _t(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Xs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _t(e, n);
}
function Vo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Os(e, n);
  }
}
function Hu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function pi(e, t, n, r) {
  var o = e.updateQueue;
  Tt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var c = u, m = c.next;
    c.next = null, l === null ? i = m : l.next = m, l = c;
    var x = e.alternate;
    x !== null && (x = x.updateQueue, u = x.lastBaseUpdate, u !== l && (u === null ? x.firstBaseUpdate = m : u.next = m, x.lastBaseUpdate = c));
  }
  if (i !== null) {
    var w = o.baseState;
    l = 0, x = m = c = null, u = i;
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
              w = oe({}, w, y);
              break e;
            case 2:
              Tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [u] : y.push(u));
      } else N = { eventTime: N, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, x === null ? (m = x = N, c = w) : x = x.next = N, l |= y;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (x === null && (c = w), o.baseState = c, o.firstBaseUpdate = m, o.lastBaseUpdate = x, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    un |= l, e.lanes = l, e.memoizedState = w;
  }
}
function Bu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var qr = {}, pt = Wt(qr), Fr = Wt(qr), Ur = Wt(qr);
function nn(e) {
  if (e === qr) throw Error(S(174));
  return e;
}
function Js(e, t) {
  switch (Y(Ur, t), Y(Fr, e), Y(pt, qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ul(t, e);
  }
  J(pt), Y(pt, t);
}
function Bn() {
  J(pt), J(Fr), J(Ur);
}
function Id(e) {
  nn(Ur.current);
  var t = nn(pt.current), n = Ul(t, e.type);
  t !== n && (Y(Fr, e), Y(pt, n));
}
function ea(e) {
  Fr.current === e && (J(pt), J(Fr));
}
var ne = Wt(0);
function mi(e) {
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
var _l = [];
function ta() {
  for (var e = 0; e < _l.length; e++) _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var Wo = St.ReactCurrentDispatcher, kl = St.ReactCurrentBatchConfig, an = 0, re = null, de = null, ge = null, hi = !1, Cr = !1, Hr = 0, xh = 0;
function ke() {
  throw Error(S(321));
}
function na(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
  return !0;
}
function ra(e, t, n, r, o, i) {
  if (an = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wo.current = e === null || e.memoizedState === null ? Sh : Nh, e = n(r, o), Cr) {
    i = 0;
    do {
      if (Cr = !1, Hr = 0, 25 <= i) throw Error(S(301));
      i += 1, ge = de = null, t.updateQueue = null, Wo.current = Ch, e = n(r, o);
    } while (Cr);
  }
  if (Wo.current = gi, t = de !== null && de.next !== null, an = 0, ge = de = re = null, hi = !1, t) throw Error(S(300));
  return e;
}
function oa() {
  var e = Hr !== 0;
  return Hr = 0, e;
}
function ct() {
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
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = de, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var u = l = null, c = null, m = i;
    do {
      var x = m.lane;
      if ((an & x) === x) c !== null && (c = c.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
      else {
        var w = {
          lane: x,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null
        };
        c === null ? (u = c = w, l = r) : c = c.next = w, re.lanes |= x, un |= x;
      }
      m = m.next;
    } while (m !== null && m !== i);
    c === null ? l = r : c.next = u, rt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, re.lanes |= i, un |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nl(e) {
  var t = Ke(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    rt(i, t.memoizedState) || (Pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Od() {
}
function Ad(e, t) {
  var n = re, r = Ke(), o = t(), i = !rt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Pe = !0), r = r.queue, ia(Ud.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vr(9, Fd.bind(null, n, r, o, t), void 0, null), ve === null) throw Error(S(349));
    an & 30 || Dd(n, t, o);
  }
  return o;
}
function Dd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Hd(t) && Bd(e);
}
function Ud(e, t, n) {
  return n(function() {
    Hd(t) && Bd(e);
  });
}
function Hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function Bd(e) {
  var t = _t(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Vu(e) {
  var t = ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: e }, t.queue = e, e = e.dispatch = kh.bind(null, re, e), [t.memoizedState, e];
}
function Vr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Vd() {
  return Ke().memoizedState;
}
function Go(e, t, n, r) {
  var o = ct();
  re.flags |= e, o.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ti(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var l = de.memoizedState;
    if (i = l.destroy, r !== null && na(r, l.deps)) {
      o.memoizedState = Vr(t, n, i, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = Vr(1 | t, n, i, r);
}
function Wu(e, t) {
  return Go(8390656, 8, e, t);
}
function ia(e, t) {
  return Ti(2048, 8, e, t);
}
function Wd(e, t) {
  return Ti(4, 2, e, t);
}
function Gd(e, t) {
  return Ti(4, 4, e, t);
}
function Qd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Kd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ti(4, 4, Qd.bind(null, t, e), n);
}
function la() {
}
function Yd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && na(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && na(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xd(e, t, n) {
  return an & 21 ? (rt(n, t) || (n = nd(), re.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function wh(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = kl.transition;
  kl.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, kl.transition = r;
  }
}
function Zd() {
  return Ke().memoizedState;
}
function _h(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Jd(e)) ef(t, n);
  else if (n = Md(e, t, n, r), n !== null) {
    var o = Ee();
    nt(n, e, r, o), tf(n, t, r);
  }
}
function kh(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jd(e)) ef(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = u, rt(u, l)) {
        var c = t.interleaved;
        c === null ? (o.next = o, Xs(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Md(e, t, o, r), n !== null && (o = Ee(), nt(n, e, r, o), tf(n, t, r));
  }
}
function Jd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function ef(e, t) {
  Cr = hi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function tf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Os(e, n);
  }
}
var gi = { readContext: Qe, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, Sh = { readContext: Qe, useCallback: function(e, t) {
  return ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Wu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(
    4194308,
    4,
    Qd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Go(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Go(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _h.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Vu, useDebugValue: la, useDeferredValue: function(e) {
  return ct().memoizedState = e;
}, useTransition: function() {
  var e = Vu(!1), t = e[0];
  return e = wh.bind(null, e[1]), ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = ct();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(S(349));
    an & 30 || Dd(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Wu(Ud.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Vr(9, Fd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ct(), t = ve.identifierPrefix;
  if (ee) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Nh = {
  readContext: Qe,
  useCallback: Yd,
  useContext: Qe,
  useEffect: ia,
  useImperativeHandle: Kd,
  useInsertionEffect: Wd,
  useLayoutEffect: Gd,
  useMemo: qd,
  useReducer: Sl,
  useRef: Vd,
  useState: function() {
    return Sl(Br);
  },
  useDebugValue: la,
  useDeferredValue: function(e) {
    var t = Ke();
    return Xd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Sl(Br)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: Od,
  useSyncExternalStore: Ad,
  useId: Zd,
  unstable_isNewReconciler: !1
}, Ch = { readContext: Qe, useCallback: Yd, useContext: Qe, useEffect: ia, useImperativeHandle: Kd, useInsertionEffect: Wd, useLayoutEffect: Gd, useMemo: qd, useReducer: Nl, useRef: Vd, useState: function() {
  return Nl(Br);
}, useDebugValue: la, useDeferredValue: function(e) {
  var t = Ke();
  return de === null ? t.memoizedState = e : Xd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Nl(Br)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: Od, useSyncExternalStore: Ad, useId: Zd, unstable_isNewReconciler: !1 };
function Ze(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function as(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = { isMounted: function(e) {
  return (e = e._reactInternals) ? fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Ft(e), i = yt(r, o);
  i.payload = t, n != null && (i.callback = n), t = At(e, i, o), t !== null && (nt(t, e, o, r), Vo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Ft(e), i = yt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = At(e, i, o), t !== null && (nt(t, e, o, r), Vo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Ft(e), o = yt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (nt(t, e, r, n), Vo(t, e, r));
} };
function Gu(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(o, i) : !0;
}
function nf(e, t, n) {
  var r = !1, o = Bt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Qe(i) : (o = Me(t) ? ln : Ce.current, r = t.contextTypes, i = (r = r != null) ? Fn(e, o) : Bt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Li, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Qu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function us(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Zs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Qe(i) : (i = Me(t) ? ln : Ce.current, o.context = Fn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (as(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Li.enqueueReplaceState(o, o.state, null), pi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jp(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jh = typeof WeakMap == "function" ? WeakMap : Map;
function rf(e, t, n) {
  n = yt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    yi || (yi = !0, ws = r), cs(e, t);
  }, n;
}
function of(e, t, n) {
  n = yt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      cs(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    cs(e, t), typeof r != "function" && (Dt === null ? Dt = /* @__PURE__ */ new Set([this]) : Dt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ku(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Fh.bind(null, e, t, n), t.then(e, e));
}
function Yu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qu(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var Eh = St.ReactCurrentOwner, Pe = !1;
function je(e, t, n, r) {
  t.child = e === null ? Rd(t, null, n, r) : Hn(t, e.child, n, r);
}
function Xu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return On(t, o), r = ra(e, t, n, r, i, o), n = oa(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && n && Ws(t), t.flags |= 1, je(e, t, r, o), t.child);
}
function Zu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ma(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, lf(e, t, i, r, o)) : (e = qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ir, n(l, r) && e.ref === t.ref) return kt(e, t, o);
  }
  return t.flags |= 1, e = Ut(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ir(i, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, kt(e, t, o);
  }
  return ds(e, t, n, r, o);
}
function sf(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Pn, Oe), Oe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Pn, Oe), Oe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(Pn, Oe), Oe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(Pn, Oe), Oe |= r;
  return je(e, t, o, n), t.child;
}
function af(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ds(e, t, n, r, o) {
  var i = Me(n) ? ln : Ce.current;
  return i = Fn(t, i), On(t, o), n = ra(e, t, n, r, i, o), r = oa(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && r && Ws(t), t.flags |= 1, je(e, t, n, o), t.child);
}
function Ju(e, t, n, r, o) {
  if (Me(n)) {
    var i = !0;
    ai(t);
  } else i = !1;
  if (On(t, o), t.stateNode === null) Qo(e, t), nf(t, n, r), us(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var c = l.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Qe(m) : (m = Me(n) ? ln : Ce.current, m = Fn(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    w || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || c !== m) && Qu(t, l, r, m), Tt = !1;
    var y = t.memoizedState;
    l.state = y, pi(t, r, l, o), c = t.memoizedState, u !== r || y !== c || Re.current || Tt ? (typeof x == "function" && (as(t, n, x, r), c = t.memoizedState), (u = Tt || Gu(t, n, u, r, y, c, m)) ? (w || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), l.props = r, l.state = c, l.context = m, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, $d(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : Ze(t.type, u), l.props = m, w = t.pendingProps, y = l.context, c = n.contextType, typeof c == "object" && c !== null ? c = Qe(c) : (c = Me(n) ? ln : Ce.current, c = Fn(t, c));
    var N = n.getDerivedStateFromProps;
    (x = typeof N == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== w || y !== c) && Qu(t, l, r, c), Tt = !1, y = t.memoizedState, l.state = y, pi(t, r, l, o);
    var C = t.memoizedState;
    u !== w || y !== C || Re.current || Tt ? (typeof N == "function" && (as(t, n, N, r), C = t.memoizedState), (m = Tt || Gu(t, n, m, r, y, C, c) || !1) ? (x || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, C, c), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, C, c)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), l.props = r, l.state = C, l.context = c, r = m) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fs(e, t, n, r, i, o);
}
function fs(e, t, n, r, o, i) {
  af(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Au(t, n, !1), kt(e, t, i);
  r = t.stateNode, Eh.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Hn(t, e.child, null, i), t.child = Hn(t, null, u, i)) : je(e, t, u, i), t.memoizedState = r.state, o && Au(t, n, !0), t.child;
}
function uf(e) {
  var t = e.stateNode;
  t.pendingContext ? Ou(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ou(e, t.context, !1), Js(e, t.containerInfo);
}
function ec(e, t, n, r, o) {
  return Un(), Qs(o), t.flags |= 256, je(e, t, n, r), t.child;
}
var ps = { dehydrated: null, treeContext: null, retryLane: 0 };
function ms(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cf(e, t, n) {
  var r = t.pendingProps, o = ne.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Y(ne, o & 1), e === null)
    return ls(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Ri(l, r, 0, null), e = on(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ms(n), t.memoizedState = ps, e) : sa(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return bh(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Ut(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = Ut(u, i) : (i = on(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? ms(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ps, r;
  }
  return i = e.child, e = i.sibling, r = Ut(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Ri({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function $o(e, t, n, r) {
  return r !== null && Qs(r), Hn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function bh(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cl(Error(S(422))), $o(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ri({ mode: "visible", children: r.children }, o, 0, null), i = on(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Hn(t, e.child, null, l), t.child.memoizedState = ms(l), t.memoizedState = ps, i);
  if (!(t.mode & 1)) return $o(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(S(419)), r = Cl(i, r, void 0), $o(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Pe || u) {
    if (r = ve, r !== null) {
      switch (l & -l) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, _t(e, o), nt(r, e, o, -1));
    }
    return pa(), r = Cl(Error(S(421))), $o(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Uh.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ae = Ot(o.nextSibling), De = t, ee = !0, et = null, e !== null && (Be[Ve++] = gt, Be[Ve++] = vt, Be[Ve++] = sn, gt = e.id, vt = e.overflow, sn = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ss(e.return, t, n);
}
function jl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function df(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
      else if (e.tag === 19) tc(e, n, t);
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
  if (Y(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && mi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), jl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && mi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      jl(t, !0, n, null, i);
      break;
    case "together":
      jl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Th(e, t, n) {
  switch (t.tag) {
    case 3:
      uf(t), Un();
      break;
    case 5:
      Id(t);
      break;
    case 1:
      Me(t.type) && ai(t);
      break;
    case 4:
      Js(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Y(di, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? cf(e, t, n) : (Y(ne, ne.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      Y(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return df(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Y(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sf(e, t, n);
  }
  return kt(e, t, n);
}
var ff, hs, pf, mf;
ff = function(e, t) {
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
hs = function() {
};
pf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, nn(pt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Ol(e, o), r = Ol(e, r), i = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Fl(e, o), r = Fl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = li);
    }
    Hl(n, r);
    var l;
    n = null;
    for (m in o) if (!r.hasOwnProperty(m) && o.hasOwnProperty(m) && o[m] != null) if (m === "style") {
      var u = o[m];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Tr.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = o != null ? o[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in c) c.hasOwnProperty(l) && u[l] !== c[l] && (n || (n = {}), n[l] = c[l]);
      } else n || (i || (i = []), i.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (i = i || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Tr.hasOwnProperty(m) ? (c != null && m === "onScroll" && Z("scroll", e), i || u === c || (i = [])) : (i = i || []).push(m, c));
    }
    n && (i = i || []).push("style", n);
    var m = i;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
mf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
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
function Lh(e, t, n) {
  var r = t.pendingProps;
  switch (Gs(t), t.tag) {
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
      return Me(t.type) && si(), Se(t), null;
    case 3:
      return r = t.stateNode, Bn(), J(Re), J(Ce), ta(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ro(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (Ss(et), et = null))), hs(e, t), Se(t), null;
    case 5:
      ea(t);
      var o = nn(Ur.current);
      if (n = t.type, e !== null && t.stateNode != null) pf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return Se(t), null;
        }
        if (e = nn(pt.current), Ro(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[dt] = t, r[Dr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < xr.length; o++) Z(xr[o], r);
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
              cu(r, i), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Z("invalid", r);
              break;
            case "textarea":
              fu(r, i), Z("invalid", r);
          }
          Hl(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Po(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Po(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Tr.hasOwnProperty(l) && u != null && l === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              No(r), du(r, i, !0);
              break;
            case "textarea":
              No(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = li);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[dt] = t, e[Dr] = r, ff(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Bl(n, r), n) {
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
                for (o = 0; o < xr.length; o++) Z(xr[o], e);
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
                cu(e, r), o = Ol(e, r), Z("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                fu(e, r), o = Fl(e, r), Z("invalid", e);
                break;
              default:
                o = r;
            }
            Hl(n, o), u = o;
            for (i in u) if (u.hasOwnProperty(i)) {
              var c = u[i];
              i === "style" ? Vc(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Hc(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Lr(e, c) : typeof c == "number" && Lr(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Tr.hasOwnProperty(i) ? c != null && i === "onScroll" && Z("scroll", e) : c != null && zs(e, i, c, l));
            }
            switch (n) {
              case "input":
                No(e), du(e, r, !1);
                break;
              case "textarea":
                No(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Rn(e, !!r.multiple, i, !1) : r.defaultValue != null && Rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = li);
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
      if (e && t.stateNode != null) mf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = nn(Ur.current), nn(pt.current), Ro(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (i = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Po(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Po(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (J(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Ae !== null && t.mode & 1 && !(t.flags & 128)) zd(), Un(), t.flags |= 98560, i = !1;
        else if (i = Ro(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(S(317));
            i[dt] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), i = !1;
        } else et !== null && (Ss(et), et = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : pa())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return Bn(), hs(e, t), e === null && Or(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return qs(t.type._context), Se(t), null;
    case 17:
      return Me(t.type) && si(), Se(t), null;
    case 19:
      if (J(ne), i = t.memoizedState, i === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) mr(i, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = mi(e), l !== null) {
            for (t.flags |= 128, mr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ae() > Wn && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = mi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee) return Se(t), null;
        } else 2 * ae() - i.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = ne.current, Y(ne, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return fa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function zh(e, t) {
  switch (Gs(t), t.tag) {
    case 1:
      return Me(t.type) && si(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Bn(), J(Re), J(Ce), ta(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ea(t), null;
    case 13:
      if (J(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ne), null;
    case 4:
      return Bn(), null;
    case 10:
      return qs(t.type._context), null;
    case 22:
    case 23:
      return fa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1, Ne = !1, Ph = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function gs(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var nc = !1;
function Rh(e, t) {
  if (Jl = ri, e = yd(), Vs(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, u = -1, c = -1, m = 0, x = 0, w = e, y = null;
        t: for (; ; ) {
          for (var N; w !== n || o !== 0 && w.nodeType !== 3 || (u = l + o), w !== i || r !== 0 && w.nodeType !== 3 || (c = l + r), w.nodeType === 3 && (l += w.nodeValue.length), (N = w.firstChild) !== null; )
            y = w, w = N;
          for (; ; ) {
            if (w === e) break t;
            if (y === n && ++m === o && (u = l), y === i && ++x === r && (c = l), (N = w.nextSibling) !== null) break;
            w = y, y = w.parentNode;
          }
          w = N;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (es = { focusedElem: e, selectionRange: n }, ri = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var E = C.memoizedProps, G = C.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Ze(t.type, E), G);
            p.__reactInternalSnapshotBeforeUpdate = f;
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
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return C = nc, nc = !1, C;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && gs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function zi(e, t) {
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
function vs(e) {
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
function hf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[Dr], delete t[rs], delete t[hh], delete t[gh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function gf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || gf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = li));
  else if (r !== 4 && (e = e.child, e !== null)) for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), e = e.sibling;
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), e = e.sibling;
}
var ye = null, Je = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) vf(e, t, n), n = n.sibling;
}
function vf(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function") try {
    ft.onCommitFiberUnmount(Si, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || zn(n, t);
    case 6:
      var r = ye, o = Je;
      ye = null, Et(e, t, n), ye = r, Je = o, ye !== null && (Je ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (Je ? (e = ye, n = n.stateNode, e.nodeType === 8 ? xl(e.parentNode, n) : e.nodeType === 1 && xl(e, n), Mr(e)) : xl(ye, n.stateNode));
      break;
    case 4:
      r = ye, o = Je, ye = n.stateNode.containerInfo, Je = !0, Et(e, t, n), ye = r, Je = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && gs(n, t, l), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Ne && (zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Et(e, t, n), Ne = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ph()), t.forEach(function(r) {
      var o = Hh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ye = u.stateNode, Je = !1;
            break e;
          case 3:
            ye = u.stateNode.containerInfo, Je = !0;
            break e;
          case 4:
            ye = u.stateNode.containerInfo, Je = !0;
            break e;
        }
        u = u.return;
      }
      if (ye === null) throw Error(S(160));
      vf(i, l, o), ye = null, Je = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (m) {
      le(o, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) yf(t, e), t = t.sibling;
}
function yf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), ut(e), r & 4) {
        try {
          jr(3, e, e.return), zi(3, e);
        } catch (E) {
          le(e, e.return, E);
        }
        try {
          jr(5, e, e.return);
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 1:
      Xe(t, e), ut(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (Xe(t, e), ut(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Lr(o, "");
        } catch (E) {
          le(e, e.return, E);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Dc(o, i), Bl(u, l);
          var m = Bl(u, i);
          for (l = 0; l < c.length; l += 2) {
            var x = c[l], w = c[l + 1];
            x === "style" ? Vc(o, w) : x === "dangerouslySetInnerHTML" ? Hc(o, w) : x === "children" ? Lr(o, w) : zs(o, x, w, m);
          }
          switch (u) {
            case "input":
              Al(o, i);
              break;
            case "textarea":
              Fc(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var N = i.value;
              N != null ? Rn(o, !!i.multiple, N, !1) : y !== !!i.multiple && (i.defaultValue != null ? Rn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Rn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Dr] = i;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Xe(t, e), ut(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (E) {
          le(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Xe(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Mr(t.containerInfo);
      } catch (E) {
        le(e, e.return, E);
      }
      break;
    case 4:
      Xe(t, e), ut(e);
      break;
    case 13:
      Xe(t, e), ut(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ca = ae())), r & 4 && oc(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (m = Ne) || x, Xe(t, e), Ne = m) : Xe(t, e), ut(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (L = e, x = e.child; x !== null; ) {
          for (w = L = x; L !== null; ) {
            switch (y = L, N = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, y, y.return);
                break;
              case 1:
                zn(y, y.return);
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
                zn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  lc(w);
                  continue;
                }
            }
            N !== null ? (N.return = y, L = N) : lc(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                o = w.stateNode, m ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, l = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = Bc("display", l));
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
      Xe(t, e), ut(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      Xe(
        t,
        e
      ), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gf(n)) {
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
          r.flags & 32 && (Lr(o, ""), r.flags &= -33);
          var i = rc(e);
          xs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = rc(e);
          ys(e, u, l);
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
function Mh(e, t, n) {
  L = e, xf(e);
}
function xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Io;
      if (!l) {
        var u = o.alternate, c = u !== null && u.memoizedState !== null || Ne;
        u = Io;
        var m = Ne;
        if (Io = l, (Ne = c) && !m) for (L = o; L !== null; ) l = L, c = l.child, l.tag === 22 && l.memoizedState !== null ? sc(o) : c !== null ? (c.return = l, L = c) : sc(o);
        for (; i !== null; ) L = i, xf(i), i = i.sibling;
        L = o, Io = u, Ne = m;
      }
      ic(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : ic(e);
  }
}
function ic(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || zi(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Bu(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Bu(t, l, n);
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
                  w !== null && Mr(w);
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
        Ne || t.flags & 512 && vs(t);
      } catch (y) {
        le(t, t.return, y);
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
function lc(e) {
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
function sc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
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
          var i = t.return;
          try {
            vs(t);
          } catch (c) {
            le(t, i, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            vs(t);
          } catch (c) {
            le(t, l, c);
          }
      }
    } catch (c) {
      le(t, t.return, c);
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
var $h = Math.ceil, vi = St.ReactCurrentDispatcher, aa = St.ReactCurrentOwner, Ge = St.ReactCurrentBatchConfig, B = 0, ve = null, ue = null, xe = 0, Oe = 0, Pn = Wt(0), fe = 0, Wr = null, un = 0, Pi = 0, ua = 0, Er = null, ze = null, ca = 0, Wn = 1 / 0, mt = null, yi = !1, ws = null, Dt = null, Oo = !1, Rt = null, xi = 0, br = 0, _s = null, Ko = -1, Yo = 0;
function Ee() {
  return B & 6 ? ae() : Ko !== -1 ? Ko : Ko = ae();
}
function Ft(e) {
  return e.mode & 1 ? B & 2 && xe !== 0 ? xe & -xe : yh.transition !== null ? (Yo === 0 && (Yo = nd()), Yo) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ud(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < br) throw br = 0, _s = null, Error(S(185));
  Qr(e, n, r), (!(B & 2) || e !== ve) && (e === ve && (!(B & 2) && (Pi |= n), fe === 4 && zt(e, xe)), $e(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Wn = ae() + 500, bi && Gt()));
}
function $e(e, t) {
  var n = e.callbackNode;
  ym(e, t);
  var r = ni(e, e === ve ? xe : 0);
  if (r === 0) n !== null && gu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gu(n), t === 1) e.tag === 0 ? vh(ac.bind(null, e)) : bd(ac.bind(null, e)), ph(function() {
      !(B & 6) && Gt();
    }), n = null;
    else {
      switch (rd(r)) {
        case 1:
          n = Is;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = ti;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = ti;
      }
      n = Ef(n, wf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function wf(e, t) {
  if (Ko = -1, Yo = 0, B & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = ni(e, e === ve ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = kf();
    (ve !== e || xe !== t) && (mt = null, Wn = ae() + 500, rn(e, t));
    do
      try {
        Ah();
        break;
      } catch (u) {
        _f(e, u);
      }
    while (!0);
    Ys(), vi.current = i, B = o, ue !== null ? t = 0 : (ve = null, xe = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (o = Kl(e), o !== 0 && (r = o, t = ks(e, o))), t === 1) throw n = Wr, rn(e, 0), zt(e, r), $e(e, ae()), n;
    if (t === 6) zt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ih(o) && (t = wi(e, r), t === 2 && (i = Kl(e), i !== 0 && (r = i, t = ks(e, i))), t === 1)) throw n = Wr, rn(e, 0), zt(e, r), $e(e, ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Jt(e, ze, mt);
          break;
        case 3:
          if (zt(e, r), (r & 130023424) === r && (t = ca + 500 - ae(), 10 < t)) {
            if (ni(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ns(Jt.bind(null, e, ze, mt), t);
            break;
          }
          Jt(e, ze, mt);
          break;
        case 4:
          if (zt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - tt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $h(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ns(Jt.bind(null, e, ze, mt), r);
            break;
          }
          Jt(e, ze, mt);
          break;
        case 5:
          Jt(e, ze, mt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return $e(e, ae()), e.callbackNode === n ? wf.bind(null, e) : null;
}
function ks(e, t) {
  var n = Er;
  return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = wi(e, t), e !== 2 && (t = ze, ze = n, t !== null && Ss(t)), e;
}
function Ss(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function Ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!rt(i(), o)) return !1;
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
  for (t &= ~ua, t &= ~Pi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ac(e) {
  if (B & 6) throw Error(S(327));
  An();
  var t = ni(e, 0);
  if (!(t & 1)) return $e(e, ae()), null;
  var n = wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && (t = r, n = ks(e, r));
  }
  if (n === 1) throw n = Wr, rn(e, 0), zt(e, t), $e(e, ae()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, ze, mt), $e(e, ae()), null;
}
function da(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (Wn = ae() + 500, bi && Gt());
  }
}
function cn(e) {
  Rt !== null && Rt.tag === 0 && !(B & 6) && An();
  var t = B;
  B |= 1;
  var n = Ge.transition, r = W;
  try {
    if (Ge.transition = null, W = 1, e) return e();
  } finally {
    W = r, Ge.transition = n, B = t, !(B & 6) && Gt();
  }
}
function fa() {
  Oe = Pn.current, J(Pn);
}
function rn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fh(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Gs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && si();
        break;
      case 3:
        Bn(), J(Re), J(Ce), ta();
        break;
      case 5:
        ea(r);
        break;
      case 4:
        Bn();
        break;
      case 13:
        J(ne);
        break;
      case 19:
        J(ne);
        break;
      case 10:
        qs(r.type._context);
        break;
      case 22:
      case 23:
        fa();
    }
    n = n.return;
  }
  if (ve = e, ue = e = Ut(e.current, null), xe = Oe = t, fe = 0, Wr = null, ua = Pi = un = 0, ze = Er = null, tn !== null) {
    for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    tn = null;
  }
  return e;
}
function _f(e, t) {
  do {
    var n = ue;
    try {
      if (Ys(), Wo.current = gi, hi) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        hi = !1;
      }
      if (an = 0, ge = de = re = null, Cr = !1, Hr = 0, aa.current = null, n === null || n.return === null) {
        fe = 1, Wr = t, ue = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, c = t;
        if (t = xe, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var y = x.alternate;
            y ? (x.updateQueue = y.updateQueue, x.memoizedState = y.memoizedState, x.lanes = y.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var N = Yu(l);
          if (N !== null) {
            N.flags &= -257, qu(N, l, u, i, t), N.mode & 1 && Ku(i, m, t), t = N, c = m;
            var C = t.updateQueue;
            if (C === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(c), t.updateQueue = E;
            } else C.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ku(i, m, t), pa();
              break e;
            }
            c = Error(S(426));
          }
        } else if (ee && u.mode & 1) {
          var G = Yu(l);
          if (G !== null) {
            !(G.flags & 65536) && (G.flags |= 256), qu(G, l, u, i, t), Qs(Vn(c, u));
            break e;
          }
        }
        i = c = Vn(c, u), fe !== 4 && (fe = 2), Er === null ? Er = [i] : Er.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = rf(i, c, t);
              Hu(i, p);
              break e;
            case 1:
              u = c;
              var f = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Dt === null || !Dt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = of(i, u, t);
                Hu(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Nf(n);
    } catch (b) {
      t = b, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kf() {
  var e = vi.current;
  return vi.current = gi, e === null ? gi : e;
}
function pa() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(un & 268435455) && !(Pi & 268435455) || zt(ve, xe);
}
function wi(e, t) {
  var n = B;
  B |= 2;
  var r = kf();
  (ve !== e || xe !== t) && (mt = null, rn(e, t));
  do
    try {
      Oh();
      break;
    } catch (o) {
      _f(e, o);
    }
  while (!0);
  if (Ys(), B = n, vi.current = r, ue !== null) throw Error(S(261));
  return ve = null, xe = 0, fe;
}
function Oh() {
  for (; ue !== null; ) Sf(ue);
}
function Ah() {
  for (; ue !== null && !um(); ) Sf(ue);
}
function Sf(e) {
  var t = jf(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? Nf(e) : ue = t, aa.current = null;
}
function Nf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zh(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ue = null;
        return;
      }
    } else if (n = Lh(n, t, Oe), n !== null) {
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
function Jt(e, t, n) {
  var r = W, o = Ge.transition;
  try {
    Ge.transition = null, W = 1, Dh(e, t, n, r);
  } finally {
    Ge.transition = o, W = r;
  }
  return null;
}
function Dh(e, t, n, r) {
  do
    An();
  while (Rt !== null);
  if (B & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (xm(e, i), e === ve && (ue = ve = null, xe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Oo || (Oo = !0, Ef(ti, function() {
    return An(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ge.transition, Ge.transition = null;
    var l = W;
    W = 1;
    var u = B;
    B |= 4, aa.current = null, Rh(e, n), yf(n, e), ih(es), ri = !!Jl, es = Jl = null, e.current = n, Mh(n), cm(), B = u, W = l, Ge.transition = i;
  } else e.current = n;
  if (Oo && (Oo = !1, Rt = e, xi = o), i = e.pendingLanes, i === 0 && (Dt = null), pm(n.stateNode), $e(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yi) throw yi = !1, e = ws, ws = null, e;
  return xi & 1 && e.tag !== 0 && An(), i = e.pendingLanes, i & 1 ? e === _s ? br++ : (br = 0, _s = e) : br = 0, Gt(), null;
}
function An() {
  if (Rt !== null) {
    var e = rd(xi), t = Ge.transition, n = W;
    try {
      if (Ge.transition = null, W = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, xi = 0, B & 6) throw Error(S(331));
        var o = B;
        for (B |= 4, L = e.current; L !== null; ) {
          var i = L, l = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var m = u[c];
                for (L = m; L !== null; ) {
                  var x = L;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, x, i);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, L = w;
                  else for (; L !== null; ) {
                    x = L;
                    var y = x.sibling, N = x.return;
                    if (hf(x), x === m) {
                      L = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = N, L = y;
                      break;
                    }
                    L = N;
                  }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var E = C.child;
                if (E !== null) {
                  C.child = null;
                  do {
                    var G = E.sibling;
                    E.sibling = null, E = G;
                  } while (E !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, L = l;
          else e: for (; L !== null; ) {
            if (i = L, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                jr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, L = p;
              break e;
            }
            L = i.return;
          }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, L = h;
          else e: for (l = f; L !== null; ) {
            if (u = L, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  zi(9, u);
              }
            } catch (b) {
              le(u, u.return, b);
            }
            if (u === l) {
              L = null;
              break e;
            }
            var k = u.sibling;
            if (k !== null) {
              k.return = u.return, L = k;
              break e;
            }
            L = u.return;
          }
        }
        if (B = o, Gt(), ft && typeof ft.onPostCommitFiberRoot == "function") try {
          ft.onPostCommitFiberRoot(Si, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Ge.transition = t;
    }
  }
  return !1;
}
function uc(e, t, n) {
  t = Vn(n, t), t = rf(e, t, 1), e = At(e, t, 1), t = Ee(), e !== null && (Qr(e, 1, t), $e(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) uc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dt === null || !Dt.has(r))) {
        e = Vn(n, e), e = of(t, e, 1), t = At(t, e, 1), e = Ee(), t !== null && (Qr(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Fh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (xe & n) === n && (fe === 4 || fe === 3 && (xe & 130023424) === xe && 500 > ae() - ca ? rn(e, 0) : ua |= n), $e(e, t);
}
function Cf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Eo, Eo <<= 1, !(Eo & 130023424) && (Eo = 4194304)) : t = 1);
  var n = Ee();
  e = _t(e, t), e !== null && (Qr(e, t, n), $e(e, n));
}
function Uh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Cf(e, n);
}
function Hh(e, t) {
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
  r !== null && r.delete(t), Cf(e, n);
}
var jf;
jf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, Th(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, ee && t.flags & 1048576 && Td(t, ci, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qo(e, t), e = t.pendingProps;
      var o = Fn(t, Ce.current);
      On(t, n), o = ra(null, t, r, e, o, n);
      var i = oa();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (i = !0, ai(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Zs(t), o.updater = Li, t.stateNode = o, o._reactInternals = t, us(t, r, e, n), t = fs(null, t, r, !0, i, n)) : (t.tag = 0, ee && i && Ws(t), je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Vh(r), e = Ze(r, e), o) {
          case 0:
            t = ds(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Zu(null, t, r, Ze(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ze(r, o), ds(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ze(r, o), Ju(e, t, r, o, n);
    case 3:
      e: {
        if (uf(t), e === null) throw Error(S(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, $d(e, t), pi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Vn(Error(S(423)), t), t = ec(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Vn(Error(S(424)), t), t = ec(e, t, r, n, o);
          break e;
        } else for (Ae = Ot(t.stateNode.containerInfo.firstChild), De = t, ee = !0, et = null, n = Rd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Id(t), e === null && ls(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ts(r, o) ? l = null : i !== null && ts(r, i) && (t.flags |= 32), af(e, t), je(e, t, l, n), t.child;
    case 6:
      return e === null && ls(t), null;
    case 13:
      return cf(e, t, n);
    case 4:
      return Js(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ze(r, o), Xu(e, t, r, o, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Y(di, r._currentValue), r._currentValue = l, i !== null) if (rt(i.value, l)) {
          if (i.children === o.children && !Re.current) {
            t = kt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (i.tag === 1) {
                  c = yt(-1, n & -n), c.tag = 2;
                  var m = i.updateQueue;
                  if (m !== null) {
                    m = m.shared;
                    var x = m.pending;
                    x === null ? c.next = c : (c.next = x.next, x.next = c), m.pending = c;
                  }
                }
                i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), ss(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(S(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ss(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        je(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, On(t, n), o = Qe(o), r = r(o), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ze(r, t.pendingProps), o = Ze(r.type, o), Zu(e, t, r, o, n);
    case 15:
      return lf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ze(r, o), Qo(e, t), t.tag = 1, Me(r) ? (e = !0, ai(t)) : e = !1, On(t, n), nf(t, r, o), us(t, r, o, n), fs(null, t, r, !0, e, n);
    case 19:
      return df(e, t, n);
    case 22:
      return sf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Ef(e, t) {
  return Jc(e, t);
}
function Bh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Bh(e, t, n, r);
}
function ma(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Vh(e) {
  if (typeof e == "function") return ma(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rs) return 11;
    if (e === Ms) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") ma(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case kn:
      return on(n.children, o, i, t);
    case Ps:
      l = 8, o |= 8;
      break;
    case Rl:
      return e = We(12, n, t, o | 2), e.elementType = Rl, e.lanes = i, e;
    case Ml:
      return e = We(13, n, t, o), e.elementType = Ml, e.lanes = i, e;
    case $l:
      return e = We(19, n, t, o), e.elementType = $l, e.lanes = i, e;
    case Ic:
      return Ri(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Mc:
          l = 10;
          break e;
        case $c:
          l = 9;
          break e;
        case Rs:
          l = 11;
          break e;
        case Ms:
          l = 14;
          break e;
        case bt:
          l = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = We(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function on(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function Ri(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = Ic, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function El(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ha(e, t, n, r, o, i, l, u, c) {
  return e = new Wh(e, t, n, u, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = We(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zs(i), e;
}
function Gh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function bf(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(S(170));
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
    if (Me(n)) return Ed(e, n, t);
  }
  return t;
}
function Tf(e, t, n, r, o, i, l, u, c) {
  return e = ha(n, r, !0, e, o, i, l, u, c), e.context = bf(null), n = e.current, r = Ee(), o = Ft(n), i = yt(r, o), i.callback = t ?? null, At(n, i, o), e.current.lanes = o, Qr(e, o, r), $e(e, r), e;
}
function Mi(e, t, n, r) {
  var o = t.current, i = Ee(), l = Ft(o);
  return n = bf(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, l), e !== null && (nt(e, o, l, i), Vo(e, o, l)), l;
}
function _i(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ga(e, t) {
  cc(e, t), (e = e.alternate) && cc(e, t);
}
function Qh() {
  return null;
}
var Lf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function va(e) {
  this._internalRoot = e;
}
$i.prototype.render = va.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Mi(e, t, null, null);
};
$i.prototype.unmount = va.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function() {
      Mi(null, e, null, null);
    }), t[wt] = null;
  }
};
function $i(e) {
  this._internalRoot = e;
}
$i.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ld();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
    Lt.splice(n, 0, e), n === 0 && ad(e);
  }
};
function ya(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ii(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dc() {
}
function Kh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var m = _i(l);
        i.call(m);
      };
    }
    var l = Tf(t, r, e, 0, null, !1, !1, "", dc);
    return e._reactRootContainer = l, e[wt] = l.current, Or(e.nodeType === 8 ? e.parentNode : e), cn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = _i(c);
      u.call(m);
    };
  }
  var c = ha(e, 0, !1, null, null, !1, !1, "", dc);
  return e._reactRootContainer = c, e[wt] = c.current, Or(e.nodeType === 8 ? e.parentNode : e), cn(function() {
    Mi(t, c, n, r);
  }), c;
}
function Oi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var c = _i(l);
        u.call(c);
      };
    }
    Mi(t, l, e, o);
  } else l = Kh(n, t, e, o, r);
  return _i(l);
}
od = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (Os(t, n | 1), $e(t, ae()), !(B & 6) && (Wn = ae() + 500, Gt()));
      }
      break;
    case 13:
      cn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Ee();
          nt(r, e, 1, o);
        }
      }), ga(e, 1);
  }
};
As = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ee();
      nt(t, e, 134217728, n);
    }
    ga(e, 134217728);
  }
};
id = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = _t(e, t);
    if (n !== null) {
      var r = Ee();
      nt(n, e, t, r);
    }
    ga(e, t);
  }
};
ld = function() {
  return W;
};
sd = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Wl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Al(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ei(r);
            if (!o) throw Error(S(90));
            Ac(r), Al(r, o);
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
  }
};
Qc = da;
Kc = cn;
var Yh = { usingClientEntryPoint: !1, Events: [Yr, jn, Ei, Wc, Gc, da] }, hr = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qh = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Xc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hr.findFiberByHostInstance || Qh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ao.isDisabled && Ao.supportsFiber) try {
    Si = Ao.inject(qh), ft = Ao;
  } catch {
  }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ya(t)) throw Error(S(200));
  return Gh(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!ya(e)) throw Error(S(299));
  var n = !1, r = "", o = Lf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ha(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new va(t);
};
Ue.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Xc(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return cn(e);
};
Ue.hydrate = function(e, t, n) {
  if (!Ii(t)) throw Error(S(200));
  return Oi(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!ya(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Lf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Tf(t, null, e, 1, n ?? null, o, !1, i, l), e[wt] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new $i(t);
};
Ue.render = function(e, t, n) {
  if (!Ii(t)) throw Error(S(200));
  return Oi(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!Ii(e)) throw Error(S(40));
  return e._reactRootContainer ? (cn(function() {
    Oi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = da;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ii(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Oi(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function zf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zf);
    } catch (e) {
      console.error(e);
    }
}
zf(), Lc.exports = Ue;
var Xh = Lc.exports, Pf, fc = Xh;
Pf = fc.createRoot, fc.hydrateRoot;
async function Q(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const pc = `
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
.ns-save-automation { display:grid; gap:4px; margin-top:16px; padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); background:var(--ns-control-background); }
.ns-save-automation .ns-field { margin-bottom:4px; }
.ns-save-automation .ns-help { margin:2px 0 8px; }
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
`, Zh = { rendered: {}, errors: {} }, Jh = "/notify_studio_static/notify-studio-logo.png?v=0.1.26", eg = 170, Tl = 10, tg = 50;
function xa(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function Ns(e, t) {
  const n = xa(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function mc(e) {
  const t = `Action ${e}`;
  return { id: Ns(t, e), title: t, route: "event" };
}
function ng(e, t) {
  return `notify_studio_persistent_${xa(e || t).toLowerCase() || "notification"}`;
}
function Ll(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function hc(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Xo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function gc(e) {
  return e === !0;
}
function zl(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function rg(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Xo(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function vc(e, t = "") {
  const n = xa(e).toLowerCase() || "notification", r = Date.now().toString(36);
  return `notify_studio_${n.slice(0, 34)}${t}_${r}`;
}
function og(e) {
  return e.type === "script" ? [{ action: e.script_entity_id ?? "script.turn_on" }] : e.type === "service" ? [{
    action: e.service ?? "persistent_notification.create",
    ...e.service_data && Object.keys(e.service_data).length ? { data: e.service_data } : {}
  }] : [{
    action: "persistent_notification.create",
    data: {
      title: "Notify Studio action received",
      message: e.type === "reply" ? "Text reply received for '{{ trigger.event.data.action }}': {{ trigger.event.data.reply_text | default('No reply text returned', true) }}" : "Action '{{ trigger.event.data.action }}' was selected. Replace this generated placeholder action with the required behaviour."
    }
  }];
}
function ig(e, t) {
  return {
    alias: `${e} - Handle Notification Actions`,
    description: "Generated handler for Notify Studio actionable-notification buttons. Review any placeholder persistent-notification sequence before enabling it.",
    triggers: t.map((n) => ({
      trigger: "event",
      event_type: "mobile_app_notification_action",
      event_data: { action: n.action }
    })),
    conditions: [],
    actions: [{
      choose: t.map((n) => ({
        conditions: `{{ trigger.event.data.action == ${JSON.stringify(n.action)} }}`,
        sequence: og(n)
      }))
    }],
    mode: "parallel",
    max: 10
  };
}
function lg(e) {
  return `${e}::group`;
}
function sg(e, t) {
  return `${e}::member::${t}`;
}
function ag(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function yc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ug({ hass: e }) {
  const t = _.useRef(e);
  t.current = e;
  const [n, r] = _.useState("audit"), [o, i] = _.useState(!!e), [l, u] = _.useState(!0), [c, m] = _.useState(null), [x, w] = _.useState([]), [y, N] = _.useState([]), [C, E] = _.useState([]), [G, p] = _.useState(!0), [f, h] = _.useState([]), [k, b] = _.useState(!1), [z, P] = _.useState(""), [M, q] = _.useState([]), [I, pe] = _.useState([]), [ot, Ye] = _.useState([]), [it, Ai] = _.useState(!1), [lt, pn] = _.useState(7), [T, O] = _.useState(!1), [A, X] = _.useState(!1), [se, Qt] = _.useState(""), [st, Yn] = _.useState("category"), [ce, Ie] = _.useState(null), [wa, Di] = _.useState(null), [Xr, Zr] = _.useState([]), [qn, _a] = _.useState(""), [Le, Fi] = _.useState(null), [Nt, ka] = _.useState(!1), [Jr, Rf] = _.useState(""), [eo, Mf] = _.useState(""), [to, $f] = _.useState(""), [no, If] = _.useState(""), [Xn, Ui] = _.useState(""), [Sa, ro] = _.useState(""), [mn, Na] = _.useState("A test notification from Notify Studio."), [qe, Ca] = _.useState("Notify Studio"), [Zn, Hi] = _.useState(""), [oo, ja] = _.useState(""), [Ct, Ea] = _.useState(""), [io, ba] = _.useState(""), [lo, Ta] = _.useState(""), [so, La] = _.useState(""), [ao, za] = _.useState(""), [uo, Pa] = _.useState(""), [co, Ra] = _.useState(""), [fo, Ma] = _.useState(""), [Bi, $a] = _.useState(!1), [po, Ia] = _.useState(!1), [hn, Oa] = _.useState(!1), [at, gn] = _.useState([]), [mo, Aa] = _.useState(""), [ho, Da] = _.useState(""), [go, Fa] = _.useState(""), [vo, Ua] = _.useState(""), [yo, Ha] = _.useState(""), [vn, Ba] = _.useState(Zh), [Kt, Va] = _.useState(""), [Wa, Of] = _.useState(""), [Yt, yn] = _.useState(null), [Ga, Jn] = _.useState(""), [Qa, er] = _.useState(""), [tr, nr] = _.useState(null), [Af, Df] = _.useState(""), [qt, Vi] = _.useState(null), [rr, Ka] = _.useState(!1), Wi = _.useRef(0), Ya = _.useRef(null), U = _.useMemo(
    () => x.find((s) => s.id === Xn) ?? null,
    [x, Xn]
  ), qa = _.useMemo(
    () => y.filter((s) => s.kind === "script"),
    [y]
  ), or = _.useMemo(
    () => z ? f.filter((s) => s.level === z) : f,
    [z, f]
  ), Gi = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const d of I)
      for (const g of d.members) {
        const v = s.get(g.source_key) ?? [];
        v.push(d), s.set(g.source_key, v);
      }
    return s;
  }, [I]), Qi = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const d of y) s.set(d.entity_id, d);
    for (const d of Le ?? [])
      d.runtime && s.set(d.runtime.entity_id, d.runtime);
    return s;
  }, [y, Le]), Xa = _.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const d of I) {
      let g = 0, v = 0, j = 0;
      for (const $ of d.members) {
        if (!$.entity_id.startsWith("automation.")) continue;
        g += 1;
        const R = Qi.get($.entity_id);
        (R == null ? void 0 : R.enabled) === !0 ? v += 1 : (R == null ? void 0 : R.enabled) === !1 && (j += 1);
      }
      s.set(d.id, { automations: g, enabled: v, disabled: j });
    }
    return s;
  }, [I, Qi]), Xt = _.useMemo(() => I.flatMap((s) => [
    { key: lg(s.id), type: "group", group: s },
    ...[...s.members].sort((d, g) => d.name.localeCompare(g.name)).map((d) => ({
      key: sg(s.id, d.source_key),
      type: "member",
      group: s,
      member: d
    }))
  ]), [I]), Ki = _.useMemo(
    () => new Map(Xt.map((s) => [s.key, s])),
    [Xt]
  ), Yi = _.useMemo(
    () => ot.map((s) => Ki.get(s)).filter((s) => s !== void 0),
    [Ki, ot]
  ), qi = _.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
    for (const v of Le ?? []) {
      v.category && s.add(v.category);
      for (const j of v.labels ?? []) d.add(j);
      for (const j of v.notify_devices ?? v.notifiers) g.add(j);
    }
    return {
      categories: [...s].sort((v, j) => v.localeCompare(j)),
      labels: [...d].sort((v, j) => v.localeCompare(j)),
      devices: [...g].sort((v, j) => v.localeCompare(j))
    };
  }, [Le]), Xi = _.useMemo(() => (Le ?? []).filter((s) => {
    var d;
    if (Jr && s.source !== Jr || eo && s.category !== eo || to && !(s.labels ?? []).includes(to) || no && !(s.notify_devices ?? s.notifiers).includes(no)) return !1;
    if (qn) {
      const g = `${s.source}:${s.id}`;
      if (!((d = Gi.get(g)) != null && d.some((v) => v.id === qn))) return !1;
    }
    return !0;
  }), [eo, no, to, Jr, qn, Gi, Le]), K = _.useCallback((s) => {
    Df(s);
  }, []), V = _.useCallback((s, d) => {
    const g = s instanceof Error ? s.message : d;
    K(g), window.alert(g);
  }, [K]), xo = _.useCallback((s) => {
    Vi(s);
  }, []), Ff = _.useCallback(() => {
    rr || Vi(null);
  }, [rr]), Uf = _.useCallback(async () => {
    if (qt) {
      Ka(!0);
      try {
        await qt.onConfirm(), Vi(null);
      } catch (s) {
        V(s, "The requested action could not be completed.");
      } finally {
        Ka(!1);
      }
    }
  }, [qt, V]), Za = _.useCallback(async () => {
    const s = t.current;
    if (!s) return;
    const [d, g, v, j, $, R] = await Promise.all([
      Q(s, "notify_studio/info"),
      Q(s, "notify_studio/list_notifiers"),
      Q(s, "notify_studio/list_runnables"),
      Q(s, "notify_studio/list_templates"),
      Q(s, "notify_studio/list_custom_groups"),
      Q(s, "notify_studio/list_custom_group_favorites")
    ]);
    m(d), w(g.services), N(v), q(j), pe($), Ye(R);
  }, []), Hf = _.useCallback(async () => {
    const s = t.current;
    if (s) {
      O(!0);
      try {
        const [d, g] = await Promise.all([
          Q(s, "notify_studio/list_custom_groups"),
          Q(s, "notify_studio/list_custom_group_favorites")
        ]);
        pe(d), Ye(g);
      } catch (d) {
        V(d, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        O(!1);
      }
    }
  }, [V]), Bf = _.useCallback(async (s, d) => {
    const g = t.current;
    if (g) {
      Ie("favorites");
      try {
        const v = await Q(
          g,
          "notify_studio/set_custom_group_favorites",
          { control_keys: s }
        );
        Ye(v), d && K(d);
      } catch (v) {
        V(v, "Unable to save quick-control favorites.");
      } finally {
        Ie(null);
      }
    }
  }, [K, V]), Vf = (s) => {
    const d = ot.filter((j) => Ki.has(j)), g = d.includes(s);
    if (!g && d.length >= lt) {
      K(`Only ${lt} favorite control${lt === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const v = g ? d.filter((j) => j !== s) : [...d, s];
    Bf(v, g ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };
  _.useLayoutEffect(() => {
    if (n !== "audit" || !Xt.length) return;
    const s = Ya.current;
    if (!s) return;
    let d = 0;
    const g = [], v = () => {
      if (!s.isConnected) return;
      if (window.matchMedia("(max-width: 700px)").matches) {
        pn((me) => me === 7 ? me : 7);
        return;
      }
      const R = Math.max(s.clientWidth, s.getBoundingClientRect().width);
      if (R < 480) return;
      const ie = Math.max(
        1,
        R - tg - Tl - 28
      ), H = Math.min(
        7,
        Math.max(
          1,
          Math.floor((ie + Tl) / (eg + Tl))
        )
      );
      pn((me) => me === H ? me : H);
    }, j = () => {
      window.cancelAnimationFrame(d), d = window.requestAnimationFrame(v);
    };
    j(), g.push(window.setTimeout(v, 80)), g.push(window.setTimeout(v, 260));
    const $ = new ResizeObserver(j);
    return $.observe(s), window.addEventListener("resize", j), () => {
      window.cancelAnimationFrame(d), g.forEach((R) => window.clearTimeout(R)), $.disconnect(), window.removeEventListener("resize", j);
    };
  }, [Xt.length, n]);
  const Ja = async () => {
    const s = t.current;
    if (!s) return;
    const d = se.trim();
    if (!d) {
      V(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }
    Ie("create");
    try {
      const g = await Q(s, "notify_studio/create_custom_group", {
        name: d,
        kind: st
      });
      pe((v) => [...v, g].sort((j, $) => j.kind === $.kind ? j.name.localeCompare($.name) : j.kind.localeCompare($.kind))), Qt(""), K(`Custom ${g.kind} “${g.name}” created.`);
    } catch (g) {
      V(g, "Unable to create the custom category or area.");
    } finally {
      Ie(null);
    }
  }, Wf = async (s) => {
    var v;
    const d = t.current;
    if (!d) return;
    const g = (v = window.prompt(`Rename custom ${s.kind}:`, s.name)) == null ? void 0 : v.trim();
    if (!(!g || g === s.name))
      try {
        const j = await Q(d, "notify_studio/rename_custom_group", {
          group_id: s.id,
          name: g
        });
        pe(($) => $.map((R) => R.id === j.id ? j : R)), K(`Custom ${j.kind} renamed to “${j.name}”.`);
      } catch (j) {
        V(j, "Unable to rename the custom category or area.");
      }
  }, Gf = async (s) => {
    const d = t.current;
    if (d && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await Q(d, "notify_studio/delete_custom_group", { group_id: s.id }), pe((g) => g.filter((v) => v.id !== s.id)), Ye((g) => g.filter((v) => !v.startsWith(`${s.id}::`))), qn === s.id && _a(""), K(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (g) {
        V(g, "Unable to delete the custom category or area.");
      }
  }, ir = (s) => `${s.source}:${s.id}`, _e = wa ? I.find((s) => s.id === wa) ?? null : null, Qf = (s) => {
    Di(s.id), Zr(s.members.map((d) => d.source_key)), K(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, Kf = () => {
    Di(null), Zr([]), K("Custom group selection cancelled.");
  }, Yf = (s, d) => {
    const g = ir(s);
    Zr((v) => d ? [.../* @__PURE__ */ new Set([...v, g])] : v.filter((j) => j !== g));
  }, qf = async () => {
    const s = t.current;
    if (!(!s || !_e)) {
      Ie("selection");
      try {
        const d = Le ?? [], g = new Set(d.map(ir)), v = new Set(Xr), j = _e.members.filter(
          (H) => !g.has(H.source_key)
        ), $ = d.filter((H) => v.has(ir(H))).map((H) => {
          var me;
          return {
            source_key: ir(H),
            name: H.name,
            entity_id: ((me = H.runtime) == null ? void 0 : me.entity_id) ?? ""
          };
        }), R = await Q(s, "notify_studio/set_custom_group_members", {
          group_id: _e.id,
          members: [...j, ...$]
        });
        pe(R);
        const ie = await Q(s, "notify_studio/list_custom_group_favorites");
        Ye(ie), K(`Saved ${$.length} notification source${$.length === 1 ? "" : "s"} in “${_e.name}”.`), Di(null), Zr([]);
      } catch (d) {
        V(d, "Unable to save the selected custom category or area members.");
      } finally {
        Ie(null);
      }
    }
  }, Xf = async (s, d) => {
    const g = t.current;
    if (!g) return;
    const v = Xa.get(s.id), j = (v == null ? void 0 : v.automations) ?? 0;
    if (!j) {
      V(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const $ = d ? "enable" : "disable";
    if (window.confirm(`Do you want to ${$} all ${j} automation${j === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      Ie("toggle");
      try {
        const R = await Q(
          g,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: d }
        );
        K(`${s.name}: ${R.changed_entity_ids.length} automation${R.changed_entity_ids.length === 1 ? "" : "s"} ${d ? "enabled" : "disabled"}.`), await wo();
      } catch (R) {
        V(R, `Unable to ${$} the automations in ${s.name}.`);
      } finally {
        Ie(null);
      }
    }
  }, lr = _.useCallback(async () => {
    const s = t.current;
    if (s) {
      p(!0);
      try {
        const d = await Q(
          s,
          "notify_studio/list_recent_push_runnables"
        );
        E(d);
      } catch {
        E([]);
      } finally {
        p(!1);
      }
    }
  }, []), Zi = _.useCallback(async () => {
    const s = t.current;
    if (s) {
      b(!0);
      try {
        const d = await Q(s, "notify_studio/list_logs");
        h(d);
      } catch (d) {
        V(d, "Unable to load Notify Studio logs.");
      } finally {
        b(!1);
      }
    }
  }, [V]), Zf = async () => {
    const s = t.current;
    if (!(!s || !window.confirm("Clear the Notify Studio application logs?"))) {
      b(!0);
      try {
        const d = await Q(s, "notify_studio/clear_logs");
        h(d), K("Notify Studio logs cleared.");
      } catch (d) {
        V(d, "Unable to clear Notify Studio logs.");
      } finally {
        b(!1);
      }
    }
  }, eu = _.useCallback(async () => {
    try {
      await Za(), Fi(null);
    } catch (s) {
      V(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [K, Za, V]);
  _.useEffect(() => {
    e && !o && i(!0);
  }, [e, o]), _.useEffect(() => {
    o && eu();
  }, [o, eu]), _.useEffect(() => {
    o && lr();
  }, [o, lr]), _.useEffect(() => {
    !Xn && x.length && Ui(x[0].id);
  }, [Xn, x]);
  const wo = _.useCallback(async () => {
    const s = t.current;
    if (!(!s || Nt)) {
      ka(!0);
      try {
        Fi(await Q(s, "notify_studio/scan_notify_usage")), K("Notification audit complete.");
      } catch (d) {
        V(d, "The notification audit failed.");
      } finally {
        ka(!1);
      }
    }
  }, [K, Nt, V]);
  _.useEffect(() => {
    n === "audit" && Le === null && wo();
  }, [wo, n, Le]), _.useEffect(() => {
    n === "audit" && lr();
  }, [lr, n]), _.useEffect(() => {
    n === "logs" && Zi();
  }, [Zi, n]);
  const sr = _.useCallback(() => {
    const s = {};
    if (Zn.trim() && (s.tag = Zn.trim()), oo.trim() && (s.image = oo.trim()), hn && at.length && (s.actions = at.map((d) => d.route === "uri" ? {
      action: "URI",
      title: d.title,
      uri: d.uri ?? ""
    } : d.route === "reply" ? {
      action: d.id,
      title: d.title,
      behavior: "textInput"
    } : { action: d.id, title: d.title })), (U == null ? void 0 : U.platform) === "android")
      Ct.trim() && (s.clickAction = Ct.trim()), io.trim() && (s.subject = io.trim()), lo.trim() && (s.channel = lo.trim()), so && (s.importance = so), ao && (s.priority = ao), uo.trim() && (s.color = uo.trim()), co.trim() && (s.notification_icon = co.trim()), fo.trim() && (s.timeout = Number(fo)), Bi && (s.sticky = !0), po && (s.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      Ct.trim() && (s.url = Ct.trim()), mo.trim() && (s.subtitle = mo.trim());
      const d = {};
      ho.trim() && (d.sound = ho.trim()), go.trim() && (d.badge = Number(go)), vo && (d["interruption-level"] = vo), yo.trim() && (d["thread-id"] = yo.trim()), Object.keys(d).length && (s.push = d);
    } else Ct.trim() && (s.url = Ct.trim());
    return {
      message: mn,
      ...qe.trim() ? { title: qe } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [hn, oo, go, lo, uo, so, vo, mn, at, co, Ct, po, ao, U == null ? void 0 : U.platform, ho, Bi, io, mo, Zn, yo, fo, qe]), _o = _.useCallback(() => hn ? at.filter((s) => s.route !== "uri").map((s) => {
    var d, g;
    if (s.route === "script") {
      if (!((d = s.scriptEntityId) != null && d.trim()))
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
        service_data: rg(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [hn, at]), Jf = _.useCallback(() => ({
    payload: sr(),
    action_handlers: _o(),
    ...U ? { target_platform: U.platform } : {}
  }), [_o, sr, U]), Ji = () => U || (V(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  _.useEffect(() => {
    const s = t.current;
    if (!o || !s) return;
    const d = ++Wi.current;
    let g = !1;
    const v = {
      message: mn,
      ...qe.trim() ? { title: qe } : {}
    }, j = window.setTimeout(() => {
      Q(s, "notify_studio/render_preview", { payload: v }).then(($) => {
        !g && d === Wi.current && Ba($);
      }).catch(($) => {
        if (g || d !== Wi.current) return;
        const R = $ instanceof Error ? $.message : "Unable to render the current template.";
        Ba({ rendered: {}, errors: { message: R } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(j);
    };
  }, [o, mn, qe]);
  const ep = async () => {
    const s = Ji();
    if (!(!s || !t.current)) {
      yn("test");
      try {
        const d = await Q(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: sr()
        });
        K(`Test notification sent to ${d.target}.`);
      } catch (d) {
        V(d, "The test notification could not be sent.");
      } finally {
        yn(null);
      }
    }
  }, tp = async () => {
    const s = Ji();
    if (!(!s || !t.current)) {
      yn("yaml");
      try {
        const d = await Q(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: sr(),
          action_handlers: _o()
        });
        Va(d.yaml), K("YAML generated successfully.");
      } catch (d) {
        V(d, "Unable to generate YAML.");
      } finally {
        yn(null);
      }
    }
  }, np = () => {
    const s = Ji();
    if (!s) return;
    if (!Kt.trim()) {
      V(new Error("Generate YAML before saving an automation."), "Generate YAML before saving an automation.");
      return;
    }
    let d;
    try {
      d = _o();
    } catch (j) {
      V(j, "Check the actionable-notification configuration before saving.");
      return;
    }
    const g = Wa.trim() || `Notify Studio - ${qe.trim() || "Notification"}`, v = d.length ? " A second event-handler automation will also be created for the selected actionable-notification buttons." : "";
    xo({
      title: "Save Automation?",
      message: `Create “${g}” in Home Assistant's UI-managed automations.yaml and open it in the Automation Editor? The generated notification action will be saved; add or review its trigger and conditions before enabling it.${v}`,
      confirmLabel: "Save Automation",
      onConfirm: async () => {
        const j = vc(g), $ = {
          alias: g,
          description: "Created by Notify Studio. Add or review a trigger and conditions before enabling this automation.",
          triggers: [],
          conditions: [],
          actions: [{
            action: `notify.${s.service}`,
            data: sr()
          }],
          mode: "single"
        }, R = [
          { automation_id: j, config: $ }
        ];
        d.length && R.push({
          automation_id: vc(g, "_actions"),
          config: ig(g, d)
        });
        const ie = t.current;
        if (!ie)
          throw new Error("Home Assistant is not connected. Please refresh and try again.");
        const H = await Q(
          ie,
          "notify_studio/save_ui_automations",
          { automations: R }
        );
        K(`Automation “${g}” saved to Home Assistant.`), el(`/config/automation/edit/${encodeURIComponent(H.primary_automation_id)}`);
      }
    });
  }, rp = async () => {
    var d;
    if (!Kt.trim()) {
      V(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((d = navigator.clipboard) != null && d.writeText))
      try {
        await navigator.clipboard.writeText(Kt), s = !0;
      } catch {
      }
    if (!s) {
      const g = document.createElement("textarea");
      g.value = Kt, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
      try {
        s = document.execCommand("copy");
      } finally {
        document.body.removeChild(g);
      }
    }
    if (s) {
      K("Generated YAML copied to the clipboard.");
      return;
    }
    V(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, el = _.useCallback((s) => {
    const d = t.current;
    if (typeof (d == null ? void 0 : d.navigate) == "function") {
      d.navigate(s);
      return;
    }
    window.history.pushState({}, "", s), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
  }, []), op = () => {
    xo({
      title: "Open Automations?",
      message: "Open the Home Assistant Automations dashboard?",
      confirmLabel: "Open Automations",
      onConfirm: () => el("/config/automation/dashboard")
    });
  }, ip = (s) => {
    const d = s.kind === "automation" ? "Automation" : "Script", g = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    xo({
      title: `View ${d}?`,
      message: `Open the Home Assistant editor for “${s.name}”?`,
      confirmLabel: `View ${d}`,
      onConfirm: () => el(`/config/${s.kind}/edit/${encodeURIComponent(String(g))}`)
    });
  }, lp = (s, d) => {
    N((g) => g.map((v) => v.entity_id === s ? { ...v, ...d } : v)), Fi((g) => (g == null ? void 0 : g.map((v) => {
      var j;
      return ((j = v.runtime) == null ? void 0 : j.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...d } } : v;
    })) ?? null);
  }, tu = async (s, d) => {
    if (t.current)
      try {
        const g = await Q(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: d
        });
        lp(g.entity_id, {
          state: g.state,
          enabled: d,
          status: d ? "enabled" : "disabled"
        }), K(`${s.name} is now ${d ? "enabled" : "disabled"}.`);
      } catch (g) {
        V(g, "Unable to update that automation.");
      }
  }, sp = async (s) => {
    if (!t.current)
      throw new Error("Notify Studio is not connected to Home Assistant yet.");
    const d = await Q(
      t.current,
      "notify_studio/run_runnable",
      { entity_id: s.entity_id }
    );
    K(`${s.name} was queued for execution${d.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
      lr();
    }, 900);
  }, ap = (s) => {
    const d = s.kind === "automation" ? "Automation" : "Script", g = s.kind === "automation" ? " Top-level conditions are bypassed for this manual test." : "";
    xo({
      title: `Run ${d} Test?`,
      message: `Run “${s.name}” now? This can control real devices.${g}`,
      confirmLabel: "Run Test",
      onConfirm: () => sp(s)
    });
  }, xn = (s, d) => {
    gn((g) => g.map((v, j) => j === s ? { ...v, ...d } : v));
  }, up = (s, d) => {
    gn((g) => g.map((v, j) => j !== s ? v : {
      ...v,
      route: d,
      id: d === "uri" ? "URI" : v.id === "URI" ? Ns(v.title, s + 1) : v.id
    }));
  }, cp = () => {
    const s = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    gn((d) => d.length >= s ? d : [...d, mc(d.length + 1)]);
  }, dp = (s) => {
    gn((d) => d.filter((g, v) => v !== s));
  }, tl = _.useCallback((s) => {
    const d = s.payload, g = Xo(d.data) ? d.data : {};
    Na(te(d.message)), Ca(te(d.title)), Hi(te(g.tag)), ja(te(g.image)), Ea(te(g.clickAction) || te(g.url)), ba(te(g.subject)), Ta(te(g.channel)), La(te(g.importance)), za(te(g.priority)), Pa(te(g.color)), Ra(te(g.notification_icon)), Ma(g.timeout === void 0 ? "" : String(g.timeout)), $a(gc(g.sticky)), Ia(gc(g.persistent)), Aa(te(g.subtitle));
    const v = Xo(g.push) ? g.push : {};
    Da(te(v.sound)), Fa(v.badge === void 0 ? "" : String(v.badge)), Ua(te(v["interruption-level"])), Ha(te(v["thread-id"]));
    const j = new Map(s.action_handlers.map((ie) => [ie.action, ie])), R = (Array.isArray(g.actions) ? g.actions : []).filter(Xo).map((ie, H) => {
      const me = te(ie.action) || Ns(`Action ${H + 1}`, H + 1), he = j.get(me);
      let jt = "event";
      return me === "URI" && te(ie.uri) ? jt = "uri" : te(ie.behavior) === "textInput" ? jt = "reply" : (he == null ? void 0 : he.type) === "script" ? jt = "script" : (he == null ? void 0 : he.type) === "service" && (jt = "service"), {
        id: me,
        title: te(ie.title) || `Action ${H + 1}`,
        route: jt,
        uri: te(ie.uri),
        scriptEntityId: te(he == null ? void 0 : he.script_entity_id),
        service: te(he == null ? void 0 : he.service),
        serviceData: he != null && he.service_data ? JSON.stringify(he.service_data, null, 2) : ""
      };
    });
    if (gn(R), Oa(R.length > 0), Va(""), s.target_platform && (U == null ? void 0 : U.platform) !== s.target_platform) {
      const ie = x.find((H) => H.platform === s.target_platform);
      ie && Ui(ie.id);
    }
  }, [U == null ? void 0 : U.platform, x]), fp = (s) => {
    if (ro(s), !s) return;
    const d = M.find((g) => g.id === s);
    d && (tl(d.draft), K(`Template “${d.name}” loaded into the composer.`));
  }, pp = () => {
    nr(null), Jn(qe.trim() || "New notification template"), er(""), r("templates");
  }, mp = (s) => {
    nr(s.id), Jn(s.name), er(s.description), tl(s.draft), r("templates"), K(`Editing template “${s.name}”.`);
  }, hp = async () => {
    if (t.current) {
      yn("template");
      try {
        const s = await Q(t.current, "notify_studio/save_template", {
          template: {
            ...tr ? { id: tr } : {},
            name: Ga,
            description: Qa,
            draft: Jf()
          }
        });
        q((d) => d.findIndex((v) => v.id === s.id) === -1 ? [s, ...d] : d.map((v) => v.id === s.id ? s : v)), ro(s.id), nr(s.id), K(`Template “${s.name}” saved.`);
      } catch (s) {
        V(s, "Unable to save the template.");
      } finally {
        yn(null);
      }
    }
  }, gp = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await Q(t.current, "notify_studio/delete_template", { template_id: s.id }), q((d) => d.filter((g) => g.id !== s.id)), Sa === s.id && ro(""), tr === s.id && (nr(null), Jn(""), er("")), K(`Template “${s.name}” deleted.`);
      } catch (d) {
        V(d, "Unable to delete the template.");
      }
  }, vp = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: io, onChange: (s) => ba(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: lo, onChange: (s) => Ta(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: so, onChange: (s) => La(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: ao, onChange: (s) => za(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: uo, onChange: (s) => Pa(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: co, onChange: (s) => Ra(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: fo, onChange: (s) => Ma(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Bi, onChange: (s) => $a(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: po, onChange: (s) => {
        const d = s.target.checked;
        Ia(d), d && !Zn.trim() && Hi(ng(qe, mn));
      } }),
      " Persistent notification"
    ] }),
    po && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: mo, onChange: (s) => Aa(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: ho, onChange: (s) => Da(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: go, onChange: (s) => Fa(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: vo, onChange: (s) => Ua(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: yo, onChange: (s) => Ha(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, yp = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const s = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: hn, onChange: (d) => {
          const g = d.target.checked;
          Oa(g), g && !at.length && gn([mc(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      hn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ a.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-action-list", children: at.map((d, g) => /* @__PURE__ */ a.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              "Button ",
              g + 1
            ] }),
            at.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => dp(g), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: d.title, onChange: (v) => xn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: d.route, onChange: (v) => up(g, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send Event Only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run Script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant Action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / Dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for Text Reply" })
            ] }) }),
            d.route !== "uri" && /* @__PURE__ */ a.jsx(D, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: d.id, onChange: (v) => xn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            d.route === "uri" && /* @__PURE__ */ a.jsx(D, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: d.uri ?? "", onChange: (v) => xn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            d.route === "script" && /* @__PURE__ */ a.jsx(D, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: d.scriptEntityId ?? "", onChange: (v) => xn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              qa.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            d.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: d.service ?? "", onChange: (v) => xn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: d.serviceData ?? "", onChange: (v) => xn(g, { serviceData: v.target.value }), placeholder: `{
  "entity_id": "light.hall"
}` }) })
            ] })
          ] }),
          d.route === "event" && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence." }),
          d.route === "reply" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "The generated handler receives the submitted text as ",
            /* @__PURE__ */ a.jsx("code", { children: "trigger.event.data.reply_text" }),
            "."
          ] }),
          d.route === "uri" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "Android requires the Companion action key ",
            /* @__PURE__ */ a.jsx("code", { children: "URI" }),
            ". URI buttons do not generate an event handler."
          ] }),
          d.route === "script" && !qa.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${d.id}:${g}`)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "ns-help", children: [
            at.length,
            " of ",
            s,
            " available ",
            s === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          at.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: cp, children: "Add Button" })
        ] })
      ] })
    ] });
  }, xp = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: zl(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), wp = (s) => {
    var ie;
    const d = ir(s), g = (ie = s.notify_devices) != null && ie.length ? s.notify_devices : s.notifiers, v = s.runtime, j = Gi.get(d) ?? [], $ = _e !== null, R = Xr.includes(d);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${$ ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          $ && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(_e == null ? void 0 : _e.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: R, onChange: (H) => Yf(s, H.target.checked) }),
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
        xp(v),
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
        j.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: j.map((H) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${H.kind}`, children: [
          H.kind === "category" ? "Category" : "Area",
          ": ",
          H.name
        ] }, H.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void tu(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void ap(v), children: "Run Test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => ip(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, d);
  }, _p = (s) => {
    var ru;
    const d = s.group.kind === "category" ? "Category" : "Area", g = ot.includes(s.key), v = !g && Yi.length >= lt, j = Xa.get(s.group.id) ?? { automations: 0, enabled: 0 }, $ = s.type === "group", R = s.member ? Qi.get(s.member.entity_id) : void 0, H = !(j.automations > 0 && j.enabled === j.automations), me = $ ? j.automations === 0 ? "No Automations" : H ? "Enable All" : "Disable All" : ((ru = s.member) == null ? void 0 : ru.name) ?? "Notification source", he = $ ? j.automations === 0 ? "Add an Automation Source" : `All Automations · ${j.enabled}/${j.automations} Enabled` : (R == null ? void 0 : R.kind) === "automation" ? R.enabled ? "Enabled" : "Disabled" : (R == null ? void 0 : R.kind) === "script" ? "Script" : "Unavailable", jt = !$ && (R == null ? void 0 : R.kind) === "automation" ? R.enabled ? "enabled" : "disabled" : null, nu = $ ? j.automations > 0 : (R == null ? void 0 : R.kind) === "automation";
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-member-control", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `ns-custom-group-member-button ${$ ? "ns-custom-group-member-button--all" : ""}`,
          disabled: !nu || ce === "toggle",
          onClick: () => {
            $ ? Xf(s.group, H) : (R == null ? void 0 : R.kind) === "automation" && tu(R, !R.enabled);
          },
          title: nu ? $ ? `${me} automations in ${s.group.name}` : `Toggle ${me}` : (R == null ? void 0 : R.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.group.kind}`, children: [
              d,
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
          onClick: () => Vf(s.key),
          disabled: ce === "favorites" || v,
          "aria-pressed": g,
          "aria-label": g ? `Remove ${me} from quick controls` : `Add ${me} to quick controls`,
          title: v ? "Quick row is full. Remove a star before adding another favorite." : g ? "Remove from quick controls" : "Add to quick controls",
          children: g ? "★" : "☆"
        }
      )
    ] }, s.key);
  }, kp = () => {
    if (!I.length)
      return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => X(!0), children: [
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
      ] }) });
    const s = it ? Xt : Yi.length > 0 ? Yi.slice(0, lt) : Xt.slice(0, lt), d = Xt.length > s.length, g = {
      "--ns-quick-control-columns": String(Math.max(1, s.length))
    };
    return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control-panel", ref: Ya, children: [
      /* @__PURE__ */ a.jsx("div", { className: `ns-custom-group-member-grid ${it ? "is-expanded" : ""}`, style: g, children: s.map(_p) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-expand ${it ? "is-expanded" : ""}`,
          onClick: () => Ai((v) => !v),
          "aria-expanded": it,
          "aria-label": it ? "Collapse quick controls" : "Show all custom group controls",
          title: it ? "Show quick controls" : d ? "Show all controls" : "Choose favourite controls",
          children: it ? "⌃" : "⌄"
        }
      )
    ] }) });
  }, Sp = () => {
    if (!A) return null;
    const s = I.filter((v) => v.kind === "category"), d = I.filter((v) => v.kind === "area"), g = (v, j) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: v === "category" ? "Custom categories" : "Custom areas" }),
      !j.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        v,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: j.map(($) => {
        const R = (_e == null ? void 0 : _e.id) === $.id;
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
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${R ? "ns-button--active" : ""}`, onClick: () => Qf($), disabled: ce === "selection", children: R ? "Selecting Entities" : "Select Entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Wf($), disabled: ce === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Gf($), disabled: ce === "selection", children: "Delete" })
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
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Hf(), disabled: T, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => X(!1), disabled: ce === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(D, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: se, onChange: (v) => Qt(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Ja();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: st, onChange: (v) => Yn(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ja(), disabled: ce === "create", children: ce === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          g("category", s),
          g("area", d)
        ] }),
        _e && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__selection", children: [
          /* @__PURE__ */ a.jsxs("p", { children: [
            "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
            /* @__PURE__ */ a.jsx("strong", { children: _e.name }),
            "."
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Kf, disabled: ce === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void qf(), disabled: ce === "selection", children: ce === "selection" ? "Saving…" : `Save ${Xr.length} ${Xr.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return l ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: pc }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: pc }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: Af }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Jh, alt: "Notify Studio" }),
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
          U && /* @__PURE__ */ a.jsx("span", { className: hc(U.platform), children: Ll(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(D, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: Sa, onChange: (s) => fp(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            M.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Xn, onChange: (s) => Ui(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            Ll(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          U == null ? void 0 : U.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: qe, onChange: (s) => Ca(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Zn, onChange: (s) => Hi(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Ct, onChange: (s) => Ea(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: oo, onChange: (s) => ja(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: mn, onChange: (s) => Na(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          vp(),
          yp(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void ep(), disabled: Yt !== null, children: Yt === "test" ? "Sending…" : "Send Test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: pp, disabled: Yt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void tp(), disabled: Yt !== null, children: Yt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx(D, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: vn.errors.title ? `Error: ${vn.errors.title}` : vn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: vn.errors.message ? `Error: ${vn.errors.message}` : vn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              Kt && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void rp(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: op, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: Kt || "Generate YAML to see a copy-ready action and any matching button handler here." }),
          Kt && /* @__PURE__ */ a.jsxs("section", { className: "ns-save-automation", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Automation Name", children: /* @__PURE__ */ a.jsx("input", { value: Wa, onChange: (s) => Of(s.target.value), placeholder: `Notify Studio - ${qe.trim() || "Notification"}` }) }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Save this generated notification as a Home Assistant UI automation. Notify Studio opens the editor afterwards so you can add or review its trigger and conditions." }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: np, children: "Save Automation" })
          ] })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: tr ? "Edit Template" : "Create Template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Ga, onChange: (s) => Jn(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Qa, onChange: (s) => er(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void hp(), disabled: Yt !== null, children: Yt === "template" ? "Saving…" : tr ? "Update Template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              nr(null), Jn(""), er("");
            }, children: "New Template" })
          ] })
        ] })
      ] }),
      !M.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: M.map((s) => {
        var d, g;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: s.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: s.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: hc(s.draft.target_platform), children: Ll(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((d = s.draft.payload.data) == null ? void 0 : d.actions) ? `${(g = s.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              ro(s.id), tl(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => mp(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void gp(s), children: "Delete" })
          ] })
        ] }) }, s.id);
      }) })
    ] }),
    n === "logs" && /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-layout", children: [
      /* @__PURE__ */ a.jsxs("aside", { className: "ns-card ns-logs-sidebar", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notify Studio logs" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Operational events from Notify Studio. This in-memory list clears when Home Assistant restarts." }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(D, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: z, onChange: (s) => P(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
            /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
            /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
            /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
          ] }) }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-sidebar-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Zi(), disabled: k, children: k ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Zf(), disabled: k, children: "Clear Logs" })
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
            z ? ` matching ${yc(z).toLowerCase()}` : ""
          ] })
        ] }) }),
        k && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
        !k && !or.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run Test, Send Test, or Scan Now to create diagnostic entries." }),
        !k && or.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: or.map((s, d) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("span", { className: ag(s.level), children: yc(s.level) }),
              /* @__PURE__ */ a.jsx("strong", { children: s.message })
            ] }),
            /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: zl(s.timestamp) })
          ] }),
          s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
          s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
          /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
        ] }, `${s.timestamp}:${s.event}:${d}`)) })
      ] })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      kp(),
      Sp(),
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
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void wo(), disabled: Nt, children: Nt ? "Scanning…" : "Scan Now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Jr, onChange: (s) => Rf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: eo, onChange: (s) => Mf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                qi.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: to, onChange: (s) => $f(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                qi.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: no, onChange: (s) => If(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                qi.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: qn, onChange: (s) => _a(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                I.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) })
            ] }) })
          ] }),
          Nt && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !Nt && (Le == null ? void 0 : Le.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !Nt && Le && Xi.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !Nt && Le && Xi.length > 0 && /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "All notification sources" }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: Xi.map(wp) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-recent-card", children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
            G && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
            !G && !C.length && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
            !G && C.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-recent-list", children: C.map((s) => /* @__PURE__ */ a.jsxs("article", { className: "ns-recent-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "ns-recent-item__head", children: [
                /* @__PURE__ */ a.jsx("strong", { children: s.name }),
                /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.kind}`, children: s.kind })
              ] }),
              /* @__PURE__ */ a.jsxs("span", { children: [
                "Triggered ",
                zl(s.last_triggered)
              ] })
            ] }, s.entity_id)) })
          ] })
        ] }) })
      ] })
    ] }),
    qt && /* @__PURE__ */ a.jsx("div", { className: "ns-modal-backdrop", role: "presentation", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-confirmation-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "notify-studio-confirmation-title", "aria-describedby": "notify-studio-confirmation-message", children: [
      /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { id: "notify-studio-confirmation-title", className: "ns-card__title", children: qt.title }) }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsx("p", { id: "notify-studio-confirmation-message", className: "ns-confirmation-dialog__message", children: qt.message }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer ns-confirmation-dialog__footer", children: [
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: Ff, disabled: rr, children: "Cancel" }),
        /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Uf(), disabled: rr, children: rr ? "Working…" : qt.confirmLabel })
      ] })
    ] }) })
  ] });
}
function D({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ a.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    t
  ] });
}
class cg extends HTMLElement {
  constructor() {
    super(...arguments);
    nl(this, "root");
    nl(this, "currentHass");
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
    this.root || (this.root = Pf(this)), this.root.render(/* @__PURE__ */ a.jsx(ug, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", cg);
