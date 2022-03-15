"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio-transportador_inicio-transportador_module_ts"],{

/***/ 64101:
/*!*****************************************************************************!*\
  !*** ./src/app/inicio-transportador/inicio-transportador-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTransportadorPageRoutingModule": () => (/* binding */ InicioTransportadorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _inicio_transportador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-transportador.page */ 33183);




const routes = [
    {
        path: '',
        component: _inicio_transportador_page__WEBPACK_IMPORTED_MODULE_0__.InicioTransportadorPage
    }
];
let InicioTransportadorPageRoutingModule = class InicioTransportadorPageRoutingModule {
};
InicioTransportadorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioTransportadorPageRoutingModule);



/***/ }),

/***/ 44446:
/*!*********************************************************************!*\
  !*** ./src/app/inicio-transportador/inicio-transportador.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTransportadorPageModule": () => (/* binding */ InicioTransportadorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _inicio_transportador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-transportador-routing.module */ 64101);
/* harmony import */ var _inicio_transportador_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-transportador.page */ 33183);







let InicioTransportadorPageModule = class InicioTransportadorPageModule {
};
InicioTransportadorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_transportador_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioTransportadorPageRoutingModule
        ],
        declarations: [_inicio_transportador_page__WEBPACK_IMPORTED_MODULE_1__.InicioTransportadorPage]
    })
], InicioTransportadorPageModule);



/***/ }),

/***/ 33183:
/*!*******************************************************************!*\
  !*** ./src/app/inicio-transportador/inicio-transportador.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioTransportadorPage": () => (/* binding */ InicioTransportadorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _inicio_transportador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-transportador.page.html?ngResource */ 73810);
/* harmony import */ var _inicio_transportador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-transportador.page.scss?ngResource */ 21966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _ofertas_ofertas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ofertas/ofertas.page */ 92060);







//page importada de ofertas

let InicioTransportadorPage = class InicioTransportadorPage {
    constructor(router, menu, modalController) {
        this.router = router;
        this.menu = menu;
        this.modalController = modalController;
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
                // eslint-disable-next-line max-len
                imageUrl2: 'https://media.gettyimages.com/photos/actress-maisie-richardsonsellers-from-cws-legends-of-tomorrow-poses-picture-id821805582?s=612x612',
                imagePro: 'https://t4.ftcdn.net/jpg/00/94/16/55/360_F_94165545_6TQqcnzPLrmakUtJRHfNh6LB65c4H2iE.jpg',
                dia: '18/Feb/22',
                hora: '6:30 am'
            },
        ];
    }
    ngOnInit() {
    }
    openMenu() {
        this.menu.open();
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ofertas_ofertas_page__WEBPACK_IMPORTED_MODULE_2__.OfertasPage,
                cssClass: 'my-modal-class'
            });
            return yield modal.present();
        });
    }
};
InicioTransportadorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
InicioTransportadorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inicio-transportador',
        template: _inicio_transportador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_transportador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioTransportadorPage);



/***/ }),

/***/ 21966:
/*!********************************************************************************!*\
  !*** ./src/app/inicio-transportador/inicio-transportador.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".fotoper5 {\n  font-size: 50px;\n  padding-left: 20px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n\n.boton-up {\n  width: 40px;\n  height: 40px;\n  background-color: black;\n}\n\n.boton-up1 {\n  width: 40px;\n  height: 40px;\n}\n\n.fotoper {\n  font-size: 40px;\n  padding-left: 0px;\n  display: inline-block;\n}\n\n.arr {\n  margin-bottom: 80px;\n  padding-right: 25px;\n}\n\n.baj {\n  margin-top: 40px;\n  padding-left: 10px;\n}\n\n.margin1 {\n  margin-top: 20px;\n}\n\n.espacio {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  padding-left: 30px;\n}\n\n.espacio2 {\n  display: inline-block;\n  margin: 0px;\n  padding-right: 10px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.ajuste {\n  display: inline-block;\n  align-content: right;\n  font-size: 20px;\n  margin-top: 80px;\n}\n\n.space3 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.space4 {\n  display: inline-block;\n  text-align-last: center;\n  align-content: right;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.padre {\n  display: flex;\n  flex-direction: row;\n}\n\n.mejorada {\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n\n.back {\n  background: crimson;\n}\n\n.fondo {\n  align-content: flex-end;\n  align-items: flex-end;\n  margin-top: 400px;\n}\n\n.imgfot {\n  width: 70px;\n  height: 70px;\n}\n\n.imgfot1 {\n  width: 75px;\n  height: 70px;\n}\n\n.margin1 {\n  margin-top: 20px;\n}\n\n.arr {\n  margin-bottom: 80px;\n  padding-right: 20px;\n}\n\n.baj {\n  margin-top: 40px;\n}\n\n.final {\n  margin-top: 400px;\n}\n\n.final2 {\n  margin-top: 500px;\n}\n\n.mover {\n  display: inline-block;\n}\n\n.space1 {\n  display: flex;\n  flex-direction: row;\n}\n\n.space2 {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n\n.data {\n  width: 100%;\n  margin: auto;\n}\n\n.info1 {\n  margin: 10px;\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info {\n  width: 60%;\n  padding: 0%;\n  margin-left: 8px;\n}\n\n.info2 {\n  width: 40%;\n  padding: 0%;\n  margin-right: 8px;\n}\n\n.info3 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info4 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info8 {\n  margin: auto;\n  margin-bottom: 8px;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  background-color: #8a604cc5;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.acepta {\n  text-align: left;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 23px;\n  margin: auto;\n}\n\n.new {\n  text-align: left;\n  font-weight: bold;\n  color: #FF7534;\n  font-size: 15px;\n  margin: 0%;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.tunning1 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  padding-top: 20px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.lola {\n  margin: auto;\n  height: 80px;\n  width: 80px;\n  margin-right: 15px;\n}\n\n.tablita {\n  background-image: url(\"https://as1.ftcdn.net/v2/jpg/00/94/16/56/1000_F_94165689_4XuNBu2xjrweH8F9J1duKkTfOYSOjVmd.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.tunning2 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 15px;\n  padding-left: 28%;\n}\n\n.tunning3 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  font-size: 15px;\n  margin-top: 15px;\n  padding-left: 28%;\n}\n\n.tunning4 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 25px;\n  text-align: center;\n  font-size: 15px;\n}\n\n.tunning5 {\n  margin-left: 10px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 25px;\n  text-align: center;\n  font-size: 15px;\n}\n\n.info10 {\n  margin: auto;\n  margin-top: 15px;\n  font-weight: bold;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.ofo {\n  margin: 0%;\n  padding-left: 20px;\n}\n\n.final {\n  margin: 0%;\n}\n\n.holi {\n  margin: 0%;\n  padding: 0%;\n  margin-top: 8px;\n}\n\n.quitar {\n  margin: 0%;\n  padding: 0%;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby10cmFuc3BvcnRhZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDSSxzSEFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJpbmljaW8tdHJhbnNwb3J0YWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90b3BlcjV7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZXNwYWNpbzV7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cblxuLmJvdG9uLXVwe1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmJvdG9uLXVwMXtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLy9wcnVlYmEgZGUgaW5mb1xuLmZvdG9wZXJ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFycntcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJhantcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWFyZ2luMXtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5lc3BhY2lve1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZXNwYWNpbzJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWp1c3Rle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5zcGFjZTN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNwYWNlNHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhZHJle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWVqb3JhZGF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNre1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xufVxuXG4uZm9uZG97XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDQwMHB4O1xufVxuXG4uaW1nZm90e1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaW1nZm90MXtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLm1hcmdpbjF7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hcnJ7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5iYWp7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5maW5hbHtcbiAgbWFyZ2luLXRvcDogNDAwcHg7XG59XG5cbi5maW5hbDJ7XG4gIG1hcmdpbi10b3A6IDUwMHB4O1xufVxuXG4ubW92ZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNwYWNlMXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zcGFjZTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmRhdGF7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8vcHJ1ZWJhc1xuLmluZm8xe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzhBNjA0Qztcbn1cblxuLmluZm97XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaW5mbzJ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmluZm8ze1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjOEE2MDRDO1xufVxuXG4uaW5mbzR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM4QTYwNEM7XG59XG5cbi5pbmZvOHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2MDRjYzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uYWNlcHRhe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3MDVDNTM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm5ld3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRkY3NTM0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udHVubmluZzF7XG4gICAgY29sb3I6ICM4MDUxM0Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9sYXtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4udGFibGl0YXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FzMS5mdGNkbi5uZXQvdjIvanBnLzAwLzk0LzE2LzU2LzEwMDBfRl85NDE2NTY4OV80WHVOQnUyeGpyd2VIOEY5SjFkdUtrVGZPWVNPalZtZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udHVubmluZzJ7XG4gICAgY29sb3I6ICM4MDUxM0Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjglO1xufVxuXG4udHVubmluZzN7XG4gICAgY29sb3I6ICM4MDUxM0Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4JTtcbn1cblxuLnR1bm5pbmc0e1xuICAgIGNvbG9yOiAjODA1MTNEO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnR1bm5pbmc1e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjODA1MTNEO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmluZm8xMHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzgwNTEzRDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Zve1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZmluYWx7XG4gICAgbWFyZ2luOiAwJTtcbn1cblxuLmhvbGl7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5xdWl0YXJ7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 73810:
/*!********************************************************************************!*\
  !*** ./src/app/inicio-transportador/inicio-transportador.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Solicitudes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"assets/img/mapa.svg\" id=\"imagen\">\n  <ion-fab class=\"final2\" horizontal=\"center\" [routerLink]=\"['/ofertas']\" slot=\"fixed\">\n    <ion-fab-button class=\"boton-up1\">\n      <ion-icon class=\"boton-up\" name=\"arrow-up-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<ion-list class=\"quitar\">\n\n  <ion-card class=\"final\" *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/ofertas', oferta.id]\">\n\n    <div class=\"space2 tablita\">\n\n\n      <div class=\"space1\">\n\n        <div class=\"space2 lola\">\n          <ion-avatar name=\"person-circle-outline\">\n            <ion-img class=\"lola\" [src]=\"oferta.imageUrl1\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"space2 data\">\n\n          <div class=\"space2 tunning2\">\n          <div class=\"space1\">\n            {{oferta.rol1}}\n          </div>\n          <div class=\"space1\">\n            {{oferta.name1}}\n          </div>\n        </div>\n\n        <div class=\"space2 tunning3\">\n          <div class=\"space1 right\">\n            {{oferta.rol2}}\n          </div>\n          <div class=\"space1 right\">\n            {{oferta.name2}}\n          </div>\n        </div>\n\n        </div>\n\n        <div class=\"space2 lola\">\n          <ion-avatar name=\"person-circle-outline\">\n            <ion-img class=\"lola\" [src]=\"oferta.imageUrl2\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n      </div>\n\n      <div class=\"space1\">\n\n        <div class=\"space2 tunning4\">\n          <div class=\"space1\">\n            {{oferta.from}}\n          </div>\n          <div class=\"space1\">\n            {{oferta.desde}}\n          </div>\n        </div>\n\n        <div class=\"space2 tunning5\">\n          <div class=\"space1 right\">\n            {{oferta.to}}\n          </div>\n          <div class=\"space1 right\">\n            {{oferta.hasta}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"space1\">\n        <h3 class=\"info10\">{{oferta.final}}{{oferta.producto}}</h3>\n      </div>\n    </div>\n</ion-card>\n\n</ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio-transportador_inicio-transportador_module_ts.js.map