import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NavController, IonRefresher, ToastController } from "@ionic/angular";
import { ToastserviceService } from '../provider/toastservice.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  phone_number: string="";
  headers: any = {};
  constructor(
    private http: HttpClient,
    public httpNative: HTTP,
    public navCtrl: NavController, 
    private storage: Storage,
    private toastService: ToastserviceService) { 
      
      this.storage.get("user_phone").then((val) => {this.phone_number = val})
    }

//=================== profile upload ==========
  addProfile(itemForm, imageBuffer) {
    return new Promise( (resolve, reject) => {
      const formValues = itemForm.form.value;
      const formdata = new FormData();
      if (imageBuffer) {
          formdata.append('profileImage', new Blob([imageBuffer], { type: 'image/jpeg'}));
      }
      formdata.append('name', formValues.name);
      
      this.headers =  { "phone": this.phone_number }
      this.http.post(this.toastService.URL_profile_pic_update, formdata, { headers: this.headers }).toPromise()
         .then(
           res => resolve(res),
           err => reject(err)
           );
    });
  }
  //================  Circle User List getting ==============
  getCircleUserList() {
    return new Promise( (resolve, reject) => {
      this.headers =  { 
        "phone": "1-7202241663",
        "Content-Type": "application/json" 
      }
      let postData = {};
      this.httpNative.get(this.toastService.URL_get_circle_all, postData, this.headers)
          .then(
            res => resolve(res),
            err => reject(err)
          );
    });
  }
  //================  OTP getting ==============
  sendOTP() {
    return new Promise( (resolve, reject) => {
      this.headers =  { "phone": this.phone_number }
      let body = {};
      this.http.post(this.toastService.URL_send_otp, body, { headers: this.headers }).toPromise()
        .then(
          res => resolve(res),
          err => reject(err)
          );
    });
  }
  //================  OTP validating ==============
  validateOTP(otpVal) {
    return new Promise( (resolve, reject) => {
      this.headers =  { 
        "phone": this.phone_number,
        "Content-Type": "application/json" 
      }
      let body = {
        "otp": otpVal
      };
      this.http.post(this.toastService.URL_send_otp, body, { headers: this.headers }).toPromise()
        .then(
          res => resolve(res),
          err => reject(err)
          );
    });
  }
  //===================== grocery new Item add ==================
  addItem(itemForm, m1, m2, m3) {
    return new Promise( (resolve, reject) => {
      const formValues = itemForm.form.value;
      const formdata = new FormData();
      // if(imageFiles) {
      //   Array.from(imageFiles).forEach(image => {
      //     // console.log(image);
      //     formdata.append('itemImages', image as File);
      //   });
      // }
      if (m1) {
        formdata.append('itemImages', new Blob([m1], { type: 'image/jpeg'}));
      }
      if (m2) {
        formdata.append('itemImages', new Blob([m2], { type: 'image/jpeg'}));
      }
      if (m3) {
        formdata.append('itemImages', new Blob([m3], { type: 'image/jpeg'}));
      }
  
      formdata.append('name', formValues.name);
      formdata.append('description', formValues.description);
      formdata.append('quantity', formValues.quantity);
      formdata.append('unit', formValues.unit);
      if(formValues.shared == undefined) formValues.shared = false;
      formdata.append('shared', formValues.shared);
      formdata.append('shops', formValues.shops);
      formdata.append('tags', formValues.tags);
      formdata.append('status', "private");
      formdata.append('pickUpDate', formValues.pickUpDate);
      
      console.log(formdata);

      this.headers =  { "phone": this.phone_number }
      this.http.post(this.toastService.URL_create_item, formdata, { headers: this.headers }).toPromise()
      .then(        
        res => resolve(res),
        err => reject(err)
        );
    });
  }
}
