(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"],{

/***/ 6177:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2032);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    },
    {
        path: 'check-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot-password_check-email_check-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./check-email/check-email.module */ 1067)).then(m => m.CheckEmailPageModule)
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 5638:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 6177);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2032);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 3399);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ForgotPasswordPage = class ForgotPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordPage.ctorParameters = () => [];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 287:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 20%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-input {\n  --background: white;\n  margin-bottom: 20px;\n  border-radius: 15px;\n  height: 42px;\n  border-style: none;\n  color: #403ddc;\n}\n\nh1 {\n  text-align: center;\n  font-family: \"Signika-Bold\";\n  font-size: 32px;\n}\n\n.abellaforgot {\n  text-align: center;\n}\n\n.sendbutton {\n  text-align: center;\n}\n\nion-button {\n  --color: white;\n  --background:#9BA5F8;\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDRyxrQkFBQTtBQUdIOztBQURBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFJSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDIwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwJTtcbiAgICAtLXBhZGRpbmctZW5kOiAxMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNjQ3M0ZGIDAlLCAjNDAzZGRjIDEwMCUpO1xufVxuXG5pb24taW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDQycHg7O1xuICAgIGJvcmRlci1zdHlsZTpub25lO1xuICAgIGNvbG9yOiAjNDAzZGRjO1xuXG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTaWduaWthLUJvbGRcIjtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG4uYWJlbGxhZm9yZ290e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZW5kYnV0dG9ue1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6IzlCQTVGODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ 3399:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Forgot your password?</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>FORGOT YOUR<br> PASSWORD?</h1>\n  <div class=\"abellaforgot\">\n    <img src=\"../assets/abellaforgot.png\" alt=\"abellaforgot\" width=\"242px\" height=\"175px\">\n  </div>\n  <p>Enter your registered email below to receive password reset instruction</p>\n  <ion-input placeholder=\"Enter mail\"></ion-input>\n  <div class=\"sendbutton\">\n    <ion-button expand=\"block\"[routerLink]=\"['/forgot-password/check-email']\">Send</ion-button>\n  </div>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts.js.map