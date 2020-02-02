import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Basket',
      url: 'tabs/tabs/grocery',
      icon: 'basket'
    },
    {
      title: 'Circle',
      url: 'tabs/tabs/circle',
      icon: 'people'
    },
    {
      title: 'History',
      url: 'tabs/tabs/history',
      icon: 'cash'
    },
    {
      title: 'Transactions',
      url: 'profile',
      icon: 'person'
    }
  ];
  public appPageBottoms = [
    {
      title: 'Support',
      url: 'support',
      icon: 'headset'
    },
    {
      title: 'Exit',
      url: '/exit',
      icon: 'exit'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
