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

    const addTaskButton = renderAddTaskButton(project, taskContainer, parentContainer);
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Task title can't be empty!");
            return;
        };
        const newTask = project.addTask(title.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sUUFBUSxLQUFLLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFN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ZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RlbXBsYXRlcy9zdHlsZS5jc3M/NmU4MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2NvbXBvbmVudHMvdWkvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tc3BhY2Utc21hbGw6IDFyZW07XG4gICAgLS1zcGFjZS1tZWRpdW06IDJyZW07XG4gICAgLS1zcGFjZS1sYXJnZTogM3JlbTtcbiAgICAtLWZvbnQtc21hbGw6IDE4cHg7XG4gICAgLS1mb250LW1lZGl1bTogMjZweDtcbiAgICAtLWZvbnQtbGFyZ2U6IDM4cHg7XG4gICAgLS1pY29uLWxhcmdlOiA0MHB4O1xuICAgIC0taWNvbi1zbWFsbDogMjRweDtcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzMzMztcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNlZWU7XG4gICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeS1saWdodDogI2NjYztcbiAgICAtLWZvbnQtbGlnaHQ6ICNlZWU7XG4gICAgLS1mb250LWRhcms6ICMzMzNcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogR29vZ2xlIE1hdGVyaWFsIEljb24gKi9cblxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAnRklMTCcgMSxcbiAgJ3dnaHQnIDYwMCxcbiAgJ0dSQUQnIDAsXG4gICdvcHN6JyAyNDtcbn1cblxuLyogQnV0dG9uICovXG5idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIEhlYWRlciAqL1xuXG5oZWFkZXIge1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcbn1cblxuaGVhZGVyID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaGVhZGVyIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1sYXJnZSk7XG59XG5cbi8qIENvbnRlbnQgKi9cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLyogU2lkZWJhciAqL1xuXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5wcm9qZWN0LCAudGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdCA+IHAsIC50YXNrID4gcCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdDpob3ZlciwgLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0ID4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdDpob3ZlciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3Q6aG92ZXIgPiBkaXY6aG92ZXIgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkLCAudGFzazpob3ZlciA+IC5yaWdodC1wYW5lbCA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQ6aG92ZXIge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAxO1xufVxuXG4ucHJvamVjdCA+IGRpdiA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XG59XG5cbi5wcm9qZWN0IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zbWFsbCk7XG59XG5cbi5wcm9qZWN0ID4gcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vKiBNYWluICovXG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1lZGl1bSkgOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1haW4gPiBidXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cblxuLnRhc2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xufVxuXG4udGFzayA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4udGFzayAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMDtcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xufVxuXG4ucmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4jdGFzay1mb3JtIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuI3Rhc2stZm9ybSA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFzay1mb3JtID4gLmJ0bi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1saWdodCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGVtcGxhdGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFr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QUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4Qyx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2Utc21hbGw6IDFyZW07XFxuICAgIC0tc3BhY2UtbWVkaXVtOiAycmVtO1xcbiAgICAtLXNwYWNlLWxhcmdlOiAzcmVtO1xcbiAgICAtLWZvbnQtc21hbGw6IDE4cHg7XFxuICAgIC0tZm9udC1tZWRpdW06IDI2cHg7XFxuICAgIC0tZm9udC1sYXJnZTogMzhweDtcXG4gICAgLS1pY29uLWxhcmdlOiA0MHB4O1xcbiAgICAtLWljb24tc21hbGw6IDI0cHg7XFxuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMzMzO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNlZWU7XFxuICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQ6ICNjY2M7XFxuICAgIC0tZm9udC1saWdodDogI2VlZTtcXG4gICAgLS1mb250LWRhcms6ICMzMzNcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR29vZ2xlIE1hdGVyaWFsIEljb24gKi9cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDEsXFxuICAnd2dodCcgNjAwLFxcbiAgJ0dSQUQnIDAsXFxuICAnb3BzeicgMjQ7XFxufVxcblxcbi8qIEJ1dHRvbiAqL1xcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNwYWNlLXNtYWxsKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtbGlnaHQpO1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmhlYWRlciAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLWxhcmdlKTtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciA+IHAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyID4gLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZWJhciA+IC5wcm9qZWN0LWZvcm0gPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiAucHJvamVjdC1mb3JtID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1zbWFsbCk7XFxufVxcblxcbi5wcm9qZWN0LCAudGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCA+IHAsIC50YXNrID4gcCB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciwgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciA+IGRpdjpob3ZlciA+IC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQsIC50YXNrOmhvdmVyID4gLnJpZ2h0LXBhbmVsID4gLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZDpob3ZlciB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMTtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYgPiAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucHJvamVjdCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNtYWxsKTtcXG59XFxuXFxuLnByb2plY3QgPiBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWVkaXVtKSA4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1haW4gPiBidXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1tZWRpdW0pO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbn1cXG5cXG4udGFzayAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLWljb24tc21hbGwpO1xcbn1cXG5cXG4ucmlnaHQtcGFuZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc3BhY2Utc21hbGwpO1xcbn1cXG5cXG4jdGFzay1mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2stZm9ybSA+IC5idG4tY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1saWdodCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiTW9kdWxlcy9UYXNrXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlzRGVmYXVsdCA9IGZhbHNlLCBpY29uID0gXCJjaGVja2xpc3RcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlzRGVmYXVsdCA9IGlzRGVmYXVsdDtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvblxuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfTtcblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2sobmV3VGFzaykpO1xuICAgIH07XG5cbiAgICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gdGFza0lkKTtcbiAgICB9O1xuXG4gICAgLy8gR2V0dGVyXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH07XG5cbiAgICBnZXRJc0RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGVmYXVsdFxuICAgIH07XG5cbiAgICBnZXRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uXG4gICAgfTtcblxuICAgIGdldFRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfTtcbiAgICBcbiAgICBzZXRJc0RlZmF1bHQoaXNEZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xuICAgIH07XG5cbiAgICBzZXRJY29uKGljb24pIHtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9O1xuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmluY3JlbWVudElkKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb25cIjtcbiAgICAgICAgdGhpcy5kYXRlID0gXCJObyBkYXRlXCI7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSAyO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW5jcmVtZW50SWQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmxhc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0SWQgPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RJZCsrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQ7XG4gICAgfVxuXG4gICAgLy8gR2V0dGVyXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9O1xuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH07XG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfTtcblxuICAgIC8vIFNldHRlclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9O1xuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBzZXREYXRlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9O1xuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCJNb2R1bGVzL1Byb2plY3RcIjtcblxuY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkluYm94XCIsIHRydWUsIFwiaW5ib3hcIikpO1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgfTtcblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG5cbiAgICAvLyBHZXR0ZXJcbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfTtcblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuXG4gICAgLy8gU2V0dGVyXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCJVdGlsaXRpZXMvdXRpbGl0eVwiO1xuXG5mdW5jdGlvbiByZW5kZXJNYWluKHByb2plY3QpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVUZXh0KHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IHJlbmRlckFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gcmVuZGVyVGFzayhwcm9qZWN0LCBlbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2socHJvamVjdCwgdGFzaywgdGFza3NDb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBcbiAgICBjb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKFwibGVmdC1wYW5lbFwiKVxuICAgIGxlZnRQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVJY29uKFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFwiKSk7XG4gICAgbGVmdFBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQodGFzay5nZXRUaXRsZSgpKSk7XG5cbiAgICBjb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbFwiKTtcbiAgICByaWdodFBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQodGFzay5nZXREYXRlKCkpKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVJY29uKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCB0YXNrc0NvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmlnaHRQYW5lbC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRQYW5lbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0UGFuZWwpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0Zvcm0ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgcGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKVxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGl0bGVcIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gcmVuZGVyQWRkVGFza0J1dHRvbihwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBwYXJlbnRDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZih0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJUYXNrIHRpdGxlIGNhbid0IGJlIGVtcHR5IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHByb2plY3QuYWRkVGFzayh0aXRsZS52YWx1ZSk7XG4gICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QsIHRhc2tDb250YWluZXIpO1xuICAgICAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJldHVybiBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tCdXR0b24ocHJvamVjdCwgdGFza0NvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbihcIkFkZCBUYXNrXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICByZW5kZXJBZGRUYXNrRm9ybShwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tCdXR0b247XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdCkge1xuICAgIHByb2plY3QuYWRkVGFzayhgJHtwcm9qZWN0LmdldE5hbWUoKX0gU2FtcGxlIHRhc2tgKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCBjb250YWluZXIpIHtcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzay5nZXRJZCgpKTtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYWluOyIsImltcG9ydCB7IGNyZWF0ZVRleHQsIGNyZWF0ZUljb24sIGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCJVdGlsaXRpZXMvdXRpbGl0eVwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCJNb2R1bGVzL1RvZG9MaXN0XCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiVUkvTWFpblwiO1xuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdENvbnRhaW5lciA9IHJlbmRlclByb2plY3RDb250YWluZXIoXCJkZWZhdWx0XCIpO1xuICAgIGNvbnN0IGN1c3RvbVByb2plY3RDb250YWluZXIgPSByZW5kZXJQcm9qZWN0Q29udGFpbmVyKFwiY3VzdG9tXCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJzID0gW107XG5cbiAgICBwcm9qZWN0Q29udGFpbmVycy5wdXNoKGRlZmF1bHRQcm9qZWN0Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVycy5wdXNoKGN1c3RvbVByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSByZW5kZXJQcm9qZWN0cyh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpO1xuXG4gICAgY29uc3QgZGl2aWRlciA9IGNyZWF0ZVRleHQoXCJQcm9qZWN0c1wiKTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gcmVuZGVyQWRkUHJvamVjdEJ1dHRvbih0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzWzBdKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNbMV0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdENvbnRhaW5lcihuYW1lKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChuYW1lLCBcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCh0aXRsZSwgaWNvbikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbihpY29uKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQodGl0bGUpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykge1xuICAgIHByb2plY3RDb250YWluZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcmVuZGVyUHJvamVjdChlbGVtZW50LmdldE5hbWUoKSwgZWxlbWVudC5nZXRJY29uKCksIGVsZW1lbnQuZ2V0SXNEZWZhdWx0KCkpO1xuXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlck1haW4odG9kb0xpc3QuZ2V0UHJvamVjdChlbGVtZW50LmdldE5hbWUoKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihlbGVtZW50LmdldElzRGVmYXVsdCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyc1swXS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJY29uKFwiZGVsZXRlXCIpKTtcblxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyTWFpbih0b2RvTGlzdC5nZXRQcm9qZWN0KFwiSW5ib3hcIikpO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QoZWxlbWVudC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXJzWzFdLnJlcGxhY2VXaXRoKHJlbmRlclByb2plY3RzKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycylbMV0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnNbMV0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcnM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVBZGRCdXR0b24oXCJBZGQgUHJvamVjdFwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlckFkZFByb2plY3RGb3JtKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRQcm9qZWN0Rm9ybSh0b2RvTGlzdCwgcHJvamVjdENvbnRhaW5lcnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmKHRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBjYW4ndCBiZSBlbXB0eS5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0b2RvTGlzdC5hZGRQcm9qZWN0KHRpdGxlLnZhbHVlKVxuICAgICAgICBpZiggbmV3UHJvamVjdCA9PT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHModG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKTtcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlbmRlckFkZFByb2plY3RCdXR0b24odG9kb0xpc3QsIHByb2plY3RDb250YWluZXJzKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlV2l0aChyZW5kZXJBZGRQcm9qZWN0QnV0dG9uKHRvZG9MaXN0LCBwcm9qZWN0Q29udGFpbmVycykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tY29udGFpbmVyXCIpXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaWRlYmFyOyIsImltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gXCJVSS9TaWRlYmFyXCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiVUkvTWFpblwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCJNb2R1bGVzL1RvZG9MaXN0XCI7XG5pbXBvcnQgXCJUZW1wbGF0ZXMvc3R5bGUuY3NzXCI7XG5cbmNsYXNzIFVJIHtcbiAgICBzdGF0aWMgcmVuZGVySG9tZXBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG4gICAgICAgIHJlbmRlclNpZGViYXIoKTtcbiAgICAgICAgcmVuZGVyTWFpbih0b2RvTGlzdC5nZXRQcm9qZWN0KFwiSW5ib3hcIikpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiLy8gTW9kdWxlIGZvciBoZWxwaW5nIGNyZWF0ZSBpbWFnZXMgYW5kIHBhcmFncmFwaHNcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0ZXh0IHdpdGggMSBwYXJhbWV0ZXJzLlxuLy8gdGV4dCBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGltYWdlIHdpdGggY3JlZGl0cy4gQ29udGFpbmluZyAzIHBhcmFtZXRlcnMuXG4vLyBJbWFnZSBzb3VyY2UsIGNyZWRpdCBsaW5rIGFuZCBjcmVkaXQgdGV4dC5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYywgY3JlZGl0TGluaywgY3JlZGl0VGV4dCkge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuXG4gICAgY29uc3QgY3JlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjcmVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjcmVkaXRcIilcblxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNyZWRpdC5ocmVmID0gY3JlZGl0TGluaztcbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBjcmVkaXRUZXh0O1xuXG4gICAgY3JlZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWctY29udGFpbmVyXCIpO1xuXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWRpdENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaW1hZ2VDb250YWluZXI7XG59XG5cbi8vIENyZWF0ZSBpY29uIGZyb20gaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL2ljb25zXG5mdW5jdGlvbiBjcmVhdGVJY29uKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKTtcbiAgICBpY29uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIHJldHVybiBpY29uO1xufVxuXG4vLyBDcmVhdGUgYWRkIGJ1dHRvbiBmb3IgdGFzayBhbmQgcHJvamVjdHNcbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbih0ZXh0KSB7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUljb24oXCJhZGRcIik7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZVRleHQodGV4dCk7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4tYWRkXCIpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbi8vIENyZWF0ZSBmb3JtIGVsZW1lbnQgd2l0aCBsYWJlbHNcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1XaXRoTGFiZWwoKSB7XG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVGV4dCxcbiAgICBjcmVhdGVJbWFnZSxcbiAgICBjcmVhdGVJY29uLFxuICAgIGNyZWF0ZUFkZEJ1dHRvbixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gXCJVSS9VSVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkucmVuZGVySG9tZXBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==