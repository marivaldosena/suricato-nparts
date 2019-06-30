(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers.legal.index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../components/Pagination */ "./resources/js/components/Pagination.vue");
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
/* harmony import */ var _services_legal_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/legal_customer */ "./resources/js/services/legal_customer.js");
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



var legalCustomerService = _services_legal_customer__WEBPACK_IMPORTED_MODULE_2__["default"].init();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  components: {
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      customers: {
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
    getCustomers: function getCustomers() {
      var _this = this;

      legalCustomerService.index("?page=".concat(this.customers.meta.current_page)).then(function (res) {
        var data = res.data,
            meta = res.meta;
        _this.customers.data = data;
        _this.customers.meta = meta;
      });
    },
    //todo - criar modal para confirmar
    handleDestroy: function handleDestroy(id) {
      var _this2 = this;

      var c = confirm('Deseja remover esse cliente?');

      if (c) {
        legalCustomerService.destroy(id).then(function () {
          _this2.customers.data = [];

          _this2.getCustomers();
        });
      }
    },
    //todo - criar modal para confirmar
    handleStatus: function handleStatus(id, status) {
      var _this3 = this;

      var c = confirm('Deseja mudar o status desse cliente?');

      if (c) {
        legalCustomerService.status({
          id: id,
          status: status ? '0' : '1'
        }).then(function () {
          _this3.customers.data = [];

          _this3.getCustomers();
        });
      }
    }
  },
  created: function created() {
    this.getCustomers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: "/admin/customers/legal/create" }
              },
              [_vm._v("Criar")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "col-12 table table-hover" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.customers.data, function(customer) {
              return _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(customer.id))
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(_vm._s(customer.legal_person_info.company_name))
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(_vm._s(customer.legal_person_info.trade_name))
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(_vm._s(customer.legal_person_info.cnpj))
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(
                    _vm._s(
                      customer.legal_person_info.state_registration
                        ? customer.legal_person_info.state_registration
                        : "--"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", { attrs: { scope: "col" } }, [
                  _vm._v(_vm._s(_vm.getLiteralStatus(customer.status)))
                ]),
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
                          attrs: {
                            to: {
                              path: "/admin/customers/legal/" + customer.id
                            }
                          }
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
                              return _vm.handleDestroy(customer.id)
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
                              return _vm.handleStatus(
                                customer.id,
                                customer.status
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(customer.status ? "Desativar" : "Ativar")
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            })
          ],
          2
        )
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Razão Social")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nome Fantasia")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cnpj")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Inscrição Estadual")]),
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

/***/ "./resources/js/services/legal_customer.js":
/*!*************************************************!*\
  !*** ./resources/js/services/legal_customer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NaturalCustomerService; });
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



var NaturalCustomerService =
/*#__PURE__*/
function (_ApiService) {
  _inherits(NaturalCustomerService, _ApiService);

  function NaturalCustomerService() {
    _classCallCheck(this, NaturalCustomerService);

    return _possibleConstructorReturn(this, _getPrototypeOf(NaturalCustomerService).apply(this, arguments));
  }

  _createClass(NaturalCustomerService, [{
    key: "status",
    //todo - esse método deve pertencer a uma unica classe, ou mixim
    value: function status(record) {
      return this.http.put("customers/status/".concat(this.getId(record)), record).then(this.constructor.then);
    } //todo - esse método deve pertencer a uma unica classe, ou mixim

  }, {
    key: "unusedCustomerUsers",
    value: function unusedCustomerUsers(type) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var url = "users/unused-users/".concat(type);

      if (name) {
        url = "users/unused-users/".concat(type, "/").concat(name);
      }

      return this.http.get(url).then(this.constructor.then);
    }
  }], [{
    key: "init",
    value: function init() {
      return new this('customers/legal');
    }
  }]);

  return NaturalCustomerService;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c36317dc&scoped=true& */ "./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c36317dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/customers/legal/views/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c36317dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Index.vue?vue&type=template&id=c36317dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c36317dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);