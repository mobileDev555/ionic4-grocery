import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController , LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  phone_number: string;
  constructor(
    public modalController: ModalController,
    public navCtrl: NavController, 
    public storage: Storage) {
    this.storage.get("user_phone").then((val) => {this.phone_number = val})

    
  }

  start() {
    if(this.phone_number == undefined) {
      this.navCtrl.navigateForward(['/signup']);
    } else {
      this.navCtrl.navigateForward(['/tabs']);
    }
  }
  
  ngOnInit() {
  }

}
