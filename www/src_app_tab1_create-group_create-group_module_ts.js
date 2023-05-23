(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab1_create-group_create-group_module_ts"],{

/***/ 4278:
/*!******************************************************************!*\
  !*** ./src/app/tab1/create-group/create-group-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGroupPageRoutingModule": () => (/* binding */ CreateGroupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_group_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-group.page */ 9092);




const routes = [
    {
        path: '',
        component: _create_group_page__WEBPACK_IMPORTED_MODULE_0__.CreateGroupPage
    },
    {
        path: 'group-people',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab1_create-group_group-people_group-people_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./group-people/group-people.module */ 9802)).then(m => m.GroupPeoplePageModule)
    },
];
let CreateGroupPageRoutingModule = class CreateGroupPageRoutingModule {
};
CreateGroupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateGroupPageRoutingModule);



/***/ }),

/***/ 2652:
/*!**********************************************************!*\
  !*** ./src/app/tab1/create-group/create-group.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGroupPageModule": () => (/* binding */ CreateGroupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-group-routing.module */ 4278);
/* harmony import */ var _create_group_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-group.page */ 9092);







let CreateGroupPageModule = class CreateGroupPageModule {
};
CreateGroupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateGroupPageRoutingModule
        ],
        declarations: [_create_group_page__WEBPACK_IMPORTED_MODULE_1__.CreateGroupPage]
    })
], CreateGroupPageModule);



/***/ }),

/***/ 9092:
/*!********************************************************!*\
  !*** ./src/app/tab1/create-group/create-group.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGroupPage": () => (/* binding */ CreateGroupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_group_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-group.page.html */ 8915);
/* harmony import */ var _create_group_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-group.page.scss */ 8731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CreateGroupPage = class CreateGroupPage {
    constructor() {
        this.step = 0;
        this.group = {
            name: ''
        };
    }
    ngOnInit() {
    }
    nextStep() {
        this.step++;
        console.log(this.group);
    }
};
CreateGroupPage.ctorParameters = () => [];
CreateGroupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-group',
        template: _raw_loader_create_group_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_group_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateGroupPage);



/***/ }),

/***/ 8731:
/*!**********************************************************!*\
  !*** ./src/app/tab1/create-group/create-group.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 20%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: linear-gradient(to top, #6473FF 0%, #403ddc 100%);\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-input {\n  --background: white;\n  border-radius: 15px;\n  --color: black;\n  --placeholder-color: #6473FF;\n}\n\np, h1 {\n  text-align: center;\n}\n\nh1 {\n  font-family: \"Signika-Bold\";\n}\n\nion-button {\n  --background: #F7D442;\n  --border-radius: 30px;\n  --color: white;\n  --height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1ncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlLWdyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMCU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMCU7XG4gICAgLS1wYWRkaW5nLWVuZDogMTAlO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzY0NzNGRiAwJSwgIzQwM2RkYyAxMDAlKTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLWNvbG9yOiBibGFjazsgXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzY0NzNGRjtcbn1cblxucCwgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMXtcbiAgICBmb250LWZhbWlseTogJ1NpZ25pa2EtQm9sZCc7XG59XG5cbmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdENDQyO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLWNvbG9yOiB3aGl0ZTsgXG4gICAgLS1oZWlnaHQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ 8915:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/create-group/create-group.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"warning\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"form\" *ngIf=\"step==0\">\n  <h1>CREATE A GROUP</h1>\n  <p>Start by writing the name of the group.</p>\n  <ion-input type=\"text\" placeholder=\"Type name...\" [(ngModel)]=\"group.name\"></ion-input>\n  <ion-button (click)=\"nextStep()\" expand=\"block\" >Next</ion-button>\n</div>\n<div class=\"form\" *ngIf=\"step==1\">\n  <h1>CREATE A GROUP</h1>\n  <p>Add People</p>\n  <ion-input type=\"text\" placeholder=\"Type name...\"></ion-input>\n  <ion-button (click)=\"nextStep()\" expand=\"block\" >Next</ion-button>\n</div>\n<div class=\"form\" *ngIf=\"step==2\">\n  <h1>CREATE A GROUP</h1>\n  <p>Create your bee</p>\n  \n  <ion-button (click)=\"nextStep()\" expand=\"block\" >Next</ion-button>\n</div>\n<div class=\"form\" *ngIf=\"step==3\">\n  <h1>CREATE A GROUP</h1>\n  <p>\"final result\"</p>\n  \n  <ion-button [routerLink]=\"['/tabs/tab1']\" expand=\"block\" >SAVE</ion-button>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_create-group_create-group_module_ts.js.map