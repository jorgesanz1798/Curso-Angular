import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
