import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor() { }

  public userList: any[] = [
    { name: "Anton", company: "@Kroger", price:"-$180", color:"danger", ymd: "21st March", payAmount: '2', img:'../../assets/png/avatar2.png' },
    { name: "Loy", company: "@Kroger", price:"+$200", color:"success", ymd: "21st March", payAmount: '22', img:'../../assets/png/avatar1.png' },
    { name: "Olka", company: "@Kroger", price:"0",  color:"danger", ymd: "21st March", payAmount: '20',  img:'../../assets/png/avatar3.png' },
    { name: "Anton", company: "@Kroger", price:"-$180", color:"danger", ymd: "21st March", payAmount: '2', img:'../../assets/png/avatar2.png' },
    { name: "Loy", company: "@Kroger", price:"+$200", color:"success", ymd: "21st March", payAmount: '22', img:'../../assets/png/avatar1.png' },
    { name: "Olka", company: "@Kroger", price:"0", color:"danger", ymd: "21st March", payAmount: '20',  img:'../../assets/png/avatar3.png' },
    { name: "Anton", company: "@Kroger", price:"-$180", color:"danger", ymd: "21st March", payAmount: '2', img:'../../assets/png/avatar2.png' },
    { name: "Loy", company: "@Kroger", price:"+$200", color:"success", ymd: "21st March", payAmount: '22', img:'../../assets/png/avatar1.png' }];

  ngOnInit() {
  }

}
