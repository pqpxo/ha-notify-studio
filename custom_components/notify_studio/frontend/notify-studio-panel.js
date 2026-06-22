var uf = Object.defineProperty;
var af = (e, t, n) => t in e ? uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Si = (e, t, n) => af(e, typeof t != "symbol" ? t + "" : t, n);
var _a = { exports: {} }, Jl = {}, Na = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr = Symbol.for("react.element"), cf = Symbol.for("react.portal"), df = Symbol.for("react.fragment"), ff = Symbol.for("react.strict_mode"), pf = Symbol.for("react.profiler"), mf = Symbol.for("react.provider"), hf = Symbol.for("react.context"), vf = Symbol.for("react.forward_ref"), gf = Symbol.for("react.suspense"), yf = Symbol.for("react.memo"), xf = Symbol.for("react.lazy"), au = Symbol.iterator;
function wf(e) {
  return e === null || typeof e != "object" ? null : (e = au && e[au] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ca = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ja = Object.assign, Ea = {};
function On(e, t, n) {
  this.props = e, this.context = t, this.refs = Ea, this.updater = n || Ca;
}
On.prototype.isReactComponent = {};
On.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pa() {
}
Pa.prototype = On.prototype;
function Wo(e, t, n) {
  this.props = e, this.context = t, this.refs = Ea, this.updater = n || Ca;
}
var Qo = Wo.prototype = new Pa();
Qo.constructor = Wo;
ja(Qo, On.prototype);
Qo.isPureReactComponent = !0;
var cu = Array.isArray, Ta = Object.prototype.hasOwnProperty, Yo = { current: null }, za = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ta.call(t, r) && !za.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var c = Array(s), p = 0; p < s; p++) c[p] = arguments[p + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: Lr, type: e, key: i, ref: o, props: l, _owner: Yo.current };
}
function kf(e, t) {
  return { $$typeof: Lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function Sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var du = /\/+/g;
function _i(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sf("" + e.key) : t.toString(36);
}
function ml(e, t, n, r, l) {
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
        case Lr:
        case cf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + _i(o, 0) : r, cu(l) ? (n = "", e != null && (n = e.replace(du, "$&/") + "/"), ml(l, t, n, "", function(p) {
    return p;
  })) : l != null && (Ko(l) && (l = kf(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(du, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", cu(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var c = r + _i(i, s);
    o += ml(i, t, n, c, l);
  }
  else if (c = wf(e), typeof c == "function") for (e = c.call(e), s = 0; !(i = e.next()).done; ) i = i.value, c = r + _i(i, s++), o += ml(i, t, n, c, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Jr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return ml(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function _f(e) {
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
var xe = { current: null }, hl = { transition: null }, Nf = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: hl, ReactCurrentOwner: Yo };
function Ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: Jr, forEach: function(e, t, n) {
  Jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ko(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = On;
F.Fragment = df;
F.Profiler = pf;
F.PureComponent = Wo;
F.StrictMode = ff;
F.Suspense = gf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
F.act = Ra;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ja({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Yo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (c in t) Ta.call(t, c) && !za.hasOwnProperty(c) && (r[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var p = 0; p < c; p++) s[p] = arguments[p + 2];
    r.children = s;
  }
  return { $$typeof: Lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function(e) {
  return e = { $$typeof: hf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: mf, _context: e }, e.Consumer = e;
};
F.createElement = La;
F.createFactory = function(e) {
  var t = La.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: vf, render: e };
};
F.isValidElement = Ko;
F.lazy = function(e) {
  return { $$typeof: xf, _payload: { _status: -1, _result: e }, _init: _f };
};
F.memo = function(e, t) {
  return { $$typeof: yf, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
F.unstable_act = Ra;
F.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
F.useContext = function(e) {
  return xe.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
F.useId = function() {
  return xe.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return xe.current.useRef(e);
};
F.useState = function(e) {
  return xe.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return xe.current.useTransition();
};
F.version = "18.3.1";
Na.exports = F;
var C = Na.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf = C, jf = Symbol.for("react.element"), Ef = Symbol.for("react.fragment"), Pf = Object.prototype.hasOwnProperty, Tf = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Pf.call(t, r) && !zf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: jf, type: e, key: i, ref: o, props: l, _owner: Tf.current };
}
Jl.Fragment = Ef;
Jl.jsx = Ia;
Jl.jsxs = Ia;
_a.exports = Jl;
var a = _a.exports, Ma = { exports: {} }, Oe = {}, Oa = { exports: {} }, Da = {};
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
  function t(E, M) {
    var O = E.length;
    E.push(M);
    e: for (; 0 < O; ) {
      var V = O - 1 >>> 1, Q = E[V];
      if (0 < l(Q, M)) E[V] = M, E[O] = Q, O = V;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var M = E[0], O = E.pop();
    if (O !== M) {
      E[0] = O;
      e: for (var V = 0, Q = E.length, At = Q >>> 1; V < At; ) {
        var ue = 2 * (V + 1) - 1, nn = E[ue], Pe = ue + 1, vt = E[Pe];
        if (0 > l(nn, O)) Pe < Q && 0 > l(vt, nn) ? (E[V] = vt, E[Pe] = O, V = Pe) : (E[V] = nn, E[ue] = O, V = ue);
        else if (Pe < Q && 0 > l(vt, O)) E[V] = vt, E[Pe] = O, V = Pe;
        else break e;
      }
    }
    return M;
  }
  function l(E, M) {
    var O = E.sortIndex - M.sortIndex;
    return O !== 0 ? O : E.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var c = [], p = [], g = 1, y = null, h = 3, _ = !1, N = !1, j = !1, B = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var M = n(p); M !== null; ) {
      if (M.callback === null) r(p);
      else if (M.startTime <= E) r(p), M.sortIndex = M.expirationTime, t(c, M);
      else break;
      M = n(p);
    }
  }
  function x(E) {
    if (j = !1, m(E), !N) if (n(c) !== null) N = !0, be(P);
    else {
      var M = n(p);
      M !== null && Un(x, M.startTime - E);
    }
  }
  function P(E, M) {
    N = !1, j && (j = !1, f(R), R = -1), _ = !0;
    var O = h;
    try {
      for (m(M), y = n(c); y !== null && (!(y.expirationTime > M) || E && !Ee()); ) {
        var V = y.callback;
        if (typeof V == "function") {
          y.callback = null, h = y.priorityLevel;
          var Q = V(y.expirationTime <= M);
          M = e.unstable_now(), typeof Q == "function" ? y.callback = Q : y === n(c) && r(c), m(M);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var At = !0;
      else {
        var ue = n(p);
        ue !== null && Un(x, ue.startTime - M), At = !1;
      }
      return At;
    } finally {
      y = null, h = O, _ = !1;
    }
  }
  var T = !1, L = null, R = -1, X = 5, D = -1;
  function Ee() {
    return !(e.unstable_now() - D < X);
  }
  function qe() {
    if (L !== null) {
      var E = e.unstable_now();
      D = E;
      var M = !0;
      try {
        M = L(!0, E);
      } finally {
        M ? Ut() : (T = !1, L = null);
      }
    } else T = !1;
  }
  var Ut;
  if (typeof d == "function") Ut = function() {
    d(qe);
  };
  else if (typeof MessageChannel < "u") {
    var $t = new MessageChannel(), pi = $t.port2;
    $t.port1.onmessage = qe, Ut = function() {
      pi.postMessage(null);
    };
  } else Ut = function() {
    B(qe, 0);
  };
  function be(E) {
    L = E, T || (T = !0, Ut());
  }
  function Un(E, M) {
    R = B(function() {
      E(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    N || _ || (N = !0, be(P));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(E) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = h;
    }
    var O = h;
    h = M;
    try {
      return E();
    } finally {
      h = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, M) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var O = h;
    h = E;
    try {
      return M();
    } finally {
      h = O;
    }
  }, e.unstable_scheduleCallback = function(E, M, O) {
    var V = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? V + O : V) : O = V, E) {
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
    return Q = O + Q, E = { id: g++, callback: M, priorityLevel: E, startTime: O, expirationTime: Q, sortIndex: -1 }, O > V ? (E.sortIndex = O, t(p, E), n(c) === null && E === n(p) && (j ? (f(R), R = -1) : j = !0, Un(x, O - V))) : (E.sortIndex = Q, t(c, E), N || _ || (N = !0, be(P))), E;
  }, e.unstable_shouldYield = Ee, e.unstable_wrapCallback = function(E) {
    var M = h;
    return function() {
      var O = h;
      h = M;
      try {
        return E.apply(this, arguments);
      } finally {
        h = O;
      }
    };
  };
})(Da);
Oa.exports = Da;
var Lf = Oa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf = C, Me = Lf;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Fa = /* @__PURE__ */ new Set(), mr = {};
function en(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++) Fa.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zi = Object.prototype.hasOwnProperty, If = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fu = {}, pu = {};
function Mf(e) {
  return Zi.call(pu, e) ? !0 : Zi.call(fu, e) ? !1 : If.test(e) ? pu[e] = !0 : (fu[e] = !0, !1);
}
function Of(e, t, n, r) {
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
function Df(e, t, n, r) {
  if (t === null || typeof t > "u" || Of(e, t, n, r)) return !0;
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
function we(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Go = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Go,
    Xo
  );
  de[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Go, Xo);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Go, Xo);
  de[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zo(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Df(t, n, l, r) && (n = null), r || l === null ? Mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qr = Symbol.for("react.element"), cn = Symbol.for("react.portal"), dn = Symbol.for("react.fragment"), Jo = Symbol.for("react.strict_mode"), Ji = Symbol.for("react.profiler"), Ua = Symbol.for("react.provider"), $a = Symbol.for("react.context"), qo = Symbol.for("react.forward_ref"), qi = Symbol.for("react.suspense"), bi = Symbol.for("react.suspense_list"), bo = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), Aa = Symbol.for("react.offscreen"), mu = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object" ? null : (e = mu && e[mu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var b = Object.assign, Ni;
function tr(e) {
  if (Ni === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ni = t && t[1] || "";
  }
  return `
` + Ni + e;
}
var Ci = !1;
function ji(e, t) {
  if (!e || Ci) return "";
  Ci = !0;
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
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (l[o] !== i[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || l[o] !== i[s]) {
              var c = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Ci = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function Ff(e) {
  switch (e.tag) {
    case 5:
      return tr(e.type);
    case 16:
      return tr("Lazy");
    case 13:
      return tr("Suspense");
    case 19:
      return tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ji(e.type, !1), e;
    case 11:
      return e = ji(e.type.render, !1), e;
    case 1:
      return e = ji(e.type, !0), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dn:
      return "Fragment";
    case cn:
      return "Portal";
    case Ji:
      return "Profiler";
    case Jo:
      return "StrictMode";
    case qi:
      return "Suspense";
    case bi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case $a:
      return (e.displayName || "Context") + ".Consumer";
    case Ua:
      return (e._context.displayName || "Context") + ".Provider";
    case qo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bo:
      return t = e.displayName || null, t !== null ? t : eo(e.type) || "Memo";
    case xt:
      t = e._payload, e = e._init;
      try {
        return eo(e(t));
      } catch {
      }
  }
  return null;
}
function Uf(e) {
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
      return eo(t);
    case 8:
      return t === Jo ? "StrictMode" : "Mode";
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
function It(e) {
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
function Ha(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $f(e) {
  var t = Ha(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function br(e) {
  e._valueTracker || (e._valueTracker = $f(e));
}
function Ba(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ha(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function El(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, t) {
  var n = t.checked;
  return b({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = It(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Va(e, t) {
  t = t.checked, t != null && Zo(e, "checked", t, !1);
}
function no(e, t) {
  Va(e, t);
  var n = It(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ro(e, t.type, n) : t.hasOwnProperty("defaultValue") && ro(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ro(e, t, n) {
  (t !== "number" || El(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var nr = Array.isArray;
function Sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return b({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (nr(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: It(n) };
}
function Wa(e, t) {
  var n = It(t.value), r = It(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function io(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var el, Ya = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (el = el || document.createElement("div"), el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = el.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ir = {
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
}, Af = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function(e) {
  Af.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
  });
});
function Ka(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
}
function Ga(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ka(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Hf = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oo(e, t) {
  if (t) {
    if (Hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function so(e, t) {
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
var uo = null;
function es(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ao = null, _n = null, Nn = null;
function xu(e) {
  if (e = Mr(e)) {
    if (typeof ao != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = ni(t), ao(e.stateNode, e.type, t));
  }
}
function Xa(e) {
  _n ? Nn ? Nn.push(e) : Nn = [e] : _n = e;
}
function Za() {
  if (_n) {
    var e = _n, t = Nn;
    if (Nn = _n = null, xu(e), t) for (e = 0; e < t.length; e++) xu(t[e]);
  }
}
function Ja(e, t) {
  return e(t);
}
function qa() {
}
var Ei = !1;
function ba(e, t, n) {
  if (Ei) return e(t, n);
  Ei = !0;
  try {
    return Ja(e, t, n);
  } finally {
    Ei = !1, (_n !== null || Nn !== null) && (qa(), Za());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ni(n);
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
var co = !1;
if (dt) try {
  var Gn = {};
  Object.defineProperty(Gn, "passive", { get: function() {
    co = !0;
  } }), window.addEventListener("test", Gn, Gn), window.removeEventListener("test", Gn, Gn);
} catch {
  co = !1;
}
function Bf(e, t, n, r, l, i, o, s, c) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (g) {
    this.onError(g);
  }
}
var or = !1, Pl = null, Tl = !1, fo = null, Vf = { onError: function(e) {
  or = !0, Pl = e;
} };
function Wf(e, t, n, r, l, i, o, s, c) {
  or = !1, Pl = null, Bf.apply(Vf, arguments);
}
function Qf(e, t, n, r, l, i, o, s, c) {
  if (Wf.apply(this, arguments), or) {
    if (or) {
      var p = Pl;
      or = !1, Pl = null;
    } else throw Error(w(198));
    Tl || (Tl = !0, fo = p);
  }
}
function tn(e) {
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
function ec(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (tn(e) !== e) throw Error(w(188));
}
function Yf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null) throw Error(w(188));
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
        if (i === n) return wu(l), e;
        if (i === r) return wu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (s === r) {
          o = !0, r = l, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (s === r) {
            o = !0, r = i, n = l;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function tc(e) {
  return e = Yf(e), e !== null ? nc(e) : null;
}
function nc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rc = Me.unstable_scheduleCallback, ku = Me.unstable_cancelCallback, Kf = Me.unstable_shouldYield, Gf = Me.unstable_requestPaint, ne = Me.unstable_now, Xf = Me.unstable_getCurrentPriorityLevel, ts = Me.unstable_ImmediatePriority, lc = Me.unstable_UserBlockingPriority, zl = Me.unstable_NormalPriority, Zf = Me.unstable_LowPriority, ic = Me.unstable_IdlePriority, ql = null, lt = null;
function Jf(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function") try {
    lt.onCommitFiberRoot(ql, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xe = Math.clz32 ? Math.clz32 : ep, qf = Math.log, bf = Math.LN2;
function ep(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qf(e) / bf | 0) | 0;
}
var tl = 64, nl = 4194304;
function rr(e) {
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
function Ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? r = rr(s) : (i &= o, i !== 0 && (r = rr(i)));
  } else o = n & ~l, o !== 0 ? r = rr(o) : i !== 0 && (r = rr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function tp(e, t) {
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
function np(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Xe(i), s = 1 << o, c = l[o];
    c === -1 ? (!(s & n) || s & r) && (l[o] = tp(s, t)) : c <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function po(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function oc() {
  var e = tl;
  return tl <<= 1, !(tl & 4194240) && (tl = 64), e;
}
function Pi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function rp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Xe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ns(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var H = 0;
function sc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var uc, rs, ac, cc, dc, mo = !1, rl = [], Ct = null, jt = null, Et = null, gr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), kt = [], lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Mr(t), t !== null && rs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function ip(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ct = Xn(Ct, e, t, n, r, l), !0;
    case "dragenter":
      return jt = Xn(jt, e, t, n, r, l), !0;
    case "mouseover":
      return Et = Xn(Et, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return gr.set(i, Xn(gr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, yr.set(i, Xn(yr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function fc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ec(n), t !== null) {
          e.blockedOn = t, dc(e.priority, function() {
            ac(n);
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
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uo = r, n.target.dispatchEvent(r), uo = null;
    } else return t = Mr(n), t !== null && rs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _u(e, t, n) {
  vl(e) && n.delete(t);
}
function op() {
  mo = !1, Ct !== null && vl(Ct) && (Ct = null), jt !== null && vl(jt) && (jt = null), Et !== null && vl(Et) && (Et = null), gr.forEach(_u), yr.forEach(_u);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, mo || (mo = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, op)));
}
function xr(e) {
  function t(l) {
    return Zn(l, e);
  }
  if (0 < rl.length) {
    Zn(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Zn(Ct, e), jt !== null && Zn(jt, e), Et !== null && Zn(Et, e), gr.forEach(t), yr.forEach(t), n = 0; n < kt.length; n++) r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); ) fc(n), n.blockedOn === null && kt.shift();
}
var Cn = ht.ReactCurrentBatchConfig, Rl = !0;
function sp(e, t, n, r) {
  var l = H, i = Cn.transition;
  Cn.transition = null;
  try {
    H = 1, ls(e, t, n, r);
  } finally {
    H = l, Cn.transition = i;
  }
}
function up(e, t, n, r) {
  var l = H, i = Cn.transition;
  Cn.transition = null;
  try {
    H = 4, ls(e, t, n, r);
  } finally {
    H = l, Cn.transition = i;
  }
}
function ls(e, t, n, r) {
  if (Rl) {
    var l = ho(e, t, n, r);
    if (l === null) Ui(e, t, r, Il, n), Su(e, r);
    else if (ip(l, e, t, n, r)) r.stopPropagation();
    else if (Su(e, r), t & 4 && -1 < lp.indexOf(e)) {
      for (; l !== null; ) {
        var i = Mr(l);
        if (i !== null && uc(i), i = ho(e, t, n, r), i === null && Ui(e, t, r, Il, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ui(e, t, r, null, n);
  }
}
var Il = null;
function ho(e, t, n, r) {
  if (Il = null, e = es(r), e = Wt(e), e !== null) if (t = tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ec(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Il = e, null;
}
function pc(e) {
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
      switch (Xf()) {
        case ts:
          return 1;
        case lc:
          return 4;
        case zl:
        case Zf:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, is = null, gl = null;
function mc() {
  if (gl) return gl;
  var e, t = is, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return gl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function yl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ll() {
  return !0;
}
function Nu() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ll : Nu, this.isPropagationStopped = Nu, this;
  }
  return b(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ll);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ll);
  }, persist: function() {
  }, isPersistent: ll }), t;
}
var Dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, os = De(Dn), Ir = b({}, Dn, { view: 0, detail: 0 }), ap = De(Ir), Ti, zi, Jn, bl = b({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ss, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Ti = e.screenX - Jn.screenX, zi = e.screenY - Jn.screenY) : zi = Ti = 0, Jn = e), Ti);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zi;
} }), Cu = De(bl), cp = b({}, bl, { dataTransfer: 0 }), dp = De(cp), fp = b({}, Ir, { relatedTarget: 0 }), Li = De(fp), pp = b({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mp = De(pp), hp = b({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vp = De(hp), gp = b({}, Dn, { data: 0 }), ju = De(gp), yp = {
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
}, xp = {
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
}, wp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wp[e]) ? !!t[e] : !1;
}
function ss() {
  return kp;
}
var Sp = b({}, Ir, { key: function(e) {
  if (e.key) {
    var t = yp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = yl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ss, charCode: function(e) {
  return e.type === "keypress" ? yl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _p = De(Sp), Np = b({}, bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = De(Np), Cp = b({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ss }), jp = De(Cp), Ep = b({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pp = De(Ep), Tp = b({}, bl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zp = De(Tp), Lp = [9, 13, 27, 32], us = dt && "CompositionEvent" in window, sr = null;
dt && "documentMode" in document && (sr = document.documentMode);
var Rp = dt && "TextEvent" in window && !sr, hc = dt && (!us || sr && 8 < sr && 11 >= sr), Pu = " ", Tu = !1;
function vc(e, t) {
  switch (e) {
    case "keyup":
      return Lp.indexOf(t.keyCode) !== -1;
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
function gc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function Ip(e, t) {
  switch (e) {
    case "compositionend":
      return gc(t);
    case "keypress":
      return t.which !== 32 ? null : (Tu = !0, Pu);
    case "textInput":
      return e = t.data, e === Pu && Tu ? null : e;
    default:
      return null;
  }
}
function Mp(e, t) {
  if (fn) return e === "compositionend" || !us && vc(e, t) ? (e = mc(), gl = is = _t = null, fn = !1, e) : null;
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
      return hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Op = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Op[e.type] : t === "textarea";
}
function yc(e, t, n, r) {
  Xa(r), t = Ml(t, "onChange"), 0 < t.length && (n = new os("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ur = null, wr = null;
function Dp(e) {
  Tc(e, 0);
}
function ei(e) {
  var t = hn(e);
  if (Ba(t)) return e;
}
function Fp(e, t) {
  if (e === "change") return t;
}
var xc = !1;
if (dt) {
  var Ri;
  if (dt) {
    var Ii = "oninput" in document;
    if (!Ii) {
      var Lu = document.createElement("div");
      Lu.setAttribute("oninput", "return;"), Ii = typeof Lu.oninput == "function";
    }
    Ri = Ii;
  } else Ri = !1;
  xc = Ri && (!document.documentMode || 9 < document.documentMode);
}
function Ru() {
  ur && (ur.detachEvent("onpropertychange", wc), wr = ur = null);
}
function wc(e) {
  if (e.propertyName === "value" && ei(wr)) {
    var t = [];
    yc(t, wr, e, es(e)), ba(Dp, t);
  }
}
function Up(e, t, n) {
  e === "focusin" ? (Ru(), ur = t, wr = n, ur.attachEvent("onpropertychange", wc)) : e === "focusout" && Ru();
}
function $p(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ei(wr);
}
function Ap(e, t) {
  if (e === "click") return ei(t);
}
function Hp(e, t) {
  if (e === "input" || e === "change") return ei(t);
}
function Bp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Bp;
function kr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zi.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mu(e, t) {
  var n = Iu(e);
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
    n = Iu(n);
  }
}
function kc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sc() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Vp(e) {
  var t = Sc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && kc(n.ownerDocument.documentElement, n)) {
    if (r !== null && as(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Mu(n, i);
        var o = Mu(
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
var Wp = dt && "documentMode" in document && 11 >= document.documentMode, pn = null, vo = null, ar = null, go = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  go || pn == null || pn !== El(r) || (r = pn, "selectionStart" in r && as(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && kr(ar, r) || (ar = r, r = Ml(vo, "onSelect"), 0 < r.length && (t = new os("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
}
function il(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var mn = { animationend: il("Animation", "AnimationEnd"), animationiteration: il("Animation", "AnimationIteration"), animationstart: il("Animation", "AnimationStart"), transitionend: il("Transition", "TransitionEnd") }, Mi = {}, _c = {};
dt && (_c = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
function ti(e) {
  if (Mi[e]) return Mi[e];
  if (!mn[e]) return e;
  var t = mn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in _c) return Mi[e] = t[n];
  return e;
}
var Nc = ti("animationend"), Cc = ti("animationiteration"), jc = ti("animationstart"), Ec = ti("transitionend"), Pc = /* @__PURE__ */ new Map(), Du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ot(e, t) {
  Pc.set(e, t), en(t, [e]);
}
for (var Oi = 0; Oi < Du.length; Oi++) {
  var Di = Du[Oi], Qp = Di.toLowerCase(), Yp = Di[0].toUpperCase() + Di.slice(1);
  Ot(Qp, "on" + Yp);
}
Ot(Nc, "onAnimationEnd");
Ot(Cc, "onAnimationIteration");
Ot(jc, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Ec, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Fu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qf(r, t, void 0, e), e.currentTarget = null;
}
function Tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], c = s.instance, p = s.currentTarget;
        if (s = s.listener, c !== i && l.isPropagationStopped()) break e;
        Fu(l, s, p), i = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], c = s.instance, p = s.currentTarget, s = s.listener, c !== i && l.isPropagationStopped()) break e;
        Fu(l, s, p), i = c;
      }
    }
  }
  if (Tl) throw e = fo, Tl = !1, fo = null, e;
}
function Y(e, t) {
  var n = t[So];
  n === void 0 && (n = t[So] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (zc(t, e, 2, !1), n.add(r));
}
function Fi(e, t, n) {
  var r = 0;
  t && (r |= 4), zc(n, e, r, t);
}
var ol = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[ol]) {
    e[ol] = !0, Fa.forEach(function(n) {
      n !== "selectionchange" && (Kp.has(n) || Fi(n, !1, e), Fi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ol] || (t[ol] = !0, Fi("selectionchange", !1, t));
  }
}
function zc(e, t, n, r) {
  switch (pc(t)) {
    case 1:
      var l = sp;
      break;
    case 4:
      l = up;
      break;
    default:
      l = ls;
  }
  n = l.bind(null, t, n, e), l = void 0, !co || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ui(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === l || s.nodeType === 8 && s.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = Wt(s), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  ba(function() {
    var p = i, g = es(n), y = [];
    e: {
      var h = Pc.get(e);
      if (h !== void 0) {
        var _ = os, N = e;
        switch (e) {
          case "keypress":
            if (yl(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = _p;
            break;
          case "focusin":
            N = "focus", _ = Li;
            break;
          case "focusout":
            N = "blur", _ = Li;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Li;
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
            _ = Cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = dp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = jp;
            break;
          case Nc:
          case Cc:
          case jc:
            _ = mp;
            break;
          case Ec:
            _ = Pp;
            break;
          case "scroll":
            _ = ap;
            break;
          case "wheel":
            _ = zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = vp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Eu;
        }
        var j = (t & 4) !== 0, B = !j && e === "scroll", f = j ? h !== null ? h + "Capture" : null : h;
        j = [];
        for (var d = p, m; d !== null; ) {
          m = d;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, f !== null && (x = vr(d, f), x != null && j.push(_r(d, x, m)))), B) break;
          d = d.return;
        }
        0 < j.length && (h = new _(h, N, null, n, g), y.push({ event: h, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", h && n !== uo && (N = n.relatedTarget || n.fromElement) && (Wt(N) || N[ft])) break e;
        if ((_ || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, _ ? (N = n.relatedTarget || n.toElement, _ = p, N = N ? Wt(N) : null, N !== null && (B = tn(N), N !== B || N.tag !== 5 && N.tag !== 6) && (N = null)) : (_ = null, N = p), _ !== N)) {
          if (j = Cu, x = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = Eu, x = "onPointerLeave", f = "onPointerEnter", d = "pointer"), B = _ == null ? h : hn(_), m = N == null ? h : hn(N), h = new j(x, d + "leave", _, n, g), h.target = B, h.relatedTarget = m, x = null, Wt(g) === p && (j = new j(f, d + "enter", N, n, g), j.target = m, j.relatedTarget = B, x = j), B = x, _ && N) t: {
            for (j = _, f = N, d = 0, m = j; m; m = an(m)) d++;
            for (m = 0, x = f; x; x = an(x)) m++;
            for (; 0 < d - m; ) j = an(j), d--;
            for (; 0 < m - d; ) f = an(f), m--;
            for (; d--; ) {
              if (j === f || f !== null && j === f.alternate) break t;
              j = an(j), f = an(f);
            }
            j = null;
          }
          else j = null;
          _ !== null && Uu(y, h, _, j, !1), N !== null && B !== null && Uu(y, B, N, j, !0);
        }
      }
      e: {
        if (h = p ? hn(p) : window, _ = h.nodeName && h.nodeName.toLowerCase(), _ === "select" || _ === "input" && h.type === "file") var P = Fp;
        else if (zu(h)) if (xc) P = Hp;
        else {
          P = $p;
          var T = Up;
        }
        else (_ = h.nodeName) && _.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Ap);
        if (P && (P = P(e, p))) {
          yc(y, P, n, g);
          break e;
        }
        T && T(e, h, p), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && ro(h, "number", h.value);
      }
      switch (T = p ? hn(p) : window, e) {
        case "focusin":
          (zu(T) || T.contentEditable === "true") && (pn = T, vo = p, ar = null);
          break;
        case "focusout":
          ar = vo = pn = null;
          break;
        case "mousedown":
          go = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          go = !1, Ou(y, n, g);
          break;
        case "selectionchange":
          if (Wp) break;
        case "keydown":
        case "keyup":
          Ou(y, n, g);
      }
      var L;
      if (us) e: {
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
      else fn ? vc(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (hc && n.locale !== "ko" && (fn || R !== "onCompositionStart" ? R === "onCompositionEnd" && fn && (L = mc()) : (_t = g, is = "value" in _t ? _t.value : _t.textContent, fn = !0)), T = Ml(p, R), 0 < T.length && (R = new ju(R, e, null, n, g), y.push({ event: R, listeners: T }), L ? R.data = L : (L = gc(n), L !== null && (R.data = L)))), (L = Rp ? Ip(e, n) : Mp(e, n)) && (p = Ml(p, "onBeforeInput"), 0 < p.length && (g = new ju("onBeforeInput", "beforeinput", null, n, g), y.push({ event: g, listeners: p }), g.data = L));
    }
    Tc(y, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = vr(e, n), i != null && r.unshift(_r(e, i, l)), i = vr(e, t), i != null && r.push(_r(e, i, l))), e = e.return;
  }
  return r;
}
function an(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, c = s.alternate, p = s.stateNode;
    if (c !== null && c === r) break;
    s.tag === 5 && p !== null && (s = p, l ? (c = vr(n, i), c != null && o.unshift(_r(n, c, s))) : l || (c = vr(n, i), c != null && o.push(_r(n, c, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gp = /\r\n?/g, Xp = /\u0000|\uFFFD/g;
function $u(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gp, `
`).replace(Xp, "");
}
function sl(e, t, n) {
  if (t = $u(t), $u(e) !== t && n) throw Error(w(425));
}
function Ol() {
}
var yo = null, xo = null;
function wo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0, Zp = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, Jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
  return Au.resolve(null).then(e).catch(qp);
} : ko;
function qp(e) {
  setTimeout(function() {
    throw e;
  });
}
function $i(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), xr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  xr(t);
}
function Pt(e) {
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
function Hu(e) {
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
var Fn = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Fn, Nr = "__reactProps$" + Fn, ft = "__reactContainer$" + Fn, So = "__reactEvents$" + Fn, bp = "__reactListeners$" + Fn, em = "__reactHandles$" + Fn;
function Wt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ft] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hu(e); e !== null; ) {
        if (n = e[rt]) return n;
        e = Hu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Mr(e) {
  return e = e[rt] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function ni(e) {
  return e[Nr] || null;
}
var _o = [], vn = -1;
function Dt(e) {
  return { current: e };
}
function K(e) {
  0 > vn || (e.current = _o[vn], _o[vn] = null, vn--);
}
function W(e, t) {
  vn++, _o[vn] = e.current, e.current = t;
}
var Mt = {}, ve = Dt(Mt), Ne = Dt(!1), Xt = Mt;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ce(e) {
  return e = e.childContextTypes, e != null;
}
function Dl() {
  K(Ne), K(ve);
}
function Bu(e, t, n) {
  if (ve.current !== Mt) throw Error(w(168));
  W(ve, t), W(Ne, n);
}
function Lc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Uf(e) || "Unknown", l));
  return b({}, n, r);
}
function Fl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Xt = ve.current, W(ve, e), W(Ne, Ne.current), !0;
}
function Vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = Lc(e, t, Xt), r.__reactInternalMemoizedMergedChildContext = e, K(Ne), K(ve), W(ve, e)) : K(Ne), W(Ne, n);
}
var st = null, ri = !1, Ai = !1;
function Rc(e) {
  st === null ? st = [e] : st.push(e);
}
function tm(e) {
  ri = !0, Rc(e);
}
function Ft() {
  if (!Ai && st !== null) {
    Ai = !0;
    var e = 0, t = H;
    try {
      var n = st;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, ri = !1;
    } catch (l) {
      throw st !== null && (st = st.slice(e + 1)), rc(ts, Ft), l;
    } finally {
      H = t, Ai = !1;
    }
  }
  return null;
}
var gn = [], yn = 0, Ul = null, $l = 0, Fe = [], Ue = 0, Zt = null, ut = 1, at = "";
function Bt(e, t) {
  gn[yn++] = $l, gn[yn++] = Ul, Ul = e, $l = t;
}
function Ic(e, t, n) {
  Fe[Ue++] = ut, Fe[Ue++] = at, Fe[Ue++] = Zt, Zt = e;
  var r = ut;
  e = at;
  var l = 32 - Xe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Xe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, ut = 1 << 32 - Xe(t) + l | n << l | r, at = i + e;
  } else ut = 1 << i | n << l | r, at = e;
}
function cs(e) {
  e.return !== null && (Bt(e, 1), Ic(e, 1, 0));
}
function ds(e) {
  for (; e === Ul; ) Ul = gn[--yn], gn[yn] = null, $l = gn[--yn], gn[yn] = null;
  for (; e === Zt; ) Zt = Fe[--Ue], Fe[Ue] = null, at = Fe[--Ue], Fe[Ue] = null, ut = Fe[--Ue], Fe[Ue] = null;
}
var Ie = null, Re = null, G = !1, Ge = null;
function Mc(e, t) {
  var n = $e(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Re = Pt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: ut, overflow: at } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
  if (G) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Wu(e, t)) {
        if (No(e)) throw Error(w(418));
        t = Pt(n.nextSibling);
        var r = Ie;
        t && Wu(e, t) ? Mc(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ie = e);
      }
    } else {
      if (No(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ie = e;
    }
  }
}
function Qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ie = e;
}
function ul(e) {
  if (e !== Ie) return !1;
  if (!G) return Qu(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = Re)) {
    if (No(e)) throw Oc(), Error(w(418));
    for (; t; ) Mc(e, t), t = Pt(t.nextSibling);
  }
  if (Qu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Pt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Ie ? Pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Oc() {
  for (var e = Re; e; ) e = Pt(e.nextSibling);
}
function zn() {
  Re = Ie = null, G = !1;
}
function fs(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var nm = ht.ReactCurrentBatchConfig;
function qn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = l.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function al(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Yu(e) {
  var t = e._init;
  return t(e._payload);
}
function Dc(e) {
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
    return f = Rt(f, d), f.index = 0, f.sibling = null, f;
  }
  function i(f, d, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < d ? (f.flags |= 2, d) : m) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, m, x) {
    return d === null || d.tag !== 6 ? (d = Ki(m, f.mode, x), d.return = f, d) : (d = l(d, m), d.return = f, d);
  }
  function c(f, d, m, x) {
    var P = m.type;
    return P === dn ? g(f, d, m.props.children, x, m.key) : d !== null && (d.elementType === P || typeof P == "object" && P !== null && P.$$typeof === xt && Yu(P) === d.type) ? (x = l(d, m.props), x.ref = qn(f, d, m), x.return = f, x) : (x = Cl(m.type, m.key, m.props, null, f.mode, x), x.ref = qn(f, d, m), x.return = f, x);
  }
  function p(f, d, m, x) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Gi(m, f.mode, x), d.return = f, d) : (d = l(d, m.children || []), d.return = f, d);
  }
  function g(f, d, m, x, P) {
    return d === null || d.tag !== 7 ? (d = Gt(m, f.mode, x, P), d.return = f, d) : (d = l(d, m), d.return = f, d);
  }
  function y(f, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ki("" + d, f.mode, m), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case qr:
          return m = Cl(d.type, d.key, d.props, null, f.mode, m), m.ref = qn(f, null, d), m.return = f, m;
        case cn:
          return d = Gi(d, f.mode, m), d.return = f, d;
        case xt:
          var x = d._init;
          return y(f, x(d._payload), m);
      }
      if (nr(d) || Kn(d)) return d = Gt(d, f.mode, m, null), d.return = f, d;
      al(f, d);
    }
    return null;
  }
  function h(f, d, m, x) {
    var P = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return P !== null ? null : s(f, d, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case qr:
          return m.key === P ? c(f, d, m, x) : null;
        case cn:
          return m.key === P ? p(f, d, m, x) : null;
        case xt:
          return P = m._init, h(
            f,
            d,
            P(m._payload),
            x
          );
      }
      if (nr(m) || Kn(m)) return P !== null ? null : g(f, d, m, x, null);
      al(f, m);
    }
    return null;
  }
  function _(f, d, m, x, P) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(m) || null, s(d, f, "" + x, P);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case qr:
          return f = f.get(x.key === null ? m : x.key) || null, c(d, f, x, P);
        case cn:
          return f = f.get(x.key === null ? m : x.key) || null, p(d, f, x, P);
        case xt:
          var T = x._init;
          return _(f, d, m, T(x._payload), P);
      }
      if (nr(x) || Kn(x)) return f = f.get(m) || null, g(d, f, x, P, null);
      al(d, x);
    }
    return null;
  }
  function N(f, d, m, x) {
    for (var P = null, T = null, L = d, R = d = 0, X = null; L !== null && R < m.length; R++) {
      L.index > R ? (X = L, L = null) : X = L.sibling;
      var D = h(f, L, m[R], x);
      if (D === null) {
        L === null && (L = X);
        break;
      }
      e && L && D.alternate === null && t(f, L), d = i(D, d, R), T === null ? P = D : T.sibling = D, T = D, L = X;
    }
    if (R === m.length) return n(f, L), G && Bt(f, R), P;
    if (L === null) {
      for (; R < m.length; R++) L = y(f, m[R], x), L !== null && (d = i(L, d, R), T === null ? P = L : T.sibling = L, T = L);
      return G && Bt(f, R), P;
    }
    for (L = r(f, L); R < m.length; R++) X = _(L, f, R, m[R], x), X !== null && (e && X.alternate !== null && L.delete(X.key === null ? R : X.key), d = i(X, d, R), T === null ? P = X : T.sibling = X, T = X);
    return e && L.forEach(function(Ee) {
      return t(f, Ee);
    }), G && Bt(f, R), P;
  }
  function j(f, d, m, x) {
    var P = Kn(m);
    if (typeof P != "function") throw Error(w(150));
    if (m = P.call(m), m == null) throw Error(w(151));
    for (var T = P = null, L = d, R = d = 0, X = null, D = m.next(); L !== null && !D.done; R++, D = m.next()) {
      L.index > R ? (X = L, L = null) : X = L.sibling;
      var Ee = h(f, L, D.value, x);
      if (Ee === null) {
        L === null && (L = X);
        break;
      }
      e && L && Ee.alternate === null && t(f, L), d = i(Ee, d, R), T === null ? P = Ee : T.sibling = Ee, T = Ee, L = X;
    }
    if (D.done) return n(
      f,
      L
    ), G && Bt(f, R), P;
    if (L === null) {
      for (; !D.done; R++, D = m.next()) D = y(f, D.value, x), D !== null && (d = i(D, d, R), T === null ? P = D : T.sibling = D, T = D);
      return G && Bt(f, R), P;
    }
    for (L = r(f, L); !D.done; R++, D = m.next()) D = _(L, f, R, D.value, x), D !== null && (e && D.alternate !== null && L.delete(D.key === null ? R : D.key), d = i(D, d, R), T === null ? P = D : T.sibling = D, T = D);
    return e && L.forEach(function(qe) {
      return t(f, qe);
    }), G && Bt(f, R), P;
  }
  function B(f, d, m, x) {
    if (typeof m == "object" && m !== null && m.type === dn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case qr:
          e: {
            for (var P = m.key, T = d; T !== null; ) {
              if (T.key === P) {
                if (P = m.type, P === dn) {
                  if (T.tag === 7) {
                    n(f, T.sibling), d = l(T, m.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (T.elementType === P || typeof P == "object" && P !== null && P.$$typeof === xt && Yu(P) === T.type) {
                  n(f, T.sibling), d = l(T, m.props), d.ref = qn(f, T, m), d.return = f, f = d;
                  break e;
                }
                n(f, T);
                break;
              } else t(f, T);
              T = T.sibling;
            }
            m.type === dn ? (d = Gt(m.props.children, f.mode, x, m.key), d.return = f, f = d) : (x = Cl(m.type, m.key, m.props, null, f.mode, x), x.ref = qn(f, d, m), x.return = f, f = x);
          }
          return o(f);
        case cn:
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
            d = Gi(m, f.mode, x), d.return = f, f = d;
          }
          return o(f);
        case xt:
          return T = m._init, B(f, d, T(m._payload), x);
      }
      if (nr(m)) return N(f, d, m, x);
      if (Kn(m)) return j(f, d, m, x);
      al(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, m), d.return = f, f = d) : (n(f, d), d = Ki(m, f.mode, x), d.return = f, f = d), o(f)) : n(f, d);
  }
  return B;
}
var Ln = Dc(!0), Fc = Dc(!1), Al = Dt(null), Hl = null, xn = null, ps = null;
function ms() {
  ps = xn = Hl = null;
}
function hs(e) {
  var t = Al.current;
  K(Al), e._currentValue = t;
}
function jo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function jn(e, t) {
  Hl = e, ps = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (ps !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
    if (Hl === null) throw Error(w(308));
    xn = e, Hl.dependencies = { lanes: 0, firstContext: e };
  } else xn = xn.next = e;
  return t;
}
var Qt = null;
function vs(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function Uc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, vs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, pt(e, r);
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function gs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function $c(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, pt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, vs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, pt(e, n);
}
function xl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ns(e, n);
  }
}
function Ku(e, t) {
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
function Bl(e, t, n, r) {
  var l = e.updateQueue;
  wt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var c = s, p = c.next;
    c.next = null, o === null ? i = p : o.next = p, o = c;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== o && (s === null ? g.firstBaseUpdate = p : s.next = p, g.lastBaseUpdate = c));
  }
  if (i !== null) {
    var y = l.baseState;
    o = 0, g = p = c = null, s = i;
    do {
      var h = s.lane, _ = s.eventTime;
      if ((r & h) === h) {
        g !== null && (g = g.next = {
          eventTime: _,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var N = e, j = s;
          switch (h = t, _ = n, j.tag) {
            case 1:
              if (N = j.payload, typeof N == "function") {
                y = N.call(_, y, h);
                break e;
              }
              y = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = j.payload, h = typeof N == "function" ? N.call(_, y, h) : N, h == null) break e;
              y = b({}, y, h);
              break e;
            case 2:
              wt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [s] : h.push(s));
      } else _ = { eventTime: _, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, g === null ? (p = g = _, c = y) : g = g.next = _, o |= h;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (c = y), l.baseState = c, l.firstBaseUpdate = p, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    qt |= o, e.lanes = o, e.memoizedState = y;
  }
}
function Gu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var Or = {}, it = Dt(Or), Cr = Dt(Or), jr = Dt(Or);
function Yt(e) {
  if (e === Or) throw Error(w(174));
  return e;
}
function ys(e, t) {
  switch (W(jr, t), W(Cr, e), W(it, Or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : io(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = io(t, e);
  }
  K(it), W(it, t);
}
function Rn() {
  K(it), K(Cr), K(jr);
}
function Ac(e) {
  Yt(jr.current);
  var t = Yt(it.current), n = io(t, e.type);
  t !== n && (W(Cr, e), W(it, n));
}
function xs(e) {
  Cr.current === e && (K(it), K(Cr));
}
var J = Dt(0);
function Vl(e) {
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
var Hi = [];
function ws() {
  for (var e = 0; e < Hi.length; e++) Hi[e]._workInProgressVersionPrimary = null;
  Hi.length = 0;
}
var wl = ht.ReactCurrentDispatcher, Bi = ht.ReactCurrentBatchConfig, Jt = 0, q = null, le = null, oe = null, Wl = !1, cr = !1, Er = 0, rm = 0;
function pe() {
  throw Error(w(321));
}
function ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Ss(e, t, n, r, l, i) {
  if (Jt = i, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wl.current = e === null || e.memoizedState === null ? sm : um, e = n(r, l), cr) {
    i = 0;
    do {
      if (cr = !1, Er = 0, 25 <= i) throw Error(w(301));
      i += 1, oe = le = null, t.updateQueue = null, wl.current = am, e = n(r, l);
    } while (cr);
  }
  if (wl.current = Ql, t = le !== null && le.next !== null, Jt = 0, oe = le = q = null, Wl = !1, t) throw Error(w(300));
  return e;
}
function _s() {
  var e = Er !== 0;
  return Er = 0, e;
}
function nt() {
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
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vi(e) {
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
    var s = o = null, c = null, p = i;
    do {
      var g = p.lane;
      if ((Jt & g) === g) c !== null && (c = c.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var y = {
          lane: g,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        c === null ? (s = c = y, o = r) : c = c.next = y, q.lanes |= g, qt |= g;
      }
      p = p.next;
    } while (p !== null && p !== i);
    c === null ? o = r : c.next = s, Je(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, q.lanes |= i, qt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wi(e) {
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
    Je(i, t.memoizedState) || (_e = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Hc() {
}
function Bc(e, t) {
  var n = q, r = Be(), l = t(), i = !Je(r.memoizedState, l);
  if (i && (r.memoizedState = l, _e = !0), r = r.queue, Ns(Qc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Tr(9, Wc.bind(null, n, r, l, t), void 0, null), se === null) throw Error(w(349));
    Jt & 30 || Vc(n, t, l);
  }
  return l;
}
function Vc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Wc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Yc(t) && Kc(e);
}
function Qc(e, t, n) {
  return n(function() {
    Yc(t) && Kc(e);
  });
}
function Yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Kc(e) {
  var t = pt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Xu(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = om.bind(null, q, e), [t.memoizedState, e];
}
function Tr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gc() {
  return Be().memoizedState;
}
function kl(e, t, n, r) {
  var l = nt();
  q.flags |= e, l.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r);
}
function li(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var o = le.memoizedState;
    if (i = o.destroy, r !== null && ks(r, o.deps)) {
      l.memoizedState = Tr(t, n, i, r);
      return;
    }
  }
  q.flags |= e, l.memoizedState = Tr(1 | t, n, i, r);
}
function Zu(e, t) {
  return kl(8390656, 8, e, t);
}
function Ns(e, t) {
  return li(2048, 8, e, t);
}
function Xc(e, t) {
  return li(4, 2, e, t);
}
function Zc(e, t) {
  return li(4, 4, e, t);
}
function Jc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function qc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, li(4, 4, Jc.bind(null, t, e), n);
}
function Cs() {
}
function bc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ed(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function td(e, t, n) {
  return Jt & 21 ? (Je(n, t) || (n = oc(), q.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function lm(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Bi.transition;
  Bi.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Bi.transition = r;
  }
}
function nd() {
  return Be().memoizedState;
}
function im(e, t, n) {
  var r = Lt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, rd(e)) ld(t, n);
  else if (n = Uc(e, t, n, r), n !== null) {
    var l = ye();
    Ze(n, e, r, l), id(n, t, r);
  }
}
function om(e, t, n) {
  var r = Lt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rd(e)) ld(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, Je(s, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, vs(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Uc(e, t, l, r), n !== null && (l = ye(), Ze(n, e, r, l), id(n, t, r));
  }
}
function rd(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q;
}
function ld(e, t) {
  cr = Wl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function id(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ns(e, n);
  }
}
var Ql = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, sm = { readContext: He, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: Zu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, kl(
    4194308,
    4,
    Jc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return kl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return kl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = im.bind(null, q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Xu, useDebugValue: Cs, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = Xu(!1), t = e[0];
  return e = lm.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = q, l = nt();
  if (G) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(w(349));
    Jt & 30 || Vc(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Zu(Qc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Tr(9, Wc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = se.identifierPrefix;
  if (G) {
    var n = at, r = ut;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, um = {
  readContext: He,
  useCallback: bc,
  useContext: He,
  useEffect: Ns,
  useImperativeHandle: qc,
  useInsertionEffect: Xc,
  useLayoutEffect: Zc,
  useMemo: ed,
  useReducer: Vi,
  useRef: Gc,
  useState: function() {
    return Vi(Pr);
  },
  useDebugValue: Cs,
  useDeferredValue: function(e) {
    var t = Be();
    return td(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = Vi(Pr)[0], t = Be().memoizedState;
    return [e, t];
  },
  useMutableSource: Hc,
  useSyncExternalStore: Bc,
  useId: nd,
  unstable_isNewReconciler: !1
}, am = { readContext: He, useCallback: bc, useContext: He, useEffect: Ns, useImperativeHandle: qc, useInsertionEffect: Xc, useLayoutEffect: Zc, useMemo: ed, useReducer: Wi, useRef: Gc, useState: function() {
  return Wi(Pr);
}, useDebugValue: Cs, useDeferredValue: function(e) {
  var t = Be();
  return le === null ? t.memoizedState = e : td(t, le.memoizedState, e);
}, useTransition: function() {
  var e = Wi(Pr)[0], t = Be().memoizedState;
  return [e, t];
}, useMutableSource: Hc, useSyncExternalStore: Bc, useId: nd, unstable_isNewReconciler: !1 };
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = b({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Eo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ii = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = Lt(e), i = ct(r, l);
  i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Ze(t, e, l, r), xl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = Lt(e), i = ct(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tt(e, i, l), t !== null && (Ze(t, e, l, r), xl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = Lt(e), l = ct(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Tt(e, l, r), t !== null && (Ze(t, e, r, n), xl(t, e, r));
} };
function Ju(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(l, i) : !0;
}
function od(e, t, n) {
  var r = !1, l = Mt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = He(i) : (l = Ce(t) ? Xt : ve.current, r = t.contextTypes, i = (r = r != null) ? Tn(e, l) : Mt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ii, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function qu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ii.enqueueReplaceState(t, t.state, null);
}
function Po(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, gs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = He(i) : (i = Ce(t) ? Xt : ve.current, l.context = Tn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Eo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ii.enqueueReplaceState(l, l.state, null), Bl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ff(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Qi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function To(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cm = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  n = ct(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Kl || (Kl = !0, $o = r), To(e, t);
  }, n;
}
function ud(e, t, n) {
  n = ct(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      To(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    To(e, t), typeof r != "function" && (zt === null ? zt = /* @__PURE__ */ new Set([this]) : zt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Nm.bind(null, e, t, n), t.then(e, e));
}
function ea(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ta(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, Tt(n, t, 1))), n.lanes |= 1), e);
}
var dm = ht.ReactCurrentOwner, _e = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Fc(t, null, n, r) : Ln(t, e.child, n, r);
}
function na(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return jn(t, l), r = Ss(e, t, n, r, i, l), n = _s(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mt(e, t, l)) : (G && n && cs(t), t.flags |= 1, ge(e, t, r, l), t.child);
}
function ra(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Is(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ad(e, t, i, r, l)) : (e = Cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kr, n(o, r) && e.ref === t.ref) return mt(e, t, l);
  }
  return t.flags |= 1, e = Rt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ad(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (kr(i, r) && e.ref === t.ref) if (_e = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (_e = !0);
    else return t.lanes = e.lanes, mt(e, t, l);
  }
  return zo(e, t, n, r, l);
}
function cd(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(kn, Le), Le |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(kn, Le), Le |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, W(kn, Le), Le |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, W(kn, Le), Le |= r;
  return ge(e, t, l, n), t.child;
}
function dd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zo(e, t, n, r, l) {
  var i = Ce(n) ? Xt : ve.current;
  return i = Tn(t, i), jn(t, l), n = Ss(e, t, n, r, i, l), r = _s(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mt(e, t, l)) : (G && r && cs(t), t.flags |= 1, ge(e, t, n, l), t.child);
}
function la(e, t, n, r, l) {
  if (Ce(n)) {
    var i = !0;
    Fl(t);
  } else i = !1;
  if (jn(t, l), t.stateNode === null) Sl(e, t), od(t, n, r), Po(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var c = o.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = He(p) : (p = Ce(n) ? Xt : ve.current, p = Tn(t, p));
    var g = n.getDerivedStateFromProps, y = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== p) && qu(t, o, r, p), wt = !1;
    var h = t.memoizedState;
    o.state = h, Bl(t, r, o, l), c = t.memoizedState, s !== r || h !== c || Ne.current || wt ? (typeof g == "function" && (Eo(t, n, g, r), c = t.memoizedState), (s = wt || Ju(t, n, s, r, h, c, p)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = p, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, $c(e, t), s = t.memoizedProps, p = t.type === t.elementType ? s : Ye(t.type, s), o.props = p, y = t.pendingProps, h = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = He(c) : (c = Ce(n) ? Xt : ve.current, c = Tn(t, c));
    var _ = n.getDerivedStateFromProps;
    (g = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== y || h !== c) && qu(t, o, r, c), wt = !1, h = t.memoizedState, o.state = h, Bl(t, r, o, l);
    var N = t.memoizedState;
    s !== y || h !== N || Ne.current || wt ? (typeof _ == "function" && (Eo(t, n, _, r), N = t.memoizedState), (p = wt || Ju(t, n, p, r, h, N, c) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, N, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, N, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), o.props = r, o.state = N, o.context = c, r = p) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Lo(e, t, n, r, i, l);
}
function Lo(e, t, n, r, l, i) {
  dd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Vu(t, n, !1), mt(e, t, i);
  r = t.stateNode, dm.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Ln(t, e.child, null, i), t.child = Ln(t, null, s, i)) : ge(e, t, s, i), t.memoizedState = r.state, l && Vu(t, n, !0), t.child;
}
function fd(e) {
  var t = e.stateNode;
  t.pendingContext ? Bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bu(e, t.context, !1), ys(e, t.containerInfo);
}
function ia(e, t, n, r, l) {
  return zn(), fs(l), t.flags |= 256, ge(e, t, n, r), t.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Io(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pd(e, t, n) {
  var r = t.pendingProps, l = J.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(J, l & 1), e === null)
    return Co(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ui(o, r, 0, null), e = Gt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Io(n), t.memoizedState = Ro, e) : js(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return fm(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Rt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Rt(s, i) : (i = Gt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Io(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Ro, r;
  }
  return i = e.child, e = i.sibling, r = Rt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function js(e, t) {
  return t = ui({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function cl(e, t, n, r) {
  return r !== null && fs(r), Ln(t, e.child, null, n), e = js(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Qi(Error(w(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = ui({ mode: "visible", children: r.children }, l, 0, null), i = Gt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ln(t, e.child, null, o), t.child.memoizedState = Io(o), t.memoizedState = Ro, i);
  if (!(t.mode & 1)) return cl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(w(419)), r = Qi(i, r, void 0), cl(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, _e || s) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, pt(e, l), Ze(r, e, l, -1));
    }
    return Rs(), r = Qi(Error(w(421))), cl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Re = Pt(l.nextSibling), Ie = t, G = !0, Ge = null, e !== null && (Fe[Ue++] = ut, Fe[Ue++] = at, Fe[Ue++] = Zt, ut = e.id, at = e.overflow, Zt = t), t = js(t, r.children), t.flags |= 4096, t);
}
function oa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jo(e.return, t, n);
}
function Yi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function md(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ge(e, t, r.children, n), r = J.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && oa(e, n, t);
      else if (e.tag === 19) oa(e, n, t);
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
  if (W(J, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Vl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Vl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Yi(t, !0, n, null, i);
      break;
    case "together":
      Yi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Sl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function mt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pm(e, t, n) {
  switch (t.tag) {
    case 3:
      fd(t), zn();
      break;
    case 5:
      Ac(t);
      break;
    case 1:
      Ce(t.type) && Fl(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      W(Al, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pd(e, t, n) : (W(J, J.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
      W(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return md(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(J, J.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, cd(e, t, n);
  }
  return mt(e, t, n);
}
var hd, Mo, vd, gd;
hd = function(e, t) {
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
Mo = function() {
};
vd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Yt(it.current);
    var i = null;
    switch (n) {
      case "input":
        l = to(e, l), r = to(e, r), i = [];
        break;
      case "select":
        l = b({}, l, { value: void 0 }), r = b({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = lo(e, l), r = lo(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ol);
    }
    oo(n, r);
    var o;
    n = null;
    for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
      var s = l[p];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (mr.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
    for (p in r) {
      var c = r[p];
      if (s = l != null ? l[p] : void 0, r.hasOwnProperty(p) && c !== s && (c != null || s != null)) if (p === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && s[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (i || (i = []), i.push(
        p,
        n
      )), n = c;
      else p === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, c != null && s !== c && (i = i || []).push(p, c)) : p === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(p, "" + c) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (mr.hasOwnProperty(p) ? (c != null && p === "onScroll" && Y("scroll", e), i || s === c || (i = [])) : (i = i || []).push(p, c));
    }
    n && (i = i || []).push("style", n);
    var p = i;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
gd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bn(e, t) {
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
function mm(e, t, n) {
  var r = t.pendingProps;
  switch (ds(t), t.tag) {
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
      return Ce(t.type) && Dl(), me(t), null;
    case 3:
      return r = t.stateNode, Rn(), K(Ne), K(ve), ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Bo(Ge), Ge = null))), Mo(e, t), me(t), null;
    case 5:
      xs(t);
      var l = Yt(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) vd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return me(t), null;
        }
        if (e = Yt(it.current), ul(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rt] = t, r[Nr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < lr.length; l++) Y(lr[l], r);
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
              hu(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              gu(r, i), Y("invalid", r);
          }
          oo(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && sl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && sl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : mr.hasOwnProperty(o) && s != null && o === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              br(r), vu(r, i, !0);
              break;
            case "textarea":
              br(r), yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ol);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[rt] = t, e[Nr] = r, hd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = so(n, r), n) {
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
                for (l = 0; l < lr.length; l++) Y(lr[l], e);
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
                hu(e, r), l = to(e, r), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = b({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                gu(e, r), l = lo(e, r), Y("invalid", e);
                break;
              default:
                l = r;
            }
            oo(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var c = s[i];
              i === "style" ? Ga(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ya(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && hr(e, c) : typeof c == "number" && hr(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (mr.hasOwnProperty(i) ? c != null && i === "onScroll" && Y("scroll", e) : c != null && Zo(e, i, c, o));
            }
            switch (n) {
              case "input":
                br(e), vu(e, r, !1);
                break;
              case "textarea":
                br(e), yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Sn(e, !!r.multiple, i, !1) : r.defaultValue != null && Sn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ol);
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
      if (e && t.stateNode != null) gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Yt(jr.current), Yt(it.current), ul(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (i = r.nodeValue !== n) && (e = Ie, e !== null)) switch (e.tag) {
            case 3:
              sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (K(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Re !== null && t.mode & 1 && !(t.flags & 128)) Oc(), zn(), t.flags |= 98560, i = !1;
        else if (i = ul(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[rt] = t;
          } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else Ge !== null && (Bo(Ge), Ge = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ie === 0 && (ie = 3) : Rs())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Rn(), Mo(e, t), e === null && Sr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return hs(t.type._context), me(t), null;
    case 17:
      return Ce(t.type) && Dl(), me(t), null;
    case 19:
      if (K(J), i = t.memoizedState, i === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) bn(i, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Vl(e), o !== null) {
            for (t.flags |= 128, bn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ne() > Mn && (t.flags |= 128, r = !0, bn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Vl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !G) return me(t), null;
        } else 2 * ne() - i.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, bn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = J.current, W(J, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Ls(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function hm(e, t) {
  switch (ds(t), t.tag) {
    case 1:
      return Ce(t.type) && Dl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Rn(), K(Ne), K(ve), ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xs(t), null;
    case 13:
      if (K(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        zn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(J), null;
    case 4:
      return Rn(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Ls(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1, he = !1, vm = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function Oo(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var sa = !1;
function gm(e, t) {
  if (yo = Rl, e = Sc(), as(e)) {
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
        var o = 0, s = -1, c = -1, p = 0, g = 0, y = e, h = null;
        t: for (; ; ) {
          for (var _; y !== n || l !== 0 && y.nodeType !== 3 || (s = o + l), y !== i || r !== 0 && y.nodeType !== 3 || (c = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (_ = y.firstChild) !== null; )
            h = y, y = _;
          for (; ; ) {
            if (y === e) break t;
            if (h === n && ++p === l && (s = o), h === i && ++g === r && (c = o), (_ = y.nextSibling) !== null) break;
            y = h, h = y.parentNode;
          }
          y = _;
        }
        n = s === -1 || c === -1 ? null : { start: s, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xo = { focusedElem: e, selectionRange: n }, Rl = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
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
            var j = N.memoizedProps, B = N.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Ye(t.type, j), B);
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
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return N = sa, sa = !1, N;
}
function dr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Oo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function oi(e, t) {
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
function Do(e) {
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
function yd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Nr], delete t[So], delete t[bp], delete t[em])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ua(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || xd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ol));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), e = e.sibling;
}
function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), e = e.sibling;
}
var ae = null, Ke = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) wd(e, t, n), n = n.sibling;
}
function wd(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function") try {
    lt.onCommitFiberUnmount(ql, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || wn(n, t);
    case 6:
      var r = ae, l = Ke;
      ae = null, yt(e, t, n), ae = r, Ke = l, ae !== null && (Ke ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ke ? (e = ae, n = n.stateNode, e.nodeType === 8 ? $i(e.parentNode, n) : e.nodeType === 1 && $i(e, n), xr(e)) : $i(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ke, ae = n.stateNode.containerInfo, Ke = !0, yt(e, t, n), ae = r, Ke = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Oo(n, t, o), l = l.next;
        } while (l !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (!he && (wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ee(n, t, s);
      }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, yt(e, t, n), he = r) : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function aa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vm()), t.forEach(function(r) {
      var l = jm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ae = s.stateNode, Ke = !1;
            break e;
          case 3:
            ae = s.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            ae = s.stateNode.containerInfo, Ke = !0;
            break e;
        }
        s = s.return;
      }
      if (ae === null) throw Error(w(160));
      wd(i, o, l), ae = null, Ke = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (p) {
      ee(l, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kd(t, e), t = t.sibling;
}
function kd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qe(t, e), tt(e), r & 4) {
        try {
          dr(3, e, e.return), oi(3, e);
        } catch (j) {
          ee(e, e.return, j);
        }
        try {
          dr(5, e, e.return);
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 1:
      Qe(t, e), tt(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (Qe(t, e), tt(e), r & 512 && n !== null && wn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          hr(l, "");
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Va(l, i), so(s, o);
          var p = so(s, i);
          for (o = 0; o < c.length; o += 2) {
            var g = c[o], y = c[o + 1];
            g === "style" ? Ga(l, y) : g === "dangerouslySetInnerHTML" ? Ya(l, y) : g === "children" ? hr(l, y) : Zo(l, g, y, p);
          }
          switch (s) {
            case "input":
              no(l, i);
              break;
            case "textarea":
              Wa(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var _ = i.value;
              _ != null ? Sn(l, !!i.multiple, _, !1) : h !== !!i.multiple && (i.defaultValue != null ? Sn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Sn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Nr] = i;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 6:
      if (Qe(t, e), tt(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 3:
      if (Qe(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        xr(t.containerInfo);
      } catch (j) {
        ee(e, e.return, j);
      }
      break;
    case 4:
      Qe(t, e), tt(e);
      break;
    case 13:
      Qe(t, e), tt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ts = ne())), r & 4 && aa(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (p = he) || g, Qe(t, e), he = p) : Qe(t, e), tt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !g && e.mode & 1) for (z = e, g = e.child; g !== null; ) {
          for (y = z = g; z !== null; ) {
            switch (h = z, _ = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                dr(4, h, h.return);
                break;
              case 1:
                wn(h, h.return);
                var N = h.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (j) {
                    ee(r, n, j);
                  }
                }
                break;
              case 5:
                wn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  da(y);
                  continue;
                }
            }
            _ !== null ? (_.return = h, z = _) : da(y);
          }
          g = g.sibling;
        }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                l = y.stateNode, p ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = y.stateNode, c = y.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, s.style.display = Ka("display", o));
              } catch (j) {
                ee(e, e.return, j);
              }
            }
          } else if (y.tag === 6) {
            if (g === null) try {
              y.stateNode.nodeValue = p ? "" : y.memoizedProps;
            } catch (j) {
              ee(e, e.return, j);
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
      Qe(t, e), tt(e), r & 4 && aa(e);
      break;
    case 21:
      break;
    default:
      Qe(
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
          if (xd(n)) {
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
          r.flags & 32 && (hr(l, ""), r.flags &= -33);
          var i = ua(e);
          Uo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = ua(e);
          Fo(e, s, o);
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
function ym(e, t, n) {
  z = e, Sd(e);
}
function Sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || dl;
      if (!o) {
        var s = l.alternate, c = s !== null && s.memoizedState !== null || he;
        s = dl;
        var p = he;
        if (dl = o, (he = c) && !p) for (z = l; z !== null; ) o = z, c = o.child, o.tag === 22 && o.memoizedState !== null ? fa(l) : c !== null ? (c.return = o, z = c) : fa(l);
        for (; i !== null; ) z = i, Sd(i), i = i.sibling;
        z = l, dl = s, he = p;
      }
      ca(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, z = i) : ca(e);
  }
}
function ca(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || oi(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Gu(t, i, r);
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
              Gu(t, o, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
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
                  y !== null && xr(y);
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
        he || t.flags & 512 && Do(t);
      } catch (h) {
        ee(t, t.return, h);
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
function da(e) {
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
function fa(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            oi(4, t);
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
            Do(t);
          } catch (c) {
            ee(t, i, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Do(t);
          } catch (c) {
            ee(t, o, c);
          }
      }
    } catch (c) {
      ee(t, t.return, c);
    }
    if (t === e) {
      z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, z = s;
      break;
    }
    z = t.return;
  }
}
var xm = Math.ceil, Yl = ht.ReactCurrentDispatcher, Es = ht.ReactCurrentOwner, Ae = ht.ReactCurrentBatchConfig, A = 0, se = null, re = null, ce = 0, Le = 0, kn = Dt(0), ie = 0, zr = null, qt = 0, si = 0, Ps = 0, fr = null, Se = null, Ts = 0, Mn = 1 / 0, ot = null, Kl = !1, $o = null, zt = null, fl = !1, Nt = null, Gl = 0, pr = 0, Ao = null, _l = -1, Nl = 0;
function ye() {
  return A & 6 ? ne() : _l !== -1 ? _l : _l = ne();
}
function Lt(e) {
  return e.mode & 1 ? A & 2 && ce !== 0 ? ce & -ce : nm.transition !== null ? (Nl === 0 && (Nl = oc()), Nl) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : pc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < pr) throw pr = 0, Ao = null, Error(w(185));
  Rr(e, n, r), (!(A & 2) || e !== se) && (e === se && (!(A & 2) && (si |= n), ie === 4 && St(e, ce)), je(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Mn = ne() + 500, ri && Ft()));
}
function je(e, t) {
  var n = e.callbackNode;
  np(e, t);
  var r = Ll(e, e === se ? ce : 0);
  if (r === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ku(n), t === 1) e.tag === 0 ? tm(pa.bind(null, e)) : Rc(pa.bind(null, e)), Jp(function() {
      !(A & 6) && Ft();
    }), n = null;
    else {
      switch (sc(r)) {
        case 1:
          n = ts;
          break;
        case 4:
          n = lc;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = ic;
          break;
        default:
          n = zl;
      }
      n = zd(n, _d.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _d(e, t) {
  if (_l = -1, Nl = 0, A & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = Ll(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var i = Cd();
    (se !== e || ce !== t) && (ot = null, Mn = ne() + 500, Kt(e, t));
    do
      try {
        Sm();
        break;
      } catch (s) {
        Nd(e, s);
      }
    while (!0);
    ms(), Yl.current = i, A = l, re !== null ? t = 0 : (se = null, ce = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = po(e), l !== 0 && (r = l, t = Ho(e, l))), t === 1) throw n = zr, Kt(e, 0), St(e, r), je(e, ne()), n;
    if (t === 6) St(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wm(l) && (t = Xl(e, r), t === 2 && (i = po(e), i !== 0 && (r = i, t = Ho(e, i))), t === 1)) throw n = zr, Kt(e, 0), St(e, r), je(e, ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Vt(e, Se, ot);
          break;
        case 3:
          if (St(e, r), (r & 130023424) === r && (t = Ts + 500 - ne(), 10 < t)) {
            if (Ll(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ko(Vt.bind(null, e, Se, ot), t);
            break;
          }
          Vt(e, Se, ot);
          break;
        case 4:
          if (St(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ko(Vt.bind(null, e, Se, ot), r);
            break;
          }
          Vt(e, Se, ot);
          break;
        case 5:
          Vt(e, Se, ot);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return je(e, ne()), e.callbackNode === n ? _d.bind(null, e) : null;
}
function Ho(e, t) {
  var n = fr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Xl(e, t), e !== 2 && (t = Se, Se = n, t !== null && Bo(t)), e;
}
function Bo(e) {
  Se === null ? Se = e : Se.push.apply(Se, e);
}
function wm(e) {
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
function St(e, t) {
  for (t &= ~Ps, t &= ~si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pa(e) {
  if (A & 6) throw Error(w(327));
  En();
  var t = Ll(e, 0);
  if (!(t & 1)) return je(e, ne()), null;
  var n = Xl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && (t = r, n = Ho(e, r));
  }
  if (n === 1) throw n = zr, Kt(e, 0), St(e, t), je(e, ne()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vt(e, Se, ot), je(e, ne()), null;
}
function zs(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Mn = ne() + 500, ri && Ft());
  }
}
function bt(e) {
  Nt !== null && Nt.tag === 0 && !(A & 6) && En();
  var t = A;
  A |= 1;
  var n = Ae.transition, r = H;
  try {
    if (Ae.transition = null, H = 1, e) return e();
  } finally {
    H = r, Ae.transition = n, A = t, !(A & 6) && Ft();
  }
}
function Ls() {
  Le = kn.current, K(kn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zp(n)), re !== null) for (n = re.return; n !== null; ) {
    var r = n;
    switch (ds(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Dl();
        break;
      case 3:
        Rn(), K(Ne), K(ve), ws();
        break;
      case 5:
        xs(r);
        break;
      case 4:
        Rn();
        break;
      case 13:
        K(J);
        break;
      case 19:
        K(J);
        break;
      case 10:
        hs(r.type._context);
        break;
      case 22:
      case 23:
        Ls();
    }
    n = n.return;
  }
  if (se = e, re = e = Rt(e.current, null), ce = Le = t, ie = 0, zr = null, Ps = si = qt = 0, Se = fr = null, Qt !== null) {
    for (t = 0; t < Qt.length; t++) if (n = Qt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Qt = null;
  }
  return e;
}
function Nd(e, t) {
  do {
    var n = re;
    try {
      if (ms(), wl.current = Ql, Wl) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Wl = !1;
      }
      if (Jt = 0, oe = le = q = null, cr = !1, Er = 0, Es.current = null, n === null || n.return === null) {
        ie = 1, zr = t, re = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, c = t;
        if (t = ce, s.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var p = c, g = s, y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var h = g.alternate;
            h ? (g.updateQueue = h.updateQueue, g.memoizedState = h.memoizedState, g.lanes = h.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var _ = ea(o);
          if (_ !== null) {
            _.flags &= -257, ta(_, o, s, i, t), _.mode & 1 && bu(i, p, t), t = _, c = p;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else N.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              bu(i, p, t), Rs();
              break e;
            }
            c = Error(w(426));
          }
        } else if (G && s.mode & 1) {
          var B = ea(o);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256), ta(B, o, s, i, t), fs(In(c, s));
            break e;
          }
        }
        i = c = In(c, s), ie !== 4 && (ie = 2), fr === null ? fr = [i] : fr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = sd(i, c, t);
              Ku(i, f);
              break e;
            case 1:
              s = c;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (zt === null || !zt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = ud(i, s, t);
                Ku(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ed(n);
    } catch (P) {
      t = P, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cd() {
  var e = Yl.current;
  return Yl.current = Ql, e === null ? Ql : e;
}
function Rs() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || !(qt & 268435455) && !(si & 268435455) || St(se, ce);
}
function Xl(e, t) {
  var n = A;
  A |= 2;
  var r = Cd();
  (se !== e || ce !== t) && (ot = null, Kt(e, t));
  do
    try {
      km();
      break;
    } catch (l) {
      Nd(e, l);
    }
  while (!0);
  if (ms(), A = n, Yl.current = r, re !== null) throw Error(w(261));
  return se = null, ce = 0, ie;
}
function km() {
  for (; re !== null; ) jd(re);
}
function Sm() {
  for (; re !== null && !Kf(); ) jd(re);
}
function jd(e) {
  var t = Td(e.alternate, e, Le);
  e.memoizedProps = e.pendingProps, t === null ? Ed(e) : re = t, Es.current = null;
}
function Ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hm(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, re = null;
        return;
      }
    } else if (n = mm(n, t, Le), n !== null) {
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
function Vt(e, t, n) {
  var r = H, l = Ae.transition;
  try {
    Ae.transition = null, H = 1, _m(e, t, n, r);
  } finally {
    Ae.transition = l, H = r;
  }
  return null;
}
function _m(e, t, n, r) {
  do
    En();
  while (Nt !== null);
  if (A & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (rp(e, i), e === se && (re = se = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fl || (fl = !0, zd(zl, function() {
    return En(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ae.transition, Ae.transition = null;
    var o = H;
    H = 1;
    var s = A;
    A |= 4, Es.current = null, gm(e, n), kd(n, e), Vp(xo), Rl = !!yo, xo = yo = null, e.current = n, ym(n), Gf(), A = s, H = o, Ae.transition = i;
  } else e.current = n;
  if (fl && (fl = !1, Nt = e, Gl = l), i = e.pendingLanes, i === 0 && (zt = null), Jf(n.stateNode), je(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Kl) throw Kl = !1, e = $o, $o = null, e;
  return Gl & 1 && e.tag !== 0 && En(), i = e.pendingLanes, i & 1 ? e === Ao ? pr++ : (pr = 0, Ao = e) : pr = 0, Ft(), null;
}
function En() {
  if (Nt !== null) {
    var e = sc(Gl), t = Ae.transition, n = H;
    try {
      if (Ae.transition = null, H = 16 > e ? 16 : e, Nt === null) var r = !1;
      else {
        if (e = Nt, Nt = null, Gl = 0, A & 6) throw Error(w(331));
        var l = A;
        for (A |= 4, z = e.current; z !== null; ) {
          var i = z, o = i.child;
          if (z.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var p = s[c];
                for (z = p; z !== null; ) {
                  var g = z;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(8, g, i);
                  }
                  var y = g.child;
                  if (y !== null) y.return = g, z = y;
                  else for (; z !== null; ) {
                    g = z;
                    var h = g.sibling, _ = g.return;
                    if (yd(g), g === p) {
                      z = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = _, z = h;
                      break;
                    }
                    z = _;
                  }
                }
              }
              var N = i.alternate;
              if (N !== null) {
                var j = N.child;
                if (j !== null) {
                  N.child = null;
                  do {
                    var B = j.sibling;
                    j.sibling = null, j = B;
                  } while (j !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, z = o;
          else e: for (; z !== null; ) {
            if (i = z, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                dr(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, z = f;
              break e;
            }
            z = i.return;
          }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          o = z;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, z = m;
          else e: for (o = d; z !== null; ) {
            if (s = z, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  oi(9, s);
              }
            } catch (P) {
              ee(s, s.return, P);
            }
            if (s === o) {
              z = null;
              break e;
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, z = x;
              break e;
            }
            z = s.return;
          }
        }
        if (A = l, Ft(), lt && typeof lt.onPostCommitFiberRoot == "function") try {
          lt.onPostCommitFiberRoot(ql, e);
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
function ma(e, t, n) {
  t = In(n, t), t = sd(e, t, 1), e = Tt(e, t, 1), t = ye(), e !== null && (Rr(e, 1, t), je(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) ma(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ma(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
        e = In(n, e), e = ud(t, e, 1), t = Tt(t, e, 1), e = ye(), t !== null && (Rr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Nm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ce & n) === n && (ie === 4 || ie === 3 && (ce & 130023424) === ce && 500 > ne() - Ts ? Kt(e, 0) : Ps |= n), je(e, t);
}
function Pd(e, t) {
  t === 0 && (e.mode & 1 ? (t = nl, nl <<= 1, !(nl & 130023424) && (nl = 4194304)) : t = 1);
  var n = ye();
  e = pt(e, t), e !== null && (Rr(e, t, n), je(e, n));
}
function Cm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pd(e, n);
}
function jm(e, t) {
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
  r !== null && r.delete(t), Pd(e, n);
}
var Td;
Td = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ne.current) _e = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return _e = !1, pm(e, t, n);
    _e = !!(e.flags & 131072);
  }
  else _e = !1, G && t.flags & 1048576 && Ic(t, $l, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Sl(e, t), e = t.pendingProps;
      var l = Tn(t, ve.current);
      jn(t, n), l = Ss(null, t, r, e, l, n);
      var i = _s();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ce(r) ? (i = !0, Fl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, gs(t), l.updater = ii, t.stateNode = l, l._reactInternals = t, Po(t, r, e, n), t = Lo(null, t, r, !0, i, n)) : (t.tag = 0, G && i && cs(t), ge(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Sl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Pm(r), e = Ye(r, e), l) {
          case 0:
            t = zo(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, Ye(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), zo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), la(e, t, r, l, n);
    case 3:
      e: {
        if (fd(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, $c(e, t), Bl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = In(Error(w(423)), t), t = ia(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = In(Error(w(424)), t), t = ia(e, t, r, n, l);
          break e;
        } else for (Re = Pt(t.stateNode.containerInfo.firstChild), Ie = t, G = !0, Ge = null, n = Fc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zn(), r === l) {
            t = mt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ac(t), e === null && Co(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wo(r, l) ? o = null : i !== null && wo(r, i) && (t.flags |= 32), dd(e, t), ge(e, t, o, n), t.child;
    case 6:
      return e === null && Co(t), null;
    case 13:
      return pd(e, t, n);
    case 4:
      return ys(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), na(e, t, r, l, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, W(Al, r._currentValue), r._currentValue = o, i !== null) if (Je(i.value, o)) {
          if (i.children === l.children && !Ne.current) {
            t = mt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var c = s.firstContext; c !== null; ) {
              if (c.context === r) {
                if (i.tag === 1) {
                  c = ct(-1, n & -n), c.tag = 2;
                  var p = i.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var g = p.pending;
                    g === null ? c.next = c : (c.next = g.next, g.next = c), p.pending = c;
                  }
                }
                i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), jo(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(w(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), jo(o, n, t), o = i.sibling;
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
        ge(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, jn(t, n), l = He(l), r = r(l), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ye(r, t.pendingProps), l = Ye(r.type, l), ra(e, t, r, l, n);
    case 15:
      return ad(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Sl(e, t), t.tag = 1, Ce(r) ? (e = !0, Fl(t)) : e = !1, jn(t, n), od(t, r, l), Po(t, r, l, n), Lo(null, t, r, !0, e, n);
    case 19:
      return md(e, t, n);
    case 22:
      return cd(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function zd(e, t) {
  return rc(e, t);
}
function Em(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function $e(e, t, n, r) {
  return new Em(e, t, n, r);
}
function Is(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pm(e) {
  if (typeof e == "function") return Is(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qo) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return n === null ? (n = $e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Cl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Is(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case dn:
      return Gt(n.children, l, i, t);
    case Jo:
      o = 8, l |= 8;
      break;
    case Ji:
      return e = $e(12, n, t, l | 2), e.elementType = Ji, e.lanes = i, e;
    case qi:
      return e = $e(13, n, t, l), e.elementType = qi, e.lanes = i, e;
    case bi:
      return e = $e(19, n, t, l), e.elementType = bi, e.lanes = i, e;
    case Aa:
      return ui(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ua:
          o = 10;
          break e;
        case $a:
          o = 9;
          break e;
        case qo:
          o = 11;
          break e;
        case bo:
          o = 14;
          break e;
        case xt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = $e(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Gt(e, t, n, r) {
  return e = $e(7, e, r, t), e.lanes = n, e;
}
function ui(e, t, n, r) {
  return e = $e(22, e, r, t), e.elementType = Aa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ki(e, t, n) {
  return e = $e(6, e, null, t), e.lanes = n, e;
}
function Gi(e, t, n) {
  return t = $e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Tm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pi(0), this.expirationTimes = Pi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, l, i, o, s, c) {
  return e = new Tm(e, t, n, s, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = $e(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gs(i), e;
}
function zm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ld(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
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
    if (Ce(n)) return Lc(e, n, t);
  }
  return t;
}
function Rd(e, t, n, r, l, i, o, s, c) {
  return e = Ms(n, r, !0, e, l, i, o, s, c), e.context = Ld(null), n = e.current, r = ye(), l = Lt(n), i = ct(r, l), i.callback = t ?? null, Tt(n, i, l), e.current.lanes = l, Rr(e, l, r), je(e, r), e;
}
function ai(e, t, n, r) {
  var l = t.current, i = ye(), o = Lt(l);
  return n = Ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tt(l, t, o), e !== null && (Ze(e, l, o, i), xl(e, l, o)), o;
}
function Zl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ha(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Os(e, t) {
  ha(e, t), (e = e.alternate) && ha(e, t);
}
function Lm() {
  return null;
}
var Id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ds(e) {
  this._internalRoot = e;
}
ci.prototype.render = Ds.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  ai(e, t, null, null);
};
ci.prototype.unmount = Ds.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function() {
      ai(null, e, null, null);
    }), t[ft] = null;
  }
};
function ci(e) {
  this._internalRoot = e;
}
ci.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = cc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++) ;
    kt.splice(n, 0, e), n === 0 && fc(e);
  }
};
function Fs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function di(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function va() {
}
function Rm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Zl(o);
        i.call(p);
      };
    }
    var o = Rd(t, r, e, 0, null, !1, !1, "", va);
    return e._reactRootContainer = o, e[ft] = o.current, Sr(e.nodeType === 8 ? e.parentNode : e), bt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var p = Zl(c);
      s.call(p);
    };
  }
  var c = Ms(e, 0, !1, null, null, !1, !1, "", va);
  return e._reactRootContainer = c, e[ft] = c.current, Sr(e.nodeType === 8 ? e.parentNode : e), bt(function() {
    ai(t, c, n, r);
  }), c;
}
function fi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var c = Zl(o);
        s.call(c);
      };
    }
    ai(t, o, e, l);
  } else o = Rm(n, t, e, l, r);
  return Zl(o);
}
uc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rr(t.pendingLanes);
        n !== 0 && (ns(t, n | 1), je(t, ne()), !(A & 6) && (Mn = ne() + 500, Ft()));
      }
      break;
    case 13:
      bt(function() {
        var r = pt(e, 1);
        if (r !== null) {
          var l = ye();
          Ze(r, e, 1, l);
        }
      }), Os(e, 1);
  }
};
rs = function(e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ze(t, e, 134217728, n);
    }
    Os(e, 134217728);
  }
};
ac = function(e) {
  if (e.tag === 13) {
    var t = Lt(e), n = pt(e, t);
    if (n !== null) {
      var r = ye();
      Ze(n, e, t, r);
    }
    Os(e, t);
  }
};
cc = function() {
  return H;
};
dc = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
ao = function(e, t, n) {
  switch (t) {
    case "input":
      if (no(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ni(r);
            if (!l) throw Error(w(90));
            Ba(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      Wa(e, n);
      break;
    case "select":
      t = n.value, t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Ja = zs;
qa = bt;
var Im = { usingClientEntryPoint: !1, Events: [Mr, hn, ni, Xa, Za, zs] }, er = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mm = { bundleType: er.bundleType, version: er.version, rendererPackageName: er.rendererPackageName, rendererConfig: er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: er.findFiberByHostInstance || Lm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pl.isDisabled && pl.supportsFiber) try {
    ql = pl.inject(Mm), lt = pl;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Im;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fs(t)) throw Error(w(200));
  return zm(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!Fs(e)) throw Error(w(299));
  var n = !1, r = "", l = Id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, l), e[ft] = t.current, Sr(e.nodeType === 8 ? e.parentNode : e), new Ds(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = tc(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return bt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!di(t)) throw Error(w(200));
  return fi(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!Fs(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Id;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Rd(t, null, e, 1, n ?? null, l, !1, i, o), e[ft] = t.current, Sr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ci(t);
};
Oe.render = function(e, t, n) {
  if (!di(t)) throw Error(w(200));
  return fi(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!di(e)) throw Error(w(40));
  return e._reactRootContainer ? (bt(function() {
    fi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ft] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = zs;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!di(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return fi(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Md() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md);
    } catch (e) {
      console.error(e);
    }
}
Md(), Ma.exports = Oe;
var Om = Ma.exports, Od, ga = Om;
Od = ga.createRoot, ga.hydrateRoot;
async function ze(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const ya = `
.notify-studio {
  --ns-radius: 18px;
  --ns-radius-sm: 12px;
  --ns-button-outline: rgba(255, 255, 255, 0.92);
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
.ns-button { min-height:40px; border:1px solid var(--ns-button-outline); border-radius:12px; padding:0 14px; color:var(--text-primary-color); background:var(--primary-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; transition:filter .15s ease, transform .15s ease, background .15s ease; white-space:nowrap; }
.ns-button:hover:not(:disabled) { filter:brightness(1.08); transform:translateY(-1px); }
.ns-button:disabled { opacity:.55; cursor:not-allowed; }
.ns-button--quiet { background:transparent; color:var(--primary-text-color); border-color:var(--ns-button-outline); }
.ns-button--tab { background:color-mix(in srgb, var(--card-background-color) 82%, transparent); color:var(--secondary-text-color); border-color:var(--ns-button-outline); }
.ns-button--tab.is-active { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); border-color:var(--ns-button-outline); color:var(--primary-text-color); }
.ns-button--danger { color:var(--error-color); border-color:var(--ns-button-outline); }
.ns-button--compact { min-height:32px; padding:0 10px; border-radius:9px; font-size:.82rem; }
.ns-button--active { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); border-color:var(--ns-button-outline); color:var(--primary-text-color); }
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
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } }
`, Dm = { rendered: {}, errors: {} }, Fm = "/notify_studio_static/notify-studio-logo.png?v=0.1.11";
function Dd(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function Vo(e, t) {
  const n = Dd(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function xa(e) {
  const t = `Action ${e}`;
  return { id: Vo(t, e), title: t, route: "event" };
}
function Um(e, t) {
  return `notify_studio_persistent_${Dd(e || t).toLowerCase() || "notification"}`;
}
function Xi(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function wa(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function jl(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Z(e) {
  return typeof e == "string" ? e : "";
}
function ka(e) {
  return e === !0;
}
function Sa(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function $m(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!jl(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function Am({ hass: e }) {
  const t = C.useRef(e);
  t.current = e;
  const [n, r] = C.useState("audit"), [l, i] = C.useState(!!e), [o, s] = C.useState(!0), [c, p] = C.useState(null), [g, y] = C.useState([]), [h, _] = C.useState([]), [N, j] = C.useState([]), [B, f] = C.useState(!0), [d, m] = C.useState([]), [x, P] = C.useState(null), [T, L] = C.useState(!1), [R, X] = C.useState(""), [D, Ee] = C.useState(""), [qe, Ut] = C.useState(""), [$t, pi] = C.useState(""), [be, Un] = C.useState("none"), [E, M] = C.useState(""), [O, V] = C.useState(""), [Q, At] = C.useState("A test notification from Notify Studio."), [ue, nn] = C.useState("Notify Studio"), [Pe, vt] = C.useState(""), [Dr, Us] = C.useState(""), [gt, $s] = C.useState(""), [Fr, As] = C.useState(""), [Ur, Hs] = C.useState(""), [$r, Bs] = C.useState(""), [Ar, Vs] = C.useState(""), [Hr, Ws] = C.useState(""), [Br, Qs] = C.useState(""), [Vr, Ys] = C.useState(""), [mi, Ks] = C.useState(!1), [Wr, Gs] = C.useState(!1), [rn, Xs] = C.useState(!1), [et, ln] = C.useState([]), [Qr, Zs] = C.useState(""), [Yr, Js] = C.useState(""), [Kr, qs] = C.useState(""), [Gr, bs] = C.useState(""), [Xr, eu] = C.useState(""), [on, tu] = C.useState(Dm), [$n, nu] = C.useState(""), [Ht, sn] = C.useState(null), [ru, An] = C.useState(""), [lu, Hn] = C.useState(""), [Bn, Vn] = C.useState(null), [Fd, Ud] = C.useState(""), hi = C.useRef(0), U = C.useMemo(
    () => g.find((u) => u.id === E) ?? null,
    [g, E]
  ), iu = C.useMemo(
    () => h.filter((u) => u.kind === "script"),
    [h]
  ), vi = C.useMemo(() => {
    const u = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
    for (const S of x ?? []) {
      S.category && u.add(S.category);
      for (const I of S.labels ?? []) v.add(I);
      for (const I of S.notify_devices ?? S.notifiers) k.add(I);
    }
    return {
      categories: [...u].sort((S, I) => S.localeCompare(I)),
      labels: [...v].sort((S, I) => S.localeCompare(I)),
      devices: [...k].sort((S, I) => S.localeCompare(I))
    };
  }, [x]), gi = C.useMemo(() => (x ?? []).filter((u) => !(R && u.source !== R || D && u.category !== D || qe && !(u.labels ?? []).includes(qe) || $t && !(u.notify_devices ?? u.notifiers).includes($t))), [D, $t, qe, R, x]), $d = C.useMemo(() => {
    var k, S;
    const u = /* @__PURE__ */ new Map(), v = (I, te) => {
      const Ve = u.get(I) ?? [];
      Ve.push(te), u.set(I, Ve);
    };
    for (const I of gi)
      if (be === "source") v(I.source === "script" ? "Scripts" : I.source === "automation" ? "Automations" : "Alerts", I);
      else if (be === "category") v(I.category || "Uncategorised", I);
      else if (be === "label") {
        const te = (k = I.labels) != null && k.length ? I.labels : ["No label"];
        for (const Ve of te) v(Ve, I);
      } else if (be === "device") {
        const te = (S = I.notify_devices) != null && S.length ? I.notify_devices : I.notifiers.length ? I.notifiers : ["No notify device"];
        for (const Ve of te) v(Ve, I);
      } else v("All notification sources", I);
    return [...u.entries()].map(([I, te]) => ({ title: I, items: te })).sort((I, te) => I.title.localeCompare(te.title));
  }, [be, gi]), ke = C.useCallback((u) => {
    Ud(u);
  }, []), Te = C.useCallback((u, v) => {
    const k = u instanceof Error ? u.message : v;
    ke(k), window.alert(k);
  }, [ke]), ou = C.useCallback(async () => {
    const u = t.current;
    if (!u) return;
    const [v, k, S, I] = await Promise.all([
      ze(u, "notify_studio/info"),
      ze(u, "notify_studio/list_notifiers"),
      ze(u, "notify_studio/list_runnables"),
      ze(u, "notify_studio/list_templates")
    ]);
    p(v), y(k.services), _(S), m(I);
  }, []), Wn = C.useCallback(async () => {
    const u = t.current;
    if (u) {
      f(!0);
      try {
        const v = await ze(
          u,
          "notify_studio/list_recent_push_runnables"
        );
        j(v);
      } catch {
        j([]);
      } finally {
        f(!1);
      }
    }
  }, []), su = C.useCallback(async () => {
    try {
      await ou(), P(null);
    } catch (u) {
      Te(u, "Unable to load Notify Studio.");
    } finally {
      s(!1);
    }
  }, [ke, ou, Te]);
  C.useEffect(() => {
    e && !l && i(!0);
  }, [e, l]), C.useEffect(() => {
    l && su();
  }, [l, su]), C.useEffect(() => {
    l && Wn();
  }, [l, Wn]), C.useEffect(() => {
    !E && g.length && M(g[0].id);
  }, [E, g]);
  const yi = C.useCallback(async () => {
    const u = t.current;
    if (!(!u || T)) {
      L(!0);
      try {
        P(await ze(u, "notify_studio/scan_notify_usage")), ke("Notification audit complete.");
      } catch (v) {
        Te(v, "The notification audit failed.");
      } finally {
        L(!1);
      }
    }
  }, [ke, T, Te]);
  C.useEffect(() => {
    n === "audit" && x === null && yi();
  }, [yi, n, x]), C.useEffect(() => {
    n === "audit" && Wn();
  }, [Wn, n]);
  const Zr = C.useCallback(() => {
    const u = {};
    if (Pe.trim() && (u.tag = Pe.trim()), Dr.trim() && (u.image = Dr.trim()), rn && et.length && (u.actions = et.map((v) => v.route === "uri" ? {
      action: "URI",
      title: v.title,
      uri: v.uri ?? ""
    } : v.route === "reply" ? {
      action: v.id,
      title: v.title,
      behavior: "textInput"
    } : { action: v.id, title: v.title })), (U == null ? void 0 : U.platform) === "android")
      gt.trim() && (u.clickAction = gt.trim()), Fr.trim() && (u.subject = Fr.trim()), Ur.trim() && (u.channel = Ur.trim()), $r && (u.importance = $r), Ar && (u.priority = Ar), Hr.trim() && (u.color = Hr.trim()), Br.trim() && (u.notification_icon = Br.trim()), Vr.trim() && (u.timeout = Number(Vr)), mi && (u.sticky = !0), Wr && (u.persistent = !0);
    else if ((U == null ? void 0 : U.platform) === "ios") {
      gt.trim() && (u.url = gt.trim()), Qr.trim() && (u.subtitle = Qr.trim());
      const v = {};
      Yr.trim() && (v.sound = Yr.trim()), Kr.trim() && (v.badge = Number(Kr)), Gr && (v["interruption-level"] = Gr), Xr.trim() && (v["thread-id"] = Xr.trim()), Object.keys(v).length && (u.push = v);
    } else gt.trim() && (u.url = gt.trim());
    return {
      message: Q,
      ...ue.trim() ? { title: ue } : {},
      ...Object.keys(u).length ? { data: u } : {}
    };
  }, [rn, Dr, Kr, Ur, Hr, $r, Gr, Q, et, Br, gt, Wr, Ar, U == null ? void 0 : U.platform, Yr, mi, Fr, Qr, Pe, Xr, Vr, ue]), xi = C.useCallback(() => rn ? et.filter((u) => u.route !== "uri").map((u) => {
    var v, k;
    if (u.route === "script") {
      if (!((v = u.scriptEntityId) != null && v.trim()))
        throw new Error(`Choose a script for the “${u.title || "untitled"}” button.`);
      return {
        action: u.id,
        type: "script",
        script_entity_id: u.scriptEntityId.trim()
      };
    }
    if (u.route === "service") {
      if (!((k = u.service) != null && k.trim()))
        throw new Error(`Enter a Home Assistant action for the “${u.title || "untitled"}” button.`);
      return {
        action: u.id,
        type: "service",
        service: u.service.trim(),
        service_data: $m(u.serviceData ?? "")
      };
    }
    return u.route === "reply" ? { action: u.id, type: "reply" } : { action: u.id, type: "event" };
  }) : [], [rn, et]), Ad = C.useCallback(() => ({
    payload: Zr(),
    action_handlers: xi(),
    ...U ? { target_platform: U.platform } : {}
  }), [xi, Zr, U]), uu = () => U || (Te(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  C.useEffect(() => {
    const u = t.current;
    if (!l || !u) return;
    const v = ++hi.current;
    let k = !1;
    const S = {
      message: Q,
      ...ue.trim() ? { title: ue } : {}
    }, I = window.setTimeout(() => {
      ze(u, "notify_studio/render_preview", { payload: S }).then((te) => {
        !k && v === hi.current && tu(te);
      }).catch((te) => {
        if (k || v !== hi.current) return;
        const Ve = te instanceof Error ? te.message : "Unable to render the current template.";
        tu({ rendered: {}, errors: { message: Ve } });
      });
    }, 250);
    return () => {
      k = !0, window.clearTimeout(I);
    };
  }, [l, Q, ue]);
  const Hd = async () => {
    const u = uu();
    if (!(!u || !t.current)) {
      sn("test");
      try {
        const v = await ze(t.current, "notify_studio/send_test", {
          target_id: u.id,
          payload: Zr()
        });
        ke(`Test notification sent to ${v.target}.`);
      } catch (v) {
        Te(v, "The test notification could not be sent.");
      } finally {
        sn(null);
      }
    }
  }, Bd = async () => {
    const u = uu();
    if (!(!u || !t.current)) {
      sn("yaml");
      try {
        const v = await ze(t.current, "notify_studio/generate_yaml", {
          target_id: u.id,
          payload: Zr(),
          action_handlers: xi()
        });
        nu(v.yaml), ke("YAML generated successfully.");
      } catch (v) {
        Te(v, "Unable to generate YAML.");
      } finally {
        sn(null);
      }
    }
  }, Vd = async () => {
    var v;
    if (!$n.trim()) {
      Te(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let u = !1;
    if (window.isSecureContext && ((v = navigator.clipboard) != null && v.writeText))
      try {
        await navigator.clipboard.writeText($n), u = !0;
      } catch {
      }
    if (!u) {
      const k = document.createElement("textarea");
      k.value = $n, k.setAttribute("readonly", ""), k.style.position = "fixed", k.style.opacity = "0", k.style.pointerEvents = "none", document.body.appendChild(k), k.focus(), k.select();
      try {
        u = document.execCommand("copy");
      } finally {
        document.body.removeChild(k);
      }
    }
    if (u) {
      ke("Generated YAML copied to the clipboard.");
      return;
    }
    Te(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, Wd = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Qd = (u) => {
    const v = u.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${v}?`)) return;
    const k = u.id ?? u.entity_id.replace(`${u.kind}.`, "");
    window.location.assign(`/config/${u.kind}/edit/${encodeURIComponent(String(k))}`);
  }, Yd = (u, v) => {
    _((k) => k.map((S) => S.entity_id === u ? { ...S, ...v } : S)), P((k) => (k == null ? void 0 : k.map((S) => {
      var I;
      return ((I = S.runtime) == null ? void 0 : I.entity_id) === u ? { ...S, runtime: { ...S.runtime, ...v } } : S;
    })) ?? null);
  }, Kd = async (u, v) => {
    if (t.current)
      try {
        const k = await ze(t.current, "notify_studio/toggle_automation", {
          entity_id: u.entity_id,
          enabled: v
        });
        Yd(k.entity_id, {
          state: k.state,
          enabled: v,
          status: v ? "enabled" : "disabled"
        }), ke(`${u.name} is now ${v ? "enabled" : "disabled"}.`);
      } catch (k) {
        Te(k, "Unable to update that automation.");
      }
  }, Gd = async (u) => {
    if (!t.current) return;
    const v = u.kind === "automation" ? "automation" : "script", k = `Run “${u.name}” now? This queues its configured ${v} actions and may control real devices.`;
    if (window.confirm(k))
      try {
        await ze(t.current, "notify_studio/run_runnable", {
          entity_id: u.entity_id
        }), ke(`${u.name} was queued for execution.`), window.setTimeout(() => {
          Wn();
        }, 900);
      } catch (S) {
        Te(S, `Unable to run ${u.name}.`);
      }
  }, un = (u, v) => {
    ln((k) => k.map((S, I) => I === u ? { ...S, ...v } : S));
  }, Xd = (u, v) => {
    ln((k) => k.map((S, I) => I !== u ? S : {
      ...S,
      route: v,
      id: v === "uri" ? "URI" : S.id === "URI" ? Vo(S.title, u + 1) : S.id
    }));
  }, Zd = () => {
    const u = (U == null ? void 0 : U.platform) === "android" ? 3 : 10;
    ln((v) => v.length >= u ? v : [...v, xa(v.length + 1)]);
  }, Jd = (u) => {
    ln((v) => v.filter((k, S) => S !== u));
  }, wi = C.useCallback((u) => {
    const v = u.payload, k = jl(v.data) ? v.data : {};
    At(Z(v.message)), nn(Z(v.title)), vt(Z(k.tag)), Us(Z(k.image)), $s(Z(k.clickAction) || Z(k.url)), As(Z(k.subject)), Hs(Z(k.channel)), Bs(Z(k.importance)), Vs(Z(k.priority)), Ws(Z(k.color)), Qs(Z(k.notification_icon)), Ys(k.timeout === void 0 ? "" : String(k.timeout)), Ks(ka(k.sticky)), Gs(ka(k.persistent)), Zs(Z(k.subtitle));
    const S = jl(k.push) ? k.push : {};
    Js(Z(S.sound)), qs(S.badge === void 0 ? "" : String(S.badge)), bs(Z(S["interruption-level"])), eu(Z(S["thread-id"]));
    const I = new Map(u.action_handlers.map((We) => [We.action, We])), Ve = (Array.isArray(k.actions) ? k.actions : []).filter(jl).map((We, Qn) => {
      const ki = Z(We.action) || Vo(`Action ${Qn + 1}`, Qn + 1), fe = I.get(ki);
      let Yn = "event";
      return ki === "URI" && Z(We.uri) ? Yn = "uri" : Z(We.behavior) === "textInput" ? Yn = "reply" : (fe == null ? void 0 : fe.type) === "script" ? Yn = "script" : (fe == null ? void 0 : fe.type) === "service" && (Yn = "service"), {
        id: ki,
        title: Z(We.title) || `Action ${Qn + 1}`,
        route: Yn,
        uri: Z(We.uri),
        scriptEntityId: Z(fe == null ? void 0 : fe.script_entity_id),
        service: Z(fe == null ? void 0 : fe.service),
        serviceData: fe != null && fe.service_data ? JSON.stringify(fe.service_data, null, 2) : ""
      };
    });
    if (ln(Ve), Xs(Ve.length > 0), nu(""), u.target_platform && (U == null ? void 0 : U.platform) !== u.target_platform) {
      const We = g.find((Qn) => Qn.platform === u.target_platform);
      We && M(We.id);
    }
  }, [U == null ? void 0 : U.platform, g]), qd = (u) => {
    if (V(u), !u) return;
    const v = d.find((k) => k.id === u);
    v && (wi(v.draft), ke(`Template “${v.name}” loaded into the composer.`));
  }, bd = () => {
    Vn(null), An(ue.trim() || "New notification template"), Hn(""), r("templates");
  }, ef = (u) => {
    Vn(u.id), An(u.name), Hn(u.description), wi(u.draft), r("templates"), ke(`Editing template “${u.name}”.`);
  }, tf = async () => {
    if (t.current) {
      sn("template");
      try {
        const u = await ze(t.current, "notify_studio/save_template", {
          template: {
            ...Bn ? { id: Bn } : {},
            name: ru,
            description: lu,
            draft: Ad()
          }
        });
        m((v) => v.findIndex((S) => S.id === u.id) === -1 ? [u, ...v] : v.map((S) => S.id === u.id ? u : S)), V(u.id), Vn(u.id), ke(`Template “${u.name}” saved.`);
      } catch (u) {
        Te(u, "Unable to save the template.");
      } finally {
        sn(null);
      }
    }
  }, nf = async (u) => {
    if (t.current && window.confirm(`Delete the “${u.name}” template? This cannot be undone.`))
      try {
        await ze(t.current, "notify_studio/delete_template", { template_id: u.id }), m((v) => v.filter((k) => k.id !== u.id)), O === u.id && V(""), Bn === u.id && (Vn(null), An(""), Hn("")), ke(`Template “${u.name}” deleted.`);
      } catch (v) {
        Te(v, "Unable to delete the template.");
      }
  }, rf = () => U ? U.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx($, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: Fr, onChange: (u) => As(u.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: Ur, onChange: (u) => Hs(u.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: $r, onChange: (u) => Bs(u.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx($, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: Ar, onChange: (u) => Vs(u.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx($, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: Hr, onChange: (u) => Ws(u.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: Br, onChange: (u) => Qs(u.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: Vr, onChange: (u) => Ys(u.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: mi, onChange: (u) => Ks(u.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Wr, onChange: (u) => {
        const v = u.target.checked;
        Gs(v), v && !Pe.trim() && vt(Um(ue, Q));
      } }),
      " Persistent notification"
    ] }),
    Wr && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : U.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx($, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: Qr, onChange: (u) => Zs(u.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: Yr, onChange: (u) => Js(u.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: Kr, onChange: (u) => qs(u.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx($, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: Gr, onChange: (u) => bs(u.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx($, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: Xr, onChange: (u) => eu(u.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, lf = () => {
    if (!U || !["android", "ios"].includes(U.platform)) return null;
    const u = U.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: rn, onChange: (v) => {
          const k = v.target.checked;
          Xs(k), k && !et.length && ln([xa(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      rn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ a.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-action-list", children: et.map((v, k) => /* @__PURE__ */ a.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              "Button ",
              k + 1
            ] }),
            et.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => Jd(k), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx($, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: v.title, onChange: (S) => un(k, { title: S.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: v.route, onChange: (S) => Xd(k, S.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            v.route !== "uri" && /* @__PURE__ */ a.jsx($, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: v.id, onChange: (S) => un(k, { id: S.target.value }), placeholder: "Unique event ID" }) }),
            v.route === "uri" && /* @__PURE__ */ a.jsx($, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: v.uri ?? "", onChange: (S) => un(k, { uri: S.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            v.route === "script" && /* @__PURE__ */ a.jsx($, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: v.scriptEntityId ?? "", onChange: (S) => un(k, { scriptEntityId: S.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              iu.map((S) => /* @__PURE__ */ a.jsxs("option", { value: S.entity_id, children: [
                S.name,
                " · ",
                S.entity_id
              ] }, S.entity_id))
            ] }) }),
            v.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx($, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: v.service ?? "", onChange: (S) => un(k, { service: S.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx($, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: v.serviceData ?? "", onChange: (S) => un(k, { serviceData: S.target.value }), placeholder: `{
  "entity_id": "light.hall"
}` }) })
            ] })
          ] }),
          v.route === "event" && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence." }),
          v.route === "reply" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "The generated handler receives the submitted text as ",
            /* @__PURE__ */ a.jsx("code", { children: "trigger.event.data.reply_text" }),
            "."
          ] }),
          v.route === "uri" && /* @__PURE__ */ a.jsxs("p", { className: "ns-help", children: [
            "Android requires the Companion action key ",
            /* @__PURE__ */ a.jsx("code", { children: "URI" }),
            ". URI buttons do not generate an event handler."
          ] }),
          v.route === "script" && !iu.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${v.id}:${k}`)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "ns-help", children: [
            et.length,
            " of ",
            u,
            " available ",
            u === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          et.length < u && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Zd, children: "Add button" })
        ] })
      ] })
    ] });
  }, of = (u) => u ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: Sa(u.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), sf = (u) => {
    var I;
    const v = `${u.source}:${u.id}`, k = (I = u.notify_devices) != null && I.length ? u.notify_devices : u.notifiers, S = u.runtime;
    return /* @__PURE__ */ a.jsxs("article", { className: "ns-card ns-audit-card", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: u.name }) }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__actions", children: /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${u.source === "script" ? "script" : "automation"}`, children: u.source }) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        of(S),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
          u.category && /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            u.category
          ] }),
          (u.labels ?? []).map((te) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            te
          ] }, `label:${te}`)),
          k.map((te) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            te
          ] }, `device:${te}`))
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (S == null ? void 0 : S.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${S.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Kd(S, !S.enabled), children: S.enabled ? "Enabled" : "Disabled" }),
        (S == null ? void 0 : S.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Gd(S), children: "Run test" }),
        S && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Qd(S), children: S.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, v);
  };
  return o ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: ya }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: ya }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: Fd }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Fm, alt: "Notify Studio" }),
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
      /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ${n === "templates" ? "is-active" : ""}`, onClick: () => r("templates"), children: "Templates" })
    ] }) }),
    n === "compose" && /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__grid", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notification composer" }),
          U && /* @__PURE__ */ a.jsx("span", { className: wa(U.platform), children: Xi(U.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: g.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx($, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: O, onChange: (u) => qd(u.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            d.map((u) => /* @__PURE__ */ a.jsx("option", { value: u.id, children: u.name }, u.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx($, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: E, onChange: (u) => M(u.target.value), children: g.map((u) => /* @__PURE__ */ a.jsxs("option", { value: u.id, children: [
            u.name,
            " · ",
            Xi(u.platform),
            u.model ? ` · ${u.model}` : ""
          ] }, u.id)) }) }),
          U == null ? void 0 : U.warnings.map((u) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: u }, u)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx($, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: ue, onChange: (u) => nn(u.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Pe, onChange: (u) => vt(u.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: gt, onChange: (u) => $s(u.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Dr, onChange: (u) => Us(u.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: Q, onChange: (u) => At(u.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          rf(),
          lf(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Hd(), disabled: Ht !== null, children: Ht === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: bd, disabled: Ht !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Bd(), disabled: Ht !== null, children: Ht === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx($, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: on.errors.title ? `Error: ${on.errors.title}` : on.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx($, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: on.errors.message ? `Error: ${on.errors.message}` : on.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              $n && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Vd(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: Wd, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: $n || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: Bn ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx($, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: ru, onChange: (u) => An(u.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx($, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: lu, onChange: (u) => Hn(u.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void tf(), disabled: Ht !== null, children: Ht === "template" ? "Saving…" : Bn ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              Vn(null), An(""), Hn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !d.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: d.map((u) => {
        var v, k;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: u.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: u.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            u.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: wa(u.draft.target_platform), children: Xi(u.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((v = u.draft.payload.data) == null ? void 0 : v.actions) ? `${(k = u.draft.payload.data) == null ? void 0 : k.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              V(u.id), wi(u.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => ef(u), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void nf(u), children: "Delete" })
          ] })
        ] }) }, u.id);
      }) })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
        /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
              /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, filter them by organisation, and run or enable matching automations." })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__actions", children: /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void yi(), disabled: T, children: T ? "Scanning…" : "Scan now" }) })
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
            /* @__PURE__ */ a.jsx($, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: R, onChange: (u) => X(u.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
              /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
            ] }) }),
            /* @__PURE__ */ a.jsx($, { label: "Category", children: /* @__PURE__ */ a.jsxs("select", { value: D, onChange: (u) => Ee(u.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
              vi.categories.map((u) => /* @__PURE__ */ a.jsx("option", { value: u, children: u }, u))
            ] }) }),
            /* @__PURE__ */ a.jsx($, { label: "Label", children: /* @__PURE__ */ a.jsxs("select", { value: qe, onChange: (u) => Ut(u.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
              vi.labels.map((u) => /* @__PURE__ */ a.jsx("option", { value: u, children: u }, u))
            ] }) }),
            /* @__PURE__ */ a.jsx($, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: $t, onChange: (u) => pi(u.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
              vi.devices.map((u) => /* @__PURE__ */ a.jsx("option", { value: u, children: u }, u))
            ] }) }),
            /* @__PURE__ */ a.jsx($, { label: "Group by", children: /* @__PURE__ */ a.jsxs("select", { value: be, onChange: (u) => Un(u.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "none", children: "None" }),
              /* @__PURE__ */ a.jsx("option", { value: "source", children: "Automation / Script" }),
              /* @__PURE__ */ a.jsx("option", { value: "category", children: "Category" }),
              /* @__PURE__ */ a.jsx("option", { value: "label", children: "Label" }),
              /* @__PURE__ */ a.jsx("option", { value: "device", children: "Notify device" })
            ] }) })
          ] }) })
        ] }),
        T && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
        !T && (x == null ? void 0 : x.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
        !T && x && gi.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
        !T && x && $d.map((u) => /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
          /* @__PURE__ */ a.jsx("h3", { children: u.title }),
          /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: u.items.map(sf) })
        ] }, u.title))
      ] }),
      /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-recent-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
        ] }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          B && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
          !B && !N.length && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
          !B && N.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-recent-list", children: N.map((u) => /* @__PURE__ */ a.jsxs("article", { className: "ns-recent-item", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-recent-item__head", children: [
              /* @__PURE__ */ a.jsx("strong", { children: u.name }),
              /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${u.kind}`, children: u.kind })
            ] }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Triggered ",
              Sa(u.last_triggered)
            ] })
          ] }, u.entity_id)) })
        ] })
      ] }) })
    ] })
  ] });
}
function $({ label: e, children: t, full: n = !1 }) {
  return /* @__PURE__ */ a.jsxs("label", { className: `ns-field ${n ? "ns-field--full" : ""}`, children: [
    /* @__PURE__ */ a.jsx("span", { children: e }),
    t
  ] });
}
class Hm extends HTMLElement {
  constructor() {
    super(...arguments);
    Si(this, "root");
    Si(this, "currentHass");
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
    this.root || (this.root = Od(this)), this.root.render(/* @__PURE__ */ a.jsx(Am, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Hm);
