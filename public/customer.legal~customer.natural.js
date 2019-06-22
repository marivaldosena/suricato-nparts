(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer.legal~customer.natural"],{

/***/ "./resources/js/services/base/base.js":
/*!********************************************!*\
  !*** ./resources/js/services/base/base.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiService; });
/* harmony import */ var _drivers_axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drivers/axios/index */ "./resources/js/services/drivers/axios/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import driver from 'axios';
// import Vue from 'vue';

var ApiService =
/*#__PURE__*/
function () {
  /**
   * @type {String}
   */

  /**
   * @type {String}
   */

  /**
   * @param {String} resource
   * @param {Object} http
   */
  function ApiService(resource) {
    var http = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, ApiService);

    _defineProperty(this, "resource", '');

    _defineProperty(this, "id", 'id');

    if (!resource) {
      throw new Error('The child service class did not provide the resource.');
    }

    this.resource = resource;
    this.http = _drivers_axios_index__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  /**
   * @returns {*|PromiseLike}
   */


  _createClass(ApiService, [{
    key: "index",
    value: function index() {
      return this.http.get("".concat(this.resource)).then(this.constructor.then);
    }
    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */

  }, {
    key: "store",
    value: function store(record) {
      return this.http.post("".concat(this.resource), record).then(this.constructor.then);
    }
    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */

  }, {
    key: "show",
    value: function show(record) {
      return this.http.get("".concat(this.resource, "/").concat(this.getId(record))).then(this.constructor.then);
    }
    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */

  }, {
    key: "update",
    value: function update(record) {
      return this.http.put("".concat(this.resource, "/").concat(this.getId(record)), record).then(this.constructor.then);
    }
    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */

  }, {
    key: "destroy",
    value: function destroy(record) {
      return this.http["delete"]("".concat(this.resource, "/").concat(this.getId(record))).then(this.constructor.then);
    }
    /**
     * @param {Object} response
     * @returns {Object}
     */

  }, {
    key: "getId",

    /**
     * @param {String|Object} record
     * @returns {String}
     */
    value: function getId(record) {
      if (_typeof(record) === 'object') {
        return record[this.id];
      }

      return String(record);
    }
  }], [{
    key: "then",
    value: function then(response) {
      if (!response.data) {
        return {};
      }

      if (typeof response.data === 'string') {
        return JSON.parse(response.data);
      }

      return response.data;
    }
  }]);

  return ApiService;
}();



/***/ }),

/***/ "./resources/js/services/drivers/axios/helpers.js":
/*!********************************************************!*\
  !*** ./resources/js/services/drivers/axios/helpers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var authServerErrors = function authServerErrors(e) {
  if (e === 'invalid') {
    return 'Invalid Username.';
  } else if (e === 'verify') {
    return 'You should check your email.';
  } else if (e === 'deactivated') {
    return 'Your account is deactivated.';
  } else if (e === 'password') {
    return 'Invalid password.';
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  authServerErrors: authServerErrors
});

/***/ }),

/***/ "./resources/js/services/drivers/axios/index.js":
/*!******************************************************!*\
  !*** ./resources/js/services/drivers/axios/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ "./resources/js/services/drivers/axios/interceptors.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./resources/js/config/index.js");



var instance = vue__WEBPACK_IMPORTED_MODULE_0___default.a.axios;
var i = _interceptors__WEBPACK_IMPORTED_MODULE_1__["default"].init(instance);
instance.interceptors.response.use(i.successResponseInterceptor, i.errorResponseInterceptor);
instance.interceptors.request.use(i.successRequestInterceptor);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./resources/js/services/drivers/axios/interceptors.js":
/*!*************************************************************!*\
  !*** ./resources/js/services/drivers/axios/interceptors.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interceptors; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./resources/js/services/drivers/axios/helpers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store */ "./resources/js/store/index.js");
/* harmony import */ var _refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresh */ "./resources/js/services/drivers/axios/refresh.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Interceptors =
/*#__PURE__*/
function () {
  function Interceptors(instance) {
    var _this = this;

    _classCallCheck(this, Interceptors);

    _defineProperty(this, "instance", null);

    _defineProperty(this, "that", null);

    _defineProperty(this, "successResponseInterceptor", function (res) {
      return res;
    });

    _defineProperty(this, "errorResponseInterceptor", function (err) {
      var message = '';

      if (err.response.request.responseURL.indexOf("auth") !== -1) {
        if (err.response.status === 404) {
          message = _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].authServerErrors('invalid');
        } else if (err.response.status === 401) {
          message = _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].authServerErrors(err.response.data.message);
        }
      } else {
        if (err.response.status === 404) {
          message = '[resource] not found.';
        } else if (err.response.status === 401) {
          _refresh__WEBPACK_IMPORTED_MODULE_2__["default"].init(_this.instance).handleRefreshToken(err);
        } else {
          message = err.data.message;
        }
      }

      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('setAlert', {
        type: 'danger',
        message: message,
        show: true
      }).then(function () {});
      return Promise.reject(err);
    });

    _defineProperty(this, "successRequestInterceptor", function (req) {
      if (localStorage.getItem('token')) {
        req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
      }

      if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.alert.show) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('clearAlert').then(function () {});
      }

      return req;
    });

    _defineProperty(this, "errorRequestInterceptor", function () {});

    this.instance = instance;
  }

  _createClass(Interceptors, null, [{
    key: "init",
    value: function init(instance) {
      return new this(instance);
    }
  }]);

  return Interceptors;
}();



/***/ }),

/***/ "./resources/js/services/drivers/axios/refresh.js":
/*!********************************************************!*\
  !*** ./resources/js/services/drivers/axios/refresh.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Refresh; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Refresh =
/*#__PURE__*/
function () {
  function Refresh(instance) {
    _classCallCheck(this, Refresh);

    _defineProperty(this, "isRefreshing", false);

    _defineProperty(this, "refreshSubscribers", []);

    _defineProperty(this, "instance", null);

    this.instance = instance;
  }

  _createClass(Refresh, [{
    key: "handleRefreshToken",
    value: function handleRefreshToken(err) {
      var _this = this;

      var config = err.config;
      var originalRequest = config;

      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.instance.post('/auth/refresh').then(function (response) {
          _this.isRefreshing = false;

          _this.onRefreshed(response.data.access_token);

          _this.refreshSubscribers = [];
        });
        return new Promise(function (resolve, reject) {
          _this.subscribeTokenRefresh(function (token) {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            localStorage.setItem('token', token);
            resolve(_this.instance(originalRequest));
          });
        });
      }
    }
  }, {
    key: "subscribeTokenRefresh",
    value: function subscribeTokenRefresh(cb) {
      this.refreshSubscribers.push(cb);
    }
  }, {
    key: "onRefreshed",
    value: function onRefreshed(token) {
      this.refreshSubscribers.map(function (cb) {
        return cb(token);
      });
    }
  }], [{
    key: "init",
    value: function init(instance) {
      return new this(instance);
    }
  }]);

  return Refresh;
}();



/***/ }),

/***/ "./resources/js/services/users.js":
/*!****************************************!*\
  !*** ./resources/js/services/users.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersService; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./resources/js/services/base/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UsersService =
/*#__PURE__*/
function (_ApiService) {
  _inherits(UsersService, _ApiService);

  function UsersService() {
    _classCallCheck(this, UsersService);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsersService).apply(this, arguments));
  }

  _createClass(UsersService, null, [{
    key: "init",
    value: function init() {
      return new this('users');
    }
  }]);

  return UsersService;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);