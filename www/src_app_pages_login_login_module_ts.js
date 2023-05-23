(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/authentication.service */ 7053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








let LoginPage = class LoginPage {
    constructor(fb, authService, alertController, router, loadingController) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            username: ['hatzu4@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['u6p70iL6mpKS', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.login(this.credentials.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.router.navigateByUrl('/tabs', { replaceUrl: true });
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log('Not working', res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Login failed',
                    message: res.error.error,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    get username() {
        return this.credentials.get('username');
    }
    get password() {
        return this.credentials.get('password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 60px;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --padding-bottom: 60px;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nh1 {\n  font-family: \"Signika-Bold\";\n  font-size: 32px;\n}\n\np {\n  font-size: 16px;\n}\n\nion-input {\n  --background: white;\n  margin-bottom: 20px;\n  border-radius: 15px;\n  height: 42px;\n  border-style: none;\n  color: #6473FF;\n}\n\nion-button {\n  color: white;\n  background-color: #9AA4FF;\n  border-radius: 30px;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\nion-checkbox {\n  --border-radius: 50px;\n  --background-checked: #F7D442;\n  --border-color-checked: #F7D442;\n  --checkmark-color: black;\n  --size: 19px;\n}\n\np, h1 {\n  text-align: center;\n  margin: 25px;\n}\n\n.imatge {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.email {\n  margin-top: 60px;\n  margin-bottom: 25px;\n}\n\n.forgotpassword {\n  text-align: right;\n  margin-bottom: 32px;\n}\n\n.login {\n  background-color: #F7D442;\n  margin-bottom: 110px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\nbutton {\n  color: #9AA4FF;\n  background-color: transparent;\n}\n\n.input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0RBQUE7QUFDSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogNjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwJTtcbiAgICAtLXBhZGRpbmctZW5kOiAxMCU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM2NDczRkYgMCUsICM0MDNkZGMgMTAwJSk7XG59XG5oMXtcbiAgICBmb250LWZhbWlseTogXCJTaWduaWthLUJvbGRcIjtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7IFxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogNDJweDs7XG4gICAgYm9yZGVyLXN0eWxlOm5vbmU7XG4gICAgY29sb3I6ICM2NDczRkY7XG5cbn1cblxuaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlBQTRGRjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY2hlY2tib3h7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRjdENDQyO1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNGN0Q0NDI7XG4gICAgLS1jaGVja21hcmstY29sb3I6IGJsYWNrO1xuICAgIC0tc2l6ZTogMTlweDtcbn1cblxuXG5wLCBoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyNXB4O1xufVxuLmltYXRnZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5lbWFpbHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3Jnb3RwYXNzd29yZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLmxvZ2lue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Q0NDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiAjOUFBNEZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZXJyb3JzIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59Il19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <div class=\"imatge\">\n    <img src=\"../assets/logo_webee.png\" alt=\"logotip\" width=\"61px\" height=\"75px\">\n  </div>\n  \n  <h1>WELCOME!</h1>\n  <p>Login to continue</p>\n  <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\n   \n        <ion-input class=\"email\" type=\"email\" placeholder=\"Email\" formControlName=\"username\"></ion-input>\n    \n      <div *ngIf=\"(username.dirty || username.touched) && username.errors\" class=\"errors\">\n        <span *ngIf=\"username.errors?.required\">Email is required</span>\n        <span *ngIf=\"username.errors?.email\">Email is invalid</span>\n      </div>\n  \n        <ion-input class=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      \n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n      </div>\n      <div class=\"forgotpassword\">\n        <p>Forgot password?<button type=\"button\"  [routerLink]=\"['/forgot-password']\">Click here!\n        </button></p>\n      </div>\n    <ion-button class=\"login\" type=\"submit\" expand=\"block\" fill=\"clear\" [disabled]=\"!credentials.valid\">Log in</ion-button>\n\n   \n\n    <p>Don't have an account?</p>\n    <ion-button class=\"signup\" type=\"button\" expand=\"block\" fill=\"clear\" [routerLink]=\"['/register']\">Sign up\n    </ion-button>\n \n  \n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map