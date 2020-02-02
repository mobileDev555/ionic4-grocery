import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";


@Component({
  selector: 'app-groceryitemdetail',
  templateUrl: './groceryitemdetail.page.html',
  styleUrls: ['./groceryitemdetail.page.scss'],
})
export class GroceryitemdetailPage implements OnInit {

  constructor(public navCtrl: NavController, public location: Location) { }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
