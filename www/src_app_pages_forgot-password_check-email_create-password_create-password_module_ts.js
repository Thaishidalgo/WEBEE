(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_forgot-password_check-email_create-password_create-password_module_ts"],{

/***/ 4906:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/create-password/create-password-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordPageRoutingModule": () => (/* binding */ CreatePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-password.page */ 4590);




const routes = [
    {
        path: '',
        component: _create_password_page__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordPage
    }
];
let CreatePasswordPageRoutingModule = class CreatePasswordPageRoutingModule {
};
CreatePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatePasswordPageRoutingModule);



/***/ }),

/***/ 3916:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/create-password/create-password.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordPageModule": () => (/* binding */ CreatePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-password-routing.module */ 4906);
/* harmony import */ var _create_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-password.page */ 4590);







let CreatePasswordPageModule = class CreatePasswordPageModule {
};
CreatePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordPageRoutingModule
        ],
        declarations: [_create_password_page__WEBPACK_IMPORTED_MODULE_1__.CreatePasswordPage]
    })
], CreatePasswordPageModule);



/***/ }),

/***/ 4590:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/create-password/create-password.page.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordPage": () => (/* binding */ CreatePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-password.page.html */ 3602);
/* harmony import */ var _create_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-password.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CreatePasswordPage = class CreatePasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
CreatePasswordPage.ctorParameters = () => [];
CreatePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-password',
        template: _raw_loader_create_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreatePasswordPage);



/***/ }),

/***/ 3583:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/forgot-password/check-email/create-password/create-password.page.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 20%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-input {\n  --background: white;\n  margin-bottom: 20px;\n  border-radius: 15px;\n  height: 42px;\n  border-style: none;\n  color: #403ddc;\n}\n\n.sendbutton {\n  text-align: center;\n}\n\nion-button {\n  --color: white;\n  --background:#9BA5F8;\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0csa0JBQUE7QUFDSDs7QUFDQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoiY3JlYXRlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMCU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMCU7XG4gICAgLS1wYWRkaW5nLWVuZDogMTAlO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzY0NzNGRiAwJSwgIzQwM2RkYyAxMDAlKTtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA0MnB4OztcbiAgICBib3JkZXItc3R5bGU6bm9uZTtcbiAgICBjb2xvcjogIzQwM2RkYztcblxufVxuLnNlbmRidXR0b257XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tYnV0dG9ue1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDojOUJBNUY4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ 3602:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/check-email/create-password/create-password.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Create new password</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Create new password</h1>\n  <p>Your new password must be different from previously used passwords</p>\n  <ion-input type=\"password\" placeholder=\"Enter password\"></ion-input>\n  <ion-input type=\"password\" placeholder=\"Repeat password\"></ion-input>\n  <div class=\"sendbutton\">\n    <ion-button expand=\"block\" [routerLink]=\"['/login']\" >Create</ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_check-email_create-password_create-password_module_ts.js.map