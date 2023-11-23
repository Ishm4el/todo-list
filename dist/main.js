/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(45deg, black, white);
    display: grid;
    grid-template: 1fr 8fr / 2fr 15fr;
}

div {
    color: white;
    text-shadow: 0 0 0.8rem black, 0 0 0.8rem black, 0 0 0.8rem black;
}

#heading {
    grid-column: 1 / 3;
    text-align: center;
    font-size: 3rem;
}

#sidebar {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
}

#sidebar > button {
    font-size: 2rem;
    cursor: pointer;
}

.project-view {
    background-color: rgba(0, 0, 255, 0.424);
    cursor: pointer;
}

.project-view:hover {
    background-color: rgba(240, 248, 255, 0.597);
}

.project-idle {
    background-color: rgba(0, 0, 255, 0.148);
}

.project-tab-selected {
    background-color: cadetblue;
}

#dashboard {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
}

#addTodo {
    background-color: aquamarine;
    order: 1;
    flex: 1 1 auto;
    min-height: max(5vh, 5vw);
    min-width: max(5vh, 5vw);
}

#addTodo:hover {
    background-color: aqua;
}

.todo-title, .todo-due-date, .todo-priority {
    text-align: center;
    
}

.todo-icons {
    display: flex;
    justify-content: space-around;
    font-size: max(2vh, 2vw);
}

.todo-icons-completed, .todo-icons-configure, .todo-icons-delete {
    cursor: pointer;
}

.todo-icons-completed {
    background-color: rgba(0, 128, 0, 0.434);
}

.todo-icons-completed:hover {
    background-color: rgb(0, 164, 0);
}

.todo-icons-configure {
    background-color: rgba(45, 45, 45, 0.488);
}

.todo-icons-configure:hover {
    background-color: rgb(0, 0, 0);
}

.todo-icons-delete {
    background-color: rgba(255, 0, 0, 0.496);
}

.todo-icons-delete:hover {
    background-color: rgba(255, 0, 0, 0.923);
}

.todo-card-completed {
    background-color: rgba(172, 255, 47, 0.226);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sDAAsD;IACtD,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,iEAAiE;AACrE;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,QAAQ;IACR,cAAc;IACd,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,2CAA2C;AAC/C","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-image: linear-gradient(45deg, black, white);\n    display: grid;\n    grid-template: 1fr 8fr / 2fr 15fr;\n}\n\ndiv {\n    color: white;\n    text-shadow: 0 0 0.8rem black, 0 0 0.8rem black, 0 0 0.8rem black;\n}\n\n#heading {\n    grid-column: 1 / 3;\n    text-align: center;\n    font-size: 3rem;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    font-size: 2rem;\n}\n\n#sidebar > button {\n    font-size: 2rem;\n    cursor: pointer;\n}\n\n.project-view {\n    background-color: rgba(0, 0, 255, 0.424);\n    cursor: pointer;\n}\n\n.project-view:hover {\n    background-color: rgba(240, 248, 255, 0.597);\n}\n\n.project-idle {\n    background-color: rgba(0, 0, 255, 0.148);\n}\n\n.project-tab-selected {\n    background-color: cadetblue;\n}\n\n#dashboard {\n    display: flex;\n    flex-wrap: wrap;\n    height: fit-content;\n}\n\n#addTodo {\n    background-color: aquamarine;\n    order: 1;\n    flex: 1 1 auto;\n    min-height: max(5vh, 5vw);\n    min-width: max(5vh, 5vw);\n}\n\n#addTodo:hover {\n    background-color: aqua;\n}\n\n.todo-title, .todo-due-date, .todo-priority {\n    text-align: center;\n    \n}\n\n.todo-icons {\n    display: flex;\n    justify-content: space-around;\n    font-size: max(2vh, 2vw);\n}\n\n.todo-icons-completed, .todo-icons-configure, .todo-icons-delete {\n    cursor: pointer;\n}\n\n.todo-icons-completed {\n    background-color: rgba(0, 128, 0, 0.434);\n}\n\n.todo-icons-completed:hover {\n    background-color: rgb(0, 164, 0);\n}\n\n.todo-icons-configure {\n    background-color: rgba(45, 45, 45, 0.488);\n}\n\n.todo-icons-configure:hover {\n    background-color: rgb(0, 0, 0);\n}\n\n.todo-icons-delete {\n    background-color: rgba(255, 0, 0, 0.496);\n}\n\n.todo-icons-delete:hover {\n    background-color: rgba(255, 0, 0, 0.923);\n}\n\n.todo-card-completed {\n    background-color: rgba(172, 255, 47, 0.226);\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const app = (function() {
    const projects = [];
    const getProjects = () => projects;
    let viewingProject = 0;
    const getViewingProject = () => viewingProject;
    function Project(name) {
        class TodoItem {
            constructor(title, description, dueDate, priority) {
                this.title = title;
                this.description = description;
                this.dueDate = dueDate;
                this.priority = priority;
                this.completed = false;
            }

            get completed() {
                return this._completed;
            }
            
            set completed(bool) {
                this._completed = bool;
            }
        
            print() {
                return `
                <div class='todo-title'>${this.title}</div> 
                <div class='todo-description'>${this.description}</div>
                <div class='todo-due-date'>Due: ${this.dueDate}</div>
                <div class='todo-priority'>Priority: ${this.priority}</div>
                <div class='todo-icons'>
                    <div class="todo-icons-completed">V</div>
                    <div class="todo-icons-configure">C</div>
                    <div class="todo-icons-delete">D</div>
                </div>
                `;
            }
        }
        const todos = [];
        const getName = () => { return name; };
        const setName = (newName) => { name = newName; };
        const addTodo = (title, description, dueDate, priority) => { todos.push(new TodoItem(title, description, dueDate, priority)) };
        const removeTodo = (todo) => {
            const index = todos.indexOf(todo);
            if (index > -1)
                todos.splice(index, 1);
        };

        const updateTodo = (todo, newTodo) => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos[index].title = newTodo.title;
                todos[index].description = newTodo.description;
                todos[index].dueDate = newTodo.dueDate;
                todos[index].priority = newTodo.priority;
                todos[index].completed = newTodo.completed;
            }
        };

        return { getName, setName, todos, addTodo, removeTodo, updateTodo };
    }

    function getLastProject(projects) {
        const lastIndex = --getProjects().length;
        return {project: projects[lastIndex], lastIndex};
    }

    function generateSidebar(project, id) {
        const projectTab = document.createElement('div');
        projectTab.classList.toggle('project-view');
        projectTab.setAttribute('data-project-id', id);
        projectTab.innerHTML = `${project.getName()}`;
        projectTab.addEventListener('click', () => {
            dom.resetDashboard();
            if(dom.getBody().contains(dom.getBody().querySelector('.project-tab-selected'))) {
                console.log('in');
                dom.body.querySelector('.project-tab-selected').classList.remove('project-tab-selected');
            } 
            projectTab.classList.add('project-tab-selected');
            viewingProject = id;
            project.todos.forEach((todo) => {
                dom.getDashboard().appendChild(GenerateTodoCard(todo));
            });
        });
        return projectTab;
    }

    function appendProjectSidebar() {
        const lastIndex = getProjects().length - 1;
        return generateSidebar(getProjects()[lastIndex], lastIndex);
    }

    function GenerateTodoCard(todo) {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');
        todoCard.innerHTML = todo.print();
        if (todo.completed)
            todoCard.classList.add('todo-card-completed');
        todoCard.getElementsByClassName('todo-icons-completed')[0].addEventListener('click', (completed) => {
            todoCard.classList.toggle('todo-card-completed');
            todo.completed = !todo.completed;
        });
        todoCard.getElementsByClassName('todo-icons-configure')[0].addEventListener('click', () => {
            const modalConfigure = document.getElementById('modal-configure');
            const formConfigure = modalConfigure.querySelector('#form-configure');
            formConfigure.querySelector('#configure-title-input').setAttribute('value', todo.title);
            formConfigure.querySelector('#configure-description-input').setAttribute('value', todo.description);

            formConfigure.querySelector('#configure-date-input').setAttribute('value', todo.dueDate);
            
            const configurePriority = formConfigure.querySelector('#configure-priority').children;
            for (let i = 1; i < configurePriority.length; i = i + 2) {
                configurePriority[i].removeAttribute('checked');
                if (JSON.stringify(todo.priority) === JSON.stringify(configurePriority[i].value)) {
                    configurePriority[i].setAttribute('checked', 'checked');
                }
            }
            modalConfigure.showModal();

            function submitConfigure(button) {
                button.preventDefault();
                if (formConfigure.checkValidity()) {
                    getProjects()[getViewingProject()].updateTodo(todo, {
                        title: formConfigure.elements["configureTitle"].value,
                        description: formConfigure.elements["configureDescription"].value,
                        dueDate: formConfigure.elements["configureDate"].value,
                        priority: formConfigure.elements["configurePriority"].value,
                        completed: todo.completed
                    })
                    modalConfigure.close();
                    formConfigure.reset();
                    console.log(todo);
                    todoCard.children[0].textContent = todo.title;
                    todoCard.children[1].textContent = todo.description;
                    todoCard.children[2].textContent = "Due: " + todo.dueDate;
                    todoCard.children[3].textContent = "Priority: " + todo.priority;
                }
                formConfigure.querySelector('#submit-configure').removeEventListener('click', submitConfigure);
            }

            formConfigure.querySelector('#submit-configure').addEventListener('click', submitConfigure);
        })
        todoCard.getElementsByClassName('todo-icons-delete')[0].addEventListener('click', () => {
            getProjects()[getViewingProject()].removeTodo(todo);
            dom.getDashboard().removeChild(todoCard);
        });
        return todoCard;
    }

    function showAllTodos() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
            project.todos.forEach((todo) => {
                dom.getDashboard().appendChild(GenerateTodoCard(todo));
            });
        });
    }

    function initiateDisplay() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
        });
        dom.sidebar.children[1].classList.add('project-tab-selected');

        projects[0].todos.forEach((todo) => {
            dom.getDashboard().appendChild(GenerateTodoCard(todo));
        });
    }

    function addProject(title) {
        getProjects().push(Project(title));
    }

    

    addProject('default');
    addProject('second!');
    projects[0].addTodo("First Task", "Our first thing to do!", "1999-01-01", "High");
    projects[1].addTodo("Second Task", "Our second thing to do!", "1999-01-02", "Low");
    return { initiateDisplay, addProject, generateSidebar, getLastProject, getProjects, appendProjectSidebar, GenerateTodoCard, getViewingProject };
})();

const dom = (function () {
    const body = document.getElementsByTagName('body')[0]; 
    const sidebar = document.getElementById('sidebar');
    let dashboard = document.getElementById('dashboard');
    const modalAddProject = document.getElementById('modal-add-project');
    const modalAddTodo = document.getElementById('modal-add-todo');
    const buttonAddProject = document.getElementById('button-add-project');
    const buttonSubmitProject = document.getElementById('submit-project');
    const buttonSubmitTodo = document.getElementById('submit-todo');
    const formAddProject = document.querySelector('#form-add-project');
    const formAddTodo = document.getElementById('form-add-todo');

    const getDashboard = () => dashboard;

    function createButtonAddTodo() {
        const buttonAddTodo = document.createElement('div');
        buttonAddTodo.setAttribute('id', 'addTodo');
        buttonAddTodo.addEventListener('click', () => {
            modalAddTodo.showModal();
        });
        getDashboard().appendChild(buttonAddTodo);
    }
    createButtonAddTodo();

    function resetDashboard() {
        body.removeChild(dashboard);
        dashboard = document.createElement('div');
        dashboard.setAttribute('id', 'dashboard');
        body.appendChild(dashboard);
        createButtonAddTodo();
    }

    buttonSubmitTodo.addEventListener('click', (button) => {
        button.preventDefault();
        if (formAddTodo.checkValidity()) {
            console.log(formAddTodo.querySelector('input[name="todoPriority"]:checked').value);
            app.getProjects()[app.getViewingProject()].addTodo(formAddTodo.elements["todoTitle"].value, formAddTodo.elements["todoDescription"].value, formAddTodo.elements["todoDate"].value, formAddTodo.elements["todoPriority"].value);
            dom.getDashboard().appendChild(app.GenerateTodoCard(app.getProjects()[app.getViewingProject()].todos[app.getProjects()[app.getViewingProject()].todos.length - 1]));
            modalAddTodo.close();
            formAddTodo.reset();
        }
    });

    buttonAddProject.addEventListener('click', () => {
        dom.modalAddProject.showModal();
    });
    
    buttonSubmitProject.addEventListener('click', (button) => {
        button.preventDefault();
        if (formAddProject.checkValidity()) {
            app.addProject(formAddProject.elements["projectTitle"].value);
            sidebar.appendChild(app.appendProjectSidebar());
            modalAddProject.close();
            formAddProject.reset();
        }
    });

    const getBody = () => body;

    return { body, sidebar, modalAddProject, buttonAddProject, resetDashboard, getDashboard, getBody, formAddTodo };
})();

app.initiateDisplay();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCB3aGl0ZSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgOGZyIC8gMmZyIDE1ZnI7XG59XG5cbmRpdiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMC44cmVtIGJsYWNrLCAwIDAgMC44cmVtIGJsYWNrLCAwIDAgMC44cmVtIGJsYWNrO1xufVxuXG4jaGVhZGluZyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbiNzaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4jc2lkZWJhciA+IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtdmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNDI0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LXZpZXc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41OTcpO1xufVxuXG4ucHJvamVjdC1pZGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xNDgpO1xufVxuXG4ucHJvamVjdC10YWItc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cblxuI2Rhc2hib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI2FkZFRvZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAgb3JkZXI6IDE7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLWhlaWdodDogbWF4KDV2aCwgNXZ3KTtcbiAgICBtaW4td2lkdGg6IG1heCg1dmgsIDV2dyk7XG59XG5cbiNhZGRUb2RvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4udG9kby10aXRsZSwgLnRvZG8tZHVlLWRhdGUsIC50b2RvLXByaW9yaXR5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi50b2RvLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZvbnQtc2l6ZTogbWF4KDJ2aCwgMnZ3KTtcbn1cblxuLnRvZG8taWNvbnMtY29tcGxldGVkLCAudG9kby1pY29ucy1jb25maWd1cmUsIC50b2RvLWljb25zLWRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1pY29ucy1jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjQzNCk7XG59XG5cbi50b2RvLWljb25zLWNvbXBsZXRlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2NCwgMCk7XG59XG5cbi50b2RvLWljb25zLWNvbmZpZ3VyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjQ4OCk7XG59XG5cbi50b2RvLWljb25zLWNvbmZpZ3VyZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4udG9kby1pY29ucy1kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQ5Nik7XG59XG5cbi50b2RvLWljb25zLWRlbGV0ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOTIzKTtcbn1cblxuLnRvZG8tY2FyZC1jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcyLCAyNTUsIDQ3LCAwLjIyNik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0RBQXNEO0lBQ3RELGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibGFjaywgd2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgOGZyIC8gMmZyIDE1ZnI7XFxufVxcblxcbmRpdiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwLjhyZW0gYmxhY2ssIDAgMCAwLjhyZW0gYmxhY2ssIDAgMCAwLjhyZW0gYmxhY2s7XFxufVxcblxcbiNoZWFkaW5nIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNzaWRlYmFyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40MjQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXZpZXc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNTk3KTtcXG59XFxuXFxuLnByb2plY3QtaWRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjE0OCk7XFxufVxcblxcbi5wcm9qZWN0LXRhYi1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuI2Rhc2hib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI2FkZFRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBvcmRlcjogMTtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IG1heCg1dmgsIDV2dyk7XFxuICAgIG1pbi13aWR0aDogbWF4KDV2aCwgNXZ3KTtcXG59XFxuXFxuI2FkZFRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kby10aXRsZSwgLnRvZG8tZHVlLWRhdGUsIC50b2RvLXByaW9yaXR5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZm9udC1zaXplOiBtYXgoMnZoLCAydncpO1xcbn1cXG5cXG4udG9kby1pY29ucy1jb21wbGV0ZWQsIC50b2RvLWljb25zLWNvbmZpZ3VyZSwgLnRvZG8taWNvbnMtZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1pY29ucy1jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC40MzQpO1xcbn1cXG5cXG4udG9kby1pY29ucy1jb21wbGV0ZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTY0LCAwKTtcXG59XFxuXFxuLnRvZG8taWNvbnMtY29uZmlndXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjQ4OCk7XFxufVxcblxcbi50b2RvLWljb25zLWNvbmZpZ3VyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnRvZG8taWNvbnMtZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDk2KTtcXG59XFxuXFxuLnRvZG8taWNvbnMtZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOTIzKTtcXG59XFxuXFxuLnRvZG8tY2FyZC1jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMjU1LCA0NywgMC4yMjYpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5jb25zdCBhcHAgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuICAgIGxldCB2aWV3aW5nUHJvamVjdCA9IDA7XG4gICAgY29uc3QgZ2V0Vmlld2luZ1Byb2plY3QgPSAoKSA9PiB2aWV3aW5nUHJvamVjdDtcbiAgICBmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY2xhc3MgVG9kb0l0ZW0ge1xuICAgICAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXQgY29tcGxldGVkKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHByaW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndG9kby10aXRsZSc+JHt0aGlzLnRpdGxlfTwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0b2RvLWRlc2NyaXB0aW9uJz4ke3RoaXMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndG9kby1kdWUtZGF0ZSc+RHVlOiAke3RoaXMuZHVlRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0b2RvLXByaW9yaXR5Jz5Qcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RvZG8taWNvbnMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1pY29ucy1jb21wbGV0ZWRcIj5WPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWljb25zLWNvbmZpZ3VyZVwiPkM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8taWNvbnMtZGVsZXRlXCI+RDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9kb3MgPSBbXTtcbiAgICAgICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHsgcmV0dXJuIG5hbWU7IH07XG4gICAgICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4geyBuYW1lID0gbmV3TmFtZTsgfTtcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7IHRvZG9zLnB1c2gobmV3IFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKSB9O1xuICAgICAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKVxuICAgICAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXBkYXRlVG9kbyA9ICh0b2RvLCBuZXdUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRvZG9zW2luZGV4XS50aXRsZSA9IG5ld1RvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgdG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB0b2Rvc1tpbmRleF0uZHVlRGF0ZSA9IG5ld1RvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICB0b2Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdUb2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIHRvZG9zW2luZGV4XS5jb21wbGV0ZWQgPSBuZXdUb2RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lLCB0b2RvcywgYWRkVG9kbywgcmVtb3ZlVG9kbywgdXBkYXRlVG9kbyB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExhc3RQcm9qZWN0KHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IC0tZ2V0UHJvamVjdHMoKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB7cHJvamVjdDogcHJvamVjdHNbbGFzdEluZGV4XSwgbGFzdEluZGV4fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIocHJvamVjdCwgaWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC50b2dnbGUoJ3Byb2plY3QtdmlldycpO1xuICAgICAgICBwcm9qZWN0VGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgaWQpO1xuICAgICAgICBwcm9qZWN0VGFiLmlubmVySFRNTCA9IGAke3Byb2plY3QuZ2V0TmFtZSgpfWA7XG4gICAgICAgIHByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb20ucmVzZXREYXNoYm9hcmQoKTtcbiAgICAgICAgICAgIGlmKGRvbS5nZXRCb2R5KCkuY29udGFpbnMoZG9tLmdldEJvZHkoKS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItc2VsZWN0ZWQnKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4nKTtcbiAgICAgICAgICAgICAgICBkb20uYm9keS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWItc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LXRhYi1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWItc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHZpZXdpbmdQcm9qZWN0ID0gaWQ7XG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBkb20uZ2V0RGFzaGJvYXJkKCkuYXBwZW5kQ2hpbGQoR2VuZXJhdGVUb2RvQ2FyZCh0b2RvKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0VGFiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RTaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBnZXRQcm9qZWN0cygpLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNpZGViYXIoZ2V0UHJvamVjdHMoKVtsYXN0SW5kZXhdLCBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEdlbmVyYXRlVG9kb0NhcmQodG9kbykge1xuICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnKTtcbiAgICAgICAgdG9kb0NhcmQuaW5uZXJIVE1MID0gdG9kby5wcmludCgpO1xuICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpXG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQtY29tcGxldGVkJyk7XG4gICAgICAgIHRvZG9DYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG8taWNvbnMtY29tcGxldGVkJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoY29tcGxldGVkKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWNhcmQtY29tcGxldGVkJyk7XG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9DYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG8taWNvbnMtY29uZmlndXJlJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbENvbmZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jb25maWd1cmUnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db25maWd1cmUgPSBtb2RhbENvbmZpZ3VyZS5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb25maWd1cmUnKTtcbiAgICAgICAgICAgIGZvcm1Db25maWd1cmUucXVlcnlTZWxlY3RvcignI2NvbmZpZ3VyZS10aXRsZS1pbnB1dCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgIGZvcm1Db25maWd1cmUucXVlcnlTZWxlY3RvcignI2NvbmZpZ3VyZS1kZXNjcmlwdGlvbi1pbnB1dCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RvLmRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgZm9ybUNvbmZpZ3VyZS5xdWVyeVNlbGVjdG9yKCcjY29uZmlndXJlLWRhdGUtaW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kby5kdWVEYXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29uZmlndXJlUHJpb3JpdHkgPSBmb3JtQ29uZmlndXJlLnF1ZXJ5U2VsZWN0b3IoJyNjb25maWd1cmUtcHJpb3JpdHknKS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY29uZmlndXJlUHJpb3JpdHkubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmVQcmlvcml0eVtpXS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodG9kby5wcmlvcml0eSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyZVByaW9yaXR5W2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmVQcmlvcml0eVtpXS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFsQ29uZmlndXJlLnNob3dNb2RhbCgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdWJtaXRDb25maWd1cmUoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1Db25maWd1cmUuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFByb2plY3RzKClbZ2V0Vmlld2luZ1Byb2plY3QoKV0udXBkYXRlVG9kbyh0b2RvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZm9ybUNvbmZpZ3VyZS5lbGVtZW50c1tcImNvbmZpZ3VyZVRpdGxlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1Db25maWd1cmUuZWxlbWVudHNbXCJjb25maWd1cmVEZXNjcmlwdGlvblwiXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6IGZvcm1Db25maWd1cmUuZWxlbWVudHNbXCJjb25maWd1cmVEYXRlXCJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1Db25maWd1cmUuZWxlbWVudHNbXCJjb25maWd1cmVQcmlvcml0eVwiXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxDb25maWd1cmUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbmZpZ3VyZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NhcmQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ2FyZC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DYXJkLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJEdWU6IFwiICsgdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ2FyZC5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybUNvbmZpZ3VyZS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNvbmZpZ3VyZScpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Q29uZmlndXJlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybUNvbmZpZ3VyZS5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWNvbmZpZ3VyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Q29uZmlndXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgdG9kb0NhcmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kby1pY29ucy1kZWxldGUnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGdldFByb2plY3RzKClbZ2V0Vmlld2luZ1Byb2plY3QoKV0ucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIGRvbS5nZXREYXNoYm9hcmQoKS5yZW1vdmVDaGlsZCh0b2RvQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG9kb0NhcmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0FsbFRvZG9zKCkge1xuICAgICAgICBnZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGlkKSA9PiB7XG4gICAgICAgICAgICBkb20uc2lkZWJhci5hcHBlbmRDaGlsZChnZW5lcmF0ZVNpZGViYXIocHJvamVjdCwgaWQpKTtcbiAgICAgICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGRvbS5nZXREYXNoYm9hcmQoKS5hcHBlbmRDaGlsZChHZW5lcmF0ZVRvZG9DYXJkKHRvZG8pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaWQpID0+IHtcbiAgICAgICAgICAgIGRvbS5zaWRlYmFyLmFwcGVuZENoaWxkKGdlbmVyYXRlU2lkZWJhcihwcm9qZWN0LCBpZCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9tLnNpZGViYXIuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWItc2VsZWN0ZWQnKTtcblxuICAgICAgICBwcm9qZWN0c1swXS50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBkb20uZ2V0RGFzaGJvYXJkKCkuYXBwZW5kQ2hpbGQoR2VuZXJhdGVUb2RvQ2FyZCh0b2RvKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcbiAgICAgICAgZ2V0UHJvamVjdHMoKS5wdXNoKFByb2plY3QodGl0bGUpKTtcbiAgICB9XG5cbiAgICBcblxuICAgIGFkZFByb2plY3QoJ2RlZmF1bHQnKTtcbiAgICBhZGRQcm9qZWN0KCdzZWNvbmQhJyk7XG4gICAgcHJvamVjdHNbMF0uYWRkVG9kbyhcIkZpcnN0IFRhc2tcIiwgXCJPdXIgZmlyc3QgdGhpbmcgdG8gZG8hXCIsIFwiMTk5OS0wMS0wMVwiLCBcIkhpZ2hcIik7XG4gICAgcHJvamVjdHNbMV0uYWRkVG9kbyhcIlNlY29uZCBUYXNrXCIsIFwiT3VyIHNlY29uZCB0aGluZyB0byBkbyFcIiwgXCIxOTk5LTAxLTAyXCIsIFwiTG93XCIpO1xuICAgIHJldHVybiB7IGluaXRpYXRlRGlzcGxheSwgYWRkUHJvamVjdCwgZ2VuZXJhdGVTaWRlYmFyLCBnZXRMYXN0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGFwcGVuZFByb2plY3RTaWRlYmFyLCBHZW5lcmF0ZVRvZG9DYXJkLCBnZXRWaWV3aW5nUHJvamVjdCB9O1xufSkoKTtcblxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTsgXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgbGV0IGRhc2hib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXNoYm9hcmQnKTtcbiAgICBjb25zdCBtb2RhbEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYWRkLXByb2plY3QnKTtcbiAgICBjb25zdCBtb2RhbEFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYWRkLXRvZG8nKTtcbiAgICBjb25zdCBidXR0b25BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGJ1dHRvblN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcbiAgICBjb25zdCBidXR0b25TdWJtaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10b2RvJyk7XG4gICAgY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGZvcm1BZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tYWRkLXRvZG8nKTtcblxuICAgIGNvbnN0IGdldERhc2hib2FyZCA9ICgpID0+IGRhc2hib2FyZDtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkFkZFRvZG8oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQWRkVG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvZG8nKTtcbiAgICAgICAgYnV0dG9uQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsQWRkVG9kby5zaG93TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdldERhc2hib2FyZCgpLmFwcGVuZENoaWxkKGJ1dHRvbkFkZFRvZG8pO1xuICAgIH1cbiAgICBjcmVhdGVCdXR0b25BZGRUb2RvKCk7XG5cbiAgICBmdW5jdGlvbiByZXNldERhc2hib2FyZCgpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChkYXNoYm9hcmQpO1xuICAgICAgICBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGFzaGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGFzaGJvYXJkJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uQWRkVG9kbygpO1xuICAgIH1cblxuICAgIGJ1dHRvblN1Ym1pdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZm9ybUFkZFRvZG8uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtQWRkVG9kby5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidG9kb1ByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZSk7XG4gICAgICAgICAgICBhcHAuZ2V0UHJvamVjdHMoKVthcHAuZ2V0Vmlld2luZ1Byb2plY3QoKV0uYWRkVG9kbyhmb3JtQWRkVG9kby5lbGVtZW50c1tcInRvZG9UaXRsZVwiXS52YWx1ZSwgZm9ybUFkZFRvZG8uZWxlbWVudHNbXCJ0b2RvRGVzY3JpcHRpb25cIl0udmFsdWUsIGZvcm1BZGRUb2RvLmVsZW1lbnRzW1widG9kb0RhdGVcIl0udmFsdWUsIGZvcm1BZGRUb2RvLmVsZW1lbnRzW1widG9kb1ByaW9yaXR5XCJdLnZhbHVlKTtcbiAgICAgICAgICAgIGRvbS5nZXREYXNoYm9hcmQoKS5hcHBlbmRDaGlsZChhcHAuR2VuZXJhdGVUb2RvQ2FyZChhcHAuZ2V0UHJvamVjdHMoKVthcHAuZ2V0Vmlld2luZ1Byb2plY3QoKV0udG9kb3NbYXBwLmdldFByb2plY3RzKClbYXBwLmdldFZpZXdpbmdQcm9qZWN0KCldLnRvZG9zLmxlbmd0aCAtIDFdKSk7XG4gICAgICAgICAgICBtb2RhbEFkZFRvZG8uY2xvc2UoKTtcbiAgICAgICAgICAgIGZvcm1BZGRUb2RvLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvbS5tb2RhbEFkZFByb2plY3Quc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgXG4gICAgYnV0dG9uU3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChmb3JtQWRkUHJvamVjdC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGFwcC5hZGRQcm9qZWN0KGZvcm1BZGRQcm9qZWN0LmVsZW1lbnRzW1wicHJvamVjdFRpdGxlXCJdLnZhbHVlKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYXBwLmFwcGVuZFByb2plY3RTaWRlYmFyKCkpO1xuICAgICAgICAgICAgbW9kYWxBZGRQcm9qZWN0LmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4gYm9keTtcblxuICAgIHJldHVybiB7IGJvZHksIHNpZGViYXIsIG1vZGFsQWRkUHJvamVjdCwgYnV0dG9uQWRkUHJvamVjdCwgcmVzZXREYXNoYm9hcmQsIGdldERhc2hib2FyZCwgZ2V0Qm9keSwgZm9ybUFkZFRvZG8gfTtcbn0pKCk7XG5cbmFwcC5pbml0aWF0ZURpc3BsYXkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=