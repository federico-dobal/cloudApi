/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/hello/handler.ts":
/*!****************************************!*\
  !*** ./src/functions/hello/handler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _http_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http_helper */ \"./src/functions/hello/http_helper.ts\");\n\n\n\n\nconst hello = async (event) => {\n    if (!event.queryStringParameters || !event.queryStringParameters.name) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            message: `Mandatory query parameter not provided`,\n        }, _http_helper__WEBPACK_IMPORTED_MODULE_3__.HTTP_NOT_ACCEPTABLE);\n    }\n    const result = await (0,_http_helper__WEBPACK_IMPORTED_MODULE_3__.searchText)(event.queryStringParameters.name);\n    if (result.status == 200) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({ message: JSON.parse(result.message) }, result.status);\n    }\n    else {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({ message: result.message }, result.status);\n    }\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(hello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlcy8uL3NyYy9mdW5jdGlvbnMvaGVsbG8vaGFuZGxlci50cz85MjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICdAbGlicy9sYW1iZGEnO1xuXG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IEhUVFBfTk9UX0FDQ0VQVEFCTEUsIHNlYXJjaFRleHQgfSBmcm9tICcuL2h0dHBfaGVscGVyJztcbmltcG9ydCB7IElIdHRwUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgaGVsbG86IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8dHlwZW9mIHNjaGVtYT4gPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICBpZiAoIWV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycyB8fCAhZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzLm5hbWUpIHtcbiAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICAgIG1lc3NhZ2U6IGBNYW5kYXRvcnkgcXVlcnkgcGFyYW1ldGVyIG5vdCBwcm92aWRlZGAsXG4gICAgfSwgSFRUUF9OT1RfQUNDRVBUQUJMRSk7XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IElIdHRwUmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hUZXh0KGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycy5uYW1lKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gMjAwKSB7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7IG1lc3NhZ2U6IEpTT04ucGFyc2UocmVzdWx0Lm1lc3NhZ2UpIH0sIHJlc3VsdC5zdGF0dXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoeyBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB9LCByZXN1bHQuc3RhdHVzKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KGhlbGxvKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/hello/handler.ts\n");

/***/ }),

/***/ "./src/functions/hello/http_helper.ts":
/*!********************************************!*\
  !*** ./src/functions/hello/http_helper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTTP_OK\": () => (/* binding */ HTTP_OK),\n/* harmony export */   \"HTTP_NOT_ACCEPTABLE\": () => (/* binding */ HTTP_NOT_ACCEPTABLE),\n/* harmony export */   \"HTTP_SERVER_ERROR\": () => (/* binding */ HTTP_SERVER_ERROR),\n/* harmony export */   \"searchText\": () => (/* binding */ searchText)\n/* harmony export */ });\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nconst HTTP_OK = 200;\nconst HTTP_NOT_ACCEPTABLE = 406;\nconst HTTP_SERVER_ERROR = 500;\nconst SEARCH_URL = \"https://maps.googleapis.com/maps/api/place/textsearch/json?key=[key]&query=\";\nasync function searchText(text) {\n    const url = SEARCH_URL + text;\n    let output;\n    try {\n        const res = await fetch(url);\n        if (res.status == HTTP_OK) {\n            const users = (await res.json())['results'];\n            output = users.map(x => ({ 'name': x.name, 'location': x.geometry.location }));\n            return { 'message': JSON.stringify(output), 'status': HTTP_OK };\n        }\n        else {\n            return { 'message': 'Dependent service unavailable, try later', 'status': HTTP_SERVER_ERROR };\n        }\n    }\n    catch (err) {\n        console.log(err.message);\n        return { 'message': 'Service unavailable', 'status': HTTP_SERVER_ERROR };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2h0dHBfaGVscGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlcy8uL3NyYy9mdW5jdGlvbnMvaGVsbG8vaHR0cF9oZWxwZXIudHM/ODE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmltcG9ydCB7IElIdHRwUmVzcG9uc2UsIElPdXRwdXRSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5cbmV4cG9ydCBjb25zdCBIVFRQX09LID0gMjAwO1xuZXhwb3J0IGNvbnN0IEhUVFBfTk9UX0FDQ0VQVEFCTEUgPSA0MDY7XG5leHBvcnQgY29uc3QgSFRUUF9TRVJWRVJfRVJST1IgPSA1MDA7XG5cbmNvbnN0IFNFQVJDSF9VUkwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS90ZXh0c2VhcmNoL2pzb24/a2V5PVtrZXldJnF1ZXJ5PVwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRleHQodGV4dDogc3RyaW5nKTogUHJvbWlzZTxJSHR0cFJlc3BvbnNlPiB7XG4gICAgY29uc3QgdXJsID0gU0VBUkNIX1VSTCArIHRleHQ7XG4gICAgbGV0IG91dHB1dDogSU91dHB1dFJlc3BvbnNlW107XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSBIVFRQX09LKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyczogW2FueV0gPSAoYXdhaXQgcmVzLmpzb24oKSlbJ3Jlc3VsdHMnXTtcbiAgICAgICAgICAgIG91dHB1dCA9IHVzZXJzLm1hcCh4ID0+ICh7ICduYW1lJzogeC5uYW1lLCAnbG9jYXRpb24nOiB4Lmdlb21ldHJ5LmxvY2F0aW9uIH0gYXMgSU91dHB1dFJlc3BvbnNlKSk7XG4gICAgICAgICAgICByZXR1cm4geyAnbWVzc2FnZSc6IEpTT04uc3RyaW5naWZ5KG91dHB1dCksICdzdGF0dXMnOiBIVFRQX09LIH0gYXMgSUh0dHBSZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ICdtZXNzYWdlJzogJ0RlcGVuZGVudCBzZXJ2aWNlIHVuYXZhaWxhYmxlLCB0cnkgbGF0ZXInLCAnc3RhdHVzJzogSFRUUF9TRVJWRVJfRVJST1IgfSBhcyBJSHR0cFJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4geyAnbWVzc2FnZSc6ICdTZXJ2aWNlIHVuYXZhaWxhYmxlJywgJ3N0YXR1cyc6IEhUVFBfU0VSVkVSX0VSUk9SIH0gYXMgSUh0dHBSZXNwb25zZTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/http_helper.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response, status) => {\n    return {\n        statusCode: status,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlcy8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7IGJvZHk6IEZyb21TY2hlbWE8Uz4gfVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8VmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sIEFQSUdhdGV3YXlQcm94eVJlc3VsdD5cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChyZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHN0YXR1czogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZXMvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;