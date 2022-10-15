import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredintsFormComponent } from './components/ingredints-form/ingredints-form.component';
import { IngDetailsComponent } from './components/ing-details/ing-details.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
