import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { userInterceptor } from './interceptor/user-interceptor';
import { loaderInterceptor } from './interceptor/loader-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    provideHttpClient(withInterceptors([userInterceptor])) 
    
  ]
};
