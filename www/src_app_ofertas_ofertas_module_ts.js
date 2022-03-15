"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ofertas_ofertas_module_ts"],{

/***/ 3397:
/*!***************************************************!*\
  !*** ./src/app/ofertas/ofertas-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfertasPageRoutingModule": () => (/* binding */ OfertasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ofertas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ofertas.page */ 92060);




const routes = [
    {
        path: '',
        component: _ofertas_page__WEBPACK_IMPORTED_MODULE_0__.OfertasPage
    },
    {
        path: 'detalle-oferta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_ofertas_detalle-oferta_detalle-oferta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detalle-oferta/detalle-oferta.module */ 43931)).then(m => m.DetalleOfertaPageModule)
    }
];
let OfertasPageRoutingModule = class OfertasPageRoutingModule {
};
OfertasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OfertasPageRoutingModule);



/***/ }),

/***/ 3631:
/*!*******************************************!*\
  !*** ./src/app/ofertas/ofertas.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfertasPageModule": () => (/* binding */ OfertasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ofertas-routing.module */ 3397);
/* harmony import */ var _ofertas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ofertas.page */ 92060);







let OfertasPageModule = class OfertasPageModule {
};
OfertasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfertasPageRoutingModule
        ],
        declarations: [_ofertas_page__WEBPACK_IMPORTED_MODULE_1__.OfertasPage]
    })
], OfertasPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_ofertas_ofertas_module_ts.js.map