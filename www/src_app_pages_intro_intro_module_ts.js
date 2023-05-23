(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_intro_intro_module_ts"],{

/***/ 1888:
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 1800);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 8557:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 1888);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 1800);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 1800:
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.page.html */ 2698);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 7282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/intro.guard */ 6893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 6628);








let IntroPage = class IntroPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({ key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY, value: 'true' });
            this.router.navigateByUrl('/login', { replaceUrl: true });
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IntroPage);



/***/ }),

/***/ 7282:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #0081ca;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background-active: #fff;\n  --bullet-background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDgxY2E7XG59XG4gXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzAwMDtcbn0iXX0= */");

/***/ }),

/***/ 2698:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-slides pager=\"true\">\n \n    <!-- Slide 1 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://i1.wp.com/ionicacademy.com/wp-content/uploads/2019/10/async-code-course.png\">\n        <h1>Hey there!</h1>\n        <p>This is an epic app because...</p>\n        <ion-button (click)=\"next()\" fill=\"outline\" color=\"light\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n \n    <!-- Slide 2 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://i1.wp.com/ionicacademy.com/wp-content/uploads/2020/06/ionic-everywhere-course.png\">\n        <h1>It's Ionic!</h1>\n        <p>... it shows all the basics you need!</p>\n        <ion-button (click)=\"start()\" fill=\"outline\" color=\"light\">Start</ion-button>\n      </ion-text>\n    </ion-slide>\n \n  </ion-slides>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_intro_intro_module_ts.js.map