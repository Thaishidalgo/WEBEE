(self["webpackChunkwebee_personas"] = self["webpackChunkwebee_personas"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let EventsService = class EventsService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.allEvents = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wordpress.url_api + 'esdeveniments');
    }
    getEventsOfChallenge(challengeId) {
        return this.allEvents.filter(e => e.challenge === challengeId);
    }
    getEventsOfUser(userId) {
        return this.allEvents.filter(e => e.user === userId);
    }
    getEvent(eventId) {
        return this.allEvents.find(e => e.id === eventId);
    }
    create(event, token) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wordpress.url_api + 'event', event, { headers: { Authorization: 'Bearer ' + token } });
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    },
    {
        path: 'create-event',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_create-event_create-event_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-event/create-event.module */ 6107)).then(m => m.CreateEventPageModule)
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 4255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events.service */ 106);





let Tab3Page = class Tab3Page {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() {
        this.eventsService.getEvents().subscribe(res => {
            console.log(res);
            this.allEvents = res;
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --padding-top: 55px;\n  --padding-bottom:100px;\n  --background: linear-gradient(to bottom, #6473FF 0%, #403ddc 30%, #000000 100%);\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 55px;\n  font-family: \"Signika-Bold\";\n}\n\nh2 {\n  color: #9AA4FF;\n}\n\nh3 {\n  color: #9AA4FF;\n}\n\nimg {\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.esdeveniment {\n  background-color: white;\n  border-radius: 15px;\n  color: #403ddc;\n  margin-bottom: 25px;\n}\n\nion-fab-button {\n  --background: #F7D442;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwrRUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtBQUlKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwJTtcbiAgICAtLXBhZGRpbmctdG9wOiA1NXB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206MTAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjQ3M0ZGIDAlLCAjNDAzZGRjIDMwJSwgIzAwMDAwMCAxMDAlKTtcblxufVxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdTaWduaWthLUJvbGQnO1xufVxuXG5oMntcbiAgICBjb2xvcjojOUFBNEZGO1xufVxuaDN7XG4gICAgY29sb3I6IzlBQTRGRjtcbiAgICBcbn1cbmltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5lc2RldmVuaW1lbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogIzQwM2RkYztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuaW9uLWZhYi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdENDQyO1xufSJdfQ== */");

/***/ }),

/***/ 4255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\">\n  <h1>EVENTS</h1>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" [routerLink]=\"['/tabs/tab3/create-event']\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-button>Mine</ion-button>\n  <ion-button>Others</ion-button>\n  <h2>Coming</h2>\n  <div class=\"esdeveniment\" *ngFor=\"let event of allEvents\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=30%>\n          <img src=\"../assets/logo_webee.png\" alt=\"logotip\" width=\"31px\" height=\"45px\">\n        </ion-col>\n        <ion-col>\n          <h3>{{event.title.rendered}}</h3>\n          <p>{{event.date | date: 'd MMM, H:mm'}}</p>\n          <p>{{event.acf.age}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <h2>Past</h2>\n  <div class=\"esdeveniment\" *ngFor=\"let event of allEvents\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=30%>\n          <img src=\"../assets/logo_webee.png\" alt=\"logotip\" width=\"31px\" height=\"45px\">\n        </ion-col>\n        <ion-col>\n          <h3>{{event.title.rendered}}</h3>\n          <p>{{event.date | date: 'd MMM, H:mm'}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map