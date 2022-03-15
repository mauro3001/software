"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_noticias_noticias_module_ts"],{

/***/ 1091:
/*!************************************************!*\
  !*** ./src/app/noticias/noticia-ss.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaSsService": () => (/* binding */ NoticiaSsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let NoticiaSsService = class NoticiaSsService {
    constructor() {
        this.ofertas = [
            {
                id: '1',
                titulo: 'Exportaciones del agro crecieron 24% impulsadas por productos no tradicionales que aumentaron 31% en enero de 2022',
                descripcion: 'Durante el Gobierno del presidente Iván Duque se han logrado 59 nuevas admisibilidades de productos agro a 28 países.',
                imagePro: 'https://www.minagricultura.gov.co/noticias/PublishingImages/Foto%20MinAgricultura%20Rodolfo%20Zea%20Navarro%20en%20inauguracio%cc%81n%20agencia%20comercial%20agro%20de%20cundinamarca%2015%20de%20julio%20web.jpeg'
            },
            {
                id: '2',
                titulo: 'MinAgricultura consolida estrategia para disminución de importaciones de soya y maíz.',
                descripcion: 'Estos productos son insumos claves para la industria de alimentos balanceados que son utilizados en la producción de aves, cerdos y algunos bovinos',
                imagePro: 'https://www.minagricultura.gov.co/noticias/PublishingImages/Cortar%20foto%20MinAgricltura%20Rodolfo%20Zea%20Navarro%20soya%20maiz%202%20de%20marzo%202022%20web.jpeg'
            },
            {
                id: '3',
                titulo: 'Colombia registró la mayor producción de cacao de la historia, en el último año cacaotero.',
                descripcion: 'El ministro de Agricultura, Rodolfo Zea, se mostró muy complacido con el resultado de la producción de cacao en el último año cacaotero (octubre 2020 a septiembre de 2021), la cual es la más grande de toda la historia productiva del grano en Colombia',
                imagePro: 'https://www.minagricultura.gov.co/noticias/PublishingImages/caco%20Minagricultura%20wp45.jpg',
            },
            {
                id: '4',
                titulo: 'Gobierno Nacional anunció nuevos alivios financieros para los pequeños y medianos productores del campo',
                descripcion: ' El nuevo Decreto 1730, surge de la Ley de Alivios Financieros sancionada a finales de 2020 y promovida por el ministro de Agricultura, Rodolfo Zea Navarro.',
                imagePro: 'https://www.minagricultura.gov.co/noticias/PublishingImages/mujer%20rural%204%20wp.jpg',
            },
        ];
    }
    getTodasOfertas() {
        return [...this.ofertas];
    }
    getOferta(productoId) {
        return Object.assign({}, this.ofertas.find(producto => {
            return producto.id === productoId;
        }));
    }
    addOferta() {
    }
    deleteOferta(productoId) {
    }
};
NoticiaSsService.ctorParameters = () => [];
NoticiaSsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NoticiaSsService);



/***/ }),

/***/ 76935:
/*!*****************************************************!*\
  !*** ./src/app/noticias/noticias-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageRoutingModule": () => (/* binding */ NoticiasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page */ 10241);




const routes = [
    {
        path: '',
        component: _noticias_page__WEBPACK_IMPORTED_MODULE_0__.NoticiasPage
    }
];
let NoticiasPageRoutingModule = class NoticiasPageRoutingModule {
};
NoticiasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticiasPageRoutingModule);



/***/ }),

/***/ 7668:
/*!*********************************************!*\
  !*** ./src/app/noticias/noticias.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageModule": () => (/* binding */ NoticiasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias-routing.module */ 76935);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page */ 10241);







let NoticiasPageModule = class NoticiasPageModule {
};
NoticiasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticiasPageRoutingModule
        ],
        declarations: [_noticias_page__WEBPACK_IMPORTED_MODULE_1__.NoticiasPage]
    })
], NoticiasPageModule);



/***/ }),

/***/ 10241:
/*!*******************************************!*\
  !*** ./src/app/noticias/noticias.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPage": () => (/* binding */ NoticiasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _noticias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page.html?ngResource */ 34025);
/* harmony import */ var _noticias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page.scss?ngResource */ 78083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _noticia_ss_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticia-ss.service */ 1091);








let NoticiasPage = class NoticiasPage {
    constructor(router, menu, modalController, ofertaService) {
        this.router = router;
        this.menu = menu;
        this.modalController = modalController;
        this.ofertaService = ofertaService;
        this.ofertas = [];
    }
    ngOnInit() {
        this.ofertas = this.ofertaService.getTodasOfertas();
    }
};
NoticiasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _noticia_ss_service__WEBPACK_IMPORTED_MODULE_2__.NoticiaSsService }
];
NoticiasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-noticias',
        template: _noticias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_noticias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticiasPage);



/***/ }),

/***/ 78083:
/*!********************************************************!*\
  !*** ./src/app/noticias/noticias.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".texto {\n  display: inline-block;\n  margin: auto;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJub3RpY2lhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZXh0b3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5cbi5lc3BhY2lvNXtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 34025:
/*!********************************************************!*\
  !*** ./src/app/noticias/noticias.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title class=\"espacio5\">Noticias</ion-title>\n    <ion-buttons slot=\"end\">\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  <ion-card *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/noticias', oferta.id]\">\n    <ion-img [src]=\"oferta.imagePro\">\n        </ion-img>\n\n    <ion-item>\n      <ion-card-content>\n        <b>{{oferta.titulo}}</b><br>\n        {{oferta.descripcion}}\n      </ion-card-content>\n      </ion-item>\n\n</ion-card>\n\n</ion-list>\n\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\" color=\"success\">\n      <ion-tab-button tab=\"solicitudes\" [routerLink]=\"['/menu/inicio-comprador']\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"entregas\" style=\"background-color:rgb(118, 189, 118)\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-label>Noticias</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n    </ion-tab-bar>";

/***/ })

}]);
//# sourceMappingURL=src_app_noticias_noticias_module_ts.js.map