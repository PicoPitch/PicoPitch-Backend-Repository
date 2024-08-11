/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/    "use strict";
/******/    var __webpack_modules__ = ({

/***/ "./config/error.js":
/*!*************************!*\
  !*** ./config/error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

    eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BaseError = void 0;\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nvar BaseError = exports.BaseError = /*#__PURE__*/function (_Error) {\n  function BaseError(data) {\n    var _this;\n    _classCallCheck(this, BaseError);\n    _this = _callSuper(this, BaseError, [data.message]);\n    _this.data = data;\n    return _this;\n  }\n  _inherits(BaseError, _Error);\n  return _createClass(BaseError);\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\n//# sourceURL=webpack://umc_project/./config/error.js?");

    /***/ }),
    
    /***/ "./config/response.js":
    /*!****************************!*\
      !*** ./config/response.js ***!
      \****************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.response = void 0;\nvar response = exports.response = function response(_ref) {\n  var isSuccess = _ref.isSuccess,\n    code = _ref.code,\n    message = _ref.message;\n  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  return {\n    isSuccess: isSuccess,\n    code: code,\n    message: message,\n    result: result\n  };\n};\n\n//# sourceURL=webpack://umc_project/./config/response.js?");
    
    /***/ }),
    
    /***/ "./config/response.status.js":
    /*!***********************************!*\
      !*** ./config/response.status.js ***!
      \***********************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.status = void 0;\nvar _httpStatusCodes = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n// response.status.js\n\nvar status = exports.status = {\n  // success\n  SUCCESS: {\n    status: _httpStatusCodes.StatusCodes.OK,\n    \"isSuccess\": true,\n    \"code\": 2000,\n    \"message\": \"success!\"\n  },\n  // error\n  // common err\n  INTERNAL_SERVER_ERROR: {\n    status: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,\n    \"isSuccess\": false,\n    \"code\": \"COMMON000\",\n    \"message\": \"서버 에러, 관리자에게 문의 바랍니다.\"\n  },\n  BAD_REQUEST: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"COMMON001\",\n    \"message\": \"잘못된 요청입니다.\"\n  },\n  UNAUTHORIZED: {\n    status: _httpStatusCodes.StatusCodes.UNAUTHORIZED,\n    \"isSuccess\": false,\n    \"code\": \"COMMON002\",\n    \"message\": \"권한이 잘못되었습니다.\"\n  },\n  METHOD_NOT_ALLOWED: {\n    status: _httpStatusCodes.StatusCodes.METHOD_NOT_ALLOWED,\n    \"isSuccess\": false,\n    \"code\": \"COMMON003\",\n    \"message\": \"지원하지 않는 Http Method 입니다.\"\n  },\n  FORBIDDEN: {\n    status: _httpStatusCodes.StatusCodes.FORBIDDEN,\n    \"isSuccess\": false,\n    \"code\": \"COMMON004\",\n    \"message\": \"금지된 요청입니다.\"\n  },\n  NOT_FOUND: {\n    status: _httpStatusCodes.StatusCodes.NOT_FOUND,\n    \"isSuccess\": false,\n    \"code\": \"COMMON005\",\n    \"message\": \"요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다.\"\n  },\n  // member err\n  MEMBER_NOT_FOUND: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"MEMBER4001\",\n    \"message\": \"사용자가 없습니다.\"\n  },\n  NICKNAME_NOT_EXIST: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"MEMBER4002\",\n    \"message\": \"닉네임은 필수입니다.\"\n  },\n  EMAIL_ALREADY_EXIST: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"MEMBER4003\",\n    \"message\": \"이미 가입된 이메일이 존재합니다.\"\n  },\n  // db error\n  PARAMETER_IS_WRONG: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"DATABASE4001\",\n    \"message\": \"쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요.\"\n  },\n  // article err\n  ARTICLE_NOT_FOUND: {\n    status: _httpStatusCodes.StatusCodes.NOT_FOUND,\n    \"isSuccess\": false,\n    \"code\": \"ARTICLE4001\",\n    \"message\": \"게시글이 없습니다.\"\n  },\n  // login err\n  LOGIN_PARAM_NOT_EXIST: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"SIGNIN4001\",\n    \"message\": \"ID 혹은 PW 값이 존재하지 않습니다.\"\n  },\n  LOGIN_ID_NOT_EXIST: {\n    status: _httpStatusCodes.StatusCodes.NOT_FOUND,\n    \"isSuccess\": false,\n    \"code\": \"SIGNIN4002\",\n    \"message\": \"아이디를 찾을 수 없습니다.\"\n  },\n  LOGIN_PASSWORD_WRONG: {\n    status: _httpStatusCodes.StatusCodes.BAD_REQUEST,\n    \"isSuccess\": false,\n    \"code\": \"SIGNIN4003\",\n    \"message\": \"비밀번호가 일치하지 않습니다.\"\n  },\n  TOKEN_IS_EXPIRED: {\n    status: _httpStatusCodes.StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE,\n    \"isSuccess\": false,\n    \"code\": \"SIGNIN4004\",\n    \"message\": \"토큰이 만료되었습니다.\"\n  },\n  TOKEN_IS_INVALID: {\n    status: _httpStatusCodes.StatusCodes.UNAUTHORIZED,\n    \"isSuccess\": false,\n    \"code\": \"SIGNIN4005\",\n    \"message\": \"유효하지 않은 토큰입니다.\"\n  }\n};\n\n//# sourceURL=webpack://umc_project/./config/response.status.js?");
    
    /***/ }),
    
    /***/ "./config/swagger.config.js":
    /*!**********************************!*\
      !*** ./config/swagger.config.js ***!
      \**********************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.specs = void 0;\nvar _swaggerJsdoc = _interopRequireDefault(__webpack_require__(/*! swagger-jsdoc */ \"swagger-jsdoc\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\n// swagger.config.js\n\nvar options = {\n  definition: {\n    info: {\n      title: 'PicoPitch API',\n      version: '1.0.0',\n      description: 'Project PicoPitch with express, API 설명'\n    },\n    host: 'localhost:3000',\n    basepath: '../'\n  },\n  apis: ['./src/routes/*.js', './swagger/*']\n};\nvar specs = exports.specs = (0, _swaggerJsdoc[\"default\"])(options);\n\n//# sourceURL=webpack://umc_project/./config/swagger.config.js?");
    
    /***/ }),
    
    /***/ "./index.js":
    /*!******************!*\
      !*** ./index.js ***!
      \******************/
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
    
    eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\nvar _swaggerConfig = __webpack_require__(/*! ./config/swagger.config.js */ \"./config/swagger.config.js\");\nvar _swaggerUiExpress = _interopRequireDefault(__webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\"));\nvar _dotenv = _interopRequireDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar _cors = _interopRequireDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar _response = __webpack_require__(/*! ./config/response.js */ \"./config/response.js\");\nvar _error = __webpack_require__(/*! ./config/error.js */ \"./config/error.js\");\nvar _responseStatus = __webpack_require__(/*! ./config/response.status.js */ \"./config/response.status.js\");\nvar _healthRoute = __webpack_require__(/*! ./src/routes/health.route.js */ \"./src/routes/health.route.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\n// index.js\n\n_dotenv[\"default\"].config(); // .env 파일 사용 (환경 변수 관리)\n\nvar app = (0, _express[\"default\"])();\n\n// server setting - veiw, static, body-parser etc..\napp.set('port', process.env.PORT || 8080); // 서버 포트 지정\napp.use((0, _cors[\"default\"])()); // cors 방식 허용\napp.use(_express[\"default\"][\"static\"]('public')); // 정적 파일 접근\napp.use(_express[\"default\"].json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)\napp.use(_express[\"default\"].urlencoded({\n  extended: false\n})); // 단순 객체 문자열 형태로 본문 데이터 해석\n\napp.use('/api-docs', _swaggerUiExpress[\"default\"].serve, _swaggerUiExpress[\"default\"].setup(_swaggerConfig.specs));\napp.use('/health', _healthRoute.healthRoute);\napp.get('/', function (req, res, next) {\n  res.send((0, _response.response)(_responseStatus.status.SUCCESS, \"루트 페이지!\"));\n});\n\n// error handling\napp.use(function (req, res, next) {\n  var err = new _error.BaseError({\n    status: 404,\n    isSuccess: false,\n    code: 1004,\n    message: 'Not Found'\n  });\n  next(err);\n});\napp.use(function (err, req, res, next) {\n  // 템플릿 엔진 변수 설정\n  res.locals.message = err.message;\n  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기\n  res.locals.error =  true ? err : 0;\n  console.error(err);\n  res.status(err.data.status || _responseStatus.status.INTERNAL_SERVER_ERROR).send((0, _response.response)(err.data));\n});\napp.listen(app.get('port'), function () {\n  console.log(\"Example app listening on port \".concat(app.get('port')));\n});\n\n//# sourceURL=webpack://umc_project/./index.js?");
    
    /***/ }),
    
    /***/ "./src/controllers/health.controller.js":
    /*!**********************************************!*\
      !*** ./src/controllers/health.controller.js ***!
      \**********************************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.healthController = void 0;\n// health.controller.js\n\nvar healthController = exports.healthController = function healthController(req, res, next) {\n  res.send(\"HELLO, I'm Healthy!\");\n};\n\n//# sourceURL=webpack://umc_project/./src/controllers/health.controller.js?");
    
    /***/ }),
    
    /***/ "./src/routes/health.route.js":
    /*!************************************!*\
      !*** ./src/routes/health.route.js ***!
      \************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.healthRoute = void 0;\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\nvar _healthController = __webpack_require__(/*! ../controllers/health.controller.js */ \"./src/controllers/health.controller.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\n// health.route.js\n\nvar healthRoute = exports.healthRoute = _express[\"default\"].Router();\nhealthRoute.get('', _healthController.healthController);\n\n//# sourceURL=webpack://umc_project/./src/routes/health.route.js?");
    
    /***/ }),
    
    /***/ "cors":
    /*!***********************!*\
      !*** external "cors" ***!
      \***********************/
    /***/ ((module) => {
    
    module.exports = require("cors");
    
    /***/ }),
    
    /***/ "dotenv":
    /*!*************************!*\
      !*** external "dotenv" ***!
      \*************************/
    /***/ ((module) => {
    
    module.exports = require("dotenv");
    
    /***/ }),
    
    /***/ "express":
    /*!**************************!*\
      !*** external "express" ***!
      \**************************/
    /***/ ((module) => {
    
    module.exports = require("express");
    
    /***/ }),
    
    /***/ "http-status-codes":
    /*!************************************!*\
      !*** external "http-status-codes" ***!
      \************************************/
    /***/ ((module) => {
    
    module.exports = require("http-status-codes");
    
    /***/ }),
    
    /***/ "swagger-jsdoc":
    /*!********************************!*\
      !*** external "swagger-jsdoc" ***!
      \********************************/
    /***/ ((module) => {
    
    module.exports = require("swagger-jsdoc");
    
    /***/ }),
    
    /***/ "swagger-ui-express":
    /*!*************************************!*\
      !*** external "swagger-ui-express" ***!
      \*************************************/
    /***/ ((module) => {
    
    module.exports = require("swagger-ui-express");
    
    /***/ })
    
    /******/    });
    /************************************************************************/
    /******/    // The module cache
    /******/    var __webpack_module_cache__ = {};
    /******/    
    /******/    // The require function
    /******/    function __webpack_require__(moduleId) {
    /******/       // Check if module is in cache
    /******/       var cachedModule = __webpack_module_cache__[moduleId];
    /******/       if (cachedModule !== undefined) {
    /******/          return cachedModule.exports;
    /******/       }
    /******/       // Create a new module (and put it into the cache)
    /******/       var module = __webpack_module_cache__[moduleId] = {
    /******/          // no module.id needed
    /******/          // no module.loaded needed
    /******/          exports: {}
    /******/       };
    /******/    
    /******/       // Execute the module function
    /******/       __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/    
    /******/       // Return the exports of the module
    /******/       return module.exports;
    /******/    }
    /******/    
    /************************************************************************/
    /******/    
    /******/    // startup
    /******/    // Load entry module and return exports
    /******/    // This entry module can't be inlined because the eval devtool is used.
    /******/    var __webpack_exports__ = __webpack_require__("./index.js");
    /******/    module.exports = __webpack_exports__;
    /******/    
    /******/ })()
    ;