import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CVResolver } from './features/resolvers/cv.resolver';
import { CVService } from './features/services/cv.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),CVResolver,CVService
  ]
};