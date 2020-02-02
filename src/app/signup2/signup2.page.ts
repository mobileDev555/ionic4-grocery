import { Component, OnInit, Input, ViewChild,ElementRef,Renderer } from '@angular/core';
import { timer } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, IonRefresher, ModalController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { ToastserviceService } from '../provider/toastservice.service';
import { UploadserviceService } from '../provider/Uploadservice.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

  @ViewChild('num1', {static: false}) numInput1:ElementRef

  val = 10;
  flag = false;
  phoneNumber: any;  
  headers: any = {};
  OTP: any;
  num1:number; num2:number; num3:number; num4:number; 

  constructor(
    private activeRoute: ActivatedRoute,
    public navCtrl: NavController, 
    public httpNative: HTTP,
    private toastService: ToastserviceService,
    private uploadService: UploadserviceService,
    private renderer: Renderer,
    private elementRef: ElementRef,
    private modalCtrl: ModalController
    ) {
    timer(3000).subscribe(() => (this.flag = true)); 
  }

  resendSMS() {
    if(this.num1 != undefined && this.num2 != undefined && this.num3!= undefined && this.num4 != undefined) {
      this.OTP = this.num1+this.num1+this.num1+this.num4
      this.uploadService.validateOTP(this.OTP).then(res => {
        console.log(res);
      }).catch(err => console.log(err));
    } else {
      this.toastService.presentToast("Please enter OTP");
    }
  }
  


  ngOnInit() {
    this.uploadService.sendOTP()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

}
