import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsBPageRoutingModule } from './tabs-b.router.module';

import { TabsBPage } from './tabs-b.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsBPageRoutingModule
  ],
  declarations: [TabsBPage]
})
export class TabsBPageModule {}
