import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MynotificationPage } from './mynotification.page';

const routes: Routes = [
  {
    path: '',
    component: MynotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MynotificationPageRoutingModule {}
