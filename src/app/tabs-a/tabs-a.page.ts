import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tabs-a',
    templateUrl: 'tabs-a.page.html',
    styleUrls: ['tabs-a.page.scss']
})
export class TabsAPage {
    constructor(
        public navCtrl: NavController
    ) {
        //
    }

    navToTabsB() {
        this.navCtrl.navigateForward('/tabs-b');
    }
}
