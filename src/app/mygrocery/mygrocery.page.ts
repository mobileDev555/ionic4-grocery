import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mygrocery',
  templateUrl: './mygrocery.page.html',
  styleUrls: ['./mygrocery.page.scss'],
})
export class MygroceryPage implements OnInit {

  constructor(public navCtrl: NavController) { }

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

  public storeList: any[] = [
    { title: "Store Juice1", num1: "9",num2: "19", unit: "Bottle", count: '2', img:'../../assets/icon/splash1.jpg' },
    { title: "Apple Juice2", num1: "6", num2: "92", unit: "Bottle", count: '22', img:'../../assets/icon/splash2.jpg' },
    { title: "Banna Juice3", num1: "22", num2: "3", unit: "Bottle", count: '20',  img:'../../assets/icon/splash3.jpg' },
    { title: "Orange", num1: "32", num2: "5", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Pepsi", num1: "6", num2: "29", unit: "Bottle", count: '4', img:'../../assets/icon/splash2.jpg' },
    { title: "Food", num1: "4", num2: "23", unit: "Bottle", count: '1', img:'../../assets/icon/splash3.jpg' },
    { title: "Chicken", num1: "12", num2: "9", unit: "Bottle", count: '6', img:'../../assets/icon/splash1.jpg' },
    { title: "Orange Juice8", num1: "22", num2: "9", unit: "Bottle", count: '9', img:'../../assets/icon/splash1.jpg' }];

  public priceList: any[] = [
    { title: "Price Juice1", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/splash1.jpg' },
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Banna Juice3", company: "Siemens", unit: "Bottle", count: '20',  img:'../../assets/icon/splash3.jpg' },
    { title: "Orange", company: "Siemens", unit: "Bottle", count: '2', img:'../../assets/icon/icon_kroger.png' },
    { title: "Pepsi", company: "Siemens", unit: "Bottle", count: '4', img:'../../assets/icon/splash2.jpg' },
    { title: "Food", company: "Siemens", unit: "Bottle", count: '1', img:'../../assets/icon/splash3.jpg' },
    { title: "Chicken", company: "Siemens", unit: "Bottle", count: '6', img:'../../assets/icon/splash1.jpg' },
    { title: "Orange Juice8", company: "Siemens", unit: "Bottle", count: '9', img:'../../assets/icon/splash1.jpg' }];
      

  public presentUserInfoAlert(user: any): void {
    console.log(JSON.stringify(user));
  }

  gotoDetail() {
    console.log("ok");
    this.navCtrl.navigateForward("/grocerydetail");
  }
  ngOnInit() {
  }  
}
