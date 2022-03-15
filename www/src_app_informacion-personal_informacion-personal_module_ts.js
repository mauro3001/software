"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_informacion-personal_informacion-personal_module_ts"],{

/***/ 18585:
/*!*****************************************************************************!*\
  !*** ./src/app/informacion-personal/informacion-personal-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPersonalPageRoutingModule": () => (/* binding */ InformacionPersonalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _informacion_personal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-personal.page */ 53833);




const routes = [
    {
        path: '',
        component: _informacion_personal_page__WEBPACK_IMPORTED_MODULE_0__.InformacionPersonalPage
    }
];
let InformacionPersonalPageRoutingModule = class InformacionPersonalPageRoutingModule {
};
InformacionPersonalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformacionPersonalPageRoutingModule);



/***/ }),

/***/ 28218:
/*!*********************************************************************!*\
  !*** ./src/app/informacion-personal/informacion-personal.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPersonalPageModule": () => (/* binding */ InformacionPersonalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _informacion_personal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-personal-routing.module */ 18585);
/* harmony import */ var _informacion_personal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-personal.page */ 53833);







let InformacionPersonalPageModule = class InformacionPersonalPageModule {
};
InformacionPersonalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _informacion_personal_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionPersonalPageRoutingModule
        ],
        declarations: [_informacion_personal_page__WEBPACK_IMPORTED_MODULE_1__.InformacionPersonalPage]
    })
], InformacionPersonalPageModule);



/***/ }),

/***/ 53833:
/*!*******************************************************************!*\
  !*** ./src/app/informacion-personal/informacion-personal.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPersonalPage": () => (/* binding */ InformacionPersonalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _informacion_personal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-personal.page.html?ngResource */ 2561);
/* harmony import */ var _informacion_personal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-personal.page.scss?ngResource */ 94025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let InformacionPersonalPage = class InformacionPersonalPage {
    constructor() { }
    ngOnInit() {
    }
};
InformacionPersonalPage.ctorParameters = () => [];
InformacionPersonalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-informacion-personal',
        template: _informacion_personal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_informacion_personal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InformacionPersonalPage);



/***/ }),

/***/ 94025:
/*!********************************************************************************!*\
  !*** ./src/app/informacion-personal/informacion-personal.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hY2lvbi1wZXJzb25hbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2561:
/*!********************************************************************************!*\
  !*** ./src/app/informacion-personal/informacion-personal.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>informacion-personal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_informacion-personal_informacion-personal_module_ts.js.map