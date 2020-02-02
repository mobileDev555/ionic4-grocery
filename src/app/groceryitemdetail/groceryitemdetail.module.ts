import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroceryitemdetailPageRoutingModule } from './groceryitemdetail-routing.module';

import { GroceryitemdetailPage } from './groceryitemdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroceryitemdetailPageRoutingModule
  ],
  declarations: [GroceryitemdetailPage]
})
export class GroceryitemdetailPageModule {}
