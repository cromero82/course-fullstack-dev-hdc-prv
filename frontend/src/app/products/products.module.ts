import { DemoMaterialModule } from './../demo-material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';


@NgModule({
  declarations: [
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
