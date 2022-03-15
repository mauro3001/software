import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesVendedorPage } from './solicitudes-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesVendedorPage
  },
  {
    path: 'solicitud-detail',
    loadChildren: () => import('./solicitud-detail/solicitud-detail.module').then( m => m.SolicitudDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesVendedorPageRoutingModule {}
