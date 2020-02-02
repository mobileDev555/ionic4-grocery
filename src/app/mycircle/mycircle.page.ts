import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Contacts, ContactFieldType, ContactFindOptions } from '@ionic-native/contacts';
// import { Contacts } from '@ionic-native/contacts/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastserviceService } from '../provider/toastservice.service';
import { UploadserviceService } from '../provider/Uploadservice.service';

@Component({
  selector: 'app-mycircle',
  templateUrl: './mycircle.page.html',
  styleUrls: ['./mycircle.page.scss'],
})
export class MycirclePage implements OnInit {
  everybody;
  public contactList: any[] = [];
  public friendsList: any[] = [];
  public requestList: any[] = [
    { name: "Anton Giag", company: "Siemens", unit: "Bottle", requestDay: '2 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", company: "Siemens", unit: "Bottle", requestDay: '22 hours', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", company: "Siemens", unit: "Bottle", requestDay: '20 mins',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", company: "Siemens", unit: "Bottle", requestDay: '2 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", company: "Siemens", unit: "Bottle", requestDay: '4 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", company: "Siemens", unit: "Bottle", requestDay: '1 days', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", company: "Siemens", unit: "Bottle", requestDay: '6 hours', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", company: "Siemens", unit: "Bottle", requestDay: '9 hours', img:'../../assets/icon/icon_avatar.png' }];

  public circleList: any[] = [
    { name: "Anton Giag", company: "Siemens", unit: "Bottle", price: '2', img:'../../assets/icon/icon_avatar.png' },
    { name: "Loy Saman", company: "Siemens", unit: "Bottle", price: '22', img:'../../assets/icon/icon_avatar.png' },
    { name: "Banna Olka", company: "Siemens", unit: "Bottle", price: '-220',  img:'../../assets/icon/icon_avatar.png' },
    { name: "Olena Shpov", company: "Siemens", unit: "Bottle", price: '200', img:'../../assets/icon/icon_avatar.png' },
    { name: "Pepsi Pepsi", company: "Siemens", unit: "Bottle", price: '-40', img:'../../assets/icon/icon_avatar.png' },
    { name: "Food Food", company: "Siemens", unit: "Bottle", price: '10', img:'../../assets/icon/icon_avatar.png' },
    { name: "Chockn Chi", company: "Siemens", unit: "Bottle", price: '-600', img:'../../assets/icon/icon_avatar.png' },
    { name: "Orange Jui", company: "Siemens", unit: "Bottle", price: '90', img:'../../assets/icon/icon_avatar.png' }];
  
  constructor(
    public contacts: Contacts, 
    private sanitizer: DomSanitizer,
    private toastService: ToastserviceService,
    private uploadService: UploadserviceService
    ) {
    //================== contact list from phone ================
    this.contacts.find(["displayName", "phoneNumbers","photos"], {multiple: true, hasPhoneNumber: true}).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          if(contacts[i].displayName !== null) {
            var contact = {};
            contact["name"]   = contacts[i].displayName;
            contact["number"] = contacts[i].phoneNumbers[0].value;
            if(contacts[i].photos != null) {
              contact["image"] = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
            } else {
              contact["image"] = "../../assets/png/ic_profile_green.png";
            }                     
            this.contactList.push(contact);
          }
        }
    });
    
    this.uploadService.getCircleUserList().then((result: any) => {
      if(result.status == 200){

        console.log("====friend=="+result.data);
        console.log("====friend frrr=="+result.data.Friends);
          this.friendsList = result.data.Friends;
            this.friendsList.forEach(service_data => {
            let service_temp = {
              _id: service_data._id,
              isFamily: service_data.isFamily,
              status: service_data.status,
              friend: service_data.friend
            }
            console.log("====="+service_temp);
            this.friendsList.push(service_temp);
          });
      }
    })
    .catch(err => console.log(err));
  }

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  getCircleUserList() {
      this.uploadService.getCircleUserList().then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }  
}

