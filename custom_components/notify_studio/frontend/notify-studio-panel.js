var fp = Object.defineProperty;
var pp = (e, t, n) => t in e ? fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Jl = (e, t, n) => pp(e, typeof t != "symbol" ? t + "" : t, n);
var fc = { exports: {} }, _l = {}, pc = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = Symbol.for("react.element"), mp = Symbol.for("react.portal"), hp = Symbol.for("react.fragment"), gp = Symbol.for("react.strict_mode"), vp = Symbol.for("react.profiler"), yp = Symbol.for("react.provider"), xp = Symbol.for("react.context"), wp = Symbol.for("react.forward_ref"), _p = Symbol.for("react.suspense"), kp = Symbol.for("react.memo"), Sp = Symbol.for("react.lazy"), Za = Symbol.iterator;
function Cp(e) {
  return e === null || typeof e != "object" ? null : (e = Za && e[Za] || e["@@iterator"], typeof e == "function" ? e : null);
}
var mc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, hc = Object.assign, gc = {};
function Gn(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || mc;
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vc() {
}
vc.prototype = Gn.prototype;
function ks(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || mc;
}
var Ss = ks.prototype = new vc();
Ss.constructor = ks;
hc(Ss, Gn.prototype);
Ss.isPureReactComponent = !0;
var Ja = Array.isArray, yc = Object.prototype.hasOwnProperty, Cs = { current: null }, xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) yc.call(t, r) && !xc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: Qr, type: e, key: l, ref: i, props: o, _owner: Cs.current };
}
function Np(e, t) {
  return { $$typeof: Qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ns(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function jp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var eu = /\/+/g;
function ei(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jp("" + e.key) : t.toString(36);
}
function Do(e, t, n, r, o) {
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
        case Qr:
        case mp:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ei(i, 0) : r, Ja(o) ? (n = "", e != null && (n = e.replace(eu, "$&/") + "/"), Do(o, t, n, "", function(m) {
    return m;
  })) : o != null && (Ns(o) && (o = Np(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(eu, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ja(e)) for (var u = 0; u < e.length; u++) {
    l = e[u];
    var c = r + ei(l, u);
    i += Do(l, t, n, c, o);
  }
  else if (c = Cp(e), typeof c == "function") for (e = c.call(e), u = 0; !(l = e.next()).done; ) l = l.value, c = r + ei(l, u++), i += Do(l, t, n, c, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function _o(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Do(e, r, "", "", function(l) {
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
var je = { current: null }, Fo = { transition: null }, zp = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: Fo, ReactCurrentOwner: Cs };
function _c() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: _o, forEach: function(e, t, n) {
  _o(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return _o(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return _o(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ns(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = Gn;
A.Fragment = hp;
A.Profiler = vp;
A.PureComponent = ks;
A.StrictMode = gp;
A.Suspense = _p;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zp;
A.act = _c;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Cs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) yc.call(t, c) && !xc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Qr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: xp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yp, _context: e }, e.Consumer = e;
};
A.createElement = wc;
A.createFactory = function(e) {
  var t = wc.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: wp, render: e };
};
A.isValidElement = Ns;
A.lazy = function(e) {
  return { $$typeof: Sp, _payload: { _status: -1, _result: e }, _init: Ep };
};
A.memo = function(e, t) {
  return { $$typeof: kp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = Fo.transition;
  Fo.transition = {};
  try {
    e();
  } finally {
    Fo.transition = t;
  }
};
A.unstable_act = _c;
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
pc.exports = A;
var k = pc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tp = k, Pp = Symbol.for("react.element"), Lp = Symbol.for("react.fragment"), bp = Object.prototype.hasOwnProperty, Rp = Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function kc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) bp.call(t, r) && !Mp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Pp, type: e, key: l, ref: i, props: o, _owner: Rp.current };
}
_l.Fragment = Lp;
_l.jsx = kc;
_l.jsxs = kc;
fc.exports = _l;
var a = fc.exports, Sc = { exports: {} }, De = {}, Cc = { exports: {} }, Nc = {};
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
    if (j = !1, h(T), !N) if (n(c) !== null) N = !0, Ae(E);
    else {
      var O = n(m);
      O !== null && Xn(_, O.startTime - T);
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
        lt !== null && Xn(_, lt.startTime - O), Ct = !1;
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
  function rt() {
    if (b !== null) {
      var T = e.unstable_now();
      I = T;
      var O = !0;
      try {
        O = b(!0, T);
      } finally {
        O ? Ke() : (L = !1, b = null);
      }
    } else L = !1;
  }
  var Ke;
  if (typeof d == "function") Ke = function() {
    d(rt);
  };
  else if (typeof MessageChannel < "u") {
    var ot = new MessageChannel(), Ol = ot.port2;
    ot.port1.onmessage = rt, Ke = function() {
      Ol.postMessage(null);
    };
  } else Ke = function() {
    W(rt, 0);
  };
  function Ae(T) {
    b = T, L || (L = !0, Ke());
  }
  function Xn(T, O) {
    R = W(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    N || C || (N = !0, Ae(E));
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
    return se = D + se, T = { id: x++, callback: O, priorityLevel: T, startTime: D, expirationTime: se, sortIndex: -1 }, D > J ? (T.sortIndex = D, t(m, T), n(c) === null && T === n(m) && (j ? (p(R), R = -1) : j = !0, Xn(_, D - J))) : (T.sortIndex = se, t(c, T), N || C || (N = !0, Ae(E))), T;
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
})(Nc);
Cc.exports = Nc;
var Ip = Cc.exports;
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
var jc = /* @__PURE__ */ new Set(), Tr = {};
function cn(e, t) {
  An(e, t), An(e + "Capture", t);
}
function An(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) jc.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ti = Object.prototype.hasOwnProperty, Op = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tu = {}, nu = {};
function Dp(e) {
  return Ti.call(nu, e) ? !0 : Ti.call(tu, e) ? !1 : Op.test(e) ? nu[e] = !0 : (tu[e] = !0, !1);
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
var js = /[\-:]([a-z])/g;
function Es(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    js,
    Es
  );
  ye[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(js, Es);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(js, Es);
  ye[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zs(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ap(t, n, o, r) && (n = null), r || o === null ? Dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ko = Symbol.for("react.element"), kn = Symbol.for("react.portal"), Sn = Symbol.for("react.fragment"), Ts = Symbol.for("react.strict_mode"), Pi = Symbol.for("react.profiler"), Ec = Symbol.for("react.provider"), zc = Symbol.for("react.context"), Ps = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), bi = Symbol.for("react.suspense_list"), Ls = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Tc = Symbol.for("react.offscreen"), ru = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ti;
function gr(e) {
  if (ti === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ti = t && t[1] || "";
  }
  return `
` + ti + e;
}
var ni = !1;
function ri(e, t) {
  if (!e || ni) return "";
  ni = !0;
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
    ni = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function Up(e) {
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
      return e = ri(e.type, !1), e;
    case 11:
      return e = ri(e.type.render, !1), e;
    case 1:
      return e = ri(e.type, !0), e;
    default:
      return "";
  }
}
function Ri(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case kn:
      return "Portal";
    case Pi:
      return "Profiler";
    case Ts:
      return "StrictMode";
    case Li:
      return "Suspense";
    case bi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zc:
      return (e.displayName || "Context") + ".Consumer";
    case Ec:
      return (e._context.displayName || "Context") + ".Provider";
    case Ps:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ls:
      return t = e.displayName || null, t !== null ? t : Ri(e.type) || "Memo";
    case Pt:
      t = e._payload, e = e._init;
      try {
        return Ri(e(t));
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
      return Ri(t);
    case 8:
      return t === Ts ? "StrictMode" : "Mode";
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
function So(e) {
  e._valueTracker || (e._valueTracker = Bp(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function qo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function bc(e, t) {
  t = t.checked, t != null && zs(e, "checked", t, !1);
}
function Ii(e, t) {
  bc(e, t);
  var n = Vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? $i(e, t.type, n) : t.hasOwnProperty("defaultValue") && $i(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function $i(e, t, n) {
  (t !== "number" || qo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Mn(e, t, n, r) {
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
function Oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function iu(e, t) {
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
  e._wrapperState = { initialValue: Vt(n) };
}
function Rc(e, t) {
  var n = Vt(t.value), r = Vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Co, Ic = function(e) {
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
}, Vp = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function(e) {
  Vp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
  });
});
function $c(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
}
function Oc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = $c(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Wp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fi(e, t) {
  if (t) {
    if (Wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Ai(e, t) {
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
var Ui = null;
function bs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hi = null, In = null, $n = null;
function au(e) {
  if (e = Yr(e)) {
    if (typeof Hi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = jl(t), Hi(e.stateNode, e.type, t));
  }
}
function Dc(e) {
  In ? $n ? $n.push(e) : $n = [e] : In = e;
}
function Fc() {
  if (In) {
    var e = In, t = $n;
    if ($n = In = null, au(e), t) for (e = 0; e < t.length; e++) au(t[e]);
  }
}
function Ac(e, t) {
  return e(t);
}
function Uc() {
}
var oi = !1;
function Hc(e, t, n) {
  if (oi) return e(t, n);
  oi = !0;
  try {
    return Ac(e, t, n);
  } finally {
    oi = !1, (In !== null || $n !== null) && (Uc(), Fc());
  }
}
function Lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
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
var Bi = !1;
if (xt) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Bi = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Bi = !1;
}
function Qp(e, t, n, r, o, l, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var _r = !1, Zo = null, Jo = !1, Vi = null, Gp = { onError: function(e) {
  _r = !0, Zo = e;
} };
function Kp(e, t, n, r, o, l, i, u, c) {
  _r = !1, Zo = null, Qp.apply(Gp, arguments);
}
function Yp(e, t, n, r, o, l, i, u, c) {
  if (Kp.apply(this, arguments), _r) {
    if (_r) {
      var m = Zo;
      _r = !1, Zo = null;
    } else throw Error(S(198));
    Jo || (Jo = !0, Vi = m);
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
function Bc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function uu(e) {
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
        if (l === n) return uu(o), e;
        if (l === r) return uu(o), t;
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
function Vc(e) {
  return e = Xp(e), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qc = Oe.unstable_scheduleCallback, cu = Oe.unstable_cancelCallback, qp = Oe.unstable_shouldYield, Zp = Oe.unstable_requestPaint, ie = Oe.unstable_now, Jp = Oe.unstable_getCurrentPriorityLevel, Rs = Oe.unstable_ImmediatePriority, Gc = Oe.unstable_UserBlockingPriority, el = Oe.unstable_NormalPriority, em = Oe.unstable_LowPriority, Kc = Oe.unstable_IdlePriority, kl = null, dt = null;
function tm(e) {
  if (dt && typeof dt.onCommitFiberRoot == "function") try {
    dt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : om, nm = Math.log, rm = Math.LN2;
function om(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (nm(e) / rm | 0) | 0;
}
var No = 64, jo = 4194304;
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
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = yr(u) : (l &= i, l !== 0 && (r = yr(l)));
  } else i = n & ~o, i !== 0 ? r = yr(i) : l !== 0 && (r = yr(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
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
    var i = 31 - et(l), u = 1 << i, c = o[i];
    c === -1 ? (!(u & n) || u & r) && (o[i] = lm(u, t)) : c <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Wi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yc() {
  var e = No;
  return No <<= 1, !(No & 4194240) && (No = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function sm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - et(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Ms(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function Xc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qc, Is, Zc, Jc, ed, Qi = !1, Eo = [], $t = null, Ot = null, Dt = null, br = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), bt = [], am = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function du(e, t) {
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
      br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Yr(t), t !== null && Is(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function um(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return $t = cr($t, e, t, n, r, o), !0;
    case "dragenter":
      return Ot = cr(Ot, e, t, n, r, o), !0;
    case "mouseover":
      return Dt = cr(Dt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return br.set(l, cr(br.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Rr.set(l, cr(Rr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function td(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bc(n), t !== null) {
          e.blockedOn = t, ed(e.priority, function() {
            Zc(n);
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
    var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ui = r, n.target.dispatchEvent(r), Ui = null;
    } else return t = Yr(n), t !== null && Is(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Ao(e) && n.delete(t);
}
function cm() {
  Qi = !1, $t !== null && Ao($t) && ($t = null), Ot !== null && Ao(Ot) && (Ot = null), Dt !== null && Ao(Dt) && (Dt = null), br.forEach(fu), Rr.forEach(fu);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qi || (Qi = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, cm)));
}
function Mr(e) {
  function t(o) {
    return dr(o, e);
  }
  if (0 < Eo.length) {
    dr(Eo[0], e);
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && dr($t, e), Ot !== null && dr(Ot, e), Dt !== null && dr(Dt, e), br.forEach(t), Rr.forEach(t), n = 0; n < bt.length; n++) r = bt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && (n = bt[0], n.blockedOn === null); ) td(n), n.blockedOn === null && bt.shift();
}
var On = St.ReactCurrentBatchConfig, nl = !0;
function dm(e, t, n, r) {
  var o = V, l = On.transition;
  On.transition = null;
  try {
    V = 1, $s(e, t, n, r);
  } finally {
    V = o, On.transition = l;
  }
}
function fm(e, t, n, r) {
  var o = V, l = On.transition;
  On.transition = null;
  try {
    V = 4, $s(e, t, n, r);
  } finally {
    V = o, On.transition = l;
  }
}
function $s(e, t, n, r) {
  if (nl) {
    var o = Gi(e, t, n, r);
    if (o === null) hi(e, t, r, rl, n), du(e, r);
    else if (um(o, e, t, n, r)) r.stopPropagation();
    else if (du(e, r), t & 4 && -1 < am.indexOf(e)) {
      for (; o !== null; ) {
        var l = Yr(o);
        if (l !== null && qc(l), l = Gi(e, t, n, r), l === null && hi(e, t, r, rl, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else hi(e, t, r, null, n);
  }
}
var rl = null;
function Gi(e, t, n, r) {
  if (rl = null, e = bs(r), e = Jt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return rl = e, null;
}
function nd(e) {
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
        case Rs:
          return 1;
        case Gc:
          return 4;
        case el:
        case em:
          return 16;
        case Kc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Os = null, Uo = null;
function rd() {
  if (Uo) return Uo;
  var e, t = Os, n = t.length, r, o = "value" in Mt ? Mt.value : Mt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Uo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ho(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function zo() {
  return !0;
}
function pu() {
  return !1;
}
function Fe(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? zo : pu, this.isPropagationStopped = pu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zo);
  }, persist: function() {
  }, isPersistent: zo }), t;
}
var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ds = Fe(Kn), Kr = oe({}, Kn, { view: 0, detail: 0 }), pm = Fe(Kr), ii, si, fr, Sl = oe({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (ii = e.screenX - fr.screenX, si = e.screenY - fr.screenY) : si = ii = 0, fr = e), ii);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : si;
} }), mu = Fe(Sl), mm = oe({}, Sl, { dataTransfer: 0 }), hm = Fe(mm), gm = oe({}, Kr, { relatedTarget: 0 }), ai = Fe(gm), vm = oe({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ym = Fe(vm), xm = oe({}, Kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wm = Fe(xm), _m = oe({}, Kn, { data: 0 }), hu = Fe(_m), km = {
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
function Fs() {
  return Nm;
}
var jm = oe({}, Kr, { key: function(e) {
  if (e.key) {
    var t = km[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fs, charCode: function(e) {
  return e.type === "keypress" ? Ho(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Em = Fe(jm), zm = oe({}, Sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gu = Fe(zm), Tm = oe({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fs }), Pm = Fe(Tm), Lm = oe({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = Fe(Lm), Rm = oe({}, Sl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mm = Fe(Rm), Im = [9, 13, 27, 32], As = xt && "CompositionEvent" in window, kr = null;
xt && "documentMode" in document && (kr = document.documentMode);
var $m = xt && "TextEvent" in window && !kr, od = xt && (!As || kr && 8 < kr && 11 >= kr), vu = " ", yu = !1;
function ld(e, t) {
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
function id(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function Om(e, t) {
  switch (e) {
    case "compositionend":
      return id(t);
    case "keypress":
      return t.which !== 32 ? null : (yu = !0, vu);
    case "textInput":
      return e = t.data, e === vu && yu ? null : e;
    default:
      return null;
  }
}
function Dm(e, t) {
  if (Cn) return e === "compositionend" || !As && ld(e, t) ? (e = rd(), Uo = Os = Mt = null, Cn = !1, e) : null;
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
      return od && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function sd(e, t, n, r) {
  Dc(r), t = ol(t, "onChange"), 0 < t.length && (n = new Ds("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, Ir = null;
function Am(e) {
  yd(e, 0);
}
function Cl(e) {
  var t = En(e);
  if (Lc(t)) return e;
}
function Um(e, t) {
  if (e === "change") return t;
}
var ad = !1;
if (xt) {
  var ui;
  if (xt) {
    var ci = "oninput" in document;
    if (!ci) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"), ci = typeof wu.oninput == "function";
    }
    ui = ci;
  } else ui = !1;
  ad = ui && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Sr && (Sr.detachEvent("onpropertychange", ud), Ir = Sr = null);
}
function ud(e) {
  if (e.propertyName === "value" && Cl(Ir)) {
    var t = [];
    sd(t, Ir, e, bs(e)), Hc(Am, t);
  }
}
function Hm(e, t, n) {
  e === "focusin" ? (_u(), Sr = t, Ir = n, Sr.attachEvent("onpropertychange", ud)) : e === "focusout" && _u();
}
function Bm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cl(Ir);
}
function Vm(e, t) {
  if (e === "click") return Cl(t);
}
function Wm(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function Qm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : Qm;
function $r(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ti.call(t, o) || !nt(e[o], t[o])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = ku(e);
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
    n = ku(n);
  }
}
function cd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function dd() {
  for (var e = window, t = qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qo(e.document);
  }
  return t;
}
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Gm(e) {
  var t = dd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Us(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Su(n, l);
        var i = Su(
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
var Km = xt && "documentMode" in document && 11 >= document.documentMode, Nn = null, Ki = null, Cr = null, Yi = !1;
function Cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yi || Nn == null || Nn !== qo(r) || (r = Nn, "selectionStart" in r && Us(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Cr && $r(Cr, r) || (Cr = r, r = ol(Ki, "onSelect"), 0 < r.length && (t = new Ds("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Nn)));
}
function To(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var jn = { animationend: To("Animation", "AnimationEnd"), animationiteration: To("Animation", "AnimationIteration"), animationstart: To("Animation", "AnimationStart"), transitionend: To("Transition", "TransitionEnd") }, di = {}, fd = {};
xt && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
function Nl(e) {
  if (di[e]) return di[e];
  if (!jn[e]) return e;
  var t = jn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fd) return di[e] = t[n];
  return e;
}
var pd = Nl("animationend"), md = Nl("animationiteration"), hd = Nl("animationstart"), gd = Nl("transitionend"), vd = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  vd.set(e, t), cn(t, [e]);
}
for (var fi = 0; fi < Nu.length; fi++) {
  var pi = Nu[fi], Ym = pi.toLowerCase(), Xm = pi[0].toUpperCase() + pi.slice(1);
  Qt(Ym, "on" + Xm);
}
Qt(pd, "onAnimationEnd");
Qt(md, "onAnimationIteration");
Qt(hd, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(gd, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function ju(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yp(r, t, void 0, e), e.currentTarget = null;
}
function yd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== l && o.isPropagationStopped()) break e;
        ju(o, u, m), l = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== l && o.isPropagationStopped()) break e;
        ju(o, u, m), l = c;
      }
    }
  }
  if (Jo) throw e = Vi, Jo = !1, Vi = null, e;
}
function q(e, t) {
  var n = t[es];
  n === void 0 && (n = t[es] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (xd(t, e, 2, !1), n.add(r));
}
function mi(e, t, n) {
  var r = 0;
  t && (r |= 4), xd(n, e, r, t);
}
var Po = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[Po]) {
    e[Po] = !0, jc.forEach(function(n) {
      n !== "selectionchange" && (qm.has(n) || mi(n, !1, e), mi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Po] || (t[Po] = !0, mi("selectionchange", !1, t));
  }
}
function xd(e, t, n, r) {
  switch (nd(t)) {
    case 1:
      var o = dm;
      break;
    case 4:
      o = fm;
      break;
    default:
      o = $s;
  }
  n = o.bind(null, t, n, e), o = void 0, !Bi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hi(e, t, n, r, o) {
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
  Hc(function() {
    var m = l, x = bs(n), w = [];
    e: {
      var y = vd.get(e);
      if (y !== void 0) {
        var C = Ds, N = e;
        switch (e) {
          case "keypress":
            if (Ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Em;
            break;
          case "focusin":
            N = "focus", C = ai;
            break;
          case "focusout":
            N = "blur", C = ai;
            break;
          case "beforeblur":
          case "afterblur":
            C = ai;
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
            C = mu;
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
            C = Pm;
            break;
          case pd:
          case md:
          case hd:
            C = ym;
            break;
          case gd:
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
            C = gu;
        }
        var j = (t & 4) !== 0, W = !j && e === "scroll", p = j ? y !== null ? y + "Capture" : null : y;
        j = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = Lr(d, p), _ != null && j.push(Dr(d, _, h)))), W) break;
          d = d.return;
        }
        0 < j.length && (y = new C(y, N, null, n, x), w.push({ event: y, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", y && n !== Ui && (N = n.relatedTarget || n.fromElement) && (Jt(N) || N[wt])) break e;
        if ((C || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = m, N = N ? Jt(N) : null, N !== null && (W = dn(N), N !== W || N.tag !== 5 && N.tag !== 6) && (N = null)) : (C = null, N = m), C !== N)) {
          if (j = mu, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = gu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), W = C == null ? y : En(C), h = N == null ? y : En(N), y = new j(_, d + "leave", C, n, x), y.target = W, y.relatedTarget = h, _ = null, Jt(x) === m && (j = new j(p, d + "enter", N, n, x), j.target = h, j.relatedTarget = W, _ = j), W = _, C && N) t: {
            for (j = C, p = N, d = 0, h = j; h; h = _n(h)) d++;
            for (h = 0, _ = p; _; _ = _n(_)) h++;
            for (; 0 < d - h; ) j = _n(j), d--;
            for (; 0 < h - d; ) p = _n(p), h--;
            for (; d--; ) {
              if (j === p || p !== null && j === p.alternate) break t;
              j = _n(j), p = _n(p);
            }
            j = null;
          }
          else j = null;
          C !== null && Eu(w, y, C, j, !1), N !== null && W !== null && Eu(w, W, N, j, !0);
        }
      }
      e: {
        if (y = m ? En(m) : window, C = y.nodeName && y.nodeName.toLowerCase(), C === "select" || C === "input" && y.type === "file") var E = Um;
        else if (xu(y)) if (ad) E = Wm;
        else {
          E = Bm;
          var L = Hm;
        }
        else (C = y.nodeName) && C.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Vm);
        if (E && (E = E(e, m))) {
          sd(w, E, n, x);
          break e;
        }
        L && L(e, y, m), e === "focusout" && (L = y._wrapperState) && L.controlled && y.type === "number" && $i(y, "number", y.value);
      }
      switch (L = m ? En(m) : window, e) {
        case "focusin":
          (xu(L) || L.contentEditable === "true") && (Nn = L, Ki = m, Cr = null);
          break;
        case "focusout":
          Cr = Ki = Nn = null;
          break;
        case "mousedown":
          Yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Yi = !1, Cu(w, n, x);
          break;
        case "selectionchange":
          if (Km) break;
        case "keydown":
        case "keyup":
          Cu(w, n, x);
      }
      var b;
      if (As) e: {
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
      else Cn ? ld(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (od && n.locale !== "ko" && (Cn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Cn && (b = rd()) : (Mt = x, Os = "value" in Mt ? Mt.value : Mt.textContent, Cn = !0)), L = ol(m, R), 0 < L.length && (R = new hu(R, e, null, n, x), w.push({ event: R, listeners: L }), b ? R.data = b : (b = id(n), b !== null && (R.data = b)))), (b = $m ? Om(e, n) : Dm(e, n)) && (m = ol(m, "onBeforeInput"), 0 < m.length && (x = new hu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = b));
    }
    yd(w, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Lr(e, n), l != null && r.unshift(Dr(e, l, o)), l = Lr(e, t), l != null && r.push(Dr(e, l, o))), e = e.return;
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, o ? (c = Lr(n, l), c != null && i.unshift(Dr(n, c, u))) : o || (c = Lr(n, l), c != null && i.push(Dr(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Zm = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zm, `
`).replace(Jm, "");
}
function Lo(e, t, n) {
  if (t = zu(t), zu(e) !== t && n) throw Error(S(425));
}
function ll() {
}
var Xi = null, qi = null;
function Zi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ji = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, Tu = typeof Promise == "function" ? Promise : void 0, th = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tu < "u" ? function(e) {
  return Tu.resolve(null).then(e).catch(nh);
} : Ji;
function nh(e) {
  setTimeout(function() {
    throw e;
  });
}
function gi(e, t) {
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
var Yn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Yn, Fr = "__reactProps$" + Yn, wt = "__reactContainer$" + Yn, es = "__reactEvents$" + Yn, rh = "__reactListeners$" + Yn, oh = "__reactHandles$" + Yn;
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
function Yr(e) {
  return e = e[ct] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function jl(e) {
  return e[Fr] || null;
}
var ts = [], zn = -1;
function Gt(e) {
  return { current: e };
}
function Z(e) {
  0 > zn || (e.current = ts[zn], ts[zn] = null, zn--);
}
function K(e, t) {
  zn++, ts[zn] = e.current, e.current = t;
}
var Wt = {}, Se = Gt(Wt), Le = Gt(!1), on = Wt;
function Un(e, t) {
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
function il() {
  Z(Le), Z(Se);
}
function Lu(e, t, n) {
  if (Se.current !== Wt) throw Error(S(168));
  K(Se, t), K(Le, n);
}
function wd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Hp(e) || "Unknown", o));
  return oe({}, n, r);
}
function sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, on = Se.current, K(Se, e), K(Le, Le.current), !0;
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = wd(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Se), K(Se, e)) : Z(Le), K(Le, n);
}
var ht = null, El = !1, vi = !1;
function _d(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function lh(e) {
  El = !0, _d(e);
}
function Kt() {
  if (!vi && ht !== null) {
    vi = !0;
    var e = 0, t = V;
    try {
      var n = ht;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, El = !1;
    } catch (o) {
      throw ht !== null && (ht = ht.slice(e + 1)), Qc(Rs, Kt), o;
    } finally {
      V = t, vi = !1;
    }
  }
  return null;
}
var Tn = [], Pn = 0, al = null, ul = 0, He = [], Be = 0, ln = null, gt = 1, vt = "";
function qt(e, t) {
  Tn[Pn++] = ul, Tn[Pn++] = al, al = e, ul = t;
}
function kd(e, t, n) {
  He[Be++] = gt, He[Be++] = vt, He[Be++] = ln, ln = e;
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
function Hs(e) {
  e.return !== null && (qt(e, 1), kd(e, 1, 0));
}
function Bs(e) {
  for (; e === al; ) al = Tn[--Pn], Tn[Pn] = null, ul = Tn[--Pn], Tn[Pn] = null;
  for (; e === ln; ) ln = He[--Be], He[Be] = null, vt = He[--Be], He[Be] = null, gt = He[--Be], He[Be] = null;
}
var $e = null, Ie = null, ee = !1, Je = null;
function Sd(e, t) {
  var n = Ve(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, Ie = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: gt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ve(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rs(e) {
  if (ee) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (ns(e)) throw Error(S(418));
        t = Ft(n.nextSibling);
        var r = $e;
        t && Ru(e, t) ? Sd(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, $e = e);
      }
    } else {
      if (ns(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, $e = e;
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function bo(e) {
  if (e !== $e) return !1;
  if (!ee) return Mu(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (ns(e)) throw Cd(), Error(S(418));
    for (; t; ) Sd(e, t), t = Ft(t.nextSibling);
  }
  if (Mu(e), e.tag === 13) {
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
function Cd() {
  for (var e = Ie; e; ) e = Ft(e.nextSibling);
}
function Hn() {
  Ie = $e = null, ee = !1;
}
function Vs(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var ih = St.ReactCurrentBatchConfig;
function pr(e, t, n) {
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
function Ro(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Nd(e) {
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
    return d === null || d.tag !== 6 ? (d = Ci(h, p.mode, _), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var E = h.type;
    return E === Sn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Pt && Iu(E) === d.type) ? (_ = o(d, h.props), _.ref = pr(p, d, h), _.return = p, _) : (_ = Yo(h.type, h.key, h.props, null, p.mode, _), _.ref = pr(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Ni(h, p.mode, _), d.return = p, d) : (d = o(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, E) {
    return d === null || d.tag !== 7 ? (d = rn(h, p.mode, _, E), d.return = p, d) : (d = o(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ci("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ko:
          return h = Yo(d.type, d.key, d.props, null, p.mode, h), h.ref = pr(p, null, d), h.return = p, h;
        case kn:
          return d = Ni(d, p.mode, h), d.return = p, d;
        case Pt:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (vr(d) || ar(d)) return d = rn(d, p.mode, h, null), d.return = p, d;
      Ro(p, d);
    }
    return null;
  }
  function y(p, d, h, _) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ko:
          return h.key === E ? c(p, d, h, _) : null;
        case kn:
          return h.key === E ? m(p, d, h, _) : null;
        case Pt:
          return E = h._init, y(
            p,
            d,
            E(h._payload),
            _
          );
      }
      if (vr(h) || ar(h)) return E !== null ? null : x(p, d, h, _, null);
      Ro(p, h);
    }
    return null;
  }
  function C(p, d, h, _, E) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ko:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, E);
        case kn:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, E);
        case Pt:
          var L = _._init;
          return C(p, d, h, L(_._payload), E);
      }
      if (vr(_) || ar(_)) return p = p.get(h) || null, x(d, p, _, E, null);
      Ro(d, _);
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
    var E = ar(h);
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
    return e && b.forEach(function(rt) {
      return t(p, rt);
    }), ee && qt(p, R), E;
  }
  function W(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === Sn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ko:
          e: {
            for (var E = h.key, L = d; L !== null; ) {
              if (L.key === E) {
                if (E = h.type, E === Sn) {
                  if (L.tag === 7) {
                    n(p, L.sibling), d = o(L, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (L.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Pt && Iu(E) === L.type) {
                  n(p, L.sibling), d = o(L, h.props), d.ref = pr(p, L, h), d.return = p, p = d;
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === Sn ? (d = rn(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Yo(h.type, h.key, h.props, null, p.mode, _), _.ref = pr(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case kn:
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
            d = Ni(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case Pt:
          return L = h._init, W(p, d, L(h._payload), _);
      }
      if (vr(h)) return N(p, d, h, _);
      if (ar(h)) return j(p, d, h, _);
      Ro(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = o(d, h), d.return = p, p = d) : (n(p, d), d = Ci(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return W;
}
var Bn = Nd(!0), jd = Nd(!1), cl = Gt(null), dl = null, Ln = null, Ws = null;
function Qs() {
  Ws = Ln = dl = null;
}
function Gs(e) {
  var t = cl.current;
  Z(cl), e._currentValue = t;
}
function os(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Dn(e, t) {
  dl = e, Ws = Ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (Ws !== e) if (e = { context: e, memoizedValue: t, next: null }, Ln === null) {
    if (dl === null) throw Error(S(308));
    Ln = e, dl.dependencies = { lanes: 0, firstContext: e };
  } else Ln = Ln.next = e;
  return t;
}
var en = null;
function Ks(e) {
  en === null ? en = [e] : en.push(e);
}
function Ed(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ks(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Ys(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zd(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, Ks(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _t(e, n);
}
function Bo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ms(e, n);
  }
}
function $u(e, t) {
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
function fl(e, t, n, r) {
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
function Ou(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var Xr = {}, ft = Gt(Xr), Ar = Gt(Xr), Ur = Gt(Xr);
function tn(e) {
  if (e === Xr) throw Error(S(174));
  return e;
}
function Xs(e, t) {
  switch (K(Ur, t), K(Ar, e), K(ft, Xr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Di(t, e);
  }
  Z(ft), K(ft, t);
}
function Vn() {
  Z(ft), Z(Ar), Z(Ur);
}
function Td(e) {
  tn(Ur.current);
  var t = tn(ft.current), n = Di(t, e.type);
  t !== n && (K(Ar, e), K(ft, n));
}
function qs(e) {
  Ar.current === e && (Z(ft), Z(Ar));
}
var ne = Gt(0);
function pl(e) {
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
var yi = [];
function Zs() {
  for (var e = 0; e < yi.length; e++) yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var Vo = St.ReactCurrentDispatcher, xi = St.ReactCurrentBatchConfig, sn = 0, re = null, ue = null, pe = null, ml = !1, Nr = !1, Hr = 0, sh = 0;
function we() {
  throw Error(S(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, o, l) {
  if (sn = l, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vo.current = e === null || e.memoizedState === null ? dh : fh, e = n(r, o), Nr) {
    l = 0;
    do {
      if (Nr = !1, Hr = 0, 25 <= l) throw Error(S(301));
      l += 1, pe = ue = null, t.updateQueue = null, Vo.current = ph, e = n(r, o);
    } while (Nr);
  }
  if (Vo.current = hl, t = ue !== null && ue.next !== null, sn = 0, pe = ue = re = null, ml = !1, t) throw Error(S(300));
  return e;
}
function ta() {
  var e = Hr !== 0;
  return Hr = 0, e;
}
function ut() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? re.memoizedState = pe = e : pe = pe.next = e, pe;
}
function Ge() {
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
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = Ge(), n = t.queue;
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
    c === null ? i = r : c.next = u, nt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, re.lanes |= l, an |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _i(e) {
  var t = Ge(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    nt(l, t.memoizedState) || (Pe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Pd() {
}
function Ld(e, t) {
  var n = re, r = Ge(), o = t(), l = !nt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Pe = !0), r = r.queue, na(Md.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || pe !== null && pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vr(9, Rd.bind(null, n, r, o, t), void 0, null), me === null) throw Error(S(349));
    sn & 30 || bd(n, t, o);
  }
  return o;
}
function bd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Rd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Id(t) && $d(e);
}
function Md(e, t, n) {
  return n(function() {
    Id(t) && $d(e);
  });
}
function Id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function $d(e) {
  var t = _t(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Du(e) {
  var t = ut();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: e }, t.queue = e, e = e.dispatch = ch.bind(null, re, e), [t.memoizedState, e];
}
function Vr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Od() {
  return Ge().memoizedState;
}
function Wo(e, t, n, r) {
  var o = ut();
  re.flags |= e, o.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r);
}
function zl(e, t, n, r) {
  var o = Ge();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (l = i.destroy, r !== null && Js(r, i.deps)) {
      o.memoizedState = Vr(t, n, l, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = Vr(1 | t, n, l, r);
}
function Fu(e, t) {
  return Wo(8390656, 8, e, t);
}
function na(e, t) {
  return zl(2048, 8, e, t);
}
function Dd(e, t) {
  return zl(4, 2, e, t);
}
function Fd(e, t) {
  return zl(4, 4, e, t);
}
function Ad(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ud(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zl(4, 4, Ad.bind(null, t, e), n);
}
function ra() {
}
function Hd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vd(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = Yc(), re.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function ah(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, xi.transition = r;
  }
}
function Wd() {
  return Ge().memoizedState;
}
function uh(e, t, n) {
  var r = Ht(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qd(e)) Gd(t, n);
  else if (n = Ed(e, t, n, r), n !== null) {
    var o = Ne();
    tt(n, e, r, o), Kd(n, t, r);
  }
}
function ch(e, t, n) {
  var r = Ht(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qd(e)) Gd(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, u = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = u, nt(u, i)) {
        var c = t.interleaved;
        c === null ? (o.next = o, Ks(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Ed(e, t, o, r), n !== null && (o = Ne(), tt(n, e, r, o), Kd(n, t, r));
  }
}
function Qd(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function Gd(e, t) {
  Nr = ml = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Kd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ms(e, n);
  }
}
var hl = { readContext: Qe, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, dh = { readContext: Qe, useCallback: function(e, t) {
  return ut().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wo(
    4194308,
    4,
    Ad.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ut();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ut();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uh.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ut();
  return e = { current: e }, t.memoizedState = e;
}, useState: Du, useDebugValue: ra, useDeferredValue: function(e) {
  return ut().memoizedState = e;
}, useTransition: function() {
  var e = Du(!1), t = e[0];
  return e = ah.bind(null, e[1]), ut().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = ut();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), me === null) throw Error(S(349));
    sn & 30 || bd(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Fu(Md.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Vr(9, Rd.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = ut(), t = me.identifierPrefix;
  if (ee) {
    var n = vt, r = gt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fh = {
  readContext: Qe,
  useCallback: Hd,
  useContext: Qe,
  useEffect: na,
  useImperativeHandle: Ud,
  useInsertionEffect: Dd,
  useLayoutEffect: Fd,
  useMemo: Bd,
  useReducer: wi,
  useRef: Od,
  useState: function() {
    return wi(Br);
  },
  useDebugValue: ra,
  useDeferredValue: function(e) {
    var t = Ge();
    return Vd(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = wi(Br)[0], t = Ge().memoizedState;
    return [e, t];
  },
  useMutableSource: Pd,
  useSyncExternalStore: Ld,
  useId: Wd,
  unstable_isNewReconciler: !1
}, ph = { readContext: Qe, useCallback: Hd, useContext: Qe, useEffect: na, useImperativeHandle: Ud, useInsertionEffect: Dd, useLayoutEffect: Fd, useMemo: Bd, useReducer: _i, useRef: Od, useState: function() {
  return _i(Br);
}, useDebugValue: ra, useDeferredValue: function(e) {
  var t = Ge();
  return ue === null ? t.memoizedState = e : Vd(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = _i(Br)[0], t = Ge().memoizedState;
  return [e, t];
}, useMutableSource: Pd, useSyncExternalStore: Ld, useId: Wd, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ls(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Ht(e), l = yt(r, o);
  l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (tt(t, e, o, r), Bo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = Ht(e), l = yt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = At(e, l, o), t !== null && (tt(t, e, o, r), Bo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Ht(e), o = yt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = At(e, o, r), t !== null && (tt(t, e, r, n), Bo(t, e, r));
} };
function Au(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(o, l) : !0;
}
function Yd(e, t, n) {
  var r = !1, o = Wt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Qe(l) : (o = be(t) ? on : Se.current, r = t.contextTypes, l = (r = r != null) ? Un(e, o) : Wt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Uu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function is(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ys(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Qe(l) : (l = be(t) ? on : Se.current, o.context = Un(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ls(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Tl.enqueueReplaceState(o, o.state, null), fl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t) {
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
function ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ss(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mh = typeof WeakMap == "function" ? WeakMap : Map;
function Xd(e, t, n) {
  n = yt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vl || (vl = !0, vs = r), ss(e, t);
  }, n;
}
function qd(e, t, n) {
  n = yt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ss(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    ss(e, t), typeof r != "function" && (Ut === null ? Ut = /* @__PURE__ */ new Set([this]) : Ut.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mh();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = zh.bind(null, e, t, n), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var hh = St.ReactCurrentOwner, Pe = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? jd(t, null, n, r) : Bn(t, e.child, n, r);
}
function Wu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Dn(t, o), r = ea(e, t, n, r, l, o), n = ta(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && n && Hs(t), t.flags |= 1, Ce(e, t, r, o), t.child);
}
function Qu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !da(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Zd(e, t, l, r, o)) : (e = Yo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(i, r) && e.ref === t.ref) return kt(e, t, o);
  }
  return t.flags |= 1, e = Bt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if ($r(l, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, kt(e, t, o);
  }
  return as(e, t, n, r, o);
}
function Jd(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Rn, Me), Me |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Rn, Me), Me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(Rn, Me), Me |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Rn, Me), Me |= r;
  return Ce(e, t, o, n), t.child;
}
function ef(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function as(e, t, n, r, o) {
  var l = be(n) ? on : Se.current;
  return l = Un(t, l), Dn(t, o), n = ea(e, t, n, r, l, o), r = ta(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (ee && r && Hs(t), t.flags |= 1, Ce(e, t, n, o), t.child);
}
function Gu(e, t, n, r, o) {
  if (be(n)) {
    var l = !0;
    sl(t);
  } else l = !1;
  if (Dn(t, o), t.stateNode === null) Qo(e, t), Yd(t, n, r), is(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Qe(m) : (m = be(n) ? on : Se.current, m = Un(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Uu(t, i, r, m), Lt = !1;
    var y = t.memoizedState;
    i.state = y, fl(t, r, i, o), c = t.memoizedState, u !== r || y !== c || Le.current || Lt ? (typeof x == "function" && (ls(t, n, x, r), c = t.memoizedState), (u = Lt || Au(t, n, u, r, y, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, zd(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : qe(t.type, u), i.props = m, w = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Qe(c) : (c = be(n) ? on : Se.current, c = Un(t, c));
    var C = n.getDerivedStateFromProps;
    (x = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || y !== c) && Uu(t, i, r, c), Lt = !1, y = t.memoizedState, i.state = y, fl(t, r, i, o);
    var N = t.memoizedState;
    u !== w || y !== N || Le.current || Lt ? (typeof C == "function" && (ls(t, n, C, r), N = t.memoizedState), (m = Lt || Au(t, n, m, r, y, N, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, N, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), i.props = r, i.state = N, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return us(e, t, n, r, l, o);
}
function us(e, t, n, r, o, l) {
  ef(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && bu(t, n, !1), kt(e, t, l);
  r = t.stateNode, hh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Bn(t, e.child, null, l), t.child = Bn(t, null, u, l)) : Ce(e, t, u, l), t.memoizedState = r.state, o && bu(t, n, !0), t.child;
}
function tf(e) {
  var t = e.stateNode;
  t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), Xs(e, t.containerInfo);
}
function Ku(e, t, n, r, o) {
  return Hn(), Vs(o), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var cs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nf(e, t, n) {
  var r = t.pendingProps, o = ne.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ne, o & 1), e === null)
    return rs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = bl(i, r, 0, null), e = rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ds(n), t.memoizedState = cs, e) : oa(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return gh(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Bt(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Bt(u, l) : (l = rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? ds(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = cs, r;
  }
  return l = e.child, e = l.sibling, r = Bt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function oa(e, t) {
  return t = bl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mo(e, t, n, r) {
  return r !== null && Vs(r), Bn(t, e.child, null, n), e = oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ki(Error(S(422))), Mo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = bl({ mode: "visible", children: r.children }, o, 0, null), l = rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Bn(t, e.child, null, i), t.child.memoizedState = ds(i), t.memoizedState = cs, l);
  if (!(t.mode & 1)) return Mo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
    return r = u, l = Error(S(419)), r = ki(l, r, void 0), Mo(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Pe || u) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, _t(e, o), tt(r, e, o, -1));
    }
    return ca(), r = ki(Error(S(421))), Mo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Th.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ie = Ft(o.nextSibling), $e = t, ee = !0, Je = null, e !== null && (He[Be++] = gt, He[Be++] = vt, He[Be++] = ln, gt = e.id, vt = e.overflow, ln = t), t = oa(t, r.children), t.flags |= 4096, t);
}
function Yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), os(e.return, t, n);
}
function Si(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function rf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Ce(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Yu(e, n, t);
      else if (e.tag === 19) Yu(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && pl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Si(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && pl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Si(t, !0, n, null, l);
      break;
    case "together":
      Si(t, !1, null, null, void 0);
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
      tf(t), Hn();
      break;
    case 5:
      Td(t);
      break;
    case 1:
      be(t.type) && sl(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(cl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nf(e, t, n) : (K(ne, ne.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return rf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Jd(e, t, n);
  }
  return kt(e, t, n);
}
var of, fs, lf, sf;
of = function(e, t) {
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
fs = function() {
};
lf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, tn(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = Mi(e, o), r = Mi(e, r), l = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Oi(e, o), r = Oi(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ll);
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
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (l = l || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Tr.hasOwnProperty(m) ? (c != null && m === "onScroll" && q("scroll", e), l || u === c || (l = [])) : (l = l || []).push(m, c));
    }
    n && (l = l || []).push("style", n);
    var m = l;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
sf = function(e, t, n, r) {
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
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yh(e, t, n) {
  var r = t.pendingProps;
  switch (Bs(t), t.tag) {
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
      return be(t.type) && il(), _e(t), null;
    case 3:
      return r = t.stateNode, Vn(), Z(Le), Z(Se), Zs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (ws(Je), Je = null))), fs(e, t), _e(t), null;
    case 5:
      qs(t);
      var o = tn(Ur.current);
      if (n = t.type, e !== null && t.stateNode != null) lf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return _e(t), null;
        }
        if (e = tn(ft.current), bo(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[ct] = t, r[Fr] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < xr.length; o++) q(xr[o], r);
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
              ou(r, l), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, q("invalid", r);
              break;
            case "textarea":
              iu(r, l), q("invalid", r);
          }
          Fi(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var u = l[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Lo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && Lo(
              r.textContent,
              u,
              e
            ), o = ["children", "" + u]) : Tr.hasOwnProperty(i) && u != null && i === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              So(r), lu(r, l, !0);
              break;
            case "textarea":
              So(r), su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ll);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ct] = t, e[Fr] = r, of(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ai(n, r), n) {
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
                for (o = 0; o < xr.length; o++) q(xr[o], e);
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
                ou(e, r), o = Mi(e, r), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                iu(e, r), o = Oi(e, r), q("invalid", e);
                break;
              default:
                o = r;
            }
            Fi(n, o), u = o;
            for (l in u) if (u.hasOwnProperty(l)) {
              var c = u[l];
              l === "style" ? Oc(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ic(e, c)) : l === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Pr(e, c) : typeof c == "number" && Pr(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Tr.hasOwnProperty(l) ? c != null && l === "onScroll" && q("scroll", e) : c != null && zs(e, l, c, i));
            }
            switch (n) {
              case "input":
                So(e), lu(e, r, !1);
                break;
              case "textarea":
                So(e), su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Mn(e, !!r.multiple, l, !1) : r.defaultValue != null && Mn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ll);
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
      if (e && t.stateNode != null) sf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = tn(Ur.current), tn(ft.current), bo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (l = r.nodeValue !== n) && (e = $e, e !== null)) switch (e.tag) {
            case 3:
              Lo(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Lo(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (Z(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Ie !== null && t.mode & 1 && !(t.flags & 128)) Cd(), Hn(), t.flags |= 98560, l = !1;
        else if (l = bo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
            l[ct] = t;
          } else Hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), l = !1;
        } else Je !== null && (ws(Je), Je = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : ca())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Vn(), fs(e, t), e === null && Or(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return Gs(t.type._context), _e(t), null;
    case 17:
      return be(t.type) && il(), _e(t), null;
    case 19:
      if (Z(ne), l = t.memoizedState, l === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) mr(l, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = pl(e), i !== null) {
            for (t.flags |= 128, mr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && ie() > Qn && (t.flags |= 128, r = !0, mr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = pl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return _e(t), null;
        } else 2 * ie() - l.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, n = ne.current, K(ne, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return ua(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function xh(e, t) {
  switch (Bs(t), t.tag) {
    case 1:
      return be(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vn(), Z(Le), Z(Se), Zs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qs(t), null;
    case 13:
      if (Z(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        Hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ne), null;
    case 4:
      return Vn(), null;
    case 10:
      return Gs(t.type._context), null;
    case 22:
    case 23:
      return ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1, ke = !1, wh = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function ps(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Xu = !1;
function _h(e, t) {
  if (Xi = nl, e = dd(), Us(e)) {
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
  for (qi = { focusedElem: e, selectionRange: n }, nl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
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
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return N = Xu, Xu = !1, N;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && ps(t, n, l);
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
function ms(e) {
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
function af(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, af(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Fr], delete t[es], delete t[rh], delete t[oh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || uf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && (e = e.child, e !== null)) for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), e = e.sibling;
}
function gs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), e = e.sibling;
}
var ge = null, Ze = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) cf(e, t, n), n = n.sibling;
}
function cf(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == "function") try {
    dt.onCommitFiberUnmount(kl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || bn(n, t);
    case 6:
      var r = ge, o = Ze;
      ge = null, Tt(e, t, n), ge = r, Ze = o, ge !== null && (Ze ? (e = ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (Ze ? (e = ge, n = n.stateNode, e.nodeType === 8 ? gi(e.parentNode, n) : e.nodeType === 1 && gi(e, n), Mr(e)) : gi(ge, n.stateNode));
      break;
    case 4:
      r = ge, o = Ze, ge = n.stateNode.containerInfo, Ze = !0, Tt(e, t, n), ge = r, Ze = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && ps(n, t, i), o = o.next;
        } while (o !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (!ke && (bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        le(n, t, u);
      }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Tt(e, t, n), ke = r) : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wh()), t.forEach(function(r) {
      var o = Ph.bind(null, e, r);
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
            ge = u.stateNode, Ze = !1;
            break e;
          case 3:
            ge = u.stateNode.containerInfo, Ze = !0;
            break e;
          case 4:
            ge = u.stateNode.containerInfo, Ze = !0;
            break e;
        }
        u = u.return;
      }
      if (ge === null) throw Error(S(160));
      cf(l, i, o), ge = null, Ze = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (m) {
      le(o, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) df(t, e), t = t.sibling;
}
function df(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Xe(t, e), at(e), r & 4) {
        try {
          jr(3, e, e.return), Pl(3, e);
        } catch (j) {
          le(e, e.return, j);
        }
        try {
          jr(5, e, e.return);
        } catch (j) {
          le(e, e.return, j);
        }
      }
      break;
    case 1:
      Xe(t, e), at(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (Xe(t, e), at(e), r & 512 && n !== null && bn(n, n.return), e.flags & 32) {
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
          u === "input" && l.type === "radio" && l.name != null && bc(o, l), Ai(u, i);
          var m = Ai(u, l);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? Oc(o, w) : x === "dangerouslySetInnerHTML" ? Ic(o, w) : x === "children" ? Pr(o, w) : zs(o, x, w, m);
          }
          switch (u) {
            case "input":
              Ii(o, l);
              break;
            case "textarea":
              Rc(o, l);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var C = l.value;
              C != null ? Mn(o, !!l.multiple, C, !1) : y !== !!l.multiple && (l.defaultValue != null ? Mn(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Mn(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Fr] = l;
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
        Mr(t.containerInfo);
      } catch (j) {
        le(e, e.return, j);
      }
      break;
    case 4:
      Xe(t, e), at(e);
      break;
    case 13:
      Xe(t, e), at(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (sa = ie())), r & 4 && Zu(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (m = ke) || x, Xe(t, e), ke = m) : Xe(t, e), at(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (P = e, x = e.child; x !== null; ) {
          for (w = P = x; P !== null; ) {
            switch (y = P, C = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, y, y.return);
                break;
              case 1:
                bn(y, y.return);
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
                bn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  ec(w);
                  continue;
                }
            }
            C !== null ? (C.return = y, P = C) : ec(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                o = w.stateNode, m ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = $c("display", i));
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
      Xe(t, e), at(e), r & 4 && Zu(e);
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
          if (uf(n)) {
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
          var l = qu(e);
          gs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = qu(e);
          hs(e, u, i);
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
  P = e, ff(e);
}
function ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Io;
      if (!i) {
        var u = o.alternate, c = u !== null && u.memoizedState !== null || ke;
        u = Io;
        var m = ke;
        if (Io = i, (ke = c) && !m) for (P = o; P !== null; ) i = P, c = i.child, i.tag === 22 && i.memoizedState !== null ? tc(o) : c !== null ? (c.return = i, P = c) : tc(o);
        for (; l !== null; ) P = l, ff(l), l = l.sibling;
        P = o, Io = u, ke = m;
      }
      Ju(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, P = l) : Ju(e);
  }
}
function Ju(e) {
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
              var o = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Ou(t, l, r);
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
              Ou(t, i, n);
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
        ke || t.flags & 512 && ms(t);
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
function ec(e) {
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
function tc(e) {
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
            ms(t);
          } catch (c) {
            le(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ms(t);
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
var Sh = Math.ceil, gl = St.ReactCurrentDispatcher, la = St.ReactCurrentOwner, We = St.ReactCurrentBatchConfig, H = 0, me = null, ae = null, ve = 0, Me = 0, Rn = Gt(0), ce = 0, Wr = null, an = 0, Ll = 0, ia = 0, Er = null, Te = null, sa = 0, Qn = 1 / 0, mt = null, vl = !1, vs = null, Ut = null, $o = !1, It = null, yl = 0, zr = 0, ys = null, Go = -1, Ko = 0;
function Ne() {
  return H & 6 ? ie() : Go !== -1 ? Go : Go = ie();
}
function Ht(e) {
  return e.mode & 1 ? H & 2 && ve !== 0 ? ve & -ve : ih.transition !== null ? (Ko === 0 && (Ko = Yc()), Ko) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nd(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < zr) throw zr = 0, ys = null, Error(S(185));
  Gr(e, n, r), (!(H & 2) || e !== me) && (e === me && (!(H & 2) && (Ll |= n), ce === 4 && Rt(e, ve)), Re(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Qn = ie() + 500, El && Kt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  im(e, t);
  var r = tl(e, e === me ? ve : 0);
  if (r === 0) n !== null && cu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cu(n), t === 1) e.tag === 0 ? lh(nc.bind(null, e)) : _d(nc.bind(null, e)), th(function() {
      !(H & 6) && Kt();
    }), n = null;
    else {
      switch (Xc(r)) {
        case 1:
          n = Rs;
          break;
        case 4:
          n = Gc;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = Kc;
          break;
        default:
          n = el;
      }
      n = wf(n, pf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function pf(e, t) {
  if (Go = -1, Ko = 0, H & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = tl(e, e === me ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xl(e, r);
  else {
    t = r;
    var o = H;
    H |= 2;
    var l = hf();
    (me !== e || ve !== t) && (mt = null, Qn = ie() + 500, nn(e, t));
    do
      try {
        jh();
        break;
      } catch (u) {
        mf(e, u);
      }
    while (!0);
    Qs(), gl.current = l, H = o, ae !== null ? t = 0 : (me = null, ve = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (o = Wi(e), o !== 0 && (r = o, t = xs(e, o))), t === 1) throw n = Wr, nn(e, 0), Rt(e, r), Re(e, ie()), n;
    if (t === 6) Rt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ch(o) && (t = xl(e, r), t === 2 && (l = Wi(e), l !== 0 && (r = l, t = xs(e, l))), t === 1)) throw n = Wr, nn(e, 0), Rt(e, r), Re(e, ie()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Zt(e, Te, mt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = sa + 500 - ie(), 10 < t)) {
            if (tl(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ji(Zt.bind(null, e, Te, mt), t);
            break;
          }
          Zt(e, Te, mt);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - et(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ji(Zt.bind(null, e, Te, mt), r);
            break;
          }
          Zt(e, Te, mt);
          break;
        case 5:
          Zt(e, Te, mt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Re(e, ie()), e.callbackNode === n ? pf.bind(null, e) : null;
}
function xs(e, t) {
  var n = Er;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = Te, Te = n, t !== null && ws(t)), e;
}
function ws(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Ch(e) {
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
function Rt(e, t) {
  for (t &= ~ia, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function nc(e) {
  if (H & 6) throw Error(S(327));
  Fn();
  var t = tl(e, 0);
  if (!(t & 1)) return Re(e, ie()), null;
  var n = xl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wi(e);
    r !== 0 && (t = r, n = xs(e, r));
  }
  if (n === 1) throw n = Wr, nn(e, 0), Rt(e, t), Re(e, ie()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Te, mt), Re(e, ie()), null;
}
function aa(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Qn = ie() + 500, El && Kt());
  }
}
function un(e) {
  It !== null && It.tag === 0 && !(H & 6) && Fn();
  var t = H;
  H |= 1;
  var n = We.transition, r = V;
  try {
    if (We.transition = null, V = 1, e) return e();
  } finally {
    V = r, We.transition = n, H = t, !(H & 6) && Kt();
  }
}
function ua() {
  Me = Rn.current, Z(Rn);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, eh(n)), ae !== null) for (n = ae.return; n !== null; ) {
    var r = n;
    switch (Bs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        Vn(), Z(Le), Z(Se), Zs();
        break;
      case 5:
        qs(r);
        break;
      case 4:
        Vn();
        break;
      case 13:
        Z(ne);
        break;
      case 19:
        Z(ne);
        break;
      case 10:
        Gs(r.type._context);
        break;
      case 22:
      case 23:
        ua();
    }
    n = n.return;
  }
  if (me = e, ae = e = Bt(e.current, null), ve = Me = t, ce = 0, Wr = null, ia = Ll = an = 0, Te = Er = null, en !== null) {
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
function mf(e, t) {
  do {
    var n = ae;
    try {
      if (Qs(), Vo.current = hl, ml) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ml = !1;
      }
      if (sn = 0, pe = ue = re = null, Nr = !1, Hr = 0, la.current = null, n === null || n.return === null) {
        ce = 1, Wr = t, ae = null;
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
          var C = Bu(i);
          if (C !== null) {
            C.flags &= -257, Vu(C, i, u, l, t), C.mode & 1 && Hu(l, m, t), t = C, c = m;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(l, m, t), ca();
              break e;
            }
            c = Error(S(426));
          }
        } else if (ee && u.mode & 1) {
          var W = Bu(i);
          if (W !== null) {
            !(W.flags & 65536) && (W.flags |= 256), Vu(W, i, u, l, t), Vs(Wn(c, u));
            break e;
          }
        }
        l = c = Wn(c, u), ce !== 4 && (ce = 2), Er === null ? Er = [l] : Er.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var p = Xd(l, c, t);
              $u(l, p);
              break e;
            case 1:
              u = c;
              var d = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ut === null || !Ut.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var _ = qd(l, u, t);
                $u(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      vf(n);
    } catch (E) {
      t = E, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hf() {
  var e = gl.current;
  return gl.current = hl, e === null ? hl : e;
}
function ca() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), me === null || !(an & 268435455) && !(Ll & 268435455) || Rt(me, ve);
}
function xl(e, t) {
  var n = H;
  H |= 2;
  var r = hf();
  (me !== e || ve !== t) && (mt = null, nn(e, t));
  do
    try {
      Nh();
      break;
    } catch (o) {
      mf(e, o);
    }
  while (!0);
  if (Qs(), H = n, gl.current = r, ae !== null) throw Error(S(261));
  return me = null, ve = 0, ce;
}
function Nh() {
  for (; ae !== null; ) gf(ae);
}
function jh() {
  for (; ae !== null && !qp(); ) gf(ae);
}
function gf(e) {
  var t = xf(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? vf(e) : ae = t, la.current = null;
}
function vf(e) {
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
  var r = V, o = We.transition;
  try {
    We.transition = null, V = 1, Eh(e, t, n, r);
  } finally {
    We.transition = o, V = r;
  }
  return null;
}
function Eh(e, t, n, r) {
  do
    Fn();
  while (It !== null);
  if (H & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (sm(e, l), e === me && (ae = me = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $o || ($o = !0, wf(el, function() {
    return Fn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = We.transition, We.transition = null;
    var i = V;
    V = 1;
    var u = H;
    H |= 4, la.current = null, _h(e, n), df(n, e), Gm(qi), nl = !!Xi, qi = Xi = null, e.current = n, kh(n), Zp(), H = u, V = i, We.transition = l;
  } else e.current = n;
  if ($o && ($o = !1, It = e, yl = o), l = e.pendingLanes, l === 0 && (Ut = null), tm(n.stateNode), Re(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vl) throw vl = !1, e = vs, vs = null, e;
  return yl & 1 && e.tag !== 0 && Fn(), l = e.pendingLanes, l & 1 ? e === ys ? zr++ : (zr = 0, ys = e) : zr = 0, Kt(), null;
}
function Fn() {
  if (It !== null) {
    var e = Xc(yl), t = We.transition, n = V;
    try {
      if (We.transition = null, V = 16 > e ? 16 : e, It === null) var r = !1;
      else {
        if (e = It, It = null, yl = 0, H & 6) throw Error(S(331));
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
                      jr(8, x, l);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, P = w;
                  else for (; P !== null; ) {
                    x = P;
                    var y = x.sibling, C = x.return;
                    if (af(x), x === m) {
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
                jr(9, l, l.return);
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
          dt.onPostCommitFiberRoot(kl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      V = n, We.transition = t;
    }
  }
  return !1;
}
function rc(e, t, n) {
  t = Wn(n, t), t = Xd(e, t, 1), e = At(e, t, 1), t = Ne(), e !== null && (Gr(e, 1, t), Re(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) rc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      rc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
        e = Wn(n, e), e = qd(t, e, 1), t = At(t, e, 1), e = Ne(), t !== null && (Gr(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function zh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ve & n) === n && (ce === 4 || ce === 3 && (ve & 130023424) === ve && 500 > ie() - sa ? nn(e, 0) : ia |= n), Re(e, t);
}
function yf(e, t) {
  t === 0 && (e.mode & 1 ? (t = jo, jo <<= 1, !(jo & 130023424) && (jo = 4194304)) : t = 1);
  var n = Ne();
  e = _t(e, t), e !== null && (Gr(e, t, n), Re(e, n));
}
function Th(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yf(e, n);
}
function Ph(e, t) {
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
  r !== null && r.delete(t), yf(e, n);
}
var xf;
xf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, vh(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, ee && t.flags & 1048576 && kd(t, ul, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qo(e, t), e = t.pendingProps;
      var o = Un(t, Se.current);
      Dn(t, n), o = ea(null, t, r, e, o, n);
      var l = ta();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (l = !0, sl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ys(t), o.updater = Tl, t.stateNode = o, o._reactInternals = t, is(t, r, e, n), t = us(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && Hs(t), Ce(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = bh(r), e = qe(r, e), o) {
          case 0:
            t = as(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, qe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), as(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Gu(e, t, r, o, n);
    case 3:
      e: {
        if (tf(t), e === null) throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, zd(e, t), fl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Wn(Error(S(423)), t), t = Ku(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Wn(Error(S(424)), t), t = Ku(e, t, r, n, o);
          break e;
        } else for (Ie = Ft(t.stateNode.containerInfo.firstChild), $e = t, ee = !0, Je = null, n = jd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Hn(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Td(t), e === null && rs(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Zi(r, o) ? i = null : l !== null && Zi(r, l) && (t.flags |= 32), ef(e, t), Ce(e, t, i, n), t.child;
    case 6:
      return e === null && rs(t), null;
    case 13:
      return nf(e, t, n);
    case 4:
      return Xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bn(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Wu(e, t, r, o, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(cl, r._currentValue), r._currentValue = i, l !== null) if (nt(l.value, i)) {
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
                l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), os(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), os(i, n, t), i = l.sibling;
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
      return o = t.type, r = t.pendingProps.children, Dn(t, n), o = Qe(o), r = r(o), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = qe(r, t.pendingProps), o = qe(r.type, o), Qu(e, t, r, o, n);
    case 15:
      return Zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Qo(e, t), t.tag = 1, be(r) ? (e = !0, sl(t)) : e = !1, Dn(t, n), Yd(t, r, o), is(t, r, o, n), us(null, t, r, !0, e, n);
    case 19:
      return rf(e, t, n);
    case 22:
      return Jd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function wf(e, t) {
  return Qc(e, t);
}
function Lh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ve(e, t, n, r) {
  return new Lh(e, t, n, r);
}
function da(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bh(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ps) return 11;
    if (e === Ls) return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ve(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") da(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Sn:
      return rn(n.children, o, l, t);
    case Ts:
      i = 8, o |= 8;
      break;
    case Pi:
      return e = Ve(12, n, t, o | 2), e.elementType = Pi, e.lanes = l, e;
    case Li:
      return e = Ve(13, n, t, o), e.elementType = Li, e.lanes = l, e;
    case bi:
      return e = Ve(19, n, t, o), e.elementType = bi, e.lanes = l, e;
    case Tc:
      return bl(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ec:
          i = 10;
          break e;
        case zc:
          i = 9;
          break e;
        case Ps:
          i = 11;
          break e;
        case Ls:
          i = 14;
          break e;
        case Pt:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Ve(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function rn(e, t, n, r) {
  return e = Ve(7, e, r, t), e.lanes = n, e;
}
function bl(e, t, n, r) {
  return e = Ve(22, e, r, t), e.elementType = Tc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ci(e, t, n) {
  return e = Ve(6, e, null, t), e.lanes = n, e;
}
function Ni(e, t, n) {
  return t = Ve(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function fa(e, t, n, r, o, l, i, u, c) {
  return e = new Rh(e, t, n, u, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ve(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ys(l), e;
}
function Mh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function _f(e) {
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
    if (be(n)) return wd(e, n, t);
  }
  return t;
}
function kf(e, t, n, r, o, l, i, u, c) {
  return e = fa(n, r, !0, e, o, l, i, u, c), e.context = _f(null), n = e.current, r = Ne(), o = Ht(n), l = yt(r, o), l.callback = t ?? null, At(n, l, o), e.current.lanes = o, Gr(e, o, r), Re(e, r), e;
}
function Rl(e, t, n, r) {
  var o = t.current, l = Ne(), i = Ht(o);
  return n = _f(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(o, t, i), e !== null && (tt(e, o, i, l), Bo(e, o, i)), i;
}
function wl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  oc(e, t), (e = e.alternate) && oc(e, t);
}
function Ih() {
  return null;
}
var Sf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ma(e) {
  this._internalRoot = e;
}
Ml.prototype.render = ma.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Rl(e, t, null, null);
};
Ml.prototype.unmount = ma.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Rl(null, e, null, null);
    }), t[wt] = null;
  }
};
function Ml(e) {
  this._internalRoot = e;
}
Ml.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++) ;
    bt.splice(n, 0, e), n === 0 && td(e);
  }
};
function ha(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function lc() {
}
function $h(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var m = wl(i);
        l.call(m);
      };
    }
    var i = kf(t, r, e, 0, null, !1, !1, "", lc);
    return e._reactRootContainer = i, e[wt] = i.current, Or(e.nodeType === 8 ? e.parentNode : e), un(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = wl(c);
      u.call(m);
    };
  }
  var c = fa(e, 0, !1, null, null, !1, !1, "", lc);
  return e._reactRootContainer = c, e[wt] = c.current, Or(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Rl(t, c, n, r);
  }), c;
}
function $l(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var c = wl(i);
        u.call(c);
      };
    }
    Rl(t, i, e, o);
  } else i = $h(n, t, e, o, r);
  return wl(i);
}
qc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (Ms(t, n | 1), Re(t, ie()), !(H & 6) && (Qn = ie() + 500, Kt()));
      }
      break;
    case 13:
      un(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Ne();
          tt(r, e, 1, o);
        }
      }), pa(e, 1);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ne();
      tt(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
Zc = function(e) {
  if (e.tag === 13) {
    var t = Ht(e), n = _t(e, t);
    if (n !== null) {
      var r = Ne();
      tt(n, e, t, r);
    }
    pa(e, t);
  }
};
Jc = function() {
  return V;
};
ed = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
Hi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ii(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = jl(r);
            if (!o) throw Error(S(90));
            Lc(r), Ii(r, o);
          }
        }
      }
      break;
    case "textarea":
      Rc(e, n);
      break;
    case "select":
      t = n.value, t != null && Mn(e, !!n.multiple, t, !1);
  }
};
Ac = aa;
Uc = un;
var Oh = { usingClientEntryPoint: !1, Events: [Yr, En, jl, Dc, Fc, aa] }, hr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Dh = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hr.findFiberByHostInstance || Ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oo.isDisabled && Oo.supportsFiber) try {
    kl = Oo.inject(Dh), dt = Oo;
  } catch {
  }
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh;
De.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(S(200));
  return Mh(e, t, null, n);
};
De.createRoot = function(e, t) {
  if (!ha(e)) throw Error(S(299));
  var n = !1, r = "", o = Sf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fa(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new ma(t);
};
De.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Vc(t), e = e === null ? null : e.stateNode, e;
};
De.flushSync = function(e) {
  return un(e);
};
De.hydrate = function(e, t, n) {
  if (!Il(t)) throw Error(S(200));
  return $l(null, e, t, !0, n);
};
De.hydrateRoot = function(e, t, n) {
  if (!ha(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Sf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kf(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Ml(t);
};
De.render = function(e, t, n) {
  if (!Il(t)) throw Error(S(200));
  return $l(null, e, t, !1, n);
};
De.unmountComponentAtNode = function(e) {
  if (!Il(e)) throw Error(S(40));
  return e._reactRootContainer ? (un(function() {
    $l(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
De.unstable_batchedUpdates = aa;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Il(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return $l(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Cf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
    } catch (e) {
      console.error(e);
    }
}
Cf(), Sc.exports = De;
var Fh = Sc.exports, Nf, ic = Fh;
Nf = ic.createRoot, ic.hydrateRoot;
async function G(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const sc = `
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
.ns-custom-group-empty { width:100%; min-height:64px; display:grid; justify-items:center; gap:4px; padding:14px 16px; border:1px dashed var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:center; }
.ns-custom-group-empty__title { font-size:1rem; font-weight:700; }
.ns-custom-group-empty__meta { color:var(--secondary-text-color); font-size:.8rem; }
.ns-custom-group-control-panel { --ns-quick-control-height:122px; display:flex; align-items:stretch; gap:10px; min-width:0; padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); }
.ns-custom-group-member-grid { flex:1 1 auto; min-width:0; display:grid; grid-template-columns:repeat(var(--ns-quick-control-columns, 1), minmax(0, 1fr)); grid-auto-rows:var(--ns-quick-control-height); gap:10px; align-items:stretch; }
.ns-custom-group-member-grid.is-expanded { grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); grid-auto-rows:var(--ns-quick-control-height); }
.ns-custom-group-member-control { position:relative; min-width:0; height:100%; }
.ns-custom-group-member-button { width:100%; height:100%; min-width:0; min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; align-content:stretch; gap:7px; padding:13px 46px 13px 13px; overflow:hidden; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); }
.ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-member-button__tag--category { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-button__tag--area { background:color-mix(in srgb, #7b61ff 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-button strong { min-width:0; display:-webkit-box; overflow:hidden; overflow-wrap:anywhere; -webkit-box-orient:vertical; -webkit-line-clamp:2; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button > span:last-child { overflow:hidden; color:var(--secondary-text-color); font-size:.8rem; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
.ns-custom-group-favorite { position:absolute; top:8px; right:8px; z-index:1; display:grid; place-items:center; width:30px; height:30px; padding:0; border:0; border-radius:0; color:var(--secondary-text-color); background:transparent; box-shadow:none; font-size:1.3rem; line-height:1; cursor:pointer; transition:color .15s ease, opacity .15s ease, transform .15s ease; }
.ns-custom-group-favorite:hover:not(:disabled) { color:var(--warning-color, #ffca28); transform:scale(1.1); }
.ns-custom-group-favorite.is-favorite { color:var(--warning-color, #ffca28); }
.ns-custom-group-favorite:disabled { opacity:.35; cursor:not-allowed; }
.ns-custom-group-expand { flex:0 0 40px; width:40px; height:var(--ns-quick-control-height); min-height:var(--ns-quick-control-height); display:grid; place-items:center; padding:0; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; font-size:1.5rem; line-height:1; transition:filter .15s ease, transform .15s ease; }
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
`, Ah = { rendered: {}, errors: {} }, Uh = "/notify_studio_static/notify-studio-logo.png?v=0.1.20", Hh = 220, ji = 10, Bh = 50;
function jf(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function _s(e, t) {
  const n = jf(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function ac(e) {
  const t = `Action ${e}`;
  return { id: _s(t, e), title: t, route: "event" };
}
function Vh(e, t) {
  return `notify_studio_persistent_${jf(e || t).toLowerCase() || "notification"}`;
}
function Ei(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function uc(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Xo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  return typeof e == "string" ? e : "";
}
function cc(e) {
  return e === !0;
}
function zi(e) {
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
  if (!Xo(t))
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
function dc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yh({ hass: e }) {
  const t = k.useRef(e);
  t.current = e;
  const [n, r] = k.useState("audit"), [o, l] = k.useState(!!e), [i, u] = k.useState(!0), [c, m] = k.useState(null), [x, w] = k.useState([]), [y, C] = k.useState([]), [N, j] = k.useState([]), [W, p] = k.useState(!0), [d, h] = k.useState([]), [_, E] = k.useState(!1), [L, b] = k.useState(""), [R, Y] = k.useState([]), [I, de] = k.useState([]), [rt, Ke] = k.useState([]), [ot, Ol] = k.useState(!1), [Ae, Xn] = k.useState(7), [T, O] = k.useState(!1), [D, J] = k.useState(!1), [se, Ct] = k.useState(!1), [lt, fn] = k.useState(""), [it, pn] = k.useState("category"), [Ye, Nt] = k.useState(null), [ga, Dl] = k.useState(null), [qr, Zr] = k.useState([]), [qn, va] = k.useState(""), [ze, Fl] = k.useState(null), [jt, ya] = k.useState(!1), [Jr, Ef] = k.useState(""), [eo, zf] = k.useState(""), [to, Tf] = k.useState(""), [no, Pf] = k.useState(""), [Zn, Al] = k.useState(""), [xa, ro] = k.useState(""), [mn, wa] = k.useState("A test notification from Notify Studio."), [pt, _a] = k.useState("Notify Studio"), [Jn, Ul] = k.useState(""), [oo, ka] = k.useState(""), [Et, Sa] = k.useState(""), [lo, Ca] = k.useState(""), [io, Na] = k.useState(""), [so, ja] = k.useState(""), [ao, Ea] = k.useState(""), [uo, za] = k.useState(""), [co, Ta] = k.useState(""), [fo, Pa] = k.useState(""), [Hl, La] = k.useState(!1), [po, ba] = k.useState(!1), [hn, Ra] = k.useState(!1), [st, gn] = k.useState([]), [mo, Ma] = k.useState(""), [ho, Ia] = k.useState(""), [go, $a] = k.useState(""), [vo, Oa] = k.useState(""), [yo, Da] = k.useState(""), [vn, Fa] = k.useState(Ah), [er, Aa] = k.useState(""), [Yt, yn] = k.useState(null), [Ua, tr] = k.useState(""), [Ha, nr] = k.useState(""), [rr, or] = k.useState(null), [Lf, bf] = k.useState(""), Bl = k.useRef(0), Ba = k.useRef(null), U = k.useMemo(
    () => x.find((s) => s.id === Zn) ?? null,
    [x, Zn]
  ), Va = k.useMemo(
    () => y.filter((s) => s.kind === "script"),
    [y]
  ), lr = k.useMemo(
    () => L ? d.filter((s) => s.level === L) : d,
    [L, d]
  ), Vl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I)
      for (const g of f.members) {
        const v = s.get(g.source_key) ?? [];
        v.push(f), s.set(g.source_key, v);
      }
    return s;
  }, [I]), Wl = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of y) s.set(f.entity_id, f);
    for (const f of ze ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [y, ze]), Wa = k.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I) {
      let g = 0, v = 0, z = 0;
      for (const $ of f.members) {
        if (!$.entity_id.startsWith("automation.")) continue;
        g += 1;
        const M = Wl.get($.entity_id);
        (M == null ? void 0 : M.enabled) === !0 ? v += 1 : (M == null ? void 0 : M.enabled) === !1 && (z += 1);
      }
      s.set(f.id, { automations: g, enabled: v, disabled: z });
    }
    return s;
  }, [I, Wl]), Xt = k.useMemo(() => I.flatMap((s) => [
    { key: Qh(s.id), type: "group", group: s },
    ...[...s.members].sort((f, g) => f.name.localeCompare(g.name)).map((f) => ({
      key: Gh(s.id, f.source_key),
      type: "member",
      group: s,
      member: f
    }))
  ]), [I]), Ql = k.useMemo(
    () => new Map(Xt.map((s) => [s.key, s])),
    [Xt]
  ), xn = k.useMemo(
    () => rt.map((s) => Ql.get(s)).filter((s) => s !== void 0),
    [Ql, rt]
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
    if (Jr && s.source !== Jr || eo && s.category !== eo || to && !(s.labels ?? []).includes(to) || no && !(s.notify_devices ?? s.notifiers).includes(no)) return !1;
    if (qn) {
      const g = `${s.source}:${s.id}`;
      if (!((f = Vl.get(g)) != null && f.some((v) => v.id === qn))) return !1;
    }
    return !0;
  }), [eo, no, to, Jr, qn, Vl, ze]), X = k.useCallback((s) => {
    bf(s);
  }, []), Q = k.useCallback((s, f) => {
    const g = s instanceof Error ? s.message : f;
    X(g), window.alert(g);
  }, [X]), Qa = k.useCallback(async () => {
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
    m(f), w(g.services), C(v), Y(z), de($), Ke(M);
  }, []), Rf = k.useCallback(async () => {
    const s = t.current;
    if (s) {
      J(!0);
      try {
        const [f, g] = await Promise.all([
          G(s, "notify_studio/list_custom_groups"),
          G(s, "notify_studio/list_custom_group_favorites")
        ]);
        de(f), Ke(g);
      } catch (f) {
        Q(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        J(!1);
      }
    }
  }, [Q]), Yl = k.useCallback(async (s, f) => {
    const g = t.current;
    if (g) {
      Nt("favorites");
      try {
        const v = await G(
          g,
          "notify_studio/set_custom_group_favorites",
          { control_keys: s }
        );
        Ke(v), f && X(f);
      } catch (v) {
        Q(v, "Unable to save quick-control favorites.");
      } finally {
        Nt(null);
      }
    }
  }, [X, Q]), Mf = (s) => {
    const f = rt.filter((z) => Ql.has(z)), g = f.includes(s);
    if (!g && f.length >= Ae) {
      X(`Only ${Ae} favorite control${Ae === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const v = g ? f.filter((z) => z !== s) : [...f, s];
    Yl(v, g ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };
  k.useEffect(() => {
    const s = Ba.current;
    if (!s || !Xt.length) return;
    const f = () => {
      const v = s.getBoundingClientRect().width, z = window.matchMedia("(max-width: 700px)").matches, $ = Math.max(1, v - Bh - ji), M = Math.max(
        1,
        Math.floor(($ + ji) / (Hh + ji))
      );
      Xn(z ? 7 : M), O(!0);
    };
    f();
    const g = new ResizeObserver(f);
    return g.observe(s), window.addEventListener("resize", f), () => {
      g.disconnect(), window.removeEventListener("resize", f);
    };
  }, [Xt.length]), k.useEffect(() => {
    if (!T || xn.length <= Ae) return;
    const s = xn.slice(0, Ae).map((g) => g.key), f = window.setTimeout(() => {
      Yl(
        s,
        "Screen width changed, so excess quick-control favorites were removed."
      );
    }, 250);
    return () => window.clearTimeout(f);
  }, [xn, Ae, T, Yl]);
  const Ga = async () => {
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
        await G(f, "notify_studio/delete_custom_group", { group_id: s.id }), de((g) => g.filter((v) => v.id !== s.id)), Ke((g) => g.filter((v) => !v.startsWith(`${s.id}::`))), qn === s.id && va(""), X(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (g) {
        Q(g, "Unable to delete the custom category or area.");
      }
  }, ir = (s) => `${s.source}:${s.id}`, xe = ga ? I.find((s) => s.id === ga) ?? null : null, Of = (s) => {
    Dl(s.id), Zr(s.members.map((f) => f.source_key)), X(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, Df = () => {
    Dl(null), Zr([]), X("Custom group selection cancelled.");
  }, Ff = (s, f) => {
    const g = ir(s);
    Zr((v) => f ? [.../* @__PURE__ */ new Set([...v, g])] : v.filter((z) => z !== g));
  }, Af = async () => {
    const s = t.current;
    if (!(!s || !xe)) {
      Nt("selection");
      try {
        const f = ze ?? [], g = new Set(f.map(ir)), v = new Set(qr), z = xe.members.filter(
          (B) => !g.has(B.source_key)
        ), $ = f.filter((B) => v.has(ir(B))).map((B) => {
          var Ue;
          return {
            source_key: ir(B),
            name: B.name,
            entity_id: ((Ue = B.runtime) == null ? void 0 : Ue.entity_id) ?? ""
          };
        }), M = await G(s, "notify_studio/set_custom_group_members", {
          group_id: xe.id,
          members: [...z, ...$]
        });
        de(M);
        const he = await G(s, "notify_studio/list_custom_group_favorites");
        Ke(he), X(`Saved ${$.length} notification source${$.length === 1 ? "" : "s"} in “${xe.name}”.`), Dl(null), Zr([]);
      } catch (f) {
        Q(f, "Unable to save the selected custom category or area members.");
      } finally {
        Nt(null);
      }
    }
  }, Uf = async (s, f) => {
    const g = t.current;
    if (!g) return;
    const v = Wa.get(s.id), z = (v == null ? void 0 : v.automations) ?? 0;
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
        X(`${s.name}: ${M.changed_entity_ids.length} automation${M.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await xo();
      } catch (M) {
        Q(M, `Unable to ${$} the automations in ${s.name}.`);
      } finally {
        Nt(null);
      }
    }
  }, sr = k.useCallback(async () => {
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
  }, []), Xl = k.useCallback(async () => {
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
  }, Ka = k.useCallback(async () => {
    try {
      await Qa(), Fl(null);
    } catch (s) {
      Q(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [X, Qa, Q]);
  k.useEffect(() => {
    e && !o && l(!0);
  }, [e, o]), k.useEffect(() => {
    o && Ka();
  }, [o, Ka]), k.useEffect(() => {
    o && sr();
  }, [o, sr]), k.useEffect(() => {
    !Zn && x.length && Al(x[0].id);
  }, [Zn, x]);
  const xo = k.useCallback(async () => {
    const s = t.current;
    if (!(!s || jt)) {
      ya(!0);
      try {
        Fl(await G(s, "notify_studio/scan_notify_usage")), X("Notification audit complete.");
      } catch (f) {
        Q(f, "The notification audit failed.");
      } finally {
        ya(!1);
      }
    }
  }, [X, jt, Q]);
  k.useEffect(() => {
    n === "audit" && ze === null && xo();
  }, [xo, n, ze]), k.useEffect(() => {
    n === "audit" && sr();
  }, [sr, n]), k.useEffect(() => {
    n === "logs" && Xl();
  }, [Xl, n]);
  const wo = k.useCallback(() => {
    const s = {};
    if (Jn.trim() && (s.tag = Jn.trim()), oo.trim() && (s.image = oo.trim()), hn && st.length && (s.actions = st.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (U == null ? void 0 : U.platform) === "android")
      Et.trim() && (s.clickAction = Et.trim()), lo.trim() && (s.subject = lo.trim()), io.trim() && (s.channel = io.trim()), so && (s.importance = so), ao && (s.priority = ao), uo.trim() && (s.color = uo.trim()), co.trim() && (s.notification_icon = co.trim()), fo.trim() && (s.timeout = Number(fo)), Hl && (s.sticky = !0), po && (s.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      Et.trim() && (s.url = Et.trim()), mo.trim() && (s.subtitle = mo.trim());
      const f = {};
      ho.trim() && (f.sound = ho.trim()), go.trim() && (f.badge = Number(go)), vo && (f["interruption-level"] = vo), yo.trim() && (f["thread-id"] = yo.trim()), Object.keys(f).length && (s.push = f);
    } else Et.trim() && (s.url = Et.trim());
    return {
      message: mn,
      ...pt.trim() ? { title: pt } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [hn, oo, go, io, uo, so, vo, mn, st, co, Et, po, ao, U == null ? void 0 : U.platform, ho, Hl, lo, mo, Jn, yo, fo, pt]), ql = k.useCallback(() => hn ? st.filter((s) => s.route !== "uri").map((s) => {
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
    payload: wo(),
    action_handlers: ql(),
    ...U ? { target_platform: U.platform } : {}
  }), [ql, wo, U]), Ya = () => U || (Q(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  k.useEffect(() => {
    const s = t.current;
    if (!o || !s) return;
    const f = ++Bl.current;
    let g = !1;
    const v = {
      message: mn,
      ...pt.trim() ? { title: pt } : {}
    }, z = window.setTimeout(() => {
      G(s, "notify_studio/render_preview", { payload: v }).then(($) => {
        !g && f === Bl.current && Fa($);
      }).catch(($) => {
        if (g || f !== Bl.current) return;
        const M = $ instanceof Error ? $.message : "Unable to render the current template.";
        Fa({ rendered: {}, errors: { message: M } });
      });
    }, 250);
    return () => {
      g = !0, window.clearTimeout(z);
    };
  }, [o, mn, pt]);
  const Vf = async () => {
    const s = Ya();
    if (!(!s || !t.current)) {
      yn("test");
      try {
        const f = await G(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: wo()
        });
        X(`Test notification sent to ${f.target}.`);
      } catch (f) {
        Q(f, "The test notification could not be sent.");
      } finally {
        yn(null);
      }
    }
  }, Wf = async () => {
    const s = Ya();
    if (!(!s || !t.current)) {
      yn("yaml");
      try {
        const f = await G(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: wo(),
          action_handlers: ql()
        });
        Aa(f.yaml), X("YAML generated successfully.");
      } catch (f) {
        Q(f, "Unable to generate YAML.");
      } finally {
        yn(null);
      }
    }
  }, Qf = async () => {
    var f;
    if (!er.trim()) {
      Q(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(er), s = !0;
      } catch {
      }
    if (!s) {
      const g = document.createElement("textarea");
      g.value = er, g.setAttribute("readonly", ""), g.style.position = "fixed", g.style.opacity = "0", g.style.pointerEvents = "none", document.body.appendChild(g), g.focus(), g.select();
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
    C((g) => g.map((v) => v.entity_id === s ? { ...v, ...f } : v)), Fl((g) => (g == null ? void 0 : g.map((v) => {
      var z;
      return ((z = v.runtime) == null ? void 0 : z.entity_id) === s ? { ...v, runtime: { ...v.runtime, ...f } } : v;
    })) ?? null);
  }, Xa = async (s, f) => {
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
          sr();
        }, 900);
      } catch (z) {
        Q(z, `Unable to run ${s.name}.`);
      }
  }, wn = (s, f) => {
    gn((g) => g.map((v, z) => z === s ? { ...v, ...f } : v));
  }, qf = (s, f) => {
    gn((g) => g.map((v, z) => z !== s ? v : {
      ...v,
      route: f,
      id: f === "uri" ? "URI" : v.id === "URI" ? _s(v.title, s + 1) : v.id
    }));
  }, Zf = () => {
    const s = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    gn((f) => f.length >= s ? f : [...f, ac(f.length + 1)]);
  }, Jf = (s) => {
    gn((f) => f.filter((g, v) => v !== s));
  }, Zl = k.useCallback((s) => {
    const f = s.payload, g = Xo(f.data) ? f.data : {};
    wa(te(f.message)), _a(te(f.title)), Ul(te(g.tag)), ka(te(g.image)), Sa(te(g.clickAction) || te(g.url)), Ca(te(g.subject)), Na(te(g.channel)), ja(te(g.importance)), Ea(te(g.priority)), za(te(g.color)), Ta(te(g.notification_icon)), Pa(g.timeout === void 0 ? "" : String(g.timeout)), La(cc(g.sticky)), ba(cc(g.persistent)), Ma(te(g.subtitle));
    const v = Xo(g.push) ? g.push : {};
    Ia(te(v.sound)), $a(v.badge === void 0 ? "" : String(v.badge)), Oa(te(v["interruption-level"])), Da(te(v["thread-id"]));
    const z = new Map(s.action_handlers.map((he) => [he.action, he])), M = (Array.isArray(g.actions) ? g.actions : []).filter(Xo).map((he, B) => {
      const Ue = te(he.action) || _s(`Action ${B + 1}`, B + 1), fe = z.get(Ue);
      let zt = "event";
      return Ue === "URI" && te(he.uri) ? zt = "uri" : te(he.behavior) === "textInput" ? zt = "reply" : (fe == null ? void 0 : fe.type) === "script" ? zt = "script" : (fe == null ? void 0 : fe.type) === "service" && (zt = "service"), {
        id: Ue,
        title: te(he.title) || `Action ${B + 1}`,
        route: zt,
        uri: te(he.uri),
        scriptEntityId: te(fe == null ? void 0 : fe.script_entity_id),
        service: te(fe == null ? void 0 : fe.service),
        serviceData: fe != null && fe.service_data ? JSON.stringify(fe.service_data, null, 2) : ""
      };
    });
    if (gn(M), Ra(M.length > 0), Aa(""), s.target_platform && (U == null ? void 0 : U.platform) !== s.target_platform) {
      const he = x.find((B) => B.platform === s.target_platform);
      he && Al(he.id);
    }
  }, [U == null ? void 0 : U.platform, x]), ep = (s) => {
    if (ro(s), !s) return;
    const f = R.find((g) => g.id === s);
    f && (Zl(f.draft), X(`Template “${f.name}” loaded into the composer.`));
  }, tp = () => {
    or(null), tr(pt.trim() || "New notification template"), nr(""), r("templates");
  }, np = (s) => {
    or(s.id), tr(s.name), nr(s.description), Zl(s.draft), r("templates"), X(`Editing template “${s.name}”.`);
  }, rp = async () => {
    if (t.current) {
      yn("template");
      try {
        const s = await G(t.current, "notify_studio/save_template", {
          template: {
            ...rr ? { id: rr } : {},
            name: Ua,
            description: Ha,
            draft: Bf()
          }
        });
        Y((f) => f.findIndex((v) => v.id === s.id) === -1 ? [s, ...f] : f.map((v) => v.id === s.id ? s : v)), ro(s.id), or(s.id), X(`Template “${s.name}” saved.`);
      } catch (s) {
        Q(s, "Unable to save the template.");
      } finally {
        yn(null);
      }
    }
  }, op = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await G(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((g) => g.id !== s.id)), xa === s.id && ro(""), rr === s.id && (or(null), tr(""), nr("")), X(`Template “${s.name}” deleted.`);
      } catch (f) {
        Q(f, "Unable to delete the template.");
      }
  }, lp = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: lo, onChange: (s) => Ca(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: io, onChange: (s) => Na(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: so, onChange: (s) => ja(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: ao, onChange: (s) => Ea(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: uo, onChange: (s) => za(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: co, onChange: (s) => Ta(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: fo, onChange: (s) => Pa(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Hl, onChange: (s) => La(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: po, onChange: (s) => {
        const f = s.target.checked;
        ba(f), f && !Jn.trim() && Ul(Vh(pt, mn));
      } }),
      " Persistent notification"
    ] }),
    po && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(F, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: mo, onChange: (s) => Ma(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: ho, onChange: (s) => Ia(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: go, onChange: (s) => $a(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: vo, onChange: (s) => Oa(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(F, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: yo, onChange: (s) => Da(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, ip = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const s = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: hn, onChange: (f) => {
          const g = f.target.checked;
          Ra(g), g && !st.length && gn([ac(1)]);
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
            /* @__PURE__ */ a.jsx(F, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (v) => wn(g, { title: v.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (v) => qf(g, v.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(F, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (v) => wn(g, { id: v.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(F, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (v) => wn(g, { uri: v.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(F, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (v) => wn(g, { scriptEntityId: v.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              Va.map((v) => /* @__PURE__ */ a.jsxs("option", { value: v.entity_id, children: [
                v.name,
                " · ",
                v.entity_id
              ] }, v.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (v) => wn(g, { service: v.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (v) => wn(g, { serviceData: v.target.value }), placeholder: `{
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
          f.route === "script" && !Va.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
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
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: zi(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), ap = (s) => {
    var he;
    const f = ir(s), g = (he = s.notify_devices) != null && he.length ? s.notify_devices : s.notifiers, v = s.runtime, z = Vl.get(f) ?? [], $ = xe !== null, M = qr.includes(f);
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
        (v == null ? void 0 : v.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${v.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Xa(v, !v.enabled), children: v.enabled ? "Enabled" : "Disabled" }),
        (v == null ? void 0 : v.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Xf(v), children: "Run test" }),
        v && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Kf(v), children: v.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, up = (s) => {
    var qa;
    const f = s.group.kind === "category" ? "Category" : "Area", g = rt.includes(s.key), v = !g && xn.length >= Ae, z = Wa.get(s.group.id) ?? { automations: 0, enabled: 0 }, $ = s.type === "group", M = s.member ? Wl.get(s.member.entity_id) : void 0, B = !(z.automations > 0 && z.enabled === z.automations), Ue = $ ? z.automations === 0 ? "No automations" : B ? "Enable all" : "Disable all" : ((qa = s.member) == null ? void 0 : qa.name) ?? "Notification source", fe = $ ? z.automations === 0 ? "Add an automation source" : `All automations · ${z.enabled}/${z.automations} enabled` : (M == null ? void 0 : M.kind) === "automation" ? M.enabled ? "Enabled" : "Disabled" : (M == null ? void 0 : M.kind) === "script" ? "Script" : "Unavailable", zt = $ ? z.automations > 0 : (M == null ? void 0 : M.kind) === "automation";
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-member-control", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `ns-custom-group-member-button ${$ ? "ns-custom-group-member-button--all" : ""}`,
          disabled: !zt || Ye === "toggle",
          onClick: () => {
            $ ? Uf(s.group, B) : (M == null ? void 0 : M.kind) === "automation" && Xa(M, !M.enabled);
          },
          title: zt ? $ ? `${Ue} automations in ${s.group.name}` : `Toggle ${Ue}` : (M == null ? void 0 : M.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
          children: [
            /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.group.kind}`, children: [
              f,
              ": ",
              s.group.name
            ] }),
            /* @__PURE__ */ a.jsx("strong", { children: Ue }),
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
          disabled: Ye === "favorites" || v,
          "aria-pressed": g,
          "aria-label": g ? `Remove ${Ue} from quick controls` : `Add ${Ue} to quick controls`,
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
    const s = ot ? Xt : xn.length > 0 ? xn : Xt.slice(0, Ae), f = Xt.length > s.length, g = {
      "--ns-quick-control-columns": String(Math.max(1, s.length))
    };
    return /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control-panel", ref: Ba, children: [
      /* @__PURE__ */ a.jsx("div", { className: `ns-custom-group-member-grid ${ot ? "is-expanded" : ""}`, style: g, children: s.map(up) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: `ns-custom-group-expand ${ot ? "is-expanded" : ""}`,
          onClick: () => Ol((v) => !v),
          "aria-expanded": ot,
          "aria-label": ot ? "Collapse quick controls" : "Show all custom group controls",
          title: ot ? "Show quick controls" : f ? "Show all controls" : "Choose favorite controls",
          children: ot ? "⌃" : "⌄"
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
            /* @__PURE__ */ a.jsx("button", { type: "button", className: `ns-button ns-button--quiet ns-button--compact ${M ? "ns-button--active" : ""}`, onClick: () => Of($), disabled: Ye === "selection", children: M ? "Selecting entities" : "Select entities" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void If($), disabled: Ye === "selection", children: "Rename" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void $f($), disabled: Ye === "selection", children: "Delete" })
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
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Rf(), disabled: D, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Ct(!1), disabled: Ye === "selection", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(F, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: lt, onChange: (v) => fn(v.target.value), onKeyDown: (v) => {
            v.key === "Enter" && Ga();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: it, onChange: (v) => pn(v.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ga(), disabled: Ye === "create", children: Ye === "create" ? "Creating…" : "Create" })
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
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Df, disabled: Ye === "selection", children: "Cancel" }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Af(), disabled: Ye === "selection", children: Ye === "selection" ? "Saving…" : `Save ${qr.length} ${qr.length === 1 ? "entity" : "entities"}` })
          ] })
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: sc }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: sc }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: Lf }),
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
          U && /* @__PURE__ */ a.jsx("span", { className: uc(U.platform), children: Ei(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(F, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: xa, onChange: (s) => ep(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            R.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(F, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Zn, onChange: (s) => Al(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            Ei(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          U == null ? void 0 : U.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: pt, onChange: (s) => _a(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Jn, onChange: (s) => Ul(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Et, onChange: (s) => Sa(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: oo, onChange: (s) => ka(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: mn, onChange: (s) => wa(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
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
              er && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Qf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Gf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: er || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: rr ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(F, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: Ua, onChange: (s) => tr(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(F, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Ha, onChange: (s) => nr(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void rp(), disabled: Yt !== null, children: Yt === "template" ? "Saving…" : rr ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              or(null), tr(""), nr("");
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
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: uc(s.draft.target_platform), children: Ei(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(g = s.draft.payload.data) == null ? void 0 : g.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              ro(s.id), Zl(s.draft), r("compose");
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
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Xl(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Hf(), disabled: _, children: "Clear logs" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("section", { className: "ns-logs-content", "aria-label": "Notify Studio log events", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-logs-content__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { children: "Recent activity" }),
          /* @__PURE__ */ a.jsxs("p", { children: [
            lr.length,
            " event",
            lr.length === 1 ? "" : "s",
            L ? ` matching ${dc(L).toLowerCase()}` : ""
          ] })
        ] }) }),
        _ && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
        !_ && !lr.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
        !_ && lr.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: lr.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("span", { className: Kh(s.level), children: dc(s.level) }),
              /* @__PURE__ */ a.jsx("strong", { children: s.message })
            ] }),
            /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: zi(s.timestamp) })
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
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void xo(), disabled: jt, children: jt ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(F, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Jr, onChange: (s) => Ef(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: eo, onChange: (s) => zf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Gl.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: to, onChange: (s) => Tf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Gl.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: no, onChange: (s) => Pf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Gl.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(F, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: qn, onChange: (s) => va(s.target.value), children: [
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
                zi(s.last_triggered)
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
    Jl(this, "root");
    Jl(this, "currentHass");
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
    this.root || (this.root = Nf(this)), this.root.render(/* @__PURE__ */ a.jsx(Yh, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Xh);
