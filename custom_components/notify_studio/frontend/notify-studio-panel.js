var Zf = Object.defineProperty;
var Jf = (e, t, n) => t in e ? Zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vo = (e, t, n) => Jf(e, typeof t != "symbol" ? t + "" : t, n);
var Zu = { exports: {} }, ho = {}, Ju = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = Symbol.for("react.element"), qf = Symbol.for("react.portal"), ep = Symbol.for("react.fragment"), tp = Symbol.for("react.strict_mode"), np = Symbol.for("react.profiler"), rp = Symbol.for("react.provider"), lp = Symbol.for("react.context"), op = Symbol.for("react.forward_ref"), ip = Symbol.for("react.suspense"), sp = Symbol.for("react.memo"), ap = Symbol.for("react.lazy"), Da = Symbol.iterator;
function up(e) {
  return e === null || typeof e != "object" ? null : (e = Da && e[Da] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ec = Object.assign, tc = {};
function Vn(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || qu;
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nc() {
}
nc.prototype = Vn.prototype;
function fs(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || qu;
}
var ps = fs.prototype = new nc();
ps.constructor = fs;
ec(ps, Vn.prototype);
ps.isPureReactComponent = !0;
var Fa = Array.isArray, rc = Object.prototype.hasOwnProperty, ms = { current: null }, lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) rc.call(t, r) && !lc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var c = Array(u), m = 0; m < u; m++) c[m] = arguments[m + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ur, type: e, key: o, ref: i, props: l, _owner: ms.current };
}
function cp(e, t) {
  return { $$typeof: Ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ur;
}
function dp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Aa = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? dp("" + e.key) : t.toString(36);
}
function Ll(e, t, n, r, l) {
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
        case Ur:
        case qf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Wo(i, 0) : r, Fa(l) ? (n = "", e != null && (n = e.replace(Aa, "$&/") + "/"), Ll(l, t, n, "", function(m) {
    return m;
  })) : l != null && (hs(l) && (l = cp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Aa, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Fa(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var c = r + Wo(o, u);
    i += Ll(o, t, n, c, l);
  }
  else if (c = up(e), typeof c == "function") for (e = c.call(e), u = 0; !(o = e.next()).done; ) o = o.value, c = r + Wo(o, u++), i += Ll(o, t, n, c, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ml(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ll(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function fp(e) {
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
var Ce = { current: null }, Rl = { transition: null }, pp = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Rl, ReactCurrentOwner: ms };
function ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: ml, forEach: function(e, t, n) {
  ml(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ml(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ml(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!hs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Vn;
F.Fragment = ep;
F.Profiler = np;
F.PureComponent = fs;
F.StrictMode = tp;
F.Suspense = ip;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
F.act = ic;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ec({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ms.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (c in t) rc.call(t, c) && !lc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var m = 0; m < c; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  return { $$typeof: Ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function(e) {
  return e = { $$typeof: lp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: rp, _context: e }, e.Consumer = e;
};
F.createElement = oc;
F.createFactory = function(e) {
  var t = oc.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: op, render: e };
};
F.isValidElement = hs;
F.lazy = function(e) {
  return { $$typeof: ap, _payload: { _status: -1, _result: e }, _init: fp };
};
F.memo = function(e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Rl.transition;
  Rl.transition = {};
  try {
    e();
  } finally {
    Rl.transition = t;
  }
};
F.unstable_act = ic;
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
Ju.exports = F;
var S = Ju.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = S, hp = Symbol.for("react.element"), gp = Symbol.for("react.fragment"), vp = Object.prototype.hasOwnProperty, yp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) vp.call(t, r) && !xp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: hp, type: e, key: o, ref: i, props: l, _owner: yp.current };
}
ho.Fragment = gp;
ho.jsx = sc;
ho.jsxs = sc;
Zu.exports = ho;
var a = Zu.exports, ac = { exports: {} }, Ae = {}, uc = { exports: {} }, cc = {};
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
  function t(z, O) {
    var $ = z.length;
    z.push(O);
    e: for (; 0 < $; ) {
      var W = $ - 1 >>> 1, se = z[W];
      if (0 < l(se, O)) z[W] = O, z[$] = se, $ = W;
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var O = z[0], $ = z.pop();
    if ($ !== O) {
      z[0] = $;
      e: for (var W = 0, se = z.length, wt = se >>> 1; W < wt; ) {
        var He = 2 * (W + 1) - 1, _t = z[He], Ie = He + 1, Wt = z[Ie];
        if (0 > l(_t, $)) Ie < se && 0 > l(Wt, _t) ? (z[W] = Wt, z[Ie] = $, W = Ie) : (z[W] = _t, z[He] = $, W = He);
        else if (Ie < se && 0 > l(Wt, $)) z[W] = Wt, z[Ie] = $, W = Ie;
        else break e;
      }
    }
    return O;
  }
  function l(z, O) {
    var $ = z.sortIndex - O.sortIndex;
    return $ !== 0 ? $ : z.id - O.id;
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
  var c = [], m = [], x = 1, w = null, v = 3, j = !1, C = !1, E = !1, V = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(z) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= z) r(m), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(m);
    }
  }
  function _(z) {
    if (E = !1, h(z), !C) if (n(c) !== null) C = !0, un(P);
    else {
      var O = n(m);
      O !== null && cn(_, O.startTime - z);
    }
  }
  function P(z, O) {
    C = !1, E && (E = !1, p(b), b = -1), j = !0;
    var $ = v;
    try {
      for (h(O), w = n(c); w !== null && (!(w.expirationTime > O) || z && !pe()); ) {
        var W = w.callback;
        if (typeof W == "function") {
          w.callback = null, v = w.priorityLevel;
          var se = W(w.expirationTime <= O);
          O = e.unstable_now(), typeof se == "function" ? w.callback = se : w === n(c) && r(c), h(O);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var wt = !0;
      else {
        var He = n(m);
        He !== null && cn(_, He.startTime - O), wt = !1;
      }
      return wt;
    } finally {
      w = null, v = $, j = !1;
    }
  }
  var L = !1, R = null, b = -1, Y = 5, I = -1;
  function pe() {
    return !(e.unstable_now() - I < Y);
  }
  function Vt() {
    if (R !== null) {
      var z = e.unstable_now();
      I = z;
      var O = !0;
      try {
        O = R(!0, z);
      } finally {
        O ? xt() : (L = !1, R = null);
      }
    } else L = !1;
  }
  var xt;
  if (typeof d == "function") xt = function() {
    d(Vt);
  };
  else if (typeof MessageChannel < "u") {
    var Qr = new MessageChannel(), Gn = Qr.port2;
    Qr.port1.onmessage = Vt, xt = function() {
      Gn.postMessage(null);
    };
  } else xt = function() {
    V(Vt, 0);
  };
  function un(z) {
    R = z, L || (L = !0, xt());
  }
  function cn(z, O) {
    b = V(function() {
      z(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    C || j || (C = !0, un(P));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(z) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = v;
    }
    var $ = v;
    v = O;
    try {
      return z();
    } finally {
      v = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, O) {
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
    var $ = v;
    v = z;
    try {
      return O();
    } finally {
      v = $;
    }
  }, e.unstable_scheduleCallback = function(z, O, $) {
    var W = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? W + $ : W) : $ = W, z) {
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
    return se = $ + se, z = { id: x++, callback: O, priorityLevel: z, startTime: $, expirationTime: se, sortIndex: -1 }, $ > W ? (z.sortIndex = $, t(m, z), n(c) === null && z === n(m) && (E ? (p(b), b = -1) : E = !0, cn(_, $ - W))) : (z.sortIndex = se, t(c, z), C || j || (C = !0, un(P))), z;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(z) {
    var O = v;
    return function() {
      var $ = v;
      v = O;
      try {
        return z.apply(this, arguments);
      } finally {
        v = $;
      }
    };
  };
})(cc);
uc.exports = cc;
var wp = uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p = S, Fe = wp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dc = /* @__PURE__ */ new Set(), Nr = {};
function sn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) dc.add(t[e]);
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = Object.prototype.hasOwnProperty, kp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ua = {}, Ha = {};
function Sp(e) {
  return xi.call(Ha, e) ? !0 : xi.call(Ua, e) ? !1 : kp.test(e) ? Ha[e] = !0 : (Ua[e] = !0, !1);
}
function Np(e, t, n, r) {
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
function jp(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
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
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gs = /[\-:]([a-z])/g;
function vs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    gs,
    vs
  );
  xe[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(gs, vs);
  xe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(gs, vs);
  xe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ys(e, t, n, r) {
  var l = xe.hasOwnProperty(t) ? xe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jp(t, n, l, r) && (n = null), r || l === null ? Sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hl = Symbol.for("react.element"), xn = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), xs = Symbol.for("react.strict_mode"), wi = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), pc = Symbol.for("react.context"), ws = Symbol.for("react.forward_ref"), _i = Symbol.for("react.suspense"), ki = Symbol.for("react.suspense_list"), _s = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), mc = Symbol.for("react.offscreen"), Ba = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object" ? null : (e = Ba && e[Ba] || e["@@iterator"], typeof e == "function" ? e : null);
}
var re = Object.assign, Qo;
function dr(e) {
  if (Qo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Qo = t && t[1] || "";
  }
  return `
` + Qo + e;
}
var Go = !1;
function Yo(e, t) {
  if (!e || Go) return "";
  Go = !0;
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
    Go = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Cp(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Yo(e.type, !1), e;
    case 11:
      return e = Yo(e.type.render, !1), e;
    case 1:
      return e = Yo(e.type, !0), e;
    default:
      return "";
  }
}
function Si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case xn:
      return "Portal";
    case wi:
      return "Profiler";
    case xs:
      return "StrictMode";
    case _i:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case pc:
      return (e.displayName || "Context") + ".Consumer";
    case fc:
      return (e._context.displayName || "Context") + ".Provider";
    case ws:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case _s:
      return t = e.displayName || null, t !== null ? t : Si(e.type) || "Memo";
    case jt:
      t = e._payload, e = e._init;
      try {
        return Si(e(t));
      } catch {
      }
  }
  return null;
}
function Ep(e) {
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
      return Si(t);
    case 8:
      return t === xs ? "StrictMode" : "Mode";
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
function Ft(e) {
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
function hc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pp(e) {
  var t = hc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function gl(e) {
  e._valueTracker || (e._valueTracker = Pp(e));
}
function gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ni(e, t) {
  var n = t.checked;
  return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Va(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && ys(e, "checked", t, !1);
}
function ji(e, t) {
  vc(e, t);
  var n = Ft(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, Ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Wa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ci(e, t, n) {
  (t !== "number" || Vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function yc(e, t) {
  var n = Ft(t.value), r = Ft(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ga(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vl, wc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vl = vl || document.createElement("div"), vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
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
}, zp = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
  zp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
  });
});
function _c(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
}
function kc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = _c(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Tp = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function zi(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ti(e, t) {
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
var Li = null;
function ks(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ri = null, Rn = null, bn = null;
function Ya(e) {
  if (e = Vr(e)) {
    if (typeof Ri != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = wo(t), Ri(e.stateNode, e.type, t));
  }
}
function Sc(e) {
  Rn ? bn ? bn.push(e) : bn = [e] : Rn = e;
}
function Nc() {
  if (Rn) {
    var e = Rn, t = bn;
    if (bn = Rn = null, Ya(e), t) for (e = 0; e < t.length; e++) Ya(t[e]);
  }
}
function jc(e, t) {
  return e(t);
}
function Cc() {
}
var Ko = !1;
function Ec(e, t, n) {
  if (Ko) return e(t, n);
  Ko = !0;
  try {
    return jc(e, t, n);
  } finally {
    Ko = !1, (Rn !== null || bn !== null) && (Cc(), Nc());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wo(n);
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
var bi = !1;
if (mt) try {
  var lr = {};
  Object.defineProperty(lr, "passive", { get: function() {
    bi = !0;
  } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
} catch {
  bi = !1;
}
function Lp(e, t, n, r, l, o, i, u, c) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (x) {
    this.onError(x);
  }
}
var gr = !1, Wl = null, Ql = !1, Mi = null, Rp = { onError: function(e) {
  gr = !0, Wl = e;
} };
function bp(e, t, n, r, l, o, i, u, c) {
  gr = !1, Wl = null, Lp.apply(Rp, arguments);
}
function Mp(e, t, n, r, l, o, i, u, c) {
  if (bp.apply(this, arguments), gr) {
    if (gr) {
      var m = Wl;
      gr = !1, Wl = null;
    } else throw Error(k(198));
    Ql || (Ql = !0, Mi = m);
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ka(e) {
  if (an(e) !== e) throw Error(k(188));
}
function Ip(e) {
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
        if (o === n) return Ka(l), e;
        if (o === r) return Ka(l), t;
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
function zc(e) {
  return e = Ip(e), e !== null ? Tc(e) : null;
}
function Tc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lc = Fe.unstable_scheduleCallback, Xa = Fe.unstable_cancelCallback, $p = Fe.unstable_shouldYield, Op = Fe.unstable_requestPaint, ue = Fe.unstable_now, Dp = Fe.unstable_getCurrentPriorityLevel, Ss = Fe.unstable_ImmediatePriority, Rc = Fe.unstable_UserBlockingPriority, Gl = Fe.unstable_NormalPriority, Fp = Fe.unstable_LowPriority, bc = Fe.unstable_IdlePriority, go = null, it = null;
function Ap(e) {
  if (it && typeof it.onCommitFiberRoot == "function") try {
    it.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var qe = Math.clz32 ? Math.clz32 : Bp, Up = Math.log, Hp = Math.LN2;
function Bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Up(e) / Hp | 0) | 0;
}
var yl = 64, xl = 4194304;
function pr(e) {
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
function Yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = pr(u) : (o &= i, o !== 0 && (r = pr(o)));
  } else i = n & ~l, i !== 0 ? r = pr(i) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Vp(e, t) {
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
function Wp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - qe(o), u = 1 << i, c = l[i];
    c === -1 ? (!(u & n) || u & r) && (l[i] = Vp(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ii(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = yl;
  return yl <<= 1, !(yl & 4194240) && (yl = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
}
function Qp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - qe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Ns(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $c, js, Oc, Dc, Fc, $i = !1, wl = [], Lt = null, Rt = null, bt = null, Er = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Et = [], Gp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pr.delete(t.pointerId);
  }
}
function or(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Vr(t), t !== null && js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Yp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Lt = or(Lt, e, t, n, r, l), !0;
    case "dragenter":
      return Rt = or(Rt, e, t, n, r, l), !0;
    case "mouseover":
      return bt = or(bt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Er.set(o, or(Er.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Pr.set(o, or(Pr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ac(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
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
function bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Li = r, n.target.dispatchEvent(r), Li = null;
    } else return t = Vr(n), t !== null && js(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ja(e, t, n) {
  bl(e) && n.delete(t);
}
function Kp() {
  $i = !1, Lt !== null && bl(Lt) && (Lt = null), Rt !== null && bl(Rt) && (Rt = null), bt !== null && bl(bt) && (bt = null), Er.forEach(Ja), Pr.forEach(Ja);
}
function ir(e, t) {
  e.blockedOn === t && (e.blockedOn = null, $i || ($i = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Kp)));
}
function zr(e) {
  function t(l) {
    return ir(l, e);
  }
  if (0 < wl.length) {
    ir(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Lt !== null && ir(Lt, e), Rt !== null && ir(Rt, e), bt !== null && ir(bt, e), Er.forEach(t), Pr.forEach(t), n = 0; n < Et.length; n++) r = Et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && (n = Et[0], n.blockedOn === null); ) Ac(n), n.blockedOn === null && Et.shift();
}
var Mn = yt.ReactCurrentBatchConfig, Kl = !0;
function Xp(e, t, n, r) {
  var l = B, o = Mn.transition;
  Mn.transition = null;
  try {
    B = 1, Cs(e, t, n, r);
  } finally {
    B = l, Mn.transition = o;
  }
}
function Zp(e, t, n, r) {
  var l = B, o = Mn.transition;
  Mn.transition = null;
  try {
    B = 4, Cs(e, t, n, r);
  } finally {
    B = l, Mn.transition = o;
  }
}
function Cs(e, t, n, r) {
  if (Kl) {
    var l = Oi(e, t, n, r);
    if (l === null) ii(e, t, r, Xl, n), Za(e, r);
    else if (Yp(l, e, t, n, r)) r.stopPropagation();
    else if (Za(e, r), t & 4 && -1 < Gp.indexOf(e)) {
      for (; l !== null; ) {
        var o = Vr(l);
        if (o !== null && $c(o), o = Oi(e, t, n, r), o === null && ii(e, t, r, Xl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ii(e, t, r, null, n);
  }
}
var Xl = null;
function Oi(e, t, n, r) {
  if (Xl = null, e = ks(r), e = Xt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xl = e, null;
}
function Uc(e) {
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
      switch (Dp()) {
        case Ss:
          return 1;
        case Rc:
          return 4;
        case Gl:
        case Fp:
          return 16;
        case bc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, Es = null, Ml = null;
function Hc() {
  if (Ml) return Ml;
  var e, t = Es, n = t.length, r, l = "value" in zt ? zt.value : zt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ml = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Il(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _l() {
  return !0;
}
function qa() {
  return !1;
}
function Ue(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _l : qa, this.isPropagationStopped = qa, this;
  }
  return re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _l);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _l);
  }, persist: function() {
  }, isPersistent: _l }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ps = Ue(Wn), Br = re({}, Wn, { view: 0, detail: 0 }), Jp = Ue(Br), Zo, Jo, sr, vo = re({}, Br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== sr && (sr && e.type === "mousemove" ? (Zo = e.screenX - sr.screenX, Jo = e.screenY - sr.screenY) : Jo = Zo = 0, sr = e), Zo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Jo;
} }), eu = Ue(vo), qp = re({}, vo, { dataTransfer: 0 }), em = Ue(qp), tm = re({}, Br, { relatedTarget: 0 }), qo = Ue(tm), nm = re({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rm = Ue(nm), lm = re({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), om = Ue(lm), im = re({}, Wn, { data: 0 }), tu = Ue(im), sm = {
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
}, am = {
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
}, um = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function cm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = um[e]) ? !!t[e] : !1;
}
function zs() {
  return cm;
}
var dm = re({}, Br, { key: function(e) {
  if (e.key) {
    var t = sm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? am[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zs, charCode: function(e) {
  return e.type === "keypress" ? Il(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), fm = Ue(dm), pm = re({}, vo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nu = Ue(pm), mm = re({}, Br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zs }), hm = Ue(mm), gm = re({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vm = Ue(gm), ym = re({}, vo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xm = Ue(ym), wm = [9, 13, 27, 32], Ts = mt && "CompositionEvent" in window, vr = null;
mt && "documentMode" in document && (vr = document.documentMode);
var _m = mt && "TextEvent" in window && !vr, Bc = mt && (!Ts || vr && 8 < vr && 11 >= vr), ru = " ", lu = !1;
function Vc(e, t) {
  switch (e) {
    case "keyup":
      return wm.indexOf(t.keyCode) !== -1;
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
function Wc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function km(e, t) {
  switch (e) {
    case "compositionend":
      return Wc(t);
    case "keypress":
      return t.which !== 32 ? null : (lu = !0, ru);
    case "textInput":
      return e = t.data, e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Sm(e, t) {
  if (_n) return e === "compositionend" || !Ts && Vc(e, t) ? (e = Hc(), Ml = Es = zt = null, _n = !1, e) : null;
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
      return Bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nm[e.type] : t === "textarea";
}
function Qc(e, t, n, r) {
  Sc(r), t = Zl(t, "onChange"), 0 < t.length && (n = new Ps("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var yr = null, Tr = null;
function jm(e) {
  rd(e, 0);
}
function yo(e) {
  var t = Nn(e);
  if (gc(t)) return e;
}
function Cm(e, t) {
  if (e === "change") return t;
}
var Gc = !1;
if (mt) {
  var ei;
  if (mt) {
    var ti = "oninput" in document;
    if (!ti) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"), ti = typeof iu.oninput == "function";
    }
    ei = ti;
  } else ei = !1;
  Gc = ei && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  yr && (yr.detachEvent("onpropertychange", Yc), Tr = yr = null);
}
function Yc(e) {
  if (e.propertyName === "value" && yo(Tr)) {
    var t = [];
    Qc(t, Tr, e, ks(e)), Ec(jm, t);
  }
}
function Em(e, t, n) {
  e === "focusin" ? (su(), yr = t, Tr = n, yr.attachEvent("onpropertychange", Yc)) : e === "focusout" && su();
}
function Pm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yo(Tr);
}
function zm(e, t) {
  if (e === "click") return yo(t);
}
function Tm(e, t) {
  if (e === "input" || e === "change") return yo(t);
}
function Lm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tt = typeof Object.is == "function" ? Object.is : Lm;
function Lr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xi.call(t, l) || !tt(e[l], t[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = au(e);
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
    n = au(n);
  }
}
function Kc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xc() {
  for (var e = window, t = Vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vl(e.document);
  }
  return t;
}
function Ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Rm(e) {
  var t = Xc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Kc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ls(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = uu(n, o);
        var i = uu(
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
var bm = mt && "documentMode" in document && 11 >= document.documentMode, kn = null, Di = null, xr = null, Fi = !1;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fi || kn == null || kn !== Vl(r) || (r = kn, "selectionStart" in r && Ls(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && Lr(xr, r) || (xr = r, r = Zl(Di, "onSelect"), 0 < r.length && (t = new Ps("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
}
function kl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Sn = { animationend: kl("Animation", "AnimationEnd"), animationiteration: kl("Animation", "AnimationIteration"), animationstart: kl("Animation", "AnimationStart"), transitionend: kl("Transition", "TransitionEnd") }, ni = {}, Zc = {};
mt && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
function xo(e) {
  if (ni[e]) return ni[e];
  if (!Sn[e]) return e;
  var t = Sn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return ni[e] = t[n];
  return e;
}
var Jc = xo("animationend"), qc = xo("animationiteration"), ed = xo("animationstart"), td = xo("transitionend"), nd = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ut(e, t) {
  nd.set(e, t), sn(t, [e]);
}
for (var ri = 0; ri < du.length; ri++) {
  var li = du[ri], Mm = li.toLowerCase(), Im = li[0].toUpperCase() + li.slice(1);
  Ut(Mm, "on" + Im);
}
Ut(Jc, "onAnimationEnd");
Ut(qc, "onAnimationIteration");
Ut(ed, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(td, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $m = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function fu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Mp(r, t, void 0, e), e.currentTarget = null;
}
function rd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], c = u.instance, m = u.currentTarget;
        if (u = u.listener, c !== o && l.isPropagationStopped()) break e;
        fu(l, u, m), o = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], c = u.instance, m = u.currentTarget, u = u.listener, c !== o && l.isPropagationStopped()) break e;
        fu(l, u, m), o = c;
      }
    }
  }
  if (Ql) throw e = Mi, Ql = !1, Mi = null, e;
}
function X(e, t) {
  var n = t[Vi];
  n === void 0 && (n = t[Vi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ld(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4), ld(n, e, r, t);
}
var Sl = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[Sl]) {
    e[Sl] = !0, dc.forEach(function(n) {
      n !== "selectionchange" && ($m.has(n) || oi(n, !1, e), oi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sl] || (t[Sl] = !0, oi("selectionchange", !1, t));
  }
}
function ld(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var l = Xp;
      break;
    case 4:
      l = Zp;
      break;
    default:
      l = Cs;
  }
  n = l.bind(null, t, n, e), l = void 0, !bi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ii(e, t, n, r, l) {
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
  Ec(function() {
    var m = o, x = ks(n), w = [];
    e: {
      var v = nd.get(e);
      if (v !== void 0) {
        var j = Ps, C = e;
        switch (e) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = fm;
            break;
          case "focusin":
            C = "focus", j = qo;
            break;
          case "focusout":
            C = "blur", j = qo;
            break;
          case "beforeblur":
          case "afterblur":
            j = qo;
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
            j = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = em;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = hm;
            break;
          case Jc:
          case qc:
          case ed:
            j = rm;
            break;
          case td:
            j = vm;
            break;
          case "scroll":
            j = Jp;
            break;
          case "wheel":
            j = xm;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = nu;
        }
        var E = (t & 4) !== 0, V = !E && e === "scroll", p = E ? v !== null ? v + "Capture" : null : v;
        E = [];
        for (var d = m, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (h.tag === 5 && _ !== null && (h = _, p !== null && (_ = Cr(d, p), _ != null && E.push(br(d, _, h)))), V) break;
          d = d.return;
        }
        0 < E.length && (v = new j(v, C, null, n, x), w.push({ event: v, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", v && n !== Li && (C = n.relatedTarget || n.fromElement) && (Xt(C) || C[ht])) break e;
        if ((j || v) && (v = x.window === x ? x : (v = x.ownerDocument) ? v.defaultView || v.parentWindow : window, j ? (C = n.relatedTarget || n.toElement, j = m, C = C ? Xt(C) : null, C !== null && (V = an(C), C !== V || C.tag !== 5 && C.tag !== 6) && (C = null)) : (j = null, C = m), j !== C)) {
          if (E = eu, _ = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (E = nu, _ = "onPointerLeave", p = "onPointerEnter", d = "pointer"), V = j == null ? v : Nn(j), h = C == null ? v : Nn(C), v = new E(_, d + "leave", j, n, x), v.target = V, v.relatedTarget = h, _ = null, Xt(x) === m && (E = new E(p, d + "enter", C, n, x), E.target = h, E.relatedTarget = V, _ = E), V = _, j && C) t: {
            for (E = j, p = C, d = 0, h = E; h; h = yn(h)) d++;
            for (h = 0, _ = p; _; _ = yn(_)) h++;
            for (; 0 < d - h; ) E = yn(E), d--;
            for (; 0 < h - d; ) p = yn(p), h--;
            for (; d--; ) {
              if (E === p || p !== null && E === p.alternate) break t;
              E = yn(E), p = yn(p);
            }
            E = null;
          }
          else E = null;
          j !== null && pu(w, v, j, E, !1), C !== null && V !== null && pu(w, V, C, E, !0);
        }
      }
      e: {
        if (v = m ? Nn(m) : window, j = v.nodeName && v.nodeName.toLowerCase(), j === "select" || j === "input" && v.type === "file") var P = Cm;
        else if (ou(v)) if (Gc) P = Tm;
        else {
          P = Pm;
          var L = Em;
        }
        else (j = v.nodeName) && j.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = zm);
        if (P && (P = P(e, m))) {
          Qc(w, P, n, x);
          break e;
        }
        L && L(e, v, m), e === "focusout" && (L = v._wrapperState) && L.controlled && v.type === "number" && Ci(v, "number", v.value);
      }
      switch (L = m ? Nn(m) : window, e) {
        case "focusin":
          (ou(L) || L.contentEditable === "true") && (kn = L, Di = m, xr = null);
          break;
        case "focusout":
          xr = Di = kn = null;
          break;
        case "mousedown":
          Fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fi = !1, cu(w, n, x);
          break;
        case "selectionchange":
          if (bm) break;
        case "keydown":
        case "keyup":
          cu(w, n, x);
      }
      var R;
      if (Ts) e: {
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
      else _n ? Vc(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Bc && n.locale !== "ko" && (_n || b !== "onCompositionStart" ? b === "onCompositionEnd" && _n && (R = Hc()) : (zt = x, Es = "value" in zt ? zt.value : zt.textContent, _n = !0)), L = Zl(m, b), 0 < L.length && (b = new tu(b, e, null, n, x), w.push({ event: b, listeners: L }), R ? b.data = R : (R = Wc(n), R !== null && (b.data = R)))), (R = _m ? km(e, n) : Sm(e, n)) && (m = Zl(m, "onBeforeInput"), 0 < m.length && (x = new tu("onBeforeInput", "beforeinput", null, n, x), w.push({ event: x, listeners: m }), x.data = R));
    }
    rd(w, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Cr(e, n), o != null && r.unshift(br(e, o, l)), o = Cr(e, t), o != null && r.push(br(e, o, l))), e = e.return;
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
function pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, c = u.alternate, m = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 && m !== null && (u = m, l ? (c = Cr(n, o), c != null && i.unshift(br(n, c, u))) : l || (c = Cr(n, o), c != null && i.push(br(n, c, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Om = /\r\n?/g, Dm = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Om, `
`).replace(Dm, "");
}
function Nl(e, t, n) {
  if (t = mu(t), mu(e) !== t && n) throw Error(k(425));
}
function Jl() {
}
var Ai = null, Ui = null;
function Hi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0, Fm = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, Am = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
  return hu.resolve(null).then(e).catch(Um);
} : Bi;
function Um(e) {
  setTimeout(function() {
    throw e;
  });
}
function si(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), zr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  zr(t);
}
function Mt(e) {
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
function gu(e) {
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
var Qn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Qn, Mr = "__reactProps$" + Qn, ht = "__reactContainer$" + Qn, Vi = "__reactEvents$" + Qn, Hm = "__reactListeners$" + Qn, Bm = "__reactHandles$" + Qn;
function Xt(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ht] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
        if (n = e[ot]) return n;
        e = gu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Vr(e) {
  return e = e[ot] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function wo(e) {
  return e[Mr] || null;
}
var Wi = [], jn = -1;
function Ht(e) {
  return { current: e };
}
function Z(e) {
  0 > jn || (e.current = Wi[jn], Wi[jn] = null, jn--);
}
function G(e, t) {
  jn++, Wi[jn] = e.current, e.current = t;
}
var At = {}, Se = Ht(At), Re = Ht(!1), tn = At;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return At;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function ql() {
  Z(Re), Z(Se);
}
function vu(e, t, n) {
  if (Se.current !== At) throw Error(k(168));
  G(Se, t), G(Re, n);
}
function od(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Ep(e) || "Unknown", l));
  return re({}, n, r);
}
function eo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, tn = Se.current, G(Se, e), G(Re, Re.current), !0;
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = od(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, Z(Re), Z(Se), G(Se, e)) : Z(Re), G(Re, n);
}
var ct = null, _o = !1, ai = !1;
function id(e) {
  ct === null ? ct = [e] : ct.push(e);
}
function Vm(e) {
  _o = !0, id(e);
}
function Bt() {
  if (!ai && ct !== null) {
    ai = !0;
    var e = 0, t = B;
    try {
      var n = ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ct = null, _o = !1;
    } catch (l) {
      throw ct !== null && (ct = ct.slice(e + 1)), Lc(Ss, Bt), l;
    } finally {
      B = t, ai = !1;
    }
  }
  return null;
}
var Cn = [], En = 0, to = null, no = 0, Be = [], Ve = 0, nn = null, dt = 1, ft = "";
function Yt(e, t) {
  Cn[En++] = no, Cn[En++] = to, to = e, no = t;
}
function sd(e, t, n) {
  Be[Ve++] = dt, Be[Ve++] = ft, Be[Ve++] = nn, nn = e;
  var r = dt;
  e = ft;
  var l = 32 - qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - qe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, dt = 1 << 32 - qe(t) + l | n << l | r, ft = o + e;
  } else dt = 1 << o | n << l | r, ft = e;
}
function Rs(e) {
  e.return !== null && (Yt(e, 1), sd(e, 1, 0));
}
function bs(e) {
  for (; e === to; ) to = Cn[--En], Cn[En] = null, no = Cn[--En], Cn[En] = null;
  for (; e === nn; ) nn = Be[--Ve], Be[Ve] = null, ft = Be[--Ve], Be[Ve] = null, dt = Be[--Ve], Be[Ve] = null;
}
var De = null, Oe = null, q = !1, Je = null;
function ad(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = Mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: dt, overflow: ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (q) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (Qi(e)) throw Error(k(418));
        t = Mt(n.nextSibling);
        var r = De;
        t && xu(e, t) ? ad(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, De = e);
      }
    } else {
      if (Qi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, q = !1, De = e;
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function jl(e) {
  if (e !== De) return !1;
  if (!q) return wu(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Qi(e)) throw ud(), Error(k(418));
    for (; t; ) ad(e, t), t = Mt(t.nextSibling);
  }
  if (wu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = De ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function ud() {
  for (var e = Oe; e; ) e = Mt(e.nextSibling);
}
function Fn() {
  Oe = De = null, q = !1;
}
function Ms(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var Wm = yt.ReactCurrentBatchConfig;
function ar(e, t, n) {
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
function Cl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function cd(e) {
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
    return p = Dt(p, d), p.index = 0, p.sibling = null, p;
  }
  function o(p, d, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < d ? (p.flags |= 2, d) : h) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, _) {
    return d === null || d.tag !== 6 ? (d = hi(h, p.mode, _), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function c(p, d, h, _) {
    var P = h.type;
    return P === wn ? x(p, d, h.props.children, _, h.key) : d !== null && (d.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && _u(P) === d.type) ? (_ = l(d, h.props), _.ref = ar(p, d, h), _.return = p, _) : (_ = Hl(h.type, h.key, h.props, null, p.mode, _), _.ref = ar(p, d, h), _.return = p, _);
  }
  function m(p, d, h, _) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = gi(h, p.mode, _), d.return = p, d) : (d = l(d, h.children || []), d.return = p, d);
  }
  function x(p, d, h, _, P) {
    return d === null || d.tag !== 7 ? (d = en(h, p.mode, _, P), d.return = p, d) : (d = l(d, h), d.return = p, d);
  }
  function w(p, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = hi("" + d, p.mode, h), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hl:
          return h = Hl(d.type, d.key, d.props, null, p.mode, h), h.ref = ar(p, null, d), h.return = p, h;
        case xn:
          return d = gi(d, p.mode, h), d.return = p, d;
        case jt:
          var _ = d._init;
          return w(p, _(d._payload), h);
      }
      if (fr(d) || rr(d)) return d = en(d, p.mode, h, null), d.return = p, d;
      Cl(p, d);
    }
    return null;
  }
  function v(p, d, h, _) {
    var P = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return P !== null ? null : u(p, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case hl:
          return h.key === P ? c(p, d, h, _) : null;
        case xn:
          return h.key === P ? m(p, d, h, _) : null;
        case jt:
          return P = h._init, v(
            p,
            d,
            P(h._payload),
            _
          );
      }
      if (fr(h) || rr(h)) return P !== null ? null : x(p, d, h, _, null);
      Cl(p, h);
    }
    return null;
  }
  function j(p, d, h, _, P) {
    if (typeof _ == "string" && _ !== "" || typeof _ == "number") return p = p.get(h) || null, u(d, p, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case hl:
          return p = p.get(_.key === null ? h : _.key) || null, c(d, p, _, P);
        case xn:
          return p = p.get(_.key === null ? h : _.key) || null, m(d, p, _, P);
        case jt:
          var L = _._init;
          return j(p, d, h, L(_._payload), P);
      }
      if (fr(_) || rr(_)) return p = p.get(h) || null, x(d, p, _, P, null);
      Cl(d, _);
    }
    return null;
  }
  function C(p, d, h, _) {
    for (var P = null, L = null, R = d, b = d = 0, Y = null; R !== null && b < h.length; b++) {
      R.index > b ? (Y = R, R = null) : Y = R.sibling;
      var I = v(p, R, h[b], _);
      if (I === null) {
        R === null && (R = Y);
        break;
      }
      e && R && I.alternate === null && t(p, R), d = o(I, d, b), L === null ? P = I : L.sibling = I, L = I, R = Y;
    }
    if (b === h.length) return n(p, R), q && Yt(p, b), P;
    if (R === null) {
      for (; b < h.length; b++) R = w(p, h[b], _), R !== null && (d = o(R, d, b), L === null ? P = R : L.sibling = R, L = R);
      return q && Yt(p, b), P;
    }
    for (R = r(p, R); b < h.length; b++) Y = j(R, p, b, h[b], _), Y !== null && (e && Y.alternate !== null && R.delete(Y.key === null ? b : Y.key), d = o(Y, d, b), L === null ? P = Y : L.sibling = Y, L = Y);
    return e && R.forEach(function(pe) {
      return t(p, pe);
    }), q && Yt(p, b), P;
  }
  function E(p, d, h, _) {
    var P = rr(h);
    if (typeof P != "function") throw Error(k(150));
    if (h = P.call(h), h == null) throw Error(k(151));
    for (var L = P = null, R = d, b = d = 0, Y = null, I = h.next(); R !== null && !I.done; b++, I = h.next()) {
      R.index > b ? (Y = R, R = null) : Y = R.sibling;
      var pe = v(p, R, I.value, _);
      if (pe === null) {
        R === null && (R = Y);
        break;
      }
      e && R && pe.alternate === null && t(p, R), d = o(pe, d, b), L === null ? P = pe : L.sibling = pe, L = pe, R = Y;
    }
    if (I.done) return n(
      p,
      R
    ), q && Yt(p, b), P;
    if (R === null) {
      for (; !I.done; b++, I = h.next()) I = w(p, I.value, _), I !== null && (d = o(I, d, b), L === null ? P = I : L.sibling = I, L = I);
      return q && Yt(p, b), P;
    }
    for (R = r(p, R); !I.done; b++, I = h.next()) I = j(R, p, b, I.value, _), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? b : I.key), d = o(I, d, b), L === null ? P = I : L.sibling = I, L = I);
    return e && R.forEach(function(Vt) {
      return t(p, Vt);
    }), q && Yt(p, b), P;
  }
  function V(p, d, h, _) {
    if (typeof h == "object" && h !== null && h.type === wn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case hl:
          e: {
            for (var P = h.key, L = d; L !== null; ) {
              if (L.key === P) {
                if (P = h.type, P === wn) {
                  if (L.tag === 7) {
                    n(p, L.sibling), d = l(L, h.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (L.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && _u(P) === L.type) {
                  n(p, L.sibling), d = l(L, h.props), d.ref = ar(p, L, h), d.return = p, p = d;
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === wn ? (d = en(h.props.children, p.mode, _, h.key), d.return = p, p = d) : (_ = Hl(h.type, h.key, h.props, null, p.mode, _), _.ref = ar(p, d, h), _.return = p, p = _);
          }
          return i(p);
        case xn:
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
            d = gi(h, p.mode, _), d.return = p, p = d;
          }
          return i(p);
        case jt:
          return L = h._init, V(p, d, L(h._payload), _);
      }
      if (fr(h)) return C(p, d, h, _);
      if (rr(h)) return E(p, d, h, _);
      Cl(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, h), d.return = p, p = d) : (n(p, d), d = hi(h, p.mode, _), d.return = p, p = d), i(p)) : n(p, d);
  }
  return V;
}
var An = cd(!0), dd = cd(!1), ro = Ht(null), lo = null, Pn = null, Is = null;
function $s() {
  Is = Pn = lo = null;
}
function Os(e) {
  var t = ro.current;
  Z(ro), e._currentValue = t;
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  lo = e, Is = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Is !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (lo === null) throw Error(k(308));
    Pn = e, lo.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var Zt = null;
function Ds(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function fd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ds(t)) : (n.next = l.next, l.next = n), t.interleaved = n, gt(e, r);
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Fs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function It(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, gt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ds(r)) : (t.next = l.next, l.next = t), r.interleaved = t, gt(e, n);
}
function $l(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ns(e, n);
  }
}
function ku(e, t) {
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
function oo(e, t, n, r) {
  var l = e.updateQueue;
  Ct = !1;
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
      var v = u.lane, j = u.eventTime;
      if ((r & v) === v) {
        x !== null && (x = x.next = {
          eventTime: j,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, E = u;
          switch (v = t, j = n, E.tag) {
            case 1:
              if (C = E.payload, typeof C == "function") {
                w = C.call(j, w, v);
                break e;
              }
              w = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = E.payload, v = typeof C == "function" ? C.call(j, w, v) : C, v == null) break e;
              w = re({}, w, v);
              break e;
            case 2:
              Ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
      } else j = { eventTime: j, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, x === null ? (m = x = j, c = w) : x = x.next = j, i |= v;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
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
function Su(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var Wr = {}, st = Ht(Wr), Ir = Ht(Wr), $r = Ht(Wr);
function Jt(e) {
  if (e === Wr) throw Error(k(174));
  return e;
}
function As(e, t) {
  switch (G($r, t), G(Ir, e), G(st, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pi(t, e);
  }
  Z(st), G(st, t);
}
function Un() {
  Z(st), Z(Ir), Z($r);
}
function md(e) {
  Jt($r.current);
  var t = Jt(st.current), n = Pi(t, e.type);
  t !== n && (G(Ir, e), G(st, n));
}
function Us(e) {
  Ir.current === e && (Z(st), Z(Ir));
}
var te = Ht(0);
function io(e) {
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
var ui = [];
function Hs() {
  for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var Ol = yt.ReactCurrentDispatcher, ci = yt.ReactCurrentBatchConfig, rn = 0, ne = null, de = null, he = null, so = !1, wr = !1, Or = 0, Qm = 0;
function we() {
  throw Error(k(321));
}
function Bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Vs(e, t, n, r, l, o) {
  if (rn = o, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ol.current = e === null || e.memoizedState === null ? Xm : Zm, e = n(r, l), wr) {
    o = 0;
    do {
      if (wr = !1, Or = 0, 25 <= o) throw Error(k(301));
      o += 1, he = de = null, t.updateQueue = null, Ol.current = Jm, e = n(r, l);
    } while (wr);
  }
  if (Ol.current = ao, t = de !== null && de.next !== null, rn = 0, he = de = ne = null, so = !1, t) throw Error(k(300));
  return e;
}
function Ws() {
  var e = Or !== 0;
  return Or = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? ne.memoizedState = he = e : he = he.next = e, he;
}
function Ye() {
  if (de === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? ne.memoizedState : he.next;
  if (t !== null) he = t, de = e;
  else {
    if (e === null) throw Error(k(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, he === null ? ne.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = Ye(), n = t.queue;
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
        c === null ? (u = c = w, i = r) : c = c.next = w, ne.lanes |= x, ln |= x;
      }
      m = m.next;
    } while (m !== null && m !== o);
    c === null ? i = r : c.next = u, tt(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, ne.lanes |= o, ln |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    tt(o, t.memoizedState) || (Le = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function hd() {
}
function gd(e, t) {
  var n = ne, r = Ye(), l = t(), o = !tt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Le = !0), r = r.queue, Qs(xd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fr(9, yd.bind(null, n, r, l, t), void 0, null), ge === null) throw Error(k(349));
    rn & 30 || vd(n, t, l);
  }
  return l;
}
function vd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function yd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wd(t) && _d(e);
}
function xd(e, t, n) {
  return n(function() {
    wd(t) && _d(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = gt(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Nu(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Km.bind(null, ne, e), [t.memoizedState, e];
}
function Fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kd() {
  return Ye().memoizedState;
}
function Dl(e, t, n, r) {
  var l = lt();
  ne.flags |= e, l.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ko(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (o = i.destroy, r !== null && Bs(r, i.deps)) {
      l.memoizedState = Fr(t, n, o, r);
      return;
    }
  }
  ne.flags |= e, l.memoizedState = Fr(1 | t, n, o, r);
}
function ju(e, t) {
  return Dl(8390656, 8, e, t);
}
function Qs(e, t) {
  return ko(2048, 8, e, t);
}
function Sd(e, t) {
  return ko(4, 2, e, t);
}
function Nd(e, t) {
  return ko(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Cd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ko(4, 4, jd.bind(null, t, e), n);
}
function Gs() {
}
function Ed(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zd(e, t, n) {
  return rn & 21 ? (tt(n, t) || (n = Mc(), ne.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function Gm(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, ci.transition = r;
  }
}
function Td() {
  return Ye().memoizedState;
}
function Ym(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ld(e)) Rd(t, n);
  else if (n = fd(e, t, n, r), n !== null) {
    var l = je();
    et(n, e, r, l), bd(n, t, r);
  }
}
function Km(e, t, n) {
  var r = Ot(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ld(e)) Rd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, tt(u, i)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ds(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = fd(e, t, l, r), n !== null && (l = je(), et(n, e, r, l), bd(n, t, r));
  }
}
function Ld(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function Rd(e, t) {
  wr = so = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ns(e, n);
  }
}
var ao = { readContext: Ge, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Xm = { readContext: Ge, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: ju, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Dl(
    4194308,
    4,
    jd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Dl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Dl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ym.bind(null, ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nu, useDebugValue: Gs, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = Nu(!1), t = e[0];
  return e = Gm.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ne, l = lt();
  if (q) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), ge === null) throw Error(k(349));
    rn & 30 || vd(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, ju(xd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Fr(9, yd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = ge.identifierPrefix;
  if (q) {
    var n = ft, r = dt;
    n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Qm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Zm = {
  readContext: Ge,
  useCallback: Ed,
  useContext: Ge,
  useEffect: Qs,
  useImperativeHandle: Cd,
  useInsertionEffect: Sd,
  useLayoutEffect: Nd,
  useMemo: Pd,
  useReducer: di,
  useRef: kd,
  useState: function() {
    return di(Dr);
  },
  useDebugValue: Gs,
  useDeferredValue: function(e) {
    var t = Ye();
    return zd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = di(Dr)[0], t = Ye().memoizedState;
    return [e, t];
  },
  useMutableSource: hd,
  useSyncExternalStore: gd,
  useId: Td,
  unstable_isNewReconciler: !1
}, Jm = { readContext: Ge, useCallback: Ed, useContext: Ge, useEffect: Qs, useImperativeHandle: Cd, useInsertionEffect: Sd, useLayoutEffect: Nd, useMemo: Pd, useReducer: fi, useRef: kd, useState: function() {
  return fi(Dr);
}, useDebugValue: Gs, useDeferredValue: function(e) {
  var t = Ye();
  return de === null ? t.memoizedState = e : zd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = fi(Dr)[0], t = Ye().memoizedState;
  return [e, t];
}, useMutableSource: hd, useSyncExternalStore: gd, useId: Td, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ki(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var So = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Ot(e), o = pt(r, l);
  o.payload = t, n != null && (o.callback = n), t = It(e, o, l), t !== null && (et(t, e, l, r), $l(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), l = Ot(e), o = pt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = It(e, o, l), t !== null && (et(t, e, l, r), $l(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = Ot(e), l = pt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = It(e, l, r), t !== null && (et(t, e, r, n), $l(t, e, r));
} };
function Cu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(l, o) : !0;
}
function Md(e, t, n) {
  var r = !1, l = At, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ge(o) : (l = be(t) ? tn : Se.current, r = t.contextTypes, o = (r = r != null) ? Dn(e, l) : At), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = So, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Eu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && So.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Fs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ge(o) : (o = be(t) ? tn : Se.current, l.context = Dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ki(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && So.enqueueReplaceState(l, l.state, null), oo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Cp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qm = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  n = pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    co || (co = !0, ss = r), Zi(e, t);
  }, n;
}
function $d(e, t, n) {
  n = pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Zi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Zi(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = ph.bind(null, e, t, n), t.then(e, e));
}
function zu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pt(-1, 1), t.tag = 2, It(n, t, 1))), n.lanes |= 1), e);
}
var eh = yt.ReactCurrentOwner, Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? dd(t, null, n, r) : An(t, e.child, n, r);
}
function Lu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return In(t, l), r = Vs(e, t, n, r, o, l), n = Ws(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, vt(e, t, l)) : (q && n && Rs(t), t.flags |= 1, Ne(e, t, r, l), t.child);
}
function Ru(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ta(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Od(e, t, o, r, l)) : (e = Hl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Lr, n(i, r) && e.ref === t.ref) return vt(e, t, l);
  }
  return t.flags |= 1, e = Dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Od(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lr(o, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, vt(e, t, l);
  }
  return Ji(e, t, n, r, l);
}
function Dd(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Tn, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Tn, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(Tn, $e), $e |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(Tn, $e), $e |= r;
  return Ne(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ji(e, t, n, r, l) {
  var o = be(n) ? tn : Se.current;
  return o = Dn(t, o), In(t, l), n = Vs(e, t, n, r, o, l), r = Ws(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, vt(e, t, l)) : (q && r && Rs(t), t.flags |= 1, Ne(e, t, n, l), t.child);
}
function bu(e, t, n, r, l) {
  if (be(n)) {
    var o = !0;
    eo(t);
  } else o = !1;
  if (In(t, l), t.stateNode === null) Fl(e, t), Md(t, n, r), Xi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var c = i.context, m = n.contextType;
    typeof m == "object" && m !== null ? m = Ge(m) : (m = be(n) ? tn : Se.current, m = Dn(t, m));
    var x = n.getDerivedStateFromProps, w = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== m) && Eu(t, i, r, m), Ct = !1;
    var v = t.memoizedState;
    i.state = v, oo(t, r, i, l), c = t.memoizedState, u !== r || v !== c || Re.current || Ct ? (typeof x == "function" && (Ki(t, n, x, r), c = t.memoizedState), (u = Ct || Cu(t, n, u, r, v, c, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, pd(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : Xe(t.type, u), i.props = m, w = t.pendingProps, v = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Ge(c) : (c = be(n) ? tn : Se.current, c = Dn(t, c));
    var j = n.getDerivedStateFromProps;
    (x = typeof j == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== w || v !== c) && Eu(t, i, r, c), Ct = !1, v = t.memoizedState, i.state = v, oo(t, r, i, l);
    var C = t.memoizedState;
    u !== w || v !== C || Re.current || Ct ? (typeof j == "function" && (Ki(t, n, j, r), C = t.memoizedState), (m = Ct || Cu(t, n, m, r, v, C, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, C, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), i.props = r, i.state = C, i.context = c, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return qi(e, t, n, r, o, l);
}
function qi(e, t, n, r, l, o) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && yu(t, n, !1), vt(e, t, o);
  r = t.stateNode, eh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = An(t, e.child, null, o), t.child = An(t, null, u, o)) : Ne(e, t, u, o), t.memoizedState = r.state, l && yu(t, n, !0), t.child;
}
function Ad(e) {
  var t = e.stateNode;
  t.pendingContext ? vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vu(e, t.context, !1), As(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return Fn(), Ms(l), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var es = { dehydrated: null, treeContext: null, retryLane: 0 };
function ts(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = te.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(te, l & 1), e === null)
    return Gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Co(i, r, 0, null), e = en(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ts(n), t.memoizedState = es, e) : Ys(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return th(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Dt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Dt(u, o) : (o = en(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ts(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = es, r;
  }
  return o = e.child, e = o.sibling, r = Dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ys(e, t) {
  return t = Co({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && Ms(r), An(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function th(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pi(Error(k(422))), El(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Co({ mode: "visible", children: r.children }, l, 0, null), o = en(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && An(t, e.child, null, i), t.child.memoizedState = ts(i), t.memoizedState = es, o);
  if (!(t.mode & 1)) return El(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(k(419)), r = pi(o, r, void 0), El(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Le || u) {
    if (r = ge, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, gt(e, l), et(r, e, l, -1));
    }
    return ea(), r = pi(Error(k(421))), El(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Oe = Mt(l.nextSibling), De = t, q = !0, Je = null, e !== null && (Be[Ve++] = dt, Be[Ve++] = ft, Be[Ve++] = nn, dt = e.id, ft = e.overflow, nn = t), t = Ys(t, r.children), t.flags |= 4096, t);
}
function Iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yi(e.return, t, n);
}
function mi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Hd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Ne(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (G(te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && io(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), mi(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && io(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      mi(t, !0, n, null, o);
      break;
    case "together":
      mi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function vt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function nh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ad(t), Fn();
      break;
    case 5:
      md(t);
      break;
    case 1:
      be(t.type) && eo(t);
      break;
    case 4:
      As(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(ro, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ud(e, t, n) : (G(te, te.current & 1), e = vt(e, t, n), e !== null ? e.sibling : null);
      G(te, te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Hd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(te, te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dd(e, t, n);
  }
  return vt(e, t, n);
}
var Bd, ns, Vd, Wd;
Bd = function(e, t) {
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
ns = function() {
};
Vd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Jt(st.current);
    var o = null;
    switch (n) {
      case "input":
        l = Ni(e, l), r = Ni(e, r), o = [];
        break;
      case "select":
        l = re({}, l, { value: void 0 }), r = re({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ei(e, l), r = Ei(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jl);
    }
    zi(n, r);
    var i;
    n = null;
    for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
      var u = l[m];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (Nr.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
    for (m in r) {
      var c = r[m];
      if (u = l != null ? l[m] : void 0, r.hasOwnProperty(m) && c !== u && (c != null || u != null)) if (m === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (o || (o = []), o.push(
        m,
        n
      )), n = c;
      else m === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (o = o || []).push(m, c)) : m === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(m, "" + c) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (Nr.hasOwnProperty(m) ? (c != null && m === "onScroll" && X("scroll", e), o || u === c || (o = [])) : (o = o || []).push(m, c));
    }
    n && (o = o || []).push("style", n);
    var m = o;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Wd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
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
function rh(e, t, n) {
  var r = t.pendingProps;
  switch (bs(t), t.tag) {
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
      return be(t.type) && ql(), _e(t), null;
    case 3:
      return r = t.stateNode, Un(), Z(Re), Z(Se), Hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (jl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (cs(Je), Je = null))), ns(e, t), _e(t), null;
    case 5:
      Us(t);
      var l = Jt($r.current);
      if (n = t.type, e !== null && t.stateNode != null) Vd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return _e(t), null;
        }
        if (e = Jt(st.current), jl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ot] = t, r[Mr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < mr.length; l++) X(mr[l], r);
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
              Va(r, o), X("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, X("invalid", r);
              break;
            case "textarea":
              Qa(r, o), X("invalid", r);
          }
          zi(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Nl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Nl(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Nr.hasOwnProperty(i) && u != null && i === "onScroll" && X("scroll", r);
          }
          switch (n) {
            case "input":
              gl(r), Wa(r, o, !0);
              break;
            case "textarea":
              gl(r), Ga(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ot] = t, e[Mr] = r, Bd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ti(n, r), n) {
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
                for (l = 0; l < mr.length; l++) X(mr[l], e);
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
                Va(e, r), l = Ni(e, r), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = re({}, r, { value: void 0 }), X("invalid", e);
                break;
              case "textarea":
                Qa(e, r), l = Ei(e, r), X("invalid", e);
                break;
              default:
                l = r;
            }
            zi(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var c = u[o];
              o === "style" ? kc(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && wc(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && jr(e, c) : typeof c == "number" && jr(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Nr.hasOwnProperty(o) ? c != null && o === "onScroll" && X("scroll", e) : c != null && ys(e, o, c, i));
            }
            switch (n) {
              case "input":
                gl(e), Wa(e, r, !1);
                break;
              case "textarea":
                gl(e), Ga(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Ln(e, !!r.multiple, o, !1) : r.defaultValue != null && Ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jl);
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
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Jt($r.current), Jt(st.current), jl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Nl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Nl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return _e(t), null;
    case 13:
      if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Oe !== null && t.mode & 1 && !(t.flags & 128)) ud(), Fn(), t.flags |= 98560, o = !1;
        else if (o = jl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
            o[ot] = t;
          } else Fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _e(t), o = !1;
        } else Je !== null && (cs(Je), Je = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? fe === 0 && (fe = 3) : ea())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
    case 4:
      return Un(), ns(e, t), e === null && Rr(t.stateNode.containerInfo), _e(t), null;
    case 10:
      return Os(t.type._context), _e(t), null;
    case 17:
      return be(t.type) && ql(), _e(t), null;
    case 19:
      if (Z(te), o = t.memoizedState, o === null) return _e(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) ur(o, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = io(e), i !== null) {
            for (t.flags |= 128, ur(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(te, te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ue() > Bn && (t.flags |= 128, r = !0, ur(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = io(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ur(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !q) return _e(t), null;
        } else 2 * ue() - o.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, ur(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = te.current, G(te, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
    case 22:
    case 23:
      return qs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function lh(e, t) {
  switch (bs(t), t.tag) {
    case 1:
      return be(t.type) && ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), Z(Re), Z(Se), Hs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Us(t), null;
    case 13:
      if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        Fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(te), null;
    case 4:
      return Un(), null;
    case 10:
      return Os(t.type._context), null;
    case 22:
    case 23:
      return qs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pl = !1, ke = !1, oh = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function rs(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var $u = !1;
function ih(e, t) {
  if (Ai = Kl, e = Xc(), Ls(e)) {
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
        var i = 0, u = -1, c = -1, m = 0, x = 0, w = e, v = null;
        t: for (; ; ) {
          for (var j; w !== n || l !== 0 && w.nodeType !== 3 || (u = i + l), w !== o || r !== 0 && w.nodeType !== 3 || (c = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (j = w.firstChild) !== null; )
            v = w, w = j;
          for (; ; ) {
            if (w === e) break t;
            if (v === n && ++m === l && (u = i), v === o && ++x === r && (c = i), (j = w.nextSibling) !== null) break;
            w = v, v = w.parentNode;
          }
          w = j;
        }
        n = u === -1 || c === -1 ? null : { start: u, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, Kl = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
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
            var E = C.memoizedProps, V = C.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Xe(t.type, E), V);
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
      ie(t, t.return, _);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return C = $u, $u = !1, C;
}
function _r(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && rs(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function No(e, t) {
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
function ls(e) {
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
function Qd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[Mr], delete t[Vi], delete t[Hm], delete t[Bm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jl));
  else if (r !== 4 && (e = e.child, e !== null)) for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), e = e.sibling;
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), e = e.sibling;
}
var ve = null, Ze = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Yd(e, t, n), n = n.sibling;
}
function Yd(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function") try {
    it.onCommitFiberUnmount(go, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || zn(n, t);
    case 6:
      var r = ve, l = Ze;
      ve = null, Nt(e, t, n), ve = r, Ze = l, ve !== null && (Ze ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (Ze ? (e = ve, n = n.stateNode, e.nodeType === 8 ? si(e.parentNode, n) : e.nodeType === 1 && si(e, n), zr(e)) : si(ve, n.stateNode));
      break;
    case 4:
      r = ve, l = Ze, ve = n.stateNode.containerInfo, Ze = !0, Nt(e, t, n), ve = r, Ze = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && rs(n, t, i), l = l.next;
        } while (l !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (!ke && (zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ie(n, t, u);
      }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Nt(e, t, n), ke = r) : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new oh()), t.forEach(function(r) {
      var l = hh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
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
      if (ve === null) throw Error(k(160));
      Yd(o, i, l), ve = null, Ze = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (m) {
      ie(l, t, m);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kd(t, e), t = t.sibling;
}
function Kd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), rt(e), r & 4) {
        try {
          _r(3, e, e.return), No(3, e);
        } catch (E) {
          ie(e, e.return, E);
        }
        try {
          _r(5, e, e.return);
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 1:
      Ke(t, e), rt(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), rt(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jr(l, "");
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          u === "input" && o.type === "radio" && o.name != null && vc(l, o), Ti(u, i);
          var m = Ti(u, o);
          for (i = 0; i < c.length; i += 2) {
            var x = c[i], w = c[i + 1];
            x === "style" ? kc(l, w) : x === "dangerouslySetInnerHTML" ? wc(l, w) : x === "children" ? jr(l, w) : ys(l, x, w, m);
          }
          switch (u) {
            case "input":
              ji(l, o);
              break;
            case "textarea":
              yc(l, o);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var j = o.value;
              j != null ? Ln(l, !!o.multiple, j, !1) : v !== !!o.multiple && (o.defaultValue != null ? Ln(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Ln(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Mr] = o;
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Ke(t, e), rt(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (E) {
          ie(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Ke(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        zr(t.containerInfo);
      } catch (E) {
        ie(e, e.return, E);
      }
      break;
    case 4:
      Ke(t, e), rt(e);
      break;
    case 13:
      Ke(t, e), rt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Zs = ue())), r & 4 && Du(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (m = ke) || x, Ke(t, e), ke = m) : Ke(t, e), rt(e), r & 8192) {
        if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !x && e.mode & 1) for (T = e, x = e.child; x !== null; ) {
          for (w = T = x; T !== null; ) {
            switch (v = T, j = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                _r(4, v, v.return);
                break;
              case 1:
                zn(v, v.return);
                var C = v.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (E) {
                    ie(r, n, E);
                  }
                }
                break;
              case 5:
                zn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Au(w);
                  continue;
                }
            }
            j !== null ? (j.return = v, T = j) : Au(w);
          }
          x = x.sibling;
        }
        e: for (x = null, w = e; ; ) {
          if (w.tag === 5) {
            if (x === null) {
              x = w;
              try {
                l = w.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = _c("display", i));
              } catch (E) {
                ie(e, e.return, E);
              }
            }
          } else if (w.tag === 6) {
            if (x === null) try {
              w.stateNode.nodeValue = m ? "" : w.memoizedProps;
            } catch (E) {
              ie(e, e.return, E);
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
      Ke(t, e), rt(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gd(n)) {
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
          r.flags & 32 && (jr(l, ""), r.flags &= -33);
          var o = Ou(e);
          is(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ou(e);
          os(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (c) {
      ie(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sh(e, t, n) {
  T = e, Xd(e);
}
function Xd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pl;
      if (!i) {
        var u = l.alternate, c = u !== null && u.memoizedState !== null || ke;
        u = Pl;
        var m = ke;
        if (Pl = i, (ke = c) && !m) for (T = l; T !== null; ) i = T, c = i.child, i.tag === 22 && i.memoizedState !== null ? Uu(l) : c !== null ? (c.return = i, T = c) : Uu(l);
        for (; o !== null; ) T = o, Xd(o), o = o.sibling;
        T = l, Pl = u, ke = m;
      }
      Fu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : Fu(e);
  }
}
function Fu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || No(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Su(t, o, r);
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
              Su(t, i, n);
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
                  w !== null && zr(w);
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
        ke || t.flags & 512 && ls(t);
      } catch (v) {
        ie(t, t.return, v);
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
function Uu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            No(4, t);
          } catch (c) {
            ie(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ie(t, l, c);
            }
          }
          var o = t.return;
          try {
            ls(t);
          } catch (c) {
            ie(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ls(t);
          } catch (c) {
            ie(t, i, c);
          }
      }
    } catch (c) {
      ie(t, t.return, c);
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
var ah = Math.ceil, uo = yt.ReactCurrentDispatcher, Ks = yt.ReactCurrentOwner, Qe = yt.ReactCurrentBatchConfig, H = 0, ge = null, ce = null, ye = 0, $e = 0, Tn = Ht(0), fe = 0, Ar = null, ln = 0, jo = 0, Xs = 0, kr = null, Te = null, Zs = 0, Bn = 1 / 0, ut = null, co = !1, ss = null, $t = null, zl = !1, Tt = null, fo = 0, Sr = 0, as = null, Al = -1, Ul = 0;
function je() {
  return H & 6 ? ue() : Al !== -1 ? Al : Al = ue();
}
function Ot(e) {
  return e.mode & 1 ? H & 2 && ye !== 0 ? ye & -ye : Wm.transition !== null ? (Ul === 0 && (Ul = Mc()), Ul) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function et(e, t, n, r) {
  if (50 < Sr) throw Sr = 0, as = null, Error(k(185));
  Hr(e, n, r), (!(H & 2) || e !== ge) && (e === ge && (!(H & 2) && (jo |= n), fe === 4 && Pt(e, ye)), Me(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Bn = ue() + 500, _o && Bt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Wp(e, t);
  var r = Yl(e, e === ge ? ye : 0);
  if (r === 0) n !== null && Xa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xa(n), t === 1) e.tag === 0 ? Vm(Hu.bind(null, e)) : id(Hu.bind(null, e)), Am(function() {
      !(H & 6) && Bt();
    }), n = null;
    else {
      switch (Ic(r)) {
        case 1:
          n = Ss;
          break;
        case 4:
          n = Rc;
          break;
        case 16:
          n = Gl;
          break;
        case 536870912:
          n = bc;
          break;
        default:
          n = Gl;
      }
      n = lf(n, Zd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zd(e, t) {
  if (Al = -1, Ul = 0, H & 6) throw Error(k(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = Yl(e, e === ge ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = po(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = qd();
    (ge !== e || ye !== t) && (ut = null, Bn = ue() + 500, qt(e, t));
    do
      try {
        dh();
        break;
      } catch (u) {
        Jd(e, u);
      }
    while (!0);
    $s(), uo.current = o, H = l, ce !== null ? t = 0 : (ge = null, ye = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ii(e), l !== 0 && (r = l, t = us(e, l))), t === 1) throw n = Ar, qt(e, 0), Pt(e, r), Me(e, ue()), n;
    if (t === 6) Pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !uh(l) && (t = po(e, r), t === 2 && (o = Ii(e), o !== 0 && (r = o, t = us(e, o))), t === 1)) throw n = Ar, qt(e, 0), Pt(e, r), Me(e, ue()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Kt(e, Te, ut);
          break;
        case 3:
          if (Pt(e, r), (r & 130023424) === r && (t = Zs + 500 - ue(), 10 < t)) {
            if (Yl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Bi(Kt.bind(null, e, Te, ut), t);
            break;
          }
          Kt(e, Te, ut);
          break;
        case 4:
          if (Pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - qe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ah(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bi(Kt.bind(null, e, Te, ut), r);
            break;
          }
          Kt(e, Te, ut);
          break;
        case 5:
          Kt(e, Te, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Me(e, ue()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function us(e, t) {
  var n = kr;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), e = po(e, t), e !== 2 && (t = Te, Te = n, t !== null && cs(t)), e;
}
function cs(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function uh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!tt(o(), l)) return !1;
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
  for (t &= ~Xs, t &= ~jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Hu(e) {
  if (H & 6) throw Error(k(327));
  $n();
  var t = Yl(e, 0);
  if (!(t & 1)) return Me(e, ue()), null;
  var n = po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ii(e);
    r !== 0 && (t = r, n = us(e, r));
  }
  if (n === 1) throw n = Ar, qt(e, 0), Pt(e, t), Me(e, ue()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kt(e, Te, ut), Me(e, ue()), null;
}
function Js(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (Bn = ue() + 500, _o && Bt());
  }
}
function on(e) {
  Tt !== null && Tt.tag === 0 && !(H & 6) && $n();
  var t = H;
  H |= 1;
  var n = Qe.transition, r = B;
  try {
    if (Qe.transition = null, B = 1, e) return e();
  } finally {
    B = r, Qe.transition = n, H = t, !(H & 6) && Bt();
  }
}
function qs() {
  $e = Tn.current, Z(Tn);
}
function qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fm(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (bs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ql();
        break;
      case 3:
        Un(), Z(Re), Z(Se), Hs();
        break;
      case 5:
        Us(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        Z(te);
        break;
      case 19:
        Z(te);
        break;
      case 10:
        Os(r.type._context);
        break;
      case 22:
      case 23:
        qs();
    }
    n = n.return;
  }
  if (ge = e, ce = e = Dt(e.current, null), ye = $e = t, fe = 0, Ar = null, Xs = jo = ln = 0, Te = kr = null, Zt !== null) {
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
function Jd(e, t) {
  do {
    var n = ce;
    try {
      if ($s(), Ol.current = ao, so) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        so = !1;
      }
      if (rn = 0, he = de = ne = null, wr = !1, Or = 0, Ks.current = null, n === null || n.return === null) {
        fe = 1, Ar = t, ce = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, c = t;
        if (t = ye, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var m = c, x = u, w = x.tag;
          if (!(x.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var v = x.alternate;
            v ? (x.updateQueue = v.updateQueue, x.memoizedState = v.memoizedState, x.lanes = v.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var j = zu(i);
          if (j !== null) {
            j.flags &= -257, Tu(j, i, u, o, t), j.mode & 1 && Pu(o, m, t), t = j, c = m;
            var C = t.updateQueue;
            if (C === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(c), t.updateQueue = E;
            } else C.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Pu(o, m, t), ea();
              break e;
            }
            c = Error(k(426));
          }
        } else if (q && u.mode & 1) {
          var V = zu(i);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), Tu(V, i, u, o, t), Ms(Hn(c, u));
            break e;
          }
        }
        o = c = Hn(c, u), fe !== 4 && (fe = 2), kr === null ? kr = [o] : kr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Id(o, c, t);
              ku(o, p);
              break e;
            case 1:
              u = c;
              var d = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && ($t === null || !$t.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var _ = $d(o, u, t);
                ku(o, _);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tf(n);
    } catch (P) {
      t = P, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qd() {
  var e = uo.current;
  return uo.current = ao, e === null ? ao : e;
}
function ea() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ge === null || !(ln & 268435455) && !(jo & 268435455) || Pt(ge, ye);
}
function po(e, t) {
  var n = H;
  H |= 2;
  var r = qd();
  (ge !== e || ye !== t) && (ut = null, qt(e, t));
  do
    try {
      ch();
      break;
    } catch (l) {
      Jd(e, l);
    }
  while (!0);
  if ($s(), H = n, uo.current = r, ce !== null) throw Error(k(261));
  return ge = null, ye = 0, fe;
}
function ch() {
  for (; ce !== null; ) ef(ce);
}
function dh() {
  for (; ce !== null && !$p(); ) ef(ce);
}
function ef(e) {
  var t = rf(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? tf(e) : ce = t, Ks.current = null;
}
function tf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lh(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = rh(n, t, $e), n !== null) {
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
  var r = B, l = Qe.transition;
  try {
    Qe.transition = null, B = 1, fh(e, t, n, r);
  } finally {
    Qe.transition = l, B = r;
  }
  return null;
}
function fh(e, t, n, r) {
  do
    $n();
  while (Tt !== null);
  if (H & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Qp(e, o), e === ge && (ce = ge = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zl || (zl = !0, lf(Gl, function() {
    return $n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Qe.transition, Qe.transition = null;
    var i = B;
    B = 1;
    var u = H;
    H |= 4, Ks.current = null, ih(e, n), Kd(n, e), Rm(Ui), Kl = !!Ai, Ui = Ai = null, e.current = n, sh(n), Op(), H = u, B = i, Qe.transition = o;
  } else e.current = n;
  if (zl && (zl = !1, Tt = e, fo = l), o = e.pendingLanes, o === 0 && ($t = null), Ap(n.stateNode), Me(e, ue()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (co) throw co = !1, e = ss, ss = null, e;
  return fo & 1 && e.tag !== 0 && $n(), o = e.pendingLanes, o & 1 ? e === as ? Sr++ : (Sr = 0, as = e) : Sr = 0, Bt(), null;
}
function $n() {
  if (Tt !== null) {
    var e = Ic(fo), t = Qe.transition, n = B;
    try {
      if (Qe.transition = null, B = 16 > e ? 16 : e, Tt === null) var r = !1;
      else {
        if (e = Tt, Tt = null, fo = 0, H & 6) throw Error(k(331));
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
                      _r(8, x, o);
                  }
                  var w = x.child;
                  if (w !== null) w.return = x, T = w;
                  else for (; T !== null; ) {
                    x = T;
                    var v = x.sibling, j = x.return;
                    if (Qd(x), x === m) {
                      T = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = j, T = v;
                      break;
                    }
                    T = j;
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
                _r(9, o, o.return);
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
                  No(9, u);
              }
            } catch (P) {
              ie(u, u.return, P);
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
        if (H = l, Bt(), it && typeof it.onPostCommitFiberRoot == "function") try {
          it.onPostCommitFiberRoot(go, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      B = n, Qe.transition = t;
    }
  }
  return !1;
}
function Bu(e, t, n) {
  t = Hn(n, t), t = Id(e, t, 1), e = It(e, t, 1), t = je(), e !== null && (Hr(e, 1, t), Me(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Bu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Bu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
        e = Hn(n, e), e = $d(t, e, 1), t = It(t, e, 1), e = je(), t !== null && (Hr(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ph(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > ue() - Zs ? qt(e, 0) : Xs |= n), Me(e, t);
}
function nf(e, t) {
  t === 0 && (e.mode & 1 ? (t = xl, xl <<= 1, !(xl & 130023424) && (xl = 4194304)) : t = 1);
  var n = je();
  e = gt(e, t), e !== null && (Hr(e, t, n), Me(e, n));
}
function mh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), nf(e, n);
}
function hh(e, t) {
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
  r !== null && r.delete(t), nf(e, n);
}
var rf;
rf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, nh(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, q && t.flags & 1048576 && sd(t, no, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var l = Dn(t, Se.current);
      In(t, n), l = Vs(null, t, r, e, l, n);
      var o = Ws();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (o = !0, eo(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fs(t), l.updater = So, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = qi(null, t, r, !0, o, n)) : (t.tag = 0, q && o && Rs(t), Ne(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vh(r), e = Xe(r, e), l) {
          case 0:
            t = Ji(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Lu(null, t, r, e, n);
            break e;
          case 14:
            t = Ru(null, t, r, Xe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Ji(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), bu(e, t, r, l, n);
    case 3:
      e: {
        if (Ad(t), e === null) throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, pd(e, t), oo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Hn(Error(k(423)), t), t = Mu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Hn(Error(k(424)), t), t = Mu(e, t, r, n, l);
          break e;
        } else for (Oe = Mt(t.stateNode.containerInfo.firstChild), De = t, q = !0, Je = null, n = dd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Fn(), r === l) {
            t = vt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return md(t), e === null && Gi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Hi(r, l) ? i = null : o !== null && Hi(r, o) && (t.flags |= 32), Fd(e, t), Ne(e, t, i, n), t.child;
    case 6:
      return e === null && Gi(t), null;
    case 13:
      return Ud(e, t, n);
    case 4:
      return As(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Lu(e, t, r, l, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, G(ro, r._currentValue), r._currentValue = i, o !== null) if (tt(o.value, i)) {
          if (o.children === l.children && !Re.current) {
            t = vt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var c = u.firstContext; c !== null; ) {
              if (c.context === r) {
                if (o.tag === 1) {
                  c = pt(-1, n & -n), c.tag = 2;
                  var m = o.updateQueue;
                  if (m !== null) {
                    m = m.shared;
                    var x = m.pending;
                    x === null ? c.next = c : (c.next = x.next, x.next = c), m.pending = c;
                  }
                }
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Yi(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Yi(i, n, t), i = o.sibling;
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
      return l = t.type, r = t.pendingProps.children, In(t, n), l = Ge(l), r = r(l), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Xe(r, t.pendingProps), l = Xe(r.type, l), Ru(e, t, r, l, n);
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Fl(e, t), t.tag = 1, be(r) ? (e = !0, eo(t)) : e = !1, In(t, n), Md(t, r, l), Xi(t, r, l, n), qi(null, t, r, !0, e, n);
    case 19:
      return Hd(e, t, n);
    case 22:
      return Dd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function lf(e, t) {
  return Lc(e, t);
}
function gh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new gh(e, t, n, r);
}
function ta(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vh(e) {
  if (typeof e == "function") return ta(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ws) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") ta(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case wn:
      return en(n.children, l, o, t);
    case xs:
      i = 8, l |= 8;
      break;
    case wi:
      return e = We(12, n, t, l | 2), e.elementType = wi, e.lanes = o, e;
    case _i:
      return e = We(13, n, t, l), e.elementType = _i, e.lanes = o, e;
    case ki:
      return e = We(19, n, t, l), e.elementType = ki, e.lanes = o, e;
    case mc:
      return Co(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fc:
          i = 10;
          break e;
        case pc:
          i = 9;
          break e;
        case ws:
          i = 11;
          break e;
        case _s:
          i = 14;
          break e;
        case jt:
          i = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = We(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function en(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function Co(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = mc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function hi(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function gi(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function yh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xo(0), this.expirationTimes = Xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function na(e, t, n, r, l, o, i, u, c) {
  return e = new yh(e, t, n, u, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fs(o), e;
}
function xh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: xn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function of(e) {
  if (!e) return At;
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
          if (be(t.type)) {
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
    if (be(n)) return od(e, n, t);
  }
  return t;
}
function sf(e, t, n, r, l, o, i, u, c) {
  return e = na(n, r, !0, e, l, o, i, u, c), e.context = of(null), n = e.current, r = je(), l = Ot(n), o = pt(r, l), o.callback = t ?? null, It(n, o, l), e.current.lanes = l, Hr(e, l, r), Me(e, r), e;
}
function Eo(e, t, n, r) {
  var l = t.current, o = je(), i = Ot(l);
  return n = of(n), t.context === null ? t.context = n : t.pendingContext = n, t = pt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = It(l, t, i), e !== null && (et(e, l, i, o), $l(e, l, i)), i;
}
function mo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  Vu(e, t), (e = e.alternate) && Vu(e, t);
}
function wh() {
  return null;
}
var af = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function la(e) {
  this._internalRoot = e;
}
Po.prototype.render = la.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Eo(e, t, null, null);
};
Po.prototype.unmount = la.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      Eo(null, e, null, null);
    }), t[ht] = null;
  }
};
function Po(e) {
  this._internalRoot = e;
}
Po.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++) ;
    Et.splice(n, 0, e), n === 0 && Ac(e);
  }
};
function oa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wu() {
}
function _h(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var m = mo(i);
        o.call(m);
      };
    }
    var i = sf(t, r, e, 0, null, !1, !1, "", Wu);
    return e._reactRootContainer = i, e[ht] = i.current, Rr(e.nodeType === 8 ? e.parentNode : e), on(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var m = mo(c);
      u.call(m);
    };
  }
  var c = na(e, 0, !1, null, null, !1, !1, "", Wu);
  return e._reactRootContainer = c, e[ht] = c.current, Rr(e.nodeType === 8 ? e.parentNode : e), on(function() {
    Eo(t, c, n, r);
  }), c;
}
function To(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var c = mo(i);
        u.call(c);
      };
    }
    Eo(t, i, e, l);
  } else i = _h(n, t, e, l, r);
  return mo(i);
}
$c = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 && (Ns(t, n | 1), Me(t, ue()), !(H & 6) && (Bn = ue() + 500, Bt()));
      }
      break;
    case 13:
      on(function() {
        var r = gt(e, 1);
        if (r !== null) {
          var l = je();
          et(r, e, 1, l);
        }
      }), ra(e, 1);
  }
};
js = function(e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = je();
      et(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
Oc = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = gt(e, t);
    if (n !== null) {
      var r = je();
      et(n, e, t, r);
    }
    ra(e, t);
  }
};
Dc = function() {
  return B;
};
Fc = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
Ri = function(e, t, n) {
  switch (t) {
    case "input":
      if (ji(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wo(r);
            if (!l) throw Error(k(90));
            gc(r), ji(r, l);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
  }
};
jc = Js;
Cc = on;
var kh = { usingClientEntryPoint: !1, Events: [Vr, Nn, wo, Sc, Nc, Js] }, cr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sh = { bundleType: cr.bundleType, version: cr.version, rendererPackageName: cr.rendererPackageName, rendererConfig: cr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: cr.findFiberByHostInstance || wh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tl.isDisabled && Tl.supportsFiber) try {
    go = Tl.inject(Sh), it = Tl;
  } catch {
  }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oa(t)) throw Error(k(200));
  return xh(e, t, null, n);
};
Ae.createRoot = function(e, t) {
  if (!oa(e)) throw Error(k(299));
  var n = !1, r = "", l = af;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = na(e, 1, !1, null, null, n, !1, r, l), e[ht] = t.current, Rr(e.nodeType === 8 ? e.parentNode : e), new la(t);
};
Ae.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = zc(t), e = e === null ? null : e.stateNode, e;
};
Ae.flushSync = function(e) {
  return on(e);
};
Ae.hydrate = function(e, t, n) {
  if (!zo(t)) throw Error(k(200));
  return To(null, e, t, !0, n);
};
Ae.hydrateRoot = function(e, t, n) {
  if (!oa(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = af;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = sf(t, null, e, 1, n ?? null, l, !1, o, i), e[ht] = t.current, Rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Po(t);
};
Ae.render = function(e, t, n) {
  if (!zo(t)) throw Error(k(200));
  return To(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function(e) {
  if (!zo(e)) throw Error(k(40));
  return e._reactRootContainer ? (on(function() {
    To(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
Ae.unstable_batchedUpdates = Js;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return To(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function uf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf);
    } catch (e) {
      console.error(e);
    }
}
uf(), ac.exports = Ae;
var Nh = ac.exports, cf, Qu = Nh;
cf = Qu.createRoot, Qu.hydrateRoot;
async function oe(e, t, n = {}) {
  return e.connection.sendMessagePromise({ type: t, ...n });
}
const Gu = `
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
.ns-custom-group-control { display:grid; gap:12px; padding:14px; border:1px solid var(--divider-color); border-radius:var(--ns-radius); background:var(--card-background-color); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); }
.ns-custom-group-control--category { border-left:4px solid var(--primary-color); }
.ns-custom-group-control--area { border-left:4px solid color-mix(in srgb, #7b61ff 80%, var(--primary-color)); }
.ns-custom-group-control__head { display:flex; align-items:center; justify-content:space-between; gap:12px; }
.ns-custom-group-control__identity { min-width:0; display:grid; gap:5px; color:var(--secondary-text-color); font-size:.82rem; }
.ns-custom-group-control__tag, .ns-custom-group-member-button__tag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:4px 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:.74rem; font-weight:700; letter-spacing:.02em; }
.ns-custom-group-control__tag--category, .ns-custom-group-member-button__tag--category { background:color-mix(in srgb, var(--primary-color) 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-control__tag--area, .ns-custom-group-member-button__tag--area { background:color-mix(in srgb, #7b61ff 16%, var(--card-background-color)); color:var(--primary-text-color); }
.ns-custom-group-member-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap:10px; width:100%; }
.ns-custom-group-member-button { min-width:0; min-height:102px; display:grid; align-content:start; gap:7px; padding:13px; border:1px solid var(--divider-color); border-radius:var(--ns-radius-sm); color:var(--primary-text-color); background:var(--input-fill-color, color-mix(in srgb, var(--card-background-color) 90%, #000)); box-shadow:var(--ha-card-box-shadow, 0 2px 8px rgba(0,0,0,.12)); cursor:pointer; text-align:left; transition:filter .15s ease, transform .15s ease, background .15s ease; }
.ns-custom-group-member-button:hover:not(:disabled) { filter:brightness(1.06); transform:translateY(-1px); }
.ns-custom-group-member-button:disabled { opacity:.63; cursor:not-allowed; }
.ns-custom-group-member-button--all { background:color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color)); }
.ns-custom-group-member-button strong { min-width:0; overflow-wrap:anywhere; font-size:.94rem; line-height:1.3; }
.ns-custom-group-member-button > span:last-child { color:var(--secondary-text-color); font-size:.8rem; overflow-wrap:anywhere; }
.ns-custom-group-selection { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding:11px 12px; border:1px solid color-mix(in srgb, var(--primary-color) 45%, var(--divider-color)); border-radius:var(--ns-radius-sm); background:color-mix(in srgb, var(--primary-color) 8%, var(--card-background-color)); }
.ns-custom-group-selection p { margin:0; flex:1 1 360px; color:var(--primary-text-color); font-size:.88rem; line-height:1.4; }
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
@media (max-width: 900px) { .notify-studio { padding:14px; } .notify-studio__grid, .notify-studio__notifications-layout { grid-template-columns:1fr; } .notify-studio__notifications-activity { position:static; } .ns-form-grid, .ns-custom-group-manager__columns, .ns-assignment-dialog__columns { grid-template-columns:1fr; } .ns-custom-group-manager__create { grid-template-columns:1fr; align-items:stretch; } .ns-custom-group-control__head, .ns-custom-group-selection { align-items:flex-start; flex-direction:column; } .ns-field--full { grid-column:auto; } }
@media (max-width: 700px) { .ns-source-grid { grid-template-columns:1fr; } }
@media (max-width: 600px) { .notify-studio__header { align-items:flex-start; } .notify-studio__subtitle { display:none; } .ns-card__head, .ns-card__body { padding-left:14px; padding-right:14px; } .ns-row { align-items:flex-start; flex-direction:column; padding:14px; } .notify-studio__tabs { align-items:stretch; } .notify-studio__tab-buttons { width:100%; } .ns-template-picker { grid-template-columns:1fr; } .ns-runtime { grid-template-columns:1fr; } .ns-action-list__footer { align-items:flex-start; flex-direction:column; } .ns-log-entry__head { align-items:flex-start; flex-direction:column; } .ns-custom-group-manager__item { align-items:flex-start; flex-direction:column; } .ns-assignment-dialog { max-height:calc(100vh - 24px); } }
`, jh = { rendered: {}, errors: {} }, Ch = "/notify_studio_static/notify-studio-logo.png?v=0.1.16";
function df(e) {
  return e.toUpperCase().trim().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 32);
}
function ds(e, t) {
  const n = df(e) || "ACTION", r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${n}_${t}_${r}`;
}
function Yu(e) {
  const t = `Action ${e}`;
  return { id: ds(t, e), title: t, route: "event" };
}
function Eh(e, t) {
  return `notify_studio_persistent_${df(e || t).toLowerCase() || "notification"}`;
}
function vi(e) {
  return e === "ios" ? "iOS" : e === "android" ? "Android" : e === "other" ? "Other" : "Unknown";
}
function Ku(e) {
  return e === "android" ? "ns-badge ns-badge--android" : e === "ios" ? "ns-badge ns-badge--ios" : "ns-badge";
}
function Bl(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ee(e) {
  return typeof e == "string" ? e : "";
}
function Xu(e) {
  return e === !0;
}
function yi(e) {
  if (!e) return "Never recorded";
  const t = new Date(e);
  return Number.isNaN(t.valueOf()) ? e : t.toLocaleString();
}
function Ph(e) {
  if (!e.trim()) return {};
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error('Home Assistant action data must be valid JSON, for example {"entity_id": "light.hall"}.');
  }
  if (!Bl(t))
    throw new Error("Home Assistant action data must be a JSON object.");
  return t;
}
function zh(e) {
  return `ns-badge ns-badge--log-${e}`;
}
function Th(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Lh({ hass: e }) {
  const t = S.useRef(e);
  t.current = e;
  const [n, r] = S.useState("audit"), [l, o] = S.useState(!!e), [i, u] = S.useState(!0), [c, m] = S.useState(null), [x, w] = S.useState([]), [v, j] = S.useState([]), [C, E] = S.useState([]), [V, p] = S.useState(!0), [d, h] = S.useState([]), [_, P] = S.useState(!1), [L, R] = S.useState(""), [b, Y] = S.useState([]), [I, pe] = S.useState([]), [Vt, xt] = S.useState(!1), [Qr, Gn] = S.useState(!1), [un, cn] = S.useState(""), [z, O] = S.useState("category"), [$, W] = S.useState(null), [se, wt] = S.useState(null), [He, _t] = S.useState([]), [Ie, Wt] = S.useState(""), [Pe, Lo] = S.useState(null), [kt, ia] = S.useState(!1), [Gr, ff] = S.useState(""), [Yr, pf] = S.useState(""), [Kr, mf] = S.useState(""), [Xr, hf] = S.useState(""), [dn, gf] = S.useState("none"), [Yn, Ro] = S.useState(""), [sa, Zr] = S.useState(""), [fn, aa] = S.useState("A test notification from Notify Studio."), [at, ua] = S.useState("Notify Studio"), [Kn, bo] = S.useState(""), [Jr, ca] = S.useState(""), [St, da] = S.useState(""), [qr, fa] = S.useState(""), [el, pa] = S.useState(""), [tl, ma] = S.useState(""), [nl, ha] = S.useState(""), [rl, ga] = S.useState(""), [ll, va] = S.useState(""), [ol, ya] = S.useState(""), [Mo, xa] = S.useState(!1), [il, wa] = S.useState(!1), [pn, _a] = S.useState(!1), [nt, mn] = S.useState([]), [sl, ka] = S.useState(""), [al, Sa] = S.useState(""), [ul, Na] = S.useState(""), [cl, ja] = S.useState(""), [dl, Ca] = S.useState(""), [hn, Ea] = S.useState(jh), [Xn, Pa] = S.useState(""), [Qt, gn] = S.useState(null), [za, Zn] = S.useState(""), [Ta, Jn] = S.useState(""), [qn, er] = S.useState(null), [vf, yf] = S.useState(""), Io = S.useRef(0), A = S.useMemo(
    () => x.find((s) => s.id === Yn) ?? null,
    [x, Yn]
  ), La = S.useMemo(
    () => v.filter((s) => s.kind === "script"),
    [v]
  ), $o = S.useMemo(
    () => L ? d.filter((s) => s.level === L) : d,
    [L, d]
  ), Oo = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I)
      for (const y of f.members) {
        const g = s.get(y.source_key) ?? [];
        g.push(f), s.set(y.source_key, g);
      }
    return s;
  }, [I]), Do = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of v) s.set(f.entity_id, f);
    for (const f of Pe ?? [])
      f.runtime && s.set(f.runtime.entity_id, f.runtime);
    return s;
  }, [v, Pe]), Ra = S.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    for (const f of I) {
      let y = 0, g = 0, N = 0;
      for (const M of f.members) {
        if (!M.entity_id.startsWith("automation.")) continue;
        y += 1;
        const U = Do.get(M.entity_id);
        (U == null ? void 0 : U.enabled) === !0 ? g += 1 : (U == null ? void 0 : U.enabled) === !1 && (N += 1);
      }
      s.set(f.id, { automations: y, enabled: g, disabled: N });
    }
    return s;
  }, [I, Do]), Fo = S.useMemo(() => {
    const s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
    for (const g of Pe ?? []) {
      g.category && s.add(g.category);
      for (const N of g.labels ?? []) f.add(N);
      for (const N of g.notify_devices ?? g.notifiers) y.add(N);
    }
    return {
      categories: [...s].sort((g, N) => g.localeCompare(N)),
      labels: [...f].sort((g, N) => g.localeCompare(N)),
      devices: [...y].sort((g, N) => g.localeCompare(N))
    };
  }, [Pe]), Ao = S.useMemo(() => (Pe ?? []).filter((s) => {
    var f;
    if (Gr && s.source !== Gr || Yr && s.category !== Yr || Kr && !(s.labels ?? []).includes(Kr) || Xr && !(s.notify_devices ?? s.notifiers).includes(Xr)) return !1;
    if (Ie) {
      const y = `${s.source}:${s.id}`;
      if (!((f = Oo.get(y)) != null && f.some((g) => g.id === Ie))) return !1;
    }
    return !0;
  }), [Yr, Xr, Kr, Gr, Ie, Oo, Pe]), xf = S.useMemo(() => {
    var y, g;
    const s = /* @__PURE__ */ new Map(), f = (N, M) => {
      const U = s.get(N) ?? [];
      U.push(M), s.set(N, U);
    };
    for (const N of Ao)
      if (dn === "source") f(N.source === "script" ? "Scripts" : N.source === "automation" ? "Automations" : "Alerts", N);
      else if (dn === "category") f(N.category || "Uncategorised", N);
      else if (dn === "label") {
        const M = (y = N.labels) != null && y.length ? N.labels : ["No label"];
        for (const U of M) f(U, N);
      } else if (dn === "device") {
        const M = (g = N.notify_devices) != null && g.length ? N.notify_devices : N.notifiers.length ? N.notifiers : ["No notify device"];
        for (const U of M) f(U, N);
      } else f("All notification sources", N);
    return [...s.entries()].map(([N, M]) => ({ title: N, items: M })).sort((N, M) => N.title.localeCompare(M.title));
  }, [dn, Ao]), le = S.useCallback((s) => {
    yf(s);
  }, []), K = S.useCallback((s, f) => {
    const y = s instanceof Error ? s.message : f;
    le(y), window.alert(y);
  }, [le]), ba = S.useCallback(async () => {
    const s = t.current;
    if (!s) return;
    const [f, y, g, N, M] = await Promise.all([
      oe(s, "notify_studio/info"),
      oe(s, "notify_studio/list_notifiers"),
      oe(s, "notify_studio/list_runnables"),
      oe(s, "notify_studio/list_templates"),
      oe(s, "notify_studio/list_custom_groups")
    ]);
    m(f), w(y.services), j(g), Y(N), pe(M);
  }, []), wf = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      xt(!0);
      try {
        pe(await oe(s, "notify_studio/list_custom_groups"));
      } catch (f) {
        K(f, "Unable to load Notify Studio custom categories and areas.");
      } finally {
        xt(!1);
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
      const y = await oe(s, "notify_studio/create_custom_group", {
        name: f,
        kind: z
      });
      pe((g) => [...g, y].sort((N, M) => N.kind === M.kind ? N.name.localeCompare(M.name) : N.kind.localeCompare(M.kind))), cn(""), le(`Custom ${y.kind} “${y.name}” created.`);
    } catch (y) {
      K(y, "Unable to create the custom category or area.");
    } finally {
      W(null);
    }
  }, _f = async (s) => {
    var g;
    const f = t.current;
    if (!f) return;
    const y = (g = window.prompt(`Rename custom ${s.kind}:`, s.name)) == null ? void 0 : g.trim();
    if (!(!y || y === s.name))
      try {
        const N = await oe(f, "notify_studio/rename_custom_group", {
          group_id: s.id,
          name: y
        });
        pe((M) => M.map((U) => U.id === N.id ? N : U)), le(`Custom ${N.kind} renamed to “${N.name}”.`);
      } catch (N) {
        K(N, "Unable to rename the custom category or area.");
      }
  }, kf = async (s) => {
    const f = t.current;
    if (f && window.confirm(`Delete the custom ${s.kind} “${s.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`))
      try {
        await oe(f, "notify_studio/delete_custom_group", { group_id: s.id }), pe((y) => y.filter((g) => g.id !== s.id)), Ie === s.id && Wt(""), le(`Custom ${s.kind} “${s.name}” deleted.`);
      } catch (y) {
        K(y, "Unable to delete the custom category or area.");
      }
  }, tr = (s) => `${s.source}:${s.id}`, ze = se ? I.find((s) => s.id === se) ?? null : null, Sf = (s) => {
    wt(s.id), _t(s.members.map((f) => f.source_key)), le(`Select notification sources for ${s.kind} “${s.name}”.`);
  }, Nf = () => {
    wt(null), _t([]), le("Custom group selection cancelled.");
  }, jf = (s, f) => {
    const y = tr(s);
    _t((g) => f ? [.../* @__PURE__ */ new Set([...g, y])] : g.filter((N) => N !== y));
  }, Cf = async () => {
    const s = t.current;
    if (!(!s || !ze)) {
      W("selection");
      try {
        const f = Pe ?? [], y = new Set(f.map(tr)), g = new Set(He), N = ze.members.filter(
          (J) => !y.has(J.source_key)
        ), M = f.filter((J) => g.has(tr(J))).map((J) => {
          var Q;
          return {
            source_key: tr(J),
            name: J.name,
            entity_id: ((Q = J.runtime) == null ? void 0 : Q.entity_id) ?? ""
          };
        }), U = await oe(s, "notify_studio/set_custom_group_members", {
          group_id: ze.id,
          members: [...N, ...M]
        });
        pe(U), le(`Saved ${M.length} notification source${M.length === 1 ? "" : "s"} in “${ze.name}”.`), wt(null), _t([]);
      } catch (f) {
        K(f, "Unable to save the selected custom category or area members.");
      } finally {
        W(null);
      }
    }
  }, Ef = async (s, f) => {
    const y = t.current;
    if (!y) return;
    const g = Ra.get(s.id), N = (g == null ? void 0 : g.automations) ?? 0;
    if (!N) {
      K(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }
    const M = f ? "enable" : "disable";
    if (window.confirm(`Do you want to ${M} all ${N} automation${N === 1 ? "" : "s"} in “${s.name}”? Scripts and alerts are not changed.`)) {
      W("toggle");
      try {
        const U = await oe(
          y,
          "notify_studio/toggle_custom_group",
          { group_id: s.id, enabled: f }
        );
        le(`${s.name}: ${U.changed_entity_ids.length} automation${U.changed_entity_ids.length === 1 ? "" : "s"} ${f ? "enabled" : "disabled"}.`), await fl();
      } catch (U) {
        K(U, `Unable to ${M} the automations in ${s.name}.`);
      } finally {
        W(null);
      }
    }
  }, nr = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      p(!0);
      try {
        const f = await oe(
          s,
          "notify_studio/list_recent_push_runnables"
        );
        E(f);
      } catch {
        E([]);
      } finally {
        p(!1);
      }
    }
  }, []), Uo = S.useCallback(async () => {
    const s = t.current;
    if (s) {
      P(!0);
      try {
        const f = await oe(s, "notify_studio/list_logs");
        h(f);
      } catch (f) {
        K(f, "Unable to load Notify Studio logs.");
      } finally {
        P(!1);
      }
    }
  }, [K]), Pf = async () => {
    const s = t.current;
    if (!(!s || !window.confirm("Clear the Notify Studio application logs?"))) {
      P(!0);
      try {
        const f = await oe(s, "notify_studio/clear_logs");
        h(f), le("Notify Studio logs cleared.");
      } catch (f) {
        K(f, "Unable to clear Notify Studio logs.");
      } finally {
        P(!1);
      }
    }
  }, Ia = S.useCallback(async () => {
    try {
      await ba(), Lo(null);
    } catch (s) {
      K(s, "Unable to load Notify Studio.");
    } finally {
      u(!1);
    }
  }, [le, ba, K]);
  S.useEffect(() => {
    e && !l && o(!0);
  }, [e, l]), S.useEffect(() => {
    l && Ia();
  }, [l, Ia]), S.useEffect(() => {
    l && nr();
  }, [l, nr]), S.useEffect(() => {
    !Yn && x.length && Ro(x[0].id);
  }, [Yn, x]);
  const fl = S.useCallback(async () => {
    const s = t.current;
    if (!(!s || kt)) {
      ia(!0);
      try {
        Lo(await oe(s, "notify_studio/scan_notify_usage")), le("Notification audit complete.");
      } catch (f) {
        K(f, "The notification audit failed.");
      } finally {
        ia(!1);
      }
    }
  }, [le, kt, K]);
  S.useEffect(() => {
    n === "audit" && Pe === null && fl();
  }, [fl, n, Pe]), S.useEffect(() => {
    n === "audit" && nr();
  }, [nr, n]), S.useEffect(() => {
    n === "logs" && Uo();
  }, [Uo, n]);
  const pl = S.useCallback(() => {
    const s = {};
    if (Kn.trim() && (s.tag = Kn.trim()), Jr.trim() && (s.image = Jr.trim()), pn && nt.length && (s.actions = nt.map((f) => f.route === "uri" ? {
      action: "URI",
      title: f.title,
      uri: f.uri ?? ""
    } : f.route === "reply" ? {
      action: f.id,
      title: f.title,
      behavior: "textInput"
    } : { action: f.id, title: f.title })), (A == null ? void 0 : A.platform) === "android")
      St.trim() && (s.clickAction = St.trim()), qr.trim() && (s.subject = qr.trim()), el.trim() && (s.channel = el.trim()), tl && (s.importance = tl), nl && (s.priority = nl), rl.trim() && (s.color = rl.trim()), ll.trim() && (s.notification_icon = ll.trim()), ol.trim() && (s.timeout = Number(ol)), Mo && (s.sticky = !0), il && (s.persistent = !0);
    else if ((A == null ? void 0 : A.platform) === "ios") {
      St.trim() && (s.url = St.trim()), sl.trim() && (s.subtitle = sl.trim());
      const f = {};
      al.trim() && (f.sound = al.trim()), ul.trim() && (f.badge = Number(ul)), cl && (f["interruption-level"] = cl), dl.trim() && (f["thread-id"] = dl.trim()), Object.keys(f).length && (s.push = f);
    } else St.trim() && (s.url = St.trim());
    return {
      message: fn,
      ...at.trim() ? { title: at } : {},
      ...Object.keys(s).length ? { data: s } : {}
    };
  }, [pn, Jr, ul, el, rl, tl, cl, fn, nt, ll, St, il, nl, A == null ? void 0 : A.platform, al, Mo, qr, sl, Kn, dl, ol, at]), Ho = S.useCallback(() => pn ? nt.filter((s) => s.route !== "uri").map((s) => {
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
        service_data: Ph(s.serviceData ?? "")
      };
    }
    return s.route === "reply" ? { action: s.id, type: "reply" } : { action: s.id, type: "event" };
  }) : [], [pn, nt]), zf = S.useCallback(() => ({
    payload: pl(),
    action_handlers: Ho(),
    ...A ? { target_platform: A.platform } : {}
  }), [Ho, pl, A]), $a = () => A || (K(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first."), null);
  S.useEffect(() => {
    const s = t.current;
    if (!l || !s) return;
    const f = ++Io.current;
    let y = !1;
    const g = {
      message: fn,
      ...at.trim() ? { title: at } : {}
    }, N = window.setTimeout(() => {
      oe(s, "notify_studio/render_preview", { payload: g }).then((M) => {
        !y && f === Io.current && Ea(M);
      }).catch((M) => {
        if (y || f !== Io.current) return;
        const U = M instanceof Error ? M.message : "Unable to render the current template.";
        Ea({ rendered: {}, errors: { message: U } });
      });
    }, 250);
    return () => {
      y = !0, window.clearTimeout(N);
    };
  }, [l, fn, at]);
  const Tf = async () => {
    const s = $a();
    if (!(!s || !t.current)) {
      gn("test");
      try {
        const f = await oe(t.current, "notify_studio/send_test", {
          target_id: s.id,
          payload: pl()
        });
        le(`Test notification sent to ${f.target}.`);
      } catch (f) {
        K(f, "The test notification could not be sent.");
      } finally {
        gn(null);
      }
    }
  }, Lf = async () => {
    const s = $a();
    if (!(!s || !t.current)) {
      gn("yaml");
      try {
        const f = await oe(t.current, "notify_studio/generate_yaml", {
          target_id: s.id,
          payload: pl(),
          action_handlers: Ho()
        });
        Pa(f.yaml), le("YAML generated successfully.");
      } catch (f) {
        K(f, "Unable to generate YAML.");
      } finally {
        gn(null);
      }
    }
  }, Rf = async () => {
    var f;
    if (!Xn.trim()) {
      K(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }
    let s = !1;
    if (window.isSecureContext && ((f = navigator.clipboard) != null && f.writeText))
      try {
        await navigator.clipboard.writeText(Xn), s = !0;
      } catch {
      }
    if (!s) {
      const y = document.createElement("textarea");
      y.value = Xn, y.setAttribute("readonly", ""), y.style.position = "fixed", y.style.opacity = "0", y.style.pointerEvents = "none", document.body.appendChild(y), y.focus(), y.select();
      try {
        s = document.execCommand("copy");
      } finally {
        document.body.removeChild(y);
      }
    }
    if (s) {
      le("Generated YAML copied to the clipboard.");
      return;
    }
    K(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser."
    );
  }, bf = () => {
    window.confirm("Do you want to open Automations?") && window.location.assign("/config/automation/dashboard");
  }, Mf = (s) => {
    const f = s.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${f}?`)) return;
    const y = s.id ?? s.entity_id.replace(`${s.kind}.`, "");
    window.location.assign(`/config/${s.kind}/edit/${encodeURIComponent(String(y))}`);
  }, If = (s, f) => {
    j((y) => y.map((g) => g.entity_id === s ? { ...g, ...f } : g)), Lo((y) => (y == null ? void 0 : y.map((g) => {
      var N;
      return ((N = g.runtime) == null ? void 0 : N.entity_id) === s ? { ...g, runtime: { ...g.runtime, ...f } } : g;
    })) ?? null);
  }, Oa = async (s, f) => {
    if (t.current)
      try {
        const y = await oe(t.current, "notify_studio/toggle_automation", {
          entity_id: s.entity_id,
          enabled: f
        });
        If(y.entity_id, {
          state: y.state,
          enabled: f,
          status: f ? "enabled" : "disabled"
        }), le(`${s.name} is now ${f ? "enabled" : "disabled"}.`);
      } catch (y) {
        K(y, "Unable to update that automation.");
      }
  }, $f = async (s) => {
    if (!t.current) return;
    const f = s.kind === "automation" ? "automation" : "script", y = s.kind === "automation" ? " Its conditions will be bypassed for this manual test." : "", g = `Run “${s.name}” now? This queues its configured ${f} actions and may control real devices.${y}`;
    if (window.confirm(g))
      try {
        const N = await oe(t.current, "notify_studio/run_runnable", {
          entity_id: s.entity_id
        });
        le(`${s.name} was queued for execution${N.conditions_skipped ? " with conditions bypassed" : ""}.`), window.setTimeout(() => {
          nr();
        }, 900);
      } catch (N) {
        K(N, `Unable to run ${s.name}.`);
      }
  }, vn = (s, f) => {
    mn((y) => y.map((g, N) => N === s ? { ...g, ...f } : g));
  }, Of = (s, f) => {
    mn((y) => y.map((g, N) => N !== s ? g : {
      ...g,
      route: f,
      id: f === "uri" ? "URI" : g.id === "URI" ? ds(g.title, s + 1) : g.id
    }));
  }, Df = () => {
    const s = (A == null ? void 0 : A.platform) === "android" ? 3 : 10;
    mn((f) => f.length >= s ? f : [...f, Yu(f.length + 1)]);
  }, Ff = (s) => {
    mn((f) => f.filter((y, g) => g !== s));
  }, Bo = S.useCallback((s) => {
    const f = s.payload, y = Bl(f.data) ? f.data : {};
    aa(ee(f.message)), ua(ee(f.title)), bo(ee(y.tag)), ca(ee(y.image)), da(ee(y.clickAction) || ee(y.url)), fa(ee(y.subject)), pa(ee(y.channel)), ma(ee(y.importance)), ha(ee(y.priority)), ga(ee(y.color)), va(ee(y.notification_icon)), ya(y.timeout === void 0 ? "" : String(y.timeout)), xa(Xu(y.sticky)), wa(Xu(y.persistent)), ka(ee(y.subtitle));
    const g = Bl(y.push) ? y.push : {};
    Sa(ee(g.sound)), Na(g.badge === void 0 ? "" : String(g.badge)), ja(ee(g["interruption-level"])), Ca(ee(g["thread-id"]));
    const N = new Map(s.action_handlers.map((J) => [J.action, J])), U = (Array.isArray(y.actions) ? y.actions : []).filter(Bl).map((J, Q) => {
      const me = ee(J.action) || ds(`Action ${Q + 1}`, Q + 1), ae = N.get(me);
      let Gt = "event";
      return me === "URI" && ee(J.uri) ? Gt = "uri" : ee(J.behavior) === "textInput" ? Gt = "reply" : (ae == null ? void 0 : ae.type) === "script" ? Gt = "script" : (ae == null ? void 0 : ae.type) === "service" && (Gt = "service"), {
        id: me,
        title: ee(J.title) || `Action ${Q + 1}`,
        route: Gt,
        uri: ee(J.uri),
        scriptEntityId: ee(ae == null ? void 0 : ae.script_entity_id),
        service: ee(ae == null ? void 0 : ae.service),
        serviceData: ae != null && ae.service_data ? JSON.stringify(ae.service_data, null, 2) : ""
      };
    });
    if (mn(U), _a(U.length > 0), Pa(""), s.target_platform && (A == null ? void 0 : A.platform) !== s.target_platform) {
      const J = x.find((Q) => Q.platform === s.target_platform);
      J && Ro(J.id);
    }
  }, [A == null ? void 0 : A.platform, x]), Af = (s) => {
    if (Zr(s), !s) return;
    const f = b.find((y) => y.id === s);
    f && (Bo(f.draft), le(`Template “${f.name}” loaded into the composer.`));
  }, Uf = () => {
    er(null), Zn(at.trim() || "New notification template"), Jn(""), r("templates");
  }, Hf = (s) => {
    er(s.id), Zn(s.name), Jn(s.description), Bo(s.draft), r("templates"), le(`Editing template “${s.name}”.`);
  }, Bf = async () => {
    if (t.current) {
      gn("template");
      try {
        const s = await oe(t.current, "notify_studio/save_template", {
          template: {
            ...qn ? { id: qn } : {},
            name: za,
            description: Ta,
            draft: zf()
          }
        });
        Y((f) => f.findIndex((g) => g.id === s.id) === -1 ? [s, ...f] : f.map((g) => g.id === s.id ? s : g)), Zr(s.id), er(s.id), le(`Template “${s.name}” saved.`);
      } catch (s) {
        K(s, "Unable to save the template.");
      } finally {
        gn(null);
      }
    }
  }, Vf = async (s) => {
    if (t.current && window.confirm(`Delete the “${s.name}” template? This cannot be undone.`))
      try {
        await oe(t.current, "notify_studio/delete_template", { template_id: s.id }), Y((f) => f.filter((y) => y.id !== s.id)), sa === s.id && Zr(""), qn === s.id && (er(null), Zn(""), Jn("")), le(`Template “${s.name}” deleted.`);
      } catch (f) {
        K(f, "Unable to delete the template.");
      }
  }, Wf = () => A ? A.platform === "android" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Android options" }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subject", children: /* @__PURE__ */ a.jsx("input", { value: qr, onChange: (s) => fa(s.target.value), placeholder: "Optional extended subject" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Channel", children: /* @__PURE__ */ a.jsx("input", { value: el, onChange: (s) => pa(s.target.value), placeholder: "General" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Importance", children: /* @__PURE__ */ a.jsxs("select", { value: tl, onChange: (s) => ma(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Priority", children: /* @__PURE__ */ a.jsxs("select", { value: nl, onChange: (s) => ha(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ a.jsx("option", { value: "min", children: "Min" }),
        /* @__PURE__ */ a.jsx("option", { value: "low", children: "Low" }),
        /* @__PURE__ */ a.jsx("option", { value: "high", children: "High" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Colour", children: /* @__PURE__ */ a.jsx("input", { value: rl, onChange: (s) => ga(s.target.value), placeholder: "#2DF56D or red" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Status-bar icon", children: /* @__PURE__ */ a.jsx("input", { value: ll, onChange: (s) => va(s.target.value), placeholder: "mdi:cellphone-message" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Timeout (seconds)", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ol, onChange: (s) => ya(s.target.value), placeholder: "Optional" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: Mo, onChange: (s) => xa(s.target.checked) }),
      " Keep notification after it is tapped"
    ] }),
    /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
      /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: il, onChange: (s) => {
        const f = s.target.checked;
        wa(f), f && !Kn.trim() && bo(Eh(at, fn));
      } }),
      " Persistent notification"
    ] }),
    il && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty." })
  ] }) : A.platform === "ios" ? /* @__PURE__ */ a.jsxs("section", { className: "ns-options", children: [
    /* @__PURE__ */ a.jsx("h3", { children: "Apple platform options" }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings." }),
    /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
      /* @__PURE__ */ a.jsx(D, { label: "Subtitle", children: /* @__PURE__ */ a.jsx("input", { value: sl, onChange: (s) => ka(s.target.value), placeholder: "Optional second heading" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Sound", children: /* @__PURE__ */ a.jsx("input", { value: al, onChange: (s) => Sa(s.target.value), placeholder: "default, none, or a custom sound" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Badge", children: /* @__PURE__ */ a.jsx("input", { inputMode: "numeric", value: ul, onChange: (s) => Na(s.target.value), placeholder: "Optional app badge" }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Interruption level", children: /* @__PURE__ */ a.jsxs("select", { value: cl, onChange: (s) => ja(s.target.value), children: [
        /* @__PURE__ */ a.jsx("option", { value: "", children: "Device default" }),
        /* @__PURE__ */ a.jsx("option", { value: "passive", children: "Passive" }),
        /* @__PURE__ */ a.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ a.jsx("option", { value: "time-sensitive", children: "Time-sensitive" }),
        /* @__PURE__ */ a.jsx("option", { value: "critical", children: "Critical" })
      ] }) }),
      /* @__PURE__ */ a.jsx(D, { label: "Thread ID", children: /* @__PURE__ */ a.jsx("input", { value: dl, onChange: (s) => Ca(s.target.value), placeholder: "Optional grouping thread" }) })
    ] })
  ] }) : /* @__PURE__ */ a.jsx("section", { className: "ns-options", children: /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: "This target could not be identified as Android or iOS, so only the shared fields are available." }) }) : null, Qf = () => {
    if (!A || !["android", "ios"].includes(A.platform)) return null;
    const s = A.platform === "android" ? 3 : 10;
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-options ns-options--actionable", children: [
      /* @__PURE__ */ a.jsx("h3", { children: "Actionable notification" }),
      /* @__PURE__ */ a.jsxs("label", { className: "ns-check", children: [
        /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: pn, onChange: (f) => {
          const y = f.target.checked;
          _a(y), y && !nt.length && mn([Yu(1)]);
        } }),
        " Include notification action buttons"
      ] }),
      pn && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-warning", children: [
          "Choose what each button does. Script and Home Assistant action choices are generated as a separate ",
          /* @__PURE__ */ a.jsx("code", { children: "mobile_app_notification_action" }),
          " handler. URI buttons open directly on the device."
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-action-list", children: nt.map((f, y) => /* @__PURE__ */ a.jsxs("article", { className: "ns-action-card", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "ns-action-card__head", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              "Button ",
              y + 1
            ] }),
            nt.length > 1 && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => Ff(y), children: "Remove" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Button label", children: /* @__PURE__ */ a.jsx("input", { value: f.title, onChange: (g) => vn(y, { title: g.target.value }), placeholder: "e.g. Open gate" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Button action", children: /* @__PURE__ */ a.jsxs("select", { value: f.route, onChange: (g) => Of(y, g.target.value), children: [
              /* @__PURE__ */ a.jsx("option", { value: "event", children: "Send event only" }),
              /* @__PURE__ */ a.jsx("option", { value: "script", children: "Run script" }),
              /* @__PURE__ */ a.jsx("option", { value: "service", children: "Run Home Assistant action" }),
              /* @__PURE__ */ a.jsx("option", { value: "uri", children: "Open URI / dashboard" }),
              /* @__PURE__ */ a.jsx("option", { value: "reply", children: "Ask for text reply" })
            ] }) }),
            f.route !== "uri" && /* @__PURE__ */ a.jsx(D, { label: "Action ID", children: /* @__PURE__ */ a.jsx("input", { value: f.id, onChange: (g) => vn(y, { id: g.target.value }), placeholder: "Unique event ID" }) }),
            f.route === "uri" && /* @__PURE__ */ a.jsx(D, { label: "URI", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: f.uri ?? "", onChange: (g) => vn(y, { uri: g.target.value }), placeholder: "/lovelace/cameras, app://package, https://example.com" }) }),
            f.route === "script" && /* @__PURE__ */ a.jsx(D, { label: "Script", children: /* @__PURE__ */ a.jsxs("select", { value: f.scriptEntityId ?? "", onChange: (g) => vn(y, { scriptEntityId: g.target.value }), children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a script…" }),
              La.map((g) => /* @__PURE__ */ a.jsxs("option", { value: g.entity_id, children: [
                g.name,
                " · ",
                g.entity_id
              ] }, g.entity_id))
            ] }) }),
            f.route === "service" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant action", children: /* @__PURE__ */ a.jsx("input", { value: f.service ?? "", onChange: (g) => vn(y, { service: g.target.value }), placeholder: "light.turn_off" }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Action data (JSON)", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: f.serviceData ?? "", onChange: (g) => vn(y, { serviceData: g.target.value }), placeholder: `{
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
          f.route === "script" && !La.length && /* @__PURE__ */ a.jsx("p", { className: "ns-help", children: "No script entities are currently available. Create or reload a script, then reload this page." })
        ] }, `${f.id}:${y}`)) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-action-list__footer", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "ns-help", children: [
            nt.length,
            " of ",
            s,
            " available ",
            s === 3 ? "Android buttons" : "Apple buttons",
            "."
          ] }),
          nt.length < s && /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Df, children: "Add button" })
        ] })
      ] })
    ] });
  }, Gf = (s) => s ? /* @__PURE__ */ a.jsx("div", { className: "ns-runtime", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-runtime__item", children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__label", children: "Last triggered" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-runtime__value", children: yi(s.last_triggered) })
  ] }) }) : /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No runtime entity matched this merged-YAML source." }), Yf = (s) => {
    var J;
    const f = tr(s), y = (J = s.notify_devices) != null && J.length ? s.notify_devices : s.notifiers, g = s.runtime, N = Oo.get(f) ?? [], M = ze !== null, U = He.includes(f);
    return /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-audit-card ${M ? "is-selectable" : ""}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-row__main", children: /* @__PURE__ */ a.jsx("div", { className: "ns-row__title", children: s.name }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          M && /* @__PURE__ */ a.jsxs("label", { className: "ns-audit-card__selection", title: `Include ${s.name} in ${(ze == null ? void 0 : ze.name) ?? "this custom group"}`, children: [
            /* @__PURE__ */ a.jsx("input", { type: "checkbox", checked: U, onChange: (Q) => jf(s, Q.target.checked) }),
            /* @__PURE__ */ a.jsxs("span", { className: "ns-sr-only", children: [
              "Include ",
              s.name,
              " in ",
              ze == null ? void 0 : ze.name
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.source === "script" ? "script" : "automation"}`, children: s.source })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        Gf(g),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
          s.category && /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Category: ",
            s.category
          ] }),
          (s.labels ?? []).map((Q) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Label: ",
            Q
          ] }, `label:${Q}`)),
          y.map((Q) => /* @__PURE__ */ a.jsxs("span", { className: "ns-chip", children: [
            "Notify: ",
            Q
          ] }, `device:${Q}`))
        ] }),
        N.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-studio-group-chips", "aria-label": "Notify Studio custom groups", children: N.map((Q) => /* @__PURE__ */ a.jsxs("span", { className: `ns-studio-group-chip ns-studio-group-chip--${Q.kind}`, children: [
          Q.kind === "category" ? "Category" : "Area",
          ": ",
          Q.name
        ] }, Q.id)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__footer", children: [
        (g == null ? void 0 : g.kind) === "automation" && /* @__PURE__ */ a.jsx("button", { className: `ns-button ns-button--tab ns-button--compact ns-button--state ${g.enabled ? "is-enabled" : "is-disabled"}`, onClick: () => void Oa(g, !g.enabled), children: g.enabled ? "Enabled" : "Disabled" }),
        (g == null ? void 0 : g.supports_run) && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void $f(g), children: "Run test" }),
        g && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Mf(g), children: g.kind === "automation" ? "View Automation" : "View Script" })
      ] })
    ] }, f);
  }, Kf = () => I.length ? /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: I.map((s) => {
    const f = Ra.get(s.id) ?? { automations: 0, enabled: 0 }, g = !(f.automations > 0 && f.enabled === f.automations), N = g ? "Enable all" : "Disable all", M = s.kind === "category" ? "Category" : "Area", U = (ze == null ? void 0 : ze.id) === s.id, J = [...s.members].sort((Q, me) => Q.name.localeCompare(me.name));
    return /* @__PURE__ */ a.jsxs("section", { className: `ns-custom-group-control ns-custom-group-control--${s.kind}`, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control__head", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-control__identity", children: [
          /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-control__tag ns-custom-group-control__tag--${s.kind}`, children: [
            M,
            ": ",
            s.name
          ] }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            s.members.length,
            " saved notification source",
            s.members.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: `ns-button ns-button--quiet ns-button--compact ${U ? "ns-button--active" : ""}`,
            onClick: () => Sf(s),
            disabled: $ === "selection",
            children: U ? "Selecting entities" : "Select entities"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-member-grid", children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "ns-custom-group-member-button ns-custom-group-member-button--all",
            onClick: () => void Ef(s, g),
            disabled: $ === "toggle" || f.automations === 0,
            title: f.automations === 0 ? "Add notification sources with automation entities to use this bulk control." : `${N} automations in ${s.name}`,
            children: [
              /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.kind}`, children: [
                M,
                ": ",
                s.name
              ] }),
              /* @__PURE__ */ a.jsx("strong", { children: f.automations === 0 ? "No automations" : N }),
              /* @__PURE__ */ a.jsx("span", { children: f.automations === 0 ? "Add an automation source" : `All automations · ${f.enabled}/${f.automations} enabled` })
            ]
          }
        ),
        J.map((Q) => {
          const me = Do.get(Q.entity_id), ae = (me == null ? void 0 : me.kind) === "automation", Gt = ae ? me.enabled ? "Enabled" : "Disabled" : (me == null ? void 0 : me.kind) === "script" ? "Script" : "Unavailable";
          return /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "ns-custom-group-member-button",
              disabled: !ae,
              onClick: () => {
                ae && Oa(me, !me.enabled);
              },
              title: ae ? `Toggle ${Q.name}` : (me == null ? void 0 : me.kind) === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity.",
              children: [
                /* @__PURE__ */ a.jsxs("span", { className: `ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${s.kind}`, children: [
                  M,
                  ": ",
                  s.name
                ] }),
                /* @__PURE__ */ a.jsx("strong", { children: Q.name }),
                /* @__PURE__ */ a.jsx("span", { children: Gt })
              ]
            },
            Q.source_key
          );
        })
      ] }),
      U && /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-selection", children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          "Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for ",
          /* @__PURE__ */ a.jsx("strong", { children: s.name }),
          "."
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: Nf, disabled: $ === "selection", children: "Cancel" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Cf(), disabled: $ === "selection", children: $ === "selection" ? "Saving…" : `Save ${He.length} ${He.length === 1 ? "entity" : "entities"}` })
        ] })
      ] })
    ] }, s.id);
  }) }) : /* @__PURE__ */ a.jsx("section", { className: "ns-custom-group-toolbar", "aria-label": "Notify Studio custom category and area controls", children: /* @__PURE__ */ a.jsxs("button", { type: "button", className: "ns-custom-group-empty", onClick: () => Gn(!0), children: [
    /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__title", children: "Create custom categories and areas" }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-custom-group-empty__meta", children: "Group notification sources without changing Home Assistant’s own organisation." })
  ] }) }), Xf = () => {
    if (!Qr) return null;
    const s = I.filter((g) => g.kind === "category"), f = I.filter((g) => g.kind === "area"), y = (g, N) => /* @__PURE__ */ a.jsxs("section", { className: "ns-custom-group-manager__section", children: [
      /* @__PURE__ */ a.jsx("h3", { children: g === "category" ? "Custom categories" : "Custom areas" }),
      !N.length && /* @__PURE__ */ a.jsxs("p", { className: "ns-muted", children: [
        "No custom ",
        g,
        "s created yet."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-custom-group-manager__list", children: N.map((M) => /* @__PURE__ */ a.jsxs("article", { className: "ns-custom-group-manager__item", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: M.name }),
          /* @__PURE__ */ a.jsxs("span", { children: [
            M.members.length,
            " assigned notification source",
            M.members.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void _f(M), children: "Rename" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void kf(M), children: "Delete" })
        ] })
      ] }, M.id)) })
    ] });
    return /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-custom-group-manager", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Custom categories and areas" }),
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels." })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void wf(), disabled: Vt, children: "Refresh" }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Gn(!1), children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__create", children: [
          /* @__PURE__ */ a.jsx(D, { label: "Create", children: /* @__PURE__ */ a.jsx("input", { value: un, onChange: (g) => cn(g.target.value), onKeyDown: (g) => {
            g.key === "Enter" && Ma();
          }, placeholder: "e.g. Security alerts or Upstairs" }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: z, onChange: (g) => O(g.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "category", children: "Custom category" }),
            /* @__PURE__ */ a.jsx("option", { value: "area", children: "Custom area" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void Ma(), disabled: $ === "create", children: $ === "create" ? "Creating…" : "Create" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-custom-group-manager__columns", children: [
          y("category", s),
          y("area", f)
        ] })
      ] })
    ] });
  };
  return i ? /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: Gu }),
    /* @__PURE__ */ a.jsx("div", { className: "ns-loading", children: "Loading Notify Studio…" })
  ] }) : /* @__PURE__ */ a.jsxs("main", { className: "notify-studio", children: [
    /* @__PURE__ */ a.jsx("style", { children: Gu }),
    /* @__PURE__ */ a.jsx("span", { className: "ns-sr-only", "aria-live": "polite", children: vf }),
    /* @__PURE__ */ a.jsx("header", { className: "notify-studio__header", children: /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__heading", children: [
      /* @__PURE__ */ a.jsx("img", { className: "notify-studio__logo-image", src: Ch, alt: "Notify Studio" }),
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
          A && /* @__PURE__ */ a.jsx("span", { className: Ku(A.platform), children: vi(A.platform) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: x.length ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-template-picker", children: /* @__PURE__ */ a.jsx(D, { label: "Template", children: /* @__PURE__ */ a.jsxs("select", { value: sa, onChange: (s) => Af(s.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Choose a saved template…" }),
            b.map((s) => /* @__PURE__ */ a.jsx("option", { value: s.id, children: s.name }, s.id))
          ] }) }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Send to", children: /* @__PURE__ */ a.jsx("select", { value: Yn, onChange: (s) => Ro(s.target.value), children: x.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
            s.name,
            " · ",
            vi(s.platform),
            s.model ? ` · ${s.model}` : ""
          ] }, s.id)) }) }),
          A == null ? void 0 : A.warnings.map((s) => /* @__PURE__ */ a.jsx("div", { className: "ns-warning", children: s }, s)),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Title", children: /* @__PURE__ */ a.jsx("input", { value: at, onChange: (s) => ua(s.target.value), placeholder: "Optional title" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Tag", children: /* @__PURE__ */ a.jsx("input", { value: Kn, onChange: (s) => bo(s.target.value), placeholder: "Optional replacement key" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Open URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: St, onChange: (s) => da(s.target.value), placeholder: "/lovelace/cameras, https://example.com, or deep-link://…" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Image / attachment URL", full: !0, children: /* @__PURE__ */ a.jsx("input", { value: Jr, onChange: (s) => ca(s.target.value), placeholder: "/media/local/camera.jpg or /local/image.jpg" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Message", full: !0, children: /* @__PURE__ */ a.jsx("textarea", { value: fn, onChange: (s) => aa(s.target.value), placeholder: "Notification content. Jinja templates are supported." }) })
          ] }),
          Wf(),
          Qf(),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Tf(), disabled: Qt !== null, children: Qt === "test" ? "Sending…" : "Send test" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: Uf, disabled: Qt !== null, children: "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab", onClick: () => void Lf(), disabled: Qt !== null, children: Qt === "yaml" ? "Generating…" : "Generate YAML" })
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
          /* @__PURE__ */ a.jsx(D, { label: "Rendered title", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: hn.errors.title ? `Error: ${hn.errors.title}` : hn.rendered.title || "No title entered." }) }),
          /* @__PURE__ */ a.jsx(D, { label: "Rendered message", children: /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: hn.errors.message ? `Error: ${hn.errors.message}` : hn.rendered.message || "No message entered." }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", style: { padding: "12px 0", border: 0 }, children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-card__title", children: "Generated action" }),
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
              Xn && /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Rf(), children: "Copy" }),
              /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: bf, children: "Automations" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("pre", { className: "ns-code", children: Xn || "Generate YAML to see a copy-ready action and any matching button handler here." })
        ] })
      ] }) })
    ] }),
    n === "templates" && /* @__PURE__ */ a.jsxs("section", { className: "ns-list", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "ns-card", children: [
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: qn ? "Edit template" : "Create template" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
          /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target." }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-form-grid", children: [
            /* @__PURE__ */ a.jsx(D, { label: "Template name", children: /* @__PURE__ */ a.jsx("input", { value: za, onChange: (s) => Zn(s.target.value), placeholder: "e.g. Front door alert" }) }),
            /* @__PURE__ */ a.jsx(D, { label: "Description", children: /* @__PURE__ */ a.jsx("input", { value: Ta, onChange: (s) => Jn(s.target.value), placeholder: "Optional reminder of when to use it" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-actions", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button", onClick: () => void Bf(), disabled: Qt !== null, children: Qt === "template" ? "Saving…" : qn ? "Update template" : "Save Template" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet", onClick: () => {
              er(null), Zn(""), Jn("");
            }, children: "New template" })
          ] })
        ] })
      ] }),
      !b.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No templates saved yet. Build a notification in Compose, then save it here." }),
      /* @__PURE__ */ a.jsx("div", { className: "ns-template-grid", children: b.map((s) => {
        var f, y;
        return /* @__PURE__ */ a.jsx("article", { className: "ns-card ns-template-card", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body ns-template-card__body", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h3", { className: "ns-template-card__title", children: s.name }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-template-card__meta", children: s.description || "No description" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-chip-row", children: [
            s.draft.target_platform && /* @__PURE__ */ a.jsx("span", { className: Ku(s.draft.target_platform), children: vi(s.draft.target_platform) }),
            /* @__PURE__ */ a.jsx("span", { className: "ns-chip", children: Array.isArray((f = s.draft.payload.data) == null ? void 0 : f.actions) ? `${(y = s.draft.payload.data) == null ? void 0 : y.actions.length} button(s)` : "No buttons" })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-template-card__footer", children: [
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => {
              Zr(s.id), Bo(s.draft), r("compose");
            }, children: "Use" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => Hf(s), children: "Edit" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact ns-button--danger", onClick: () => void Vf(s), children: "Delete" })
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
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--tab ns-button--compact", onClick: () => void Uo(), disabled: _, children: _ ? "Loading…" : "Refresh" }),
            /* @__PURE__ */ a.jsx("button", { className: "ns-button ns-button--quiet ns-button--compact", onClick: () => void Pf(), disabled: _, children: "Clear logs" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsx("div", { className: "ns-log-filter", children: /* @__PURE__ */ a.jsx(D, { label: "Level", children: /* @__PURE__ */ a.jsxs("select", { value: L, onChange: (s) => R(s.target.value), children: [
          /* @__PURE__ */ a.jsx("option", { value: "", children: "All levels" }),
          /* @__PURE__ */ a.jsx("option", { value: "error", children: "Errors" }),
          /* @__PURE__ */ a.jsx("option", { value: "warning", children: "Warnings" }),
          /* @__PURE__ */ a.jsx("option", { value: "info", children: "Information" })
        ] }) }) }) })
      ] }),
      _ && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Loading Notify Studio application logs…" }),
      !_ && !$o.length && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries." }),
      !_ && $o.length > 0 && /* @__PURE__ */ a.jsx("section", { className: "ns-log-list", children: $o.map((s, f) => /* @__PURE__ */ a.jsxs("article", { className: `ns-card ns-log-entry ns-log-entry--${s.level}`, children: [
        /* @__PURE__ */ a.jsxs("div", { className: "ns-log-entry__head", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("span", { className: zh(s.level), children: Th(s.level) }),
            /* @__PURE__ */ a.jsx("strong", { children: s.message })
          ] }),
          /* @__PURE__ */ a.jsx("time", { dateTime: s.timestamp, children: yi(s.timestamp) })
        ] }),
        s.entity_id && /* @__PURE__ */ a.jsx("code", { className: "ns-log-entry__entity", children: s.entity_id }),
        s.detail && /* @__PURE__ */ a.jsx("p", { className: "ns-log-entry__detail", children: s.detail }),
        /* @__PURE__ */ a.jsx("span", { className: "ns-log-entry__event", children: s.event.replaceAll("_", " ") })
      ] }, `${s.timestamp}:${s.event}:${f}`)) })
    ] }),
    n === "audit" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      Kf(),
      Xf(),
      /* @__PURE__ */ a.jsxs("section", { className: "notify-studio__notifications-layout", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "notify-studio__notifications-main", children: [
          /* @__PURE__ */ a.jsxs("section", { className: "ns-card", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "ns-card__head", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Notifications" }),
                /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations." })
              ] }),
              /* @__PURE__ */ a.jsxs("div", { className: "ns-card__actions", children: [
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--quiet", onClick: () => Gn(!0), children: "Manage groups" }),
                /* @__PURE__ */ a.jsx("button", { type: "button", className: "ns-button ns-button--tab", onClick: () => void fl(), disabled: kt, children: kt ? "Scanning…" : "Scan now" })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-card__body", children: /* @__PURE__ */ a.jsxs("div", { className: "ns-filter-grid", children: [
              /* @__PURE__ */ a.jsx(D, { label: "Type", children: /* @__PURE__ */ a.jsxs("select", { value: Gr, onChange: (s) => ff(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All sources" }),
                /* @__PURE__ */ a.jsx("option", { value: "automation", children: "Automation" }),
                /* @__PURE__ */ a.jsx("option", { value: "script", children: "Script" })
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant category", children: /* @__PURE__ */ a.jsxs("select", { value: Yr, onChange: (s) => pf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All categories" }),
                Fo.categories.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Home Assistant label", children: /* @__PURE__ */ a.jsxs("select", { value: Kr, onChange: (s) => mf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All labels" }),
                Fo.labels.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify device", children: /* @__PURE__ */ a.jsxs("select", { value: Xr, onChange: (s) => hf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All notify devices" }),
                Fo.devices.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Notify Studio group", children: /* @__PURE__ */ a.jsxs("select", { value: Ie, onChange: (s) => Wt(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "All custom groups" }),
                I.map((s) => /* @__PURE__ */ a.jsxs("option", { value: s.id, children: [
                  s.kind === "category" ? "Category" : "Area",
                  ": ",
                  s.name
                ] }, s.id))
              ] }) }),
              /* @__PURE__ */ a.jsx(D, { label: "Group by", children: /* @__PURE__ */ a.jsxs("select", { value: dn, onChange: (s) => gf(s.target.value), children: [
                /* @__PURE__ */ a.jsx("option", { value: "none", children: "None" }),
                /* @__PURE__ */ a.jsx("option", { value: "source", children: "Automation / Script" }),
                /* @__PURE__ */ a.jsx("option", { value: "category", children: "Home Assistant category" }),
                /* @__PURE__ */ a.jsx("option", { value: "label", children: "Home Assistant label" }),
                /* @__PURE__ */ a.jsx("option", { value: "device", children: "Notify device" })
              ] }) })
            ] }) })
          ] }),
          kt && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "Scanning merged Home Assistant YAML…" }),
          !kt && (Pe == null ? void 0 : Pe.length) === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification calls were found in the merged YAML configuration." }),
          !kt && Pe && Ao.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-empty", children: "No notification sources match the selected filters." }),
          !kt && Pe && xf.map((s) => /* @__PURE__ */ a.jsxs("section", { className: "ns-audit-group", children: [
            /* @__PURE__ */ a.jsx("h3", { children: s.title }),
            /* @__PURE__ */ a.jsx("div", { className: "ns-source-grid ns-source-grid--audit", children: s.items.map(Yf) })
          ] }, s.title))
        ] }),
        /* @__PURE__ */ a.jsx("aside", { className: "notify-studio__notifications-activity", children: /* @__PURE__ */ a.jsxs("section", { className: "ns-card ns-recent-card", children: [
          /* @__PURE__ */ a.jsx("div", { className: "ns-card__head", children: /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("h2", { className: "ns-card__title", children: "Recently triggered push activity" }),
            /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Notification-related automations and scripts." })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "ns-card__body", children: [
            V && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "Loading recent push automations and scripts…" }),
            !V && !C.length && /* @__PURE__ */ a.jsx("p", { className: "ns-muted", children: "No triggered push automation or script has been found yet." }),
            !V && C.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "ns-recent-list", children: C.map((s) => /* @__PURE__ */ a.jsxs("article", { className: "ns-recent-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "ns-recent-item__head", children: [
                /* @__PURE__ */ a.jsx("strong", { children: s.name }),
                /* @__PURE__ */ a.jsx("span", { className: `ns-badge ns-badge--${s.kind}`, children: s.kind })
              ] }),
              /* @__PURE__ */ a.jsxs("span", { children: [
                "Triggered ",
                yi(s.last_triggered)
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
class Rh extends HTMLElement {
  constructor() {
    super(...arguments);
    Vo(this, "root");
    Vo(this, "currentHass");
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
    this.root || (this.root = cf(this)), this.root.render(/* @__PURE__ */ a.jsx(Lh, { hass: this.currentHass }));
  }
}
customElements.get("notify-studio-panel") || customElements.define("notify-studio-panel", Rh);
