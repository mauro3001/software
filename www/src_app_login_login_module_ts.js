"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 84053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);






let LoginPage = class LoginPage {
    constructor(fb, alertController, navCtrl) {
        this.fb = fb;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.passwordTypeInput = 'password';
        this.formularioLogin = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
        });
    }
    togglePasswordMode() {
        //cambiar tipo input
        this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
        //obtener el input
        const nativeEl = this.passwordEye.nativeElement.querySelector('input');
        //obtener el indice de la posición del texto actual en el input
        const inputSelection = nativeEl.selectionStart;
        //ejecuto el focus al input
        nativeEl.focus();
        //espero un milisegundo y actualizo la posición del indice del texto
        setTimeout(() => {
            nativeEl.setSelectionRange(inputSelection, inputSelection);
        }, 1);
    }
    ngOnInit() {
    }
    ingresar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const f = this.formularioLogin.value;
            const usuario = JSON.parse(localStorage.getItem('usuario'));
            if ((usuario.email === f.email) && (usuario.password === f.password)) {
                console.log('Ingresado');
                localStorage.setItem('ingresado', 'true');
                if ((usuario.tipoUser === 'vendedor')) {
                    this.navCtrl.navigateRoot('menu/productos');
                }
                if ((usuario.tipoUser === 'comprador')) {
                    this.navCtrl.navigateRoot('menu/inicio-comprador');
                }
                if ((usuario.tipoUser === 'transportador')) {
                    this.navCtrl.navigateRoot('menu/inicio-transportador');
                }
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Datos incorrectos',
                    message: 'Los datos que ingresaste son incorrectos',
                    buttons: ['Aceptar']
                });
                yield alert.present();
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
LoginPage.propDecorators = {
    passwordEye: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['passwordEyeRegister', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 84053:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".btn_eye_icon {\n  position: relative;\n  right: 0;\n  bottom: 4px;\n  background: transparent;\n}\n.btn_eye_icon ion-icon {\n  font-size: 22px;\n  color: #757575;\n}\n.btn_eye_icon:focus {\n  outline: none !important;\n}\nion-content.ion-padding {\n  --background: url('econoagro.png') 0 0/100% 45% no-repeat;\n}\n.row1 {\n  position: relative;\n  top: 400px;\n}\n.row2 {\n  position: relative;\n  top: 410px;\n  text-align: center;\n}\n.row3 {\n  position: relative;\n  top: 460px;\n  text-align: center;\n}\n.botonIngresar {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVOO0FBRUE7RUFDRSx3QkFBQTtBQUNGO0FBRUE7RUFDRSx5REFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2V5ZV9pY29ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGlvbi1pY29ue1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgY29sb3I6Izc1NzU3NTtcbiAgfVxufVxuXG4uYnRuX2V5ZV9pY29uOmZvY3Vze1xuICBvdXRsaW5lOiBub25lICAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudC5pb24tcGFkZGluZ3tcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Vjb25vYWdyby5wbmdcIikgMCAwLzEwMCUgNDUlIG5vLXJlcGVhdDtcbn1cblxuLnJvdzF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MDBweDtcbn1cblxuLnJvdzJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93M3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQ2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3RvbkluZ3Jlc2Fye1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n  <div class=\"row1\">\n    <form [formGroup]=\"formularioLogin\">\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Correo<ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input class=\"input\" required type=\"email\" formControlName=\"email\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label  position=\"floating\" color=\"primary\" style=\"font-family: 'Arial';font-size:large;\">Contraseña<ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input #passwordEyeRegister  [type]=\"passwordTypeInput\"  formControlName=\"password\" clearOnEdit=\"false\" style=\"font-family: 'Arial';font-size:large;\"></ion-input>\n            <button  item-end  class=\"btn_eye_icon\"  (click)=\"togglePasswordMode()\">\n                <ion-icon  [name]=\"(passwordTypeInput === 'text')?'eye':'eye-off'\"></ion-icon>\n            </button>\n        </ion-item>\n\n      </ion-list>\n      <div class=\"botonIngresar\">\n        <ion-button color=\"secondary\" type=\"submit\" (click)=\"ingresar()\" style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px;\">INGRESAR</ion-button>\n      </div>\n    </form>\n  </div>\n  <div class=\"row2\">\n    <ion-button style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px\">\n      <span class=\" landing_form--googleIcon--3Q7rS\" style=\"margin-right: 10px;\">\n        <svg class=\"svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z\" fill-rule=\"evenodd\" fill-opacity=\"1\" fill=\"#4285f4\" stroke=\"none\"></path>\n          <path d=\"M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z\" fill-rule=\"evenodd\" fill-opacity=\"1\" fill=\"#34a853\" stroke=\"none\"></path>\n          <path d=\"M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z\" fill-rule=\"evenodd\" fill-opacity=\"1\" fill=\"#fbbc05\" stroke=\"none\"></path><path d=\"M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z\" fill-rule=\"evenodd\" fill-opacity=\"1\" fill=\"#ea4335\" stroke=\"none\"></path>\n        </svg>\n     </span>Iniciar con Google\n    </ion-button>\n  </div>\n\n  <div class=\"row3\">\n    <ion-button color=\"secondary\" [routerLink]=\"['/registro']\" style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px\">Crea una cuenta</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map