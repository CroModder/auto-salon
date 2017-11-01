import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PonudaPage } from '../ponuda/ponuda';

@Component({
  selector: 'page-pocetna',
  templateUrl: 'pocetna.html'
})
export class PocetnaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToPonuda(params){
    if (!params) params = {};
    this.navCtrl.push(PonudaPage);
  }
}
