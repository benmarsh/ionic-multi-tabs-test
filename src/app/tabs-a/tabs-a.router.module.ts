import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsAPage } from './tabs-a.page';

const routes: Routes = [
    {
        path: 'tabs-a',
        component: TabsAPage,
        children: [
            {
                path: 'tab-a1',
                children: [
                    { path: '', loadChildren: '../tab-a1/tab-a1.module#TabA1PageModule' },
                    { path: 'tab-a1-sub', loadChildren: '../tab-a1-sub/tab-a1-sub.module#TabA1SubPageModule' }
                ]
            },
            {
                path: 'tab-a2',
                children: [
                    { path: '', loadChildren: '../tab-a2/tab-a2.module#TabA2PageModule' }
                ]
            },
            { path: '', redirectTo: '/tabs-a/tab-a1', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/tabs-a/tab-a1', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsAPageRoutingModule {
}
