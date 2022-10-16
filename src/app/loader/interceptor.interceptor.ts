import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    public _loaderService:LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(
        ()=>{
          this._loaderService.isLoading.next(false);
        }
        )
    );
  }
}
