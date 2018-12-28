/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/components/NavMenu.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/components/NavMenu.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/NavMenu.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/index.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./src/index.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _Layout = __webpack_require__(/*! ./components/Layout */ \"./src/components/Layout.js\");\n\nvar _Layout2 = _interopRequireDefault(_Layout);\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Counter = __webpack_require__(/*! ./components/Counter */ \"./src/components/Counter.js\");\n\nvar _Counter2 = _interopRequireDefault(_Counter);\n\nvar _FetchData = __webpack_require__(/*! ./components/FetchData */ \"./src/components/FetchData.js\");\n\nvar _FetchData2 = _interopRequireDefault(_FetchData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  return _react2.default.createElement(\n    _Layout2.default,\n    null,\n    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Home2.default }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/counter', component: _Counter2.default }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/fetchdata/:startDateIndex?', component: _FetchData2.default })\n  );\n};\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Counter.js":
/*!***********************************!*\
  !*** ./src/components/Counter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Counter = __webpack_require__(/*! ../store/Counter */ \"./src/store/Counter.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Counter = function Counter(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Counter'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'This is a simple example of a React component.'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Current count: ',\n      _react2.default.createElement(\n        'strong',\n        null,\n        props.count\n      )\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: props.increment },\n      'Increment'\n    )\n  );\n};\n\nexports.default = (0, _reactRedux.connect)(function (state) {\n  return state.counter;\n}, function (dispatch) {\n  return (0, _redux.bindActionCreators)(_Counter.actionCreators, dispatch);\n})(Counter);\n\n//# sourceURL=webpack:///./src/components/Counter.js?");

/***/ }),

/***/ "./src/components/FetchData.js":
/*!*************************************!*\
  !*** ./src/components/FetchData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _WeatherForecasts = __webpack_require__(/*! ../store/WeatherForecasts */ \"./src/store/WeatherForecasts.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FetchData = function (_Component) {\n  _inherits(FetchData, _Component);\n\n  function FetchData() {\n    _classCallCheck(this, FetchData);\n\n    return _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).apply(this, arguments));\n  }\n\n  _createClass(FetchData, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // This method runs when the component is first added to the page\n      var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;\n      this.props.requestWeatherForecasts(startDateIndex);\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      // This method runs when incoming props (e.g., route params) change\n      var startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;\n      this.props.requestWeatherForecasts(startDateIndex);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Weather forecast'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'This component demonstrates fetching data from the server and working with URL parameters.'\n        ),\n        renderForecastsTable(this.props),\n        renderPagination(this.props)\n      );\n    }\n  }]);\n\n  return FetchData;\n}(_react.Component);\n\nfunction renderForecastsTable(props) {\n  return _react2.default.createElement(\n    'table',\n    { className: 'table' },\n    _react2.default.createElement(\n      'thead',\n      null,\n      _react2.default.createElement(\n        'tr',\n        null,\n        _react2.default.createElement(\n          'th',\n          null,\n          'Date'\n        ),\n        _react2.default.createElement(\n          'th',\n          null,\n          'Temp. (C)'\n        ),\n        _react2.default.createElement(\n          'th',\n          null,\n          'Temp. (F)'\n        ),\n        _react2.default.createElement(\n          'th',\n          null,\n          'Summary'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'tbody',\n      null,\n      props.forecasts.map(function (forecast) {\n        return _react2.default.createElement(\n          'tr',\n          { key: forecast.dateFormatted },\n          _react2.default.createElement(\n            'td',\n            null,\n            forecast.dateFormatted\n          ),\n          _react2.default.createElement(\n            'td',\n            null,\n            forecast.temperatureC\n          ),\n          _react2.default.createElement(\n            'td',\n            null,\n            forecast.temperatureF\n          ),\n          _react2.default.createElement(\n            'td',\n            null,\n            forecast.summary\n          )\n        );\n      })\n    )\n  );\n}\n\nfunction renderPagination(props) {\n  var prevStartDateIndex = (props.startDateIndex || 0) - 5;\n  var nextStartDateIndex = (props.startDateIndex || 0) + 5;\n\n  return _react2.default.createElement(\n    'p',\n    { className: 'clearfix text-center' },\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { className: 'btn btn-default pull-left', to: '/fetchdata/' + prevStartDateIndex },\n      'Previous'\n    ),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { className: 'btn btn-default pull-right', to: '/fetchdata/' + nextStartDateIndex },\n      'Next'\n    ),\n    props.isLoading ? _react2.default.createElement(\n      'span',\n      null,\n      'Loading...'\n    ) : []\n  );\n}\n\nexports.default = (0, _reactRedux.connect)(function (state) {\n  return state.weatherForecasts;\n}, function (dispatch) {\n  return (0, _redux.bindActionCreators)(_WeatherForecasts.actionCreators, dispatch);\n})(FetchData);\n\n//# sourceURL=webpack:///./src/components/FetchData.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Hello, world!'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Welcome to your new single-page application, built with:'\n    ),\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://get.asp.net/' },\n          'ASP.NET Core'\n        ),\n        ' and ',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' },\n          'C#'\n        ),\n        ' for cross-platform server-side code'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://facebook.github.io/react/' },\n          'React'\n        ),\n        ' and ',\n        _react2.default.createElement(\n          'a',\n          { href: 'https://redux.js.org/' },\n          'Redux'\n        ),\n        ' for client-side code'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'http://getbootstrap.com/' },\n          'Bootstrap'\n        ),\n        ' for layout and styling'\n      )\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'To help you get started, we\\'ve also set up:'\n    ),\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Client-side navigation'\n        ),\n        '. For example, click ',\n        _react2.default.createElement(\n          'em',\n          null,\n          'Counter'\n        ),\n        ' then ',\n        _react2.default.createElement(\n          'em',\n          null,\n          'Back'\n        ),\n        ' to return here.'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Development server integration'\n        ),\n        '. In development mode, the development server from ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'create-react-app'\n        ),\n        ' runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'strong',\n          null,\n          'Efficient production builds'\n        ),\n        '. In production mode, development-time features are disabled, and your ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'dotnet publish'\n        ),\n        ' configuration produces minified, efficiently bundled JavaScript files.'\n      )\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'The ',\n      _react2.default.createElement(\n        'code',\n        null,\n        'ClientApp'\n      ),\n      ' subdirectory is a standard React application based on the ',\n      _react2.default.createElement(\n        'code',\n        null,\n        'create-react-app'\n      ),\n      ' template. If you open a command prompt in that directory, you can run ',\n      _react2.default.createElement(\n        'code',\n        null,\n        'npm'\n      ),\n      ' commands such as ',\n      _react2.default.createElement(\n        'code',\n        null,\n        'npm test'\n      ),\n      ' or ',\n      _react2.default.createElement(\n        'code',\n        null,\n        'npm install'\n      ),\n      '.'\n    )\n  );\n};\n\nexports.default = (0, _reactRedux.connect)()(Home);\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\nvar _NavMenu = __webpack_require__(/*! ./NavMenu */ \"./src/components/NavMenu.js\");\n\nvar _NavMenu2 = _interopRequireDefault(_NavMenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n  return _react2.default.createElement(\n    _reactBootstrap.Grid,\n    { fluid: true },\n    _react2.default.createElement(\n      _reactBootstrap.Row,\n      null,\n      _react2.default.createElement(\n        _reactBootstrap.Col,\n        { sm: 3 },\n        _react2.default.createElement(_NavMenu2.default, null)\n      ),\n      _react2.default.createElement(\n        _reactBootstrap.Col,\n        { sm: 9 },\n        props.children\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/Layout.js?");

/***/ }),

/***/ "./src/components/NavMenu.css":
/*!************************************!*\
  !*** ./src/components/NavMenu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!./NavMenu.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/components/NavMenu.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/NavMenu.css?");

/***/ }),

/***/ "./src/components/NavMenu.js":
/*!***********************************!*\
  !*** ./src/components/NavMenu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\nvar _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ \"react-router-bootstrap\");\n\n__webpack_require__(/*! ./NavMenu.css */ \"./src/components/NavMenu.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n  return _react2.default.createElement(\n    _reactBootstrap.Navbar,\n    { inverse: true, fixedTop: true, fluid: true, collapseOnSelect: true },\n    _react2.default.createElement(\n      _reactBootstrap.Navbar.Header,\n      null,\n      _react2.default.createElement(\n        _reactBootstrap.Navbar.Brand,\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/' },\n          'PTG.ATS'\n        )\n      ),\n      _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.Navbar.Collapse,\n      null,\n      _react2.default.createElement(\n        _reactBootstrap.Nav,\n        null,\n        _react2.default.createElement(\n          _reactRouterBootstrap.LinkContainer,\n          { to: '/', exact: true },\n          _react2.default.createElement(\n            _reactBootstrap.NavItem,\n            null,\n            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'home' }),\n            ' Home'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterBootstrap.LinkContainer,\n          { to: '/counter' },\n          _react2.default.createElement(\n            _reactBootstrap.NavItem,\n            null,\n            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'education' }),\n            ' Counter'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterBootstrap.LinkContainer,\n          { to: '/fetchdata' },\n          _react2.default.createElement(\n            _reactBootstrap.NavItem,\n            null,\n            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'th-list' }),\n            ' Fetch data'\n          )\n        )\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/NavMenu.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader!./index.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"bootstrap/dist/css/bootstrap.css\");\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap-theme.css */ \"bootstrap/dist/css/bootstrap-theme.css\");\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nvar _configureStore = __webpack_require__(/*! ./store/configureStore */ \"./src/store/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _registerServiceWorker = __webpack_require__(/*! ./registerServiceWorker */ \"./src/registerServiceWorker.js\");\n\nvar _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Create browser history to use in the Redux store\nvar baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\nvar history = (0, _history.createBrowserHistory)({ basename: baseUrl });\n\n// Get the application-wide store instance, prepopulating with state from the server where available.\nvar initialState = window.initialReduxState;\nvar store = (0, _configureStore2.default)(history, initialState);\n\nvar rootElement = document.getElementById('root');\n\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(\n    _reactRouterRedux.ConnectedRouter,\n    { history: history },\n    _react2.default.createElement(_App2.default, null)\n  )\n), rootElement);\n\n(0, _registerServiceWorker2.default)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/registerServiceWorker.js":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = register;\nexports.unregister = unregister;\n// In production, we register a service worker to serve assets from local cache.\n\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on the \"N+1\" visit to a page, since previously\n// cached resources are updated in the background.\n\n// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.\n// This link also includes instructions on opting out of this behavior.\n\nvar isLocalhost = Boolean(window.location.hostname === 'localhost' ||\n// [::1] is the IPv6 localhost address.\nwindow.location.hostname === '[::1]' ||\n// 127.0.0.1/8 is considered localhost for IPv4.\nwindow.location.hostname.match(/^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));\n\nfunction register() {\n  if (false) { var publicUrl; }\n}\n\nfunction registerValidSW(swUrl) {\n  navigator.serviceWorker.register(swUrl).then(function (registration) {\n    registration.onupdatefound = function () {\n      var installingWorker = registration.installing;\n      installingWorker.onstatechange = function () {\n        if (installingWorker.state === 'installed') {\n          if (navigator.serviceWorker.controller) {\n            // At this point, the old content will have been purged and\n            // the fresh content will have been added to the cache.\n            // It's the perfect time to display a \"New content is\n            // available; please refresh.\" message in your web app.\n            console.log('New content is available; please refresh.');\n          } else {\n            // At this point, everything has been precached.\n            // It's the perfect time to display a\n            // \"Content is cached for offline use.\" message.\n            console.log('Content is cached for offline use.');\n          }\n        }\n      };\n    };\n  }).catch(function (error) {\n    console.error('Error during service worker registration:', error);\n  });\n}\n\nfunction checkValidServiceWorker(swUrl) {\n  // Check if the service worker can be found. If it can't reload the page.\n  fetch(swUrl).then(function (response) {\n    // Ensure service worker exists, and that we really are getting a JS file.\n    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {\n      // No service worker found. Probably a different app. Reload the page.\n      navigator.serviceWorker.ready.then(function (registration) {\n        registration.unregister().then(function () {\n          window.location.reload();\n        });\n      });\n    } else {\n      // Service worker found. Proceed as normal.\n      registerValidSW(swUrl);\n    }\n  }).catch(function () {\n    console.log('No internet connection found. App is running in offline mode.');\n  });\n}\n\nfunction unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(function (registration) {\n      registration.unregister();\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/registerServiceWorker.js?");

/***/ }),

/***/ "./src/store/Counter.js":
/*!******************************!*\
  !*** ./src/store/Counter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar incrementCountType = 'INCREMENT_COUNT';\nvar decrementCountType = 'DECREMENT_COUNT';\nvar initialState = { count: 0 };\n\nvar actionCreators = exports.actionCreators = {\n  increment: function increment() {\n    return { type: incrementCountType };\n  },\n  decrement: function decrement() {\n    return { type: decrementCountType };\n  }\n};\n\nvar reducer = exports.reducer = function reducer(state, action) {\n  state = state || initialState;\n\n  if (action.type === incrementCountType) {\n    return { state: state, count: state.count + 1 };\n  }\n\n  if (action.type === decrementCountType) {\n    return { state: state, count: state.count - 1 };\n  }\n\n  return state;\n};\n\n//# sourceURL=webpack:///./src/store/Counter.js?");

/***/ }),

/***/ "./src/store/WeatherForecasts.js":
/*!***************************************!*\
  !*** ./src/store/WeatherForecasts.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar requestWeatherForecastsType = 'REQUEST_WEATHER_FORECASTS';\nvar receiveWeatherForecastsType = 'RECEIVE_WEATHER_FORECASTS';\nvar initialState = { forecasts: [], isLoading: false };\n\nvar actionCreators = exports.actionCreators = {\n  requestWeatherForecasts: function requestWeatherForecasts(startDateIndex) {\n    return function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {\n        var url, response, forecasts;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(startDateIndex === getState().weatherForecasts.startDateIndex)) {\n                  _context.next = 2;\n                  break;\n                }\n\n                return _context.abrupt('return');\n\n              case 2:\n\n                dispatch({ type: requestWeatherForecastsType, startDateIndex: startDateIndex });\n\n                url = 'api/SampleData/WeatherForecasts?startDateIndex=' + startDateIndex;\n                _context.next = 6;\n                return fetch(url);\n\n              case 6:\n                response = _context.sent;\n                _context.next = 9;\n                return response.json();\n\n              case 9:\n                forecasts = _context.sent;\n\n\n                dispatch({ type: receiveWeatherForecastsType, startDateIndex: startDateIndex, forecasts: forecasts });\n\n              case 11:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, undefined);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  }\n};\n\nvar reducer = exports.reducer = function reducer(state, action) {\n  state = state || initialState;\n\n  if (action.type === requestWeatherForecastsType) {\n    return {\n      state: state,\n      startDateIndex: action.startDateIndex,\n      isLoading: true\n    };\n  }\n\n  if (action.type === receiveWeatherForecastsType) {\n    return {\n      state: state,\n      startDateIndex: action.startDateIndex,\n      forecasts: action.forecasts,\n      isLoading: false\n    };\n  }\n\n  return state;\n};\n\n//# sourceURL=webpack:///./src/store/WeatherForecasts.js?");

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n\nvar _Counter = __webpack_require__(/*! ./Counter */ \"./src/store/Counter.js\");\n\nvar Counter = _interopRequireWildcard(_Counter);\n\nvar _WeatherForecasts = __webpack_require__(/*! ./WeatherForecasts */ \"./src/store/WeatherForecasts.js\");\n\nvar WeatherForecasts = _interopRequireWildcard(_WeatherForecasts);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore(history, initialState) {\n  var reducers = {\n    counter: Counter.reducer,\n    weatherForecasts: WeatherForecasts.reducer\n  };\n\n  var middleware = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];\n\n  // In development, use the browser's Redux dev tools extension if installed\n  var enhancers = [];\n  var isDevelopment = \"development\" === 'development';\n  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {\n    enhancers.push(window.devToolsExtension());\n  }\n\n  var rootReducer = (0, _redux.combineReducers)({\n    reducers: reducers,\n    routing: _reactRouterRedux.routerReducer\n  });\n\n  return (0, _redux.createStore)(rootReducer, initialState, _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, middleware)].concat(enhancers)));\n}\n\n//# sourceURL=webpack:///./src/store/configureStore.js?");

/***/ }),

/***/ "bootstrap/dist/css/bootstrap-theme.css":
/*!*********************************************************!*\
  !*** external "bootstrap/dist/css/bootstrap-theme.css" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bootstrap/dist/css/bootstrap-theme.css\");\n\n//# sourceURL=webpack:///external_%22bootstrap/dist/css/bootstrap-theme.css%22?");

/***/ }),

/***/ "bootstrap/dist/css/bootstrap.css":
/*!***************************************************!*\
  !*** external "bootstrap/dist/css/bootstrap.css" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bootstrap/dist/css/bootstrap.css\");\n\n//# sourceURL=webpack:///external_%22bootstrap/dist/css/bootstrap.css%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-router-bootstrap%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-redux\");\n\n//# sourceURL=webpack:///external_%22react-router-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });