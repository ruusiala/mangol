import { NgModule } from '@angular/core';

import { MangolMapModule } from './map/_index';
import { MangolContainerModule } from './container/_index';
import { MangolSidebarModule } from './sidebar/_index';
import { MangolLayertreeModule } from './layertree/_index';
import { MangolPrintModule } from './print/_index';
import { MangolMeasureModule } from './measure/_index';

import { MangolMapService } from './../services/map.service';

const MANGOL_MODULES = [
  MangolContainerModule,
  MangolLayertreeModule,
  MangolMapModule,
  MangolMeasureModule,
  MangolPrintModule,
  MangolSidebarModule
];

@NgModule({
  imports: MANGOL_MODULES,
  exports: MANGOL_MODULES,
})
export class MangolModule { }
