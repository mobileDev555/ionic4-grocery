import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryitemdetailPage } from './groceryitemdetail.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryitemdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryitemdetailPageRoutingModule {}
