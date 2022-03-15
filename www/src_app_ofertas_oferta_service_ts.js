"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ofertas_oferta_service_ts"],{

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



/***/ })

}]);
//# sourceMappingURL=src_app_ofertas_oferta_service_ts.js.map