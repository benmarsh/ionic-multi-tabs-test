import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tab-b1',
    templateUrl: 'tab-b1.page.html',
    styleUrls: ['tab-b1.page.scss']
})
export class TabB1Page {
    constructor(
        public navCtrl: NavController
    ) {
        //
    }

    navToTabB1Sub() {
        this.navCtrl.navigateForward('tabs-b/tab-b1/tab-b1-sub');
    }
}
