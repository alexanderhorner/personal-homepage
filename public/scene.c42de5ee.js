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
})({"6ax2z":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d5293d7bc42de5ee";
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

},{}],"j8oJ1":[function(require,module,exports) {
module.exports = JSON.parse("{\"object\":{\"uuid\":\"B6BEBD25-292C-4ECC-9729-2C0233CBC257\",\"objectType\":\"Scene\",\"name\":\"Untitled\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"layers\":1,\"children\":[{\"uuid\":\"2FEE0B1F-4C11-41EA-9EB7-811A4FAF7E18\",\"objectType\":\"CombinedCamera\",\"name\":\"Camera\",\"matrix\":[0.8849537362095827,0,-0.46567895031738366,0,0.20025296654205962,0.9028176183194612,0.380551044464577,0,0.4204231608270469,-0.4300236598746349,0.798951824447644,0,439.79441042962424,-439.38902927463687,787.2110385943066,1],\"visible\":false,\"layers\":9,\"children\":[{\"uuid\":\"E3F6D54D-4262-4F48-815D-87A431E15474\",\"type\":\"DirectionalLight\",\"name\":\"Default Directional Light\",\"layers\":1,\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,850000,1300000,1000000,1],\"color\":16777215,\"intensity\":0.75,\"shadow\":{\"camera\":{\"uuid\":\"A365B353-F1AA-4566-BF6A-A7B546E473F0\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-5,\"right\":5,\"top\":5,\"bottom\":-5,\"near\":0.5,\"far\":500}}}],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"FD19B0B1-D1E5-4341-AD38-AAA7D0926F8E\"},\"enableHelper\":true,\"cameraType\":\"OrthographicCamera\",\"targetOffset\":1002.7911301345806,\"isUpVectorFlipped\":false,\"angleOffsetFromUp\":0,\"left\":-756,\"right\":756,\"top\":472.5,\"bottom\":-472.5,\"zoomOrtho\":0.6634204312890624,\"nearOrtho\":50,\"far\":50000,\"aspect\":1.6,\"fov\":45,\"focus\":10,\"filmGauge\":35,\"filmOffset\":0,\"zoomPersp\":1,\"nearPersp\":50},{\"uuid\":\"E9D3E202-1712-452A-812C-C169D70BC1AF\",\"objectType\":\"LightDirectional\",\"name\":\"Directional Light\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,18.54182746897986,196.55020093492345,491.48717671575287,1],\"castShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"C4D083D3-E2D7-4A60-AC3E-3E851429926F\"},\"enableHelper\":true,\"color\":16777215,\"intensity\":0.6,\"shadow\":{\"mapSize\":[1024,1024],\"camera\":{\"uuid\":\"01BDC11F-F12E-4EA8-B077-812FA4891D55\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-5000,\"right\":5000,\"top\":5000,\"bottom\":-5000,\"near\":1,\"far\":2500}}},{\"uuid\":\"3380F111-B6AD-47CC-8DE3-1B5B2AB76A02\",\"objectType\":\"Mesh3D\",\"name\":\"Torus\",\"matrix\":[0.9999999998477495,-0.000017453292519035606,0,0,0.000017453292519035606,0.9999999998477495,0,0,0,0,1,0,0,0,0,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":8,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"F65BFDA2-04E9-4F22-8E8F-E14759004348\",\"selectedState\":1,\"states\":[\"FD5B9D45-A023-4BEC-95AB-526328E2D59B\",\"B9526715-FDD4-487D-A038-66581D12CD81\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":10000,\"delay\":0,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"rewind\":true,\"object\":\"3380F111-B6AD-47CC-8DE3-1B5B2AB76A02\",\"state\":\"B9526715-FDD4-487D-A038-66581D12CD81\"}]}]},\"geometry\":\"8DEBA3F0-03AA-4F99-B286-FC30A47000FB\",\"material\":\"3CE51EAE-1962-46CC-988D-87CE142E8308\"},{\"uuid\":\"15090EEF-E1CF-4F32-A3C8-A9CCE571E30D\",\"objectType\":\"VectorObject\",\"name\":\"Shape\",\"matrix\":[1,0,0,0,0,1,-6.123233995736766e-17,0,0,6.123233995736766e-17,1,0,341.6601562499999,83.9765625,0,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"AF060999-104A-419C-911F-CD8C719998A8\"},\"geometry\":\"0BFD384A-41C9-4F08-A449-F4D0B889EA04\",\"material\":\"3F7EF4D6-31ED-4BBB-9DE7-54C3C7CC121C\"},{\"uuid\":\"3B695796-4617-4F45-BF86-E0B33A41DF6B\",\"objectType\":\"CombinedCamera\",\"name\":\"Default Camera\",\"matrix\":[0.7430794812226753,6.938893903907228e-18,-0.6692031713805903,0,0.1040655941726851,0.9878348334545618,0.11555385724104651,0,0.6610622033480099,-0.15550672594392226,0.7340397955771036,0,683.7667499507234,-224.91638685473225,923.6182935093361,1],\"layers\":9,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"B2468481-CBDD-4F0F-B576-73B5F8EA49C6\"},\"enableHelper\":false,\"cameraType\":\"OrthographicCamera\",\"targetOffset\":1002.7911301345804,\"isUpVectorFlipped\":false,\"angleOffsetFromUp\":0,\"left\":-756,\"right\":756,\"top\":472.5,\"bottom\":-472.5,\"zoomOrtho\":0.2635200944657422,\"nearOrtho\":-50000,\"far\":50000,\"aspect\":1.6,\"fov\":45,\"focus\":10,\"filmGauge\":35,\"filmOffset\":0,\"zoomPersp\":1,\"nearPersp\":50},{\"uuid\":\"36878CE4-1A1A-40E5-B27A-7718B3714A24\",\"type\":\"HemisphereLight\",\"name\":\"Default Ambient Light\",\"layers\":1,\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1],\"color\":13882323,\"intensity\":0.75,\"groundColor\":8553090},{\"uuid\":\"60ECDD7F-AC25-49CB-B1FF-FD2C4528A9C5\",\"objectType\":\"Mesh2D\",\"name\":\"Rectangle 6\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,-707.886012254284,343.7732461477317,-621.7177979444532,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"9ED0F9A6-9E17-43AC-B35C-D37052CDBF75\",\"selectedState\":1,\"states\":[\"72A8ECD6-6CAA-4447-A801-1F4556552AA9\",\"8F4DC84A-D3BF-4467-ADAB-F6BA212EB5CC\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":2500,\"delay\":100,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"60ECDD7F-AC25-49CB-B1FF-FD2C4528A9C5\",\"state\":\"8F4DC84A-D3BF-4467-ADAB-F6BA212EB5CC\"}]}]},\"geometry\":\"4B2639B9-D652-4E79-9660-C5EBF5C90368\",\"material\":\"38B5B844-6F7F-42D8-A9CA-FEA9E6EE6C02\"},{\"uuid\":\"838AB513-AF84-4EE3-8F43-9877965013DF\",\"objectType\":\"Mesh2D\",\"name\":\"Rectangle 5\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,-495.0537574528694,411.0544972305579,-435.91730390769953,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"153F1E22-64B0-4DCF-983C-7FA1321B4BF7\",\"selectedState\":1,\"states\":[\"4E922A47-AD35-4B14-9879-7CBF8D3B666C\",\"2C7E2DDD-37E8-4503-AD22-89A95A034D07\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":4000,\"delay\":700,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"838AB513-AF84-4EE3-8F43-9877965013DF\",\"state\":\"2C7E2DDD-37E8-4503-AD22-89A95A034D07\"}]}]},\"geometry\":\"F61EC8ED-E523-4B97-BEBB-41C5E0F56EA2\",\"material\":\"DED67971-44D8-4DEB-B66E-21A133849153\"},{\"uuid\":\"F1820070-D879-42DE-B594-CF94A2E68C1B\",\"objectType\":\"Mesh2D\",\"name\":\"Rectangle 4\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,113.00834009087399,47,-435.91730390769953,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"9A636C42-08AB-40DD-A5D0-FDECC9D48255\",\"selectedState\":1,\"states\":[\"B6F72AC5-B4EE-4A79-AFE6-7121FEBDB7A7\",\"7AFFF451-8E9C-4930-9247-6AC8C0592A18\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":4300,\"delay\":200,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"F1820070-D879-42DE-B594-CF94A2E68C1B\",\"state\":\"7AFFF451-8E9C-4930-9247-6AC8C0592A18\"}]}]},\"geometry\":\"7557B2ED-1F8A-4F46-A4DC-4599C44A02BD\",\"material\":\"A4F2AD68-D2F1-4B40-9C25-1FE6873430E2\"},{\"uuid\":\"449D3AC7-F19C-436E-85B2-5ECAA175B774\",\"objectType\":\"Mesh2D\",\"name\":\"Rectangle 3\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,-321.36337118887536,-162.2262664519276,-167.3626971650084,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"7ADBE203-9E98-4338-997F-11B6CB11086B\",\"selectedState\":1,\"states\":[\"17E0ECD6-6D2D-4FB1-9CEA-ED094D36BC9F\",\"53ECC9F2-EB2E-4A0D-9B03-4511571F10B7\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":3800,\"delay\":100,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"449D3AC7-F19C-436E-85B2-5ECAA175B774\",\"state\":\"53ECC9F2-EB2E-4A0D-9B03-4511571F10B7\"}]}]},\"geometry\":\"C2373EA6-D248-4DF3-B4F4-B20FD71F8617\",\"material\":\"C9F1AEC6-79DB-45E7-9831-AF8D6A2BABDF\"},{\"uuid\":\"79AA6704-1575-4098-BEDA-F5A38DBBECFC\",\"objectType\":\"Mesh2D\",\"name\":\"Rectangle 2\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,231.0337550977456,207,-273.3860648864429,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"A0CBBD8F-0815-41F7-BCB5-E6A69810201D\",\"selectedState\":1,\"states\":[\"AC4A0B89-474B-4C84-BA89-0CB0DEF3FFDB\",\"0A856AE4-5CDD-4D49-A4F7-5E3FBDCD0AA9\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":4,\"duration\":3200,\"delay\":0,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"79AA6704-1575-4098-BEDA-F5A38DBBECFC\",\"state\":\"0A856AE4-5CDD-4D49-A4F7-5E3FBDCD0AA9\"}]}]},\"geometry\":\"6D6514A4-6E9F-4506-9081-094AA919AB99\",\"material\":\"38B5B844-6F7F-42D8-A9CA-FEA9E6EE6C02\"}],\"activeCamera\":\"2FEE0B1F-4C11-41EA-9EB7-811A4FAF7E18\",\"camera\":\"3B695796-4617-4F45-BF86-E0B33A41DF6B\",\"directionalLight\":\"E3F6D54D-4262-4F48-815D-87A431E15474\",\"ambientLight\":\"36878CE4-1A1A-40E5-B27A-7718B3714A24\",\"color\":[0.1607843137254902,0.15294117647058825,0.1450980392156863],\"alpha\":1,\"directionalLightState\":true,\"ambientLightState\":true,\"canvas\":{\"mode\":2,\"preset\":\"crop\",\"editorSize\":{\"width\":1512,\"height\":945},\"color\":[0,0,0,0.5],\"size\":{\"width\":769,\"height\":603}},\"postprocessing\":{\"enabled\":false,\"bloom\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":16,\"intensity\":1,\"luminanceThreshold\":0.9,\"luminanceSmoothing\":0.025,\"blurScale\":1,\"kernelSize\":3},\"chromaticAberration\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"offset\":[10,10]},\"vignette\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"eskil\":false,\"darkness\":0.5,\"offset\":0.5},\"noise\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":14},\"colorAverage\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13},\"hueSaturation\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"_hue\":0,\"hue\":0,\"saturation\":0},\"brightnessContrast\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"contrast\":0,\"brightness\":0},\"depthOfField\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"focalLength\":0.1,\"focusDistance\":0,\"bokehScale\":1},\"pixelation\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"granularity\":30}}},\"metadata\":{\"version\":1.5,\"type\":\"Object\",\"generator\":\"Object3D.toJSON\"},\"geometries\":[{\"uuid\":\"8DEBA3F0-03AA-4F99-B286-FC30A47000FB\",\"userData\":{\"parameters\":{\"width\":566,\"radialSegments\":64,\"tubularSegments\":64,\"arc\":5.462880558742252,\"cornerRadius\":30,\"cornerSegments\":8,\"height\":566,\"depth\":141.5},\"type\":\"TorusGeometry\"}},{\"uuid\":\"0BFD384A-41C9-4F08-A449-F4D0B889EA04\",\"userData\":{\"parameters\":{\"width\":100,\"subdivisions\":40,\"roundness\":0,\"extrudeDepth\":0,\"surfaceMaxCount\":100,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":3,\"height\":100,\"depth\":0},\"shape\":{\"points\":[0,0,0,0,0,0,0],\"shapeHoles\":[],\"isClosed\":false,\"roundness\":0},\"type\":\"VectorGeometry\"}},{\"uuid\":\"4B2639B9-D652-4E79-9660-C5EBF5C90368\",\"userData\":{\"shape\":{\"points\":[-160,110.5,-160,110.5,-160,110.5,110.5,160,110.5,160,110.5,160,110.5,110.5,160,-110.5,160,-110.5,160,-110.5,110.5,-160,-110.5,-160,-110.5,-160,-110.5,110.5],\"shapeHoles\":[],\"isClosed\":true,\"roundness\":110.5},\"parameters\":{\"width\":320,\"depth\":24,\"cornerRadius\":[313,313,313,313],\"cornerType\":0,\"extrudeDepth\":0,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":1,\"height\":221,\"surfaceMaxCount\":1000},\"ui\":{\"enabledIndieCorners\":false},\"type\":\"RectangleGeometry\"}},{\"uuid\":\"F61EC8ED-E523-4B97-BEBB-41C5E0F56EA2\",\"userData\":{\"shape\":{\"points\":[-160,110.5,-160,110.5,-160,110.5,110.5,160,110.5,160,110.5,160,110.5,110.5,160,-110.5,160,-110.5,160,-110.5,110.5,-160,-110.5,-160,-110.5,-160,-110.5,110.5],\"shapeHoles\":[],\"isClosed\":true,\"roundness\":110.5},\"parameters\":{\"width\":320,\"depth\":24,\"cornerRadius\":[313,313,313,313],\"cornerType\":0,\"extrudeDepth\":0,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":1,\"height\":221,\"surfaceMaxCount\":1000},\"ui\":{\"enabledIndieCorners\":false},\"type\":\"RectangleGeometry\"}},{\"uuid\":\"7557B2ED-1F8A-4F46-A4DC-4599C44A02BD\",\"userData\":{\"shape\":{\"points\":[-263,114,-263,114,-263,114,114,263,114,263,114,263,114,114,263,-114,263,-114,263,-114,114,-263,-114,-263,-114,-263,-114,114],\"shapeHoles\":[],\"isClosed\":true,\"roundness\":114},\"parameters\":{\"width\":526,\"depth\":24,\"cornerRadius\":[595,595,595,595],\"cornerType\":0,\"extrudeDepth\":0,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":1,\"height\":228,\"surfaceMaxCount\":1000},\"ui\":{\"enabledIndieCorners\":false},\"type\":\"RectangleGeometry\"}},{\"uuid\":\"C2373EA6-D248-4DF3-B4F4-B20FD71F8617\",\"userData\":{\"shape\":{\"points\":[-220,109.5,-220,109.5,-220,109.5,109.5,220,109.5,220,109.5,220,109.5,109.5,220,-109.5,220,-109.5,220,-109.5,109.5,-220,-109.5,-220,-109.5,-220,-109.5,109.5],\"shapeHoles\":[],\"isClosed\":true,\"roundness\":109.5},\"parameters\":{\"width\":440,\"depth\":22,\"cornerRadius\":[515,515,515,515],\"cornerType\":0,\"extrudeDepth\":0,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":1,\"height\":219,\"surfaceMaxCount\":1000},\"ui\":{\"enabledIndieCorners\":false},\"type\":\"RectangleGeometry\"}},{\"uuid\":\"6D6514A4-6E9F-4506-9081-094AA919AB99\",\"userData\":{\"shape\":{\"points\":[-207,160,-207,160,-207,160,160,207,160,207,160,207,160,160,207,-160,207,-160,207,-160,160,-207,-160,-207,-160,-207,-160,160],\"shapeHoles\":[],\"isClosed\":true,\"roundness\":160},\"parameters\":{\"width\":414,\"depth\":24,\"cornerRadius\":[442,442,442,442],\"cornerType\":0,\"extrudeDepth\":0,\"extrudeBevelSize\":0,\"extrudeBevelSegments\":1,\"height\":320,\"surfaceMaxCount\":1000},\"ui\":{\"enabledIndieCorners\":false},\"type\":\"RectangleGeometry\"}}],\"materials\":[{\"uuid\":\"3CE51EAE-1962-46CC-988D-87CE142E8308\",\"type\":\"ShaderMaterial\",\"side\":2,\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"BasicMaterial\",\"category\":\"basic\",\"nodeType\":\"BasicNodeMaterial\",\"layers\":{\"id\":6,\"uuid\":\"4D20AAEC-2218-4C77-92A7-7152800EBE65\",\"head\":{\"id\":2,\"type\":\"transmission\",\"defines\":{},\"uniforms\":{\"f2_thickness\":\"FFD576E6-E3B4-42CB-9285-EEC44A38092A\",\"f2_ior\":\"8A6A42AB-37A2-449D-9732-D33D166D062B\",\"f2_roughness\":\"058DD295-65CD-4C0C-931B-0050ADA1C18A\",\"f2_transmissionSamplerSize\":\"02B249DB-3B66-4F4C-85A5-D235F427C783\",\"f2_transmissionSamplerMap\":\"01F9DF36-B11E-4BEC-972F-26313E1E90C2\",\"f2_transmissionDepthMap\":\"AB65AC8A-A8F2-44E3-8CBA-BB4F1754F8A0\",\"f2_aspectRatio\":\"57657F6B-74D4-405D-87C9-3A950D4F434E\",\"f2_alpha\":\"086ED7DF-C949-4975-9418-23C08646C9F6\",\"f2_mode\":\"96A20A0E-B117-4E6F-9A7C-FF0CA03952B3\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"923CD5FA-F536-4283-B252-D82079FD301F\",\"f1_mode\":\"430DA49D-4351-4923-A0AC-558EC9340AC8\",\"f1_roughness\":\"FEBE09FC-7655-4EEF-A517-58A190F2F106\",\"f1_metalness\":\"82A21CE6-62E0-48D1-B414-9E0D77903EE0\",\"f1_reflectivity\":\"EADEC898-98BC-4E34-945C-C3E6BC4A9E8C\",\"f1_shininess\":\"EBBD8958-B954-471D-AC3C-AE13DB6ED260\",\"f1_specular\":\"AA36088E-2F53-4CCA-808B-DFC4F33CB674\",\"f1_emissive\":\"29C2B057-6A47-403D-83E1-CDCB1711BC7D\"},\"next\":{\"id\":4,\"type\":\"fresnel\",\"defines\":{},\"uniforms\":{\"f4_color\":\"DCB49074-3324-4891-8217-0C04CF9D0672\",\"f4_bias\":\"E936D102-E205-4781-B37F-1E3A69FBBD0F\",\"f4_scale\":\"52C2D51C-01AA-4813-B784-89748280B226\",\"f4_intensity\":\"ABD3E187-DCB2-40CF-8695-A1AB471A2647\",\"f4_factor\":\"9F918D3C-252C-4F69-A399-1DC47F65D012\",\"f4_alpha\":\"9BDCC298-0999-4F0E-B5F9-996C7441E5D8\",\"f4_mode\":\"7B4F8309-E79D-4325-805B-AC8CE46658DB\"},\"next\":{\"id\":5,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f5_scale\":\"F675FB56-DF68-4E9C-B452-5AD00E8131CB\",\"f5_size\":\"0B76841E-4990-45F0-8091-356EAE3BA849\",\"f5_move\":\"6517D494-E10F-4A2D-B1A6-24E05393C567\",\"f5_fA\":\"C5B9CE64-9C6C-434D-98C5-0EE5A6E29CFB\",\"f5_fB\":\"E2BD4EEF-040D-4D96-AD74-CE0FB855EE45\",\"f5_distortion\":\"CFC32FA2-E212-4B96-8398-287646175A43\",\"f5_colorA\":\"F2B3F1CC-558A-41A4-BDD8-9456DCC74C1C\",\"f5_colorB\":\"8C294C8C-5A40-47BD-8877-4195D6E41443\",\"f5_colorC\":\"CA4C9CB3-2EF7-4667-AA74-2EE173D2F0BF\",\"f5_colorD\":\"CE729B39-F8C5-4E7A-BAB3-92DEA687CD77\",\"f5_intA\":\"A55DA67B-1F83-4E83-B077-740029B16D17\",\"f5_intB\":\"1A7E261A-2DD5-429B-8EAC-CDA604F0253F\",\"f5_intC\":\"A45299CB-4B94-47D1-A65A-52492AE93A0D\",\"f5_intD\":\"C2185125-4751-4F8C-9FC7-37192AAA1780\",\"f5_alpha\":\"E686A1EA-CB53-468F-8D7B-0F83B3536DD6\",\"f5_mode\":\"4BF66473-3C21-48E5-BF23-4CE5E47E0772\",\"f5_noiseType\":\"FB1B4569-4152-483B-A92A-70468B107738\"}}}}}}},\"glslVersion\":null,\"defines\":{\"NUM_SAMPLES\":30},\"extensions\":{\"derivatives\":true,\"shaderTextureLOD\":true},\"vertex\":\"492103FD-0A6B-47F1-A1AC-3B7C0D08F78A\",\"fragment\":\"492103FD-0A6B-47F1-A1AC-3B7C0D08F78A\"},{\"uuid\":\"3F7EF4D6-31ED-4BBB-9DE7-54C3C7CC121C\",\"type\":\"ShaderMaterial\",\"side\":2,\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"BasicMaterial\",\"category\":\"Basic\",\"nodeType\":\"BasicNodeMaterial\",\"layers\":{\"id\":2,\"uuid\":\"E0B44F6D-0850-4FAD-A4C3-CC52AE03E828\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"D6226A74-6294-4EE7-A464-13C1D7C2C74A\",\"f0_alpha\":\"0100C18A-C13E-49A1-B638-C410BC4B186F\",\"f0_mode\":\"14C53EBE-93C7-4CF0-BF60-D25146FA1782\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"051A9359-9329-443A-8277-7F82E1CA2AC9\",\"f1_mode\":\"EE3CAB5E-7B42-48E5-A413-95490217A52D\"}}}}},\"glslVersion\":null,\"vertex\":\"B526D98E-A8AA-41DE-ACDE-DB46FAD5EF65\",\"fragment\":\"B526D98E-A8AA-41DE-ACDE-DB46FAD5EF65\"},{\"uuid\":\"38B5B844-6F7F-42D8-A9CA-FEA9E6EE6C02\",\"type\":\"ShaderMaterial\",\"emissiveIntensity\":{\"uuid\":\"4C2BD3F2-C574-418A-9675-04D3896BAA9D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"flatShading\":true,\"userData\":{\"type\":\"LambertMaterial\",\"category\":\"Lambert\",\"nodeType\":\"LambertNodeMaterial\",\"layers\":{\"id\":6,\"uuid\":\"AF31997B-255B-4444-81A2-C31F5A9DA4F6\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"62730F52-0FD6-4502-A6F8-1B635EC4234E\",\"f0_alpha\":\"6310A01C-E4C1-46A0-90A6-03D49034CC3C\",\"f0_mode\":\"BF01C291-C9D1-4120-BA45-C42CC604A36F\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"5FE3497D-4C7D-4A42-B8B7-1AC30D7D5907\",\"f1_mode\":\"06922359-ECDF-4DBA-BFC8-0BA3B4523643\",\"f1_emissive\":\"6617AC12-2BF1-4695-9774-B7EB48FE635A\"}}}}},\"glslVersion\":null,\"defines\":{\"LAMBERT\":1,\"NUM_SAMPLES\":30},\"extensions\":{\"derivatives\":true},\"vertex\":\"41B2D765-434F-4279-B625-0AA7980BDE12\",\"fragment\":\"41B2D765-434F-4279-B625-0AA7980BDE12\"},{\"uuid\":\"DED67971-44D8-4DEB-B66E-21A133849153\",\"type\":\"ShaderMaterial\",\"emissiveIntensity\":{\"uuid\":\"FED6EE7A-EA74-4D1B-AD98-E576FF5E6E12\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"LambertMaterial\",\"category\":\"Lambert\",\"nodeType\":\"LambertNodeMaterial\",\"layers\":{\"id\":2,\"uuid\":\"6844D512-97F3-4D75-9AD6-454AE5068C4C\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"0B524479-DDB8-4BEE-9AC8-C8BA4D848A72\",\"f0_alpha\":\"BC852116-1798-486F-B4F3-97E3C5B1FD6F\",\"f0_mode\":\"67C32696-2286-4C1B-B140-C4B44F4AE588\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"CE5C708B-4730-4CA7-9EBD-03E3A8D2B610\",\"f1_mode\":\"B80C63AF-26B3-4F2C-B4F0-6C997A020F88\",\"f1_emissive\":\"E807F7F7-6189-4BDA-A183-9B9D5D7B16E8\"}}}}},\"glslVersion\":null,\"defines\":{\"LAMBERT\":1},\"extensions\":{\"derivatives\":true},\"vertex\":\"A8C67CE6-347C-4990-97A2-EC3D601CD69D\",\"fragment\":\"A8C67CE6-347C-4990-97A2-EC3D601CD69D\"},{\"uuid\":\"A4F2AD68-D2F1-4B40-9C25-1FE6873430E2\",\"type\":\"ShaderMaterial\",\"emissiveIntensity\":{\"uuid\":\"85093F1E-BF2E-4E90-A3D5-637F7AA9B152\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"LambertMaterial\",\"category\":\"Lambert\",\"nodeType\":\"LambertNodeMaterial\",\"layers\":{\"id\":3,\"uuid\":\"1F2F1488-3837-4A48-97F9-772B72A9A2DA\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"EFDA8ADF-719E-437D-AF2B-6B559D2328E7\",\"f0_alpha\":\"47F3EB11-C4DA-4C94-8D60-6BA2870599F2\",\"f0_mode\":\"BCAA3208-EC2E-40A4-A6DE-369FF8E86747\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"F1537339-D54A-44D8-82CF-2C003B5DDB45\",\"f1_mode\":\"170DEAC9-D09C-4AE4-8679-81AE796F1CF7\",\"f1_emissive\":\"5A2DD18E-560D-407D-871E-04F74D4AC4AD\"}}}}},\"glslVersion\":null,\"defines\":{\"LAMBERT\":1},\"extensions\":{\"derivatives\":true},\"vertex\":\"04BD4922-D46B-4276-90B1-D9DC80E45531\",\"fragment\":\"04BD4922-D46B-4276-90B1-D9DC80E45531\"},{\"uuid\":\"C9F1AEC6-79DB-45E7-9831-AF8D6A2BABDF\",\"type\":\"ShaderMaterial\",\"emissiveIntensity\":{\"uuid\":\"62A33C42-9558-4347-A775-1491CDA205B1\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"LambertMaterial\",\"category\":\"Lambert\",\"nodeType\":\"LambertNodeMaterial\",\"layers\":{\"id\":3,\"uuid\":\"CA341466-874C-46B5-8B6C-63B63D212D9D\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"0D8C9C31-A604-4784-B925-C709BE195552\",\"f0_alpha\":\"12FD72D2-4ACB-4125-8FCB-507F64405868\",\"f0_mode\":\"EB03D63E-1233-4D0B-9BAA-1638FFBF7D33\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"83826885-2C88-4BCF-93B0-D323EE7C099B\",\"f1_mode\":\"320F8821-3FE7-4525-8ED6-25631FA50DD6\",\"f1_emissive\":\"1EE05C2E-B3DE-41B5-A6E0-4BA8BFF20942\"}}}}},\"glslVersion\":null,\"defines\":{\"LAMBERT\":1},\"extensions\":{\"derivatives\":true},\"vertex\":\"BCEA45C2-E467-48BC-8D15-793E6E5B3735\",\"fragment\":\"BCEA45C2-E467-48BC-8D15-793E6E5B3735\"}],\"textures\":[{\"uuid\":\"B142D50B-2127-4F36-897F-7798DBB5FE40\",\"name\":\"\",\"mapping\":300,\"repeat\":[1,1],\"offset\":[0,0],\"center\":[0,0],\"rotation\":0,\"wrap\":[1001,1001],\"format\":1023,\"type\":1009,\"encoding\":3000,\"minFilter\":1008,\"magFilter\":1006,\"anisotropy\":1,\"flipY\":true,\"premultiplyAlpha\":false,\"unpackAlignment\":4,\"image\":\"5D7F83D9-6B0C-4AEE-BF3C-A7B781AC2F19\"},{\"uuid\":\"3F3E87F8-8E75-4C7F-97A1-8C0C863C5B30\",\"name\":\"\",\"mapping\":300,\"repeat\":[1,1],\"offset\":[0,0],\"center\":[0,0],\"rotation\":0,\"wrap\":[1001,1001],\"format\":1026,\"type\":1012,\"encoding\":3000,\"minFilter\":1003,\"magFilter\":1003,\"anisotropy\":1,\"flipY\":false,\"premultiplyAlpha\":false,\"unpackAlignment\":4,\"image\":\"53A78904-A2A0-444C-BC81-F2D680958A5A\"}],\"images\":[{\"uuid\":\"5D7F83D9-6B0C-4AEE-BF3C-A7B781AC2F19\",\"url\":{}},{\"uuid\":\"53A78904-A2A0-444C-BC81-F2D680958A5A\",\"url\":{}}],\"interactionStates\":[{\"uuid\":\"FD5B9D45-A023-4BEC-95AB-526328E2D59B\",\"name\":\"Base State\",\"position\":[0,0,0],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":566,\"height\":566,\"depth\":141.5},\"material\":{\"layersList\":[{\"id\":2,\"type\":\"transmission\",\"defines\":{},\"uniforms\":{\"f2_thickness\":\"73D56A41-F5C8-4CA0-AD0B-3676AAA12003\",\"f2_ior\":\"BD68F02B-FB7C-4855-8372-C15C83D752E7\",\"f2_roughness\":\"FA1846C2-C6EE-4846-A9FC-31F1F7A26BCB\",\"f2_transmissionSamplerSize\":\"AD175DED-FF66-4359-9D97-8A5B419CDA22\",\"f2_aspectRatio\":\"DAFBDB94-934C-45FC-925D-04A161BD76EC\",\"f2_alpha\":\"569198E6-5AB0-4F27-8F92-78E907870A4D\",\"f2_mode\":\"5F99800B-A1B5-4B97-9FBD-F7539707C60F\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"CE22053B-A10D-44E5-A2C4-128F9B4C7727\",\"f1_mode\":\"21818D38-E80D-47EB-AFD9-3024C63CADAC\"}},{\"id\":4,\"type\":\"fresnel\",\"defines\":{},\"uniforms\":{\"f4_color\":\"2FE6B390-3CC7-4CA2-92AE-795B2FF16E6E\",\"f4_bias\":\"EC727843-B6DE-4C76-BFBD-F6354E14F664\",\"f4_scale\":\"3368FA48-FA02-4A51-A8E1-5AAD7306C8C5\",\"f4_intensity\":\"9B97D9A6-105E-4B6B-94E9-A527CBBA7129\",\"f4_factor\":\"14916384-D1FC-49C4-8706-71648BEFCB65\",\"f4_alpha\":\"9B5BD9CF-B776-47F6-B489-76E33AA63A08\",\"f4_mode\":\"E1AF9D1B-1B10-461E-8254-E164FF43E37A\"}},{\"id\":5,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f5_scale\":\"4E145D39-C042-4223-985D-2696A9FCF9E0\",\"f5_size\":\"2AE376E3-FD1D-4EFC-A64B-1BAC135D00E4\",\"f5_move\":\"6757A9C2-6A3D-4E93-AB5D-91C45EAC1978\",\"f5_fA\":\"58E9AE10-D05B-4980-825D-F771DDFA4A9E\",\"f5_fB\":\"85557F2D-E62F-4F40-8491-9FAFD9499203\",\"f5_distortion\":\"898CF2E8-2755-4C78-9295-6479EF7E9179\",\"f5_colorA\":\"BE6F7FDF-2856-44B2-A742-511ED5DD2246\",\"f5_colorB\":\"CC3C4F3E-22A2-4469-880F-45933955D066\",\"f5_colorC\":\"0D0D6D73-0726-4016-86AA-5D26A84F80E4\",\"f5_colorD\":\"B3BB481B-4A86-4DDA-B90C-00BC154A826C\",\"f5_intA\":\"8468F192-19E6-45F3-9DA7-B7EE6C6E482B\",\"f5_intB\":\"1A7F5C48-B6E1-49B8-BD2B-0D6FFE42F2A8\",\"f5_intC\":\"0AA95F42-DF87-4D05-A050-2B378BE0BC77\",\"f5_intD\":\"62B0E271-7FBD-4CC6-AB4E-F1E1680DF793\",\"f5_alpha\":\"BE56342D-9AA0-45F3-9769-9955381A61BA\",\"f5_mode\":\"4E2858C8-06B4-4871-96F4-96D254C08089\",\"f5_noiseType\":\"C2EE9F3A-D569-4859-B7F4-2E5F20A2C716\"}}]}},{\"uuid\":\"B9526715-FDD4-487D-A038-66581D12CD81\",\"name\":\"State 1\",\"position\":[0,0,0],\"rotation\":[0,0,6.283167853887067,\"XYZ\"],\"scale\":[1.0000000000000582,1.0000000000000582,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":566,\"height\":566,\"depth\":141.5},\"material\":{\"layersList\":[{\"id\":2,\"type\":\"transmission\",\"defines\":{},\"uniforms\":{\"f2_thickness\":\"40F1D9CF-D417-49A4-8335-1AC9B73D9DB1\",\"f2_ior\":\"7A38C645-5D22-48DB-859F-501CF72476BB\",\"f2_roughness\":\"94CCC8ED-2146-4F47-90B1-01422467DF97\",\"f2_transmissionSamplerSize\":\"2FA36442-1446-48DF-99FA-4AB023DD76FD\",\"f2_aspectRatio\":\"A2EA021C-3929-4B7D-9E03-F0EEDE15187C\",\"f2_alpha\":\"F6318769-99EF-47D8-B468-80EB0ED392B4\",\"f2_mode\":\"18AA7153-8230-40A6-B32A-0F8FDDA5BAC7\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"A24E9019-5658-43F5-9F06-32DCA082C479\",\"f1_mode\":\"C4A18047-0782-4F3A-A26F-89AC74FDAF2C\"}},{\"id\":4,\"type\":\"fresnel\",\"defines\":{},\"uniforms\":{\"f4_color\":\"F6F7457B-4B3B-4BF1-9EEF-9C655299133D\",\"f4_bias\":\"11B9B5D1-CE4C-418B-A5A3-F7E999B33AAE\",\"f4_scale\":\"70FF4AFF-6D01-40E6-A97B-B58DC5234489\",\"f4_intensity\":\"A7D60357-E895-462A-8611-8CFE97E6AA98\",\"f4_factor\":\"31562C7F-99CE-4EAA-80E4-29D53229F9E6\",\"f4_alpha\":\"4563F090-C9E3-4792-9A74-986F7F29A942\",\"f4_mode\":\"9E104062-B613-4DFB-9868-5195970E5F9A\"}},{\"id\":5,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f5_scale\":\"2BCEBFBD-BF8D-47C7-8CD1-C3FC1CD46D35\",\"f5_size\":\"3AD32354-170F-4BED-B004-2AA1B3199695\",\"f5_move\":\"D1CA9A5D-A4CB-461A-822D-8F86C926B8F9\",\"f5_fA\":\"EDCAC209-E0BB-4800-A0C9-76B978E03D85\",\"f5_fB\":\"B93E9B60-838E-42A7-9BCD-D06A9559FC07\",\"f5_distortion\":\"085DEFE9-60F0-44DE-88A6-7C53014F230D\",\"f5_colorA\":\"2BD9B4CB-243A-40D4-BD45-75A11A7F80F8\",\"f5_colorB\":\"BC628D07-A948-49AA-AC32-2CDBEB5EA404\",\"f5_colorC\":\"DB2A6DB2-0121-4437-A3AA-75B4D6B71968\",\"f5_colorD\":\"773DBA67-5E63-40A0-92A6-76CE70C2E156\",\"f5_intA\":\"AE3413CF-08B5-4D1D-BE7A-4CCDD82025BC\",\"f5_intB\":\"7E0C5F4E-FE7F-4F0D-9D39-57ECE4976D13\",\"f5_intC\":\"8BA13A39-6C35-439C-A4CE-71F766242358\",\"f5_intD\":\"7CE43191-CD06-4AAF-993F-A9F332862D45\",\"f5_alpha\":\"E83FE042-A67A-4854-B309-0AAC15293E72\",\"f5_mode\":\"36325EC5-ADF5-4460-96C6-B0EE215D84E9\",\"f5_noiseType\":\"FCF40259-1CC6-45BE-AF88-55DFC447A083\"}}]}},{\"uuid\":\"72A8ECD6-6CAA-4447-A801-1F4556552AA9\",\"name\":\"Base State\",\"position\":[-663.9140363469028,343.7732461477317,-621.7177979444532],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":320,\"height\":221,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"6C2FA45A-914E-42BB-AF96-BDD95FBDE9D2\",\"f0_alpha\":\"ED68D87D-42A0-4DE8-9163-645CF80F5D48\",\"f0_mode\":\"14E9AC9E-6165-4E66-B7D6-D9E4EA4642F7\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"EA4BE7E6-04B0-4913-B883-1E69DFB62215\",\"f1_mode\":\"C018B51C-E456-4A7B-A561-E6D4F7DCC6D3\",\"f1_emissive\":\"0B0B2581-30FF-4CCA-8A40-9B4A55BFB0C7\"}}]}},{\"uuid\":\"8F4DC84A-D3BF-4467-ADAB-F6BA212EB5CC\",\"name\":\"State 1\",\"position\":[-707.886012254284,343.7732461477317,-621.7177979444532],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":320,\"height\":221,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"DD47AC98-94D3-479E-A644-B015970C28C0\",\"f0_alpha\":\"6503E92C-3BF9-47AF-BD34-DEDC5E8C605C\",\"f0_mode\":\"407438A0-F07A-4584-9F26-FD0BD3EB7066\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"86B8C42E-40D2-4D68-B27D-3CDFDEDB8958\",\"f1_mode\":\"C08D3567-E3C9-4BCD-A7D2-A4DE73A09E2A\",\"f1_emissive\":\"C1CEC394-BC12-49E0-B8F1-CBE81D020207\"}}]}},{\"uuid\":\"4E922A47-AD35-4B14-9879-7CBF8D3B666C\",\"name\":\"Base State\",\"position\":[-422.153196137785,411.0544972305579,-435.91730390769953],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":320,\"height\":221,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"55C9D679-A166-4345-AC4C-936A014E532F\",\"f0_alpha\":\"4F9DD8E4-711D-4806-9A9F-364F8C18360F\",\"f0_mode\":\"F281AFB9-5F6D-4319-ACE1-E4364E109E08\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"0A2DBFBB-06F7-4230-912A-98A273B7632B\",\"f1_mode\":\"534CEAA3-FBD2-44F6-BE92-372A094F6658\",\"f1_emissive\":\"D0D8091A-A3AA-4F13-99CC-604594E7639C\"}}]}},{\"uuid\":\"2C7E2DDD-37E8-4503-AD22-89A95A034D07\",\"name\":\"State 1\",\"position\":[-495.0537574528694,411.0544972305579,-435.91730390769953],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":320,\"height\":221,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"78E40292-3857-4D09-BA09-6C062FBDA998\",\"f0_alpha\":\"76DB782F-CA66-46FA-B849-F92929877846\",\"f0_mode\":\"16B6EC64-EAE3-4FD7-B9B8-E1EEE7EA134A\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"0D694522-FE2C-4A17-AA70-6B6033CEB96E\",\"f1_mode\":\"DAFC7063-5C02-4A23-9191-ABE9CBF4FDAF\",\"f1_emissive\":\"3E932BD9-8D93-41B1-B724-1953ECDFAE14\"}}]}},{\"uuid\":\"B6F72AC5-B4EE-4A79-AFE6-7121FEBDB7A7\",\"name\":\"Base State\",\"position\":[40.65655762019381,47,-435.91730390769953],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":526,\"height\":228,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"7968DABB-4CD8-493A-8EC4-2DA6DADBD071\",\"f0_alpha\":\"6ACB1FA9-C347-421E-853E-ABB456912701\",\"f0_mode\":\"E03619C5-DCBB-4F2A-9F91-8D00C5862348\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"BA46F015-FB8E-4320-9C1E-565BFE603304\",\"f1_mode\":\"8E183718-08CC-4E18-AFD5-B2B7830699ED\",\"f1_emissive\":\"87A6BD19-4CFB-4952-8175-DDCA7DCF6726\"}}]}},{\"uuid\":\"7AFFF451-8E9C-4930-9247-6AC8C0592A18\",\"name\":\"State 1\",\"position\":[113.00834009087399,47,-435.91730390769953],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":526,\"height\":228,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"A5FAAA82-3842-4786-AE96-23339AD01BF8\",\"f0_alpha\":\"C544F032-8B89-41E2-BDA1-CB0EB9F9B830\",\"f0_mode\":\"1A77FEB3-139D-410A-BE06-7B86569FF627\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"63D15A10-CA6C-4952-BF69-8DA23A58E9ED\",\"f1_mode\":\"FEF1A9B0-EB29-48A8-8ED5-63DFDDFDC598\",\"f1_emissive\":\"BCA68419-4EE9-4E26-9999-88B27E1823AB\"}}]}},{\"uuid\":\"17E0ECD6-6D2D-4FB1-9CEA-ED094D36BC9F\",\"name\":\"Base State\",\"position\":[-380.1573530831734,-162.2262664519276,-167.3626971650084],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":440,\"height\":219,\"depth\":22},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"CC4FCC70-ED7B-4319-AB26-A37CA48E2D37\",\"f0_alpha\":\"52C17163-96A2-407E-AC79-D8AB3D55CD4B\",\"f0_mode\":\"A894B7B4-37A1-4664-A679-0C03674A7954\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"ABAFAC82-0AEC-4DD3-94DA-D61BFB2F7235\",\"f1_mode\":\"3367FDB4-BC3B-457B-9072-F94D6682D405\",\"f1_emissive\":\"6E8E597F-471E-485E-A702-1A520BC9918A\"}}]}},{\"uuid\":\"53ECC9F2-EB2E-4A0D-9B03-4511571F10B7\",\"name\":\"State 1\",\"position\":[-321.36337118887536,-162.2262664519276,-167.3626971650084],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":440,\"height\":219,\"depth\":22},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"8F6D7D6E-77F7-4665-A797-64DF5EF53B15\",\"f0_alpha\":\"8C6CA71A-C3BF-48CA-A098-2CA0450D19C9\",\"f0_mode\":\"C7FF748D-2FA8-4953-B282-13870F04E8DC\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"3F8FF9FB-7370-411E-8E85-4962DDD38B93\",\"f1_mode\":\"73C11048-42CC-42FA-95D4-D0B8D7505629\",\"f1_emissive\":\"2AADD604-4339-4E8F-9C1F-046549BF214E\"}}]}},{\"uuid\":\"AC4A0B89-474B-4C84-BA89-0CB0DEF3FFDB\",\"name\":\"Base State\",\"position\":[273.93578870745955,207,-273.3860648864429],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":414,\"height\":320,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"40CEC14B-2342-4082-A63D-797AFC5CD886\",\"f0_alpha\":\"0C0D892D-1BFB-458D-8443-08424AF1856A\",\"f0_mode\":\"D3E7A5C2-B33E-44F2-8C70-A85617D9462F\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"3DF3E4E6-C443-4E2B-9262-97E4F2DD5E36\",\"f1_mode\":\"B2108E8B-9BAE-44F3-A8E8-41731D0A03CF\",\"f1_emissive\":\"11E1B434-7F74-4EBB-9A69-4E62B48FAF03\"}}]}},{\"uuid\":\"0A856AE4-5CDD-4D49-A4F7-5E3FBDCD0AA9\",\"name\":\"State 1\",\"position\":[231.0337550977456,207,-273.3860648864429],\"rotation\":[0,0,0,\"XYZ\"],\"scale\":[1,1,1],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":414,\"height\":320,\"depth\":24},\"material\":{\"layersList\":[{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"B1EBFB4E-65D7-4D54-9BA3-21F45DFA9E8F\",\"f0_alpha\":\"21253822-0817-4D4A-9FD4-5507C12A612D\",\"f0_mode\":\"F590FB50-9679-4BB6-99F8-8ACBD9B60311\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"5ACE36F7-5B1F-4648-9351-BB1641D3F9FF\",\"f1_mode\":\"E882FD9D-0C75-4BE4-AA1F-00AC253C955B\",\"f1_emissive\":\"D1CD7E1F-260C-4C57-9CCE-FE26EF034689\"}}]}}],\"nodes\":[{\"uuid\":\"73D56A41-F5C8-4CA0-AD0B-3676AAA12003\",\"type\":\"f\",\"value\":190,\"nodeType\":\"Float\"},{\"uuid\":\"BD68F02B-FB7C-4855-8372-C15C83D752E7\",\"type\":\"f\",\"value\":1.5,\"nodeType\":\"Float\"},{\"uuid\":\"FA1846C2-C6EE-4846-A9FC-31F1F7A26BCB\",\"type\":\"f\",\"value\":3.041,\"nodeType\":\"Float\"},{\"uuid\":\"AD175DED-FF66-4359-9D97-8A5B419CDA22\",\"type\":\"v2\",\"x\":2048,\"y\":2048,\"nodeType\":\"Vector2\"},{\"uuid\":\"DAFBDB94-934C-45FC-925D-04A161BD76EC\",\"type\":\"v2\",\"x\":0.625,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"569198E6-5AB0-4F27-8F92-78E907870A4D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"5F99800B-A1B5-4B97-9FBD-F7539707C60F\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"CE22053B-A10D-44E5-A2C4-128F9B4C7727\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"21818D38-E80D-47EB-AFD9-3024C63CADAC\",\"type\":\"i\",\"value\":2,\"nodeType\":\"Int\"},{\"uuid\":\"2FE6B390-3CC7-4CA2-92AE-795B2FF16E6E\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"EC727843-B6DE-4C76-BFBD-F6354E14F664\",\"type\":\"f\",\"value\":0.1,\"nodeType\":\"Float\"},{\"uuid\":\"3368FA48-FA02-4A51-A8E1-5AAD7306C8C5\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9B97D9A6-105E-4B6B-94E9-A527CBBA7129\",\"type\":\"f\",\"value\":2,\"nodeType\":\"Float\"},{\"uuid\":\"14916384-D1FC-49C4-8706-71648BEFCB65\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9B5BD9CF-B776-47F6-B489-76E33AA63A08\",\"type\":\"f\",\"value\":0.43,\"nodeType\":\"Float\"},{\"uuid\":\"E1AF9D1B-1B10-461E-8254-E164FF43E37A\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"4E145D39-C042-4223-985D-2696A9FCF9E0\",\"type\":\"f\",\"value\":-0.02,\"nodeType\":\"Float\"},{\"uuid\":\"2AE376E3-FD1D-4EFC-A64B-1BAC135D00E4\",\"type\":\"v3\",\"x\":100,\"y\":100,\"z\":100,\"nodeType\":\"Vector3\"},{\"uuid\":\"6757A9C2-6A3D-4E93-AB5D-91C45EAC1978\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"58E9AE10-D05B-4980-825D-F771DDFA4A9E\",\"type\":\"v2\",\"x\":1.7,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"85557F2D-E62F-4F40-8491-9FAFD9499203\",\"type\":\"v2\",\"x\":8.3,\"y\":2.8,\"nodeType\":\"Vector2\"},{\"uuid\":\"898CF2E8-2755-4C78-9295-6479EF7E9179\",\"type\":\"v2\",\"x\":1,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"BE6F7FDF-2856-44B2-A742-511ED5DD2246\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"CC3C4F3E-22A2-4469-880F-45933955D066\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"0D0D6D73-0726-4016-86AA-5D26A84F80E4\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"B3BB481B-4A86-4DDA-B90C-00BC154A826C\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"8468F192-19E6-45F3-9DA7-B7EE6C6E482B\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"1A7F5C48-B6E1-49B8-BD2B-0D6FFE42F2A8\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"0AA95F42-DF87-4D05-A050-2B378BE0BC77\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"62B0E271-7FBD-4CC6-AB4E-F1E1680DF793\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"BE56342D-9AA0-45F3-9769-9955381A61BA\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"4E2858C8-06B4-4871-96F4-96D254C08089\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"C2EE9F3A-D569-4859-B7F4-2E5F20A2C716\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"40F1D9CF-D417-49A4-8335-1AC9B73D9DB1\",\"type\":\"f\",\"value\":190,\"nodeType\":\"Float\"},{\"uuid\":\"7A38C645-5D22-48DB-859F-501CF72476BB\",\"type\":\"f\",\"value\":1.5,\"nodeType\":\"Float\"},{\"uuid\":\"94CCC8ED-2146-4F47-90B1-01422467DF97\",\"type\":\"f\",\"value\":3.041,\"nodeType\":\"Float\"},{\"uuid\":\"2FA36442-1446-48DF-99FA-4AB023DD76FD\",\"type\":\"v2\",\"x\":2048,\"y\":2048,\"nodeType\":\"Vector2\"},{\"uuid\":\"A2EA021C-3929-4B7D-9E03-F0EEDE15187C\",\"type\":\"v2\",\"x\":0.625,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"F6318769-99EF-47D8-B468-80EB0ED392B4\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"18AA7153-8230-40A6-B32A-0F8FDDA5BAC7\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"A24E9019-5658-43F5-9F06-32DCA082C479\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C4A18047-0782-4F3A-A26F-89AC74FDAF2C\",\"type\":\"i\",\"value\":2,\"nodeType\":\"Int\"},{\"uuid\":\"F6F7457B-4B3B-4BF1-9EEF-9C655299133D\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"11B9B5D1-CE4C-418B-A5A3-F7E999B33AAE\",\"type\":\"f\",\"value\":0.1,\"nodeType\":\"Float\"},{\"uuid\":\"70FF4AFF-6D01-40E6-A97B-B58DC5234489\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"A7D60357-E895-462A-8611-8CFE97E6AA98\",\"type\":\"f\",\"value\":2,\"nodeType\":\"Float\"},{\"uuid\":\"31562C7F-99CE-4EAA-80E4-29D53229F9E6\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"4563F090-C9E3-4792-9A74-986F7F29A942\",\"type\":\"f\",\"value\":0.43,\"nodeType\":\"Float\"},{\"uuid\":\"9E104062-B613-4DFB-9868-5195970E5F9A\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"2BCEBFBD-BF8D-47C7-8CD1-C3FC1CD46D35\",\"type\":\"f\",\"value\":-0.02,\"nodeType\":\"Float\"},{\"uuid\":\"3AD32354-170F-4BED-B004-2AA1B3199695\",\"type\":\"v3\",\"x\":100,\"y\":100,\"z\":100,\"nodeType\":\"Vector3\"},{\"uuid\":\"D1CA9A5D-A4CB-461A-822D-8F86C926B8F9\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"EDCAC209-E0BB-4800-A0C9-76B978E03D85\",\"type\":\"v2\",\"x\":1.7,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"B93E9B60-838E-42A7-9BCD-D06A9559FC07\",\"type\":\"v2\",\"x\":8.3,\"y\":2.8,\"nodeType\":\"Vector2\"},{\"uuid\":\"085DEFE9-60F0-44DE-88A6-7C53014F230D\",\"type\":\"v2\",\"x\":1,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"2BD9B4CB-243A-40D4-BD45-75A11A7F80F8\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"BC628D07-A948-49AA-AC32-2CDBEB5EA404\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"DB2A6DB2-0121-4437-A3AA-75B4D6B71968\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"773DBA67-5E63-40A0-92A6-76CE70C2E156\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"AE3413CF-08B5-4D1D-BE7A-4CCDD82025BC\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"7E0C5F4E-FE7F-4F0D-9D39-57ECE4976D13\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"8BA13A39-6C35-439C-A4CE-71F766242358\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"7CE43191-CD06-4AAF-993F-A9F332862D45\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E83FE042-A67A-4854-B309-0AAC15293E72\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"36325EC5-ADF5-4460-96C6-B0EE215D84E9\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"FCF40259-1CC6-45BE-AF88-55DFC447A083\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"FFD576E6-E3B4-42CB-9285-EEC44A38092A\",\"type\":\"f\",\"value\":338,\"nodeType\":\"Float\"},{\"uuid\":\"8A6A42AB-37A2-449D-9732-D33D166D062B\",\"type\":\"f\",\"value\":1.5,\"nodeType\":\"Float\"},{\"uuid\":\"058DD295-65CD-4C0C-931B-0050ADA1C18A\",\"type\":\"f\",\"value\":3.041,\"nodeType\":\"Float\"},{\"uuid\":\"02B249DB-3B66-4F4C-85A5-D235F427C783\",\"type\":\"v2\",\"x\":2048,\"y\":2048,\"nodeType\":\"Vector2\"},{\"uuid\":\"01F9DF36-B11E-4BEC-972F-26313E1E90C2\",\"type\":\"v4\",\"value\":\"B142D50B-2127-4F36-897F-7798DBB5FE40\",\"uv\":\"F66FB008-C449-4928-8236-9761E94E213D\",\"project\":false,\"nodeType\":\"Texture\"},{\"uuid\":\"F66FB008-C449-4928-8236-9761E94E213D\",\"type\":\"v2\",\"index\":0,\"nodeType\":\"UV\"},{\"uuid\":\"AB65AC8A-A8F2-44E3-8CBA-BB4F1754F8A0\",\"type\":\"v4\",\"value\":\"3F3E87F8-8E75-4C7F-97A1-8C0C863C5B30\",\"uv\":\"1B376861-6614-4AF2-BDEA-66CC655AFD0C\",\"project\":false,\"nodeType\":\"Texture\"},{\"uuid\":\"1B376861-6614-4AF2-BDEA-66CC655AFD0C\",\"type\":\"v2\",\"index\":0,\"nodeType\":\"UV\"},{\"uuid\":\"57657F6B-74D4-405D-87C9-3A950D4F434E\",\"type\":\"v2\",\"x\":0.625,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"086ED7DF-C949-4975-9418-23C08646C9F6\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"96A20A0E-B117-4E6F-9A7C-FF0CA03952B3\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"923CD5FA-F536-4283-B252-D82079FD301F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"430DA49D-4351-4923-A0AC-558EC9340AC8\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"FEBE09FC-7655-4EEF-A517-58A190F2F106\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"82A21CE6-62E0-48D1-B414-9E0D77903EE0\",\"type\":\"f\",\"value\":0,\"nodeType\":\"Float\"},{\"uuid\":\"EADEC898-98BC-4E34-945C-C3E6BC4A9E8C\",\"type\":\"f\",\"value\":0.5,\"nodeType\":\"Float\"},{\"uuid\":\"EBBD8958-B954-471D-AC3C-AE13DB6ED260\",\"type\":\"f\",\"value\":30,\"nodeType\":\"Float\"},{\"uuid\":\"AA36088E-2F53-4CCA-808B-DFC4F33CB674\",\"type\":\"c\",\"r\":0.06666666666666667,\"g\":0.06666666666666667,\"b\":0.06666666666666667,\"value\":1118481,\"nodeType\":\"Color\"},{\"uuid\":\"29C2B057-6A47-403D-83E1-CDCB1711BC7D\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"DCB49074-3324-4891-8217-0C04CF9D0672\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"E936D102-E205-4781-B37F-1E3A69FBBD0F\",\"type\":\"f\",\"value\":0.1,\"nodeType\":\"Float\"},{\"uuid\":\"52C2D51C-01AA-4813-B784-89748280B226\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"ABD3E187-DCB2-40CF-8695-A1AB471A2647\",\"type\":\"f\",\"value\":2,\"nodeType\":\"Float\"},{\"uuid\":\"9F918D3C-252C-4F69-A399-1DC47F65D012\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9BDCC298-0999-4F0E-B5F9-996C7441E5D8\",\"type\":\"f\",\"value\":0.31,\"nodeType\":\"Float\"},{\"uuid\":\"7B4F8309-E79D-4325-805B-AC8CE46658DB\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"F675FB56-DF68-4E9C-B452-5AD00E8131CB\",\"type\":\"f\",\"value\":-0.02,\"nodeType\":\"Float\"},{\"uuid\":\"0B76841E-4990-45F0-8091-356EAE3BA849\",\"type\":\"v3\",\"x\":100,\"y\":100,\"z\":100,\"nodeType\":\"Vector3\"},{\"uuid\":\"6517D494-E10F-4A2D-B1A6-24E05393C567\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C5B9CE64-9C6C-434D-98C5-0EE5A6E29CFB\",\"type\":\"v2\",\"x\":1.7,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"E2BD4EEF-040D-4D96-AD74-CE0FB855EE45\",\"type\":\"v2\",\"x\":8.3,\"y\":2.8,\"nodeType\":\"Vector2\"},{\"uuid\":\"CFC32FA2-E212-4B96-8398-287646175A43\",\"type\":\"v2\",\"x\":1,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"F2B3F1CC-558A-41A4-BDD8-9456DCC74C1C\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"8C294C8C-5A40-47BD-8877-4195D6E41443\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"CA4C9CB3-2EF7-4667-AA74-2EE173D2F0BF\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"CE729B39-F8C5-4E7A-BAB3-92DEA687CD77\",\"type\":\"c\",\"r\":1,\"g\":1,\"b\":1,\"value\":16777215,\"nodeType\":\"Color\"},{\"uuid\":\"A55DA67B-1F83-4E83-B077-740029B16D17\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"1A7E261A-2DD5-429B-8EAC-CDA604F0253F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"A45299CB-4B94-47D1-A65A-52492AE93A0D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C2185125-4751-4F8C-9FC7-37192AAA1780\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E686A1EA-CB53-468F-8D7B-0F83B3536DD6\",\"type\":\"f\",\"value\":0.13,\"nodeType\":\"Float\"},{\"uuid\":\"4BF66473-3C21-48E5-BF23-4CE5E47E0772\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"FB1B4569-4152-483B-A92A-70468B107738\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"492103FD-0A6B-47F1-A1AC-3B7C0D08F78A\",\"type\":\"basic\",\"color\":\"38CCF42A-DCD3-4432-83C5-6ADAB01B8F30\",\"alpha\":\"E16C5DA1-DB83-42C8-9C00-27477D899231\",\"afterColor\":\"68BE3A46-9092-45B3-A763-BD41F05C4E8A\",\"shadingAlpha\":\"923CD5FA-F536-4283-B252-D82079FD301F\",\"shadingBlend\":\"430DA49D-4351-4923-A0AC-558EC9340AC8\",\"nodeType\":\"Basic\"},{\"uuid\":\"38CCF42A-DCD3-4432-83C5-6ADAB01B8F30\",\"type\":\"v3\",\"thickness\":\"FFD576E6-E3B4-42CB-9285-EEC44A38092A\",\"ior\":\"8A6A42AB-37A2-449D-9732-D33D166D062B\",\"roughness\":\"058DD295-65CD-4C0C-931B-0050ADA1C18A\",\"alpha\":\"086ED7DF-C949-4975-9418-23C08646C9F6\",\"calpha\":\"g38CCF42ADCD3443283C56ADAB01B8F30_calpha\",\"nodeType\":\"Transmission\"},{\"uuid\":\"E16C5DA1-DB83-42C8-9C00-27477D899231\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"68BE3A46-9092-45B3-A763-BD41F05C4E8A\",\"type\":\"v3\",\"a\":\"E1DF77E1-2C83-4EE7-9213-8DCF2A6123BD\",\"b\":\"42582D1E-E807-47ED-B65E-F0C867BDB591\",\"alpha\":\"B2D04927-671D-4CAC-A543-9438270DC707\",\"mode\":\"4BF66473-3C21-48E5-BF23-4CE5E47E0772\",\"nodeType\":\"Blend\"},{\"uuid\":\"E1DF77E1-2C83-4EE7-9213-8DCF2A6123BD\",\"type\":\"v3\",\"a\":\"0067CD42-93D6-4576-A9DB-2C81CEDAA290\",\"b\":\"CB6BE8B1-53EB-49C0-B4A1-928B64FEDA79\",\"alpha\":\"605B6442-7FED-4FFB-9679-FD52915B1060\",\"mode\":\"7B4F8309-E79D-4325-805B-AC8CE46658DB\",\"nodeType\":\"Blend\"},{\"uuid\":\"0067CD42-93D6-4576-A9DB-2C81CEDAA290\",\"type\":\"f\",\"src\":\"outgoingLight\",\"isMethod\":false,\"useKeywords\":true,\"extensions\":{},\"keywords\":{},\"nodeType\":\"Expression\"},{\"uuid\":\"CB6BE8B1-53EB-49C0-B4A1-928B64FEDA79\",\"type\":\"v3\",\"color\":\"DCB49074-3324-4891-8217-0C04CF9D0672\",\"bias\":\"E936D102-E205-4781-B37F-1E3A69FBBD0F\",\"scale\":\"52C2D51C-01AA-4813-B784-89748280B226\",\"intensity\":\"ABD3E187-DCB2-40CF-8695-A1AB471A2647\",\"factor\":\"9F918D3C-252C-4F69-A399-1DC47F65D012\",\"alpha\":\"9BDCC298-0999-4F0E-B5F9-996C7441E5D8\",\"mode\":\"7B4F8309-E79D-4325-805B-AC8CE46658DB\",\"calpha\":\"gCB6BE8B153EB49C0B4A1928B64FEDA79_calpha\",\"nodeType\":\"Fresnel\"},{\"uuid\":\"605B6442-7FED-4FFB-9679-FD52915B1060\",\"type\":\"f\",\"src\":\"gCB6BE8B153EB49C0B4A1928B64FEDA79_calpha\",\"isMethod\":false,\"useKeywords\":true,\"extensions\":{},\"keywords\":{},\"nodeType\":\"Expression\"},{\"uuid\":\"42582D1E-E807-47ED-B65E-F0C867BDB591\",\"type\":\"v3\",\"scale\":\"F675FB56-DF68-4E9C-B452-5AD00E8131CB\",\"size\":\"0B76841E-4990-45F0-8091-356EAE3BA849\",\"move\":\"6517D494-E10F-4A2D-B1A6-24E05393C567\",\"fA\":\"C5B9CE64-9C6C-434D-98C5-0EE5A6E29CFB\",\"fB\":\"E2BD4EEF-040D-4D96-AD74-CE0FB855EE45\",\"distortion\":\"CFC32FA2-E212-4B96-8398-287646175A43\",\"colorA\":\"F2B3F1CC-558A-41A4-BDD8-9456DCC74C1C\",\"colorB\":\"8C294C8C-5A40-47BD-8877-4195D6E41443\",\"colorC\":\"CA4C9CB3-2EF7-4667-AA74-2EE173D2F0BF\",\"colorD\":\"CE729B39-F8C5-4E7A-BAB3-92DEA687CD77\",\"intA\":\"A55DA67B-1F83-4E83-B077-740029B16D17\",\"intB\":\"1A7E261A-2DD5-429B-8EAC-CDA604F0253F\",\"intC\":\"A45299CB-4B94-47D1-A65A-52492AE93A0D\",\"intD\":\"C2185125-4751-4F8C-9FC7-37192AAA1780\",\"alpha\":\"E686A1EA-CB53-468F-8D7B-0F83B3536DD6\",\"noiseFunction\":{\"uuid\":\"FB1B4569-4152-483B-A92A-70468B107738\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"nodeType\":\"Noise\"},{\"uuid\":\"B2D04927-671D-4CAC-A543-9438270DC707\",\"type\":\"f\",\"src\":\"alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )\",\"isMethod\":false,\"useKeywords\":true,\"extensions\":{},\"keywords\":{\"alpha\":\"E686A1EA-CB53-468F-8D7B-0F83B3536DD6\"},\"nodeType\":\"Expression\"},{\"uuid\":\"D6226A74-6294-4EE7-A464-13C1D7C2C74A\",\"type\":\"c\",\"r\":0.34901960784313724,\"g\":0.34901960784313724,\"b\":0.34901960784313724,\"value\":5855577,\"alpha\":\"0100C18A-C13E-49A1-B638-C410BC4B186F\",\"nodeType\":\"Color\"},{\"uuid\":\"0100C18A-C13E-49A1-B638-C410BC4B186F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"14C53EBE-93C7-4CF0-BF60-D25146FA1782\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"051A9359-9329-443A-8277-7F82E1CA2AC9\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"EE3CAB5E-7B42-48E5-A413-95490217A52D\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"B526D98E-A8AA-41DE-ACDE-DB46FAD5EF65\",\"type\":\"basic\",\"color\":\"D6226A74-6294-4EE7-A464-13C1D7C2C74A\",\"alpha\":\"967D9E10-F873-4F21-82D5-C2F0F54641AA\",\"shadingAlpha\":\"051A9359-9329-443A-8277-7F82E1CA2AC9\",\"shadingBlend\":\"EE3CAB5E-7B42-48E5-A413-95490217A52D\",\"nodeType\":\"Basic\"},{\"uuid\":\"967D9E10-F873-4F21-82D5-C2F0F54641AA\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"6C2FA45A-914E-42BB-AF96-BDD95FBDE9D2\",\"type\":\"c\",\"r\":0.996078431372549,\"g\":0.4392156862745098,\"b\":0.5568627450980392,\"value\":16674958,\"alpha\":\"36E90A90-9F7B-468D-85DF-78BE0F7FA8B4\",\"nodeType\":\"Color\"},{\"uuid\":\"36E90A90-9F7B-468D-85DF-78BE0F7FA8B4\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"ED68D87D-42A0-4DE8-9163-645CF80F5D48\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"14E9AC9E-6165-4E66-B7D6-D9E4EA4642F7\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"EA4BE7E6-04B0-4913-B883-1E69DFB62215\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C018B51C-E456-4A7B-A561-E6D4F7DCC6D3\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"0B0B2581-30FF-4CCA-8A40-9B4A55BFB0C7\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"DD47AC98-94D3-479E-A644-B015970C28C0\",\"type\":\"c\",\"r\":0.996078431372549,\"g\":0.4392156862745098,\"b\":0.5568627450980392,\"value\":16674958,\"alpha\":\"7D3D626B-79F7-4A17-BC7B-668210C1871D\",\"nodeType\":\"Color\"},{\"uuid\":\"7D3D626B-79F7-4A17-BC7B-668210C1871D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"6503E92C-3BF9-47AF-BD34-DEDC5E8C605C\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"407438A0-F07A-4584-9F26-FD0BD3EB7066\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"86B8C42E-40D2-4D68-B27D-3CDFDEDB8958\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C08D3567-E3C9-4BCD-A7D2-A4DE73A09E2A\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"C1CEC394-BC12-49E0-B8F1-CBE81D020207\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"62730F52-0FD6-4502-A6F8-1B635EC4234E\",\"type\":\"c\",\"r\":0.996078431372549,\"g\":0.4392156862745098,\"b\":0.5568627450980392,\"value\":16674958,\"alpha\":\"6310A01C-E4C1-46A0-90A6-03D49034CC3C\",\"nodeType\":\"Color\"},{\"uuid\":\"6310A01C-E4C1-46A0-90A6-03D49034CC3C\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"BF01C291-C9D1-4120-BA45-C42CC604A36F\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"5FE3497D-4C7D-4A42-B8B7-1AC30D7D5907\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"06922359-ECDF-4DBA-BFC8-0BA3B4523643\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"6617AC12-2BF1-4695-9774-B7EB48FE635A\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"41B2D765-434F-4279-B625-0AA7980BDE12\",\"type\":\"lambert\",\"color\":\"62730F52-0FD6-4502-A6F8-1B635EC4234E\",\"emissiveIntensity\":\"4C2BD3F2-C574-418A-9675-04D3896BAA9D\",\"shadingAlpha\":\"5FE3497D-4C7D-4A42-B8B7-1AC30D7D5907\",\"shadingBlend\":\"06922359-ECDF-4DBA-BFC8-0BA3B4523643\",\"alpha\":\"F8CC9E7A-6D20-422C-8809-289221B6CDAE\",\"emissive\":\"6617AC12-2BF1-4695-9774-B7EB48FE635A\",\"nodeType\":\"Lambert\"},{\"uuid\":\"4C2BD3F2-C574-418A-9675-04D3896BAA9D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"F8CC9E7A-6D20-422C-8809-289221B6CDAE\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"55C9D679-A166-4345-AC4C-936A014E532F\",\"type\":\"c\",\"r\":0.1568627450980392,\"g\":0.7529411764705882,\"b\":0.6313725490196078,\"value\":2670753,\"alpha\":\"C896AC21-81A7-41CE-AD95-1D191AFB395A\",\"nodeType\":\"Color\"},{\"uuid\":\"C896AC21-81A7-41CE-AD95-1D191AFB395A\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"4F9DD8E4-711D-4806-9A9F-364F8C18360F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"F281AFB9-5F6D-4319-ACE1-E4364E109E08\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"0A2DBFBB-06F7-4230-912A-98A273B7632B\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"534CEAA3-FBD2-44F6-BE92-372A094F6658\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"D0D8091A-A3AA-4F13-99CC-604594E7639C\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"78E40292-3857-4D09-BA09-6C062FBDA998\",\"type\":\"c\",\"r\":0.1568627450980392,\"g\":0.7529411764705882,\"b\":0.6313725490196078,\"value\":2670753,\"alpha\":\"F68BAB65-44BD-4F5F-BD6C-0E2495E755B0\",\"nodeType\":\"Color\"},{\"uuid\":\"F68BAB65-44BD-4F5F-BD6C-0E2495E755B0\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"76DB782F-CA66-46FA-B849-F92929877846\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"16B6EC64-EAE3-4FD7-B9B8-E1EEE7EA134A\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"0D694522-FE2C-4A17-AA70-6B6033CEB96E\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"DAFC7063-5C02-4A23-9191-ABE9CBF4FDAF\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"3E932BD9-8D93-41B1-B724-1953ECDFAE14\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"0B524479-DDB8-4BEE-9AC8-C8BA4D848A72\",\"type\":\"c\",\"r\":0.1568627450980392,\"g\":0.7529411764705882,\"b\":0.6313725490196078,\"value\":2670753,\"alpha\":\"BC852116-1798-486F-B4F3-97E3C5B1FD6F\",\"nodeType\":\"Color\"},{\"uuid\":\"BC852116-1798-486F-B4F3-97E3C5B1FD6F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"67C32696-2286-4C1B-B140-C4B44F4AE588\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"CE5C708B-4730-4CA7-9EBD-03E3A8D2B610\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"B80C63AF-26B3-4F2C-B4F0-6C997A020F88\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"E807F7F7-6189-4BDA-A183-9B9D5D7B16E8\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"A8C67CE6-347C-4990-97A2-EC3D601CD69D\",\"type\":\"lambert\",\"color\":\"0B524479-DDB8-4BEE-9AC8-C8BA4D848A72\",\"emissiveIntensity\":\"FED6EE7A-EA74-4D1B-AD98-E576FF5E6E12\",\"shadingAlpha\":\"CE5C708B-4730-4CA7-9EBD-03E3A8D2B610\",\"shadingBlend\":\"B80C63AF-26B3-4F2C-B4F0-6C997A020F88\",\"alpha\":\"498228C2-0F28-40EE-91CA-8B64CDA4E0ED\",\"emissive\":\"E807F7F7-6189-4BDA-A183-9B9D5D7B16E8\",\"nodeType\":\"Lambert\"},{\"uuid\":\"FED6EE7A-EA74-4D1B-AD98-E576FF5E6E12\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"498228C2-0F28-40EE-91CA-8B64CDA4E0ED\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"7968DABB-4CD8-493A-8EC4-2DA6DADBD071\",\"type\":\"c\",\"r\":1,\"g\":0.5647058823529412,\"b\":0.3764705882352941,\"value\":16748640,\"alpha\":\"C64F8434-8963-4581-BE0F-954A3ABF5A56\",\"nodeType\":\"Color\"},{\"uuid\":\"C64F8434-8963-4581-BE0F-954A3ABF5A56\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"6ACB1FA9-C347-421E-853E-ABB456912701\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E03619C5-DCBB-4F2A-9F91-8D00C5862348\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"BA46F015-FB8E-4320-9C1E-565BFE603304\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"8E183718-08CC-4E18-AFD5-B2B7830699ED\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"87A6BD19-4CFB-4952-8175-DDCA7DCF6726\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"A5FAAA82-3842-4786-AE96-23339AD01BF8\",\"type\":\"c\",\"r\":1,\"g\":0.5647058823529412,\"b\":0.3764705882352941,\"value\":16748640,\"alpha\":\"4D3E5EEC-1993-4299-A650-614692093516\",\"nodeType\":\"Color\"},{\"uuid\":\"4D3E5EEC-1993-4299-A650-614692093516\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C544F032-8B89-41E2-BDA1-CB0EB9F9B830\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"1A77FEB3-139D-410A-BE06-7B86569FF627\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"63D15A10-CA6C-4952-BF69-8DA23A58E9ED\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"FEF1A9B0-EB29-48A8-8ED5-63DFDDFDC598\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"BCA68419-4EE9-4E26-9999-88B27E1823AB\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"EFDA8ADF-719E-437D-AF2B-6B559D2328E7\",\"type\":\"c\",\"r\":1,\"g\":0.5647058823529412,\"b\":0.3764705882352941,\"value\":16748640,\"alpha\":\"47F3EB11-C4DA-4C94-8D60-6BA2870599F2\",\"nodeType\":\"Color\"},{\"uuid\":\"47F3EB11-C4DA-4C94-8D60-6BA2870599F2\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"BCAA3208-EC2E-40A4-A6DE-369FF8E86747\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"F1537339-D54A-44D8-82CF-2C003B5DDB45\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"170DEAC9-D09C-4AE4-8679-81AE796F1CF7\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"5A2DD18E-560D-407D-871E-04F74D4AC4AD\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"04BD4922-D46B-4276-90B1-D9DC80E45531\",\"type\":\"lambert\",\"color\":\"EFDA8ADF-719E-437D-AF2B-6B559D2328E7\",\"emissiveIntensity\":\"85093F1E-BF2E-4E90-A3D5-637F7AA9B152\",\"shadingAlpha\":\"F1537339-D54A-44D8-82CF-2C003B5DDB45\",\"shadingBlend\":\"170DEAC9-D09C-4AE4-8679-81AE796F1CF7\",\"alpha\":\"9BB749D5-4B51-44DD-83B3-17AA9800113B\",\"emissive\":\"5A2DD18E-560D-407D-871E-04F74D4AC4AD\",\"nodeType\":\"Lambert\"},{\"uuid\":\"85093F1E-BF2E-4E90-A3D5-637F7AA9B152\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9BB749D5-4B51-44DD-83B3-17AA9800113B\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"CC4FCC70-ED7B-4319-AB26-A37CA48E2D37\",\"type\":\"c\",\"r\":0.5098039215686274,\"g\":0.24313725490196078,\"b\":1,\"value\":8535807,\"alpha\":\"852A6E09-E8B8-4B4A-BEDD-D39C0091DB56\",\"nodeType\":\"Color\"},{\"uuid\":\"852A6E09-E8B8-4B4A-BEDD-D39C0091DB56\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"52C17163-96A2-407E-AC79-D8AB3D55CD4B\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"A894B7B4-37A1-4664-A679-0C03674A7954\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"ABAFAC82-0AEC-4DD3-94DA-D61BFB2F7235\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"3367FDB4-BC3B-457B-9072-F94D6682D405\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"6E8E597F-471E-485E-A702-1A520BC9918A\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"8F6D7D6E-77F7-4665-A797-64DF5EF53B15\",\"type\":\"c\",\"r\":0.5098039215686274,\"g\":0.24313725490196078,\"b\":1,\"value\":8535807,\"alpha\":\"0B0EA3CF-0D3C-4BDD-B8FE-106E026B8032\",\"nodeType\":\"Color\"},{\"uuid\":\"0B0EA3CF-0D3C-4BDD-B8FE-106E026B8032\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"8C6CA71A-C3BF-48CA-A098-2CA0450D19C9\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"C7FF748D-2FA8-4953-B282-13870F04E8DC\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"3F8FF9FB-7370-411E-8E85-4962DDD38B93\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"73C11048-42CC-42FA-95D4-D0B8D7505629\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"2AADD604-4339-4E8F-9C1F-046549BF214E\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"0D8C9C31-A604-4784-B925-C709BE195552\",\"type\":\"c\",\"r\":0.5098039215686274,\"g\":0.24313725490196078,\"b\":1,\"value\":8535807,\"alpha\":\"12FD72D2-4ACB-4125-8FCB-507F64405868\",\"nodeType\":\"Color\"},{\"uuid\":\"12FD72D2-4ACB-4125-8FCB-507F64405868\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"EB03D63E-1233-4D0B-9BAA-1638FFBF7D33\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"83826885-2C88-4BCF-93B0-D323EE7C099B\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"320F8821-3FE7-4525-8ED6-25631FA50DD6\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"1EE05C2E-B3DE-41B5-A6E0-4BA8BFF20942\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"BCEA45C2-E467-48BC-8D15-793E6E5B3735\",\"type\":\"lambert\",\"color\":\"0D8C9C31-A604-4784-B925-C709BE195552\",\"emissiveIntensity\":\"62A33C42-9558-4347-A775-1491CDA205B1\",\"shadingAlpha\":\"83826885-2C88-4BCF-93B0-D323EE7C099B\",\"shadingBlend\":\"320F8821-3FE7-4525-8ED6-25631FA50DD6\",\"alpha\":\"9073FBB6-5ABD-4923-8598-9AD6077FFC71\",\"emissive\":\"1EE05C2E-B3DE-41B5-A6E0-4BA8BFF20942\",\"nodeType\":\"Lambert\"},{\"uuid\":\"62A33C42-9558-4347-A775-1491CDA205B1\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9073FBB6-5ABD-4923-8598-9AD6077FFC71\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"40CEC14B-2342-4082-A63D-797AFC5CD886\",\"type\":\"c\",\"r\":0.996078431372549,\"g\":0.4392156862745098,\"b\":0.5568627450980392,\"value\":16674958,\"alpha\":\"E8A41888-C61A-4E6D-8032-C3858D7D712E\",\"nodeType\":\"Color\"},{\"uuid\":\"E8A41888-C61A-4E6D-8032-C3858D7D712E\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"0C0D892D-1BFB-458D-8443-08424AF1856A\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"D3E7A5C2-B33E-44F2-8C70-A85617D9462F\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"3DF3E4E6-C443-4E2B-9262-97E4F2DD5E36\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"B2108E8B-9BAE-44F3-A8E8-41731D0A03CF\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"11E1B434-7F74-4EBB-9A69-4E62B48FAF03\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"B1EBFB4E-65D7-4D54-9BA3-21F45DFA9E8F\",\"type\":\"c\",\"r\":0.996078431372549,\"g\":0.4392156862745098,\"b\":0.5568627450980392,\"value\":16674958,\"alpha\":\"38288867-94EC-43A2-B681-9B5E20BC30EC\",\"nodeType\":\"Color\"},{\"uuid\":\"38288867-94EC-43A2-B681-9B5E20BC30EC\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"21253822-0817-4D4A-9FD4-5507C12A612D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"F590FB50-9679-4BB6-99F8-8ACBD9B60311\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"5ACE36F7-5B1F-4648-9351-BB1641D3F9FF\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E882FD9D-0C75-4BE4-AA1F-00AC253C955B\",\"type\":\"i\",\"value\":3,\"nodeType\":\"Int\"},{\"uuid\":\"D1CD7E1F-260C-4C57-9CCE-FE26EF034689\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"}],\"frames\":{\"currentId\":\"default-frame-id\",\"coords\":[15.567164179104452,13.104477611940297],\"frames\":{\"default-frame-id\":{\"id\":\"default-frame-id\",\"name\":\"Frame\",\"preset\":\"crop\",\"size\":[769,603],\"coords\":[0,0],\"editorScale\":0.9701492537313433,\"backgroundColor\":{\"r\":41,\"g\":39,\"b\":37,\"a\":1},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":0.5},\"guides\":true,\"hasSceneScaling\":false,\"sceneScale\":1,\"enabled\":false,\"zoom\":1}}},\"assets\":{\"materials\":{\"ddcc5026-5b7e-4323-bc98-a56fb8e8b5e5\":{\"name\":\"Purple\",\"materialUuid\":\"C9F1AEC6-79DB-45E7-9831-AF8D6A2BABDF\",\"uuid\":\"ddcc5026-5b7e-4323-bc98-a56fb8e8b5e5\"},\"febcbc6f-3ebf-4991-a060-c73ac769991a\":{\"name\":\"Pink\",\"materialUuid\":\"38B5B844-6F7F-42D8-A9CA-FEA9E6EE6C02\",\"uuid\":\"febcbc6f-3ebf-4991-a060-c73ac769991a\"},\"5463478b-5f3b-4d63-8a67-80527cecfbce\":{\"name\":\"Purple\",\"materialUuid\":\"A4F2AD68-D2F1-4B40-9C25-1FE6873430E2\",\"uuid\":\"5463478b-5f3b-4d63-8a67-80527cecfbce\"},\"dd5b600b-364a-4456-93d5-53e4bfb32e79\":{\"name\":\"Glass\",\"materialUuid\":\"3CE51EAE-1962-46CC-988D-87CE142E8308\",\"uuid\":\"dd5b600b-364a-4456-93d5-53e4bfb32e79\"},\"34bc76af-30b7-4b6a-954c-3b9c520c92bf\":{\"name\":\"Turquose\",\"materialUuid\":\"DED67971-44D8-4DEB-B66E-21A133849153\",\"uuid\":\"34bc76af-30b7-4b6a-954c-3b9c520c92bf\"}}},\"needsTransmission\":true,\"editor\":{\"orbitControls\":{\"useKeyEvents\":false,\"enableDamping\":true,\"enablePan\":false,\"enableZoom\":false,\"enableRotate\":false,\"rotationLimitsMode\":0,\"rotationVerticalOffset\":{\"min\":1.5707963267948966,\"max\":1.5707963267948966},\"rotationHorizontalOffset\":{\"min\":1.5707963267948966,\"max\":1.5707963267948966},\"autoRotate\":false,\"autoRotateSpeed\":2,\"autoRotateClockwise\":true},\"helperState\":true,\"publish\":{\"type\":2,\"web\":{\"logo\":true}},\"settings\":{\"wireframe\":false,\"helpers\":true}}}");

},{}]},["6ax2z","j8oJ1"], "j8oJ1", "parcelRequire36d0")

//# sourceMappingURL=scene.c42de5ee.js.map
