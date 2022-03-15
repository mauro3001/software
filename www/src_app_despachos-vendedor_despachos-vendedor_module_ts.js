"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_despachos-vendedor_despachos-vendedor_module_ts"],{

/***/ 23076:
/*!*************************************************************************!*\
  !*** ./src/app/despachos-vendedor/despachos-vendedor-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DespachosVendedorPageRoutingModule": () => (/* binding */ DespachosVendedorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _despachos_vendedor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./despachos-vendedor.page */ 45098);




const routes = [
    {
        path: '',
        component: _despachos_vendedor_page__WEBPACK_IMPORTED_MODULE_0__.DespachosVendedorPage
    }
];
let DespachosVendedorPageRoutingModule = class DespachosVendedorPageRoutingModule {
};
DespachosVendedorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DespachosVendedorPageRoutingModule);



/***/ }),

/***/ 31222:
/*!*****************************************************************!*\
  !*** ./src/app/despachos-vendedor/despachos-vendedor.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DespachosVendedorPageModule": () => (/* binding */ DespachosVendedorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _despachos_vendedor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./despachos-vendedor-routing.module */ 23076);
/* harmony import */ var _despachos_vendedor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./despachos-vendedor.page */ 45098);







let DespachosVendedorPageModule = class DespachosVendedorPageModule {
};
DespachosVendedorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _despachos_vendedor_routing_module__WEBPACK_IMPORTED_MODULE_0__.DespachosVendedorPageRoutingModule
        ],
        declarations: [_despachos_vendedor_page__WEBPACK_IMPORTED_MODULE_1__.DespachosVendedorPage]
    })
], DespachosVendedorPageModule);



/***/ }),

/***/ 45098:
/*!***************************************************************!*\
  !*** ./src/app/despachos-vendedor/despachos-vendedor.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DespachosVendedorPage": () => (/* binding */ DespachosVendedorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _despachos_vendedor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./despachos-vendedor.page.html?ngResource */ 38996);
/* harmony import */ var _despachos_vendedor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./despachos-vendedor.page.scss?ngResource */ 44577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let DespachosVendedorPage = class DespachosVendedorPage {
    constructor() { }
    ngOnInit() {
    }
};
DespachosVendedorPage.ctorParameters = () => [];
DespachosVendedorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-despachos-vendedor',
        template: _despachos_vendedor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_despachos_vendedor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DespachosVendedorPage);



/***/ }),

/***/ 44577:
/*!****************************************************************************!*\
  !*** ./src/app/despachos-vendedor/despachos-vendedor.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n\n.row1 {\n  position: relative;\n  top: 250px;\n  text-align: center;\n  font-size: 22px;\n  color: #757575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc3BhY2hvcy12ZW5kZWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZGVzcGFjaG9zLXZlbmRlZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3BhY2lvNXtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cblxuLnJvdzF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiM3NTc1NzU7XG59XG4iXX0= */";

/***/ }),

/***/ 38996:
/*!****************************************************************************!*\
  !*** ./src/app/despachos-vendedor/despachos-vendedor.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Entregas</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-searchbar debounce=\"100\" style=\"background-color:rgb(118, 189, 118)\"></ion-searchbar>\n  </div>\n  <div class=\"row1\">\n    <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">No tienes entregas aún</h3>\n    <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">Acepta solicitudes</h3>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_despachos-vendedor_despachos-vendedor_module_ts.js.map