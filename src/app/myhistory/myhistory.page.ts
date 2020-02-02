import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-myhistory',
  templateUrl: './myhistory.page.html',
  styleUrls: ['./myhistory.page.scss'],
})
export class MyhistoryPage implements OnInit {

  constructor() { }

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  public toPayList: any[] = [
    { name: "Anton Giag", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '22', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '20',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '4', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '1', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '6', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", company: "@Kroger", price:"-$180", ymd: "21st March", payAmount: '9', img:'../../assets/icon/icon_avatar.png' }];

  public toReceiveList: any[] = [
    { name: "Anton Giag", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '22', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '20',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '4', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '1', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '6', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '9', img:'../../assets/icon/icon_avatar.png' }];

  public settledList: any[] = [
    { name: "Anton Giag", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '22', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '20',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '4', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '1', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '6', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", company: "@Kroger", price:"$180", ymd: "21st March", payAmount: '9', img:'../../assets/icon/icon_avatar.png' }];
  
  

  public presentUserInfoAlert(user: any): void {
    console.log(JSON.stringify(user));
  }

  ngOnInit() {
  }  
}

