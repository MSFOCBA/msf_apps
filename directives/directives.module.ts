import {NgModule} from "@angular/core";
import {D2SecondaryMenu} from "./menu/menuController";
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        TranslateModule
    ],
    declarations: [
        D2SecondaryMenu
    ],
    exports: [
        D2SecondaryMenu
    ]
})

export class DirectivesModule {
    constructor() {}
}