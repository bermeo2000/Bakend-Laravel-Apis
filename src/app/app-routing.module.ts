import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ProvinciComponent } from './components/provinci/provinci.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'registro', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'animals', component:ProvinciComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
