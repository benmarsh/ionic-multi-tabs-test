import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-a1',
  templateUrl: 'tab-a1.page.html',
  styleUrls: ['tab-a1.page.scss']
})
export class TabA1Page {
    constructor(
        public navCtrl: NavController
    ) {
        //
    }

    navToTabA1Sub() {
        this.navCtrl.navigateForward('tabs-a/tab-a1/tab-a1-sub');
    }
}
