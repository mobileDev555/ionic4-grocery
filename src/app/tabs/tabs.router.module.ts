import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'grocery',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mygrocery/mygrocery.module').then(m => m.MygroceryPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../myhistory/myhistory.module').then(m => m.MyhistoryPageModule)
          }
        ]
      },
      {
        path: 'circle',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mycircle/mycircle.module').then(m => m.MycirclePageModule)
          }
        ]
      },
      {
        path: 'notification_alert',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mynotification/mynotification.module').then(m => m.MynotificationPageModule)
          }
        ]
      },
      {
        path: 'grocerydetail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../grocerydetail/grocerydetail.module').then(m => m.GrocerydetailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/grocery',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/grocery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
