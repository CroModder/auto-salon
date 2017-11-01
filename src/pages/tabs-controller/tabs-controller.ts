import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PocetnaPage } from '../pocetna/pocetna';
import { InfoPage } from '../info/info';
import { PonudaPage } from '../ponuda/ponuda';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PocetnaPage;
  tab2Root: any = InfoPage;
  tab3Root: any = PonudaPage;
  constructor(public navCtrl: NavController) {
  }
  
}
