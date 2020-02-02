import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonRefresher } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { ToastserviceService } from '../provider/toastservice.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {

  public phoneNumber: any;
  public countryCode: any;
  private err_msg: any;
  checker: boolean = true;
  headers: any = {};
  
  constructor(
    public navCtrl: NavController, 
    public http: HttpClient,
    private toastService: ToastserviceService,
    private storage: Storage,
    public httpNative: HTTP) {}

    
  verifyPhone() {
    this.err_msg = "";
    if(this.countryCode == undefined) {
      this.err_msg = "Please enter country code";
      this.countryCode.setFocus();
    } else if(this.phoneNumber == undefined) this.err_msg = "Please enter your phone number";
    else {
      let postData = {
        "phone": this.countryCode + "-" + this.phoneNumber
      } 

      let navigationExtras: NavigationExtras = {
        queryParams: {
            phoneNumber: this.phoneNumber,
            countryCode: this.countryCode
        }
      };
      
      let phone = this.countryCode + "-" + this.phoneNumber;
      this.storage.set('user_phone', phone);
      
      this.httpNative.post(this.toastService.URL_create_user, postData, this.toastService.headers)
          .then(data => {
            if(data.status == 200){
              this.navCtrl.navigateForward(['/signup3']);
            }
            else{
              this.toastService.presentToast(data);
            }
      });
    }
  }

  
  ngOnInit() {
  }

}
