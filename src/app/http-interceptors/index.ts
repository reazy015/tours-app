import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtAuthInterceptor} from './jwt-auth.interceptor';


export const httpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true}
];
