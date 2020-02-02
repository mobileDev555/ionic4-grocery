import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'grocery', loadChildren: './mygrocery/mygrocery.module#MygroceryPageModule' },
  { path: 'circle', loadChildren: './mycircle/mycircle.module#MycirclePageModule' },
  { path: 'history', loadChildren: './myhistory/myhistory.module#MyhistoryPageModule' },
  { path: 'profile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'notification_alert', loadChildren: './mynotification/mynotification.module#MynotificationPageModule' },
  { path: 'support', loadChildren: './mysupport/mysupport.module#MysupportPageModule' },
  { path: 'addgrocery', loadChildren: './addgrocery/addgrocery.module#AddgroceryPageModule' },
  { path: 'grocerydetail', loadChildren: './grocerydetail/grocerydetail.module#GrocerydetailPageModule'},
  { path: 'groceryitemdetail', loadChildren: './groceryitemdetail/groceryitemdetail.module#GroceryitemdetailPageModule'},
  { path: 'start', loadChildren: './start/start.module#StartPageModule'},
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },


  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'signup1',
    loadChildren: () => import('./signup1/signup1.module').then( m => m.Signup1PageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'signup3',
    loadChildren: () => import('./signup3/signup3.module').then( m => m.Signup3PageModule)
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
