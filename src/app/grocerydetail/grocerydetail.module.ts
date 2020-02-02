import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrocerydetailPageRoutingModule } from './grocerydetail-routing.module';

import { GrocerydetailPage } from './grocerydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrocerydetailPageRoutingModule
  ],
  declarations: [GrocerydetailPage]
})
export class GrocerydetailPageModule {}
