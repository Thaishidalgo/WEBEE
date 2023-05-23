(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab2_profile_profile_module_ts"],{

/***/ 7600:
/*!********************************************************!*\
  !*** ./src/app/tab2/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 8528);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab2_profile_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 3200)).then(m => m.SettingsPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 428:
/*!************************************************!*\
  !*** ./src/app/tab2/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7600);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 8528);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 8528:
/*!**********************************************!*\
  !*** ./src/app/tab2/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 5252);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 1130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);






let ProfilePage = class ProfilePage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 1130:
/*!************************************************!*\
  !*** ./src/app/tab2/profile/profile.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n\nion-input {\n  background-color: white;\n  border-radius: 15px;\n  color: blue;\n  margin: 5px;\n  margin-bottom: 25px;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-fab-button {\n  --background: transparent;\n}\n\n.imatge {\n  text-align: center;\n  margin-top: 25px;\n}\n\nh1, h2, p {\n  text-align: center;\n}\n\nh1 {\n  font-family: \"Signika-Bold\";\n}\n\nion-button {\n  --background: #F7D442;\n}\n\n.buttoncenter {\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7QUFNSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xufVxuaW9uLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pbWF0Z2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7O1xufVxuaDEsIGgyLCBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDF7XG4gICAgZm9udC1mYW1pbHk6ICdTaWduaWthLUJvbGQnO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Q0NDI7XG59XG4uYnV0dG9uY2VudGVye1xuICAgIHBhZGRpbmctYm90dG9tOjEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 5252:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/profile/profile.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>PROFILE</h1>\n  <div class=\"imatge\">\n    <img src=\"../assets/foto-lauren.png\" alt=\"logotip\" width=\"30%\">\n  </div>\n \n  <h2>Name Surname</h2>\n  <p>Animator</p>\n  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" (click)=\"logout()\">\n    <ion-fab-button>\n      <ion-icon name=\"log-out-outline\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/tabs/tab2/profile/settings']\">\n    <ion-fab-button>\n      <ion-icon name=\"settings-outline\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n    \n  <IonItem>\n      <IonLabel position=\"stacked\">Name</IonLabel>\n      <ion-input placeholder=\"Enter name\"></ion-input>\n    </IonItem>\n    <IonItem>\n      <IonLabel position=\"stacked\">Email</IonLabel>\n      <ion-input placeholder=\"Enter email\"></ion-input>\n    </IonItem>\n    <IonItem>\n      <IonLabel position=\"stacked\">Date of birth</IonLabel>\n      <ion-input placeholder=\"Enter username\"></ion-input>\n    </IonItem>\n    <IonItem>\n      <IonLabel position=\"stacked\">Studies</IonLabel>\n      <ion-input type=\"password\" placeholder=\"Enter studies\"></ion-input>\n    </IonItem>\n    <IonItem>\n      <IonLabel position=\"stacked\">Gender</IonLabel>\n      <ion-input type=\"password\" placeholder=\"Select gender\"></ion-input>\n    </IonItem>\n    <p><ion-checkbox></ion-checkbox> Facebook</p>\n    <p><ion-checkbox></ion-checkbox> Instagram</p>\n    <div class=\"buttoncenter\">\n       <ion-button shape=\"round\" expand=\"block\" [routerLink]=\"['/tabs/tab2']\" >SAVE CHANGES</ion-button>\n      </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_profile_profile_module_ts.js.map