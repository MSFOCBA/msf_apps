import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: 'competitions',
        loadChildren: './competitions/competitions.module#CompetitionsModule'
    },
    {path: '**', redirectTo: 'welcome'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}