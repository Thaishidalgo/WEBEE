(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ 7053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/groups.service */ 7650);







let Tab1Page = class Tab1Page {
    constructor(authService, router, groupService) {
        this.authService = authService;
        this.router = router;
        this.groupService = groupService;
    }
    ngOnInit() {
        this.groupService.getGroups().subscribe((data) => {
            console.log(data);
            this.groups = data;
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__.GroupsService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to bottom, #6473FF 0%, #403ddc 30%, #000000 100%);\n  --padding-top: 10%;\n  --padding-bottom:100px;\n}\n\nion-fab-button {\n  --background: #F7D442;\n}\n\nh1 {\n  text-align: center;\n  font-family: \"Signika-Bold\";\n}\n\nion-searchbar {\n  --background:white;\n  --border-radius:35px;\n}\n\n.group-box {\n  margin: 20px;\n}\n\n.header {\n  background-color: white;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  color: #6473FF;\n  padding: 5px;\n}\n\n.names {\n  background-color: #EBEFFF;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  padding: 20px;\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n  color: #6473FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0VBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUZBO0VBRUksWUFBQTtBQUlKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFJSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY0NzNGRiAwJSwgIzQwM2RkYyAzMCUsICMwMDAwMDAgMTAwJSk7XG4gICAgLS1wYWRkaW5nLXRvcDogMTAlO1xuICAgIC0tcGFkZGluZy1ib3R0b206MTAwcHg7XG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Q0NDI7XG59XG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2lnbmlrYS1Cb2xkXCI7XG59XG5pb24tc2VhcmNoYmFye1xuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6MzVweDtcbn1cbi5ncm91cC1ib3h7XG5cbiAgICBtYXJnaW46IDIwcHg7XG5cbn1cbi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogIzY0NzNGRjtcbiAgICBcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ubmFtZXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUZGRjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiAjNjQ3M0ZGO1xuICAgIFxufVxuXG4iXX0= */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <h1>GROUPS</h1>\n  \n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/create-group']\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-searchbar animated></ion-searchbar>\n  \n  <div class=\"groupy\">\n    <div class=\"group-box\" *ngFor=\"let g of groups\" [routerLink]=\"['/group-opened', g.id]\">\n    <div class=\"header\">\n      <ion-grid >\n        <ion-row>\n          <ion-col size=30%>\n            <img src=\"{{g.acf.bee.url}}\" width=\"62px\" height=\"46px\"/>\n          </ion-col>\n          <ion-col>\n            <h2>{{g.title.rendered}}</h2>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>  \n    <div class=\"names\">\n      <div class=\"name\" *ngFor=\"let u of g.acf.users\">\n        <img src=\"{{u.foto}}\">\n       <p> {{u.nickname}}</p>\n      </div>\n    </div>\n    \n  </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map