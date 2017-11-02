import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DetailsModalPage } from '../details-modal/details-modal';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-ponuda',
  templateUrl: 'ponuda.html'
})
export class PonudaPage {
  cars = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('view loaded')
    this.http.get('assets/data/cars.json').map(res => res.json())
      .subscribe(data => {this.cars = data})
  }

  presentDetailsModal(id) {
    let carDetails = this.cars.find( element => element.id === id);
    const detailsModal = this.modalCtrl.create(DetailsModalPage, { carDetails });
    detailsModal.present();
    console.log(id);
  }
  
}
