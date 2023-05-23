(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_pages_group-opened_group-opened_module_ts"],{

/***/ 3454:
/*!*******************************************************************!*\
  !*** ./src/app/pages/group-opened/group-opened-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupOpenedPageRoutingModule": () => (/* binding */ GroupOpenedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _group_opened_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-opened.page */ 7748);




const routes = [
    {
        path: '',
        component: _group_opened_page__WEBPACK_IMPORTED_MODULE_0__.GroupOpenedPage
    }
];
let GroupOpenedPageRoutingModule = class GroupOpenedPageRoutingModule {
};
GroupOpenedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GroupOpenedPageRoutingModule);



/***/ }),

/***/ 5493:
/*!***********************************************************!*\
  !*** ./src/app/pages/group-opened/group-opened.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupOpenedPageModule": () => (/* binding */ GroupOpenedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _group_opened_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-opened-routing.module */ 3454);
/* harmony import */ var _group_opened_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-opened.page */ 7748);







let GroupOpenedPageModule = class GroupOpenedPageModule {
};
GroupOpenedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _group_opened_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupOpenedPageRoutingModule
        ],
        declarations: [_group_opened_page__WEBPACK_IMPORTED_MODULE_1__.GroupOpenedPage]
    })
], GroupOpenedPageModule);



/***/ }),

/***/ 7748:
/*!*********************************************************!*\
  !*** ./src/app/pages/group-opened/group-opened.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupOpenedPage": () => (/* binding */ GroupOpenedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_group_opened_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./group-opened.page.html */ 4808);
/* harmony import */ var _group_opened_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-opened.page.scss */ 1103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/groups.service */ 7650);






let GroupOpenedPage = class GroupOpenedPage {
    constructor(route, groupService) {
        this.route = route;
        this.groupService = groupService;
    }
    ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.groupService.getOne(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
            console.log(data);
            this.grup = data;
        });
    }
};
GroupOpenedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_2__.GroupsService }
];
GroupOpenedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-group-opened',
        template: _raw_loader_group_opened_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_group_opened_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GroupOpenedPage);



/***/ }),

/***/ 1103:
/*!***********************************************************!*\
  !*** ./src/app/pages/group-opened/group-opened.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  text-align: center;\n  margin: 25px;\n}\n\nh1 {\n  text-transform: uppercase;\n  font-family: \"Signika-Bold\";\n}\n\nh3 {\n  color: #9BA5F8;\n}\n\n.name {\n  display: flex;\n  background-color: white;\n  color: #6473FF;\n  text-align: left;\n  margin: 25px;\n  padding: 10px;\n  border-radius: 15px;\n  height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLW9wZW5lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZ3JvdXAtb3BlbmVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHg7XG59XG5cbmgxe1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdTaWduaWthLUJvbGQnO1xufVxuXG5oM3tcbiAgICBjb2xvcjogIzlCQTVGODtcbn1cblxuLm5hbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzY0NzNGRjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xufVxuIl19 */");

/***/ }),

/***/ 4808:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/group-opened/group-opened.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Group Opened</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"grup\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/#']\">\n    <ion-fab-button>\n      <ion-icon name=\"pencil-outline\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n <h1>{{grup.acf.group_name}}</h1>\n <img src=\"{{grup.acf.bee.url}}\" width=50%/>\n <h3>Members</h3>\n\n <div class=\"names\">\n  <div class=\"name\" *ngFor=\"let u of grup.acf.users\">\n    <img src=\"{{u.foto}}\">\n    <p> {{u.nickname}}</p>\n  </div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_group-opened_group-opened_module_ts.js.map