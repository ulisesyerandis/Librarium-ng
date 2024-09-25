import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import UserComponent from './Component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import  StoreComponent  from './Component/Store/store.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import LayoutComponent from './pages/layout/layout.component';

export const appConfig: ApplicationConfig = 
{
  providers: 
  [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, FormGroup, FormControl, Validators,),
    UserComponent, StoreComponent, LayoutComponent
  ]
};
