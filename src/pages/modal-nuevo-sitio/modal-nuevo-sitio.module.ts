import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoSitio } from './modal-nuevo-sitio';

@NgModule({
  declarations: [
    ModalNuevoSitio,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoSitio),
  ],
  exports: [
    ModalNuevoSitio
  ]
})
export class ModalNuevoSitioModule {}
