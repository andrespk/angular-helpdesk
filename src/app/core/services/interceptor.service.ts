import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/access-control/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.service.getToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.service.getToken()
        }
      });
    }
    return next.handle(req);
  }

  constructor(private service: AuthService) { }
}
