(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_forgot-password_check-email_check-email_module_ts"],{

/***/ 303:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/check-email-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPageRoutingModule": () => (/* binding */ CheckEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _check_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-email.page */ 8881);




const routes = [
    {
        path: '',
        component: _check_email_page__WEBPACK_IMPORTED_MODULE_0__.CheckEmailPage
    },
    {
        path: 'create-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot-password_check-email_create-password_create-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-password/create-password.module */ 3916)).then(m => m.CreatePasswordPageModule)
    }
];
let CheckEmailPageRoutingModule = class CheckEmailPageRoutingModule {
};
CheckEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckEmailPageRoutingModule);



/***/ }),

/***/ 1067:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/check-email.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPageModule": () => (/* binding */ CheckEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _check_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-email-routing.module */ 303);
/* harmony import */ var _check_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email.page */ 8881);







let CheckEmailPageModule = class CheckEmailPageModule {
};
CheckEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckEmailPageRoutingModule
        ],
        declarations: [_check_email_page__WEBPACK_IMPORTED_MODULE_1__.CheckEmailPage]
    })
], CheckEmailPageModule);



/***/ }),

/***/ 8881:
/*!***********************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/check-email.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPage": () => (/* binding */ CheckEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_check_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-email.page.html */ 4408);
/* harmony import */ var _check_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email.page.scss */ 6006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CheckEmailPage = class CheckEmailPage {
    constructor() { }
    ngOnInit() {
    }
};
CheckEmailPage.ctorParameters = () => [];
CheckEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-check-email',
        template: _raw_loader_check_email_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_email_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckEmailPage);



/***/ }),

/***/ 6006:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/check-email.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 20%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-input {\n  --background: white;\n  margin-bottom: 20px;\n  border-radius: 15px;\n  height: 42px;\n  border-style: none;\n  color: #403ddc;\n}\n\nion-button {\n  --color: white;\n  --background:#9BA5F8;\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImNoZWNrLWVtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMCU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMCU7XG4gICAgLS1wYWRkaW5nLWVuZDogMTAlO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzY0NzNGRiAwJSwgIzQwM2RkYyAxMDAlKTtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA0MnB4OztcbiAgICBib3JkZXItc3R5bGU6bm9uZTtcbiAgICBjb2xvcjogIzQwM2RkYztcblxufVxuaW9uLWJ1dHRvbntcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6IzlCQTVGODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ 4408:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/check-email/check-email.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Check your email</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Check your email</h1>\n  <p>We have sent a password recovery instruction to your email</p>\n  <div class=\"sendbutton\">\n    <ion-button expand=\"block\"[routerLink]=\"['/forgot-password/check-email/create-password']\" >OK</ion-button>\n  </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_check-email_check-email_module_ts.js.map