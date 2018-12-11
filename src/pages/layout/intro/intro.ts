import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "<strong>나만의 맞춤형 여행 플랫폼, Tripic!",
      description: "Tripic에 오신 것을 환영합니다!",
      image: "./assets/tripic-logo.png",
      color: "#E74809"
    },
    {
      title: "<strong>당신만의 여행지를 추천해 드립니다.",
      description: "당신의 취향에 맞는 여행지를 둘러보세요.",
      image: "./assets/tripic-logo.png",
      color: "#ce4008"
    },
    {
      title: "<strong>사진으로 선명해지는 여행을 즐기세요.",
      description: "당신에게 적합한 카메라를 추천해 드립니다.",
      image: "./assets/tripic-logo.png",
      color: "#b63907"
    },
    {
      title: "<strong>추억이 생생해지는 여행,<br>Tripic과 함께하세요.",
      description: "Tripic과 함께 선명한 추억을 만드세요.",
      image: "./assets/tripic-logo.png",
      color: "#9d3106"

    }
  ];


  constructor(public navCtrl: NavController) {
  }

}
