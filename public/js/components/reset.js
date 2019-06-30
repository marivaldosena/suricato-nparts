(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
/* harmony import */ var _services_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reset */ "./resources/js/services/reset.js");
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



var resetService = _services_reset__WEBPACK_IMPORTED_MODULE_2__["default"].init();

var passwordRegex = function passwordRegex(value) {
  return /^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/.test(value);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create",
  components: {
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      password: '',
      password_confirmation: '',
      submitted: false,
      error: false,
      token: this.$route.params.token
    };
  },
  validations: {
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      passwordRegex: passwordRegex
    },
    password_confirmation: {
      sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["sameAs"])('password')
    }
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.$v.$touch();
      this.submitted = true;

      if (!this.$v.invalid) {
        resetService.update({
          id: this.token,
          password: this.password,
          password_confirmation: this.password_confirmation
        }).then(function (res) {
          _this.$store.dispatch('setAlert', {
            type: 'success',
            message: 'You created a new password. Please, login',
            show: true
          }).then(function () {});

          _this.$router.push('/login');
        }, function (err) {
          _this.submitted = false;
        });
      } else {
        this.submitted = false;
      }
    }
  },
  created: function created() {
    var _this2 = this;

    resetService.show({
      id: this.token
    }).then(function (res) {}, function (err) {
      _this2.$router.push('/login');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row justify-content-center align-items-center h-100" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c(
          "form",
          {
            attrs: { id: "login", method: "post", novalidate: "" },
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
                class: { "form-group--error": _vm.$v.password.$error }
              },
              [
                _c("label", { attrs: { for: "password" } }, [_vm._v("Senha")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.password.$model,
                      expression: "$v.password.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password",
                    placeholder: "Senha"
                  },
                  domProps: { value: _vm.$v.password.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.password,
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
                _vm.$v.password.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.password.required
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Senha requerida")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.password.passwordRegex
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Senha em formato incorreto")
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
                class: {
                  "form-group--error": _vm.$v.password_confirmation.$error
                }
              },
              [
                _c("label", { attrs: { for: "password_confirmation" } }, [
                  _vm._v("Confirme a Senha")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.password_confirmation.$model,
                      expression: "$v.password_confirmation.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password_confirmation",
                    placeholder: "Confirme a Senha"
                  },
                  domProps: { value: _vm.$v.password_confirmation.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.password_confirmation,
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
                _vm.$v.password_confirmation.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.password_confirmation.sameAsPassword
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("A senha deve ser igual")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-block mb-4",
                attrs: { type: "submit", disabled: _vm.submitted }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            this.submitted
              ? _c("p", { staticClass: "loading" }, [_vm._v("Aguarde...")])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("router-link", { attrs: { to: "/login" } }, [
                  _vm._v("Voltar")
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("div", { staticClass: "row justify-content-end" }, [
        _c("h1", { staticClass: "logo logo-alfred" }, [_vm._v("Suricato")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ResetPassword/Create.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/ResetPassword/Create.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=476f3ae0&scoped=true& */ "./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "476f3ae0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ResetPassword/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=476f3ae0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Create.vue?vue&type=template&id=476f3ae0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_476f3ae0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);