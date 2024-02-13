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

#task-form {
    font-size: var(--font-small);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
}

#task-form > div {
    display: flex;
    flex-direction: column;
}

#task-form > .btn-container {
    flex-direction: row;
    justify-content: flex-end;
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
}`, "",{"version":3,"sources":["webpack://./src/templates/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\n:root {\n    --space-small: 1rem;\n    --space-medium: 2rem;\n    --space-large: 3rem;\n    --font-small: 18px;\n    --font-medium: 26px;\n    --font-large: 38px;\n    --icon-large: 40px;\n    --icon-small: 24px;\n    --background-dark: #333;\n    --background-light: #eee;\n    --background-secondary-light: #ccc;\n    --font-light: #eee;\n    --font-dark: #333\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* Google Material Icon */\n\n.material-symbols-rounded {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 600,\n  'GRAD' 0,\n  'opsz' 24;\n}\n\n/* Button */\nbutton {\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n    padding: 0 var(--space-small);\n    background-color: rgba(0, 0, 0, 0);\n    font-size: var(--font-small);\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--space-small);\n    cursor: pointer;\n}\n\n\n/* Header */\n\nheader {\n    height: 15vh;\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n    padding: var(--space-medium);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}\n\nheader > p {\n    font-size: var(--font-large);\n    font-weight: bold;\n}\n\nheader .material-symbols-rounded {\n    font-size: var(--icon-large);\n}\n\n/* Content */\n\n.content {\n    height: 80vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    padding: var(--space-medium);\n    background-color: var(--background-secondary-light);\n    color: var(--font-dark);\n    overflow-x: hidden;\n}\n\n.sidebar > p {\n    font-size: var(--font-medium);\n    font-weight: bold;\n}\n\n.sidebar > .project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.sidebar > .project-form > input {\n    width: 100%;\n    font-size: var(--font-small);\n    border: 2px solid var(--font-dark);\n    border-radius: 5px;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.sidebar > .project-form > div > button {\n    width: 50%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.project, .task {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border: none;\n    background: none;\n    gap: var(--space-small);\n    cursor: pointer;\n    position: relative;\n    padding: 5px;\n}\n\n.project > p, .task > p {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.project:hover, .task:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n}\n\n.project > div {\n    margin-left: auto;\n    display: none;\n}\n\n.project:hover > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.project:hover > div:hover > .material-symbols-rounded, .task:hover > .right-panel > .material-symbols-rounded:hover {\n    font-variation-settings:\n    'FILL' 1;\n}\n\n.project > div > .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.project .material-symbols-rounded {\n    font-size: var(--icon-small);\n}\n\n.project > p {\n    font-size: var(--font-small);\n    font-weight: 400;\n}\n\n/* Main */\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n    font-size: var(--font-medium);\n    padding: var(--space-medium) 8rem;\n    background-color: var(--background-light);\n    color: var(--font-dark);\n    height: 100%;\n    overflow-y: auto;\n}\n\n.main > button {\n    width: fit-content;\n}\n\n.project-name {\n    font-weight: bold;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-medium);\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    font-size: var(--font-small);\n}\n\n.task > div {\n    display: flex;\n    align-items: center;\n    gap: var(--space-small);\n}\n\n.task .material-symbols-rounded {\n    font-variation-settings:\n    'FILL' 0;\n    font-size: var(--icon-small);\n}\n\n.right-panel {\n    margin-left: auto;\n}\n\n#task-form {\n    font-size: var(--font-small);\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n#task-form > div {\n    display: flex;\n    flex-direction: column;\n}\n\n#task-form > .btn-container {\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n/* Footer */\n\nfooter {\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-small);\n    background-color: var(--background-dark);\n    color: var(--font-light);\n}"],"sourceRoot":""}]);
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

    addTask(newTask) {
        this.tasks.push(new Modules_Task__WEBPACK_IMPORTED_MODULE_0__["default"](newTask));
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
        this.priority = 2;
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

function renderAddTaskForm(project, taskContainer, parentContainer) {
    const form = document.createElement("div");
    form.setAttribute("id", "task-form");

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "task-title")
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "task-title");

    const titleContainer = document.createElement("div");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title)

    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        const addTaskButton = renderAddTaskButton(project, taskContainer, parentContainer);
        parentContainer.textContent = "";
        parentContainer.appendChild(addTaskButton);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container");
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    form.appendChild(titleContainer)
    form.appendChild(buttonContainer);

    parentContainer.textContent = "";
    return parentContainer.appendChild(form);
}

function renderAddTaskButton(project, taskContainer, buttonContainer) {
    const addTaskButton = (0,Utilities_utility__WEBPACK_IMPORTED_MODULE_0__.createAddButton)("Add Task");
    addTaskButton.addEventListener("click", () => {
       renderAddTaskForm(project, taskContainer, buttonContainer);
    });

    return addTaskButton;
}

function addTask(project) {
    project.addTask(`${project.getName()} Sample task`);
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

// Create form element with labels
function createFormWithLabel() {
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sUUFBUSxLQUFLLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFN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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJVztBQUNOO0FBQ087QUFDWDs7QUFFN0I7QUFDQTtBQUNBLDZCQUE2Qix3REFBUTtBQUNyQyxRQUFRLHNEQUFhO0FBQ3JCLFFBQVEsbURBQVU7QUFDbEI7QUFDQTs7QUFFQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBdUI7O0FBRXZCLDhDQUE4Qyw2Q0FBRSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGVtcGxhdGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90ZW1wbGF0ZXMvc3R5bGUuY3NzPzZlODMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL01haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL3VpL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy91dGlsaXRpZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXNwYWNlLXNtYWxsOiAxcmVtO1xuICAgIC0tc3BhY2UtbWVkaXVtOiAycmVtO1xuICAgIC0tc3BhY2UtbGFyZ2U6IDNyZW07XG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xuICAgIC0tZm9udC1tZWRpdW06IDI2cHg7XG4gICAgLS1mb250LWxhcmdlOiAzOHB4O1xuICAgIC0taWNvbi1sYXJnZTogNDBweDtcbiAgICAtLWljb24tc21hbGw6IDI0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICMzMzM7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZWVlO1xuICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQ6ICNjY2M7XG4gICAgLS1mb250LWxpZ2h0OiAjZWVlO1xuICAgIC0tZm9udC1kYXJrOiAjMzMzXG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEdvb2dsZSBNYXRlcmlhbCBJY29uICovXG5cbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgJ0ZJTEwnIDEsXG4gICd3Z2h0JyA2MDAsXG4gICdHUkFEJyAwLFxuICAnb3BzeicgMjQ7XG59XG5cbi8qIEJ1dHRvbiAqL1xuYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBIZWFkZXIgKi9cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1saWdodCk7XG59XG5cbmhlYWRlciA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmhlYWRlciAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tbGFyZ2UpO1xufVxuXG4vKiBDb250ZW50ICovXG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG59XG5cbi8qIFNpZGViYXIgKi9cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2lkZWJhciA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBkaXYgPiBidXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ucHJvamVjdCwgLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3QgPiBwLCAudGFzayA+IHAge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3Q6aG92ZXIsIC50YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdCA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0OmhvdmVyID4gZGl2OmhvdmVyID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCwgLnRhc2s6aG92ZXIgPiAucmlnaHQtcGFuZWwgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkOmhvdmVyIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMTtcbn1cblxuLnByb2plY3QgPiBkaXYgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMDtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucHJvamVjdCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucHJvamVjdCA+IHAge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLyogTWFpbiAqL1xuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pIDhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYWluID4gYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi50YXNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbn1cblxuLnRhc2sgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLnRhc2sgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgJ0ZJTEwnIDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuI3Rhc2stZm9ybSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbiN0YXNrLWZvcm0gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Rhc2stZm9ybSA+IC5idG4tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lB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dUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNlLXNtYWxsOiAxcmVtO1xcbiAgICAtLXNwYWNlLW1lZGl1bTogMnJlbTtcXG4gICAgLS1zcGFjZS1sYXJnZTogM3JlbTtcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcbiAgICAtLWZvbnQtbWVkaXVtOiAyNnB4O1xcbiAgICAtLWZvbnQtbGFyZ2U6IDM4cHg7XFxuICAgIC0taWNvbi1sYXJnZTogNDBweDtcXG4gICAgLS1pY29uLXNtYWxsOiAyNHB4O1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzMzMztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZWVlO1xcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0OiAjY2NjO1xcbiAgICAtLWZvbnQtbGlnaHQ6ICNlZWU7XFxuICAgIC0tZm9udC1kYXJrOiAjMzMzXFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdvb2dsZSBNYXRlcmlhbCBJY29uICovXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAxLFxcbiAgJ3dnaHQnIDYwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDI0O1xcbn1cXG5cXG4vKiBCdXR0b24gKi9cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oZWFkZXIgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1sYXJnZSk7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbn1cXG5cXG4ucHJvamVjdCwgLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QgPiBwLCAudGFzayA+IHAge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIsIC50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiBkaXY6aG92ZXIgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLCAudGFzazpob3ZlciA+IC5yaWdodC1wYW5lbCA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQ6aG92ZXIge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDE7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2ID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcXG59XFxuXFxuLnByb2plY3QgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XFxufVxcblxcbi5wcm9qZWN0ID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSkgOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tYWluID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuLnRhc2sgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcXG59XFxuXFxuLnJpZ2h0LXBhbmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiN0YXNrLWZvcm0ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG59XFxuXFxuI3Rhc2stZm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrLWZvcm0gPiAuYnRuLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIk1vZHVsZXMvVGFza1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpc0RlZmF1bHQgPSBmYWxzZSwgaWNvbiA9IFwiY2hlY2tsaXN0XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb25cbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH07XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKG5ld1Rhc2spKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IHRhc2tJZCk7XG4gICAgfTtcblxuICAgIC8vIEdldHRlclxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfTtcblxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9O1xuXG4gICAgZ2V0SXNEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RlZmF1bHRcbiAgICB9O1xuXG4gICAgZ2V0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblxuICAgIH07XG5cbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSk7XG4gICAgfTtcblxuICAgIC8vIFNldHRlclxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG4gICAgXG4gICAgc2V0SXNEZWZhdWx0KGlzRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmlzRGVmYXVsdCA9IGlzRGVmYXVsdDtcbiAgICB9O1xuXG4gICAgc2V0SWNvbihpY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgfTtcblxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pbmNyZW1lbnRJZCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgIHRoaXMuZGF0ZSA9IFwiTm8gZGF0ZVwiO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gMjtcbiAgICB9O1xuXG4gICAgc3RhdGljIGluY3JlbWVudElkKCkge1xuICAgICAgICBpZighdGhpcy5sYXN0SWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdElkID0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0SWQrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdElkO1xuICAgIH1cblxuICAgIC8vIEdldHRlclxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfTtcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9O1xuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH07XG5cbiAgICAvLyBTZXR0ZXJcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfTtcblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgc2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfTtcblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiTW9kdWxlcy9Qcm9qZWN0XCI7XG5cbmNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJJbmJveFwiLCB0cnVlLCBcImluYm94XCIpKTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBpZih0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIH07XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuXG4gICAgLy8gR2V0dGVyXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH07XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfTtcblxuICAgIC8vIFNldHRlclxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0LCBjcmVhdGVJY29uLCBjcmVhdGVBZGRCdXR0b24gfSBmcm9tIFwiVXRpbGl0aWVzL3V0aWxpdHlcIjtcblxuZnVuY3Rpb24gcmVuZGVyTWFpbihwcm9qZWN0KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlVGV4dChwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgcmVuZGVyVGFza3MocHJvamVjdCwgdGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSByZW5kZXJBZGRUYXNrQnV0dG9uKHByb2plY3QsIHRhc2tDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCwgY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IHJlbmRlclRhc2socHJvamVjdCwgZWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKHByb2plY3QsIHRhc2ssIHRhc2tzQ29udGFpbmVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgXG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0UGFuZWwuY2xhc3NMaXN0LmFkZChcImxlZnQtcGFuZWxcIilcbiAgICBsZWZ0UGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbihcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIikpO1xuICAgIGxlZnRQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRhc2suZ2V0VGl0bGUoKSkpO1xuXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRQYW5lbC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtcGFuZWxcIik7XG4gICAgcmlnaHRQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRhc2suZ2V0RGF0ZSgpKSk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlSWNvbihcImRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFBhbmVsKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tGb3JtKHByb2plY3QsIHRhc2tDb250YWluZXIsIHBhcmVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIilcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBwYXJlbnRDb250YWluZXIpO1xuICAgICAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0bi1jb250YWluZXJcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIHBhcmVudENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmV0dXJuIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKFwiQWRkIFRhc2tcIik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgIHJlbmRlckFkZFRhc2tGb3JtKHByb2plY3QsIHRhc2tDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0KSB7XG4gICAgcHJvamVjdC5hZGRUYXNrKGAke3Byb2plY3QuZ2V0TmFtZSgpfSBTYW1wbGUgdGFza2ApO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIGNvbnRhaW5lcikge1xuICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrLmdldElkKCkpO1xuICAgIHJlbmRlclRhc2tzKHByb2plY3QsIGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1haW47IiwiaW1wb3J0IHsgY3JlYXRlVGV4dCwgY3JlYXRlSWNvbiwgY3JlYXRlQWRkQnV0dG9uIH0gZnJvbSBcIlV0aWxpdGllcy91dGlsaXR5XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIk1vZHVsZXMvVG9kb0xpc3RcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCJVSS9NYWluXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Q29udGFpbmVyID0gcmVuZGVyUHJvamVjdENvbnRhaW5lcihcImRlZmF1bHRcIik7XG4gICAgY29uc3QgY3VzdG9tUHJvamVjdENvbnRhaW5lciA9IHJlbmRlclByb2plY3RDb250YWluZXIoXCJjdXN0b21cIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lcnMgPSBbXTtcblxuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goZGVmYXVsdFByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXJzLnB1c2goY3VzdG9tUHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBkaXZpZGVyID0gY3JlYXRlVGV4dChcIlByb2plY3RzXCIpO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSByZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycyk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNbMF0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1sxXSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKG5hbWUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5hbWUsIFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHRpdGxlLCBpY29uKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJY29uKGljb24pKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0aXRsZSkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgcHJvamVjdENvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXJQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpLCBlbGVtZW50LmdldEljb24oKSwgZWxlbWVudC5nZXRJc0RlZmF1bHQoKSk7XG5cbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyTWFpbih0b2RvTGlzdC5nZXRQcm9qZWN0KGVsZW1lbnQuZ2V0TmFtZSgpKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0SXNEZWZhdWx0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzBdLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oXCJkZWxldGVcIikpO1xuXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZW5kZXJNYWluKHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChlbGVtZW50LmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbMV0ucmVwbGFjZVdpdGgocmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKVsxXSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1sxXS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVycztcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyQWRkUHJvamVjdEZvcm0odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RGb3JtKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYodGl0bGUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbid0IGJlIGVtcHR5LlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRvZG9MaXN0LmFkZFByb2plY3QodGl0bGUudmFsdWUpXG4gICAgICAgIGlmKCBuZXdQcm9qZWN0ID09PSAwKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICByZW5kZXJQcm9qZWN0cyh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpO1xuICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0bi1jb250YWluZXJcIilcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclNpZGViYXI7IiwiaW1wb3J0IHJlbmRlclNpZGViYXIgZnJvbSBcIlVJL1NpZGViYXJcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCJVSS9NYWluXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIk1vZHVsZXMvVG9kb0xpc3RcIjtcbmltcG9ydCBcIlRlbXBsYXRlcy9zdHlsZS5jc3NcIjtcblxuY2xhc3MgVUkge1xuICAgIHN0YXRpYyByZW5kZXJIb21lcGFnZSgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICAgICAgcmVuZGVyU2lkZWJhcigpO1xuICAgICAgICByZW5kZXJNYWluKHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCIvLyBNb2R1bGUgZm9yIGhlbHBpbmcgY3JlYXRlIGltYWdlcyBhbmQgcGFyYWdyYXBoc1xuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRleHQgd2l0aCAxIHBhcmFtZXRlcnMuXG4vLyB0ZXh0IGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgaW1hZ2Ugd2l0aCBjcmVkaXRzLiBDb250YWluaW5nIDMgcGFyYW1ldGVycy5cbi8vIEltYWdlIHNvdXJjZSwgY3JlZGl0IGxpbmsgYW5kIGNyZWRpdCB0ZXh0LlxuZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjLCBjcmVkaXRMaW5rLCBjcmVkaXRUZXh0KSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG5cbiAgICBjb25zdCBjcmVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNyZWRpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNyZWRpdFwiKVxuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY3JlZGl0LmhyZWYgPSBjcmVkaXRMaW5rO1xuICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IGNyZWRpdFRleHQ7XG5cbiAgICBjcmVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltZy1jb250YWluZXJcIik7XG5cbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBpbWFnZUNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlIGljb24gZnJvbSBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vaWNvbnNcbmZ1bmN0aW9uIGNyZWF0ZUljb24obmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIGljb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgcmV0dXJuIGljb247XG59XG5cbi8vIENyZWF0ZSBhZGQgYnV0dG9uIGZvciB0YXNrIGFuZCBwcm9qZWN0c1xuZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uKHRleHQpIHtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlSWNvbihcImFkZFwiKTtcbiAgICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlVGV4dCh0ZXh0KTtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0bi1hZGRcIik7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLy8gQ3JlYXRlIGZvcm0gZWxlbWVudCB3aXRoIGxhYmVsc1xuZnVuY3Rpb24gY3JlYXRlRm9ybVdpdGhMYWJlbCgpIHtcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUZXh0LFxuICAgIGNyZWF0ZUltYWdlLFxuICAgIGNyZWF0ZUljb24sXG4gICAgY3JlYXRlQWRkQnV0dG9uLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIlVJL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5yZW5kZXJIb21lcGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9