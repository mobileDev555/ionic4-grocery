import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysupportPage } from './mysupport.page';

const routes: Routes = [
  {
    path: '',
    component: MysupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysupportPageRoutingModule {}
