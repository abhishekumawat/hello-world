import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = sessionStorage.getItem('token');
    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + localToken)
    });
    return next.handle(request).pipe(
      catchError((errRes: HttpErrorResponse) => {
        if (errRes.status === 400) {
          return throwError(() => errRes.error.message);
        }
        return throwError(() => new Error('Error in Network'));
      })
    );

    

  }

}
