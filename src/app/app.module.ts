import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredintsFormComponent } from './components/ingredints-form/ingredints-form.component';
import { IngDetailsComponent } from './components/ing-details/ing-details.component';
import { InterceptorInterceptor } from './loader/interceptor.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    IngredintsFormComponent,
    IngDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
   
   

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandlerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
