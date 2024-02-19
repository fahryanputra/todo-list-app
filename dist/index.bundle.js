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

html, body {
    height: 100%;
    overflow: hidden;
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

.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.btn-container.right {
    justify-content: flex-end;
}

.sidebar > .project-form > div > button {
    width: 50%;
}

.project-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
}

.project, .task {
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

.project > p, .task > p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.project:hover, .task:hover {
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

.project:hover > div:hover > .material-symbols-rounded, .task:hover > .right-panel > .material-symbols-rounded:hover {
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
    height: 100%;
    overflow-y: auto;
}

.main > button {
    width: fit-content;
}

.project-name {
    font-weight: bold;
}

.task-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-medium);
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

.task-detail {
    font-size: var(--font-small);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
}

.hr {
    border-top: 5px solid var(--font-dark);
    border-radius: 5px;
}

.task-detail > div {
    display: flex;
    gap: var(--space-medium);
}

.task-form {
    font-size: var(--font-small);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
}

.task-form > div {
    display: flex;
    flex-direction: column;
}

.task-form > .btn-container {
    flex-direction: row;
    justify-content: flex-end;
}

.task-form > .date-priority-container {
    display: flex;
    flex-direction: row;
    gap: var(--space-large);
}

.date-priority-container > div {
    display: flex;
    flex-direction: column;
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
}`, "",{"version":3,"sources":["webpack://./src/templates/style.css"],"names":[],"mappings":"AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;IACxB,kCAAkC;IAClC,kBAAkB;IAClB;AACJ;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA,yBAAyB;;AAEzB;EACE;;;;WAIS;AACX;;AAEA,WAAW;AACX;IACI,kCAAkC;IAClC,kBAAkB;IAClB,6BAA6B;IAC7B,kCAAkC;IAClC,4BAA4B;IAC5B,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;;AAGA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,wCAAwC;IACxC,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC;;AAEA,YAAY;;AAEZ;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA,YAAY;;AAEZ;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,4BAA4B;IAC5B,mDAAmD;IACnD,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI;YACQ;AACZ;;AAEA;IACI;YACQ;IACR,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,6BAA6B;IAC7B,iCAAiC;IACjC,yCAAyC;IACzC,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;YACQ;IACR,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;;AAEX;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,wCAAwC;IACxC,wBAAwB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\n:root {\n    --space-small: 1rem;\n    --space-medium: 2rem;\n    --space-large: 3rem;\n    --font-small: 18px;\n    --font-medium: 26px;\n    --font-large: 38px;\n    --icon-large: 40px;\n    --icon-small: 24px;\n    --background-dark: #333;\n    --background-light: #eee;\n    --background-secondary-light: #ccc;\n    --font-light: #eee;\n    --font-dark: #333\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* Google Material Icon */\n\n.material-symbols-rounded {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 24;\n}\n\n/* Button */\nbutton {\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n    padding: 0 var(--space-small);\n    background-color: rgba(0, 0, 0, 0);\n    font-size: var(--font-small);\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--space-small);\n    cursor: pointer;\n}\n\n\n/* Header */\n\nheader {\n    height: 15vh;\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n    padding: var(--space-medium);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}\n\nheader > p {\n    font-size: var(--font-large);\n    font-weight: bold;\n}\n\nheader .material-symbols-rounded {\n    font-size: var(--icon-large);\n}\n\n/* Content */\n\n.content {\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    padding: var(--space-medium);\n    background-color: var(--background-secondary-light);\n    color: var(--font-dark);\n    overflow-x: hidden;\n}\n\n.sidebar > p {\n    font-size: var(--font-medium);\n    font-weight: bold;\n}\n\n.sidebar > .project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.sidebar > .project-form > input {\n    width: 100%;\n    font-size: var(--font-small);\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.btn-container.right {\n    justify-content: flex-end;\n}\n\n.sidebar > .project-form > div > button {\n    width: 50%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.project, .task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border: none;\n    background: none;\n    gap: var(--space-small);\n    cursor: pointer;\n    position: relative;\n    padding: 5px;\n}\n\n.project > p, .task > p {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.project:hover, .task:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n}\n\n.project > div {\n    margin-left: auto;\n    display: none;\n}\n\n.project:hover > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.project:hover > div:hover > .material-symbols-rounded, .task:hover > .right-panel > .material-symbols-rounded:hover {\n    font-variation-settings:\n    'FILL' 1;\n}\n\n.project > div > .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.project .material-symbols-rounded {\n    font-size: var(--icon-small);\n}\n\n.project > p {\n    font-size: var(--font-small);\n    font-weight: 400;\n}\n\n/* Main */\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    font-size: var(--font-medium);\n    padding: var(--space-medium) 8rem;\n    background-color: var(--background-light);\n    color: var(--font-dark);\n    height: 100%;\n    overflow-y: auto;\n}\n\n.main > button {\n    width: fit-content;\n}\n\n.project-name {\n    font-weight: bold;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    font-size: var(--font-small);\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n}\n\n.task .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.right-panel {\n    margin-left: auto;\n}\n\n.task-detail {\n    font-size: var(--font-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.hr {\n    border-top: 5px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.task-detail > div {\n    display: flex;\n    gap: var(--space-medium);\n}\n\n.task-form {\n    font-size: var(--font-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.task-form > div {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-form > .btn-container {\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.task-form > .date-priority-container {\n    display: flex;\n    flex-direction: row;\n    gap: var(--space-large);\n}\n\n.date-priority-container > div {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Footer */\n\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-small);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var Modules_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/Task */ "./src/components/modules/Task.js");


class Project {
    constructor(name, isDefault = false, icon = "checklist") {
        this.name = name;
        this.isDefault = isDefault;
        this.icon = icon
        this.tasks = [];
    };

    addTask(title, description, date, priority) {
        this.tasks.push(new Modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, date, priority));
    };

    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.getId() !== taskId);
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

    getTask(taskId) {
        return this.tasks.find((task) => task.getId() === taskId);
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

/***/ "./src/components/modules/Storage.js":
/*!*******************************************!*\
  !*** ./src/components/modules/Storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Modules_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/TodoList */ "./src/components/modules/TodoList.js");
/* harmony import */ var Modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/Project */ "./src/components/modules/Project.js");
/* harmony import */ var Modules_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Modules/Task */ "./src/components/modules/Task.js");




class Storage {
    static saveTodoList(data) {
        return localStorage.setItem("todoList", JSON.stringify(data));
    };

    static getTodoList() {
        const todoList = Object.assign(
            new Modules_TodoList__WEBPACK_IMPORTED_MODULE_0__["default"](),
            JSON.parse(localStorage.getItem('todoList'))
        );

        todoList.setProjects(
            todoList
            .getProjects()
            .map((project) => Object.assign(new Modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
        );
        
        todoList.getProjects().forEach(project => {
            project.setTasks(
                project.getTasks().map((task) => Object.assign(new Modules_Task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
            )
        });

        return todoList;
    };

    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        return Storage.saveTodoList(todoList);
    };

    static deleteProject(project) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(project);
        return Storage.saveTodoList(todoList);
    };

    static addTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(taskName);
        return Storage.saveTodoList(todoList);
    };

    static deleteTask(projectName, taskId) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskId);
        return Storage.saveTodoList(todoList)
    };

    static editTask(projectName, taskId, title, description, date, priority) {
        const todoList = Storage.getTodoList();
        const task = todoList.getProject(projectName).getTask(taskId);

        task.setTitle(title);
        task.setDescription(description);
        task.setDate(date);
        task.setPriority(priority);

        return Storage.saveTodoList(todoList);
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/components/modules/Task.js":
/*!****************************************!*\
  !*** ./src/components/modules/Task.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(title) {
        this.id = Task.incrementId();
        this.title = title;
        this.description = "No description";
        this.date = "No date";
        this.priority = "Low";
    };

    static incrementId() {
        if(!this.lastId) {
            this.lastId = 1
        } else {
            this.lastId++;
        }
        
        return this.lastId;
    }

    // Getter
    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    };

    getDescription() {
        return this.description;
    };

    getDate() {
        return this.date;
    };

    getPriority() {
        return this.priority;
    };

    // Setter
    setTitle(title) {
        this.title = title;
    };

    setDescription(description) {
        this.description = description;
    };

    setDate(date) {
        this.date = date;
    };

    setPriority(priority) {
        this.priority = priority;
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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

/***/ "./src/components/ui/Main.js":
/*!***********************************!*\
  !*** ./src/components/ui/Main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/utility */ "./src/components/utilities/utility.js");
/* harmony import */ var Modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/Storage */ "./src/components/modules/Storage.js");



function renderMain(project) {
    const main = document.querySelector(".main");
    main.textContent = "";

    const projectName = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(project.getName());
    projectName.classList.add("project-name");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    renderTasks(project, taskContainer);

    const buttonContainer = document.createElement("div");
    const addTaskButton = renderAddTaskButton(project, taskContainer, buttonContainer);

    buttonContainer.appendChild(addTaskButton);

    main.appendChild(projectName);
    main.appendChild(taskContainer);
    main.appendChild(buttonContainer);
}

function renderTasks(project, container) {
    container.textContent = "";
    project.getTasks().forEach(element => {
        const task = renderTask(project, element, container);
        container.appendChild(task);
    });
}

function renderTask(project, task, tasksContainer) {
    const container = document.createElement("div");
    container.classList.add("task");
    container.addEventListener("click", () => {
        container.replaceWith(renderTaskDetail(project, task, tasksContainer, container));
    });
    
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left-panel")
    leftPanel.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)("radio_button_unchecked"));
    leftPanel.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(task.getTitle()));

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel");
    rightPanel.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(task.getDate()));
    const deleteButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)("delete");
    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTask(project, task, tasksContainer);
    });
    rightPanel.appendChild(deleteButton);

    container.appendChild(leftPanel);
    container.appendChild(rightPanel);

    return container;
}

function renderTaskDetail(project, task, tasksContainer, taskContainer) {
    const container = document.createElement("div");
    container.classList.add("task-detail");
    
    const title = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(task.getTitle());
    const titleDivider = document.createElement("hr");
    const description = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(task.getDescription());
    const descriptionDivider = document.createElement("hr");
    const date = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(`Due: ${task.getDate()}`);
    const priority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createText)(`Priority: ${task.getPriority()}`);

    const datePriorityContainer = document.createElement("div");
    datePriorityContainer.appendChild(date);
    datePriorityContainer.appendChild(priority);

    const backButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("close", "Close");
    backButton.addEventListener("click", () => {
        container.replaceWith(taskContainer);
    });

    const editButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("edit", "Edit");
    editButton.addEventListener("click", () => {
        container.replaceWith(renderEditTaskForm(project, task, container, tasksContainer, taskContainer));
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-container", "right");
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(backButton);

    container.appendChild(title);
    container.appendChild(titleDivider);
    container.appendChild(description);

    container.appendChild(descriptionDivider);
    container.appendChild(datePriorityContainer);
    container.appendChild(buttonContainer);

    return container;
}

function renderEditTaskForm(project, task, detailContainer, tasksContainer) {
    const container = document.createElement("div");
    container.classList.add("task-form");

    const title = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("edit-title", "input");
    title.setAttribute("value", task.getTitle());
    const titleLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("edit-title", "Title");
    const titleContainer = document.createElement("div");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title);

    const description = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("edit-description", "textarea");
    description.textContent = task.getDescription()
    const descriptionLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("edit-description", "Description");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(description);

    const date = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("edit-date", "input");
    date.setAttribute("type", "date");
    date.setAttribute("value", task.getDate())
    const dateLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("edit-date", "Due date");
    const dateContainer = document.createElement("div");
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(date);

    const priority = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("edit-priority", "select");
    const priorityLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("edit-priority", "Priority");
    const lowPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("Low");
    const mediumPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("Medium");
    const highPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("High");
    if(task.getPriority() === "High") {
        highPriority.setAttribute("selected", "selected");
    } else if(task.getPriority() === "Medium") {
        mediumPriority.setAttribute("selected", "selected");
    } else {
        lowPriority.setAttribute("selected", "selected");
    }
    priority.appendChild(lowPriority);
    priority.appendChild(mediumPriority);
    priority.appendChild(highPriority);
    const priorityContainer = document.createElement("div");
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priority);

    const dateAndPriorityContainer = document.createElement("div");
    dateAndPriorityContainer.classList.add("date-priority-container");
    dateAndPriorityContainer.appendChild(dateContainer);
    dateAndPriorityContainer.appendChild(priorityContainer);
    
    const cancelButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("close", "Cancel");
    cancelButton.addEventListener("click", () => {
        container.replaceWith(detailContainer);
    });

    const submitButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("done", "Save");
    submitButton.addEventListener("click", () => {
        task.setTitle(title.value);
        task.setDescription(description.value);
        task.setDate(date.value);
        task.setPriority(priority.value);
        Modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(project.getName(), task.getId(), title.value, description.value, date.value, priority.value);
        container.replaceWith(renderTask(project, task, tasksContainer));
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-container", "right");
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);

    container.appendChild(titleContainer);
    container.appendChild(descriptionContainer);
    container.appendChild(dateAndPriorityContainer);
    container.appendChild(buttonContainer);
    
    return container;
}

function renderAddTaskForm(project, taskContainer, parentContainer) {
    const form = document.createElement("div");
    form.setAttribute("class", "task-form");

    const title = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("read-title", "input");
    title.setAttribute("type", "text");
    const titleLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("read-title", "Title");
    const titleContainer = document.createElement("div");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title)

    const description = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("read-description", "textarea")
    const descriptionLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("read-description", "Description");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(description);

    const date = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("read-date", "input");
    date.setAttribute("type", "date");
    const dateLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("read-date", "Due date");
    const dateContainer = document.createElement("div");
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(date);

    const priority = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createForm("read-priority", "select");
    const priorityLabel = Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createFormWithLabel.createLabel("read-priority", "Priority");
    const lowPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("Low");
    const mediumPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("Medium");
    const highPriority = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createDropDownOption)("High");
    priority.appendChild(lowPriority);
    priority.appendChild(mediumPriority);
    priority.appendChild(highPriority);
    const priorityContainer = document.createElement("div");
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priority);

    const dateAndPriorityContainer = document.createElement("div");
    dateAndPriorityContainer.classList.add("date-priority-container");
    dateAndPriorityContainer.appendChild(dateContainer);
    dateAndPriorityContainer.appendChild(priorityContainer);

    const addTaskButton = renderAddTaskButton(project, taskContainer, parentContainer);
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Task title can't be empty!");
            return;
        };

        project.addTask(title.value);
        const task = project.getTask(title.value);
        if(description.value !== "") {
            task.setDescription(description.value);
        }
        if(date.value !== "") {
            task.setDate(date.value);
        }
        if(priority.value !== "") {
            task.setPriority(priority.value);
        }

        Modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(project.getName(), title.value);
        console.log(localStorage);
        renderTasks(project, taskContainer);
        parentContainer.textContent = "";
        return parentContainer.appendChild(addTaskButton);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        parentContainer.textContent = "";
        return parentContainer.appendChild(addTaskButton);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container");
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(dateAndPriorityContainer);
    form.appendChild(buttonContainer);

    parentContainer.textContent = "";
    return parentContainer.appendChild(form);
}

function renderAddTaskButton(project, taskContainer, buttonContainer) {
    const addTaskButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("add", "Add Task");
    addTaskButton.addEventListener("click", () => {
       renderAddTaskForm(project, taskContainer, buttonContainer);
    });

    return addTaskButton;
}

function deleteTask(project, task, container) {
    Modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(project.getName(), task.getId());
    project.deleteTask(task.getId());
    renderTasks(project, container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMain);

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
/* harmony import */ var Modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/Storage */ "./src/components/modules/Storage.js");
/* harmony import */ var UI_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! UI/Main */ "./src/components/ui/Main.js");




function renderSidebar(todoList) {
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

        project.addEventListener("click", () => {
            (0,UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"])(todoList.getProject(element.getName()));
        });

        if(element.getIsDefault() === true) {
            projectContainers[0].appendChild(project);
        } else {
            const deleteContainer = document.createElement("div")
            deleteContainer.appendChild((0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createIcon)("delete"));

            deleteContainer.addEventListener("click", (e) => {
                e.stopPropagation();
                (0,UI_Main__WEBPACK_IMPORTED_MODULE_2__["default"])(todoList.getProject("Inbox"));
                todoList.deleteProject(element.getName());
                Modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(element.getName());
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

    const button = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)("add", "Add Project");
    button.addEventListener("click", () => {
        container.replaceWith(renderAddProjectForm(todoList, projectContainers));
    });

    container.appendChild(button);

    return container;
}

function renderAddProjectForm(todoList, projectContainers) {
    const container = document.createElement("div");
    container.classList.add("project-form");

    const title = document.createElement("input");
    title.setAttribute("type", "text");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Project name can't be empty.");
            return;
        };
        const newProject = todoList.addProject(title.value)
        if( newProject === 0) {
            alert("Project already exists!");
            return;
        };
        Modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(title.value);
        renderProjects(todoList, projectContainers);
        return container.replaceWith(renderAddProjectButton(todoList, projectContainers));
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        container.replaceWith(renderAddProjectButton(todoList, projectContainers));
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container")
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    container.appendChild(title)
    container.appendChild(buttonContainer);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSidebar);

/***/ }),

/***/ "./src/components/ui/UI.js":
/*!*********************************!*\
  !*** ./src/components/ui/UI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var UI_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! UI/Sidebar */ "./src/components/ui/Sidebar.js");
/* harmony import */ var UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! UI/Main */ "./src/components/ui/Main.js");
/* harmony import */ var Modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Modules/Storage */ "./src/components/modules/Storage.js");
/* harmony import */ var Modules_TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Modules/TodoList */ "./src/components/modules/TodoList.js");
/* harmony import */ var Templates_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Templates/style.css */ "./src/templates/style.css");






class UI {
    static renderHomepage() {
        let todoList = "";

        if(!localStorage.getItem('todoList')) {
            todoList = new Modules_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"]();
        } else {
            todoList = Modules_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList();
        }
        
        (0,UI_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])(todoList);
        (0,UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList.getProject("Inbox"));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/components/utilities/utility.js":
/*!*********************************************!*\
  !*** ./src/components/utilities/utility.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButtonWithIcon: () => (/* binding */ createButtonWithIcon),
/* harmony export */   createDropDownOption: () => (/* binding */ createDropDownOption),
/* harmony export */   createFormWithLabel: () => (/* binding */ createFormWithLabel),
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
function createButtonWithIcon(icon, text) {
    const buttonIcon = createIcon(icon);
    const buttonText = createText(text);
    
    const button = document.createElement("button");
    button.setAttribute("class", "btn-add");

    button.appendChild(buttonIcon);
    button.appendChild(buttonText);

    return button;
}

// Create form element with labels
const createFormWithLabel = {
    createForm(id, element) {
        const form = document.createElement(element);
        form.setAttribute("id", id);

        return form;
    },

    createLabel(id, text) {
        const titleLabel = document.createElement("label");
        titleLabel.textContent = text;
        titleLabel.setAttribute("for", id);

        return titleLabel;
    },
};

function createDropDownOption(text) {
    const option = document.createElement("option");
    option.setAttribute("value", text);
    option.textContent = text;

    return option;
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
/* harmony import */ var UI_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! UI/UI */ "./src/components/ui/UI.js");


document.addEventListener('DOMContentLoaded', UI_UI__WEBPACK_IMPORTED_MODULE_0__["default"].renderHomepage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDBHQUEwRyxXQUFXLDBCQUEwQiwyQkFBMkIsMEJBQTBCLHlCQUF5QiwwQkFBMEIseUJBQXlC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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNqRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0F1Qjs7QUFFdkIsOENBQThDLDZDQUFFLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90ZW1wbGF0ZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3M/NmU4MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9NYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9TaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy91aS9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0aWVzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1zcGFjZS1zbWFsbDogMXJlbTtcbiAgICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcbiAgICAtLXNwYWNlLWxhcmdlOiAzcmVtO1xuICAgIC0tZm9udC1zbWFsbDogMThweDtcbiAgICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xuICAgIC0tZm9udC1sYXJnZTogMzhweDtcbiAgICAtLWljb24tbGFyZ2U6IDQwcHg7XG4gICAgLS1pY29uLXNtYWxsOiAyNHB4O1xuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMzMzO1xuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2VlZTtcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0OiAjY2NjO1xuICAgIC0tZm9udC1saWdodDogI2VlZTtcbiAgICAtLWZvbnQtZGFyazogIzMzM1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHb29nbGUgTWF0ZXJpYWwgSWNvbiAqL1xuXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICdGSUxMJyAxLFxuICAnd2dodCcgNjAwLFxuICAnR1JBRCcgMCxcbiAgJ29wc3onIDI0O1xufVxuXG4vKiBCdXR0b24gKi9cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1zbWFsbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xufVxuXG5oZWFkZXIgPiBwIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oZWFkZXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLWxhcmdlKTtcbn1cblxuLyogQ29udGVudCAqL1xuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4vKiBTaWRlYmFyICovXG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnNpZGViYXIgPiBwIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSA+IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJ0bi1jb250YWluZXIucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5wcm9qZWN0LCAudGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdCA+IHAsIC50YXNrID4gcCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdDpob3ZlciwgLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0ID4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdDpob3ZlciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiBkaXY6aG92ZXIgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLCAudGFzazpob3ZlciA+IC5yaWdodC1wYW5lbCA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQ6aG92ZXIge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAxO1xufVxuXG4ucHJvamVjdCA+IGRpdiA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XG59XG5cbi5wcm9qZWN0IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XG59XG5cbi5wcm9qZWN0ID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vKiBNYWluICovXG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSkgOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1haW4gPiBidXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cblxuLnRhc2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xufVxuXG4udGFzayA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4udGFzayAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMDtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGFzay1kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4uaHIge1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2stZGV0YWlsID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cblxuLnRhc2stZm9ybSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi50YXNrLWZvcm0gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2stZm9ybSA+IC5idG4tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50YXNrLWZvcm0gPiAuZGF0ZS1wcmlvcml0eS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cblxuLmRhdGUtcHJpb3JpdHktY29udGFpbmVyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0U7Ozs7V0FJUztBQUNYOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixtREFBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7WUFDUTtBQUNaOztBQUVBO0lBQ0k7WUFDUTtJQUNSLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1lBQ1E7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4Qyx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2Utc21hbGw6IDFyZW07XFxuICAgIC0tc3BhY2UtbWVkaXVtOiAycmVtO1xcbiAgICAtLXNwYWNlLWxhcmdlOiAzcmVtO1xcbiAgICAtLWZvbnQtc21hbGw6IDE4cHg7XFxuICAgIC0tZm9udC1tZWRpdW06IDI2cHg7XFxuICAgIC0tZm9udC1sYXJnZTogMzhweDtcXG4gICAgLS1pY29uLWxhcmdlOiA0MHB4O1xcbiAgICAtLWljb24tc21hbGw6IDI0cHg7XFxuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMzMzO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNlZWU7XFxuICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQ6ICNjY2M7XFxuICAgIC0tZm9udC1saWdodDogI2VlZTtcXG4gICAgLS1mb250LWRhcms6ICMzMzNcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR29vZ2xlIE1hdGVyaWFsIEljb24gKi9cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDEsXFxuICAnd2dodCcgNjAwLFxcbiAgJ0dSQUQnIDAsXFxuICAnb3BzeicgMjQ7XFxufVxcblxcbi8qIEJ1dHRvbiAqL1xcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmhlYWRlciAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLWxhcmdlKTtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIucmlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBkaXYgPiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLnByb2plY3QsIC50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0ID4gcCwgLnRhc2sgPiBwIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyLCAudGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gZGl2OmhvdmVyID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCwgLnRhc2s6aG92ZXIgPiAucmlnaHQtcGFuZWwgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkOmhvdmVyIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAxO1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XFxufVxcblxcbi5wcm9qZWN0IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucHJvamVjdCA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pIDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWFpbiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxufVxcblxcbi50YXNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi50YXNrIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XFxufVxcblxcbi5yaWdodC1wYW5lbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1kZXRhaWwge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLmhyIHtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stZGV0YWlsID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1mb3JtID4gLmJ0bi1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1mb3JtID4gLmRhdGUtcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sYXJnZSk7XFxufVxcblxcbi5kYXRlLXByaW9yaXR5LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIk1vZHVsZXMvVGFza1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpc0RlZmF1bHQgPSBmYWxzZSwgaWNvbiA9IFwiY2hlY2tsaXN0XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb25cbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH07XG5cbiAgICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IHRhc2tJZCk7XG4gICAgfTtcblxuICAgIC8vIEdldHRlclxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfTtcblxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9O1xuXG4gICAgZ2V0SXNEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RlZmF1bHRcbiAgICB9O1xuXG4gICAgZ2V0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblxuICAgIH07XG5cbiAgICBnZXRUYXNrKHRhc2tJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT09IHRhc2tJZCk7XG4gICAgfTtcblxuICAgIC8vIFNldHRlclxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG4gICAgXG4gICAgc2V0SXNEZWZhdWx0KGlzRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmlzRGVmYXVsdCA9IGlzRGVmYXVsdDtcbiAgICB9O1xuXG4gICAgc2V0SWNvbihpY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfTtcblxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIk1vZHVsZXMvVG9kb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCJNb2R1bGVzL1Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCJNb2R1bGVzL1Rhc2tcIjtcblxuY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgVG9kb0xpc3QoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpXG4gICAgICAgICk7XG5cbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHMoXG4gICAgICAgICAgICB0b2RvTGlzdFxuICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnNldFRhc2tzKFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcbiAgICB9O1xuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tJZCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICByZXR1cm4gU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfTtcblxuICAgIHN0YXRpYyBlZGl0VGFzayhwcm9qZWN0TmFtZSwgdGFza0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICBjb25zdCB0YXNrID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrSWQpO1xuXG4gICAgICAgIHRhc2suc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFzay5zZXREYXRlKGRhdGUpO1xuICAgICAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5KTtcblxuICAgICAgICByZXR1cm4gU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmluY3JlbWVudElkKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb25cIjtcbiAgICAgICAgdGhpcy5kYXRlID0gXCJObyBkYXRlXCI7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBcIkxvd1wiO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW5jcmVtZW50SWQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmxhc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0SWQgPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RJZCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQ7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9O1xuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH07XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfTtcblxuICAgIC8vIFNldHRlclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9O1xuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBzZXREYXRlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9O1xuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCJNb2R1bGVzL1Byb2plY3RcIjtcblxuY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkluYm94XCIsIHRydWUsIFwiaW5ib3hcIikpO1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBHZXR0ZXJcbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfTtcblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUJ1dHRvbldpdGhJY29uLCBjcmVhdGVEcm9wRG93bk9wdGlvbiwgY3JlYXRlRm9ybVdpdGhMYWJlbCB9IGZyb20gXCJVdGlsaXRpZXMvdXRpbGl0eVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIk1vZHVsZXMvU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJNYWluKHByb2plY3QpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVUZXh0KHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IHJlbmRlckFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gcmVuZGVyVGFzayhwcm9qZWN0LCBlbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2socHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlclRhc2tEZXRhaWwocHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIsIGNvbnRhaW5lcikpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXBhbmVsXCIpXG4gICAgbGVmdFBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oXCJyYWRpb19idXR0b25fdW5jaGVja2VkXCIpKTtcbiAgICBsZWZ0UGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0YXNrLmdldFRpdGxlKCkpKTtcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0UGFuZWwuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXBhbmVsXCIpO1xuICAgIHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0YXNrLmdldERhdGUoKSkpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUljb24oXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIHRhc2tzQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByaWdodFBhbmVsLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFBhbmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRQYW5lbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrRGV0YWlsKHByb2plY3QsIHRhc2ssIHRhc2tzQ29udGFpbmVyLCB0YXNrQ29udGFpbmVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlsXCIpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dCh0YXNrLmdldFRpdGxlKCkpO1xuICAgIGNvbnN0IHRpdGxlRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZVRleHQodGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZVRleHQoYER1ZTogJHt0YXNrLmdldERhdGUoKX1gKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZVRleHQoYFByaW9yaXR5OiAke3Rhc2suZ2V0UHJpb3JpdHkoKX1gKTtcblxuICAgIGNvbnN0IGRhdGVQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZVByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRhdGVQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCBiYWNrQnV0dG9uID0gY3JlYXRlQnV0dG9uV2l0aEljb24oXCJjbG9zZVwiLCBcIkNsb3NlXCIpO1xuICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHRhc2tDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbldpdGhJY29uKFwiZWRpdFwiLCBcIkVkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyRWRpdFRhc2tGb3JtKHByb2plY3QsIHRhc2ssIGNvbnRhaW5lciwgdGFza3NDb250YWluZXIsIHRhc2tDb250YWluZXIpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIsIFwicmlnaHRcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2aWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdmlkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUHJpb3JpdHlDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRWRpdFRhc2tGb3JtKHByb2plY3QsIHRhc2ssIGRldGFpbENvbnRhaW5lciwgdGFza3NDb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJlZGl0LXRpdGxlXCIsIFwiaW5wdXRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGFzay5nZXRUaXRsZSgpKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcImVkaXQtdGl0bGVcIiwgXCJUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJlZGl0LWRlc2NyaXB0aW9uXCIsIFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKClcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcImVkaXQtZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlRm9ybShcImVkaXQtZGF0ZVwiLCBcImlucHV0XCIpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLmdldERhdGUoKSlcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUxhYmVsKFwiZWRpdC1kYXRlXCIsIFwiRHVlIGRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlRm9ybShcImVkaXQtcHJpb3JpdHlcIiwgXCJzZWxlY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlTGFiZWwoXCJlZGl0LXByaW9yaXR5XCIsIFwiUHJpb3JpdHlcIik7XG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBjcmVhdGVEcm9wRG93bk9wdGlvbihcIkxvd1wiKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGNyZWF0ZURyb3BEb3duT3B0aW9uKFwiTWVkaXVtXCIpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGNyZWF0ZURyb3BEb3duT3B0aW9uKFwiSGlnaFwiKTtcbiAgICBpZih0YXNrLmdldFByaW9yaXR5KCkgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH0gZWxzZSBpZih0YXNrLmdldFByaW9yaXR5KCkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcbiAgICBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gICAgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBjcmVhdGVCdXR0b25XaXRoSWNvbihcImNsb3NlXCIsIFwiQ2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgoZGV0YWlsQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbldpdGhJY29uKFwiZG9uZVwiLCBcIlNhdmVcIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suc2V0VGl0bGUodGl0bGUudmFsdWUpO1xuICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgdGFzay5zZXREYXRlKGRhdGUudmFsdWUpO1xuICAgICAgICB0YXNrLnNldFByaW9yaXR5KHByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgU3RvcmFnZS5lZGl0VGFzayhwcm9qZWN0LmdldE5hbWUoKSwgdGFzay5nZXRJZCgpLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlclRhc2socHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIsIFwicmlnaHRcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0Zvcm0ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgcGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVGb3JtKFwicmVhZC10aXRsZVwiLCBcImlucHV0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUxhYmVsKFwicmVhZC10aXRsZVwiLCBcIlRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVGb3JtKFwicmVhZC1kZXNjcmlwdGlvblwiLCBcInRleHRhcmVhXCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlTGFiZWwoXCJyZWFkLWRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJyZWFkLWRhdGVcIiwgXCJpbnB1dFwiKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlTGFiZWwoXCJyZWFkLWRhdGVcIiwgXCJEdWUgZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVGb3JtKFwicmVhZC1wcmlvcml0eVwiLCBcInNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcInJlYWQtcHJpb3JpdHlcIiwgXCJQcmlvcml0eVwiKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZURyb3BEb3duT3B0aW9uKFwiTG93XCIpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gY3JlYXRlRHJvcERvd25PcHRpb24oXCJNZWRpdW1cIik7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gY3JlYXRlRHJvcERvd25PcHRpb24oXCJIaWdoXCIpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtcHJpb3JpdHktY29udGFpbmVyXCIpO1xuICAgIGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IHJlbmRlckFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgcGFyZW50Q29udGFpbmVyKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGFzayB0aXRsZSBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRpdGxlLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0aXRsZS52YWx1ZSk7XG4gICAgICAgIGlmKGRlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRlLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0YXNrLnNldERhdGUoZGF0ZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYocHJpb3JpdHkudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRhc2suc2V0UHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3RvcmFnZS5hZGRUYXNrKHByb2plY3QuZ2V0TmFtZSgpLCB0aXRsZS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QsIHRhc2tDb250YWluZXIpO1xuICAgICAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIHBhcmVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmV0dXJuIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQnV0dG9uV2l0aEljb24oXCJhZGRcIiwgXCJBZGQgVGFza1wiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgcmVuZGVyQWRkVGFza0Zvcm0ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRUYXNrQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIGNvbnRhaW5lcikge1xuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhwcm9qZWN0LmdldE5hbWUoKSwgdGFzay5nZXRJZCgpKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYWluOyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUJ1dHRvbldpdGhJY29uIH0gZnJvbSBcIlV0aWxpdGllcy91dGlsaXR5XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiTW9kdWxlcy9TdG9yYWdlXCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiVUkvTWFpblwiO1xuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyKHRvZG9MaXN0KSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RDb250YWluZXIgPSByZW5kZXJQcm9qZWN0Q29udGFpbmVyKFwiZGVmYXVsdFwiKTtcbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0Q29udGFpbmVyID0gcmVuZGVyUHJvamVjdENvbnRhaW5lcihcImN1c3RvbVwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVycyA9IFtdO1xuXG4gICAgcHJvamVjdENvbnRhaW5lcnMucHVzaChkZWZhdWx0UHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lcnMucHVzaChjdXN0b21Qcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gcmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKTtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBjcmVhdGVUZXh0KFwiUHJvamVjdHNcIik7XG4gICAgXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1swXSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChkaXZpZGVyKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzWzFdKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RDb250YWluZXIobmFtZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmFtZSwgXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QodGl0bGUsIGljb24pIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oaWNvbikpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRpdGxlKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9KTtcblxuICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJlbmRlclByb2plY3QoZWxlbWVudC5nZXROYW1lKCksIGVsZW1lbnQuZ2V0SWNvbigpLCBlbGVtZW50LmdldElzRGVmYXVsdCgpKTtcblxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJNYWluKHRvZG9MaXN0LmdldFByb2plY3QoZWxlbWVudC5nZXROYW1lKCkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoZWxlbWVudC5nZXRJc0RlZmF1bHQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbMF0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbihcImRlbGV0ZVwiKSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJlbmRlck1haW4odG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QoZWxlbWVudC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzFdLnJlcGxhY2VXaXRoKHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycylbMV0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbMV0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcnM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b25XaXRoSWNvbihcImFkZFwiLCBcIkFkZCBQcm9qZWN0XCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyQWRkUHJvamVjdEZvcm0odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbid0IGJlIGVtcHR5LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRvZG9MaXN0LmFkZFByb2plY3QodGl0bGUudmFsdWUpXG4gICAgICAgIGlmKCBuZXdQcm9qZWN0ID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QodGl0bGUudmFsdWUpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cyh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tY29udGFpbmVyXCIpXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaWRlYmFyOyIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCJVSS9TaWRlYmFyXCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiVUkvTWFpblwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIk1vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCJNb2R1bGVzL1RvZG9MaXN0XCI7XG5pbXBvcnQgXCJUZW1wbGF0ZXMvc3R5bGUuY3NzXCI7XG5cbmNsYXNzIFVJIHtcbiAgICBzdGF0aWMgcmVuZGVySG9tZXBhZ2UoKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IFwiXCI7XG5cbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSB7XG4gICAgICAgICAgICB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlclNpZGViYXIodG9kb0xpc3QpO1xuICAgICAgICByZW5kZXJNYWluKHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCIvLyBNb2R1bGUgZm9yIGhlbHBpbmcgY3JlYXRlIGltYWdlcyBhbmQgcGFyYWdyYXBoc1xuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRleHQgd2l0aCAxIHBhcmFtZXRlcnMuXG4vLyB0ZXh0IGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgaW1hZ2Ugd2l0aCBjcmVkaXRzLiBDb250YWluaW5nIDMgcGFyYW1ldGVycy5cbi8vIEltYWdlIHNvdXJjZSwgY3JlZGl0IGxpbmsgYW5kIGNyZWRpdCB0ZXh0LlxuZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjLCBjcmVkaXRMaW5rLCBjcmVkaXRUZXh0KSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG5cbiAgICBjb25zdCBjcmVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNyZWRpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNyZWRpdFwiKVxuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY3JlZGl0LmhyZWYgPSBjcmVkaXRMaW5rO1xuICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IGNyZWRpdFRleHQ7XG5cbiAgICBjcmVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1jb250YWluZXJcIik7XG5cbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBpbWFnZUNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGljb24gZnJvbSBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vaWNvbnNcbmZ1bmN0aW9uIGNyZWF0ZUljb24obmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIGljb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGljb247XG59XG5cbi8vIENyZWF0ZSBhZGQgYnV0dG9uIGZvciB0YXNrIGFuZCBwcm9qZWN0c1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uV2l0aEljb24oaWNvbiwgdGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbkljb24gPSBjcmVhdGVJY29uKGljb24pO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBjcmVhdGVUZXh0KHRleHQpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuLWFkZFwiKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBDcmVhdGUgZm9ybSBlbGVtZW50IHdpdGggbGFiZWxzXG5jb25zdCBjcmVhdGVGb3JtV2l0aExhYmVsID0ge1xuICAgIGNyZWF0ZUZvcm0oaWQsIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuXG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH0sXG5cbiAgICBjcmVhdGVMYWJlbChpZCwgdGV4dCkge1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuXG4gICAgICAgIHJldHVybiB0aXRsZUxhYmVsO1xuICAgIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEcm9wRG93bk9wdGlvbih0ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGV4dCk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBvcHRpb247XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVGV4dCxcbiAgICBjcmVhdGVJbWFnZSxcbiAgICBjcmVhdGVJY29uLFxuICAgIGNyZWF0ZUJ1dHRvbldpdGhJY29uLFxuICAgIGNyZWF0ZUZvcm1XaXRoTGFiZWwsXG4gICAgY3JlYXRlRHJvcERvd25PcHRpb24sXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tIFwiVUkvVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLnJlbmRlckhvbWVwYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=