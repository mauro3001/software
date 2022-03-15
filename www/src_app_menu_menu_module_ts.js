"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 61198:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ingresado_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ingresado.guard */ 54612);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 25915);





//canActivate: [IngresadoGuard]
//canActivate: [NoIngresadoGuard]
const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage,
        children: [
            {
                path: 'informacion-personal',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_informacion-personal_informacion-personal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../informacion-personal/informacion-personal.module */ 28218)).then(m => m.InformacionPersonalPageModule),
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            {
                path: 'inicio-comprador',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inicio-comprador_inicio-comprador_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../inicio-comprador/inicio-comprador.module */ 33787)).then(m => m.InicioCompradorPageModule),
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            {
                path: 'inicio-transportador',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ofertas_ofertas_page_ts"), __webpack_require__.e("src_app_inicio-transportador_inicio-transportador_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../inicio-transportador/inicio-transportador.module */ 44446)).then(m => m.InicioTransportadorPageModule),
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            // {
            //   path: 'inicio-vendedor',
            //   loadChildren: () => import('../inicio-vendedor/inicio-vendedor.module').then( m => m.InicioVendedorPageModule),
            //   canActivate: [IngresadoGuard]
            // },
            {
                path: 'productos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_productos_productos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../productos/productos.module */ 41011)).then(m => m.ProductosPageModule)
                    },
                    {
                        path: ':productoId',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../productos/producto-detail/producto-detail.module */ 9297)).then(m => m.ProductoDetailPageModule)
                    }
                ],
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            {
                path: 'new-producto',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../productos/producto-add/producto-add-routing.module */ 2575)).then(m => m.ProductoAddPageRoutingModule),
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            {
                path: 'solicitudes-vendedor',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_solicitudes-vendedor_solicitudes-vendedor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../solicitudes-vendedor/solicitudes-vendedor.module */ 44991)).then(m => m.SolicitudesVendedorPageModule),
                    },
                    {
                        path: ':solicitudId',
                        // eslint-disable-next-line max-len
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../solicitudes-vendedor/solicitud-detail/solicitud-detail.module */ 68173)).then(m => m.SolicitudDetailPageModule)
                    }
                ],
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
            {
                path: 'despachos-vendedor',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_despachos-vendedor_despachos-vendedor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../despachos-vendedor/despachos-vendedor.module */ 31222)).then(m => m.DespachosVendedorPageModule),
                canActivate: [_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.IngresadoGuard]
            },
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
    constructor() {
        this.infoUser = JSON.parse(localStorage.getItem('usuario'));
    }
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 32825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 61198);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 25915);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 25915:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 31757);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 63160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 95472);





let MenuPage = class MenuPage {
    constructor(alertController, navCtrl) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.indiceSeleccionado = 0;
        this.paginas = [];
        this.changeUser = [];
        this.rutaChangeUser = [];
        this.infoUser = JSON.parse(localStorage.getItem('usuario'));
    }
    ngOnInit() {
        if (this.infoUser.tipoUser === 'comprador') {
            this.changeUser = ['transportador', 'vendedor'];
            this.rutaChangeUser = ['/menu/inicio-transportador', '/menu/productos'];
            this.paginas = [
                {
                    titulo: 'Inicio comprador',
                    url: '/menu/inicio-comprador',
                    icono: 'home'
                },
                {
                    titulo: 'Información personal',
                    url: '/menu/informacion-personal',
                    icono: 'person'
                },
                {
                    titulo: 'Soporte',
                    icono: 'settings'
                },
            ];
        }
        ;
        if (this.infoUser.tipoUser === 'transportador') {
            this.changeUser = ['comprador', 'vendedor'];
            this.rutaChangeUser = ['/menu/inicio-comprador', '/menu/productos'];
            this.paginas = [
                {
                    titulo: 'Inicio transportador',
                    url: '/menu/inicio-transportador',
                    icono: 'home'
                },
                {
                    titulo: 'Información personal',
                    url: '/menu/informacion-personal',
                    icono: 'person'
                },
                {
                    titulo: 'Soporte',
                    icono: 'settings'
                },
            ];
        }
        ;
        if (this.infoUser.tipoUser === 'vendedor') {
            this.changeUser = ['comprador', 'transportador'];
            this.rutaChangeUser = ['/menu/inicio-comprador', '/menu/inicio-transportador'];
            this.paginas = [
                {
                    titulo: 'Inicio vendedor',
                    url: '/menu/productos',
                    icono: 'home'
                },
                {
                    titulo: 'Información personal',
                    url: '/menu/informacion-personal',
                    icono: 'person'
                },
                {
                    titulo: 'Soporte',
                    icono: 'settings'
                },
            ];
        }
        ;
    }
    cambiarIndiceSeleccionado(i) {
        this.indiceSeleccionado = i;
    }
    cambiarIndiceSeleccionado2(j, user) {
        this.indiceSeleccionado = j;
        localStorage.setItem('usuario', localStorage.getItem('usuario').replace(this.infoUser.tipoUser, user));
        this.infoUser.tipoUser = user;
        this.ngOnInit();
    }
    salir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Salir',
                message: '¿Desea realmente cerrar sesión?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: () => {
                            localStorage.removeItem('ingresado');
                            this.navCtrl.navigateRoot('login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    closeAccordion() {
        this.accordionGroup.value = undefined;
    }
    hideTabs() {
        const tabBar = document.getElementById('myTabBar');
        if (tabBar !== null && tabBar.style.display !== 'none') {
            tabBar.style.display = 'none';
        }
    }
    showTabs() {
        const tabBar = document.getElementById('myTabBar');
        if (tabBar !== null && tabBar.style.display !== 'flex') {
            tabBar.style.display = 'flex';
        }
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
MenuPage.propDecorators = {
    accordionGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAccordionGroup, { static: true },] }]
};
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu',
        template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 63160:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-avatar {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  position: relative;\n  overflow: hidden;\n}\n\n.container0 {\n  display: flex;\n  flex-direction: row;\n}\n\n.tam {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.icon2 {\n  font-size: 25px;\n  margin-top: 5px;\n  margin-left: 30px;\n  display: inline-block;\n  justify-content: space-between;\n  color: white;\n}\n\n.name {\n  display: inline-block;\n  padding-right: 30px;\n  font-size: 20px;\n  justify-content: space-between;\n  font-family: \"Arial\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBTEYiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tYXZhdGFye1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC8vYm9yZGVyOiA0cHggc29saWQgd2hpdGVcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGFte1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaWNvbjJ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hbWV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xufVxuIl19 */";

/***/ }),

/***/ 31757:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-split-pane contentId=\"main\">\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <div class=\"container0\">\n        <ion-toolbar class=\"tam\" color=\"success\">\n          <ion-icon class=\"icon2\" name=\"person\"></ion-icon>\n          <ion-title class=\"name\">{{infoUser.nombre}}</ion-title>\n        </ion-toolbar>\n        </div>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let pagina of paginas; let i=index\">\n          <ion-item (click)=\"cambiarIndiceSeleccionado(i)\" routerDirection=\"root\" [routerLink]=\"[pagina.url]\"\n            lines=\"none\" detail=\"false\" [class.selected]=\"indiceSeleccionado === i\">\n            <ion-icon slot=\"start\" [name]=\"pagina.icono + '-outline'\"></ion-icon>\n            <ion-label color=\"primary\">{{pagina.titulo}}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-accordion-group>\n            <ion-accordion>\n              <ion-item slot=\"header\">\n                <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n                <ion-label>Cambiar de perfil</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\" *ngFor=\"let user of changeUser; let j=index\" style=\"padding:0px;\">\n                <ion-item style=\"margin-left: 60px;\" (click)=\"cambiarIndiceSeleccionado2(j, user)\" routerDirection=\"root\" [routerLink]=\"[rutaChangeUser[j]]\"\n                  lines=\"none\">\n                  <ion-label color=\"primary\">{{user}}</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-accordion>\n          </ion-accordion-group>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-item (click)=\"salir()\" routerDirection=\"root\" lines=\"none\" detail=\"false\">\n            <ion-icon slot=\"start\" [name]=\"'exit-outline'\"></ion-icon>\n            <ion-label>Salir</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\" main></ion-router-outlet>\n\n  <ion-tabs *ngIf=\"infoUser.tipoUser==='vendedor'\" id=\"tabVend\">\n    <ion-tab-bar slot=\"bottom\" color=\"success\">\n      <ion-tab-button tab=\"solicitudes\" [routerLink]=\"['/menu/solicitudes-vendedor']\">\n        <ion-icon name=\"reader\"></ion-icon>\n        <ion-label>solicitudes</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"inicio\" [routerLink]=\"['/menu/productos']\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"entregas\" [routerLink]=\"['/menu/despachos-vendedor']\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-label>Entregas</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n  <ion-tabs *ngIf=\"infoUser.tipoUser==='transportador'\">\n    <ion-tab-bar slot=\"bottom\" color=\"success\">\n\n      <ion-tab-button tab=\"inicio\" [routerLink]=\"['/menu/inicio-transportador']\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"en_espera\" [routerLink]=\"['/solicitudes-espera']\">\n        <ion-icon name=\"hourglass-outline\"></ion-icon>\n        <ion-label>En espera</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"programados\" [routerLink]=\"['/envios-programados']\">\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n        <ion-label>Programados</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"entregas\" [routerLink]=\"['/entregas-envios']\">\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        <ion-label>Entregas</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n  <ion-tabs *ngIf=\"infoUser.tipoUser==='comprador'\">\n    <ion-tab-bar slot=\"bottom\" color=\"success\">\n      <ion-tab-button tab=\"solicitudes\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"entregas\" [routerLink]=\"['/noticias']\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-label>Noticias</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-split-pane>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map