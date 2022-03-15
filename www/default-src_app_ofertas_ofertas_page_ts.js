"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ofertas_ofertas_page_ts"],{

/***/ 8198:
/*!*******************************************!*\
  !*** ./src/app/ofertas/oferta.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfertaService": () => (/* binding */ OfertaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let OfertaService = class OfertaService {
    constructor() {
        this.ofertas = [
            {
                id: '1',
                rol1: 'Vendedor:',
                name1: 'Jairo Gomez',
                rol2: 'Comprador:',
                name2: 'Marta Peña',
                from: 'Desde:',
                desde: 'Vereda Rio Grande, Santander',
                to: 'Hasta:',
                hasta: 'Cra 12 #15-23, Bucaramanga',
                final: '50 Manojos',
                producto: 'Banano Bocadillo',
                imageUrl1: 'https://img.fotocommunity.com/perfil-campesino-d8d0b847-ccdc-4063-95fc-1eea6240874d.jpg?height=1000',
                imageUrl2: 'https://media.gettyimages.com/photos/actress-maisie-richardsonsellers-from-cws-legends-of-tomorrow-poses-picture-id821805582?s=612x612',
                imagePro: 'https://t4.ftcdn.net/jpg/00/94/16/55/360_F_94165545_6TQqcnzPLrmakUtJRHfNh6LB65c4H2iE.jpg',
                dia: '18/Feb/22',
                hora: '6:30 am'
            },
            {
                id: '2',
                rol1: 'Vendedor:',
                name1: 'Camilo Ramirez',
                rol2: 'Comprador:',
                name2: 'Raul Diaz',
                from: 'Desde:',
                desde: 'San Bernardo, Norte de Santander',
                to: 'Hasta:',
                hasta: 'Cra 9a #20-24, Bucaramanga',
                final: '50 Racimos',
                producto: 'Platano Verde',
                imageUrl1: 'https://comisiondelaverdad.co/images/zoo/noticias/images/Campesinos-foto-luna1.jpg',
                imageUrl2: 'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
                imagePro: 'https://www.semana.com/resizer/AEcetmUovCztZonFY6mq2ZpQMGo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/JX7PPPXC7NAGJA5FMFEOJKQGLI.PNG',
                dia: '20/Ene/22',
                hora: '9:00 am'
            },
            {
                id: '3',
                rol1: 'Vendedor:',
                name1: 'Alberto Rodriguez',
                rol2: 'Comprador:',
                name2: 'Paula Botia',
                from: 'Desde:',
                desde: 'Sabana de Torres, Santander',
                to: 'Hasta:',
                hasta: 'Cra 34 #45-48, Floridablanca',
                final: '20 Bultos',
                producto: 'Papa Pastusa',
                imageUrl1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxMALHrDgip9rpR0pU0dYN3ikjaXthXSnkA&usqp=CAU',
                imageUrl2: 'https://www.marketingdirecto.com/wp-content/uploads/2020/03/dia-de-la-mujer-monica-moro.png',
                imagePro: 'https://plazaenvivo.com/wp-content/uploads/2019/08/IMG_20190826_094604367.jpg',
                dia: '15/Feb/22',
                hora: '10:00 am'
            },
            {
                id: '4',
                rol1: 'Vendedor:',
                name1: 'Andres Corredor',
                rol2: 'Comprador:',
                name2: 'Felipe Lozano',
                from: 'Desde:',
                desde: 'Ocaña, Norte de Santander',
                to: 'Hasta:',
                hasta: 'Cra 14 #20-50, Girón',
                final: '10 Bultos',
                producto: 'Cacao',
                imageUrl1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJZmXb-u4ltorTRoolDNWjeLl6K8bXzqRcw&usqp=CAU',
                imageUrl2: 'http://lapi.com.mx/web/image/product.template/4986/image_1024?unique=6c80087',
                imagePro: 'http://imgs.globovision.com/TIh20ISrax3YqZKulD5Ltrjo4M8=/847x0/smart/3d57dbd4aa5e439c801d5fb61b77e5ef',
                dia: '02/Mar/22',
                hora: '6:00 am'
            },
            {
                id: '5',
                rol1: 'Vendedor:',
                name1: 'Daniel Romero',
                rol2: 'Comprador:',
                name2: 'Natalia Lopez',
                from: 'Desde:',
                desde: 'San Vicente de Chucurí, Santander',
                to: 'Hasta:',
                hasta: 'Cll 32 #45-50, Bucaramanga',
                final: '15 Bultos',
                producto: 'Yuca',
                imageUrl1: 'https://travolution.org/wp-content/uploads/2021/06/Claudio-Salvador.png',
                imageUrl2: 'https://ichef.bbci.co.uk/news/300/cpsprodpb/AB7F/production/_115330934_evelina_cabrera.jpg',
                imagePro: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/07/yuca.jpg',
                dia: '05/Feb/22',
                hora: '12:00 pm'
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
OfertaService.ctorParameters = () => [];
OfertaService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], OfertaService);



/***/ }),

/***/ 92060:
/*!*****************************************!*\
  !*** ./src/app/ofertas/ofertas.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfertasPage": () => (/* binding */ OfertasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _ofertas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ofertas.page.html?ngResource */ 66105);
/* harmony import */ var _ofertas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ofertas.page.scss?ngResource */ 32964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _oferta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oferta.service */ 8198);








let OfertasPage = class OfertasPage {
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
    openMenu() {
        this.menu.toggle('first');
        this.menu.open('first');
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
OfertasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _oferta_service__WEBPACK_IMPORTED_MODULE_2__.OfertaService }
];
OfertasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ofertas',
        template: _ofertas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ofertas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OfertasPage);



/***/ }),

/***/ 32964:
/*!******************************************************!*\
  !*** ./src/app/ofertas/ofertas.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".fotoper {\n  font-size: 40px;\n  padding-left: 0px;\n  display: inline-block;\n}\n\n.arr {\n  margin-bottom: 80px;\n  margin-right: 16px;\n}\n\n.baj {\n  margin-top: 40px;\n}\n\n.margin1 {\n  margin-top: 20px;\n}\n\n.espacio {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  padding-left: 30px;\n}\n\n.espacio2 {\n  display: inline-block;\n  margin: 0px;\n  padding-right: 10px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.ajuste {\n  display: inline-block;\n  align-content: right;\n  font-size: 20px;\n  margin-top: 80px;\n}\n\n.space10 {\n  display: flex;\n  flex-direction: row;\n}\n\n.space1 {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  text-align-last: left;\n}\n\n.space2 {\n  text-align-last: right;\n}\n\n.space3 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.space4 {\n  display: inline-block;\n  text-align-last: center;\n  align-content: right;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.padre {\n  display: flex;\n  flex-direction: row;\n}\n\n.mejorada {\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n\n.back {\n  background: crimson;\n}\n\n.imgfot {\n  width: 80px;\n  height: 80px;\n}\n\n.back1 {\n  margin-top: 20px;\n  height: 600px;\n}\n\n.tool {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZXJ0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNJLHVCQUFBO0FBR0oiLCJmaWxlIjoib2ZlcnRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90b3BlcntcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJye1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uYmFqe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tYXJnaW4xe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZXNwYWNpb3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5lc3BhY2lvMntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWp1c3Rle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbGlnbi1jb250ZW50OiByaWdodDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLnNwYWNlMTB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3BhY2Uxe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xufVxuXG4uc3BhY2Uye1xuICAgIHRleHQtYWxpZ24tbGFzdDogcmlnaHQ7XG59XG5cbi5zcGFjZTN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNwYWNlNHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnBhZHJle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1lam9yYWRhe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNre1xuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XG59XG5cbi5pbWdmb3R7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYmFjazF7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4udG9vbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */";

/***/ }),

/***/ 66105:
/*!******************************************************!*\
  !*** ./src/app/ofertas/ofertas.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title class=\"espacio\">Ofertas</ion-title>\n    <ion-buttons slot=\"end\">\n    <ion-icon class=\"espacio2\" [routerLink]=\"['/menu/inicio-transportador']\"  name=\"close-circle\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  <ion-card *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/ofertas', oferta.id]\">\n    <ion-img [src]=\"oferta.imagePro\">\n        </ion-img>\n\n  <div class=\"space1\">\n\n    \n    <ion-item class=\"margin1\">\n      <ion-avatar name=\"person-circle-outline\" class=\"imgfot arr\">\n        <ion-img [src]=\"oferta.imageUrl1\">\n        </ion-img>\n      </ion-avatar>\n      <ion-avatar name=\"person-circle-outline\" class=\"imgfot baj\" slot=\"end\">\n        <ion-img [src]=\"oferta.imageUrl2\">\n        </ion-img>\n      </ion-avatar>\n\n      <ion-label>\n      <div class=\"space1\">\n        {{oferta.rol1}}\n        <br>\n        {{oferta.name1}}\n      </div>\n      <br>\n      <div class=\"space2\">\n        {{oferta.rol2}}\n        <br>\n        {{oferta.name2}}\n      </div>\n      <br>\n      </ion-label>\n      </ion-item>\n\n  </div>\n  \n\n    <ion-item>\n      <ion-label>\n      <div class=\"space3\">\n        <div class=\"space4\">\n        {{oferta.from}}\n        <br>\n        {{oferta.desde}}\n        </div>\n        <div class=\"space4\">\n        {{oferta.to}}\n        <br>\n        {{oferta.hasta}}\n        </div>\n      </div>\n      </ion-label>\n      </ion-item>\n  <ion-card-content class=\"mejorada\">\n    <div>\n        {{oferta.final}} {{oferta.producto}}\n      </div>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ofertas_ofertas_page_ts.js.map