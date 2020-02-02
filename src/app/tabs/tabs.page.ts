import { Component } from '@angular/core';

@Component({
  selector: 'app-page-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  flag: boolean = false;

  tabSelect(num:number) {
    if(num == 4) this.flag = true;
    else this.flag = false;
  }
  
}
