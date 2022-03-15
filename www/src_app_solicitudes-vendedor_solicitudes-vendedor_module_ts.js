"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_solicitudes-vendedor_solicitudes-vendedor_module_ts"],{

/***/ 53362:
/*!*****************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes-vendedor-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesVendedorPageRoutingModule": () => (/* binding */ SolicitudesVendedorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _solicitudes_vendedor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-vendedor.page */ 79587);




const routes = [
    {
        path: '',
        component: _solicitudes_vendedor_page__WEBPACK_IMPORTED_MODULE_0__.SolicitudesVendedorPage
    },
    {
        path: 'solicitud-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./solicitud-detail/solicitud-detail.module */ 68173)).then(m => m.SolicitudDetailPageModule)
    }
];
let SolicitudesVendedorPageRoutingModule = class SolicitudesVendedorPageRoutingModule {
};
SolicitudesVendedorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SolicitudesVendedorPageRoutingModule);



/***/ }),

/***/ 44991:
/*!*********************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes-vendedor.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesVendedorPageModule": () => (/* binding */ SolicitudesVendedorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _solicitudes_vendedor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-vendedor-routing.module */ 53362);
/* harmony import */ var _solicitudes_vendedor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitudes-vendedor.page */ 79587);







let SolicitudesVendedorPageModule = class SolicitudesVendedorPageModule {
};
SolicitudesVendedorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _solicitudes_vendedor_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudesVendedorPageRoutingModule
        ],
        declarations: [_solicitudes_vendedor_page__WEBPACK_IMPORTED_MODULE_1__.SolicitudesVendedorPage]
    })
], SolicitudesVendedorPageModule);



/***/ }),

/***/ 79587:
/*!*******************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes-vendedor.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesVendedorPage": () => (/* binding */ SolicitudesVendedorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _solicitudes_vendedor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-vendedor.page.html?ngResource */ 8605);
/* harmony import */ var _solicitudes_vendedor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitudes-vendedor.page.scss?ngResource */ 24144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitudes.service */ 77762);





let SolicitudesVendedorPage = class SolicitudesVendedorPage {
    constructor(solicitudService) {
        this.solicitudService = solicitudService;
        this.solicitudes = [];
    }
    updateSearchResults() {
        console.log(this.autocomplete.input); //search input will display
    }
    ngOnInit() {
        this.solicitudes = this.solicitudService.getSolicitudes();
    }
    ionViewWillEnter() {
        this.solicitudes = this.solicitudService.getSolicitudes();
    }
};
SolicitudesVendedorPage.ctorParameters = () => [
    { type: _solicitudes_service__WEBPACK_IMPORTED_MODULE_2__.SolicitudesService }
];
SolicitudesVendedorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-solicitudes-vendedor',
        template: _solicitudes_vendedor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_solicitudes_vendedor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SolicitudesVendedorPage);



/***/ }),

/***/ 24144:
/*!********************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes-vendedor.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n\n.row1 {\n  position: relative;\n  top: 250px;\n  text-align: center;\n  font-size: 22px;\n  color: #757575;\n}\n\n.card {\n  border-radius: 9px;\n  background: #FF7534;\n  color: #2E460F;\n}\n\n.contCard {\n  background: #FFD0BA;\n}\n\n.container {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.container > .crop {\n  position: absolute;\n  left: -100%;\n  right: -100%;\n  top: -100%;\n  bottom: -100%;\n  margin: auto;\n  min-height: 100%;\n  min-width: 100%;\n}\n\n#columnas {\n  width: 100%;\n  margin-top: 5px;\n  background: #ffffff;\n}\n\n#columnas1 {\n  column-count: 3;\n  column-gap: 20px;\n  list-style: none;\n}\n\n.textCatalago1 {\n  color: #311C13;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLXZlbmRlZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InNvbGljaXR1ZGVzLXZlbmRlZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3BhY2lvNXtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cblxuLnJvdzF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiM3NTc1NzU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1cyA6IDlweDtcbiAgYmFja2dyb3VuZDogI0ZGNzUzNDtcbiAgY29sb3I6ICMyRTQ2MEY7XG59XG5cbi5jb250Q2FyZCB7XG4gIGJhY2tncm91bmQ6ICNGRkQwQkE7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyID4gLmNyb3Age1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIHJpZ2h0OiAtMTAwJTtcbiAgdG9wOiAtMTAwJTtcbiAgYm90dG9tOiAtMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbiNjb2x1bW5hc3tcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuI2NvbHVtbmFzMXtcbiAgY29sdW1uLWNvdW50OjM7XG4gIGNvbHVtbi1nYXA6MjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRleHRDYXRhbGFnbzF7XG4gIGNvbG9yOiAjMzExQzEzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 8605:
/*!********************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes-vendedor.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Solicitudes</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"solicitudes && solicitudes.length>0; else noSolicitudes\">\n    <ion-item *ngFor=\"let solicitud of solicitudes\" [routerLink]=\"['/menu/solicitudes-vendedor', solicitud.id]\">\n      <ion-card class=\"card\">\n        <ion-card-header class=\"contCard\">\n          <div id=\"columnas1\">\n            <li><ion-icon name=\"person-circle-outline\" style=\"zoom:2.0;\"></ion-icon></li>\n            <li>{{solicitud.cliente}}</li>\n            <li slot=\"end\"  style=\"text-align: 'center';\">Quiere comprar</li>\n          </div>\n        </ion-card-header>\n        <ion-card-content>\n        <ion-grid>\n          <ion-row id=\"columnas\">\n            <ion-col>\n              <li style=\"width:70%\"><ion-img [src]=\"solicitud.imageURL\" class=\"container\"></ion-img></li>\n            </ion-col>\n            <ion-col>\n              <p style=\"text-align:'center'; margin-top: 50px;\">{{solicitud.cantidad}}{{solicitud.unidadesRef}} </p>\n              <p style=\"text-align:'center'; margin-top: 20px;\">{{solicitud.producto}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <li style=\"text-align: 'center';width:100%\">{{solicitud.total}}</li>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n    <div style=\"text-align: 'center';\" *ngIf=\"\">\n      <img src = \"assets/img/Group 624.svg\"/>\n      <img src = \"assets/img/Group 625.svg\"/>\n    </div>\n  </ion-list>\n  <ng-template #noSolicitudes>\n    <div>\n      <ion-searchbar debounce=\"100\" style=\"background-color:rgb(118, 189, 118)\"></ion-searchbar>\n    </div>\n    <div class=\"row1\">\n      <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">No tienes solicitudes aún</h3>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_solicitudes-vendedor_solicitudes-vendedor_module_ts.js.map