import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrocerydetailPage } from './grocerydetail.page';

const routes: Routes = [
  {
    path: '',
    component: GrocerydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrocerydetailPageRoutingModule {}
