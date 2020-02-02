import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mynotification',
  templateUrl: './mynotification.page.html',
  styleUrls: ['./mynotification.page.scss'],
})
export class MynotificationPage implements OnInit {

  constructor() { }

  public notificationList: any[] = [
    { name: "Anton Giag", target: "Harvey Specter wants to join", item_name: "your circle", requestTime: '2 hours', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", target: "Harvey Specter picked up", item_name: "an item from your list", requestTime: '22 hours', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", target: "Harvey Specter picked up", item_name: "an item from your list", requestTime: '20 mins',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", target: "Harvey Specter picked up", item_name: "an item from your list", requestTime: '2 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", target: "Harvey Specter picked up", item_name: "your circle", requestTime: '4 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", target: "Harvey Specter picked up", item_name: "an item from your list", requestTime: '1 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", target: "Harvey Specter picked up", item_name: "an item from your list", requestTime: '6 hours', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", target: "Harvey Specter picked up", item_name: "your circle", requestTime: '9 hours', img:'../../assets/icon/icon_avatar.png' }];
  

  ngOnInit() {
  }

}
