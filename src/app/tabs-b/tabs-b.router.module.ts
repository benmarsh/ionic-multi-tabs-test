import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsBPage } from './tabs-b.page';

const routes: Routes = [
    {
        path: 'tabs-b',
        component: TabsBPage,
        children: [
            {
                path: 'tab-b1',
                children: [
                    { path: '', loadChildren: '../tab-b1/tab-b1.module#TabB1PageModule' },
                    { path: 'tab-b1-sub', loadChildren: '../tab-b1-sub/tab-b1-sub.module#TabB1SubPageModule' }
                ]
            },
            {
                path: 'tab-b2',
                children: [
                    { path: '', loadChildren: '../tab-b2/tab-b2.module#TabB2PageModule' }
                ]
            },
            { path: '', redirectTo: '/tabs-b/tab-b1', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/tabs-b/tab-b1', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsBPageRoutingModule {
}
