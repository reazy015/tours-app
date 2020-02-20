import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'x-auth-token': currentUser.token
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'x-auth-token': 'NO TOKEN'
        }
      });
    }
    console.log(request);
    return next.handle(request);
  }
}
