(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../components/Pagination */ "./resources/js/components/Pagination.vue");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/users */ "./resources/js/services/users.js");
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var usersService = _services_users__WEBPACK_IMPORTED_MODULE_1__["default"].init();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  components: {
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      users: {
        data: [],
        meta: {
          total: 0,
          per_page: 10,
          from: 1,
          to: 0,
          current_page: 1
        }
      }
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      usersService.index("?page=".concat(this.users.meta.current_page)).then(function (res) {
        var data = res.data,
            meta = res.meta;
        _this.users.data = data;
        _this.users.meta = meta;
      });
    },
    //todo - criar modal para confirmar
    handleDestroy: function handleDestroy(id) {
      var _this2 = this;

      var c = confirm('Deseja remover esse usuário?');

      if (c) {
        usersService.destroy(id).then(function () {
          _this2.data = [];

          _this2.getUsers();
        });
      }
    },
    //todo - criar modal para confirmar
    handleStatus: function handleStatus(id, status) {
      var _this3 = this;

      var c = confirm('Deseja mudar o status desse usuário?');

      if (c) {
        usersService.status({
          id: id,
          status: status ? '0' : '1'
        }).then(function () {
          _this3.users.data = [];

          _this3.getUsers();
        });
      }
    },
    getLiteralType: function getLiteralType(type) {
      if (type === 2) {
        return 'PF';
      } else if (type === 3) {
        return 'PJ';
      }

      return 'Admin';
    }
  },
  created: function created() {
    this.getUsers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c("Alert"),
        _vm._v(" "),
        _c(
          "p",
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-outline-secondary",
                attrs: { to: "/admin/users/create" }
              },
              [_vm._v("Criar")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("table", { staticClass: "col-12 table table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.users.data, function(user) {
              return _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(user.id))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(user.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(user.email))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.getLiteralType(user.type)))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.getLiteralStatus(user.status)))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary dropdown-toggle",
                      attrs: {
                        id: "btnGroupDrop1",
                        type: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Ações\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "btnGroupDrop1" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "dropdown-item",
                          attrs: { to: { path: "/admin/users/" + user.id } }
                        },
                        [_vm._v("Editar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.handleDestroy(user.id)
                            }
                          }
                        },
                        [_vm._v("Remover")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.handleStatus(user.id, user.status)
                            }
                          }
                        },
                        [_vm._v(_vm._s(user.status ? "Desativar" : "Ativar"))]
                      )
                    ],
                    1
                  )
                ])
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("Pagination", {
          attrs: { pagination: _vm.users.meta },
          on: {
            paginate: function($event) {
              return _vm.getUsers()
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



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

  _createClass(UsersService, [{
    key: "status",
    value: function status(record) {
      return this.http.put("".concat(this.resource, "/status/").concat(this.getId(record)), record).then(this.constructor.then);
    }
  }], [{
    key: "init",
    value: function init() {
      return new this('users');
    }
  }]);

  return UsersService;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/views/admin/users/views/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/users/views/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a142ba4a&scoped=true& */ "./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a142ba4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/users/views/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=a142ba4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Index.vue?vue&type=template&id=a142ba4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a142ba4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);