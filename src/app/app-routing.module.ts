import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { RecieveComponent } from './recieve/recieve.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'start', component: StartComponent },
  { path: 'recieve', component: RecieveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
