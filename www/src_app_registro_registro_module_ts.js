"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 84967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 12299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 10636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 84967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 12299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 12299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 29575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 28681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);






let RegistroPage = class RegistroPage {
    constructor(fb, alertController, navCtrl) {
        this.fb = fb;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.passwordTypeInput1 = 'password';
        this.passwordTypeInput2 = 'password';
        this.formularioRegistro = this.fb.group({
            tipoUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            confirmacionPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
        });
    }
    togglePasswordMode() {
        //cambiar tipo input
        this.passwordTypeInput1 = this.passwordTypeInput1 === 'text' ? 'password' : 'text';
        this.passwordTypeInput2 = this.passwordTypeInput2 === 'text' ? 'password' : 'text';
    }
    ngOnInit() {
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const f = this.formularioRegistro.value;
            if (this.formularioRegistro.invalid) {
                const alert = yield this.alertController.create({
                    header: 'Datos incompletos o incorrectos',
                    message: 'Tiene que llenar todos los espacio y escribirlos correctamente',
                    buttons: ['Aceptar']
                });
                yield alert.present();
                return;
            }
            if (this.formularioRegistro.value.password === this.formularioRegistro.value.confirmacionPassword) {
                const usuario = {
                    tipoUser: f.tipoUser,
                    nombre: f.nombre,
                    password: f.password,
                    email: f.email
                };
                localStorage.setItem('usuario', JSON.stringify(usuario));
                if (this.formularioRegistro.value.tipoUser === 'comprador') {
                    this.navCtrl.navigateRoot('menu/inicio-comprador');
                }
                if (this.formularioRegistro.value.tipoUser === 'transportador') {
                    this.navCtrl.navigateRoot('menu/inicio-transportador');
                }
                if (this.formularioRegistro.value.tipoUser === 'vendedor') {
                    this.navCtrl.navigateRoot('menu/productos');
                }
                localStorage.setItem('ingresado', 'true');
                const alert = yield this.alertController.create({
                    header: 'Confirmación',
                    message: 'Su cuenta se ha creado exitosamente',
                    buttons: ['Continuar']
                });
                yield alert.present();
                return;
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Contraseña incorrecta',
                    message: 'La contraseña no coincide con la confirmación de la contraseña',
                    buttons: ['Aceptar']
                });
                yield alert.present();
                return;
            }
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
RegistroPage.propDecorators = {
    passwordEye: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['passwordCheckRegister', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 28681:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".sizeImg img {\n  height: 70px;\n  width: 100px;\n  border: 5px solid transparent;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-content.ion-padding {\n  --background: url('registro.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-title {\n  text-align: center;\n}\n\nion-label {\n  --font-family: \"Arial\";\n  --font-size:medium;\n  --color:#FF900D;\n}\n\n.container {\n  position: relative;\n  top: 20px;\n  height: 750px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5REFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVJbWcgaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudC5pb24tcGFkZGluZ3tcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3JlZ2lzdHJvLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLXRpdGxle1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuaW9uLWxhYmVse1xuICAtLWZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAtLWZvbnQtc2l6ZTptZWRpdW07XG4gIC0tY29sb3I6I0ZGOTAwRDtcbn1cblxuLmNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGhlaWdodDogNzUwcHg7XG59XG5cbi5lc3BhY2lvNXtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 29575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">REGISTRO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"container\">\n    <ion-card-content>\n      <form [formGroup]=\"formularioRegistro\" (keyup.enter)=\"guardar()\">\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n          <ion-item lines=\"none\">\n            <ion-label color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Tipo de usuario<ion-text color=\"danger\">*</ion-text></ion-label>\n          </ion-item>\n          <ion-radio-group required type=\"checkbox\" formControlName=\"tipoUser\">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <label class=\"sizeImg\">\n                    <ion-label style=\"font-family: 'Arial';font-size:large;\">Vendedor</ion-label>\n                    <img src=\"https://static.dw.com/image/55545493_403.jpg\"/>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"vendedor\"></ion-radio>\n                  </label>\n                </ion-col>\n                <ion-col>\n                  <label class=\"sizeImg\">\n                    <ion-label style=\"font-family: 'Arial';font-size:large;\">Comprador</ion-label>\n                    <img src=\"https://www.larazon.es/resizer/ipcBsl7KSGUT9tGmwrvkPpzOLP8=/1800x1200/smart/filters:format(webp):quality(65)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/DQGFPDWKCJGLHEVA2Z5J6NGNZY.jpg\"/>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"comprador\"></ion-radio>\n                  </label>\n                </ion-col>\n                <ion-col>\n                  <label class=\"sizeImg\">\n                    <ion-label style=\"font-family: 'Arial';font-size:large;\">Transportador</ion-label>\n                    <img src=\"https://www.utadeo.edu.co/sites/tadeo/files/node/wysiwyg/whatsapp_image_2020-11-18_at_6.37.30_pm.jpeg\"/>\n                    <ion-radio slot=\"start\" color=\"success\" value=\"transportador\"></ion-radio>\n                  </label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-radio-group>\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Nombre<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required formControlName=\"nombre\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Correo<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required type=\"email\" formControlName=\"email\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label  position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Contraseña<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input  #passwordEyeRegister  [type]=\"passwordTypeInput1\"  formControlName=\"password\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label  position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Confirmación de contraseña<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input  #passwordEyeRegister  [type]=\"passwordTypeInput2\"  formControlName=\"confirmacionPassword\" clearOnEdit=\"false\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-checkbox slot=\"start\" (ionChange)=\"togglePasswordMode()\"></ion-checkbox>\n            <ion-label color=\"secondary\" style=\"font-family: 'Arial';font-size:medium;\">Mostrar contraseña</ion-label>\n          </ion-item>\n        </ion-list>\n        <div style=\"padding-top:50px; text-align: center;\">\n          <ion-button color=\"secondary\" (click)=\"guardar()\" style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px;\">REGISTRARME</ion-button>\n        </div>\n     </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map