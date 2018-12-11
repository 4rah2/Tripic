import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

//***********  ionic-native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'IntroPage';
  menu:Array<any> = [];
  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.menu = [

        {
          showDetails: true,
          items:  [
              //{name:'프로필',component:'AfterLoginPage'},
              //{name:'로그인',component:'MainPage'},
              //{name:'회원가입',component:'RegisterPage'},
              //{name:'비밀번호 찾기',component:'ForgotPage'},
              {name:'나만의 픽',component: 'Category1Page'},
              //{name:'개발중',component: 'MasonryPage'},
              {name:'컨텐츠별',component:'Category2Page'},
              {name:'개발진 프로필',component: 'ProfilePage'},
            // {name:'트렌디 플레이스',component: 'GalleryPage'},
            // {name:'Google map',component: 'MapPage'},
            // {name:'Restaurant',component:'Category3Page'}, // app3 folder
            // {name:'Profile2',component: 'Profile2Page'},
            // {name:'Profile3',component: 'Profile3Page'},
            // {name:'Profile4', component: 'Profile4Page'},
            // {name:'Search',component:'SearchPage'},
          ]
        }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  toggleDetails(menu) {
    if (menu.showDetails) {
        menu.showDetails = false;
        menu.icon = 'ios-add-outline';
    } else {
        menu.showDetails = true;
        menu.icon = 'ios-remove-outline';
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // page.component = item array.component -->
    //this.nav.setRoot(page.component);
    this.nav.setRoot(page.component);
  }

}
