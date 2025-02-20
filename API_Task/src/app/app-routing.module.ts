import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCallComponent } from './components/api-call/api-call.component';

const routes: Routes = [
  {
    path:'', component:ApiCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
