(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-request"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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



var resetService = _services_reset__WEBPACK_IMPORTED_MODULE_2__["default"].init();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ResetPassword",
  components: {
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      email: '',
      submitted: false,
      error: false,
      loading: false
    };
  },
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
    }
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.$v.$touch();
      this.submitted = true;

      if (!this.$v.$invalid) {
        resetService.store({
          email: this.email
        }).then(function () {
          _this.email = '';
          _this.submitted = false;

          _this.$store.dispatch('setAlert', {
            type: 'success',
            message: 'You will receive a password reset link in your email.',
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                  attrs: { id: "email", placeholder: "Email", type: "email" },
                  domProps: { value: _vm.$v.email.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.email,
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
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-block mb-4",
                attrs: { disabled: _vm.submitted, type: "submit" }
              },
              [_vm._v("Enviar")]
            ),
            _vm._v(" "),
            this.loading
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

/***/ "./resources/js/views/ResetPassword/Request.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/ResetPassword/Request.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request.vue?vue&type=template&id=0b10a9db&scoped=true& */ "./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true&");
/* harmony import */ var _Request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request.vue?vue&type=script&lang=js& */ "./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b10a9db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ResetPassword/Request.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Request.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Request.vue?vue&type=template&id=0b10a9db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ResetPassword/Request.vue?vue&type=template&id=0b10a9db&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Request_vue_vue_type_template_id_0b10a9db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);