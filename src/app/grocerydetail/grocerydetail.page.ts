  import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-grocerydetail',
  templateUrl: './grocerydetail.page.html',
  styleUrls: ['./grocerydetail.page.scss'],
})
export class GrocerydetailPage implements OnInit {
  constructor(public navCtrl: NavController, public location: Location) { }

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  public honeyList: any[] = [
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Apple Juice2", company: "Siemens", unit: "Bottle", count: '22', img:'../../assets/icon/splash2.jpg' },
    { title: "Banna Juice3", company: "Siemens", unit: "Bottle", count: '20',  img:'../../assets/icon/splash3.jpg' },
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Pepsi", company: "Siemens", unit: "Bottle", count: '4', img:'../../assets/icon/splash2.jpg' },
    { title: "Food", company: "Siemens", unit: "Bottle", count: '1', img:'../../assets/icon/splash3.jpg' },
    { title: "Chicken", company: "Siemens", unit: "Bottle", count: '6', img:'../../assets/icon/splash1.jpg' },
    { title: "Orange Juice8", company: "Siemens", unit: "Bottle", count: '9', img:'../../assets/icon/splash1.jpg' }];

  public buddyList: any[] = [
    { title: "Buddy Juice1", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/splash1.jpg' },
    { title: "Apple Juice2", company: "Siemens", unit: "Bottle", count: '22', img:'../../assets/icon/splash2.jpg' },
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Pepsi", company: "Siemens", unit: "Bottle", count: '4', img:'../../assets/icon/splash2.jpg' },
    { title: "Food", company: "Siemens", unit: "Bottle", count: '1', img:'../../assets/icon/splash3.jpg' },
    { title: "Chicken", company: "Siemens", unit: "Bottle", count: '6', img:'../../assets/icon/splash1.jpg' },
    { title: "Orange Juice8", company: "Siemens", unit: "Bottle", count: '9', img:'../../assets/icon/splash1.jpg' }];

  public presentUserInfoAlert(user: any): void {
    console.log(JSON.stringify(user));
  }

  gotoDetail() {
    this.navCtrl.navigateForward("/grocerydetail");
  }
  goBack() {
    this.location.back();
  }
  gotoItemDetail() {
    console.log("grocery-store detail");
    this.navCtrl.navigateForward("/groceryitemdetail");
  }
  ngOnInit() {
  }  
}
