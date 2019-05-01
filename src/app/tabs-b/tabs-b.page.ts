import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tabs-b',
    templateUrl: 'tabs-b.page.html',
    styleUrls: ['tabs-b.page.scss']
})
export class TabsBPage {
    constructor(
        public navCtrl: NavController
    ) {
        //
    }

    navToTabsA() {
        this.navCtrl.navigateBack('/tabs-a');
    }
}
