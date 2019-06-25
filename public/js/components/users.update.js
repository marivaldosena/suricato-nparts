(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users.update"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/users */ "./resources/js/services/users.js");
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



var usersService = _services_users__WEBPACK_IMPORTED_MODULE_2__["default"].init();

var passwordRegex = function passwordRegex(value) {
  return /^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/.test(value);
};

var checkType = function checkType(value) {
  return /^[1-3]{1}$/.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  components: {
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      id: 0,
      name: '',
      email: '',
      type: 0,
      submitted: false,
      error: false
    };
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
    },
    type: {
      checkType: checkType
    }
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    usersService.show(id).then(function (res) {
      var user = res.data;
      _this.id = user.id;
      _this.name = user.name;
      _this.email = user.email;
      _this.type = user.type;
    }, function (err) {});
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      this.$v.$touch();
      this.submitted = true;

      if (!this.$v.$invalid) {
        usersService.update({
          id: this.id,
          name: this.name,
          email: this.email,
          type: this.type
        }).then(function (res) {
          _this2.submitted = false;

          _this2.$store.dispatch('setAlert', {
            type: 'success',
            message: 'Usuário alterado.',
            show: true
          }).then(function () {});

          _this2.$router.push('/admin/users');
        }, function (err) {
          _this2.submitted = false;
        });
      } else {
        this.submitted = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
              class: { "form-group--error": _vm.$v.name.$error }
            },
            [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.$v.name.$model,
                    expression: "$v.name.$model",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "name", placeholder: "Name" },
                domProps: { value: _vm.$v.name.$model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.$v.name, "$model", $event.target.value.trim())
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              }),
              _vm._v(" "),
              _vm.$v.name.$error
                ? _c("div", { staticClass: "error" }, [
                    !_vm.$v.name.required
                      ? _c("div", { staticClass: "error-msg" }, [
                          _vm._v("Nome requerido")
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
              staticClass: "form-group",
              class: { "form-group--error": _vm.$v.email.$error }
            },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.$v.email.$model,
                    expression: "$v.email.$model",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email", id: "email", placeholder: "Email" },
                domProps: { value: _vm.$v.email.$model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.$v.email, "$model", $event.target.value.trim())
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              }),
              _vm._v(" "),
              _vm.$v.email.$error
                ? _c("div", { staticClass: "error" }, [
                    !_vm.$v.email.required
                      ? _c("div", { staticClass: "error-msg" }, [
                          _vm._v("Email requerido")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.email.email
                      ? _c("div", { staticClass: "error-msg" }, [
                          _vm._v("Email inválido")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c(
              "div",
              {
                staticClass: "form-group col-6",
                class: { "form-group--error": _vm.$v.type.$error }
              },
              [
                _c("label", { attrs: { for: "type" } }, [
                  _vm._v("Selecione o tipo")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.$v.type.$model,
                        expression: "$v.type.$model",
                        modifiers: { trim: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.$v.type,
                          "$model",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Selecione")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Administrador")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Pessoa Física")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Pessoa Jurídica")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.$v.type.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.type.checkType
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Selecione o tipo")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
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

/***/ "./resources/js/views/admin/users/views/Edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/users/views/Edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5e603911&scoped=true& */ "./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e603911",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/users/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5e603911&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users/views/Edit.vue?vue&type=template&id=5e603911&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e603911_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);