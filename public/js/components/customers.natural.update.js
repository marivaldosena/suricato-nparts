(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers.natural.update"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Alert/Alert */ "./resources/js/components/Alert/Alert.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_natural_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/natural_customer */ "./resources/js/services/natural_customer.js");
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
//
//
//
//
//




var naturalCustomerService = _services_natural_customer__WEBPACK_IMPORTED_MODULE_3__["default"].init();

var cpf = function cpf(value) {
  return /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(value);
};

var date = function date(value) {
  return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)((19)[6-9][0-9])$/.test(value);
};

var gender = function gender(value) {
  if (value) {
    return /^(M|F)$/.test(value);
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Edit",
  components: {
    Alert: _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      users: [],
      username: '',
      id: 0,
      cpf: '',
      rg: '',
      birthday: '',
      gender: '',
      submitted: false,
      error: false,
      isLoading: false
    };
  },
  validations: {
    username: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    cpf: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(14),
      cpf: cpf
    },
    rg: {
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(14)
    },
    birthday: {
      date: date
    },
    gender: {
      gender: gender
    }
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    naturalCustomerService.show(id).then(function (res) {
      var _res$data = res.data,
          user = _res$data.user,
          natural_person_info = _res$data.natural_person_info;
      _this.username = user;
      _this.id = res.data.id;
      _this.cpf = natural_person_info.cpf;
      _this.rg = natural_person_info.rg;
      _this.birthday = _this.literalBirthday(natural_person_info.birthday);
      _this.gender = natural_person_info.gender;
    });
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers(name) {
      var _this2 = this;

      this.isLoading = true;
      naturalCustomerService.unusedCustomerUsers(2, name).then(function (res) {
        _this2.isLoading = false;
        _this2.users = res.data;
      });
    },
    literalBirthday: function literalBirthday(date) {
      return this.$moment(date).format("DD/MM/YYYY");
    },
    handleSubmit: function handleSubmit() {
      var _this3 = this;

      this.$v.$touch();
      this.submitted = true;

      if (!this.$v.$invalid) {
        var _cpf = this.cpf.replace(/\./g, '').replace(/\-/g, ''),
            birthday = this.$moment(this.birthday, 'DD/MM/YYYY').format("YYYY-MM-DD");

        naturalCustomerService.update({
          id: this.id,
          cpf: _cpf,
          rg: this.rg,
          birthday: birthday,
          gender: this.gender,
          user_id: this.username.id
        }).then(function (res) {
          _this3.submitted = false;

          _this3.$store.dispatch('setAlert', {
            type: 'success',
            message: 'Cliente alterado.',
            show: true
          }).then(function () {});

          _this3.$router.push('/admin/customers/natural');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                class: { "form-group--error": _vm.$v.cpf.$error }
              },
              [
                _c("label", { attrs: { for: "cpf" } }, [_vm._v("Cpf")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.cpf.$model,
                      expression: "$v.cpf.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "cpf",
                    placeholder: "xxx.xxx.xxx-xx"
                  },
                  domProps: { value: _vm.$v.cpf.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.$v.cpf, "$model", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.cpf.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.cpf.required
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Cpf requerido")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.cpf.maxLength
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Cpf inválido")
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
                class: { "form-group--error": _vm.$v.rg.$error }
              },
              [
                _c("label", { attrs: { for: "rg" } }, [_vm._v("Rg")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.rg.$model,
                      expression: "$v.rg.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "rg",
                    placeholder: "xx.xxx.xxx-x"
                  },
                  domProps: { value: _vm.$v.rg.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.$v.rg, "$model", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.rg.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.rg.maxLength
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Rg inválido")
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
                class: { "form-group--error": _vm.$v.birthday.$error }
              },
              [
                _c("label", { attrs: { for: "birthday" } }, [
                  _vm._v("Data nascimento")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.birthday.$model,
                      expression: "$v.birthday.$model",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "birthday",
                    placeholder: "dd/mm/aaaa"
                  },
                  domProps: { value: _vm.$v.birthday.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.birthday,
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
                _vm.$v.birthday.$error
                  ? _c("div", { staticClass: "error" }, [
                      !_vm.$v.birthday.required
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Data de nascimento requerida")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.birthday.maxLength
                        ? _c("div", { staticClass: "error-msg" }, [
                            _vm._v("Data de nascimento inválida")
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
                class: { "form-group--error": _vm.$v.gender.$error }
              },
              [
                _c("label", { attrs: { for: "gender" } }, [_vm._v("Sexo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.$v.gender.$model,
                        expression: "$v.gender.$model",
                        modifiers: { trim: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "gender" },
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
                          _vm.$v.gender,
                          "$model",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", selected: "" } }, [
                      _vm._v("Indefinido")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "M" } }, [
                      _vm._v("Masculino")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "F" } }, [
                      _vm._v("Feminino")
                    ])
                  ]
                )
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

/***/ "./resources/js/views/admin/customers/natural/views/Edit.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/customers/natural/views/Edit.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2d35fd4a&scoped=true& */ "./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d35fd4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/customers/natural/views/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2d35fd4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/customers/natural/views/Edit.vue?vue&type=template&id=2d35fd4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2d35fd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);