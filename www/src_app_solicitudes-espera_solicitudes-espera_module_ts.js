"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_solicitudes-espera_solicitudes-espera_module_ts"],{

/***/ 28546:
/*!*************************************************************************!*\
  !*** ./src/app/solicitudes-espera/solicitudes-espera-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesEsperaPageRoutingModule": () => (/* binding */ SolicitudesEsperaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _solicitudes_espera_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-espera.page */ 77074);




const routes = [
    {
        path: '',
        component: _solicitudes_espera_page__WEBPACK_IMPORTED_MODULE_0__.SolicitudesEsperaPage
    }
];
let SolicitudesEsperaPageRoutingModule = class SolicitudesEsperaPageRoutingModule {
};
SolicitudesEsperaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SolicitudesEsperaPageRoutingModule);



/***/ }),

/***/ 6804:
/*!*****************************************************************!*\
  !*** ./src/app/solicitudes-espera/solicitudes-espera.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesEsperaPageModule": () => (/* binding */ SolicitudesEsperaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _solicitudes_espera_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-espera-routing.module */ 28546);
/* harmony import */ var _solicitudes_espera_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitudes-espera.page */ 77074);







let SolicitudesEsperaPageModule = class SolicitudesEsperaPageModule {
};
SolicitudesEsperaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _solicitudes_espera_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudesEsperaPageRoutingModule
        ],
        declarations: [_solicitudes_espera_page__WEBPACK_IMPORTED_MODULE_1__.SolicitudesEsperaPage]
    })
], SolicitudesEsperaPageModule);



/***/ }),

/***/ 77074:
/*!***************************************************************!*\
  !*** ./src/app/solicitudes-espera/solicitudes-espera.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesEsperaPage": () => (/* binding */ SolicitudesEsperaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _solicitudes_espera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitudes-espera.page.html?ngResource */ 61950);
/* harmony import */ var _solicitudes_espera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitudes-espera.page.scss?ngResource */ 30053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let SolicitudesEsperaPage = class SolicitudesEsperaPage {
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
SolicitudesEsperaPage.ctorParameters = () => [];
SolicitudesEsperaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-solicitudes-espera',
        template: _solicitudes_espera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_solicitudes_espera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SolicitudesEsperaPage);



/***/ }),

/***/ 30053:
/*!****************************************************************************!*\
  !*** ./src/app/solicitudes-espera/solicitudes-espera.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".space1 {\n  display: flex;\n  flex-direction: row;\n}\n\n.space2 {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n}\n\n.info1 {\n  margin: 10px;\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info {\n  width: 60%;\n  padding: 0%;\n  margin-left: 8px;\n}\n\n.info2 {\n  width: 40%;\n  padding: 0%;\n  margin-right: 8px;\n}\n\n.info3 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info4 {\n  text-align: left;\n  font-size: 15px;\n  color: #8A604C;\n}\n\n.info8 {\n  margin: auto;\n  margin-bottom: 8px;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  background-color: #8a604cc5;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.acepta {\n  text-align: left;\n  font-weight: bold;\n  color: #705C53;\n  font-size: 23px;\n  margin: auto;\n}\n\n.new {\n  text-align: left;\n  font-weight: bold;\n  color: #FF7534;\n  font-size: 15px;\n  margin: 0%;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.tunning1 {\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  padding-top: 20px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.tablita {\n  background-image: url(\"https://t3.ftcdn.net/jpg/01/96/88/80/360_F_196888071_FQKFmhkhwmBvZFZ9lCY6L9ilnxXMfwVk.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.tablita2 {\n  background-image: url(\"https://as1.ftcdn.net/v2/jpg/00/94/16/56/1000_F_94165689_4XuNBu2xjrweH8F9J1duKkTfOYSOjVmd.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.tunning2 {\n  margin-top: 15px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 15px;\n  width: 50%;\n}\n\n.tunning3 {\n  margin-left: 20px;\n  margin-top: 15px;\n  color: #80513D;\n  background-color: white;\n  border-radius: 50px;\n  font-size: 15px;\n  width: 50%;\n}\n\n.info10 {\n  margin: auto;\n  margin-top: 15px;\n  font-weight: bold;\n  padding: 5px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  background-color: #FF7534;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.ofo {\n  margin: 0%;\n  padding-left: 20px;\n}\n\n.final {\n  margin: 0%;\n}\n\n.holi {\n  margin: 0%;\n  padding: 0%;\n  margin-top: 8px;\n}\n\n.quitar {\n  margin: 0%;\n  padding: 0%;\n  margin-top: 8px;\n}\n\n.espacio5 {\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLWVzcGVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksa0hBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxzSEFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoic29saWNpdHVkZXMtZXNwZXJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZTF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3BhY2Uye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5pbmZvMXtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM4QTYwNEM7XG59XG5cbi5pbmZve1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmluZm8ye1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5pbmZvM3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzhBNjA0Qztcbn1cblxuLmluZm80e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjOEE2MDRDO1xufVxuXG4uaW5mbzh7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhNjA0Y2M1O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmFjZXB0YXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNzA1QzUzO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5uZXd7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGNzUzNDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnR1bm5pbmcxe1xuICAgIGNvbG9yOiAjODA1MTNEO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4udGFibGl0YXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3QzLmZ0Y2RuLm5ldC9qcGcvMDEvOTYvODgvODAvMzYwX0ZfMTk2ODg4MDcxX0ZRS0ZtaGtod21CdlpGWjlsQ1k2TDlpbG54WE1md1ZrLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50YWJsaXRhMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FzMS5mdGNkbi5uZXQvdjIvanBnLzAwLzk0LzE2LzU2LzEwMDBfRl85NDE2NTY4OV80WHVOQnUyeGpyd2VIOEY5SjFkdUtrVGZPWVNPalZtZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udHVubmluZzJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogIzgwNTEzRDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnR1bm5pbmcze1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICM4MDUxM0Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmluZm8xMHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzUzNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Zve1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZmluYWx7XG4gICAgbWFyZ2luOiAwJTtcbn1cblxuLmhvbGl7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5xdWl0YXJ7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZXNwYWNpbzV7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 61950:
/*!****************************************************************************!*\
  !*** ./src/app/solicitudes-espera/solicitudes-espera.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"person-circle-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Solicitudes en Espera</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"space2 holi\">\n\n    <div class=\"space1\">\n      <h1 class=\"acepta\">Aceptadas</h1>\n    </div>\n\n    <div class=\"space1\">\n      <h3 class=\"info1\">Las solicitudes que sean aceptadas pasaran a la seccion de Programados.\n      </h3>\n    </div>\n\n  </div>\n\n  <ion-list class=\"quitar\">\n\n  <div class=\"space1 ofo\">\n      <h3 class=\"info3\">Aceptada el 18/Feb/22 a las 3:45 pm</h3>\n  </div>\n\n  <ion-card class=\"final\" *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/ofertas', oferta.id]\">\n\n    <div class=\"space2 tablita\">\n\n      <div class=\"space1\">\n        <h3 class=\"info8\">Fecha de inicio: 18/Feb/22 a las 3:45 pm</h3>\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img [src]=\"oferta.imageUrl1\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"space2 tunning1\">\n          {{ oferta.final }} {{oferta.producto}}\n        </div>\n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img [src]=\"oferta.imageUrl2\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2 tunning2\">\n          <div class=\"space1\">\n            {{oferta.rol1}}\n          </div>\n          <div class=\"space1\"> \n            {{oferta.name1}}\n          </div>\n        </div>\n\n        <div class=\"space2 tunning3\">\n          <div class=\"space1 right\">\n            {{oferta.rol2}}\n          </div>\n          <div class=\"space1 right\"> \n            {{oferta.name2}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"space1\">\n        <h3 class=\"info10\">Valor Cotizado: $120.000</h3>\n      </div>\n    </div>\n</ion-card>\n\n</ion-list>\n\n\n\n\n  <div class=\"space2 holi\">\n\n    <div class=\"space1\">\n      <h1 class=\"acepta\">Enviadas</h1>\n    </div>\n\n    <div class=\"space1\">\n      <h1 class=\"new\">Nueva</h1>\n    </div>\n\n    <div class=\"space1 ola\">\n      <div class=\"space2 info\">\n        <h3 class=\"info3\">Enviada el 20/Ene/22 a las 9:00 am</h3>\n      </div>\n\n      <div class=\"space2 info2\">\n        <h3 class=\"info4\">Vence en: 14H : 34 Min</h3>\n      </div>\n    </div>\n\n  </div>\n\n  <ion-list>\n  <ion-card class=\"final\" *ngFor=\"let oferta of ofertas\" [routerLink]=\"['/ofertas', oferta.id]\">\n\n    <div class=\"space2 tablita2\">\n\n      <div class=\"space1\">\n        <h3 class=\"info8\">Fecha de inicio: 20/Ene/22 a las 9:00 am</h3>\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img src=\"https://img.fotocommunity.com/perfil-campesino-d8d0b847-ccdc-4063-95fc-1eea6240874d.jpg?height=1000\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"space2 tunning1\">\n          50 Manojos Banano Bocadillo\n        </div>\n\n        <div class=\"space2\">\n          <ion-avatar name=\"person-circle-outline\" class=\"imgfot1 arr\">\n            <ion-img src=\"https://media.gettyimages.com/photos/actress-maisie-richardsonsellers-from-cws-legends-of-tomorrow-poses-picture-id821805582?s=612x612\">\n            </ion-img>\n          </ion-avatar>\n        </div>\n\n      </div>\n\n      <div class=\"space1\"> \n\n        <div class=\"space2 tunning2\">\n          <div class=\"space1\">\n            Vendedor:\n          </div>\n          <div class=\"space1\"> \n            Jairo Gomez\n          </div>\n        </div>\n\n        <div class=\"space2 tunning3\">\n          <div class=\"space1 right\">\n            Comprador:\n          </div>\n          <div class=\"space1 right\"> \n            Marta Peña\n          </div>\n        </div>\n      </div>\n\n      <div class=\"space1\">\n        <h3 class=\"info10\">Valor Cotizado: $100.000</h3>\n      </div>\n    </div>\n</ion-card>\n\n</ion-list>\n\n<div>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" color=\"success\">\n\n        <ion-tab-button tab=\"inicio\" [routerLink]=\"['/menu/inicio-transportador']\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"en_espera\" style=\"background-color:rgb(118, 189, 118)\">\n          <ion-icon name=\"hourglass-outline\"></ion-icon>\n          <ion-label>En espera</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"programados\" [routerLink]=\"['/envios-programados']\">\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <ion-label>Programados</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"entregas\" [routerLink]=\"['/entregas-envios']\">\n          <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n          <ion-label>Entregas</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </div>\n\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_solicitudes-espera_solicitudes-espera_module_ts.js.map