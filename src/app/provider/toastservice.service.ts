import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, IonRefresher, ToastController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastserviceService {

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public http: HttpClient,
    public httpNative: HTTP
  ) { }

  // headers = new HttpHeaders();
  headers = { "Content-Type": "application/json" }

  
  main_url = "http://35.229.80.117";
  URL_create_user = "http://35.229.80.117/api/v1/shoppers/add";
  URL_send_otp = "http://35.229.80.117/api/v1/user/updateOTP";
  URL_validate_otp = "http://35.229.80.117/api/v1/user/validateOTP";
  URL_create_item = "http://35.229.80.117/api/v1/shoppinglist/add";
  URL_store_checkin = "http://35.229.80.117/api/v1/shoppers/checkin";
  URL_profile_pic_update = "http://35.229.80.117/api/v1/shoppers/updateProfile";
  URL_buddy_item = "http://35.229.80.117/api/v1/shoppinglist/buddyitems";
  URL_my_item = "http://35.229.80.117/api/v1/shoppinglist/myitems";
  URL_my_item_shop = "http://35.229.80.117/api/v1/shoppinglist/:shop/myitems?";
  URL_get_circle_all = "http://35.229.80.117/api/v1/circles/all";

      

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
