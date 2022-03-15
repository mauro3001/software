"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_envios-programados_envios-programados_module_ts"],{

/***/ 62435:
/*!*************************************************************************!*\
  !*** ./src/app/envios-programados/envios-programados-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviosProgramadosPageRoutingModule": () => (/* binding */ EnviosProgramadosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _envios_programados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envios-programados.page */ 36734);




const routes = [
    {
        path: '',
        component: _envios_programados_page__WEBPACK_IMPORTED_MODULE_0__.EnviosProgramadosPage
    }
];
let EnviosProgramadosPageRoutingModule = class EnviosProgramadosPageRoutingModule {
};
EnviosProgramadosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnviosProgramadosPageRoutingModule);



/***/ }),

/***/ 21146:
/*!*****************************************************************!*\
  !*** ./src/app/envios-programados/envios-programados.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviosProgramadosPageModule": () => (/* binding */ EnviosProgramadosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _envios_programados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envios-programados-routing.module */ 62435);
/* harmony import */ var _envios_programados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envios-programados.page */ 36734);







let EnviosProgramadosPageModule = class EnviosProgramadosPageModule {
};
EnviosProgramadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _envios_programados_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnviosProgramadosPageRoutingModule
        ],
        declarations: [_envios_programados_page__WEBPACK_IMPORTED_MODULE_1__.EnviosProgramadosPage]
    })
], EnviosProgramadosPageModule);



/***/ }),

/***/ 36734:
/*!***************************************************************!*\
  !*** ./src/app/envios-programados/envios-programados.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviosProgramadosPage": () => (/* binding */ EnviosProgramadosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _envios_programados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envios-programados.page.html?ngResource */ 64908);
/* harmony import */ var _envios_programados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envios-programados.page.scss?ngResource */ 31216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let EnviosProgramadosPage = class EnviosProgramadosPage {
    constructor() {
        this.ofertas = [
            {
                id: '2',
                rol1: 'Vendedor:',
                name1: 'Camilo Ramirez',
                rol2: 'Comprador:',
                name2: 'Raul Diaz',
                from: 'Desde:',
                desde: 'San Bernardo, Norte de Santander',
                to: 'Hasta:',
                hasta: 'Cra 12 #15-23, Bucaramanga',
                final: '50 Racimos',
                producto: 'Platano Verde',
                imageUrl1: 'https://comisiondelaverdad.co/images/zoo/noticias/images/Campesinos-foto-luna1.jpg',
                imageUrl2: 'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
                imagePro: 'https://www.semana.com/resizer/AEcetmUovCztZonFY6mq2ZpQMGo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/JX7PPPXC7NAGJA5FMFEOJKQGLI.PNG',
                dia: '20/Ene/22',
                hora: '9:00 am'
            },
        ];
    }
    ngOnInit() {
    }
};
EnviosProgramadosPage.ctorParameters = () => [];
EnviosProgramadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-envios-programados',
        template: _envios_programados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_envios_programados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EnviosProgramadosPage);



/***/ }),

/***/ 31216:
/*!****************************************************************************!*\
  !*** ./src/app/envios-programados/envios-programados.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".space1 {\n  display: flex;\n  flex-direction: row;\n}\n\n.space2 {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n\n.info1 {\n  margin: 10px;\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info {\n  width: 60%;\n  padding: 0%;\n  margin-left: 8px;\n}\n\n.info2 {\n  width: 40%;\n  padding: 0%;\n  margin-right: 8px;\n}\n\n.info3 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info4 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info8 {\n  margin: auto;\n  margin-bottom: 8px;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  background-color: #8a604cc5;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.acepta {\n  text-align: left;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 23px;\n  margin: auto;\n}\n\n.new {\n  text-align: left;\n  font-weight: bold;\n  color: #FF7534;\n  font-size: 15px;\n  margin: 0%;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.tunning1 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  padding-top: 20px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.tablita {\n  background-image: url(\"https://t3.ftcdn.net/jpg/01/96/88/80/360_F_196888071_FQKFmhkhwmBvZFZ9lCY6L9ilnxXMfwVk.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.tablita2 {\n  background-image: url(\"https://as1.ftcdn.net/v2/jpg/00/94/16/56/1000_F_94165689_4XuNBu2xjrweH8F9J1duKkTfOYSOjVmd.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.tunning2 {\n  margin-top: 15px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 15px;\n  width: 50%;\n}\n\n.tunning3 {\n  margin-left: 20px;\n  margin-top: 15px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  font-size: 15px;\n  width: 50%;\n}\n\n.info10 {\n  margin: auto;\n  margin-top: 15px;\n  font-weight: bold;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  background-color: #FF7534;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.ofo {\n  margin: 0%;\n  padding-left: 20px;\n}\n\n.final {\n  margin: 0%;\n}\n\n.holi {\n  margin: 0%;\n  padding: 0%;\n  margin-top: 8px;\n}\n\n.quitar {\n  padding: 0%;\n  margin-top: 50%;\n}\n\n.espacio5 {\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlvcy1wcm9ncmFtYWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksa0hBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxzSEFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJlbnZpb3MtcHJvZ3JhbWFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlMXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zcGFjZTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmluZm8xe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzhBNjA0Qztcbn1cblxuLmluZm97XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaW5mbzJ7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmluZm8ze1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjOEE2MDRDO1xufVxuXG4uaW5mbzR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM4QTYwNEM7XG59XG5cbi5pbmZvOHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2MDRjYzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uYWNlcHRhe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3MDVDNTM7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm5ld3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRkY3NTM0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udHVubmluZzF7XG4gICAgY29sb3I6ICM4MDUxM0Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi50YWJsaXRhe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdDMuZnRjZG4ubmV0L2pwZy8wMS85Ni84OC84MC8zNjBfRl8xOTY4ODgwNzFfRlFLRm1oa2h3bUJ2WkZaOWxDWTZMOWlsbnhYTWZ3VmsuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRhYmxpdGEye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYXMxLmZ0Y2RuLm5ldC92Mi9qcGcvMDAvOTQvMTYvNTYvMTAwMF9GXzk0MTY1Njg5XzRYdU5CdTJ4anJ3ZUg4RjlKMWR1S2tUZk9ZU09qVm1kLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50dW5uaW5nMntcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiAjODA1MTNEO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udHVubmluZzN7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogIzgwNTEzRDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uaW5mbzEwe1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NTM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vZm97XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5maW5hbHtcbiAgICBtYXJnaW46IDAlO1xufVxuXG4uaG9saXtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnF1aXRhcntcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbi5lc3BhY2lvNXtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 64908:
/*!****************************************************************************!*\
  !*** ./src/app/envios-programados/envios-programados.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header  class=\"center\">\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Envios Programados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class=\"quitar\">\n\n  <div class=\"space1 ofo\">\n      <h3 class=\"info3\">Confirmada el 18/Feb/22 a las 3:45 pm</h3>\n  </div>\n\n  <ion-card class=\"final\" *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/ofertas', oferta.id]\">\n\n    <div class=\"space2 tablita\">\n\n      <div class=\"space1\">\n        <h3 class=\"info8\">Fecha de inicio: 18/Feb/22 a las 3:45 pm</h3>\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img [src]=\"oferta.imageUrl1\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"space2 tunning1\">\n          {{ oferta.final }} {{oferta.producto}}\n        </div>\n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img [src]=\"oferta.imageUrl2\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2 tunning2\">\n          <div class=\"space1\">\n            {{oferta.rol1}}\n          </div>\n          <div class=\"space1\"> \n            {{oferta.name1}}\n          </div>\n        </div>\n\n        <div class=\"space2 tunning3\">\n          <div class=\"space1 right\">\n            {{oferta.rol2}}\n          </div>\n          <div class=\"space1 right\"> \n            {{oferta.name2}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"space1\">\n        <h3 class=\"info10\">Valor Cotizado: $120.000</h3>\n      </div>\n    </div>\n\n    <div class=\"space1 ofo\">\n      <h3 class=\"info3\">Estado: Esperando a la fecha indicada para iniciar el proceso de entrega</h3>\n  </div>\n\n</ion-card>\n\n</ion-list>\n\n\n\n<div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" color=\"success\">\n\n        <ion-tab-button tab=\"inicio\" [routerLink]=\"['/menu/inicio-transportador']\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"en_espera\" [routerLink]=\"['/solicitudes-espera']\">\n          <ion-icon name=\"hourglass-outline\"></ion-icon>\n          <ion-label>En espera</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"programados\" style=\"background-color:rgb(118, 189, 118)\">\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <ion-label>Programados</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"entregas\" [routerLink]=\"['/entregas-envios']\">\n          <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n          <ion-label>Entregas</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_envios-programados_envios-programados_module_ts.js.map