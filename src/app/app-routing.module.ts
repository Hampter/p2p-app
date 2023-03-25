import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { InputComponent } from './input/input.component';
import { RecieveComponent } from './recieve/recieve.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'recieve', component: RecieveComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
