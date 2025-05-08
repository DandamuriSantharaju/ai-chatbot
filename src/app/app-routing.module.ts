import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AichatbootComponent } from './aichatboot/aichatboot.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", component:AichatbootComponent},
  {path:'login', component:LoginComponent,
     children:[
    {path:"signup", component:SignupComponent}
  ]},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
