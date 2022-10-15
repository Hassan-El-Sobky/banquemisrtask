import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngDetailsComponent } from './components/ing-details/ing-details.component';
import { IngredintsFormComponent } from './components/ingredints-form/ingredints-form.component';

const routes: Routes = [
  {path:'',component:IngredintsFormComponent},
  {path:'details',component:IngDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
