import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponentComponent} from "./component/main-component/main-component.component";
import {BookedComponent} from "./component/booked/booked.component";

const routes: Routes = [
  {path:"",component:MainComponentComponent},
  {path:"booked",component:BookedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
