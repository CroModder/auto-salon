import { Component } from '@angular/core';
import { DetailsModalPage } from '../details-modal/details-modal';
import { NavController, ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ponuda',
  templateUrl: 'ponuda.html'
})
export class PonudaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  presentDetailsModal() {
    const detailsModal = this.modalCtrl.create(DetailsModalPage, { userId: 8675309 });
    detailsModal.present();
  }
  
}
