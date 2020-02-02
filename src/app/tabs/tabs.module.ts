import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MynotificationPageModule } from '../mynotification/mynotification.module';
import { MygroceryPageModule } from '../mygrocery/mygrocery.module';
import { MyhistoryPageModule } from '../myhistory/myhistory.module';
import { MysupportPageModule } from '../mysupport/mysupport.module';
import { MyprofilePageModule } from '../myprofile/myprofile.module';
import { MycirclePageModule } from '../mycircle/mycircle.module';
import { GrocerydetailPageModule } from '../grocerydetail/grocerydetail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MynotificationPageModule,
    MygroceryPageModule,
    MyhistoryPageModule,
    MysupportPageModule,
    MyprofilePageModule,
    MycirclePageModule,
    GrocerydetailPageModule

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
