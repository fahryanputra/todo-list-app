/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/templates/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/templates/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --space-small: 1rem;
    --space-medium: 2rem;
    --space-large: 3rem;
    --font-small: 18px;
    --font-medium: 26px;
    --font-large: 38px;
    --icon-large: 40px;
    --icon-small: 24px;
    --background-dark: #333;
    --background-light: #eee;
    --background-secondary-light: #ccc;
    --font-light: #eee;
    --font-dark: #333
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

/* Google Material Icon */

.material-symbols-rounded {
  font-variation-settings:
  'FILL' 1,
  'wght' 600,
  'GRAD' 0,
  'opsz' 24;
}

/* Button */
button {
    border: 2px solid var(--font-dark);
    border-radius: 5px;
    padding: 0 var(--space-small);
    background-color: rgba(0, 0, 0, 0);
    font-size: var(--font-small);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-small);
    cursor: pointer;
}


/* Header */

header {
    height: 15vh;
    display: flex;
    align-items: center;
    gap: var(--space-small);
    padding: var(--space-medium);
    background-color: var(--background-dark);
    color: var(--font-light);
}

header > p {
    font-size: var(--font-large);
    font-weight: bold;
}

header .material-symbols-rounded {
    font-size: var(--icon-large);
}

/* Content */

.content {
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
}

/* Sidebar */

.sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--space-medium);
    padding: var(--space-medium);
    background-color: var(--background-secondary-light);
    color: var(--font-dark);
    overflow-x: hidden;
}

.sidebar > p {
    font-size: var(--font-medium);
    font-weight: bold;
}

.sidebar > .project-form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.sidebar > .project-form > input {
    width: 100%;
    font-size: var(--font-small);
    border: 2px solid var(--font-dark);
    border-radius: 5px;
}

.sidebar > .project-form > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.sidebar > .project-form > div > button {
    width: 50%;
}

.project-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
}

.project {
    display: flex;
    align-items: center;
    width: 100%;
    border: none;
    background: none;
    gap: var(--space-small);
    cursor: pointer;
    position: relative;
    padding: 5px;
}

.project > p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.project:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.project > div {
    margin-left: auto;
    display: none;
}

.project:hover > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.project:hover > div:hover > .material-symbols-rounded {
    font-variation-settings:
    'FILL' 1;
}

.project > div > .material-symbols-rounded {
    font-variation-settings:
    'FILL' 0;
    font-size: var(--icon-small);
}

.project .material-symbols-rounded {
    font-size: var(--icon-small);
}

.project > p {
    font-size: var(--font-small);
    font-weight: 400;
}

/* Main */

.main {
    display: flex;
    flex-direction: column;
    gap: var(--space-medium);
    font-size: var(--font-medium);
    padding: var(--space-medium) 8rem;
    background-color: var(--background-light);
    color: var(--font-dark);
}

.main > button {
    width: fit-content;
}

.project-name {
    font-weight: bold;
}

.task {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: var(--font-small);
}

.task > div {
    display: flex;
    align-items: center;
    gap: var(--space-small);
}

.task .material-symbols-rounded {
    font-variation-settings:
    'FILL' 0;
    font-size: var(--icon-small);
}

.right-panel {
    margin-left: auto;
}


/* Footer */

footer {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-small);
    background-color: var(--background-dark);
    color: var(--font-light);
}`, "",{"version":3,"sources":["webpack://./src/templates/style.css"],"names":[],"mappings":"AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;IACxB,kCAAkC;IAClC,kBAAkB;IAClB;AACJ;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;AAEA,yBAAyB;;AAEzB;EACE;;;;WAIS;AACX;;AAEA,WAAW;AACX;IACI,kCAAkC;IAClC,kBAAkB;IAClB,6BAA6B;IAC7B,kCAAkC;IAClC,4BAA4B;IAC5B,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;;AAGA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,wCAAwC;IACxC,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC;;AAEA,YAAY;;AAEZ;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA,YAAY;;AAEZ;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,4BAA4B;IAC5B,mDAAmD;IACnD,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI;YACQ;AACZ;;AAEA;IACI;YACQ;IACR,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,6BAA6B;IAC7B,iCAAiC;IACjC,yCAAyC;IACzC,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;YACQ;IACR,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;;AAGA,WAAW;;AAEX;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,wCAAwC;IACxC,wBAAwB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\n:root {\n    --space-small: 1rem;\n    --space-medium: 2rem;\n    --space-large: 3rem;\n    --font-small: 18px;\n    --font-medium: 26px;\n    --font-large: 38px;\n    --icon-large: 40px;\n    --icon-small: 24px;\n    --background-dark: #333;\n    --background-light: #eee;\n    --background-secondary-light: #ccc;\n    --font-light: #eee;\n    --font-dark: #333\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\n/* Google Material Icon */\n\n.material-symbols-rounded {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 24;\n}\n\n/* Button */\nbutton {\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n    padding: 0 var(--space-small);\n    background-color: rgba(0, 0, 0, 0);\n    font-size: var(--font-small);\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--space-small);\n    cursor: pointer;\n}\n\n\n/* Header */\n\nheader {\n    height: 15vh;\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n    padding: var(--space-medium);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}\n\nheader > p {\n    font-size: var(--font-large);\n    font-weight: bold;\n}\n\nheader .material-symbols-rounded {\n    font-size: var(--icon-large);\n}\n\n/* Content */\n\n.content {\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    padding: var(--space-medium);\n    background-color: var(--background-secondary-light);\n    color: var(--font-dark);\n    overflow-x: hidden;\n}\n\n.sidebar > p {\n    font-size: var(--font-medium);\n    font-weight: bold;\n}\n\n.sidebar > .project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.sidebar > .project-form > input {\n    width: 100%;\n    font-size: var(--font-small);\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.sidebar > .project-form > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.sidebar > .project-form > div > button {\n    width: 50%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border: none;\n    background: none;\n    gap: var(--space-small);\n    cursor: pointer;\n    position: relative;\n    padding: 5px;\n}\n\n.project > p {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.project:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n}\n\n.project > div {\n    margin-left: auto;\n    display: none;\n}\n\n.project:hover > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.project:hover > div:hover > .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 1;\n}\n\n.project > div > .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.project .material-symbols-rounded {\n    font-size: var(--icon-small);\n}\n\n.project > p {\n    font-size: var(--font-small);\n    font-weight: 400;\n}\n\n/* Main */\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    font-size: var(--font-medium);\n    padding: var(--space-medium) 8rem;\n    background-color: var(--background-light);\n    color: var(--font-dark);\n}\n\n.main > button {\n    width: fit-content;\n}\n\n.project-name {\n    font-weight: bold;\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    font-size: var(--font-small);\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n}\n\n.task .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.right-panel {\n    margin-left: auto;\n}\n\n\n/* Footer */\n\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-small);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/templates/style.css":
/*!*********************************!*\
  !*** ./src/templates/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/templates/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/modules/Project.js":
/*!*******************************************!*\
  !*** ./src/components/modules/Project.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(name, isDefault = false, icon = "checklist") {
        this.name = name;
        this.isDefault = isDefault;
        this.icon = icon
        this.tasks = [];
    };

    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.getTitle())) {
                return;
        };
        this.tasks.push(newTask);
    };

    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter((task) => task.getTitle() !== taskTitle);
    };

    // Getter
    getName() {
        return this.name;
    };

    getTasks() {
        return this.tasks;
    };

    getIsDefault() {
        return this.isDefault
    };

    getIcon() {
        return this.icon
    };

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle);
    };

    // Setter
    setName(name) {
        this.name = name;
    };
    
    setIsDefault(isDefault) {
        this.isDefault = isDefault;
    };

    setIcon(icon) {
        this.icon = icon;
    };

    setTasks(tasks) {
        this.tasks = tasks;
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/components/modules/TodoList.js":
/*!********************************************!*\
  !*** ./src/components/modules/TodoList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Modules_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/Project */ "./src/components/modules/Project.js");


class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Modules_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox", true, "inbox"));
    };

    addProject(projectName) {
        if(this.projects.find((project) => project.getName() === projectName)) {
            return 0;
        }
        this.projects.push(new Modules_Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName));
    };

    deleteProject(projectName) {
        this.projects = this.projects.filter((project) => project.getName() !== projectName);
    };

    // Getter
    getProjects() {
        return this.projects;
    };

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    };

    // Setter
    setProjects(projects) {
        this.projects = projects;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./src/components/ui/Sidebar.js":
/*!**************************************!*\
  !*** ./src/components/ui/Sidebar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/utility */ "./src/components/utilities/utility.js");
/* harmony import */ var Modules_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/TodoList */ "./src/components/modules/TodoList.js");



function renderSidebar() {
    const todoList = new Modules_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"]();

    const defaultProjectContainer = renderProjectContainer("default");
    const customProjectContainer = renderProjectContainer("custom");
    const projectContainers = [];

    projectContainers.push(defaultProjectContainer);
    projectContainers.push(customProjectContainer);

    const projects = renderProjects(todoList, projectContainers);

    const divider = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)("Projects");
    
    const addProjectContainer = renderAddProjectButton(todoList, projectContainers);

    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(projects[0]);
    sidebar.appendChild(divider);
    sidebar.appendChild(projects[1]);
    sidebar.appendChild(addProjectContainer);

}

function renderProjectContainer(name) {
    const container = document.createElement("div");
    container.classList.add(name, "project-container");

    return container;
}

function renderProject(title, icon) {
    const container = document.createElement("div");
    container.classList.add("project")

    container.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)(icon));
    container.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(title));

    return container;
}

function renderProjects(todoList, projectContainers) {
    projectContainers.forEach(element => {
        element.textContent = "";
    });

    todoList.getProjects().forEach(element => {
        const project = renderProject(element.getName(), element.getIcon(), element.getIsDefault());
        if(element.getIsDefault() === true) {
            projectContainers[0].appendChild(project);
        } else {
            const deleteContainer = document.createElement("div")
            deleteContainer.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)("delete"));

            deleteContainer.addEventListener("click", () => {
                todoList.deleteProject(element.getName());
                projectContainers[1].replaceWith(renderProjects(todoList, projectContainers)[1])
            });

            project.appendChild(deleteContainer);
            projectContainers[1].appendChild(project);
        };
    });

    return projectContainers;
}

function renderAddProjectButton(todoList, projectContainers) {
    const container = document.createElement("div");
    container.classList.add("btn-container");

    const button = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createAddButton)("Add Project");
    button.addEventListener("click", () => {
        container.replaceWith(renderAddProjectForm(todoList, projectContainers));
    });

    container.appendChild(button);

    return container;
}

function renderAddProjectForm(todoList, projectContainers) {
    const container = document.createElement("div");
    container.classList.add("project-form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
        if(input.value === "") {
            alert("Project name can't be empty.");
            return;
        };
        const newProject = todoList.addProject(input.value)
        if( newProject === 0) {
            alert("Project already exists!");
            return;
        };
        renderProjects(todoList, projectContainers);
        container.replaceWith(renderAddProjectButton(todoList, projectContainers));
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Cancel";
    deleteButton.addEventListener("click", () => {
        container.replaceWith(renderAddProjectButton(todoList, projectContainers));
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(deleteButton);

    container.appendChild(input)
    container.appendChild(buttonContainer);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSidebar);

/***/ }),

/***/ "./src/components/utilities/utility.js":
/*!*********************************************!*\
  !*** ./src/components/utilities/utility.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddButton: () => (/* binding */ createAddButton),
/* harmony export */   createIcon: () => (/* binding */ createIcon),
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   createText: () => (/* binding */ createText)
/* harmony export */ });
// Module for helping create images and paragraphs
// Function to create text with 1 parameters.
// text content
function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

// Function to create image with credits. Containing 3 parameters.
// Image source, credit link and credit text.
function createImage(src, creditLink, creditText) {
    const image = new Image();
    image.src = src;

    const creditContainer = document.createElement("div");
    creditContainer.setAttribute("class", "credit")

    const credit = document.createElement("a");
    credit.href = creditLink;
    credit.textContent = creditText;

    creditContainer.appendChild(credit);

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "img-container");

    imageContainer.appendChild(image);
    imageContainer.appendChild(creditContainer);

    return imageContainer;
}

// Create icon from https://fonts.google.com/icons
function createIcon(name) {
    const icon = document.createElement("span");
    icon.setAttribute("class", "material-symbols-rounded");
    icon.textContent = name;

    return icon;
}

// Create add button for task and projects
function createAddButton(text) {
    const icon = createIcon("add");
    const buttonText = createText(text);
    
    const button = document.createElement("button");
    button.setAttribute("class", "btn-add");

    button.appendChild(icon);
    button.appendChild(buttonText);

    return button;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ui_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ui/Sidebar */ "./src/components/ui/Sidebar.js");
/* harmony import */ var _templates_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/style.css */ "./src/templates/style.css");



(0,_components_ui_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsMEdBQTBHLFdBQVcsMEJBQTBCLDJCQUEyQiwwQkFBMEIseUJBQXlCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qiw4QkFBOEIsK0JBQStCLHlDQUF5Qyx5QkFBeUIsMEJBQTBCLE9BQU8sNkJBQTZCLGdCQUFnQixpQkFBaUIsNENBQTRDLEdBQUcsNkRBQTZELG1GQUFtRixHQUFHLDBCQUEwQix5Q0FBeUMseUJBQXlCLG9DQUFvQyx5Q0FBeUMsbUNBQW1DLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLEdBQUcsOEJBQThCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixtQ0FBbUMsK0NBQStDLCtCQUErQixHQUFHLGdCQUFnQixtQ0FBbUMsd0JBQXdCLEdBQUcsc0NBQXNDLG1DQUFtQyxHQUFHLCtCQUErQixtQkFBbUIsb0JBQW9CLHFDQUFxQyxHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLCtCQUErQixtQ0FBbUMsMERBQTBELDhCQUE4Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0NBQW9DLHdCQUF3QixHQUFHLDhCQUE4QixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxzQ0FBc0Msa0JBQWtCLG1DQUFtQyx5Q0FBeUMseUJBQXlCLEdBQUcsb0NBQW9DLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixHQUFHLDZDQUE2QyxpQkFBaUIsR0FBRyx3QkFBd0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsa0JBQWtCLG1CQUFtQix1QkFBdUIsOEJBQThCLHNCQUFzQix5QkFBeUIsbUJBQW1CLEdBQUcsa0JBQWtCLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsb0JBQW9CLDJDQUEyQyx5QkFBeUIsR0FBRyxvQkFBb0Isd0JBQXdCLG9CQUFvQixHQUFHLDBCQUEwQixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsR0FBRyw0REFBNEQsNkNBQTZDLEdBQUcsZ0RBQWdELDZDQUE2QyxtQ0FBbUMsR0FBRyx3Q0FBd0MsbUNBQW1DLEdBQUcsa0JBQWtCLG1DQUFtQyx1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLDZCQUE2QiwrQkFBK0Isb0NBQW9DLHdDQUF3QyxnREFBZ0QsOEJBQThCLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsMEJBQTBCLG1DQUFtQyxHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHFDQUFxQyw2Q0FBNkMsbUNBQW1DLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDhCQUE4QixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUNBQW1DLCtDQUErQywrQkFBK0IsR0FBRyxtQkFBbUI7QUFDM3lNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbFAxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUMxRGdCOztBQUV0QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdURBQU87QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdURBQU87QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3FEO0FBQ3BDOztBQUV4QztBQUNBLHlCQUF5Qix3REFBUTs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZEQUFVO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDZEQUFVO0FBQ3BDLDBCQUEwQiw2REFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esd0NBQXdDLDZEQUFVOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtFQUFlO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0Q7QUFDckI7O0FBRS9CLGtFQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGVtcGxhdGVzL3N0eWxlLmNzcz82ZTgzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0aWVzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1zcGFjZS1zbWFsbDogMXJlbTtcbiAgICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcbiAgICAtLXNwYWNlLWxhcmdlOiAzcmVtO1xuICAgIC0tZm9udC1zbWFsbDogMThweDtcbiAgICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xuICAgIC0tZm9udC1sYXJnZTogMzhweDtcbiAgICAtLWljb24tbGFyZ2U6IDQwcHg7XG4gICAgLS1pY29uLXNtYWxsOiAyNHB4O1xuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMzMzO1xuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2VlZTtcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0OiAjY2NjO1xuICAgIC0tZm9udC1saWdodDogI2VlZTtcbiAgICAtLWZvbnQtZGFyazogIzMzM1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qIEdvb2dsZSBNYXRlcmlhbCBJY29uICovXG5cbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgJ0ZJTEwnIDEsXG4gICd3Z2h0JyA2MDAsXG4gICdHUkFEJyAwLFxuICAnb3BzeicgMjQ7XG59XG5cbi8qIEJ1dHRvbiAqL1xuYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBIZWFkZXIgKi9cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1saWdodCk7XG59XG5cbmhlYWRlciA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmhlYWRlciAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tbGFyZ2UpO1xufVxuXG4vKiBDb250ZW50ICovXG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG59XG5cbi8qIFNpZGViYXIgKi9cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2lkZWJhciA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gZGl2ID4gYnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QgPiBwIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdCA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gZGl2OmhvdmVyID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgJ0ZJTEwnIDE7XG59XG5cbi5wcm9qZWN0ID4gZGl2ID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgJ0ZJTEwnIDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcbn1cblxuLnByb2plY3QgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcbn1cblxuLnByb2plY3QgPiBwIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8qIE1haW4gKi9cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKSA4cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xufVxuXG4ubWFpbiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xufVxuXG4udGFzayA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4udGFzayAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMDtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRTs7OztXQUlTO0FBQ1g7O0FBRUEsV0FBVztBQUNYO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7OztBQUdBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLG1EQUFtRDtJQUNuRCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtZQUNRO0FBQ1o7O0FBRUE7SUFDSTtZQUNRO0lBQ1IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtZQUNRO0lBQ1IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNlLXNtYWxsOiAxcmVtO1xcbiAgICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcXG4gICAgLS1zcGFjZS1sYXJnZTogM3JlbTtcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcbiAgICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xcbiAgICAtLWZvbnQtbGFyZ2U6IDM4cHg7XFxuICAgIC0taWNvbi1sYXJnZTogNDBweDtcXG4gICAgLS1pY29uLXNtYWxsOiAyNHB4O1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzMzMztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZWVlO1xcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0OiAjY2NjO1xcbiAgICAtLWZvbnQtbGlnaHQ6ICNlZWU7XFxuICAgIC0tZm9udC1kYXJrOiAjMzMzXFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEdvb2dsZSBNYXRlcmlhbCBJY29uICovXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAxLFxcbiAgJ3dnaHQnIDYwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDI0O1xcbn1cXG5cXG4vKiBCdXR0b24gKi9cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oZWFkZXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1sYXJnZSk7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBkaXYgPiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QgPiBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiBkaXY6aG92ZXIgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAxO1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XFxufVxcblxcbi5wcm9qZWN0IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucHJvamVjdCA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcXG59XFxuXFxuLm1haW4gPiBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLnRhc2sgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcXG59XFxuXFxuLnJpZ2h0LXBhbmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaXNEZWZhdWx0ID0gZmFsc2UsIGljb24gPSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xuICAgICAgICB0aGlzLmljb24gPSBpY29uXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9O1xuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gbmV3VGFzay5nZXRUaXRsZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH07XG5cbiAgICBkZWxldGVUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSAhPT0gdGFza1RpdGxlKTtcbiAgICB9O1xuXG4gICAgLy8gR2V0dGVyXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH07XG5cbiAgICBnZXRJc0RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGVmYXVsdFxuICAgIH07XG5cbiAgICBnZXRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uXG4gICAgfTtcblxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfTtcbiAgICBcbiAgICBzZXRJc0RlZmF1bHQoaXNEZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xuICAgIH07XG5cbiAgICBzZXRJY29uKGljb24pIHtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9O1xuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCJNb2R1bGVzL1Byb2plY3RcIjtcblxuY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkluYm94XCIsIHRydWUsIFwiaW5ib3hcIikpO1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBHZXR0ZXJcbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfTtcblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCJVdGlsaXRpZXMvdXRpbGl0eVwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCJNb2R1bGVzL1RvZG9MaXN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Q29udGFpbmVyID0gcmVuZGVyUHJvamVjdENvbnRhaW5lcihcImRlZmF1bHRcIik7XG4gICAgY29uc3QgY3VzdG9tUHJvamVjdENvbnRhaW5lciA9IHJlbmRlclByb2plY3RDb250YWluZXIoXCJjdXN0b21cIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lcnMgPSBbXTtcblxuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goZGVmYXVsdFByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goY3VzdG9tUHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBkaXZpZGVyID0gY3JlYXRlVGV4dChcIlByb2plY3RzXCIpO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSByZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNbMF0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1sxXSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKG5hbWUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5hbWUsIFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHRpdGxlLCBpY29uKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJY29uKGljb24pKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0aXRsZSkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgcHJvamVjdENvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXJQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpLCBlbGVtZW50LmdldEljb24oKSwgZWxlbWVudC5nZXRJc0RlZmF1bHQoKSk7XG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0SXNEZWZhdWx0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzBdLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oXCJkZWxldGVcIikpO1xuXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1sxXS5yZXBsYWNlV2l0aChyZW5kZXJQcm9qZWN0cyh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpWzFdKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzFdLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKFwiQWRkIFByb2plY3RcIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0Rm9ybSh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEZvcm0odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgY2FuJ3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdG9kb0xpc3QuYWRkUHJvamVjdChpbnB1dC52YWx1ZSlcbiAgICAgICAgaWYoIG5ld1Byb2plY3QgPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaWRlYmFyOyIsIi8vIE1vZHVsZSBmb3IgaGVscGluZyBjcmVhdGUgaW1hZ2VzIGFuZCBwYXJhZ3JhcGhzXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGV4dCB3aXRoIDEgcGFyYW1ldGVycy5cbi8vIHRleHQgY29udGVudFxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBpbWFnZSB3aXRoIGNyZWRpdHMuIENvbnRhaW5pbmcgMyBwYXJhbWV0ZXJzLlxuLy8gSW1hZ2Ugc291cmNlLCBjcmVkaXQgbGluayBhbmQgY3JlZGl0IHRleHQuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShzcmMsIGNyZWRpdExpbmssIGNyZWRpdFRleHQpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcblxuICAgIGNvbnN0IGNyZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3JlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3JlZGl0XCIpXG5cbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjcmVkaXQuaHJlZiA9IGNyZWRpdExpbms7XG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gY3JlZGl0VGV4dDtcblxuICAgIGNyZWRpdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWNvbnRhaW5lclwiKTtcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufVxuXG4vLyBDcmVhdGUgaWNvbiBmcm9tIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9pY29uc1xuZnVuY3Rpb24gY3JlYXRlSWNvbihuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gICAgaWNvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICByZXR1cm4gaWNvbjtcbn1cblxuLy8gQ3JlYXRlIGFkZCBidXR0b24gZm9yIHRhc2sgYW5kIHByb2plY3RzXG5mdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24odGV4dCkge1xuICAgIGNvbnN0IGljb24gPSBjcmVhdGVJY29uKFwiYWRkXCIpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KHRleHQpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuLWFkZFwiKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVRleHQsXG4gICAgY3JlYXRlSW1hZ2UsXG4gICAgY3JlYXRlSWNvbixcbiAgICBjcmVhdGVBZGRCdXR0b24sXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvdWkvU2lkZWJhclwiO1xuaW1wb3J0IFwiLi90ZW1wbGF0ZXMvc3R5bGUuY3NzXCI7XG5cbnJlbmRlclNpZGViYXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=