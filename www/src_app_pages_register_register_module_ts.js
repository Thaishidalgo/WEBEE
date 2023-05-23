(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4315);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 3436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 3436:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 60px;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --padding-bottom: 60px;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-input {\n  --background: white;\n  margin: 25px;\n  border-radius: 15px;\n  height: 42px;\n  border-style: none;\n  color: #403ddc;\n  font-size: 14px;\n}\n\nh1 {\n  font-family: \"Signika-Bold\";\n  font-size: 32px;\n  text-align: center;\n}\n\n.instructions {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 24px;\n  margin-bottom: 34px;\n}\n\n.sendbutton {\n  text-align: center;\n}\n\nion-button {\n  --color: white;\n  --background:#9BA5F8;\n  --border-radius: 50px;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.tick {\n  padding-top: 20px;\n}\n\np.question {\n  text-align: center;\n}\n\nbutton {\n  color: #F7D442;\n  background-color: transparent;\n}\n\n.buttoncenter {\n  text-align: center;\n  margin-top: 47px;\n}\n\nion-checkbox {\n  --border-radius: 50px;\n  --border-color: #F7D442;\n  --background-checked: #F7D442;\n  --border-color-checked: #F7D442;\n  --checkmark-color: #9BA5F8;\n  --size: 19px;\n}\n\np {\n  text-align: left;\n  font-size: 12px;\n  color: #EBEFFF;\n}\n\n.flex {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0RBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiA2MHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwJTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzY0NzNGRiAwJSwgIzQwM2RkYyAxMDAlKTtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOjI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXN0eWxlOm5vbmU7XG4gICAgY29sb3I6ICM0MDNkZGM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oMXtcbiAgICBmb250LWZhbWlseTogXCJTaWduaWthLUJvbGRcIjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5zdHJ1Y3Rpb25ze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xufVxuXG4uc2VuZGJ1dHRvbntcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1idXR0b257XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiM5QkE1Rjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aWNre1xuICAgIHBhZGRpbmctdG9wOiAyMHB4Oztcbn1cblxucC5xdWVzdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gICAgY29sb3I6ICNGN0Q0NDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b25jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQ3cHg7XG59XG5cbmlvbi1jaGVja2JveHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICNGN0Q0NDI7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGN0Q0NDI7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0Y3RDQ0MjtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzlCQTVGODtcbiAgICAtLXNpemU6IDE5cHg7XG5cbn1cblxucHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRUJFRkZGXG59XG5cbi5mbGV4e1xuICAgIGRpc3BsYXk6ZmxleFxufSJdfQ== */");

/***/ }),

/***/ 4315:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>SIGN UP</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>SIGN UP</h1>\n  <p class=\"instructions\">Please enter the details below to continue</p>\n  <IonItem>\n    <ion-input placeholder=\"Name\"></ion-input>\n  </IonItem>\n  <IonItem>\n    <ion-input placeholder=\"Date of birth\"></ion-input>\n  </IonItem>\n  <IonItem>\n    <ion-input placeholder=\"Email\"></ion-input>\n  </IonItem>\n  <IonItem>\n    <ion-input placeholder=\"Username\"></ion-input>\n  </IonItem>\n  <IonItem>\n    <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n  </IonItem>\n  <IonItem>\n    <ion-input type=\"password\" placeholder=\"Confirm password\"></ion-input>\n  </IonItem>\n <ion-grid>\n   <ion-row>\n     <ion-col class=\"tick\" size=\"1\">\n      <ion-checkbox></ion-checkbox> \n     </ion-col>\n     <ion-col class=\"textcheckbox\"><p>By signign up you agree to our terms and <b>conditions</b> &<br> <b>privacy policy</b></p></ion-col>\n    </ion-row>\n    <ion-row>\n     <ion-col class=\"tick\" size=\"1\">\n      <ion-checkbox></ion-checkbox>\n      </ion-col>\n      <ion-col class=\"textcheckbox\"><p>Allow acces to the camera, contacts and location</p></ion-col>\n   </ion-row>\n  \n </ion-grid>\n  <div class=\"buttoncenter\">\n     <ion-button shape=\"round\" expand=\"block\" [routerLink]=\"['/login']\" >Sign up</ion-button>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map