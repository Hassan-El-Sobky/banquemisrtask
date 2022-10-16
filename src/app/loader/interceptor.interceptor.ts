import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,finalize } from 'rxjs';
import { LoaderService } from './loader.service';
import { IngredintsService } from '../state/ingredints.state';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    public _loaderService:LoaderService,
    public _ingState:IngredintsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loaderService.isLoading.next(true);
    this._ingState.errorInRequest.next(false);
    return next.handle(request).pipe(
      finalize(
        ()=>{
          this._loaderService.isLoading.next(false);
        }
        )
    );
  }
}
