import {Component, ElementRef} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'hmis-management-app',
    template: ` <div>
                    Aqui estamos
                    <div class="col-md-2 left-side-menu"><d2-secondarymenu></d2-secondarymenu></div>  <!-- directive that load the vertical menu -->
                    <div class="col-md-10"><router-outlet></router-outlet></div>
                </div>`
})
export class AppComponent {
    constructor(private router: Router, private element: ElementRef) {
        console.log("entering the component");
        /**
         this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                element.nativeElement.scrollIntoView();
            }
        });
         */
    }
}
