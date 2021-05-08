// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"portfolio.js":[function(require,module,exports) {
"use strict"; //navigation bar

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getNavLinks = document.querySelectorAll(".nav__link");
getNavLinks.forEach(function (nav) {
  return nav.addEventListener("mouseenter", function (e) {
    if (e.target.classList.contains("nav__link")) {
      var link = e.target;
      var otherLink = link.closest(".nav__links").querySelectorAll(".nav__link");

      var _logo = link.closest("header").querySelector(".logo");

      otherLink.forEach(function (li) {
        if (li !== link) {
          li.style.opacity = 0.5;
          _logo.style.opacity = 0.5;
        }
      });
    }
  });
});
getNavLinks.forEach(function (nav) {
  return nav.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("nav__link")) {
      var link = e.target;
      var otherLink = link.closest(".nav__links").querySelectorAll(".nav__link");

      var _logo2 = link.closest("header").querySelector(".logo");

      otherLink.forEach(function (li) {
        if (li !== link) {
          li.style.opacity = 1;
          _logo2.style.opacity = 1;
        }
      });
    }
  });
}); //hide logo when scrolling

var sectionAbout = document.getElementById("abt");
var sectionSkill = document.getElementById("sk");
var logo = document.querySelector(".logo");

var hideLogo = function hideLogo(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) {
    logo.classList.add("hidden__logo");
  } else {
    logo.classList.remove("hidden__logo");
  }
};

var obsOptions = {
  root: null,
  threshold: 0.7
};
var headerObserver = new IntersectionObserver(hideLogo, obsOptions);
headerObserver.observe(sectionAbout); //Skill display

var getBtn = document.querySelectorAll(".btn");
var resetBtn;
getBtn.forEach(function (btn) {
  btn.addEventListener("click", function (click) {
    clearInterval(autoChangeText);
    document.querySelectorAll(".progress--bar").forEach(function (bar) {
      return bar.style.display = "none";
    });
    clearTimeout(resetBtn);
    var clickedBtn = click.target.closest("button");
    if (!clickedBtn) return;

    var removeBtn = function removeBtn() {
      getBtn.forEach(function (rmvBtn) {
        return rmvBtn.classList.remove("skill__btn--active");
      });
    };

    removeBtn();
    clickedBtn.classList.add("skill__btn--active");
    resetBtn = setTimeout(removeBtn, 10000);
    var getDescription = document.querySelector(".description__".concat(clickedBtn.dataset.type));
    document.querySelectorAll(".description").forEach(function (desc) {
      return desc.classList.remove("description--active");
    });
    getDescription.classList.add("description--active");
  });
}); //auto change text

var idx = 1;

var updateDesc = function updateDesc() {
  document.querySelectorAll(".description").forEach(function (desc) {
    return desc.classList.remove("description--active");
  });
  document.querySelector(".description".concat(idx)).classList.add("description--active");
  idx++;

  if (idx > 2) {
    idx = 0;
  }
};

var autoChangeText = setInterval(updateDesc, 10000); //project modal popup

var modal1 = document.querySelector(".project1__modal");
var overlay = document.querySelector(".overlay");
var btnCloseModal1 = document.querySelector(".modal1__close");
var btnOpenModal1 = document.querySelector(".project1__popup");

var openModal1 = function openModal1() {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

var closeModal1 = function closeModal1() {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal1.addEventListener("click", openModal1);
btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});
var modal2 = document.querySelector(".project2__modal");
var btnCloseModal2 = document.querySelector(".modal2__close");
var btnOpenModal2 = document.querySelector(".project2__popup");

var openModal2 = function openModal2() {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

var closeModal2 = function closeModal2() {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal2.addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
}); //dropdown menu

var getBars = document.getElementById("menu");
var getNav = document.querySelector(".nav__links");
getBars.addEventListener("click", function () {
  getNav.classList.toggle("active");
});
getNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    return getNav.classList.remove("active");
  });
}); //title Read more

var dots = document.querySelector(".title__contain--dots");
var moreText = document.querySelector(".title__contain--more");
var btnText = document.querySelector(".title__contain--btn");

var readmore = function readmore() {
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.textContent = "Read less";
  } else if (moreText.style.display === "block") {
    moreText.style.display = "none";
    btnText.textContent = "Read more";
  }
};

btnText.addEventListener("click", readmore); //error submit popup

var getError = document.querySelector(".contact__error");
var getSubmitBtn = document.querySelector(".btn__form");
var btnCloseError = document.querySelector(".error__close");

var closeError = function closeError() {
  getError.classList.add("hidden");
  overlay.classList.add("hidden");
};

getSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getError.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseError.addEventListener("click", closeError);
overlay.addEventListener("click", closeError);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !getError.classList.contains("hidden")) {
    closeError();
  }
}); //music player

var songs = ["Aloha", "ThoiKhongSaiLech", "Yoru Ni Kakeru", "GapNhungKoOLai", "NhuMuaTuyetDauTien", "BietKhucChoNhau"];
var songIndex = 0;
var songInfo = document.querySelector(".music__info");
var play = document.querySelector(".logo__player");
var previous = document.querySelector(".player--previous");
var next = document.querySelector(".player--next");
var audio = document.getElementById("music");
var songTitle = document.querySelector(".music__info");
var amountOfSong = songs.length;
var logoText = document.querySelector(".logo__text");

var loadSong = function loadSong(song) {
  songInfo.textContent = song;
  audio.src = "./music/".concat(song, ".mp3");
};

audio.src = "./music/".concat(songs[songIndex], ".mp3");

var autoNextSong = function autoNextSong() {
  audio.addEventListener("ended", nextSong);
};

var playSong = function playSong() {
  play.classList.remove("player--deactive");
  previous.classList.remove("hidden__btn");
  next.classList.remove("hidden__btn");
  songTitle.classList.remove("hidden__logo");
  audio.play();
};

var pauseSong = function pauseSong() {
  play.classList.add("player--deactive");
  previous.classList.add("hidden__btn");
  next.classList.add("hidden__btn");
  songTitle.classList.add("hidden__logo");
  audio.pause();
};

var nextSong = function nextSong() {
  songIndex++;

  if (songIndex > amountOfSong - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  fetchAndPlaySong();
};

var previousSong = function previousSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = amountOfSong - 1;
  }

  loadSong(songs[songIndex]);
  fetchAndPlaySong();
};

var fetchAndPlaySong = function fetchAndPlaySong() {
  fetch(audio.src).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    audio.srcObject = blob;
    return audio.play();
  }).then(function (_) {
    playSong();
  }).catch(function (e) {
    playSong();
  });
};

next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
logoText.addEventListener("click", function () {
  songInfo.textContent = songs[songIndex];
  var isPlaying = play.classList.contains("player--deactive");

  if (isPlaying) {
    playSong();
  } else pauseSong();
});
autoNextSong();
},{}],"C:/Users/Khoa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55551" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Khoa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","portfolio.js"], null)
//# sourceMappingURL=/portfolio.d4ad3f1f.js.map