import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {mergeMap, delay, retryWhen, catchError} from 'rxjs/operators';
import { IngredintsService } from '../state/ingredints.state';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor( private _ingState:IngredintsService){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                  } else {
                    this._ingState.errorInRequest.next(true);
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                  }
                  return throwError(errorMsg);
                })
        )
}
}