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
}`, "",{"version":3,"sources":["webpack://./src/templates/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\n:root {\n    --space-small: 1rem;\n    --space-medium: 2rem;\n    --space-large: 3rem;\n    --font-small: 18px;\n    --font-medium: 26px;\n    --font-large: 38px;\n    --icon-large: 40px;\n    --icon-small: 24px;\n    --background-dark: #333;\n    --background-light: #eee;\n    --background-secondary-light: #ccc;\n    --font-light: #eee;\n    --font-dark: #333\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* Google Material Icon */\n\n.material-symbols-rounded {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 24;\n}\n\n/* Button */\nbutton {\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n    padding: 0 var(--space-small);\n    background-color: rgba(0, 0, 0, 0);\n    font-size: var(--font-small);\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--space-small);\n    cursor: pointer;\n}\n\n\n/* Header */\n\nheader {\n    height: 15vh;\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n    padding: var(--space-medium);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}\n\nheader > p {\n    font-size: var(--font-large);\n    font-weight: bold;\n}\n\nheader .material-symbols-rounded {\n    font-size: var(--icon-large);\n}\n\n/* Content */\n\n.content {\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    padding: var(--space-medium);\n    background-color: var(--background-secondary-light);\n    color: var(--font-dark);\n    overflow-x: hidden;\n}\n\n.sidebar > p {\n    font-size: var(--font-medium);\n    font-weight: bold;\n}\n\n.sidebar > .project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.sidebar > .project-form > input {\n    width: 100%;\n    font-size: var(--font-small);\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.btn-container.right {\n    justify-content: flex-end;\n}\n\n.sidebar > .project-form > div > button {\n    width: 50%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.project, .task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border: none;\n    background: none;\n    gap: var(--space-small);\n    cursor: pointer;\n    position: relative;\n    padding: 5px;\n}\n\n.project > p, .task > p {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.project:hover, .task:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n}\n\n.project > div {\n    margin-left: auto;\n    display: none;\n}\n\n.project:hover > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.project:hover > div:hover > .material-symbols-rounded, .task:hover > .right-panel > .material-symbols-rounded:hover {\n    font-variation-settings:\n    'FILL' 1;\n}\n\n.project > div > .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.project .material-symbols-rounded {\n    font-size: var(--icon-small);\n}\n\n.project > p {\n    font-size: var(--font-small);\n    font-weight: 400;\n}\n\n/* Main */\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    font-size: var(--font-medium);\n    padding: var(--space-medium) 8rem;\n    background-color: var(--background-light);\n    color: var(--font-dark);\n    height: 100%;\n    overflow-y: auto;\n}\n\n.main > button {\n    width: fit-content;\n}\n\n.project-name {\n    font-weight: bold;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    font-size: var(--font-small);\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n}\n\n.task .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.right-panel {\n    margin-left: auto;\n}\n\n.task-detail {\n    font-size: var(--font-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.hr {\n    border-top: 5px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.task-detail > div {\n    display: flex;\n    gap: var(--space-medium);\n}\n\n.task-form {\n    font-size: var(--font-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.task-form > div {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-form > .btn-container {\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.task-form > .date-priority-container {\n    display: flex;\n    flex-direction: row;\n    gap: var(--space-large);\n}\n\n.date-priority-container > div {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Footer */\n\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-small);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}"],"sourceRoot":""}]);
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

function renderEditTaskForm(project, task, detailContainer, tasksContainer, taskContainer) {
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
/* harmony import */ var Modules_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/TodoList */ "./src/components/modules/TodoList.js");
/* harmony import */ var UI_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! UI/Main */ "./src/components/ui/Main.js");




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
        renderProjects(todoList, projectContainers);
        container.replaceWith(renderAddProjectButton(todoList, projectContainers));
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
/* harmony import */ var Modules_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Modules/TodoList */ "./src/components/modules/TodoList.js");
/* harmony import */ var Templates_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Templates/style.css */ "./src/templates/style.css");





class UI {
    static renderHomepage() {
        const todoList = new Modules_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"]();
        (0,UI_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDBHQUEwRyxXQUFXLDBCQUEwQiwyQkFBMkIsMEJBQTBCLHlCQUF5QiwwQkFBMEIseUJBQXlC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UUFBUSxzREFBYTtBQUNyQixRQUFRLG1EQUFVO0FBQ2xCO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNqRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0F1Qjs7QUFFdkIsOENBQThDLDZDQUFFLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90ZW1wbGF0ZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3M/NmU4MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tc3BhY2Utc21hbGw6IDFyZW07XG4gICAgLS1zcGFjZS1tZWRpdW06IDJyZW07XG4gICAgLS1zcGFjZS1sYXJnZTogM3JlbTtcbiAgICAtLWZvbnQtc21hbGw6IDE4cHg7XG4gICAgLS1mb250LW1lZGl1bTogMjZweDtcbiAgICAtLWZvbnQtbGFyZ2U6IDM4cHg7XG4gICAgLS1pY29uLWxhcmdlOiA0MHB4O1xuICAgIC0taWNvbi1zbWFsbDogMjRweDtcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzMzMztcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNlZWU7XG4gICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1saWdodDogI2NjYztcbiAgICAtLWZvbnQtbGlnaHQ6ICNlZWU7XG4gICAgLS1mb250LWRhcms6ICMzMzNcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogR29vZ2xlIE1hdGVyaWFsIEljb24gKi9cblxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAnRklMTCcgMSxcbiAgJ3dnaHQnIDYwMCxcbiAgJ0dSQUQnIDAsXG4gICdvcHN6JyAyNDtcbn1cblxuLyogQnV0dG9uICovXG5idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIEhlYWRlciAqL1xuXG5oZWFkZXIge1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcbn1cblxuaGVhZGVyID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaGVhZGVyIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1sYXJnZSk7XG59XG5cbi8qIENvbnRlbnQgKi9cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLyogU2lkZWJhciAqL1xuXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5idG4tY29udGFpbmVyLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBkaXYgPiBidXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ucHJvamVjdCwgLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QgPiBwLCAudGFzayA+IHAge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3Q6aG92ZXIsIC50YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdCA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gZGl2OmhvdmVyID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCwgLnRhc2s6aG92ZXIgPiAucmlnaHQtcGFuZWwgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkOmhvdmVyIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMTtcbn1cblxuLnByb2plY3QgPiBkaXYgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMDtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucHJvamVjdCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucHJvamVjdCA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLyogTWFpbiAqL1xuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pIDhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYWluID4gYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi50YXNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbn1cblxuLnRhc2sgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLnRhc2sgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgJ0ZJTEwnIDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRhc2stZGV0YWlsIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLmhyIHtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YXNrLWRldGFpbCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi50YXNrLWZvcm0ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4udGFzay1mb3JtID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrLWZvcm0gPiAuYnRuLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGFzay1mb3JtID4gLmRhdGUtcHJpb3JpdHktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sYXJnZSk7XG59XG5cbi5kYXRlLXByaW9yaXR5LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBGb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90ZW1wbGF0ZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFOzs7O1dBSVM7QUFDWDs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7O0FBR0Es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Yix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNlLXNtYWxsOiAxcmVtO1xcbiAgICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcXG4gICAgLS1zcGFjZS1sYXJnZTogM3JlbTtcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcbiAgICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xcbiAgICAtLWZvbnQtbGFyZ2U6IDM4cHg7XFxuICAgIC0taWNvbi1sYXJnZTogNDBweDtcXG4gICAgLS1pY29uLXNtYWxsOiAyNHB4O1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzMzMztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZWVlO1xcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0OiAjY2NjO1xcbiAgICAtLWZvbnQtbGlnaHQ6ICNlZWU7XFxuICAgIC0tZm9udC1kYXJrOiAjMzMzXFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdvb2dsZSBNYXRlcmlhbCBJY29uICovXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAxLFxcbiAgJ3dnaHQnIDYwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDI0O1xcbn1cXG5cXG4vKiBCdXR0b24gKi9cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oZWFkZXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1sYXJnZSk7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idG4tY29udGFpbmVyLnJpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi5wcm9qZWN0LCAudGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCA+IHAsIC50YXNrID4gcCB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciwgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IGRpdjpob3ZlciA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsIC50YXNrOmhvdmVyID4gLnJpZ2h0LXBhbmVsID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZDpob3ZlciB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMTtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucHJvamVjdCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcXG59XFxuXFxuLnByb2plY3QgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKSA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1haW4gPiBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbn1cXG5cXG4udGFzayAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucmlnaHQtcGFuZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2stZGV0YWlsIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi5ociB7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWRldGFpbCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbn1cXG5cXG4udGFzay1mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stZm9ybSA+IC5idG4tY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2stZm9ybSA+IC5kYXRlLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xcbn1cXG5cXG4uZGF0ZS1wcmlvcml0eS1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCJNb2R1bGVzL1Rhc2tcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaXNEZWZhdWx0ID0gZmFsc2UsIGljb24gPSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xuICAgICAgICB0aGlzLmljb24gPSBpY29uXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9O1xuXG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRJZCgpICE9PSB0YXNrSWQpO1xuICAgIH07XG5cbiAgICAvLyBHZXR0ZXJcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfTtcblxuICAgIGdldElzRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEZWZhdWx0XG4gICAgfTtcblxuICAgIGdldEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmljb25cbiAgICB9O1xuXG4gICAgZ2V0VGFzayh0YXNrVGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpO1xuICAgIH07XG5cbiAgICAvLyBTZXR0ZXJcbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9O1xuICAgIFxuICAgIHNldElzRGVmYXVsdChpc0RlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG4gICAgfTtcblxuICAgIHNldEljb24oaWNvbikge1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIH07XG5cbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IFRhc2suaW5jcmVtZW50SWQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvblwiO1xuICAgICAgICB0aGlzLmRhdGUgPSBcIk5vIGRhdGVcIjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IFwiTG93XCI7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbmNyZW1lbnRJZCgpIHtcbiAgICAgICAgaWYoIXRoaXMubGFzdElkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RJZCA9IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZDtcbiAgICB9XG5cbiAgICAvLyBHZXR0ZXJcbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH07XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgfTtcblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH07XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHNldERhdGUoZGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH07XG5cbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIk1vZHVsZXMvUHJvamVjdFwiO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiSW5ib3hcIiwgdHJ1ZSwgXCJpbmJveFwiKSk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgaWYodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZSk7XG4gICAgfTtcblxuICAgIC8vIEdldHRlclxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9O1xuXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBTZXR0ZXJcbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7IiwiaW1wb3J0IHsgY3JlYXRlVGV4dCwgY3JlYXRlSWNvbiwgY3JlYXRlQnV0dG9uV2l0aEljb24sIGNyZWF0ZURyb3BEb3duT3B0aW9uLCBjcmVhdGVGb3JtV2l0aExhYmVsIH0gZnJvbSBcIlV0aWxpdGllcy91dGlsaXR5XCI7XG5cbmZ1bmN0aW9uIHJlbmRlck1haW4ocHJvamVjdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZVRleHQocHJvamVjdC5nZXROYW1lKCkpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcblxuICAgIHJlbmRlclRhc2tzKHByb2plY3QsIHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSByZW5kZXJUYXNrKHByb2plY3QsIGVsZW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhwcm9qZWN0LCB0YXNrLCB0YXNrc0NvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyVGFza0RldGFpbChwcm9qZWN0LCB0YXNrLCB0YXNrc0NvbnRhaW5lciwgY29udGFpbmVyKSk7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0UGFuZWwuY2xhc3NMaXN0LmFkZChcImxlZnQtcGFuZWxcIilcbiAgICBsZWZ0UGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbihcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIikpO1xuICAgIGxlZnRQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRhc2suZ2V0VGl0bGUoKSkpO1xuXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRQYW5lbC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtcGFuZWxcIik7XG4gICAgcmlnaHRQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRhc2suZ2V0RGF0ZSgpKSk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlSWNvbihcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFBhbmVsKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tEZXRhaWwocHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIsIHRhc2tDb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxcIik7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0KHRhc2suZ2V0VGl0bGUoKSk7XG4gICAgY29uc3QgdGl0bGVEaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlVGV4dCh0YXNrLmdldERlc2NyaXB0aW9uKCkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlVGV4dChgRHVlOiAke3Rhc2suZ2V0RGF0ZSgpfWApO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlVGV4dChgUHJpb3JpdHk6ICR7dGFzay5nZXRQcmlvcml0eSgpfWApO1xuXG4gICAgY29uc3QgZGF0ZVByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZGF0ZVByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBjcmVhdGVCdXR0b25XaXRoSWNvbihcImNsb3NlXCIsIFwiQ2xvc2VcIik7XG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgodGFza0NvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uV2l0aEljb24oXCJlZGl0XCIsIFwiRWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJFZGl0VGFza0Zvcm0ocHJvamVjdCwgdGFzaywgY29udGFpbmVyLCB0YXNrc0NvbnRhaW5lciwgdGFza0NvbnRhaW5lcikpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIiwgXCJyaWdodFwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXZpZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2aWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQcmlvcml0eUNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJFZGl0VGFza0Zvcm0ocHJvamVjdCwgdGFzaywgZGV0YWlsQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lciwgdGFza0NvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlRm9ybShcImVkaXQtdGl0bGVcIiwgXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLmdldFRpdGxlKCkpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUxhYmVsKFwiZWRpdC10aXRsZVwiLCBcIlRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlRm9ybShcImVkaXQtZGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUxhYmVsKFwiZWRpdC1kZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVGb3JtKFwiZWRpdC1kYXRlXCIsIFwiaW5wdXRcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2suZ2V0RGF0ZSgpKVxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlTGFiZWwoXCJlZGl0LWRhdGVcIiwgXCJEdWUgZGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVGb3JtKFwiZWRpdC1wcmlvcml0eVwiLCBcInNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcImVkaXQtcHJpb3JpdHlcIiwgXCJQcmlvcml0eVwiKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZURyb3BEb3duT3B0aW9uKFwiTG93XCIpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gY3JlYXRlRHJvcERvd25PcHRpb24oXCJNZWRpdW1cIik7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gY3JlYXRlRHJvcERvd25PcHRpb24oXCJIaWdoXCIpO1xuICAgIGlmKHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgfSBlbHNlIGlmKHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtcHJpb3JpdHktY29udGFpbmVyXCIpO1xuICAgIGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuICAgIFxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbldpdGhJY29uKFwiY2xvc2VcIiwgXCJDYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChkZXRhaWxDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlQnV0dG9uV2l0aEljb24oXCJkb25lXCIsIFwiU2F2ZVwiKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5zZXRUaXRsZSh0aXRsZS52YWx1ZSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICB0YXNrLnNldERhdGUoZGF0ZS52YWx1ZSk7XG4gICAgICAgIHRhc2suc2V0UHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyVGFzayhwcm9qZWN0LCB0YXNrLCB0YXNrc0NvbnRhaW5lcikpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIiwgXCJyaWdodFwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrRm9ybShwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJyZWFkLXRpdGxlXCIsIFwiaW5wdXRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlTGFiZWwoXCJyZWFkLXRpdGxlXCIsIFwiVGl0bGVcIik7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJyZWFkLWRlc2NyaXB0aW9uXCIsIFwidGV4dGFyZWFcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcInJlYWQtZGVzY3JpcHRpb25cIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUZvcm1XaXRoTGFiZWwuY3JlYXRlRm9ybShcInJlYWQtZGF0ZVwiLCBcImlucHV0XCIpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gY3JlYXRlRm9ybVdpdGhMYWJlbC5jcmVhdGVMYWJlbChcInJlYWQtZGF0ZVwiLCBcIkR1ZSBkYXRlXCIpO1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUZvcm0oXCJyZWFkLXByaW9yaXR5XCIsIFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVGb3JtV2l0aExhYmVsLmNyZWF0ZUxhYmVsKFwicmVhZC1wcmlvcml0eVwiLCBcIlByaW9yaXR5XCIpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gY3JlYXRlRHJvcERvd25PcHRpb24oXCJMb3dcIik7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBjcmVhdGVEcm9wRG93bk9wdGlvbihcIk1lZGl1bVwiKTtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGVEcm9wRG93bk9wdGlvbihcIkhpZ2hcIik7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1wcmlvcml0eS1jb250YWluZXJcIik7XG4gICAgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICAgIGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBwYXJlbnRDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJUYXNrIHRpdGxlIGNhbid0IGJlIGVtcHR5IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGl0bGUudmFsdWUpO1xuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrKHRpdGxlLnZhbHVlKTtcbiAgICAgICAgaWYoZGVzY3JpcHRpb24udmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRhdGUudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRhc2suc2V0RGF0ZShkYXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZihwcmlvcml0eS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGFzay5zZXRQcmlvcml0eShwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCB0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJldHVybiBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbldpdGhJY29uKFwiYWRkXCIsIFwiQWRkIFRhc2tcIik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgIHJlbmRlckFkZFRhc2tGb3JtKHByb2plY3QsIHRhc2tDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCBjb250YWluZXIpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYWluOyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUJ1dHRvbldpdGhJY29uIH0gZnJvbSBcIlV0aWxpdGllcy91dGlsaXR5XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIk1vZHVsZXMvVG9kb0xpc3RcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCJVSS9NYWluXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Q29udGFpbmVyID0gcmVuZGVyUHJvamVjdENvbnRhaW5lcihcImRlZmF1bHRcIik7XG4gICAgY29uc3QgY3VzdG9tUHJvamVjdENvbnRhaW5lciA9IHJlbmRlclByb2plY3RDb250YWluZXIoXCJjdXN0b21cIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lcnMgPSBbXTtcblxuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goZGVmYXVsdFByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goY3VzdG9tUHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBkaXZpZGVyID0gY3JlYXRlVGV4dChcIlByb2plY3RzXCIpO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSByZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNbMF0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1sxXSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKG5hbWUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5hbWUsIFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHRpdGxlLCBpY29uKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJY29uKGljb24pKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0aXRsZSkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgcHJvamVjdENvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXJQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpLCBlbGVtZW50LmdldEljb24oKSwgZWxlbWVudC5nZXRJc0RlZmF1bHQoKSk7XG5cbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyTWFpbih0b2RvTGlzdC5nZXRQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0SXNEZWZhdWx0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzBdLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oXCJkZWxldGVcIikpO1xuXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZW5kZXJNYWluKHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChlbGVtZW50LmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbMV0ucmVwbGFjZVdpdGgocmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKVsxXSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1sxXS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVycztcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbldpdGhJY29uKFwiYWRkXCIsIFwiQWRkIFByb2plY3RcIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0Rm9ybSh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEZvcm0odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgY2FuJ3QgYmUgZW1wdHkuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdG9kb0xpc3QuYWRkUHJvamVjdCh0aXRsZS52YWx1ZSlcbiAgICAgICAgaWYoIG5ld1Byb2plY3QgPT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuLWNvbnRhaW5lclwiKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2lkZWJhcjsiLCJpbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tIFwiVUkvU2lkZWJhclwiO1xuaW1wb3J0IHJlbmRlck1haW4gZnJvbSBcIlVJL01haW5cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiTW9kdWxlcy9Ub2RvTGlzdFwiO1xuaW1wb3J0IFwiVGVtcGxhdGVzL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBVSSB7XG4gICAgc3RhdGljIHJlbmRlckhvbWVwYWdlKCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgICAgICByZW5kZXJTaWRlYmFyKCk7XG4gICAgICAgIHJlbmRlck1haW4odG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsIi8vIE1vZHVsZSBmb3IgaGVscGluZyBjcmVhdGUgaW1hZ2VzIGFuZCBwYXJhZ3JhcGhzXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGV4dCB3aXRoIDEgcGFyYW1ldGVycy5cbi8vIHRleHQgY29udGVudFxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBpbWFnZSB3aXRoIGNyZWRpdHMuIENvbnRhaW5pbmcgMyBwYXJhbWV0ZXJzLlxuLy8gSW1hZ2Ugc291cmNlLCBjcmVkaXQgbGluayBhbmQgY3JlZGl0IHRleHQuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShzcmMsIGNyZWRpdExpbmssIGNyZWRpdFRleHQpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcblxuICAgIGNvbnN0IGNyZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3JlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3JlZGl0XCIpXG5cbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjcmVkaXQuaHJlZiA9IGNyZWRpdExpbms7XG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gY3JlZGl0VGV4dDtcblxuICAgIGNyZWRpdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWNvbnRhaW5lclwiKTtcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufVxuXG4vLyBDcmVhdGUgaWNvbiBmcm9tIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9pY29uc1xuZnVuY3Rpb24gY3JlYXRlSWNvbihuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gICAgaWNvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICByZXR1cm4gaWNvbjtcbn1cblxuLy8gQ3JlYXRlIGFkZCBidXR0b24gZm9yIHRhc2sgYW5kIHByb2plY3RzXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25XaXRoSWNvbihpY29uLCB0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uSWNvbiA9IGNyZWF0ZUljb24oaWNvbik7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZVRleHQodGV4dCk7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tYWRkXCIpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbi8vIENyZWF0ZSBmb3JtIGVsZW1lbnQgd2l0aCBsYWJlbHNcbmNvbnN0IGNyZWF0ZUZvcm1XaXRoTGFiZWwgPSB7XG4gICAgY3JlYXRlRm9ybShpZCwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfSxcblxuICAgIGNyZWF0ZUxhYmVsKGlkLCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlTGFiZWw7XG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3BEb3duT3B0aW9uKHRleHQpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUZXh0LFxuICAgIGNyZWF0ZUltYWdlLFxuICAgIGNyZWF0ZUljb24sXG4gICAgY3JlYXRlQnV0dG9uV2l0aEljb24sXG4gICAgY3JlYXRlRm9ybVdpdGhMYWJlbCxcbiAgICBjcmVhdGVEcm9wRG93bk9wdGlvbixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gXCJVSS9VSVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkucmVuZGVySG9tZXBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==