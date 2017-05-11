import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

console.log("Entra en main");
platformBrowserDynamic().bootstrapModule(AppModule);
