import { Component } from '@angular/core';
import { LoadingController, ToastController} from 'ionic-angular';
import { CallsService } from '../provider/calls.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prenkList: any;
  remainingCallCredits: number;
  currentPage: any;
  constructor(
    public loader: LoadingController,
    public toastCtrl: ToastController,
    public callsService: CallsService
  /*  public callsService: CallsService,
    public usersService: UserService,
    public loader: LoadingController,
    public platform: Platform,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing,
    public toastCtrl: ToastController*/
  ) {
    this.getList();
    // this.RemainingCallCredits();

    localStorage.setItem('currentPage', 'HomePage');
    this.currentPage = localStorage.getItem('currentPage');
  }
  ionViewWillLeave() {
    localStorage.removeItem('currentPage');
  }
  ionViewWillEnter() {
    localStorage.setItem('currentPage', 'HomePage');
    this.currentPage = localStorage.getItem('currentPage');
    this.remainingCallCredits = +localStorage.getItem('credits');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  getList() {
    var Loader = this.loader.create({
      content: 'Wait..'
    });
    Loader.present();
    this.callsService.getPrankList().subscribe(
      response => {
        this.prenkList = response.data;
        Loader.dismiss();
      },
      error => {
        Loader.dismiss();
        this.presentToast('Server Not Response!');
      }
    );
  }
}
