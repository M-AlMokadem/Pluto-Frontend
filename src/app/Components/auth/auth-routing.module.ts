import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  }
  // {
  //   path: 'SignUp',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'forgetPassword/:id/:code',
  //   component: ForgetPasswordComponent
  // },
  // {
  //   path: 'CahangePassword',
  //   component: ResetPasswordComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
