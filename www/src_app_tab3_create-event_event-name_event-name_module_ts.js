(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab3_create-event_event-name_event-name_module_ts"],{

/***/ 9117:
/*!***************************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-name-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventNamePageRoutingModule": () => (/* binding */ EventNamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _event_name_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-name.page */ 6136);




const routes = [
    {
        path: '',
        component: _event_name_page__WEBPACK_IMPORTED_MODULE_0__.EventNamePage
    },
    {
        path: 'event-description',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_create-event_event-name_event-description_event-description_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./event-description/event-description.module */ 1092)).then(m => m.EventDescriptionPageModule)
    }
];
let EventNamePageRoutingModule = class EventNamePageRoutingModule {
};
EventNamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventNamePageRoutingModule);



/***/ }),

/***/ 6088:
/*!*******************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-name.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventNamePageModule": () => (/* binding */ EventNamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _event_name_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-name-routing.module */ 9117);
/* harmony import */ var _event_name_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-name.page */ 6136);







let EventNamePageModule = class EventNamePageModule {
};
EventNamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventNamePageRoutingModule
        ],
        declarations: [_event_name_page__WEBPACK_IMPORTED_MODULE_1__.EventNamePage]
    })
], EventNamePageModule);



/***/ }),

/***/ 6136:
/*!*****************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-name.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventNamePage": () => (/* binding */ EventNamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_event_name_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./event-name.page.html */ 6683);
/* harmony import */ var _event_name_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-name.page.scss */ 290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EventNamePage = class EventNamePage {
    constructor() { }
    ngOnInit() {
    }
};
EventNamePage.ctorParameters = () => [];
EventNamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-event-name',
        template: _raw_loader_event_name_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_event_name_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EventNamePage);



/***/ }),

/***/ 290:
/*!*******************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-name.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW5hbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJldmVudC1uYW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwJTtcbiAgICAtLXBhZGRpbmctZW5kOiAxMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNjQ3M0ZGIDAlLCAjNDAzZGRjIDEwMCUpO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ 6683:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/create-event/event-name/event-name.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Event Name</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button [routerLink]=\"['/tabs/tab3/create-event/event-name/event-description']\" color=\"warning\" expand=\"block\">Next</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_create-event_event-name_event-name_module_ts.js.map