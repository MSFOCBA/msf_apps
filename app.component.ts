import {Component, ElementRef} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'hmis-management-app',
    template: ` <div>
                    <div class="col-md-2 left-side-menu">
                        <d2-secondary-menu></d2-secondary-menu>
                    </div>  <!-- directive that load the vertical menu -->
                    <div class="col-md-10"><router-outlet></router-outlet></div>
                </div>`
})
export class AppComponent {
    constructor(private router: Router, private element: ElementRef, translate: TranslateService) {
        console.log("entering the component");
         this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                element.nativeElement.scrollIntoView();
            }
        });

        translate.addLangs(['es', 'fr', 'en']);

        translate.setDefaultLang('en');
        translate.use('en');

        /**

        jQuery.ajax({ url: urlApi + 'userSettings/keyUiLocale/', contentType: 'text/plain', method: 'GET', dataType: 'text', async: false}).done(function (uiLocale) {
            if (uiLocale == ''){
                $translateProvider.determinePreferredLanguage();
            }
            else{
                $translateProvider.use(uiLocale);
            }
        }).fail(function () {
            $translateProvider.determinePreferredLanguage();
        });
         */
    }
}
