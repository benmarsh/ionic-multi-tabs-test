import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsAPageRoutingModule } from './tabs-a.router.module';

import { TabsAPage } from './tabs-a.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsAPageRoutingModule
  ],
  declarations: [TabsAPage]
})
export class TabsAPageModule {}
