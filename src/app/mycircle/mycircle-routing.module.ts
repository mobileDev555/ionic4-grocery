import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycirclePage } from './mycircle.page';

const routes: Routes = [
  {
    path: '',
    component: MycirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycirclePageRoutingModule {}
