import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,   // ✅ KEEP existing config (routing etc.)
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()   // ✅ ADD HTTP HERE
  ]
}).catch((err) => console.error(err));