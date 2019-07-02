(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers.legal.update"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_legal_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/legal_customer */ "./resources/js/services/legal_customer.js");
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




var legalCustomerService = _services_legal_customer__WEBPACK_IMPORTED_MODULE_3__["default"].init(); // todo - essa funcao talvez deveria ficar em um mixim, pois ela valida tanto cpf como cnpj

var cnpj = function cnpj(value) {
  return /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  components: {
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      users: [],
      username: '',
      id: 0,
      cnpj: '',
      company_name: '',
      trade_name: '',
      state_registration: '',
      submitted: false,
      error: false,
      isLoading: false
    };
  },
  validations: {
    username: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    cnpj: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(18),
      cnpj: cnpj
    },
    company_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    trade_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    state_registration: {}
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    legalCustomerService.show(id).then(function (res) {
      var _res$data = res.data,
          user = _res$data.user,
          legal_person_info = _res$data.legal_person_info;
      _this.username = user;
      _this.id = res.data.id;
      _this.cnpj = legal_person_info.cnpj;
      _this.company_name = legal_person_info.company_name;
      _this.trade_name = legal_person_info.trade_name;
      _this.state_registration = legal_person_info.state_registration;
    });
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers(name) {
      var _this2 = this;

      this.isLoading = true;
      legalCustomerService.unusedCustomerUsers(3, name).then(function (res) {
        _this2.isLoading = false;
        _this2.users = res.data;
      });
    },
    handleSubmit: function handleSubmit() {
      var _this3 = this;

      this.$v.$touch();
      this.submitted = true;

      if (!this.$v.$invalid) {
        var _cnpj = this.cnpj.replace(/\D+/g, "");

        legalCustomerService.update({
          id: this.id,
          cnpj: _cnpj,
          company_name: this.company_name,
          trade_name: this.trade_name,
          state_registration: this.state_registration,
          user_id: this.username.id
        }).then(function (res) {
          _this3.submitted = false;

          _this3.$store.dispatch('setAlert', {
            type: 'success',
            message: 'Cliente alterado.',
            show: true
          }).then(function () {});

          _this3.$router.push('/admin/customers/legal');
        }, function (err) {
          _this3.submitted = false;
        });
      } else {
        this.submitted = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-12" }, [
      _c(
        "form",
        {
          attrs: { id: "", method: "post", novalidate: "" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit($event)
            }
          }
        },
        [
          _c("Alert"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-group",
              class: { "form-group--error": _vm.$v.username.$error }
            },
            [
              _c("label", { staticClass: "typo__label" }, [
                _vm._v("Selecione um usuário")
              ]),
              _vm._v(" "),
              _c(
                "Multiselect",
                {
                  attrs: {
                    id: "ajax",
                    label: "name",
                    selectLabel: "Pressione enter para selecionar",
                    selectedLabel: "Selecionado",
                    deselectLabel: "Pressione enter para remover",
                    placeholder: "Digite um nome",
                    "open-direction": "bottom",
                    options: _vm.users,
                    searchable: true,
                    loading: _vm.isLoading
                  },
                  on: { "search-change": _vm.getUsers },
                  model: {
                    value: _vm.username,
                    callback: function($$v) {
                      _vm.username = $$v
                    },
                    expression: "username"
                  }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "noResult" }, slot: "noResult" },
                    [
                      _vm._v(
                        "Oops! No elements found. Consider changing the search query."
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.$v.username.$error
                ? _c("div", { staticClass: "error" }, [
                    !_vm.$v.username.required
                      ? _c("div", { staticClass: "error-msg" }, [
                          _vm._v("Usuário requerido")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c(
              "div",
              {
                staticClass: "form-group col-6",
                class: { "form-group--error": _vm.$v.cnpj.$error }
              },
              [
                _c("label", { attrs: { for: "cnpj" } }, [_vm._v("Cnpj")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.cnpj.$model,
                      expression: "$v.cnpj.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "cnpj",
                    placeholder: "xx.xxx.xxx/xxxx-xx"
                  },
                  domProps: { value: _vm.$v.cnpj.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.cnpj,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.cnpj.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.cnpj.required
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Cnpj requerido")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.cnpj.maxLength || !_vm.$v.cnpj.cnpj
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Cnpj inválido")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group col-6",
                class: { "form-group--error": _vm.$v.company_name.$error }
              },
              [
                _c("label", { attrs: { for: "company_name" } }, [
                  _vm._v("Razão Social")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.company_name.$model,
                      expression: "$v.company_name.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "company_name",
                    placeholder: "Razão Social"
                  },
                  domProps: { value: _vm.$v.company_name.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.company_name,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.company_name.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.company_name.maxLength
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Razão Social requerido")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c(
              "div",
              {
                staticClass: "form-group col-6",
                class: { "form-group--error": _vm.$v.trade_name.$error }
              },
              [
                _c("label", { attrs: { for: "trade_name" } }, [
                  _vm._v("Nome fantasia")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.trade_name.$model,
                      expression: "$v.trade_name.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "trade_name",
                    placeholder: "Nome fantasia"
                  },
                  domProps: { value: _vm.$v.trade_name.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.trade_name,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.trade_name.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.trade_name.required
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Nome Fantasia requerido")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form-group col-6",
                class: { "form-group--error": _vm.$v.state_registration.$error }
              },
              [
                _c("label", { attrs: { for: "state_registration" } }, [
                  _vm._v("Inscrição Estadual")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.state_registration.$model,
                      expression: "$v.state_registration.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "state_registration",
                    placeholder: "Inscrição Estadual"
                  },
                  domProps: { value: _vm.$v.state_registration.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.state_registration,
                        "$model",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "submit", disabled: _vm.submitted }
            },
            [_vm._v("Salvar")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Edit.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Edit.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=afb4360c&scoped=true& */ "./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "afb4360c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/customers/legal/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=afb4360c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/legal/views/Edit.vue?vue&type=template&id=afb4360c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_afb4360c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);