(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab3_create-event_event-name_event-description_event-date_event-music_event-music_module_ts"],{

/***/ 6229:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-description/event-date/event-music/event-music-routing.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventMusicPageRoutingModule": () => (/* binding */ EventMusicPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _event_music_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-music.page */ 58);




const routes = [
    {
        path: '',
        component: _event_music_page__WEBPACK_IMPORTED_MODULE_0__.EventMusicPage
    },
    {
        path: 'event-filters',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_create-event_event-name_event-description_event-date_event-music_event-filters_e-4ffbf4").then(__webpack_require__.bind(__webpack_require__, /*! ./event-filters/event-filters.module */ 2583)).then(m => m.EventFiltersPageModule)
    }
];
let EventMusicPageRoutingModule = class EventMusicPageRoutingModule {
};
EventMusicPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventMusicPageRoutingModule);



/***/ }),

/***/ 4733:
/*!*************************************************************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-description/event-date/event-music/event-music.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventMusicPageModule": () => (/* binding */ EventMusicPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _event_music_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-music-routing.module */ 6229);
/* harmony import */ var _event_music_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-music.page */ 58);







let EventMusicPageModule = class EventMusicPageModule {
};
EventMusicPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_music_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventMusicPageRoutingModule
        ],
        declarations: [_event_music_page__WEBPACK_IMPORTED_MODULE_1__.EventMusicPage]
    })
], EventMusicPageModule);



/***/ }),

/***/ 58:
/*!***********************************************************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-description/event-date/event-music/event-music.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventMusicPage": () => (/* binding */ EventMusicPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_event_music_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./event-music.page.html */ 9052);
/* harmony import */ var _event_music_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-music.page.scss */ 6988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EventMusicPage = class EventMusicPage {
    constructor() { }
    ngOnInit() {
    }
};
EventMusicPage.ctorParameters = () => [];
EventMusicPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-event-music',
        template: _raw_loader_event_music_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_event_music_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EventMusicPage);



/***/ }),

/***/ 6988:
/*!*************************************************************************************************************!*\
  !*** ./src/app/tab3/create-event/event-name/event-description/event-date/event-music/event-music.page.scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-button {\n  --border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW11c2ljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiZXZlbnQtbXVzaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwJTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM2NDczRkYgMCUsICM0MDNkZGMgMTAwJSk7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ 9052:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/create-event/event-name/event-description/event-date/event-music/event-music.page.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>eventMusic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button [routerLink]=\"['/tabs/tab3/create-event/event-name/event-description/event-date/event-music/event-filters']\" color=\"warning\" expand=\"block\">Next</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_create-event_event-name_event-description_event-date_event-music_event-music_module_ts.js.map