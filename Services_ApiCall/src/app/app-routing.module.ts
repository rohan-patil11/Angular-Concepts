import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyapiComponent } from './components/dummyapi/dummyapi.component';

const routes: Routes = [
  {
    path:'' , component:DummyapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
