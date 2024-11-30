"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/logs/route";
exports.ids = ["app/api/logs/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Admin_CascadeProjects_windsurf_project_telegram_bot_admin_src_app_api_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/logs/route.ts */ \"(rsc)/./src/app/api/logs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/logs/route\",\n        pathname: \"/api/logs\",\n        filename: \"route\",\n        bundlePath: \"app/api/logs/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Admin\\\\CascadeProjects\\\\windsurf-project\\\\telegram-bot-admin\\\\src\\\\app\\\\api\\\\logs\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Admin_CascadeProjects_windsurf_project_telegram_bot_admin_src_app_api_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/logs/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZsb2dzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbG9ncyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbiU1Q0Nhc2NhZGVQcm9qZWN0cyU1Q3dpbmRzdXJmLXByb2plY3QlNUN0ZWxlZ3JhbS1ib3QtYWRtaW4lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FkbWluJTVDQ2FzY2FkZVByb2plY3RzJTVDd2luZHN1cmYtcHJvamVjdCU1Q3RlbGVncmFtLWJvdC1hZG1pbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUNvRTtBQUNuSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYWRtaW4vP2ZjYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXENhc2NhZGVQcm9qZWN0c1xcXFx3aW5kc3VyZi1wcm9qZWN0XFxcXHRlbGVncmFtLWJvdC1hZG1pblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsb2dzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXENhc2NhZGVQcm9qZWN0c1xcXFx3aW5kc3VyZi1wcm9qZWN0XFxcXHRlbGVncmFtLWJvdC1hZG1pblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsb2dzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xvZ3Mvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/logs/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/logs/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        // Check authentication\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify({\n                error: \"Unauthorized\"\n            }), {\n                status: 401\n            });\n        }\n        // Fetch logs ordered by timestamp\n        const logs = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.userLog.findMany({\n            orderBy: {\n                timestamp: \"desc\"\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(logs);\n    } catch (error) {\n        console.error(\"Error fetching logs:\", error);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify({\n            error: \"Internal Server Error\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNMO0FBQ087QUFDSjtBQUVsQyxlQUFlSTtJQUNwQixJQUFJO1FBQ0YsdUJBQXVCO1FBQ3ZCLE1BQU1DLFVBQVUsTUFBTUgsMkRBQWdCQSxDQUFDQyxrREFBV0E7UUFDbEQsSUFBSSxDQUFDRSxTQUFTO1lBQ1osT0FBTyxJQUFJTCxrRkFBWUEsQ0FBQ00sS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsSUFBSTtnQkFDakVDLFFBQVE7WUFDVjtRQUNGO1FBRUEsa0NBQWtDO1FBQ2xDLE1BQU1DLE9BQU8sTUFBTVQsK0NBQU1BLENBQUNVLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1lBQ3pDQyxTQUFTO2dCQUNQQyxXQUFXO1lBQ2I7UUFDRjtRQUVBLE9BQU9kLGtGQUFZQSxDQUFDZSxJQUFJLENBQUNMO0lBQzNCLEVBQUUsT0FBT0YsT0FBTztRQUNkUSxRQUFRUixLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPLElBQUlSLGtGQUFZQSxDQUFDTSxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUF3QixJQUFJO1lBQzFFQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWFkbWluLy4vc3JjL2FwcC9hcGkvbG9ncy9yb3V0ZS50cz9iZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgYXV0aGVudGljYXRpb25cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KSwge1xuICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZldGNoIGxvZ3Mgb3JkZXJlZCBieSB0aW1lc3RhbXBcbiAgICBjb25zdCBsb2dzID0gYXdhaXQgcHJpc21hLnVzZXJMb2cuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeToge1xuICAgICAgICB0aW1lc3RhbXA6ICdkZXNjJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24obG9ncyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbG9nczonLCBlcnJvcik7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSksIHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiR0VUIiwic2Vzc2lvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXR1cyIsImxvZ3MiLCJ1c2VyTG9nIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwidGltZXN0YW1wIiwianNvbiIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/logs/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n// Define login schema\nconst LoginSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(3, \"Username must be at least 3 characters\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(6, \"Password must be at least 6 characters\")\n});\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) {\n                    throw new Error(\"Missing credentials\");\n                }\n                try {\n                    // Validate credentials\n                    const validatedCredentials = LoginSchema.parse(credentials);\n                    // Check against environment variables\n                    if (validatedCredentials.username === process.env.ADMIN_USERNAME && validatedCredentials.password === process.env.ADMIN_PASSWORD) {\n                        return {\n                            id: \"1\",\n                            name: validatedCredentials.username,\n                            email: \"admin@example.com\"\n                        };\n                    }\n                    throw new Error(\"Invalid credentials\");\n                } catch (error) {\n                    console.error(\"Authentication error:\", error);\n                    throw new Error(\"Invalid credentials\");\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/signin\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst { auth, signIn, signOut } = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDMUM7QUFHeEIsc0JBQXNCO0FBQ3RCLE1BQU1HLGNBQWNELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDM0JDLFVBQVVILGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO0lBQzVCQyxVQUFVTixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM5QjtBQUVPLE1BQU1FLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RULDJFQUFtQkEsQ0FBQztZQUNsQlUsTUFBTTtZQUNOQyxhQUFhO2dCQUNYUCxVQUFVO29CQUFFUSxPQUFPO29CQUFZQyxNQUFNO2dCQUFPO2dCQUM1Q04sVUFBVTtvQkFBRUssT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1DLFdBQVVILFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYVAsWUFBWSxDQUFDTyxhQUFhSixVQUFVO29CQUNwRCxNQUFNLElBQUlRLE1BQU07Z0JBQ2xCO2dCQUVBLElBQUk7b0JBQ0YsdUJBQXVCO29CQUN2QixNQUFNQyx1QkFBdUJkLFlBQVllLEtBQUssQ0FBQ047b0JBRS9DLHNDQUFzQztvQkFDdEMsSUFDRUsscUJBQXFCWixRQUFRLEtBQUtjLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxJQUM1REoscUJBQXFCVCxRQUFRLEtBQUtXLFFBQVFDLEdBQUcsQ0FBQ0UsY0FBYyxFQUM1RDt3QkFDQSxPQUFPOzRCQUNMQyxJQUFJOzRCQUNKWixNQUFNTSxxQkFBcUJaLFFBQVE7NEJBQ25DbUIsT0FBTzt3QkFDVDtvQkFDRjtvQkFDQSxNQUFNLElBQUlSLE1BQU07Z0JBQ2xCLEVBQUUsT0FBT1MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7b0JBQ3ZDLE1BQU0sSUFBSVQsTUFBTTtnQkFDbEI7WUFDRjtRQUNGO0tBQ0Q7SUFDRFcsT0FBTztRQUNMQyxRQUFRO1FBQ1JILE9BQU87SUFDVDtJQUNBSSxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSRCxNQUFNUixFQUFFLEdBQUdTLEtBQUtULEVBQUU7WUFDcEI7WUFDQSxPQUFPUTtRQUNUO1FBQ0EsTUFBTUUsU0FBUSxFQUFFQSxPQUFPLEVBQUVGLEtBQUssRUFBRTtZQUM5QixJQUFJRSxRQUFRRCxJQUFJLEVBQUU7Z0JBQ2hCQyxRQUFRRCxJQUFJLENBQUNULEVBQUUsR0FBR1EsTUFBTVIsRUFBRTtZQUM1QjtZQUNBLE9BQU9VO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUs7SUFDcEI7SUFDQUMsUUFBUWpCLFFBQVFDLEdBQUcsQ0FBQ2lCLGVBQWU7QUFDckMsRUFBRTtBQUVLLE1BQU0sRUFBRUMsSUFBSSxFQUFFVixNQUFNLEVBQUVXLE9BQU8sRUFBRSxHQUFHdkMsZ0RBQVFBLENBQUNTLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYWRtaW4vLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgdHlwZSB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5cbi8vIERlZmluZSBsb2dpbiBzY2hlbWFcbmNvbnN0IExvZ2luU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMywgJ1VzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbig2LCAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKVxufSk7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy51c2VybmFtZSB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNyZWRlbnRpYWxzJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFZhbGlkYXRlIGNyZWRlbnRpYWxzXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVkQ3JlZGVudGlhbHMgPSBMb2dpblNjaGVtYS5wYXJzZShjcmVkZW50aWFscyk7XG5cbiAgICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHZhbGlkYXRlZENyZWRlbnRpYWxzLnVzZXJuYW1lID09PSBwcm9jZXNzLmVudi5BRE1JTl9VU0VSTkFNRSAmJiBcbiAgICAgICAgICAgIHZhbGlkYXRlZENyZWRlbnRpYWxzLnBhc3N3b3JkID09PSBwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgIGlkOiAnMScsIFxuICAgICAgICAgICAgICBuYW1lOiB2YWxpZGF0ZWRDcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBleGFtcGxlLmNvbSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICBlcnJvcjogJy9hdXRoL3NpZ25pbicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgICBtYXhBZ2U6IDI0ICogNjAgKiA2MCxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5leHBvcnQgY29uc3QgeyBhdXRoLCBzaWduSW4sIHNpZ25PdXQgfSA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJ6IiwiTG9naW5TY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsInN0cmluZyIsIm1pbiIsInBhc3N3b3JkIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJhdXRob3JpemUiLCJFcnJvciIsInZhbGlkYXRlZENyZWRlbnRpYWxzIiwicGFyc2UiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fVVNFUk5BTUUiLCJBRE1JTl9QQVNTV09SRCIsImlkIiwiZW1haWwiLCJlcnJvciIsImNvbnNvbGUiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImF1dGgiLCJzaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more: \n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsZUFBZTtBQUNmLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFHO0FBRUwsSUFBSUMsSUFBeUIsRUFBY0osZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWFkbWluLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6IFxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBbJ3F1ZXJ5J10sXG4gIH0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/zod","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogs%2Froute&page=%2Fapi%2Flogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogs%2Froute.ts&appDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CCascadeProjects%5Cwindsurf-project%5Ctelegram-bot-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();