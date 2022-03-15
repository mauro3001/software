"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_productos_productos_module_ts"],{

/***/ 94484:
/*!*******************************************************!*\
  !*** ./src/app/productos/productos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageRoutingModule": () => (/* binding */ ProductosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.page */ 95610);




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_0__.ProductosPage
    },
    {
        path: 'producto-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./producto-detail/producto-detail.module */ 9297)).then(m => m.ProductoDetailPageModule)
    },
    {
        path: 'producto-add',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_productos_producto-add_producto-add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./producto-add/producto-add.module */ 60672)).then(m => m.ProductoAddPageModule)
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductosPageRoutingModule);



/***/ }),

/***/ 41011:
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPageModule": () => (/* binding */ ProductosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos-routing.module */ 94484);
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page */ 95610);







let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductosPageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_1__.ProductosPage]
    })
], ProductosPageModule);



/***/ }),

/***/ 95610:
/*!*********************************************!*\
  !*** ./src/app/productos/productos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosPage": () => (/* binding */ ProductosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.page.html?ngResource */ 32178);
/* harmony import */ var _productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.page.scss?ngResource */ 84142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productos.service */ 72913);





let ProductosPage = class ProductosPage {
    constructor(productoService) {
        this.productoService = productoService;
        this.productos = [];
        this.calific = [];
    }
    updateSearchResults() {
        console.log(this.autocomplete.input); //search input will display
    }
    ngOnInit() {
        this.productos = this.productoService.getProductos();
        this.calificacion();
    }
    ionViewWillEnter() {
        this.productos = this.productoService.getProductos();
        this.calificacion();
    }
    calificacion() {
        const prod = this.productoService.getProductos();
        for (let i = 0; i < prod.length; i++) {
            this.calific[i] = this.productoService.getCalificacion(prod[i].id);
        }
    }
};
ProductosPage.ctorParameters = () => [
    { type: _productos_service__WEBPACK_IMPORTED_MODULE_2__.ProductosService }
];
ProductosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-productos',
        template: _productos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_productos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductosPage);



/***/ }),

/***/ 84142:
/*!**********************************************************!*\
  !*** ./src/app/productos/productos.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#esquina_t_r {\n  position: absolute;\n  right: 4px;\n  bottom: 2px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n\n.card {\n  border-radius: 9px;\n  background: #311C13;\n  color: #ffffff;\n}\n\n.contCard {\n  border-radius: 9px;\n  background: #ffffff;\n}\n\n.container {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.container > .crop {\n  position: absolute;\n  left: -100%;\n  right: -100%;\n  top: -100%;\n  bottom: -100%;\n  margin: auto;\n  min-height: 100%;\n  min-width: 100%;\n}\n\n#columnas {\n  column-count: 2;\n  column-gap: 20px;\n  list-style: none;\n  margin-top: 5px;\n}\n\n.textCatalago1 {\n  color: #311C13;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFHRiIsImZpbGUiOiJwcm9kdWN0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VzcXVpbmFfdF9ye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG4gIGJvdHRvbTogMnB4O1xufVxuXG4uZXNwYWNpbzV7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXMgOiA5cHg7XG4gIGJhY2tncm91bmQ6ICMzMTFDMTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udENhcmQge1xuICBib3JkZXItcmFkaXVzIDogOXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciA+IC5jcm9wIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAlO1xuICByaWdodDogLTEwMCU7XG4gIHRvcDogLTEwMCU7XG4gIGJvdHRvbTogLTEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4jY29sdW1uYXN7XG4gIGNvbHVtbi1jb3VudDoyO1xuICBjb2x1bW4tZ2FwOjIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRleHRDYXRhbGFnbzF7XG4gIGNvbG9yOiAjMzExQzEzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 32178:
/*!**********************************************************!*\
  !*** ./src/app/productos/productos.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Mis productos</ion-title>\n    <img  id=\"esquina_t_r\" src = \"assets/img/lechuga_agregar.svg\" [routerLink]=\"['/menu/new-producto']\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar debounce=\"100\" style=\"Background:#AAD482;\" placeholder=\"Buscar...\"></ion-searchbar>\n  <div style=\"margin-bottom: 30px;\">\n    <ion-list *ngIf=\"productos && productos.length>0; else noProductos\">\n      <ion-item *ngFor=\"let producto of productos\" [routerLink]=\"['/menu/productos', producto.id]\">\n        <ion-card class=\"card\">\n          <ion-card-header class=\"contCard\">\n            <ion-img [src]=\"producto.imageURL\" class=\"container\"></ion-img>\n          </ion-card-header>\n          <ion-card-content>\n          <div id=\"columnas\">\n            <li>{{producto.title}}  {{calific[producto.id-1]}} <ion-icon name=\"star\"></ion-icon></li>\n            <li>Cantidad: {{producto.cantidad}} {{producto.unidadesRef}}</li>\n          </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noProductos>\n    <div class=\"row1\">\n      <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">No tienes productos aún</h3>\n      <h3 style=\"font-family: 'Arial';font-size:light; font-style: oblique;\">Agrega uno</h3>\n      <img  id=\"img_cent_trans\" src = \"assets/img/lechuga_agregar.svg\"/>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_productos_productos_module_ts.js.map