import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyhistoryPage } from './myhistory.page';

const routes: Routes = [
  {
    path: '',
    component: MyhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyhistoryPageRoutingModule {}
