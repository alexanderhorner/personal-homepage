// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"c5fvK":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9bde45167387dd85";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"e0DoP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounds", ()=>_core.bounds
);
parcelHelpers.export(exports, "QUANTIZE_DEFAULTS", ()=>Rt
);
parcelHelpers.export(exports, "TEXTURE_RESIZE_DEFAULTS", ()=>Yt
);
parcelHelpers.export(exports, "TextureResizeFilter", ()=>Jt
);
parcelHelpers.export(exports, "center", ()=>F
);
parcelHelpers.export(exports, "colorspace", ()=>G
);
parcelHelpers.export(exports, "dedup", ()=>B
);
parcelHelpers.export(exports, "dequantize", ()=>W
);
parcelHelpers.export(exports, "inspect", ()=>X
);
parcelHelpers.export(exports, "instance", ()=>rt
);
parcelHelpers.export(exports, "metalRough", ()=>ct
);
parcelHelpers.export(exports, "normals", ()=>pt
);
parcelHelpers.export(exports, "partition", ()=>yt
);
parcelHelpers.export(exports, "prune", ()=>ht
);
parcelHelpers.export(exports, "quantize", ()=>Nt
);
parcelHelpers.export(exports, "reorder", ()=>Ut
);
parcelHelpers.export(exports, "resample", ()=>Ft
);
parcelHelpers.export(exports, "sequence", ()=>Wt
);
parcelHelpers.export(exports, "tangents", ()=>jt
);
parcelHelpers.export(exports, "textureResize", ()=>Qt
);
parcelHelpers.export(exports, "unweld", ()=>gt
);
parcelHelpers.export(exports, "weld", ()=>ee
);
var _core = require("@gltf-transform/core");
var _ndarrayPixels = require("ndarray-pixels");
var _extensions = require("@gltf-transform/extensions");
var _vec3 = require("gl-matrix/vec3");
var _mat4 = require("gl-matrix/mat4");
var _ndarray = require("ndarray");
var _ndarrayDefault = parcelHelpers.interopDefault(_ndarray);
var _ndarrayLanczos = require("ndarray-lanczos");
function L() {
    return (L = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var n = arguments[e];
            for(var s in n)Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
    }).apply(this, arguments);
}
function $(t, e) {
    return Object.defineProperty(e, "name", {
        value: t
    }), e;
}
async function v(t, e, n) {
    if (!t) return null;
    const s = t.getImage();
    if (!s) return null;
    const r = await _ndarrayPixels.getPixels(s, t.getMimeType());
    for(let t1 = 0; t1 < r.shape[0]; ++t1)for(let e1 = 0; e1 < r.shape[1]; ++e1)n(r, t1, e1);
    const o = await _ndarrayPixels.savePixels(r, "image/png");
    return e.setImage(o).setMimeType("image/png");
}
class _ {
    constructor(){
        this._map = new Map;
    }
    get size() {
        return this._map.size;
    }
    has(t) {
        return this._map.has(t);
    }
    add(t, e) {
        let n = this._map.get(t);
        return n || (n = new Set, this._map.set(t, n)), n.add(e), this;
    }
    get(t) {
        return this._map.get(t) || new Set;
    }
    keys() {
        return this._map.keys();
    }
}
const k = {
    pivot: "center"
};
function F(t2 = k) {
    const n = L({
    }, k, t2);
    return $("center", (t3)=>{
        const s = t3.getLogger(), r = t3.getRoot(), o = r.listAnimations().length > 0 || r.listSkins().length > 0;
        t3.getRoot().listScenes().forEach((i, a)=>{
            let c;
            if (s.debug(`center: Scene ${a + 1} / ${r.listScenes().length}.`), "string" == typeof n.pivot) {
                const t = _core.bounds(i);
                c = [
                    (t.max[0] - t.min[0]) / 2 + t.min[0],
                    (t.max[1] - t.min[1]) / 2 + t.min[1],
                    (t.max[2] - t.min[2]) / 2 + t.min[2]
                ], "above" === n.pivot && (c[1] = t.max[1]), "below" === n.pivot && (c[1] = t.min[1]);
            } else c = n.pivot;
            s.debug(`center: Pivot "${c.join(", ")}".`);
            const l = [
                -1 * c[0],
                -1 * c[1],
                -1 * c[2]
            ];
            if (o) {
                s.debug("center: Model contains animation or skin. Adding a wrapper node.");
                const e = t3.createNode("Pivot").setTranslation(l);
                i.listChildren().forEach((t)=>e.addChild(t)
                ), i.addChild(e);
            } else s.debug("center: Skipping wrapper, offsetting all root nodes."), i.listChildren().forEach((t)=>{
                const e = t.getTranslation();
                t.setTranslation([
                    e[0] + l[0],
                    e[1] + l[1],
                    e[2] + l[2]
                ]);
            });
        }), s.debug("center: Complete.");
    });
}
const q = "colorspace";
function G(t4) {
    return $(q, (e2)=>{
        const n1 = e2.getLogger();
        if ("linear" === t4.inputEncoding) return void n1.info(`${q}: Vertex colors already linear. Skipping conversion.`);
        if ("sRGB" !== t4.inputEncoding) return void n1.error(`${q}: Unknown input encoding "${t4.inputEncoding}" – should be "sRGB" or "linear". Skipping conversion.`);
        const s = new Set;
        function r(t) {
            return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
        }
        function o1(t) {
            const e = [
                0,
                0,
                0
            ];
            let n;
            for(let o = 0; n = t.getAttribute(`COLOR_${o}`); o++)if (!s.has(n)) {
                for(let t = 0; t < n.getCount(); t++)n.getElement(t, e), e[0] = r(e[0]), e[1] = r(e[1]), e[2] = r(e[2]), n.setElement(t, e);
                s.add(n);
            }
        }
        e2.getRoot().listMeshes().forEach((t)=>t.listPrimitives().forEach(o1)
        ), n1.debug(`${q}: Complete.`);
    });
}
const U = {
    propertyTypes: [
        _core.PropertyType.ACCESSOR,
        _core.PropertyType.MESH,
        _core.PropertyType.TEXTURE,
        _core.PropertyType.MATERIAL
    ]
}, B = function(t6 = U) {
    const e5 = L({
    }, U, t6), o2 = new Set(e5.propertyTypes);
    for (const t5 of e5.propertyTypes)if (!U.propertyTypes.includes(t5)) throw new Error(`dedup: Unsupported deduplication on type "${t5}".`);
    return $("dedup", (t9)=>{
        const e6 = t9.getLogger();
        o2.has(_core.PropertyType.ACCESSOR) && (function(t10, e7) {
            const n2 = new Set, r1 = new Set, o3 = new Set, i1 = new Set, a = e7.getRoot().listMeshes();
            a.forEach((t11)=>{
                t11.listPrimitives().forEach((t12)=>{
                    t12.listAttributes().forEach((t)=>r1.add(t)
                    );
                    const e = t12.getIndices();
                    e && n2.add(e);
                });
            });
            for (const t7 of e7.getRoot().listAnimations())for (const e3 of t7.listSamplers()){
                const t = e3.getInput(), n = e3.getOutput();
                t && o3.add(t), n && i1.add(n);
            }
            function c(t) {
                const e = new Map;
                for(let n = 0; n < t.length; n++){
                    const r = t[n], o = _core.BufferUtils.toView(r.getArray());
                    if (!e.has(r)) for(let n = 0; n < t.length; n++){
                        const i = t[n];
                        r !== i && (e.has(i) || r.getType() === i.getType() && r.getComponentType() === i.getComponentType() && r.getCount() === i.getCount() && r.getNormalized() === i.getNormalized() && _core.BufferUtils.equals(o, _core.BufferUtils.toView(i.getArray())) && e.set(i, r));
                    }
                }
                return e;
            }
            const l = c(Array.from(n2));
            t10.debug(`dedup: Found ${l.size} duplicates among ${n2.size} indices.`);
            const g = c(Array.from(r1));
            t10.debug(`dedup: Found ${g.size} duplicates among ${r1.size} attributes.`);
            const u = c(Array.from(o3)), f = c(Array.from(i1));
            t10.debug(`dedup: Found ${u.size + f.size} duplicates among ${o3.size + i1.size} animation accessors.`), a.forEach((t13)=>{
                t13.listPrimitives().forEach((t)=>{
                    t.listAttributes().forEach((e)=>{
                        g.has(e) && t.swap(e, g.get(e));
                    });
                    const e8 = t.getIndices();
                    e8 && l.has(e8) && t.swap(e8, l.get(e8));
                });
            }), Array.from(l.keys()).forEach((t)=>t.dispose()
            ), Array.from(g.keys()).forEach((t)=>t.dispose()
            );
            for (const t8 of e7.getRoot().listAnimations())for (const e4 of t8.listSamplers()){
                const t = e4.getInput(), n = e4.getOutput();
                t && u.has(t) && e4.swap(t, u.get(t)), n && f.has(n) && e4.swap(n, f.get(n));
            }
            Array.from(u.keys()).forEach((t)=>t.dispose()
            ), Array.from(f.keys()).forEach((t)=>t.dispose()
            );
        })(e6, t9), o2.has(_core.PropertyType.MESH) && (function(t15, e9) {
            const s2 = e9.getRoot(), r = new Map;
            s2.listAccessors().forEach((t, e)=>r.set(t, e)
            ), s2.listMaterials().forEach((t, e)=>r.set(t, e)
            );
            const o = s2.listMeshes().length, i = new Map;
            for (const t14 of s2.listMeshes()){
                const e = [];
                for (const n of t14.listPrimitives())e.push(V(n, r));
                const s1 = e.join(";");
                if (i.has(s1)) {
                    const e = i.get(s1);
                    t14.listParents().forEach((s)=>{
                        s.propertyType !== _core.PropertyType.ROOT && s.swap(t14, e);
                    }), t14.dispose();
                } else i.set(s1, t14);
            }
            t15.debug(`dedup: Found ${o - i.size} duplicates among ${o} meshes.`);
        })(e6, t9), o2.has(_core.PropertyType.TEXTURE) && (function(t17, e10) {
            const n3 = e10.getRoot(), o = n3.listTextures(), i = new Map;
            for(let t16 = 0; t16 < o.length; t16++){
                const e = o[t16], n = e.getImage();
                if (!i.has(e)) for(let t = 0; t < o.length; t++){
                    const r = o[t], a = r.getImage();
                    if (e === r) continue;
                    if (i.has(r)) continue;
                    if (e.getMimeType() !== r.getMimeType()) continue;
                    const c = e.getSize(), l = r.getSize();
                    c && l && c[0] === l[0] && c[1] === l[1] && n && a && _core.BufferUtils.equals(n, a) && i.set(r, e);
                }
            }
            t17.debug(`dedup: Found ${i.size} duplicates among ${n3.listTextures().length} textures.`), Array.from(i.entries()).forEach(([t, e])=>{
                t.listParents().forEach((n)=>{
                    n instanceof _core.Root || n.swap(t, e);
                }), t.dispose();
            });
        })(e6, t9), o2.has(_core.PropertyType.MATERIAL) && (function(t19, e11) {
            const n4 = e11.getRoot(), s = n4.listMaterials(), o = new Map;
            for(let t18 = 0; t18 < s.length; t18++){
                const e = s[t18];
                if (!o.has(e)) for(let t = 0; t < s.length; t++){
                    const n = s[t];
                    e !== n && (o.has(n) || e.equals(n) && o.set(n, e));
                }
            }
            t19.debug(`dedup: Found ${o.size} duplicates among ${n4.listMaterials().length} materials.`), Array.from(o.entries()).forEach(([t, e])=>{
                t.listParents().forEach((n)=>{
                    n instanceof _core.Root || n.swap(t, e);
                }), t.dispose();
            });
        })(e6, t9), e6.debug("dedup: Complete.");
    });
};
function V(e, n) {
    const s = [];
    for (const t of e.listSemantics()){
        const r = e.getAttribute(t);
        s.push(t + ":" + n.get(r));
    }
    if (e instanceof _core.Primitive) {
        const t = e.getIndices();
        t && s.push("indices:" + n.get(t));
        const r = e.getMaterial();
        r && s.push("material:" + n.get(r)), s.push("mode:" + e.getMode());
        for (const t20 of e.listTargets())s.push("target:" + V(t20, n));
    }
    return s.join(",");
}
const H = {
    pattern: /^((?!JOINTS_).)*$/
};
function W(t22 = H) {
    const e = L({
    }, H, t22);
    return $("dequantize", (t)=>{
        const n = t.getLogger();
        for (const n5 of t.getRoot().listMeshes())for (const t21 of n5.listPrimitives())D(t21, e);
        t.createExtension(_extensions.MeshQuantization).dispose(), n.debug("dequantize: Complete.");
    });
}
function D(t, e) {
    for (const n of t.listSemantics())j(n, t.getAttribute(n), e);
    for (const n6 of t.listTargets())for (const t23 of n6.listSemantics())j(t23, n6.getAttribute(t23), e);
}
function j(t, e, n) {
    if (!e.getArray()) return;
    if (!n.pattern.test(t)) return;
    if (e.getComponentSize() >= 4) return;
    const s = e.getArray(), r = new Float32Array(s.length);
    for(let t24 = 0, n7 = e.getCount(), o = []; t24 < n7; t24++)o = e.getElement(t24, o), e.setArray(r).setElement(t24, o).setArray(s);
    e.setArray(r).setNormalized(!1);
}
function X(t) {
    return {
        scenes: K(t),
        meshes: Z(t),
        materials: J(t),
        textures: Y(t),
        animations: Q(t)
    };
}
function K(t25) {
    return {
        properties: t25.getRoot().listScenes().map((t)=>{
            const n = t.listChildren()[0], s = _core.bounds(t);
            return {
                name: t.getName(),
                rootName: n ? n.getName() : "",
                bboxMin: et(s.min),
                bboxMax: et(s.max)
            };
        })
    };
}
function Z(e12) {
    return {
        properties: e12.getRoot().listMeshes().map((e13)=>{
            const n8 = e13.listParents().filter((t)=>"Root" !== t.propertyType
            ).length;
            let s3 = 0, r = 0;
            const o = new Set, i = new Set, a = new Set;
            e13.listPrimitives().forEach((e14)=>{
                for (const t27 of e14.listSemantics()){
                    const n = e14.getAttribute(t27);
                    o.add(t27 + ":" + nt(n.getArray())), a.add(n);
                }
                for (const t26 of e14.listTargets())t26.listAttributes().forEach((t)=>a.add(t)
                );
                const n9 = e14.getIndices();
                n9 && (i.add(nt(n9.getArray())), a.add(n9)), r += e14.listAttributes()[0].getCount(), s3 += (function(e) {
                    const n = e.getIndices(), s = e.getAttribute("POSITION");
                    switch(e.getMode()){
                        case _core.Primitive.Mode.POINTS:
                            return s.getCount();
                        case _core.Primitive.Mode.LINES:
                            return n ? n.getCount() / 2 : s.getCount() / 2;
                        case _core.Primitive.Mode.LINE_LOOP:
                            return s.getCount();
                        case _core.Primitive.Mode.LINE_STRIP:
                            return s.getCount() - 1;
                        case _core.Primitive.Mode.TRIANGLES:
                            return n ? n.getCount() / 3 : s.getCount() / 3;
                        case _core.Primitive.Mode.TRIANGLE_STRIP:
                        case _core.Primitive.Mode.TRIANGLE_FAN:
                            return s.getCount() - 2;
                        default:
                            throw new Error("Unexpected mode: " + e.getMode());
                    }
                })(e14);
            });
            let c = 0;
            Array.from(a).forEach((t)=>c += t.getArray().byteLength
            );
            const l = e13.listPrimitives().map((t)=>tt[t.getMode()]
            );
            return {
                name: e13.getName(),
                mode: Array.from(new Set(l)),
                primitives: e13.listPrimitives().length,
                glPrimitives: s3,
                vertices: r,
                indices: Array.from(i).sort(),
                attributes: Array.from(o).sort(),
                instances: n8,
                size: c
            };
        })
    };
}
function J(t28) {
    return {
        properties: t28.getRoot().listMaterials().map((e)=>{
            const n10 = e.listParents().filter((t)=>"Root" !== t.propertyType
            ).length, s = new Set(e.listExtensions()), r2 = t28.getGraph().listEdges().filter((t)=>{
                const n = t.getChild(), r = t.getParent();
                return n instanceof _core.Texture && r === e || !!(n instanceof _core.Texture && r instanceof _core.ExtensionProperty && s.has(r));
            }).map((t)=>t.getName()
            );
            return {
                name: e.getName(),
                instances: n10,
                textures: r2,
                alphaMode: e.getAlphaMode(),
                doubleSided: e.getDoubleSided()
            };
        })
    };
}
function Y(t29) {
    return {
        properties: t29.getRoot().listTextures().map((e)=>{
            const n = e.listParents().filter((t)=>"Root" !== t.propertyType
            ).length, s = t29.getGraph().listParentEdges(e).map((t)=>t.getName()
            ).filter((t)=>"texture" !== t
            ), r = _core.ImageUtils.getSize(e.getImage(), e.getMimeType());
            return {
                name: e.getName(),
                uri: e.getURI(),
                slots: Array.from(new Set(s)),
                instances: n,
                mimeType: e.getMimeType(),
                resolution: r ? r.join("x") : "",
                size: e.getImage().byteLength,
                gpuSize: _core.ImageUtils.getMemSize(e.getImage(), e.getMimeType())
            };
        })
    };
}
function Q(t30) {
    return {
        properties: t30.getRoot().listAnimations().map((t31)=>{
            let e15 = Infinity, n11 = -Infinity;
            t31.listSamplers().forEach((t)=>{
                const s = t.getInput();
                s && (e15 = Math.min(e15, s.getMin([])[0]), n11 = Math.max(n11, s.getMax([])[0]));
            });
            let s4 = 0, r = 0;
            const o = new Set;
            return t31.listSamplers().forEach((t)=>{
                const e = t.getInput(), n = t.getOutput();
                e && (r += e.getCount(), o.add(e), n && o.add(n));
            }), Array.from(o).forEach((t)=>{
                s4 += t.getArray().byteLength;
            }), {
                name: t31.getName(),
                channels: t31.listChannels().length,
                samplers: t31.listSamplers().length,
                duration: Math.round(1000 * (n11 - e15)) / 1000,
                keyframes: r,
                size: s4
            };
        })
    };
}
const tt = [
    "POINTS",
    "LINES",
    "LINE_LOOP",
    "LINE_STRIP",
    "TRIANGLES",
    "TRIANGLE_STRIP",
    "TRIANGLE_FAN"
];
function et(t) {
    for(let e = 0; e < t.length; e++)t[e].toFixed && (t[e] = Number(t[e].toFixed(5)));
    return t;
}
function nt(t) {
    return t.constructor.name.replace("Array", "").toLowerCase();
}
const st = {
};
function rt(t32 = st) {
    return L({
    }, st, t32), $("instance", (t33)=>{
        const e16 = t33.getLogger(), n = t33.getRoot(), s = t33.createExtension(_extensions.MeshGPUInstancing);
        if (n.listAnimations().length) throw new Error("instance: Instancing is not currently supported for animated models.");
        let r = 0, o = 0;
        for (const i of n.listScenes()){
            const n = new Map;
            i.traverse((t)=>{
                const e = t.getMesh();
                e && n.set(e, (n.get(e) || new Set).add(t));
            });
            const a = [];
            for (const l of Array.from(n.keys())){
                const g = Array.from(n.get(l));
                if (g.length < 2) continue;
                if (g.some((t)=>t.getSkin()
                )) continue;
                const u = it(t33, s, l, g.length), f = u.getAttribute("TRANSLATION"), p = u.getAttribute("ROTATION"), m = u.getAttribute("SCALE"), d = t33.createNode().setMesh(l).setExtension("EXT_mesh_gpu_instancing", u);
                i.addChild(d);
                let h = !1, A = !1, y = !1;
                for(let t34 = 0; t34 < g.length; t34++){
                    let e, n, s;
                    const r = g[t34];
                    f.setElement(t34, e = r.getWorldTranslation()), p.setElement(t34, n = r.getWorldRotation()), m.setElement(t34, s = r.getWorldScale()), _core.MathUtils.eq(e, [
                        0,
                        0,
                        0
                    ]) || (h = !0), _core.MathUtils.eq(n, [
                        0,
                        0,
                        0,
                        1
                    ]) || (A = !0), _core.MathUtils.eq(s, [
                        1,
                        1,
                        1
                    ]) || (y = !0), r.setMesh(null), a.push(r);
                }
                h || f.dispose(), A || p.dispose(), y || m.dispose(), ot(a, e16), r++, o += g.length;
            }
        }
        r > 0 ? e16.info(`instance: Created ${r} batches, with ${o} total instances.`) : (e16.info("instance: No meshes with multiple parent nodes were found."), s.dispose()), e16.debug("instance: Complete.");
    });
}
function ot(t, e) {
    let n, s = 0;
    for(; n = t.pop();){
        if (n.listChildren().length || n.getCamera() || n.getMesh() || n.getSkin() || n.listExtensions().length) continue;
        const e = n.getParent();
        e instanceof _core.Node && t.push(e), n.dispose(), s++;
    }
    e.debug(`instance: Removed ${s} unused nodes.`);
}
function it(t, e, n, s) {
    const r = n.listPrimitives()[0].getAttribute("POSITION").getBuffer(), o = t.createAccessor().setType("VEC3").setArray(new Float32Array(3 * s)).setBuffer(r), i = t.createAccessor().setType("VEC4").setArray(new Float32Array(4 * s)).setBuffer(r), a = t.createAccessor().setType("VEC3").setArray(new Float32Array(3 * s)).setBuffer(r);
    return e.createInstancedMesh().setAttribute("TRANSLATION", o).setAttribute("ROTATION", i).setAttribute("SCALE", a);
}
const at = {
};
function ct(t38 = at) {
    return L({
    }, at, t38), $("metalRough", async (t39)=>{
        const e18 = t39.getLogger();
        if (!t39.getRoot().listExtensionsUsed().map((t)=>t.extensionName
        ).includes("KHR_materials_pbrSpecularGlossiness")) return void e18.warn("metalRough: KHR_materials_pbrSpecularGlossiness not found on document.");
        const n14 = t39.createExtension(_extensions.MaterialsIOR), s = t39.createExtension(_extensions.MaterialsSpecular), r = t39.createExtension(_extensions.MaterialsPBRSpecularGlossiness), o = new Set;
        for (const e17 of t39.getRoot().listMaterials()){
            const r = e17.getExtension("KHR_materials_pbrSpecularGlossiness");
            if (!r) continue;
            const i = s.createSpecular().setSpecularFactor(1).setSpecularColorFactor(r.getSpecularFactor());
            o.add(r.getSpecularGlossinessTexture()), o.add(e17.getBaseColorTexture()), o.add(e17.getMetallicRoughnessTexture()), e17.setBaseColorFactor(r.getDiffuseFactor()).setMetallicFactor(0).setRoughnessFactor(1).setExtension("KHR_materials_ior", n14.createIOR().setIOR(1000)).setExtension("KHR_materials_specular", i);
            const a = r.getDiffuseTexture();
            a && (e17.setBaseColorTexture(a), e17.getBaseColorTextureInfo().copy(r.getDiffuseTextureInfo()));
            const c = r.getSpecularGlossinessTexture();
            if (c) {
                const n12 = r.getSpecularGlossinessTextureInfo(), s5 = t39.createTexture();
                await v(c, s5, (t, e, n)=>{
                    t.set(e, n, 3, 255);
                }), i.setSpecularTexture(s5), i.setSpecularColorTexture(s5), i.getSpecularTextureInfo().copy(n12), i.getSpecularColorTextureInfo().copy(n12);
                const o = r.getGlossinessFactor(), a = t39.createTexture();
                await v(c, a, (t, e, n)=>{
                    const s = 255 - Math.round(t.get(e, n, 3) * o);
                    t.set(e, n, 0, 0), t.set(e, n, 1, s), t.set(e, n, 2, 0), t.set(e, n, 3, 255);
                }), e17.setMetallicRoughnessTexture(a), e17.getMetallicRoughnessTextureInfo().copy(n12);
            } else i.setSpecularColorFactor(r.getSpecularFactor()), e17.setRoughnessFactor(1 - r.getGlossinessFactor());
            e17.setExtension("KHR_materials_pbrSpecularGlossiness", null);
        }
        r.dispose();
        for (const t37 of o)t37 && 1 === t37.listParents().length && t37.dispose();
        e18.debug("metalRough: Complete.");
    });
}
const lt = {
};
function gt(t41 = lt) {
    return L({
    }, lt, t41), $("unweld", (t)=>{
        const e = t.getLogger(), n = new Map;
        for (const s of t.getRoot().listMeshes())for (const t40 of s.listPrimitives()){
            const s = t40.getIndices();
            if (s) {
                for (const r of t40.listAttributes())t40.swap(r, ut(r, s, e, n)), 1 === r.listParents().length && r.dispose();
                for (const r3 of t40.listTargets())for (const t of r3.listAttributes())r3.swap(t, ut(t, s, e, n)), 1 === t.listParents().length && t.dispose();
                t40.setIndices(null), 1 === s.listParents().length && s.dispose();
            }
        }
        e.debug("unweld: Complete.");
    });
}
function ut(t, e, n, s) {
    if (s.has(t) && s.get(t).has(e)) return n.debug(`unweld: Cache hit for reused attribute, "${t.getName()}".`), s.get(t).get(e);
    const r = t.clone(), o = t.getArray().constructor;
    r.setArray(new o(e.getCount() * t.getElementSize()));
    const i = [];
    for(let n15 = 0; n15 < e.getCount(); n15++)r.setElement(n15, t.getElement(e.getScalar(n15), i));
    return s.has(t) || s.set(t, new Map), s.get(t).set(e, r), r;
}
const ft = {
    overwrite: !1
};
function pt(t42 = ft) {
    const e19 = L({
    }, ft, t42);
    return $("normals", async (t)=>{
        const n = t.getLogger();
        let s = 0;
        await t.transform(gt());
        for (const r of t.getRoot().listMeshes())for (const o of r.listPrimitives()){
            const r = o.getAttribute("POSITION");
            let i = o.getAttribute("NORMAL");
            if (e19.overwrite && i) i.dispose();
            else if (i) {
                n.debug("normals: Skipping primitive: NORMAL found.");
                continue;
            }
            i = t.createAccessor().setArray(new Float32Array(3 * r.getCount())).setType("VEC3");
            const a = [
                0,
                0,
                0
            ], c = [
                0,
                0,
                0
            ], l = [
                0,
                0,
                0
            ];
            for(let t43 = 0; t43 < r.getCount(); t43 += 3){
                r.getElement(t43 + 0, a), r.getElement(t43 + 1, c), r.getElement(t43 + 2, l);
                const e = mt(a, c, l);
                i.setElement(t43 + 0, e), i.setElement(t43 + 1, e), i.setElement(t43 + 2, e);
            }
            o.setAttribute("NORMAL", i), s++;
        }
        s ? n.debug("normals: Complete.") : n.warn("normals: No qualifying primitives found. See debug output.");
    });
}
function mt(t, e, n) {
    const s = [
        e[0] - t[0],
        e[1] - t[1],
        e[2] - t[2]
    ], r = [
        n[0] - t[0],
        n[1] - t[1],
        n[2] - t[2]
    ];
    return _vec3.normalize([
        0,
        0,
        0
    ], [
        s[1] * r[2] - s[2] * r[1],
        s[2] * r[0] - s[0] * r[2],
        s[0] * r[1] - s[1] * r[0]
    ]);
}
const dt = {
    propertyTypes: [
        _core.PropertyType.NODE,
        _core.PropertyType.SKIN,
        _core.PropertyType.MESH,
        _core.PropertyType.CAMERA,
        _core.PropertyType.PRIMITIVE,
        _core.PropertyType.PRIMITIVE_TARGET,
        _core.PropertyType.ANIMATION,
        _core.PropertyType.MATERIAL,
        _core.PropertyType.TEXTURE,
        _core.PropertyType.ACCESSOR,
        _core.PropertyType.BUFFER
    ]
}, ht = function(t45 = dt) {
    const e20 = L({
    }, dt, t45).propertyTypes;
    return $("prune", (t47)=>{
        const s = t47.getLogger(), o = t47.getRoot(), i = t47.getGraph(), a = {
        };
        if (e20.includes(_core.PropertyType.NODE) && o.listNodes().forEach(c), e20.includes(_core.PropertyType.SKIN) && o.listSkins().forEach(c), e20.includes(_core.PropertyType.MESH) && o.listMeshes().forEach(c), e20.includes(_core.PropertyType.CAMERA) && o.listCameras().forEach(c), e20.includes(_core.PropertyType.PRIMITIVE) && l(i, _core.PropertyType.PRIMITIVE), e20.includes(_core.PropertyType.PRIMITIVE_TARGET) && l(i, _core.PropertyType.PRIMITIVE_TARGET), e20.includes(_core.PropertyType.ANIMATION)) for (const t44 of o.listAnimations()){
            for (const e of t44.listChannels())e.getTargetNode() || (e.dispose(), u(e));
            if (t44.listChannels().length) t44.listSamplers().forEach(c);
            else {
                const e = t44.listSamplers();
                c(t44), e.forEach(c);
            }
        }
        if (e20.includes(_core.PropertyType.MATERIAL) && o.listMaterials().forEach(c), e20.includes(_core.PropertyType.TEXTURE) && o.listTextures().forEach(c), e20.includes(_core.PropertyType.ACCESSOR) && o.listAccessors().forEach(c), e20.includes(_core.PropertyType.BUFFER) && o.listBuffers().forEach(c), Object.keys(a).length) {
            const t46 = Object.keys(a).map((t)=>`${t} (${a[t]})`
            ).join(", ");
            s.info(`prune: Removed types... ${t46}`);
        } else s.info("prune: No unused properties found.");
        function c(t48) {
            t48.listParents().filter((t)=>!(t instanceof _core.Root || t instanceof _core.AnimationChannel)
            ).length || (t48.dispose(), u(t48));
        }
        function l(t49, e) {
            t49.listEdges().map((t)=>t.getParent()
            ).filter((t)=>t.propertyType === e
            ).forEach(c);
        }
        function u(t) {
            a[t.propertyType] = a[t.propertyType] || 0, a[t.propertyType]++;
        }
        s.debug("prune: Complete.");
    });
}, At = {
    animations: !0,
    meshes: !0
}, yt = (t50 = At)=>{
    const e21 = L({
    }, At, t50);
    return $("partition", async (t51)=>{
        const s7 = t51.getLogger();
        !1 !== e21.meshes && (function(t52, e22, n) {
            const s = new Set(t52.getRoot().listBuffers().map((t)=>t.getURI()
            ));
            t52.getRoot().listMeshes().forEach((r, o)=>{
                if (Array.isArray(n.meshes) && !n.meshes.includes(r.getName())) return void e22.debug(`partition: Skipping mesh #${o} with name "${r.getName()}".`);
                e22.debug(`partition: Creating buffer for mesh "${r.getName()}".`);
                const i = t52.createBuffer(r.getName()).setURI(Et(r.getName() || "mesh", s));
                r.listPrimitives().forEach((t53)=>{
                    const e = t53.getIndices();
                    e && e.setBuffer(i), t53.listAttributes().forEach((t)=>t.setBuffer(i)
                    ), t53.listTargets().forEach((t54)=>{
                        t54.listAttributes().forEach((t)=>t.setBuffer(i)
                        );
                    });
                });
            });
        })(t51, s7, e21), !1 !== e21.animations && (function(t55, e23, n16) {
            const s = new Set(t55.getRoot().listBuffers().map((t)=>t.getURI()
            ));
            t55.getRoot().listAnimations().forEach((r, o)=>{
                if (Array.isArray(n16.animations) && !n16.animations.includes(r.getName())) return void e23.debug(`partition: Skipping animation #${o} with name "${r.getName()}".`);
                e23.debug(`partition: Creating buffer for animation "${r.getName()}".`);
                const i = t55.createBuffer(r.getName()).setURI(Et(r.getName() || "animation", s));
                r.listSamplers().forEach((t)=>{
                    const e = t.getInput(), n = t.getOutput();
                    e && e.setBuffer(i), n && n.setBuffer(i);
                });
            });
        })(t51, s7, e21), e21.meshes || e21.animations || s7.warn("partition: Select animations or meshes to create a partition."), await t51.transform(ht({
            propertyTypes: [
                _core.PropertyType.BUFFER
            ]
        })), s7.debug("partition: Complete.");
    });
};
function Et(t, e) {
    let n = `${t}.bin`, s = 1;
    for(; e.has(n);)n = `${t}_${s++}.bin`;
    return n;
}
const Tt = [
    Int8Array,
    Int16Array,
    Int32Array
], { TRANSLATION: St , ROTATION: It , SCALE: bt , WEIGHTS: wt  } = _core.AnimationChannel.TargetPath, Mt = [
    St,
    It,
    bt
], Rt = {
    pattern: /.*/,
    quantizationVolume: "mesh",
    quantizePosition: 14,
    quantizeNormal: 10,
    quantizeTexcoord: 12,
    quantizeColor: 8,
    quantizeWeight: 8,
    quantizeGeneric: 12
}, Nt = (t56 = Rt)=>{
    const e24 = L({
    }, Rt, t56);
    return $("quantize", async (t57)=>{
        const s = t57.getLogger(), r = t57.getRoot();
        let o;
        t57.createExtension(_extensions.MeshQuantization).setRequired(!0), "scene" === e24.quantizationVolume && (o = Ot(function(t) {
            const e = t[0];
            for (const n of t)_vec3.min(e.min, e.min, n.min), _vec3.max(e.max, e.max, n.max);
            return e;
        }(r.listMeshes().map($t))));
        for (const n17 of t57.getRoot().listMeshes()){
            "mesh" === e24.quantizationVolume && (o = Ot($t(n17))), o && e24.pattern.test("POSITION") && Pt(t57, n17, o);
            for (const s of n17.listPrimitives()){
                Ct(t57, s, o, e24);
                for (const n of s.listTargets())Ct(t57, n, o, e24);
            }
        }
        await t57.transform(ht({
            propertyTypes: [
                _core.PropertyType.ACCESSOR,
                _core.PropertyType.SKIN
            ]
        }), B({
            propertyTypes: [
                _core.PropertyType.ACCESSOR
            ]
        })), s.debug("quantize: Complete.");
    });
};
function Ct(e27, n20, s8, r4) {
    const o4 = e27.getLogger();
    for (const e25 of n20.listSemantics()){
        if (!r4.pattern.test(e25)) continue;
        const i = n20.getAttribute(e25), { bits: a , ctor: c  } = Lt(e25, i, o4, r4);
        if (!c) continue;
        if (a < 8 || a > 16) throw new Error("quantize: Requires bits = 8–16.");
        if (i.getComponentSize() <= a / 8) continue;
        const l = i.clone();
        if ("POSITION" === e25) {
            const e = s8.scale, r = [];
            n20 instanceof _core.Primitive ? _mat4.invert(r, _t(s8)) : _mat4.fromScaling(r, [
                1 / e,
                1 / e,
                1 / e
            ]);
            for(let t = 0, e26 = [
                0,
                0,
                0
            ], n18 = l.getCount(); t < n18; t++)l.getElement(t, e26), l.setElement(t, _vec3.transformMat4(e26, e26, r));
        }
        zt(l, c, a), n20.swap(i, l);
    }
    if (n20.getAttribute("WEIGHTS_0") && (function(t) {
        const e = t.getAttribute("POSITION").getCount(), n = [];
        for(let s = 0; s < e; s++){
            let e, r = 0, o = Infinity, i = -1, a = null, c = 0;
            for(; e = t.getAttribute("WEIGHTS_" + c++);){
                e.getElement(s, n);
                for(let t = 0; t < n.length; t++)r += n[t], n[t] > 0 && n[t] < o && (a = e, o = n[t], i = t);
            }
            a && 1 !== r && (a.getElement(s, n), n[i] += 1 - r, a.setElement(s, n));
        }
    })(n20), n20 instanceof _core.Primitive && n20.getIndices() && n20.listAttributes().length && n20.listAttributes()[0].getCount() < 65535) {
        const t = n20.getIndices();
        t.setArray(new Uint16Array(t.getArray()));
    }
}
function Ot(t) {
    const { min: e , max: n  } = t, s = Math.max((n[0] - e[0]) / 2, (n[1] - e[1]) / 2, (n[2] - e[2]) / 2);
    return {
        offset: [
            e[0] + (n[0] - e[0]) / 2,
            e[1] + (n[1] - e[1]) / 2,
            e[2] + (n[2] - e[2]) / 2
        ],
        scale: s
    };
}
function Pt(t58, e, n) {
    const s = _t(n);
    for (const r of e.listParents())if (r instanceof _core.Node) {
        const o = r.listParents().filter((t)=>t instanceof _core.AnimationChannel
        ), i = o.some((t)=>Mt.includes(t.getTargetPath())
        ), a = r.listChildren().length > 0;
        if (r.getSkin()) {
            r.setSkin(xt(r.getSkin(), n));
            continue;
        }
        let c;
        a || i ? (c = t58.createNode("").setMesh(e), r.addChild(c).setMesh(null), o.filter((t)=>t.getTargetPath() === wt
        ).forEach((t)=>t.setTargetNode(c)
        )) : c = r;
        const l = c.getMatrix();
        _mat4.multiply(l, l, s), c.setMatrix(l);
    }
}
function xt(t, e) {
    t = t.clone();
    const n = _t(e), s = t.getInverseBindMatrices().clone(), r = [];
    for(let t59 = 0, e28 = s.getCount(); t59 < e28; t59++)s.getElement(t59, r), _mat4.multiply(r, r, n), s.setElement(t59, r);
    return t.setInverseBindMatrices(s);
}
function zt(t, e, n) {
    const s = new e(t.getArray().length), r = Tt.includes(e) ? 1 : 0, o = n - r, i = 8 * e.BYTES_PER_ELEMENT - r, a = Math.pow(2, o) - 1, c = i - o, l = 2 * o - i;
    for(let e29 = 0, n21 = 0, r5 = []; e29 < t.getCount(); e29++){
        t.getElement(e29, r5);
        for(let t60 = 0; t60 < r5.length; t60++){
            let e = Math.round(Math.abs(r5[t60]) * a);
            e = e << c | e >> l, s[n21++] = e * Math.sign(r5[t60]);
        }
    }
    t.setArray(s).setNormalized(!0);
}
function Lt(t61, e, n, s) {
    const r = e.getMinNormalized([]), o = e.getMaxNormalized([]);
    let i, a;
    if ("POSITION" === t61) i = s.quantizePosition, a = i <= 8 ? Int8Array : Int16Array;
    else if ("NORMAL" === t61 || "TANGENT" === t61) i = s.quantizeNormal, a = i <= 8 ? Int8Array : Int16Array;
    else if (t61.startsWith("COLOR_")) i = s.quantizeColor, a = i <= 8 ? Uint8Array : Uint16Array;
    else if (t61.startsWith("TEXCOORD_")) {
        if (r.some((t)=>t < 0
        ) || o.some((t)=>t > 1
        )) return n.warn(`quantize: Skipping ${t61}; out of [0,1] range.`), {
            bits: -1
        };
        i = s.quantizeTexcoord, a = i <= 8 ? Uint8Array : Uint16Array;
    } else {
        if (t61.startsWith("JOINTS_")) return i = Math.max(...e.getMax([])) <= 255 ? 8 : 16, a = i <= 8 ? Uint8Array : Uint16Array, e.getComponentSize() > i / 8 && e.setArray(new a(e.getArray())), {
            bits: -1
        };
        if (t61.startsWith("WEIGHTS_")) {
            if (r.some((t)=>t < 0
            ) || o.some((t)=>t > 1
            )) return n.warn(`quantize: Skipping ${t61}; out of [0,1] range.`), {
                bits: -1
            };
            i = s.quantizeWeight, a = i <= 8 ? Uint8Array : Uint16Array;
        } else {
            if (!t61.startsWith("_")) throw new Error(`quantize: Unexpected semantic, "${t61}".`);
            if (r.some((t)=>t < -1
            ) || o.some((t)=>t > 1
            )) return n.warn(`quantize: Skipping ${t61}; out of [-1,1] range.`), {
                bits: -1
            };
            i = s.quantizeGeneric, a = a = r.some((t)=>t < 0
            ) ? i <= 8 ? Int8Array : Int16Array : i <= 8 ? Uint8Array : Uint16Array;
        }
    }
    return {
        bits: i,
        ctor: a
    };
}
function $t(t) {
    const e = [], n = [];
    for (const s of t.listPrimitives()){
        const t = s.getAttribute("POSITION");
        t && e.push(t);
        for (const t62 of s.listTargets()){
            const e = t62.getAttribute("POSITION");
            e && n.push(e);
        }
    }
    if (0 === e.length) throw new Error('quantize: Missing "POSITION" attribute.');
    const s9 = vt(e, 3);
    if (n.length > 0) {
        const { min: t , max: e  } = vt(n, 3);
        _vec3.min(s9.min, s9.min, _vec3.min(t, _vec3.scale(t, t, 2), [
            0,
            0,
            0
        ])), _vec3.max(s9.max, s9.max, _vec3.max(e, _vec3.scale(e, e, 2), [
            0,
            0,
            0
        ]));
    }
    return s9;
}
function vt(t, e) {
    const n = new Array(e).fill(Infinity), s = new Array(e).fill(-Infinity), r = [], o = [];
    for (const i of t){
        i.getMinNormalized(r), i.getMaxNormalized(o);
        for(let t = 0; t < e; t++)n[t] = Math.min(n[t], r[t]), s[t] = Math.max(s[t], o[t]);
    }
    return {
        min: n,
        max: s
    };
}
function _t(t) {
    return _mat4.fromRotationTranslationScale([], [
        0,
        0,
        0,
        1
    ], t.offset, [
        t.scale,
        t.scale,
        t.scale
    ]);
}
const kt = {
    tolerance: 0.0001
}, Ft = (t64 = kt)=>{
    const e30 = L({
    }, kt, t64);
    return $("resample", (t65, n)=>{
        const s = new Set, o = t65.getRoot().listAccessors().length, i = t65.getLogger();
        let a = !1;
        for (const n22 of t65.getRoot().listAnimations()){
            const t = new Set;
            for (const e of n22.listChannels())e.getSampler() && "weights" === e.getTargetPath() && t.add(e.getSampler());
            for (const r of n22.listSamplers())t.has(r) ? a = !0 : "STEP" !== r.getInterpolation() && "LINEAR" !== r.getInterpolation() || (s.add(r.getInput()), s.add(r.getOutput()), qt(r, e30));
        }
        for (const t63 of Array.from(s.values()))t63.listParents().some((t)=>!(t instanceof _core.Root)
        ) || t63.dispose();
        t65.getRoot().listAccessors().length > o && !function(t, e, n) {
            return !!t && t.stack.lastIndexOf("resample") < t.stack.lastIndexOf("dedup");
        }(n) && i.warn('resample: Resampling required copying accessors, some of which may be duplicates. Consider using "dedup" to consolidate any duplicates.'), a && i.warn("resample: Skipped optimizing morph target keyframes, not yet supported."), i.debug("resample: Complete.");
    });
};
function qt(t, e) {
    const n = t.getInput().clone(), s = t.getOutput().clone(), r = e.tolerance, o = n.getCount() - 1, i = [];
    let a = 1;
    for(let e31 = 1; e31 < o; ++e31){
        const o = n.getScalar(e31), l = n.getScalar(e31 - 1), g = n.getScalar(e31 + 1), u = (o - l) / (g - l);
        let f = !1;
        if (o !== g && (1 !== e31 || o !== n.getScalar(0))) for(let n23 = 0; n23 < s.getElementSize(); n23++){
            const o = s.getElement(e31, i)[n23], a = s.getElement(e31 - 1, i)[n23], l = s.getElement(e31 + 1, i)[n23];
            if ("LINEAR" === t.getInterpolation()) {
                if (Math.abs(o - (a * (1 - (c = u)) + l * c)) > r) {
                    f = !0;
                    break;
                }
            } else if ("STEP" === t.getInterpolation() && (o !== a || o !== l)) {
                f = !0;
                break;
            }
        }
        f && (e31 !== a && (n.setScalar(a, n.getScalar(e31)), s.setElement(a, s.getElement(e31, i))), a++);
    }
    var c;
    o > 0 && (n.setScalar(a, n.getScalar(o)), s.setElement(a, s.getElement(o, i)), a++), a !== n.getCount() ? (n.setArray(n.getArray().slice(0, a)), s.setArray(s.getArray().slice(0, a * s.getElementSize())), t.setInput(n), t.setOutput(s)) : (n.dispose(), s.dispose());
}
const Gt = {
    target: "size"
};
function Ut(e33 = Gt) {
    const s10 = L({
    }, Gt, e33), r6 = s10.encoder;
    return $("reorder", async (e34)=>{
        const o = e34.getLogger();
        await r6.ready;
        const i = function(t) {
            const e = new _, n = new Map, s = new _;
            for (const r of t.getRoot().listMeshes())for (const t66 of r.listPrimitives()){
                const r = t66.getIndices();
                if (r) {
                    n.set(r, t66.getMode());
                    for (const n24 of Vt(t66))e.add(r, n24), s.add(n24, t66);
                }
            }
            return {
                indicesToAttributes: e,
                indicesToMode: n,
                attributesToPrimitives: s
            };
        }(e34);
        for (const e32 of i.indicesToAttributes.keys()){
            const n = e32.clone();
            let o = n.getArray().slice();
            o instanceof Uint32Array || (o = new Uint32Array(o));
            const [a, c] = r6.reorderMesh(o, i.indicesToMode.get(e32) === _core.Primitive.Mode.TRIANGLES, "size" === s10.target);
            n.setArray(c <= 65534 ? new Uint16Array(o) : o);
            for (const t of i.indicesToAttributes.get(e32)){
                const s = t.clone();
                Bt(s, a, c);
                for (const r of i.attributesToPrimitives.get(t))if (r.getIndices() === e32 && r.swap(e32, n), r.getIndices() === n) {
                    r.swap(t, s);
                    for (const e of r.listTargets())e.swap(t, s);
                }
            }
        }
        await e34.transform(ht({
            propertyTypes: [
                _core.PropertyType.ACCESSOR
            ]
        })), i.indicesToAttributes.size ? o.debug("reorder: Complete.") : o.warn("reorder: No qualifying primitives found; may need to weld first.");
    });
}
function Bt(t, e, n) {
    const s = t.getElementSize(), r = t.getCount(), o = t.getArray(), i = o.slice(0, n * s);
    for(let t67 = 0; t67 < r; t67++)for(let n26 = 0; n26 < s; n26++)i[e[t67] * s + n26] = o[t67 * s + n26];
    t.setArray(i);
}
function Vt(t) {
    const e = [];
    for (const n of t.listAttributes())e.push(n);
    for (const n27 of t.listTargets())for (const t68 of n27.listAttributes())e.push(t68);
    return Array.from(new Set(e));
}
const Ht = {
    name: "",
    fps: 10,
    pattern: /.*/,
    sort: !0
};
function Wt(t69 = Ht) {
    const e35 = L({
    }, Ht, t69);
    return $("sequence", (t70)=>{
        const n28 = t70.getLogger(), s11 = t70.getRoot(), r = e35.fps, o = s11.listNodes().filter((t)=>t.getName().match(e35.pattern)
        );
        e35.sort && o.sort((t, e)=>t.getName() > e.getName() ? 1 : -1
        );
        const i = t70.createAnimation(e35.name), a = s11.listBuffers()[0];
        o.forEach((e, n)=>{
            let s, c;
            0 === n ? (s = [
                n / r,
                (n + 1) / r
            ], c = [
                1,
                1,
                1,
                0,
                0,
                0
            ]) : n === o.length - 1 ? (s = [
                (n - 1) / r,
                n / r
            ], c = [
                0,
                0,
                0,
                1,
                1,
                1
            ]) : (s = [
                (n - 1) / r,
                n / r,
                (n + 1) / r
            ], c = [
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0
            ]);
            const l = t70.createAccessor().setArray(new Float32Array(s)).setBuffer(a), p = t70.createAccessor().setArray(new Float32Array(c)).setBuffer(a).setType(_core.Accessor.Type.VEC3), m = t70.createAnimationSampler().setInterpolation(_core.AnimationSampler.Interpolation.STEP).setInput(l).setOutput(p), d = t70.createAnimationChannel().setTargetNode(e).setTargetPath(_core.AnimationChannel.TargetPath.SCALE).setSampler(m);
            i.addSampler(m).addChannel(d);
        }), n28.debug("sequence: Complete.");
    });
}
const Dt = {
    overwrite: !1
};
function jt(t71 = Dt) {
    if (!t71.generateTangents) throw new Error('tangents: generateTangents callback required — install "mikktspace".');
    const e = L({
    }, Dt, t71);
    return $("tangents", (t)=>{
        const n = t.getLogger(), s = new Map, r = new Map;
        let o = 0;
        for (const i of t.getRoot().listMeshes()){
            const a = i.getName(), c = i.listPrimitives();
            for(let i2 = 0; i2 < c.length; i2++){
                const l = c[i2];
                if (!Kt(l, n, a, i2, e.overwrite)) continue;
                const g = Xt(l), u = l.getAttribute("POSITION").getArray(), f = l.getAttribute("NORMAL").getArray(), m = l.getAttribute(g).getArray(), d = s.get(u) || _core.uuid();
                s.set(u, d);
                const h = s.get(f) || _core.uuid();
                s.set(f, h);
                const A = s.get(m) || _core.uuid();
                s.set(m, A);
                const y = l.getAttribute("TANGENT");
                y && 2 === y.listParents().length && y.dispose();
                const E = `${d}|${h}|${A}`;
                let T = r.get(E);
                if (T) {
                    n.debug(`tangents: Found cache for primitive ${i2} of mesh "${a}".`), l.setAttribute("TANGENT", T), o++;
                    continue;
                }
                n.debug(`tangents: Generating for primitive ${i2} of mesh "${a}".`);
                const S = l.getAttribute("POSITION").getBuffer(), I = e.generateTangents(u instanceof Float32Array ? u : new Float32Array(u), f instanceof Float32Array ? f : new Float32Array(f), m instanceof Float32Array ? m : new Float32Array(m));
                for(let t72 = 3; t72 < I.length; t72 += 4)I[t72] *= -1;
                T = t.createAccessor().setBuffer(S).setArray(I).setType("VEC4"), l.setAttribute("TANGENT", T), r.set(E, T), o++;
            }
        }
        o ? n.debug("tangents: Complete.") : n.warn("tangents: No qualifying primitives found. See debug output.");
    });
}
function Xt(t) {
    const e = t.getMaterial();
    if (!e) return "TEXCOORD_0";
    const n = e.getNormalTextureInfo();
    if (!n) return "TEXCOORD_0";
    const s = `TEXCOORD_${n.getTexCoord()}`;
    return t.getAttribute(s) ? s : "TEXCOORD_0";
}
function Kt(e, n, s, r, o) {
    return e.getMode() === _core.Primitive.Mode.TRIANGLES && e.getAttribute("POSITION") && e.getAttribute("NORMAL") && e.getAttribute("TEXCOORD_0") ? e.getAttribute("TANGENT") && !o ? (n.debug(`tangents: Skipping primitive ${r} of mesh "${s}": TANGENT found.`), !1) : !e.getIndices() || (n.warn(`tangents: Skipping primitive ${r} of mesh "${s}": primitives must be unwelded.`), !1) : (n.debug(`tangents: Skipping primitive ${r} of mesh "${s}": primitives must have attributes=[POSITION, NORMAL, TEXCOORD_0] and mode=TRIANGLES.`), !1);
}
const Zt = "textureResize";
var Jt;
!function(t) {
    t.LANCZOS3 = "lanczos3", t.LANCZOS2 = "lanczos2";
}(Jt || (Jt = {
}));
const Yt = {
    size: [
        2048,
        2048
    ],
    filter: Jt.LANCZOS3,
    pattern: null
};
function Qt(t74 = Yt) {
    const e36 = L({
    }, Yt, t74);
    return $(Zt, async (t)=>{
        const n = t.getLogger();
        for (const s of t.getRoot().listTextures()){
            const t = s.getName(), r = s.getURI();
            if (e36.pattern && !e36.pattern.test(t) && !e36.pattern.test(r)) continue;
            if ("image/png" !== s.getMimeType() && "image/jpeg" !== s.getMimeType()) {
                n.warn(`Skipping unsupported texture type, "${s.getMimeType()}".`);
                continue;
            }
            const [o, i] = e36.size, [a, c] = s.getSize();
            if (a <= o && c <= i) {
                n.debug(`${Zt}: Skipping "${r || t}", within size range.`);
                continue;
            }
            let l = a, g = c;
            l > o && (g = Math.floor(g * (o / l)), l = o), g > i && (l = Math.floor(l * (i / g)), g = i);
            const u = s.getImage(), f = await _ndarrayPixels.getPixels(u, s.getMimeType()), p = _ndarrayDefault.default(new Uint8Array(l * g * 4), [
                l,
                g,
                4
            ]);
            n.debug(`${Zt}: Resizing "${r || t}", ${f.shape} → ${p.shape}...`);
            try {
                e36.filter === Jt.LANCZOS3 ? _ndarrayLanczos.lanczos3(f, p) : _ndarrayLanczos.lanczos2(f, p);
            } catch (e) {
                if (e instanceof Error) {
                    n.warn(`${Zt}: Failed to resize "${r || t}": "${e.message}".`);
                    continue;
                }
                throw e;
            }
            s.setImage(await _ndarrayPixels.savePixels(p, s.getMimeType()));
        }
        n.debug(`${Zt}: Complete.`);
    });
}
const te = {
    tolerance: 0.0001
};
function ee(e37 = te) {
    const n = L({
    }, te, e37);
    return $("weld", (e)=>{
        const s = e.getLogger();
        for (const s12 of e.getRoot().listMeshes())for (const r of s12.listPrimitives())r.getMode() !== _core.Primitive.Mode.POINTS && (0 === n.tolerance ? ne(e, r) : se(e, r, n));
        s.debug("weld: Complete.");
    });
}
function ne(t, e) {
    if (e.getIndices()) return;
    const n = e.listAttributes()[0], s = n.getCount(), r = n.getBuffer(), o = s <= 65534 ? new Uint16Array(s) : new Uint32Array(s), i = t.createAccessor().setBuffer(r).setType(_core.Accessor.Type.SCALAR).setArray(o);
    for(let t75 = 0; t75 < i.getCount(); t75++)i.setScalar(t75, t75);
    e.setIndices(i);
}
function se(t79, e, n) {
    const s = Math.max(n.tolerance, Number.EPSILON), r = Math.log10(1 / s), o = Math.pow(10, r), i = {
    }, a = e.getIndices(), c = a ? a.getCount() : e.listAttributes()[0].getCount(), l = new Map;
    e.listAttributes().forEach((t)=>l.set(t, [])
    ), e.listTargets().forEach((t80)=>{
        t80.listAttributes().forEach((t)=>l.set(t, [])
        );
    });
    const g = [];
    let u = 0;
    for(let t76 = 0; t76 < c; t76++){
        const n = a ? a.getScalar(t76) : t76, s = [], r = [];
        for (const t of e.listAttributes())for(let e39 = 0; e39 < t.getElementSize(); e39++)s.push(~~(t.getElement(n, r)[e39] * o));
        const c = s.join("|");
        if (c in i) g.push(i[c]);
        else {
            for (const t of e.listAttributes())l.get(t).push(t.getElement(n, []));
            for (const t81 of e.listTargets())for (const e40 of t81.listAttributes())l.get(e40).push(e40.getElement(n, []));
            i[c] = u, g.push(u), u++;
        }
    }
    const f = e.listAttributes()[0].getCount(), p = l.get(e.getAttribute("POSITION")).length;
    t79.getLogger().debug(`weld: ${f} → ${p} vertices.`);
    for (const t77 of e.listAttributes())oe(e, t77, l.get(t77)), 1 === t77.listParents().length && t77.dispose();
    for (const t78 of e.listTargets())for (const e38 of t78.listAttributes())oe(t78, e38, l.get(e38)), 1 === e38.listParents().length && e38.dispose();
    if (a) {
        const t = re(a.getArray(), g.length);
        t.set(g), e.setIndices(a.clone().setArray(t)), 1 === a.listParents().length && a.dispose();
    } else {
        const n = f <= 65534 ? new Uint16Array(g) : new Uint32Array(g);
        e.setIndices(t79.createAccessor().setArray(n));
    }
}
function re(t, e) {
    return new t.constructor(e);
}
function oe(t, e, n) {
    const s = n.length * e.getElementSize(), r = re(e.getArray(), s), o = e.clone().setArray(r);
    for(let t82 = 0; t82 < n.length; t82++)o.setElement(t82, n[t82]);
    t.swap(e, o);
}

},{"@gltf-transform/core":"4D3gD","ndarray-pixels":"1uqT6","@gltf-transform/extensions":"7puhY","gl-matrix/vec3":"6mCNm","gl-matrix/mat4":"eQTXr","ndarray":"1nDU8","ndarray-lanczos":"f7B8u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1uqT6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPixels", ()=>i
);
parcelHelpers.export(exports, "savePixels", ()=>o
);
var _ndarray = require("ndarray");
var _ndarrayDefault = parcelHelpers.interopDefault(_ndarray);
var _ndarrayOps = require("ndarray-ops");
var _ndarrayOpsDefault = parcelHelpers.interopDefault(_ndarrayOps);
var Buffer = require("buffer").Buffer;
function a(e, t, a1 = {
}) {
    const i1 = document.createElement("canvas");
    i1.width = e.shape[0], i1.height = e.shape[1];
    const o1 = i1.getContext("2d"), h = o1.getImageData(0, 0, i1.width, i1.height);
    try {
        n(e, h.data);
    } catch (e1) {
        return s.from(Promise.reject(e1));
    }
    o1.putImageData(h, 0, 0);
    const p = a1.quality ? a1.quality / 100 : void 0;
    switch(t){
        case "canvas":
            return i1;
        case "jpg":
        case "jpeg":
            return r(i1, "image/jpeg", p);
        case "png":
            return r(i1, "image/png");
        default:
            throw new Error("[ndarray-pixels] Unsupported file type: " + t);
    }
}
function r(e2, t, a2) {
    const r1 = new Promise((r2, n1)=>{
        e2.toBlob(async (e)=>{
            e ? r2(new Uint8Array(await e.arrayBuffer())) : n1(new Error("[ndarray-pixels] Failed to canvas.toBlob()."));
        }, t, a2);
    });
    return s.from(r1);
}
function n(a3, r3, s1 = -1) {
    if (4 === a3.shape.length) return n(a3.pick(s1), r3, 0);
    if (3 === a3.shape.length) {
        if (3 === a3.shape[2]) _ndarrayOpsDefault.default.assign(_ndarrayDefault.default(r3, [
            a3.shape[0],
            a3.shape[1],
            3
        ], [
            4,
            4 * a3.shape[0],
            1
        ]), a3), _ndarrayOpsDefault.default.assigns(_ndarrayDefault.default(r3, [
            a3.shape[0] * a3.shape[1]
        ], [
            4
        ], 3), 255);
        else if (4 === a3.shape[2]) _ndarrayOpsDefault.default.assign(_ndarrayDefault.default(r3, [
            a3.shape[0],
            a3.shape[1],
            4
        ], [
            4,
            4 * a3.shape[0],
            1
        ]), a3);
        else {
            if (1 !== a3.shape[2]) throw new Error("[ndarray-pixels] Incompatible array shape.");
            _ndarrayOpsDefault.default.assign(_ndarrayDefault.default(r3, [
                a3.shape[0],
                a3.shape[1],
                3
            ], [
                4,
                4 * a3.shape[0],
                1
            ]), _ndarrayDefault.default(a3.data, [
                a3.shape[0],
                a3.shape[1],
                3
            ], [
                a3.stride[0],
                a3.stride[1],
                0
            ], a3.offset)), _ndarrayOpsDefault.default.assigns(_ndarrayDefault.default(r3, [
                a3.shape[0] * a3.shape[1]
            ], [
                4
            ], 3), 255);
        }
    } else {
        if (2 !== a3.shape.length) throw new Error("[ndarray-pixels] Incompatible array shape.");
        _ndarrayOpsDefault.default.assign(_ndarrayDefault.default(r3, [
            a3.shape[0],
            a3.shape[1],
            3
        ], [
            4,
            4 * a3.shape[0],
            1
        ]), _ndarrayDefault.default(a3.data, [
            a3.shape[0],
            a3.shape[1],
            3
        ], [
            a3.stride[0],
            a3.stride[1],
            0
        ], a3.offset)), _ndarrayOpsDefault.default.assigns(_ndarrayDefault.default(r3, [
            a3.shape[0] * a3.shape[1]
        ], [
            4
        ], 3), 255);
    }
    return r3;
}
class s {
    constructor(e){
        this._promise = void 0, this._promise = e;
    }
    on(e, t) {
        return "data" === e ? this._promise.then(t) : "error" === e ? this._promise.catch(t) : "end" === e && this._promise.finally(t), this;
    }
    static from(e) {
        return new s(e);
    }
}
async function i(t1, a4) {
    return t1 instanceof Uint8Array && "undefined" != typeof Buffer && (t1 = Buffer.from(t1)), new Promise((r4, n2)=>{
        !function(t, a5, r5) {
            if (r5 = r5 || a5, t instanceof Uint8Array) {
                if ("string" != typeof a5) throw new Error("[ndarray-pixels] Type must be given for Uint8Array image data");
                const e = new Blob([
                    t
                ], {
                    type: a5
                });
                t = URL.createObjectURL(e);
            }
            const n3 = new Image;
            n3.crossOrigin = "anonymous", n3.onload = function() {
                URL.revokeObjectURL(t);
                const a6 = document.createElement("canvas");
                a6.width = n3.width, a6.height = n3.height;
                const s2 = a6.getContext("2d");
                s2.drawImage(n3, 0, 0);
                const i2 = s2.getImageData(0, 0, n3.width, n3.height);
                r5(null, _ndarrayDefault.default(new Uint8Array(i2.data), [
                    n3.width,
                    n3.height,
                    4
                ], [
                    4,
                    4 * n3.width,
                    1
                ], 0));
            }, n3.onerror = (e)=>{
                URL.revokeObjectURL(t), r5(e);
            }, n3.src = t;
        }(t1, a4, (e, t)=>{
            t && !e ? r4(t) : n2(e);
        });
    });
}
async function o(e3, t3) {
    return new Promise((r6, n4)=>{
        const s3 = [], i3 = t3.replace("image/", "");
        a(e3, i3).on("data", (e)=>s3.push(e)
        ).on("end", ()=>r6(function(e) {
                let t = 0;
                for (const a8 of e)t += a8.byteLength;
                const a7 = new Uint8Array(t);
                let r7 = 0;
                for (const t2 of e)a7.set(t2, r7), r7 += t2.byteLength;
                return a7;
            }(s3))
        ).on("error", (e)=>n4(e)
        );
    });
}

},{"ndarray":"1nDU8","ndarray-ops":"kXyuI","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nDU8":[function(require,module,exports) {
var iota = require("iota-array");
var isBuffer = require("is-buffer");
var hasTypedArrays = typeof Float64Array !== "undefined";
function compare1st(a, b) {
    return a[0] - b[0];
}
function order() {
    var stride = this.stride;
    var terms = new Array(stride.length);
    var i;
    for(i = 0; i < terms.length; ++i)terms[i] = [
        Math.abs(stride[i]),
        i
    ];
    terms.sort(compare1st);
    var result = new Array(terms.length);
    for(i = 0; i < result.length; ++i)result[i] = terms[i][1];
    return result;
}
function compileConstructor(dtype, dimension) {
    var className = [
        "View",
        dimension,
        "d",
        dtype
    ].join("");
    if (dimension < 0) className = "View_Nil" + dtype;
    var useGetters = dtype === "generic";
    if (dimension === -1) {
        //Special case for trivial arrays
        var code = "function " + className + "(a){this.data=a;};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new " + className + "(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_" + className + "(a){return new " + className + "(a);}";
        var procedure = new Function(code);
        return procedure();
    } else if (dimension === 0) {
        //Special case for 0d arrays
        var code = "function " + className + "(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto=" + className + ".prototype;\
proto.dtype='" + dtype + "';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function " + className + "_copy() {\
return new " + className + "(this.data,this.offset)\
};\
proto.pick=function " + className + "_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function " + className + "_get(){\
return " + (useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};\
proto.set=function " + className + "_set(v){\
return " + (useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "\
};\
return function construct_" + className + "(a,b,c,d){return new " + className + "(a,d)}";
        var procedure = new Function("TrivialArray", code);
        return procedure(CACHED_CONSTRUCTORS[dtype][0]);
    }
    var code = [
        "'use strict'"
    ];
    //Create constructor for view
    var indices = iota(dimension);
    var args = indices.map(function(i) {
        return "i" + i;
    });
    var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i;
    }).join("+");
    var shapeArg = indices.map(function(i) {
        return "b" + i;
    }).join(",");
    var strideArg = indices.map(function(i) {
        return "c" + i;
    }).join(",");
    code.push("function " + className + "(a," + shapeArg + "," + strideArg + ",d){this.data=a", "this.shape=[" + shapeArg + "]", "this.stride=[" + strideArg + "]", "this.offset=d|0}", "var proto=" + className + ".prototype", "proto.dtype='" + dtype + "'", "proto.dimension=" + dimension);
    //view.size:
    code.push("Object.defineProperty(proto,'size',{get:function " + className + "_size(){\
return " + indices.map(function(i) {
        return "this.shape[" + i + "]";
    }).join("*"), "}})");
    //view.order:
    if (dimension === 1) code.push("proto.order=[0]");
    else {
        code.push("Object.defineProperty(proto,'order',{get:");
        if (dimension < 4) {
            code.push("function " + className + "_order(){");
            if (dimension === 2) code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
            else if (dimension === 3) code.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})");
        } else code.push("ORDER})");
    }
    //view.set(i0, ..., v):
    code.push("proto.set=function " + className + "_set(" + args.join(",") + ",v){");
    if (useGetters) code.push("return this.data.set(" + index_str + ",v)}");
    else code.push("return this.data[" + index_str + "]=v}");
    //view.get(i0, ...):
    code.push("proto.get=function " + className + "_get(" + args.join(",") + "){");
    if (useGetters) code.push("return this.data.get(" + index_str + ")}");
    else code.push("return this.data[" + index_str + "]}");
    //view.index:
    code.push("proto.index=function " + className + "_index(", args.join(), "){return " + index_str + "}");
    //view.hi():
    code.push("proto.hi=function " + className + "_hi(" + args.join(",") + "){return new " + className + "(this.data," + indices.map(function(i) {
        return [
            "(typeof i",
            i,
            "!=='number'||i",
            i,
            "<0)?this.shape[",
            i,
            "]:i",
            i,
            "|0"
        ].join("");
    }).join(",") + "," + indices.map(function(i) {
        return "this.stride[" + i + "]";
    }).join(",") + ",this.offset)}");
    //view.lo():
    var a_vars = indices.map(function(i) {
        return "a" + i + "=this.shape[" + i + "]";
    });
    var c_vars = indices.map(function(i) {
        return "c" + i + "=this.stride[" + i + "]";
    });
    code.push("proto.lo=function " + className + "_lo(" + args.join(",") + "){var b=this.offset,d=0," + a_vars.join(",") + "," + c_vars.join(","));
    for(var i1 = 0; i1 < dimension; ++i1)code.push("if(typeof i" + i1 + "==='number'&&i" + i1 + ">=0){\
d=i" + i1 + "|0;\
b+=c" + i1 + "*d;\
a" + i1 + "-=d}");
    code.push("return new " + className + "(this.data," + indices.map(function(i) {
        return "a" + i;
    }).join(",") + "," + indices.map(function(i) {
        return "c" + i;
    }).join(",") + ",b)}");
    //view.step():
    code.push("proto.step=function " + className + "_step(" + args.join(",") + "){var " + indices.map(function(i) {
        return "a" + i + "=this.shape[" + i + "]";
    }).join(",") + "," + indices.map(function(i) {
        return "b" + i + "=this.stride[" + i + "]";
    }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
    for(var i1 = 0; i1 < dimension; ++i1)code.push("if(typeof i" + i1 + "==='number'){\
d=i" + i1 + "|0;\
if(d<0){\
c+=b" + i1 + "*(a" + i1 + "-1);\
a" + i1 + "=ceil(-a" + i1 + "/d)\
}else{\
a" + i1 + "=ceil(a" + i1 + "/d)\
}\
b" + i1 + "*=d\
}");
    code.push("return new " + className + "(this.data," + indices.map(function(i) {
        return "a" + i;
    }).join(",") + "," + indices.map(function(i) {
        return "b" + i;
    }).join(",") + ",c)}");
    //view.transpose():
    var tShape = new Array(dimension);
    var tStride = new Array(dimension);
    for(var i1 = 0; i1 < dimension; ++i1){
        tShape[i1] = "a[i" + i1 + "]";
        tStride[i1] = "b[i" + i1 + "]";
    }
    code.push("proto.transpose=function " + className + "_transpose(" + args + "){" + args.map(function(n, idx) {
        return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)";
    }).join(";"), "var a=this.shape,b=this.stride;return new " + className + "(this.data," + tShape.join(",") + "," + tStride.join(",") + ",this.offset)}");
    //view.pick():
    code.push("proto.pick=function " + className + "_pick(" + args + "){var a=[],b=[],c=this.offset");
    for(var i1 = 0; i1 < dimension; ++i1)code.push("if(typeof i" + i1 + "==='number'&&i" + i1 + ">=0){c=(c+this.stride[" + i1 + "]*i" + i1 + ")|0}else{a.push(this.shape[" + i1 + "]);b.push(this.stride[" + i1 + "])}");
    code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");
    //Add return statement
    code.push("return function construct_" + className + "(data,shape,stride,offset){return new " + className + "(data," + indices.map(function(i) {
        return "shape[" + i + "]";
    }).join(",") + "," + indices.map(function(i) {
        return "stride[" + i + "]";
    }).join(",") + ",offset)}");
    //Compile procedure
    var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"));
    return procedure(CACHED_CONSTRUCTORS[dtype], order);
}
function arrayDType(data) {
    if (isBuffer(data)) return "buffer";
    if (hasTypedArrays) switch(Object.prototype.toString.call(data)){
        case "[object Float64Array]":
            return "float64";
        case "[object Float32Array]":
            return "float32";
        case "[object Int8Array]":
            return "int8";
        case "[object Int16Array]":
            return "int16";
        case "[object Int32Array]":
            return "int32";
        case "[object Uint8Array]":
            return "uint8";
        case "[object Uint16Array]":
            return "uint16";
        case "[object Uint32Array]":
            return "uint32";
        case "[object Uint8ClampedArray]":
            return "uint8_clamped";
        case "[object BigInt64Array]":
            return "bigint64";
        case "[object BigUint64Array]":
            return "biguint64";
    }
    if (Array.isArray(data)) return "array";
    return "generic";
}
var CACHED_CONSTRUCTORS = {
    "float32": [],
    "float64": [],
    "int8": [],
    "int16": [],
    "int32": [],
    "uint8": [],
    "uint16": [],
    "uint32": [],
    "array": [],
    "uint8_clamped": [],
    "bigint64": [],
    "biguint64": [],
    "buffer": [],
    "generic": []
};
function wrappedNDArrayCtor(data, shape, stride, offset) {
    if (data === undefined) {
        var ctor = CACHED_CONSTRUCTORS.array[0];
        return ctor([]);
    } else if (typeof data === "number") data = [
        data
    ];
    if (shape === undefined) shape = [
        data.length
    ];
    var d = shape.length;
    if (stride === undefined) {
        stride = new Array(d);
        for(var i = d - 1, sz = 1; i >= 0; --i){
            stride[i] = sz;
            sz *= shape[i];
        }
    }
    if (offset === undefined) {
        offset = 0;
        for(var i = 0; i < d; ++i)if (stride[i] < 0) offset -= (shape[i] - 1) * stride[i];
    }
    var dtype = arrayDType(data);
    var ctor_list = CACHED_CONSTRUCTORS[dtype];
    while(ctor_list.length <= d + 1)ctor_list.push(compileConstructor(dtype, ctor_list.length - 1));
    var ctor = ctor_list[d + 1];
    return ctor(data, shape, stride, offset);
}
module.exports = wrappedNDArrayCtor;

},{"iota-array":"hvCq1","is-buffer":"9JmUB"}],"hvCq1":[function(require,module,exports) {
"use strict";
function iota(n) {
    var result = new Array(n);
    for(var i = 0; i < n; ++i)result[i] = i;
    return result;
}
module.exports = iota;

},{}],"9JmUB":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ // The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

},{}],"kXyuI":[function(require,module,exports) {
"use strict";
var compile = require("cwise-compiler");
var EmptyProc = {
    body: "",
    args: [],
    thisVars: [],
    localVars: []
};
function fixup(x) {
    if (!x) return EmptyProc;
    for(var i = 0; i < x.args.length; ++i){
        var a = x.args[i];
        if (i === 0) x.args[i] = {
            name: a,
            lvalue: true,
            rvalue: !!x.rvalue,
            count: x.count || 1
        };
        else x.args[i] = {
            name: a,
            lvalue: false,
            rvalue: true,
            count: 1
        };
    }
    if (!x.thisVars) x.thisVars = [];
    if (!x.localVars) x.localVars = [];
    return x;
}
function pcompile(user_args) {
    return compile({
        args: user_args.args,
        pre: fixup(user_args.pre),
        body: fixup(user_args.body),
        post: fixup(user_args.proc),
        funcName: user_args.funcName
    });
}
function makeOp(user_args) {
    var args = [];
    for(var i = 0; i < user_args.args.length; ++i)args.push("a" + i);
    var wrapper = new Function("P", [
        "return function ",
        user_args.funcName,
        "_ndarrayops(",
        args.join(","),
        ") {P(",
        args.join(","),
        ");return a0}"
    ].join(""));
    return wrapper(pcompile(user_args));
}
var assign_ops = {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
    mod: "%",
    band: "&",
    bor: "|",
    bxor: "^",
    lshift: "<<",
    rshift: ">>",
    rrshift: ">>>"
};
(function() {
    for(var id in assign_ops){
        var op = assign_ops[id];
        exports[id] = makeOp({
            args: [
                "array",
                "array",
                "array"
            ],
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=b" + op + "c"
            },
            funcName: id
        });
        exports[id + "eq"] = makeOp({
            args: [
                "array",
                "array"
            ],
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a" + op + "=b"
            },
            rvalue: true,
            funcName: id + "eq"
        });
        exports[id + "s"] = makeOp({
            args: [
                "array",
                "array",
                "scalar"
            ],
            body: {
                args: [
                    "a",
                    "b",
                    "s"
                ],
                body: "a=b" + op + "s"
            },
            funcName: id + "s"
        });
        exports[id + "seq"] = makeOp({
            args: [
                "array",
                "scalar"
            ],
            body: {
                args: [
                    "a",
                    "s"
                ],
                body: "a" + op + "=s"
            },
            rvalue: true,
            funcName: id + "seq"
        });
    }
})();
var unary_ops = {
    not: "!",
    bnot: "~",
    neg: "-",
    recip: "1.0/"
};
(function() {
    for(var id in unary_ops){
        var op = unary_ops[id];
        exports[id] = makeOp({
            args: [
                "array",
                "array"
            ],
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=" + op + "b"
            },
            funcName: id
        });
        exports[id + "eq"] = makeOp({
            args: [
                "array"
            ],
            body: {
                args: [
                    "a"
                ],
                body: "a=" + op + "a"
            },
            rvalue: true,
            count: 2,
            funcName: id + "eq"
        });
    }
})();
var binary_ops = {
    and: "&&",
    or: "||",
    eq: "===",
    neq: "!==",
    lt: "<",
    gt: ">",
    leq: "<=",
    geq: ">="
};
(function() {
    for(var id in binary_ops){
        var op = binary_ops[id];
        exports[id] = makeOp({
            args: [
                "array",
                "array",
                "array"
            ],
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=b" + op + "c"
            },
            funcName: id
        });
        exports[id + "s"] = makeOp({
            args: [
                "array",
                "array",
                "scalar"
            ],
            body: {
                args: [
                    "a",
                    "b",
                    "s"
                ],
                body: "a=b" + op + "s"
            },
            funcName: id + "s"
        });
        exports[id + "eq"] = makeOp({
            args: [
                "array",
                "array"
            ],
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=a" + op + "b"
            },
            rvalue: true,
            count: 2,
            funcName: id + "eq"
        });
        exports[id + "seq"] = makeOp({
            args: [
                "array",
                "scalar"
            ],
            body: {
                args: [
                    "a",
                    "s"
                ],
                body: "a=a" + op + "s"
            },
            rvalue: true,
            count: 2,
            funcName: id + "seq"
        });
    }
})();
var math_unary = [
    "abs",
    "acos",
    "asin",
    "atan",
    "ceil",
    "cos",
    "exp",
    "floor",
    "log",
    "round",
    "sin",
    "sqrt",
    "tan"
];
(function() {
    for(var i = 0; i < math_unary.length; ++i){
        var f = math_unary[i];
        exports[f] = makeOp({
            args: [
                "array",
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=this_f(b)",
                thisVars: [
                    "this_f"
                ]
            },
            funcName: f
        });
        exports[f + "eq"] = makeOp({
            args: [
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a"
                ],
                body: "a=this_f(a)",
                thisVars: [
                    "this_f"
                ]
            },
            rvalue: true,
            count: 2,
            funcName: f + "eq"
        });
    }
})();
var math_comm = [
    "max",
    "min",
    "atan2",
    "pow"
];
(function() {
    for(var i = 0; i < math_comm.length; ++i){
        var f = math_comm[i];
        exports[f] = makeOp({
            args: [
                "array",
                "array",
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=this_f(b,c)",
                thisVars: [
                    "this_f"
                ]
            },
            funcName: f
        });
        exports[f + "s"] = makeOp({
            args: [
                "array",
                "array",
                "scalar"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=this_f(b,c)",
                thisVars: [
                    "this_f"
                ]
            },
            funcName: f + "s"
        });
        exports[f + "eq"] = makeOp({
            args: [
                "array",
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=this_f(a,b)",
                thisVars: [
                    "this_f"
                ]
            },
            rvalue: true,
            count: 2,
            funcName: f + "eq"
        });
        exports[f + "seq"] = makeOp({
            args: [
                "array",
                "scalar"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=this_f(a,b)",
                thisVars: [
                    "this_f"
                ]
            },
            rvalue: true,
            count: 2,
            funcName: f + "seq"
        });
    }
})();
var math_noncomm = [
    "atan2",
    "pow"
];
(function() {
    for(var i = 0; i < math_noncomm.length; ++i){
        var f = math_noncomm[i];
        exports[f + "op"] = makeOp({
            args: [
                "array",
                "array",
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=this_f(c,b)",
                thisVars: [
                    "this_f"
                ]
            },
            funcName: f + "op"
        });
        exports[f + "ops"] = makeOp({
            args: [
                "array",
                "array",
                "scalar"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b",
                    "c"
                ],
                body: "a=this_f(c,b)",
                thisVars: [
                    "this_f"
                ]
            },
            funcName: f + "ops"
        });
        exports[f + "opeq"] = makeOp({
            args: [
                "array",
                "array"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=this_f(b,a)",
                thisVars: [
                    "this_f"
                ]
            },
            rvalue: true,
            count: 2,
            funcName: f + "opeq"
        });
        exports[f + "opseq"] = makeOp({
            args: [
                "array",
                "scalar"
            ],
            pre: {
                args: [],
                body: "this_f=Math." + f,
                thisVars: [
                    "this_f"
                ]
            },
            body: {
                args: [
                    "a",
                    "b"
                ],
                body: "a=this_f(b,a)",
                thisVars: [
                    "this_f"
                ]
            },
            rvalue: true,
            count: 2,
            funcName: f + "opseq"
        });
    }
})();
exports.any = compile({
    args: [
        "array"
    ],
    pre: EmptyProc,
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        body: "if(a){return true}",
        localVars: [],
        thisVars: []
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return false"
    },
    funcName: "any"
});
exports.all = compile({
    args: [
        "array"
    ],
    pre: EmptyProc,
    body: {
        args: [
            {
                name: "x",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        body: "if(!x){return false}",
        localVars: [],
        thisVars: []
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return true"
    },
    funcName: "all"
});
exports.sum = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=0"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        body: "this_s+=a",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return this_s"
    },
    funcName: "sum"
});
exports.prod = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=1"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        body: "this_s*=a",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return this_s"
    },
    funcName: "prod"
});
exports.norm2squared = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=0"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 2
            }
        ],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return this_s"
    },
    funcName: "norm2squared"
});
exports.norm2 = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=0"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 2
            }
        ],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return Math.sqrt(this_s)"
    },
    funcName: "norm2"
});
exports.norminf = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=0"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 4
            }
        ],
        body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return this_s"
    },
    funcName: "norminf"
});
exports.norm1 = compile({
    args: [
        "array"
    ],
    pre: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "this_s=0"
    },
    body: {
        args: [
            {
                name: "a",
                lvalue: false,
                rvalue: true,
                count: 3
            }
        ],
        body: "this_s+=a<0?-a:a",
        localVars: [],
        thisVars: [
            "this_s"
        ]
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [
            "this_s"
        ],
        body: "return this_s"
    },
    funcName: "norm1"
});
exports.sup = compile({
    args: [
        "array"
    ],
    pre: {
        body: "this_h=-Infinity",
        args: [],
        thisVars: [
            "this_h"
        ],
        localVars: []
    },
    body: {
        body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
        args: [
            {
                "name": "_inline_1_arg0_",
                "lvalue": false,
                "rvalue": true,
                "count": 2
            }
        ],
        thisVars: [
            "this_h"
        ],
        localVars: []
    },
    post: {
        body: "return this_h",
        args: [],
        thisVars: [
            "this_h"
        ],
        localVars: []
    }
});
exports.inf = compile({
    args: [
        "array"
    ],
    pre: {
        body: "this_h=Infinity",
        args: [],
        thisVars: [
            "this_h"
        ],
        localVars: []
    },
    body: {
        body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
        args: [
            {
                "name": "_inline_1_arg0_",
                "lvalue": false,
                "rvalue": true,
                "count": 2
            }
        ],
        thisVars: [
            "this_h"
        ],
        localVars: []
    },
    post: {
        body: "return this_h",
        args: [],
        thisVars: [
            "this_h"
        ],
        localVars: []
    }
});
exports.argmin = compile({
    args: [
        "index",
        "array",
        "shape"
    ],
    pre: {
        body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [
            {
                name: "_inline_0_arg0_",
                lvalue: false,
                rvalue: false,
                count: 0
            },
            {
                name: "_inline_0_arg1_",
                lvalue: false,
                rvalue: false,
                count: 0
            },
            {
                name: "_inline_0_arg2_",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        thisVars: [
            "this_i",
            "this_v"
        ],
        localVars: []
    },
    body: {
        body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [
            {
                name: "_inline_1_arg0_",
                lvalue: false,
                rvalue: true,
                count: 2
            },
            {
                name: "_inline_1_arg1_",
                lvalue: false,
                rvalue: true,
                count: 2
            }
        ],
        thisVars: [
            "this_i",
            "this_v"
        ],
        localVars: [
            "_inline_1_k"
        ]
    },
    post: {
        body: "{return this_i}",
        args: [],
        thisVars: [
            "this_i"
        ],
        localVars: []
    }
});
exports.argmax = compile({
    args: [
        "index",
        "array",
        "shape"
    ],
    pre: {
        body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [
            {
                name: "_inline_0_arg0_",
                lvalue: false,
                rvalue: false,
                count: 0
            },
            {
                name: "_inline_0_arg1_",
                lvalue: false,
                rvalue: false,
                count: 0
            },
            {
                name: "_inline_0_arg2_",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        thisVars: [
            "this_i",
            "this_v"
        ],
        localVars: []
    },
    body: {
        body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [
            {
                name: "_inline_1_arg0_",
                lvalue: false,
                rvalue: true,
                count: 2
            },
            {
                name: "_inline_1_arg1_",
                lvalue: false,
                rvalue: true,
                count: 2
            }
        ],
        thisVars: [
            "this_i",
            "this_v"
        ],
        localVars: [
            "_inline_1_k"
        ]
    },
    post: {
        body: "{return this_i}",
        args: [],
        thisVars: [
            "this_i"
        ],
        localVars: []
    }
});
exports.random = makeOp({
    args: [
        "array"
    ],
    pre: {
        args: [],
        body: "this_f=Math.random",
        thisVars: [
            "this_f"
        ]
    },
    body: {
        args: [
            "a"
        ],
        body: "a=this_f()",
        thisVars: [
            "this_f"
        ]
    },
    funcName: "random"
});
exports.assign = makeOp({
    args: [
        "array",
        "array"
    ],
    body: {
        args: [
            "a",
            "b"
        ],
        body: "a=b"
    },
    funcName: "assign"
});
exports.assigns = makeOp({
    args: [
        "array",
        "scalar"
    ],
    body: {
        args: [
            "a",
            "b"
        ],
        body: "a=b"
    },
    funcName: "assigns"
});
exports.equals = compile({
    args: [
        "array",
        "array"
    ],
    pre: EmptyProc,
    body: {
        args: [
            {
                name: "x",
                lvalue: false,
                rvalue: true,
                count: 1
            },
            {
                name: "y",
                lvalue: false,
                rvalue: true,
                count: 1
            }
        ],
        body: "if(x!==y){return false}",
        localVars: [],
        thisVars: []
    },
    post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return true"
    },
    funcName: "equals"
});

},{"cwise-compiler":"7GqVQ"}],"7GqVQ":[function(require,module,exports) {
"use strict";
var createThunk = require("./lib/thunk.js");
function Procedure() {
    this.argTypes = [];
    this.shimArgs = [];
    this.arrayArgs = [];
    this.arrayBlockIndices = [];
    this.scalarArgs = [];
    this.offsetArgs = [];
    this.offsetArgIndex = [];
    this.indexArgs = [];
    this.shapeArgs = [];
    this.funcName = "";
    this.pre = null;
    this.body = null;
    this.post = null;
    this.debug = false;
}
function compileCwise(user_args) {
    //Create procedure
    var proc = new Procedure();
    //Parse blocks
    proc.pre = user_args.pre;
    proc.body = user_args.body;
    proc.post = user_args.post;
    //Parse arguments
    var proc_args = user_args.args.slice(0);
    proc.argTypes = proc_args;
    for(var i = 0; i < proc_args.length; ++i){
        var arg_type = proc_args[i];
        if (arg_type === "array" || typeof arg_type === "object" && arg_type.blockIndices) {
            proc.argTypes[i] = "array";
            proc.arrayArgs.push(i);
            proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0);
            proc.shimArgs.push("array" + i);
            if (i < proc.pre.args.length && proc.pre.args[i].count > 0) throw new Error("cwise: pre() block may not reference array args");
            if (i < proc.post.args.length && proc.post.args[i].count > 0) throw new Error("cwise: post() block may not reference array args");
        } else if (arg_type === "scalar") {
            proc.scalarArgs.push(i);
            proc.shimArgs.push("scalar" + i);
        } else if (arg_type === "index") {
            proc.indexArgs.push(i);
            if (i < proc.pre.args.length && proc.pre.args[i].count > 0) throw new Error("cwise: pre() block may not reference array index");
            if (i < proc.body.args.length && proc.body.args[i].lvalue) throw new Error("cwise: body() block may not write to array index");
            if (i < proc.post.args.length && proc.post.args[i].count > 0) throw new Error("cwise: post() block may not reference array index");
        } else if (arg_type === "shape") {
            proc.shapeArgs.push(i);
            if (i < proc.pre.args.length && proc.pre.args[i].lvalue) throw new Error("cwise: pre() block may not write to array shape");
            if (i < proc.body.args.length && proc.body.args[i].lvalue) throw new Error("cwise: body() block may not write to array shape");
            if (i < proc.post.args.length && proc.post.args[i].lvalue) throw new Error("cwise: post() block may not write to array shape");
        } else if (typeof arg_type === "object" && arg_type.offset) {
            proc.argTypes[i] = "offset";
            proc.offsetArgs.push({
                array: arg_type.array,
                offset: arg_type.offset
            });
            proc.offsetArgIndex.push(i);
        } else throw new Error("cwise: Unknown argument type " + proc_args[i]);
    }
    //Make sure at least one array argument was specified
    if (proc.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
    //Make sure arguments are correct
    if (proc.pre.args.length > proc_args.length) throw new Error("cwise: Too many arguments in pre() block");
    if (proc.body.args.length > proc_args.length) throw new Error("cwise: Too many arguments in body() block");
    if (proc.post.args.length > proc_args.length) throw new Error("cwise: Too many arguments in post() block");
    //Check debug flag
    proc.debug = !!user_args.printCode || !!user_args.debug;
    //Retrieve name
    proc.funcName = user_args.funcName || "cwise";
    //Read in block size
    proc.blockSize = user_args.blockSize || 64;
    return createThunk(proc);
}
module.exports = compileCwise;

},{"./lib/thunk.js":"fBD3l"}],"fBD3l":[function(require,module,exports) {
"use strict";
// The function below is called when constructing a cwise function object, and does the following:
// A function object is constructed which accepts as argument a compilation function and returns another function.
// It is this other function that is eventually returned by createThunk, and this function is the one that actually
// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
// The compilation passed to the first function object is used for compiling new functions.
// Once this function object is created, it is called with compile as argument, where the first argument of compile
// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
// So createThunk roughly works like this:
// function createThunk(proc) {
//   var thunk = function(compileBound) {
//     var CACHED = {}
//     return function(arrays and scalars) {
//       if (dtype and order of arrays in CACHED) {
//         var func = CACHED[dtype and order of arrays]
//       } else {
//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
//       }
//       return func(arrays and scalars)
//     }
//   }
//   return thunk(compile.bind1(proc))
// }
var compile = require("./compile.js");
function createThunk(proc) {
    var code = [
        "'use strict'",
        "var CACHED={}"
    ];
    var vars = [];
    var thunkName = proc.funcName + "_cwise_thunk";
    //Build thunk
    code.push([
        "return function ",
        thunkName,
        "(",
        proc.shimArgs.join(","),
        "){"
    ].join(""));
    var typesig = [];
    var string_typesig = [];
    var proc_args = [
        [
            "array",
            proc.arrayArgs[0],
            ".shape.slice(",
            Math.max(0, proc.arrayBlockIndices[0]),
            proc.arrayBlockIndices[0] < 0 ? "," + proc.arrayBlockIndices[0] + ")" : ")"
        ].join("")
    ];
    var shapeLengthConditions = [], shapeConditions = [];
    // Process array arguments
    for(var i = 0; i < proc.arrayArgs.length; ++i){
        var j = proc.arrayArgs[i];
        vars.push([
            "t",
            j,
            "=array",
            j,
            ".dtype,",
            "r",
            j,
            "=array",
            j,
            ".order"
        ].join(""));
        typesig.push("t" + j);
        typesig.push("r" + j);
        string_typesig.push("t" + j);
        string_typesig.push("r" + j + ".join()");
        proc_args.push("array" + j + ".data");
        proc_args.push("array" + j + ".stride");
        proc_args.push("array" + j + ".offset|0");
        if (i > 0) {
            shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0]) - Math.abs(proc.arrayBlockIndices[i])));
            shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0, proc.arrayBlockIndices[i]) + "]");
        }
    }
    // Check for shape equality
    if (proc.arrayArgs.length > 1) {
        code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')");
        code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {");
        code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')");
        code.push("}");
    }
    // Process scalar arguments
    for(var i = 0; i < proc.scalarArgs.length; ++i)proc_args.push("scalar" + proc.scalarArgs[i]);
    // Check for cached function (and if not present, generate it)
    vars.push([
        "type=[",
        string_typesig.join(","),
        "].join()"
    ].join(""));
    vars.push("proc=CACHED[type]");
    code.push("var " + vars.join(","));
    code.push([
        "if(!proc){",
        "CACHED[type]=proc=compile([",
        typesig.join(","),
        "])}",
        "return proc(",
        proc_args.join(","),
        ")}"
    ].join(""));
    if (proc.debug) console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------");
    //Compile thunk
    var thunk = new Function("compile", code.join("\n"));
    return thunk(compile.bind(undefined, proc));
}
module.exports = createThunk;

},{"./compile.js":"lX50N"}],"lX50N":[function(require,module,exports) {
"use strict";
var uniq = require("uniq");
// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
function innerFill(order, proc, body) {
    var dimension = order.length, nargs = proc.arrayArgs.length, has_index = proc.indexArgs.length > 0, code = [], vars = [], idx = 0, pidx = 0, i, j;
    for(i = 0; i < dimension; ++i)vars.push([
        "i",
        i,
        "=0"
    ].join(""));
    //Compute scan deltas
    for(j = 0; j < nargs; ++j)for(i = 0; i < dimension; ++i){
        pidx = idx;
        idx = order[i];
        if (i === 0) vars.push([
            "d",
            j,
            "s",
            i,
            "=t",
            j,
            "p",
            idx
        ].join(""));
        else vars.push([
            "d",
            j,
            "s",
            i,
            "=(t",
            j,
            "p",
            idx,
            "-s",
            pidx,
            "*t",
            j,
            "p",
            pidx,
            ")"
        ].join(""));
    }
    if (vars.length > 0) code.push("var " + vars.join(","));
    //Scan loop
    for(i = dimension - 1; i >= 0; --i){
        idx = order[i];
        code.push([
            "for(i",
            i,
            "=0;i",
            i,
            "<s",
            idx,
            ";++i",
            i,
            "){"
        ].join(""));
    }
    //Push body of inner loop
    code.push(body);
    //Advance scan pointers
    for(i = 0; i < dimension; ++i){
        pidx = idx;
        idx = order[i];
        for(j = 0; j < nargs; ++j)code.push([
            "p",
            j,
            "+=d",
            j,
            "s",
            i
        ].join(""));
        if (has_index) {
            if (i > 0) code.push([
                "index[",
                pidx,
                "]-=s",
                pidx
            ].join(""));
            code.push([
                "++index[",
                idx,
                "]"
            ].join(""));
        }
        code.push("}");
    }
    return code.join("\n");
}
// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
function outerFill(matched, order, proc, body) {
    var dimension = order.length, nargs = proc.arrayArgs.length, blockSize = proc.blockSize, has_index = proc.indexArgs.length > 0, code = [];
    for(var i = 0; i < nargs; ++i)code.push([
        "var offset",
        i,
        "=p",
        i
    ].join(""));
    //Generate loops for unmatched dimensions
    // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
    // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
    for(var i = matched; i < dimension; ++i){
        code.push([
            "for(var j" + i + "=SS[",
            order[i],
            "]|0;j",
            i,
            ">0;){"
        ].join("")) // Iterate back to front
        ;
        code.push([
            "if(j",
            i,
            "<",
            blockSize,
            "){"
        ].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
        ;
        code.push([
            "s",
            order[i],
            "=j",
            i
        ].join(""));
        code.push([
            "j",
            i,
            "=0"
        ].join(""));
        code.push([
            "}else{s",
            order[i],
            "=",
            blockSize
        ].join(""));
        code.push([
            "j",
            i,
            "-=",
            blockSize,
            "}"
        ].join(""));
        if (has_index) code.push([
            "index[",
            order[i],
            "]=j",
            i
        ].join(""));
    }
    for(var i = 0; i < nargs; ++i){
        var indexStr = [
            "offset" + i
        ];
        for(var j = matched; j < dimension; ++j)indexStr.push([
            "j",
            j,
            "*t",
            i,
            "p",
            order[j]
        ].join(""));
        code.push([
            "p",
            i,
            "=(",
            indexStr.join("+"),
            ")"
        ].join(""));
    }
    code.push(innerFill(order, proc, body));
    for(var i = matched; i < dimension; ++i)code.push("}");
    return code.join("\n");
}
//Count the number of compatible inner orders
// This is the length of the longest common prefix of the arrays in orders.
// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
function countMatches(orders) {
    var matched = 0, dimension = orders[0].length;
    while(matched < dimension){
        for(var j = 1; j < orders.length; ++j){
            if (orders[j][matched] !== orders[0][matched]) return matched;
        }
        ++matched;
    }
    return matched;
}
//Processes a block according to the given data types
// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
function processBlock(block, proc, dtypes) {
    var code = block.body;
    var pre = [];
    var post = [];
    for(var i = 0; i < block.args.length; ++i){
        var carg = block.args[i];
        if (carg.count <= 0) continue;
        var re = new RegExp(carg.name, "g");
        var ptrStr = "";
        var arrNum = proc.arrayArgs.indexOf(i);
        switch(proc.argTypes[i]){
            case "offset":
                var offArgIndex = proc.offsetArgIndex.indexOf(i);
                var offArg = proc.offsetArgs[offArgIndex];
                arrNum = offArg.array;
                ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
                ;
            case "array":
                ptrStr = "p" + arrNum + ptrStr;
                var localStr = "l" + i;
                var arrStr = "a" + arrNum;
                if (proc.arrayBlockIndices[arrNum] === 0) {
                    if (carg.count === 1) {
                        if (dtypes[arrNum] === "generic") {
                            if (carg.lvalue) {
                                pre.push([
                                    "var ",
                                    localStr,
                                    "=",
                                    arrStr,
                                    ".get(",
                                    ptrStr,
                                    ")"
                                ].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                                ;
                                code = code.replace(re, localStr);
                                post.push([
                                    arrStr,
                                    ".set(",
                                    ptrStr,
                                    ",",
                                    localStr,
                                    ")"
                                ].join(""));
                            } else code = code.replace(re, [
                                arrStr,
                                ".get(",
                                ptrStr,
                                ")"
                            ].join(""));
                        } else code = code.replace(re, [
                            arrStr,
                            "[",
                            ptrStr,
                            "]"
                        ].join(""));
                    } else if (dtypes[arrNum] === "generic") {
                        pre.push([
                            "var ",
                            localStr,
                            "=",
                            arrStr,
                            ".get(",
                            ptrStr,
                            ")"
                        ].join("")) // TODO: Could we optimize by checking for carg.rvalue?
                        ;
                        code = code.replace(re, localStr);
                        if (carg.lvalue) post.push([
                            arrStr,
                            ".set(",
                            ptrStr,
                            ",",
                            localStr,
                            ")"
                        ].join(""));
                    } else {
                        pre.push([
                            "var ",
                            localStr,
                            "=",
                            arrStr,
                            "[",
                            ptrStr,
                            "]"
                        ].join("")) // TODO: Could we optimize by checking for carg.rvalue?
                        ;
                        code = code.replace(re, localStr);
                        if (carg.lvalue) post.push([
                            arrStr,
                            "[",
                            ptrStr,
                            "]=",
                            localStr
                        ].join(""));
                    }
                } else {
                    var reStrArr = [
                        carg.name
                    ], ptrStrArr = [
                        ptrStr
                    ];
                    for(var j = 0; j < Math.abs(proc.arrayBlockIndices[arrNum]); j++){
                        reStrArr.push("\\s*\\[([^\\]]+)\\]");
                        ptrStrArr.push("$" + (j + 1) + "*t" + arrNum + "b" + j) // Matched index times stride
                        ;
                    }
                    re = new RegExp(reStrArr.join(""), "g");
                    ptrStr = ptrStrArr.join("+");
                    if (dtypes[arrNum] === "generic") /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }*/ throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                    else // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
                    code = code.replace(re, [
                        arrStr,
                        "[",
                        ptrStr,
                        "]"
                    ].join(""));
                }
                break;
            case "scalar":
                code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i));
                break;
            case "index":
                code = code.replace(re, "index");
                break;
            case "shape":
                code = code.replace(re, "shape");
                break;
        }
    }
    return [
        pre.join("\n"),
        code,
        post.join("\n")
    ].join("\n").trim();
}
function typeSummary(dtypes) {
    var summary = new Array(dtypes.length);
    var allEqual = true;
    for(var i = 0; i < dtypes.length; ++i){
        var t = dtypes[i];
        var digits = t.match(/\d+/);
        if (!digits) digits = "";
        else digits = digits[0];
        if (t.charAt(0) === 0) summary[i] = "u" + t.charAt(1) + digits;
        else summary[i] = t.charAt(0) + digits;
        if (i > 0) allEqual = allEqual && summary[i] === summary[i - 1];
    }
    if (allEqual) return summary[0];
    return summary.join("");
}
//Generates a cwise operator
function generateCWiseOp(proc, typesig) {
    //Compute dimension
    // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
    var dimension = typesig[1].length - Math.abs(proc.arrayBlockIndices[0]) | 0;
    var orders = new Array(proc.arrayArgs.length);
    var dtypes = new Array(proc.arrayArgs.length);
    for(var i = 0; i < proc.arrayArgs.length; ++i){
        dtypes[i] = typesig[2 * i];
        orders[i] = typesig[2 * i + 1];
    }
    //Determine where block and loop indices start and end
    var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
    ;
    var loopBegin = [], loopEnd = [] // These indices are iterated over
    ;
    var loopOrders = [] // orders restricted to the loop indices
    ;
    for(var i = 0; i < proc.arrayArgs.length; ++i){
        if (proc.arrayBlockIndices[i] < 0) {
            loopBegin.push(0);
            loopEnd.push(dimension);
            blockBegin.push(dimension);
            blockEnd.push(dimension + proc.arrayBlockIndices[i]);
        } else {
            loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
            ;
            loopEnd.push(proc.arrayBlockIndices[i] + dimension);
            blockBegin.push(0);
            blockEnd.push(proc.arrayBlockIndices[i]);
        }
        var newOrder = [];
        for(var j = 0; j < orders[i].length; j++)if (loopBegin[i] <= orders[i][j] && orders[i][j] < loopEnd[i]) newOrder.push(orders[i][j] - loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
        ;
        loopOrders.push(newOrder);
    }
    //First create arguments for procedure
    var arglist = [
        "SS"
    ] // SS is the overall shape over which we iterate
    ;
    var code = [
        "'use strict'"
    ];
    var vars = [];
    for(var j = 0; j < dimension; ++j)vars.push([
        "s",
        j,
        "=SS[",
        j,
        "]"
    ].join("")) // The limits for each dimension.
    ;
    for(var i = 0; i < proc.arrayArgs.length; ++i){
        arglist.push("a" + i) // Actual data array
        ;
        arglist.push("t" + i) // Strides
        ;
        arglist.push("p" + i) // Offset in the array at which the data starts (also used for iterating over the data)
        ;
        for(var j = 0; j < dimension; ++j)vars.push([
            "t",
            i,
            "p",
            j,
            "=t",
            i,
            "[",
            loopBegin[i] + j,
            "]"
        ].join(""));
        for(var j = 0; j < Math.abs(proc.arrayBlockIndices[i]); ++j)vars.push([
            "t",
            i,
            "b",
            j,
            "=t",
            i,
            "[",
            blockBegin[i] + j,
            "]"
        ].join(""));
    }
    for(var i = 0; i < proc.scalarArgs.length; ++i)arglist.push("Y" + i);
    if (proc.shapeArgs.length > 0) vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
    ;
    if (proc.indexArgs.length > 0) {
        // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
        var zeros = new Array(dimension);
        for(var i = 0; i < dimension; ++i)zeros[i] = "0";
        vars.push([
            "index=[",
            zeros.join(","),
            "]"
        ].join(""));
    }
    for(var i = 0; i < proc.offsetArgs.length; ++i){
        var off_arg = proc.offsetArgs[i];
        var init_string = [];
        for(var j = 0; j < off_arg.offset.length; ++j){
            if (off_arg.offset[j] === 0) continue;
            else if (off_arg.offset[j] === 1) init_string.push([
                "t",
                off_arg.array,
                "p",
                j
            ].join(""));
            else init_string.push([
                off_arg.offset[j],
                "*t",
                off_arg.array,
                "p",
                j
            ].join(""));
        }
        if (init_string.length === 0) vars.push("q" + i + "=0");
        else vars.push([
            "q",
            i,
            "=",
            init_string.join("+")
        ].join(""));
    }
    //Prepare this variables
    var thisVars = uniq([].concat(proc.pre.thisVars).concat(proc.body.thisVars).concat(proc.post.thisVars));
    vars = vars.concat(thisVars);
    if (vars.length > 0) code.push("var " + vars.join(","));
    for(var i = 0; i < proc.arrayArgs.length; ++i)code.push("p" + i + "|=0");
    //Inline prelude
    if (proc.pre.body.length > 3) code.push(processBlock(proc.pre, proc, dtypes));
    //Process body
    var body = processBlock(proc.body, proc, dtypes);
    var matched = countMatches(loopOrders);
    if (matched < dimension) code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
    ;
    else code.push(innerFill(loopOrders[0], proc, body));
    //Inline epilog
    if (proc.post.body.length > 3) code.push(processBlock(proc.post, proc, dtypes));
    if (proc.debug) console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------");
    var loopName = [
        proc.funcName || "unnamed",
        "_cwise_loop_",
        orders[0].join("s"),
        "m",
        matched,
        typeSummary(dtypes)
    ].join("");
    var f = new Function([
        "function ",
        loopName,
        "(",
        arglist.join(","),
        "){",
        code.join("\n"),
        "} return ",
        loopName
    ].join(""));
    return f();
}
module.exports = generateCWiseOp;

},{"uniq":"itPtS"}],"itPtS":[function(require,module,exports) {
"use strict";
function unique_pred(list, compare) {
    var ptr = 1, len = list.length, a = list[0], b = list[0];
    for(var i = 1; i < len; ++i){
        b = a;
        a = list[i];
        if (compare(a, b)) {
            if (i === ptr) {
                ptr++;
                continue;
            }
            list[ptr++] = a;
        }
    }
    list.length = ptr;
    return list;
}
function unique_eq(list) {
    var ptr = 1, len = list.length, a = list[0], b = list[0];
    for(var i = 1; i < len; ++i, b = a){
        b = a;
        a = list[i];
        if (a !== b) {
            if (i === ptr) {
                ptr++;
                continue;
            }
            list[ptr++] = a;
        }
    }
    list.length = ptr;
    return list;
}
function unique(list, compare, sorted) {
    if (list.length === 0) return list;
    if (compare) {
        if (!sorted) list.sort(compare);
        return unique_pred(list, compare);
    }
    if (!sorted) list.sort();
    return unique_eq(list);
}
module.exports = unique;

},{}],"f7B8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lanczos2", ()=>c
);
parcelHelpers.export(exports, "lanczos3", ()=>h
);
var _ndarray = require("ndarray");
var _ndarrayDefault = parcelHelpers.interopDefault(_ndarray);
const e = (t, e1)=>{
    if (t <= -e1 || t >= e1) return 0;
    const n1 = t * Math.PI;
    return Math.sin(n1) / n1 * Math.sin(n1 / e1) / (n1 / e1);
}, n = (t)=>Math.round(16383 * t)
, r = (t, r1, o2, a1, s1)=>{
    const l1 = s1 ? 2 : 3, h1 = 1 / o2, c1 = Math.min(1, o2), f = l1 / c1, i = Math.floor(2 * (f + 1)), A = new Int16Array((i + 2) * r1);
    let M = 0;
    for(let o1 = 0; o1 < r1; o1++){
        const s2 = (o1 + 0.5) * h1 + a1, i = Math.max(0, Math.floor(s2 - f)), u = Math.min(t - 1, Math.ceil(s2 + f)), p = u - i + 1, C = new Float32Array(p), L = new Int16Array(p);
        let N = 0, O = 0;
        for(let t2 = i; t2 <= u; t2++){
            const n2 = e((t2 + 0.5 - s2) * c1, l1);
            N += n2, C[O] = n2, O++;
        }
        let S = 0;
        for(let t1 = 0; t1 < C.length; t1++){
            const e2 = C[t1] / N;
            S += e2, L[t1] = n(e2);
        }
        L[r1 >> 1] += n(1 - S);
        let Z = 0;
        for(; Z < L.length && 0 === L[Z];)Z++;
        let _ = L.length - 1;
        for(; _ > 0 && 0 === L[_];)_--;
        const g = _ - Z + 1;
        A[M++] = i + Z, A[M++] = g, A.set(L.subarray(Z, _ + 1), M), M += g;
    }
    return A;
}, o = (t)=>t < 0 ? 0 : t > 255 ? 255 : t
, a = (t, e3, n3)=>{
    const [r, a2] = t.shape, [s3] = e3.shape;
    for(let r2 = 0; r2 < a2; r2++){
        const a3 = r2;
        let l = 0;
        for(let h2 = 0; h2 < s3; h2++){
            let s4 = n3[l++], c2 = 0, f = 0, i = 0, A = 0;
            for(let e4 = n3[l++]; e4 > 0; e4--){
                const e4 = n3[l++];
                c2 += e4 * t.get(s4, r2, 0), f += e4 * t.get(s4, r2, 1), i += e4 * t.get(s4, r2, 2), A += e4 * t.get(s4, r2, 3), s4++;
            }
            e3.set(h2, a3, 0, o(c2 + 8192 >> 14)), e3.set(h2, a3, 1, o(f + 8192 >> 14)), e3.set(h2, a3, 2, o(i + 8192 >> 14)), e3.set(h2, a3, 3, o(A + 8192 >> 14));
        }
    }
};
var s;
function l(e5, n4, o3) {
    const [l2, h3] = e5.shape, [c3, f] = n4.shape, i = f / h3, A = r(l2, c3, c3 / l2, 0, o3 === s.LANCZOS_2), M = r(h3, f, i, 0, o3 === s.LANCZOS_2), u = _ndarrayDefault.default(new Uint8Array(c3 * h3 * 4), [
        h3,
        c3,
        4
    ]), p = u.transpose(1, 0), C = n4.transpose(1, 0);
    a(e5, p, A), a(u, C, M);
}
function h(t, e6) {
    l(t, e6, s.LANCZOS_3);
}
function c(t, e7) {
    l(t, e7, s.LANCZOS_2);
}
!function(t) {
    t[t.LANCZOS_3 = 3] = "LANCZOS_3", t[t.LANCZOS_2 = 2] = "LANCZOS_2";
}(s || (s = {
}));

},{"ndarray":"1nDU8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["c5fvK"], null, "parcelRequire36d0")

//# sourceMappingURL=functions.modern.7387dd85.js.map
