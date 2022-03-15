"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_entregas-envios_entregas-envios_module_ts"],{

/***/ 82365:
/*!*******************************************************************!*\
  !*** ./src/app/entregas-envios/entregas-envios-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasEnviosPageRoutingModule": () => (/* binding */ EntregasEnviosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _entregas_envios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entregas-envios.page */ 33936);




const routes = [
    {
        path: '',
        component: _entregas_envios_page__WEBPACK_IMPORTED_MODULE_0__.EntregasEnviosPage
    }
];
let EntregasEnviosPageRoutingModule = class EntregasEnviosPageRoutingModule {
};
EntregasEnviosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntregasEnviosPageRoutingModule);



/***/ }),

/***/ 54301:
/*!***********************************************************!*\
  !*** ./src/app/entregas-envios/entregas-envios.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasEnviosPageModule": () => (/* binding */ EntregasEnviosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _entregas_envios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entregas-envios-routing.module */ 82365);
/* harmony import */ var _entregas_envios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entregas-envios.page */ 33936);







let EntregasEnviosPageModule = class EntregasEnviosPageModule {
};
EntregasEnviosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entregas_envios_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntregasEnviosPageRoutingModule
        ],
        declarations: [_entregas_envios_page__WEBPACK_IMPORTED_MODULE_1__.EntregasEnviosPage]
    })
], EntregasEnviosPageModule);



/***/ }),

/***/ 33936:
/*!*********************************************************!*\
  !*** ./src/app/entregas-envios/entregas-envios.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasEnviosPage": () => (/* binding */ EntregasEnviosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _entregas_envios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entregas-envios.page.html?ngResource */ 50377);
/* harmony import */ var _entregas_envios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entregas-envios.page.scss?ngResource */ 61002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let EntregasEnviosPage = class EntregasEnviosPage {
    constructor() { }
    ngOnInit() {
    }
};
EntregasEnviosPage.ctorParameters = () => [];
EntregasEnviosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-entregas-envios',
        template: _entregas_envios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entregas_envios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EntregasEnviosPage);



/***/ }),

/***/ 61002:
/*!**********************************************************************!*\
  !*** ./src/app/entregas-envios/entregas-envios.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".espacio5 {\n  align-items: center;\n  text-align: center;\n}\n\n.info1 {\n  margin-top: 70%;\n  text-align: center;\n  font-size: 20px;\n  color: #8A604C;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlZ2FzLWVudmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJlbnRyZWdhcy1lbnZpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcGFjaW81e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5pbmZvMXtcbiAgICBtYXJnaW4tdG9wOiA3MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzhBNjA0QztcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 50377:
/*!**********************************************************************!*\
  !*** ./src/app/entregas-envios/entregas-envios.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Entregas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"info1\">\n    <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">No tienes entregas completadas aún</h3>\n    <img src = \"assets/img/lechuga_agregar.svg\" width=\"100px\"/>\n  </div>\n\n\n  <div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" color=\"success\">\n\n        <ion-tab-button tab=\"inicio\" [routerLink]=\"['/menu/inicio-transportador']\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"en_espera\" [routerLink]=\"['/solicitudes-espera']\">\n          <ion-icon name=\"hourglass-outline\"></ion-icon>\n          <ion-label>En espera</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"programados\" [routerLink]=\"['/envios-programados']\">\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <ion-label>Programados</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"entregas\" style=\"background-color:rgb(118, 189, 118)\">\n          <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n          <ion-label>Entregas</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </div>\n\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_entregas-envios_entregas-envios_module_ts.js.map