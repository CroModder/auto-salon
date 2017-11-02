import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-details-modal',
  templateUrl: 'details-modal.html',
})
export class DetailsModalPage {
  details;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.details = this.navParams.get('carDetails');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
