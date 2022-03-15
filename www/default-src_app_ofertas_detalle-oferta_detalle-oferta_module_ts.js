"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ofertas_detalle-oferta_detalle-oferta_module_ts"],{

/***/ 1620:
/*!*************************************************************************!*\
  !*** ./src/app/ofertas/detalle-oferta/detalle-oferta-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleOfertaPageRoutingModule": () => (/* binding */ DetalleOfertaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _detalle_oferta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-oferta.page */ 17781);




const routes = [
    {
        path: '',
        component: _detalle_oferta_page__WEBPACK_IMPORTED_MODULE_0__.DetalleOfertaPage
    }
];
let DetalleOfertaPageRoutingModule = class DetalleOfertaPageRoutingModule {
};
DetalleOfertaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleOfertaPageRoutingModule);



/***/ }),

/***/ 43931:
/*!*****************************************************************!*\
  !*** ./src/app/ofertas/detalle-oferta/detalle-oferta.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleOfertaPageModule": () => (/* binding */ DetalleOfertaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _detalle_oferta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-oferta-routing.module */ 1620);
/* harmony import */ var _detalle_oferta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-oferta.page */ 17781);







let DetalleOfertaPageModule = class DetalleOfertaPageModule {
};
DetalleOfertaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_oferta_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleOfertaPageRoutingModule
        ],
        declarations: [_detalle_oferta_page__WEBPACK_IMPORTED_MODULE_1__.DetalleOfertaPage]
    })
], DetalleOfertaPageModule);



/***/ }),

/***/ 17781:
/*!***************************************************************!*\
  !*** ./src/app/ofertas/detalle-oferta/detalle-oferta.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleOfertaPage": () => (/* binding */ DetalleOfertaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _detalle_oferta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-oferta.page.html?ngResource */ 95178);
/* harmony import */ var _detalle_oferta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-oferta.page.scss?ngResource */ 15067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _oferta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oferta.service */ 8198);






let DetalleOfertaPage = class DetalleOfertaPage {
    constructor(activateRoute, ofertaService) {
        this.activateRoute = activateRoute;
        this.ofertaService = ofertaService;
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const recipeId = paramMap.get('productoId');
            this.oferta = this.ofertaService.getOferta(recipeId);
            console.log(this.oferta);
        });
    }
};
DetalleOfertaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _oferta_service__WEBPACK_IMPORTED_MODULE_2__.OfertaService }
];
DetalleOfertaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detalle-oferta',
        template: _detalle_oferta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalle_oferta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetalleOfertaPage);



/***/ }),

/***/ 15067:
/*!****************************************************************************!*\
  !*** ./src/app/ofertas/detalle-oferta/detalle-oferta.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".fecha {\n  text-align: center;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 18px;\n  margin: auto;\n}\n\n.detalle {\n  text-align: center;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 18px;\n  margin-top: 0px;\n  padding-top: 8px;\n}\n\n.ruta {\n  text-align: center;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 18px;\n  margin: auto;\n  padding-bottom: 8px;\n}\n\n.coti {\n  display: inline-block;\n  padding-top: 18px;\n  margin: auto;\n  color: #EDFFFF;\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n  padding-bottom: 18px;\n}\n\n.fecha2 {\n  text-align: center;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 18px;\n  margin-top: 20px;\n  padding-top: 10px;\n  margin-bottom: 0%;\n  background-color: rgba(114, 32, 32, 0.198);\n}\n\n.centrar {\n  text-align: center;\n  margin-right: 48px;\n}\n\n.ficha {\n  text-align: center;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 13px;\n  padding-bottom: 5px;\n  margin: 0%;\n}\n\n.back1 {\n  background-color: #8a604c41;\n  height: 100px;\n}\n\n.back2 {\n  background-color: #705C53;\n  margin-top: 20px;\n}\n\n.back3 {\n  background-color: #8a604c41;\n  height: 120px;\n}\n\n.back4 {\n  height: 22px;\n  background-color: #8a604c41;\n}\n\n.mitad {\n  margin-left: 100px;\n  margin-right: 100px;\n}\n\n.bordes1 {\n  margin-left: 100px;\n}\n\n.bordes2 {\n  margin-right: 100px;\n}\n\n.space1 {\n  display: flex;\n  flex-direction: row;\n}\n\n.space2 {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n\n.tunning1 {\n  margin: auto;\n  background-color: white;\n  border-radius: 50px;\n  width: 150px;\n  text-align: center;\n  font-size: 20px;\n  padding: auto;\n}\n\n.tunning2 {\n  margin: auto;\n}\n\n.tunning3 {\n  margin: auto;\n  background-color: #A68E80;\n  border-radius: 50px;\n  width: 150px;\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.tunning4 {\n  margin: 0%;\n  padding-top: 18px;\n}\n\n.tunning5 {\n  margin: auto;\n  background-color: white;\n  border-radius: 50px;\n  width: 230px;\n  text-align: center;\n}\n\n.tunning6 {\n  margin-right: 30px;\n  width: 100px;\n}\n\n.tunning7 {\n  background-color: #A68E80;\n  border-radius: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.enviar {\n  height: 55px;\n  width: 100px;\n  color: black;\n}\n\n.toolbar-container {\n  --border-color: #8A604C;\n}\n\n.k-grid .k-toolbar {\n  background-color: #8A604C;\n}\n\n.fondotitle {\n  color: #EBF0EC;\n}\n\n.ultimo {\n  background-color: #FF900D;\n  border-radius: 10px;\n}\n\n.salto {\n  padding-bottom: 20px;\n}\n\n.info {\n  text-align: center;\n  font-size: 13px;\n}\n\n.texto {\n  font-size: 13px;\n  font-weight: bold;\n  color: black;\n  margin: auto;\n  text-align: center;\n}\n\n.texto2 {\n  color: black;\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtb2ZlcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKOztBQUdBO0VBQ1EseUJBQUE7QUFBUjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJkZXRhbGxlLW9mZXJ0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVjaGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNzA1QzUzO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5kZXRhbGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzcwNUM1MztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5ydXRhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzcwNUM1MztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5jb3Rpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY29sb3I6ICNFREZGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLmZlY2hhMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3MDVDNTM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTQsIDMyLCAzMiwgMC4xOTgpO1xufVxuXG4uY2VudHJhcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xufVxuXG4uZmljaGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNzA1QzUzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbjogMCU7XG59XG5cbi5iYWNrMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2MDRjNDE7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJhY2sye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDVDNTM7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJhY2sze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YTYwNGM0MTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uYmFjazR7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YTYwNGM0MTtcbn1cblxuLm1pdGFke1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuXG59XG5cbi5ib3JkZXMxe1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmJvcmRlczJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLnNwYWNlMXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zcGFjZTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLnR1bm5pbmcxe1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG59XG5cbi50dW5uaW5nMntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50dW5uaW5nM3tcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2OEU4MDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnR1bm5pbmc0e1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi50dW5uaW5nNXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHVubmluZzZ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLnR1bm5pbmc3e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjhFODA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZW52aWFye1xuICAgIGhlaWdodDogNTVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9vbGJhci1jb250YWluZXJ7XG4gICAgLS1ib3JkZXItY29sb3I6ICM4QTYwNEM7XG59XG5cbi5rLWdyaWQgLmstdG9vbGJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4QTYwNEM7XG4gICAgfVxuXG4uZm9uZG90aXRsZXtcbiAgICBjb2xvcjogI0VCRjBFQztcbn1cblxuLnVsdGltb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MDBEO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zYWx0b3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRleHRve1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRvMntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 95178:
/*!****************************************************************************!*\
  !*** ./src/app/ofertas/detalle-oferta/detalle-oferta.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defualHref=\"/oferta\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"centrar fondotitle\">DETALLES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"back2\">\n      <ion-img [src]=\"oferta.imagePro\"></ion-img>\n  </div>\n\n  <div class=\"space1 back1\">\n    <div class=\"space2 tunning1\">\n          {{oferta.final}}\n    </div>\n\n    <div class=\"space2 tunning1\">\n          {{oferta.producto}}\n    </div>\n  </div>\n\n  <div class=\"space2\">\n\n    <div class=\"space1\">\n      <h1 class=\"fecha\">Fecha</h1>\n    </div>\n\n    <div class=\"space1 por\">\n      <div class=\"space2 tunning2\">\n            <h2 class=\"ficha\">Dia</h2>\n            <div class=\"tunning3\">\n              {{oferta.dia}}\n            </div>\n      </div>\n\n      <div class=\"space2 tunning2\">\n            <h2 class=\"ficha tunning4\">A las</h2>\n      </div>\n\n      <div class=\"space2 tunning2\">\n            <h2 class=\"ficha\">Hora</h2>\n            <div class=\"tunning3\">\n              {{oferta.hora}}\n            </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"back4\">\n    <h1 class=\"detalle\">Detalles</h1>\n  </div>\n\n  <div class=\"space1 back3\">\n\n    <div class=\"space2 tunning2\">\n      <div class=\"space1 tunning2\">\n          {{oferta.rol1}}\n      </div>\n      <div class=\"space1 tunning2\">\n          <ion-avatar name=\"person-circle-outline\">\n          <ion-img [src]=\"oferta.imageUrl1\">\n          </ion-img>\n        </ion-avatar>\n      </div>\n      <div class=\"space1 tunning2\">\n          {{oferta.name1}}\n      </div>\n    </div>\n    \n\n    <div class=\"space2 tunning2\">\n      <div class=\"space1 tunning2\">\n          {{oferta.rol2}}\n      </div>\n      <div class=\"space1 tunning2\">\n          <ion-avatar name=\"person-circle-outline\">\n          <ion-img [src]=\"oferta.imageUrl2\">\n          </ion-img>\n          </ion-avatar>\n      </div>\n      <div class=\"space1 tunning2\">\n          {{oferta.name2}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"space2\">\n\n    <div class=\"space1\">\n      <h1 class=\"ruta\">Ruta</h1>\n    </div>\n\n    <div class=\"space2 tunning7\">\n      <div class=\"space1\">\n      <h1 class=\"texto\">Desde:</h1>\n      </div>\n      <div class=\"space1 texto2\">\n        {{oferta.desde}}\n      </div>\n    </div>\n\n    <div class=\"space2 tunning7\">\n      <div class=\"space1\">\n      <h1 class=\"texto\">Hasta:</h1>\n      </div>\n      <div class=\"space1 texto2\">\n        {{oferta.hasta}}\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"ultimo space2\">\n\n    <div class=\"space1\">\n      <h1 class=\"coti\">Cotización</h1>\n    </div>\n\n    <div class=\"space1\">\n      <div class=\"space2 tunning5\">\n        <ion-input placeholder=\"Valor del servicio\"></ion-input>\n      </div>\n\n      <div class=\"space2 tunning6\">\n        <ion-button class=\"enviar\" color=\"light\" shape=\"round\">ENVIAR</ion-button>\n      </div>\n    </div>\n\n    <div class=\"space1 salto\">\n      <h3 class=\"info\">Establece el valor del servicio teniendo en cuenta la distancia desde tu punto\n        de partida hasta la ubicación final.\n      </h3>\n    </div>\n\n  </div>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ofertas_detalle-oferta_detalle-oferta_module_ts.js.map