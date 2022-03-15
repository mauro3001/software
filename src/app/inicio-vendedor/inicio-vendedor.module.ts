import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioVendedorPageRoutingModule } from './inicio-vendedor-routing.module';

import { InicioVendedorPage } from './inicio-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InicioVendedorPageRoutingModule
  ],
  declarations: [InicioVendedorPage]
})
export class InicioVendedorPageModule {}
