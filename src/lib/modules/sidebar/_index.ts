import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';

import { MangolLayertreeModule } from './../layertree/_index';
import { MangolPrintModule } from './../print/_index';
import { MangolMeasureModule } from './../measure/_index';

import { MangolSidebarComponent } from './sidebar.component';
import { MangolToolbarComponent } from './toolbar.component';
import { MangolMaterialModule } from '../_shared/mangol-material.module';

@NgModule({
  imports: [
    CommonModule,
    MangolMaterialModule,
    MangolLayertreeModule,
    MangolPrintModule,
    MangolMeasureModule
  ],
  exports: [
    MangolSidebarComponent
  ],
  declarations: [
    MangolSidebarComponent,
    MangolToolbarComponent
  ]
})
export class MangolSidebarModule { }
